"use strict";
exports.id = 4274;
exports.ids = [4274];
exports.modules = {

/***/ 4274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7449);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4167);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4608);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
react_toastify__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












// import {server_ip} from "utils/backend_server_ip.jsx"
const ContentWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        "& .carousel:hover": {
            cursor: "pointer",
            "& .carousel__back-button": {
                opacity: 1,
                left: 10
            },
            "& .carousel__next-button": {
                opacity: 1,
                right: 10
            }
        },
        "& .carousel__next-button, & .carousel__back-button": {
            opacity: 0,
            boxShadow: "none",
            transition: "all 0.3s",
            background: "transparent",
            color: theme.palette.primary.main,
            ":disabled": {
                color: theme.palette.grey[500]
            },
            ":hover": {
                color: theme.palette.primary.main,
                backgroundColor: "transparent"
            }
        },
        "& .carousel__back-button": {
            left: 0
        },
        "& .carousel__next-button": {
            right: 0
        }
    })); // =====================================================
const StyledChip1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip)(()=>({
        zIndex: 1,
        top: "40px",
        left: "35px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "absolute"
    }));
// =====================================================
const ProductViewDialog = (props)=>{
    const { product , openDialog , handleCloseDialog  } = props;
    const imgurl = process.env.IMAGE_BASE_URL;
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (false) {}
    }, []);
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__/* .useAppContext */ .bp)();
    const cartItem = state.cart.find((item)=>item.id === product.id);
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((amount, addflag)=>()=>{
            const payload = {
                ...product,
                qty: amount,
                price: product.salePrice,
                sku: product.sku,
                slug: product.slug,
                name: product.name,
                imgUrl: product.imgGroup[0],
                image: product.imgGroup[0]
            };
            if (addflag == true) {
                dispatch({
                    type: "CHANGE_CART_AMOUNT",
                    payload
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_RIGHT
                });
            } else {
                dispatch({
                    type: "CHANGE_CART_AMOUNT",
                    payload
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_RIGHT
                });
            }
        }, [
        dispatch,
        product
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        open: openDialog,
        maxWidth: false,
        onClose: handleCloseDialog,
        sx: {
            zIndex: 1501
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
            sx: {
                maxWidth: 900,
                width: "100%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    totalSlides: product.imgGroup.length,
                                    visibleSlides: 1,
                                    children: product.imgGroup.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            src: item,
                                            sx: {
                                                mx: "auto",
                                                width: "100%",
                                                objectFit: "contain",
                                                height: {
                                                    sm: 400,
                                                    xs: 250
                                                }
                                            }
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                alignSelf: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H2, {
                                        children: product.name
                                    }),
                                    product.categoryName === "" || product.categoryName === undefined ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Paragraph */ .nv, {
                                        py: 1,
                                        color: "grey.700",
                                        fontWeight: 600,
                                        fontSize: 13,
                                        children: [
                                            "CATEGORY: ",
                                            product.categoryName
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H1, {
                                        color: "primary.main",
                                        children: [
                                            currency,
                                            ". ",
                                            product.salePrice
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__/* .Paragraph */ .nv, {
                                        my: 2,
                                        children: product.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                        sx: {
                                            mb: 2
                                        }
                                    }),
                                    product.stock == 0.0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                                color: "primary",
                                                size: "small",
                                                label: "Out of Stock"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                color: "primary",
                                                variant: "contained",
                                                disabled: true,
                                                sx: {
                                                    mb: 4.5,
                                                    px: "1.75rem",
                                                    height: 40
                                                },
                                                children: "Add to Cart"
                                            })
                                        ]
                                    }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        size: "large",
                                        color: "primary",
                                        variant: "contained",
                                        onClick: handleCartAmountChange(1, true),
                                        sx: {
                                            height: 45
                                        },
                                        children: "Add to Cart"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_6__/* .FlexBox */ .hs, {
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                size: "small",
                                                color: "primary",
                                                variant: "outlined",
                                                sx: {
                                                    p: ".6rem",
                                                    height: 45,
                                                    minWidth: "44px",
                                                    minHeight: "44px"
                                                },
                                                onClick: handleCartAmountChange(cartItem?.qty - 1, false),
                                                "aria-label": `Decrease quantity of ${product.name}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                    fontSize: "small"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_7__.H3, {
                                                fontWeight: "600",
                                                mx: 2.5,
                                                children: cartItem?.qty.toString().padStart(2, "0")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                size: "small",
                                                color: "primary",
                                                variant: "outlined",
                                                sx: {
                                                    p: ".6rem",
                                                    height: 45,
                                                    minWidth: "44px",
                                                    minHeight: "44px"
                                                },
                                                onClick: handleCartAmountChange(cartItem?.qty + 1, true),
                                                "aria-label": `Increase quantity of ${product.name}`,
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
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    sx: {
                        position: "absolute",
                        top: 3,
                        right: 3,
                        minWidth: "44px",
                        minHeight: "44px"
                    },
                    onClick: handleCloseDialog,
                    "aria-label": "Close product dialog",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Close, {
                        fontSize: "small",
                        color: "secondary"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductViewDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;