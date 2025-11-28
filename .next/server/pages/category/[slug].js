"use strict";
(() => {
var exports = {};
exports.id = 8024;
exports.ids = [8024];
exports.modules = {

/***/ 6419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7434);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9029);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6044);
/* harmony import */ var components_products_ProductCard1List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4560);
/* harmony import */ var components_products_ProductCard9List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6787);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2750);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__, components_products_ProductCard1List__WEBPACK_IMPORTED_MODULE_7__, components_products_ProductCard9List__WEBPACK_IMPORTED_MODULE_8__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__, components_products_ProductCard1List__WEBPACK_IMPORTED_MODULE_7__, components_products_ProductCard9List__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ProductSearchResult = (props)=>{
    const { categoryDetail , ProductReviews  } = props;
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("grid");
    const downMd = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()((theme)=>theme.breakpoints.down("md"));
    const toggleView = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((v)=>()=>setView(v), []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const handleGoBack = ()=>router.back();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: categoryDetail["name"],
                description: categoryDetail["metaDescription"] && categoryDetail["metaDescription"] != "undefined" ? categoryDetail["metaDescription"] : "Home Delivery Service for all " + categoryDetail["name"] + ". Order online from a wide range of " + categoryDetail["name"] + " at your doorstep across Pakistan.",
                metaTitle: categoryDetail["metaTitle"] && categoryDetail["metaTitle"] != "undefined" ? categoryDetail["metaTitle"] : "Buy " + categoryDetail["name"] + " Now"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                sx: {
                    mt: 4,
                    mb: 6
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                        elevation: 1,
                        sx: {
                            mb: "55px",
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: {
                                sm: "1rem 1.25rem",
                                md: "0.5rem 1.25rem",
                                xs: "1.25rem 1.25rem 0.25rem"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_9__.H5, {
                                    children: [
                                        "Searching for “ ",
                                        categoryDetail["name"],
                                        " ”"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                columnGap: 4,
                                flexWrap: "wrap",
                                my: "0.5rem",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                    alignItems: "center",
                                    my: "0.25rem",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_9__/* .Paragraph */ .nv, {
                                            color: "grey.600",
                                            mr: 1,
                                            children: "View:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                            onClick: toggleView("grid"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Apps, {
                                                color: view === "grid" ? "primary" : "inherit",
                                                fontSize: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                            onClick: toggleView("list"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ViewList, {
                                                color: view === "list" ? "primary" : "inherit",
                                                fontSize: "small"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            md: 12,
                            xs: 12,
                            children: categoryDetail["name"] ? view === "grid" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductCard1List__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                category: categoryDetail,
                                ProductReviews: ProductReviews && ProductReviews ? ProductReviews : []
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductCard9List__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                category: categoryDetail,
                                ProductReviews: ProductReviews && ProductReviews ? ProductReviews : []
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_9__.H3, {
                                    color: "red",
                                    children: "No Result Found"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const catSlug = context.query["slug"];
    const categoryDetail = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getCategoryDetail */ .Z.getCategoryDetail(catSlug);
    const ProductReviews = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getReviews */ .Z.getReviews();
    return {
        props: {
            categoryDetail,
            ProductReviews
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSearchResult);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazaarRating = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Rating)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.typography));
BazaarRating.defaultProps = {
    fontSize: "1.25rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarRating);


/***/ }),

/***/ 2792:
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
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4167);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5503);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7449);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var components_BazaarRating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
react_toastify__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









 // styled components





const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card)(()=>({
        width: "100%",
        overflow: "hidden",
        position: "relative",
        marginBottom: "1.25rem"
    })); // ===========================================================
const StyledChip1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "10px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "absolute"
    }));
// ===========================================================
const ProductCard9 = ({ id , name , mrp , image , slug , sku , salePrice , description , // category = "Product Dialog",
rating =5 , hideRating , hoverEffect , discount , showProductSize , stock , isNewArrival , category , wishList , ProductReviews , wishlist ,  })=>{
    const discountprice = salePrice;
    const calculatedDiscountAmount = salePrice * discount / 100;
    const calculatedDiscountedSubtotal = salePrice - calculatedDiscountAmount;
    salePrice = calculatedDiscountedSubtotal;
    const imgbaseurl = "https://chitralhive.com/media/";
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (false) {}
    }, []);
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
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* .useAppContext */ .bp)();
    const cartItem = state.cart.find((item)=>item.id === id);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_10__.useSession)();
    const Reviews = ProductReviews.Reviews.filter((item)=>item.itemid_id === id);
    const totalRatings = Reviews.reduce((total, item)=>total + item.rating, 0);
    const averageRating = totalRatings / Reviews.length;
    const roundedAverageRating = Math.min(Math.round(averageRating * 100) / 100, 5);
    const total = Reviews.length;
    const { 0: isFavorite , 1: setIsFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(undefined);
    if (Array.isArray(wishlist) && isFavorite === undefined) {
        setIsFavorite((fav)=>fav === undefined ? wishlist.some((item)=>item.id === id) : false);
    }
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((product, amount)=>()=>{
            dispatch({
                type: "CHANGE_CART_AMOUNT",
                payload: product
            });
            if (amount == true) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            }
        });
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                    onClick: ()=>addwishtlist(),
                    size: "small",
                    sx: {
                        position: "absolute",
                        top: 15,
                        right: 15
                    },
                    children: isFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Favorite, {
                        color: "primary",
                        fontSize: "small"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default()), {
                        fontSize: "small",
                        color: "disabled"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            sm: 1.5,
                            xs: 10,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                position: "relative",
                                children: [
                                    !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                                        size: "small",
                                        color: "primary",
                                        label: `${discount}% off`,
                                        sx: {
                                            top: 15,
                                            left: 15,
                                            px: "5px",
                                            fontSize: 10,
                                            fontWeight: 600,
                                            position: "absolute"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        src: imgbaseurl + image,
                                        alt: name,
                                        width: "100%",
                                        sx: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            sm: 9,
                            xs: 12,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%",
                                p: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: `/product/${slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                                fontWeight: "600",
                                                my: "0.5rem",
                                                children: name
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                value: averageRating && averageRating ? averageRating : 0,
                                                color: "warn",
                                                readOnly: true
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Small */ .x4, {
                                                ml: 2,
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                        mt: 1,
                                        mb: 2,
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                                fontWeight: 600,
                                                color: "primary.main",
                                                mr: 1,
                                                children: [
                                                    currency,
                                                    ". ",
                                                    salePrice.toFixed(2)
                                                ]
                                            }),
                                            !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
                                                fontWeight: "600",
                                                color: "grey.600",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                    children: [
                                                        " ",
                                                        currency,
                                                        ". ",
                                                        discountprice?.toFixed(2)
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    stock == 0.0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                            color: "primary",
                                            size: "small",
                                            label: "Out of Stock"
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                        children: [
                                            !cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                color: "primary",
                                                variant: "contained",
                                                sx: {
                                                    height: 32
                                                },
                                                onClick: handleCartAmountChange({
                                                    id,
                                                    mrp,
                                                    salePrice,
                                                    price: salePrice,
                                                    sku,
                                                    slug,
                                                    image: imgbaseurl + image,
                                                    name: name,
                                                    qty: (cartItem?.qty || 0) + 1
                                                }, true),
                                                children: "Add To Cart"
                                            }),
                                            !!cartItem?.qty && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBetween */ .$9, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                        color: "primary",
                                                        variant: "outlined",
                                                        sx: {
                                                            padding: "5px"
                                                        },
                                                        onClick: handleCartAmountChange({
                                                            id,
                                                            mrp,
                                                            salePrice,
                                                            price: salePrice,
                                                            sku,
                                                            slug,
                                                            image: imgbaseurl + image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) - 1
                                                        }, false),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                            fontSize: "small"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                                        fontWeight: "600",
                                                        fontSize: "15px",
                                                        mx: 1.5,
                                                        children: cartItem.qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                        color: "primary",
                                                        variant: "outlined",
                                                        sx: {
                                                            padding: "5px"
                                                        },
                                                        onClick: handleCartAmountChange({
                                                            id,
                                                            mrp,
                                                            salePrice,
                                                            price: salePrice,
                                                            sku,
                                                            image: imgbaseurl + image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) + 1
                                                        }, true),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Add, {
                                                            fontSize: "small"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        sm: 1.5,
                        xs: 10,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            position: "relative",
                            children: [
                                !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                                    size: "small",
                                    color: "primary",
                                    label: `${discount}% off`,
                                    sx: {
                                        top: 15,
                                        left: 15,
                                        px: "5px",
                                        fontSize: 10,
                                        fontWeight: 600,
                                        position: "absolute"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    src: imgbaseurl + image,
                                    alt: name,
                                    width: "100%"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        sm: 9,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            p: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: `/product/${slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                            fontWeight: "600",
                                            my: "0.5rem",
                                            children: name
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            value: averageRating && averageRating ? averageRating : 0,
                                            color: "warn",
                                            readOnly: true
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Small */ .x4, {
                                            ml: 2,
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                    mt: 1,
                                    mb: 2,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                            fontWeight: 600,
                                            color: "primary.main",
                                            mr: 1,
                                            children: [
                                                currency,
                                                ". ",
                                                salePrice?.toFixed(2)
                                            ]
                                        }),
                                        !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
                                            fontWeight: "600",
                                            color: "grey.600",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                children: [
                                                    currency,
                                                    ". ",
                                                    discountprice.toFixed(2)
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                    children: stock == 0.0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                            color: "primary",
                                            size: "small",
                                            label: "Out of Stock"
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBox */ .hs, {
                                        children: [
                                            !cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                color: "primary",
                                                variant: "contained",
                                                sx: {
                                                    height: 32
                                                },
                                                onClick: handleCartAmountChange({
                                                    id,
                                                    mrp,
                                                    salePrice,
                                                    price: salePrice,
                                                    sku,
                                                    slug,
                                                    image: imgbaseurl + image,
                                                    name: name,
                                                    qty: (cartItem?.qty || 0) + 1
                                                }, true),
                                                children: "Add To Cart"
                                            }),
                                            !!cartItem?.qty && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_5__/* .FlexBetween */ .$9, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                        color: "primary",
                                                        variant: "outlined",
                                                        sx: {
                                                            padding: "5px"
                                                        },
                                                        onClick: handleCartAmountChange({
                                                            id,
                                                            mrp,
                                                            salePrice,
                                                            price: salePrice,
                                                            sku,
                                                            slug,
                                                            image: imgbaseurl + image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) - 1
                                                        }, false),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                            fontSize: "small"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                                        fontWeight: "600",
                                                        fontSize: "15px",
                                                        mx: 1.5,
                                                        children: cartItem.qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                        color: "primary",
                                                        variant: "outlined",
                                                        sx: {
                                                            padding: "5px"
                                                        },
                                                        onClick: handleCartAmountChange({
                                                            id,
                                                            mrp,
                                                            salePrice,
                                                            price: salePrice,
                                                            sku,
                                                            slug,
                                                            image: imgbaseurl + image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) + 1
                                                        }, true),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Add, {
                                                            fontSize: "small"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
};
// ProductCard9.defaultProps = {
//   title:
//     "Apple iPhone 5 Unlocked 16GB 8MP Used Cell-Phone-16gbIOS Used Refurbished 100%Factory Used",
//   imgUrl: "/assets/images/products/macbook.png",
//   off: 50,
//   price: 450,
//   rating: 0,
//   subcategories: [
//     {
//       title: "Bike",
//       url: "/#",
//     },
//     {
//       title: "Ducati",
//       url: "/#",
//     },
//     {
//       title: "Motors",
//       url: "/#",
//     },
//   ],
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard9);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9029);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4832);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_6__, components_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_8__]);
([swr__WEBPACK_IMPORTED_MODULE_6__, components_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ProductCard1List = ({ category , ProductReviews  })=>{
    const server_ip = "https://chitralhive.com/api/";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const { 0: pageSize , 1: setPageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(15);
    const { 0: scrollFlag , 1: setScrollFlag  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: sorting , 1: setSorting  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Default"); // New state for sorting value
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (router.asPath + "__pp" in sessionStorage) {
            const { pageIndexRoute , pageSizeRoute , scrollPos , sorting  } = JSON.parse(sessionStorage.getItem(router.asPath + "__pp"));
            // if ('scrollRestoration' in window.history) {
            const handleRouteChange = (url)=>{
                // Check if the user is navigating back to this page
                if (url === router.asPath) {
                    // Update the pageIndex state with a new value
                    if (pageIndexRoute) {
                        setPageIndex(pageIndexRoute);
                    }
                    if (pageSizeRoute) {
                        setPageSize(pageSizeRoute);
                    }
                    if (scrollPos) {
                        setScrollFlag(true);
                    }
                    if (sorting) {
                        setSorting(sorting);
                    }
                }
            };
            const handleRouteChangeClear = (url)=>{
                // Check if the user is navigating back to this page
                if (url === router.asPath) {
                    if (pageIndexRoute || pageSizeRoute) {
                        sessionStorage.removeItem(router.asPath + "__pp");
                    }
                }
            };
            // Listen to the 'routeChangeComplete' event
            router.events.on("routeChangeComplete", handleRouteChange);
            // Clean up the event listener
            return ()=>{
                router.events.off("routeChangeComplete", handleRouteChangeClear);
            };
        }
    }, []);
    const getCurrentScrollPosition = ()=>{
        return window.pageYOffset;
    };
    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_7___default().get(url).then((res)=>res.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(server_ip + `PaginatedCategorys?page=${pageIndex}&slug=${category["slug"]}&pageSize=${pageSize}&sort=${sorting}`, fetcher);
    if (error) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Loading failed..."
    });
    if (!data) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    });
    if (data && scrollFlag) {
        const { scrollPos  } = JSON.parse(sessionStorage.getItem(router.asPath + "__pp"));
        setTimeout(()=>{
            window.scrollTo(0, parseInt(scrollPos));
        }, 0);
        setScrollFlag(false);
        sessionStorage.setItem(router.asPath + "__pp", JSON.stringify({}));
    }
    const handleChange = (event, value)=>{
        setPageIndex(value);
    };
    const pf = data ? data.publisherFlag : "";
    const handlePageSizeChange = (event)=>{
        setPageSize(parseInt(event.target.value));
        setPageIndex(1);
    };
    const handleSortingChange = (event)=>{
        setSorting(event.target.value);
        setPageIndex(1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setPageIndex(1);
    }, [
        category
    ]);
    return data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexBox */ .hs, {
                sx: {
                    mt: -2,
                    mb: 1
                },
                alignItems: "flex-end",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                mt: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                id: "demo-simple-select-label",
                                children: "Display"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                labelId: "demo-simple-select-label",
                                id: "demo-simple-select",
                                label: "Products",
                                value: pageSize,
                                onChange: handlePageSizeChange,
                                sx: {
                                    minWidth: 50,
                                    color: "primary.main",
                                    "& .MuiSelect-icon": {
                                        color: "primary.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 15,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "15"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 25,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 50,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 100,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "100"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10___default()), {
                        sx: {
                            ml: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                id: "sorting-select-label",
                                children: "Sort By"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                labelId: "sorting-select-label",
                                id: "sorting-select",
                                label: "Sort By",
                                value: sorting,
                                onChange: handleSortingChange,
                                sx: {
                                    minWidth: 120,
                                    color: "primary.main",
                                    "& .MuiSelect-icon": {
                                        color: "primary.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "Default",
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "price_asc",
                                        children: "Price (Low to High)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "price_desc",
                                        children: "Price (High to Low)"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 3,
                children: data && data["results"].length > 0 ? data["results"].map((item, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 3,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            ...item,
                            category: category,
                            publisherFlag: pf,
                            pageIndex: pageIndex,
                            pageSize: pageSize,
                            getCurrentScrollPosition: getCurrentScrollPosition,
                            sorting: sorting,
                            ProductReviews: ProductReviews,
                            wishlist: session && session.wishlist && session.wishlist.length > 0 ? session.wishlist : null
                        })
                    }, ind)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    lg: 6,
                    sm: 6,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
                        color: "red",
                        children: "No Product Found"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexRowCenter */ .b0, {
                style: {
                    marginTop: "2%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                    count: data ? Math.ceil(data["count"] / pageSize) : "",
                    variant: "outlined",
                    color: "primary",
                    onChange: handleChange,
                    pageSize: pageSize,
                    page: pageIndex
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexRowCenter */ .b0, {
                style: {
                    marginTop: "1%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
                    color: "grey.600",
                    children: [
                        "Showing ",
                        data ? (pageIndex - 1) * pageSize + 1 : "",
                        "-",
                        data ? (pageIndex - 1) * pageSize + data["results"].length : "",
                        " of ",
                        data ? data["count"] : "",
                        " Products"
                    ]
                })
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            display: "flex"
        },
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default()), {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard1List);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9029);
/* harmony import */ var components_product_cards_ProductCard9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2792);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(403);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_ProductCard9__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__]);
([components_product_cards_ProductCard9__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ProductCard9List = ({ category , ProductReviews  })=>{
    const server_ip = "https://chitralhive.com/api/";
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: pageSize , 1: setPageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(15);
    const { 0: sortOption , 1: setSortOption  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_7___default().get(url).then((res)=>res.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(server_ip + `PaginatedCategorys?page=${pageIndex}&slug=${category["slug"]}&pageSize=${pageSize}&sort=${sortOption}`, fetcher);
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)();
    const handleChange = (event, value)=>{
        setPageIndex(value);
    };
    const handlePageSizeChange = (event)=>{
        setPageSize(parseInt(event.target.value));
        setPageIndex(1);
    };
    const handleSortChange = (event)=>{
        setSortOption(event.target.value);
        setPageIndex(1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setPageIndex(1);
    }, [
        category
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexBox */ .hs, {
                sx: {
                    mt: -2,
                    mb: 1
                },
                alignItems: "flex-end",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                mt: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                                id: "display-label",
                                children: "Display"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                labelId: "display-label",
                                id: "display-select",
                                label: "Products",
                                value: pageSize,
                                onChange: handlePageSizeChange,
                                sx: {
                                    minWidth: 50,
                                    color: "primary.main",
                                    "& .MuiSelect-icon": {
                                        color: "primary.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 15,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "15"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 25,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 50,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 100,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "100"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                        sx: {
                            ml: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                                id: "sort-label",
                                children: "Sort"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                labelId: "sort-label",
                                id: "sort-select",
                                label: "Sort",
                                value: sortOption,
                                onChange: handleSortChange,
                                sx: {
                                    minWidth: 120,
                                    color: "primary.main",
                                    "& .MuiSelect-icon": {
                                        color: "primary.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "default",
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "price_asc",
                                        children: "Price (Low to High)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: "price_desc",
                                        children: "Price (High to Low)"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            data ? data.results.map((item, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard9__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    ...item,
                    category: category,
                    ProductReviews: ProductReviews,
                    wishlist: session && session.wishlist && session.wishlist.length > 0 ? session.wishlist : null
                }, ind)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "No products found."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexBetween */ .$9, {
                flexWrap: "wrap",
                mt: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
                        color: "grey.600",
                        children: [
                            "Showing ",
                            data ? (pageIndex - 1) * pageSize + 1 : "",
                            "-",
                            data ? (pageIndex - 1) * pageSize + data.results.length : "",
                            " of ",
                            data ? data.count : "",
                            " Products"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                        count: data ? Math.ceil(data.count / pageSize) : "",
                        variant: "outlined",
                        color: "primary",
                        onChange: handleChange,
                        pageSize: pageSize,
                        page: pageIndex
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                                id: "display-label-bottom",
                                children: "Display"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                labelId: "display-label-bottom",
                                id: "display-select-bottom",
                                label: "Products",
                                value: pageSize,
                                onChange: handlePageSizeChange,
                                sx: {
                                    minWidth: 50,
                                    color: "primary.main",
                                    "& .MuiSelect-icon": {
                                        color: "primary.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 15,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "15"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 25,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 50,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        value: 100,
                                        sx: {
                                            color: "primary.main"
                                        },
                                        children: "100"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard9List);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 3622:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBack");

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ 7902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRight");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6910:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ 734:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileCopy");

/***/ }),

/***/ 8790:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDownOutlined");

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Login");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 6248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 1920:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SearchOutlined");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 2494:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonBase");

/***/ }),

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("@mui/material/utils");

/***/ }),

/***/ 1918:
/***/ ((module) => {

module.exports = require("@mui/styled-engine");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 3908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5001:
/***/ ((module) => {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4172:
/***/ ((module) => {

module.exports = require("simplebar-react");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,5675,9029,317,4210,8745,1268,6044,7434,4274,4832], () => (__webpack_exec__(6419)));
module.exports = __webpack_exports__;

})();