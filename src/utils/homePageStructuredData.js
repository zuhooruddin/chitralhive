import {
  SHILAJIT_LANDING_PATH,
  SHANDUR_FESTIVAL_LANDING_PATH,
  CHITRAL_FOOD_LANDING_PATH,
  CHITRAL_DIARY_LANDING_PATH,
  SITE_URL,
} from "utils/seoConstants";

/**
 * Homepage JSON-LD only used from getStaticProps (dynamic import) so this
 * module is not bundled into the client page JS.
 */
export function getHomePageStructuredData(generalSetting) {
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const siteName =
    generalSetting && generalSetting.length > 0
      ? generalSetting[0].site_name
      : "Chitral Hive";
  const siteDescription =
    generalSetting && generalSetting.length > 0
      ? generalSetting[0].site_description
      : "Shop authentic Chitrali products online at Chitral Hive";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo.png`,
          width: 300,
          height: 60,
        },
        description: siteDescription,
        sameAs: [
          "https://www.facebook.com/chitralhive",
          "https://www.instagram.com/chitralhive",
          "https://twitter.com/chitralhive",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+92-323-9119309",
          contactType: "Customer Service",
          areaServed: {
            "@type": "Country",
            name: "Pakistan",
          },
          availableLanguage: ["en", "ur", "en-PK", "ur-PK"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chitral",
          addressRegion: "Khyber Pakhtunkhwa",
          postalCode: "17200",
          addressCountry: "PK",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: siteName,
        image: `${baseUrl}/images/og-image.jpg`,
        description: siteDescription,
        url: baseUrl,
        telephone: "+92-323-9119309",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chitral",
          addressRegion: "Khyber Pakhtunkhwa",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.8514",
          longitude: "71.7864",
        },
        priceRange: "$$",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search/{search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        mainEntity: [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/categories/chitrali-honey#webpage`,
            url: `${baseUrl}/categories/chitrali-honey`,
            name: "Chitrali Products - Shop All Products",
            description:
              "Browse our complete collection of authentic Chitrali products including dry fruits, honey, herbs, spices, and traditional items from Chitral, Pakistan.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/categories/chitrali-dry-fruits#webpage`,
            url: `${baseUrl}/categories/chitrali-dry-fruits`,
            name: "Product Categories - Chitrali Products",
            description:
              "Explore all categories of Chitrali products including dry fruits, honey, herbs, spices, nuts, and more authentic items from Chitral.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/brands#webpage`,
            url: `${baseUrl}/brands`,
            name: "Brands - Chitral Hive",
            description:
              "Discover trusted brands and authentic Chitrali product manufacturers available at Chitral Hive.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/about-us#webpage`,
            url: `${baseUrl}/about-us`,
            name: "About Us - Chitral Hive",
            description:
              "Learn about Chitral Hive, your trusted source for authentic Chitrali products delivered across Pakistan.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/contact-us#webpage`,
            url: `${baseUrl}/contact-us`,
            name: "Contact Us - Chitral Hive",
            description:
              "Get in touch with Chitral Hive for inquiries, orders, and customer support. We're here to help you find the best Chitrali products.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}${SHILAJIT_LANDING_PATH}#webpage`,
            url: `${baseUrl}${SHILAJIT_LANDING_PATH}`,
            name: "Buy Shilajit (Salajeet) Online in Pakistan - Chitral Hive",
            description:
              "Authentic Himalayan Shilajit and Salajeet from Chitral — compare products, PKR pricing, and buy online with nationwide delivery.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}${SHANDUR_FESTIVAL_LANDING_PATH}#webpage`,
            url: `${baseUrl}${SHANDUR_FESTIVAL_LANDING_PATH}`,
            name: "Shandur Polo Festival 2026 - Dates, Travel & Chitrali Products",
            description:
              "Everything about the Shandur Polo Festival 2026 — event dates, Shandur Pass travel guide, and authentic Chitrali products.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}${CHITRAL_FOOD_LANDING_PATH}#webpage`,
            url: `${baseUrl}${CHITRAL_FOOD_LANDING_PATH}`,
            name: "Chitral Food - Traditional Chitrali Cuisine & Products",
            description:
              "Discover traditional Chitral food and buy authentic Chitrali food products online — dry fruits, honey, and more with delivery across Pakistan.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/chitral-house-shilajit#webpage`,
            url: `${baseUrl}/chitral-house-shilajit`,
            name: "Chitral House Shilajit - Buy Authentic Chitrali Salajeet Online",
            description:
              "Looking for Chitral House Shilajit? Browse authentic Chitrali Shilajit (Salajeet) products at Chitral Hive with PKR pricing and nationwide delivery.",
          },
          {
            "@type": "WebPage",
            "@id": `${baseUrl}${CHITRAL_DIARY_LANDING_PATH}#webpage`,
            url: `${baseUrl}${CHITRAL_DIARY_LANDING_PATH}`,
            name: "Chitral Diary Website and Products - Chitral Hive Guide",
            description:
              "Explore the Chitral Hive website — your guide to authentic Chitrali products in Pakistan including dry fruits, honey, Shilajit, and traditional items.",
          },

        ],
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#navigation`,
        name: "Main Navigation",
        url: baseUrl,
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Products",
            url: `${baseUrl}/products`,
            description: "Shop all Chitrali products",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Categories",
            url: `${baseUrl}/categories`,
            description: "Browse product categories",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Brands",
            url: `${baseUrl}/brands`,
            description: "View all brands",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Chitrali Products",
            url: `${baseUrl}/categories/chitrali-products`,
            description: "Authentic Chitrali products from Chitral, Pakistan",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Dry Fruits",
            url: `${baseUrl}/categories/chitrali-dry-fruits`,
            description: "Premium Chitrali dry fruits and nuts",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Shilajit (Salajeet)",
            url: `${baseUrl}${SHILAJIT_LANDING_PATH}`,
            description:
              "Pure Himalayan Shilajit and Salajeet from Chitral — buy online in Pakistan",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Chitral Food",
            url: `${baseUrl}${CHITRAL_FOOD_LANDING_PATH}`,
            description: "Traditional Chitrali food and cuisine — recipes, dry fruits, honey, and more",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Shandur Polo Festival 2026",
            url: `${baseUrl}${SHANDUR_FESTIVAL_LANDING_PATH}`,
            description: "Shandur Polo Festival 2026 — dates, travel tips, and Chitrali products",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Chitral Diary Website and Products",
            url: `${baseUrl}${CHITRAL_DIARY_LANDING_PATH}`,
            description: "Explore the Chitral Hive website and discover authentic Chitrali products",
          },
          {
            "@type": "SiteNavigationElement",
            name: "About Us",
            url: `${baseUrl}/about-us`,
            description: "Learn about Chitral Hive",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Contact Us",
            url: `${baseUrl}/contact-us`,
            description: "Contact Chitral Hive",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${baseUrl}/#itemlist`,
        name: "Featured Chitrali Products",
        description: "Browse our collection of authentic Chitrali products",
        url: `${baseUrl}/products`,
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What are Chitrali products?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Chitrali products are authentic, traditional items from Chitral, Khyber Pakhtunkhwa, Pakistan. These include handmade crafts, local specialties, traditional foods, and unique cultural products that represent the rich heritage of Chitral. Available for purchase online across Pakistan.",
            },
          },
          {
            "@type": "Question",
            name: "Do you ship Chitrali products nationwide in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Chitral Hive delivers authentic Chitrali products to your doorstep across all major cities in Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Quetta, and more. We ensure safe packaging and timely delivery of all orders.",
            },
          },
          {
            "@type": "Question",
            name: "Are the products authentic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all products at Chitral Hive are 100% authentic and sourced directly from Chitral. We work with local artisans and suppliers to bring you genuine Chitrali products.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I buy pure Shilajit (Salajeet) online in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Chitral Hive offers authentic Himalayan Shilajit — also called Salajeet (سلاجیت) in Urdu — sourced from the Chitral region. You can order online for delivery across Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, and Peshawar. See our Shilajit guide and shop listings for current prices and purity details.",
            },
          },
          {
            "@type": "Question",
            name: "When is the Shandur Polo Festival 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Shandur Polo Festival 2026 is expected to take place in July 2026 (typically July 7–9) at Shandur Pass, the world's highest polo ground at 3,700 m in Chitral, Khyber Pakhtunkhwa. Exact dates are announced by KP Tourism Authority. Chitral Hive ships authentic Chitrali products for visitors planning to attend.",
            },
          },
          {
            "@type": "Question",
            name: "What is traditional Chitral food?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Traditional Chitral food includes Shorak (stone-ground bread), Doudo (corn and buttermilk porridge), sun-dried apricots (Badrang), dried mulberries, wild mountain honey, Chitrali walnuts, and almonds. Chitral Hive sells authentic Chitrali food products online with nationwide delivery in Pakistan.",
            },
          },
        ],
      },
    ],
  };
}
