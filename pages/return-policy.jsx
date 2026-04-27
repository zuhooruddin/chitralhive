import { Container } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import { Card, Grid, styled } from "@mui/material";
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
const ReturnPolicy = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <ShopLayout1>
      <SEO
        title="Return Policy"
        metaTitle="Return Policy - Chitral Hive"
        description="Review Chitral Hive's Return Policy for eligibility, return timelines, and steps to request returns or refunds for your orders."
        keywords="return policy Pakistan, Chitral Hive return policy, refund policy, exchange policy, order returns"
      />
      <Container
        sx={{
          mb: "70px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <H1 component="h1" mb={2}>Return Policy</H1>
            {publishedItems.map((item) => (
              <div
                key={item.id}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            ))}
            {publishedItems.length === 0 && (
              <Paragraph color="text.secondary">
                Our return policy explains eligibility, timelines, and the
                return/refund process for orders placed on Chitral Hive.
              </Paragraph>
            )}
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default ReturnPolicy;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("return-policy")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("return-policy getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
