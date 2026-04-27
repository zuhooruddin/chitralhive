/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import BazaarImage from "components/BazaarImage"; // custom styled components

const CardWrapper = styled(Box)(({ theme, mode }) => ({
  minHeight: 380,
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  [theme.breakpoints.down("lg")]: {
    minHeight: 320,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 240,
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
    objectFit: "cover",
  },
}));

const ContentWrapper = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: "100%",
})); // ===============================================================

// ===============================================================
const CarouselCard4 = ({ bgImage, mode = "dark", content, priority = false }) => {
  // Use Next.js Image component for automatic optimization, WebP/AVIF conversion, and lazy loading
  const [imageFailed, setImageFailed] = useState(false);
  const fallbackImage = "/assets/images/banners/s1.png";
  const resolvedImage = imageFailed || !bgImage ? fallbackImage : bgImage;

  return (
    <CardWrapper mode={mode} sx={imageFailed ? { backgroundColor: "#f6f6f6" } : undefined}>
      {resolvedImage && (
        <ImageWrapper>
          <BazaarImage
            src={resolvedImage}
            alt="Carousel banner"
            fill
            priority={priority}
            quality={60}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            style={{ objectFit: "cover" }}
            loading={priority ? "eager" : "lazy"}
            onError={() => setImageFailed(true)}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
          />
        </ImageWrapper>
      )}
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </CardWrapper>
  );
};

export default CarouselCard4;
