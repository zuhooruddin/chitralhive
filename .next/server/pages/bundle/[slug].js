"use strict";
(() => {
var exports = {};
exports.id = 2427;
exports.ids = [2427];
exports.modules = {

/***/ 4912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6044);
/* harmony import */ var components_products_BundleIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6459);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7434);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4167);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_api_related_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3815);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2750);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__, components_products_BundleIntro__WEBPACK_IMPORTED_MODULE_3__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__, components_products_BundleIntro__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const StyledTabs = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tabs)(({ theme  })=>({
        minHeight: 0,
        marginTop: 80,
        marginBottom: 24,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        "& .inner-tab": {
            minHeight: 40,
            fontWeight: 600,
            textTransform: "capitalize"
        }
    })); // ===============================================================
// ===============================================================
const BundleDetails = (props)=>{
    const { bundle , bundleitems , category , bundleType  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const handleGoBack = ()=>router.back();
    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(bundleitems);
    const { 0: selectedOption , 1: setSelectedOption  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);
    const { 0: relatedProducts , 1: setRelatedProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const { 0: frequentlyBought , 1: setFrequentlyBought  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        (0,utils_api_related_products__WEBPACK_IMPORTED_MODULE_9__/* .getRelatedProducts */ .E)().then((data)=>setRelatedProducts(data));
        (0,utils_api_related_products__WEBPACK_IMPORTED_MODULE_9__/* .getFrequentlyBought */ .C)().then((data)=>setFrequentlyBought(data));
    }, []);
    const handleOptionClick = (_, value)=>setSelectedOption(value);
    if (!bundle || !bundleitems || !product || !product.length) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexRowCenter */ .b0, {
                px: 2,
                minHeight: "50vh",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        src: "/assets/images/illustrations/404.svg",
                        sx: {
                            display: "block",
                            maxWidth: 320,
                            width: "100%",
                            mb: 3
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Bundle Not Found"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                        flexWrap: "wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "outlined",
                                color: "primary",
                                sx: {
                                    m: 1
                                },
                                onClick: handleGoBack,
                                children: "Go Back"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "contained",
                                    color: "primary",
                                    sx: {
                                        m: 1
                                    },
                                    children: "Go to Home"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            bundleType == "BRAND" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: bundle["name"] + " | " + category,
                description: bundle["metaDescription"] && bundle["metaDescription"] != "undefined" ? bundle["metaDescription"] : "Looking for " + bundle["name"] + " Bundle/Pack/Package for " + category + "? Order online from Our Store.",
                metaTitle: bundle["metaTitle"] && bundle["metaTitle"] != "undefined" ? bundle["metaTitle"] : "Buy " + bundle["name"] + " Bundle/Package/Pack for " + category
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: bundle["name"],
                description: bundle["metaDescription"] && bundle["metaDescription"] != "undefined" ? bundle["metaDescription"] : "Looking for " + bundle["name"] + " Bundle/Package? Order online from Our Stor ",
                metaTitle: bundle["metaTitle"] && bundle["metaTitle"] != "undefined" ? bundle["metaTitle"] : "Buy " + bundle["name"] + " Bundle/Package"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                sx: {
                    my: 4
                },
                children: product ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_BundleIntro__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    product: product,
                    bundle: bundle
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H2, {
                    children: "Loading..."
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    const slug = context.query["slug"];
    const bundleDetails = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getbundleitemDetail */ .Z.getbundleitemDetail(slug).then((response)=>{
        return response.data;
    }).catch((error)=>{});
    return {
        props: {
            bundle: bundleDetails["bundle"],
            bundleitems: bundleDetails["bundleItems"],
            category: bundleDetails["category"],
            bundleType: bundleDetails["bundleType"]
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6459:
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
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4588);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5503);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _flex_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9029);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3590);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_17__]);
react_toastify__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















 // ================================================================




// ================================================================
const BundleIntro = ({ product , bundle  })=>{
    const imgbaseurl = "https://chitralhive.com/media/" + "/";
    const imgurl = "https://chitralhive.com/api/" + "media/";
    const imgurls = "https://chitralhive.com/api/";
    const slugbaseurl = "/product/";
    const { id , status , name , image , imgGroup , mrp , manufacturer , author , aliasCode , sku ,  } = bundle;
    const { 0: rowsData , 1: setRowsData  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(product);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const routerId = router.query.id;
    const { 0: totalBundlePrice , 1: setTotalBundlePrice  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(bundle.salePrice);
    const { 0: isViewerOpen , 1: setIsViewerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
    const { 0: currentImage , 1: setCurrentImage  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0);
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_13__/* .useAppContext */ .bp)();
    const cartList = state.cart;
    const cartItem = cartList.find((item)=>item.id === id || item.id === routerId);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.useTheme)();
    const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_19___default()(theme.breakpoints.down("sm"));
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        if (false) {}
    }, []);
    const inputStyle = {
        width: "3.5em",
        fontSize: isMobile ? "0.9em" : "1em"
    };
    const openImageViewer = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)((index)=>{
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = ()=>{
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const handleTotalBundlePriceChange = ()=>{
        var sumPrice = 0;
        rowsData.map((row, index)=>sumPrice = sumPrice + row.salePrice * row.qty);
        setTotalBundlePrice(sumPrice);
    };
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)((addflag)=>()=>{
            let addedToCart = false;
            rowsData.forEach((row)=>{
                if (row.qty <= 0 || row.stock <= 0) return;
                const payloadQty = Math.min(row.qty, row.stock);
                const payload = {
                    id: row.id,
                    mrp: row.mrp,
                    salePrice: row.salePrice,
                    price: row.salePrice,
                    sku: row.sku,
                    slug: row.slug,
                    image: imgurl + row.image,
                    name: row.name + " | Bundle: " + bundle.name,
                    qty: payloadQty,
                    bundle: true
                };
                dispatch({
                    type: "CHANGE_CART_AMOUNT",
                    payload
                });
                addedToCart = true;
                if (payloadQty < row.qty && addflag) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.info(`${row.name} has only ${row.stock} in stock`, {
                        position: react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.POSITION.TOP_RIGHT
                    });
                }
            });
            if (addedToCart && addflag) {
                react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.POSITION.TOP_RIGHT
                });
            } else if (addedToCart && !addflag) {
                react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.POSITION.TOP_RIGHT
                });
            }
        }, [
        bundle,
        rowsData,
        dispatch
    ]);
    const handleChange = (index, evnt)=>{
        const { name , value  } = evnt.target;
        const rowsInput = [
            ...product
        ];
        rowsInput[index]["qty"] = value;
        setRowsData(rowsInput);
        handleTotalBundlePriceChange();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                spacing: 3,
                justifyContent: "space-around",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 6,
                        xs: 12,
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flex_box__WEBPACK_IMPORTED_MODULE_16__/* .FlexBox */ .hs, {
                            justifyContent: "center",
                            mb: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                width: 300,
                                alt: name,
                                height: 300,
                                loading: "eager",
                                objectFit: "contain",
                                src: imgurls + `${image}`
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 6,
                        xs: 12,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__.H1, {
                                mb: 2,
                                children: bundle.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                mb: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_12__.H2, {
                                    color: "primary.main",
                                    mb: 0.5,
                                    lineHeight: "1",
                                    children: [
                                        currency,
                                        ". ",
                                        totalBundlePrice.toFixed(2)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_16__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                mb: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        children: "Product SKU / CODE:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__.H6, {
                                        ml: 1,
                                        children: sku
                                    })
                                ]
                            }),
                            !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                color: "primary",
                                variant: "contained",
                                onClick: handleCartAmountChange(1, true),
                                sx: {
                                    mb: 4.5,
                                    px: "1.75rem",
                                    height: 40
                                },
                                children: "Add to Cart"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_16__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                mb: 4.5,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__.H3, {
                                        fontWeight: "600",
                                        mx: 2.5,
                                        children: cartItem?.qty.toString().padStart(2, "0")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
            }),
            isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                style: {
                    borderCollapse: "collapse",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: {
                                        padding: "8px",
                                        textAlign: "left",
                                        backgroundColor: "#f2f2f2",
                                        color: "#444",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    children: "Image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: {
                                        padding: "8px",
                                        textAlign: "left",
                                        backgroundColor: "#f2f2f2",
                                        color: "#444",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: {
                                        padding: "8px",
                                        textAlign: "left",
                                        backgroundColor: "#f2f2f2",
                                        color: "#444",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    children: "Quantity"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: {
                                        padding: "8px",
                                        textAlign: "left",
                                        backgroundColor: "#f2f2f2",
                                        color: "#444",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    children: "Price"
                                })
                            ]
                        })
                    }),
                    product.map((row, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            style: {
                                textAlign: "left"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        style: {
                                            padding: "8px",
                                            borderBottom: "1px solid #ddd"
                                        },
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                width: 40,
                                                alt: row.name,
                                                height: 40,
                                                loading: "eager",
                                                objectFit: "contain",
                                                src: imgurl + `${row.image}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
                                        href: slugbaseurl + `${row.slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    padding: "8px",
                                                    color: "#444",
                                                    fontWeight: "inherit",
                                                    borderBottom: "1px solid #ddd"
                                                },
                                                children: row.name
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: {
                                            padding: "8px",
                                            borderBottom: "1px solid #ddd"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                min: 0,
                                                max: 100,
                                                value: row.qty,
                                                onChange: (evnt)=>handleChange(index, evnt),
                                                name: "name",
                                                style: inputStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: {
                                            padding: "8px",
                                            borderBottom: "1px solid #ddd"
                                        },
                                        children: row.salePrice
                                    })
                                ]
                            })
                        }, row.id)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    colSpan: "2",
                                    style: {
                                        textAlign: "right",
                                        paddingRight: "8px",
                                        paddingTop: "8px"
                                    },
                                    children: "Total:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    style: {
                                        padding: "8px",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    children: product.reduce((total, row)=>total + row.salePrice * row.qty, 0)
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()),
                sx: {
                    width: "100%",
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            color: "#D23F57",
                                            fontWeight: "bold"
                                        },
                                        children: "Image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            color: "#D23F57",
                                            fontWeight: "bold"
                                        },
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            color: "#D23F57",
                                            fontWeight: "bold"
                                        },
                                        align: "center",
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            color: "#D23F57",
                                            fontWeight: "bold"
                                        },
                                        align: "center",
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            color: "#D23F57",
                                            fontWeight: "bold"
                                        },
                                        align: "center",
                                        children: "Total Price"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: product.map((row, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sx: {
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            component: "th",
                                            scope: "row",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                width: 60,
                                                alt: row.name,
                                                height: 60,
                                                loading: "eager",
                                                objectFit: "contain",
                                                src: imgurl + `${row.image}`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
                                            href: slugbaseurl + `${row.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    children: row.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            align: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                min: 0,
                                                max: 100,
                                                value: row.qty,
                                                onChange: (evnt)=>handleChange(index, evnt),
                                                name: "name",
                                                style: inputStyle
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            align: "center",
                                            children: row.salePrice
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            align: "center",
                                            children: row.salePrice * row.qty
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            align: "center"
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleIntro);

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

/***/ 7902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRight");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

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

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,5675,9029,317,4210,8745,1268,6044,7434], () => (__webpack_exec__(4912)));
module.exports = __webpack_exports__;

})();