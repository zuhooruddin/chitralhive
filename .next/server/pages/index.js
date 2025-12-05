"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 1878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6044);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7434);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
/* harmony import */ var utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1573);
/* harmony import */ var components_LazySection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__, utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__, utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// Lazy load heavy components for better code splitting
// Only Section1 needs SSR (above the fold), others can load client-side
// Add loading states for better UX
const Section1 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.all(/* import() */[__webpack_require__.e(4167), __webpack_require__.e(2908)]).then(__webpack_require__.bind(__webpack_require__, 2908)), {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section1"
        ]
    },
    ssr: true,
    loading: ()=>null
});
const Section2 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section2"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section3 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section3"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section4 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section4"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section5 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section5"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section6 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section6"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section7 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section7"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section9 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section9"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section10 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section10"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Section12 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "pages-sections/market-2/Section12"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const IndexPage = (props)=>{
    // const { data: session } = useSession();
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const { navCategories  } = props;
    const { 0: Wishlistdata , 1: setWishlistdata  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(undefined);
    // Fix: Move conditional state update to useEffect to avoid React hook rules violation
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (session !== undefined && Wishlistdata === undefined && status === "authenticated") {
            const data = [
                "4783"
            ];
            setWishlistdata(data);
        }
    }, [
        session,
        status,
        Wishlistdata
    ]);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // Memoize expensive computations
    const GeneralSettingMemo = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>props.GeneralSetting, [
        props.GeneralSetting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        topbarBgColor: theme.palette.grey[900],
        navCategories: navCategories,
        generalSetting: GeneralSettingMemo,
        footerData: null,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: GeneralSettingMemo && GeneralSettingMemo.length > 0 ? GeneralSettingMemo[0].site_name : "Ecommerce Online Store",
                description: GeneralSettingMemo && GeneralSettingMemo.length > 0 ? GeneralSettingMemo[0].site_description : "Ecommerce Online Store",
                metaTitle: GeneralSettingMemo && GeneralSettingMemo.length > 0 ? GeneralSettingMemo[0].site_metatitle : "Ecommerce Online Store"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                bgcolor: "#F6F6F6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section1, {
                        data1: props.Section1SequenceData,
                        data2: props.Section1SequenceData2 || [],
                        slidersList: props.slidersList,
                        slidersListLocal: props.slidersListLocal
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section9, {
                            data: props.ProductReviews
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                my: -7
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section3, {
                                data1: props.Section2SequenceData || [],
                                data2: props.Section2SequenceData2 || [],
                                data3: props.Section2SequenceData3 || [],
                                data4: props.Section2SequenceData4 || [],
                                data5: props.Section2SequenceData5 || [],
                                data6: props.Section2SequenceData6 || []
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                mt: 3,
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section2, {
                                data: props.brandbundles || []
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                my: -12
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section4, {
                                data1: props.Section3SequenceData || [],
                                data2: props.Section3SequenceData2 || [],
                                data3: props.Section3SequenceData3 || [],
                                userWishlist: Wishlistdata || []
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                mt: 5
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section5, {
                                products: props.products || [],
                                data: props.SectionSequenceOrdera || [],
                                SectionName: props.Section1Name || "",
                                slug: props.slug || "",
                                productreviews: props.ProductReviews
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                my: -7
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section6, {
                                data1: props.Section4SequenceData || [],
                                data2: props.Section4SequenceData2 || []
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section12, {
                            products: props.product || [],
                            data: props.SectionSequenceOrdera2 || [],
                            Section2Name: props.Section2Name || "",
                            slug: props.slug2 || "",
                            productreviews: props.ProductReviews
                        })
                    }),
                    props.productbundles.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                mt: 3,
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section10, {
                                data: props.productbundles
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazySection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                my: -4
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section7, {
                                data1: props.Section5SequenceData || []
                            })
                        })
                    })
                ]
            })
        ]
    });
};
// Memoize component to prevent unnecessary re-renders
const MemoizedIndexPage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().memo(IndexPage);
MemoizedIndexPage.displayName = "IndexPage";
// Use getStaticProps with ISR for better performance - pages are cached and regenerated periodically
async function getStaticProps(context) {
    try {
        // Parallelize all independent API calls for better performance
        const [navCategories, sect4products, inara, brandbundles, productbundles, individulorder, sectionsequenceorder, slidersList, slidersListLocal, ProductReviews, GeneralSetting] = await Promise.all([
            utils_api_market_2__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getNavCategories */ .Z.getNavCategories(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getProducts */ .Z.getProducts(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getProducts */ .Z.getProducts(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getBrandBundles */ .Z.getBrandBundles(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getProductBundles */ .Z.getProductBundles(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getindvidualorderbox */ .Z.getindvidualorderbox(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getSectionSequence */ .Z.getSectionSequence(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getSlidersFromCloud */ .Z.getSlidersFromCloud(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getSlidersFromLocal */ .Z.getSlidersFromLocal(),
            utils_api_market_2__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getReviews */ .Z.getReviews(),
            utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getGeneralSetting */ .Z.getGeneralSetting()
        ]);
        ////////////////////////Section 1/////////////////////////
        const Section1SequenceData = individulorder.find((obj)=>obj.sequenceNo == 1 && obj.type == "box");
        const Section1SequenceData2 = individulorder.find((obj)=>obj.sequenceNo == 2 && obj.type == "box");
        ////////////////////////Section 2/////////////////////////
        const Section2SequenceData = individulorder.find((obj)=>obj.sequenceNo == 3 && obj.type == "box");
        const Section2SequenceData2 = individulorder.find((obj)=>obj.sequenceNo == 4 && obj.type == "box");
        const Section2SequenceData3 = individulorder.find((obj)=>obj.sequenceNo == 5 && obj.type == "box");
        const Section2SequenceData4 = individulorder.find((obj)=>obj.sequenceNo == 6 && obj.type == "box");
        const Section2SequenceData5 = individulorder.find((obj)=>obj.sequenceNo == 7 && obj.type == "box");
        const Section2SequenceData6 = individulorder.find((obj)=>obj.sequenceNo == 8 && obj.type == "box");
        ////////////////////////Section 3/////////////////////////
        const Section3SequenceData = individulorder.find((obj)=>obj.sequenceNo == 9 && obj.type == "box");
        const Section3SequenceData2 = individulorder.find((obj)=>obj.sequenceNo == 10 && obj.type == "box");
        const Section3SequenceData3 = individulorder.find((obj)=>obj.sequenceNo == 11 && obj.type == "box");
        ////////////////////////Section 4/////////////////////////
        const Section4SequenceData = individulorder.find((obj)=>obj.sequenceNo == 12 && obj.type == "box");
        const Section4SequenceData2 = individulorder.find((obj)=>obj.sequenceNo == 13 && obj.type == "box");
        ////////////////////////Section 5/////////////////////////
        const Section5SequenceData = individulorder.find((obj)=>obj.sequenceNo == 14 && obj.type == "box");
        ////////////////////////Section Sequence Order 1/////////////////////////
        const SectionSequenceOrder = individulorder.find((obj)=>obj.type == "section" && obj.sequenceNo == 1);
        // const Section1Name=SectionSequenceOrder.category_name;
        const Section1Name = SectionSequenceOrder?.category_name || "";
        const SectionSequenceOrdera = individulorder.filter((obj)=>obj.type == "section_subcategory" && obj.parent == SectionSequenceOrder.category_id_id);
        ////////////////////////Section Sequence Order 2/////////////////////////
        const SectionSequence = individulorder.find((ob)=>ob.type == "section" && ob.sequenceNo == 2);
        // const Section2Name=SectionSequence.category_name || "";
        const Section2Name = SectionSequence?.category_name || "";
        const Section2id = SectionSequence?.category_id_id || "";
        const SectionSequenceOrdera2 = individulorder.filter((os)=>os.type == "section_subcategory" && os.parent == Section2id);
        // const SectionSequenceOrder=sectionsequenceorder.find(obj => obj.sequenceNo==1);
        const slug = SectionSequenceOrder?.category_slug || "";
        const slug2 = SectionSequence?.category_slug || "";
        // Parallelize product fetches if both slugs exist
        const [products, product] = await Promise.all([
            slug ? utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getProducts */ .Z.getProducts(slug) : Promise.resolve(null),
            slug2 ? utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getSectionProduct */ .Z.getSectionProduct(slug2) : Promise.resolve(null)
        ]);
        ////////////////////////Section Sequence Order 2/////////////////////////
        // const products=sect4products;
        return {
            props: {
                // Add cache headers for API responses
                _cacheTime: Date.now(),
                navCategories,
                products,
                product,
                inara,
                sect4products,
                // latestproduct,
                SectionSequenceOrdera,
                Section1Name,
                Section2Name,
                SectionSequenceOrdera2,
                slug,
                slug2,
                // featureProducts,
                Section1SequenceData: Section1SequenceData || null,
                Section1SequenceData2: Section1SequenceData2 || null,
                Section2SequenceData: Section2SequenceData || null,
                Section2SequenceData2: Section2SequenceData2 || null,
                Section2SequenceData3: Section2SequenceData3 || null,
                Section2SequenceData4: Section2SequenceData4 || null,
                Section2SequenceData5: Section2SequenceData5 || null,
                Section2SequenceData6: Section2SequenceData6 || null,
                Section3SequenceData: Section3SequenceData || null,
                Section3SequenceData2: Section3SequenceData2 || null,
                Section3SequenceData3: Section3SequenceData3 || null,
                Section4SequenceData: Section4SequenceData || null,
                Section4SequenceData2: Section4SequenceData2 || null,
                Section5SequenceData: Section5SequenceData || null,
                // Don't pass entire individulorder array - it's large and not needed
                // individulorder,
                SectionSequenceOrder: SectionSequenceOrder || null,
                // bundles,
                brandbundles,
                productbundles,
                slidersList,
                slidersListLocal,
                ProductReviews,
                GeneralSetting
            },
            // Revalidate every 60 seconds - ISR (Incremental Static Regeneration)
            // This means pages are cached and only regenerated every 60 seconds
            revalidate: 60
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        // Return empty props on error to prevent build failure
        return {
            props: {
                navCategories: [],
                products: null,
                product: null,
                GeneralSetting: []
            },
            revalidate: 60
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoizedIndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LazySection = ({ children , fallback =null , rootMargin ="200px"  })=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, {
            rootMargin
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>{
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [
        rootMargin
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        children: isVisible ? children : fallback
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazySection);


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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,2952,6964,1664,5675,5152,9029,317,4210,8745,1268,6044,7434,1573], () => (__webpack_exec__(1878)));
module.exports = __webpack_exports__;

})();