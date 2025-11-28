"use strict";
exports.id = 4274;
exports.ids = [4274];
exports.modules = {

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3622);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CarouselStyled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1472);








 // ===================================================================
// ===================================================================
const Carousel = ({ sx , step , spacing , infinite , children , autoPlay , interval , showDots , dotClass , dotColor , showArrow , totalSlides , currentSlide , visibleSlides , leftButtonClass , leftButtonStyle , arrowButtonClass , rightButtonClass , rightButtonStyle , hasMasterSpinner , isIntrinsicHeight , naturalSlideWidth , dotGroupMarginTop , naturalSlideHeight ,  })=>{
    // site settings
    const { settings  } = (0,hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledCarouselProvider */ .JF, {
        sx: sx,
        step: step,
        spacing: spacing,
        interval: interval,
        infinite: infinite,
        isPlaying: autoPlay,
        totalSlides: totalSlides,
        currentSlide: currentSlide,
        visibleSlides: visibleSlides,
        hasMasterSpinner: hasMasterSpinner,
        isIntrinsicHeight: isIntrinsicHeight,
        naturalSlideWidth: naturalSlideWidth || 100,
        naturalSlideHeight: naturalSlideHeight || 125,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledSlider */ .Kl, {
                spacing: spacing,
                children: react__WEBPACK_IMPORTED_MODULE_6___default().Children.map(children, (child, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__.Slide, {
                        index: ind,
                        children: child
                    }))
            }),
            showDots && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledDotGroup */ .sh, {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(dotClass),
                dot_margin_top: dotGroupMarginTop,
                renderDots: (props)=>renderDots({
                        ...props,
                        step,
                        dotColor
                    })
            }),
            showArrow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledArrowBackButton */ .vm, {
                        id: "backArrowButton",
                        sx: {
                            left: "10px"
                        },
                        style: leftButtonStyle || {},
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(leftButtonClass, arrowButtonClass),
                        children: settings.direction === "ltr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fontSize: "12px",
                            color: "inherit"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_2___default()), {
                            fontSize: "12px",
                            color: "inherit"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledArrowNextButton */ .fe, {
                        id: "backForwardButton",
                        sx: {
                            right: "10px"
                        },
                        style: rightButtonStyle || {},
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(arrowButtonClass, rightButtonClass),
                        children: settings.direction === "ltr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_2___default()), {
                            fontSize: "12px",
                            color: "inherit"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fontSize: "12px",
                            color: "inherit"
                        })
                    })
                ]
            })
        ]
    });
};
const renderDots = ({ step , dotColor , totalSlides , currentSlide , visibleSlides , carouselStore ,  })=>{
    const dots = [];
    const total = totalSlides - visibleSlides + 1; // handle dot button
    const handleClick = (currentSlide, autoplay)=>{
        carouselStore.setStoreState({
            autoPlay: autoplay,
            currentSlide: currentSlide
        });
    };
    for(let i = 0; i < total; i += step){
        dots.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledDot */ .ND, {
            dot_color: dotColor,
            onClick: ()=>handleClick(i, false),
            dot_active: currentSlide === i ? i + 1 : 0
        }, (Math.random() * i + Date.now()).toString()));
        if (total - (i + 1) < step && total - (i + 1) !== 0) {
            dots.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselStyled__WEBPACK_IMPORTED_MODULE_7__/* .StyledDot */ .ND, {
                dot_color: dotColor,
                dot_active: totalSlides - visibleSlides,
                onClick: ()=>handleClick(totalSlides - visibleSlides, false)
            }, (Math.random() * i + Date.now()).toString()));
        }
    }
    return dots;
};
Carousel.defaultProps = {
    sx: {},
    step: 1,
    interval: 5000,
    showDots: false,
    showArrow: true,
    autoPlay: false,
    infinite: false,
    totalSlides: 10,
    visibleSlides: 5,
    spacing: "1.5rem",
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    hasMasterSpinner: false,
    isIntrinsicHeight: true,
    dotGroupMarginTop: "2rem",
    arrowButtonColor: "secondary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ 1472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JF": () => (/* binding */ StyledCarouselProvider),
/* harmony export */   "Kl": () => (/* binding */ StyledSlider),
/* harmony export */   "ND": () => (/* binding */ StyledDot),
/* harmony export */   "cx": () => (/* binding */ carouselStyled),
/* harmony export */   "fe": () => (/* binding */ StyledArrowNextButton),
/* harmony export */   "sh": () => (/* binding */ StyledDotGroup),
/* harmony export */   "vm": () => (/* binding */ StyledArrowBackButton)
/* harmony export */ });
/* unused harmony export commonArrowBtnStyle */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__);

 // StyledCarouselProvider and StyledSlider component props type
// common styles for arrow back and next button
const commonArrowBtnStyle = ({ theme , showDots , dot_margin_top , showArrowOnHover ,  })=>({
        width: 30,
        border: 0,
        height: 30,
        borderRadius: "50%",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
        transform: "translateY(-50%)",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        background: theme.palette.secondary.main,
        opacity: 1,
        transition: "opacity 0.3s",
        "&:not(:hover)": {
            opacity: showArrowOnHover ? 0 : 0.5
        },
        color: theme.palette.secondary.contrastText,
        top: `calc(50% - ${showDots ? dot_margin_top : "0px"})`,
        "&:disabled": {
            background: theme.palette.text.disabled,
            color: theme.palette.secondary.main,
            cursor: "not-allowed"
        },
        "&:hover:not(:disabled)": {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        },
        [theme.breakpoints.down("xs")]: {
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.8
        }
    });
// styled components
const StyledCarouselProvider = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider)(({ spacing  })=>({
        minWidth: 0,
        position: "relative",
        "& .focusRing___1airF.carousel__slide-focus-ring": {
            outline: "none !important"
        },
        "& .carousel__inner-slide": {
            margin: "auto",
            width: `calc(100% - ${spacing || "0px"})`
        },
        "&:hover $arrowButton": {
            display: "flex"
        }
    }));
const StyledSlider = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider)(({ spacing  })=>({
        marginLeft: `calc(-1 * ${spacing || "0px"} / 2)`,
        marginRight: `calc(-1 * ${spacing || "0px"} / 2)`
    }));
const StyledDotGroup = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup)(({ dot_margin_top  })=>({
        display: "flex",
        justifyContent: "center",
        marginTop: dot_margin_top || "0px",
        opacity: 0,
        transition: "opacity 0.3s",
        // show indicators when carousel is not being hovered
        "&:not(:hover)": {
            opacity: 1
        }
    }));
const StyledDot = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ dot_color , dot_active , theme  })=>({
        width: 16,
        height: 16,
        borderRadius: 300,
        margin: "0.25rem",
        cursor: "pointer",
        position: "relative",
        border: `1px solid ${dot_color || theme.palette.secondary.main}`,
        "&:after": {
            width: 9,
            height: 9,
            top: "50%",
            left: "50%",
            content: '" "',
            borderRadius: 300,
            position: "absolute",
            transform: `translate(-50%, -50%) scaleX(${dot_active ? 1 : 0})`,
            backgroundColor: dot_color || theme.palette.secondary.main
        }
    }));
const StyledArrowBackButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack)(({ theme , showArrowOnHover , showDots , dot_margin_top  })=>({
        ...commonArrowBtnStyle({
            theme,
            showDots,
            showArrowOnHover,
            dot_margin_top
        }),
        [theme.breakpoints.down("md")]: {
            height: "20px",
            width: "20px",
            left: "10px"
        }
    }));
const StyledArrowNextButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext)(({ theme , showArrowOnHover , showDots , dot_margin_top  })=>({
        ...commonArrowBtnStyle({
            theme,
            showDots,
            showArrowOnHover,
            dot_margin_top
        }),
        [theme.breakpoints.down("md")]: {
            height: "20px",
            width: "20px",
            right: "10px"
        }
    }));
const carouselStyled = {
    overflow: "hidden",
    "& .carousel__back-button, & .carousel__next-button": {
        width: 30,
        color: "white",
        borderRadius: 0,
        transition: "1s",
        opacity: 0.5,
        backgroundColor: "dark.main",
        ":hover:not(:disabled)": {
            color: "white",
            backgroundColor: "dark.main",
            opacity: 1
        }
    },
    "& .carousel__back-button": {
        left: 0,
        boxShadow: "-4px 0 7px -5px rgb(0 0 0 / 20%)"
    },
    "& .carousel__next-button": {
        right: 0,
        boxShadow: "4px 0 7px -5px rgb(0 0 0 / 20%)"
    },
    "& .carousel__back-button:disabled": {
        left: -100,
        transition: "0.3s"
    },
    "& .carousel__next-button:disabled": {
        right: -100,
        transition: "0.3s"
    }
};



/***/ }),

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
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2281);
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
                                        color: "grey.500",
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
                                                    height: 45
                                                },
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                size: "small",
                                                color: "primary",
                                                variant: "outlined",
                                                sx: {
                                                    p: ".6rem",
                                                    height: 45
                                                },
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
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    sx: {
                        position: "absolute",
                        top: 3,
                        right: 3
                    },
                    onClick: handleCloseDialog,
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