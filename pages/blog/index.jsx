import { Container, Grid, Box, Pagination } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import BlogCard1 from "components/blog-cards/BlogCard1";
import PaginationLinks from "components/PaginationLinks";
import { fetchPublishedBlogsPaged } from "utils/api/blog";
import { useRouter } from "next/router";

const PAGE_SIZE = 12;
const siteBase = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";

const BlogPage = ({ posts, totalCount, page }) => {
  const router = useRouter();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const handlePageChange = (_, value) => {
    if (value <= 1) {
      router.push("/blog");
    } else {
      router.push({ pathname: "/blog", query: { page: value } });
    }
  };

  const canonical =
    page > 1 ? `${siteBase.replace(/\/$/, "")}/blog?page=${page}` : `${siteBase.replace(/\/$/, "")}/blog`;

  return (
    <ShopLayout1 navCategories={[]}>
      <SEO
        title="Blog - Chitrali Products, Culture, Recipes & Guides"
        description="Discover authentic Chitrali culture, traditional recipes, product guides, and stories from the heart of Chitral, Pakistan."
        metaTitle="Chitrali Products Blog - Recipes, Culture & Product Guides"
        keywords="Chitrali recipes, Chitrali culture blog, dry fruits recipes, Chitrali product guides, Chitrali honey benefits, Chitrali traditional food"
        canonical={canonical}
        type="website"
      />
      {totalCount > 0 && totalPages > 1 && (
        <PaginationLinks
          currentPage={page}
          totalPages={totalPages}
          baseUrl={`${siteBase.replace(/\/$/, "")}/blog`}
        />
      )}

      <Container sx={{ py: 4 }}>
        <Box component="header" sx={{ mb: 5, textAlign: "center" }}>
          <H1 component="h1" sx={{ mb: 2 }}>
            Chitrali Products Blog
          </H1>

          <Paragraph color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
            Discover authentic Chitrali culture, traditional recipes, product guides, and stories from the heart of Chitral.
          </Paragraph>
        </Box>

        <Grid container spacing={4}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Grid item xs={12} md={6} key={post.slug}>
                <BlogCard1
                  blog={{
                    ...post,
                    comments: 0,
                    url: `/blog/${post.slug}`,
                  }}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paragraph>No blog posts available.</Paragraph>
            </Grid>
          )}
        </Grid>

        {totalCount > 0 && totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        )}
      </Container>
    </ShopLayout1>
  );
};

export async function getServerSideProps(context) {
  const raw = context.query.page;
  let page = 1;
  if (raw !== undefined) {
    const n = parseInt(Array.isArray(raw) ? raw[0] : raw, 10);
    if (!Number.isNaN(n) && n >= 1) {
      page = n;
    }
  }

  try {
    const { count, results } = await fetchPublishedBlogsPaged(page, PAGE_SIZE);
    const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
    if (count > 0 && page > totalPages) {
      return {
        redirect: {
          destination: totalPages <= 1 ? "/blog" : `/blog?page=${totalPages}`,
          permanent: false,
        },
      };
    }
    return {
      props: {
        posts: results,
        totalCount: count,
        page,
      },
    };
  } catch (error) {
    console.error("Error loading blog page:", error);
    return {
      props: {
        posts: [],
        totalCount: 0,
        page: 1,
      },
    };
  }
}

export default BlogPage;

