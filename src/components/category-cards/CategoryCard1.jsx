import { Box, styled } from "@mui/material";
import { H4 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import Link from "next/link";

// custom styled components


const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  "& img": {
    transition: "all 0.3s",
  },
  ":hover": {
    img: {
      transform: "scale(1.1)",
    },
    "& .category-title": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.dark.main,
    },
  },
}));
const CategoryTitle = styled(Box)(() => ({
  left: 10,
  right: 10,



  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: "rgba(255,255,255, .67)",
})); // ============================================================

// ============================================================
const CategoryCard1 = ({ image, title, url }) => {
  return (
    <Wrapper
      component={Link}
      href={url}
      aria-label={`Browse ${title} products`}
      position="relative"
      sx={{ aspectRatio: "1/1", textDecoration: "none", color: "inherit" }}
    >
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <BazaarImage
          src={image || "/assets/images/banners/default.png"}
          alt={title ? `${title} - Shop authentic Chitrali products` : "Category"}
          fill
          sizes="(max-width: 600px) 45vw, (max-width: 960px) 30vw, 200px"
          style={{ objectFit: "cover" }}
          quality={70}
          loading="lazy"
        />
      </Box>

      <H4 textAlign="center" className="category-title">
        {title}
      </H4>
    </Wrapper>
  );
};

export default CategoryCard1;
