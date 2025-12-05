"use strict";
exports.id = 1268;
exports.ids = [1268];
exports.modules = {

/***/ 8128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazaarAvatar = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Avatar)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.typography, _mui_system__WEBPACK_IMPORTED_MODULE_1__.sizing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.border));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarAvatar);


/***/ }),

/***/ 5744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const BazaarCard = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(({ hoverEffect , children , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
        ...rest,
        children: children
    }))(({ theme , hoverEffect  })=>({
        borderRadius: "8px",
        overflow: "unset",
        transition: "all 250ms ease-in-out",
        "&:hover": {
            boxShadow: hoverEffect ? theme.shadows[3] : ""
        }
    }));
BazaarCard.defaultProps = {
    hoverEffect: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarCard);


/***/ }),

/***/ 1659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazaarIconButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.positions, _mui_system__WEBPACK_IMPORTED_MODULE_1__.typography, _mui_system__WEBPACK_IMPORTED_MODULE_1__.sizing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.border, _mui_system__WEBPACK_IMPORTED_MODULE_1__.bgcolor));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarIconButton);


/***/ }),

/***/ 4516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


 // ===============================================================
// ===============================================================
const BazaarMenu = ({ open , handler , children , direction , shouldCloseOnItemClick , ...props })=>{
    const { 0: anchorEl , 1: setAnchorEl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleClick = (event)=>setAnchorEl(event.currentTarget);
    const handleClose = ()=>setAnchorEl(null);
    const handleMenuItemClick = (customOnClick)=>()=>{
            if (customOnClick) customOnClick();
            if (shouldCloseOnItemClick) handleClose();
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            handler && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(handler, {
                onClick: handler.props.onClick || handleClick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_1___default()), {
                anchorEl: anchorEl,
                onClose: handleClose,
                open: open !== undefined ? open : !!anchorEl,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: direction || "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: direction || "left"
                },
                ...props,
                children: react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, {
                        onClick: handleMenuItemClick(child.props.onClick)
                    }))
            })
        ]
    });
}; // set default props
BazaarMenu.defaultProps = {
    direction: "left",
    shouldCloseOnItemClick: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarMenu);


/***/ }),

/***/ 4588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const LazyImage = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(({ borderRadius , loading ="lazy" , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        loading: loading,
        ...rest
    }))((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.borderRadius, _mui_system__WEBPACK_IMPORTED_MODULE_1__.bgcolor));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyImage);


/***/ }),

/***/ 6576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_2__);



const StyledScrollBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&.simplebar-visible:before": {
                opacity: 1
            },
            "&:before": {
                backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[400], 0.6)
            }
        },
        "& .simplebar-track.simplebar-vertical": {
            width: 9
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
            height: 6
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    })); // props type
const Scrollbar = ({ children , sx , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledScrollBar, {
        sx: sx,
        ...props,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ }),

/***/ 2674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategoryMenuCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CategoryMenuCard__WEBPACK_IMPORTED_MODULE_3__]);
_CategoryMenuCard__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 


 // styled component
const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ open , theme: { direction  }  })=>({
        cursor: "pointer",
        position: "relative",
        "& .dropdown-icon": {
            transition: "all 250ms ease-in-out",
            transform: `rotate(${open ? direction === "rtl" ? "-90deg" : "90deg" : "0deg"})`
        }
    })); // ===========================================================
// ===========================================================
const CategoryMenu = ({ open: isOpen = false , children , navCategories  })=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isOpen);
    const popoverRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(open);
    popoverRef.current = open;
    const toggleMenu = (e)=>{
        e.stopPropagation();
        if (!isOpen) setOpen((open)=>!open);
    };
    const handleDocumentClick = ()=>{
        if (popoverRef.current && !isOpen) setOpen(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("click", handleDocumentClick);
        return ()=>window.removeEventListener("click", handleDocumentClick);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        open: open,
        children: [
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, {
                open,
                onClick: toggleMenu,
                className: `${children.props.className}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategoryMenuCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                open: open,
                navCategories: navCategories
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2687);
/* harmony import */ var _CategoryMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(999);
/* harmony import */ var _mega_menu_MegaMenu1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9977);
/* harmony import */ var _mega_menu_MegaMenu2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2082);
/* harmony import */ var components_icons_Dress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8786);
/* harmony import */ var utils_api_market_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2750);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_8__]);
swr__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





 // styled component





const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ theme , position , open  })=>({
        left: 0,
        zIndex: 98,
        right: "auto",
        borderRadius: 4,
        padding: "0.5rem 0px",
        transformOrigin: "top",
        boxShadow: theme.shadows[2],
        position: position || "unset",
        transition: "all 250ms ease-in-out",
        transform: open ? "scaleY(1)" : "scaleY(0)",
        backgroundColor: theme.palette.background.paper,
        top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem"
    }));
// Styles for the menu items
const StyledCategoryMenuItem = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_CategoryMenuItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(({ theme  })=>({
        "&:hover": {
            backgroundColor: theme.palette.grey[100],
            textDecoration: "none"
        },
        "&:not(:last-child)": {
            marginBottom: theme.spacing(1)
        }
    }));
const CategoryMenuCard = (props)=>{
    const { open , position , navCategories  } = props;
    const apiUrl = "https://chitralhive.com/api/";
    const megaMenu = {
        MegaMenu1: _mega_menu_MegaMenu1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        MegaMenu2: _mega_menu_MegaMenu2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    };
    const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_9___default().get(url).then((response)=>response.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])(apiUrl + "getNavCategories", fetcher, {
        revalidateOnMount: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "failed to load"
    });
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "loading..."
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        open: open,
        position: position,
        children: data.map((item)=>{
            let MegaMenu = megaMenu[item.menuComponent];
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCategoryMenuItem, {
                href: item.href,
                title: item.title,
                caret: !!Object.keys(item.menuData["categories"]).length,
                children: !!Object.keys(item.menuData["categories"]).length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MegaMenu, {
                    data: item.menuData || {}
                }) : ""
            }, item.title);
        })
    });
};
CategoryMenuCard.defaultProps = {
    position: "absolute"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryMenuCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





//styled component
const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        "& .category-dropdown-link": {
            height: 40,
            display: "flex",
            minWidth: "278px",
            cursor: "pointer",
            whiteSpace: "pre",
            padding: "0px 1rem",
            alignItems: "center",
            transition: "all 250ms ease-in-out",
            "& .title": {
                flexGrow: 1,
                paddingLeft: "0.75rem"
            }
        },
        "&:hover": {
            "& > .category-dropdown-link": {
                color: theme.palette.primary.main,
                background: theme.palette.action.hover
            },
            "& > .mega-menu": {
                display: "block"
            }
        }
    })); // =============================================================
// =============================================================
const CategoryMenuItem = (props)=>{
    const { href , title , caret , children , ...rest } = props;
    const { settings  } = (0,hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    className: "category-dropdown-link",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "title",
                            children: title
                        }),
                        caret && (settings.direction === "ltr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, {
                            fontSize: "small"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft, {
                            fontSize: "small"
                        }))
                    ]
                })
            }),
            children
        ]
    });
};
CategoryMenuItem.defaultProps = {
    caret: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryMenuItem);


/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9029);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4588);
/* harmony import */ var components_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3377);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _StyledMegaMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7350);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);









const MegaMenu1 = ({ data: { categories , rightImage , bottomImage  } , minWidth ,  })=>{
    const { 0: showAll , 1: setShowAll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const maxCategories = 10; // maximum number of categories to display
    const toggleShowAll = ()=>{
        setShowAll(!showAll);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const displayCategories = showAll ? categories : categories.slice(0, maxCategories);
    const handleShowAllClick = (slug)=>{
        router.push({
            pathname: "/categories/" + slug
        });
    };
    return categories ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledMegaMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
            elevation: 2,
            sx: {
                ml: "3rem",
                width: "max-content"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_3__/* .FlexBox */ .hs, {
                    px: 2.5,
                    py: 1.75,
                    alignItems: "unset",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                displayCategories.map((item, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            py: 0,
                                            px: 0,
                                            borderRadius: 0,
                                            cursor: "pointer",
                                            "&:hover": {
                                                backgroundColor: "#f2f2f2"
                                            },
                                            "&:not(:last-child)": {
                                                borderBottom: "1px solid #ccc"
                                            }
                                        },
                                        children: item.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "title-link",
                                            href: item.href,
                                            sx: {
                                                color: "text.primary",
                                                fontSize: "0.8rem",
                                                width: "100%"
                                            },
                                            children: item.title
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            className: "title-link",
                                            sx: {
                                                color: "text.primary",
                                                fontWeight: "bold",
                                                fontSize: "1.2rem"
                                            },
                                            children: item.title
                                        })
                                    }, ind)),
                                categories.length > maxCategories && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "center",
                                        py: 1
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            cursor: "pointer",
                                            color: "primary.main"
                                        },
                                        onClick: ()=>handleShowAllClick(categories[maxCategories - 1].slug),
                                        children: "Show all"
                                    })
                                })
                            ]
                        }),
                        rightImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            mt: 1.5,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: rightImage.href,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        src: rightImage.imgUrl,
                                        objectFit: "contain",
                                        width: 137,
                                        height: 318
                                    })
                                })
                            })
                        })
                    ]
                }),
                bottomImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: bottomImage.href,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            position: "relative",
                            height: "170px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: bottomImage.imgUrl,
                                layout: "fill",
                                objectFit: "cover"
                            })
                        })
                    })
                })
            ]
        })
    }) : null;
};
MegaMenu1.defaultProps = {
    minWidth: "760px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenu1);


/***/ }),

/***/ 2082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mega_menu_MegaMenu2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BazaarCard.jsx
var BazaarCard = __webpack_require__(5744);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/categories/CategoryMenuItem.jsx
var CategoryMenuItem = __webpack_require__(999);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/BazaarImage.jsx
var BazaarImage = __webpack_require__(4167);
// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
// EXTERNAL MODULE: ./src/components/LazyImage.jsx
var LazyImage = __webpack_require__(4588);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.jsx
var NavLink = __webpack_require__(3377);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/categories/mega-menu/StyledMegaMenu.jsx
var StyledMegaMenu = __webpack_require__(7350);
;// CONCATENATED MODULE: ./src/components/categories/mega-menu/MegaMenu3.jsx










 // component props with nested interface
const MegaMenu3 = ({ data: { categories , rightImage  } , minWidth  })=>{
    return categories ? /*#__PURE__*/ jsx_runtime_.jsx(StyledMegaMenu/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BazaarCard/* default */.Z, {
            sx: {
                ml: "1rem",
                minWidth
            },
            elevation: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                    px: 2.5,
                    py: 1.75,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            flex: "1 1 0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                container: true,
                                spacing: 4,
                                children: categories?.map((item, ind)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        item: true,
                                        md: 3,
                                        children: [
                                            item.href ? /*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
                                                className: "title-link",
                                                href: item.href,
                                                children: item.title
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                className: "title-link",
                                                children: item.title
                                            }),
                                            item.subCategories?.map((sub, ind)=>/*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
                                                    className: "child-link",
                                                    href: sub.href,
                                                    children: sub.title
                                                }, ind))
                                        ]
                                    }, ind))
                            })
                        }),
                        rightImage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: rightImage.href,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    position: "relative",
                                    width: "153px",
                                    height: "100%",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LazyImage/* default */.Z, {
                                        src: rightImage.imgUrl,
                                        layout: "fill",
                                        objectFit: "contain"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/sale-page-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            className: "h-full",
                            container: true,
                            spacing: 0,
                            wrap: "wrap-reverse",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        px: 2.5,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Typography.H3, {
                                                mb: 1,
                                                children: "Big Sale Upto 60% Off"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                color: "grey.600",
                                                mb: 1,
                                                children: "Handcrafted from genuine Italian Leather"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Small */.x4, {
                                                fontWeight: "700",
                                                borderBottom: "2px solid",
                                                borderColor: "primary.main",
                                                children: "SHOP NOW"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(flex_box/* FlexBox */.hs, {
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        height: "160px",
                                        position: "relative",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LazyImage/* default */.Z, {
                                            layout: "fill",
                                            objectFit: "cover",
                                            src: "/assets/images/models/model-1.png",
                                            alt: "model"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }) : null;
};
MegaMenu3.defaultProps = {
    minWidth: "760px"
};
/* harmony default export */ const mega_menu_MegaMenu3 = (MegaMenu3);

;// CONCATENATED MODULE: ./src/components/categories/mega-menu/MegaMenu2.jsx





 // component interface
const MegaMenu2 = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledMegaMenu/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(BazaarCard/* default */.Z, {
            elevation: 2,
            sx: {
                ml: "1rem",
                py: "0.5rem"
            },
            children: data?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(CategoryMenuItem/* default */.Z, {
                    title: item.title,
                    href: item.href,
                    icon: item.icon,
                    caret: !!item.menuData,
                    children: item.menuData && /*#__PURE__*/ jsx_runtime_.jsx(mega_menu_MegaMenu3, {
                        minWidth: "560px",
                        data: item.menuData
                    })
                }, item.title))
        })
    });
};
/* harmony default export */ const mega_menu_MegaMenu2 = (MegaMenu2);


/***/ }),

/***/ 7350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


 // styled component
const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ theme  })=>({
        display: "none",
        position: "absolute",
        left: "50%",
        right: "auto",
        // top: 0,
        zIndex: 99,
        "& .title-link, & .child-link": {
            color: "inherit",
            fontWeight: 600,
            display: "block",
            padding: "0.5rem 0px"
        },
        "& .child-link": {
            fontWeight: 400
        },
        "& .mega-menu-content": {
            padding: "0.5rem 0px",
            marginLeft: "1rem",
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            transition: "all 250ms ease-in-out"
        }
    }));
const StyledMegaMenu = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        className: "mega-menu",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledMegaMenu);


/***/ }),

/***/ 749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HeaderWrapper */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7449);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4167);
/* harmony import */ var components_categories_CategoryMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2674);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9029);
/* harmony import */ var components_icons_Category__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2871);
/* harmony import */ var components_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8713);
/* harmony import */ var components_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(188);
/* harmony import */ var components_navbar_MobileMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3897);
/* harmony import */ var components_search_box_GrocerySearchBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7717);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5503);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var pages_sections_sessions_Login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7426);
/* harmony import */ var _search_box_SearchBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7503);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_categories_CategoryMenu__WEBPACK_IMPORTED_MODULE_10__, components_search_box_GrocerySearchBox__WEBPACK_IMPORTED_MODULE_16__, pages_sections_sessions_Login__WEBPACK_IMPORTED_MODULE_19__, _search_box_SearchBox__WEBPACK_IMPORTED_MODULE_22__]);
([components_categories_CategoryMenu__WEBPACK_IMPORTED_MODULE_10__, components_search_box_GrocerySearchBox__WEBPACK_IMPORTED_MODULE_16__, pages_sections_sessions_Login__WEBPACK_IMPORTED_MODULE_19__, _search_box_SearchBox__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















 // styled component
const HeaderWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        zIndex: 3,
        position: "relative",
        height: utils_constants__WEBPACK_IMPORTED_MODULE_21__/* .layoutConstant.headerHeight */ .P.headerHeight,
        transition: "height 250ms ease-in-out",
        background: theme.palette.background.paper,
        [theme.breakpoints.down("sm")]: {
            height: utils_constants__WEBPACK_IMPORTED_MODULE_21__/* .layoutConstant.mobileHeaderHeight */ .P.mobileHeaderHeight
        }
    })); // ==============================================================
// ==============================================================
const Header = ({ isFixed , headerdata , className , searchBoxType ="type2"  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const { state  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_17__/* .useAppContext */ .bp)();
    const { 0: dialogOpen , 1: setDialogOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false);
    const { 0: sidenavOpen , 1: setSidenavOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false);
    const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down("xs"));
    const downMd = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down(1150));
    const toggleDialog = ()=>setDialogOpen(!dialogOpen);
    const toggleSidenav = ()=>setSidenavOpen(!sidenavOpen);
    const companyLogo = "https://s3-inara.eu-central-1.linodeobjects.com/idris/logo/idris-logo.png";
    const comopanyalt = "companylogo";
    const imgbaseurl = "https://chitralhive.com/api/" + "media/";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderWrapper, {
        className: clsx__WEBPACK_IMPORTED_MODULE_7___default()(className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                gap: 2,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                    mr: 2,
                    minWidth: "170px",
                    alignItems: "center",
                    sx: {
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_18___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    height: 44,
                                    width: 150,
                                    src: headerdata ? imgbaseurl + headerdata[0].site_logo : "/assets/images/logos/webpack.png",
                                    alt: comopanyalt,
                                    style: {
                                        display: "block"
                                    }
                                })
                            })
                        }),
                        isFixed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_categories_CategoryMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                                color: "grey.600",
                                alignItems: "center",
                                ml: 2,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_BazaarButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    color: "inherit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons_Category__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            fontSize: "small",
                                            color: "inherit"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.KeyboardArrowDown, {
                                            fontSize: "small",
                                            color: "inherit"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                    justifyContent: "center",
                    flex: "1 1 0",
                    children: [
                        searchBoxType === "type1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_box_SearchBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {}),
                        searchBoxType === "type2" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_search_box_GrocerySearchBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_11__/* .FlexBox */ .hs, {
                    alignItems: "center",
                    sx: {
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            component: (_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()),
                            p: 1.25,
                            bgcolor: "grey.200",
                            onClick: toggleDialog,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.PersonOutline, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                            badgeContent: state.cart.length,
                            color: "primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                ml: 2.5,
                                p: 1.25,
                                bgcolor: "grey.200",
                                component: (_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()),
                                onClick: toggleSidenav,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    open: dialogOpen,
                    fullWidth: isMobile,
                    scroll: "body",
                    onClose: toggleDialog,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_sections_sessions_Login__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
                    open: sidenavOpen,
                    anchor: "right",
                    onClose: toggleSidenav,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Category = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, {
        ...props,
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m29 11v14a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4-4v-14a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm24-4h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm-28 28h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm21 0a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ 8786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Dress = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, {
        ...props,
        viewBox: "0 0 511.98 511.98",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "m474.189 249.065c-15.283-27.933-30.476-45.984-35.949-52.095v-41.228l71-58.299c1.69-1.389 2.691-3.446 2.738-5.634.048-2.188-.863-4.287-2.492-5.747l-53.72-48.15c-3.084-2.764-7.826-2.504-10.591.579-2.765 3.084-2.505 7.826.579 10.591l47.211 42.316-54.722 44.933v-30.672c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5l-.004 87.897c-53.551 8.667-107.749 8.666-161.3-.002v-87.895c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.675l-54.726-44.936 58.383-52.337c8.589-7.702 19.681-10.903 30.355-9.635 2.198 9.442 7.246 29.247 14.998 48.977 12.738 32.421 27.596 51.803 44.16 57.606.803.281 1.641.422 2.479.422s1.677-.141 2.479-.422c16.564-5.803 31.423-25.185 44.164-57.605 7.739-19.693 12.781-39.446 14.988-48.911 6.608-.79 13.432.094 19.776 2.81 3.811 1.631 8.217-.136 9.847-3.943 1.631-3.808-.135-8.216-3.942-9.846-19.267-8.249-41.729-4.46-57.23 9.649l-6.921 6.3c-13.205 12.024-33.112 12.024-46.312 0l-6.92-6.3c-20.436-18.604-51.362-18.719-71.935-.269l-64.891 58.17c-1.63 1.46-2.54 3.56-2.492 5.747.047 2.188 1.048 4.245 2.738 5.634l71 58.299v41.222c-4.917 5.472-17.553 20.415-31.021 43.329-11.406-6.078-23.469-12.079-35.688-18.154-10.678-5.31-21.433-10.658-31.757-16.089 10.09-12.635 17.873-26.937 21.284-43.704 5.212-25.623-2.412-48.511-20.917-62.796-17.543-13.542-41.702-16.561-60.119-7.512-9.872 4.85-26.433 17.438-26.433 47.242 0 18.866 11.981 36.701 36.63 54.525 7.71 5.575 16.378 10.975 25.604 16.244-11.438 11.251-24.565 21.265-36.966 30.723-26.699 20.364-52.03 39.7-52.685 65.752-16.334 3.916-28.937 17.537-31.131 34.693-4.988 39.06-4.988 78.67 0 117.732 2.52 19.695 18.765 34.747 38.629 35.788 39.828 2.077 79.936 3.115 120.045 3.115 40.108 0 80.219-1.039 120.048-3.115 19.869-1.042 36.109-16.095 38.617-35.788 1.494-11.678 2.531-23.406 3.132-35.153 6.102.183 12.255.281 18.379.281 97.91 0 161.79-22.909 164.462-23.884 2.959-1.081 4.928-3.895 4.928-7.045.002-62.002-20.548-112.576-37.789-144.085zm-164.85-203.516c18.952 17.269 47.547 17.269 66.511.002l6.92-6.299c1.406-1.28 2.893-2.441 4.444-3.483-2.605 9.936-6.601 23.561-11.94 37.146-12.502 31.813-24.306 43.734-32.683 47.885-8.376-4.151-20.18-16.072-32.679-47.885-5.338-13.587-9.335-27.221-11.94-37.161 1.544 1.043 3.032 2.207 4.45 3.497zm-232.049 93.729c0-16.298 6.24-27.979 18.047-33.78 4.938-2.426 10.581-3.603 16.389-3.603 9.706 0 19.87 3.289 27.95 9.526 8.113 6.262 20.899 20.817 15.384 47.932-3.023 14.864-10.419 27.795-20.071 39.388-32.415-18.165-57.699-37.45-57.699-59.463zm-34.141 181.137c13.369-.694 26.743-1.274 39.751-1.724 4.14-.144 7.379-3.615 7.235-7.755-.144-4.141-3.589-7.367-7.755-7.236-10.608.367-21.459.824-32.351 1.354 1.932-18.254 22.822-34.203 46.625-52.357 13.983-10.666 28.827-21.988 41.586-35.099 11.493 6.125 23.493 12.093 35.312 17.97 11.83 5.883 23.756 11.814 35.067 17.849-7.43 14.117-14.737 30.545-20.785 49.053-25.23-.281-50.418-.172-75.418.377-4.142.091-7.425 3.521-7.334 7.663s3.504 7.459 7.662 7.333c55.91-1.227 112.749-.361 168.938 2.572 12.616.654 22.928 10.2 24.52 22.702 1.053 8.231 1.863 16.488 2.457 24.759-.606 8.3-1.429 16.54-2.457 24.512-1.591 12.492-11.906 22.033-24.532 22.688-16.982.887-34.042 1.578-50.861 2.083.36-10.591.127-21.226-.722-31.757-1.147-14.244-12.702-25.571-26.876-26.346-24.269-1.328-48.879-1.329-73.142 0-14.175.775-25.729 12.102-26.877 26.346-.855 10.611-1.086 21.328-.714 32-19.751-.526-39.663-1.296-59.329-2.326-12.622-.654-22.938-10.195-24.528-22.691-1.006-7.878-1.831-16.091-2.459-24.419.594-8.301 1.404-16.588 2.459-24.849 1.598-12.5 11.914-22.048 24.528-22.702zm178.669-59.722c24.297 13.904 43.929 28.449 50.526 44.262-22.866-1.092-45.817-1.849-68.761-2.26 5.407-15.657 11.769-29.734 18.235-42.002zm-6.683 168.076c-.548 6.801-6.027 12.206-12.744 12.574-.001 0-.001 0-.001 0-23.723 1.298-47.778 1.298-71.503 0-6.717-.368-12.196-5.773-12.744-12.574-1.127-13.988-1.127-28.174 0-42.162.548-6.801 6.027-12.206 12.745-12.574 11.861-.649 23.806-.974 35.751-.974s23.89.325 35.752.974c6.717.368 12.196 5.773 12.744 12.574 1.127 13.988 1.127 28.174 0 42.162zm66.545 50.987c-79.139 4.126-159.39 4.126-238.526 0-12.616-.662-22.935-10.213-24.533-22.71-1.654-12.954-2.728-25.971-3.248-39.007 6.986 7.004 16.483 11.472 26.996 12.017 20.261 1.062 40.787 1.85 61.132 2.379 2.199 13.068 13.22 23.156 26.567 23.886 12.134.664 24.353.996 36.571.996s24.438-.332 36.57-.996c13.429-.735 24.5-10.942 26.604-24.125 17.395-.511 35.059-1.221 52.635-2.14 10.519-.545 20.02-5.016 27.007-12.022-.521 13.038-1.597 26.058-3.254 39.015-1.592 12.496-11.905 22.045-24.521 22.707zm190.685-85.295c-1.543-22.547-4.394-45.012-8.504-66.906-.764-4.071-4.68-6.75-8.755-5.987-4.071.764-6.752 4.684-5.987 8.755 4.139 22.051 6.956 44.702 8.42 67.423-5.775 1.183-12.323 2.412-19.57 3.608-.907-30.162-4.126-60.195-9.604-89.401-.764-4.071-4.684-6.75-8.754-5.989-4.071.764-6.752 4.683-5.988 8.754 5.443 29.027 8.602 58.898 9.409 88.892-22.363 3.069-49.673 5.467-80.443 5.467-5.949 0-11.926-.094-17.854-.271.424-22.572-.789-45.17-3.656-67.585-2.249-17.661-15.534-31.573-32.57-35.012-5.506-22.918-29.036-41.328-59.365-58.636 11.987-20.289 23.202-33.975 28.099-39.59 28.328 4.714 56.839 7.078 85.35 7.078 28.509 0 57.018-2.363 85.345-7.077 5.628 6.436 19.559 23.452 33.336 48.733 15.786 28.966 34.51 74.878 35.649 131.04-4.878 1.539-13.242 4.002-24.558 6.704z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "m196.735 385.408c-10.018-.469-20.143-.706-30.096-.706-9.954 0-20.08.237-30.098.706-3.826.179-6.902 3.212-7.136 7.036-.615 10.114-.615 20.372 0 30.487.233 3.824 3.31 6.857 7.136 7.036 10.01.468 20.137.706 30.098.706 9.96 0 20.086-.237 30.096-.706 3.826-.179 6.902-3.212 7.136-7.036.615-10.115.615-20.372 0-30.487-.233-3.823-3.309-6.857-7.136-7.036zm-7.523 29.858c-15.075.541-30.073.541-45.146 0-.161-5.045-.161-10.111 0-15.156 15.083-.542 30.063-.542 45.146 0 .161 5.045.161 10.111 0 15.156z"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dress);


/***/ }),

/***/ 5201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Man = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, {
        ...props,
        viewBox: "-12 0 512 512.00067",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m209.835938 175.996094c0-8.613282-5.453126-15.359375-12.414063-15.359375-6.957031 0-12.410156 6.746093-12.410156 15.359375 0 8.613281 5.449219 15.359375 12.410156 15.359375s12.414063-6.746094 12.414063-15.359375zm0 0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m290.636719 191.355469c6.960937 0 12.414062-6.746094 12.414062-15.359375 0-8.613282-5.453125-15.359375-12.414062-15.359375-6.960938 0-12.410157 6.746093-12.410157 15.359375 0 8.613281 5.449219 15.359375 12.410157 15.359375zm0 0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m252.011719 227.671875c.773437 0 1.558593-.015625 2.359375-.046875 4.171875-.175781 7.414062-3.699219 7.238281-7.871094-.171875-4.171875-3.679687-7.402344-7.867187-7.238281-3.691407.15625-10.195313-.0625-12.203126-3.257813-2.589843-4.117187.390626-13.90625 3.222657-19.230468 1.972656-3.671875.597656-8.25-3.074219-10.230469-3.675781-1.976563-8.261719-.601563-10.242188 3.074219-1.148437 2.128906-10.980468 21.210937-2.730468 34.398437 4.324218 6.910157 12.15625 10.402344 23.296875 10.402344zm0 0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m205.148438 235.667969c-3.492188 2.292969-4.464844 6.976562-2.175782 10.46875.605469.925781 15.144532 22.636719 41.058594 22.636719 25.910156 0 40.453125-21.710938 41.058594-22.636719 2.28125-3.480469 1.3125-8.132813-2.15625-10.433594-3.46875-2.296875-8.152344-1.34375-10.46875 2.113281-.105469.15625-10.808594 15.835938-28.433594 15.835938s-28.328125-15.675782-28.417969-15.808594c-2.289062-3.492188-6.976562-4.464844-10.464843-2.175781zm0 0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m100.128906 496.878906h-84.132812c.710937-5.140625 1.941406-12.296875 4-20.113281 3.597656-13.664063 10.496094-32.058594 22.925781-42.109375 21.960937-17.753906 114.855469-67.511719 145.441406-83.726562 5.480469 25.703124 28.351563 45.042968 55.667969 45.042968 27.3125 0 50.1875-19.34375 55.667969-45.046875 11.441406 6.066407 31.582031 16.8125 53.34375 28.757813 3.617187 1.980468 8.285156.617187 10.265625-2.992188 2.007812-3.660156.671875-8.253906-2.988282-10.265625-26.234374-14.398437-50.125-27.0625-59.367187-31.941406v-35.253906c1.792969-1.621094 3.542969-3.316407 5.234375-5.125 8.640625-9.261719 15.777344-20.816407 21.394531-34.550781 2.527344.449218 5.015625.675781 7.449219.675781 12.066406 0 22.765625-5.492188 30.519531-16 13.761719-18.664063 15.863281-50.160157 4.410157-66.082031-.507813-.707032-1.03125-1.378907-1.5625-2.027344 13.515624-46.558594 9.425781-86.003906-12.183594-117.300782-30.863282-44.703124-86.90625-57.527343-105.894532-58.695312-26.839843-1.648438-45.761718 13.34375-54.125 21.703125-10.804687-6.238281-22.429687-7.503906-33.96875-3.625-20.097656 6.753906-37.535156 29.042969-45.511718 58.167969-1.632813 5.960937-2.75 13.113281-3.316406 21.25-.292969 4.164062 2.847656 7.777344 7.011718 8.070312 4.152344.296875 7.777344-2.851562 8.070313-7.015625.5-7.144531 1.449219-13.308593 2.816406-18.3125 6.5625-23.964843 20.59375-42.738281 35.746094-47.832031 8.769531-2.945312 17.445312-1.199219 25.773437 5.199219 3.304688 2.542969 8.058594 1.90625 10.605469-1.394531.179687-.226563 17.957031-22.839844 45.964844-21.121094 15.8125.976562 67.082031 12.652344 94.386719 52.195312 18.101562 26.21875 21.964843 59.574219 11.550781 99.242188-4.058594-1.398438-8.417969-1.757813-12.964844-1.046875-.078125-2.511719-.171875-3.996094-.1875-4.21875-.210937-3.1875-2.402344-5.902344-5.476563-6.773438-81.78125-23.222656-117.785156-76.371093-118.128906-76.894531-1.554687-2.363281-4.304687-3.660156-7.113281-3.363281-2.816406.296875-5.226563 2.144531-6.25 4.78125-18.617187 47.90625-56.457031 77.035156-56.832031 77.320312-1.761719 1.332031-2.855469 3.375-2.988282 5.582031-.011718.199219-.078124 1.425782-.136718 3.5-4.445313-.625-8.710938-.222656-12.683594 1.183594-2.0625-14.5625-3.441406-28.019531-4.085938-40.089844-.222656-4.167968-3.785156-7.375-7.953124-7.144531-4.167969.222657-7.367188 3.785157-7.148438 7.953125.792969 14.785156 2.632812 31.511719 5.453125 49.730469-.246094.320313-.488281.640625-.726563.972656-11.441406 15.90625-9.355468 47.386719 4.382813 66.046875 7.753906 10.535156 18.460937 16.042969 30.546875 16.042969 2.402344 0 4.863281-.226563 7.363281-.664063 5.738281 13.9375 13.039063 25.617188 21.855469 34.945313 1.570312 1.660156 3.199219 3.214844 4.855469 4.714844v35.253906c-22.519531 11.871094-128.6875 68.203125-153.6875 88.414063-29.386719 23.761718-33.253907 78.726562-33.402344 81.054687-.277344 4.296875 3.242187 8.046875 7.542969 8.046875h92.570312c4.175782 0 7.5625-3.382812 7.5625-7.558594 0-4.175781-3.386718-7.5625-7.5625-7.5625zm239.847656-286.363281c1.488282-11.113281 2.132813-21.269531 2.371094-29.433594 7.988282-2.382812 12.363282 1.761719 15.335938 5.894531 6.960937 9.671876 6.339844 33.847657-4.304688 48.277344-5.375 7.292969-12.316406 10.542969-20.6875 9.753906 3.164063-10.488281 5.605469-21.976562 7.285156-34.492187zm-54.144531 128.535156c0 23.050781-18.75 41.800781-41.800781 41.800781s-41.800781-18.75-41.800781-41.800781v-28.984375c12.203125 6.695313 26.152343 10.074219 41.71875 10.074219h.355469c15.503906-.050781 29.386718-3.441406 41.527343-10.097656zm-151.171875-103.820312c-10.621094-14.429688-11.234375-38.597657-4.285156-48.257813 4.152344-5.769531 8.867188-7.707031 14.941406-6.015625.273438 8.292969.980469 18.738281 2.59375 30.195313 1.726563 12.273437 4.1875 23.558594 7.335938 33.871094-8.324219.742187-15.230469-2.519532-20.585938-9.792969zm25.703125-69.011719c8.863281-7.359375 35.886719-31.804688 53.773438-69.621094 14.953125 17.429688 50.878906 52.007813 113.136719 71.003906.386718 18.640626-.742188 82.5625-32.167969 116.214844-13.074219 14-30.183594 21.136719-50.851563 21.203125-20.664062.085938-37.820312-6.953125-50.992187-20.867187-32.855469-34.71875-33.269531-102.289063-32.898438-117.933594zm0 0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m488.046875 503.953125c-.152344-2.328125-4.019531-57.296875-33.402344-81.054687-9.6875-7.832032-32.511719-21.882813-67.839843-41.761719-3.636719-2.046875-8.246094-.757813-10.296876 2.878906-2.046874 3.640625-.757812 8.25 2.882813 10.296875 43.089844 24.246094 59.535156 35.320312 65.746094 40.34375 18.316406 14.808594 24.824219 47.136719 26.917969 62.222656h-341.683594c-4.175782 0-7.558594 3.382813-7.558594 7.558594s3.382812 7.5625 7.558594 7.5625h350.128906c4.304688 0 7.824219-3.75 7.546875-8.046875zm0 0"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Man);


/***/ }),

/***/ 8713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ShoppingBagOutlined = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingBagOutlined);


/***/ }),

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_BazaarAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8128);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7449);
/* harmony import */ var components_BazaarIconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1659);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);
/* harmony import */ var components_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8713);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4588);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(403);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5503);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* eslint-disable react-hooks/exhaustive-deps */ 













// import {server_ip} from "utils/backend_server_ip.jsx"
const MiniCart = ({ toggleSidenav  })=>{
    const imgurl = "https://chitralhive.com/api/";
    const slugbaseurl = "/product/";
    const { palette  } = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { state , dispatch  } = (0,contexts_AppContext__WEBPACK_IMPORTED_MODULE_11__/* .useAppContext */ .bp)();
    const cartList = state.cart;
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (false) {}
    }, []);
    const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((amount, product)=>()=>{
            if ("bundle" in product) {
                product.bundle = false;
            }
            dispatch({
                type: "CHANGE_CART_AMOUNT",
                payload: {
                    ...product,
                    qty: amount
                }
            });
        }, []);
    const getTotalPrice = ()=>{
        return cartList.reduce((accum, item)=>accum + item.salePrice * item.qty, 0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        width: "380px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                overflow: "auto",
                height: `calc(100vh - ${!!cartList.length ? "80px - 3.25rem" : "0px"})`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                        alignItems: "center",
                        m: "0px 20px",
                        height: "74px",
                        color: "secondary.main",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                color: "inherit"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                fontWeight: 600,
                                fontSize: "16px",
                                ml: 1,
                                children: [
                                    cartList.length,
                                    " item"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                    !!!cartList.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "calc(100% - 74px)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                src: "/assets/images/logos/shopping-bag.svg",
                                width: 90,
                                height: 100
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                component: "p",
                                mt: 2,
                                color: "grey.600",
                                textAlign: "center",
                                maxWidth: "200px",
                                children: "Your shopping bag is empty. Start shopping"
                            })
                        ]
                    }),
                    cartList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                            py: 2,
                            px: 2.5,
                            alignItems: "center",
                            borderBottom: `1px solid ${palette.divider}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_7__/* .FlexBox */ .hs, {
                                    alignItems: "center",
                                    flexDirection: "column",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            color: "primary",
                                            variant: "outlined",
                                            onClick: handleCartAmountChange(item.qty + 1, item),
                                            "aria-label": `Increase quantity of ${item.name}`,
                                            sx: {
                                                height: "32px",
                                                width: "32px",
                                                borderRadius: "300px",
                                                minWidth: "44px",
                                                minHeight: "44px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Add, {
                                                fontSize: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            fontWeight: 600,
                                            fontSize: "15px",
                                            my: "3px",
                                            children: item.qty
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            color: "primary",
                                            variant: "outlined",
                                            disabled: item.qty === 1,
                                            onClick: handleCartAmountChange(item.qty - 1, item),
                                            "aria-label": `Decrease quantity of ${item.name}`,
                                            sx: {
                                                height: "32px",
                                                width: "32px",
                                                borderRadius: "300px",
                                                minWidth: "44px",
                                                minHeight: "44px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Remove, {
                                                fontSize: "small"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    href: slugbaseurl + `${item.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarAvatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            mx: 2,
                                            width: 76,
                                            height: 76,
                                            alt: item.name,
                                            src: item.image || "/assets/images/products/iphone-x.png"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    flex: "1 1 0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            href: "/product/[slug]",
                                            as: `/product/${item.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_10__.H5, {
                                                    className: "title",
                                                    fontSize: "14px",
                                                    children: item.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_10__/* .Tiny */ .YE, {
                                            color: "grey.600",
                                            children: [
                                                currency,
                                                ". ",
                                                item.salePrice?.toFixed(2),
                                                " x ",
                                                item.qty
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            color: "primary.main",
                                            mt: 0.5,
                                            children: [
                                                currency,
                                                ". ",
                                                (item.qty * item.salePrice).toFixed(2)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarIconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ml: 2.5,
                                    size: "small",
                                    onClick: handleCartAmountChange(0, item),
                                    "aria-label": `Remove ${item.name} from cart`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Close, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        }, item.id))
                ]
            }),
            !!cartList.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                p: 2.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                        href: "/checkout",
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_BazaarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            fullWidth: true,
                            color: "primary",
                            variant: "contained",
                            sx: {
                                mb: "0.75rem",
                                height: "40px"
                            },
                            onClick: toggleSidenav,
                            children: [
                                "Checkout Now (",
                                currency,
                                ". ",
                                getTotalPrice().toFixed(2),
                                ")"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                        href: "/cart",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            fullWidth: true,
                            color: "primary",
                            variant: "outlined",
                            sx: {
                                height: 40
                            },
                            onClick: toggleSidenav,
                            children: "View Cart"
                        })
                    })
                ]
            })
        ]
    });
};
MiniCart.defaultProps = {
    toggleSidenav: ()=>{}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCart);


/***/ }),

/***/ 1636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mobile_navigation_MobileNavigationBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/CategoryOutline.jsx



const CategoryOutlined = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM4 4V9H9V4H4Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3ZM15 4V9H20V4H15Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 14C2 13.4477 2.44772 13 3 13H10C10.5523 13 11 13.4477 11 14V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V14ZM4 15V20H9V15H4Z"
            })
        ]
    });
};
/* harmony default export */ const CategoryOutline = (CategoryOutlined);

;// CONCATENATED MODULE: ./src/components/icons/Home.jsx



const Home = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065ZM4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V13H10V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V12Z"
            })
        ]
    });
};
/* harmony default export */ const icons_Home = (Home);

// EXTERNAL MODULE: ./src/components/icons/ShoppingBagOutlined.jsx
var ShoppingBagOutlined = __webpack_require__(8713);
;// CONCATENATED MODULE: ./src/components/icons/User2.jsx



const User2 = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M6.65 7.5C6.65 9.21452 7.46395 10.7392 8.72162 11.7184C4.89924 13.0726 2.15 16.7186 2.15 21C2.15 21.47 2.53084 21.85 3 21.85H21C21.4692 21.85 21.85 21.47 21.85 21C21.85 16.7186 19.1008 13.0726 15.2784 11.7184C16.536 10.7392 17.35 9.21452 17.35 7.5C17.35 4.55053 14.9502 2.15 12 2.15C9.04976 2.15 6.65 4.55053 6.65 7.5ZM8.35 7.5C8.35 5.48748 9.98748 3.85 12 3.85C14.0125 3.85 15.65 5.48748 15.65 7.5C15.65 9.51252 14.0125 11.15 12 11.15C9.98748 11.15 8.35 9.51252 8.35 7.5ZM20.106 20.15H3.89395C4.32041 16.0538 7.79275 12.85 12 12.85C16.2072 12.85 19.6796 16.0538 20.106 20.15Z",
            stroke: "#395589",
            strokeWidth: "0.2"
        })
    });
};
/* harmony default export */ const icons_User2 = (User2);

// EXTERNAL MODULE: ./src/contexts/AppContext.jsx
var AppContext = __webpack_require__(5503);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(420);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.jsx
var NavLink = __webpack_require__(3377);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
;// CONCATENATED MODULE: ./src/components/mobile-navigation/styles.js


 // styled components
const Wrapper = (0,material_.styled)(material_.Box)(({ theme  })=>({
        left: 0,
        right: 0,
        bottom: 0,
        display: "none",
        position: "fixed",
        justifyContent: "space-around",
        zIndex: theme.zIndex.drawer + 1,
        height: constants/* layoutConstant.mobileNavHeight */.P.mobileNavHeight,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
        "@media only screen and (max-width: 900px)": {
            display: "flex",
            width: "100vw"
        }
    }));
const StyledNavLink = (0,material_.styled)(NavLink/* default */.Z)(()=>({
        flex: "1 1 0",
        display: "flex",
        fontSize: "13px",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    }));
const StyledBox = (0,material_.styled)(material_.Box)(({ theme  })=>({
        flex: "1 1 0",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        transition: "color 150ms ease-in-out",
        "&:hover": {
            color: `${theme.palette.primary.main} !important`
        }
    }));
const StyledDrawer = (0,material_.styled)(material_.Drawer)(({ theme , totalheight  })=>({
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: 250,
            top: totalheight,
            boxSizing: "border-box",
            boxShadow: theme.shadows[2],
            height: `calc(100% - ${totalheight + constants/* layoutConstant.mobileHeaderHeight */.P.mobileHeaderHeight}px)`
        },
        "& .MuiBackdrop-root.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            top: totalheight
        }
    })); // common icon component style
const iconStyle = {
    display: "flex",
    marginBottom: "4px",
    alignItems: "center",
    justifyContent: "center"
};


;// CONCATENATED MODULE: ./src/components/mobile-navigation/MobileNavigationBar.jsx









const MobileNavigationBar = ()=>{
    const width = (0,useWindowSize/* default */.Z)();
    const { state  } = (0,AppContext/* useAppContext */.bp)();
    return width <= 900 ? /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: list.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledNavLink, {
                href: item.href,
                children: [
                    item.title === "Cart" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Badge, {
                        badgeContent: state.cart.length,
                        color: "primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                            fontSize: "small",
                            sx: iconStyle
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                        sx: iconStyle,
                        fontSize: "small"
                    }),
                    item.title
                ]
            }, item.title))
    }) : null;
};
const list = [
    {
        title: "Home",
        icon: icons_Home,
        href: "/"
    },
    {
        title: "Category",
        icon: CategoryOutline,
        href: "/mobile-category-nav"
    },
    {
        title: "Cart",
        icon: ShoppingBagOutlined/* default */.Z,
        href: "/cart"
    },
    {
        title: "Account",
        icon: icons_User2,
        href: "/profile"
    }, 
];
/* harmony default export */ const mobile_navigation_MobileNavigationBar = (MobileNavigationBar);


/***/ }),

/***/ 3377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





 // component props interface
// styled component
const StyledLink = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)("a")(({ theme , active_route  })=>({
        position: "relative",
        transition: "color 150ms ease-in-out",
        color: active_route === "active" ? theme.palette.primary.main : "inherit",
        "&:hover": {
            color: `${theme.palette.primary.main} !important`
        }
    }));
const NavLink = ({ href , children , style , className , ...props })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const checkRouteMatch = ()=>{
        if (href === "/") return pathname === href;
        return pathname.includes(href);
    }; // active route
    const currentRoute = checkRouteMatch();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
            href: href,
            style: style,
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className),
            active_route: currentRoute ? "active" : "",
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 3897:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.jsx
var nav_link_NavLink = __webpack_require__(3377);
// EXTERNAL MODULE: ./src/components/Scrollbar.jsx
var components_Scrollbar = __webpack_require__(6576);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
;// CONCATENATED MODULE: ./src/components/icons/duotone/Accounts.jsx


const Accounts = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 15 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.1706 10.4993C17.2445 10.1055 17.2445 9.69769 17.1706 9.30393L17.8949 8.88205C17.9792 8.83634 18.0179 8.7379 17.9898 8.64298C17.7999 8.03828 17.4765 7.48617 17.0546 7.02913C16.9913 6.95882 16.8859 6.94124 16.8015 6.99046L16.0772 7.40897C15.7712 7.14881 15.4197 6.9449 15.04 6.8113V5.97105C15.04 5.87613 14.9697 5.79175 14.8783 5.77417C14.2525 5.63354 13.6126 5.63706 13.0149 5.77417C12.9235 5.79175 12.8567 5.87613 12.8567 5.97105V6.81144C12.477 6.94504 12.1255 7.14895 11.8195 7.40911L11.0927 6.9892C11.0119 6.93998 10.9064 6.95755 10.8396 7.02787C10.4177 7.48491 10.0943 8.03701 9.90779 8.64171C9.87966 8.73664 9.91834 8.83508 9.9992 8.88078L10.7234 9.30266C10.6531 9.69642 10.6531 10.1042 10.7234 10.498L9.9992 10.9199C9.91482 10.9656 9.87966 11.064 9.90779 11.159C10.0941 11.7637 10.4177 12.3121 10.8396 12.7728C10.9064 12.8431 11.0083 12.8607 11.0927 12.8115L11.8206 12.393C12.1266 12.6531 12.4782 12.857 12.8579 12.9906V13.831C12.8579 13.9259 12.9247 14.0103 13.0161 14.0279C13.6455 14.1685 14.2817 14.165 14.8794 14.0279C14.9708 14.0103 15.0411 13.9259 15.0411 13.831V12.9906C15.4208 12.857 15.7724 12.6531 16.0784 12.393L16.8026 12.8115C16.8835 12.8607 16.9924 12.8431 17.0557 12.7728C17.4776 12.3158 17.8011 11.7637 17.9909 11.159C18.019 11.064 17.9804 10.9656 17.896 10.9199L17.1706 10.4993ZM13.9503 11.2643C13.1979 11.2643 12.5862 10.6526 12.5862 9.90019C12.5862 9.14783 13.1979 8.5361 13.9503 8.5361C14.7026 8.5361 15.3143 9.14783 15.3143 9.90019C15.3143 10.6526 14.704 11.2643 13.9503 11.2643Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.30012 7.20014C8.2886 7.20014 9.90019 5.58826 9.90019 3.60007C9.90019 1.61187 8.2886 0 6.30012 0C4.31164 0 2.70005 1.61187 2.70005 3.60007C2.70005 5.58826 4.31164 7.20014 6.30012 7.20014ZM11.9562 13.8321V13.5742C11.8914 13.539 11.8276 13.5022 11.7647 13.4636L11.5448 13.59C11.376 13.6886 11.1839 13.7405 10.9893 13.7405C10.6881 13.7405 10.395 13.6142 10.1745 13.3819C9.6567 12.8169 9.26632 12.1402 9.04329 11.416C8.89276 10.908 9.10919 10.379 9.54477 10.1436L9.77028 10.0122C9.76841 9.93852 9.76841 9.86481 9.77028 9.7912L9.55498 9.66573C9.20903 9.47018 9.00934 9.11279 9.00259 8.7269C8.59516 8.61485 8.16765 8.55016 7.72608 8.55016H4.87416C2.18282 8.55016 0 10.7355 0 13.4271C0 13.9643 0.436508 14.4003 0.974831 14.4003H11.6243C11.7854 14.4003 11.9309 14.3517 12.0647 14.2825C12.0012 14.1415 11.9562 13.9925 11.9562 13.8321Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Accounts = (Accounts);

;// CONCATENATED MODULE: ./src/components/icons/duotone/AccountSetting.jsx


const AccountSetting = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.8148 6.34077H13.3748C13.2711 6.00595 13.1378 5.68003 12.9748 5.37188L13.9911 4.35558C14.1067 4.24003 14.1067 4.0504 13.9911 3.93484L12.0652 2.00892C11.9496 1.89336 11.76 1.89336 11.6444 2.00892L10.6281 3.02521C10.32 2.86225 9.99407 2.72892 9.65926 2.62521V1.18521C9.65926 1.02225 9.52593 0.888916 9.36296 0.888916H6.63704C6.47407 0.888916 6.34074 1.02225 6.34074 1.18521V2.62521C6.00593 2.72892 5.68 2.86225 5.37185 3.02521L4.35556 2.00892C4.24 1.89336 4.05037 1.89336 3.93482 2.00892L2.00889 3.93484C1.89333 4.0504 1.89333 4.24003 2.00889 4.35558L3.02519 5.37188C2.86222 5.68003 2.72889 6.00595 2.62519 6.34077H1.18519C1.02222 6.34077 0.888889 6.4741 0.888889 6.63706V9.36299C0.888889 9.52595 1.02222 9.65929 1.18519 9.65929H2.62519C2.72889 9.9941 2.86222 10.32 3.02519 10.6282L2.00889 11.6445C1.89333 11.76 1.89333 11.9497 2.00889 12.0652L3.93482 13.9911C4.05037 14.1067 4.24 14.1067 4.35556 13.9911L5.37185 12.9748C5.68 13.1378 6.00593 13.2711 6.34074 13.3748V14.8148C6.34074 14.9778 6.47407 15.1111 6.63704 15.1111H9.36296C9.52593 15.1111 9.65926 14.9778 9.65926 14.8148V13.3748C9.99407 13.2711 10.32 13.1378 10.6281 12.9748L11.6444 13.9911C11.76 14.1067 11.9496 14.1067 12.0652 13.9911L13.9911 12.0652C14.1067 11.9497 14.1067 11.76 13.9911 11.6445L12.9748 10.6282C13.1378 10.32 13.2711 9.9941 13.3748 9.65929H14.8148C14.9778 9.65929 15.1111 9.52595 15.1111 9.36299V6.63706C15.1111 6.4741 14.9778 6.34077 14.8148 6.34077ZM8 11.6297C5.8963 11.6297 4.1837 9.91706 4.1837 7.81632C4.1837 5.71262 5.8963 4.00003 8 4.00003C10.1037 4.00003 11.8163 5.71262 11.8163 7.81632C11.8163 9.91706 10.1037 11.6297 8 11.6297Z",
                    fill: "currentColor",
                    className: "secondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M10.12 9.80799C9.592 10.3787 8.83733 10.7333 8 10.7333C7.16267 10.7333 6.408 10.3787 5.88 9.80799C6.288 9.03199 7.096 8.53333 8 8.53333C8.64 8.53333 9.24267 8.78133 9.696 9.23466C9.69867 9.23466 9.69867 9.23466 9.69867 9.23733C9.86667 9.40799 10.0107 9.59999 10.12 9.80799Z",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8 8.26664C8.73638 8.26664 9.33333 7.66969 9.33333 6.93331C9.33333 6.19693 8.73638 5.59998 8 5.59998C7.26362 5.59998 6.66667 6.19693 6.66667 6.93331C6.66667 7.66969 7.26362 8.26664 8 8.26664Z",
                    fill: "currentColor"
                })
            ]
        })
    });
};
/* harmony default export */ const duotone_AccountSetting = (AccountSetting);

;// CONCATENATED MODULE: ./src/components/icons/duotone/AdminEcommerce.jsx


const AdminEcommerce = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 15",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.7012 1.90002C12.7012 2.00338 12.4873 3.28638 12.4873 3.28638L12.1636 8.02295C12.1636 8.02295 11.9093 9.27551 11.9093 9.36669H2.1068C1.78892 9.36669 1.49415 9.22681 1.30341 8.97756C1.11268 8.72823 1.04332 8.39382 1.11268 8.07158L1.92763 4.1011C2.03745 3.54781 2.51139 3.10389 3.04313 3.03706L12.6954 1.90611C12.6954 1.90002 12.6954 1.90002 12.7012 1.90002Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.8382 0.0333252H13.7684C12.9645 0.0333252 12.3871 0.918579 12.0927 2.02358L11.8889 3.44877L11.5719 8.33964L11.3285 9.72717C11.0624 10.3738 10.6322 10.468 10.2869 10.468H1.16168C0.816367 10.468 0.533325 10.7819 0.533325 11.1649C0.533325 11.5479 0.816367 11.8555 1.16168 11.8555H10.2869C11.572 11.8555 12.4608 10.9138 12.7324 9.30652C12.7324 9.3003 12.7324 9.3003 12.7324 9.3003C12.7494 9.19357 12.7664 9.08684 12.7778 8.97383C12.789 8.87965 12.8003 8.77919 12.806 8.67874L13.157 3.31699C13.2363 2.14921 13.6495 1.47742 13.7684 1.42091H14.8382C15.1836 1.42091 15.4667 1.11327 15.4667 0.73029C15.4667 0.347308 15.1836 0.0333252 14.8382 0.0333252Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.02208 5.56552V7.29433C5.02208 7.60432 4.75682 7.84874 4.42112 7.84874C4.08548 7.84874 3.82021 7.60432 3.82021 7.29433V5.56552C3.82021 5.25553 4.08548 5.01111 4.42112 5.01111C4.75682 5.01111 5.02208 5.25553 5.02208 5.56552ZM7.37694 5.56552V7.29433C7.37694 7.60432 7.11709 7.84874 6.7815 7.84874C6.44586 7.84874 6.18054 7.60432 6.18054 7.29433V5.56552C6.18054 5.25553 6.44586 5.01111 6.7815 5.01111C7.11709 5.01111 7.37694 5.25553 7.37694 5.56552ZM9.73727 5.56552V7.29433C9.73727 7.60432 9.47742 7.84874 9.14178 7.84874C8.80613 7.84874 8.54092 7.60432 8.54092 7.29433V5.56552C8.54092 5.25553 8.80613 5.01111 9.14178 5.01111C9.47742 5.01111 9.73727 5.25553 9.73727 5.56552ZM3.49545 13.6432C3.49545 14.3705 2.95409 14.9667 2.28821 14.9667C1.62776 14.9667 1.0864 14.3705 1.0864 13.6432C1.0864 12.91 1.62776 12.3198 2.28821 12.3198C2.95409 12.3198 3.49545 12.91 3.49545 13.6432ZM11.042 13.6432C11.042 14.3705 10.5006 14.9667 9.84013 14.9667C9.17426 14.9667 8.6329 14.3705 8.6329 13.6432C8.6329 12.91 9.17426 12.3198 9.84013 12.3198C10.5006 12.3198 11.042 12.91 11.042 13.6432Z"
            })
        ]
    });
};
/* harmony default export */ const duotone_AdminEcommerce = (AdminEcommerce);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Calender.jsx


const Calendar = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.71429 2.25H10.2857V1.125C10.2857 0.503789 10.7964 0 11.4286 0C12.0607 0 12.5714 0.503789 12.5714 1.125V2.25H14.2857C15.2321 2.25 16 3.00551 16 3.9375V6.75H0V3.9375C0 3.00551 0.7675 2.25 1.71429 2.25H3.42857V1.125C3.42857 0.503789 3.93929 0 4.57143 0C5.20357 0 5.71429 0.503789 5.71429 1.125V2.25Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 6.75H16V16.3125C16 17.2441 15.2321 18 14.2857 18H1.71429C0.7675 18 0 17.2441 0 16.3125V6.75ZM2.28571 10.6875C2.28571 10.9969 2.54143 11.25 2.85714 11.25H4C4.31429 11.25 4.57143 10.9969 4.57143 10.6875V9.5625C4.57143 9.25312 4.31429 9 4 9H2.85714C2.54143 9 2.28571 9.25312 2.28571 9.5625V10.6875ZM7.42857 9C7.11429 9 6.85714 9.25312 6.85714 9.5625V10.6875C6.85714 10.9969 7.11429 11.25 7.42857 11.25H8.57143C8.88571 11.25 9.14286 10.9969 9.14286 10.6875V9.5625C9.14286 9.25312 8.88571 9 8.57143 9H7.42857ZM11.4286 10.6875C11.4286 10.9969 11.6857 11.25 12 11.25H13.1429C13.4571 11.25 13.7143 10.9969 13.7143 10.6875V9.5625C13.7143 9.25312 13.4571 9 13.1429 9H12C11.6857 9 11.4286 9.25312 11.4286 9.5625V10.6875ZM2.85714 13.5C2.54143 13.5 2.28571 13.7531 2.28571 14.0625V15.1875C2.28571 15.4969 2.54143 15.75 2.85714 15.75H4C4.31429 15.75 4.57143 15.4969 4.57143 15.1875V14.0625C4.57143 13.7531 4.31429 13.5 4 13.5H2.85714ZM6.85714 15.1875C6.85714 15.4969 7.11429 15.75 7.42857 15.75H8.57143C8.88571 15.75 9.14286 15.4969 9.14286 15.1875V14.0625C9.14286 13.7531 8.88571 13.5 8.57143 13.5H7.42857C7.11429 13.5 6.85714 13.7531 6.85714 14.0625V15.1875ZM12 13.5C11.6857 13.5 11.4286 13.7531 11.4286 14.0625V15.1875C11.4286 15.4969 11.6857 15.75 12 15.75H13.1429C13.4571 15.75 13.7143 15.4969 13.7143 15.1875V14.0625C13.7143 13.7531 13.4571 13.5 13.1429 13.5H12Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const Calender = (Calendar);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Chat.jsx


const Apps = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.6874 5.0623H5.37518C4.91114 5.0623 4.53146 5.44197 4.53146 5.90602C4.53146 6.37006 4.91114 6.74974 5.37518 6.74974H12.6874C13.155 6.74974 13.5311 6.37358 13.5311 5.90602C13.5311 5.43846 13.155 5.0623 12.6874 5.0623ZM9.31253 8.43717H5.37518C4.91114 8.43717 4.53146 8.81684 4.53146 9.28089C4.53146 9.74493 4.91114 10.1246 5.37518 10.1246H9.31253C9.78009 10.1246 10.1562 9.74845 10.1562 9.28089C10.1562 8.81333 9.78009 8.43717 9.31253 8.43717Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.7494 0H2.24991C1.0107 0 0 1.0107 0 2.21827V12.3112C0 13.5505 1.0107 14.5295 2.24991 14.5295H5.62478V17.4509C5.62478 17.7936 6.02027 17.994 6.29694 17.7919L10.6878 14.4979H15.7501C16.9893 14.4979 18 13.4872 18 12.2796V2.21827C17.9993 1.0107 17.0185 0 15.7494 0ZM9.31253 10.1246H5.37518C4.91114 10.1246 4.53146 9.74845 4.53146 9.28089C4.53146 8.81333 4.91114 8.43717 5.37518 8.43717H9.31253C9.78009 8.43717 10.1562 8.81685 10.1562 9.28089C10.1562 9.74493 9.78009 10.1246 9.31253 10.1246ZM12.6874 6.74974H5.37518C4.91114 6.74974 4.53146 6.37358 4.53146 5.90602C4.53146 5.43846 4.91114 5.0623 5.37518 5.0623H12.6874C13.155 5.0623 13.5311 5.44198 13.5311 5.90602C13.5311 6.37007 13.155 6.74974 12.6874 6.74974Z"
            })
        ]
    });
};
/* harmony default export */ const Chat = (Apps);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Customers.jsx


const Customers = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.6 8.00001C7.3675 8.00001 8.8 6.56726 8.8 4.80001C8.8 3.03276 7.3675 1.60001 5.6 1.60001C3.8325 1.60001 2.4 3.03276 2.4 4.80001C2.4 6.56726 3.8325 8.00001 5.6 8.00001ZM6.8675 9.20001H4.3325C1.93925 9.20001 0 11.14 0 13.5325C0 14.0125 0.388 14.4 0.8665 14.4H10.3325C10.8125 14.4 11.2 14.0125 11.2 13.5325C11.2 11.14 9.26 9.20001 6.8675 9.20001Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.9718 9.59999H10.1229C11.2733 10.5425 11.9943 11.9525 11.9943 13.5325C11.9943 13.8525 11.8992 14.1475 11.7439 14.4H15.1989C15.642 14.4 16 14.04 16 13.5775C16 11.39 14.2074 9.59999 11.9718 9.59999ZM10.7926 7.99999C12.3423 7.99999 13.5966 6.74749 13.5966 5.19999C13.5966 3.65249 12.3423 2.39999 10.7926 2.39999C10.1639 2.39999 9.58987 2.61387 9.12221 2.96274C9.41062 3.51574 9.59088 4.13499 9.59088 4.79999C9.59088 5.68799 9.2922 6.50349 8.8 7.16774C9.30797 7.67999 10.0115 7.99999 10.7926 7.99999Z",
                fill: "currentColor",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Customers = (Customers);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Dashboard.jsx


const Dashboard = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.71428 1.6C6.47142 1.6 7.08571 2.19694 7.08571 2.93333V7.37778C7.08571 8.11389 6.47142 8.71111 5.71428 8.71111H2.97143C2.214 8.71111 1.6 8.11389 1.6 7.37778V2.93333C1.6 2.19694 2.214 1.6 2.97143 1.6H5.71428ZM5.71428 10.4889C6.47142 10.4889 7.08571 11.0861 7.08571 11.8222V12.7111C7.08571 13.4472 6.47142 14.0444 5.71428 14.0444H2.97143C2.214 14.0444 1.6 13.4472 1.6 12.7111V11.8222C1.6 11.0861 2.214 10.4889 2.97143 10.4889H5.71428Z",
                fill: "currentColor",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.0286 1.6C13.7857 1.6 14.4 2.19694 14.4 2.93333V3.82222C14.4 4.55833 13.7857 5.15555 13.0286 5.15555H10.2857C9.52856 5.15555 8.91428 4.55833 8.91428 3.82222V2.93333C8.91428 2.19694 9.52856 1.6 10.2857 1.6H13.0286ZM13.0286 6.93333C13.7857 6.93333 14.4 7.53055 14.4 8.26666V12.7111C14.4 13.4472 13.7857 14.0444 13.0286 14.0444H10.2857C9.52856 14.0444 8.91428 13.4472 8.91428 12.7111V8.26666C8.91428 7.53055 9.52856 6.93333 10.2857 6.93333H13.0286Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Dashboard = (Dashboard);

;// CONCATENATED MODULE: ./src/components/icons/duotone/DataTable.jsx


const DataTable = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.75 5.14286C6.75 4.60848 7.17991 4.17857 7.71429 4.17857H14.1429C14.6772 4.17857 15.1071 4.60848 15.1071 5.14286C15.1071 5.67723 14.6772 6.10715 14.1429 6.10715H7.71429C7.17991 6.10715 6.75 5.67723 6.75 5.14286ZM6.75 12.8571C6.75 12.3228 7.17991 11.8929 7.71429 11.8929H14.1429C14.6772 11.8929 15.1071 12.3228 15.1071 12.8571C15.1071 13.3915 14.6772 13.8214 14.1429 13.8214H7.71429C7.17991 13.8214 6.75 13.3915 6.75 12.8571ZM14.1429 8.03572C14.6772 8.03572 15.1071 8.46563 15.1071 9C15.1071 9.53438 14.6772 9.96429 14.1429 9.96429H7.71429C7.17991 9.96429 6.75 9.53438 6.75 9C6.75 8.46563 7.17991 8.03572 7.71429 8.03572H14.1429Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 2.57143C0 1.15112 1.15112 0 2.57143 0H15.4286C16.8469 0 18 1.15112 18 2.57143V15.4286C18 16.8469 16.8469 18 15.4286 18H2.57143C1.15112 18 0 16.8469 0 15.4286V2.57143ZM5.14286 9C5.14286 8.28884 4.5683 7.71429 3.85714 7.71429C3.14719 7.71429 2.57143 8.28884 2.57143 9C2.57143 9.71116 3.14719 10.2857 3.85714 10.2857C4.5683 10.2857 5.14286 9.71116 5.14286 9ZM5.14286 5.14286C5.14286 4.4317 4.5683 3.85714 3.85714 3.85714C3.14719 3.85714 2.57143 4.4317 2.57143 5.14286C2.57143 5.85402 3.14719 6.42857 3.85714 6.42857C4.5683 6.42857 5.14286 5.85402 5.14286 5.14286ZM5.14286 12.8571C5.14286 12.146 4.5683 11.5714 3.85714 11.5714C3.14719 11.5714 2.57143 12.146 2.57143 12.8571C2.57143 13.5683 3.14719 14.1429 3.85714 14.1429C4.5683 14.1429 5.14286 13.5683 5.14286 12.8571ZM7.71429 4.17857C7.17991 4.17857 6.75 4.60848 6.75 5.14286C6.75 5.67723 7.17991 6.10714 7.71429 6.10714H14.1429C14.6772 6.10714 15.1071 5.67723 15.1071 5.14286C15.1071 4.60848 14.6772 4.17857 14.1429 4.17857H7.71429ZM7.71429 13.8214H14.1429C14.6772 13.8214 15.1071 13.3915 15.1071 12.8571C15.1071 12.3228 14.6772 11.8929 14.1429 11.8929H7.71429C7.17991 11.8929 6.75 12.3228 6.75 12.8571C6.75 13.3915 7.17991 13.8214 7.71429 13.8214ZM7.71429 8.03571C7.17991 8.03571 6.75 8.46562 6.75 9C6.75 9.53438 7.17991 9.96429 7.71429 9.96429H14.1429C14.6772 9.96429 15.1071 9.53438 15.1071 9C15.1071 8.46562 14.6772 8.03571 14.1429 8.03571H7.71429Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_DataTable = (DataTable);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Ecommerce.jsx


const Ecommerce = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 15",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1.30573 6.98718V7.7596L1.9803 14.0496C2.00696 14.3021 2.12617 14.5357 2.31493 14.7054C2.50368 14.8752 2.74861 14.969 3.00246 14.9688H12.9975C13.2513 14.969 13.4963 14.8752 13.685 14.7054C13.8738 14.5357 13.993 14.3021 14.0197 14.0496L14.6942 7.7596V6.98718H1.30573Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.3471 9.30444H10.8322C10.5478 9.30444 10.3172 9.53499 10.3172 9.81939V12.909C10.3172 13.1934 10.5478 13.424 10.8322 13.424H11.3471C11.6315 13.424 11.8621 13.1934 11.8621 12.909V9.81939C11.8621 9.53499 11.6315 9.30444 11.3471 9.30444Z" // className="secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.25745 9.30444H7.74251C7.45812 9.30444 7.22757 9.53499 7.22757 9.81939V12.909C7.22757 13.1934 7.45812 13.424 7.74251 13.424H8.25745C8.54185 13.424 8.7724 13.1934 8.7724 12.909V9.81939C8.7724 9.53499 8.54185 9.30444 8.25745 9.30444Z" // className="secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.16779 9.30444H4.65285C4.36846 9.30444 4.13791 9.53499 4.13791 9.81939V12.909C4.13791 13.1934 4.36846 13.424 4.65285 13.424H5.16779C5.45219 13.424 5.68274 13.1934 5.68274 12.909V9.81939C5.68274 9.53499 5.45219 9.30444 5.16779 9.30444Z" // className="secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.9517 5.69983H1.04827C0.763873 5.69983 0.533325 5.93038 0.533325 6.21477V7.24466C0.533325 7.52905 0.763873 7.7596 1.04827 7.7596H14.9517C15.2361 7.7596 15.4667 7.52905 15.4667 7.24466V6.21477C15.4667 5.93038 15.2361 5.69983 14.9517 5.69983Z" // className="secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3.41056 5.92123L5.75999 0.406197C5.79589 0.328769 5.84684 0.259255 5.90987 0.2017C5.97289 0.144145 6.04673 0.0996991 6.12709 0.0709474C6.20745 0.0421958 6.29273 0.029713 6.37796 0.0342255C6.46319 0.038738 6.54667 0.0601555 6.62355 0.097232V0.097232C6.76166 0.157324 6.87067 0.269214 6.92715 0.408842C6.98363 0.548471 6.98306 0.704687 6.92556 0.843899L4.57562 6.35893C4.53971 6.43636 4.48876 6.50588 4.42574 6.56343C4.36272 6.62098 4.28888 6.66543 4.20851 6.69418C4.12815 6.72293 4.04288 6.73542 3.95765 6.73091C3.87242 6.72639 3.78894 6.70498 3.71206 6.6679V6.6679C3.57404 6.60771 3.46514 6.49578 3.40876 6.35616C3.35239 6.21654 3.35303 6.06038 3.41056 5.92123V5.92123ZM12.5894 5.92123L10.24 0.406197C10.2041 0.328769 10.1531 0.259255 10.0901 0.2017C10.0271 0.144145 9.95324 0.0996991 9.87288 0.0709474C9.79252 0.0421958 9.70725 0.029713 9.62202 0.0342255C9.53679 0.038738 9.4533 0.0601555 9.37643 0.097232V0.097232C9.23832 0.157324 9.1293 0.269214 9.07282 0.408842C9.01635 0.548471 9.01692 0.704687 9.07441 0.843899L11.4244 6.35893C11.4603 6.43636 11.5112 6.50588 11.5742 6.56343C11.6373 6.62098 11.7111 6.66543 11.7915 6.69418C11.8718 6.72293 11.9571 6.73542 12.0423 6.73091C12.1276 6.72639 12.211 6.70498 12.2879 6.6679C12.4259 6.60771 12.5348 6.49578 12.5912 6.35616C12.6476 6.21654 12.6469 6.06038 12.5894 5.92123V5.92123Z" // className="secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Ecommerce = (Ecommerce);

;// CONCATENATED MODULE: ./src/components/icons/duotone/ElementHub.jsx


const ElementHub = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.12733 6.39722H14.1837C14.8726 6.39722 15.4271 6.95142 15.4271 7.63983V9.27052C15.4271 9.95893 14.8726 10.5131 14.1837 10.5131H7.12733C6.43847 10.5131 5.88391 9.95893 5.88391 9.27052V7.63983C5.88391 6.95142 6.43847 6.39722 7.12733 6.39722V6.39722Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.55321 10.4986C2.28277 10.4986 2.01497 10.4454 1.76511 10.3419C1.51525 10.2385 1.28822 10.0869 1.09699 9.8958C0.905757 9.70469 0.754062 9.47781 0.650567 9.22811C0.547072 8.97841 0.493804 8.71079 0.493805 8.44052C0.493805 7.89468 0.710778 7.37121 1.09699 6.98524C1.48321 6.59928 2.00703 6.38245 2.55321 6.38245C2.82366 6.38245 3.09146 6.43568 3.34132 6.53911C3.59118 6.64253 3.81821 6.79413 4.00944 6.98524C4.20067 7.17635 4.35237 7.40323 4.45586 7.65293C4.55936 7.90262 4.61263 8.17025 4.61263 8.44052C4.61263 8.71079 4.55936 8.97841 4.45587 9.22811C4.35237 9.47781 4.20068 9.70469 4.00944 9.8958C3.81821 10.0869 3.59118 10.2385 3.34132 10.3419C3.09146 10.4454 2.82366 10.4986 2.55321 10.4986V10.4986Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.12733 11.8025H14.1837C14.8726 11.8025 15.4271 12.3567 15.4271 13.0451V14.6758C15.4271 15.3642 14.8726 15.9184 14.1837 15.9184H7.12733C6.43847 15.9184 5.88391 15.3642 5.88391 14.6758V13.0451C5.88391 12.3567 6.43847 11.8025 7.12733 11.8025Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.55321 15.904C2.00703 15.904 1.48321 15.6872 1.09699 15.3012C0.710778 14.9152 0.493805 14.3917 0.493805 13.8459C0.493805 13.3001 0.710778 12.7766 1.09699 12.3906C1.48321 12.0047 2.00703 11.7878 2.55321 11.7878C2.82366 11.7878 3.09146 11.8411 3.34132 11.9445C3.59118 12.0479 3.81821 12.1995 4.00944 12.3906C4.20067 12.5817 4.35237 12.8086 4.45586 13.0583C4.55936 13.308 4.61263 13.5756 4.61263 13.8459C4.61263 14.1162 4.55936 14.3838 4.45586 14.6335C4.35237 14.8832 4.20067 15.1101 4.00944 15.3012C3.81821 15.4923 3.59118 15.6439 3.34132 15.7473C3.09146 15.8508 2.82366 15.904 2.55321 15.904Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.12733 0.999878H14.1837C14.8726 0.999878 15.4271 1.55408 15.4271 2.24249V3.87318C15.4271 4.56159 14.8726 5.11579 14.1837 5.11579H7.12733C6.43847 5.11579 5.88391 4.56159 5.88391 3.87318V2.24249C5.88391 1.55408 6.43847 0.999878 7.12733 0.999878V0.999878Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.55321 5.10125C2.00703 5.10125 1.48321 4.88442 1.09699 4.49846C0.710778 4.11249 0.493805 3.58902 0.493805 3.04318C0.493805 2.49735 0.710778 1.97387 1.09699 1.5879C1.48321 1.20194 2.00703 0.985108 2.55321 0.985107C2.82366 0.985107 3.09146 1.03834 3.34132 1.14177C3.59118 1.2452 3.81821 1.39679 4.00944 1.5879C4.20067 1.77901 4.35237 2.00589 4.45586 2.25559C4.55936 2.50529 4.61263 2.77291 4.61263 3.04318C4.61263 3.31345 4.55936 3.58107 4.45586 3.83077C4.35237 4.08047 4.20067 4.30735 4.00944 4.49846C3.81821 4.68957 3.59118 4.84117 3.34132 4.94459C3.09146 5.04802 2.82366 5.10125 2.55321 5.10125V5.10125Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_ElementHub = (ElementHub);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Invoice.jsx


const Invoice = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.91669 5.62519C2.91669 5.3158 3.17773 5.06267 3.50002 5.06267H10.5C10.8209 5.06267 11.0834 5.3158 11.0834 5.62519C11.0834 5.93457 10.8209 6.1877 10.5 6.1877H3.50002C3.17773 6.1877 2.91669 5.93457 2.91669 5.62519ZM2.91669 12.3754C2.91669 12.066 3.17773 11.8129 3.50002 11.8129H10.5C10.8209 11.8129 11.0834 12.066 11.0834 12.3754C11.0834 12.6848 10.8209 12.9379 10.5 12.9379H3.50002C3.17773 12.9379 2.91669 12.6848 2.91669 12.3754ZM10.5 8.43778C10.8209 8.43778 11.0834 8.69091 11.0834 9.0003C11.0834 9.30968 10.8209 9.56282 10.5 9.56282H3.50002C3.17773 9.56282 2.91669 9.30968 2.91669 9.0003C2.91669 8.69091 3.17773 8.43778 3.50002 8.43778H10.5Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0.509323 0.0772057C0.819948 -0.0604707 1.1849 -0.0112996 1.44448 0.203139L2.91667 1.42001L4.38958 0.203139C4.71771 -0.0677132 5.19896 -0.0677132 5.52708 0.203139L7 1.42001L8.47292 0.203139C8.80104 -0.0677132 9.28229 -0.0677132 9.61042 0.203139L11.0833 1.42001L12.5562 0.203139C12.8151 -0.0112996 13.1797 -0.0604707 13.4896 0.0772057C13.7995 0.214917 14 0.514353 14 0.843778V17.1568C14 17.4873 13.7995 17.7861 13.4896 17.9232C13.1797 18.0604 12.8151 18.0111 12.5562 17.7967L11.0833 16.5802L9.61042 17.7967C9.28229 18.0674 8.80104 18.0674 8.47292 17.7967L7 16.5802L5.52708 17.7967C5.19896 18.0674 4.71771 18.0674 4.38958 17.7967L2.91667 16.5802L1.44448 17.7967C1.1849 18.0111 0.819948 18.0604 0.509323 17.9232C0.198917 17.7861 0 17.4873 0 17.1568V0.843778C0 0.514353 0.198917 0.214882 0.509323 0.0772057ZM3.5 5.06267C3.17771 5.06267 2.91667 5.3158 2.91667 5.62518C2.91667 5.93457 3.17771 6.1877 3.5 6.1877H10.5C10.8208 6.1877 11.0833 5.93457 11.0833 5.62518C11.0833 5.3158 10.8208 5.06267 10.5 5.06267H3.5ZM3.5 12.9379H10.5C10.8208 12.9379 11.0833 12.6848 11.0833 12.3754C11.0833 12.066 10.8208 11.8129 10.5 11.8129H3.5C3.17771 11.8129 2.91667 12.066 2.91667 12.3754C2.91667 12.6848 3.17771 12.9379 3.5 12.9379ZM3.5 8.43778C3.17771 8.43778 2.91667 8.69091 2.91667 9.00029C2.91667 9.30968 3.17771 9.56281 3.5 9.56281H10.5C10.8208 9.56281 11.0833 9.30968 11.0833 9.00029C11.0833 8.69091 10.8208 8.43778 10.5 8.43778H3.5Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Invoice = (Invoice);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Logout.jsx


const Logout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 15",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.4651 2.06969V12.9303C15.4911 13.452 15.1909 13.959 14.6301 14.3405C14.0694 14.7221 13.2936 14.9472 12.4723 14.9667H6.91422C6.06378 14.9667 5.24818 14.7521 4.64683 14.3702C4.04548 13.9883 3.70764 13.4704 3.70764 12.9303V8.17878H9.05194C9.33542 8.17878 9.60729 8.10726 9.80774 7.97997C10.0082 7.85267 10.1208 7.68002 10.1208 7.49999C10.1208 7.31997 10.0082 7.14731 9.80774 7.02002C9.60729 6.89272 9.33542 6.8212 9.05194 6.8212H3.70764V2.06969C3.70764 1.52961 4.04548 1.01165 4.64683 0.629762C5.24818 0.24787 6.06378 0.0333252 6.91422 0.0333252H12.4723C13.2936 0.0527935 14.0694 0.277898 14.6301 0.659459C15.1909 1.04102 15.4911 1.54802 15.4651 2.06969Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.3409 7.50015C10.3409 7.68351 10.2615 7.85936 10.1202 7.98901C9.9788 8.11867 9.78707 8.19151 9.58716 8.19151H3.11216L4.18253 9.16632C4.25318 9.23059 4.30926 9.30706 4.34753 9.39131C4.3858 9.47555 4.4055 9.56592 4.4055 9.65719C4.4055 9.74845 4.3858 9.83882 4.34753 9.92307C4.30926 10.0073 4.25318 10.0838 4.18253 10.1481C4.1121 10.2121 4.02857 10.2628 3.93673 10.2972C3.84489 10.3316 3.74655 10.3491 3.64735 10.3485C3.54814 10.3491 3.4498 10.3316 3.35796 10.2972C3.26613 10.2628 3.18259 10.2121 3.11216 10.1481L0.760359 7.99101C0.692555 7.9273 0.638806 7.85218 0.602064 7.76978C0.540909 7.65636 0.519831 7.52828 0.541761 7.40336V7.32731C0.535046 7.29534 0.535046 7.26249 0.541761 7.23052C0.578503 7.14811 0.632252 7.07299 0.700056 7.00929L3.11216 4.85225C3.2541 4.72206 3.44661 4.64893 3.64735 4.64893C3.84808 4.64893 4.04059 4.72206 4.18253 4.85225C4.32447 4.98243 4.40421 5.159 4.40421 5.34311C4.40421 5.52722 4.32447 5.70379 4.18253 5.83398L3.11216 6.80879H9.58716C9.78707 6.80879 9.9788 6.88163 10.1202 7.01129C10.2615 7.14094 10.3409 7.31679 10.3409 7.50015Z"
            })
        ]
    });
};
/* harmony default export */ const duotone_Logout = (Logout);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Order.jsx


const Order = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.77769 2.66669C9.77769 1.68475 8.98186 0.888916 7.99992 0.888916C7.01797 0.888916 6.22214 1.68475 6.22214 2.66669C5.24019 2.66669 4.44436 3.46253 4.44436 4.44447V4.88892C4.44436 5.13336 4.64325 5.33336 4.8888 5.33336H11.111C11.3555 5.33336 11.5555 5.13336 11.5555 4.88892V4.44447C11.5555 3.46253 10.7582 2.66669 9.77769 2.66669ZM7.99992 3.33336C7.63047 3.33336 7.33325 3.03475 7.33325 2.66669C7.33325 2.29836 7.63186 2.00003 7.99992 2.00003C8.36797 2.00003 8.66658 2.29836 8.66658 2.66669C8.66658 3.03475 8.36936 3.33336 7.99992 3.33336ZM5.33325 10.4445C4.96519 10.4445 4.66658 10.7431 4.66658 11.1111C4.66658 11.4792 4.96519 11.7778 5.33325 11.7778C5.7013 11.7778 5.99992 11.4792 5.99992 11.1111C5.99992 10.7431 5.70269 10.4445 5.33325 10.4445ZM5.33325 7.7778C4.96519 7.7778 4.66658 8.07642 4.66658 8.44447C4.66658 8.81253 4.96519 9.11114 5.33325 9.11114C5.7013 9.11114 5.99992 8.81392 5.99992 8.44447C5.99992 8.07503 5.70269 7.7778 5.33325 7.7778Z",
                fill: "currentColor",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 2.66669H9.77778C10.7597 2.66669 11.5556 3.46252 11.5556 4.44446V4.88891C11.5556 5.13335 11.3556 5.33335 11.1111 5.33335H4.88889C4.64333 5.33335 4.44444 5.13335 4.44444 4.88891V4.44446C4.44444 3.46252 5.24028 2.66669 6.22222 2.66669H4C3.26361 2.66669 2.66667 3.26363 2.66667 4.00002V13.7778C2.66667 14.5139 3.26361 15.1111 4 15.1111H12C12.7364 15.1111 13.3333 14.5142 13.3333 13.7778V4.00002C13.3333 3.26363 12.7361 2.66669 12 2.66669ZM5.33333 11.7778C4.96528 11.7778 4.66667 11.4792 4.66667 11.1111C4.66667 10.7431 4.96528 10.4445 5.33333 10.4445C5.70139 10.4445 6 10.7431 6 11.1111C6 11.4792 5.70278 11.7778 5.33333 11.7778ZM5.33333 9.11113C4.96528 9.11113 4.66667 8.81252 4.66667 8.44446C4.66667 8.07641 4.96528 7.7778 5.33333 7.7778C5.70139 7.7778 6 8.0778 6 8.44446C6 8.81113 5.70278 9.11113 5.33333 9.11113ZM11.1111 11.5556H7.55556C7.31111 11.5556 7.11111 11.3556 7.11111 11.1111C7.11111 10.8667 7.31111 10.6667 7.55556 10.6667H11.1111C11.3556 10.6667 11.5556 10.8667 11.5556 11.1111C11.5556 11.3556 11.3556 11.5556 11.1111 11.5556ZM11.1111 8.88891H7.55556C7.31111 8.88891 7.11111 8.68891 7.11111 8.44446C7.11111 8.20002 7.31111 8.00002 7.55556 8.00002H11.1111C11.3556 8.00002 11.5556 8.20002 11.5556 8.44446C11.5556 8.68891 11.3556 8.88891 11.1111 8.88891Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Order = (Order);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Pages.jsx


const Pages = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 20",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.625 2.25C5.625 1.00898 6.63398 -4.41041e-08 7.875 -9.83506e-08L15.75 -4.42578e-07C16.991 -4.96824e-07 18 1.00898 18 2.25L18 15.75C18 16.9928 16.991 18 15.75 18L7.875 18C6.63398 18 5.625 16.9928 5.625 15.75L5.625 2.25Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.5 2.53125L4.5 15.4687C4.5 15.9346 4.12383 16.3125 3.65625 16.3125C3.19043 16.3125 2.8125 15.9346 2.8125 15.4687L2.8125 2.53125C2.8125 2.06367 3.19043 1.6875 3.65625 1.6875C4.12383 1.6875 4.5 2.06367 4.5 2.53125ZM1.6875 4.21875L1.6875 13.7812C1.6875 14.2488 1.30957 14.625 0.84375 14.625C0.37793 14.625 -9.0206e-08 14.2488 -1.10644e-07 13.7812L-5.28635e-07 4.21875C-5.49073e-07 3.75117 0.377929 3.375 0.843749 3.375C1.30957 3.375 1.6875 3.75117 1.6875 4.21875Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Pages = (Pages);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Pricing.jsx


const Pricing = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.72986 5.23052C8.49231 5.19764 8.17975 5.09004 7.9047 4.9944L7.75154 4.94359C7.36084 4.78518 6.93263 5.00635 6.7951 5.35306C6.65758 5.69977 6.8614 6.13615 7.25113 6.26885L7.39663 6.31835C7.66187 6.40984 7.95549 6.50052 8.25273 6.56678V6.93417C8.25273 7.3302 8.58811 7.6515 9.00225 7.6515C9.4164 7.6515 9.7524 7.3302 9.7524 6.93417V6.62333C10.5422 6.45228 11.0927 5.97026 11.1933 5.25682C11.4649 3.76089 9.97776 3.35411 9.17979 3.13622L9.01429 3.08152C8.19225 2.85855 8.23914 2.76231 8.26101 2.63947C8.29715 2.43724 8.73923 2.33879 9.26777 2.41856C9.42212 2.44191 9.62316 2.49469 9.88196 2.58062C10.2736 2.70857 10.7012 2.51152 10.8359 2.13707C10.9706 1.76262 10.7637 1.35429 10.3721 1.22457C10.1344 1.14605 9.93697 1.09431 9.75256 1.05358V0.717328C9.75256 0.321303 9.41655 0 9.00241 0C8.58827 0 8.25289 0.321303 8.25289 0.717328V1.03176C7.46398 1.20242 6.91075 1.68124 6.75447 2.39498C6.5138 3.87357 8.02347 4.29799 8.59233 4.45939L8.79543 4.51543C9.785 4.78628 9.76906 4.87081 9.74374 5.01278C9.70817 5.21557 9.26746 5.31421 8.72986 5.23052Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.7597 10.0515C17.3496 9.51923 16.5676 9.40416 16.0116 9.79842L12.2702 12.4337H8.50073C8.2273 12.4337 8.02876 12.217 8.02876 11.9558C8.02876 11.6943 8.25537 11.4776 8.50073 11.4776H10.9465C11.4185 11.4776 11.9076 11.1524 11.9895 10.6819C12.0911 10.0842 11.6107 9.56469 11.0012 9.56469H5.97304C5.15726 9.56469 4.31272 9.84116 3.65634 10.3493L2.20293 11.4773L0.471967 11.4503C0.226638 11.4503 0 11.6954 0 11.9555V14.8242C0 15.0878 0.226638 15.303 0.471967 15.303H11.2897C11.9783 15.303 12.6625 15.0881 13.2182 14.6971L17.4409 11.7226C18.0504 11.3308 18.1692 10.5836 17.7597 10.0515Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Pricing = (Pricing);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Products.jsx


const Products = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 9.0049C8 7.0583 9.59259 5.47897 11.5556 5.47897C13.5185 5.47897 15.1111 7.0583 15.1111 9.0049C15.1111 10.9515 13.5185 12.5308 11.5556 12.5308C9.59259 12.5308 8 10.9515 8 9.0049ZM13.2173 8.49805C13.3728 8.34624 13.3728 8.09649 13.2173 7.94467C13.0642 7.79042 12.8123 7.79042 12.6593 7.94467L11.1605 9.43095L10.4519 8.72821C10.2988 8.57395 10.0469 8.57395 9.89383 8.72821C9.73827 8.88002 9.73827 9.12978 9.89383 9.28159L10.8815 10.261C11.0346 10.4153 11.2864 10.4153 11.4395 10.261L13.2173 8.49805Z",
                fill: "currentColor",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.14148 1.42738C2.34222 1.02924 2.75259 0.777778 3.20173 0.777778H6.02469V3.91193H0.888889L2.14148 1.42738ZM6.81482 3.91193V0.777778H9.63704C10.0864 0.777778 10.4963 1.02924 10.6988 1.42738L11.9506 3.91193H6.81482ZM11.1605 4.71261C8.94568 4.91095 7.20988 6.75716 7.20988 9.00494C7.20988 10.0456 7.58272 11.003 8.20247 11.7473H2.46914C1.5963 11.7473 0.888889 11.0446 0.888889 10.1802V4.69547H11.1605V4.71261Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Products = (Products);

;// CONCATENATED MODULE: ./src/components/icons/duotone/ProjectChart.jsx


const ProjectChart = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 15",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.25334 14.9666C5.47108 14.9666 3.76182 14.2586 2.50157 12.9984C1.24132 11.7381 0.533325 10.0289 0.533325 8.24662C0.533325 6.46437 1.24132 4.7551 2.50157 3.49486C3.76182 2.23461 5.47108 1.52661 7.25334 1.52661C7.35141 1.52656 7.44853 1.54583 7.53914 1.58333C7.62976 1.62084 7.71209 1.67583 7.78144 1.74518C7.85078 1.81453 7.90578 1.89686 7.94328 1.98748C7.98079 2.07809 8.00006 2.17521 8.00001 2.27328V7.49996H13.2267C13.3248 7.4999 13.4219 7.51918 13.5125 7.55668C13.6031 7.59418 13.6854 7.64918 13.7548 7.71853C13.8241 7.78787 13.8791 7.87021 13.9166 7.96082C13.9541 8.05144 13.9734 8.14855 13.9733 8.24662C13.9714 10.0283 13.2628 11.7364 12.003 12.9962C10.7431 14.2561 9.035 14.9647 7.25334 14.9666Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.72 6.00667H10.24C10.1419 6.00672 10.0448 5.98745 9.95418 5.94995C9.86357 5.91244 9.78123 5.85745 9.71189 5.7881C9.64254 5.71875 9.58754 5.63642 9.55004 5.5458C9.51254 5.45519 9.49326 5.35807 9.49332 5.26V0.779993C9.49326 0.681924 9.51254 0.584805 9.55004 0.49419C9.58754 0.403575 9.64254 0.32124 9.71189 0.251894C9.78123 0.182549 9.86357 0.127552 9.95418 0.090048C10.0448 0.0525443 10.1419 0.0332694 10.24 0.0333253C11.6261 0.0336816 12.9553 0.584462 13.9354 1.56458C14.9155 2.54469 15.4663 3.87391 15.4667 5.26C15.4667 5.35807 15.4474 5.45519 15.4099 5.5458C15.3724 5.63642 15.3174 5.71875 15.2481 5.7881C15.1787 5.85745 15.0964 5.91244 15.0058 5.94995C14.9152 5.98745 14.8181 6.00672 14.72 6.00667V6.00667Z"
            })
        ]
    });
};
/* harmony default export */ const duotone_ProjectChart = (ProjectChart);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Refund.jsx


const Refund = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 11.2C8 8.99165 9.79167 7.19998 12 7.19998C14.2083 7.19998 16 8.99165 16 11.2C16 13.4083 14.2083 15.2 12 15.2C9.79167 15.2 8 13.4083 8 11.2ZM11.3361 10.3694C11.3306 10.3389 11.3444 10.3139 11.3556 10.2944C11.3722 10.2694 11.4056 10.2361 11.4722 10.175C11.6139 10.125 11.8222 10.0861 11.9944 10.0889C12.1972 10.0916 12.4694 10.1389 12.725 10.2028C12.9639 10.2611 13.2056 10.0916 13.2639 9.87776C13.325 9.63887 13.1778 9.39998 12.9417 9.33887C12.7861 9.29998 12.6194 9.26387 12.4444 9.23887V8.97776C12.4444 8.73332 12.2444 8.53332 12 8.53332C11.7556 8.53332 11.5556 8.73332 11.5556 8.97776V9.24165C11.3861 9.27498 11.2139 9.33054 11.0306 9.41665C10.725 9.59165 10.4139 9.92776 10.4472 10.45C10.475 10.8944 10.7722 11.1555 11.0472 11.3028C11.2944 11.4333 11.5972 11.5194 11.8417 11.5639L11.8917 11.6028C12.175 11.6833 12.3639 11.7472 12.5333 11.8333C12.6611 11.9083 12.6417 11.9528 12.6417 11.9916C12.6694 12.0583 12.6528 12.0944 12.6139 12.1166C12.6194 12.1194 12.5889 12.1778 12.5028 12.2111C12.3972 12.2805 12.2 12.3166 12.0139 12.2861C11.725 12.3028 11.5 12.2222 11.1833 12.1222C11.1306 12.1055 11.0778 12.0889 11.0222 12.0722C10.7861 12 10.5361 12.1305 10.4639 12.3639C10.3917 12.5972 10.5222 12.8472 10.7556 12.9194C10.8028 12.9333 10.8472 12.925 10.8972 12.9639C11.0917 13.0278 11.3167 13.1 11.5556 13.1472V13.4639C11.5556 13.7111 11.7556 13.9083 12 13.9083C12.2444 13.9083 12.4444 13.7111 12.4444 13.4639V13.1639C12.6167 13.1333 12.7917 13.0778 12.9528 12.9916C13.2861 12.8083 13.5694 12.4722 13.5306 11.9639C13.5417 11.5166 13.2694 11.2361 12.9861 11.0694C12.725 10.9139 12.3944 10.8222 12.1361 10.7472H12.1333C11.8417 10.6639 11.625 10.6028 11.4694 10.5194C11.3361 10.4472 11.3361 10.4083 11.3361 10.3972V10.3694Z",
                fill: "currentColor",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.2765 0.799988C13.7125 0.799988 14.1063 1.05639 14.2919 1.45856C14.4804 1.86085 14.4213 2.33685 14.1231 2.68126L11.15 6.43256C8.89412 6.9077 7.17549 8.94937 7.17549 11.3971C7.17549 12.1861 7.37801 12.9348 7.69305 13.6C7.64523 13.577 7.60304 13.5482 7.56085 13.5165L5.76065 12.1343C5.53281 11.9615 5.40061 11.6879 5.40061 11.3971V9.11927L0.254335 2.68126C-0.0209556 2.33685 -0.0777745 1.86085 0.108406 1.45856C0.294502 1.05639 0.690265 0.799988 1.12513 0.799988H13.2765Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Refund = (Refund);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Review.jsx


const Review = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_7861_60245)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.25 4.5H4.75C4.3375 4.5 4 4.8375 4 5.25C4 5.6625 4.3375 6 4.75 6H11.25C11.6656 6 12 5.66563 12 5.25C12 4.83437 11.6656 4.5 11.25 4.5ZM8.25 7.5H4.75C4.3375 7.5 4 7.8375 4 8.25C4 8.6625 4.3375 9 4.75 9H8.25C8.66563 9 9 8.66563 9 8.25C9 7.83437 8.66563 7.5 8.25 7.5Z",
                        fill: "currentColor",
                        className: "secondary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.9719 0H1.97187C0.870312 0 -0.028125 0.898438 -0.028125 1.97188V10.9438C-0.028125 12.0453 0.870312 12.9156 1.97187 12.9156H4.97187V15.5125C4.97187 15.8172 5.32344 15.9953 5.56937 15.8156L9.4725 12.8875H13.9725C15.0741 12.8875 15.9725 11.9891 15.9725 10.9156V1.97188C15.9719 0.898438 15.1 0 13.9719 0ZM8.25 9H4.75C4.3375 9 4 8.66563 4 8.25C4 7.83438 4.3375 7.5 4.75 7.5H8.25C8.66562 7.5 9 7.8375 9 8.25C9 8.6625 8.66562 9 8.25 9ZM11.25 6H4.75C4.3375 6 4 5.66563 4 5.25C4 4.83438 4.3375 4.5 4.75 4.5H11.25C11.6656 4.5 12 4.8375 12 5.25C12 5.6625 11.6656 6 11.25 6Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_7861_60245",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "currentColor"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const duotone_Review = (Review);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Seller.jsx


const Seller = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.9749 1.16927L15.5665 3.71936C16.3915 5.03843 15.661 6.86936 14.1193 7.07749C14.011 7.09155 13.8999 7.09999 13.7832 7.09999C13.061 7.09999 12.4165 6.77936 11.9748 6.28436C11.5332 6.77936 10.8887 7.09999 10.1637 7.09999C9.43873 7.09999 8.79429 6.77936 8.35262 6.28436C7.91095 6.77936 7.26929 7.09999 6.54151 7.09999C5.81928 7.09999 5.17484 6.77936 4.73317 6.28436C4.2915 6.77936 3.64706 7.09999 2.92095 7.09999C2.80817 7.09999 2.69456 7.09155 2.58428 7.07749C1.04761 6.86936 0.320527 5.03561 1.14233 3.71936L2.73484 1.16927C2.8765 0.940022 3.12956 0.799988 3.39984 0.799988H13.311C13.5804 0.799988 13.8332 0.939994 13.9749 1.16927Z",
                fill: "currentColor",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.58404 7.07748C2.69459 7.09154 2.8082 7.09998 2.92098 7.09998C3.27487 7.09998 3.61098 7.02404 3.91098 6.88904V11.6H12.7999V6.88904C13.0999 7.02404 13.4332 7.09998 13.7832 7.09998C13.8999 7.09998 14.011 7.09154 14.1193 7.07748C14.2832 7.05498 14.436 7.0156 14.5776 6.96216V13.4C14.5776 14.3928 13.7804 15.2 12.7999 15.2H3.91098C2.92904 15.2 2.1332 14.3928 2.1332 13.4V6.96216C2.27431 7.0156 2.42487 7.05498 2.58431 7.07748H2.58404Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Seller = (Seller);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Session.jsx


const Session = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.1184 8.49023L7.05234 13.2715C6.80713 13.5027 6.44766 13.5659 6.13828 13.433C5.82891 13.2996 5.62852 12.9937 5.62852 12.6562V10.125H1.1257C0.503789 10.125 0 9.62226 0 9V6.75C0 6.12879 0.503789 5.625 1.1257 5.625H5.62922V3.09375C5.62922 2.75703 5.82986 2.45215 6.13934 2.31856C6.44882 2.18563 6.80836 2.24881 7.0534 2.48006L12.1194 7.26131C12.4559 7.57969 12.4559 8.17031 12.1184 8.49023Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.625 0H12.375C11.7538 0 11.25 0.503789 11.25 1.125C11.25 1.74621 11.7538 2.25 12.375 2.25H14.625C15.2462 2.25 15.75 2.75379 15.75 3.375V12.375C15.75 12.9962 15.2462 13.5 14.625 13.5H12.375C11.7538 13.5 11.25 14.0038 11.25 14.625C11.25 15.2462 11.7538 15.75 12.375 15.75H14.625C16.489 15.75 18 14.239 18 12.375V3.375C18 1.51102 16.4883 0 14.625 0Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_Session = (Session);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Settings.jsx


const Settings = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 15",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.2063 8.65732L14.2531 8.09733C14.295 7.70025 14.295 7.29974 14.2531 6.90266L15.2063 6.34266C15.2658 6.30737 15.318 6.26046 15.3597 6.2046C15.4014 6.14875 15.4319 6.08506 15.4495 6.01718C15.467 5.9493 15.4712 5.87857 15.4618 5.80904C15.4524 5.73951 15.4296 5.67254 15.3948 5.61199L13.2999 1.92133C13.2309 1.79933 13.1172 1.71012 12.9838 1.67315C12.8503 1.63618 12.708 1.65446 12.5877 1.72399L11.6345 2.25733C11.3138 2.03579 10.9737 1.84476 10.6185 1.68666V0.566658C10.6185 0.42521 10.5634 0.289554 10.4652 0.189535C10.3669 0.0895155 10.2337 0.0333252 10.0948 0.0333252H5.90515C5.76625 0.0333252 5.63304 0.0895155 5.53483 0.189535C5.43661 0.289554 5.38144 0.42521 5.38144 0.566658V1.68666C5.02532 1.85327 4.68519 2.05324 4.36544 2.28399L3.41228 1.75066C3.29203 1.68113 3.14965 1.66285 3.01622 1.69982C2.88278 1.73679 2.76912 1.826 2.70003 1.94799L0.60519 5.63866C0.570346 5.69921 0.547581 5.76617 0.5382 5.8357C0.528819 5.90523 0.533006 5.97597 0.550521 6.04385C0.568036 6.11173 0.598535 6.17542 0.640269 6.23127C0.682004 6.28712 0.734152 6.33404 0.793726 6.36932L1.74688 6.92932C1.70497 7.3264 1.70497 7.72691 1.74688 8.12399L0.793726 8.65732C0.734152 8.69261 0.682004 8.73953 0.640269 8.79538C0.598535 8.85123 0.568036 8.91492 0.550521 8.9828C0.533006 9.05068 0.528819 9.12142 0.5382 9.19095C0.547581 9.26048 0.570346 9.32744 0.60519 9.38799L2.70003 13.0787C2.76912 13.2006 2.88278 13.2899 3.01622 13.3268C3.14965 13.3638 3.29203 13.3455 3.41228 13.276L4.36544 12.7427C4.68621 12.9642 5.02631 13.1552 5.38144 13.3133V14.4333C5.38144 14.5748 5.43661 14.7104 5.53483 14.8104C5.63304 14.9105 5.76625 14.9667 5.90515 14.9667H10.0948C10.2337 14.9667 10.3669 14.9105 10.4652 14.8104C10.5634 14.7104 10.6185 14.5748 10.6185 14.4333V13.3133C10.9747 13.1467 11.3148 12.9467 11.6345 12.716L12.5877 13.2493C12.708 13.3189 12.8503 13.3371 12.9838 13.3002C13.1172 13.2632 13.2309 13.174 13.2999 13.052L15.3948 9.36132C15.4571 9.24155 15.4723 9.10211 15.4373 8.97135C15.4022 8.84059 15.3196 8.7283 15.2063 8.65732V8.65732Z",
                className: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 10C9.38071 10 10.5 8.88071 10.5 7.5C10.5 6.11929 9.38071 5 8 5C6.61929 5 5.5 6.11929 5.5 7.5C5.5 8.88071 6.61929 10 8 10Z"
            })
        ]
    });
};
/* harmony default export */ const duotone_Settings = (Settings);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Shirt.jsx


const Shirt = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 640 512",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M209.6 16h32C249.1 52.47 281.4 80 320 80s70.95-27.53 78.38-64h32C422.5 70.13 376.3 112 320 112S217.5 70.13 209.6 16z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "secondary",
                d: "M640 162.8c0 6.917-2.293 13.88-7.012 19.7l-49.96 61.63c-6.32 7.796-15.62 11.85-25.01 11.85c-7.01 0-14.07-2.262-19.97-6.919L480 203.3V464c0 26.51-21.49 48-48 48H208C181.5 512 160 490.5 160 464V203.3L101.1 249.1C96.05 253.7 88.99 255.1 81.98 255.1c-9.388 0-18.69-4.057-25.01-11.85L7.012 182.5C2.292 176.7-.0003 169.7-.0003 162.8c0-9.262 4.111-18.44 12.01-24.68l135-106.6C159.8 21.49 175.7 16 191.1 16h17.62C217.5 70.13 263.7 112 320 112s102.5-41.87 110.4-96h17.6c16.35 0 32.22 5.49 44.99 15.57l135 106.6C635.9 144.4 640 153.6 640 162.8z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const duotone_Shirt = (Shirt);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Shoe.jsx


const Shoe = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 640 512",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M128 95.1c0 35.37 28.62 63.1 64 63.1L224 159.1V32L192 32C156.6 32 128 60.62 128 95.1zM491.4 7.252c-31.88-6.875-64.88-8.625-97.5-6.25C366.5 2.877 339.8 8.752 313.5 16L256 32V159.1c60.25 0 80 15.62 104.8 31.1c28.5 18.87 69.75 31.1 104.8 31.1C555.9 223.1 640 191.1 640 127.1C640 82.75 600.9 30.75 491.4 7.252z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                className: "secondary",
                d: "M0 415.1c0 35.37 28.62 64.01 64 64.01l32-.0103v-127.1l-32-.0005C28.62 351.1 0 380.6 0 415.1zM337.5 287.1c-35 0-76.25 13.12-104.8 31.1C208 336.4 188.3 351.1 128 351.1v128l57.5 15.98c26.25 7.25 53 13.13 80.38 15.01c32.63 2.375 65.63 .743 97.5-6.132C472.9 481.2 512 429.2 512 383.1C512 319.1 427.9 287.1 337.5 287.1z"
            })
        ]
    });
};
/* harmony default export */ const duotone_Shoe = (Shoe);

;// CONCATENATED MODULE: ./src/components/icons/duotone/SiteSetting.jsx


const SiteSetting = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14.3713 6.84025L12.8418 6.46412C12.7499 6.17418 12.6316 5.89302 12.4889 5.62408C12.7186 5.24182 13.2012 4.43727 13.2012 4.43727C13.2935 4.28354 13.2691 4.08668 13.1424 3.96004L12.0376 2.85524C11.911 2.72821 11.7145 2.7038 11.5604 2.79649L10.3717 3.50874C10.1042 3.3672 9.8246 3.25008 9.53659 3.1589L9.16045 1.62943C9.11694 1.45546 8.96091 1.33337 8.78161 1.33337H7.21903C7.03973 1.33337 6.88331 1.45546 6.84021 1.6294C6.84021 1.6294 6.57965 2.6969 6.46444 3.15851C6.15734 3.25578 5.86055 3.38207 5.57786 3.53619L4.34527 2.79649C4.19115 2.70492 3.99507 2.7286 3.86804 2.85524L2.76324 3.96004C2.6366 4.08668 2.61217 4.28354 2.70449 4.43727L3.46671 5.7103C3.34387 5.95256 3.24087 6.2047 3.15886 6.46297L1.62939 6.84025C1.45542 6.88375 1.33333 7.03977 1.33333 7.21908V8.78165C1.33333 8.96096 1.45542 9.11737 1.62936 9.16047L3.15923 9.53661C3.25194 9.83074 3.37246 10.1165 3.51859 10.3908L2.8365 11.5276C2.74418 11.6813 2.76861 11.8782 2.89525 12.0048L4.00005 13.1096C4.12633 13.2359 4.32316 13.2599 4.47728 13.1684C4.47728 13.1684 5.24217 12.7098 5.61679 12.4855C5.88803 12.6301 6.17185 12.7495 6.46446 12.8422L6.84024 14.3713C6.88331 14.5453 7.03973 14.6674 7.21903 14.6674H8.78161C8.96091 14.6674 9.11694 14.5453 9.16043 14.3713L9.5362 12.8422C9.83721 12.7468 10.1271 12.6236 10.4029 12.4741C10.7879 12.7049 11.5604 13.1684 11.5604 13.1684C11.7141 13.2603 11.911 13.2367 12.0376 13.1096L13.1424 12.0048C13.269 11.8782 13.2935 11.6813 13.2011 11.5276L12.4988 10.3576C12.6373 10.0947 12.7521 9.81967 12.8418 9.53661L14.3713 9.16047C14.5452 9.11698 14.6673 8.96096 14.6673 8.78165V7.21908C14.6673 7.03977 14.5452 6.88375 14.3713 6.84025ZM8.00032 10.7349C6.49267 10.7349 5.26581 9.50801 5.26581 8.00036C5.26581 6.49271 6.49267 5.26586 8.00032 5.26586C9.50797 5.26586 10.7348 6.49271 10.7348 8.00036C10.7348 9.50801 9.50797 10.7349 8.00032 10.7349Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const duotone_SiteSetting = (SiteSetting);

;// CONCATENATED MODULE: ./src/components/icons/duotone/TodoList.jsx


const TodoList = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 20 18",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.87719 4.22238C2.72215 4.39113 2.50348 4.49308 2.27215 4.46847C2.04082 4.50714 1.81723 4.41574 1.6534 4.22238L0.247113 2.81613C-0.0823711 2.5173 -0.0823711 1.98293 0.247113 1.65351C0.576563 1.3241 1.11094 1.3241 1.44035 1.65351L2.21766 2.42941L4.15547 0.279257C4.46484 -0.0670321 4.99922 -0.095157 5.34727 0.216679C5.6918 0.528514 5.71992 1.06183 5.40703 1.40847L2.87719 4.22238ZM2.87719 9.84737C2.72215 10.0161 2.50348 10.1181 2.27215 10.0935C2.04082 10.1321 1.81723 10.0407 1.6534 9.84737L0.247113 8.44112C-0.0823711 8.1423 -0.0823711 7.60792 0.247113 7.27745C0.576563 6.9505 1.11094 6.9505 1.44035 7.27745L2.21766 8.05441L4.15547 5.90285C4.46484 5.55831 4.99922 5.53019 5.34727 5.84308C5.6918 6.15245 5.71992 6.68683 5.40703 7.03488L2.87719 9.84737ZM0 13.5001C0 12.5685 0.755508 11.8126 1.6875 11.8126C2.61949 11.8126 3.375 12.5685 3.375 13.5001C3.375 14.4317 2.61949 15.1876 1.6875 15.1876C0.755508 15.1876 0 14.4317 0 13.5001Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.75 12.3751H16.875C17.4973 12.3751 18 12.8778 18 13.5001C18 14.1224 17.4973 14.6251 16.875 14.6251H6.75C6.12773 14.6251 5.625 14.1224 5.625 13.5001C5.625 12.8778 6.12773 12.3751 6.75 12.3751ZM9 6.75011H16.875C17.4973 6.75011 18 7.25284 18 7.87511C18 8.49737 17.4973 9.00011 16.875 9.00011H9C8.37773 9.00011 7.875 8.49737 7.875 7.87511C7.875 7.25284 8.37773 6.75011 9 6.75011ZM9 3.37511C8.37773 3.37511 7.875 2.87237 7.875 2.25011C7.875 1.6289 8.37773 1.12511 9 1.12511H16.875C17.4973 1.12511 18 1.6289 18 2.25011C18 2.87237 17.4973 3.37511 16.875 3.37511H9Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_TodoList = (TodoList);

;// CONCATENATED MODULE: ./src/components/icons/duotone/UserProfile.jsx


const UserProfile = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 16 17",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 7.49999C10.0619 7.49999 11.7333 5.82852 11.7333 3.76666C11.7333 1.7048 10.0619 0.0333252 8 0.0333252C5.93813 0.0333252 4.26666 1.7048 4.26666 3.76666C4.26666 5.82852 5.93813 7.49999 8 7.49999Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0.533325 12.7266V13.4733C0.533325 14.2981 1.2762 14.9666 2.19258 14.9666H13.8074C14.7238 14.9666 15.4667 14.2981 15.4667 13.4733V12.7266C15.4667 10.6648 13.6094 8.99329 11.3185 8.99329H4.68147C2.39052 8.99329 0.533325 10.6648 0.533325 12.7266Z",
                className: "secondary"
            })
        ]
    });
};
/* harmony default export */ const duotone_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./src/components/icons/duotone/UserTie.jsx


const UserTie = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 448 512",
        sx: {
            "& .secondary": {
                opacity: 0.4
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M272 304L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2L176 304L272 304z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "secondary",
                fill: "currentColor",
                d: "M96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128z"
            })
        ]
    });
};
/* harmony default export */ const duotone_UserTie = (UserTie);

;// CONCATENATED MODULE: ./src/components/icons/duotone/Vest.jsx


const Vest = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        viewBox: "0 0 448 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M437.3 239.9L384 160V32c0-17.67-14.33-32-32-32h-32l-96 288v224h192c17.67 0 32-14.33 32-32V275.4C448 262.7 444.3 250.4 437.3 239.9zM387.3 419.3C384.2 422.4 380.1 424 376 424s-8.188-1.562-11.31-4.688l-48-48c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l48 48C393.6 402.9 393.6 413.1 387.3 419.3zM96 0C78.33 0 64 14.33 64 32v128L10.75 239.9C3.74 250.4 0 262.7 0 275.4V480c0 17.67 14.33 32 32 32h160V282.8l15.13-45.4L128 0H96zM131.3 371.3l-48 48C80.19 422.4 76.09 424 72 424s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l48-48c6.25-6.25 16.38-6.25 22.62 0S137.6 365.1 131.3 371.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "secondary",
                d: "M306.7 4.031l-25 16.66c-35.03 23.38-80.28 23.38-115.4 0l-25-16.66C137.4 1.406 132.8 0 128 0l22.19 66.56C173.2 79.43 198.5 86.25 224 86.25s50.79-6.824 73.81-19.69L320 0C315.3 0 310.6 1.406 306.7 4.031zM108.7 348.7l-48 48c-6.25 6.25-6.25 16.38 0 22.62C63.81 422.4 67.91 424 72 424s8.188-1.562 11.31-4.688l48-48c6.25-6.25 6.25-16.38 0-22.62S114.9 342.4 108.7 348.7zM387.3 396.7l-48-48c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l48 48C367.8 422.4 371.9 424 376 424s8.188-1.562 11.31-4.688C393.6 413.1 393.6 402.9 387.3 396.7z"
            })
        ]
    });
};
/* harmony default export */ const duotone_Vest = (Vest);

;// CONCATENATED MODULE: ./src/components/icons/duotone/index.js




























 // eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const duotone = ({
    AdminEcommerce: duotone_AdminEcommerce,
    Dashboard: duotone_Dashboard,
    Ecommerce: duotone_Ecommerce,
    ElementHub: duotone_ElementHub,
    Logout: duotone_Logout,
    ProjectChart: duotone_ProjectChart,
    Settings: duotone_Settings,
    UserProfile: duotone_UserProfile,
    TableList: duotone_DataTable,
    Accounts: duotone_Accounts,
    Calender: Calender,
    Chat: Chat,
    Invoice: duotone_Invoice,
    TodoList: duotone_TodoList,
    Session: duotone_Session,
    Pages: duotone_Pages,
    Pricing: duotone_Pricing,
    DataTable: duotone_DataTable,
    Products: duotone_Products,
    Customers: duotone_Customers,
    Refund: duotone_Refund,
    Seller: duotone_Seller,
    Order: duotone_Order,
    AccountSetting: duotone_AccountSetting,
    SiteSetting: duotone_SiteSetting,
    Review: duotone_Review,
    Shirt: duotone_Shirt,
    Shoe: duotone_Shoe,
    UserTie: duotone_UserTie,
    Vest: duotone_Vest
});

;// CONCATENATED MODULE: ./src/data/categoriesMegaMenu.js

const categoriesMegaMenu = [
    {
        title: "Fashion",
        child: [
            {
                title: "Men's Fashion",
                child: [
                    {
                        title: "T-Shirt",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Formal Shirt",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Shirt",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Shoes",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Jeans Pant",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Gabardin Pant",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Formal Pant",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Sunglass",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Formal Shoes",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Lungi",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Tunk",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Jacket",
                        url: "#",
                        Icon: duotone.Vest
                    }, 
                ]
            },
            {
                title: "Women's Fashion",
                child: [
                    {
                        title: "Clothing",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Shoes",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Jewelry",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Watches",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Hand Bags",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Accessories",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Makeup",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Clothing",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Shoes",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Jewelry",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Watches",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Hand Bags",
                        url: "#",
                        Icon: duotone.Shirt
                    }, 
                ]
            },
            {
                title: "Girls' Fashion",
                child: [
                    {
                        title: "Clothing",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Shoes",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Jewelry",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Watches",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Hand Bags",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Gadget",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Clothing",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Watches",
                        url: "#",
                        Icon: duotone.UserTie
                    },
                    {
                        title: "Shoes",
                        url: "#",
                        Icon: duotone.Shoe
                    },
                    {
                        title: "Gadget",
                        url: "#",
                        Icon: duotone.Shirt
                    },
                    {
                        title: "Jewelry",
                        url: "#",
                        Icon: duotone.Vest
                    },
                    {
                        title: "Hand Bags",
                        url: "#",
                        Icon: duotone.Shirt
                    }, 
                ]
            }, 
        ]
    },
    {
        title: "Electronics",
        child: [
            {
                title: "Accessories & Supplies",
                child: [
                    {
                        title: "Audio & Video Accessories",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Cables",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Microphones",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Cord Management",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Power Protection",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Cell Phone Accessories",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    }, 
                ]
            },
            {
                title: "Power Accessories",
                child: [
                    {
                        title: "AC Adapters",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Isolation Transformers",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Line Conditioners",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "PDUs",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Power Converters",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    }, 
                ]
            },
            {
                title: "Video Game Consoles & Accessories",
                child: [
                    {
                        title: "PlayStation 4",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "PlayStation 3",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Xbox One",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Nintendo Switch",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    },
                    {
                        title: "Sony PSP",
                        url: "#",
                        img: "/assets/images/products/t-shirt7.png"
                    }, 
                ]
            }, 
        ]
    },
    {
        title: "Books",
        child: [
            {
                title: "Arts & Photography",
                child: [
                    {
                        title: "Architecture",
                        url: "#"
                    },
                    {
                        title: "Business of Art",
                        url: "#"
                    },
                    {
                        title: "History & Criticism",
                        url: "#"
                    },
                    {
                        title: "Individual Artists",
                        url: "#"
                    },
                    {
                        title: "Photography & Video",
                        url: "#"
                    },
                    {
                        title: "Study & Teaching",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Biographies & Memoirs",
                child: [
                    {
                        title: "Arts & Literature",
                        url: "#"
                    },
                    {
                        title: "Leaders & Notable People",
                        url: "#"
                    },
                    {
                        title: "Professionals & Academics",
                        url: "#"
                    },
                    {
                        title: "Sports & Outdoors",
                        url: "#"
                    },
                    {
                        title: "True Crime",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Children's Books",
                child: [
                    {
                        title: "Action & Adventure",
                        url: "#"
                    },
                    {
                        title: "Animals",
                        url: "#"
                    },
                    {
                        title: "Biographies",
                        url: "#"
                    },
                    {
                        title: "Geography & Cultures",
                        url: "#"
                    },
                    {
                        title: "Holidays & Celebrations",
                        url: "#"
                    }, 
                ]
            }, 
        ]
    },
    {
        title: "Sports and Outdoors",
        child: [
            {
                title: "Outdoor Recreation",
                child: [
                    {
                        title: "Accessories",
                        url: "#"
                    },
                    {
                        title: "Camping & Hiking",
                        url: "#"
                    },
                    {
                        title: "Climbing",
                        url: "#"
                    },
                    {
                        title: "Cycling",
                        url: "#"
                    },
                    {
                        title: "Paintball",
                        url: "#"
                    },
                    {
                        title: "Water Sports",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Exercise & Fitness",
                child: [
                    {
                        title: "Balance Trainers",
                        url: "#"
                    },
                    {
                        title: "Cardio Training",
                        url: "#"
                    },
                    {
                        title: "Fitness Technology",
                        url: "#"
                    },
                    {
                        title: "Footwear",
                        url: "#"
                    },
                    {
                        title: "Running",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Sports Medicine",
                child: [
                    {
                        title: "Athletic Tape & Supplies",
                        url: "#"
                    },
                    {
                        title: "First Aid Kits",
                        url: "#"
                    },
                    {
                        title: "Padding Supplies",
                        url: "#"
                    },
                    {
                        title: "Mouthguards",
                        url: "#"
                    }, 
                ]
            }, 
        ]
    },
    {
        title: "Software",
        child: [
            {
                title: "Accounting & Finance",
                child: [
                    {
                        title: "Business Accounting",
                        url: "#"
                    },
                    {
                        title: "Check Printing",
                        url: "#"
                    },
                    {
                        title: "Personal Finance",
                        url: "#"
                    },
                    {
                        title: "Tax Preparation",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Antivirus & Security",
                child: [
                    {
                        title: "Antivirus",
                        url: "#"
                    },
                    {
                        title: "Internet Security Suites",
                        url: "#"
                    },
                    {
                        title: "Parental Control",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Business & Office",
                child: [
                    {
                        title: "Communication",
                        url: "#"
                    },
                    {
                        title: "Contact Management",
                        url: "#"
                    },
                    {
                        title: "Database Management",
                        url: "#"
                    },
                    {
                        title: "Document Management",
                        url: "#"
                    },
                    {
                        title: "Office Suites",
                        url: "#"
                    }, 
                ]
            }, 
        ]
    },
    {
        title: "Toys and Games",
        child: [
            {
                title: "Arts & Crafts",
                child: [
                    {
                        title: "Adhesives",
                        url: "#"
                    },
                    {
                        title: "Aprons & Smocks",
                        url: "#"
                    },
                    {
                        title: "Clay & Dough",
                        url: "#"
                    },
                    {
                        title: "Craft Kits",
                        url: "#"
                    }, 
                ]
            },
            {
                title: "Baby & Toddler Toys",
                child: [
                    {
                        title: "Activity Centers",
                        url: "#"
                    },
                    {
                        title: "Balls",
                        url: "#"
                    },
                    {
                        title: "Bath Toys",
                        url: "#"
                    },
                    {
                        title: "Car Seat & Stroller Toys",
                        url: "#"
                    }, 
                ]
            }, 
        ]
    }, 
];
/* harmony default export */ const data_categoriesMegaMenu = (categoriesMegaMenu);

;// CONCATENATED MODULE: ./src/data/navbarNavigations.js

const megaMenus = [
    [
        {
            title: "Home",
            child: [
                {
                    title: "Market 1",
                    url: "/market-1"
                },
                {
                    title: "Furniture",
                    url: "/furniture-shop"
                },
                {
                    title: "Grocery-v1",
                    url: "/grocery1"
                },
                {
                    title: "Grocery-v2",
                    url: "/grocery2"
                },
                {
                    title: "Grocery-v3",
                    url: "/grocery3"
                },
                {
                    title: "Health and Beauty",
                    url: "/healthbeauty-shop"
                },
                {
                    title: "Fashion",
                    url: "/fashion-shop"
                },
                {
                    title: "Gift Store",
                    url: "/gift-shop"
                },
                {
                    title: "Gadget",
                    url: "/gadget-shop"
                }, 
            ]
        }, 
    ],
    [
        {
            title: "User Account",
            child: [
                {
                    title: "Order List",
                    url: "/orders"
                },
                {
                    title: "Order Details",
                    url: "/orders/5452423"
                },
                {
                    title: "View Profile",
                    url: "/profile"
                },
                {
                    title: "Edit Profile",
                    url: "/profile/edit"
                },
                {
                    title: "Address List",
                    url: "/address"
                },
                {
                    title: "Add Address",
                    url: "/address/512474"
                },
                {
                    title: "All tickets",
                    url: "/support-tickets"
                },
                {
                    title: "Ticket details",
                    url: "/support-tickets/512474"
                },
                {
                    title: "Wishlist",
                    url: "/wish-list"
                }, 
            ]
        }, 
    ],
    [
        {
            title: "Vendor Account",
            child: [
                {
                    title: "Dashboard",
                    url: "/vendor/dashboard"
                },
                {
                    title: "Profile",
                    url: "/vendor/account-setting"
                }, 
            ]
        },
        {
            title: "Products",
            child: [
                {
                    title: "All products",
                    url: "/admin/products"
                },
                {
                    title: "Add/Edit product",
                    url: "/admin/products/248104"
                }, 
            ]
        },
        {
            title: "Orders",
            child: [
                {
                    title: "All orders",
                    url: "/admin/orders"
                },
                {
                    title: "Order details",
                    url: "/admin/orders/248104"
                }, 
            ]
        }, 
    ],
    [
        {
            title: "Sale Page",
            child: [
                {
                    title: "Sales Version 1",
                    url: "/sale-page-1"
                },
                {
                    title: "Sales Version 2",
                    url: "/sale-page-2"
                }, 
            ]
        },
        {
            title: "Shop",
            child: [
                {
                    title: "Search product",
                    url: "/product/search/mobile phone"
                },
                {
                    title: "Single product",
                    url: "/product/34324321"
                },
                {
                    title: "Cart",
                    url: "/cart"
                },
                {
                    title: "Checkout",
                    url: "/checkout"
                },
                {
                    title: "Alternative Checkout",
                    url: "/checkout-alternative"
                },
                {
                    title: "Order confirmation",
                    url: "/order-confirmation"
                }, 
            ]
        }, 
    ], 
];
const navbarNavigations_navbarNavigations = [
    {
        title: "Home",
        megaMenu: false,
        megaMenuWithSub: false,
        child: [
            {
                title: "Market 1",
                url: "/market-1"
            },
            {
                title: "Furniture",
                url: "/furniture-shop"
            },
            {
                title: "Grocery-v1",
                url: "/grocery1"
            },
            {
                title: "Grocery-v2",
                url: "/grocery2"
            },
            {
                title: "Grocery-v3",
                url: "/grocery3"
            },
            {
                title: "Health and Beauty",
                url: "/healthbeauty-shop"
            },
            {
                title: "Fashion",
                url: "/fashion-shop"
            },
            {
                title: "Gift Store",
                url: "/gift-shop"
            },
            {
                title: "Gadget",
                url: "/gadget-shop"
            }, 
        ]
    },
    {
        megaMenu: true,
        megaMenuWithSub: false,
        title: "Mega Menu",
        child: megaMenus
    },
    {
        megaMenu: false,
        megaMenuWithSub: true,
        title: "Full Screen Menu",
        child: data_categoriesMegaMenu
    },
    {
        megaMenu: false,
        megaMenuWithSub: false,
        title: "Pages",
        child: [
            {
                title: "Sale Page",
                child: [
                    {
                        title: "Version 1",
                        url: "/sale-page-1"
                    },
                    {
                        title: "Version 2",
                        url: "/sale-page-2"
                    }, 
                ]
            },
            {
                title: "Vendor",
                child: [
                    {
                        title: "All vendors",
                        url: "/shops"
                    },
                    {
                        title: "Vendor store",
                        url: "/shops/34324"
                    }, 
                ]
            },
            {
                title: "Shop",
                child: [
                    {
                        title: "Search product",
                        url: "/product/search/mobile phone"
                    },
                    {
                        title: "Single product",
                        url: "/product/34324321"
                    },
                    {
                        title: "Cart",
                        url: "/cart"
                    },
                    {
                        title: "Checkout",
                        url: "/checkout"
                    },
                    {
                        title: "Alternative Checkout",
                        url: "/checkout-alternative"
                    },
                    {
                        title: "Order confirmation",
                        url: "/order-confirmation"
                    }, 
                ]
            }, 
        ]
    },
    {
        megaMenu: false,
        megaMenuWithSub: false,
        title: "User Account",
        child: [
            {
                title: "Orders",
                child: [
                    {
                        title: "Order List",
                        url: "/orders"
                    },
                    {
                        title: "Order Details",
                        url: "/orders/5452423"
                    }, 
                ]
            },
            {
                title: "Profile",
                child: [
                    {
                        title: "View Profile",
                        url: "/profile"
                    },
                    {
                        title: "Edit Profile",
                        url: "/profile/edit"
                    }, 
                ]
            },
            {
                title: "Address",
                child: [
                    {
                        title: "Address List",
                        url: "/address"
                    },
                    {
                        title: "Add Address",
                        url: "/address/512474"
                    }, 
                ]
            },
            {
                title: "Support tickets",
                child: [
                    {
                        title: "All tickets",
                        url: "/support-tickets"
                    },
                    {
                        title: "Ticket details",
                        url: "/support-tickets/512474"
                    }, 
                ]
            },
            {
                title: "Wishlist",
                url: "/wish-list"
            }, 
        ]
    },
    {
        megaMenu: false,
        megaMenuWithSub: false,
        title: "Vendor Account",
        child: [
            {
                title: "Dashboard",
                url: "/vendor/dashboard"
            },
            {
                title: "Products",
                child: [
                    {
                        title: "All products",
                        url: "/admin/products"
                    },
                    {
                        title: "Add/Edit product",
                        url: "/admin/products/248104"
                    }, 
                ]
            },
            {
                title: "Orders",
                child: [
                    {
                        title: "All orders",
                        url: "/admin/orders"
                    },
                    {
                        title: "Order details",
                        url: "/admin/orders/248104"
                    }, 
                ]
            },
            {
                title: "Profile",
                url: "/vendor/account-setting"
            }, 
        ]
    }, 
];
/* harmony default export */ const data_navbarNavigations = ((/* unused pure expression or super */ null && (navbarNavigations_navbarNavigations)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/navbar/MobileMenu.jsx








const MobileMenu = ()=>{
    const { 0: openDrawer , 1: setOpenDrawer  } = useState(false);
    const updateNavigations = navbarNavigations.reduce((prev, curr)=>{
        const newArr = [
            ...prev
        ];
        if (!curr.child) {
            newArr.push({
                ...curr,
                extLink: true
            });
        } else if (curr.megaMenu || curr.megaMenuWithSub) {
            const flated = curr.child.flat();
            newArr.push({
                title: curr.title,
                child: flated
            });
        } else {
            newArr.push(curr);
        }
        return newArr;
    }, []);
    const renderLevels = (data)=>{
        return data.map((item, index)=>{
            if (item.child) {
                return /*#__PURE__*/ _jsxs(Accordion, {
                    square: true,
                    elevation: 0,
                    disableGutters: true,
                    sx: {
                        "&:not(:last-child)": {
                            borderBottom: 0
                        },
                        "&:before": {
                            display: "none"
                        }
                    },
                    children: [
                        /*#__PURE__*/ _jsx(AccordionSummary, {
                            expandIcon: /*#__PURE__*/ _jsx(ExpandMore, {}),
                            sx: {
                                padding: 0,
                                boxShadow: "none",
                                minHeight: 48,
                                "& .Mui-expanded": {
                                    color: "primary.main",
                                    margin: 0
                                },
                                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                    margin: 0,
                                    "& .MuiSvgIcon-root": {
                                        color: "primary.main"
                                    }
                                }
                            },
                            children: /*#__PURE__*/ _jsxs(H6, {
                                children: [
                                    item.title,
                                    "12"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsxs(Box, {
                            mx: 2,
                            children: [
                                renderLevels(item.child),
                                "34"
                            ]
                        })
                    ]
                }, index);
            }
            if (item.extLink) {
                return /*#__PURE__*/ _jsx(H6, {
                    py: 1,
                    children: /*#__PURE__*/ _jsx(NavLink, {
                        href: item.url,
                        children: item.title
                    })
                }, index);
            }
            return /*#__PURE__*/ _jsx(Box, {
                py: 1,
                children: /*#__PURE__*/ _jsx(NavLink, {
                    href: item.url,
                    children: item.title
                })
            }, index);
        });
    };
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx(IconButton, {
                onClick: ()=>setOpenDrawer(true),
                sx: {
                    flexShrink: 0,
                    border: (theme)=>`1px solid ${theme.palette.grey[400]}`
                },
                children: /*#__PURE__*/ _jsx(Menu, {})
            }),
            /*#__PURE__*/ _jsx(Drawer, {
                anchor: "right",
                open: openDrawer,
                onClose: ()=>setOpenDrawer(false),
                sx: {
                    zIndex: 15001
                },
                children: /*#__PURE__*/ _jsx(Box, {
                    sx: {
                        width: "100vw",
                        height: "100%",
                        position: "relative"
                    },
                    children: /*#__PURE__*/ _jsx(Scrollbar, {
                        autoHide: false,
                        style: {
                            height: "100vh"
                        },
                        children: /*#__PURE__*/ _jsxs(Box, {
                            maxWidth: 500,
                            margin: "auto",
                            position: "relative",
                            height: "100%",
                            px: 5,
                            py: 8,
                            children: [
                                /*#__PURE__*/ _jsx(IconButton, {
                                    onClick: ()=>setOpenDrawer(false),
                                    sx: {
                                        position: "absolute",
                                        right: 30,
                                        top: 15
                                    },
                                    children: /*#__PURE__*/ _jsx(Clear, {
                                        fontSize: "small"
                                    })
                                }),
                                renderLevels(updateNavigations)
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const navbar_MobileMenu = ((/* unused pure expression or super */ null && (MobileMenu)));


/***/ }),

/***/ 7717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7449);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7503);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchBox__WEBPACK_IMPORTED_MODULE_5__, swr__WEBPACK_IMPORTED_MODULE_6__]);
([_SearchBox__WEBPACK_IMPORTED_MODULE_5__, swr__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const GrocerySearchBox = ()=>{
    const { 0: pageIndex , 1: setPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const server_ip = "https://chitralhive.com/api/";
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // Add messageError state variable
    const { 0: resultList , 1: setResultList  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const handleSearch = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        ;
        setMessage(message.replaceAll("/", " "));
        ;
        router.push("/search/" + message);
    }, [
        router,
        message
    ]);
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    const handleChange = (event)=>{
        const value = event.target.value;
        setMessage(value);
        setMessageError(value.trim() === ""); // Set messageError to true if value is empty or only whitespace
    };
    const handlebutton = (value)=>{
        if (message.trim() !== "") {
            handleSearch();
        }
    };
    const handleDocumentClick = ()=>setResultList([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        window.addEventListener("click", handleDocumentClick);
        return ()=>{
            window.removeEventListener("click", handleDocumentClick);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        flex: "1 1 0",
        maxWidth: "670px",
        mx: "auto",
        ref: parentRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                fullWidth: true,
                name: "name",
                variant: "outlined",
                placeholder: "Searching for...",
                value: message,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                required: true,
                error: messageError,
                helperText: messageError ? "This field is required" : "",
                InputProps: {
                    sx: {
                        height: 44,
                        paddingRight: 0,
                        borderRadius: 300,
                        color: "grey.700",
                        overflow: "hidden",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main"
                        }
                    },
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClick: handlebutton,
                        color: "primary",
                        disableElevation: true,
                        variant: "contained",
                        sx: {
                            px: "3rem",
                            height: "100%",
                            borderRadius: "0 300px 300px 0"
                        },
                        children: "Search"
                    }),
                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_5__/* .SearchOutlinedIcon */ .iu, {
                        fontSize: "small"
                    })
                }
            }),
            typeof resultList !== "undefined" && !!resultList.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_5__/* .SearchResultCard */ .v3, {
                elevation: 2,
                children: resultList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/product/search/${item.name}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                            children: item.name
                        }, item.name)
                    }, item))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GrocerySearchBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iu": () => (/* binding */ SearchOutlinedIcon),
/* harmony export */   "v3": () => (/* binding */ SearchResultCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8790);
/* harmony import */ var _mui_icons_material_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7077);
/* harmony import */ var _mui_material_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_BazaarMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4516);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9029);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_backend_server_ip_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6753);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_11__]);
swr__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 









 // styled components



// also used in the GrocerySearchBox component
const SearchOutlinedIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)((_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        color: theme.palette.grey[600],
        marginRight: 6
    })); // also used in the GrocerySearchBox component
const SearchResultCard = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card)(()=>({
        zIndex: 99,
        top: "100%",
        width: "100%",
        position: "absolute",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
    }));
const DropDownHandler = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(components_flex_box__WEBPACK_IMPORTED_MODULE_8__/* .FlexBox */ .hs)(({ theme  })=>({
        whiteSpace: "pre",
        borderTopRightRadius: 300,
        borderBottomRightRadius: 300,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    }));
const SearchBox = ()=>{
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("All Categories");
    const { 0: resultList , 1: setResultList  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
    const handleCategoryChange = (cat)=>()=>setCategory(cat);
    const search = (0,_mui_material_utils__WEBPACK_IMPORTED_MODULE_6__.debounce)((e)=>{
        const value = e.target?.value;
        if (!value) setResultList([]);
        else setResultList(dummySearchResult);
    }, 200);
    const hanldeSearch = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((event)=>{
        event.persist();
        search(event);
    }, []);
    const handleDocumentClick = ()=>setResultList([]);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        window.addEventListener("click", handleDocumentClick);
        return ()=>window.removeEventListener("click", handleDocumentClick);
    }, []);
    const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_12___default().get(url).then((response)=>response.data);
    const { data: data1 , error: error1  } = (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(utils_backend_server_ip_jsx__WEBPACK_IMPORTED_MODULE_13__/* .server_ip */ .R + "/getNavCategories", fetcher);
    const { data: data2 , error: error2  } = (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(utils_backend_server_ip_jsx__WEBPACK_IMPORTED_MODULE_13__/* .server_ip */ .R + "/search", fetcher);
    if (error1) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "failed to load"
    });
    if (!data1) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "loading..."
    });
    const categoryDropdown = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        direction: "left",
        sx: {
            zIndex: 1502
        },
        handler: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownHandler, {
            px: 3,
            gap: 0.5,
            height: "100%",
            color: "grey.700",
            bgcolor: "grey.100",
            alignItems: "center",
            component: (_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default()),
            children: [
                category,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
                    fontSize: "small",
                    color: "inherit"
                })
            ]
        }),
        children: data1.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                onClick: handleCategoryChange(item.href),
                children: item.title
            }, item.href))
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        position: "relative",
        flex: "1 1 0",
        maxWidth: "670px",
        mx: "auto",
        ref: parentRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                fullWidth: true,
                variant: "outlined",
                placeholder: "Searching for...",
                onChange: hanldeSearch,
                InputProps: {
                    sx: {
                        height: 44,
                        paddingRight: 0,
                        borderRadius: 300,
                        color: "grey.700",
                        overflow: "hidden",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main"
                        }
                    },
                    endAdornment: categoryDropdown,
                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchOutlinedIcon, {
                        fontSize: "small"
                    })
                }
            }),
            !!resultList.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultCard, {
                elevation: 2,
                children: data2.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: `product/${item.slug}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                            children: item.name
                        }, item.slug)
                    }, item))
            })
        ]
    });
};
const categories = (/* unused pure expression or super */ null && ([
    "All Categories",
    "Car",
    "Clothes",
    "Electronics",
    "Laptop",
    "Desktop",
    "Camera",
    "Toys", 
]));
const dummySearchResult = [
    "Macbook Air 13",
    "Asus K555LA",
    "Acer Aspire X453",
    "iPad Mini 3", 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2687:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/BabyBoy.jsx



const BabyBoy = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M256,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,256,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,256,448Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M432,288a64,64,0,1,0-11.642-126.934A176.884,176.884,0,0,0,311.914,57.108,7.937,7.937,0,0,0,312,56V24a8,8,0,0,0-16,0V52.588q-7.87-1.836-16-2.945V24a8,8,0,0,0-16,0V48.189c-2.653-.119-5.318-.189-8-.189s-5.347.07-8,.189V24a8,8,0,0,0-16,0V49.643q-8.121,1.113-16,2.945V24a8,8,0,0,0-16,0V56a7.937,7.937,0,0,0,.086,1.108A176.884,176.884,0,0,0,91.642,161.066a64,64,0,1,0,0,125.868,176.4,176.4,0,0,0,37.121,58.545A135.783,135.783,0,0,0,72,456v32a8,8,0,0,0,8,8H432a8,8,0,0,0,8-8V456a135.776,135.776,0,0,0-56.763-110.521,176.4,176.4,0,0,0,37.121-58.545A64.266,64.266,0,0,0,432,288Zm0-112a48,48,0,1,1-6.532,95.55,174.671,174.671,0,0,0,5.577-29.192l3.3,3.3a8,8,0,1,0,11.314-11.314L435.313,224H456a8,8,0,0,0,0-16H431.265a174.782,174.782,0,0,0-5.8-31.55A48.379,48.379,0,0,1,432,176ZM216,69.062V96a8,8,0,0,0,16,0V65.8a160.113,160.113,0,0,1,16-1.6V96a8,8,0,0,0,16,0V64.2a160.113,160.113,0,0,1,16,1.6V96a8,8,0,0,0,16,0V69.062C364.931,86.869,416,149.582,416,224v0c0,88.223-71.777,160-160,160S96,312.225,96,224v0C96,149.583,147.069,86.869,216,69.062ZM343.99,376.379a31.987,31.987,0,0,1-56.049,20.708A174.763,174.763,0,0,0,343.99,376.379ZM224.059,397.087a31.987,31.987,0,0,1-56.049-20.708A174.763,174.763,0,0,0,224.059,397.087ZM80,272a48,48,0,1,1,6.532-95.55,174.782,174.782,0,0,0-5.8,31.55H56a8,8,0,0,0,0,16H76.687L66.343,234.343a8,8,0,0,0,11.314,11.314l3.3-3.3a174.671,174.671,0,0,0,5.577,29.192A48.379,48.379,0,0,1,80,272ZM424,456v24H88V456a119.183,119.183,0,0,1,52.562-99.256q5.955,5.185,12.37,9.828a48,48,0,0,0,88.961,32.862q6.982.556,14.107.566t14.107-.566a48,48,0,0,0,88.961-32.862q6.405-4.643,12.37-9.828A119.183,119.183,0,0,1,424,456Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M184,256a24,24,0,1,0-24-24A24.027,24.027,0,0,0,184,256Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,184,224Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M328,256a24,24,0,1,0-24-24A24.027,24.027,0,0,0,328,256Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,328,224Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M256,296a32.036,32.036,0,0,0,32-32,8,8,0,0,0-16,0,16,16,0,0,1-32,0,8,8,0,0,0-16,0A32.036,32.036,0,0,0,256,296Z"
            }),
            " "
        ]
    });
};
/* harmony default export */ const icons_BabyBoy = (BabyBoy);

;// CONCATENATED MODULE: ./src/components/icons/BabyGirl.jsx



const BabyGirl = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M256,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,256,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,256,448Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M432,288a64,64,0,1,0-11.642-126.934A176.785,176.785,0,0,0,368,88.335V40.5a24,24,0,0,0-30.9-22.982L286.827,32.6A24.038,24.038,0,0,0,264,16H248a24.038,24.038,0,0,0-22.827,16.6L174.9,17.518A24,24,0,0,0,144,40.5V88.335a176.785,176.785,0,0,0-52.358,72.731,64,64,0,1,0,0,125.868,176.4,176.4,0,0,0,37.121,58.545A135.783,135.783,0,0,0,72,456v32a8,8,0,0,0,8,8H432a8,8,0,0,0,8-8V456a135.783,135.783,0,0,0-56.763-110.521,176.4,176.4,0,0,0,37.121-58.545A64.266,64.266,0,0,0,432,288Zm0-112a48,48,0,1,1-6.532,95.55,174.671,174.671,0,0,0,5.577-29.192l3.3,3.3a8,8,0,1,0,11.314-11.314L435.313,224H456a8,8,0,0,0,0-16H431.265a174.782,174.782,0,0,0-5.8-31.55A48.379,48.379,0,0,1,432,176ZM341.7,32.843A8,8,0,0,1,352,40.5V76.561a174.951,174.951,0,0,0-64-25.637V48.952ZM248,32h16a8.009,8.009,0,0,1,8,8v8.735c-5.272-.477-10.606-.735-16-.735s-10.728.258-16,.735V40A8.009,8.009,0,0,1,248,32Zm-88,8.5a8,8,0,0,1,10.3-7.657L224,48.952v1.972a174.951,174.951,0,0,0-64,25.637Zm56,28.562V96a8,8,0,0,0,16,0V65.8a160.113,160.113,0,0,1,16-1.6V96a8,8,0,0,0,16,0V64.2a160.113,160.113,0,0,1,16,1.6V96a8,8,0,0,0,16,0V69.062C364.931,86.869,416,149.583,416,224v0c0,88.224-71.776,160-160,160S96,312.226,96,224V224C96,149.581,147.069,86.869,216,69.062ZM343.99,376.379a31.987,31.987,0,0,1-56.049,20.708A174.763,174.763,0,0,0,343.99,376.379ZM224.059,397.087a31.987,31.987,0,0,1-56.049-20.708A174.763,174.763,0,0,0,224.059,397.087ZM80,272a48,48,0,1,1,6.532-95.55,174.782,174.782,0,0,0-5.8,31.55H56a8,8,0,0,0,0,16H76.687L66.343,234.343a8,8,0,0,0,11.314,11.314l3.3-3.3a174.671,174.671,0,0,0,5.577,29.192A48.379,48.379,0,0,1,80,272ZM424,456v24H88V456a119.183,119.183,0,0,1,52.562-99.256q5.955,5.185,12.37,9.828a48,48,0,0,0,88.961,32.862q6.982.556,14.107.566t14.107-.566a48,48,0,0,0,88.961-32.862q6.405-4.643,12.37-9.828A119.183,119.183,0,0,1,424,456Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M184,256a24,24,0,1,0-24-24A24.027,24.027,0,0,0,184,256Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,184,224Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M328,256a24,24,0,1,0-24-24A24.027,24.027,0,0,0,328,256Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,328,224Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M256,296a32.036,32.036,0,0,0,32-32,8,8,0,0,0-16,0,16,16,0,0,1-32,0,8,8,0,0,0-16,0A32.036,32.036,0,0,0,256,296Z"
            }),
            " "
        ]
    });
};
/* harmony default export */ const icons_BabyGirl = (BabyGirl);

;// CONCATENATED MODULE: ./src/components/icons/Car.jsx



const Car = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 480 480",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M240,0C107.452,0,0,107.452,0,240s107.452,240,240,240s240-107.452,240-240C479.85,107.514,372.486,0.15,240,0z M455.328,301.552l-15.032-4.888l-4.952,15.2l15.096,4.904c-6.244,17.031-14.534,33.241-24.688,48.272l-12.8-9.28l-9.408,12.944 l12.704,9.232c-11.18,14.27-24.035,27.143-38.288,38.344l-9.232-12.704l-12.944,9.408l9.28,12.8 c-15.03,10.143-31.237,18.422-48.264,24.656l-4.904-15.096l-15.2,4.952l4.888,15.032c-17.449,4.996-35.444,7.841-53.584,8.472V448 h-16v15.8c-18.129-0.633-36.113-3.478-53.552-8.472l4.888-15.032l-15.2-4.952L163.2,450.44 c-17.031-6.244-33.241-14.534-48.272-24.688l9.28-12.8l-12.944-9.408l-9.232,12.704c-14.263-11.191-27.129-24.057-38.32-38.32 l12.704-9.232l-9.408-12.944l-12.8,9.28C44.084,350.009,35.821,333.814,29.6,316.8l15.096-4.904l-4.952-15.2l-15.032,4.888 c-5.01-17.448-7.868-35.443-8.512-53.584H32v-16H16.2c0.633-18.129,3.478-36.113,8.472-53.552l15.032,4.888l4.952-15.2L29.6,163.2 c6.244-17.031,14.534-33.241,24.688-48.272l12.8,9.28l9.408-12.944L63.72,102.04c11.191-14.263,24.057-27.129,38.32-38.32 l9.232,12.704l12.944-9.408l-9.28-12.8C129.968,44.087,146.175,35.821,163.2,29.6l4.904,15.096l15.2-4.952l-4.888-15.032 c17.448-5.01,35.443-7.868,53.584-8.512V32h16V16.2c18.129,0.633,36.113,3.478,53.552,8.472l-4.888,15.032l15.2,4.952L316.8,29.6 c17.031,6.244,33.241,14.534,48.272,24.688l-9.28,12.8l12.944,9.408l9.232-12.704c14.263,11.191,27.129,24.057,38.32,38.32 l-12.704,9.232l9.408,12.944l12.8-9.28c10.135,15.008,18.411,31.19,24.648,48.192l-15.096,4.904l4.952,15.2l15.032-4.888 c4.996,17.449,7.841,35.444,8.472,53.584H448v16h15.8C463.167,266.129,460.322,284.113,455.328,301.552z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M240,64c-97.202,0-176,78.798-176,176s78.798,176,176,176s176-78.798,176-176C415.89,142.844,337.156,64.11,240,64z M240,400c-88.366,0-160-71.634-160-160S151.634,80,240,80s160,71.634,160,160C399.899,328.323,328.324,399.899,240,400z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M240,104c-75.111,0-136,60.889-136,136s60.889,136,136,136s136-60.889,136-136C375.916,164.924,315.076,104.084,240,104z M342.872,178.536c9.301,15.44,14.972,32.791,16.584,50.744l-50.104-4.048c-4.403-0.37-7.672-4.24-7.301-8.642 c0.176-2.087,1.163-4.022,2.749-5.39L342.872,178.536z M266.712,123.104l-19.328,46.4c-1.7,4.078-6.384,6.006-10.462,4.306 c-1.947-0.812-3.494-2.359-4.306-4.306l-19.328-46.4C230.856,118.965,249.144,118.965,266.712,123.104z M137.128,178.534 L175.2,211.2c3.355,2.875,3.743,7.926,0.868,11.28c-1.373,1.602-3.324,2.597-5.428,2.768l-50.104,4.048 C122.148,211.336,127.822,193.978,137.128,178.534z M204.496,301.392l-11.616,48.944c-16.551-7.145-31.288-17.91-43.128-31.504 h-0.024l42.816-26.12c3.771-2.303,8.694-1.113,10.997,2.658C204.642,297.173,204.985,299.337,204.496,301.392z M287.12,350.336 h-0.024l-11.64-48.944c-1.023-4.298,1.632-8.612,5.93-9.635c2.055-0.489,4.219-0.146,6.022,0.955l42.816,26.12 C318.391,332.423,303.662,343.188,287.12,350.336z M295.76,279.048c-11.315-6.904-26.084-3.329-32.988,7.986 c-3.299,5.407-4.328,11.9-2.86,18.062l12,50.464c-20.868,5.92-42.972,5.92-63.84,0h-0.016l12-50.464 c3.066-12.895-4.902-25.835-17.798-28.901c-6.159-1.464-12.646-0.436-18.05,2.861l-44.272,27.024 c-11.954-18.079-18.752-39.074-19.664-60.728l51.664-4.176c13.21-1.083,23.041-12.671,21.958-25.881 c-0.517-6.299-3.497-12.14-8.294-16.255l-39.36-33.76c13.525-16.922,31.365-29.881,51.64-37.512l19.936,47.864 c5.095,12.236,19.145,18.026,31.382,12.93c5.848-2.435,10.495-7.083,12.93-12.93l19.944-47.864 c20.273,7.633,38.113,20.592,51.64,37.512L294.4,199.04c-10.06,8.631-11.218,23.783-2.587,33.842 c4.12,4.802,9.969,7.782,16.275,8.294l51.664,4.176c-0.912,21.654-7.71,42.649-19.664,60.728L295.76,279.048z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M240,208c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S257.673,208,240,208z M240,256 c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S248.837,256,240,256z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const icons_Car = (Car);

// EXTERNAL MODULE: ./src/components/icons/Dress.jsx
var Dress = __webpack_require__(8786);
;// CONCATENATED MODULE: ./src/components/icons/Food.jsx



const Food = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M145.736,377.191l-2.159-10.249c-0.854-4.054-4.83-6.649-8.887-5.794c-4.054,0.854-6.649,4.832-5.794,8.887l2.159,10.248 c0.744,3.533,3.861,5.958,7.333,5.958c0.512,0,1.032-0.054,1.554-0.163C143.996,385.224,146.59,381.246,145.736,377.191z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M162.791,458.152l-9.859-46.799c-0.854-4.055-4.832-6.644-8.887-5.795c-4.054,0.854-6.649,4.833-5.794,8.887l9.859,46.799 c0.744,3.533,3.861,5.958,7.333,5.958c0.512,0,1.032-0.054,1.554-0.163C161.051,466.185,163.647,462.206,162.791,458.152z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M229.913,457.626l-6.405-91.21c-0.29-4.133-3.878-7.254-8.009-6.958c-4.133,0.29-7.248,3.876-6.958,8.009l6.405,91.211 c0.277,3.954,3.571,6.976,7.476,6.976c0.176,0,0.355-0.006,0.533-0.019C227.088,465.345,230.204,461.759,229.913,457.626z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M298.857,432.981c-4.126-0.3-7.719,2.825-8.009,6.958l-1.279,18.214c-0.29,4.132,2.825,7.718,6.958,8.008 c0.179,0.013,0.357,0.019,0.533,0.019c3.904,0,7.198-3.022,7.476-6.976l1.279-18.214 C306.106,436.857,302.99,433.271,298.857,432.981z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M303.983,359.985c-4.122-0.292-7.719,2.825-8.009,6.958l-2.681,38.177c-0.29,4.132,2.826,7.718,6.958,8.008 c0.179,0.013,0.357,0.019,0.533,0.019c3.904,0,7.198-3.022,7.476-6.976l2.681-38.177 C311.231,363.861,308.116,360.275,303.983,359.985z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M377.469,359.601c-4.055-0.858-8.033,1.741-8.887,5.794l-19.214,91.21c-0.855,4.055,1.739,8.034,5.794,8.888 c0.522,0.11,1.041,0.163,1.554,0.163c3.472,0,6.589-2.424,7.333-5.958l19.214-91.21 C384.117,364.434,381.523,360.455,377.469,359.601z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M481.195,279.919h-38.664v-75.04c0-3.202-0.783-6.396-2.264-9.235l-16.334-31.316c6.539-1.642,11.401-7.552,11.401-14.593 v-11.088c0-8.305-6.756-15.062-15.061-15.062H316.389c-8.305,0-15.062,6.757-15.062,15.062v10.977 c-2.893-5.505-6.545-10.644-10.921-15.259c-9.423-9.94-14.613-22.957-14.613-36.654v-7.373c2.069-1.847,3.38-4.525,3.38-7.509 v-72.75C279.174,4.521,274.653,0,269.096,0h-45.108c-5.557,0-10.078,4.521-10.078,10.078v72.75c0,2.985,1.312,5.662,3.38,7.509 v7.373c0,13.697-5.19,26.714-14.613,36.654c-12.078,12.739-18.729,29.422-18.729,46.976v61.317l-8.851-51.734 c-2.132-12.461-9.592-23.305-20.469-29.75c-10.876-6.445-23.969-7.781-35.924-3.667l-4.652,1.601 c-3.458-22.572,0.641-46.602,0.693-46.899c0.716-4.078-2.007-7.967-6.086-8.686c-4.081-0.722-7.971,2.005-8.691,6.086 c-0.21,1.192-3.756,21.847-1.672,44.21L74.46,84.556c-1.348-3.918-5.618-6.002-9.535-4.653c-3.918,1.348-6.001,5.618-4.653,9.535 l21.18,61.543c-0.457-0.825-0.921-1.653-1.397-2.487c-13.678-23.992-27.644-38.852-41.511-44.168 c-3.867-1.484-8.207,0.451-9.69,4.319c-1.483,3.868,0.451,8.207,4.319,9.69c16.589,6.36,32.91,34.096,42.428,54.006l-5.306,1.826 c-11.954,4.114-21.452,13.226-26.059,24.999c-4.606,11.774-3.813,24.913,2.175,36.046l24.046,44.707H30.804 c-8.83,0-16.014,7.184-16.014,16.014v21.151c0,8.83,7.184,16.014,16.014,16.014h17.084l33.351,150.845 C84.892,500.463,99.259,512,116.177,512h279.644c16.919,0,31.286-11.537,34.938-28.057l33.352-150.845h17.084 c8.83,0,16.014-7.184,16.014-16.014v-21.151C497.209,287.103,490.025,279.919,481.195,279.919z M426.964,202.584 c0.369,0.706,0.563,1.499,0.563,2.296v75.04h-11.884v-51.427c0-5.838-4.75-10.589-10.589-10.589h-73.446 c-5.839,0-10.589,4.75-10.589,10.589v51.427h-11.884v-72.28v-2.76c0-0.796,0.194-1.589,0.563-2.296l19.708-37.787h77.849 L426.964,202.584z M400.639,232.907v47.012h-64.616v-47.012H400.639z M316.389,138.59l103.942,0.058l-0.038,11.144 c0,0-0.005,0.001-0.02,0.001l-103.942-0.058L316.389,138.59z M312.729,164.328l-4.193,8.04c-0.532-4.048-1.426-8.014-2.658-11.866 C307.755,162.334,310.107,163.67,312.729,164.328z M228.913,15.004h35.256v62.898h-35.256V15.004z M213.564,144.688 c12.077-12.74,18.729-29.423,18.729-46.977v-4.805h28.496v4.805c0,17.554,6.652,34.238,18.729,46.977 c9.423,9.939,14.613,22.956,14.613,36.653v18.797h-57.067c-8.336,0-15.117,6.782-15.117,15.117v64.664h-22.996v-98.578h-0.001 C198.95,167.644,204.14,154.627,213.564,144.688z M294.132,215.143v64.777h-57.18v-64.664c0-0.063,0.051-0.113,0.113-0.113 H294.132z M66.307,240.529l-6.682-12.424c-3.899-7.25-4.416-15.806-1.416-23.472c2.999-7.666,9.184-13.6,16.968-16.279 l48.409-16.66c7.784-2.679,16.311-1.809,23.392,2.387c7.082,4.197,11.941,11.258,13.329,19.372l14.793,86.465h-66.133 l13.499-4.646c3.918-1.348,6.001-5.618,4.652-9.535c-1.348-3.918-5.617-6.001-9.535-4.653l-33.936,11.68L73.51,253.917 l45.871-15.787c3.918-1.348,6.001-5.618,4.652-9.535c-1.348-3.918-5.617-6.001-9.535-4.653L66.307,240.529z M416.109,480.704 c-2.121,9.592-10.463,16.292-20.288,16.292H116.177c-9.824,0-18.167-6.7-20.287-16.292L63.254,333.098h385.491L416.109,480.704z M482.206,317.084L482.206,317.084c-0.001,0.557-0.454,1.01-1.011,1.01H30.804c-0.557,0-1.01-0.453-1.01-1.01v-21.151 c0-0.557,0.453-1.01,1.01-1.01h450.391c0.557,0,1.01,0.453,1.01,1.01V317.084z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const icons_Food = (Food);

;// CONCATENATED MODULE: ./src/components/icons/Gift.jsx



const Gift = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 22 22",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M20.1639 5.12801H15.5091C16.1154 4.59043 16.4985 3.80649 16.4985 2.93444C16.4985 0.484669 13.6601 -0.876388 11.7501 0.632064C11.5912 0.757512 11.5641 0.988021 11.6896 1.14687C11.8151 1.30581 12.0457 1.3328 12.2044 1.20735C13.634 0.0784044 15.7654 1.0945 15.7654 2.93444C15.7654 4.09679 14.8589 5.05076 13.7158 5.12801H11.3669V2.9344C11.3669 1.31749 10.0515 0.00207221 8.43458 0.00207221C6.81768 0.00207221 5.50226 1.31749 5.50226 2.9344C5.50226 3.80649 5.88534 4.59038 6.4916 5.12796H1.83685C0.826301 5.12796 0.00415039 5.95011 0.00415039 6.96066V8.85004C0.00415039 9.76717 0.68138 10.529 1.56195 10.6621V20.1674C1.56195 21.178 2.3841 22.0001 3.39465 22.0001H18.6061C19.6166 22.0001 20.4388 21.178 20.4388 20.1674V12.2812C20.4388 12.0788 20.2747 11.9146 20.0722 11.9146C19.8698 11.9146 19.7057 12.0788 19.7057 12.2812V20.1675C19.7057 20.7738 19.2124 21.2671 18.6061 21.2671H9.71748V10.6828H12.2833V19.948C12.2833 20.1504 12.4474 20.3146 12.6498 20.3146C12.8522 20.3146 13.0163 20.1504 13.0163 19.948V10.6828H17.0941C17.2965 10.6828 17.4606 10.5187 17.4606 10.3163C17.4606 10.1138 17.2965 9.94971 17.0941 9.94971H14.6658V5.86109H20.1639C20.7702 5.86109 21.2635 6.35436 21.2635 6.96071V8.85009C21.2635 9.45644 20.7702 9.94971 20.1639 9.94971H19.4537C19.2513 9.94971 19.0872 10.1138 19.0872 10.3163C19.0872 10.5187 19.2513 10.6828 19.4537 10.6828H20.1639C21.1744 10.6828 21.9966 9.86064 21.9966 8.85009V6.96071C21.9966 5.95016 21.1744 5.12801 20.1639 5.12801ZM6.23534 2.9344C6.23534 1.72174 7.22188 0.735154 8.43458 0.735154C9.64728 0.735154 10.6338 1.72174 10.6338 2.9344V5.12796H8.28494C7.14189 5.05076 6.23534 4.09674 6.23534 2.9344ZM8.9844 21.2671H3.39465C2.78835 21.2671 2.29503 20.7738 2.29503 20.1675V10.6828H8.9844V21.2671ZM13.9327 9.94971H1.83685C1.23055 9.94971 0.737232 9.45644 0.737232 8.85009V6.96071C0.737232 6.35436 1.23055 5.86109 1.83685 5.86109H7.33496V8.79909C7.33496 9.00152 7.49908 9.16563 7.7015 9.16563C7.90393 9.16563 8.06804 9.00152 8.06804 8.79909V5.86109H13.9327V9.94971Z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "22",
                        height: "22"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const icons_Gift = (Gift);

;// CONCATENATED MODULE: ./src/components/icons/Laptop.jsx



const Laptop = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M511.976,416.063c-0.005-0.075-0.004-0.149-0.011-0.224c-0.027-0.297-0.07-0.588-0.131-0.873 c-0.006-0.028-0.015-0.056-0.022-0.084c-0.059-0.262-0.132-0.518-0.218-0.768c-0.023-0.067-0.048-0.132-0.073-0.198 c-0.084-0.227-0.179-0.448-0.284-0.663c-0.018-0.038-0.03-0.077-0.049-0.115l-40.112-79.118V73.72 c0-8.006-6.513-14.519-14.519-14.519H55.441c-8.006,0-14.519,6.513-14.519,14.519v260.298L0.811,413.137 c-0.019,0.038-0.031,0.077-0.049,0.115c-0.105,0.215-0.199,0.436-0.284,0.662c-0.025,0.066-0.05,0.132-0.073,0.199 c-0.085,0.251-0.159,0.508-0.218,0.77c-0.006,0.027-0.015,0.054-0.021,0.081c-0.061,0.286-0.104,0.577-0.131,0.874 c-0.007,0.074-0.007,0.149-0.011,0.223C0.014,416.217,0,416.371,0,416.529v19.026c0,9.509,7.735,17.244,17.244,17.244h477.512 c9.509,0,17.244-7.735,17.244-17.244v-19.026C512,416.371,511.986,416.217,511.976,416.063z M55.923,74.203h400.154v254.109 H55.923V74.203z M53.029,343.311H458.97l33.318,65.717h-164.78l-8.271-29.989c-1.684-6.105-7.282-10.369-13.615-10.369h-99.246 c-6.333,0-11.932,4.264-13.615,10.368l-8.271,29.99H19.711L53.029,343.311z M311.948,409.029H200.052l6.993-25.358h97.91 L311.948,409.029z M497,435.554c0,1.237-1.007,2.244-2.244,2.244H17.244c-1.237,0-2.244-1.007-2.244-2.244v-11.526h482V435.554z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M432.577,213.756c-4.143,0-7.5,3.357-7.5,7.5v76.055H86.923v-76.055c0-4.143-3.357-7.5-7.5-7.5 c-4.143,0-7.5,3.357-7.5,7.5v79.294c0,6.485,5.275,11.761,11.761,11.761h344.633c6.485,0,11.761-5.275,11.761-11.761v-79.294 C440.077,217.115,436.72,213.756,432.577,213.756z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M428.316,90.203H83.684c-6.485,0-11.761,5.275-11.761,11.761v79.294c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5 v-76.055h338.154v76.055c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-79.294C440.077,95.477,434.802,90.203,428.316,90.203z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const icons_Laptop = (Laptop);

;// CONCATENATED MODULE: ./src/components/icons/MakeUp.jsx



const MakeUp = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M252.43,293.891c-4.985-2.372-10.95-0.257-13.324,4.728l-1.658,3.484c-2.373,4.985-0.256,10.95,4.728,13.324 c1.388,0.661,2.85,0.974,4.291,0.974c3.736,0,7.32-2.103,9.033-5.702l1.658-3.484C259.532,302.229,257.414,296.264,252.43,293.891 z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M140.39,235.953c-3.904-3.904-10.234-3.904-14.138,0c-8.288,8.289-21.775,8.289-30.064,0 c-3.904-3.904-10.234-3.904-14.138,0c-3.904,3.904-3.904,10.234,0,14.138c8.042,8.041,18.606,12.063,29.17,12.063 c10.564,0,21.127-4.021,29.169-12.063C144.293,246.188,144.293,239.858,140.39,235.953z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M477.379,26.56c-35.221-35.22-92.454-35.322-127.815-0.328c-11.038-5.48-22.757-10.181-35.113-14.051 C273.916-0.516,240.754-0.045,237.878,0.018C183.647,0.054,136.343,22.809,114.4,59.422c-2.896,4.832-5.309,9.84-7.245,14.993 C96.82,84.256,50.18,132.457,50.18,200.803c0,45.522-21.896,69.289-34.947,79.405c-4.877,3.78-7.518,9.716-7.063,15.878 c0.455,6.165,3.94,11.651,9.323,14.676c4.918,2.764,10.449,5.417,15.797,7.983c4.729,2.269,11.449,5.493,14.726,7.591v17.806 c0,2.436-0.465,4.815-1.382,7.074l-2.479,6.102c-3.395,8.354-2.145,17.919,3.243,25.117v2.193c0,6.487,2.856,12.491,7.613,16.564 v11.738c0,25.155,20.464,45.619,45.619,45.619h29.518c5.521,0,9.997-4.476,9.997-9.997c0-5.521-4.476-9.997-9.997-9.997h-29.518 c-14.129,0-25.626-11.496-25.626-25.626v-17.248c0-4.006-2.391-7.623-6.075-9.195l-0.432-0.184 c-0.672-0.287-1.106-0.944-1.106-1.674v-5.643c0-2.242-0.754-4.42-2.14-6.182l-1.764-2.242c-1.274-1.618-1.583-3.81-0.808-5.718 l2.479-6.103c1.892-4.659,2.852-9.57,2.852-14.598v-21.283c0-9.633-9.813-14.341-26.071-22.141 c-4.269-2.048-8.659-4.155-12.542-6.232c16.078-13.122,40.778-41.746,40.778-93.684c0-37.582,16.729-68.898,31.242-89 c0.793,17.419,6.062,35.635,15.813,53.874c25.657,47.987,70.337,68.101,106.238,84.261c34.158,15.376,53.491,25.055,53.646,45.175 c0.113,14.775-3.285,25.646-10.1,32.309c-7.868,7.694-18.312,7.497-18.375,7.496c-3.355-0.235-6.5,1.23-8.543,3.898 c-2.044,2.668-2.509,6.191-1.408,9.366c0.293,0.846,7.375,20.926,23.588,40.493c20.264,24.455,45.843,37.359,74.364,37.648 l26.862,78.756c1.417,4.157,5.301,6.773,9.46,6.773c1.07,0,2.159-0.173,3.228-0.539c5.226-1.782,8.017-7.463,6.234-12.688 l-26.454-77.561c49.873-26.726,84.938-68.185,101.654-120.399c13.325-41.621,13.962-88.323,2.703-132.555 c6.169-3.75,11.886-8.227,17.051-13.392C512.712,119.385,512.712,61.894,477.379,26.56z M438.584,294.571 c-15.688,49.005-49.369,87.588-97.468,111.694c-24.321,1.092-45.534-8.958-63.071-29.899c-7.071-8.442-12.189-17.132-15.54-23.71 c5.704-1.784,12.255-4.963,18.153-10.612c11.073-10.606,16.608-26.447,16.45-47.083c-0.26-33.918-31.917-48.167-65.432-63.254 c-34.86-15.692-74.371-33.477-96.814-75.456c-13.942-26.079-17.224-50.876-9.793-72.617c0.031-0.083,0.06-0.167,0.089-0.25 c1.629-4.71,3.754-9.28,6.394-13.685C149.919,39.05,190.712,20.01,238.01,20.01c0.096,0,0.191-0.001,0.288-0.004 c0.311-0.01,31.819-0.763,70.178,11.252c51.047,15.991,88.65,45.786,111.763,88.558 C449.449,173.877,456.308,239.205,438.584,294.571z M454.352,148.127c-4.46-12.997-9.964-25.674-16.525-37.815 c-16.411-30.368-40.12-55.302-69.855-73.819c27.72-23.239,69.218-21.849,95.27,4.204c27.538,27.538,27.538,72.346,0,99.884 C460.47,143.354,457.499,145.873,454.352,148.127z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M264.573,468.308l-31.321-54.25l-1.059-37.043c-0.886-31.022-24.881-56.313-55.814-58.83 c-22.746-1.854-44.585,10.76-54.354,31.383l-0.494,1.042c-12.95,27.335-3.607,60.403,21.732,76.921l31.179,20.324l34.062,58.996 c1.851,3.207,5.211,5,8.666,4.999c1.695,0,3.415-0.432,4.989-1.341c4.781-2.76,6.42-8.874,3.659-13.656l-30.259-52.41 l12.056-6.961l12.056-6.961l27.586,47.78c2.759,4.781,8.873,6.419,13.656,3.659C265.696,479.203,267.334,473.089,264.573,468.308z M182.223,429.061l-28.04-18.278c-17.002-11.083-23.271-33.272-14.582-51.614l0.494-1.042C145.921,345.83,158.479,338,171.944,338 c0.935,0,1.874,0.038,2.815,0.115c20.755,1.688,36.855,18.659,37.449,39.473l0.961,33.606L182.223,429.061z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M279.555,494.935c-1.859-1.86-4.439-2.929-7.068-2.929c-2.639,0-5.208,1.07-7.068,2.929s-2.929,4.439-2.929,7.068 s1.07,5.208,2.929,7.068c1.859,1.859,4.429,2.929,7.068,2.929c2.629,0,5.208-1.07,7.068-2.929 c1.859-1.859,2.929-4.439,2.929-7.068S281.414,496.795,279.555,494.935z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M197.63,58.603c-2.171-5.075-8.045-7.433-13.123-5.262c-17.631,7.537-30.347,20.242-35.806,35.776 c-5.47,15.565-3.416,33.043,5.94,50.542c1.801,3.369,5.254,5.285,8.825,5.285c1.591,0,3.204-0.381,4.704-1.183 c4.869-2.603,6.706-8.66,4.103-13.53c-6.738-12.603-8.322-24.206-4.709-34.488c3.579-10.183,12.387-18.714,24.803-24.02 C197.443,69.555,199.799,63.681,197.63,58.603z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M222.014,46.003l-0.56,0.001c-5.52,0.032-9.971,4.534-9.938,10.056c0.032,5.501,4.502,9.938,9.996,9.938 c0.02,0,0.04,0,0.06,0l0.442-0.001c5.521,0,9.997-4.476,9.997-9.997S227.535,46.003,222.014,46.003z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const icons_MakeUp = (MakeUp);

// EXTERNAL MODULE: ./src/components/icons/Man.jsx
var Man = __webpack_require__(5201);
;// CONCATENATED MODULE: ./src/components/icons/Microphone.jsx



const Microphone = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m402.707 230.621c0-12.406-10.094-22.5-22.5-22.5s-22.5 10.094-22.5 22.5c0 46.555-31.443 85.902-74.207 97.927v-20.97c19.97-6.449 36.903-19.719 48.029-37.058 8.952-13.95 14.147-30.529 14.147-48.299v-.001c0-6.189 0-125.968 0-132.542.001-18.369-5.538-36.041-16.019-51.104-2.364-3.399-7.039-4.238-10.439-1.873s-4.239 7.04-1.873 10.439c8.584 12.339 13.176 26.784 13.318 41.817h-49.948c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h49.962v20.646h-49.962c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h49.962v20.646h-49.962c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h49.962v19.016h-149.354v-19.016h49.962c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.962v-20.646h49.962c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.962v-20.646h49.962c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.944c.39-40.845 33.724-73.957 74.659-73.957 13.499 0 26.732 3.656 38.271 10.573 3.553 2.128 8.157.977 10.289-2.576 2.13-3.553.977-8.159-2.576-10.289-13.868-8.313-29.769-12.708-45.984-12.708-49.448 0-89.677 40.229-89.677 89.677v132.542.001c0 17.77 5.196 34.35 14.147 48.299 11.127 17.339 28.06 30.609 48.029 37.058v20.97c-42.764-12.025-74.207-51.372-74.207-97.927 0-12.406-10.094-22.5-22.5-22.5s-22.5 10.094-22.5 22.5c0 71.497 51.413 131.201 119.207 144.111v18.584c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.523c8.54.717 16.774.691 25 0v71.778h-25v-20.255c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v20.255h-18.188c-17.487 0-31.714 14.228-31.714 31.715s14.228 31.715 31.716 31.715h91.375c17.487 0 31.714-14.227 31.714-31.714s-14.227-31.715-31.714-31.715h-18.188v-73.839c67.794-12.91 119.207-72.614 119.207-144.111zm-210.557 30.292c-12.191-20.042-10.827-36.84-10.827-51.648h149.354c0 14.66 1.406 31.536-10.827 51.648-12.575 20.673-34.973 34.876-60.85 35.907-27.549 1.101-52.879-12.938-66.85-35.907zm76.35 50.108v20.538c-7.993.987-16.516 1.048-25 0v-20.538c8.038 1.127 16.473 1.196 25 0zm33.188 152.55c9.216 0 16.714 7.498 16.714 16.715 0 9.216-7.498 16.714-16.714 16.714h-91.375c-9.216 0-16.714-7.498-16.714-16.714 0-9.217 7.498-16.715 16.714-16.715zm-64.603-102.607c-63.693-9.201-112.792-64.143-112.792-130.343 0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5c0 64.112 52.114 116.707 116.707 116.707 64.059 0 116.707-52.09 116.707-116.707 0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5c0 79.824-70.968 141.855-150.622 130.343z"
            })
        })
    });
};
/* harmony default export */ const icons_Microphone = (Microphone);

;// CONCATENATED MODULE: ./src/components/icons/MotorBike.jsx



const MotorBike = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m500.661 292.325c-2.099-3.571-6.694-4.767-10.266-2.668s-4.766 6.694-2.668 10.266c6.066 10.326 9.272 22.131 9.272 34.138 0 37.234-30.292 67.526-67.525 67.526-37.234 0-67.526-30.292-67.526-67.526 0-9.474 1.982-18.78 5.785-27.352l19.928 18.952c-.554 2.76-.836 5.57-.836 8.4 0 23.517 19.132 42.648 42.648 42.648s42.648-19.132 42.648-42.648-19.132-42.648-42.648-42.648c-3.558 0-7.066.449-10.484 1.316l-19.927-18.95c9.384-4.753 19.739-7.243 30.411-7.243 16.031 0 31.58 5.731 43.782 16.14 1.412 1.205 3.143 1.794 4.863 1.794 2.12 0 4.227-.894 5.71-2.633 2.688-3.151 2.313-7.886-.839-10.573-14.915-12.722-33.921-19.728-53.517-19.728-14.83 0-29.167 3.922-41.824 11.389l-9.227-8.775c13.672-7.777 29.472-12.226 46.294-12.226 4.977 0 9.994.398 14.914 1.182 2.189.35 4.417-.287 6.091-1.737l23.667-20.495c3.774-3.268 6.634-7.341 8.401-11.885 6.322-16.248 6.631-46.921-5.424-60.688-33.063-37.765-82.127-56.354-138.147-52.354-13.757.984-21.69 16.185-14.604 28.096l3.297 5.541h-15.65c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h24.178c3.486 7.659 5.13 15.979 4.829 24.352-15.045-13.381-34.41-20.837-55.026-20.837-27.174 0-52.207 13.048-67.788 35.1h-53.965c-4.244 0-8.403-1.464-11.712-4.122l-54.876-44.09c-1.332-1.07-2.989-1.653-4.697-1.653h-44.869c-12.449 0-22.577 10.128-22.577 22.577 0 7.251 3.517 14.106 9.407 18.338l16.143 11.594c3.361 2.415 8.05 1.648 10.467-1.717 2.416-3.364 1.647-8.05-1.717-10.467l-16.142-11.594c-1.978-1.42-3.158-3.721-3.158-6.155 0-4.178 3.399-7.577 7.577-7.577h42.229l52.821 42.438c5.962 4.79 13.458 7.428 21.106 7.428h56.767l48.568 18.564 26.732 10.218c-1.392.721-19.418 16.52-48.707 16.52h-16.47c-16.492 0-32.15 8.863-40.559 24.079l-12.396-8.904c-.001-.001-.003-.002-.005-.003l-98.027-70.408c-3.363-2.416-8.05-1.648-10.467 1.716-2.416 3.364-1.647 8.051 1.717 10.467l88.878 63.837-16.167 9.945c-15.273-14.491-35.65-22.696-56.827-22.696-45.506.001-82.527 37.021-82.527 82.526s37.021 82.526 82.526 82.526 82.525-37.021 82.525-82.526c0-6.991-.894-13.914-2.64-20.658l17.753-10.923v56.229c0 21.437 17.439 38.876 38.875 38.876h36.136v4.002h-48.931c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h56.431c4.143 0 7.5-3.357 7.5-7.5v-11.502h68.815c2.735 0 5.253-1.489 6.571-3.885s1.228-5.321-.236-7.631c-9.512-15.004-14.539-32.367-14.539-50.214 0-18.508 5.383-35.78 14.662-50.34l10.88 10.347c-6.149 11.755-9.38 24.839-9.38 38.198 0 45.505 37.021 82.526 82.526 82.526s82.526-37.02 82.526-82.525c0-14.675-3.921-29.108-11.339-41.735zm-43.538 41.735c0 15.245-12.403 27.648-27.648 27.648-13.321 0-24.471-9.471-27.074-22.032l11.413 10.853c4.243 4.035 9.805 6.258 15.659 6.258 6.198 0 12.201-2.575 16.472-7.066 4.184-4.398 6.403-10.163 6.251-16.232-.153-6.069-2.66-11.715-7.06-15.897l-11.412-10.853c13.235 2.05 23.399 13.521 23.399 27.321zm6.446-172.005c5.653 12.442 3.913 33.723-.111 42.307-10.118-1.719-17.846-10.548-17.846-21.148 0-10.629 7.77-19.476 17.957-21.159zm-182.325 1.045c19.941 0 38.463 8.511 51.412 23.485-7.528 19.529-22.243 26.267-26.483 29.924l-62.563-23.913-14.269-5.454c12.845-15.2 31.651-24.042 51.903-24.042zm-100.527 119.283c-.115.723-.229 1.517-.321 2.343l-66.663 41.016c-.024.015-.048.03-.073.045l-22.448 13.812c-3.648 2.2-8.408 1.021-10.607-2.627-1.104-1.831-1.399-3.976-.833-6.038.526-1.92 1.755-3.542 3.518-4.604l23.529-14.474c.021-.013.042-.026.063-.038l35.097-21.589c.013-.008.027-.017.04-.025l26.71-16.43zm-112.958 62.333c4.259 7.062 11.772 10.977 19.488 10.977 4.012 0 8.078-1.059 11.769-3.284l7.487-4.607c-4.776 8.302-13.731 13.908-23.977 13.908-15.245 0-27.648-12.403-27.648-27.648s12.403-27.648 27.648-27.648c1.358 0 2.701.107 4.024.3l-11.062 6.805c-5.015 3.022-8.631 7.797-10.182 13.444-1.64 5.974-.746 12.445 2.453 17.753zm82.293-10.656c0 37.234-30.292 67.526-67.525 67.526-37.235.001-67.527-30.291-67.527-67.526 0-37.233 30.292-67.525 67.526-67.525 15.973 0 31.379 5.722 43.483 15.904l-23.058 14.184c-6.241-3.421-13.212-5.211-20.425-5.211-23.517 0-42.648 19.132-42.648 42.648s19.132 42.648 42.648 42.648c22.748 0 41.39-17.902 42.585-40.357l23.788-14.636c.758 4.064 1.153 8.189 1.153 12.345zm176.247 48.525h-107.26c-13.165 0-23.875-10.711-23.875-23.876v-68.991c0-15.595 11.485-28.388 26.125-30.793 13.373-2.23 43.373 5.783 76.805-18.171 23.647-16.946 45.104-27.764 51.75-59.539 2.576-12.315 1.736-24.931-2.281-36.629h8.885c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-16.082l-7.859-13.211c-1.355-2.277.105-5.273 2.782-5.465 46.741-3.341 88.026 10.354 117.607 38.72-13.082 5.539-22.283 18.508-22.283 33.585 0 14.639 8.679 27.282 21.158 33.075l-13.283 11.503c-4.566-.577-9.183-.869-13.77-.869-60.002 0-108.932 48.734-108.932 108.932 0 16.271 3.607 32.2 10.513 46.729zm39.451-119.787 15.808 15.033c.007.006.013.013.02.019l53.221 50.612c1.496 1.422 2.348 3.342 2.4 5.404.052 2.063-.703 4.023-2.125 5.52-1.474 1.549-3.463 2.402-5.603 2.402-1.99 0-3.88-.756-5.323-2.127l-53.21-50.602c-.016-.016-.032-.031-.049-.046l-16.336-15.535c3.435-3.858 7.18-7.431 11.197-10.68z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m256 340.71h-21.541c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h21.541c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
            })
        ]
    });
};
/* harmony default export */ const icons_MotorBike = (MotorBike);

;// CONCATENATED MODULE: ./src/components/icons/Pets.jsx



const Pets = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 511.999 511.999",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M295.999,281.376c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S301.519,281.376,295.999,281.376z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M385.22,335.218c-9.374-9.369-32.107-34.727-50.041-75.851c-13.336-31.998-44.347-52.669-79.028-52.669 c-34.674,0-65.68,20.674-79.019,52.679c-22.5,51.606-53.238,78.916-53.533,79.174c-0.036,0.031-0.071,0.063-0.106,0.094 c-18.13,16.233-28.528,39.487-28.528,63.799c0,29.721,14.153,55.568,38.705,71.945c22.876,15.262,51.229,19.838,77.784,12.557 c13.308-3.646,28.711-5.574,44.547-5.574c16.103,0,31.734,1.992,45.203,5.76c25.775,7.215,54.066,3.259,77.421-12.172 c24.834-16.409,39.232-42.5,39.232-72.516C417.857,376.045,405.971,351.58,385.22,335.218z M367.597,458.273 c-18.023,11.908-40.258,15.406-61.005,9.599c-15.201-4.253-32.695-6.5-50.594-6.5c-17.596,0-34.827,2.174-49.834,6.286 c-20.966,5.749-43.344,2.138-61.398-9.906c-18.85-12.575-29.804-32.234-29.804-55.309c0-18.614,7.956-36.421,21.829-48.863 c2.134-1.871,34.586-30.925,58.706-86.29c0.022-0.052,0.045-0.104,0.066-0.156c10.208-24.564,33.988-40.436,60.584-40.436 c26.606-0.001,50.391,15.868,60.596,40.426c0.021,0.052,0.044,0.104,0.066,0.156c19.586,44.95,44.804,72.7,54.736,82.546 c0.286,0.282,0.588,0.548,0.904,0.794c16.146,12.545,25.405,31.434,25.405,51.823 C397.856,425.71,386.724,445.636,367.597,458.273z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M323.24,321.186c-3.014-4.627-9.208-5.938-13.837-2.923c-4.629,3.016-5.937,9.211-2.923,13.838 c15.217,23.363,29.645,38.923,36.893,46.119c3.918,3.89,10.25,3.869,14.143-0.051c3.891-3.919,3.868-10.251-0.051-14.143 C350.781,357.39,337.447,343.001,323.24,321.186z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M223.59,157.945c9.609-16.795,13.615-39.102,10.991-61.195c-5.076-43.013-34.741-79.046-67.884-75.066 c-14.966,1.771-28.272,11.595-37.473,27.662c-9.603,16.782-13.609,39.089-10.991,61.198 C126.524,180.789,191.917,213.272,223.59,157.945z M146.582,59.281c5.474-9.563,14.013-17.879,25.02-17.879 c19.681,0,39.427,26.419,43.119,57.699c2.13,17.933-0.964,35.76-8.488,48.91c-23.047,40.264-62.693,6.318-68.139-39.815 C135.969,90.249,139.064,72.42,146.582,59.281z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M127.802,265.5c2.895-17.823-0.623-37.534-9.905-55.503c-9.286-17.973-23.328-32.25-39.541-40.202 c-17.219-8.446-34.853-8.882-49.653-1.229c-14.8,7.647-24.642,22.28-27.716,41.207c-2.895,17.824,0.623,37.534,9.905,55.505 c9.287,17.968,23.329,32.242,39.542,40.194c16.09,7.892,33.916,9.367,49.65,1.238C114.886,299.063,124.73,284.427,127.802,265.5z M90.905,288.941c-9.03,4.668-20.274,4.161-31.663-1.425c-12.39-6.077-23.25-17.237-30.581-31.42 c-7.327-14.185-10.145-29.496-7.933-43.117c2.033-12.518,8.127-21.979,17.158-26.645c0.001-0.001,0.002-0.001,0.003-0.002 c9.986-5.163,21.552-3.539,31.66,1.419c12.389,6.077,23.249,17.238,30.58,31.426c7.327,14.185,10.145,29.498,7.933,43.118 C106.03,274.813,99.936,284.275,90.905,288.941z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M330.998,186.089c30.315,0,57.988-33.098,62.999-75.353c5.325-45.014-17.355-89.143-53.38-89.143 c-30.32,0-57.99,33.099-62.989,75.353C272.297,142.042,295.044,186.089,330.998,186.089z M297.49,99.295 c3.702-31.278,23.452-57.703,43.129-57.703c0.926,0,1.724,0.045,2.439,0.138c10.663,1.185,18.917,10.504,23.779,20.019 c6.614,12.941,9.274,29.939,7.3,46.634c-3.843,32.404-25.321,60.197-45.577,57.568c-0.037-0.004-0.074-0.009-0.111-0.014 c-9.093-1.07-17.718-8.36-23.662-20C298.175,132.995,295.516,115.995,297.49,99.295z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M511.013,209.813c-6.324-38.946-41.53-57.564-77.369-39.978c-33.529,16.448-55.437,58.818-49.446,95.706 c6.399,39.407,41.956,57.344,77.368,39.972C495.105,289.062,517.003,246.697,511.013,209.813z M452.758,287.556 c-11.388,5.585-22.632,6.09-31.663,1.425v0.001c-9.031-4.667-15.125-14.131-17.157-26.647 c-4.572-28.156,12.838-61.947,38.514-74.546c23.53-11.543,44.613-0.675,48.82,25.229 C495.836,241.122,478.481,274.94,452.758,287.556z"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const icons_Pets = (Pets);

;// CONCATENATED MODULE: ./src/components/icons/PlantPot.jsx



const PlantPot = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m413.256 285.82h-58.714c54.809-59.136 57.531-141.835 55.913-176.419-.279-5.974-3.976-11.063-9.646-13.284-5.762-2.259-12.308-.935-16.678 3.369l-54.246 53.418c-2.951 2.906-2.987 7.654-.081 10.606 2.906 2.95 7.654 2.986 10.606.081l54.245-53.418c.092-.09.175-.172.382-.151.187.004.351.073.437.129 1.618 34.703-1.317 120.58-62.256 175.669h-38.16c.658-1.377 1.291-2.764 1.919-4.153 14.724-14.862 42.389-45.279 60.713-80.668 1.904-3.678.467-8.204-3.212-10.108-3.677-1.905-8.203-.469-10.108 3.212-9.812 18.95-22.708 36.641-34.595 51.001 4.324-17.102 6.56-34.646 6.56-52.189 0-68.102-32.716-151.434-46.782-184.101-2.307-5.355-7.626-8.814-13.553-8.814s-11.246 3.459-13.552 8.813c-14.066 32.667-46.783 116.001-46.783 184.101 0 17.542 2.237 35.087 6.56 52.189-11.886-14.36-24.782-32.05-34.595-51-1.905-3.679-6.433-5.115-10.108-3.212-3.679 1.904-5.116 6.431-3.212 10.108 18.324 35.389 45.99 65.806 60.713 80.668.628 1.389 1.261 2.776 1.919 4.153h-38.161c-60.924-55.075-63.872-140.922-62.255-175.67.087-.056.25-.124.436-.128.189-.023.29.062.381.151l54.325 53.495c2.95 2.905 7.699 2.87 10.606-.081 2.906-2.952 2.87-7.7-.081-10.606l-54.326-53.495c-4.369-4.303-10.917-5.627-16.677-3.369-5.671 2.221-9.367 7.311-9.646 13.283-1.618 34.585 1.104 117.285 55.913 176.42h-58.713c-15.962 0-28.947 12.985-28.947 28.946 0 15.962 12.985 28.947 28.947 28.947h5.736l33.575 143.978c3.337 14.313 15.932 24.309 30.629 24.309h174.633c14.696 0 27.292-9.996 30.629-24.309l33.575-143.978h5.736c15.962 0 28.947-12.985 28.947-28.947-.001-15.96-12.986-28.946-28.948-28.946zm-157.256-270.55c13.818 32.171 45.334 112.688 45.334 177.645 0 39.701-12.065 71.873-23.027 92.906h-14.807v-145.833c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v145.832h-14.807c-10.962-21.034-23.028-53.206-23.028-92.906 0-64.953 31.516-145.474 45.335-177.644zm157.256 313.444h-234.755c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h213.618l-32.781 140.571c-1.746 7.486-8.334 12.715-16.021 12.715h-174.633c-7.688 0-14.275-5.229-16.021-12.715l-32.781-140.571h23.56c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-44.698c-7.69 0-13.947-6.257-13.947-13.947s6.257-13.946 13.947-13.946h314.512c7.69 0 13.947 6.256 13.947 13.946s-6.257 13.947-13.947 13.947z"
            })
        })
    });
};
/* harmony default export */ const icons_PlantPot = (PlantPot);

;// CONCATENATED MODULE: ./src/components/icons/TeddyBear.jsx



const TeddyBear = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 511.988 511.988",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m212.051 127.591c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v20.374c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m307.437 120.091c-4.143 0-7.5 3.358-7.5 7.5v20.374c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-20.374c0-4.142-3.357-7.5-7.5-7.5z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m285.16 162.843c-9.813-4.622-48.52-4.622-58.332 0-7.569 3.566-12.652 10.22-14.312 18.737-1.348 6.914-.396 14.623 2.68 21.706 4.262 9.815 11.991 17.333 22.353 21.743 3.524 1.499 7.204 2.539 10.945 3.137v10.835c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10.835c3.741-.598 7.422-1.638 10.945-3.137 10.361-4.409 18.091-11.928 22.353-21.742 3.075-7.083 4.027-14.792 2.68-21.706-1.66-8.517-6.743-15.172-14.312-18.738zm-2.128 34.469c-2.741 6.314-7.608 10.996-14.466 13.914-7.988 3.4-17.152 3.401-25.145 0-6.857-2.918-11.725-7.6-14.466-13.915-2.737-6.304-3.86-17.071 4.26-20.896 2.98-1.348 12.88-2.022 22.778-2.022 9.896 0 19.792.674 22.775 2.021 8.124 3.828 7.001 14.594 4.264 20.898z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m440.133 88.187c5.96-18.078 2.721-38.181-8.887-55.157-13.08-19.129-34.955-31.738-57.088-32.907-33.377-1.756-50.824 15.625-64.188 34.955-16.881-5.19-35.05-8.026-53.976-8.026-18.947 0-37.135 2.842-54.032 8.043-7.27-10.455-14.979-19.41-24.93-25.72-3.497-2.219-8.131-1.182-10.351 2.316-2.218 3.498-1.181 8.132 2.317 10.351 6.872 4.359 12.707 10.721 18.274 18.297-35.755 14.597-64.31 40.209-79.709 71.719-9.499-7.019-17.323-16.014-21.462-28.567-4.551-13.802-2.057-28.715 7.022-41.993 10.499-15.354 27.932-25.467 45.483-26.394l.64-.031c4.139-.186 7.342-3.691 7.156-7.829s-3.694-7.336-7.828-7.156l-.746.036c-22.131 1.168-44.006 13.777-57.086 32.906-11.607 16.976-14.847 37.079-8.887 55.156 4.124 12.507 11.184 22.916 21.584 31.82 2.539 2.174 5.274 4.24 8.233 6.254-4.304 12.485-6.626 25.696-6.626 39.368 0 31.168 12.022 59.957 32.272 83.13-18.598 13.485-30.645 30.903-34.238 49.78-3.673 19.298 2.663 37.906 17.862 52.784-1.422 7.33-2.617 16.119-3.092 26.23-.468 9.95-.164 19.701.733 29.186-14.044 10.896-23.022 27.429-23.022 45.912 0 32.231 27.299 58.526 61.169 59.325.185.014 218.279.016 218.432.007 14.449-.324 28.37-5.346 39.348-14.251 3.217-2.61 3.709-7.333 1.1-10.55-2.609-3.216-7.33-3.709-10.549-1.1-8.69 7.049-19.836 10.932-31.384 10.932-26.33 0-47.751-19.901-47.751-44.363 0-3.532.45-6.967 1.294-10.262 6.907-5.487 13.131-10.547 17.764-14.523 6.761-5.802 12.844-11.983 18.23-18.501 3.368-.704 6.869-1.077 10.462-1.077 26.33 0 47.751 19.901 47.751 44.363 0 2.799-.281 5.596-.836 8.314-.828 4.059 1.791 8.02 5.849 8.848 4.063.824 8.021-1.791 8.849-5.849.756-3.703 1.139-7.509 1.139-11.313 0-18.498-8.993-35.042-23.056-45.937 1.042-10.995 1.161-20.798.767-29.16-.469-9.984-1.64-18.679-3.039-25.954 15.111-14.799 21.436-33.316 17.839-52.546-3.563-19.046-15.657-36.566-34.408-50.134 20.335-23.2 32.412-52.051 32.412-83.29 0-13.679-2.325-26.898-6.634-39.389 12.841-8.771 24.069-20.601 29.824-38.053zm-332.317 213.157c3.811-20.024 18.855-33.89 30.082-41.692 5.217 4.853 10.833 9.384 16.796 13.559-1.201 1.012-2.382 2.05-3.515 3.141-2.729 2.628-6.99 6.065-7.753 10.069-.579 2.714.368 5.644 2.699 7.471 1.495 1.172 3.295 1.679 5.053 1.578 8.857 1.303 17.902 3.646 26.912 6.999 14.188 5.279 33.55 14.165 37.889 30.313 3.063 11.397-4.436 25.046-15.731 28.636-22.9 7.277-56.517-.93-76.531-18.684-9.282-8.232-19.574-22.095-15.901-41.39zm39.535 91.967c-8.652.124-16.882 1.91-24.353 5.04-.426-7.076-.445-13.523-.203-19.238.266-6.285.84-12.012 1.576-17.143 3.566 2.305 7.32 4.401 11.211 6.271 1.966 5.632 4.181 10.764 6.376 15.233 1.641 3.343 3.445 6.621 5.393 9.837zm.96 103.703c-26.33 0-47.751-19.901-47.751-44.363s21.421-44.363 47.751-44.363c3.6 0 7.103.385 10.476 1.093 5.382 6.512 11.461 12.687 18.217 18.484 4.634 3.977 10.858 9.037 17.766 14.524.845 3.294 1.293 6.729 1.293 10.261-.001 24.463-21.421 44.364-47.752 44.364zm173.732 0h-132.098c12.336-10.372 20.329-25.26 21.051-41.9 14.096 10.937 28.253 21.677 36.336 27.779 2.55 1.925 5.605 2.887 8.662 2.887 3.056 0 6.112-.962 8.663-2.887 8.082-6.102 22.238-16.841 36.335-27.779.722 16.64 8.715 31.528 21.051 41.9zm34.525-120.153c-7.163 14.584-17.712 27.915-31.354 39.622-16.85 14.461-56.753 44.739-69.221 54.155-12.471-9.418-52.372-39.695-69.221-54.155-13.642-11.707-24.19-25.037-31.354-39.622-.24-.489-.48-1.009-.721-1.515 8.981 2.421 18.177 3.703 27.028 3.703 8.123 0 15.959-1.077 23.063-3.334 18.776-5.967 30.773-27.847 25.675-46.824-6.138-22.842-29.846-34.042-47.145-40.479-5.687-2.116-11.398-3.863-17.088-5.256 10.105-7.817 22.755-12.216 35.57-12.216h.138c18.373.045 35.249 8.477 46.302 23.134 1.827 2.421 4.725 3.867 7.752 3.867s5.925-1.446 7.753-3.869c11.052-14.656 27.928-23.088 46.301-23.133h.138c12.942 0 25.722 4.481 35.876 12.445-5.77 1.383-11.562 3.129-17.332 5.255-12.448 4.587-28.214 11.624-38.404 23.694-3.987 4.723-7.121 10.217-8.867 16.636-5.158 18.961 6.771 40.879 25.527 46.904 7.184 2.308 15.113 3.408 23.343 3.408 8.786 0 17.909-1.262 26.824-3.642-.193.41-.388.826-.583 1.222zm32.403 21.482c-7.466-3.124-15.689-4.908-24.334-5.032 1.948-3.216 3.753-6.494 5.394-9.837 2.151-4.38 4.326-9.392 6.263-14.891 3.934-1.88 7.732-3.989 11.334-6.312 1.385 9.896 2.16 22.026 1.343 36.072zm15.223-96.532c3.611 19.307-6.725 33.138-16.03 41.34-20.072 17.691-53.712 25.791-76.591 18.442-11.284-3.625-18.739-17.297-15.641-28.686 4.39-16.134 23.78-24.958 37.983-30.192 9.495-3.499 19.027-5.894 28.332-7.119 2.241-.295 4.263-1.617 5.435-3.549 1.676-2.762 1.442-6.151-.548-8.687-1.946-2.482-4.075-4.839-6.326-7.007-1.133-1.091-2.313-2.128-3.513-3.14 5.901-4.132 11.46-8.613 16.631-13.41 11.51 7.978 26.509 21.913 30.268 42.008zm-60.327-37.586c-10.353-5.368-21.965-8.285-33.682-8.285-.058 0-.116 0-.174 0-20.88.051-40.224 8.715-54.017 23.986-13.793-15.271-33.138-23.935-54.017-23.986-.059 0-.115 0-.174 0-11.715 0-23.325 2.916-33.677 8.282-35.252-22.58-58.08-58.368-58.08-98.594 0-68.141 65.472-123.577 145.948-123.577s145.948 55.436 145.948 123.577c0 40.226-22.824 76.017-58.075 98.597zm60.524-152.24c-15.406-31.477-43.945-57.06-79.671-71.646 12.44-16.943 25.187-26.474 48.648-25.237 17.564.927 34.997 11.041 45.496 26.395 9.079 13.278 11.573 28.191 7.022 41.993-2.988 9.064-7.976 18.624-21.495 28.495z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const icons_TeddyBear = (TeddyBear);

;// CONCATENATED MODULE: ./src/components/icons/Woman.jsx



const Woman = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "-8 0 512 512.001",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m255.878906 223.148438c.78125 0 1.578125-.015626 2.390625-.050782 4.160157-.171875 7.390625-3.6875 7.21875-7.84375-.175781-4.160156-3.675781-7.375-7.847656-7.21875-3.78125.164063-10.445313-.070312-12.523437-3.375-2.664063-4.234375.375-14.25 3.273437-19.683594 1.960937-3.664062.589844-8.222656-3.070313-10.195312-3.664062-1.972656-8.238281-.601562-10.210937 3.0625-1.164063 2.160156-11.121094 21.476562-2.777344 34.804688 4.363281 6.972656 12.277344 10.5 23.546875 10.5zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m212.886719 170.792969c0-8.671875-5.476563-15.460938-12.464844-15.460938-6.992187 0-12.46875 6.789063-12.46875 15.460938 0 8.667969 5.476563 15.460937 12.46875 15.460937 6.988281 0 12.464844-6.792968 12.464844-15.460937zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m295.117188 186.253906c6.992187 0 12.46875-6.792968 12.46875-15.460937 0-8.671875-5.476563-15.460938-12.46875-15.460938-6.992188 0-12.46875 6.789063-12.46875 15.460938 0 8.667969 5.476562 15.460937 12.46875 15.460937zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m208.347656 231.535156c-3.484375 2.28125-4.453125 6.957032-2.171875 10.4375.613281.933594 15.34375 22.929688 41.59375 22.929688 26.246094 0 40.976563-21.996094 41.589844-22.929688 2.285156-3.480468 1.3125-8.15625-2.167969-10.4375-3.480468-2.28125-8.152344-1.3125-10.433594 2.167969-.105468.160156-10.789062 16.125-28.988281 16.125-17.988281 0-28.898437-15.992187-28.988281-16.125-2.285156-3.480469-6.957031-4.449219-10.433594-2.167969zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m495.523438 503.976562c-.152344-2.363281-4.074219-58.140624-33.878907-82.238281-3.875-3.132812-9.546875-7.070312-17.347656-12.039062-3.515625-2.234375-8.171875-1.203125-10.40625 2.308593-2.238281 3.511719-1.203125 8.167969 2.304687 10.40625 7.21875 4.597657 12.589844 8.3125 15.96875 11.046876 18.714844 15.128906 25.316407 48.195312 27.425782 63.464843h-344.15625c-4.164063 0-7.539063 3.375-7.539063 7.539063 0 4.164062 3.375 7.535156 7.539063 7.535156h352.570312c4.285156 0 7.796875-3.738281 7.519532-8.023438zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m105.285156 496.925781h-89.335937c2.109375-15.277343 8.710937-48.339843 27.421875-63.46875 23.15625-18.722656 123.921875-72.460937 151.027344-86.792969l32.386718 63.046876c4.058594 7.902343 12.097656 12.8125 20.984375 12.8125 8.882813 0 16.925781-4.910157 20.984375-12.8125l32.386719-63.046876c18.363281 9.710938 70.585937 37.53125 109.488281 60.265626 3.59375 2.101562 8.210938.890624 10.308594-2.703126 2.101562-3.59375.890625-8.210937-2.703125-10.3125-7.527344-4.398437-15.546875-8.984374-23.71875-13.59375 6.429687-40.800781 13.179687-100.167968 10.90625-160.449218-2.945313-78.199219-20.335937-136.550782-51.683594-173.429688-26.199219-30.816406-62.023437-46.441406-106.484375-46.441406-38.769531 0-71.089844 11.929688-96.054687 35.449219-21.429688 20.191406-37.585938 49.136719-48.019531 86.027343-1.132813 4.007813 1.195312 8.171876 5.199218 9.304688s8.171875-1.195312 9.304688-5.203125c9.679687-34.230469 24.433594-60.859375 43.851562-79.152344 22.078125-20.804687 50.917969-31.351562 85.71875-31.351562 39.835938 0 71.796875 13.839843 95 41.132812 64.894532 76.335938 49.882813 239.199219 38.222656 316.261719-32.289062-17.941406-64.035156-34.777344-75.023437-40.574219v-36.367187c1.546875-1.414063 3.066406-2.875 4.535156-4.425782 42.238281-44.675781 37.632813-130.832031 37.414063-134.480468-.179688-3.078125-2.222656-5.734375-5.148438-6.707032-.421875-.136718-42.117187-14.425781-66.910156-62.96875-1.148438-2.25-3.351562-3.773437-5.859375-4.058593-2.511719-.285157-5 .707031-6.625 2.640625-.371094.441406-37.78125 44.246094-109.535156 63.65625-3.109375.839844-5.34375 3.5625-5.554688 6.777344-.242187 3.644531-5.417969 89.769531 36.523438 134.722656 1.863281 2 3.800781 3.871094 5.792969 5.644531v35.5625c-11.226563 5.917969-43.320313 22.921875-75.972657 41.089844-8-52.597657-17.167969-142.117188-3.042969-218.738281.753907-4.09375-1.953124-8.023438-6.046874-8.777344s-8.023438 1.953125-8.78125 6.046875c-15.027344 81.542969-4.484376 176.664062 3.835937 229.332031-28.476563 16.082031-55.132813 31.960938-66.179687 40.890625-29.804688 24.101563-33.730469 79.878906-33.882813 82.242187-.277344 4.285157 3.230469 8.023438 7.519531 8.023438h97.75c4.160156 0 7.535156-3.375 7.535156-7.535156 0-4.164063-3.375-7.539063-7.535156-7.539063zm185.09375-162.304687-35.035156 68.203125c-3.113281 6.0625-12.035156 6.0625-15.152344 0l-35.03125-68.203125v-27.65625c12.257813 6.667968 26.265625 10.070312 41.894532 10.125h.359374c16.066407 0 30.433594-3.566406 42.964844-10.601563zm-127.757812-172.394532c55.203125-16.148437 90.078125-45.28125 104.382812-59.222656 22.457032 37.65625 53.453125 54.03125 65.496094 59.253906.304688 18.191407-.976562 84.152344-33.488281 118.511719-13.40625 14.167969-30.847657 21.285157-51.910157 21.246094-21.035156-.070313-38.453124-7.335937-51.761718-21.589844-31.980469-34.246093-33.113282-99.292969-32.71875-118.199219zm0 0"
            }),
            " "
        ]
    });
};
/* harmony default export */ const icons_Woman = (Woman);

;// CONCATENATED MODULE: ./src/data/navigations.js















const navigations = [
    {
        icon: Dress/* default */.Z,
        title: "Fashion",
        href: "/fashion",
        menuComponent: "MegaMenu1",
        menuData: {
            categories: [
                {
                    title: "Man Clothes",
                    href: "/product/search/man-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                },
                {
                    title: "Woman Clothes",
                    href: "/product/search/woman-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                }, 
            ],
            rightImage: {
                imgUrl: "/assets/images/promotion/offer-1.png",
                href: "/sale-page-1"
            }
        }
    },
    {
        icon: icons_Laptop,
        title: "Electronics",
        href: "/product/search/electronics",
        menuComponent: "MegaMenu1",
        menuData: {
            categories: [
                {
                    title: "Man Clothes",
                    href: "/product/search/man-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                },
                {
                    title: "Woman Clothes",
                    href: "/product/search/woman-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                }, 
            ],
            bottomImage: {
                imgUrl: "/assets/images/promotion/offer-5.png",
                href: "/"
            }
        }
    },
    {
        icon: icons_MotorBike,
        title: "Bikes",
        href: "/product/search/bikes",
        menuComponent: "MegaMenu2",
        menuData: [
            {
                icon: Man/* default */.Z,
                title: "Man",
                href: "/product/search/fashion",
                megaMenu: "MegaMenu1",
                menuData: {
                    categories: [
                        {
                            title: "Man Clothes",
                            href: "/product/search/man-clothes",
                            subCategories: [
                                {
                                    title: "Shirt",
                                    href: "/product/search/shirt",
                                    imgUrl: "/assets/images/products/categories/shirt.png"
                                },
                                {
                                    title: "T- shirt",
                                    href: "/product/search/t-shirt",
                                    imgUrl: "/assets/images/products/categories/t-shirt.png"
                                },
                                {
                                    title: "Pant",
                                    href: "/product/search/pant",
                                    imgUrl: "/assets/images/products/categories/pant.png"
                                },
                                {
                                    title: "Underwear",
                                    href: "/product/search/underwear",
                                    imgUrl: "/assets/images/products/categories/t-shirt.png"
                                }, 
                            ]
                        },
                        {
                            title: "Accessories",
                            href: "/product/search/accessories",
                            subCategories: [
                                {
                                    title: "Belt",
                                    href: "/product/search/belt",
                                    imgUrl: "/assets/images/products/categories/belt.png"
                                },
                                {
                                    title: "Hat",
                                    href: "/product/search/Hat",
                                    imgUrl: "/assets/images/products/categories/hat.png"
                                },
                                {
                                    title: "Watches",
                                    href: "/product/search/Watches",
                                    imgUrl: "/assets/images/products/categories/watch.png"
                                },
                                {
                                    title: "Sunglasses",
                                    href: "/product/search/Sunglasses",
                                    imgUrl: "/assets/images/products/categories/sunglass.png"
                                }, 
                            ]
                        },
                        {
                            title: "Shoes",
                            href: "/product/search/shoes",
                            subCategories: [
                                {
                                    title: "Sneakers",
                                    href: "/product/search/Sneakers",
                                    imgUrl: "/assets/images/products/categories/sneaker.png"
                                },
                                {
                                    title: "Sandals",
                                    href: "/product/search/Sandals",
                                    imgUrl: "/assets/images/products/categories/sandal.png"
                                },
                                {
                                    title: "Formal",
                                    href: "/product/search/Formal",
                                    imgUrl: "/assets/images/products/categories/shirt.png"
                                },
                                {
                                    title: "Casual",
                                    href: "/product/search/Casual",
                                    imgUrl: "/assets/images/products/categories/t-shirt.png"
                                }, 
                            ]
                        },
                        {
                            title: "Bags",
                            href: "/product/search/bags",
                            subCategories: [
                                {
                                    title: "Backpack",
                                    href: "/product/search/backpack",
                                    imgUrl: "/assets/images/products/categories/backpack.png"
                                },
                                {
                                    title: "Crossbody Bags",
                                    href: "/product/search/Crossbody Bags",
                                    imgUrl: "/assets/images/products/categories/bag.png"
                                },
                                {
                                    title: "Side Bags",
                                    href: "/product/search/Side Bags",
                                    imgUrl: "/assets/images/products/categories/mini-bag.png"
                                },
                                {
                                    title: "Slides",
                                    href: "/product/search/Slides",
                                    imgUrl: "/assets/images/products/categories/belt.png"
                                }, 
                            ]
                        }, 
                    ]
                }
            },
            {
                icon: icons_Woman,
                title: "Woman",
                href: "/product/search/electronics",
                megaMenu: 2
            },
            {
                icon: icons_BabyBoy,
                title: "Baby Boy",
                href: "/product/search/home&garden",
                megaMenu: 3
            },
            {
                icon: icons_BabyGirl,
                title: "Baby Girl",
                href: "/product/search/bikes",
                megaMenu: "MegaMenu1"
            }, 
        ]
    },
    {
        icon: icons_PlantPot,
        title: "Home & Garden",
        href: "/product/search/home&garden",
        menuComponent: "MegaMenu1",
        menuData: {
            categories: [
                {
                    title: "Man Clothes",
                    href: "/product/search/man-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                },
                {
                    title: "Woman Clothes",
                    href: "/product/search/woman-clothes",
                    subCategories: [
                        {
                            title: "Shirt",
                            href: "/product/search/shirt",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "T- shirt",
                            href: "/product/search/t-shirt",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        },
                        {
                            title: "Pant",
                            href: "/product/search/pant",
                            imgUrl: "/assets/images/products/categories/pant.png"
                        },
                        {
                            title: "Underwear",
                            href: "/product/search/underwear",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Accessories",
                    href: "/product/search/accessories",
                    subCategories: [
                        {
                            title: "Belt",
                            href: "/product/search/belt",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        },
                        {
                            title: "Hat",
                            href: "/product/search/Hat",
                            imgUrl: "/assets/images/products/categories/hat.png"
                        },
                        {
                            title: "Watches",
                            href: "/product/search/Watches",
                            imgUrl: "/assets/images/products/categories/watch.png"
                        },
                        {
                            title: "Sunglasses",
                            href: "/product/search/Sunglasses",
                            imgUrl: "/assets/images/products/categories/sunglass.png"
                        }, 
                    ]
                },
                {
                    title: "Shoes",
                    href: "/product/search/shoes",
                    subCategories: [
                        {
                            title: "Sneakers",
                            href: "/product/search/Sneakers",
                            imgUrl: "/assets/images/products/categories/sneaker.png"
                        },
                        {
                            title: "Sandals",
                            href: "/product/search/Sandals",
                            imgUrl: "/assets/images/products/categories/sandal.png"
                        },
                        {
                            title: "Formal",
                            href: "/product/search/Formal",
                            imgUrl: "/assets/images/products/categories/shirt.png"
                        },
                        {
                            title: "Casual",
                            href: "/product/search/Casual",
                            imgUrl: "/assets/images/products/categories/t-shirt.png"
                        }, 
                    ]
                },
                {
                    title: "Bags",
                    href: "/product/search/bags",
                    subCategories: [
                        {
                            title: "Backpack",
                            href: "/product/search/backpack",
                            imgUrl: "/assets/images/products/categories/backpack.png"
                        },
                        {
                            title: "Crossbody Bags",
                            href: "/product/search/Crossbody Bags",
                            imgUrl: "/assets/images/products/categories/bag.png"
                        },
                        {
                            title: "Side Bags",
                            href: "/product/search/Side Bags",
                            imgUrl: "/assets/images/products/categories/mini-bag.png"
                        },
                        {
                            title: "Slides",
                            href: "/product/search/Slides",
                            imgUrl: "/assets/images/products/categories/belt.png"
                        }, 
                    ]
                }, 
            ]
        }
    },
    {
        icon: icons_Gift,
        title: "Gifts",
        href: "/product/search/gifts",
        menuComponent: "MegaMenu2",
        menuData: [
            {
                icon: Dress/* default */.Z,
                title: "Fashion",
                href: "/product/search/fashion"
            },
            {
                icon: icons_Laptop,
                title: "Electronics",
                href: "/product/search/electronics"
            },
            {
                icon: icons_PlantPot,
                title: "Home & Garden",
                href: "/product/search/home&garden"
            },
            {
                icon: icons_MotorBike,
                title: "Bikes",
                href: "/product/search/bikes"
            },
            {
                icon: icons_Gift,
                title: "Gifts",
                href: "/product/search/gifts"
            },
            {
                icon: icons_Microphone,
                title: "Music",
                href: "/product/search/music"
            },
            {
                icon: icons_MakeUp,
                title: "Health & Beauty",
                href: "/product/search/health&beauty"
            },
            {
                icon: icons_Pets,
                title: "Pets",
                href: "/product/search/pets"
            },
            {
                icon: icons_TeddyBear,
                title: "Baby Toys",
                href: "/product/search/baby-toys"
            },
            {
                icon: icons_Food,
                title: "Groceries",
                href: "/product/search/groceries"
            },
            {
                icon: icons_Car,
                title: "Automotive",
                href: "/product/search/automotive"
            }, 
        ]
    },
    {
        icon: icons_Microphone,
        title: "Music",
        href: "/product/search/music",
        menuComponent: "MegaMenu1"
    },
    {
        icon: icons_MakeUp,
        title: "Health & Beauty",
        href: "/product/search/health&beauty",
        menuComponent: "MegaMenu1"
    },
    {
        icon: icons_Pets,
        title: "Pets",
        href: "/product/search/pets",
        menuComponent: "MegaMenu1"
    },
    {
        icon: icons_TeddyBear,
        title: "Baby Toys",
        href: "/product/search/baby-toys",
        menuComponent: "MegaMenu1"
    },
    {
        icon: icons_Food,
        title: "Groceries",
        href: "/product/search/groceries",
        menuComponent: "MegaMenu1"
    },
    {
        icon: icons_Car,
        title: "Automotive",
        href: "/product/search/automotive",
        menuComponent: "MegaMenu1"
    }, 
];
/* harmony default export */ const data_navigations = ((/* unused pure expression or super */ null && (navigations)));


/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useWindowSize = ()=>{
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const windowListener = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(()=>{
        if (window) setWidth(window.innerWidth);
    }, 250);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window) {
            setWidth(window.innerWidth);
            window.addEventListener("resize", windowListener);
        }
        return ()=>{
            windowListener.cancel();
            window && window.removeEventListener("resize", windowListener);
        };
    }, [
        windowListener
    ]);
    return width;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);


/***/ }),

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// import {server_ip} from "../backend_server_ip.jsx"
const server_ip = "https://chitralhive.com/api/";
// Create axios instance with timeout to prevent hanging
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});
// Used 
const getNavCategories = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getNavCategories");
        return response.data;
    } catch (error) {
        console.error("Error fetching nav categories:", error.message);
        return [];
    }
};
// Used 
const getCategoryDetail = async (catSlug)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getCategoryDetail",
        data: {
            slug: catSlug
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
// Used 
const getItemDetail = async (slug)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getItemDetail",
        data: {
            slug: slug
        }
    });
    return response.data;
};
const getSearchItem = async (slug)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getSearchItem",
        data: {
            id: slug
        }
    });
    return response.data;
};
const getSearchCategory = async (catSlug)=>{
    // const response = await axios.get("http://100.64.6.105:8099/getSearchItem");
    // return response.data;
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getSearchCategory?slug=" + catSlug + "",
        // data: {
        //   id: catSlug
        // },
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const getItem = async (itemId)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getItem",
        data: {
            id: itemId
        }
    });
    return response.data;
};
const getBigDiscountList = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/market-1/big-discounts");
    return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export
const getProducts = async ()=>{
    // let data = axios.post('https://idrisbookbank-dev-server.inara.tech/getSearchCategory',{'id':'books'}).then(response=>response.data)
    const url = server_ip + "getSearchCategory?slug=books";
    // const args = {'id':'books'}
    let data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then((res)=>res.data);
    return data;
};
const myproduct = async ()=>{
    // let data = axios.post('https://idrisbookbank-dev-server.inara.tech/getSearchCategory',{'id':'books'}).then(response=>response.data)
    const url = server_ip + "getSearchCategory?slug=books";
    // const args = {'id':'books'}
    let data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then((res)=>res.data);
    return data;
};
const getProduct = async ()=>{
    // let data = axios.post('https://idrisbookbank-dev-server.inara.tech/getSearchCategory',{'id':'books'}).then(response=>response.data)
    const url = server_ip + "getSearchCategory?slug=stationery";
    // const args = {'id':'stationery'}
    let data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then((res)=>res.data);
    return data;
};
const getSearch = async ()=>{
    // let data = axios.post('https://idrisbookbank-dev-server.inara.tech/getSearchCategory',{'id':'books'}).then(response=>response.data)
    const url = server_ip + "search";
    // const args = {'id':'stationery'}
    let data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then((res)=>res.data);
    return data;
};
const addOrder = async (values, cartList, totalPrice, deliveryFee, userid)=>{
    const context = {};
    return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: server_ip + "addOrder",
        headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "content-type": "application/json"
        },
        data: {
            valueDict: values,
            userid: userid,
            cartList: cartList,
            totalPrice: totalPrice,
            deliveryFee: deliveryFee
        }
    });
// return response.data
};
// Zuhoor Api 
const getAllProducts = async ()=>{
    // let data = axios.post('https://idrisbookbank-dev-server.inara.tech/getSearchCategory',{'id':'books'}).then(response=>response.data)
    const url = server_ip + "getAllItems";
    let data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then((res)=>res.data);
    return data;
};
const getbundleDetail = async (slug)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getWebsiteBundlesForCategory?slug=" + slug,
        data: {
            slug: slug
        }
    });
};
const getbundleitemDetail = async (slug)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getWebsiteBundleItemDetails",
        data: {
            slug: slug
        }
    });
};
const getAllSchoolBundle = async (catSlug)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: server_ip + "getAllBrandBundle",
        data: {
            slug: catSlug
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const getReviews = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getReviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error.message);
        return [];
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getNavCategories,
    getItemDetail,
    getCategoryDetail,
    getProducts,
    getProduct,
    getBigDiscountList,
    getSearchItem,
    getSearchCategory,
    getItem,
    addOrder,
    // Zuhoor Api 
    getAllProducts,
    myproduct,
    getbundleDetail,
    getbundleitemDetail,
    getAllSchoolBundle,
    getSearch,
    getReviews
});


/***/ }),

/***/ 6753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ server_ip)
/* harmony export */ });
const server_ip = "http://chitralhive.com/api"; // export const server_ip = 'http://100.64.6.105:8090';


/***/ }),

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ layoutConstant)
/* harmony export */ });
/* unused harmony export deviceSize */
const deviceSize = {
    xs: 425,
    sm: 768,
    md: 1024,
    lg: 1440
};
const layoutConstant = {
    topbarHeight: 40,
    grocerySidenavWidth: 280,
    containerWidth: 1200,
    mobileNavHeight: 64,
    headerHeight: 80,
    mobileHeaderHeight: 64
};


/***/ })

};
;