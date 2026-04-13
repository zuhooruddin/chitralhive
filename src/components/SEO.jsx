import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import {
  DEFAULT_KEYWORD_SUFFIX,
  DEFAULT_META_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  sanitizeSiteName,
} from "utils/seoConstants";

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
  const baseUrl = SITE_URL;
  const defaultDescription = DEFAULT_META_DESCRIPTION;
  const defaultKeywords =
    "Chitrali products Pakistan, Chitral Hive, buy Chitrali products online Pakistan, authentic Chitrali crafts, traditional Chitrali items, Chitral specialties, handmade Chitrali products, Chitral online store Pakistan, Chitrali food Pakistan, Chitrali handicrafts, Chitral culture, Pakistan products, online shopping Pakistan, Chitral honey Pakistan, Chitrali dry fruits, Chitrali shawls Pakistan, KPK products, Khyber Pakhtunkhwa products, Chitral delivery Pakistan, online store Pakistan" +
    DEFAULT_KEYWORD_SUFFIX;
  
  sitename = sanitizeSiteName(process.env.NEXT_PUBLIC_COMPANY_NAME) || SITE_NAME;
  
  // Helper function to clean duplicate site names from title
  const cleanDuplicateSiteNames = (text) => {
    if (!text) return text;
    let cleaned = text;
    
    // Remove common duplicate patterns (order matters - most specific first)
    const duplicatePatterns = [
      /\s*ChitralHive\s*[-|]\s*Chitral\s+Hive\s*[-|]\s*ChitralHive/gi,
      /\s*ChitralHive\s*[-|]\s*Chitral\s+Hive\s*[-|]\s*Chitral\s+Hive/gi,
      /\s*Chitral\s+Hive\s*[-|]\s*ChitralHive\s*[-|]\s*ChitralHive/gi,
    ];
    
    duplicatePatterns.forEach(pattern => {
      cleaned = cleaned.replace(pattern, ` | ${SITE_NAME}`);
    });
    
    // Count occurrences of each site name variation
    const variations = ['ChitralHive', 'Chitral Hive', SITE_NAME, sitename];
    const counts = variations.map(v => (cleaned.match(new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length);
    const maxCount = Math.max(...counts);
    
    // If any variation appears more than once, keep only the first occurrence
    if (maxCount > 1) {
      variations.forEach((name, index) => {
        if (counts[index] > 1) {
          const regex = new RegExp(`(${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
          let first = true;
          cleaned = cleaned.replace(regex, (match) => {
            if (first) {
              first = false;
              return match;
            }
            return ''; // Remove subsequent occurrences
          });
        }
      });
    }
    
    
    
    // Clean up multiple separators and extra spaces
    cleaned = cleaned.replace(/\s*[-|]\s*[-|]\s*/g, ' | ');
    cleaned = cleaned.replace(/\s*[-|]\s*[-|]\s*/g, ' | '); // Run twice to catch nested patterns
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    // Ensure we end with a single site name if title contains site name
    const hasSiteName = variations.some(v => cleaned.toLowerCase().includes(v.toLowerCase()));
    if (hasSiteName) {
      // Remove trailing site name variations and add one clean one
      variations.forEach(name => {
        const trailingRegex = new RegExp(`\\s*[-|]\\s*${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'gi');
        cleaned = cleaned.replace(trailingRegex, '');
      });
      // Add single site name at the end if not present
      if (!variations.some(v => cleaned.toLowerCase().endsWith(v.toLowerCase()))) {
        cleaned = `${cleaned} | ${SITE_NAME}`;
      }
    }
    
    return cleaned.trim();
  };
  
  // Helper function to truncate title to 75 characters (SEO best practice)
  const truncateTitle = (text, maxLength = 110) => {
    if (!text || text.length <= maxLength) return text;
    // Truncate at word boundary if possible
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > maxLength * 0.8) {
      return truncated.substring(0, lastSpace) + '...';
    }
    return truncated.substring(0, maxLength - 3) + '...';
  };
  
  // Check if metaTitle already contains sitename to avoid duplication
  const siteNameVariations = [sitename, SITE_NAME, 'ChitralHive', 'Chitral Hive', 'ChitralHive.com'];
  const alreadyContainsSiteName = metaTitle && siteNameVariations.some(
    name => metaTitle.toLowerCase().includes(name.toLowerCase())
  );
  
  // Build title: metaTitle + sitename (only if not already present, max 75 chars for SEO)
  let titleBase;
  if (!metaTitle) {
    titleBase = sitename;
  } else if (alreadyContainsSiteName) {
    // If metaTitle already has site name, clean duplicates and use (but truncate)
    titleBase = cleanDuplicateSiteNames(metaTitle);
    // If after cleaning it doesn't have a site name, add it
    if (!siteNameVariations.some(name => titleBase.toLowerCase().includes(name.toLowerCase()))) {
      titleBase = `${titleBase} | ${SITE_NAME}`;
    }
  } else {
    // Add sitename with separator
    titleBase = `${metaTitle} | ${SITE_NAME}`;
  }
  
  const fullTitle = truncateTitle(titleBase, 110);
  const robotsContent = noindex
    ? "noindex, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  
  const metaDesc = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const pathOnly = router.asPath.split("?")[0].split("#")[0] || "/";
  const canonicalUrl = canonical || `${baseUrl}${pathOnly === "/" ? "" : pathOnly}`;
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
      <meta name="author" content={author || SITE_NAME} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="slurp" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="duckduckbot" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="language" content="English, Urdu" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="Pakistan" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Pakistan" />
      <meta name="target" content="Pakistan" />
      <meta name="audience" content="Pakistan" />
      <meta name="country" content="Pakistan" />
      <meta name="geo.country" content="PK" />
      <meta name="geo.region" content="PK-KP" />
      <meta name="geo.placename" content="Chitral, Khyber Pakhtunkhwa, Pakistan" />
      <meta name="geo.position" content="35.8514;71.7864" />
      <meta name="ICBM" content="35.8514, 71.7864" />
      
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
      
      {/* Alternate language versions (hreflang) - Pakistani audience */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-PK" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ur" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ur-PK" href={canonicalUrl} />
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
      <meta property="og:locale" content="en_PK" />
      <meta property="og:locale:alternate" content="ur_PK" />
      <meta property="og:country-name" content="Pakistan" />
      <meta property="business:contact_data:locality" content="Chitral" />
      <meta property="business:contact_data:region" content="Khyber Pakhtunkhwa" />
      <meta property="business:contact_data:country_name" content="Pakistan" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || fullTitle} />
      <meta name="twitter:site" content="@chitralhive" />
      <meta name="twitter:creator" content="@chitralhive" />
      
      {/* Pakistani-specific meta tags */}
      <meta name="currency" content="PKR" />
      <meta name="priceCurrency" content="PKR" />
      <meta name="availableLanguage" content="en, ur" />
      <meta name="availableLanguage:en" content="English" />
      <meta name="availableLanguage:ur" content="Urdu" />
      
      {/* Additional Meta Tags for Better Indexing */}
      <meta name="application-name" content="Chitral Hive" />
      <meta name="apple-mobile-web-app-title" content="Chitral Hive" />
      <meta name="msapplication-TileColor" content="#1976d2" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to improve page speed - Critical origins only */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources - Non-critical, load after page interactive */}
      {/* These are deferred to reduce initial connection overhead */}
    </Head>
  );
};

export default SEO;
