/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React from "react";
import BazaarImage from "components/BazaarImage"; // custom styled components

const CardWrapper = styled(Box)(({ theme, mode }) => ({
  position: "absolute",
  inset: 0,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const ImageWrapper = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  "& img": {
    objectFit: "contain",
  },
}));

const ContentWrapper = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: "100%",
})); // ===============================================================

// ===============================================================
const CarouselCard4 = ({
  bgImage,
  mode = "dark",
  content,
  priority = false,
  fetchPriority = "auto",
  alt = "Homepage promotional banner",
}) => {
  // Use Next.js Image component for automatic optimization, WebP/AVIF conversion, and lazy loading
  // Note: fetchPriority is not available in Next.js 12, so we use link preload as a workaround
  
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // Wide hero ratio + contain avoids cropping typical slider artwork (was 16/9 + cover).
        aspectRatio: { xs: "16 / 10", sm: "2 / 1", md: "5 / 2" },
      }}
    >
      <CardWrapper mode={mode}>
        {bgImage && (
          <ImageWrapper>
            <BazaarImage
              src={bgImage}
              alt={alt}
              fill
              priority={priority}
              quality={60}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
              style={{ objectFit: "contain" }}
              loading={priority ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
            />
          </ImageWrapper>
        )}
        <ContentWrapper>
          {content}
        </ContentWrapper>
      </CardWrapper>
    </Box>
  );
};

export default CarouselCard4;
