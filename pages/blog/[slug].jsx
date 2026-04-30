import { Container, Box, Typography, Divider, Chip, Stack } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, H2, H3, Paragraph } from "components/Typography";
import LazyImage from "components/LazyImage";
import { AccessTime, Person } from "@mui/icons-material";
import format from "date-fns/format";
import Link from "next/link";
import StructuredData from "components/schema/StructuredData";
import { generateBlogBreadcrumb } from "utils/breadcrumbSchema";
import { fetchPublishedBlog, fetchPublishedBlogs } from "utils/api/blog";
import StickyBottomAd from "components/ads/StickyBottomAd";
import dynamic from "next/dynamic";
import { useState } from "react";

const AdBanner = dynamic(() => import("@/components/AdBanner"), {
  ssr: false,
  loading: () => null,
});

const BlogPostPage = ({ post, allPosts }) => {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const inArticleSlot = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT;
  const autoRelaxedSlot = process.env.NEXT_PUBLIC_ADSENSE_AUTORELAXED_SLOT;
  const stickySlot = process.env.NEXT_PUBLIC_ADSENSE_FLUID_LAYOUTKEY_SLOT;
  const showInArticle = Boolean(adsenseClient && inArticleSlot);
  const showAutoRelaxed = Boolean(adsenseClient && autoRelaxedSlot);
  const showSticky = Boolean(adsenseClient && stickySlot);
  const [stickyVisible, setStickyVisible] = useState(false);

  if (!post) {
    return (
      <ShopLayout1 navCategories={[]}>
        <Container sx={{ py: 4, textAlign: "center" }}>
          <H1>Post Not Found</H1>
          <Paragraph>The blog post you're looking for doesn't exist.</Paragraph>
          <Link href="/blog">Back to Blog</Link>
        </Container>
      </ShopLayout1>
    );
  }

  const baseUrl = "https://chitralhive.com";

  // Generate Article structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.imgUrl,
    "datePublished": post.publishedTime,
    "dateModified": post.modifiedTime || post.publishedTime,
    "author": {
      "@type": "Organization",
      "name": "Chitral Hive",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chitral Hive",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "articleSection": post.section,
    "keywords": post.tags?.join(", ") || ""
  };

  // Generate professional BreadcrumbList schema for Google Search Console
  const breadcrumbSchema = generateBlogBreadcrumb(
    {
      title: post.title,
      slug: post.slug
    },
    { baseUrl }
  );

  return (
    <ShopLayout1 navCategories={[]}>
      <SEO
        title={post.title}
        description={post.description}
        metaTitle={post.metaTitle || post.title}
        keywords={post.tags?.join(", ") || ""}
        canonical={`https://chitralhive.com/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedTime}
        modifiedTime={post.modifiedTime || post.publishedTime}
        author="Chitral Hive"
        section={post.section}
        tags={post.tags}
        image={post.imgUrl}
      />
      <StructuredData data={articleStructuredData} />
      <StructuredData data={breadcrumbSchema} />
      <Container
        sx={{
          py: 4,
          maxWidth: "900px",
          pb: stickyVisible ? { xs: 16, sm: 18 } : 4,
        }}
      >
        <Box component="article">
          {/* Header */}
          <Box component="header" sx={{ mb: 4 }}>
            <H1 component="h1" sx={{ mb: 2 }}>
              {post.title}
            </H1>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                <AccessTime sx={{ mr: 1, fontSize: "1rem" }} />
                <Typography variant="body2">
                  {post.publishedTime 
                    ? format(new Date(post.publishedTime), "MMMM dd, yyyy")
                    : "N/A"}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                <Person sx={{ mr: 1, fontSize: "1rem" }} />
                <Typography variant="body2">Chitral Hive</Typography>
              </Box>
              {post.section && (
                <Chip label={post.section} size="small" color="primary" />
              )}
            </Stack>
            {post.tags && post.tags.length > 0 && (
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                {post.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>
            )}
          </Box>

          {/* Featured Image */}
          {post.imgUrl && (
            <Box
              sx={{
                mb: 4,
                position: "relative",
                width: "100%",
                // Keep a stable hero aspect ratio across devices.
                aspectRatio: "900 / 500",
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "grey.100",
              }}
            >
              <LazyImage
                src={post.imgUrl}
                alt={post.title}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}

          <Divider sx={{ mb: 4 }} />

          {/* Content first so an unfilled / collapsing ad never sits above the body */}
          <Box
            component="div"
            sx={{
              // Defensive responsive styling for CMS/HTML content.
              // Prevents mobile overflow caused by fixed-width images/iframes/tables/long URLs.
              overflowX: "hidden",
              "& img": {
                maxWidth: "100%",
                height: "auto",
              },
              "& iframe, & video": {
                maxWidth: "100%",
              },
              "& table": {
                display: "block",
                maxWidth: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
              },
              "& pre, & code": {
                maxWidth: "100%",
                overflowX: "auto",
              },
              "& a, & p, & li": {
                overflowWrap: "anywhere",
                wordBreak: "break-word",
              },
              "& h2": {
                mt: 4,
                mb: 2,
                fontSize: "1.75rem",
                fontWeight: 600,
              },
              "& h3": {
                mt: 3,
                mb: 1.5,
                fontSize: "1.5rem",
                fontWeight: 600,
              },
              "& p": {
                mb: 2,
                lineHeight: 1.8,
              },
              "& ul, & ol": {
                mb: 2,
                pl: 3,
                "& li": {
                  mb: 1,
                  lineHeight: 1.8,
                },
              },
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* In-article ad (fluid) — after body so no-fill does not hide content below a spacer */}
          {showInArticle && (
            <AdBanner
              slot={inArticleSlot}
              format="fluid"
              layout="in-article"
              insStyle={{ textAlign: "center" }}
              sx={{ mt: 4, mb: 4 }}
              collapseUntilFilled
            />
          )}

          {/* Autorelaxed/Multiplex ad (typically below content) */}
          {showAutoRelaxed && (
            <AdBanner
              slot={autoRelaxedSlot}
              format="autorelaxed"
              sx={{ mt: 4 }}
              collapseUntilFilled
            />
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Related Posts */}
        {allPosts.length > 0 && (
          <Box>
            <H2 component="h2" sx={{ mb: 3 }}>
              Related Articles
            </H2>
            <Stack spacing={2}>
              {allPosts.map((relatedPost) => {
                return (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        p: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor: "action.hover",
                        },
                      }}
                    >
                      <H3 component="h3" sx={{ fontSize: "1.25rem", mb: 1 }}>
                        {relatedPost.title}
                      </H3>
                      <Paragraph color="text.secondary" sx={{ mb: 0 }}>
                        {relatedPost.description}
                      </Paragraph>
                    </Box>
                  </Link>
                );
              })}
            </Stack>
          </Box>
        )}
      </Container>

      {/* Sticky bottom ad - uses format="auto" for standard display in sticky context */}
      {showSticky && (
        <StickyBottomAd
          slot={stickySlot}
          format="auto"
          minHeight={100}
          onVisibilityChange={setStickyVisible}
        />
      )}
    </ShopLayout1>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const post = await fetchPublishedBlog(params.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    const posts = await fetchPublishedBlogs();
    const allPosts = posts
      .filter((item) => item.slug !== post.slug)
      .filter((item) => item.category === post.category || item.tags?.some((tag) => post.tags?.includes(tag)))
      .slice(0, 3);

    return {
      props: {
        post,
        allPosts,
      },
    };
  } catch (error) {
    console.error("Error in blog page:", error);
    return {
      notFound: true,
    };
  }
}

export default BlogPostPage;

