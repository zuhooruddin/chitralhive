/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React, { useState, useEffect } from "react"; // custom styled components

const CardWrapper = styled(Box)(({ theme, mode, img, imageLoaded }) => ({
  minHeight: 500,
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  backgroundImage: img ? `url(${img})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "opacity 0.3s ease-in-out",
  opacity: imageLoaded ? 1 : 0,
  [theme.breakpoints.down("md")]: {
    minHeight: 200,
    justifyContent: "center",
    padding: 106,
    textAlign: "center",
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
    if (!bgImage) return;
    
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
        document.head.removeChild(link);
      };
    }
  }, [bgImage, priority, fetchPriority]);
  
  return (
    <CardWrapper mode={mode} img={bgImage} imageLoaded={imageLoaded}>
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </CardWrapper>
  );
};

export default CarouselCard4;
