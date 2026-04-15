import { bgcolor, borderRadius, compose, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React from "react";
const LazyImage = styled(({ borderRadius, loading = "lazy", ...rest }) => {
  const {
    width,
    height,
    style = {},
    objectFit,
    layout, // legacy next/image prop
    fill, // modern prop
    ...otherProps
  } = rest;

  // Treat legacy "100%" and layout="fill" as fill mode.
  const wantsFill =
    !!fill ||
    layout === "fill" ||
    width === "100%" ||
    height === "100%" ||
    width === "100vw" ||
    height === "100vh";

  const numericWidth = typeof width === "number" ? width : undefined;
  const numericHeight = typeof height === "number" ? height : undefined;
  const aspectRatio =
    numericWidth && numericHeight ? numericWidth / numericHeight : undefined;

  if (wantsFill) {
    return (
      <NextImage
        loading={loading}
        fill
        {...otherProps}
        style={{
          ...style,
          objectFit: objectFit || "contain",
        }}
      />
    );
  }

  return (
    <NextImage
      loading={loading}
      {...otherProps}
      width={numericWidth}
      height={numericHeight}
      style={{
        ...style,
        ...(aspectRatio ? { aspectRatio } : {}),
        objectFit: objectFit || "contain",
      }}
    />
  );
})(compose(spacing, borderRadius, bgcolor));
export default LazyImage;
