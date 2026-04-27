import { Container } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import StructuredData from "components/schema/StructuredData";
import { H1, H3, Paragraph } from "components/Typography";
import { Box, Card, Grid, styled } from "@mui/material";
import { Email, Phone, Place } from "@mui/icons-material";
import { useMemo } from "react";

const HeroSection = styled(Box)(({ theme }) => ({
  background:
    "radial-gradient(circle at 12% 15%, rgba(25,118,210,0.16) 0%, rgba(25,118,210,0.04) 35%, rgba(255,255,255,0) 72%)",
  padding: "58px 0 42px",
  textAlign: "left",
}));

const LocationCard = styled(Card)(({ theme }) => ({
  padding: "22px",
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
  borderRadius: "12px",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "rgba(25,118,210,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  marginBottom: "10px",
}));

const ContactItem = styled(Box)({
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const ContactUs = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://chitralhive.com";
  
  // LocalBusiness structured data for contact page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/contact-us#localbusiness`,
    "name": "Chitral Hive",
    "image": `${baseUrl}/images/og-image.jpg`,
    "description": "Chitral Hive - Authentic Chitrali Products Online Store. Shop traditional crafts, local specialties, handmade items, and unique products from Chitral.",
    "url": baseUrl,
    "telephone": "+92-323-9119309",
    "email": "zuhooruddin055@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Chitral",
        "addressLocality": "Chitral",
        "addressRegion": "Khyber Pakhtunkhwa",
        "postalCode": "17200",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Upper Chitral",
        "addressLocality": "Upper Chitral",
        "addressRegion": "Khyber Pakhtunkhwa",
        "postalCode": "17200",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Islamabad",
        "addressLocality": "Islamabad",
        "addressRegion": "Federal Capital",
        "postalCode": "44000",
        "addressCountry": "PK"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.8514",
      "longitude": "71.7864"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/chitralhive",
      "https://www.instagram.com/chitralhive",
      "https://twitter.com/chitralhive"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-323-9119309",
        "contactType": "Customer Service",
        "areaServed": "PK",
        "availableLanguage": ["en", "ur"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-340-7964648",
        "contactType": "Customer Service",
        "areaServed": "PK",
        "availableLanguage": ["en", "ur"]
      }
    ]
  };

  const dynamicContentSx = {
    "& p": { color: "text.secondary", lineHeight: 1.8, mb: 1.25 },
    "& h1, & h2, & h3, & h4": { mt: 2, mb: 1, fontWeight: 700 },
    "& ul, & ol": { pl: 2.5, mb: 1.5, color: "text.secondary" },
    "& li": { mb: 0.75 },
    "& a": { color: "primary.main" },
  };

  return (
    <ShopLayout1>
      <StructuredData data={localBusinessSchema} />
      <SEO
        title="Contact Us - Get in Touch"
        description="Get in touch with Chitral Hive for authentic Chitrali products. We are here to help with your orders and inquiries. Contact us via phone, email, or visit our stores in Chitral, Upper Chitral, and Islamabad."
        metaTitle="Contact Us"
        canonical={`${baseUrl}/contact-us`}
      />
      
      <HeroSection>
        <Container sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: { xs: -8, md: -20 },
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(25,118,210,0.18) 0%, rgba(25,118,210,0.02) 65%, rgba(255,255,255,0) 100%)",
              pointerEvents: "none",
            }}
          />
          <H1 component="h1" sx={{ color: "text.primary", mb: 2, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Contact Chitral Hive
          </H1>
          <Paragraph
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.06rem" },
              lineHeight: 1.9,
              maxWidth: "720px",
            }}
          >
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </Paragraph>
        </Container>
      </HeroSection>

      <Container sx={{ mb: "80px" }}>
        {publishedItems.length > 0 && (
          <Card
            sx={{
              mb: 4,
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              boxShadow: "none",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
            }}
          >
            {publishedItems.map((item) => (
              <Box
                key={item.id}
                sx={dynamicContentSx}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            ))}
          </Card>
        )}

        <Grid container spacing={4}>
          {/* ==================== CHITRAL LOCATION ================== */}
          <Grid item xs={12} md={4}>
            <LocationCard>
              <iframe
                src="https://maps.google.com/maps?q=Chitral,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ width: "100%", height: "250px", borderRadius: "8px" }}
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
              
              <Box sx={{ mt: 3 }}>
                <H3 sx={{ mb: 2, fontWeight: 700 }}>Chitral</H3>
                
                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Place fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}>Location</Paragraph>
                  <Paragraph sx={{ color: "text.secondary", fontSize: "15px" }}>
                    Chitral, Khyber Pakhtunkhwa, Pakistan
                  </Paragraph>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Phone fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Call Us</Paragraph>
                  <ContactItem>
                    <a
                      href="tel:03239119309"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03239119309
                    </a>
                  </ContactItem>
                  <ContactItem>
                    <a
                      href="tel:03407964648"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03407964648
                    </a>
                  </ContactItem>
                </Box>

                <Box>
                  <IconWrapper>
                    <Email fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Email Us</Paragraph>
                  <ContactItem>
                    <a
                      href="mailto:zuhooruddin055@gmail.com"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                        wordBreak: "break-all",
                      }}
                    >
                      zuhooruddin055@gmail.com
                    </a>
                  </ContactItem>
                </Box>
              </Box>
            </LocationCard>
          </Grid>

          {/* ==================== UPPER CHITRAL LOCATION ================== */}
          <Grid item xs={12} md={4}>
            <LocationCard>
              <iframe
                src="https://maps.google.com/maps?q=Upper+Chitral,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ width: "100%", height: "250px", borderRadius: "8px" }}
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
              
              <Box sx={{ mt: 3 }}>
                <H3 sx={{ mb: 2, fontWeight: 700 }}>Upper Chitral</H3>
                
                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Place fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}>Location</Paragraph>
                  <Paragraph sx={{ color: "text.secondary", fontSize: "15px" }}>
                    Upper Chitral, Khyber Pakhtunkhwa, Pakistan
                  </Paragraph>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Phone fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Call Us</Paragraph>
                  <ContactItem>
                    <a
                      href="tel:03239119309"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03239119309
                    </a>
                  </ContactItem>
                  <ContactItem>
                    <a
                      href="tel:03407964648"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03407964648
                    </a>
                  </ContactItem>
                </Box>

                <Box>
                  <IconWrapper>
                    <Email fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Email Us</Paragraph>
                  <ContactItem>
                    <a
                      href="mailto:zuhooruddin055@gmail.com"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                        wordBreak: "break-all",
                      }}
                    >
                      zuhooruddin055@gmail.com
                    </a>
                  </ContactItem>
                </Box>
              </Box>
            </LocationCard>
          </Grid>

          {/* ==================== ISLAMABAD LOCATION ================== */}
          <Grid item xs={12} md={4}>
            <LocationCard>
              <iframe
                src="https://maps.google.com/maps?q=Islamabad,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ width: "100%", height: "250px", borderRadius: "8px" }}
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
              
              <Box sx={{ mt: 3 }}>
                <H3 sx={{ mb: 2, fontWeight: 700 }}>Islamabad</H3>
                
                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Place fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}>Location</Paragraph>
                  <Paragraph sx={{ color: "text.secondary", fontSize: "15px" }}>
                    Islamabad, Federal Capital, Pakistan
                  </Paragraph>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <IconWrapper>
                    <Phone fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Call Us</Paragraph>
                  <ContactItem>
                    <a
                      href="tel:03239119309"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03239119309
                    </a>
                  </ContactItem>
                  <ContactItem>
                    <a
                      href="tel:03407964648"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      03407964648
                    </a>
                  </ContactItem>
                </Box>

                <Box>
                  <IconWrapper>
                    <Email fontSize="medium" />
                  </IconWrapper>
                  <Paragraph sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>Email Us</Paragraph>
                  <ContactItem>
                    <a
                      href="mailto:zuhooruddin055@gmail.com"
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                        wordBreak: "break-all",
                      }}
                    >
                      zuhooruddin055@gmail.com
                    </a>
                  </ContactItem>
                </Box>
              </Box>
            </LocationCard>
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default ContactUs;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("contact-us")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("contact-us getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
