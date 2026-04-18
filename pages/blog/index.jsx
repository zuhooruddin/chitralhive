import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Grid,
  Link as MuiLink,
  Pagination,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShopLayout1 from "components/layouts/ShopLayout1";
import PaginationLinks from "components/PaginationLinks";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import dynamic from "next/dynamic";

const AdBanner = dynamic(() => import("@/components/AdBanner"), {
  ssr: false,
  loading: () => null,
});
import LazyImage from "components/LazyImage";
import format from "date-fns/format";
import {
  fetchPublishedBlogMeta,
  fetchPublishedBlogsPaged,
} from "utils/api/blog";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 12;
const siteBase = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";

const pickQuery = (value) => {
  if (value === undefined) return "";
  const v = Array.isArray(value) ? value[0] : value;
  return typeof v === "string" ? v.trim() : "";
};

const buildBlogQuery = (page, category, keyword) => {
  const query = {};
  if (category) query.category = category;
  if (keyword) query.q = keyword;
  if (page > 1) query.page = page;
  return query;
};

const formatDateLabel = (value) => {
  if (!value) return "";
  try {
    return format(new Date(value), "dd MMM yyyy");
  } catch {
    return String(value);
  }
};

const clamp3 = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const FeaturedTile = ({ post, variant, fixedHeight }) => {
  if (!post) return null;
  const dateLabel = formatDateLabel(post.publishedTime || post.createdAt);
  const category = post.section && post.section !== "Blog" ? post.section : null;
  const isMain = variant === "main";
  const ratio = isMain ? "16 / 9" : "16 / 10";
  const useFixedHeight = Boolean(fixedHeight);
  const aspectRatioValue = useFixedHeight ? { xs: ratio, md: undefined } : ratio;

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        borderColor: "divider",
        position: "relative",
        bgcolor: "grey.100",
        boxShadow: isMain ? "0 16px 50px rgba(15, 23, 42, 0.10)" : "0 10px 32px rgba(15, 23, 42, 0.08)",
        transition: "transform .18s ease, box-shadow .18s ease",
        "&:hover": { transform: "translateY(-3px)" },
      }}
    >
      <CardActionArea component={Link} href={`/blog/${post.slug}`} sx={{ height: "100%" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: aspectRatioValue,
            ...(useFixedHeight ? { height: fixedHeight } : null),
            overflow: "hidden",
            bgcolor: "grey.100",
          }}
        >
          {post.imgUrl ? (
            <LazyImage
              fill
              src={post.imgUrl}
              alt={post.title || "Blog post"}
              objectFit="cover"
              sizes={isMain ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 33vw"}
            />
          ) : null}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.05) 0%, rgba(2,6,23,0.10) 35%, rgba(2,6,23,0.78) 100%)",
            }}
          />

          <Box sx={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip
              label="TRENDING"
              size="small"
              sx={{
                height: 24,
                fontWeight: 900,
                letterSpacing: 0.6,
                bgcolor: "rgba(59,130,246,0.95)",
                color: "common.white",
              }}
            />
            {category ? (
              <Chip
                label={category}
                size="small"
                sx={{
                  height: 24,
                  fontWeight: 800,
                  bgcolor: "rgba(2,6,23,0.55)",
                  color: "common.white",
                }}
              />
            ) : null}
          </Box>

          <Box sx={{ position: "absolute", left: 14, right: 14, bottom: 12 }}>
            <Typography
              sx={{
                fontWeight: 950,
                color: "common.white",
                letterSpacing: -0.4,
                lineHeight: 1.2,
                fontSize: isMain ? { xs: "1.1rem", sm: "1.5rem", md: "1.75rem" } : { xs: "1rem", md: "1.05rem" },
                ...clamp3,
                WebkitLineClamp: 2,
              }}
            >
              {post.title}
            </Typography>

            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mt: 0.75, color: "rgba(255,255,255,0.84)" }}>
              {dateLabel ? (
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  {dateLabel}
                </Typography>
              ) : null}
            </Stack>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const BlogGridCard = ({ post }) => {
  const dateLabel = formatDateLabel(post.publishedTime || post.createdAt);
  const category = post.section && post.section !== "Blog" ? post.section : null;

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        borderColor: "divider",
        transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.10)",
          borderColor: "transparent",
        },
      }}
    >
      <CardActionArea component={Link} href={`/blog/${post.slug}`} sx={{ height: "100%", alignItems: "stretch" }}>
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden", bgcolor: "grey.100" }}>
          {post.imgUrl ? (
            <LazyImage
              src={post.imgUrl}
              alt={post.title || "Blog post"}
              fill
              objectFit="cover"
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
          ) : (
            null
          )}
        </Box>
        <CardContent sx={{ p: 2.5 }}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
              {category ? (
                <Chip
                  label={category}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    bgcolor: (theme) => theme.palette.primary.main + "14",
                    color: "primary.main",
                  }}
                />
              ) : null}
              {dateLabel ? (
                <Typography variant="body2" color="text.secondary">
                  {dateLabel}
                </Typography>
              ) : null}
            </Stack>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: -0.3,
                lineHeight: 1.25,
                ...clamp3,
                WebkitLineClamp: 2,
              }}
            >
              {post.title}
            </Typography>

            {post.description ? (
              <Typography variant="body2" color="text.secondary" sx={{ ...clamp3, lineHeight: 1.75 }}>
                {post.description}
              </Typography>
            ) : null}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const BlogPage = ({ posts, totalCount, page, categories, activeCategory, initialKeyword }) => {
  const router = useRouter();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const origin = siteBase.replace(/\/$/, "");
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const sidebarSlot = process.env.NEXT_PUBLIC_ADSENSE_BLOG_SIDEBAR_SLOT;
  const showSidebarAd = Boolean(adsenseClient && sidebarSlot);
  const keyword = useMemo(() => pickQuery(router.query.q) || String(initialKeyword || ""), [router.query.q, initialKeyword]);
  const [keywordDraft, setKeywordDraft] = useState(keyword);
  useEffect(() => {
    setKeywordDraft(keyword);
  }, [keyword]);
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
    router.push({ pathname: "/blog", query: buildBlogQuery(value, activeCategory, keyword) });
  };

  const goCategory = (cat) => {
    router.push({ pathname: "/blog", query: buildBlogQuery(1, cat, keyword) });
  };

  const applyKeyword = (value) => {
    const next = String(value || "").trim();
    router.push({ pathname: "/blog", query: buildBlogQuery(1, activeCategory, next) });
  };

  const filteredPosts = useMemo(() => {
    if (!keyword) return posts;
    const k = keyword.toLowerCase();
    return posts.filter((p) => {
      const hay = `${p.title || ""} ${p.description || ""} ${p.section || ""}`.toLowerCase();
      return hay.includes(k);
    });
  }, [posts, keyword]);

  const featured = useMemo(() => {
    if (page !== 1) return [];
    if (activeCategory) return [];
    return filteredPosts.slice(0, 4);
  }, [filteredPosts, page, activeCategory]);

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
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 3, md: 5 } }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "text.secondary", mb: 2 }}>
          <MuiLink underline="hover" color="inherit" component={Link} href="/">
            Home
          </MuiLink>
          <Typography color="text.primary">Blog</Typography>
          {activeCategory ? (
            <Typography color="text.primary" noWrap sx={{ maxWidth: 220 }}>
              {activeCategory}
            </Typography>
          ) : null}
        </Breadcrumbs>

        <H1 component="h1" sx={{ mb: 0.75, fontWeight: 950, letterSpacing: -0.8 }}>
          {activeCategory || "Chitral Hive Blog - News, Reviews, Travels & Guides"}
        </H1>
        <Paragraph color="text.secondary" sx={{ maxWidth: 820, lineHeight: 1.8, mb: 3 }}>
          {activeCategory
            ? `Curated articles in “${activeCategory}” — product guides, wellness tips, and Chitrali culture stories.`
            : "Latest articles — product guides, wellness tips, and Chitrali culture stories from the heart of Chitral."}
        </Paragraph>

        {featured.length > 0 && featured[0] ? (
          <Box
            sx={{
              mb: 3,
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: { xs: "1fr", md: featured.length > 1 ? "2fr 1fr" : "1fr" },
              // Fixed row heights so the left tile can span rows without leaving a gap.
              gridTemplateRows: {
                md: featured.length > 1 ? "repeat(3, 168px)" : "auto",
                lg: featured.length > 1 ? "repeat(3, 184px)" : "auto",
              },
              alignItems: "stretch",
            }}
          >
            <Box sx={{ gridColumn: { xs: "1 / -1", md: "1 / 2" }, gridRow: { md: featured.length > 1 ? "1 / 4" : "auto" } }}>
              <FeaturedTile post={featured[0]} variant="main" fixedHeight={{ xs: undefined, md: "100%" }} />
            </Box>

            {featured.length > 1
              ? featured.slice(1, 4).map((p, idx) => (
                  <Box
                    key={p?.slug || idx}
                    sx={{
                      gridColumn: { xs: "1 / -1", md: "2 / 3" },
                      gridRow: { md: `${idx + 1} / ${idx + 2}` },
                    }}
                  >
                    <FeaturedTile post={p} variant="side" fixedHeight={{ xs: undefined, md: "100%" }} />
                  </Box>
                ))
              : null}
          </Box>
        ) : null}

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 3,
            mb: 3,
            borderColor: "divider",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                value={keywordDraft}
                onChange={(e) => setKeywordDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") applyKeyword(keywordDraft);
                }}
                placeholder="Search by keyword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <FormControl fullWidth>
                <InputLabel id="blog-category-label">Category</InputLabel>
                <Select
                  labelId="blog-category-label"
                  label="Category"
                  value={activeCategory || "All"}
                  onChange={(e) => goCategory(e.target.value === "All" ? "" : e.target.value)}
                >
                  <MenuItem value="All">All</MenuItem>
                  {categories.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {categories.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            sx={{
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
              sx={{ fontWeight: 800 }}
            />
            {categories.slice(0, 12).map((c) => (
              <Chip
                key={c}
                label={c}
                onClick={() => goCategory(c)}
                color={activeCategory === c ? "primary" : "default"}
                variant={activeCategory === c ? "filled" : "outlined"}
                sx={{ fontWeight: 800 }}
              />
            ))}
          </Stack>
        )}

        {filteredPosts.length > 0 ? (
          <Grid container spacing={2.5}>
            {filteredPosts.slice(featured.length > 0 ? featured.length : 0).map((post) => (
              <Grid key={post.slug} item xs={12} sm={6} md={4}>
                <BlogGridCard post={post} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
            <Paragraph color="text.secondary">
              {keyword ? "No articles match your search on this page." : "No articles in this category yet."}
            </Paragraph>
          </Paper>
        )}

        {showSidebarAd && <AdBanner slot={sidebarSlot} sx={{ mt: 3 }} />}

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
  const rawPage = context.query.page;
  let page = 1;
  if (rawPage !== undefined) {
    const n = parseInt(Array.isArray(rawPage) ? rawPage[0] : rawPage, 10);
    if (!Number.isNaN(n) && n >= 1) page = n;
  }

  const activeCategory = pickQuery(context.query.category);
  const initialKeyword = pickQuery(context.query.q);

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
        initialKeyword,
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
        initialKeyword,
      },
    };
  }
}

export default BlogPage;
