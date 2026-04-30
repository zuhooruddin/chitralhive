import { Box, Button, Container, Divider, Stack } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import StructuredData from "components/schema/StructuredData";
import { H1, H2, H3, Paragraph } from "components/Typography";
import Link from "next/link";
import apiNav from "utils/api/market-2";
import api from "utils/api/fashion-shop-2";
import { generateBreadcrumbSchema } from "utils/breadcrumbSchema";
import { SITE_URL } from "utils/seoConstants";

const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}/chitral-food`;
const metaTitle = "Chitral Food — Traditional Chitrali Cuisine, Recipes & Authentic Products | Chitral Hive";
const metaDescription =
  "Discover traditional Chitral food and Chitrali cuisine — from Shorak bread and Doudo soup to wild mountain honey and dried apricots. Buy authentic Chitrali food products online with nationwide delivery in Pakistan.";

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
      name: "What is traditional Chitral food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional Chitral food includes Shorak (thin bread), Doudo (a thick soup with corn flour and buttermilk), Badrang (dried apricots), Chamus (dried mulberries), local mountain honey, roasted walnuts, and various corn-based dishes. Chitrali cuisine reflects the region's mountain culture with emphasis on dried and preserved foods.",
      },
    },
    {
      "@type": "Question",
      name: "What Chitrali food products can I buy online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chitral Hive offers authentic Chitrali food products online including dried apricots (Badrang), walnuts, almonds, dried mulberries, wild mountain honey, Shilajit (Salajeet), and various other traditional Chitrali food items with nationwide delivery across Pakistan.",
      },
    },
    {
      "@type": "Question",
      name: "Is Chitrali honey different from regular honey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chitrali honey is mountain honey collected from beehives in the high-altitude valleys of Chitral, KPK. The bees forage on wildflowers in unpolluted mountain areas, producing honey with a distinct floral aroma and rich taste. It is highly prized across Pakistan.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular Chitrali dry fruits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular Chitrali dry fruits are dried apricots (Badrang), walnuts, almonds, dried mulberries, and wild pine nuts (Chilgoza). Chitral's mountain climate and clean environment produce some of the finest dry fruits in Pakistan.",
      },
    },
  ],
};

const FOOD_ITEMS = [
  {
    name: "Chitrali Dried Apricots (Badrang)",
    desc: "Sun-dried apricots from high-altitude Chitral orchards — a traditional Chitrali staple packed with natural sweetness and nutrients.",
    icon: "🍑",
  },
  {
    name: "Mountain Honey",
    desc: "Wild honey collected from Chitral's alpine meadows. Distinct floral aroma, rich taste, and natural purity prized across Pakistan.",
    icon: "🍯",
  },
  {
    name: "Chitrali Walnuts",
    desc: "Thin-shelled walnuts from Chitral's mountain valleys — renowned for their flavour, size, and oil content.",
    icon: "🌰",
  },
  {
    name: "Dried Mulberries",
    desc: "Sweet dried mulberries (Chamus) — a traditional Chitrali snack eaten as-is or mixed into local desserts and drinks.",
    icon: "🍇",
  },
  {
    name: "Chitrali Almonds",
    desc: "Small, flavour-rich almonds grown in Chitral's valleys. Eaten raw, roasted, or used in traditional Chitrali dishes.",
    icon: "🥜",
  },
  {
    name: "Shilajit (Salajeet)",
    desc: "Natural mineral resin from Chitral's high-altitude rocks — a traditional wellness food used across South and Central Asia.",
    icon: "🪨",
  },
];

export default function ChitralFoodPage({ navCategories, GeneralSetting }) {
  const breadcrumb = generateBreadcrumbSchema(
    [{ name: "Home", url: base }, { name: "Chitral Food", url: pageUrl }],
    { baseUrl: base }
  );

  return (
    <ShopLayout1 navCategories={navCategories} generalSetting={GeneralSetting} footerData={null}>
      <SEO
        title="Chitral Food"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords="chitral food, Chitrali food, traditional Chitral cuisine, Chitrali recipes, Chitrali dry fruits, Chitrali honey, Shorak bread, Doudo soup, Badrang apricots, Chitrali food products online Pakistan, buy Chitrali food Pakistan"
        canonical={pageUrl}
        type="website"
      />
      {breadcrumb && <StructuredData data={breadcrumb} />}
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <Box sx={{ background: "linear-gradient(135deg,#78350f 0%,#92400e 40%,#b45309 100%)", color: "white", py: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <H1 sx={{ color: "white", fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, lineHeight: 1.2, mb: 2 }}>
            Chitral Food & Traditional Cuisine
          </H1>
          <Paragraph sx={{ color: "rgba(255,255,255,0.85)", fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: 600, mx: "auto", mb: 3, lineHeight: 1.8 }}>
            Discover the rich flavours of Chitrali cuisine — from mountain honey and dried apricots to traditional breads and wellness foods from the valleys of northern Pakistan.
          </Paragraph>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
            <Button component={Link} href="/products" variant="contained" size="large" sx={{ bgcolor: "white", color: "#78350f", fontWeight: 700, "&:hover": { bgcolor: "orange.50" } }}>
              Shop Chitrali Food
            </Button>
            <Button component={Link} href="/categories" variant="outlined" size="large" sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
              Browse Categories
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 4, md: 6 }}>
        <Container maxWidth="lg">
          <H2 mb={1.5} fontSize={{ xs: 21, md: 25 }}>What is Chitrali Food?</H2>
          <Paragraph color="grey.700" mb={2} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            <strong>Chitral food</strong> is the traditional cuisine of Chitral district in Khyber Pakhtunkhwa, northern Pakistan. Shaped by the region's mountain geography and ancient Khowar culture, Chitrali cuisine centres on <strong>preserved and dried foods</strong> that store well through harsh winters — including sun-dried apricots, walnuts, almonds, dried mulberries, and wild honey.
          </Paragraph>
          <Paragraph color="grey.700" mb={4} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            Staple Chitrali dishes include <strong>Shorak</strong> (thin stone-ground bread), <strong>Doudo</strong> (a thick corn and buttermilk porridge), corn-based breads, and <strong>Chakalak</strong> (mixed vegetable curry). The region's clean mountain environment produces some of the finest natural food products in Pakistan, increasingly sought after across the country.
          </Paragraph>

          {/* Food Products Grid */}
          <H2 mb={2} fontSize={{ xs: 20, md: 23 }}>Popular Chitrali Food Products</H2>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3,1fr)" }, gap: 2, mb: 5 }}>
            {FOOD_ITEMS.map(({ name, desc, icon }) => (
              <Box key={name} sx={{ bgcolor: "white", borderRadius: 2, p: 3, boxShadow: "0 4px 16px rgba(0,0,0,0.05)", display: "flex", gap: 2 }}>
                <Box sx={{ fontSize: 28, lineHeight: 1 }}>{icon}</Box>
                <Box>
                  <H3 mb={0.5} fontSize={15}>{name}</H3>
                  <Paragraph color="grey.600" sx={{ mb: 0, lineHeight: 1.7, fontSize: 13 }}>{desc}</Paragraph>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Shop CTA */}
          <Box sx={{ bgcolor: "white", borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: "0 8px 30px rgba(0,0,0,0.07)", mb: 5 }}>
            <H2 mb={1.5} fontSize={{ xs: 19, md: 22 }}>Buy Authentic Chitrali Food Online</H2>
            <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "48rem", lineHeight: 1.85 }}>
              Chitral Hive ships authentic Chitrali food products — dry fruits, mountain honey, traditional items — nationwide across Pakistan. Order online and get genuine mountain-sourced products delivered to your door.
            </Paragraph>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={Link} href="/products" variant="contained" color="primary" size="large">Browse all products</Button>
              <Button component={Link} href="/categories" variant="outlined" color="primary" size="large">Shop by category</Button>
              <Button component={Link} href="/shilajit-salajeet" variant="outlined" color="primary" size="large">Shilajit / Salajeet</Button>
            </Stack>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* FAQ */}
          <H2 mb={2.5} fontSize={{ xs: 20, md: 23 }}>Chitral Food — Frequently Asked Questions</H2>
          {faqSchema.mainEntity.map((item, i) => (
            <Box key={i} sx={{ mb: 2, bgcolor: "white", borderRadius: 2, p: { xs: 2.5, md: 3 }, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <H3 mb={0.75} fontSize={15} sx={{ color: "primary.main" }}>{item.name}</H3>
              <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.8 }}>{item.acceptedAnswer.text}</Paragraph>
            </Box>
          ))}
        </Container>
      </Box>
    </ShopLayout1>
  );
}

export async function getStaticProps() {
  try {
    const [navCategories, GeneralSetting] = await Promise.all([
      apiNav.getNavCategories(),
      api.getGeneralSetting(),
    ]);
    return {
      props: { navCategories: navCategories || [], GeneralSetting: GeneralSetting || [] },
      revalidate: 3600,
    };
  } catch (e) {
    console.error("chitral-food getStaticProps:", e.message);
    return { props: { navCategories: [], GeneralSetting: [] }, revalidate: 300 };
  }
}
