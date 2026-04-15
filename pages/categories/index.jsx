import { Box, Container, Grid, styled } from "@mui/material";
import SEO from "components/SEO";
import { FlexBox } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import LazyImage from "components/LazyImage";
import BazaarCard from "components/BazaarCard";
import Link from "next/link";
import { H1, Paragraph, H3 } from "components/Typography";
import api from "utils/api/market-2";

const StyledBazaarCard = styled(BazaarCard)(() => ({
  height: "100%",
  display: "flex",
  overflow: "hidden",
  borderRadius: "10px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ImageWrapper = styled(Box)(() => ({
  textAlign: "center",
  position: "relative",
  paddingTop: "1rem",
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

const normalizeImageUrl = (imagePath, imageBaseUrl) => {
  if (!imagePath) return null;
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  if (imagePath.startsWith("/")) return `${imageBaseUrl}${imagePath}`;
  return `${imageBaseUrl}/${imagePath}`.replace(/([^:]\/)\/+/g, "$1");
};

const CategoriesIndexPage = ({ categories }) => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL || "https://api.chitralhive.com";

  return (
    <ShopLayout1>
      <SEO
        title="Categories"
        metaTitle="Chitrali Product Categories | Chitral Hive"
        description="Browse all Chitrali product categories on Chitral Hive, including dry fruits, honey, shilajit, spices, oils, and traditional foods."
        canonical="https://chitralhive.com/categories"
      />
      <Container sx={{ py: 5 }}>
        <H1 component="h1" sx={{ mb: 2 }}>
          Chitrali Product Categories
        </H1>
        <Paragraph color="text.secondary" sx={{ maxWidth: "760px", mb: 4 }}>
          Explore the main product collections on Chitral Hive and jump directly into the category that matches your buying intent.
        </Paragraph>

        <Grid container spacing={3}>
          {categories.map((category) => {
            const categoryName =
              category.category_name || category.name || category.title || "Category";
            const categorySlug = category.slug || category.id;
            const categoryImage = normalizeImageUrl(
              category.icon || category.image || category.imgUrl || "",
              imageBaseUrl
            );

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={categorySlug}>
                <StyledBazaarCard>
                  <Link
                    href={`/categories/${categorySlug}`}
                    style={{ textDecoration: "none", color: "inherit", height: "100%" }}>

                    <ImageWrapper>
                      {categoryImage ? (
                        <LazyImage
                          src={categoryImage}
                          width={240}
                          height={240}
                          objectFit="contain"
                          layout="fixed"
                          alt={categoryName}
                        />
                      ) : (
                        <Box sx={{ height: 240, display: "grid", placeItems: "center" }}>
                          <Paragraph color="grey.600">No image</Paragraph>
                        </Box>
                      )}
                    </ImageWrapper>
                    <ContentWrapper>
                      <FlexBox>
                        <Box flex="1 1 0" minWidth="0px" mr={1}>
                          <H3
                            mb={1}
                            title={categoryName}
                            fontSize="14px"
                            fontWeight="600"
                            className="title"
                            color="text.secondary"
                            style={{ textAlign: "center" }}
                          >
                            {categoryName}
                          </H3>
                        </Box>
                      </FlexBox>
                    </ContentWrapper>

                  </Link>
                </StyledBazaarCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export async function getServerSideProps() {
  try {
    const categories = await api.getNavCategories();

    return {
      props: {
        categories: Array.isArray(categories) ? categories : [],
      },
    };
  } catch (error) {
    console.error("Categories index error:", error.message);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default CategoriesIndexPage;
