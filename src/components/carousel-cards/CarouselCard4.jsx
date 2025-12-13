/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // custom styled components

const CardWrapper = styled(Box)(({ theme, mode, imageLoaded }) => ({
  minHeight: 500,
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  transition: "opacity 0.3s ease-in-out",
  opacity: imageLoaded ? 1 : 0,
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
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    if (!bgImage) {
      setImageLoaded(true);
      return;
    }
    
    // Preload image for better performance, especially for priority images
    const img = new window.Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Show even if error to prevent blank space
    img.src = bgImage;
    
    // For priority images, add fetchpriority hint via link preload
    if (priority && typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = bgImage;
      if (fetchPriority === 'high') {
        link.setAttribute('fetchpriority', 'high');
      }
      document.head.appendChild(link);
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [bgImage, priority, fetchPriority]);
  
  // Use Next.js Image for optimization if it's an optimizable URL
  const isExternal = bgImage && (bgImage.startsWith('http://') || bgImage.startsWith('https://'));
  const canOptimize = isExternal && (
    bgImage.includes('api.chitralhive.com') || 
    bgImage.includes('chitralhive.com')
  ) || (bgImage && bgImage.startsWith('/'));
  
  return (
    <CardWrapper mode={mode} imageLoaded={imageLoaded}>
      <ImageWrapper>
        {canOptimize ? (
          <Image
            src={bgImage}
            alt="Carousel banner"
            fill
            priority={priority}
            quality={85}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={fetchPriority}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        ) : bgImage ? (
          <img
            src={bgImage}
            alt="Carousel banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={fetchPriority}
          />
        ) : null}
      </ImageWrapper>
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </CardWrapper>
  );
};

export default CarouselCard4;
