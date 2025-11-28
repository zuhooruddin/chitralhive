"use strict";
(() => {
var exports = {};
exports.id = 4627;
exports.ids = [4627];
exports.modules = {

/***/ 8177:
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
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7434);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9029);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6044);
/* harmony import */ var components_products_BundleCard1List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5450);
/* harmony import */ var components_products_BundleCard9List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(776);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__, components_products_BundleCard1List__WEBPACK_IMPORTED_MODULE_7__, components_products_BundleCard9List__WEBPACK_IMPORTED_MODULE_8__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__, components_products_BundleCard1List__WEBPACK_IMPORTED_MODULE_7__, components_products_BundleCard9List__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const BundleSearchResult = (props)=>{
    const { searchCategory , bundleDetail  } = props;
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("grid");
    const downMd = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()((theme)=>theme.breakpoints.down("md"));
    const toggleView = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((v)=>()=>setView(v), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: bundleDetail["title"],
                description: bundleDetail["metaDescription"] && bundleDetail["metaDescription"] != "undefined" ? bundleDetail["metaDescription"] : "Home Delivery Service for your favorite brand bundles of " + bundleDetail["title"] + ". Order products and chitrali caps from chitral hive and get at your doorstep across Pakistan.",
                metaTitle: bundleDetail["metaTitle"] && bundleDetail["metaTitle"] != "undefined" ? bundleDetail["metaTitle"] : "Buy " + bundleDetail["title"] + " Bundles"
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
                                        bundleDetail["title"],
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
                            children: bundleDetail["title"] ? view === "grid" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_BundleCard1List__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                category: bundleDetail
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_BundleCard9List__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                category: bundleDetail
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
    const bundleDetail = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getbundleDetail */ .Z.getbundleDetail(catSlug).then((response)=>{
        return response.data.result;
    }).catch((error)=>{});
    return {
        props: {
            bundleDetail
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleSearchResult);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7526:
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
/* harmony import */ var _flex_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9029);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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
const ImageWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        textAlign: "center",
        position: "relative",
        display: "inline-block",
        padding: "20px",
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
const BundleCard1 = ({ id , name , mrp , image , slug , sku , salePrice , description , // category = "Product Dialog",
rating =5 , hideRating , hoverEffect , discount =0 , showProductSize , category , wishList , stock , props  })=>{
    const imgurl = "https://chitralhive.com/media/";
    const server_ip = "https://chitralhive.com/api/";
    const itemImgUrl = "https://chitralhive.com/api/" + "media/";
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (false) {}
    }, []);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.useSession)();
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
                "Authorization": "Bearer " + session.accessToken
            }
        }).then((res)=>res.json());
        setIsFavorite((fav)=>!fav);
    };
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* .useAppContext */ .bp)();
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: isFavorite , 1: setIsFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    if (wishList !== undefined && isFavorite === undefined) {
        setIsFavorite((fav)=>fav === undefined ? wishList.includes(id) : false);
    }
    const categoryName = category["name"];
    const toggleIsFavorite = ()=>setIsFavorite((fav)=>!fav);
    const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(()=>setOpenModal((open)=>!open), []);
    const cartItem = state.cart.find((item)=>item.id === id);
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((product)=>async ()=>{
            const response = await axios__WEBPACK_IMPORTED_MODULE_13___default()({
                method: "post",
                url: server_ip + "getWebsiteBundleItemDetails",
                data: {
                    slug: product.slug
                }
            });
            const validItems = response?.data?.bundleItems?.filter((item)=>item.qty > 0);
            validItems.forEach((item)=>{
                dispatch({
                    type: "CHANGE_CART_AMOUNT",
                    payload: {
                        id: item.id,
                        mrp: item.mrp,
                        salePrice: item.salePrice,
                        price: item.salePrice,
                        sku: item.sku,
                        slug: item.slug,
                        image: imgurl + item.image,
                        name: item.name,
                        qty: item.qty,
                        bundle: true
                    }
                });
            });
            if (product.qty > 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.POSITION.TOP_RIGHT
                });
            }
        // dispatch({
        //   type: "CHANGE_CART_AMOUNT",
        //   payload: product,
        // }),   []
        });
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBazaarCard, {
            hoverEffect: hoverEffect,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ImageWrapper, {
                    children: [
                        !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                            color: "primary",
                            size: "small",
                            label: `${discount} off`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverIconWrapper, {
                            className: "hover-box",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                onClick: ()=>addwishtlist(),
                                children: isFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Favorite, {
                                    color: "primary",
                                    fontSize: "small"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    fontSize: "small",
                                    color: "disabled"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: `/bundle/${slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    src: `${image}`,
                                    width: 0,
                                    height: 0,
                                    objectFit: "contain",
                                    layout: "responsive",
                                    alt: name
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    openDialog: openModal,
                    handleCloseDialog: toggleDialog,
                    product: {
                        name,
                        mrp,
                        id,
                        description,
                        categoryName,
                        imgGroup: [
                            image,
                            image
                        ]
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                flex: "1 1 0",
                                minWidth: "0px",
                                mr: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        href: `/bundle/${slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H3, {
                                                mb: 1,
                                                title: name,
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                className: "title",
                                                color: "text.secondary",
                                                children: name
                                            })
                                        })
                                    }),
                                    showProductSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
                                        color: "grey.600",
                                        mb: 1,
                                        display: "block",
                                        children: "300ml"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                        alignItems: "center",
                                        gap: 1,
                                        mt: 0.5,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                fontWeight: "600",
                                                color: "primary.main",
                                                children: [
                                                    currency,
                                                    ". ",
                                                    salePrice.toFixed(2)
                                                ]
                                            }),
                                            !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                color: "grey.600",
                                                fontWeight: "600",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                    children: mrp?.toFixed(2)
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                width: "30px",
                                alignItems: "center",
                                className: "add-cart",
                                flexDirection: "column-reverse",
                                justifyContent: !!cartItem?.qty ? "space-between" : "flex-start",
                                children: [
                                    !!cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            color: "primary",
                                            variant: "outlined",
                                            sx: {
                                                padding: "3px"
                                            },
                                            onClick: handleCartAmountChange({
                                                id,
                                                mrp,
                                                salePrice,
                                                price: salePrice,
                                                sku,
                                                slug,
                                                image,
                                                name: name,
                                                qty: (cartItem?.qty || 0) - 1
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                fontSize: "small"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        color: "text.primary",
                                        fontWeight: "600",
                                        children: cartItem?.qty
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        color: "primary",
                                        variant: "outlined",
                                        sx: {
                                            padding: "3px"
                                        },
                                        onClick: handleCartAmountChange({
                                            id,
                                            mrp,
                                            salePrice,
                                            price: salePrice,
                                            sku,
                                            slug,
                                            image,
                                            name: name,
                                            qty: (cartItem?.qty || 0) + 1
                                        }),
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
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBazaarCard, {
        hoverEffect: hoverEffect,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ImageWrapper, {
                children: [
                    !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                        color: "primary",
                        size: "small",
                        label: `${discount} off`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: `/bundle/${slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                src: `${image}`,
                                width: 0,
                                height: 0,
                                objectFit: "contain",
                                layout: "responsive",
                                alt: name
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                openDialog: openModal,
                handleCloseDialog: toggleDialog,
                product: {
                    name,
                    mrp,
                    id,
                    slug,
                    description,
                    categoryName,
                    imgGroup: [
                        image,
                        image
                    ]
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            flex: "1 1 0",
                            minWidth: "0px",
                            mr: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    href: `/bundle/${slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H3, {
                                            mb: 1,
                                            title: name,
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            className: "title",
                                            color: "text.secondary",
                                            children: name
                                        })
                                    })
                                }),
                                showProductSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
                                    color: "grey.600",
                                    mb: 1,
                                    display: "block",
                                    children: "300ml"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                    alignItems: "center",
                                    gap: 1,
                                    mt: 0.5,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            fontWeight: "600",
                                            color: "primary.main",
                                            children: [
                                                currency,
                                                ". ",
                                                salePrice.toFixed(2)
                                            ]
                                        }),
                                        !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            color: "grey.600",
                                            fontWeight: "600",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                children: mrp?.toFixed(2)
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            width: "30px",
                            alignItems: "center",
                            className: "add-cart",
                            flexDirection: "column-reverse",
                            justifyContent: !!cartItem?.qty ? "space-between" : "flex-start",
                            children: [
                                !!cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        color: "primary",
                                        variant: "outlined",
                                        sx: {
                                            padding: "3px"
                                        },
                                        onClick: handleCartAmountChange({
                                            id,
                                            mrp,
                                            salePrice,
                                            price: salePrice,
                                            sku,
                                            slug,
                                            image,
                                            name: name,
                                            qty: (cartItem?.qty || 0) - 1
                                        }),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                            fontSize: "small"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    color: "text.primary",
                                    fontWeight: "600",
                                    children: cartItem?.qty
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    color: "primary",
                                    variant: "outlined",
                                    sx: {
                                        padding: "3px"
                                    },
                                    onClick: handleCartAmountChange({
                                        id,
                                        mrp,
                                        salePrice,
                                        price: salePrice,
                                        sku,
                                        slug,
                                        image,
                                        name: name,
                                        qty: (cartItem?.qty || 0) + 1
                                    }),
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleCard1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 675:
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
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4167);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5503);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












// styled components

const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card)(()=>({
        width: "100%",
        overflow: "hidden",
        position: "relative",
        marginBottom: "1.25rem"
    })); // ===========================================================
// ===========================================================
const BundleCard9 = ({ id , name , mrp , image , slug , sku , salePrice , description , // category = "Product Dialog",
rating =5 , hideRating , hoverEffect , discount =0 , category , wishList  })=>{
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(()=>setOpenModal((open)=>!open), []);
    const categoryName = category["name"];
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const server_ip = "https://chitralhive.com/api/";
    const itemImgUrl = "https://chitralhive.com/api/" + "media/";
    const imgbaseurl = "https://chitralhive.com/api/";
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
                "Authorization": "Bearer " + session.accessToken
            }
        }).then((res)=>res.json());
        setIsFavorite((fav)=>!fav);
    };
    const { 0: isFavorite , 1: setIsFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    if (wishList !== undefined && isFavorite === undefined) {
        setIsFavorite((fav)=>fav === undefined ? wishList.includes(id) : false);
    }
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__/* .useAppContext */ .bp)();
    const cartItem = state.cart.find((item)=>item.id === id);
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((product)=>async ()=>{
            const response = await axios__WEBPACK_IMPORTED_MODULE_12___default()({
                method: "post",
                url: server_ip + "getWebsiteBundleItemDetails",
                data: {
                    slug: product.slug
                }
            });
            response.data.bundleItems.map((row, index)=>dispatch({
                    type: "CHANGE_CART_AMOUNT",
                    payload: {
                        id: row.id,
                        mrp: row.mrp,
                        salePrice: row.salePrice,
                        price: row.salePrice,
                        sku: row.sku,
                        image: itemImgUrl + row.image,
                        name: row.name,
                        qty: row.qty,
                        bundle: true
                    }
                }));
            if (product.qty > 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_RIGHT
                });
            }
        // dispatch({
        //   type: "CHANGE_CART_AMOUNT",
        //   payload: product,
        // }),   []
        });
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    container: true,
                    spacing: 1,
                    sx: {
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            sm: 3,
                            xs: 3,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                position: "relative",
                                children: [
                                    !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        src: `${image}`,
                                        alt: name,
                                        width: "100%"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            sm: 9,
                            xs: 9,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%",
                                p: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        href: `/bundle/${slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                                fontWeight: "600",
                                                my: "0.5rem",
                                                children: name
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                        mt: 1,
                                        mb: 2,
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                                fontWeight: 600,
                                                color: "primary.main",
                                                mr: 1,
                                                children: [
                                                    "Rs. ",
                                                    mrp?.toFixed(2)
                                                ]
                                            }),
                                            !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
                                                fontWeight: "600",
                                                color: "grey.600",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                    children: [
                                                        "Rs. ",
                                                        (mrp - mrp * discount / 100).toFixed(2)
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                        children: [
                                            !cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                                    image,
                                                    name: name,
                                                    qty: (cartItem?.qty || 0) + 1
                                                }),
                                                children: "Add To Cart"
                                            }),
                                            !!cartItem?.qty && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBetween */ .$9, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                                            image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) - 1
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                            fontSize: "small"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                                        fontWeight: "600",
                                                        fontSize: "15px",
                                                        mx: 1.5,
                                                        children: cartItem.qty
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                                            image,
                                                            name: name,
                                                            qty: (cartItem?.qty || 0) + 1
                                                        }),
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
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            container: true,
            spacing: 1,
            sx: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    item: true,
                    sm: 3,
                    xs: 3,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        position: "relative",
                        children: [
                            !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                src: `${image}`,
                                alt: name,
                                width: "100%"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    item: true,
                    sm: 9,
                    xs: 9,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100%",
                        p: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                href: `/bundle/${slug}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                        fontWeight: "600",
                                        my: "0.5rem",
                                        children: name
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                mt: 1,
                                mb: 2,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                        fontWeight: 600,
                                        color: "primary.main",
                                        mr: 1,
                                        children: [
                                            "Rs. ",
                                            mrp?.toFixed(2)
                                        ]
                                    }),
                                    !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
                                        fontWeight: "600",
                                        color: "grey.600",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                            children: [
                                                "Rs. ",
                                                (mrp - mrp * discount / 100).toFixed(2)
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                children: [
                                    !cartItem?.qty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                            image,
                                            name: name,
                                            qty: (cartItem?.qty || 0) + 1
                                        }),
                                        children: "Add To Cart"
                                    }),
                                    !!cartItem?.qty && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBetween */ .$9, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                                    image,
                                                    name: name,
                                                    qty: (cartItem?.qty || 0) - 1
                                                }),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                    fontSize: "small"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_8__.H5, {
                                                fontWeight: "600",
                                                fontSize: "15px",
                                                mx: 1.5,
                                                children: cartItem.qty
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
                                                    image,
                                                    name: name,
                                                    qty: (cartItem?.qty || 0) + 1
                                                }),
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleCard9);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9029);
/* harmony import */ var components_product_cards_BundleCard1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7526);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_api_related_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3815);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2750);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_BundleCard1__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__]);
([components_product_cards_BundleCard1__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





 // ========================================================







// ========================================================
const BundleCard1List = ({ category  }, props)=>{
    const server_ip = "https://chitralhive.com/api/";
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_7___default().get(url).then((res)=>res.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(server_ip + `getWebsitePagniatedBundlesForCategory?page=${pageIndex}&slug=${category["slug"]}`, fetcher);
    if (error) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Loading failed..."
    });
    if (!data) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    });
    const handleChange = (event, value)=>{
        setPageIndex(value);
    };
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    return data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 3,
                children: data && data["results"].length > 0 ? data["results"].map((item, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 3,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_BundleCard1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...item,
                            category: category
                        }, ind)
                    }, ind)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    ml: 5,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
                        color: "red",
                        children: "No Result Found"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexBetween */ .$9, {
                flexWrap: "wrap",
                mt: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
                        color: "grey.600",
                        children: [
                            "Showing ",
                            data ? (pageIndex - 1) * 12 + 1 : "",
                            "-",
                            data ? (pageIndex - 1) * 12 + data["results"].length : "",
                            " of ",
                            data ? data["count"] : "",
                            " Bundles"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                        count: data ? Math.ceil(data["count"] / 12) : "",
                        variant: "outlined",
                        color: "primary",
                        onChange: handleChange
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            display: "flex"
        },
        style: containerStyle,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default()), {})
    });
};
async function getServerSideProps(context) {
    const slug = context.query["slug"];
    const bundleDetails = await api.getbundleitemDetail(slug);
    return {
        props: {
            bundle: bundleDetails["bundle"],
            bundleitems: bundleDetails["bundleItems"]
        }
    };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleCard1List);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9029);
/* harmony import */ var components_product_cards_BundleCard9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_BundleCard9__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__]);
([components_product_cards_BundleCard9__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // ==========================================================




 // ========================================================

// ==========================================================
const BundleCard9List = ({ category  })=>{
    const server_ip = "https://chitralhive.com/api/";
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_6___default().get(url).then((res)=>res.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(server_ip + `getWebsitePagniatedBundlesForCategory?page=${pageIndex}&slug=${category["slug"]}`, fetcher);
    if (error) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Loading failed..."
    });
    if (!data) /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    });
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const handleChange = (event, value)=>{
        setPageIndex(value);
    };
    return data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            data && data["results"].length > 0 ? data["results"].map((item, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_BundleCard9__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    ...item,
                    category: category
                }, ind)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                ml: 5,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
                    color: "red",
                    children: "No Result Found"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_1__/* .FlexBetween */ .$9, {
                flexWrap: "wrap",
                mt: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
                        color: "grey.600",
                        children: [
                            "Showing ",
                            data ? (pageIndex - 1) * 12 + 1 : "",
                            "-",
                            data ? (pageIndex - 1) * 12 + data["results"].length : "",
                            " of ",
                            data ? data["count"] : "",
                            " Bundles"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
                        count: data ? Math.ceil(data["count"] / 12) : "",
                        variant: "outlined",
                        color: "primary",
                        onChange: handleChange
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
            display: "flex"
        },
        style: containerStyle,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default()), {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleCard9List);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getFrequentlyBought),
/* harmony export */   "E": () => (/* binding */ getRelatedProducts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getFrequentlyBought = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/frequently-bought-products");
    return response.data;
};
const getRelatedProducts = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/related-products");
    return response.data;
};


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

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,5675,9029,317,4210,8745,1268,6044,7434,4274], () => (__webpack_exec__(8177)));
module.exports = __webpack_exports__;

})();