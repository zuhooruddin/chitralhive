import { Box, Button, Container } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import StructuredData from "components/schema/StructuredData";
import SearchCard1List from "components/products/SearchCard1List";
import { H1, H2, Paragraph } from "components/Typography";
import Link from "next/link";
import apiNav from "utils/api/market-2";
import api from "utils/api/fashion-shop-2";
import { generateBreadcrumbSchema } from "utils/breadcrumbSchema";
import {
  SHILAJIT_KEYWORD_PHRASES,
  SHILAJIT_LANDING_PATH,
  SITE_URL,
} from "utils/seoConstants";

function normalizeReviews(raw) {
  if (!raw) return { Reviews: [] };
  if (raw.Reviews && Array.isArray(raw.Reviews)) return raw;
  if (Array.isArray(raw)) return { Reviews: raw };
  return { Reviews: [] };
}

const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}${SHILAJIT_LANDING_PATH}`;

const metaTitle =
  "Buy Pure Shilajit (Salajeet) Online in Pakistan | Himalayan Chitral | Chitral Hive";
const metaDescription =
  "Buy authentic Himalayan Shilajit — Salajeet (سلاجیت) — online in Pakistan from Chitral Hive. Sourced from the Chitral / mountain regions, nationwide delivery. Compare purity, pricing, and shop trusted Chitrali wellness products.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Shilajit (Salajeet)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shilajit — commonly called Salajeet (سلاجیت) in Pakistan — is a natural mineral-rich resin traditionally gathered from high-altitude mountain formations. Chitral Hive lists authentic Chitral and Himalayan-associated Shilajit products for customers who want traceable sourcing and clear product information.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver Shilajit across Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chitral Hive ships orders to major cities including Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, and Quetta, subject to courier coverage and product availability.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose genuine Shilajit online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check seller reputation, clear product descriptions, batch or sourcing notes where provided, and customer reviews. On Chitral Hive, each listing shows price in PKR, availability, and imagery so you can compare before checkout.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shilajit the same as Salajeet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Salajeet is the Urdu name widely used in Pakistan for Shilajit. Search engines and shoppers use both terms, so we use Shilajit and Salajeet together to match how people search.",
      },
    },
  ],
};

export default function ShilajitSalajeetPage({
  navCategories,
  GeneralSetting,
  ProductReviews,
}) {
  const breadcrumb = generateBreadcrumbSchema(
    [
      { name: "Home", url: base },
      { name: "Shilajit (Salajeet) Pakistan", url: pageUrl },
    ],
    { baseUrl: base }
  );

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: metaTitle,
    description: metaDescription,
    inLanguage: ["en-PK", "ur-PK"],
    isPartOf: {
      "@type": "WebSite",
      name: "Chitral Hive",
      url: base,
    },
  };

  return (
    <ShopLayout1
      navCategories={navCategories}
      generalSetting={GeneralSetting}
      footerData={null}
    >
      <SEO
        title="Shilajit (Salajeet) Pakistan"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords={`${SHILAJIT_KEYWORD_PHRASES}, buy Shilajit Chitral Hive, Himalayan Shilajit online store Pakistan`}
        canonical={pageUrl}
        type="website"
      />
      {breadcrumb && <StructuredData data={breadcrumb} />}
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 3, md: 5 }}>
        <Container maxWidth="lg">
          <H1 mb={2} fontSize={{ xs: 26, md: 34 }} lineHeight={1.2}>
            Pure Shilajit (Salajeet) from Chitral — Buy Online in Pakistan
          </H1>
          <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "48rem" }}>
            Chitral Hive is a Pakistani e-commerce store for authentic Chitrali
            goods. This page helps you find{" "}
            <strong>Himalayan Shilajit</strong> — also searched as{" "}
            <strong>Salajeet</strong> or <strong>سلاجیت</strong> — with
            nationwide delivery and PKR pricing on product pages.
          </Paragraph>
          <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
            <Link href="/search/shilajit" passHref legacyBehavior>
              <Button component="a" variant="contained" color="primary" size="large">
                Shop Shilajit listings
              </Button>
            </Link>
            <Link href="/products" passHref legacyBehavior>
              <Button component="a" variant="outlined" color="primary" size="large">
                All products
              </Button>
            </Link>
          </Box>

          <H2 mb={2} fontSize={22}>
            Why buyers search Shilajit &amp; Salajeet together
          </H2>
          <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "48rem" }}>
            In Pakistan, “Salajeet” and “Shilajit” refer to the same category of
            product. Optimizing for both keywords helps customers find Chitral
            Hive whether they search in English or Urdu transliteration.
          </Paragraph>

          <H2 mb={2} fontSize={22}>
            Chitral &amp; Himalayan association
          </H2>
          <Paragraph color="grey.700" mb={4} sx={{ maxWidth: "48rem" }}>
            Our catalog highlights products tied to{" "}
            <strong>Chitral, Khyber Pakhtunkhwa</strong> and broader Himalayan
            sourcing narratives shoppers expect when comparing resin quality and
            origin. Individual SKUs may describe lab checks or grading on their
            own product pages.
          </Paragraph>

          <H2 mb={2} fontSize={22}>
            Shilajit products on Chitral Hive
          </H2>
          <Paragraph color="grey.600" mb={2}>
            Live results load below (search term: <strong>shilajit</strong>).
            Try{" "}
            <Link href="/search/salajeet" passHref legacyBehavior>
              <a>Salajeet search</a>
            </Link>{" "}
            if you use the Urdu-market spelling.
          </Paragraph>
          <SearchCard1List category="shilajit" ProductReviews={ProductReviews} />
        </Container>
      </Box>
    </ShopLayout1>
  );
}

export async function getStaticProps() {
  try {
    const [navCategories, GeneralSetting, reviewsRaw] = await Promise.all([
      apiNav.getNavCategories(),
      api.getGeneralSetting(),
      apiNav.getReviews(),
    ]);
    return {
      props: {
        navCategories: navCategories || [],
        GeneralSetting: GeneralSetting || [],
        ProductReviews: normalizeReviews(reviewsRaw),
      },
      revalidate: 300,
    };
  } catch (e) {
    console.error("shilajit-salajeet getStaticProps:", e.message);
    return {
      props: {
        navCategories: [],
        GeneralSetting: [],
        ProductReviews: { Reviews: [] },
      },
      revalidate: 60,
    };
  }
}
