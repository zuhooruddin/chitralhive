"use strict";
(() => {
var exports = {};
exports.id = 2915;
exports.ids = [2915];
exports.modules = {

/***/ 146:
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
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4167);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9029);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7434);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6044);
/* harmony import */ var components_products_ProductDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(746);
/* harmony import */ var components_products_ProductInstruction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1132);
/* harmony import */ var components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5074);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_schema_StructuredData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var components_products_ProductReview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1993);
/* harmony import */ var utils_api_related_products__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3815);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_5__, components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_8__, components_products_ProductReview__WEBPACK_IMPORTED_MODULE_14__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_5__, components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_8__, components_products_ProductReview__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















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
    }));
const ErrorContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        "& h1": {
            fontSize: "4rem",
            marginBottom: "1rem",
            color: theme.palette.text.secondary
        },
        "& p": {
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        "& a": {
            fontSize: "1.2rem",
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline"
            }
        }
    }));
const ProductDetails = (props)=>{
    ;
    const { productDetails , ProductReviews  } = props;
    const imgbaseurl = "https://chitralhive.com/media/";
    const baseurl = process.env.NEXT_PUBLIC_URL;
    const currentDate = new Date().toLocaleDateString();
    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(productDetails[0]);
    const { 0: selectedOption , 1: setSelectedOption  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);
    const { 0: relatedProducts , 1: setRelatedProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const { 0: frequentlyBought , 1: setFrequentlyBought  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const filteredReviews = ProductReviews.Reviews.filter((item)=>item.itemid_id === product.id);
    const totalRatings = filteredReviews.reduce((total, item)=>total + item.rating, 0);
    const averageRating = totalRatings / filteredReviews.length;
    const roundedAverageRating = Math.min(Math.round(averageRating * 100) / 100, 5);
    const companyname = "ChitralHive";
    const handleGoBack = ()=>router.back();
    const searchWords = process.env.NEXT_PUBLIC_URL + "/search/" + productDetails[0]["slug"];
    const slugbaseurl = "/product/";
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        (0,utils_api_related_products__WEBPACK_IMPORTED_MODULE_15__/* .getRelatedProducts */ .E)().then((data)=>setRelatedProducts(data));
        (0,utils_api_related_products__WEBPACK_IMPORTED_MODULE_15__/* .getFrequentlyBought */ .C)().then((data)=>setFrequentlyBought(data));
    }, []);
    const handleOptionClick = (_, value)=>setSelectedOption(value);
    const handleGoRelevantPage = ()=>router.push(searchWords);
    // const bookschema = {
    //   "@context": "https://schema.org",
    //   "@type": "DataFeed",
    //   dataFeedElement: [
    //     {
    //       "@context": "https://schema.org",
    //       "@type": "Book",
    //       "@id": baseurl + slugbaseurl + productDetails[0]["slug"],
    //       url: baseurl + slugbaseurl + productDetails[0]["slug"],
    //       name: productDetails[0]["name"],
    //       "image": imgbaseurl + productDetails[0]["imgUrl"],
    //       author: {
    //         "@type": "Person",
    //         name: productDetails[0]["author"],
    //       },
    //       workExample: [
    //         {
    //           "@type": "Book",
    //           "@id": baseurl + slugbaseurl + productDetails[0]["slug"],
    //           url: baseurl + slugbaseurl + productDetails[0]["slug"],
    //           potentialAction: {
    //             "@type": "ReadAction",
    //             expectsAcceptanceOf: {
    //               "@type": "Offer",
    //               price: productDetails[0]["salePrice"],
    //               priceCurrency: "PKR",
    //               eligibleRegion: {
    //                 "@type": "Country",
    //                 name: "PK",
    //               },
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   ],
    //   "dateModified":currentDate
    // };
    // if (productDetails[0]["isbn"]) {
    //   bookschema.isbn = productDetails[0]["isbn"];
    // }
    const productschema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: productDetails[0]["name"],
        // "image": imgbaseurl+productDetails[0]["imgUrl"],
        image: [
            imgbaseurl + productDetails[0]["imgUrl"]
        ],
        offers: {
            "@type": "Offer",
            url: baseurl + slugbaseurl + productDetails[0]["slug"],
            price: productDetails[0]["salePrice"],
            priceCurrency: "PKR"
        }
    };
    // const bookschema = {
    //   "@context": "https://schema.org",
    //   "@type": "Book",
    //   "@id": "Book",
    //   name: productDetails[0]["name"],
    //   thumbnailUrl: imgbaseurl + productDetails[0]["imgUrl"],
    //   url: imgbaseurl + slugbaseurl + productDetails[0]["slug"],
    //   image: imgbaseurl + productDetails[0]["imgUrl"],
    //   publisher: productDetails[0]["manufacturer"],
    //   // price: productDetails[0]['salePrice'],
    //   "expectsAcceptanceOf": {
    //     "@type": "Offer",
    //     "price": productDetails[0]['salePrice'],
    //     "priceCurrency": "PKR",
    //     "eligibleRegion": {
    //       "@type": "Country",
    //       "name": "PAKISTAN"
    //     }
    //   },
    // };
    if (productDetails[0]["description"]) {
        // bookschema.description = productDetails[0]["description"];
        productschema.description = productDetails[0]["description"];
    }
    if (productDetails[0]["isbn"]) {
    // bookschema.isbn = productDetails[0]["isbn"];
    }
    if (productDetails[0]["author"] !== "NOT AVAILABLE" && productDetails[0]["author"] != undefined && productDetails[0]["author"]) {
        // bookschema.author = productDetails[0]["author"];
        productschema.author = productDetails[0]["author"];
    }
    if (productDetails[0]["manufacturer"] !== "NOT AVAILABLE" && productDetails[0]["manufacturer"] != undefined && productDetails[0]["manufacturer"]) {
        //  bookschema.manufacturer= productDetails[0]["manufacturer"];
        productschema.manufacturer = productDetails[0]["manufacturer"];
    }
    if (productDetails[0]["sku"]) {
        productschema.sku = productDetails[0]["sku"];
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_schema_StructuredData__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                data: productschema
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: productDetails[0]["name"] ? productDetails[0]["name"] : {
                    companyname
                },
                description: productDetails[0]["metaDescription"] && productDetails[0]["metaDescription"] != "undefined" ? productDetails[0]["metaDescription"] : productDetails[0]["name"] ? "Looking for " + productDetails[0]["name"] + "? Order online and get it to your door-step." : {
                    companyname
                },
                metaTitle: productDetails[0]["metaTitle"] && productDetails[0]["metaTitle"] != "undefined" ? productDetails[0]["metaTitle"] : productDetails[0]["name"] ? "Buy " + productDetails[0]["name"] : {
                    companyname
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                sx: {
                    my: 4
                },
                children: [
                    productDetails[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        product: productDetails[0],
                        slug: productDetails[0]["slug"],
                        total: filteredReviews.length,
                        average: averageRating
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_9__.H2, {
                        children: "Loading..."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTabs, {
                        textColor: "primary",
                        value: selectedOption,
                        indicatorColor: "primary",
                        onChange: handleOptionClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                className: "inner-tab",
                                label: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                className: "inner-tab",
                                label: "Product Instructions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                className: "inner-tab",
                                label: `Review (${filteredReviews && filteredReviews.length > 0 ? filteredReviews.length : 0})`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        mb: 6,
                        children: [
                            selectedOption === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductDescription__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                product: product
                            }),
                            selectedOption === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductInstruction__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                product: product
                            }),
                            selectedOption === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductReview__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                itemid: product.id,
                                itemname: product.name,
                                reviews: ProductReviews && ProductReviews.Reviews.filter((item)=>item.itemid_id === product.id)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const slug = context.query["slug"];
    const productDetails = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_16__/* ["default"].getItemDetail */ .Z.getItemDetail(slug);
    const ProductReviews = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_16__/* ["default"].getReviews */ .Z.getReviews();
    if (!productDetails || !productDetails.length) {
        return {
            redirect: {
                destination: "/search/" + slug,
                permanent: false
            }
        };
    }
    return {
        props: {
            productDetails,
            ProductReviews
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

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

/***/ 5995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_ProductComment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/BazaarAvatar.jsx
var BazaarAvatar = __webpack_require__(8128);
// EXTERNAL MODULE: ./src/components/BazaarRating.jsx
var BazaarRating = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: external "lodash/ceil"
const ceil_namespaceObject = require("lodash/ceil");
var ceil_default = /*#__PURE__*/__webpack_require__.n(ceil_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/utils.js


const getDateDifference = (date)=>{
    let diff = (0,external_date_fns_.differenceInMinutes)(new Date(), new Date(date));
    if (diff < 60) return diff + " minutes ago";
    diff = ceil_default()(diff / 60);
    if (diff < 24) return `${diff} hour${diff === 0 ? "" : "s"} ago`;
    diff = ceil_default()(diff / 24);
    if (diff < 30) return `${diff} day${diff === 0 ? "" : "s"} ago`;
    diff = ceil_default()(diff / 30);
    if (diff < 12) return `${diff} month${diff === 0 ? "" : "s"} ago`;
    diff = diff / 12;
    return `${diff.toFixed(1)} year${ceil_default()(diff) === 0 ? "" : "s"} ago`;
};

;// CONCATENATED MODULE: ./src/components/products/ProductComment.jsx






 // ===========================================================
// ===========================================================
const ProductComment = (props)=>{
    const { username , imgUrl , rating , date , review  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        mb: 4,
        maxWidth: "600px",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                alignItems: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BazaarAvatar/* default */.Z, {
                        src: imgUrl,
                        height: 48,
                        width: 48
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        ml: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography.H5, {
                                mb: 0.5,
                                children: username
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BazaarRating/* default */.Z, {
                                        value: rating,
                                        color: "warn",
                                        readOnly: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Typography.H6, {
                                        mx: 1.25,
                                        children: rating
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Span */.Dr, {
                                        children: getDateDifference(date)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
                color: "grey.700",
                ml: 9,
                children: review
            })
        ]
    });
};
/* harmony default export */ const products_ProductComment = (ProductComment);


/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



 // ======================================================
// ======================================================
const ProductDescription = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H3, {
                mb: 2,
                children: "Specification:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: product.description
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDescription);


/***/ }),

/***/ 1132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



 // ======================================================
// ======================================================
const ProductInstruction = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H3, {
                mb: 2,
                children: "Instructions:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: product["instructions"]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInstruction);


/***/ }),

/***/ 5074:
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
/* harmony import */ var components_BazaarAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8128);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7449);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4588);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5503);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5745);
/* harmony import */ var react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _flex_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9029);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var components_BazaarRating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
react_toastify__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 











 // ================================================================


// ================================================================
const ProductIntro = ({ product , slug , total , average  })=>{
    const { id , mrp , length , width , height , name , imgGroup , manufacturer , author , aliasCode , stock , weight , isbn , salePrice , sku , publisherFlag , discount ,  } = product;
    const discountprice = salePrice;
    const calculatedDiscountAmount = salePrice * discount / 100;
    const calculatedDiscountedSubtotal = salePrice - calculatedDiscountAmount;
    const salePrices = calculatedDiscountedSubtotal;
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (false) {}
    }, []);
    const imgurl = "https://chitralhive.com/media/";
    const localimageurl = "https://chitralhive.com/api/" + "media/";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const routerId = router.query.id;
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);
    const { 0: isViewerOpen , 1: setIsViewerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: currentImage , 1: setCurrentImage  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__/* .useAppContext */ .bp)();
    const cartList = state.cart;
    const cartItem = cartList.find((item)=>item.id === id || item.id === routerId);
    const handleImageClick = (ind)=>()=>{
            setSelectedImage(ind);
        };
    const openImageViewer = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((index)=>{
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = ()=>{
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((amount, addflag)=>()=>{
            dispatch({
                type: "CHANGE_CART_AMOUNT",
                payload: {
                    mrp,
                    salePrices,
                    sku,
                    slug,
                    price: salePrices,
                    qty: amount,
                    name: name,
                    image: localimageurl + imgGroup[0],
                    id: id || routerId
                }
            });
            if (addflag == true) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            }
        }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        width: "100%",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 3,
            justifyContent: "space-around",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    md: 6,
                    xs: 12,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            justifyContent: "center",
                            mb: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    width: 300,
                                    alt: name,
                                    height: 300,
                                    loading: "eager",
                                    objectFit: "contain",
                                    src: localimageurl + `${product.imgGroup[selectedImage]}`,
                                    onClick: ()=>openImageViewer(imgGroup.indexOf(imgGroup[selectedImage]))
                                }),
                                isViewerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    src: imgGroup.map((img)=>localimageurl + img),
                                    onClose: closeImageViewer,
                                    currentIndex: currentImage,
                                    backgroundStyle: {
                                        backgroundColor: "rgba(0,0,0,0.9)",
                                        zIndex: 1501
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            overflow: "auto",
                            children: imgGroup.map((url, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexRowCenter */ .b0, {
                                    width: 64,
                                    height: 64,
                                    minWidth: 64,
                                    bgcolor: "white",
                                    border: "1px solid",
                                    borderRadius: "10px",
                                    ml: ind === 0 ? "auto" : 0,
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: handleImageClick(ind),
                                    mr: ind === imgGroup.length - 1 ? "auto" : "10px",
                                    borderColor: selectedImage === ind ? "primary.main" : "grey.400",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarAvatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        src: localimageurl + `${url}`,
                                        variant: "square",
                                        height: 40
                                    })
                                }, ind))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    md: 6,
                    xs: 12,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H1, {
                            mb: 2,
                            children: name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    lineHeight: "1",
                                    children: "Rated:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    mx: 1,
                                    lineHeight: "1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "warn",
                                        fontSize: "1.25rem",
                                        value: average && average ? average : 0,
                                        readOnly: true
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    lineHeight: "1",
                                    children: [
                                        "(",
                                        total && total ? total : 0,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        manufacturer === "NOT AVAILABLE" || manufacturer === "" || manufacturer === undefined || manufacturer === "null" || manufacturer === null ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Manufacturer:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: manufacturer
                                })
                            ]
                        }),
                        author === "NOT AVAILABLE" || author === "" || author === undefined || author === "null" || author === null ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Author:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: author
                                })
                            ]
                        }),
                        weight === "NOT AVAILABLE" || weight === "" || weight === "0" || weight === undefined || weight === "null" || weight === null ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Weight:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: [
                                        weight,
                                        " grams"
                                    ]
                                })
                            ]
                        }),
                        isbn === "NOT AVAILABLE" || isbn === "" || isbn === undefined || isbn === null || isbn === "null" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Isbn:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: isbn
                                })
                            ]
                        }),
                        length != 0.0 || width != 0.0 || height != 0.0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Dimensions:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: [
                                        length && length != 0.0 ? "L: " + length : "",
                                        " ",
                                        length != 0.0 && width != 0.0 ? "x" : "",
                                        " ",
                                        width && width != 0.0 ? "W: " + width : "",
                                        " ",
                                        (length != 0.0 || width != 0.0) && height != 0.0 ? "x" : "",
                                        " ",
                                        height && height != 0.0 ? "H: " + height : ""
                                    ]
                                })
                            ]
                        }) : "",
                        sku && sku != "" || sku != undefined || sku != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: "Product SKU / CODE:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                    ml: 1,
                                    children: sku
                                })
                            ]
                        }) : "",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            mb: 3,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H2, {
                                    color: "primary.main",
                                    mt: 5,
                                    lineHeight: "1",
                                    children: [
                                        currency,
                                        ". ",
                                        salePrices.toFixed(2)
                                    ]
                                }),
                                !!discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H4, {
                                    color: "primary.main",
                                    mt: 2,
                                    ml: 2,
                                    lineHeight: "1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                        children: [
                                            " ",
                                            currency,
                                            ". ",
                                            discountprice?.toFixed(2)
                                        ]
                                    })
                                }),
                                stock === "0.00" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                    alignItems: "center",
                                    mt: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H5, {
                                            color: "inherit",
                                            children: "Stock : "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                                            color: "red",
                                            children: " Out of Stock "
                                        })
                                    ]
                                }) : ""
                            ]
                        }),
                        stock === "0.00" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            color: "primary",
                            disabled: true,
                            variant: "contained",
                            sx: {
                                mb: 4.5,
                                px: "1.75rem",
                                height: 40
                            },
                            children: "Add to Cart"
                        }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            color: "primary",
                            variant: "contained",
                            onClick: handleCartAmountChange(1, true),
                            sx: {
                                mb: 4.5,
                                px: "1.75rem",
                                height: 40
                            },
                            children: "Add to Cart"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 4.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H3, {
                                    fontWeight: "600",
                                    mx: 2.5,
                                    children: cartItem?.qty.toString().padStart(2, "0")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductIntro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(403);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProductComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5995);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
react_toastify__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ProductReview = ({ itemid , reviews , itemname  })=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)();
    const handleFormSubmit = async (values, { resetForm  })=>{
        // fetch(server_ip+'addReviews', {
        //   method: "POST",
        //   body: formData,
        //   // headers: {
        //   //   "content-type": "application/json",
        //   // },
        // }).catch((e) => console.log(e));
        try {
            const formData = new FormData();
            formData.append("rating", values.rating);
            formData.append("comment", values.comment);
            formData.append("userid", session.user.id);
            formData.append("username", session.user.name);
            formData.append("itemid", itemid);
            formData.append("itemname", itemname);
            const response = await fetch("https://chitralhive.com/api/" + "addReviews", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + session.accessToken
                },
                body: formData
            });
            if (!response.ok) {
                throw new Error("Failed to add address");
            }
            const updatedOrderData = await response.json();
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Review Added Successfully", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.error(error);
        }
        resetForm();
    };
    const { dirty , values , errors , touched , isValid , handleBlur , handleChange , handleSubmit , setFieldValue ,  } = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
        onSubmit: handleFormSubmit,
        initialValues: initialValues,
        validationSchema: reviewSchema
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            reviews.map((item, ind)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ProductComment__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    ...item,
                    key: ind
                })),
            session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H2, {
                        fontWeight: "600",
                        mt: 7,
                        mb: 2.5,
                        children: "Write a Review for this product"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                mb: 2.5,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBox */ .hs, {
                                        mb: 1.5,
                                        gap: 0.5,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
                                                color: "grey.700",
                                                children: "Your Rating"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
                                                color: "error.main",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_2__.Rating, {
                                        color: "warn",
                                        size: "medium",
                                        value: values.rating,
                                        onChange: (_, value)=>setFieldValue("rating", value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                mb: 3,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBox */ .hs, {
                                        mb: 1.5,
                                        gap: 0.5,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
                                                color: "grey.700",
                                                children: "Your Review"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
                                                color: "error.main",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                        rows: 8,
                                        multiline: true,
                                        fullWidth: true,
                                        name: "comment",
                                        variant: "outlined",
                                        onBlur: handleBlur,
                                        value: values.comment,
                                        onChange: handleChange,
                                        placeholder: "Write a review here...",
                                        error: !!touched.comment && !!errors.comment,
                                        helperText: touched.comment && errors.comment
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                variant: "contained",
                                color: "primary",
                                type: "submit",
                                disabled: !(dirty && isValid),
                                children: "Submit"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
                fontWeight: "600",
                mt: 7,
                mb: 2.5,
                children: "Please login to Write a Review for this product"
            })
        ]
    });
};
const commentList = [
    {
        name: "Jannie Schumm",
        imgUrl: "/assets/images/faces/7.png",
        rating: 4.7,
        date: "2021-02-14",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
    },
    {
        name: "Joe Kenan",
        imgUrl: "/assets/images/faces/6.png",
        rating: 4.7,
        date: "2019-08-10",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
    },
    {
        name: "Jenifer Tulio",
        imgUrl: "/assets/images/faces/8.png",
        rating: 4.7,
        date: "2021-02-05",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
    }, 
];
const initialValues = {
    rating: 0,
    comment: "",
    date: new Date().toISOString()
};
const reviewSchema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    rating: yup__WEBPACK_IMPORTED_MODULE_7__.number().required("required"),
    comment: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("required")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StructuredData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function StructuredData({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
                __html: JSON.stringify(data)
            }
        }, "structured-data")
    });
};


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

/***/ 6072:
/***/ ((module) => {

module.exports = require("@mui/lab");

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

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ 5745:
/***/ ((module) => {

module.exports = require("react-simple-image-viewer");

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
var __webpack_exports__ = __webpack_require__.X(0, [6377,2952,6964,1664,5675,9029,317,4210,8745,1268,6044,7434], () => (__webpack_exec__(146)));
module.exports = __webpack_exports__;

})();