import { KeyboardArrowDown, PersonOutline } from "@mui/icons-material";
import { Badge, Box, Dialog, Drawer, styled } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import BazaarButton from "components/BazaarButton";
import Image from "components/BazaarImage";
import CategoryMenu from "components/categories/CategoryMenu";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";
import MiniCart from "components/mini-cart/MiniCart";
import MobileMenu from "components/navbar/MobileMenu";
import GrocerySearchBox from "components/search-box/GrocerySearchBox";
import ThemeSwitcher from "components/ThemeSwitcher";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import Login from "pages-sections/sessions/Login";
import { useState } from "react";
import { layoutConstant } from "utils/constants";
import SearchBox from "../search-box/SearchBox"; // styled component

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1000,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: theme.palette.mode === 'dark' 
    ? "rgba(30, 41, 59, 0.98)" 
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: theme.palette.mode === 'dark'
    ? "0 2px 20px rgba(0, 0, 0, 0.4)"
    : "0 2px 20px rgba(0, 0, 0, 0.06)",
  borderBottom: theme.palette.mode === 'dark'
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.04)",
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
  "&.scrolled": {
    boxShadow: theme.palette.mode === 'dark'
      ? "0 4px 30px rgba(0, 0, 0, 0.6)"
      : "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
})); // ==============================================================

// ==============================================================
const Header = ({ isFixed,headerdata, className, searchBoxType = "type2" }) => {



  const theme = useTheme();
  const { state } = useAppContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const companyLogo = process.env.NEXT_PUBLIC_LOGO_API_URL;
  const comopanyalt=process.env.NEXT_PUBLIC_LOGO_ALT_TEXT
  const imgbaseurl = process.env.NEXT_PUBLIC_BACKEND_API_BASE + "media/";

  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
          mr={2}
          minWidth="170px"
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Link href="/">
            <a>
              <Image 
                height={44} 
                width={150}
                src={headerdata?imgbaseurl+headerdata[0].site_logo:'/assets/images/logos/webpack.png'} 
                alt={comopanyalt}
                style={{ display: 'block' }}
              />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazaarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazaarButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          {searchBoxType === "type1" && <SearchBox />}
          {searchBoxType === "type2" && <GrocerySearchBox />}
        </FlexBox>

        <FlexBox
          alignItems="center"
          gap={2}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box
            component={IconButton}
            p={1.25}
            bgcolor="grey.100"
            onClick={toggleDialog}
            sx={{
              borderRadius: "12px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                bgcolor: "primary.light",
                color: "primary.main",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(210, 63, 87, 0.2)",
              },
            }}
          >
            <PersonOutline />
          </Box>

          {/* Theme Switcher */}
          <ThemeSwitcher iconOnly={false} />

          <Badge 
            badgeContent={state.cart.length} 
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                boxShadow: "0 2px 8px rgba(210, 63, 87, 0.4)",
                fontWeight: 700,
              },
            }}
          >
            <Box
              p={1.25}
              bgcolor="grey.100"
              component={IconButton}
              onClick={toggleSidenav}
              sx={{
                borderRadius: "12px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  bgcolor: "primary.light",
                  color: "primary.main",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(210, 63, 87, 0.2)",
                },
              }}
            >
              <ShoppingBagOutlined />
            </Box>
          </Badge>
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>

        {/* {downMd && <MobileMenu />} */}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
