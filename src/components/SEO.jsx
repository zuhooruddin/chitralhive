import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const SEO = ({ title, description, metaTitle, sitename, keywords, image, canonical, noindex = false }) => {
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

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Chitral Hive" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@chitralhive" />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="PK-KP" />
      <meta name="geo.placename" content="Chitral" />
      <meta name="geo.position" content="35.8514;71.7864" />
      <meta name="ICBM" content="35.8514, 71.7864" />
    </Head>
  );
};

export default SEO;
