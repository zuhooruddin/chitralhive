import { Apps, FilterList, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SEO from "components/SEO";
import { FlexBox } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SearchCard1List from "components/products/SearchCard1List";
import SearchCard9List from "components/products/SearchCard9List";
import { H1, Paragraph } from "components/Typography";
import { useCallback, useState } from "react";
import api from "utils/api/market-2";
import { SHILAJIT_KEYWORD_PHRASES, SITE_URL } from "utils/seoConstants";

const ProductSearchResult = (props) => {
  const {catSlug,ProductReviews} = props;
  const [view, setView] = useState("grid");
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const toggleView = useCallback((v) => () => setView(v), []);

  const base = SITE_URL.replace(/\/$/, "");
  const slugLower = String(catSlug || "").toLowerCase();
  const isShilajitCluster =
    slugLower.includes("shilajit") || slugLower.includes("salajeet");
  const canonicalSearch = `${base}/search/${encodeURIComponent(catSlug || "")}`;

  return (
    <ShopLayout1>
      <SEO
        title={isShilajitCluster ? "Shilajit / Salajeet search" : "Search"}
        metaTitle={
          isShilajitCluster
            ? `Buy Shilajit (Salajeet) Online — Search | Chitral Hive`
            : `Search “${catSlug}” | Chitral Hive`
        }
        description={
          isShilajitCluster
            ? "Browse Shilajit and Salajeet products on Chitral Hive. Authentic Himalayan-associated resin, PKR pricing, delivery across Pakistan."
            : `Search results for “${catSlug}” — authentic Chitrali products online at Chitral Hive, Pakistan.`
        }
        canonical={canonicalSearch}
        keywords={isShilajitCluster ? SHILAJIT_KEYWORD_PHRASES : undefined}
        noindex
      />

      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
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
            <H1 fontSize="16px" fontWeight={600} lineHeight={1.5}>
              Searching for “ {catSlug} ”
            </H1>
            {/* <Paragraph color="grey.600">{categoryDetail['title']?searchCategory.length:0} results found</Paragraph> */}
          </Box>

          <FlexBox
            alignItems="center"
            columnGap={4}
            flexWrap="wrap"
            my="0.5rem"
          >
            {/* <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                Short by:
              </Paragraph>

              <TextField
                select
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Short by"
                defaultValue={sortOptions[0].value}
                sx={{
                  flex: "1 1 0",
                  minWidth: "150px",
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox> */}

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                View:
              </Paragraph>

              <IconButton onClick={toggleView("grid")}>
                <Apps
                  color={view === "grid" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

              <IconButton onClick={toggleView("list")}>
                <ViewList
                  color={view === "list" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

              {/* {downMd && (
                <Sidenav
                  handle={
                    <IconButton>
                      <FilterList fontSize="small" />
                    </IconButton>
                  }
                >
                  <ProductFilterCard />
                </Sidenav>
              )} */}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          {/* <Grid
            item
            md={3}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <ProductFilterCard />
          </Grid> */}

          <Grid item md={12} xs={12}>
            {
            view === "grid" ? <SearchCard1List category={catSlug} ProductReviews={ProductReviews && ProductReviews?ProductReviews:[]} /> : <SearchCard9List category={catSlug} ProductReviews={ProductReviews && ProductReviews?ProductReviews:[]} />
         
            }
            
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};



export async function getServerSideProps(context) {
  const catSlug = context.query['slug'];
  const ProductReviews=await api.getReviews()


  return {
    props: {
     
      catSlug,ProductReviews
    },
  };
}
export default ProductSearchResult;
