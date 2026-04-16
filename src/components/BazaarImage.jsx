import { compose, display, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React from "react";

const normalizeStyleObject = (style) => {
  if (!style || typeof style !== "object") return undefined;
  const keys = Object.keys(style).sort();
  const out = {};
  for (const k of keys) out[k] = style[k];
  return out;
};

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
    layout, // legacy next/image prop (Next 12) - supported for backwards compatibility
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
    const {
      style,
      sizes,
      width: _w,
      height: _h,
      layout: _layout,
      objectFit: _objectFit,
      fetchPriority: fetchPriorityProp,
      ...restProps
    } = rest;

    const computedObjectFit = style?.objectFit || objectFit;
    const fetchPriority = fetchPriorityProp ?? (priority ? "high" : undefined);
    const normalizedStyle = normalizeStyleObject({
      ...(style || {}),
      objectFit: computedObjectFit,
      // Keep SSR/client inline styles stable across branches.
      height: "auto",
      maxWidth: "100%",
    });
    
    return (
      <NextImage
        src={normalizedSrc}
        alt={resolvedAlt}
        fill
        style={normalizedStyle}
        priority={priority}
        fetchPriority={fetchPriority}
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
    const {
      style,
      layout: _layout,
      objectFit: _objectFit,
      fetchPriority: fetchPriorityProp,
      ...restProps
    } = rest;
    
    const computedObjectFit = style?.objectFit || objectFit;
    const fetchPriority = fetchPriorityProp ?? (priority ? "high" : undefined);
    const normalizedStyle = normalizeStyleObject({
      ...(style || {}),
      objectFit: computedObjectFit,
      // Keep SSR/client inline styles stable:
      // Next/Image may include these on SSR for intrinsic sizing.
      height: "auto",
      maxWidth: "100%",
    });
    
    return (
      <NextImage
        src={normalizedSrc}
        alt={resolvedAlt}
        width={numericWidth}
        height={numericHeight}
        style={normalizedStyle}
        priority={priority}
        fetchPriority={fetchPriority}
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
