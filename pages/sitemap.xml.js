// pages/sitemap.xml.js

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     ${pages
       .map(({ loc, lastmod, changefreq, priority, images }) => {
         return `
       <url>
           <loc>${loc}</loc>
           ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
           ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
           ${priority ? `<priority>${priority}</priority>` : ''}
           ${images && images.length > 0 ? images.map(img => `
           <image:image>
             <image:loc>${img.url}</image:loc>
             ${img.title ? `<image:title>${img.title}</image:title>` : ''}
             ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
           </image:image>`).join('') : ''}
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://chitralhive.com';
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE || `${baseUrl}/api`;
  
  // Static pages with high priority
  const staticPages = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      loc: `${baseUrl}/products`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      loc: `${baseUrl}/brands`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      loc: `${baseUrl}/about-us`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${baseUrl}/categories`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
  ];

  let dynamicPages = [];

  try {
    // Fetch all categories
    const categoriesResponse = await fetch(`${apiUrl}/getNavCategories`);
    const categoriesData = await categoriesResponse.json();
    
    if (categoriesData && Array.isArray(categoriesData)) {
      // Add category pages
      const categoryPages = categoriesData.map((category) => ({
        loc: `${baseUrl}/category/${category.slug || category.id}`,
        lastmod: category.updated_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.8',
      }));
      
      dynamicPages = [...dynamicPages, ...categoryPages];

      // Add categories listing page
      dynamicPages.push({
        loc: `${baseUrl}/categories`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.8',
      });
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  try {
    // Fetch featured/new arrival products
    const productsResponse = await fetch(`${apiUrl}/getFearuredProduct?type=new`);
    const productsData = await productsResponse.json();
    
    if (productsData && Array.isArray(productsData)) {
      const productPages = productsData.map((product) => ({
        loc: `${baseUrl}/product/${product.slug || product.id}`,
        lastmod: product.updated_at || product.created_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.7',
      }));
      
      dynamicPages = [...dynamicPages, ...productPages];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  try {
    // Fetch all items/products from the main catalog
    const allItemsResponse = await fetch(`${apiUrl}/getAllItems`);
    const allItemsData = await allItemsResponse.json();
    
    if (allItemsData && Array.isArray(allItemsData)) {
      const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL || `${baseUrl}/media/`;
      const allProductPages = allItemsData.map((item) => ({
        loc: `${baseUrl}/product/${item.slug || item.id}`,
        lastmod: item.updated_at || item.created_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.6',
        images: item.imgUrl ? [{
          url: imgBaseUrl + item.imgUrl,
          title: item.name || 'Chitrali Product',
          caption: item.description || `Buy ${item.name} from Chitral Hive - Authentic Chitrali Products`
        }] : []
      }));
      
      dynamicPages = [...dynamicPages, ...allProductPages];
    }
  } catch (error) {
    console.error('Error fetching all items:', error);
  }

  try {
    // Fetch brand bundles
    const brandBundlesResponse = await fetch(`${apiUrl}/getBrandBundels`);
    const brandBundlesData = await brandBundlesResponse.json();
    
    if (brandBundlesData && Array.isArray(brandBundlesData)) {
      const bundlePages = brandBundlesData.map((bundle) => ({
        loc: `${baseUrl}/bundle/${bundle.slug || bundle.id}`,
        lastmod: bundle.updated_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.7',
      }));
      
      dynamicPages = [...dynamicPages, ...bundlePages];
    }
  } catch (error) {
    console.error('Error fetching brand bundles:', error);
  }

  try {
    // Fetch product bundles
    const productBundlesResponse = await fetch(`${apiUrl}/getProductBundels`);
    const productBundlesData = await productBundlesResponse.json();
    
    if (productBundlesData && Array.isArray(productBundlesData)) {
      const bundlePages = productBundlesData.map((bundle) => ({
        loc: `${baseUrl}/bundle/${bundle.slug || bundle.id}`,
        lastmod: bundle.updated_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.7',
      }));
      
      dynamicPages = [...dynamicPages, ...bundlePages];
    }
  } catch (error) {
    console.error('Error fetching product bundles:', error);
  }

  // Remove duplicate URLs (in case products appear in multiple endpoints)
  const uniquePages = Array.from(
    new Map([...staticPages, ...dynamicPages].map(page => [page.loc, page])).values()
  );

  // Generate the XML sitemap
  const sitemap = generateSiteMap(uniquePages);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=7200, stale-while-revalidate=3600');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
