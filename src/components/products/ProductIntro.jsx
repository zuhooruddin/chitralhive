/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import BazaarAvatar from "components/BazaarAvatar";
import BazaarButton from "components/BazaarButton";
import LazyImage from "components/LazyImage";
import { H1, H2, H3, H4, H5, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { FlexBox, FlexRowCenter } from "../flex-box"; // ================================================================
import { toast } from "react-toastify";
import BazaarRating from "components/BazaarRating";

// ================================================================
const ProductIntro = ({ product, slug, total, average }) => {
  const {
    id,
    mrp,
    length,
    width,
    height,
    name,
    imgGroup,
    manufacturer,
    author,
    aliasCode,
    stock,
    weight,
    isbn,
    salePrice,
    sku,
    publisherFlag,
    discount,
  } = product;

  const discountprice = salePrice;
  const calculatedDiscountAmount = (salePrice * discount) / 100;
  const calculatedDiscountedSubtotal = salePrice - calculatedDiscountAmount;

  salePrice = calculatedDiscountedSubtotal;

  const [currency,setCurrency]=useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCurrency = localStorage.getItem('currency');

      setCurrency(storedCurrency);
    }
  
  }, []);

  const imgurl = process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL;
  const localimageurl = process.env.NEXT_PUBLIC_BACKEND_API_BASE + "media/";

  const router = useRouter();
  const routerId = router.query.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { state, dispatch } = useAppContext();
  const cartList = state.cart;
  const cartItem = cartList.find(
    (item) => item.id === id || item.id === routerId
  );
  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleCartAmountChange = useCallback(
    (amount, addflag) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          mrp,
          salePrice,
          sku,
          slug,
          price: salePrice,
          qty: amount,
          name: name,
          image: localimageurl + imgGroup[0],
          id: id || routerId,
        },
      });
      if (addflag == true) {
        toast.success("Added to cart", { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.error("Removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    []
  );

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <LazyImage
              width={300}
              alt={name}
              height={300}
              loading="eager"
              objectFit="contain"
              src={localimageurl + `${product.imgGroup[selectedImage]}`}
              onClick={() =>
                openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]))
              }
            />
            {isViewerOpen && (
              <ImageViewer
                src={imgGroup.map((img) => localimageurl + img)}
                onClose={closeImageViewer}
                currentIndex={currentImage}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  zIndex: 1501,
                }}
              />
            )}
          </FlexBox>

          <FlexBox overflow="auto">
            {imgGroup.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleImageClick(ind)}
                mr={ind === imgGroup.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <BazaarAvatar
                  src={localimageurl + `${url}`}
                  variant="square"
                  height={40}
                />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{name}</H1>
          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize="1.25rem"
                value={average && average ? average : 0}
                readOnly
              />
            </Box>
            <H6 lineHeight="1">({total && total ? total : 0})</H6>
          </FlexBox>
          {/* {manufacturer==='NOT AVAILABLE' || manufacturer==='' || manufacturer===undefined?'':

<FlexBox alignItems="center" mb={1}>
<Box>Publisher:</Box>
<H6 ml={1}>{manufacturer}</H6>

</FlexBox>
} */}
          {manufacturer === "NOT AVAILABLE" ||
          manufacturer === "" ||
          manufacturer === undefined ||
          manufacturer === "null" ||
          manufacturer === null ? (
            ""
          ) : (
            <FlexBox alignItems="center" mb={1}>
              <Box>Manufacturer:</Box>
              <H6 ml={1}>{manufacturer}</H6>
            </FlexBox>
          )}

          {author === "NOT AVAILABLE" ||
          author === "" ||
          author === undefined ||
          author === "null" ||
          author === null ? (
            ""
          ) : (
            <FlexBox alignItems="center" mb={1}>
              <Box>Author:</Box>
              <H6 ml={1}>{author}</H6>
            </FlexBox>
          )}
          {weight === "NOT AVAILABLE" ||
          weight === "" ||
          weight === "0" ||
          weight === undefined ||
          weight === "null" ||
          weight === null ? (
            ""
          ) : (
            <FlexBox alignItems="center" mb={1}>
              <Box>Weight:</Box>
              <H6 ml={1}>{weight} grams</H6>
            </FlexBox>
          )}
          {isbn === "NOT AVAILABLE" ||
          isbn === "" ||
          isbn === undefined ||
          isbn === null ||
          isbn === "null" ? (
            ""
          ) : (
            <FlexBox alignItems="center" mb={1}>
              <Box>Isbn:</Box>
              <H6 ml={1}>{isbn}</H6>
            </FlexBox>
          )}

          {/* {
  (length === 'NOT AVAILABLE' || length === '' || length === '0.00' || length === undefined) &&
  (width === 'NOT AVAILABLE' || width === '' || width === '0.00' || width === undefined) &&
  (height === 'NOT AVAILABLE' || height === '' || height === '0.00' || height === undefined) ? (
    ''
  ) : (
    <FlexBox alignItems="center" mb={1}>
      <Box>Dimension:</Box>
=      {length !== 'NOT AVAILABLE' && length !== '' && length !== '0.00' && length !== undefined && (
        <p> L: {length}</p>
      )}
      {width !== 'NOT AVAILABLE' && width !== '' && width !== '0.00' && width !== undefined && (
        <p>x W: {width}</p>
      )}
      {height !== 'NOT AVAILABLE' && height !== '' && height !== '0.00' && height !== undefined && (
        <p>x H: {height}</p>
      )}
    </FlexBox>
  )
} */}
          {length != 0.0 || width != 0.0 || height != 0.0 ? (
            <FlexBox alignItems="center" mb={1}>
              <Box>Dimensions:</Box>
              <H6 ml={1}>
                {length && length != 0.0 ? "L: " + length : ""}{" "}
                {length != 0.0 && width != 0.0 ? "x" : ""}{" "}
                {width && width != 0.0 ? "W: " + width : ""}{" "}
                {(length != 0.0 || width != 0.0) && height != 0.0 ? "x" : ""}{" "}
                {height && height != 0.0 ? "H: " + height : ""}
              </H6>
            </FlexBox>
          ) : (
            ""
          )}

          {(sku && sku != "") || sku != undefined || sku != null ? (
            <FlexBox alignItems="center" mb={1}>
              <Box>Product SKU / CODE:</Box>

              <H6 ml={1}>{sku}</H6>
            </FlexBox>
          ) : (
            ""
          )}

          <Box mb={3}>
            <H2 color="primary.main" mt={5} lineHeight="1">
              {currency}. {salePrice.toFixed(2)}
            </H2>
            {!!discount && (
              <H4 color="primary.main" mt={2} ml={2} lineHeight="1">
                <del> {currency}. {discountprice?.toFixed(2)}</del>
              </H4>
            )}
            {stock === "0.00" ? (
              <FlexBox alignItems="center" mt={1.5}>
                <H5 color="inherit">Stock : </H5>
                <H6 color="red"> Out of Stock </H6>
              </FlexBox>
            ) : (
              ""
            )}
          </Box>

          {stock === "0.00" ? (
            <BazaarButton
              color="primary"
              disabled={true}
              variant="contained"
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
              }}
            >
              Add to Cart
            </BazaarButton>
          ) : !cartItem?.qty ? (
            <BazaarButton
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1, true)}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
              }}
            >
              Add to Cart
            </BazaarButton>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <BazaarButton
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1, false)}
              >
                <Remove fontSize="small" />
              </BazaarButton>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <BazaarButton
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1, true)}
              >
                <Add fontSize="small" />
              </BazaarButton>
            </FlexBox>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
