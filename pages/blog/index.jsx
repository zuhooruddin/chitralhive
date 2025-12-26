import { Container, Grid, Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, H2, Paragraph } from "components/Typography";
import BlogCard1 from "components/blog-cards/BlogCard1";
import { blogPosts } from "../../src/data/blog-posts";


const BlogPage = () => {
  return (
    <ShopLayout1>
      <SEO
        title="Blog - Chitrali Products, Culture, Recipes & Guides"
        description="Discover authentic Chitrali culture, traditional recipes using dry fruits, product guides, and stories from Chitral. Learn about Chitrali honey, dry fruits, herbs, and traditional crafts."
        metaTitle="Chitrali Products Blog - Recipes, Culture & Product Guides"
        keywords="Chitrali recipes, Chitrali culture blog, dry fruits recipes, Chitrali product guides, Chitrali honey benefits, Chitrali traditional food, Chitrali cooking, Chitrali culture articles, Chitrali dry fruits uses, Chitrali heritage"
        canonical="https://chitralhive.com/blog"
        type="website"
      />
      <Container sx={{ py: 4 }}>
        <Box component="header" sx={{ mb: 5, textAlign: "center" }}>
          <H1 component="h1" sx={{ mb: 2 }}>
            Chitrali Products Blog
          </H1>
          <Paragraph color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
            Discover authentic Chitrali culture, traditional recipes, product guides, and stories from the heart of Chitral, Pakistan
          </Paragraph>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.slug}>
              <BlogCard1 blog={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default BlogPage;

