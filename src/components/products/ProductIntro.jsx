/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove, LocalShipping, VerifiedUser, Autorenew, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Grid, Chip, Divider, Tooltip, useTheme } from "@mui/material";
import BazaarAvatar from "components/BazaarAvatar";
import BazaarButton from "components/BazaarButton";
import LazyImage from "components/LazyImage";
import { H1, H2, H3, H4, H5, H6, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import useSettings from "hooks/useSettings";
import { useRouter } from "next/router";
import React, { useCallback, useState, useMemo } from "react";
import { useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { FlexBox, FlexRowCenter } from "../flex-box"; // ================================================================
import { toast } from "react-toastify";
import BazaarRating from "components/BazaarRating";

// ================================================================
const ProductIntro = ({ product, slug, total, average }) => {
  const theme = useTheme();
  const { settings } = useSettings();
  const isDark = settings.theme === 'dark';
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

  // Memoize features for performance
  const productFeatures = useMemo(() => [
    { icon: LocalShipping, text: "Free Shipping on Orders over Rs. 2000", color: "#10B981" },
    { icon: VerifiedUser, text: "Authentic Chitrali Products", color: "#3B82F6" },
    { icon: Autorenew, text: "7 Days Return Policy", color: "#8B5CF6" },
  ], []);

  return (
    <Box 
      width="100%" 
      sx={{ 
        animation: "fadeIn 0.6s ease-out",
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box 
            sx={{ 
              background: isDark 
                ? "linear-gradient(135deg, #1E293B 0%, #2B3445 100%)"
                : "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
              borderRadius: { xs: "16px", md: "24px" },
              padding: { xs: "16px", sm: "20px", md: "28px" },
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.6)"
                : "0 8px 32px rgba(0, 0, 0, 0.08)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)"}`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #D23F57 0%, #E94560 50%, #FF6B6B 100%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover": {
                boxShadow: isDark
                  ? "0 16px 48px rgba(0, 0, 0, 0.8)"
                  : "0 16px 48px rgba(0, 0, 0, 0.12)",
                transform: "translateY(-4px)",
                "&::before": {
                  opacity: 1,
                },
              },
            }}
          >
          {/* Product Badge */}
          {!!numericDiscount && numericDiscount > 0 && (
            <Chip
              label={`${numericDiscount}% OFF`}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 2,
                background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                color: "white",
                fontWeight: 700,
                fontSize: "13px",
                height: "32px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                },
              }}
            />
          )}

          <FlexBox justifyContent="center" mb={3}>
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
                background: isDark
                  ? "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)"
                  : "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                borderRadius: "20px",
                padding: { xs: "16px", md: "24px" },
                cursor: "zoom-in",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(210, 63, 87, 0.05) 100%)",
                  pointerEvents: "none",
                },
                "&:hover": {
                  background: isDark
                    ? "linear-gradient(135deg, #1E293B 0%, #2B3445 100%)"
                    : "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)",
                  transform: "scale(1.02)",
                },
                "&:focus": {
                  outline: "2px solid #D23F57",
                  outlineOffset: "4px",
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

          <FlexBox 
            overflow="auto" 
            sx={{ 
              gap: { xs: "8px", md: "12px" }, 
              justifyContent: "center", 
              pb: 1,
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: isDark ? "#1E293B" : "#F1F5F9",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: isDark ? "#4B5563" : "#CBD5E1",
                borderRadius: "10px",
                "&:hover": {
                  background: isDark ? "#6B7280" : "#94A3B8",
                },
              },
            }}
          >
            {imgGroup.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={{ xs: 60, md: 75 }}
                height={{ xs: 60, md: 75 }}
                minWidth={{ xs: 60, md: 75 }}
                minHeight={{ xs: 60, md: 75 }}
                bgcolor={selectedImage === ind 
                  ? (isDark ? "rgba(210, 63, 87, 0.2)" : "primary.light")
                  : (isDark ? "#0F172A" : "#F8FAFC")
                }
                borderRadius="14px"
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
                  border: selectedImage === ind ? "3px solid" : "2px solid",
                  borderColor: selectedImage === ind 
                    ? "#D23F57" 
                    : (isDark ? "rgba(255, 255, 255, 0.1)" : "transparent"),
                  boxShadow: selectedImage === ind 
                    ? "0 6px 16px rgba(210, 63, 87, 0.3)" 
                    : (isDark ? "0 2px 8px rgba(0, 0, 0, 0.4)" : "0 2px 8px rgba(0, 0, 0, 0.05)"),
                }}
                onClick={handleImageClick(ind)}
                sx={{
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.05)",
                    boxShadow: isDark 
                      ? "0 8px 20px rgba(0, 0, 0, 0.6)" 
                      : "0 8px 20px rgba(0, 0, 0, 0.12)",
                  },
                  "&:focus": {
                    outline: "2px solid #D23F57",
                    outlineOffset: "3px",
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
              background: isDark 
                ? "linear-gradient(135deg, #1E293B 0%, #2B3445 100%)"
                : "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
              borderRadius: { xs: "16px", md: "24px" },
              padding: { xs: "20px", sm: "24px", md: "32px" },
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.6)"
                : "0 8px 32px rgba(0, 0, 0, 0.08)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)"}`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #D23F57 0%, #E94560 50%, #FF6B6B 100%)",
              },
            }}
          >
          <H1 mb={2} component="h1" sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, 
            fontWeight: 800,
            color: isDark ? "#F9FAFB" : "#1a202c",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            transition: "color 0.3s ease",
          }}>{name}</H1>
          <FlexBox alignItems="center" mb={3} sx={{
            background: isDark
              ? "linear-gradient(135deg, #422006 0%, #713F12 100%)"
              : "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
            padding: { xs: "8px 12px", md: "12px 16px" },
            borderRadius: "14px",
            width: "fit-content",
            border: `1px solid ${isDark ? "rgba(251, 191, 36, 0.2)" : "rgba(251, 191, 36, 0.3)"}`,
            boxShadow: isDark
              ? "0 4px 12px rgba(251, 191, 36, 0.1)"
              : "0 4px 12px rgba(251, 191, 36, 0.2)",
          }}>
            <Box lineHeight="1" sx={{ fontWeight: 600, color: isDark ? "#FCD34D" : "#92400E", mr: 1, fontSize: { xs: "12px", md: "14px" } }}>
              Rated:
            </Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize={{ xs: "1rem", md: "1.25rem" }}
                value={average && average ? average : 0}
                readOnly
              />
            </Box>
            <H6 lineHeight="1" sx={{ color: isDark ? "#FCD34D" : "#92400E", fontWeight: 600, fontSize: { xs: "12px", md: "14px" } }}>
              ({total && total ? total : 0} reviews)
            </H6>
          </FlexBox>
          {/* {manufacturer==='NOT AVAILABLE' || manufacturer==='' || manufacturer===undefined?'':

<FlexBox alignItems="center" mb={1}>
<Box>Publisher:</Box>
<H6 ml={1}>{manufacturer}</H6>

</FlexBox>
} */}
          {/* Product Details with modern design */}
          <Box sx={{ mb: 3 }}>
            {manufacturer && manufacturer !== "NOT AVAILABLE" && manufacturer !== "null" && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  Manufacturer:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px" }}>{manufacturer}</H6>
              </FlexBox>
            )}

            {author && author !== "NOT AVAILABLE" && author !== "null" && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  Author:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px" }}>{author}</H6>
              </FlexBox>
            )}

            {weight && weight !== "NOT AVAILABLE" && weight !== "0" && weight !== "null" && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  Weight:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px" }}>{weight} grams</H6>
              </FlexBox>
            )}

            {isbn && isbn !== "NOT AVAILABLE" && isbn !== "null" && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  ISBN:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px" }}>{isbn}</H6>
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
            {(length != 0.0 || width != 0.0 || height != 0.0) && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  Dimensions:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px" }}>
                  {length && length != 0.0 ? "L: " + length : ""}{" "}
                  {length != 0.0 && width != 0.0 ? "x" : ""}{" "}
                  {width && width != 0.0 ? "W: " + width : ""}{" "}
                  {(length != 0.0 || width != 0.0) && height != 0.0 ? "x" : ""}{" "}
                  {height && height != 0.0 ? "H: " + height : ""}
                </H6>
              </FlexBox>
            )}

            {sku && sku !== "" && (
              <FlexBox alignItems="center" mb={1.5} sx={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}>
                <Span sx={{ fontWeight: 600, color: isDark ? "#9CA3AF" : "#6B7280", fontSize: "14px", minWidth: "110px" }}>
                  SKU / CODE:
                </Span>
                <H6 ml={1} sx={{ color: isDark ? "#E5E7EB" : "#1F2937", fontSize: "14px", fontFamily: "monospace" }}>{sku}</H6>
              </FlexBox>
            )}
          </Box>

          <Divider sx={{ my: 3, borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)" }} />

          {/* Modern Pricing Card */}
          <Box mb={3} sx={{ 
            background: isDark
              ? "linear-gradient(135deg, #7C2D12 0%, #991B1B 100%)"
              : "linear-gradient(135deg, #FCE9EC 0%, #FFF1F3 100%)",
            padding: { xs: "16px", md: "24px" },
            borderRadius: "18px",
            border: `2px solid ${isDark ? "rgba(255, 107, 138, 0.3)" : "rgba(210, 63, 87, 0.2)"}`,
            boxShadow: isDark
              ? "0 8px 24px rgba(255, 107, 138, 0.2)"
              : "0 8px 24px rgba(210, 63, 87, 0.15)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isDark
                ? "radial-gradient(circle at top right, rgba(255, 107, 138, 0.1), transparent)"
                : "radial-gradient(circle at top right, rgba(210, 63, 87, 0.08), transparent)",
              pointerEvents: "none",
            },
          }}>
            <FlexBox alignItems="baseline" flexWrap="wrap" position="relative" zIndex={1}>
              <H2 component="h2" sx={{ 
                background: isDark
                  ? "linear-gradient(135deg, #FECDD3 0%, #FFB3C1 100%)"
                  : "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 900,
                lineHeight: "1",
                letterSpacing: "-0.02em",
              }}>
                {currency || 'PKR'} {isNaN(salePrices) || salePrices === null || salePrices === undefined ? '0.00' : salePrices.toFixed(2)}
              </H2>
              {!!numericDiscount && numericDiscount > 0 && (
                <>
                  <H4 component="span" sx={{ 
                    color: isDark ? "#9CA3AF" : "grey.500",
                    ml: 2,
                    lineHeight: "1",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                  }}>
                    <del>{currency || 'PKR'} {isNaN(discountprice) || discountprice === null || discountprice === undefined ? '0.00' : discountprice.toFixed(2)}</del>
                  </H4>
                  <Chip
                    label={`SAVE ${numericDiscount}%`}
                    sx={{
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      color: "white",
                      height: "28px",
                      borderRadius: "14px",
                      fontSize: { xs: "11px", md: "12px" },
                      fontWeight: 700,
                      ml: 2,
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    }}
                  />
                </>
              )}
            </FlexBox>
            
            {/* Stock Status */}
            <FlexBox alignItems="center" mt={2.5} position="relative" zIndex={1}>
              {stock === "0.00" ? (
                <Chip
                  label="Out of Stock"
                  sx={{
                    background: isDark
                      ? "linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)"
                      : "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
                    color: isDark ? "#FCA5A5" : "#B91C1C",
                    height: "36px",
                    px: 2,
                    fontWeight: 700,
                    fontSize: "14px",
                    borderRadius: "12px",
                    border: `2px solid ${isDark ? "#DC2626" : "#FCA5A5"}`,
                  }}
                />
              ) : (
                <Chip
                  icon={<VerifiedUser sx={{ color: isDark ? "#6EE7B7" : "#047857" }} />}
                  label="In Stock - Ready to Ship"
                  sx={{
                    background: isDark
                      ? "linear-gradient(135deg, #064E3B 0%, #065F46 100%)"
                      : "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
                    color: isDark ? "#6EE7B7" : "#047857",
                    height: "36px",
                    px: 2,
                    fontWeight: 700,
                    fontSize: "14px",
                    borderRadius: "12px",
                    border: `2px solid ${isDark ? "#10B981" : "#6EE7B7"}`,
                    "& .MuiChip-icon": {
                      marginLeft: "8px",
                    },
                  }}
                />
              )}
            </FlexBox>
          </Box>

          {stock === "0.00" ? (
            <BazaarButton
              color="primary"
              disabled={true}
              variant="contained"
              fullWidth
              aria-label="Out of stock - cannot add to cart"
              sx={{
                mb: 2,
                px: "2.5rem",
                height: { xs: 50, md: 56 },
                minHeight: 44,
                borderRadius: "16px",
                fontSize: { xs: "15px", md: "16px" },
                fontWeight: 700,
                textTransform: "none",
                background: isDark ? "#374151" : "#E5E7EB",
                color: isDark ? "#9CA3AF" : "#6B7280",
                boxShadow: "none",
                cursor: "not-allowed",
              }}
            >
              Out of Stock - Notify When Available
            </BazaarButton>
          ) : !cartItem?.qty ? (
            <BazaarButton
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleCartAmountChange(1, true)}
              aria-label={`Add ${name} to cart`}
              sx={{
                mb: 2,
                px: "2.5rem",
                height: { xs: 50, md: 56 },
                minHeight: 44,
                borderRadius: "16px",
                fontSize: { xs: "15px", md: "16px" },
                fontWeight: 700,
                textTransform: "none",
                background: isDark
                  ? "linear-gradient(135deg, #FF6B8A 0%, #FF8FA3 100%)"
                  : "linear-gradient(135deg, #D23F57 0%, #E94560 100%)",
                boxShadow: isDark
                  ? "0 12px 32px rgba(255, 107, 138, 0.4)"
                  : "0 12px 32px rgba(210, 63, 87, 0.3)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "0",
                  height: "0",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.3)",
                  transform: "translate(-50%, -50%)",
                  transition: "width 0.6s, height 0.6s",
                },
                "&:hover": {
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: isDark
                    ? "0 16px 40px rgba(255, 107, 138, 0.5)"
                    : "0 16px 40px rgba(210, 63, 87, 0.4)",
                  background: isDark
                    ? "linear-gradient(135deg, #FF8FA3 0%, #FFB3C1 100%)"
                    : "linear-gradient(135deg, #C73550 0%, #D83A55 100%)",
                  "&::before": {
                    width: "300px",
                    height: "300px",
                  },
                },
                "&:active": {
                  transform: "translateY(-1px) scale(0.98)",
                },
              }}
            >
              <ShoppingCartOutlined sx={{ mr: 1, fontSize: "20px" }} />
              Add to Cart
            </BazaarButton>
          ) : (
            <FlexBox alignItems="center" justifyContent="space-between" mb={2} sx={{
              background: isDark
                ? "linear-gradient(135deg, #1E293B 0%, #2B3445 100%)"
                : "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
              padding: { xs: "10px 16px", md: "12px 20px" },
              borderRadius: "16px",
              border: `2px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)"}`,
              boxShadow: isDark
                ? "0 4px 12px rgba(0, 0, 0, 0.4)"
                : "0 4px 12px rgba(0, 0, 0, 0.06)",
            }}>
              <BazaarButton
                size="small"
                aria-label={`Decrease quantity of ${name} in cart`}
                sx={{
                  p: { xs: 1.25, md: 1.5 },
                  minWidth: { xs: 40, md: 48 },
                  minHeight: { xs: 40, md: 48 },
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  background: isDark
                    ? "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)"
                    : "white",
                  border: isDark ? "none" : "2px solid #FEE2E2",
                  "&:hover": {
                    background: isDark
                      ? "linear-gradient(135deg, #B91C1C 0%, #991B1B 100%)"
                      : "#FCE9EC",
                    transform: "scale(1.1)",
                    boxShadow: isDark
                      ? "0 4px 12px rgba(220, 38, 38, 0.4)"
                      : "0 4px 12px rgba(210, 63, 87, 0.2)",
                  },
                }}
                color="primary"
                variant={isDark ? "contained" : "outlined"}
                onClick={handleCartAmountChange(cartItem?.qty - 1, false)}
              >
                <Remove fontSize="small" />
              </BazaarButton>

              <H3 
                fontWeight="800" 
                mx={{ xs: 2, md: 4 }} 
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  color: isDark ? "#F9FAFB" : "#1a202c",
                  minWidth: "50px",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }} 
                aria-label={`Current quantity: ${cartItem?.qty}`}
              >
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <BazaarButton
                size="small"
                aria-label={`Increase quantity of ${name} in cart`}
                sx={{
                  p: { xs: 1.25, md: 1.5 },
                  minWidth: { xs: 40, md: 48 },
                  minHeight: { xs: 40, md: 48 },
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  background: isDark
                    ? "linear-gradient(135deg, #10B981 0%, #059669 100%)"
                    : "white",
                  border: isDark ? "none" : "2px solid #D1FAE5",
                  "&:hover": {
                    background: isDark
                      ? "linear-gradient(135deg, #059669 0%, #047857 100%)"
                      : "#D1FAE5",
                    transform: "scale(1.1)",
                    boxShadow: isDark
                      ? "0 4px 12px rgba(16, 185, 129, 0.4)"
                      : "0 4px 12px rgba(16, 185, 129, 0.2)",
                  },
                }}
                color="primary"
                variant={isDark ? "contained" : "outlined"}
                onClick={handleCartAmountChange(cartItem?.qty + 1, true)}
              >
                <Add fontSize="small" />
              </BazaarButton>
            </FlexBox>
          )}

          {/* Trust Badges */}
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {productFeatures.map((feature, idx) => (
                <Grid item xs={12} key={idx}>
                  <FlexBox 
                    alignItems="center" 
                    sx={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.02)",
                      border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)"}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: isDark
                          ? "rgba(255, 255, 255, 0.08)"
                          : "rgba(0, 0, 0, 0.04)",
                        transform: "translateX(8px)",
                        border: `1px solid ${feature.color}`,
                      },
                    }}
                  >
                    <feature.icon sx={{ 
                      color: feature.color, 
                      fontSize: "24px", 
                      mr: 1.5 
                    }} />
                    <Span sx={{ 
                      fontSize: "13px", 
                      fontWeight: 500,
                      color: isDark ? "#D1D5DB" : "#4B5563",
                    }}>
                      {feature.text}
                    </Span>
                  </FlexBox>
                </Grid>
              ))}
            </Grid>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
