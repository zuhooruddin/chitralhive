import { Box, Button, Container, Divider, Stack } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import StructuredData from "components/schema/StructuredData";
import SearchCard1List from "components/products/SearchCard1List";
import { H1, H2, H3, Paragraph } from "components/Typography";
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
  "Buy Pure Shilajit (Salajeet) Online in Pakistan | Chitral Himalayan Source | Chitral Hive";
const metaDescription =
  "Buy authentic Himalayan Shilajit — Salajeet (سلاجیت) — online in Pakistan from Chitral Hive. Sourced from the Chitral / Hindu Kush mountain region. Compare purity grades, PKR pricing, and shop trusted Chitrali wellness products with nationwide delivery.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Shilajit (Salajeet)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shilajit — commonly called Salajeet (سلاجیت) in Pakistan — is a natural mineral-rich resin traditionally gathered from high-altitude mountain formations in the Himalayas and Hindu Kush. Chitral Hive lists authentic Chitral and Himalayan-associated Shilajit products with traceable sourcing and clear product information.",
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
        text: "Check seller reputation, clear product descriptions, sourcing notes where provided, and customer reviews. On Chitral Hive, each listing shows price in PKR, availability, and imagery so you can compare before checkout. Prefer listings that clearly state the region of origin.",
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
    {
      "@type": "Question",
      name: "What is the price of Shilajit in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shilajit prices in Pakistan vary by grade, form (raw resin vs capsules), and quantity — typically ranging from a few hundred to several thousand PKR. See current listings on Chitral Hive for exact PKR prices and stock availability.",
      },
    },
    {
      "@type": "Question",
      name: "What is Chitral House Shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chitral House Shilajit refers to Shilajit sourced from or associated with the Chitral region of KPK. Chitral Hive is a Chitral-rooted e-commerce store offering authentic Chitrali Shilajit (Salajeet) products online. See our dedicated Chitral House Shilajit page for more details.",
      },
    },
  ],
};

const SHILAJIT_BENEFITS = [
  {
    title: "Natural Mineral Source",
    desc: "Shilajit is packed with fulvic acid, humic acid, and 80+ trace minerals formed over centuries from decomposed plant matter in mountain rock.",
    icon: "⚗️",
  },
  {
    title: "Traditional Wellness Use",
    desc: "Used in Ayurvedic, Unani, and traditional mountain medicine for centuries across South and Central Asia as a natural energy and vitality supplement.",
    icon: "🌿",
  },
  {
    title: "Chitral / Hindu Kush Origin",
    desc: "Shilajit from Chitral's Hindu Kush range is gathered at high altitudes from rock formations in clean, unpolluted mountain environments.",
    icon: "🏔️",
  },
  {
    title: "Two Common Forms",
    desc: "Available as raw resin (the traditional form — dissolve a pea-sized amount in warm water) and as standardised capsules for consistent dosing.",
    icon: "💊",
  },
];

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

  // ItemList schema signals to Google this is a category/product-listing page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "Shilajit (Salajeet) Products — Chitral Hive Pakistan",
    description:
      "Browse authentic Himalayan Shilajit and Salajeet products available to buy online in Pakistan at Chitral Hive. PKR pricing, nationwide delivery.",
    url: pageUrl,
    numberOfItems: "See product listings",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
  };

  return (
    <ShopLayout1
      navCategories={navCategories}
      generalSetting={GeneralSetting}
      footerData={null}
    >
      <SEO
        title="Shilajit (Salajeet) Pakistan — Buy Online"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords={`${SHILAJIT_KEYWORD_PHRASES}, buy Shilajit Chitral Hive, Himalayan Shilajit online store Pakistan, Chitral house shilajit, salajeet price Pakistan, shilajit resin Pakistan, salajeet online Pakistan`}
        canonical={pageUrl}
        type="website"
      />
      {breadcrumb && <StructuredData data={breadcrumb} />}
      <StructuredData data={webPageSchema} />
      <StructuredData data={itemListSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#1c1917 0%,#292524 50%,#57534e 100%)",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <H1
            sx={{
              color: "white",
              fontSize: { xs: "1.9rem", md: "2.8rem" },
              fontWeight: 900,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Pure Shilajit (Salajeet) — Buy Online in Pakistan
          </H1>
          <Paragraph
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "0.97rem", md: "1.1rem" },
              maxWidth: 600,
              mx: "auto",
              mb: 1.5,
              lineHeight: 1.8,
            }}
          >
            Authentic Himalayan{" "}
            <strong style={{ color: "white" }}>Shilajit</strong> — also known as{" "}
            <strong style={{ color: "white" }}>Salajeet (سلاجیت)</strong> — from
            Chitral's Hindu Kush mountains. Browse current listings with PKR pricing
            and delivery across Pakistan.
          </Paragraph>
          <Paragraph
            sx={{ color: "rgba(255,255,255,0.6)", fontSize: 13, mb: 3 }}
          >
            Also search:{" "}
            <Link href="/search/salajeet" style={{ color: "rgba(255,255,255,0.8)" }}>
              Salajeet
            </Link>{" "}
            ·{" "}
            <Link href="/chitral-house-shilajit" style={{ color: "rgba(255,255,255,0.8)" }}>
              Chitral House Shilajit
            </Link>
          </Paragraph>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
            <Button
              component={Link}
              href="/search/shilajit"
              variant="contained"
              size="large"
              sx={{ bgcolor: "white", color: "#1c1917", fontWeight: 700, "&:hover": { bgcolor: "grey.100" } }}
            >
              Shop Shilajit listings
            </Button>
            <Button
              component={Link}
              href="/products"
              variant="outlined"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              All products
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 4, md: 6 }}>
        <Container maxWidth="lg">

          {/* Intro text */}
          <H2 mb={1.5} fontSize={{ xs: 21, md: 25 }}>
            Shilajit & Salajeet from Chitral — What You Should Know
          </H2>
          <Paragraph color="grey.700" mb={2} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            Chitral Hive is a Pakistani e-commerce store for authentic Chitrali
            goods. This page helps you find{" "}
            <strong>Himalayan Shilajit</strong> — also searched as{" "}
            <strong>Salajeet</strong> or <strong>سلاجیت</strong> — with nationwide
            delivery and PKR pricing on product pages. Chitral's location within the{" "}
            <strong>Hindu Kush mountain range</strong> makes it one of the primary
            sourcing regions for high-quality Shilajit in Pakistan.
          </Paragraph>

          {/* About grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mb: 5,
            }}
          >
            {SHILAJIT_BENEFITS.map(({ icon, title, desc }) => (
              <Box
                key={title}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 3,
                  display: "flex",
                  gap: 2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ fontSize: 26, lineHeight: 1, mt: 0.25 }}>{icon}</Box>
                <Box>
                  <H3 mb={0.5} fontSize={15}>{title}</H3>
                  <Paragraph color="grey.600" sx={{ mb: 0, lineHeight: 1.7, fontSize: 13 }}>
                    {desc}
                  </Paragraph>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Live listings */}
          <H2 mb={1} fontSize={{ xs: 19, md: 22 }}>
            Shilajit Products on Chitral Hive
          </H2>
          <Paragraph color="grey.600" mb={2} sx={{ fontSize: 14 }}>
            Live results — search term: <strong>shilajit</strong>. Try{" "}
            <Link href="/search/salajeet" style={{ color: "inherit" }}>
              Salajeet search
            </Link>{" "}
            if you use the Urdu-market spelling.
          </Paragraph>
          <SearchCard1List category="shilajit" ProductReviews={ProductReviews} />

          <Divider sx={{ my: 4 }} />

          {/* Why Chitral / Himalayan */}
          <H2 mb={1.5} fontSize={{ xs: 19, md: 22 }}>
            Why Chitral & Himalayan Shilajit?
          </H2>
          <Paragraph color="grey.700" mb={2} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            In Pakistan, <strong>Salajeet</strong> and <strong>Shilajit</strong> refer
            to the same category of product. Optimising for both terms helps customers
            find Chitral Hive whether they search in English or Urdu transliteration.
            Our catalog highlights products tied to{" "}
            <strong>Chitral, Khyber Pakhtunkhwa</strong> and broader Himalayan sourcing
            narratives shoppers expect when comparing resin quality and origin.
            Individual SKUs may describe lab checks or grading on their own product
            pages.
          </Paragraph>

          {/* Internal links */}
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
              mb: 5,
            }}
          >
            <H2 mb={1.5} fontSize={{ xs: 19, md: 21 }}>
              More Shilajit Resources on Chitral Hive
            </H2>
            <Paragraph color="grey.700" mb={3} sx={{ lineHeight: 1.8 }}>
              Looking for a specific type of Chitrali Shilajit? Browse related pages
              or search directly for the product you need.
            </Paragraph>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} flexWrap="wrap">
              <Button component={Link} href="/chitral-house-shilajit" variant="outlined" color="primary">
                Chitral House Shilajit
              </Button>
              <Button component={Link} href="/search/salajeet" variant="outlined" color="primary">
                Search Salajeet
              </Button>
              <Button component={Link} href="/chitral-food" variant="outlined" color="primary">
                Chitral food guide
              </Button>
              <Button component={Link} href="/products" variant="outlined" color="primary">
                All products
              </Button>
            </Stack>
          </Box>

          {/* FAQ */}
          <H2 mb={2.5} fontSize={{ xs: 19, md: 22 }}>
            Shilajit (Salajeet) Pakistan — Frequently Asked Questions
          </H2>
          {faqSchema.mainEntity.map((item, i) => (
            <Box
              key={i}
              sx={{
                mb: 2,
                bgcolor: "white",
                borderRadius: 2,
                p: { xs: 2.5, md: 3 },
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <H3 mb={0.75} fontSize={15} sx={{ color: "primary.main" }}>
                {item.name}
              </H3>
              <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.8 }}>
                {item.acceptedAnswer.text}
              </Paragraph>
            </Box>
          ))}
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
