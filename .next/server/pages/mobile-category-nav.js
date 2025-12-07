"use strict";
(() => {
var exports = {};
exports.id = 9517;
exports.ids = [9517];
exports.modules = {

/***/ 5134:
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
/* harmony import */ var components_accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4987);
/* harmony import */ var components_accordion_AccordionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2842);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var components_mobile_category_nav_MobileCategoryImageBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5071);
/* harmony import */ var components_mobile_category_nav_MobileCategoryNavStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9920);
/* harmony import */ var components_mobile_navigation_MobileNavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1636);
/* harmony import */ var data_navigations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2687);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2750);
/* harmony import */ var components_icons_Man__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5201);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_header_Header__WEBPACK_IMPORTED_MODULE_4__]);
components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// List imports





const MobileCategoryNav = (props)=>{
    const { navCategories  } = props;
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { 0: suggestedList , 1: setSuggestedList  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const { 0: subCategoryList , 1: setSubCategoryList  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const handleCategoryClick = (cat)=>()=>{
            let menuData = cat.menuData;
            if (menuData) setSubCategoryList(menuData.categories || menuData);
            else setSubCategoryList([]);
            setCategory(cat);
        };
    // const myLoader = ({ src, width, quality }) => {
    //   return `http://100.64.6.105:8099/media/${src}?w=${width}&q=${quality || 75}`
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>setSuggestedList(suggestion), []);
    "SubCategories", subCategoryList;
    const imgbaseurl = "https://api.chitralhive.com/api/" + "media/";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_mobile_category_nav_MobileCategoryNavStyle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "header"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: "main-category-holder",
                children: navCategories.map((item)=>item.menuData.categories.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: "main-category-box",
                        onClick: handleCategoryClick(item),
                        borderLeft: `${category?.href === item.href ? "3" : "0"}px solid`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                                src: imgbaseurl + item.icon,
                                alt: "Picture of the author",
                                width: 60,
                                height: 40
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                className: "ellipsis",
                                textAlign: "center",
                                fontSize: "11px",
                                sx: {
                                    fontWeight: "bold"
                                },
                                lineHeight: "2",
                                children: item.title
                            })
                        ]
                    }, item.title) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: item.href,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                className: "main-category-box",
                                onClick: handleCategoryClick(item),
                                borderLeft: `${category?.href === item.href ? "3" : "0"}px solid`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        src: imgbaseurl + item.icon,
                                        alt: "Picture of the author",
                                        width: 60,
                                        height: 40
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        className: "ellipsis",
                                        textAlign: "center",
                                        fontSize: "11px",
                                        sx: {
                                            fontWeight: "bold"
                                        },
                                        lineHeight: "2",
                                        children: item.title
                                    })
                                ]
                            }, item.title)
                        })
                    }, item.title))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: "container",
                children: category?.menuComponent === "MegaMenu1" ? subCategoryList.map((item, ind)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    href: item.href,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                primary: item.title
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }, ind)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    mb: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        container: true,
                        spacing: 3,
                        children: subCategoryList.map((item, ind)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                lg: 1,
                                md: 2,
                                sm: 3,
                                xs: 4,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: item.href
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        href: item.href,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobile_category_nav_MobileCategoryImageBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                ...item.icon
                                            })
                                        })
                                    })
                                ]
                            }, item.href))
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobile_navigation_MobileNavigationBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
const suggestion = [
    {
        title: "Belt",
        href: "/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
    },
    {
        title: "Hat",
        href: "/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
    },
    {
        title: "Watches",
        href: "/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
    },
    {
        title: "Sunglasses",
        href: "/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
    },
    {
        title: "Sneakers",
        href: "/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
    },
    {
        title: "Sandals",
        href: "/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
    },
    {
        title: "Formal",
        href: "/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
    },
    {
        title: "Casual",
        href: "/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
    }, 
];
async function getServerSideProps() {
    const navCategories = await utils_api_market_2__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getNavCategories */ .Z.getNavCategories();
    return {
        props: {
            navCategories
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileCategoryNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable react-hooks/exhaustive-deps */ 

 // styled component props type
// styled component
const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)("div")((props)=>({
        overflow: "hidden",
        cursor: "pointer",
        transition: "height 250ms ease-in-out",
        height: props.open ? props.parent_height : props.header_height
    })); // ==============================================================
// ==============================================================
const Accordion = ({ expanded =false , children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(expanded);
    const { 0: headerHeight , 1: setHeaderHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: parentHeight , 1: setParentHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const toggle = ()=>setOpen(!open);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let parent = ref.current;
        if (parent) {
            setHeaderHeight(parent.children[0].scrollHeight);
            setParentHeight(parent.scrollHeight);
        }
    }, [
        ref.current
    ]);
    const modifiedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child, ind)=>{
        if (ind === 0) return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, {
            open,
            onClick: toggle
        });
        else return child;
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        ref: ref,
        open: open,
        header_height: headerHeight,
        parent_height: parentHeight,
        children: modifiedChildren
    });
}; //  set default props
Accordion.defaultProps = {
    expanded: false
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Accordion)));


/***/ }),

/***/ 2842:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronRight"
const ChevronRight_namespaceObject = require("@mui/icons-material/ChevronRight");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
;// CONCATENATED MODULE: ./src/components/accordion/AccordionHeader.jsx




// styled components
const StyledFlexBox = (0,material_.styled)(({ children , open , ...rest })=>/*#__PURE__*/ jsx_runtime_.jsx(flex_box/* FlexBox */.hs, {
        ...rest,
        children: children
    }))(({ open , theme  })=>({
        alignItems: "center",
        justifyContent: "space-between",
        ".caretIcon": {
            transition: "transform 250ms ease-in-out",
            ...theme.direction === "rtl" ? {
                transform: open ? "rotate(90deg)" : "rotate(180deg)"
            } : {
                transform: open ? "rotate(90deg)" : "rotate(0deg)"
            }
        }
    })); // =================================================================
// =================================================================
const AccordionHeader = (props)=>{
    const { sx , open , children , showIcon , ...others } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledFlexBox, {
        open: open,
        sx: sx,
        ...others,
        children: [
            children,
            showIcon && /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                className: "caretIcon",
                fontSize: "small"
            })
        ]
    });
}; //  set default props data
AccordionHeader.defaultProps = {
    px: "1rem",
    py: "0.5rem",
    showIcon: true
};
/* harmony default export */ const accordion_AccordionHeader = ((/* unused pure expression or super */ null && (AccordionHeader)));


/***/ }),

/***/ 5071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9029);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4588);




// ==============================================================
const MobileCategoryImageBox = ({ title , imgUrl , Icon  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_2__/* .FlexRowCenter */ .b0, {
        flexDirection: "column",
        children: [
            imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                src: imgUrl,
                borderRadius: "5px",
                width: 100,
                height: 100,
                objectFit: "cover"
            }) : Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                size: "48px",
                children: Icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                className: "ellipsis",
                textAlign: "center",
                fontSize: "11px",
                lineHeight: "1",
                mt: 1,
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileCategoryImageBox);


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7426);


const MobileCategoryNavStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        position: "relative",
        "& .header": {
            top: 0,
            left: 0,
            right: 0,
            position: "fixed"
        },
        "& .main-category-holder": {
            left: 0,
            position: "fixed",
            overflowY: "auto",
            background: theme.palette.grey[300],
            top: utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .layoutConstant.mobileHeaderHeight */ .P.mobileHeaderHeight,
            bottom: utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .layoutConstant.mobileNavHeight */ .P.mobileNavHeight,
            "& .main-category-box": {
                width: "90px",
                height: "80px",
                display: "flex",
                cursor: "pointer",
                padding: "0.5rem",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                borderBottom: "1px solid",
                borderLeftColor: "#d23f57",
                borderBottomColor: theme.palette.grey[300]
            }
        },
        "& .container": {
            left: "90px",
            flex: "1 1 0",
            position: "fixed",
            overflowY: "auto",
            padding: "0.5rem 1rem",
            top: utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .layoutConstant.mobileHeaderHeight */ .P.mobileHeaderHeight,
            bottom: utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .layoutConstant.mobileNavHeight */ .P.mobileNavHeight
        },
        "& .ellipsis": {
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileCategoryNavStyle);


/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 8790:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDownOutlined");

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

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [6377,2952,6964,1664,5675,9029,317,4210,8745,1268], () => (__webpack_exec__(5134)));
module.exports = __webpack_exports__;

})();