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
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
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
        <Box bgcolor="#222935">
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
                      fontSize="18px"
                      fontWeight="600"
                      mb={1.5}
                      lineHeight="1"
                      color="white"
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
                      fontSize="18px"
                      fontWeight="600"
                      mb={1.5}
                      lineHeight="1"
                      color="white"
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
                    fontSize="18px"
                    fontWeight="600"
                    mb={1.5}
                    lineHeight="1"
                    color="white"
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
                          bgcolor="rgba(0,0,0,0.2)"
                          fontSize="12px"
                          padding="10px"
                          aria-label="Facebook"
                          sx={{ minWidth: '44px', minHeight: '44px' }}
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
                          bgcolor="rgba(0,0,0,0.2)"
                          fontSize="12px"
                          padding="10px"
                          aria-label="Instagram"
                          sx={{ minWidth: '44px', minHeight: '44px' }}
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
                          bgcolor="rgba(0,0,0,0.2)"
                          fontSize="12px"
                          padding="10px"
                          aria-label="YouTube"
                          sx={{ minWidth: '44px', minHeight: '44px' }}
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
                          bgcolor="rgba(0,0,0,0.2)"
                          fontSize="12px"
                          padding="10px"
                          aria-label="Twitter"
                          sx={{ minWidth: '44px', minHeight: '44px' }}
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