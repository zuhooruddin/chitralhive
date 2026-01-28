/**
 * Professional Breadcrumb Schema Generator for Google Search Console
 * 
 * Generates valid BreadcrumbList structured data (JSON-LD) according to
 * Schema.org specifications for optimal SEO and Google Search Console recognition.
 * 
 * @module breadcrumbSchema
 */

/**
 * Get the base URL for the site
 * @returns {string} The base URL (defaults to https://chitralhive.com)
 */
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";
};

/**
 * Normalize URL to ensure it's absolute and properly formatted
 * @param {string} url - The URL to normalize
 * @param {string} baseUrl - The base URL of the site
 * @returns {string} Normalized absolute URL
 */
const normalizeUrl = (url, baseUrl) => {
  if (!url) return baseUrl;
  
  // If already absolute URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Remove leading slash if present to avoid double slashes
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  
  // Ensure baseUrl doesn't have trailing slash
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  return `${cleanBaseUrl}/${cleanUrl}`;
};

/**
 * Validate breadcrumb item data
 * @param {Object} item - The breadcrumb item to validate
 * @param {number} position - The position of the item
 * @returns {boolean} True if valid
 */
const validateBreadcrumbItem = (item, position) => {
  if (!item || typeof item !== 'object') {
    console.warn(`Breadcrumb item at position ${position} is invalid: item is required`);
    return false;
  }
  
  if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
    console.warn(`Breadcrumb item at position ${position} is invalid: name is required and must be a non-empty string`);
    return false;
  }
  
  if (!item.url && !item.item) {
    console.warn(`Breadcrumb item at position ${position} is invalid: url or item is required`);
    return false;
  }
  
  return true;
};

/**
 * Generate BreadcrumbList schema for Google Search Console
 * 
 * @param {Array<Object>} items - Array of breadcrumb items
 * @param {Object} options - Optional configuration
 * @param {string} options.baseUrl - Custom base URL (defaults to env variable or https://chitralhive.com)
 * @returns {Object|null} BreadcrumbList schema object or null if invalid
 * 
 * @example
 * const breadcrumb = generateBreadcrumbSchema([
 *   { name: 'Home', url: '/' },
 *   { name: 'Products', url: '/products' },
 *   { name: 'Product Name', url: '/product/product-slug' }
 * ]);
 */
export const generateBreadcrumbSchema = (items, options = {}) => {
  if (!Array.isArray(items) || items.length === 0) {
    console.warn('BreadcrumbSchema: items must be a non-empty array');
    return null;
  }

  const baseUrl = options.baseUrl || getBaseUrl();
  const maxItems = 10; // Google's recommended maximum
  
  if (items.length > maxItems) {
    console.warn(`BreadcrumbSchema: Maximum ${maxItems} items recommended. Found ${items.length}`);
  }

  // Validate and normalize items
  const validatedItems = items
    .map((item, index) => {
      const position = index + 1;
      
      if (!validateBreadcrumbItem(item, position)) {
        return null;
      }

      const url = normalizeUrl(item.url || item.item, baseUrl);
      const name = item.name.trim();

      return {
        "@type": "ListItem",
        "position": position,
        "name": name,
        "item": url
      };
    })
    .filter(item => item !== null); // Remove invalid items

  if (validatedItems.length === 0) {
    console.warn('BreadcrumbSchema: No valid items found');
    return null;
  }

  // Ensure positions are sequential (in case some items were filtered out)
  validatedItems.forEach((item, index) => {
    item.position = index + 1;
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": validatedItems
  };
};

/**
 * Predefined breadcrumb generators for common page types
 */

/**
 * Generate breadcrumb for product pages
 * @param {Object} product - Product data
 * @param {string} product.name - Product name
 * @param {string} product.slug - Product slug
 * @param {Object} options - Optional configuration
 * @returns {Object|null} BreadcrumbList schema
 */
export const generateProductBreadcrumb = (product, options = {}) => {
  if (!product || !product.name || !product.slug) {
    console.warn('ProductBreadcrumb: product with name and slug is required');
    return null;
  }

  const baseUrl = options.baseUrl || getBaseUrl();

  return generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Products', url: `${baseUrl}/products` },
    { name: product.name, url: `${baseUrl}/product/${product.slug}` }
  ], { baseUrl });
};

/**
 * Generate breadcrumb for category pages
 * @param {Object} category - Category data
 * @param {string} category.name - Category name
 * @param {string} category.slug - Category slug
 * @param {string} category.id - Category ID (fallback if slug not available)
 * @param {Object} options - Optional configuration
 * @returns {Object|null} BreadcrumbList schema
 */
export const generateCategoryBreadcrumb = (category, options = {}) => {
  if (!category || !category.name) {
    console.warn('CategoryBreadcrumb: category with name is required');
    return null;
  }

  const baseUrl = options.baseUrl || getBaseUrl();
  const categorySlug = category.slug || category.id;

  if (!categorySlug) {
    console.warn('CategoryBreadcrumb: category slug or id is required');
    return null;
  }

  return generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Categories', url: `${baseUrl}/categories` },
    { name: category.name, url: `${baseUrl}/category/${categorySlug}` }
  ], { baseUrl });
};

/**
 * Generate breadcrumb for blog post pages
 * @param {Object} post - Blog post data
 * @param {string} post.title - Post title
 * @param {string} post.slug - Post slug
 * @param {Object} options - Optional configuration
 * @returns {Object|null} BreadcrumbList schema
 */
export const generateBlogBreadcrumb = (post, options = {}) => {
  if (!post || !post.title || !post.slug) {
    console.warn('BlogBreadcrumb: post with title and slug is required');
    return null;
  }

  const baseUrl = options.baseUrl || getBaseUrl();

  return generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Blog', url: `${baseUrl}/blog` },
    { name: post.title, url: `${baseUrl}/blog/${post.slug}` }
  ], { baseUrl });
};

/**
 * Generate breadcrumb for brand pages
 * @param {Object} brand - Brand data
 * @param {string} brand.name - Brand name
 * @param {string} brand.slug - Brand slug
 * @param {Object} options - Optional configuration
 * @returns {Object|null} BreadcrumbList schema
 */
export const generateBrandBreadcrumb = (brand, options = {}) => {
  if (!brand || !brand.name || !brand.slug) {
    console.warn('BrandBreadcrumb: brand with name and slug is required');
    return null;
  }

  const baseUrl = options.baseUrl || getBaseUrl();

  return generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Brands', url: `${baseUrl}/brands` },
    { name: brand.name, url: `${baseUrl}/brand/${brand.slug}` }
  ], { baseUrl });
};

export default {
  generateBreadcrumbSchema,
  generateProductBreadcrumb,
  generateCategoryBreadcrumb,
  generateBlogBreadcrumb,
  generateBrandBreadcrumb
};


