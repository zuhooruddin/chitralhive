"use strict";
exports.id = 4832;
exports.ids = [4832];
exports.modules = {

/***/ 4832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6910);
/* harmony import */ var _mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_BazaarCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5744);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4588);
/* harmony import */ var components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4274);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5503);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9029);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3590);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7449);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_13__]);
([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 


















const StyledBazaarCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(components_BazaarCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>({
        height: "100%",
        margin: "auto",
        display: "flex",
        overflow: "hidden",
        borderRadius: "8px",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 250ms ease-in-out",
        ":hover": {
            "& .hover-box": {
                opacity: 1
            }
        }
    }));
const CardMedia = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(()=>({
        width: "100%",
        maxHeight: 300,
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        "& img": {
            transition: "0.3s"
        }
    }));
const AddToCartButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton)(()=>({
        top: 10,
        right: -40,
        position: "absolute",
        transition: "right 0.3s .1s"
    }));
const FavouriteButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton)(()=>({
        top: 45,
        right: -40,
        position: "absolute",
        transition: "right 0.3s .2s"
    }));
const Card = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        borderRadius: "3px",
        transition: "all 0.3s",
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[100]}`,
        ":hover": {
            "& .product-actions": {
                right: 5
            },
            "& img": {
                transform: "scale(1.1)"
            },
            border: `1px solid ${theme.palette.dark.main}`
        }
    }));
const ImageWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        textAlign: "center",
        position: "relative",
        display: "inline-block",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    }));
const StyledChip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "10px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "initial"
    }));
const StyledChip2 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "30px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "initial"
    }));
const StyledChip1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "15px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "absolute"
    }));
const HoverIconWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        zIndex: 2,
        top: "7px",
        opacity: 0,
        right: "15px",
        display: "flex",
        cursor: "pointer",
        position: "absolute",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out"
    }));
const ContentWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(()=>({
        padding: "1rem",
        "& .title, & .categories": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }
    })); // ========================================================
// ========================================================
const ProductCard1 = ({ id , name , mrp , image , imageUrl , slug , sku , salePrice , description , // category = "Product Dialog",
rating =5 , hideRating , hoverEffect , stock , isNewArrival , discount , showProductSize , wishList , publisherFlag , category , pageIndex , pageSize , getCurrentScrollPosition , sorting , ProductReviews , wishlist ,  })=>{
    const discountprice = salePrice;
    const calculatedDiscountAmount = salePrice * discount / 100;
    const calculatedDiscountedSubtotal = salePrice - calculatedDiscountAmount;
    salePrice = calculatedDiscountedSubtotal;
    const imgbaseurl = "https://chitralhive.com/media/";
    var image = image ? image : imageUrl;
    const categoryName = "";
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* .useAppContext */ .bp)();
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: openDialog , 1: setOpenDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (false) {}
    }, []);
    const Reviews = ProductReviews.Reviews.filter((item)=>item.itemid_id === id);
    const totalRatings = Reviews.reduce((total, item)=>total + item.rating, 0);
    const averageRating = totalRatings / Reviews.length;
    const roundedAverageRating = Math.min(Math.round(averageRating * 100) / 100, 5);
    const total = Reviews.length;
    const toggleIsFavorite = ()=>setIsFavorite((fav)=>!fav);
    const addwishtlist = async ()=>{
        let userid = session.user.id;
        await fetch("https://chitralhive.com/api/" + "updateWishlist", {
            method: "POST",
            body: JSON.stringify({
                userid: userid,
                itemid: id
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + session.accessToken
            }
        }).then((res)=>res.json());
        setIsFavorite((fav)=>!fav);
    };
    const { 0: isFavorite , 1: setIsFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(undefined);
    if (Array.isArray(wishlist) && isFavorite === undefined) {
        setIsFavorite((fav)=>fav === undefined ? wishlist.some((item)=>item.id === id) : false);
    }
    const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(()=>setOpenModal((open)=>!open), []);
    const cartItem = state.cart.find((item)=>item.id === id);
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((amount, addedflag)=>()=>{
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
                    id: id || routerId
                }
            });
            if (addedflag == true) {
                react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.POSITION.TOP_RIGHT
                });
            }
        }, []);
    const myFunction = ()=>{
        // Your function logic
        const currentScrollPosition = getCurrentScrollPosition();
        sessionStorage.setItem(router.asPath + "__pp", JSON.stringify({
            pageIndexRoute: pageIndex,
            pageSizeRoute: pageSize,
            scrollPos: currentScrollPosition,
            sorting: sorting
        }));
    };
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
            height: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardMedia, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: `/product/${slug}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: myFunction,
                                children: [
                                    stock === "0.00" && isNewArrival === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | New Arrival",
                                        sx: {
                                            ml: 1
                                        }
                                    }) : isNewArrival === 1 && stock > "0.00" ? discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival"
                                    }) : isNewArrival < 1 && stock === "0.00" ? discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock"
                                    }) : discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Sale"
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-img-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            width: 300,
                                            height: 300,
                                            alt: name || "product",
                                            objectFit: "contain",
                                            layout: "intrinsic",
                                            className: "product-img",
                                            src: imgbaseurl + image,
                                            loading: "lazy",
                                            media: {
                                                // Adjust image size for screens smaller than 600px wide
                                                "(max-width: 600px)": {
                                                    width: "100%",
                                                    height: "auto"
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                        children: `
                .product-img-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                `
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddToCartButton, {
                            className: "product-actions",
                            onClick: ()=>setOpenDialog(true),
                            "aria-label": `View details for ${name}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.RemoveRedEye, {
                                color: "disabled",
                                fontSize: "small"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavouriteButton, {
                            className: "product-actions",
                            onClick: ()=>addwishtlist(),
                            "aria-label": isFavorite ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`,
                            children: isFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Favorite, {
                                color: "primary",
                                fontSize: "small"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default()), {
                                color: "disabled",
                                fontSize: "small"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    openDialog: openDialog,
                    handleCloseDialog: ()=>setOpenDialog(false),
                    product: {
                        name,
                        mrp,
                        id,
                        salePrice,
                        sku,
                        slug,
                        description,
                        categoryName,
                        stock,
                        imgGroup: [
                            imgbaseurl + image,
                            imgbaseurl + image
                        ]
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    p: 2,
                    textAlign: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Paragraph */ .nv, {
                            style: {
                                lineHeight: "1.5em",
                                height: "3em",
                                overflow: "hidden"
                            },
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H4, {
                            fontWeight: 700,
                            py: 0.5,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                gap: 1,
                                mt: 0.5,
                                flexDirection: "column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    fontWeight: "600",
                                    color: "primary.main",
                                    sx: {
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex"
                                    },
                                    children: [
                                        currency,
                                        ". ",
                                        salePrice.toFixed(2),
                                        !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H5, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                color: "grey.700",
                                                fontWeight: "200",
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    ml: "15px"
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                    children: [
                                                        currency,
                                                        ".",
                                                        discountprice?.toFixed(2)
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexRowCenter */ .b0, {
                            gap: 1,
                            mb: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Rating, {
                                    name: "read-only",
                                    value: averageRating && averageRating ? averageRating : 0,
                                    readOnly: true,
                                    sx: {
                                        fontSize: 14
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Small */ .x4, {
                                    fontWeight: 600,
                                    color: "grey.500",
                                    children: [
                                        "(",
                                        total && total ? total : 0,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        stock == 0.0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                color: "primary",
                                variant: "contained",
                                disabled: true,
                                fullWidth: true,
                                children: "Add to Cart"
                            })
                        }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            fullWidth: true,
                            color: "dark",
                            variant: "outlined",
                            onClick: handleCartAmountChange(1, true),
                            children: "Add to Cart"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 4.5,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    size: "small",
                                    sx: {
                                        p: 1
                                    },
                                    color: "primary",
                                    variant: "outlined",
                                    onClick: handleCartAmountChange(cartItem?.qty - 1, false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                        fontSize: "small"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H3, {
                                    fontWeight: "600",
                                    mx: 2.5,
                                    children: cartItem?.qty.toString().padStart(2, "0")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    size: "small",
                                    sx: {
                                        p: 1
                                    },
                                    color: "primary",
                                    variant: "outlined",
                                    onClick: handleCartAmountChange(cartItem?.qty + 1, true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Add, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
            height: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardMedia, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: `/product/${slug}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: myFunction,
                                children: [
                                    stock === "0.00" && isNewArrival === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | New Arrival",
                                        sx: {
                                            ml: 1
                                        }
                                    }) : isNewArrival === 1 && stock > "0.00" ? discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival"
                                    }) : isNewArrival < 1 && stock === "0.00" ? discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock"
                                    }) : discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Sale"
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-img-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            width: 300,
                                            height: 300,
                                            alt: name || "product",
                                            objectFit: "contain",
                                            layout: "intrinsic",
                                            className: "product-img",
                                            src: imgbaseurl + image,
                                            loading: "lazy",
                                            media: {
                                                // Adjust image size for screens smaller than 600px wide
                                                "(max-width: 600px)": {
                                                    width: "100%",
                                                    height: "auto"
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                        children: `
  .product-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddToCartButton, {
                            className: "product-actions",
                            onClick: ()=>setOpenDialog(true),
                            "aria-label": `View details for ${name}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.RemoveRedEye, {
                                color: "disabled",
                                fontSize: "small"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    openDialog: openDialog,
                    handleCloseDialog: ()=>setOpenDialog(false),
                    product: {
                        name,
                        mrp,
                        id,
                        salePrice,
                        sku,
                        slug,
                        description,
                        categoryName,
                        stock,
                        imgGroup: [
                            imgbaseurl + image,
                            imgbaseurl + image
                        ]
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    p: 2,
                    textAlign: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Paragraph */ .nv, {
                            style: {
                                lineHeight: "1.5em",
                                height: "3em",
                                overflow: "hidden"
                            },
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H4, {
                            fontWeight: 700,
                            py: 0.5,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                gap: 1,
                                mt: 0.5,
                                flexDirection: "column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    fontWeight: "600",
                                    color: "primary.main",
                                    sx: {
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex"
                                    },
                                    children: [
                                        currency,
                                        ". ",
                                        salePrice.toFixed(2),
                                        !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H5, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                color: "grey.700",
                                                fontWeight: "200",
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    ml: "15px"
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                    children: [
                                                        currency,
                                                        ".",
                                                        discountprice?.toFixed(2)
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexRowCenter */ .b0, {
                            gap: 1,
                            mb: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Rating, {
                                    name: "read-only",
                                    value: averageRating && averageRating ? averageRating : 0,
                                    readOnly: true,
                                    sx: {
                                        fontSize: 14
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Small */ .x4, {
                                    fontWeight: 600,
                                    color: "grey.500",
                                    children: [
                                        "(",
                                        total && total ? total : 0,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        stock == 0.0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                color: "primary",
                                variant: "contained",
                                disabled: true,
                                fullWidth: true,
                                children: "Add to Cart"
                            })
                        }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            fullWidth: true,
                            color: "dark",
                            variant: "outlined",
                            onClick: handleCartAmountChange(1, true),
                            children: "Add to Cart"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 4.5,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    size: "small",
                                    sx: {
                                        p: 1
                                    },
                                    color: "primary",
                                    variant: "outlined",
                                    onClick: handleCartAmountChange(cartItem?.qty - 1, false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                        fontSize: "small"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H3, {
                                    fontWeight: "600",
                                    mx: 2.5,
                                    children: cartItem?.qty.toString().padStart(2, "0")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    size: "small",
                                    sx: {
                                        p: 1
                                    },
                                    color: "primary",
                                    variant: "outlined",
                                    onClick: handleCartAmountChange(cartItem?.qty + 1, true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Add, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;