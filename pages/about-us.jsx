import { Container } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import { Card, Grid, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import Link from "next/link";
import { useMemo } from "react";


const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  background:"white !important",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.palette.paste[50],
  [theme.breakpoints.down("sm")]: {
    padding: "20px 30px",
    "& h3": {
      fontSize: 20,
    },
  },
})); // ======================================================

// ======================================================
const AboutUs = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <ShopLayout1>
      <SEO 
        title="About Us" 
        description={"Learn about Chitral Hive - your trusted online marketplace for authentic Chitrali products. Discover traditional crafts, local specialties, and unique items from Chitral. Shop now and support local artisans."}
        metaTitle = "About Us"
      />
      <Container
      sx={{
        mb: "70px",
      }}
      >
        <H1 component="h1" sx={{ mb: 3 }}>
          About Chitral Hive
        </H1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Link href="/">

              <LazyImage
                width={385}
                height={342}
                alt="Chitral Hive"
                layout="responsive"
                objectFit="contain"
                src="/assets/images/logo.svg"
              />

            </Link>
          </Grid>

          <Grid item xs={12} md={8}>
          <Paragraph color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.9 }}>
            Chitral Hive is a Pakistan-based ecommerce platform focused on authentic
            products from Chitral, including dry fruits, mountain honey, herbal
            items, and traditional handcrafted goods.
          </Paragraph>
          <Paragraph color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.9 }}>
            Our goal is to connect local producers with customers nationwide through
            transparent product information, fair pricing, secure checkout, and
            reliable delivery support.
          </Paragraph>
          <Paragraph color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
            Every order helps preserve regional skills and supports small businesses
            in northern communities while making genuine Chitrali products easier to
            discover online.
          </Paragraph>
          {publishedItems.map((item) => (
            <div key={item.id} dangerouslySetInnerHTML={{ __html: item.value }} />
          ))}
          {publishedItems.length === 0 && (
            <Paragraph color="text.secondary">
              Chitral Hive brings authentic Chitrali products to customers across
              Pakistan, supporting local artisans and traditional craftsmanship.
            </Paragraph>
          )}
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};


export default AboutUs;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("about-us")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("about-us getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
