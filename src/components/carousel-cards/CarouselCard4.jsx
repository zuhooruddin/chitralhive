/* eslint-disable react/no-unescaped-entities */
import { Box, styled } from "@mui/material";
import React from "react";
import BazaarImage from "components/BazaarImage";

/** Placeholder ratio for CLS; real file aspect still wins via height: auto. */
const BANNER_PLACEHOLDER_WIDTH = 1920;
const BANNER_PLACEHOLDER_HEIGHT = 640;

const Overlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "mode",
})(({ theme, mode }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  pointerEvents: "none",
  "& a, & button": {
    pointerEvents: "auto",
  },
  color: mode === "light" ? theme.palette.dark.main : "#fff",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const CarouselCard4 = ({
  bgImage,
  mode = "dark",
  content,
  priority = false,
  fetchPriority = "auto",
  alt = "Homepage promotional banner",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        lineHeight: 0,
        backgroundColor: mode === "dark" ? "#000" : "#fff",
      }}
    >
      {bgImage && (
        <BazaarImage
          src={bgImage}
          alt={alt}
          width={BANNER_PLACEHOLDER_WIDTH}
          height={BANNER_PLACEHOLDER_HEIGHT}
          objectFit="contain"
          priority={priority}
          fetchPriority={fetchPriority}
          quality={75}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 75vw, 1200px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
        />
      )}
      {content ? <Overlay mode={mode}>{content}</Overlay> : null}
    </Box>
  );
};

export default CarouselCard4;
