import { compose, display, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { canonicalizeMediaUrl } from "utils/buildImageUrl";

const DEFAULT_SRC = "/assets/images/banners/default.png";

/** Normalize remote media URLs so SSR and client `src` always match. */
function getImageUrl(url) {
  if (!url || typeof url !== "string") return url;
  return canonicalizeMediaUrl(url.trim());
}

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
    layout,
    onError: onErrorProp,
    ...rest
  }) => {
    const rawSrc =
      typeof src === "string" && src.trim() ? src.trim() : DEFAULT_SRC;
    const normalizedFromProp = getImageUrl(rawSrc) || DEFAULT_SRC;
    const [displaySrc, setDisplaySrc] = useState(normalizedFromProp);

    useEffect(() => {
      setDisplaySrc(normalizedFromProp);
    }, [normalizedFromProp]);

    const handleError = useCallback(
      (e) => {
        onErrorProp?.(e);
        setDisplaySrc((prev) => (prev === DEFAULT_SRC ? prev : DEFAULT_SRC));
      },
      [onErrorProp]
    );

    const resolvedAlt = alt === "" ? "" : alt || "Chitral Hive image";
    const isExternal =
      displaySrc.startsWith("http://") || displaySrc.startsWith("https://");
    const isDevRemote = process.env.NODE_ENV !== "production" && isExternal;
    const canOptimize =
      !isDevRemote &&
      (!isExternal ||
        displaySrc.includes("api.chitralhive.com") ||
        displaySrc.includes("chitralhive.com") ||
        displaySrc.startsWith("/"));

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
      // Do not set height: "auto" with fill — it breaks Next/Image absolute fill + object-fit.
      const normalizedStyle = normalizeStyleObject({
        ...(style || {}),
        objectFit: computedObjectFit,
      });

      return (
        <NextImage
          src={displaySrc}
          alt={resolvedAlt}
          fill
          style={normalizedStyle}
          priority={priority}
          fetchPriority={fetchPriority}
          quality={quality}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          onError={handleError}
          {...restProps}
        />
      );
    }

    const numericWidth = typeof width === "number" ? width : undefined;
    const numericHeight = typeof height === "number" ? height : undefined;

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
        height: "auto",
        maxWidth: "100%",
      });

      return (
        <NextImage
          src={displaySrc}
          alt={resolvedAlt}
          width={numericWidth}
          height={numericHeight}
          style={normalizedStyle}
          priority={priority}
          fetchPriority={fetchPriority}
          quality={quality}
          loading={priority ? "eager" : "lazy"}
          onError={handleError}
          {...restProps}
        />
      );
    }

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
        src={displaySrc}
        alt={resolvedAlt}
        width={numericWidth}
        height={numericHeight}
        decoding={decodingProp || "async"}
        style={{
          display: "block",
          ...(wantsFill ? { width: "100%", height: "100%" } : {}),
          ...(style || {}),
          objectFit,
        }}
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        {...imgRest}
      />
    );
  }
)(compose(spacing, display));

BazaarImage.defaultProps = {
  display: "block",
};

export default BazaarImage;
