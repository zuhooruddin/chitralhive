import { Apps, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Chip,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SEO from "components/SEO";
import StructuredData from "components/schema/StructuredData";
import { FlexBox } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import LazyImage from "components/LazyImage";
import ProductCard1List from "components/products/ProductCard1List";
import ProductCard9List from "components/products/ProductCard9List";
import { H1, H3, H5, Paragraph } from "components/Typography";
import { useCallback, useState } from "react";
import api from "utils/api/market-2";
import { buildImageUrl } from "utils/buildImageUrl";
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
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL || "https://api.chitralhive.com";
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_BACKEND_API_BASE || "https://api.chitralhive.com/api";
  const heroImage = buildImageUrl(
    categoryDetail.icon || categoryDetail.image || categoryDetail.imgUrl || "",
    imageBaseUrl,
    apiBaseUrl
  );

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

      <Container sx={{ mt: { xs: 2.5, md: 4 }, mb: 6 }}>
        <Card
          elevation={0}
          sx={{
            mb: 3,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            p: { xs: 2, sm: 2.5, md: 3 },
            background:
              "linear-gradient(180deg, rgba(210,63,87,0.04) 0%, rgba(210,63,87,0.00) 85%)",
          }}
        >
          <Grid container spacing={2.5} alignItems="center">
            <Grid item xs={12} md={heroImage ? 8 : 12}>
              <Paragraph color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                Chitrali Collection
              </Paragraph>
              <H1 component="h1" sx={{ mb: 1.25 }}>
                {categoryDetail.name} in Pakistan
              </H1>
              <Paragraph color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 720 }}>
                {categoryDescription}
              </Paragraph>
              <FlexBox flexWrap="wrap" gap={1} mt={2}>
                <Chip label="Authentic products" size="small" />
                <Chip label="Nationwide delivery" size="small" />
                <Chip label="Secure checkout" size="small" />
              </FlexBox>
            </Grid>

            {heroImage && (
              <Grid item xs={12} md={4}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 2.5,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "#fff",
                    maxWidth: downMd ? "100%" : 280,
                    ml: downMd ? 0 : "auto",
                  }}
                >
                  <LazyImage
                    src={heroImage}
                    width={560}
                    height={420}
                    objectFit="cover"
                    alt={`${categoryDetail.name} category`}
                  />
                </Card>
              </Grid>
            )}
          </Grid>
        </Card>

        <Card
          elevation={0}
          sx={{
            mb: 3.5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            p: { xs: 1.25, sm: "0.9rem 1rem" },
            borderRadius: 2.5,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <H5 sx={{ mb: 0 }}>{categoryDetail.name} Products</H5>
          <FlexBox alignItems="center" my="0.15rem">
            <Paragraph color="grey.600" mr={0.75}>
              View:
            </Paragraph>

            <IconButton size="small" onClick={toggleView("grid")}>
              <Apps color={view === "grid" ? "primary" : "inherit"} fontSize="small" />
            </IconButton>

            <IconButton size="small" onClick={toggleView("list")}>
              <ViewList color={view === "list" ? "primary" : "inherit"} fontSize="small" />
            </IconButton>
          </FlexBox>
        </Card>

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
