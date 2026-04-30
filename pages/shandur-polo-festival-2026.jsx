import { Box, Button, Chip, Container, Divider, Stack } from "@mui/material";
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
const pageUrl = `${base}/shandur-polo-festival-2026`;
const metaTitle = "Shandur Polo Festival 2026 — Dates, Travel & Chitrali Products | Chitral Hive";
const metaDescription =
  "Everything about Shandur Polo Festival 2026: event dates (July 2026), travel tips to Shandur Pass, what to pack, and authentic Chitrali products to buy. Plan your trip to the world's highest polo ground.";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Shandur Polo Festival 2026",
  alternateName: ["Shandur Festival 2026", "Shandur Polo Tournament 2026"],
  description:
    "Annual polo tournament at Shandur Pass (3,700 m) in Chitral, KPK — the highest polo ground in the world. Teams from Chitral and Gilgit-Baltistan compete in traditional free-style polo.",
  startDate: "2026-07-07",
  endDate: "2026-07-09",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Shandur Pass Polo Ground",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shandur Pass",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    geo: { "@type": "GeoCoordinates", latitude: "36.07", longitude: "72.52" },
  },
  organizer: {
    "@type": "GovernmentOrganization",
    name: "Khyber Pakhtunkhwa Tourism Authority (KPTA)",
    url: "https://kpta.gov.pk",
  },
  image: `${base}/images/og-image.jpg`,
  url: pageUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the Shandur Polo Festival 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Shandur Polo Festival 2026 is expected in July 2026 (typically July 7–9). Exact dates are confirmed by KP Tourism Authority closer to the event.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the Shandur Polo Festival held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Shandur Pass (3,700 m / 12,139 ft), on the boundary between Chitral and Ghizer districts in northern Pakistan — the world's highest polo ground.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get to Shandur Pass from Chitral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shandur Pass is ~155 km from Chitral city (5–7 hours via Mastuj). Hire private jeeps or join tourist convoys. A 4WD vehicle is recommended on the partially unpaved road.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shandur Festival the same as Shandur Polo Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 'Shandur Festival,' 'Shandur Polo Festival,' and 'Shandur Polo Tournament' all refer to the same annual event at Shandur Pass.",
      },
    },
  ],
};

const TIPS = [
  "Book transport from Chitral at least 1 week ahead — jeep seats fill fast.",
  "Pack warm layers — temperatures drop sharply at 3,700 m after sunset.",
  "Acclimatise in Chitral (1,500 m) for a day before ascending.",
  "Carry cash; ATMs and mobile data unavailable at the pass.",
  "Bring sun protection — UV intensity is extreme at altitude.",
];

export default function ShandurPoloFestival2026({ navCategories, GeneralSetting }) {
  const breadcrumb = generateBreadcrumbSchema(
    [{ name: "Home", url: base }, { name: "Shandur Polo Festival 2026", url: pageUrl }],
    { baseUrl: base }
  );

  return (
    <ShopLayout1 navCategories={navCategories} generalSetting={GeneralSetting} footerData={null}>
      <SEO
        title="Shandur Polo Festival 2026"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords="Shandur polo festival 2026, Shandur festival 2026, Shandur Pass polo tournament, Chitral polo festival 2026, highest polo ground world, Shandur Pass travel, Chitral festivals 2026"
        canonical={pageUrl}
        type="website"
      />
      {breadcrumb && <StructuredData data={breadcrumb} />}
      <StructuredData data={eventSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <Box sx={{ background: "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)", color: "white", py: { xs: 6, md: 9 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip label="Annual Festival • Shandur Pass, KPK" sx={{ bgcolor: "rgba(255,255,255,0.12)", color: "white", fontWeight: 700, mb: 2 }} />
          <H1 sx={{ color: "white", fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, lineHeight: 1.2, mb: 2 }}>
            Shandur Polo Festival 2026
          </H1>
          <Paragraph sx={{ color: "rgba(255,255,255,0.82)", fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: 620, mx: "auto", mb: 3, lineHeight: 1.8 }}>
            The world's highest polo ground. A cultural clash between Chitral and Gilgit-Baltistan. July 2026 at Shandur Pass, 3,700 m.
          </Paragraph>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
            <Button component={Link} href="/products" variant="contained" size="large" sx={{ bgcolor: "white", color: "#0f2027", fontWeight: 700, "&:hover": { bgcolor: "grey.100" } }}>
              Shop Chitrali Products
            </Button>
            <Button component={Link} href="/blog" variant="outlined" size="large" sx={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
              Read Travel Guides
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 4, md: 6 }}>
        <Container maxWidth="lg">
          {/* Key Facts */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4,1fr)" }, gap: 2, mb: 4 }}>
            {[{ label: "Dates", value: "July 7–9, 2026*" }, { label: "Altitude", value: "3,700 m (12,139 ft)" }, { label: "Location", value: "Shandur Pass, KPK" }, { label: "Duration", value: "3 Days" }].map(({ label, value }) => (
              <Box key={label} sx={{ bgcolor: "white", borderRadius: 2, p: 2.5, textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <Paragraph sx={{ color: "text.secondary", mb: 0.5, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>{label}</Paragraph>
                <Paragraph sx={{ fontWeight: 800, fontSize: { xs: 14, md: 16 }, color: "text.primary", mb: 0 }}>{value}</Paragraph>
              </Box>
            ))}
          </Box>
          <Paragraph sx={{ color: "text.secondary", mb: 4, fontSize: 12 }}>* Exact 2026 dates confirmed by KP Tourism Authority. Typically first or second week of July.</Paragraph>

          <H2 mb={1.5} fontSize={{ xs: 21, md: 25 }}>What is the Shandur Polo Festival?</H2>
          <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "52rem", lineHeight: 1.85 }}>
            The <strong>Shandur Polo Festival</strong> is Pakistan's most iconic outdoor event — an annual polo tournament at <strong>Shandur Pass (3,700 m)</strong> in Chitral, KPK. Also searched as <strong>Shandur Festival 2026</strong>, it features traditional free-style polo between teams from Chitral and Gilgit-Baltistan, live Chitrali and Gilgiti music, folk dances, local craft bazaars, and high-altitude camping.
          </Paragraph>

          <H2 mb={2} fontSize={{ xs: 20, md: 23 }}>Travel Tips for Shandur 2026</H2>
          <Box component="ul" sx={{ pl: 0, mb: 4, listStyle: "none" }}>
            {TIPS.map((tip) => (
              <Box component="li" key={tip} sx={{ display: "flex", gap: 1.5, mb: 1.5, alignItems: "flex-start" }}>
                <Box sx={{ color: "primary.main", fontWeight: 900, fontSize: 18, lineHeight: 1.4 }}>✓</Box>
                <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.75 }}>{tip}</Paragraph>
              </Box>
            ))}
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Products CTA */}
          <Box sx={{ bgcolor: "white", borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: "0 8px 30px rgba(0,0,0,0.07)", mb: 5 }}>
            <H2 mb={1.5} fontSize={{ xs: 20, md: 22 }}>Bring Authentic Chitrali Products Home</H2>
            <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "48rem", lineHeight: 1.85 }}>
              Visiting Shandur or celebrating from afar? Chitral Hive ships authentic Chitrali dry fruits, mountain honey, Shilajit (Salajeet), and traditional items nationwide across Pakistan.
            </Paragraph>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={Link} href="/products" variant="contained" color="primary" size="large">Browse all products</Button>
              <Button component={Link} href="/categories" variant="outlined" color="primary" size="large">Shop by category</Button>
              <Button component={Link} href="/shilajit-salajeet" variant="outlined" color="primary" size="large">Buy Shilajit online</Button>
            </Stack>
          </Box>

          {/* FAQ */}
          <H2 mb={2.5} fontSize={{ xs: 20, md: 23 }}>Shandur Festival 2026 — FAQ</H2>
          {faqSchema.mainEntity.map((item, i) => (
            <Box key={i} sx={{ mb: 2, bgcolor: "white", borderRadius: 2, p: { xs: 2.5, md: 3 }, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <H3 mb={0.75} fontSize={15} sx={{ color: "primary.main" }}>{item.name}</H3>
              <Paragraph color="grey.700" sx={{ mb: 0, lineHeight: 1.8 }}>{item.acceptedAnswer.text}</Paragraph>
            </Box>
          ))}

          <Divider sx={{ mt: 4, mb: 2 }} />
          <Paragraph color="grey.500" sx={{ fontSize: 12 }}>
            Chitral Hive is an e-commerce store for authentic Chitrali products and is not an official organizer of the Shandur Polo Festival. For official schedules contact KP Tourism Authority (KPTA).
          </Paragraph>
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
    console.error("shandur-polo-festival-2026 getStaticProps:", e.message);
    return { props: { navCategories: [], GeneralSetting: [] }, revalidate: 300 };
  }
}
