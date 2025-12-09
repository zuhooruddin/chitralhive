import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const SEO = ({ 
  title, 
  description, 
  metaTitle, 
  sitename, 
  keywords, 
  image, 
  canonical, 
  noindex = false,
  type = "website", // website, article, product, etc.
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  price,
  priceCurrency = "PKR",
  availability,
  brand,
  category,
  sku,
  rating,
  reviewCount
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";
  const defaultDescription = "Shop authentic Chitrali products online at Chitral Hive. Discover traditional crafts, local specialties, handmade items, and unique products from Chitral. Buy Chitrali products online and get them delivered to your doorstep.";
  const defaultKeywords = "Chitrali products, Chitral Hive, authentic Chitrali crafts, traditional Chitrali items, Chitral specialties, handmade Chitrali products, buy Chitrali products online, Chitral online store, Chitrali food, Chitrali handicrafts, Chitral culture, Pakistan products";
  
  sitename = process.env.NEXT_PUBLIC_COMPANY_NAME || "Chitral Hive";
  const fullTitle = metaTitle ? `${metaTitle} | ${sitename}` : `${title} | ${sitename}`;
  const metaDesc = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const canonicalUrl = canonical || `${baseUrl}${router.asPath}`;
  const ogImage = image || `${baseUrl}/images/og-image.jpg`;

  // Determine Open Graph type based on page type
  const ogType = type === "product" ? "product" : type === "article" ? "article" : "website";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author || "Chitral Hive"} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Article-specific meta tags */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && Array.isArray(tags) && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Product-specific meta tags */}
      {type === "product" && (
        <>
          {price && <meta property="product:price:amount" content={price} />}
          {priceCurrency && <meta property="product:price:currency" content={priceCurrency} />}
          {availability && <meta property="product:availability" content={availability} />}
          {brand && <meta property="product:brand" content={brand} />}
          {category && <meta property="product:category" content={category} />}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate language versions (hreflang) */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-PK" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ur" href={canonicalUrl.replace('/en/', '/ur/').replace('chitralhive.com', 'chitralhive.com/ur')} />
      <link rel="alternate" hrefLang="ur-PK" href={canonicalUrl.replace('/en/', '/ur/').replace('chitralhive.com', 'chitralhive.com/ur')} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || fullTitle} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ur_PK" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || fullTitle} />
      <meta name="twitter:site" content="@chitralhive" />
      <meta name="twitter:creator" content="@chitralhive" />
      
      {/* Additional SEO - Geographic */}
      <meta name="geo.region" content="PK-KP" />
      <meta name="geo.placename" content="Chitral" />
      <meta name="geo.position" content="35.8514;71.7864" />
      <meta name="ICBM" content="35.8514, 71.7864" />
      
      {/* Additional Meta Tags for Better Indexing */}
      <meta name="application-name" content="Chitral Hive" />
      <meta name="apple-mobile-web-app-title" content="Chitral Hive" />
      <meta name="msapplication-TileColor" content="#1976d2" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to improve page speed */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.facebook.com" />
      <link rel="dns-prefetch" href="https://www.instagram.com" />
    </Head>
  );
};

export default SEO;
