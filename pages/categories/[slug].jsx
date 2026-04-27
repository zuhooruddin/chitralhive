import { Apps, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SEO from "components/SEO";
import StructuredData from "components/schema/StructuredData";
import { FlexBox } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductCard1List from "components/products/ProductCard1List";
import ProductCard9List from "components/products/ProductCard9List";
import { H1, H3, H5, Paragraph } from "components/Typography";
import { useCallback, useState } from "react";
import api from "utils/api/market-2";
import { generateCategoryBreadcrumb } from "utils/breadcrumbSchema";

const CategoryPage = ({ categoryDetail, ProductReviews }) => {
  const [view, setView] = useState("grid");
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const toggleView = useCallback((nextView) => () => setView(nextView), []);

  if (!categoryDetail || !categoryDetail.name) {
    return (
      <ShopLayout1>
        <SEO
          title="Category Not Found"
          metaTitle="Category Not Found | Chitral Hive"
          description="The requested category could not be found."
          noindex
        />
        <Container sx={{ my: 8 }}>
          <H3 color="error.main">Category not found</H3>
        </Container>
      </ShopLayout1>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";
  const categorySlug = categoryDetail.slug || categoryDetail.id;
  const categoryUrl = `${baseUrl}/categories/${categorySlug}`;
  const categoryDescription =
    categoryDetail.metaDescription &&
    categoryDetail.metaDescription !== "undefined"
      ? categoryDetail.metaDescription
      : `Shop authentic ${categoryDetail.name} from Chitral Hive in Pakistan. Browse our wide collection of Chitrali ${categoryDetail.name} products with nationwide delivery.`;

  const categoryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": categoryUrl,
    name: categoryDetail.name,
    description: categoryDescription,
    url: categoryUrl,
    mainEntity: {
      "@type": "ItemList",
      name: `${categoryDetail.name} Products`,
      description: `Browse our collection of ${categoryDetail.name} products from Chitral Hive.`,
      numberOfItems: categoryDetail.products?.length || 0,
    },
  };

  const breadcrumbSchema = generateCategoryBreadcrumb(
    {
      name: categoryDetail.name,
      slug: categoryDetail.slug,
      id: categoryDetail.id,
    },
    { baseUrl }
  );

  return (
    <ShopLayout1>
      <StructuredData data={categoryStructuredData} />
      <StructuredData data={breadcrumbSchema} />
      <SEO
        title={categoryDetail.name}
        description={categoryDescription}
        metaTitle={
          categoryDetail.metaTitle &&
          categoryDetail.metaTitle !== "undefined"
            ? categoryDetail.metaTitle
            : `${categoryDetail.name} in Pakistan | Chitral Hive`
        }
        keywords={`${categoryDetail.name} Pakistan, Chitrali ${categoryDetail.name}, buy ${categoryDetail.name} online Pakistan, Chitral Hive, authentic Chitrali products, ${categoryDetail.name} price in Pakistan`}
        canonical={categoryUrl}
        type="website"
        category={categoryDetail.name}
      />

      <Container sx={{ mt: 4, mb: 6 }}>
        <H1 component="h1" sx={{ mb: 2 }}>
          {categoryDetail.name} in Pakistan
        </H1>
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          <Box>
            <H5>{categoryDetail.name} Products</H5>
            <Paragraph color="grey.600">
              Authentic Chitrali {categoryDetail.name} with delivery across Pakistan.
            </Paragraph>
          </Box>

          <FlexBox alignItems="center" columnGap={4} flexWrap="wrap" my="0.5rem">
            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                View:
              </Paragraph>

              <IconButton onClick={toggleView("grid")}>
                <Apps color={view === "grid" ? "primary" : "inherit"} fontSize="small" />
              </IconButton>

              <IconButton onClick={toggleView("list")}>
                <ViewList color={view === "list" ? "primary" : "inherit"} fontSize="small" />
              </IconButton>
            </FlexBox>
          </FlexBox>
        </Card>

        <Box component="section" sx={{ mb: 4 }}>
          <Paragraph color="text.secondary" sx={{ lineHeight: 1.9, mb: 1.5 }}>
            Explore authentic {categoryDetail.name} from Chitral Hive with carefully
            selected products sourced from trusted regional sellers. We focus on
            quality, clear product details, and practical packaging so every order
            reaches customers in good condition across Pakistan.
          </Paragraph>
          <Paragraph color="text.secondary" sx={{ lineHeight: 1.9, mb: 1.5 }}>
            This category includes handpicked options for daily use and gifting.
            You can compare sizes, ingredients, and product notes directly on each
            listing to choose items that match your needs and budget.
          </Paragraph>
          <Paragraph color="text.secondary" sx={{ lineHeight: 1.9 }}>
            Chitral Hive is built to support local producers by making traditional
            Chitrali products accessible nationwide. For the latest stock and
            pricing, review individual product pages before checkout.
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            {view === "grid" ? (
              <ProductCard1List category={categoryDetail} ProductReviews={ProductReviews || []} />
            ) : (
              <ProductCard9List category={categoryDetail} ProductReviews={ProductReviews || []} />
            )}
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export async function getServerSideProps(context) {
  const catSlug = context.query.slug;

  try {
    const [categoryDetail, ProductReviews] = await Promise.all([
      api.getCategoryDetail(catSlug),
      api.getReviews(),
    ]);

    if (!categoryDetail || !categoryDetail.name) {
      return { notFound: true };
    }

    return {
      props: {
        categoryDetail,
        ProductReviews,
      },
    };
  } catch (error) {
    console.error("Category page error:", error.message);
    return { notFound: true };
  }
}

export default CategoryPage;
