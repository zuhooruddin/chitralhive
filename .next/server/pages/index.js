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
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6044);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7434);
/* harmony import */ var components_Setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(681);
/* harmony import */ var pages_sections_market_2_Section1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8309);
/* harmony import */ var pages_sections_market_2_Section2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8725);
/* harmony import */ var pages_sections_market_2_Section3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6053);
/* harmony import */ var pages_sections_market_2_Section4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(217);
/* harmony import */ var pages_sections_market_2_Section5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6649);
/* harmony import */ var pages_sections_market_2_Section6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8216);
/* harmony import */ var pages_sections_market_2_Section7__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5926);
/* harmony import */ var pages_sections_market_2_Section9__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3703);
/* harmony import */ var pages_sections_market_2_Section10__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3444);
/* harmony import */ var pages_sections_market_2_Section12__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3113);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2750);
/* harmony import */ var utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__, pages_sections_market_2_Section5__WEBPACK_IMPORTED_MODULE_10__, pages_sections_market_2_Section9__WEBPACK_IMPORTED_MODULE_13__, pages_sections_market_2_Section12__WEBPACK_IMPORTED_MODULE_15__, utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__]);
([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__, pages_sections_market_2_Section5__WEBPACK_IMPORTED_MODULE_10__, pages_sections_market_2_Section9__WEBPACK_IMPORTED_MODULE_13__, pages_sections_market_2_Section12__WEBPACK_IMPORTED_MODULE_15__, utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const IndexPage = (props)=>{
    const GeneralSetting = props.GeneralSetting;
    // const { data: session } = useSession();
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_16__.useSession)();
    const { navCategories  } = props;
    const { 0: Wishlistdata , 1: setWishlistdata  } = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(undefined);
    if (session !== undefined && Wishlistdata === undefined && status === "authenticated") {
        const data = [
            "4783"
        ];
        setWishlistdata(data);
    }
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        topbarBgColor: theme.palette.grey[900],
        navCategories: navCategories,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SEO__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: GeneralSetting && GeneralSetting.length > 0 ? GeneralSetting[0].site_name : "Ecommerce Online Store",
                description: GeneralSetting && GeneralSetting.length > 0 ? GeneralSetting[0].site_description : "Ecommerce Online Store",
                metaTitle: GeneralSetting && GeneralSetting.length > 0 ? GeneralSetting[0].site_metatitle : "Ecommerce Online Store"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                bgcolor: "#F6F6F6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data1: props.Section1SequenceData,
                        data2: props.Section1SequenceData2 || [],
                        slidersList: props.slidersList,
                        slidersListLocal: props.slidersListLocal
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section9__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        data: props.ProductReviews
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            my: -7
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section3__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            data1: props.Section2SequenceData || [],
                            data2: props.Section2SequenceData2 || [],
                            data3: props.Section2SequenceData3 || [],
                            data4: props.Section2SequenceData4 || [],
                            data5: props.Section2SequenceData5 || [],
                            data6: props.Section2SequenceData6 || []
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            mt: 3,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            data: props.brandbundles || []
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            my: -12
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section4__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            data1: props.Section3SequenceData || [],
                            data2: props.Section3SequenceData2 || [],
                            data3: props.Section3SequenceData3 || [],
                            userWishlist: Wishlistdata || []
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            mt: 5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section5__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            products: props.products || [],
                            data: props.SectionSequenceOrdera || [],
                            SectionName: props.Section1Name || "",
                            slug: props.slug || "",
                            productreviews: props.ProductReviews
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            my: -7
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section6__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            data1: props.Section4SequenceData || [],
                            data2: props.Section4SequenceData2 || []
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section12__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        products: props.product || [],
                        data: props.SectionSequenceOrdera2 || [],
                        Section2Name: props.Section2Name || "",
                        slug: props.slug2 || "",
                        productreviews: props.ProductReviews
                    }),
                    props.productbundles.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            mt: 3,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section10__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            data: props.productbundles
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            my: -4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_market_2_Section7__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            data1: props.Section5SequenceData || []
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    // const { data: session } = useSession();
    const navCategories = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_18__/* ["default"].getNavCategories */ .Z.getNavCategories();
    const sect4products = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getProducts */ .Z.getProducts();
    const inara = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getProducts */ .Z.getProducts();
    // const bundles=await api.getBundles();
    const brandbundles = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getBrandBundles */ .Z.getBrandBundles();
    const productbundles = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getProductBundles */ .Z.getProductBundles();
    // const latestproduct=await api.getLatestProducts();
    // const featureProducts = await api.getFeatureProducts();
    const individulorder = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getindvidualorderbox */ .Z.getindvidualorderbox();
    const sectionsequenceorder = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getSectionSequence */ .Z.getSectionSequence();
    // Get Sliders Api
    const slidersList = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getSlidersFromCloud */ .Z.getSlidersFromCloud();
    const slidersListLocal = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getSlidersFromLocal */ .Z.getSlidersFromLocal();
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
    const products = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getProducts */ .Z.getProducts(slug);
    const product = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getSectionProduct */ .Z.getSectionProduct(slug2);
    const ProductReviews = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_18__/* ["default"].getReviews */ .Z.getReviews();
    const GeneralSetting = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getGeneralSetting */ .Z.getGeneralSetting();
    ////////////////////////Section Sequence Order 2/////////////////////////
    // const products=sect4products;
    return {
        props: {
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
            individulorder,
            SectionSequenceOrder: SectionSequenceOrder || null,
            // bundles,
            brandbundles,
            productbundles,
            slidersList,
            slidersListLocal,
            ProductReviews,
            GeneralSetting
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4167);



const CardWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(()=>({
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        height: 200
    }));
const CardContent = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(()=>({
        top: 0,
        left: 32,
        zIndex: 1,
        height: "100%",
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        backgroundRepeat: "round"
    }));
const BannerCard4 = ({ img , children , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardWrapper, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                alt: "category",
                height: "100%",
                width: "100%",
                src: img,
                style: {
                    objectFit: "contain"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardContent, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCard4);


/***/ }),

/***/ 479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





// custom styled components
const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ theme  })=>({
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "4px",
        "& img": {
            transition: "all 0.3s"
        },
        ":hover": {
            img: {
                transform: "scale(1.1)"
            },
            "& .category-title": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.dark.main
            }
        }
    }));
const CategoryTitle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(()=>({
        left: 10,
        right: 10,
        bottom: 10,
        padding: 8,
        textAlign: "center",
        borderRadius: "2px",
        position: "absolute",
        transition: "all 0.3s",
        backgroundColor: "rgba(255,255,255, .67)"
    })); // ============================================================
// ============================================================
const CategoryCard1 = ({ image , title , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: url,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                position: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: image,
                        width: 300,
                        height: 300,
                        alt: "category",
                        objectFit: "cover",
                        layout: "responsive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H4, {
                        textAlign: "center",
                        children: title
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryCard1);


/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




//   ==========================================
const NavLink3 = ({ color , href , text , hoverColor , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
            sx: {
                color,
                gap: 1,
                lineHeight: 1,
                fontWeight: 600,
                alignItems: "center",
                position: "relative",
                paddingBottom: "4px",
                display: "inline-flex",
                ":after": {
                    left: 0,
                    bottom: 0,
                    width: "0%",
                    content: "''",
                    height: "2px",
                    transition: "0.3s",
                    position: "absolute",
                    backgroundColor: color
                },
                ":hover": {
                    color: hoverColor,
                    "&::after": {
                        width: "100%",
                        backgroundColor: hoverColor
                    }
                }
            },
            ...props,
            children: [
                text,
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                    sx: {
                        fontSize: 14,
                        flexShrink: 0
                    }
                })
            ]
        })
    });
}; // set default props
NavLink3.defaultProps = {
    color: "text.primary",
    hoverColor: "primary.main"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink3);


/***/ }),

/***/ 3898:
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
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4274);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5503);
/* harmony import */ var _flex_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
([components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















// import { useState } from "react"; // custom styled components
// import mypic from '../../public/assets/images/promotion/offer-1.png'
const Card = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
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
const StyledChip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "10px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "absolute"
    }));
const StyledChip1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip)(()=>({
        zIndex: 1,
        top: "10px",
        left: "15px",
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 600,
        fontSize: "10px",
        position: "absolute"
    }));
const CardMedia = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(()=>({
        width: "100%",
        maxHeight: 300,
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        "& img": {
            transition: "0.3s"
        }
    }));
const AddToCartButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton)(()=>({
        top: 10,
        right: -40,
        position: "absolute",
        transition: "right 0.3s .1s"
    }));
const FavouriteButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton)(()=>({
        top: 45,
        right: -40,
        position: "absolute",
        transition: "right 0.3s .2s"
    })); // ==============================================================
// ==============================================================
const ProductCard20 = ({ product , wishList , data  })=>{
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (false) {}
    }, []);
    const discountprice = product.salePrice;
    const calculatedDiscountAmount = product.salePrice * product.discount / 100;
    const calculatedDiscountedSubtotal = product.salePrice - calculatedDiscountAmount;
    const salePrice = calculatedDiscountedSubtotal;
    const Reviews = data.Reviews.filter((item)=>item.itemid_id === product.id);
    const totalRatings = Reviews.reduce((total, item)=>total + item.rating, 0);
    const averageRating = totalRatings / Reviews.length;
    const roundedAverageRating = Math.min(Math.round(averageRating * 100) / 100, 5);
    const total = Reviews.length;
    const imgbaseurl = "https://chitralhive.com/media/";
    const slugbaseurl = "/product/";
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)();
    const addwishtlist = async ()=>{
        let userid = session.user.id;
        await fetch("https://chitralhive.com/api/" + "updateWishlist", {
            method: "POST",
            body: JSON.stringify({
                userid: userid,
                itemid: product.id
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + session.accessToken
            }
        }).then((res)=>res.json());
        setIsFavorite((fav)=>!fav);
    };
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .useAppContext */ .bp)();
    const { 0: openDialog , 1: setOpenDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: isFavorite , 1: setIsFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(undefined);
    if (Array.isArray(wishList) && isFavorite === undefined) {
        setIsFavorite((fav)=>fav === undefined ? wishList.some((item)=>item.id === product.id) : false);
    }
    const cartItem = state.cart.find((item)=>item.id === product.id); // handle favourite
    const MAX_LENGTH = 18;
    const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(()=>setOpenModal((open)=>!open), []);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    // const handleCartAmountChange = useCallback(
    //   (product) => () =>
    //     dispatch({
    //       type: "CHANGE_CART_AMOUNT",
    //       payload: product,
    //     }),
    //   []
    // );
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((amount, addedflag)=>()=>{
            dispatch({
                type: "CHANGE_CART_AMOUNT",
                payload: {
                    mrp: product.mrp,
                    salePrice: salePrice,
                    price: salePrice,
                    qty: amount,
                    name: product.name,
                    sku: product.sku,
                    slug: product.slug,
                    image: imgbaseurl + product.image,
                    id: product.id || routerId
                }
            });
            if (addedflag == true) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Added to cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Removed from cart", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.POSITION.TOP_RIGHT
                });
            }
        }, []);
    const handleAddToCart = (product)=>{
        const payload = {
            id: product.id,
            name: product.name,
            imgUrl: product.image,
            mrp: salePrice,
            qty: (cartItem?.quantity || 0) + 1
        };
        dispatch({
            type: "CHANGE_CART_AMOUNT",
            payload
        });
    };
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
            height: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardMedia, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                            href: slugbaseurl + `${product.slug}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    product.stock === "0.00" && product.isNewArrival === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | New Arrival",
                                        sx: {
                                            ml: 1
                                        }
                                    }) : product.isNewArrival === 1 && product.stock > "0.00" ? product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival"
                                    }) : product.isNewArrival < 1 && product.stock === "0.00" ? product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock"
                                    }) : product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Sale"
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-img-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            width: 300,
                                            height: 300,
                                            alt: "category",
                                            objectFit: "contain",
                                            layout: "intrinsic",
                                            className: "product-img",
                                            src: imgbaseurl + product.image,
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.RemoveRedEye, {
                                color: "disabled",
                                fontSize: "small"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavouriteButton, {
                            className: "product-actions",
                            onClick: ()=>addwishtlist(),
                            children: isFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Favorite, {
                                color: "primary",
                                fontSize: "small"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.FavoriteBorder, {
                                color: "disabled",
                                fontSize: "small"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    openDialog: openDialog,
                    handleCloseDialog: ()=>setOpenDialog(false),
                    product: {
                        id: product.id,
                        name: product.name,
                        mrp: product.mrp,
                        sku: product.sku,
                        slug: product.slug,
                        salePrice: salePrice,
                        description: product.description,
                        categoryName: product.categoryName,
                        stock: product.stock,
                        image: imgbaseurl + product.image,
                        imgGroup: [
                            imgbaseurl + product.image,
                            imgbaseurl + product.image
                        ]
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    p: 2,
                    textAlign: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .nv, {
                            style: {
                                "lineHeight": "1.5em",
                                "height": "3em",
                                "overflow": "hidden"
                            },
                            children: product.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H5, {
                            fontWeight: 900,
                            py: 0.5,
                            textAlign: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                gap: 1,
                                mt: 0.5,
                                textAlign: "center",
                                flexDirection: "column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
                                        !!product.discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                color: "grey.600",
                                                fontWeight: "900",
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    ml: "12px",
                                                    fontSize: "11px"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexRowCenter */ .b0, {
                            gap: 1,
                            mb: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Rating, {
                                    name: "read-only",
                                    value: averageRating && averageRating ? averageRating : 0,
                                    readOnly: true,
                                    sx: {
                                        fontSize: 14
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Small */ .x4, {
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
                        product.stock == 0.00 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                color: "primary",
                                variant: "contained",
                                disabled: true,
                                fullWidth: true,
                                children: "Add to Cart"
                            })
                        }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            fullWidth: true,
                            color: "dark",
                            variant: "outlined",
                            onClick: handleCartAmountChange(1, true),
                            children: "Add to Cart"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 4.5,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row"
                            },
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
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
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
            height: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardMedia, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                            href: slugbaseurl + `${product.slug}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    product.stock === "0.00" && product.isNewArrival === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | New Arrival",
                                        sx: {
                                            ml: 1
                                        }
                                    }) : product.isNewArrival === 1 && product.stock > "0.00" ? product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "New Arrival"
                                    }) : product.isNewArrival < 1 && product.stock === "0.00" ? product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock | Sale"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Out of Stock"
                                    }) : product.discount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip1, {
                                        color: "secondary",
                                        size: "small",
                                        label: "Sale"
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-img-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            width: 300,
                                            height: 300,
                                            alt: "category",
                                            objectFit: "contain",
                                            layout: "intrinsic",
                                            className: "product-img",
                                            src: imgbaseurl + product.image,
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.RemoveRedEye, {
                                color: "disabled",
                                fontSize: "small"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_products_ProductViewDialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    openDialog: openDialog,
                    handleCloseDialog: ()=>setOpenDialog(false),
                    product: {
                        id: product.id,
                        name: product.name,
                        mrp: product.mrp,
                        sku: product.sku,
                        slug: product.slug,
                        salePrice: salePrice,
                        description: product.description,
                        categoryName: product.categoryName,
                        stock: product.stock,
                        image: imgbaseurl + product.image,
                        imgGroup: [
                            imgbaseurl + product.image,
                            imgbaseurl + product.image
                        ]
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    p: 2,
                    textAlign: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .nv, {
                            style: {
                                "lineHeight": "1.5em",
                                "height": "3em",
                                "overflow": "hidden"
                            },
                            children: product.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H5, {
                            fontWeight: 900,
                            py: 0.5,
                            textAlign: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                alignItems: "center",
                                gap: 1,
                                mt: 0.5,
                                textAlign: "center",
                                flexDirection: "column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
                                        !!product.discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                color: "grey.600",
                                                fontWeight: "900",
                                                sx: {
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    ml: "12px",
                                                    fontSize: "11px"
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
                        product.stock == 0.00 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                color: "primary",
                                variant: "contained",
                                disabled: true,
                                fullWidth: true,
                                children: "Add to Cart"
                            })
                        }) : !cartItem?.qty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            fullWidth: true,
                            color: "dark",
                            variant: "outlined",
                            onClick: handleCartAmountChange(1, true),
                            children: "Add to Cart"
                        }) : // ==================================================================================
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                            alignItems: "center",
                            mb: 4.5,
                            sx: {
                                display: "flex",
                                justifyContent: "center"
                            },
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
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
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard20);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ market_2_Section1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/BazaarImage.jsx
var BazaarImage = __webpack_require__(4167);
;// CONCATENATED MODULE: ./src/components/banners/BannerCard3.jsx



// custom styled components
const CardWrapper = (0,material_.styled)(material_.Box)(()=>({
        overflow: "hidden",
        position: "relative"
    }));
const CardContent = (0,material_.styled)(material_.Box)(()=>({
        top: 0,
        left: 32,
        zIndex: 1,
        height: "100%",
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        backgroundRepeat: "round"
    })); // ========================================================
// ========================================================
const BannerCard3 = ({ img , children , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardWrapper, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BazaarImage/* default */.Z, {
                alt: "category",
                height: "100%",
                width: "100%",
                src: img
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const banners_BannerCard3 = (BannerCard3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/carousel-cards/CarouselCard4.jsx
/* eslint-disable react/no-unescaped-entities */ 

 // custom styled components
const CarouselCard4_CardWrapper = (0,material_.styled)(material_.Box)(({ theme , img , mode  })=>({
        minHeight: 500,
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "round",
        backgroundImage: `url(${img})`,
        backgroundColor: mode === "dark" ? "#000" : "#fff",
        color: mode === "light" ? theme.palette.dark.main : "#fff",
        [theme.breakpoints.down("md")]: {
            minHeight: 200,
            justifyContent: "center",
            padding: 106,
            textAlign: "center",
            backgroundImage: "auto"
        }
    })); // ===============================================================
// ===============================================================
const CarouselCard4 = ({ bgImage , mode ="dark" , content  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CarouselCard4_CardWrapper, {
        img: bgImage,
        mode: mode,
        children: content
    });
};
/* harmony default export */ const carousel_cards_CarouselCard4 = (CarouselCard4);

// EXTERNAL MODULE: ./src/components/carousel/Carousel.jsx
var Carousel = __webpack_require__(2281);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink3.jsx
var NavLink3 = __webpack_require__(8498);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages-sections/market-2/Section1.jsx









// ======================================================
const Section1 = (data)=>{
    const imgbaseurl = "https://chitralhive.com/api/" + "media/";
    const slugbaseurl = "category/";
    // custom css
    const bannerHeight = "245.5px";
    const bannerWidth = "100%";
    const defaultDummyImages = [
        {
            image: "assets/images/banners/s1.png"
        },
        {
            image: "assets/images/banners/s2.png"
        },
        {
            image: "assets/images/banners/s3.png"
        },
        {
            image: "assets/images/banners/banner-4.png"
        },
        {
            image: "assets/images/banners/banner-5.png"
        }, 
    ];
    const carouselStyles = {
        overflow: "hidden",
        borderRadius: "3px",
        "& .carousel__dot-group": {
            mt: 0,
            left: 0,
            right: 0,
            bottom: 10,
            position: "absolute",
            "& div": {
                borderColor: "dark.main",
                "::after": {
                    backgroundColor: "dark.main"
                }
            }
        }
    }; // CAROUSEL TEXT CONTENTS
    const carouselContent1 = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            pl: {
                md: 10
            }
        })
    });
    const carouselContent2 = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            pl: {
                md: 10
            }
        })
    });
    const carouselContent3 = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            pl: {
                md: 10
            }
        })
    });
    const Footwrapper = (0,material_.styled)(material_.Box)(()=>({
            "@media only screen and (max-width: 600px)": {
                ".logo": {
                    width: "100%",
                    height: "100%"
                }
            }
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(Footwrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            pt: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            md: 9,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Carousel/* default */.Z, {
                                spacing: "0px",
                                totalSlides: 5,
                                infinite: true,
                                showDots: true,
                                autoPlay: true,
                                visibleSlides: 1,
                                showArrow: true,
                                sx: carouselStyles,
                                children: data.slidersListLocal.length > 0 ? data.slidersListLocal.map((slider)=>/*#__PURE__*/ jsx_runtime_.jsx(carousel_cards_CarouselCard4, {
                                        content: carouselContent1,
                                        mode: "light",
                                        bgImage: imgbaseurl + slider.image
                                    }, "123" // Assuming each slider object has an 'id' property
                                    )) : defaultDummyImages.map((dummyImage, index)=>/*#__PURE__*/ jsx_runtime_.jsx(carousel_cards_CarouselCard4, {
                                        content: carouselContent1,
                                        mode: "light",
                                        bgImage: dummyImage.image
                                    }, `dummy-slider-${index}`))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            md: 3,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                height: "100%",
                                width: "100%",
                                direction: {
                                    md: "column",
                                    sm: "row",
                                    xs: "row"
                                },
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: data.data1 && data.data1.category_slug ? slugbaseurl + data.data1.category_slug : "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(banners_BannerCard3, {
                                                className: "logo",
                                                flex: 1,
                                                img: data.data1 && data.data1.image ? imgbaseurl + data.data1.image : "/assets/images/banners/default3.png",
                                                sx: {
                                                    height: bannerHeight,
                                                    width: bannerWidth,
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    "&:hover img": {
                                                        filter: "brightness(50%)",
                                                        transition: "filter 0.5s ease-in-out"
                                                    },
                                                    "&:hover h4": {
                                                        color: "#fff",
                                                        transition: "color 0.5s ease-in-out"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography.H4, {
                                                        fontSize: 20,
                                                        lineHeight: 1.2,
                                                        mb: 2,
                                                        color: "#fff",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            data.data1 && data.data1.category_name ? data.data1.category_name : "Category1"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink3/* default */.Z, {
                                                        href: data.data1 && data.data1.category_slug ? slugbaseurl + data.data1.category_slug : "",
                                                        text: "Shop Now",
                                                        color: "#fff"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: slugbaseurl + data.data2.category_slug,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(banners_BannerCard3, {
                                                className: "logo",
                                                flex: 1,
                                                img: data.data2.image && data.data2.image ? imgbaseurl + data.data2.image : "/assets/images/banners/default3.png",
                                                sx: {
                                                    height: bannerHeight,
                                                    width: bannerWidth,
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    "&:hover img": {
                                                        filter: "brightness(50%)",
                                                        transition: "filter 0.5s ease-in-out"
                                                    },
                                                    "&:hover h4": {
                                                        color: "#fff",
                                                        transition: "color 0.5s ease-in-out"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography.H4, {
                                                        fontSize: 20,
                                                        lineHeight: 1.2,
                                                        mb: 2,
                                                        color: "#fff",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            data.data2.category_name && data.data2.category_name ? data.data2.category_name : "Category2"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink3/* default */.Z, {
                                                        href: slugbaseurl + data.data2.category_slug,
                                                        text: "Shop Now",
                                                        color: "#fff"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const market_2_Section1 = (Section1);


/***/ }),

/***/ 3444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_category_cards_CategoryCard1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(479);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1472);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2281);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(420);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_10__);










 // ======================================================================


const slideX = _mui_material__WEBPACK_IMPORTED_MODULE_1__.keyframes`
    from { left: 120% }
    to { left: -100% }
`; // custom styled components
const Section10 = (data)=>{
    const imgbaseurl = "https://chitralhive.com/api/";
    const slugbaseurl = "bundle/";
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(4);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("new");
    const { 0: filteredProducts , 1: setFilteredProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>setFilteredProducts(lodash_shuffle__WEBPACK_IMPORTED_MODULE_10___default()(data)), [
        selected,
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1024) setVisibleSlides(3);
        else if (width < 1200) setVisibleSlides(4);
        else setVisibleSlides(5);
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        sx: {
            mt: 8
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_3__/* .FlexBetween */ .$9, {
                mb: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H2, {
                        style: {
                            color: "#d83c54",
                            fontSize: 20
                        },
                        children: "Product Bundles"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/products",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            style: {
                                color: "#d83c54",
                                fontSize: 16
                            },
                            children: "View All"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                totalSlides: data.data.length,
                visibleSlides: visibleSlides,
                sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_6__/* .carouselStyled */ .cx,
                children: data.data.length > 0 ? data.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 2,
                        md: 3,
                        sm: 4,
                        xs: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_category_cards_CategoryCard1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            image: imgbaseurl + item.image,
                            title: item.name,
                            url: slugbaseurl + item.slug
                        })
                    }, item.id)) : "No data"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section10);


/***/ }),

/***/ 3113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2281);
/* harmony import */ var components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1472);
/* harmony import */ var components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8498);
/* harmony import */ var components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3898);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(403);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(420);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__]);
components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const StyledListItem = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem)(({ theme  })=>({
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        padding: "10px 0 0 0",
        transition: "all 0.3s",
        ":hover": {
            color: theme.palette.primary.main
        }
    })); // ======================================================================
// ======================================================================
const Section12 = ({ products , data , Section2Name , slug , productreviews  })=>{
    const dummyCategories = [
        {
            category_name: "Sub-Category 1",
            category_slug: "category-1"
        },
        {
            category_name: "Sub-Category 2",
            category_slug: "category-2"
        }
    ];
    // const imgbaseurl='https://idrisbookbank-dev-server.inara.tech/media/'
    const slugbaseurl = "category/";
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(4);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1200) setVisibleSlides(3);
        else setVisibleSlides(4);
    }, [
        width
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 3,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
                        elevation: 0,
                        sx: {
                            px: 4,
                            height: "100%",
                            py: 2,
                            borderRadius: "3px",
                            border: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H3, {
                                children: Section2Name && Section2Name ? Section2Name : "Category Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
                                sx: {
                                    mb: 2
                                },
                                children: data.length > 0 ? data.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: slugbaseurl + data.category_slug,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: data.category_name
                                            })
                                        })
                                    }, data.category_slug)) : // Render dummy categories when data is empty
                                dummyCategories.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: slugbaseurl + data.category_slug,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: data.category_name
                                            })
                                        })
                                    }, data.category_slug))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                href: slugbaseurl + slug,
                                text: "Browse All",
                                color: "dark.main",
                                hoverColor: "dark.main",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 9,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        totalSlides: products.length,
                        visibleSlides: visibleSlides,
                        sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__/* .carouselStyled */ .cx,
                        children: products.length > 0 ? products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                product: product,
                                data: productreviews
                            }, product.id)) : "No Products Added"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section12);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_category_cards_CategoryCard1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(479);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1472);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2281);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(420);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_10__);










 // ======================================================================


const slideX = _mui_material__WEBPACK_IMPORTED_MODULE_1__.keyframes`
    from { left: 120% }
    to { left: -100% }
`; // custom styled components
const Section2 = (data)=>{
    console.log("byundle", data);
    const imgbaseurl = "https://chitralhive.com/api/";
    const slugbaseurl = "brand/";
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(4);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("new");
    const { 0: filteredProducts , 1: setFilteredProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>setFilteredProducts(lodash_shuffle__WEBPACK_IMPORTED_MODULE_10___default()(data)), [
        selected,
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1024) setVisibleSlides(3);
        else if (width < 1200) setVisibleSlides(4);
        else setVisibleSlides(5);
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        sx: {
            mt: 8
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_3__/* .FlexBetween */ .$9, {
                mb: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H2, {
                        style: {
                            color: "#d83c54",
                            fontSize: 20
                        },
                        children: "Brand Bundles"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/brands",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            style: {
                                color: "#d83c54",
                                fontSize: 16
                            },
                            children: "View All"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                totalSlides: data.data.length,
                visibleSlides: visibleSlides,
                sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_6__/* .carouselStyled */ .cx,
                children: data.data.length > 0 ? data.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 2,
                        md: 3,
                        sm: 4,
                        xs: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_category_cards_CategoryCard1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            image: imgbaseurl + item.icon,
                            title: item.name,
                            url: slugbaseurl + item.slug
                        })
                    }, item.id)) : "No data"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section2);


/***/ }),

/***/ 6053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ market_2_Section3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/category-cards/CategoryCard1.jsx
var CategoryCard1 = __webpack_require__(479);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/category-cards/CategoryCard2.jsx





// custom styled components
const Wrapper = (0,material_.styled)(material_.Box)(({ theme  })=>({
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "4px",
        "& img": {
            transition: "all 0.3s"
        },
        ":hover": {
            img: {
                transform: "scale(1.1)"
            },
            "& .category-title": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.dark.main
            }
        }
    }));
const CategoryTitle = (0,material_.styled)(material_.Box)(()=>({
        left: 10,
        right: 10,
        bottom: 10,
        padding: 8,
        textAlign: "center",
        borderRadius: "2px",
        position: "absolute",
        transition: "all 0.3s",
        backgroundColor: "rgba(255,255,255, .67)"
    })); // ============================================================
// ============================================================
const CategoryCard2 = ({ image , title , url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        width: 300,
                        height: 300,
                        alt: "category",
                        objectFit: "cover",
                        layout: "responsive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CategoryTitle, {
                        className: "category-title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                            children: title
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const category_cards_CategoryCard2 = (CategoryCard2);

// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
;// CONCATENATED MODULE: ./src/pages-sections/market-2/Section3.jsx






const slideX = material_.keyframes`
    from { left: 120% }
    to { left: -100% }
`; // custom styled components
const AdWrapper = (0,material_.styled)(flex_box/* FlexBox */.hs)(({ theme  })=>({
        color: "#fff",
        marginTop: "3rem",
        overflow: "hidden",
        backgroundColor: "#434343",
        position: "relative",
        "::before": {
            inset: 5,
            zIndex: 3,
            content: "''",
            position: "absolute",
            border: "1px dashed #fff"
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    }));
const AdTitle1 = (0,material_.styled)(Typography.H3)(({ theme  })=>({
        zIndex: 10,
        fontSize: 27,
        padding: "1.5rem",
        position: "relative",
        backgroundColor: "#e0e0e0",
        textTransform: "uppercase",
        color: theme.palette.dark.main,
        "::after": {
            top: -36,
            bottom: 0,
            zIndex: -1,
            right: -17,
            content: "''",
            position: "absolute",
            transform: "rotate(23deg)",
            border: "70px solid #e0e0e0"
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: 16,
            "::after": {
                display: "none"
            }
        }
    }));
const Section3 = (dataa)=>{
    console.log("Data3", dataa);
    const imgbaseurl = "https://chitralhive.com/media/";
    const slugbaseurl = "category/";
    const data = [
        {
            url: slugbaseurl + dataa.data1.category_slug,
            title: dataa.data1.category_name && dataa.data1.category_name ? dataa.data1.category_name : "Category3",
            id: dataa.data1.id,
            img: dataa.data1.image && +dataa.data1.image ? imgbaseurl + dataa.data1.image : "/assets/images/banners/default.png"
        },
        {
            url: slugbaseurl + dataa.data2.category_slug,
            title: dataa.data2.category_name && dataa.data2.category_name ? dataa.data2.category_name : "Category4",
            id: dataa.data2.id,
            img: dataa.data2.image && dataa.data2.image ? imgbaseurl + dataa.data2.image : "/assets/images/banners/default.png"
        },
        {
            url: slugbaseurl + dataa.data3.category_slug,
            title: dataa.data3.category_name && dataa.data3.category_name ? dataa.data3.category_name : "Category5",
            id: dataa.data3.id,
            img: dataa.data3.image && dataa.data3.image ? imgbaseurl + dataa.data3.image : "/assets/images/banners/default.png"
        },
        {
            url: slugbaseurl + dataa.data4.category_slug,
            title: dataa.data4.category_name && dataa.data4.category_name ? dataa.data4.category_name : "Category6",
            id: dataa.data4.id,
            img: dataa.data4.image && dataa.data4.image ? imgbaseurl + dataa.data4.image : "/assets/images/banners/default.png"
        },
        {
            url: slugbaseurl + dataa.data5.category_slug,
            title: dataa.data5.category_name && dataa.data5.category_name ? dataa.data5.category_name : "Category7",
            id: dataa.data5.id,
            img: dataa.data5.image && dataa.data5.image ? imgbaseurl + dataa.data5.image : "/assets/images/banners/default.png"
        },
        {
            url: slugbaseurl + dataa.data6.category_slug,
            title: dataa.data6.category_name && dataa.data6.category_name ? dataa.data6.category_name : "Category8",
            id: dataa.data6.id,
            img: dataa.data6.image && dataa.data6.image ? imgbaseurl + dataa.data6.image : "/assets/images/banners/default.png"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        sx: {
            mt: 8
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            spacing: 3,
            children: data.length > 0 ? data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    lg: 2,
                    md: 3,
                    sm: 4,
                    xs: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(category_cards_CategoryCard2, {
                        image: item.img,
                        title: item.title,
                        url: item.url
                    })
                }, item.id)) : "No Product Added"
        })
    });
};
/* harmony default export */ const market_2_Section3 = (Section3);


/***/ }),

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_banners_BannerCard4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6353);
/* harmony import */ var components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8498);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(420);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









const Section4 = ({ data1 , data2 , data3 , userWishlist  })=>{
    const imgbaseurl = "https://chitralhive.com/api/" + "media/";
    const slugbaseurl = "category/";
    const BannerCardWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
            "&:hover img": {
                filter: "brightness(50%)"
            },
            "&:hover h4": {
                color: theme.palette.common.white,
                fontSize: 20
            },
            "&:hover a": {
                color: theme.palette.common.white
            },
            "&:hover .banner-card img": {
                filter: "brightness(50%)"
            },
            "&:hover .banner-card h4": {
                color: theme.palette.common.white,
                fontSize: 20
            },
            "&:hover .banner-card .nav-link": {
                color: theme.palette.common.white
            }
        }));
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(4);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1024) setVisibleSlides(3);
        else if (width < 1200) setVisibleSlides(4);
        else setVisibleSlides(5);
    }, [
        width
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        sx: {
            py: 8
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 3,
            pt: 8,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 4,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: slugbaseurl + data1.category_slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerCardWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_banners_BannerCard4__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    img: data1.image && data1.image ? imgbaseurl + data1.image : "/assets/images/banners/default.png",
                                    height: 200,
                                    className: "banner-card",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H4, {
                                                fontSize: 20,
                                                lineHeight: 1,
                                                my: 2,
                                                children: [
                                                    data1.category_name && data1.category_name ? data1.category_name : "Category9",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                href: slugbaseurl + data1.category_slug,
                                                text: "Shop Now",
                                                color: "dark.main",
                                                className: "nav-link"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 4,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: slugbaseurl + data2.category_slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerCardWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_banners_BannerCard4__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    img: data2.image && data2.image ? imgbaseurl + data2.image : "/assets/images/banners/default.png",
                                    height: 200,
                                    className: "banner-card",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H4, {
                                                fontSize: 20,
                                                lineHeight: 1,
                                                my: 2,
                                                children: [
                                                    data2.category_name && data2.category_name ? data2.category_name : "Category10",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                href: slugbaseurl + data2.category_slug,
                                                text: "Shop Now",
                                                color: "dark.main",
                                                className: "nav-link"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 4,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: slugbaseurl + data3.category_slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerCardWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_banners_BannerCard4__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    img: data3.image && data3.image ? imgbaseurl + data3.image : "/assets/images/banners/default.png",
                                    height: 200,
                                    className: "banner-card",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H4, {
                                                fontSize: 20,
                                                lineHeight: 1,
                                                my: 2,
                                                children: [
                                                    data3.category_name && data3.category_name ? data3.category_name : "Category11",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                href: slugbaseurl + data3.category_slug,
                                                text: "Shop Now",
                                                color: "dark.main",
                                                className: "nav-link"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section4);


/***/ }),

/***/ 6649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2281);
/* harmony import */ var components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1472);
/* harmony import */ var components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8498);
/* harmony import */ var components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3898);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(403);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(420);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__]);
components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const StyledListItem = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem)(({ theme  })=>({
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        padding: "10px 0 0 0",
        transition: "all 0.3s",
        ":hover": {
            color: theme.palette.primary.main
        }
    })); // ======================================================================
// ======================================================================
const Section5 = ({ products , data , SectionName , slug , productreviews  })=>{
    // const imgbaseurl='https://idrisbookbank-dev-server.inara.tech/media/'
    const slugbaseurl = "category/";
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dummyCategories = [
        {
            category_name: "Sub-Category 1",
            category_slug: "category-1"
        },
        {
            category_name: "Sub-Category 2",
            category_slug: "category-2"
        }
    ];
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(4);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1200) setVisibleSlides(3);
        else setVisibleSlides(4);
    }, [
        width
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 3,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
                        elevation: 0,
                        sx: {
                            px: 4,
                            height: "100%",
                            py: 2,
                            borderRadius: "3px",
                            border: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H3, {
                                children: SectionName && SectionName ? SectionName : "Category Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
                                sx: {
                                    mb: 2
                                },
                                children: data && data.length > 0 ? data.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: slugbaseurl + data.category_slug,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: data.category_name
                                            })
                                        })
                                    }, data.category_slug)) : // Render dummy categories when data is empty
                                dummyCategories.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: slugbaseurl + data.category_slug,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: data.category_name
                                            })
                                        })
                                    }, data.category_slug))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                href: slugbaseurl + slug,
                                text: "Browse All",
                                color: "dark.main",
                                hoverColor: "dark.main",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 9,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        totalSlides: products.length,
                        visibleSlides: visibleSlides,
                        sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__/* .carouselStyled */ .cx,
                        children: products.length > 0 ? products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                product: product,
                                data: productreviews
                            }, product.id)) : "No Products Added"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section5);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var components_nav_link_NavLink3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8498);
/* harmony import */ var components_banners_BannerCard4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6353);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


 // custom styled components



const Section6 = ({ data1 , data2  })=>{
    const imgbaseurl = "https://chitralhive.com/api/" + "media/";
    const slugbaseurl = "category/";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        sx: {
            my: 8
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 6,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: slugbaseurl + data1.category_slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    position: "relative",
                                    overflow: "hidden",
                                    paddingTop: "30%",
                                    "& > img": {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        transition: "filter 0.3s ease"
                                    },
                                    "&:hover > img": {
                                        filter: "brightness(50%)"
                                    },
                                    "& > div": {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "left",
                                        flexDirection: "column",
                                        transition: "background-color 0.3s ease"
                                    },
                                    "&:hover > div": {
                                        backgroundColor: "rgba(0, 0, 0, 0.2)"
                                    },
                                    "&:hover h4": {
                                        fontSize: 18,
                                        color: "#fff",
                                        transition: "color 0.5s ease-in-out"
                                    },
                                    "&:hover span": {
                                        fontSize: 14,
                                        color: "#fff",
                                        transition: "color 0.5s ease-in-out"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        component: "img",
                                        src: data1.image && data1.image ? imgbaseurl + data1.image : "/assets/images/banners/banner-21.jpg",
                                        alt: data1.category_name,
                                        sx: {
                                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                                            backgroundColor: "#fff"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H4, {
                                                fontSize: 18,
                                                lineHeight: 1,
                                                sx: {
                                                    color: "#000000",
                                                    mb: 1,
                                                    ml: 10
                                                },
                                                children: data1.category_name && data1.category_name ? data1.category_name : "Category12"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
                                                fontSize: 14,
                                                lineHeight: 1,
                                                sx: {
                                                    color: "#000000",
                                                    ml: 10
                                                },
                                                children: "View all"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 6,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: slugbaseurl + data2.category_slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    position: "relative",
                                    overflow: "hidden",
                                    paddingTop: "30%",
                                    "& > img": {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        transition: "filter 0.3s ease"
                                    },
                                    "&:hover > img": {
                                        filter: "brightness(50%)"
                                    },
                                    "& > div": {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "left",
                                        flexDirection: "column",
                                        transition: "background-color 0.3s ease"
                                    },
                                    "&:hover > div": {
                                        backgroundColor: "rgba(0, 0, 0, 0.2)"
                                    },
                                    "&:hover h4": {
                                        fontSize: 18,
                                        color: "#fff",
                                        transition: "color 0.5s ease-in-out"
                                    },
                                    "&:hover span": {
                                        fontSize: 14,
                                        color: "#fff",
                                        transition: "color 0.5s ease-in-out"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        component: "img",
                                        src: data2.image && data2.image ? imgbaseurl + data2.image : "/assets/images/banners/banner-22.jpg",
                                        alt: data2.category_name,
                                        sx: {
                                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                                            backgroundColor: "#fff"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H4, {
                                                    fontSize: 18,
                                                    lineHeight: 1,
                                                    sx: {
                                                        color: "#000000",
                                                        mb: 1,
                                                        ml: 10
                                                    },
                                                    children: data2.category_name && data2.category_name ? data2.category_name : "Category13"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
                                                    fontSize: 14,
                                                    lineHeight: 1,
                                                    sx: {
                                                        color: "#000000",
                                                        ml: 10
                                                    },
                                                    children: "View all"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section6);


/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ market_2_Section7)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
;// CONCATENATED MODULE: ./src/components/WhiteButton.jsx


// ==================================================
const WhiteButton = ({ children , ...props })=>{
    return /*#__PURE__*/ _jsx(Button, {
        color: "dark",
        variant: "contained",
        sx: {
            color: "dark.main",
            backgroundColor: "white",
            ":hover": {
                backgroundColor: "dark.main",
                color: "#fff"
            }
        },
        ...props,
        children: children
    });
};
/* harmony default export */ const components_WhiteButton = ((/* unused pure expression or super */ null && (WhiteButton)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink3.jsx
var NavLink3 = __webpack_require__(8498);
// EXTERNAL MODULE: ./src/components/BazaarImage.jsx
var BazaarImage = __webpack_require__(4167);
;// CONCATENATED MODULE: ./src/components/banners/BannerCard6.jsx



const CardWrapper = (0,material_.styled)(material_.Box)(()=>({
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        height: 80
    }));
const CardContent = (0,material_.styled)(material_.Box)(()=>({
        top: 0,
        left: 32,
        zIndex: 1,
        height: "100%",
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        backgroundRepeat: "round"
    }));
const BannerCard6 = ({ img , children , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardWrapper, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BazaarImage/* default */.Z, {
                alt: "category",
                height: "100%",
                width: "100%",
                src: img,
                style: {
                    objectFit: "contain"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const banners_BannerCard6 = (BannerCard6);

;// CONCATENATED MODULE: ./src/pages-sections/market-2/Section7.jsx







const BannerWrapper = (0,material_.styled)(material_.Box)(({ theme , img  })=>({
        gap: "5rem",
        padding: "2rem",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        borderRadius: "3px",
        alignItems: "center",
        backgroundSize: "cover",
        justifyContent: "flex-start",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${img})`,
        [theme.breakpoints.down("md")]: {
            gap: "1rem",
            flexDirection: "column",
            justifyContent: "center"
        }
    }));
const NavLinkWrapper = (0,material_.styled)(NavLink3/* default */.Z)`
  cursor: pointer;
`;
const CustomLink = ({ children , href  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            style: {
                cursor: "pointer"
            },
            children: children
        })
    });
const Section7 = ({ data1  })=>{
    const slugbaseurl = "category/";
    const imgbaseurl = "https://chitralhive.com/api/" + "media/";
    const words = data1 && data1.category_name ? data1.category_name.split(" ") : [
        "Category 13"
    ];
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        sx: {
            my: 8
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomLink, {
            href: slugbaseurl + data1.category_slug,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BannerWrapper, {
                        img: data1.image && data1.image ? imgbaseurl + data1.image : "/assets/images/banners/category-1.png",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            textAlign: "left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Typography.H3, {
                                    fontSize: {
                                        sm: 34,
                                        xs: 28
                                    },
                                    lineHeight: 1,
                                    fontWeight: 500,
                                    children: words.map((word, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography/* Span */.Dr, {
                                            color: index % 2 === 0 ? "#2b3445" : "primary.main",
                                            children: [
                                                word,
                                                " "
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavLinkWrapper, {
                                    href: slugbaseurl + data1.category_slug,
                                    text: "Shop Now",
                                    color: "dark.main",
                                    hoverColor: "dark.main"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        display: {
                            xs: "block",
                            md: "none"
                        },
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(banners_BannerCard6, {
                        img: data1.image && data1.image ? imgbaseurl + data1.image : "/assets/images/banners/category-1.png",
                        style: {
                            width: "444px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                                color: "black",
                                fontSize: 20,
                                lineHeight: 1,
                                children: words.map((word, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography/* Span */.Dr, {
                                        color: index % 2 === 0 ? "#2b3445" : "primary.main",
                                        children: [
                                            word,
                                            " "
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink3/* default */.Z, {
                                href: slugbaseurl + data1.category_slug,
                                text: "Shop Now",
                                color: "black",
                                hoverColor: "white"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const market_2_Section7 = (Section7);


/***/ }),

/***/ 3703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2281);
/* harmony import */ var components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1472);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9029);
/* harmony import */ var components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3898);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(403);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(420);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__]);
components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Section9 = ({ data  })=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)();
    console.log("Section09", data);
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(4);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("new");
    const { 0: newArrivalProducts , 1: setNewArrivalProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]);
    const { 0: featuredProducts , 1: setFeaturedProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]);
    const server_ip = "https://chitralhive.com/api/";
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_10___default().get(server_ip + "getFearuredProduct", {
                    params: {
                        type: selected
                    }
                });
                const fetchedProducts = response.data;
                console.log("Products:", fetchedProducts);
                const shuffledProducts = lodash_shuffle__WEBPACK_IMPORTED_MODULE_8___default()(fetchedProducts);
                setNewArrivalProducts(shuffledProducts.filter((product)=>product.isNewArrival));
                setFeaturedProducts(shuffledProducts.filter((product)=>product.isFeatured));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [
        selected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1024) setVisibleSlides(3);
        else if (width < 1200) setVisibleSlides(4);
        else setVisibleSlides(5);
    }, [
        width
    ]);
    const handleSelected = (item)=>()=>setSelected(item);
    const activeColor = (item)=>item === selected ? "error" : "dark";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        sx: {
            mb: 8
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBetween */ .$9, {
                gap: 2,
                flexWrap: "wrap",
                mb: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__.H2, {
                                fontSize: 20,
                                children: "Selected Products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Paragraph */ .nv, {
                                children: "All our new arrivals and featured products"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBox */ .hs, {
                        flexWrap: "wrap",
                        gap: 1,
                        sx: {
                            "& button": {
                                flexGrow: 1
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "outlined",
                                color: activeColor("new"),
                                onClick: handleSelected("new"),
                                children: "New Arrivals"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "outlined",
                                color: activeColor("featured"),
                                onClick: handleSelected("featured"),
                                children: "Featured"
                            })
                        ]
                    })
                ]
            }),
            selected === "new" && newArrivalProducts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                totalSlides: newArrivalProducts.length,
                visibleSlides: visibleSlides,
                sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__/* .carouselStyled */ .cx,
                children: newArrivalProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        product: product,
                        data: data,
                        wishList: session && session.wishlist && session.wishlist.length > 0 ? session.wishlist : null
                    }, product.id))
            }),
            selected === "featured" && featuredProducts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                totalSlides: featuredProducts.length,
                visibleSlides: visibleSlides,
                sx: components_carousel_CarouselStyled__WEBPACK_IMPORTED_MODULE_3__/* .carouselStyled */ .cx,
                children: featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_cards_ProductCard20__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        product: product,
                        data: data,
                        wishList: session && session.wishlist && session.wishlist.length > 0 ? session.wishlist : null
                    }, product.id))
            }),
            selected === "new" && newArrivalProducts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: "No New Products"
            }),
            selected === "featured" && featuredProducts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: "No Featured Products"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section9);

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

/***/ 9318:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,5675,9029,317,4210,8745,1268,6044,7434,4274,681,1573], () => (__webpack_exec__(1878)));
module.exports = __webpack_exports__;

})();