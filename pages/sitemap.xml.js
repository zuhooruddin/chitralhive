// pages/sitemap.xml.js

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ loc, lastmod, changefreq, priority }) => {
         return `
       <url>
           <loc>${loc}</loc>
           ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
           ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
           ${priority ? `<priority>${priority}</priority>` : ''}
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
  const baseUrl = 'https://chitralhive.com';
  const apiUrl = `${baseUrl}/api`;
  
  // Static pages with high priority
  const staticPages = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      loc: `${baseUrl}/shop`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${baseUrl}/faqs`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      loc: `${baseUrl}/shipping-returns`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      loc: `${baseUrl}/terms-conditions`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
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
      const allProductPages = allItemsData.map((item) => ({
        loc: `${baseUrl}/product/${item.slug || item.id}`,
        lastmod: item.updated_at || item.created_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: '0.6',
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
