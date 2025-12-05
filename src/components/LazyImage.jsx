import { bgcolor, borderRadius, compose, spacing, styled } from "@mui/system";
import NextImage from "next/image";
import React from "react";
const LazyImage = styled(({ borderRadius, loading = "lazy", ...rest }) => (
  <NextImage loading={loading} {...rest} />
))(compose(spacing, borderRadius, bgcolor));
export default LazyImage;
