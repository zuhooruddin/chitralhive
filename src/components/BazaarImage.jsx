import { compose, display, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React from "react";

// Use Next.js Image component for automatic optimization, lazy loading, and caching
const BazaarImage = styled(
  ({
    src,
    alt,
    width,
    height,
    objectFit = "cover",
    priority = false,
    quality = 70,
    fill,
    layout, // legacy next/image prop (Next 12)
    ...rest
  }) => {
  const normalizedSrc =
    typeof src === "string" && src.trim() ? src.trim() : "/assets/images/banners/default.png";
  const resolvedAlt = alt === "" ? "" : alt || "Chitral Hive image";
  const isExternal =
    normalizedSrc.startsWith("http://") || normalizedSrc.startsWith("https://");
  const isDevRemote = process.env.NODE_ENV !== "production" && isExternal;
  const canOptimize =
    !isDevRemote &&
    (!isExternal ||
      normalizedSrc.includes("api.chitralhive.com") ||
      normalizedSrc.includes("chitralhive.com") ||
      normalizedSrc.startsWith("/"));

  // Next 13+ Image uses `fill` boolean instead of `layout="fill"`.
  // Many legacy call sites pass width/height as "100%". Treat that as "fill".
  const wantsFill =
    !!fill ||
    layout === "fill" ||
    width === "100%" ||
    height === "100%" ||
    width === "100vw" ||
    height === "100vh";

  if (canOptimize && wantsFill) {
    // Ensure we never forward legacy width/height props to <Image fill />
    const {
      style,
      sizes,
      width: _w,
      height: _h,
      layout: _layout,
      objectFit: _objectFit,
      ...restProps
    } = rest;

    delete restProps.width;
    delete restProps.height;
    delete restProps.layout;
    delete restProps.objectFit;

    const computedObjectFit = style?.objectFit || objectFit;
    return (
      <NextImage
        src={normalizedSrc}
        alt={resolvedAlt}
        fill
        style={{ ...(style || {}), objectFit: computedObjectFit }}
        priority={priority}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        {...restProps}
      />
    );
  }

  const numericWidth = typeof width === "number" ? width : undefined;
  const numericHeight = typeof height === "number" ? height : undefined;

  // Use width/height layout if both are numeric
  if (canOptimize && numericWidth && numericHeight) {
    const { style, layout: _layout, objectFit: _objectFit, ...restProps } = rest;
    delete restProps.width;
    delete restProps.height;
    delete restProps.layout;
    delete restProps.objectFit;
    const computedObjectFit = style?.objectFit || objectFit;
    return (
      <NextImage
        src={normalizedSrc}
        alt={resolvedAlt}
        width={numericWidth}
        height={numericHeight}
        style={{ ...(style || {}), objectFit: computedObjectFit }}
        priority={priority}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        {...restProps}
      />
    );
  }

  // Fallback to regular img for external images that can't be optimized
  const {
    style,
    sizes: _sizes,
    placeholder: _placeholder,
    blurDataURL: _blurDataURL,
    fetchPriority: _fetchPriority,
    quality: _quality,
    unoptimized: _unoptimized,
    layout: _layout,
    objectFit: _objectFit,
    decoding: decodingProp,
    ...imgRest
  } = rest;
  return (
    <img
      src={normalizedSrc}
      alt={resolvedAlt}
      width={numericWidth}
      height={numericHeight}
      // Match Next/Image default to prevent hydration mismatch:
      // "Prop decoding did not match. Server: null Client: async"
      decoding={decodingProp || "async"}
      style={{
        display: "block",
        ...(wantsFill ? { width: "100%", height: "100%" } : {}),
        ...(style || {}),
        objectFit,
      }}
      loading={priority ? "eager" : "lazy"}
      {...imgRest}
    />
  );
  }
)(compose(spacing, display));

BazaarImage.defaultProps = {
  display: "block",
};

export default BazaarImage;
