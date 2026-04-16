import { Box, Drawer, styled } from "@mui/material";
import NavLink from "components/nav-link/NavLink";
import { layoutConstant } from "utils/constants"; // styled components


const Wrapper = styled(Box)(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  display: "none",
  position: "fixed",
  justifyContent: "space-around",
  zIndex: theme.zIndex.drawer + 1,
  
  // Dynamic height based on safe area inset
  height: `calc(${layoutConstant.mobileNavHeight}px + env(safe-area-inset-bottom, 0px))`,
  paddingBottom: "env(safe-area-inset-bottom, 0px)",
  
  backgroundColor: theme.palette.background.paper,
  // Premium shadow and border
  boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.08)",
  borderTop: `1px solid ${theme.palette.divider}`,
  backdropFilter: "blur(10px)",
  
  "@media only screen and (max-width: 900px)": {
    display: "flex",
    width: "100%",
  },
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  flex: "1 1 0",
  display: "flex",
  fontSize: "12px",
  fontWeight: 600,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px 0",
  color: theme.palette.grey[600],
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  
  "& span": {
    marginTop: "4px",
    letterSpacing: "0.02em",
  },
  
  "&.active": {
    color: theme.palette.primary.main,
    "& svg": {
      transform: "scale(1.1)",
    },
  },
  
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  flex: "1 1 0",
  display: "flex",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px 0",
  color: theme.palette.grey[600],
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  "& span": {
    marginTop: "4px",
    letterSpacing: "0.02em",
  },
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
    "& svg": {
      transform: "scale(1.1)",
    },
  },
}));
const StyledDrawer = styled(Drawer)(({ theme, totalheight }) => ({
  width: 250,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
    top: totalheight,
    boxSizing: "border-box",
    boxShadow: theme.shadows[2],
    height: `calc(100% - ${totalheight + layoutConstant.mobileHeaderHeight}px)`,
  },
  "& .MuiBackdrop-root.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
    top: totalheight,
  },
})); // common icon component style

const iconStyle = {
  display: "flex",
  marginBottom: "4px",
  alignItems: "center",
  justifyContent: "center",
};
export { Wrapper, StyledBox, StyledNavLink, StyledDrawer, iconStyle };
