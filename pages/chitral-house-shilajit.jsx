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
import { SHILAJIT_KEYWORD_PHRASES, SHILAJIT_LANDING_PATH, SITE_URL } from "utils/seoConstants";

const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}/chitral-house-shilajit`;

const metaTitle =
  "Chitral House Shilajit — Buy Authentic Chitrali Shilajit (Salajeet) Online | Chitral Hive";
const metaDescription =
  "Looking for Chitral House Shilajit? Chitral Hive is your trusted source for authentic Chitrali Shilajit (Salajeet) sourced from the mountain regions of Chitral, KPK. Browse current listings with PKR pricing and nationwide delivery across Pakistan.";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: metaTitle,
  description: metaDescription,
  inLanguage: ["en-PK", "ur-PK"],
  isPartOf: { "@type": "WebSite", name: "Chitral Hive", url: base },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Chitral House Shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chitral House Shilajit refers to Shilajit (also called Salajeet or سلاجیت in Urdu) that is sourced from or associated with the Chitral region of Khyber Pakhtunkhwa, Pakistan. Chitral Hive is a dedicated Chitrali online store offering authentic Shilajit products from mountain-sourced suppliers, with clear product details and PKR pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I buy Chitrali Shilajit online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can browse and purchase authentic Chitrali Shilajit (Salajeet) directly on Chitral Hive. Search for 'shilajit' or 'salajeet' on our platform to see current listings with prices in PKR. We deliver nationwide across Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, and Peshawar.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of Chitrali Shilajit in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chitrali Shilajit prices vary by grade, form (resin or capsules), and quantity. Visit Chitral Hive's Shilajit listings to see current PKR prices for available products. Product pages show full pricing, stock status, and sourcing details.",
      },
    },
    {
      "@type": "Question",
      name: "Is Chitrali Shilajit the same as Himalayan Shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shilajit from the Chitral region is part of the broader Himalayan/Hindu Kush Shilajit category. The Chitral district sits within the Hindu Kush mountain range, and Shilajit from this area is highly regarded for its purity and mineral richness. It is also known as Salajeet (سلاجیت) in Urdu and Pashto.",
      },
    },
  ],
};

function normalizeReviews(raw) {
  if (!raw) return { Reviews: [] };
  if (raw.Reviews && Array.isArray(raw.Reviews)) return raw;
  if (Array.isArray(raw)) return { Reviews: raw };
  return { Reviews: [] };
}

export default function ChitralHouseShilajitPage({
  navCategories,
  GeneralSetting,
  ProductReviews,
}) {
  const breadcrumb = generateBreadcrumbSchema(
    [
      { name: "Home", url: base },
      { name: "Shilajit (Salajeet) Pakistan", url: `${base}${SHILAJIT_LANDING_PATH}` },
      { name: "Chitral House Shilajit", url: pageUrl },
    ],
    { baseUrl: base }
  );

  return (
    <ShopLayout1
      navCategories={navCategories}
      generalSetting={GeneralSetting}
      footerData={null}
    >
      <SEO
        title="Chitral House Shilajit"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords={`chitral house shilajit, Chitrali shilajit, buy shilajit Chitral, Chitral salajeet online, pure shilajit Chitral Pakistan, authentic Chitrali salajeet, ${SHILAJIT_KEYWORD_PHRASES}`}
        canonical={pageUrl}
        type="website"
      />
      {breadcrumb && <StructuredData data={breadcrumb} />}
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#1c1917 0%,#292524 50%,#44403c 100%)",
          color: "white",
          py: { xs: 5, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <H1
            sx={{
              color: "white",
              fontSize: { xs: "1.8rem", md: "2.6rem" },
              fontWeight: 900,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Chitral House Shilajit (Salajeet)
          </H1>
          <Paragraph
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: "0.97rem", md: "1.08rem" },
              maxWidth: 580,
              mx: "auto",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            Authentic Shilajit — also known as{" "}
            <strong style={{ color: "white" }}>Salajeet (سلاجیت)</strong> — from the
            Chitral mountain region. Browse current listings with PKR pricing and
            nationwide delivery.
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
              href={SHILAJIT_LANDING_PATH}
              variant="outlined"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              Shilajit guide
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 4, md: 6 }}>
        <Container maxWidth="lg">

          {/* Intro */}
          <H2 mb={1.5} fontSize={{ xs: 20, md: 24 }}>
            About Chitrali Shilajit from Chitral Hive
          </H2>
          <Paragraph color="grey.700" mb={2} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            If you searched for <strong>"Chitral House Shilajit"</strong>, you are
            looking for authentic Shilajit associated with or sourced from{" "}
            <strong>Chitral, Khyber Pakhtunkhwa</strong> — and you've arrived at
            the right place. Chitral Hive is a dedicated Pakistani e-commerce store
            for verified Chitrali products including{" "}
            <strong>Shilajit (Salajeet · سلاجیت)</strong> from mountain-sourced
            suppliers.
          </Paragraph>
          <Paragraph color="grey.700" mb={4} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            Shilajit from the <strong>Chitral / Hindu Kush region</strong> is
            prized for its mineral density and traditional purity. Our listings
            show current PKR pricing, product details, availability, and customer
            reviews so you can compare and buy with confidence.
          </Paragraph>

          {/* Live Product Listings */}
          <H2 mb={1} fontSize={{ xs: 19, md: 22 }}>
            Current Shilajit Listings on Chitral Hive
          </H2>
          <Paragraph color="grey.600" mb={2} sx={{ fontSize: 14 }}>
            Live results for{" "}
            <strong>shilajit</strong>. Also try{" "}
            <Link href="/search/salajeet" style={{ color: "inherit" }}>
              salajeet search
            </Link>{" "}
            for Urdu-market results.
          </Paragraph>
          <SearchCard1List category="shilajit" ProductReviews={ProductReviews} />

          <Divider sx={{ my: 4 }} />

          {/* Benefits Info */}
          <H2 mb={2} fontSize={{ xs: 19, md: 22 }}>
            What to Know Before Buying Shilajit Online in Pakistan
          </H2>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mb: 4,
            }}
          >
            {[
              {
                title: "Check sourcing transparency",
                desc: "Prefer sellers who describe where their Shilajit comes from — Chitral, Gilgit, or Himalayan region.",
              },
              {
                title: "Look for clear PKR pricing",
                desc: "Avoid listings with vague pricing. Chitral Hive shows exact PKR prices per product.",
              },
              {
                title: "Read customer reviews",
                desc: "Verified buyer reviews on each listing help you compare quality and authenticity.",
              },
              {
                title: "Compare resin vs capsule forms",
                desc: "Shilajit comes as raw resin (more traditional) and capsules (easier to dose). Check the product page for form details.",
              },
            ].map(({ title, desc }) => (
              <Box
                key={title}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <H3 mb={0.5} fontSize={15} sx={{ color: "primary.main" }}>
                  {title}
                </H3>
                <Paragraph color="grey.600" sx={{ mb: 0, lineHeight: 1.7, fontSize: 13 }}>
                  {desc}
                </Paragraph>
              </Box>
            ))}
          </Box>

          {/* FAQ */}
          <H2 mb={2.5} fontSize={{ xs: 19, md: 22 }}>
            Chitral House Shilajit — FAQ
          </H2>
          {faqSchema.mainEntity.map((item, i) => (
            <Box
              key={i}
              sx={{ mb: 2, bgcolor: "white", borderRadius: 2, p: { xs: 2.5, md: 3 }, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
            >
              <H3 mb={0.75} fontSize={15} sx={{ color: "primary.main" }}>
                {item.name}
              </H3>
              <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.8 }}>
                {item.acceptedAnswer.text}
              </Paragraph>
            </Box>
          ))}

          <Divider sx={{ mt: 4, mb: 3 }} />

          {/* Internal links */}
          <H2 mb={2} fontSize={{ xs: 18, md: 20 }}>
            Also on Chitral Hive
          </H2>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} flexWrap="wrap">
            <Button component={Link} href={SHILAJIT_LANDING_PATH} variant="outlined" color="primary">
              Full Shilajit guide
            </Button>
            <Button component={Link} href="/products" variant="outlined" color="primary">
              All products
            </Button>
            <Button component={Link} href="/search/salajeet" variant="outlined" color="primary">
              Search Salajeet
            </Button>
            <Button component={Link} href="/chitral-food" variant="outlined" color="primary">
              Chitral food guide
            </Button>
          </Stack>
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
    console.error("chitral-house-shilajit getStaticProps:", e.message);
    return {
      props: { navCategories: [], GeneralSetting: [], ProductReviews: { Reviews: [] } },
      revalidate: 60,
    };
  }
}
