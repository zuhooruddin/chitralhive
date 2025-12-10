import { Box, Container, Grid, styled } from "@mui/material";
import BazaarIconButton from "components/BazaarIconButton";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import Facebook from "components/icons/Facebook";
import Youtube from "components/icons/Youtube";
import Instagram from "components/icons/Instagram";
import Twitter from "components/icons/Twitter";
import { Paragraph } from "components/Typography";
import Link from "next/link";
import { useState, useEffect } from "react";

// styled component
const StyledLink = styled("a")(({ theme }) => ({
  display: "block",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",
  padding: "8px 0",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "14px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    color: "#ffffff",
    transform: "translateX(6px)",
    paddingLeft: "4px",
  },
}));

const Footwrapper = styled(Box)(() => ({
  "@media only screen and (max-width: 600px)": {
    ".logo": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 92,
    },
    ".logo1": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const Footer = ({ footerData: initialFooterData }) => {
  const [mounted, setMounted] = useState(false);
  const [footerData, setFooterData] = useState(initialFooterData);

  useEffect(() => {
    setMounted(true);
    // Update footerData when initialFooterData changes
    if (initialFooterData) {
      setFooterData(initialFooterData);
    }
  }, [initialFooterData]);

  // Prevent hydration mismatch - always render consistent structure
  const imgbaseurl = process.env.NEXT_PUBLIC_BACKEND_API_BASE + "media/";
  const defaultLogo = "/assets/images/logos/webpack.png";

  // Debug logging in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Footer component - footerData:', footerData);
      console.log('Footer component - initialFooterData:', initialFooterData);
    }
  }, [footerData, initialFooterData]);

  // Always render footer structure, even if data is missing
  return (
    <Footwrapper>
      <footer>
        <Box 
          sx={{
            background: "linear-gradient(180deg, #1a202c 0%, #0f1419 100%)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(135deg, #D23F57 0%, #E94560 50%, #FF6B6B 100%)",
            },
          }}
        >
          <Container
            sx={{
              p: "1rem",
              color: "white",
            }}
          >
            <Box py={10} overflow="hidden">
              <Grid container spacing={3}>
                {/* Column 1: Logo and Description */}
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        mb={2.5}
                        width={150}
                        height={44}
                        src={footerData?.footer_logo ? imgbaseurl + footerData.footer_logo : defaultLogo}
                        alt="logo"
                        style={{ display: 'block' }}
                      />
                    </a>
                  </Link>

                  <Paragraph mb={2.5} color="grey.500">
                    {footerData?.footer_description || ""}
                  </Paragraph>
                </Grid>

                {/* Column 2: Links */}
                {footerData?.column_two_heading && footerData?.column_two_links && (
                  <Grid item lg={2} md={6} sm={6} xs={12}>
                    <Box
                      fontSize="16px"
                      fontWeight="700"
                      mb={2.5}
                      lineHeight="1"
                      color="white"
                      sx={{
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-10px",
                          left: 0,
                          width: "40px",
                          height: "3px",
                          background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      {footerData.column_two_heading}
                    </Box>

                    <div>
                      {footerData.column_two_links
                        .filter((item) => item.column === 2)
                        .map((item, ind) => (
                          <Link href={item.link} key={ind} passHref>
                            <StyledLink>{item.name}</StyledLink>
                          </Link>
                        ))}
                    </div>
                  </Grid>
                )}

                {/* Column 3: Links */}
                {footerData?.column_three_heading && footerData?.column_three_links && (
                  <Grid item lg={3} md={6} sm={6} xs={12} style={{ marginBottom: '20px' }}>
                    <Box
                      fontSize="16px"
                      fontWeight="700"
                      mb={2.5}
                      lineHeight="1"
                      color="white"
                      sx={{
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-10px",
                          left: 0,
                          width: "40px",
                          height: "3px",
                          background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      {footerData.column_three_heading}
                    </Box>
                    
                    <div>
                      {footerData.column_three_links
                        .filter((item) => item.column === 3)
                        .map((item, ind) => (
                          <Link href={item.link} key={ind} passHref>
                            <StyledLink>{item.name}</StyledLink>
                          </Link>
                        ))}
                    </div>
                  </Grid>
                )}
                
                {/* Column 4: Contact & Social */}
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <Box
                    fontSize="16px"
                    fontWeight="700"
                    mb={2.5}
                    lineHeight="1"
                    color="white"
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-10px",
                        left: 0,
                        width: "40px",
                        height: "3px",
                        background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    {footerData?.footer_fourth_column_heading || ""}
                  </Box>
                  
                  {footerData?.footer_fourth_column_content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: footerData.footer_fourth_column_content,
                      }}
                    />
                  )}

                  <FlexBox className="flex" mx={-0.625}>
                    {footerData?.facebook && (
                      <a
                        href={footerData.facebook}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Visit our Facebook page"
                      >
                        <BazaarIconButton
                          m={0.5}
                          bgcolor="rgba(255,255,255,0.08)"
                          fontSize="14px"
                          padding="12px"
                          aria-label="Facebook"
                          sx={{ 
                            minWidth: '48px', 
                            minHeight: '48px',
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                              transform: "translateY(-4px)",
                              boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
                              borderColor: "#D23F57",
                            },
                          }}
                        >
                          <Facebook fontSize="inherit" />
                        </BazaarIconButton>
                      </a>
                    )}

                    {footerData?.instagram && (
                      <a
                        href={footerData.instagram}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Visit our Instagram page"
                      >
                        <BazaarIconButton
                          m={0.5}
                          bgcolor="rgba(255,255,255,0.08)"
                          fontSize="14px"
                          padding="12px"
                          aria-label="Instagram"
                          sx={{ 
                            minWidth: '48px', 
                            minHeight: '48px',
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                              transform: "translateY(-4px)",
                              boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
                              borderColor: "#D23F57",
                            },
                          }}
                        >
                          <Instagram fontSize="inherit" />
                        </BazaarIconButton>
                      </a>
                    )}

                    {footerData?.youtube && (
                      <a
                        href={footerData.youtube}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Visit our YouTube channel"
                      >
                        <BazaarIconButton
                          m={0.5}
                          bgcolor="rgba(255,255,255,0.08)"
                          fontSize="14px"
                          padding="12px"
                          aria-label="YouTube"
                          sx={{ 
                            minWidth: '48px', 
                            minHeight: '48px',
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                              transform: "translateY(-4px)",
                              boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
                              borderColor: "#D23F57",
                            },
                          }}
                        >
                          <Youtube fontSize="inherit" />
                        </BazaarIconButton>
                      </a>
                    )}

                    {footerData?.twitter && (
                      <a
                        href={footerData.twitter}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Visit our Twitter page"
                      >
                        <BazaarIconButton
                          m={0.5}
                          bgcolor="rgba(255,255,255,0.08)"
                          fontSize="14px"
                          padding="12px"
                          aria-label="Twitter"
                          sx={{ 
                            minWidth: '48px', 
                            minHeight: '48px',
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                              transform: "translateY(-4px)",
                              boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
                              borderColor: "#D23F57",
                            },
                          }}
                        >
                          <Twitter fontSize="inherit" />
                        </BazaarIconButton>
                      </a>
                    )}
                  </FlexBox>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </footer>
    </Footwrapper>
  );
};

export default Footer;