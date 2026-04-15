import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItemButton,
  ListItemText,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import BlogListingCard from "components/blog-cards/BlogListingCard";
import ShopLayout1 from "components/layouts/ShopLayout1";
import PaginationLinks from "components/PaginationLinks";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import {
  fetchPublishedBlogMeta,
  fetchPublishedBlogsPaged,
} from "utils/api/blog";
import Link from "next/link";
import { useRouter } from "next/router";

const PAGE_SIZE = 12;
const siteBase = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";

const pickQuery = (value) => {
  if (value === undefined) return "";
  const v = Array.isArray(value) ? value[0] : value;
  return typeof v === "string" ? v.trim() : "";
};

const buildBlogQuery = (page, category) => {
  const q = {};
  if (category) q.category = category;
  if (page > 1) q.page = page;
  return q;
};

const BlogPage = ({ posts, totalCount, page, categories, activeCategory }) => {
  const router = useRouter();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const origin = siteBase.replace(/\/$/, "");
  const paginationBase = (() => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    const s = params.toString();
    return s ? `${origin}/blog?${s}` : `${origin}/blog`;
  })();

  const canonical = (() => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (page > 1) params.set("page", String(page));
    const s = params.toString();
    return s ? `${origin}/blog?${s}` : `${origin}/blog`;
  })();

  const handlePageChange = (_, value) => {
    router.push({ pathname: "/blog", query: buildBlogQuery(value, activeCategory) });
  };

  const goCategory = (cat) => {
    router.push({ pathname: "/blog", query: buildBlogQuery(1, cat) });
  };

  const seoTitle =
    activeCategory && activeCategory.length > 0
      ? `${activeCategory} — Chitrali Products Blog`
      : "Blog - Chitrali Products, Culture, Recipes & Guides";

  return (
    <ShopLayout1 navCategories={[]}>
      <SEO
        title={seoTitle}
        description="Discover authentic Chitrali culture, traditional recipes, product guides, and stories from the heart of Chitral, Pakistan."
        metaTitle={seoTitle}
        keywords="Chitrali recipes, Chitrali culture blog, dry fruits recipes, Chitrali product guides, Chitrali honey benefits, Chitrali traditional food"
        canonical={canonical}
        type="website"
      />
      {totalCount > 0 && totalPages > 1 && (
        <PaginationLinks
          currentPage={page}
          totalPages={totalPages}
          baseUrl={paginationBase}
        />
      )}

      <Box
        component="section"
        sx={{
          bgcolor: "grey.50",
          borderBottom: 1,
          borderColor: "divider",
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "text.secondary" }}>
            <Link href="/" passHref legacyBehavior>
              <MuiLink underline="hover" color="inherit" component="a">
                Home
              </MuiLink>
            </Link>
            <Typography color="text.primary">Blog</Typography>
            {activeCategory ? (
              <Typography color="text.primary" noWrap sx={{ maxWidth: 220 }}>
                {activeCategory}
              </Typography>
            ) : null}
          </Breadcrumbs>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <H1 component="h1" sx={{ mb: 1.5, fontWeight: 800, letterSpacing: -0.5 }}>
                {activeCategory || "Blog"}
              </H1>
              <Paragraph color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.7 }}>
                {activeCategory
                  ? `Articles in “${activeCategory}”. Browse guides, recipes, and stories from Chitral Hive.`
                  : "Guides, recipes, and stories from the Hindu Kush — culture, wellness, and authentic Chitrali products."}
              </Paragraph>
            </Box>

            {categories.length > 0 && (
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                }}
              >
                <Chip
                  label="All"
                  onClick={() => goCategory("")}
                  color={!activeCategory ? "primary" : "default"}
                  variant={!activeCategory ? "filled" : "outlined"}
                  sx={{ fontWeight: 600 }}
                />
                {categories.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    onClick={() => goCategory(c)}
                    color={activeCategory === c ? "primary" : "default"}
                    variant={activeCategory === c ? "filled" : "outlined"}
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Stack>
            )}

            <Stack spacing={3}>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <BlogListingCard
                    key={post.slug}
                    blog={{
                      ...post,
                      comments: 0,
                      url: `/blog/${post.slug}`,
                    }}
                  />
                ))
              ) : (
                <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
                  <Paragraph color="text.secondary">No articles in this category yet.</Paragraph>
                </Paper>
              )}
            </Stack>

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
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 2.5,
                borderRadius: 2,
                position: { md: "sticky" },
                top: { md: 96 },
              }}
            >
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 1.2, color: "text.secondary" }}>
                Categories
              </Typography>
              <List dense disablePadding sx={{ mt: 1 }}>
                <ListItemButton
                  selected={!activeCategory}
                  onClick={() => goCategory("")}
                  sx={{ borderRadius: 1, mb: 0.5 }}
                >
                  <ListItemText primary="All articles" primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
                {categories.map((c) => (
                  <ListItemButton
                    key={c}
                    selected={activeCategory === c}
                    onClick={() => goCategory(c)}
                    sx={{ borderRadius: 1, mb: 0.5 }}
                  >
                    <ListItemText primary={c} />
                  </ListItemButton>
                ))}
              </List>
              <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: "divider" }}>
                <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                  Filter by topic to find product guides, wellness tips, and Chitrali culture stories.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export async function getServerSideProps(context) {
  const rawPage = context.query.page;
  let page = 1;
  if (rawPage !== undefined) {
    const n = parseInt(Array.isArray(rawPage) ? rawPage[0] : rawPage, 10);
    if (!Number.isNaN(n) && n >= 1) page = n;
  }

  const activeCategory = pickQuery(context.query.category);

  try {
    const [categories, { count, results }] = await Promise.all([
      fetchPublishedBlogMeta().catch(() => []),
      fetchPublishedBlogsPaged(page, PAGE_SIZE, activeCategory),
    ]);

    const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
    if (count > 0 && page > totalPages) {
      const base = activeCategory
        ? `/blog?category=${encodeURIComponent(activeCategory)}`
        : "/blog";
      const dest = totalPages <= 1 ? base : `${base}${base.includes("?") ? "&" : "?"}page=${totalPages}`;
      return { redirect: { destination: dest, permanent: false } };
    }

    return {
      props: {
        posts: results,
        totalCount: count,
        page,
        categories,
        activeCategory,
      },
    };
  } catch (error) {
    console.error("Error loading blog page:", error);
    return {
      props: {
        posts: [],
        totalCount: 0,
        page: 1,
        categories: [],
        activeCategory: "",
      },
    };
  }
}

export default BlogPage;
