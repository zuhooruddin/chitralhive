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
const CategoryCard1 = ({ image, title, url }) => {
  return (
    <Link href={url}>
      <a aria-label={`Browse ${title} products`}>
        <Wrapper position="relative" sx={{ aspectRatio: '1/1' }}>



          <Image
            src={image}
            width={280}
            height={280}
            alt={`${title} - Shop authentic Chitrali products`}
            objectFit="cover"
            layout="responsive"
            sizes="(max-width: 600px) 45vw, (max-width: 960px) 30vw, 200px"
            quality={70}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANH6h1W5g1O4ihCRxxtsVVQAAADAA+UpV/NdyH5FKlSxAE6wWf/Z"
          />

          <H4 textAlign='center'>{title}</H4>
        </Wrapper>
      </a>
    </Link>
  );
};

export default CategoryCard1;
