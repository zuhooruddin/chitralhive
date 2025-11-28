"use strict";
(() => {
var exports = {};
exports.id = 2164;
exports.ids = [2164];
exports.modules = {

/***/ 3134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
// pages/sitemap.xml.js
function generateSiteMap(pages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages.map(({ loc , lastmod , changefreq , priority  })=>{
        return `
       <url>
           <loc>${loc}</loc>
           ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
           ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
           ${priority ? `<priority>${priority}</priority>` : ""}
       </url>
     `;
    }).join("")}
   </urlset>
 `;
}
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ res  }) {
    const baseUrl = "https://chitralhive.com";
    const apiUrl = `${baseUrl}/api`;
    // Static pages with high priority
    const staticPages = [
        {
            loc: baseUrl,
            lastmod: new Date().toISOString(),
            changefreq: "daily",
            priority: "1.0"
        },
        {
            loc: `${baseUrl}/shop`,
            lastmod: new Date().toISOString(),
            changefreq: "daily",
            priority: "0.9"
        },
        {
            loc: `${baseUrl}/about`,
            lastmod: new Date().toISOString(),
            changefreq: "monthly",
            priority: "0.8"
        },
        {
            loc: `${baseUrl}/contact`,
            lastmod: new Date().toISOString(),
            changefreq: "monthly",
            priority: "0.8"
        },
        {
            loc: `${baseUrl}/faqs`,
            lastmod: new Date().toISOString(),
            changefreq: "monthly",
            priority: "0.7"
        },
        {
            loc: `${baseUrl}/shipping-returns`,
            lastmod: new Date().toISOString(),
            changefreq: "monthly",
            priority: "0.7"
        },
        {
            loc: `${baseUrl}/privacy-policy`,
            lastmod: new Date().toISOString(),
            changefreq: "yearly",
            priority: "0.5"
        },
        {
            loc: `${baseUrl}/terms-conditions`,
            lastmod: new Date().toISOString(),
            changefreq: "yearly",
            priority: "0.5"
        }, 
    ];
    let dynamicPages = [];
    try {
        // Fetch all categories
        const categoriesResponse = await fetch(`${apiUrl}/getNavCategories`);
        const categoriesData = await categoriesResponse.json();
        if (categoriesData && Array.isArray(categoriesData)) {
            // Add category pages
            const categoryPages = categoriesData.map((category)=>({
                    loc: `${baseUrl}/category/${category.slug || category.id}`,
                    lastmod: category.updated_at || new Date().toISOString(),
                    changefreq: "weekly",
                    priority: "0.8"
                }));
            dynamicPages = [
                ...dynamicPages,
                ...categoryPages
            ];
            // Add categories listing page
            dynamicPages.push({
                loc: `${baseUrl}/categories`,
                lastmod: new Date().toISOString(),
                changefreq: "weekly",
                priority: "0.8"
            });
        }
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
    try {
        // Fetch featured/new arrival products
        const productsResponse = await fetch(`${apiUrl}/getFearuredProduct?type=new`);
        const productsData = await productsResponse.json();
        if (productsData && Array.isArray(productsData)) {
            const productPages = productsData.map((product)=>({
                    loc: `${baseUrl}/product/${product.slug || product.id}`,
                    lastmod: product.updated_at || product.created_at || new Date().toISOString(),
                    changefreq: "weekly",
                    priority: "0.7"
                }));
            dynamicPages = [
                ...dynamicPages,
                ...productPages
            ];
        }
    } catch (error1) {
        console.error("Error fetching products:", error1);
    }
    try {
        // Fetch all items/products from the main catalog
        const allItemsResponse = await fetch(`${apiUrl}/getAllItems`);
        const allItemsData = await allItemsResponse.json();
        if (allItemsData && Array.isArray(allItemsData)) {
            const allProductPages = allItemsData.map((item)=>({
                    loc: `${baseUrl}/product/${item.slug || item.id}`,
                    lastmod: item.updated_at || item.created_at || new Date().toISOString(),
                    changefreq: "weekly",
                    priority: "0.6"
                }));
            dynamicPages = [
                ...dynamicPages,
                ...allProductPages
            ];
        }
    } catch (error2) {
        console.error("Error fetching all items:", error2);
    }
    try {
        // Fetch brand bundles
        const brandBundlesResponse = await fetch(`${apiUrl}/getBrandBundels`);
        const brandBundlesData = await brandBundlesResponse.json();
        if (brandBundlesData && Array.isArray(brandBundlesData)) {
            const bundlePages = brandBundlesData.map((bundle)=>({
                    loc: `${baseUrl}/bundle/${bundle.slug || bundle.id}`,
                    lastmod: bundle.updated_at || new Date().toISOString(),
                    changefreq: "weekly",
                    priority: "0.7"
                }));
            dynamicPages = [
                ...dynamicPages,
                ...bundlePages
            ];
        }
    } catch (error3) {
        console.error("Error fetching brand bundles:", error3);
    }
    try {
        // Fetch product bundles
        const productBundlesResponse = await fetch(`${apiUrl}/getProductBundels`);
        const productBundlesData = await productBundlesResponse.json();
        if (productBundlesData && Array.isArray(productBundlesData)) {
            const bundlePages1 = productBundlesData.map((bundle)=>({
                    loc: `${baseUrl}/bundle/${bundle.slug || bundle.id}`,
                    lastmod: bundle.updated_at || new Date().toISOString(),
                    changefreq: "weekly",
                    priority: "0.7"
                }));
            dynamicPages = [
                ...dynamicPages,
                ...bundlePages1
            ];
        }
    } catch (error4) {
        console.error("Error fetching product bundles:", error4);
    }
    // Remove duplicate URLs (in case products appear in multiple endpoints)
    const uniquePages = Array.from(new Map([
        ...staticPages,
        ...dynamicPages
    ].map((page)=>[
            page.loc,
            page
        ])).values());
    // Generate the XML sitemap
    const sitemap = generateSiteMap(uniquePages);
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "public, s-maxage=7200, stale-while-revalidate=3600");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3134));
module.exports = __webpack_exports__;

})();