import { Box, Button, Chip, Container, Divider, Stack } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import StructuredData from "components/schema/StructuredData";
import { H1, H2, H3, Paragraph } from "components/Typography";
import Link from "next/link";
import apiNav from "utils/api/market-2";
import api from "utils/api/fashion-shop-2";
import {
  CHITRAL_DIARY_LANDING_PATH,
  SHILAJIT_LANDING_PATH,
  SHANDUR_FESTIVAL_LANDING_PATH,
  CHITRAL_FOOD_LANDING_PATH,
  SITE_URL,
} from "utils/seoConstants";

const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}${CHITRAL_DIARY_LANDING_PATH}`;
const metaTitle = "Chitral Diary Website and Products | Chitral Hive Pakistan";
const metaDescription =
  "Explore the Chitral Hive website — your guide to authentic Chitrali products in Pakistan. Discover dry fruits, honey, Shilajit, herbs, and traditional regional items sourced from Chitral, KPK, with nationwide delivery.";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "Chitral Diary Website and Products", item: pageUrl },
  ],
};

const SITE_SECTIONS = [
  {
    icon: "🥜",
    title: "Chitrali Dry Fruits",
    desc: "Apricots, walnuts, almonds, dried mulberries, pine nuts — sourced from Chitral's mountain orchards.",
    href: "/categories",
  },
  {
    icon: "🍯",
    title: "Mountain Honey",
    desc: "Pure wild honey from Chitral's alpine meadows — distinctively aromatic and unprocessed.",
    href: "/categories",
  },
  {
    icon: "🌿",
    title: "Herbs & Wellness",
    desc: "Traditional herbs, Shilajit (Salajeet), and natural wellness products from Chitral's high-altitude terrain.",
    href: SHILAJIT_LANDING_PATH,
  },
  {
    icon: "🎁",
    title: "Gifts & Handicrafts",
    desc: "Handmade Chitrali caps (Pakol), woollen shawls, and artisan items perfect as gifts.",
    href: "/products",
  },
  {
    icon: "🍑",
    title: "Traditional Foods",
    desc: "Chitrali food staples: dried apricots, corn flour, preserved mountain produce, and seasonal specialties.",
    href: CHITRAL_FOOD_LANDING_PATH,
  },
  {
    icon: "🏇",
    title: "Festival Specials",
    desc: "Celebrate Shandur Polo Festival 2026 and Chitrali culture with themed product selections.",
    href: SHANDUR_FESTIVAL_LANDING_PATH,
  },
];

const WHY_CHITRAL_HIVE = [
  { point: "Authentic sourcing from local Chitral producers and artisans." },
  { point: "Nationwide delivery across Pakistan — Karachi, Lahore, Islamabad, Peshawar and more." },
  { point: "Transparent product details, pricing in PKR, and easy online checkout." },
  { point: "Customer reviews and ratings on every product." },
  { point: "Supports local communities in Chitral, Khyber Pakhtunkhwa." },
];

export default function ChitralDiaryWebsiteAndProducts({ navCategories, GeneralSetting }) {
  return (
    <ShopLayout1 navCategories={navCategories} generalSetting={GeneralSetting} footerData={null}>
      <SEO
        title="Chitral Diary Website and Products"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords="chitral diary website and products, Chitral Hive website, Chitrali products Pakistan, buy Chitrali products online, Chitral dry fruits, Chitral honey, Chitral shilajit, Chitral traditional products, Chitral food online, Chitral handicrafts Pakistan"
        canonical={pageUrl}
        type="website"
      />
      <StructuredData data={webPageSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#1a3a2a 0%,#2d5a3d 50%,#4a7c59 100%)",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Official Chitral Hive Website"
            sx={{ bgcolor: "rgba(255,255,255,0.12)", color: "white", fontWeight: 700, mb: 2 }}
          />
          <H1
            sx={{
              color: "white",
              fontSize: { xs: "1.9rem", md: "2.7rem" },
              fontWeight: 900,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Chitral Diary Website & Products Guide
          </H1>
          <Paragraph
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: 600,
              mx: "auto",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            If you searched for <strong style={{ color: "white" }}>"chitral diary website and products"</strong>, you've arrived at the right place. Chitral Hive is Pakistan's dedicated online store for authentic Chitrali products — dry fruits, honey, Shilajit, herbs, and traditional items from Chitral, KPK.
          </Paragraph>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
            <Button
              component={Link}
              href="/products"
              variant="contained"
              size="large"
              sx={{ bgcolor: "white", color: "#1a3a2a", fontWeight: 700, "&:hover": { bgcolor: "grey.100" } }}
            >
              Browse All Products
            </Button>
            <Button
              component={Link}
              href="/categories"
              variant="outlined"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              Explore Categories
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 4, md: 6 }}>
        <Container maxWidth="lg">

          {/* About */}
          <H2 mb={1.5} fontSize={{ xs: 21, md: 25 }}>
            About the Chitral Hive Website
          </H2>
          <Paragraph color="grey.700" mb={2} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            <strong>Chitral Hive</strong> is a Pakistan-based e-commerce website dedicated to authentic products from Chitral, Khyber Pakhtunkhwa. We work directly with local producers, artisans, and farmers in Chitral to bring you verified, quality products with clear pricing in PKR and reliable nationwide delivery.
          </Paragraph>
          <Paragraph color="grey.700" mb={4} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            From <strong>Chitrali dry fruits</strong> and <strong>mountain honey</strong> to <strong>natural Shilajit (Salajeet)</strong> and <strong>traditional handicrafts</strong>, Chitral Hive is the definitive online destination for anyone looking to discover, explore, or buy Chitrali products.
          </Paragraph>

          {/* Site Sections Grid */}
          <H2 mb={2} fontSize={{ xs: 20, md: 23 }}>
            What You Can Find on Chitral Hive
          </H2>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3,1fr)" },
              gap: 2,
              mb: 5,
            }}
          >
            {SITE_SECTIONS.map(({ icon, title, desc, href }) => (
              <Box
                key={title}
                component={Link}
                href={href}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 3,
                  display: "flex",
                  gap: 2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  textDecoration: "none",
                  transition: "transform .15s ease, box-shadow .15s ease",
                  "&:hover": { transform: "translateY(-3px)", boxShadow: "0 8px 24px rgba(0,0,0,0.10)" },
                }}
              >
                <Box sx={{ fontSize: 26, lineHeight: 1, mt: 0.25 }}>{icon}</Box>
                <Box>
                  <H3 mb={0.5} fontSize={15} sx={{ color: "text.primary" }}>{title}</H3>
                  <Paragraph color="grey.600" sx={{ mb: 0, lineHeight: 1.7, fontSize: 13 }}>{desc}</Paragraph>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Why Chitral Hive */}
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
              mb: 5,
            }}
          >
            <H2 mb={2} fontSize={{ xs: 20, md: 22 }}>Why Shop at Chitral Hive?</H2>
            <Box component="ul" sx={{ pl: 0, listStyle: "none", mb: 3 }}>
              {WHY_CHITRAL_HIVE.map(({ point }) => (
                <Box
                  component="li"
                  key={point}
                  sx={{ display: "flex", gap: 1.5, mb: 1.5, alignItems: "flex-start" }}
                >
                  <Box sx={{ color: "primary.main", fontWeight: 900, fontSize: 18, lineHeight: 1.4 }}>✓</Box>
                  <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.75 }}>{point}</Paragraph>
                </Box>
              ))}
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={Link} href="/products" variant="contained" color="primary" size="large">
                Browse all products
              </Button>
              <Button component={Link} href={SHILAJIT_LANDING_PATH} variant="outlined" color="primary" size="large">
                View Shilajit page
              </Button>
              <Button component={Link} href="/about-us" variant="outlined" color="primary" size="large">
                About us
              </Button>
            </Stack>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Quick Links */}
          <H2 mb={2} fontSize={{ xs: 20, md: 23 }}>Popular Pages on Chitral Hive</H2>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4,1fr)" },
              gap: 1.5,
              mb: 4,
            }}
          >
            {[
              { label: "All Products", href: "/products" },
              { label: "All Categories", href: "/categories" },
              { label: "Shilajit / Salajeet", href: SHILAJIT_LANDING_PATH },
              { label: "Chitral Food Guide", href: CHITRAL_FOOD_LANDING_PATH },
              { label: "Shandur Festival 2026", href: SHANDUR_FESTIVAL_LANDING_PATH },
              { label: "Blog & Guides", href: "/blog" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact Us", href: "/contact-us" },
            ].map(({ label, href }) => (
              <Button
                key={label}
                component={Link}
                href={href}
                variant="outlined"
                size="small"
                sx={{ justifyContent: "flex-start", textAlign: "left", fontWeight: 600 }}
              >
                {label}
              </Button>
            ))}
          </Box>
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
      props: {
        navCategories: navCategories || [],
        GeneralSetting: GeneralSetting || [],
      },
      revalidate: 300,
    };
  } catch (e) {
    console.error("chitral-diary landing getStaticProps:", e.message);
    return {
      props: { navCategories: [], GeneralSetting: [] },
      revalidate: 60,
    };
  }
}
