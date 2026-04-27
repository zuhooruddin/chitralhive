import { Box, Container, Paper } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";

const contentBodySx = {
  "& p": {
    color: "text.secondary",
    lineHeight: 1.95,
    fontSize: { xs: "0.98rem", md: "1.02rem" },
    mb: 1.6,
  },
  "& h1, & h2, & h3, & h4": {
    color: "text.primary",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    mt: 2.7,
    mb: 1.35,
  },
  "& ul, & ol": {
    color: "text.secondary",
    pl: 2.7,
    mb: 1.65,
  },
  "& li": {
    mb: 0.75,
  },
  "& a": {
    color: "primary.main",
    textUnderlineOffset: "3px",
  },
  "& table": {
    width: "100%",
    borderCollapse: "collapse",
    mb: 2,
  },
  "& th, & td": {
    border: "1px solid",
    borderColor: "divider",
    p: 1,
    textAlign: "left",
  },
};

const StaticContentPage = ({
  title,
  description,
  metaTitle,
  canonical,
  keywords,
  intro,
  publishedItems = [],
  emptyText,
}) => {
  return (
    <ShopLayout1>
      <SEO
        title={title}
        description={description}
        metaTitle={metaTitle || title}
        canonical={canonical}
        keywords={keywords}
      />

      <Box
        sx={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(25,118,210,0.14) 0%, rgba(25,118,210,0.04) 32%, rgba(255,255,255,0) 70%)",
          pt: { xs: 5, md: 7 },
          pb: { xs: 3.5, md: 5.5 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: { xs: -10, md: -20 },
              width: { xs: 110, md: 180 },
              height: { xs: 110, md: 180 },
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(25,118,210,0.18) 0%, rgba(25,118,210,0.02) 65%, rgba(255,255,255,0) 100%)",
              pointerEvents: "none",
            }}
          />
          <H1 component="h1" sx={{ mb: 1.5, letterSpacing: "-0.02em" }}>
            {title}
          </H1>
          <Paragraph
            sx={{
              color: "text.secondary",
              maxWidth: 860,
              fontSize: { xs: "1rem", md: "1.07rem" },
              lineHeight: 1.9,
            }}
          >
            {intro || description}
          </Paragraph>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 9 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            p: { xs: 2.25, sm: 3.25, md: 4.5 },
            backgroundColor: "background.paper",
            boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
          }}
        >
          {publishedItems.length > 0 ? (
            publishedItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  ...contentBodySx,
                  mb: 2,
                  "&:last-child": { mb: 0 },
                }}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            ))
          ) : (
            <Paragraph color="text.secondary">{emptyText}</Paragraph>
          )}
        </Paper>
      </Container>
    </ShopLayout1>
  );
};

export default StaticContentPage;
