import { Box, styled } from "@mui/material";
import BazaarImage from "components/BazaarImage";
// custom styled components
const CardWrapper = styled(Box)(() => ({
  overflow: "hidden",
  position: "relative",
}));
const CardContent = styled(Box)(() => ({
  top: 0,
  left: 32,
  zIndex: 1,
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  backgroundRepeat: "round",
})); // ========================================================

// ========================================================
const BannerCard3 = ({ img, children, priority = false, ...props }) => {
  return (
    <CardWrapper {...props} sx={{ aspectRatio: '16/9', position: 'relative' }}>
      <BazaarImage 
        alt="category banner" 
        height={350} 
        width={622} 
        src={img}
        priority={priority}
        quality={85}
        objectFit="cover"
        sizes="(max-width: 960px) 100vw, 33vw"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      />

      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default BannerCard3;
