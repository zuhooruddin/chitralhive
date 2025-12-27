/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React from "react";
import Image from "next/image"; // custom styled components

const CardWrapper = styled(Box)(({ theme, mode }) => ({
  minHeight: 500,
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
    justifyContent: "center",
    padding: 106,
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
const CarouselCard4 = ({ bgImage, mode = "dark", content, priority = false, fetchPriority = "auto" }) => {
  // Use Next.js Image component for automatic optimization, WebP/AVIF conversion, and lazy loading
  return (
    <CardWrapper mode={mode}>
      {bgImage && (
        <ImageWrapper>
          <Image
            src={bgImage}
layout="fill"
            priority={priority}
            quality={85}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            fetchPriority={fetchPriority}
            loading={priority ? "eager" : "lazy"}
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
