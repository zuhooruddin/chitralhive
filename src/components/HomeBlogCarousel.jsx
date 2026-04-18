import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import LazyImage from "components/LazyImage";
import format from "date-fns/format";
import NextLink from "next/link";
import { useCallback, useRef } from "react";

const excerptClamp = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const categoryTint = (section) => {
  const key = String(section || "").toLowerCase();
  const map = {
    "car news": { bg: "#FEE2E2", color: "#B91C1C" },
    "bike news": { bg: "#FCE7F3", color: "#BE185D" },
    "bike advice": { bg: "#DBEAFE", color: "#1D4ED8" },
    "guides & how-to": { bg: "#FFEDD5", color: "#C2410C" },
    guides: { bg: "#FFEDD5", color: "#C2410C" },
    "how-to": { bg: "#FFEDD5", color: "#C2410C" },
  };
  if (map[key]) return map[key];
  for (const [k, v] of Object.entries(map)) {
    if (key.includes(k)) return v;
  }
  return { bg: "rgba(210, 63, 87, 0.12)", color: "primary.main" };
};

const formatDateRibbon = (value) => {
  if (!value) return "";
  try {
    return format(new Date(value), "EEE MMM d yyyy");
  } catch {
    return String(value);
  }
};

const pickViews = (post) => {
  const n =
    post?.views ??
    post?.view_count ??
    post?.page_views ??
    post?.read_count;
  const num = typeof n === "string" ? parseInt(n, 10) : n;
  return Number.isFinite(num) && num > 0 ? num : null;
};

const HomeBlogCarousel = ({
  posts = [],
  title = "News, Reviews, Advice & Guides",
  viewAllHref = "/blog",
}) => {
  const stripRef = useRef(null);

  const scrollStrip = useCallback((direction) => {
    const el = stripRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.82);
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  if (!Array.isArray(posts) || posts.length === 0) return null;

  return (
    <Box
      component="section"
      aria-label="Latest blog posts"
      sx={{
        py: { xs: 3, md: 5 },
        bgcolor: "#fff",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 2.5, pr: { xs: 0, md: 5 } }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: -0.5,
              fontSize: { xs: "1.35rem", sm: "1.6rem", md: "1.85rem" },
              lineHeight: 1.2,
              color: "text.primary",
            }}
          >
            {title}
          </Typography>
          <MuiLink
            component={NextLink}
            href={viewAllHref}
            underline="hover"
            sx={{ fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}
          >
            View All Blogs
          </MuiLink>
        </Stack>

        <Box sx={{ position: "relative" }}>
          <IconButton
            aria-label="Scroll blog cards left"
            onClick={() => scrollStrip(-1)}
            sx={{
              display: "flex",
              position: "absolute",
              left: { xs: 4, md: -12 },
              top: "50%",
              transform: { xs: "translateY(-50%)", md: "translate(-50%, -50%)" },
              zIndex: 2,
              bgcolor: "common.white",
              boxShadow: "0 8px 28px rgba(15, 23, 42, 0.12)",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": { bgcolor: "grey.50" },
            }}
            size="small"
          >
            
            <ChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Scroll blog cards right"
            onClick={() => scrollStrip(1)}
            sx={{
              display: "flex",
              position: "absolute",
              right: { xs: 4, md: -12 },
              top: "50%",
              transform: { xs: "translateY(-50%)", md: "translate(50%, -50%)" },
              zIndex: 2,
              bgcolor: "common.white",
              boxShadow: "0 8px 28px rgba(15, 23, 42, 0.12)",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": { bgcolor: "grey.50" },
            }}
            size="small"
          >
            <ChevronRight />
          </IconButton>

          <Box
            ref={stripRef}
            onWheel={(e) => {
              if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
            }}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "hidden",
              overscrollBehaviorX: "none",
              touchAction: "pan-y",
              mx: { xs: -1, sm: 0 },
              px: { xs: 1, sm: 0 },
              // No horizontal scrollbar; navigation is via arrow buttons only.
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {posts.map((post) => {
              if (!post?.slug) return null;
              const category =
                post.section && post.section !== "Blog" ? post.section : null;
              const tint = categoryTint(category);
              const dateLabel = formatDateRibbon(
                post.publishedTime || post.createdAt
              );
              const views = pickViews(post);
              const authorName =
                post.author_name ||
                post.author ||
                "Chitral Hive Editorial Team";
              const authorImg =
                post.author_image ||
                post.author_avatar_url ||
                post.author_image_url ||
                "";

              return (
                <Card
                  key={post.slug}
                  variant="outlined"
                  sx={{
                    flex: "0 0 auto",
                    width: { xs: "min(88vw, 320px)", sm: 300, md: 280 },
                    scrollSnapAlign: "start",
                    borderRadius: 2,
                    overflow: "hidden",
                    borderColor: "divider",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 40px rgba(15, 23, 42, 0.12)",
                    },
                  }}
                >
                  <CardActionArea
                    component={NextLink}
                    href={`/blog/${post.slug}`}
                    sx={{ alignItems: "stretch", height: "100%" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 10",
                        bgcolor: "primary.main",
                        overflow: "hidden",
                      }}
                    >
                      {post.imgUrl ? (
                        <LazyImage
                          fill
                          src={post.imgUrl}
                          alt={post.title || "Blog post"}
                          objectFit="cover"
                          sizes="(max-width: 600px) 88vw, 280px"
                        />
                      ) : null}
                      {views != null ? (
                        <Chip
                          icon={
                            <LocalFireDepartment
                              sx={{ color: "common.white !important", ml: "4px !important" }}
                            />
                          }
                          label={views}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            height: 26,
                            fontWeight: 800,
                            bgcolor: "#F97316",
                            color: "common.white",
                            "& .MuiChip-label": { px: 1 },
                          }}
                        />
                      ) : null}
                    </Box>
                    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                      <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", gap: 0.75, mb: 1 }}>
                        {category ? (
                          <Chip
                            label={category}
                            size="small"
                            sx={{
                              height: 22,
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              bgcolor: tint.bg,
                              color: tint.color,
                            }}
                          />
                        ) : null}
                        <Chip
                          label="Local"
                          size="small"
                          sx={{
                            height: 22,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            bgcolor: "grey.200",
                            color: "text.secondary",
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: -0.2,
                          lineHeight: 1.35,
                          mb: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.title}
                      </Typography>
                      {post.description ? (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ...excerptClamp, lineHeight: 1.65, mb: 1.5 }}
                        >
                          {post.description}
                        </Typography>
                      ) : null}
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: "auto" }}>
                        <Avatar
                          src={authorImg || undefined}
                          alt=""
                          sx={{ width: 28, height: 28, fontSize: "0.75rem" }}
                        >
                          {authorName.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ lineHeight: 1.4, flex: 1, minWidth: 0 }}
                        >
                          {authorName}
                          {dateLabel ? (
                            <>
                              {" "}
                              <Box component="span" sx={{ color: "text.disabled" }}>
                                •
                              </Box>{" "}
                              {dateLabel}
                            </>
                          ) : null}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBlogCarousel;
