import { compose, display, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React from "react";

// Use Next.js Image component for automatic optimization, lazy loading, and caching
const BazaarImage = styled(({ src, alt = "", width, height, objectFit = "cover", priority = false, quality = 85, ...rest }) => {
  // If it's an external URL that Next.js can optimize, use NextImage
  // Otherwise fall back to regular img tag for external images that can't be optimized
  const isExternal = src && (src.startsWith('http://') || src.startsWith('https://'));
  const canOptimize = isExternal && (
    src.includes('api.chitralhive.com') || 
    src.includes('chitralhive.com') ||
    src.startsWith('/')
  );

  if (canOptimize && width && height) {
    return (
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        priority={priority}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        {...rest}
      />
    );
  }

  // Fallback to regular img for external images that can't be optimized
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit, display: 'block', ...rest.style }}
      loading={priority ? "eager" : "lazy"}
      {...rest}
    />
  );
})(compose(spacing, display));

BazaarImage.defaultProps = {
  display: "block",
};

export default BazaarImage;
