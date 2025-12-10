/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Favorite, Remove, RemoveRedEye } from "@mui/icons-material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, IconButton, styled, Rating } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products/ProductViewDialog";
import { H3, H4, H5, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FlexBetween, FlexBox } from "components/flex-box";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { Paragraph, Small } from "components/Typography";
import Image from "next/image";
import BazaarButton from "components/BazaarButton";
import { useRouter } from "next/router";
import { FlexRowCenter } from "components/flex-box";

const StyledBazaarCard = styled(BazaarCard)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "16px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(135deg, #D23F57 0%, #E94560 50%, #FF6B6B 100%)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 1,
  },
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    borderColor: "transparent",
    "& .hover-box": {
      opacity: 1,
    },
    "&::before": {
      transform: "scaleX(1)",
    },
  },
}));
const CardMedia = styled(Box)(() => ({
  width: "100%",
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  background: "#F8FAFC",
  "& img": {
    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
}));
const AddToCartButton = styled(IconButton)(({ theme }) => ({
  top: 12,
  right: -50,
  position: "absolute",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "10px",
  "&:hover": {
    background: theme.palette.primary.main,
    color: "white",
    transform: "scale(1.1)",
    boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
  },
}));
const FavouriteButton = styled(IconButton)(({ theme }) => ({
  top: 60,
  right: -50,
  position: "absolute",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "10px",
  transitionDelay: "50ms",
  "&:hover": {
    background: theme.palette.primary.main,
    color: "white",
    transform: "scale(1.1)",
    boxShadow: "0 8px 20px rgba(210, 63, 87, 0.3)",
  },
}));
const Card = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: theme.palette.common.white,
  border: "1px solid rgba(0, 0, 0, 0.04)",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(135deg, #D23F57 0%, #E94560 50%, #FF6B6B 100%)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 2,
  },
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    borderColor: "transparent",
    "& .product-actions": {
      right: 12,
    },
    "& img": {
      transform: "scale(1.05)",
    },
    "&::before": {
      transform: "scaleX(1)",
    },
  },
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 3,
  top: "12px",
  left: "12px",
  paddingLeft: 6,
  paddingRight: 6,
  fontWeight: 700,
  fontSize: "11px",
  position: "initial",
  borderRadius: "20px",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
}));
const StyledChip2 = styled(Chip)(() => ({
  zIndex: 3,
  top: "12px",
  left: "12px",
  paddingLeft: 6,
  paddingRight: 6,
  fontWeight: 700,
  fontSize: "11px",
  position: "initial",
  borderRadius: "20px",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
}));
const StyledChip1 = styled(Chip)(() => ({
  zIndex: 3,
  top: "12px",
  left: "12px",
  paddingLeft: 6,
  paddingRight: 6,
  fontWeight: 700,
  fontSize: "11px",
  position: "absolute",
  borderRadius: "20px",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
}));
const HoverIconWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  top: "7px",
  opacity: 0,
  right: "15px",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1.25rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
})); // ========================================================

// ========================================================
const ProductCard1 = ({
  id,
  name,
  mrp,
  image,
  imageUrl,
  slug,
  sku,
  salePrice,
  description,
  // category = "Product Dialog",
  rating = 5,
  hideRating,
  hoverEffect,
  stock,
  isNewArrival,
  discount,
  showProductSize,
  wishList,
  publisherFlag,
  category,
  pageIndex,
  pageSize,
  getCurrentScrollPosition,
  sorting,
  ProductReviews,
  wishlist,
}) => {
  // Ensure salePrice and discount are valid numbers
  const numericSalePrice = parseFloat(salePrice) || 0;
  const numericDiscount = parseFloat(discount) || 0;
  
  const discountprice = numericSalePrice;
  const calculatedDiscountAmount = (numericSalePrice * numericDiscount) / 100;
  const calculatedDiscountedSubtotal = numericSalePrice - calculatedDiscountAmount;
  salePrice = calculatedDiscountedSubtotal;

  const imgbaseurl = process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL;
  var image = image ? image : imageUrl;
  const categoryName = "";
  const { data: session, status } = useSession();
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

const[currency,setCurrency]=useState('')

useEffect(()=>{

  if (typeof window !== 'undefined' && window.localStorage) {
    const storedCurrency = localStorage.getItem('currency');

    setCurrency(storedCurrency);
  }


},[])







  const Reviews = ProductReviews.Reviews.filter(
    (item) => item.itemid_id === id
  );

  const totalRatings = Reviews.reduce((total, item) => total + item.rating, 0);

  const averageRating = totalRatings / Reviews.length;

  const roundedAverageRating = Math.min(
    Math.round(averageRating * 100) / 100,
    5
  );

  const total = Reviews.length;

  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);

  const addwishtlist = async () => {
    let userid = session.user.id;
    await fetch(process.env.NEXT_PUBLIC_BACKEND_API_BASE + "updateWishlist", {
      method: "POST",
      body: JSON.stringify({
        userid: userid,
        itemid: id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session.accessToken,
      },
    }).then((res) => res.json());
    setIsFavorite((fav) => !fav);
  };
  const [isFavorite, setIsFavorite] = useState(undefined);
  if (Array.isArray(wishlist) && isFavorite === undefined) {
    setIsFavorite((fav) =>
      fav === undefined ? wishlist.some((item) => item.id === id) : false
    );
  }

  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);
  const cartItem = state.cart.find((item) => item.id === id);
  const handleCartAmountChange = useCallback(
    (amount, addedflag) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          mrp: mrp,
          salePrice: salePrice,
          price: salePrice,
          qty: amount,
          name: name,
          sku: sku,
          slug: slug,
          image: imgbaseurl + image,
          id: id || routerId,
        },
      });
      if (addedflag == true) {
        toast.success("Added to cart", { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.error("Removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    []
  );
  const myFunction = () => {
    // Your function logic
    const currentScrollPosition = getCurrentScrollPosition();
    sessionStorage.setItem(
      router.asPath + "__pp",
      JSON.stringify({
        pageIndexRoute: pageIndex,
        pageSizeRoute: pageSize,
        scrollPos: currentScrollPosition,
        sorting: sorting,
      })
    );
  };
  if (session) {
    return (
      <Card height="100%">
        <CardMedia>
          <Link href={`/product/${slug}`}>
            <a onClick={myFunction}>
              {/* {!!discount && (
                <StyledChip2 color="primary" size="small" label="Sale" />
              )} */}

              {stock === "0.00" && isNewArrival === 1 ? (
                <StyledChip
                  color="secondary"
                  size="small"
                  label="Out of Stock | New Arrival"
                  sx={{ ml: 1 }}
                />
              ) : isNewArrival === 1 && stock > "0.00" ? (
                discount > 0 ? (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="New Arrival | Sale"
                  />
                ) : (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="New Arrival"
                  />
                )
              ) : isNewArrival < 1 && stock === "0.00" ? (
                discount > 0 ? (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="Out of Stock | Sale"
                  />
                ) : (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="Out of Stock"
                  />
                )
              ) : discount > 0 ? (
                <StyledChip1 color="secondary" size="small" label="Sale" />
              ) : (
                ""
              )}

              {/* {stock == "0.00" && isNewArrival == 1 ? (
                <StyledChip color="secondary" size="small" label="Out of Stock | New Arrival" sx={{ml:1}} />
              ) : (
                isNewArrival == 1 && stock >"0.00"  ?(
                  <StyledChip1 color="secondary"  size="small" label="New Arrival" />

                ):(
                  isNewArrival <1 && stock =="0.00"  ?(
                    <StyledChip1 color="secondary"  size="small" label="Out of Stock" />
  
                  ):("")
                )
              
              
              )} */}

              <div className="product-img-container">
                <Image
                  width={300}
                  height={300}
                  alt={name ? `${name} - Buy Authentic Chitrali Products Online at Chitral Hive` : "Chitrali Product - Authentic Chitral Hive Products"}
                  title={name || "Chitrali Product"}
                  objectFit="contain"
                  layout="intrinsic"
                  className="product-img"
                  src={imgbaseurl + image}
                  loading="lazy"
                  media={{
                    // Adjust image size for screens smaller than 600px wide
                    "(max-width: 600px)": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                />
              </div>

              <style>
                {`
                .product-img-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                `}
              </style>
            </a>
          </Link>

          <AddToCartButton
            className="product-actions"
            onClick={() => setOpenDialog(true)}
            aria-label={`View details for ${name}`}
          >
            <RemoveRedEye color="disabled" fontSize="small" />
          </AddToCartButton>
          <FavouriteButton
            className="product-actions"
            onClick={() => addwishtlist()}
            aria-label={isFavorite ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          >
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder color="disabled" fontSize="small" />
            )}
          </FavouriteButton>
        </CardMedia>

        <ProductViewDialog
          openDialog={openDialog}
          handleCloseDialog={() => setOpenDialog(false)}
          product={{
            name,
            mrp,
            id,
            salePrice,
            sku,
            slug,
            description,
            categoryName,
            stock,
            imgGroup: [imgbaseurl + image, imgbaseurl + image],
          }}
        />

        <Box p={2} textAlign="center">
          <Paragraph
            style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}
          >
            {name}
          </Paragraph>

          <H4 fontWeight={700} py={0.5}>
            <FlexBox
              alignItems="center"
              gap={1}
              mt={0.5}
              flexDirection="column"
            >
              <Box
                fontWeight="600"
                color="primary.main"
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {currency}. {isNaN(salePrice) ? '0.00' : salePrice.toFixed(2)}
                {!!numericDiscount && numericDiscount > 0 && (
                  <H5>
                    <Box
                      color="grey.700"
                      fontWeight="200"
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        ml: "15px",
                      }}
                    >
                      <del>{currency}.{isNaN(discountprice) ? '0.00' : discountprice.toFixed(2)}</del>
                    </Box>
                  </H5>
                )}
              </Box>
            </FlexBox>
          </H4>
          <FlexRowCenter gap={1} mb={2}>
            <Rating
              name="read-only"
              value={averageRating && averageRating ? averageRating : 0}
              readOnly
              sx={{
                fontSize: 14,
              }}
            />
            <Small fontWeight={600} color="grey.500">
              ({total && total ? total : 0})
            </Small>
          </FlexRowCenter>
          {stock == 0.0 ? (
            <>
              <Button
                color="primary"
                variant="contained"
                disabled={true}
                fullWidth
              >
                Add to Cart
              </Button>
            </>
          ) : !cartItem?.qty ? (
            <Button
              fullWidth
              color="dark"
              variant="outlined"
              onClick={handleCartAmountChange(1, true)}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox
              alignItems="center"
              mb={4.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
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
        </Box>
      </Card>
    );
  } else {
    return (
      <Card height="100%">
        <CardMedia>
          <Link href={`/product/${slug}`}>
            <a onClick={myFunction}>
              {/* {!!discount && (
                <StyledChip color="primary" size="small" label="Sale" />
              )}
               {stock == "0.00" && isNewArrival == 1 ? (
                <StyledChip2 color="secondary" size="small" label="Out of Stock | New Arrival" sx={{ml:1}} />
              ) : (
                isNewArrival == 1 && stock >"0.00"  ?(
                  <StyledChip1 color="secondary"  size="small" label="New Arrival" />

                ):(
                  isNewArrival <1 && stock =="0.00"  ?(
                    <StyledChip1 color="secondary"  size="small" label="Out of Stock" />
  
                  ):("")
                )
              
              
              )} */}

              {stock === "0.00" && isNewArrival === 1 ? (
                <StyledChip
                  color="secondary"
                  size="small"
                  label="Out of Stock | New Arrival"
                  sx={{ ml: 1 }}
                />
              ) : isNewArrival === 1 && stock > "0.00" ? (
                discount > 0 ? (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="New Arrival | Sale"
                  />
                ) : (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="New Arrival"
                  />
                )
              ) : isNewArrival < 1 && stock === "0.00" ? (
                discount > 0 ? (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="Out of Stock | Sale"
                  />
                ) : (
                  <StyledChip1
                    color="secondary"
                    size="small"
                    label="Out of Stock"
                  />
                )
              ) : discount > 0 ? (
                <StyledChip1 color="secondary" size="small" label="Sale" />
              ) : (
                ""
              )}

              <div className="product-img-container">
                <Image
                  width={300}
                  height={300}
                  alt={name ? `${name} - Buy Authentic Chitrali Products Online at Chitral Hive` : "Chitrali Product - Authentic Chitral Hive Products"}
                  title={name || "Chitrali Product"}
                  objectFit="contain"
                  layout="intrinsic"
                  className="product-img"
                  src={imgbaseurl + image}
                  loading="lazy"
                  media={{
                    // Adjust image size for screens smaller than 600px wide
                    "(max-width: 600px)": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                />
              </div>

              <style>
                {`
  .product-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `}
              </style>
            </a>
          </Link>

          <AddToCartButton
            className="product-actions"
            onClick={() => setOpenDialog(true)}
            aria-label={`View details for ${name}`}
          >
            <RemoveRedEye color="disabled" fontSize="small" />
          </AddToCartButton>
        </CardMedia>

        <ProductViewDialog
          openDialog={openDialog}
          handleCloseDialog={() => setOpenDialog(false)}
          product={{
            name,
            mrp,
            id,
            salePrice,
            sku,
            slug,
            description,
            categoryName,
            stock,
            imgGroup: [imgbaseurl + image, imgbaseurl + image],
          }}
        />

        <Box p={2} textAlign="center">
          <Paragraph
            style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}
          >
            {name}
          </Paragraph>

          <H4 fontWeight={700} py={0.5}>
            <FlexBox
              alignItems="center"
              gap={1}
              mt={0.5}
              flexDirection="column"
            >
              <Box
                fontWeight="600"
                color="primary.main"
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {currency}. {isNaN(salePrice) ? '0.00' : salePrice.toFixed(2)}
                {!!numericDiscount && numericDiscount > 0 && (
                  <H5>
                    <Box
                      color="grey.700"
                      fontWeight="200"
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        ml: "15px",
                      }}
                    >
                      <del>{currency}.{isNaN(discountprice) ? '0.00' : discountprice.toFixed(2)}</del>
                    </Box>
                  </H5>
                )}
              </Box>
            </FlexBox>
          </H4>
          <FlexRowCenter gap={1} mb={2}>
            <Rating
              name="read-only"
              value={averageRating && averageRating ? averageRating : 0}
              readOnly
              sx={{
                fontSize: 14,
              }}
            />
            <Small fontWeight={600} color="grey.500">
              ({total && total ? total : 0})
            </Small>
          </FlexRowCenter>
          {stock == 0.0 ? (
            <>
              <Button
                color="primary"
                variant="contained"
                disabled={true}
                fullWidth
              >
                Add to Cart
              </Button>
            </>
          ) : !cartItem?.qty ? (
            <Button
              fullWidth
              color="dark"
              variant="outlined"
              onClick={handleCartAmountChange(1, true)}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox
              alignItems="center"
              mb={4.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
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
        </Box>
      </Card>
    );
  }
};

export default ProductCard1;
