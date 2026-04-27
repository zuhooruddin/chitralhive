import { Box, Button, Container } from "@mui/material";
import { carouselStyled } from "components/carousel/carouselSx";
import { FlexBetween, FlexBox } from "components/flex-box";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("components/carousel/Carousel"), {
  ssr: false,
  loading: () => null,
});
import ProductCard20 from "components/product-cards/ProductCard20";
import { H2, Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';

const Section9 = ({ data, products = [] }) => {
  const { data: session} = useSession()

  const width = useWindowSize();
  const getVisibleSlides = (w) => {
    if (w < 426) return 1;
    if (w < 650) return 2;
    if (w < 1024) return 3;
    if (w < 1200) return 4;
    return 5;
  };

  // Initialize from current width to avoid layout shift on mobile
  const [visibleSlides, setVisibleSlides] = useState(() => getVisibleSlides(width));
  const [selected, setSelected] = useState("new");
  const newArrivalProducts = products.filter((product) => product?.isNewArrival);
  const featuredProducts = products.filter((product) => product?.isFeatured);

  useEffect(() => {
    setVisibleSlides(getVisibleSlides(width));
  }, [width]);

  const handleSelected = (item) => () => setSelected(item);

  const activeColor = (item) => (item === selected ? "error" : "dark");

  return (
    <Container sx={{ mb: { xs: 4, sm: 6, md: 8 }, px: { xs: 1, sm: 2 } }}>
      <FlexBetween gap={2} flexWrap="wrap" mb={{ xs: 2, sm: 2.5, md: 3 }}>
        <Box>
          <H2 fontSize={{ xs: 18, sm: 19, md: 20 }}>Selected Products</H2>
          <Paragraph fontSize={{ xs: 13, sm: 14, md: 16 }}>All our new arrivals and featured products</Paragraph>
        </Box>
        <FlexBox
          flexWrap="wrap"
          gap={1}
          sx={{
            "& button": {
              flexGrow: 1,
            },
          }}
        >
          <Button
            variant="outlined"
            color={activeColor("new")}
            onClick={handleSelected("new")}
          >
            New Arrivals
          </Button>
          <Button
            variant="outlined"
            color={activeColor("featured")}
            onClick={handleSelected("featured")}
          >
            Featured
          </Button>
        </FlexBox>
      </FlexBetween>

      {selected === "new" && newArrivalProducts.length > 0 && (
        <Carousel
          totalSlides={newArrivalProducts.length}
          visibleSlides={visibleSlides}
          sx={carouselStyled}
        >
          {newArrivalProducts.map((product, index) => (
            <ProductCard20
              product={product}
              key={product.id}
              data={data}
              wishList={session && session.wishlist &&  session.wishlist.length>0 ? session.wishlist : null}
              priority={index === 0}
            />
          ))}
        </Carousel>
      )}

      {selected === "featured" && featuredProducts.length > 0 && (
        <Carousel
          totalSlides={featuredProducts.length}
          visibleSlides={visibleSlides}
          sx={carouselStyled}
        >
          {featuredProducts.map((product, index) => (
            <ProductCard20
              product={product}
              key={product.id}
              data={data}
              wishList={session && session.wishlist &&  session.wishlist.length>0 ? session.wishlist : null}
              priority={index === 0}
            />
          ))}
        </Carousel>
      )}

      {selected === "new" && newArrivalProducts.length === 0 && (
        <Box sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>No New Products</Box>
      )}

        {selected === "featured" && featuredProducts.length === 0 && (
        <Box>No Featured Products</Box>
      )}
    </Container>
  );
};

export default Section9;
