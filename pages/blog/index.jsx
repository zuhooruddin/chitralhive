import { Container, Grid, Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import BlogCard1 from "components/blog-cards/BlogCard1";
import { fetchPublishedBlogs } from "utils/api/blog";

const BlogPage = ({ posts }) => {
  return (
    <ShopLayout1 navCategories={[]}>
      <SEO
        title="Blog - Chitrali Products, Culture, Recipes & Guides"
        description="Discover authentic Chitrali culture, traditional recipes, product guides, and stories from the heart of Chitral, Pakistan."
        metaTitle="Chitrali Products Blog - Recipes, Culture & Product Guides"
        keywords="Chitrali recipes, Chitrali culture blog, dry fruits recipes, Chitrali product guides, Chitrali honey benefits, Chitrali traditional food"
        canonical="https://chitralhive.com/blog"
        type="website"
      />

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
      </Container>
    </ShopLayout1>
  );
};

export async function getServerSideProps() {
  try {
    const posts = await fetchPublishedBlogs();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error loading blog page:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default BlogPage;

