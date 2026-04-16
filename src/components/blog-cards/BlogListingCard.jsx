import { AccessTime, ArticleOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import format from "date-fns/format";
import Link from "next/link";

const excerptSx = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  color: "text.secondary",
  lineHeight: 1.65,
};

const BlogListingCard = ({ blog }) => {
  const dateLabel = blog.createdAt
    ? (() => {
        try {
          return format(new Date(blog.createdAt), "dd MMM yyyy");
        } catch {
          return blog.createdAt;
        }
      })()
    : "";

  const category = blog.section && blog.section !== "Blog" ? blog.section : null;
  const showComments = typeof blog.comments === "number" ? blog.comments > 0 : Boolean(blog.comments);

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
        borderRadius: 2,
        transition: "box-shadow 0.2s, border-color 0.2s",
        borderColor: "divider",
        "&:hover": {
          boxShadow: (theme) => theme.shadows[4],
          borderColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          flex: { sm: "0 0 42%", md: "0 0 38%" },
          maxWidth: { xs: "100%", sm: 360 },
          position: "relative",
          bgcolor: "grey.100",
          alignSelf: { sm: "stretch" },
        }}
      >
        <Box
          component={Link}
          href={blog.url}
          sx={{
            display: "block",
            position: "relative",
            height: { xs: 220, sm: "100%" },
            minHeight: { sm: 200 },
            overflow: "hidden",
          }}
        >
            {blog.imgUrl ? (
              <LazyImage
                width={640}
                height={400}
                src={blog.imgUrl}
                alt={blog.title || "Blog post"}
                layout="responsive"
                objectFit="cover"
                sx={{
                  transition: "transform 0.35s ease",
                  height: "100%",
                  "&:hover": { transform: "scale(1.04)" },
                }}
              />
            ) : (
              <Box
                sx={{
                  height: "100%",
                  minHeight: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "grey.400",
                }}
              >
                <ArticleOutlined sx={{ fontSize: 56 }} />
              </Box>
            )}
        </Box>
      </Box>
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          py: { xs: 2.5, sm: 3 },
          px: { xs: 2.5, sm: 3 },
          "&:last-child": { pb: { xs: 2.5, sm: 3 } },
        }}
      >
        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              alignSelf: "flex-start",
              mb: 1.25,
              fontWeight: 600,
              bgcolor: (theme) => theme.palette.primary.main + "14",
              color: "primary.main",
            }}
          />
        )}

        <Box
          component={Link}
          href={blog.url}
          sx={{ textDecoration: "none", display: "block" }}
        >
          <H3
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              lineHeight: 1.35,
              mb: 1,
              "&:hover": { color: "primary.main" },
            }}
          >
            {blog.title}
          </H3>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 2,
            mb: 1.5,
            color: "text.secondary",
          }}
        >
          {dateLabel && (
            <Typography variant="body2" component="span" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 18 }} />
              {dateLabel}
            </Typography>
          )}
          {showComments && (
            <Typography variant="body2" component="span">
              {blog.comments} comments
            </Typography>
          )}
          {blog.author_name && (
            <Typography variant="body2" component="span">
              {blog.author_name}
            </Typography>
          )}
        </Box>

        {blog.description && (
          <Paragraph sx={excerptSx} mb={2}>
            {blog.description}
          </Paragraph>
        )}

        <Box sx={{ mt: "auto" }}>
          <Typography
            component={Link}
            href={blog.url}
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
              letterSpacing: 0.4,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Read article →
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogListingCard;
