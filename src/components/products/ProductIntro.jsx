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

  // Ensure salePrice and discount are valid numbers
  // Handle null, undefined, empty string, and invalid values
  // Use mrp as fallback if salePrice is not available
  const numericSalePrice = salePrice != null && salePrice !== '' && !isNaN(salePrice) 
    ? parseFloat(salePrice) 
    : (mrp != null && mrp !== '' && !isNaN(mrp) ? parseFloat(mrp) : 0);
  const numericDiscount = discount != null && discount !== '' && !isNaN(discount) 
    ? parseFloat(discount) 
    : 0;
  
  const discountprice = numericSalePrice;
  const calculatedDiscountAmount = (numericSalePrice * numericDiscount) / 100;
  const calculatedDiscountedSubtotal = numericSalePrice - calculatedDiscountAmount;

  const salePrices = isNaN(calculatedDiscountedSubtotal) || calculatedDiscountedSubtotal <= 0 
    ? numericSalePrice 
    : calculatedDiscountedSubtotal;

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
      // Ensure we're storing the correct price - use salePrices if valid, otherwise use numericSalePrice
      const priceToStore = salePrices > 0 ? salePrices : numericSalePrice;
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          mrp,
          salePrice: priceToStore,
          salePrices: priceToStore,
          sku,
          slug,
          price: priceToStore,
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
    <Box width="100%" sx={{ animation: "fadeIn 0.5s ease-out" }}>
      <Grid container spacing={4} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box 
            sx={{ 
              background: "white",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
              },
            }}
          >
          <FlexBox justifyContent="center" mb={4}>
            <Box
              component="figure"
              role="button"
              tabIndex={0}
              aria-label={`View larger image of ${name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]));
                }
              }}

              
              sx={{
                background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                borderRadius: "16px",
                padding: "20px",
                cursor: "zoom-in",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)",
                },
                "&:focus": {
                  outline: "2px solid #D23F57",
                  outlineOffset: "2px",
                },
              }}
            >
            <LazyImage
              width={350}
              height={350}
              alt={name ? `${name} - Authentic Chitrali Product | Buy Online in Pakistan at Chitral Hive` : "Chitrali Product - Buy Online in Pakistan | Chitral Hive"}
              loading="eager"
              priority
              objectFit="contain"
              src={localimageurl + `${product.imgGroup[selectedImage]}`}
              onClick={() =>
                openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]))
              }
              title={name || "Chitrali Product"}
              style={{ borderRadius: "12px", aspectRatio: "1 / 1" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            {isViewerOpen && (
              <ImageViewer
                src={imgGroup.map((img) => localimageurl + img)}
                onClose={closeImageViewer}
                currentIndex={currentImage}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.95)",
                  zIndex: 1501,
                  backdropFilter: "blur(10px)",
                }}
              />
            )}
            </Box>
          </FlexBox>

          <FlexBox overflow="auto" sx={{ gap: "12px", justifyContent: "center", pb: 1 }}>
            {imgGroup.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={70}
                height={70}
                minWidth={70}
                minHeight={70}
                bgcolor={selectedImage === ind ? "primary.light" : "#F8FAFC"}
                borderRadius="12px"
                role="button"
                tabIndex={0}
                aria-label={`View ${name} image ${ind + 1}`}
                aria-pressed={selectedImage === ind}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(ind)();
                  }
                }}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: selectedImage === ind ? "2px solid" : "2px solid transparent",
                  borderColor: selectedImage === ind ? "#D23F57" : "transparent",
                  boxShadow: selectedImage === ind ? "0 4px 12px rgba(210, 63, 87, 0.2)" : "0 2px 8px rgba(0, 0, 0, 0.05)",
                }}
                onClick={handleImageClick(ind)}
                sx={{
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                  },
                  "&:focus": {
                    outline: "2px solid #D23F57",
                    outlineOffset: "2px",
                  },
                }}
              >
                <BazaarAvatar
                  src={localimageurl + `${url}`}
                  variant="square"
                  height={50}
                  width={50}
                  sx={{ borderRadius: "8px" }}
                  alt={`${name} - Image ${ind + 1}`}
                />
              </FlexRowCenter>
            ))}
          </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <Box
            sx={{
              background: "white",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
            }}
          >
          <H1 mb={2} component="h1" sx={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)", 
            fontWeight: 700,
            color: "#1a202c",
            lineHeight: 1.3,
          }}>{name}</H1>
          <FlexBox alignItems="center" mb={3} sx={{
            background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
            padding: "10px 16px",
            borderRadius: "12px",
            width: "fit-content",
          }}>
            <Box lineHeight="1" sx={{ fontWeight: 500, color: "#92400E", mr: 1 }}>Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize="1.25rem"
                value={average && average ? average : 0}
                readOnly
              />
            </Box>
            <H6 lineHeight="1" sx={{ color: "#92400E", fontWeight: 600 }}>({total && total ? total : 0} reviews)</H6>
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

          <Box mb={3} sx={{ 
            background: "linear-gradient(135deg, #FCE9EC 0%, #FFF1F3 100%)",
            padding: "20px",
            borderRadius: "16px",
            mt: 3,
          }}>
            <FlexBox alignItems="baseline" flexWrap="wrap">
              <H2 component="h2" sx={{ 
                background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2rem",
                fontWeight: 800,
                lineHeight: "1",
              }}>
                {currency || 'PKR'} {isNaN(salePrices) || salePrices === null || salePrices === undefined ? '0.00' : salePrices.toFixed(2)}
              </H2>
              {!!numericDiscount && numericDiscount > 0 && (
                <>
                  <H4 component="span" color="grey.500" ml={2} lineHeight="1">
                    <del>{currency || 'PKR'} {isNaN(discountprice) || discountprice === null || discountprice === undefined ? '0.00' : discountprice.toFixed(2)}</del>
                  </H4>
                  <Box sx={{
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    ml: 2,
                    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                  }}>
                    {numericDiscount}% OFF
                  </Box>
                </>
              )}
            </FlexBox>
            {stock === "0.00" ? (
              <FlexBox alignItems="center" mt={2} sx={{
                background: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
                padding: "8px 16px",
                borderRadius: "10px",
                width: "fit-content",
              }}>
                <H5 color="#B91C1C" sx={{ fontWeight: 600 }}>Out of Stock</H5>
              </FlexBox>
            ) : (
              <FlexBox alignItems="center" mt={2} sx={{
                background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
                padding: "8px 16px",
                borderRadius: "10px",
                width: "fit-content",
              }}>
                <H5 color="#047857" sx={{ fontWeight: 600 }}>✓ In Stock</H5>
              </FlexBox>
            )}
          </Box>

          {stock === "0.00" ? (
            <BazaarButton
              color="primary"
              disabled={true}
              variant="contained"
              aria-label="Out of stock - cannot add to cart"
              sx={{
                mb: 2,
                px: "2.5rem",
                height: 52,
                minHeight: 44,
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                background: "#E5E7EB",
                boxShadow: "none",
              }}
            >
              Out of Stock
            </BazaarButton>
          ) : !cartItem?.qty ? (
            <BazaarButton
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1, true)}
              aria-label={`Add ${name} to cart`}
              sx={{
                mb: 2,
                px: "2.5rem",
                height: 52,
                minHeight: 44,
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                boxShadow: "0 10px 30px rgba(210, 63, 87, 0.3)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(210, 63, 87, 0.4)",
                  background: "linear-gradient(135deg, #C73550 0%, #D83A55 100%)",
                },
              }}
            >
              🛒 Add to Cart
            </BazaarButton>
          ) : (
            <FlexBox alignItems="center" mb={2} sx={{
              background: "#F8FAFC",
              padding: "8px 16px",
              borderRadius: "14px",
              width: "fit-content",
            }}>
              <BazaarButton
                size="small"
                aria-label={`Decrease quantity of ${name} in cart`}
                sx={{
                  p: 1.5,
                  minWidth: 44,
                  minHeight: 44,
                  borderRadius: "10px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#FCE9EC",
                  },
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1, false)}
              >
                <Remove fontSize="small" />
              </BazaarButton>

              <H3 fontWeight="700" mx={3} sx={{ fontSize: "1.25rem", color: "#1a202c" }} aria-label={`Current quantity: ${cartItem?.qty}`}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <BazaarButton
                size="small"
                aria-label={`Increase quantity of ${name} in cart`}
                sx={{
                  p: 1.5,
                  minWidth: 44,
                  minHeight: 44,
                  borderRadius: "10px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#FCE9EC",
                  },
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1, true)}
              >
                <Add fontSize="small" />
              </BazaarButton>
            </FlexBox>
          )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
