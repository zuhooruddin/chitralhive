import { Box, Button, Container } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import StructuredData from "components/schema/StructuredData";
import { H1, H2, Paragraph } from "components/Typography";
import Link from "next/link";
import apiNav from "utils/api/market-2";
import api from "utils/api/fashion-shop-2";
import {
  CHITRAL_DIARY_LANDING_PATH,
  SHILAJIT_LANDING_PATH,
  SITE_URL,
} from "utils/seoConstants";

const base = SITE_URL.replace(/\/$/, "");
const pageUrl = `${base}${CHITRAL_DIARY_LANDING_PATH}`;
const metaTitle = "Chitral Diary Website and Products | Chitral Hive Pakistan";
const metaDescription =
  "Explore the Chitral Hive website and discover authentic Chitrali products in Pakistan, including dry fruits, honey, shilajit, herbs, and traditional regional items with nationwide delivery.";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: base,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Chitral Diary Website and Products",
      item: pageUrl,
    },
  ],
};

export default function ChitralDiaryWebsiteAndProducts({
  navCategories,
  GeneralSetting,
}) {
  return (
    <ShopLayout1
      navCategories={navCategories}
      generalSetting={GeneralSetting}
      footerData={null}
    >
      <SEO
        title="Chitral Diary Website and Products"
        metaTitle={metaTitle}
        description={metaDescription}
        keywords="chitral diary website and products, Chitral Hive website, Chitrali products Pakistan, buy Chitrali products online, Chitral dry fruits, Chitral honey, Chitral shilajit, Chitral traditional products"
        canonical={pageUrl}
        type="website"
      />
      <StructuredData data={webPageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Box component="article" bgcolor="#F6F6F6" py={{ xs: 3, md: 5 }}>
        <Container maxWidth="lg">
          <H1 mb={2} fontSize={{ xs: 26, md: 34 }} lineHeight={1.2}>
            Chitral Diary Website and Products - Chitral Hive Guide
          </H1>

          <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "50rem" }}>
            If you searched for <strong>“chitral diary website and products”</strong>,
            this page connects you to the official Chitral Hive catalog. We offer
            authentic products inspired by Chitral including dry fruits, mountain
            honey, wellness items, and traditional regional selections.
          </Paragraph>

          <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
            <Button component={Link} href="/products" variant="contained" color="primary" size="large">
              Browse all products
            </Button>
            <Button component={Link} href="/categories" variant="outlined" color="primary" size="large">
              Explore categories
            </Button>
            <Button component={Link} href={SHILAJIT_LANDING_PATH} variant="outlined" color="primary" size="large">
              View Shilajit page
            </Button>
          </Box>

          <H2 mb={2} fontSize={22}>
            What you can find on the Chitral Hive website
          </H2>
          <Paragraph color="grey.700" mb={3} sx={{ maxWidth: "50rem" }}>
            Our website helps customers across Pakistan discover verified Chitrali
            items with clear pricing in PKR, product details, and delivery options.
            You can compare product types and place orders directly from product
            pages.
          </Paragraph>

          <H2 mb={2} fontSize={22}>
            Popular product groups
          </H2>
          <Paragraph color="grey.700" mb={4} sx={{ maxWidth: "50rem" }}>
            Shoppers frequently visit Chitral Hive for Chitrali dry fruits, local
            honey, herbal wellness products, and mountain-sourced specialty items.
            For updated collections, visit the categories and products pages linked
            above.
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
      props: {
        navCategories: navCategories || [],
        GeneralSetting: GeneralSetting || [],
      },
      revalidate: 300,
    };
  } catch (e) {
    console.error("chitral-diary landing getStaticProps:", e.message);
    return {
      props: {
        navCategories: [],
        GeneralSetting: [],
      },
      revalidate: 60,
    };
  }
}
