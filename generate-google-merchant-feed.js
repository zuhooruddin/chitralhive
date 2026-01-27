const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration - Update these values based on your environment
const SERVER_IP = process.env.NEXT_PUBLIC_BACKEND_API_BASE || 'https://api.chitralhive.com/';
const BASE_URL = process.env.NEXT_PUBLIC_URL || 'https://chitralhive.com';
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL || `${SERVER_IP}media/`;
const OUTPUT_FILE = path.join(__dirname, 'google-merchant-feed.xml');

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper function to format price for Google Merchant Center
// Google requires format: "XX.XX CURRENCY" where currency is 3-letter code
function formatPrice(price) {
  if (!price || price === 0 || isNaN(price)) {
    console.warn('Invalid price detected, using 0.00');
    return '0.00 PKR';
  }
  const formattedPrice = parseFloat(price).toFixed(2);
  return `${formattedPrice} PKR`;
}

// Helper function to determine availability
function getAvailability(stock) {
  if (!stock) return 'out of stock';
  const stockNum = parseFloat(stock);
  return stockNum > 0 ? 'in stock' : 'out of stock';
}

// Fetch all products from the API
async function fetchAllProducts() {
  try {
    console.log('Fetching products from API...');
    // Ensure the API base URL has the correct format
    let apiBase = SERVER_IP;
    if (!apiBase.endsWith('/')) {
      apiBase = apiBase + '/';
    }
    // Add /api/ prefix if not already present
    if (!apiBase.includes('/api/')) {
      apiBase = apiBase.replace(/\/$/, '') + '/api/';
    }
    const url = `${apiBase}getAllItems`;
    console.log(`API URL: ${url}`);
    const response = await axios.get(url, {
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Handle different response formats
    let products = [];
    if (Array.isArray(response.data)) {
      products = response.data;
    } else if (response.data?.data && Array.isArray(response.data.data)) {
      products = response.data.data;
    } else if (response.data?.items && Array.isArray(response.data.items)) {
      products = response.data.items;
    } else {
      console.error('Unexpected response format:', response.data);
      return [];
    }
    
    console.log(`Found ${products.length} products`);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    return [];
  }
}

// Generate XML feed
function generateFeed(products) {
  const timestamp = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">\n`;
  xml += `  <channel>\n`;
  xml += `    <title>Chitral Hive Products</title>\n`;
  xml += `    <link>${BASE_URL}</link>\n`;
  xml += `    <description>Product feed for Google Merchant Center</description>\n`;
  xml += `    <lastBuildDate>${timestamp}</lastBuildDate>\n\n`;

  // Filter out products that don't have required fields
  const validProducts = products.filter(product => {
    return product.name && 
           product.slug && 
           (product.salePrice || product.mrp) &&
           product.image;
  });

  console.log(`Generating feed for ${validProducts.length} valid products...`);

  validProducts.forEach((product, index) => {
    const productId = product.id || product.sku || `product-${index}`;
    let title = product.name || 'Untitled Product';
    // Ensure title is between 30-150 characters (Google recommendation)
    if (title.length < 30) {
      title = title + ' - Authentic Chitrali Product from Chitral Hive';
    }
    if (title.length > 150) {
      title = title.substring(0, 147) + '...';
    }
    
    // Ensure description is meaningful (minimum 100 characters recommended)
    // Remove HTML tags if present and clean up the description
    let description = product.description || product.name || '';
    // Remove HTML tags
    description = description.replace(/<[^>]*>/g, '').trim();
    // Remove extra whitespace
    description = description.replace(/\s+/g, ' ').trim();
    
    if (description.length < 100) {
      const baseDesc = description || product.name || 'Product';
      description = baseDesc + '. Authentic Chitrali product from Chitral, Pakistan. Available at Chitral Hive with fast delivery across Pakistan.';
    }
    // Limit to 5000 characters (Google max)
    if (description.length > 5000) {
      description = description.substring(0, 4997) + '...';
    }
    
    const slug = product.slug || '';
    const productUrl = `${BASE_URL}/product/${slug}`;
    const imageUrl = product.image 
      ? (product.image.startsWith('http') ? product.image : `${IMAGE_BASE_URL}${product.image}`)
      : '';
    const price = product.salePrice || product.mrp || 0;
    const availability = getAvailability(product.stock);
    const brand = product.manufacturer || 'Chitral Hive';
    const sku = product.sku || product.aliasCode || productId;
    const category = product.category || product.categoryName || 'Food, Beverages & Tobacco > Food Items';
    
    // Determine if we have identifiers
    const hasGtin = product.gtin && product.gtin.trim() !== '';
    const hasMpn = sku && sku.trim() !== '' && sku !== productId;
    
    xml += `    <item>\n`;
    xml += `      <g:id>${escapeXml(String(productId))}</g:id>\n`;
    xml += `      <title>${escapeXml(title)}</title>\n`;
    xml += `      <description>${escapeXml(description)}</description>\n`;
    xml += `      <link>${escapeXml(productUrl)}</link>\n`;
    
    if (imageUrl) {
      xml += `      <g:image_link>${escapeXml(imageUrl)}</g:image_link>\n`;
    }
    
    xml += `      <g:price>${formatPrice(price)}</g:price>\n`;
    xml += `      <g:availability>${availability}</g:availability>\n`;
    xml += `      <g:brand>${escapeXml(brand)}</g:brand>\n`;
    xml += `      <g:condition>new</g:condition>\n`;
    
    // Add GTIN if available (highest priority identifier)
    if (hasGtin) {
      xml += `      <g:gtin>${escapeXml(String(product.gtin))}</g:gtin>\n`;
    } else if (hasMpn) {
      // Add MPN if we have it and no GTIN
      xml += `      <g:mpn>${escapeXml(String(sku))}</g:mpn>\n`;
    } else {
      // Only set identifier_exists="no" if we have no GTIN or MPN
      xml += `      <g:identifier_exists>no</g:identifier_exists>\n`;
    }
    
    if (category) {
      xml += `      <g:product_type>${escapeXml(category)}</g:product_type>\n`;
    }
    
    // Add additional fields if available
    if (product.color) {
      xml += `      <g:color>${escapeXml(product.color)}</g:color>\n`;
    }
    
    if (product.size) {
      xml += `      <g:size>${escapeXml(product.size)}</g:size>\n`;
    }
    
    // Shipping information - fixed format
    xml += `      <g:shipping>\n`;
    xml += `        <g:country>PK</g:country>\n`;
    xml += `        <g:service>Standard shipping</g:service>\n`;
    xml += `        <g:price>0 PKR</g:price>\n`;
    xml += `      </g:shipping>\n`;
    
    xml += `    </item>\n\n`;
  });

  xml += `  </channel>\n`;
  xml += `</rss>`;

  return xml;
}

// Main function
async function main() {
  console.log('Starting Google Merchant Center feed generation...');
  console.log(`API Base URL: ${SERVER_IP}`);
  console.log(`Website Base URL: ${BASE_URL}`);
  console.log(`Output File: ${OUTPUT_FILE}\n`);

  const products = await fetchAllProducts();
  
  if (products.length === 0) {
    console.error('No products found. Please check your API configuration.');
    process.exit(1);
  }

  const xmlFeed = generateFeed(products);
  
  // Write to file
  fs.writeFileSync(OUTPUT_FILE, xmlFeed, 'utf8');
  
  console.log(`\n✅ Successfully generated Google Merchant Center feed!`);
  console.log(`📁 File saved to: ${OUTPUT_FILE}`);
  console.log(`📊 Total products in feed: ${products.length}`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review the generated XML file`);
  console.log(`   2. Upload it to Google Merchant Center`);
  console.log(`   3. Or set up automatic updates via URL/SFTP`);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

