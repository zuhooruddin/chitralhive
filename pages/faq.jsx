import { Container } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H2, Paragraph } from "components/Typography";
import { Box, Card, Grid, styled } from "@mui/material";
import { useMemo } from "react";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  background: "white !important",
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
const FAQPage = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <ShopLayout1>
      <SEO 
        title="Frequently Asked Questions - Chitral Hive"
        description="Find answers to common questions about Chitrali products, shipping, delivery, payment methods, and more. Get help with ordering dry fruits, honey, and authentic Chitrali products online in Pakistan."
        metaTitle="FAQ - Chitrali Products Questions & Answers | Chitral Hive"
        keywords="Chitrali products FAQ, dry fruits questions, Chitrali honey FAQ, online shopping Pakistan FAQ, Chitral Hive help, product delivery questions, payment methods Pakistan, Chitrali products information"
        canonical="https://chitralhive.com/faq"
      />
      <Container
        sx={{
          mb: "70px",
          mt: 4,
        }}
      >
        <Box component="header" sx={{ mb: 4, textAlign: "center" }}>
          <H2 component="h1" sx={{ mb: 2 }}>
            Frequently Asked Questions About Chitrali Products
          </H2>
          <Paragraph color="text.secondary">
            Find answers to common questions about our authentic Chitrali products, shipping, and services
          </Paragraph>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            {publishedItems.map((item) => (
              <Box
                key={item.id}
                component="article"
                sx={{ mb: 3 }}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            ))}
            {publishedItems.length === 0 && (
              <Paragraph color="text.secondary">
                Browse common questions about ordering, shipping, delivery,
                payments, and authentic Chitrali products.
              </Paragraph>
            )}
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default FAQPage;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("faq")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("faq getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
