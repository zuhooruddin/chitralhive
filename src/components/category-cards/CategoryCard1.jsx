import { Box, styled } from "@mui/material";
import { H4 } from "components/Typography";
import Image from "next/image";
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
const CategoryCard1 = ({ image, title,url}) => {
  return (
    <Link  href={url}>
    <a>
    <Wrapper position="relative" sx={{ aspectRatio: '1/1' }}>
      <Image
        src={image}
        width={380}
        height={380}
        alt={`${title} category`}
        objectFit="cover"
        layout="responsive"
        sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, 16vw"
        quality={85}
      />

        <H4 textAlign='center'>{title}</H4>
      
    </Wrapper>
    </a>
    </Link>
  );
};

export default CategoryCard1;
