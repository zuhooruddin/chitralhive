"use strict";
exports.id = 3817;
exports.ids = [3817];
exports.modules = {

/***/ 3563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_UserDashboardHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/Scrollbar.jsx
var Scrollbar = __webpack_require__(6576);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/sidenav/Sidenav.jsx




 // styled component
const Wrapper = (0,material_.styled)(material_.Box)(()=>({
        "& .handle": {
            cursor: "pointer"
        }
    })); // ================================================================
// ================================================================
const Sidenav = (props)=>{
    // props list
    const { position , open , width =280 , handle , children , toggleSidenav ,  } = props; // state
    const { 0: sidenavOpen , 1: setSidenavOpen  } = (0,external_react_.useState)(open);
    const handleToggleSidenav = ()=>setSidenavOpen(!sidenavOpen);
    (0,external_react_.useEffect)(()=>setSidenavOpen(open), [
        open
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                anchor: position,
                open: sidenavOpen,
                onClose: toggleSidenav || handleToggleSidenav,
                SlideProps: {
                    style: {
                        width
                    }
                },
                sx: {
                    zIndex: 15001
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Scrollbar/* default */.Z, {
                    autoHide: false,
                    children: children
                })
            }),
            handle && /*#__PURE__*/ (0,external_react_.cloneElement)(handle, {
                onClick: toggleSidenav || handleToggleSidenav,
                className: external_clsx_default()(handle.props?.className, "handle")
            })
        ]
    });
}; // set default component props
Sidenav.defaultProps = {
    width: 280,
    position: "left",
    open: false
};
/* harmony default export */ const sidenav_Sidenav = (Sidenav);

// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(420);
;// CONCATENATED MODULE: ./src/components/header/UserDashboardHeader.jsx








const StyledBox = (0,material_.styled)(material_.Box)(({ theme  })=>({
        display: "flex",
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(3),
        "& .headerHold": {
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "space-between"
        },
        [theme.breakpoints.up("md")]: {
            "& .sidenav": {
                display: "none"
            }
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    })); // ==============================================================
// ==============================================================
const UserDashboardHeader = ({ title , button , navigation , ...props })=>{
    const width = (0,useWindowSize/* default */.Z)();
    const isTablet = width < 1025;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBox, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                mt: 2,
                className: "headerHold",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                        alignItems: "center",
                        children: [
                            props.icon && /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                                color: "primary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography.H2, {
                                ml: 1.5,
                                my: "0px",
                                lineHeight: "1",
                                whiteSpace: "pre",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        className: "sidenav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sidenav_Sidenav, {
                            position: "left",
                            handle: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                fontSize: "small"
                            }),
                            children: navigation
                        })
                    }),
                    !isTablet && button
                ]
            }),
            isTablet && !!button && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                mt: 2,
                children: button
            })
        ]
    });
};
/* harmony default export */ const header_UserDashboardHeader = (UserDashboardHeader);


/***/ }),

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ customer_dashboard_Navigations)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
// EXTERNAL MODULE: external "@mui/icons-material/ShoppingBagOutlined"
var ShoppingBagOutlined_ = __webpack_require__(3193);
var ShoppingBagOutlined_default = /*#__PURE__*/__webpack_require__.n(ShoppingBagOutlined_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/flex-box/index.js + 3 modules
var flex_box = __webpack_require__(9029);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/CustomerService.jsx



const CustomerService = (props)=>{
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ _jsx("g", {
            children: /*#__PURE__*/ _jsx("path", {
                d: "M64 35C64 29.7922 60.3063 25.5161 55.6427 25.153C55.0896 23.2889 53.5951 21.8263 51.712 21.3189C50.4563 10.996 42.0737 3.125 32 3.125C21.9263 3.125 13.5437 10.996 12.2881 21.3189C10.405 21.8263 8.91038 23.2887 8.35738 25.153C8.19538 25.1656 8.03463 25.183 7.87512 25.205V13C7.87512 11.9645 7.03562 11.125 6.00012 11.125C4.96462 11.125 4.12512 11.9645 4.12512 13V26.7057C1.6455 28.4662 0 31.5252 0 35C0 40.2077 3.69375 44.4839 8.35725 44.847C8.90863 46.7052 10.3954 48.1641 12.2701 48.676C13.0689 53.3252 17.1264 56.875 22 56.875H22.4336C23.2181 59.1975 25.4161 60.875 28 60.875H36C39.2395 60.875 41.875 58.2395 41.875 55C41.875 51.7605 39.2395 49.125 36 49.125H28C25.4161 49.125 23.2181 50.8025 22.4336 53.125H22C19.1646 53.125 16.7738 51.188 16.0793 48.568C18.2852 47.807 19.875 45.7113 19.875 43.25V26.75C19.875 24.2801 18.2743 22.1785 16.0562 21.4242C17.2275 13.1423 23.9495 6.875 32 6.875C40.0505 6.875 46.7725 13.1423 47.9437 21.4242C45.7257 22.1785 44.125 24.2801 44.125 26.75V43.25C44.125 46.3516 46.6484 48.875 49.75 48.875H50.25C52.7969 48.875 54.9526 47.173 55.6427 44.847C60.3063 44.4839 64 40.2077 64 35ZM28 52.875H36C37.1717 52.875 38.125 53.8283 38.125 55C38.125 56.1717 37.1717 57.125 36 57.125H28C26.8283 57.125 25.875 56.1717 25.875 55C25.875 53.8283 26.8283 52.875 28 52.875ZM3.75 35C3.75 32.0266 5.67812 29.4665 8.125 28.9641V41.0358C5.67812 40.5335 3.75 37.9734 3.75 35ZM16.125 43.25C16.125 44.2839 15.2839 45.125 14.25 45.125H13.75C12.7161 45.125 11.875 44.2839 11.875 43.25C11.875 37.2332 11.875 32.312 11.875 26.75C11.875 25.7161 12.7161 24.875 13.75 24.875H14.25C15.2839 24.875 16.125 25.7161 16.125 26.75V43.25ZM52.125 43.25C52.125 44.2839 51.2839 45.125 50.25 45.125H49.75C48.7161 45.125 47.875 44.2839 47.875 43.25V26.75C47.875 25.7161 48.7161 24.875 49.75 24.875H50.25C51.2839 24.875 52.125 25.7161 52.125 26.75V43.25ZM55.875 41.0359V28.9643C58.3219 29.4666 60.25 32.0268 60.25 35.0001C60.25 37.9735 58.3219 40.5335 55.875 41.0359Z"
            })
        })
    });
};
/* harmony default export */ const icons_CustomerService = ((/* unused pure expression or super */ null && (CustomerService)));

// EXTERNAL MODULE: ./src/components/nav-link/NavLink.jsx
var NavLink = __webpack_require__(3377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/layouts/customer-dashboard/Navigations.jsx








 // custom styled components
const MainContainer = (0,material_.styled)(material_.Card)(({ theme  })=>({
        paddingBottom: "1.5rem",
        [theme.breakpoints.down("md")]: {
            boxShadow: "none",
            overflowY: "auto",
            height: "calc(100vh - 64px)"
        }
    }));
const StyledNavLink = (0,material_.styled)(({ children , isCurrentPath , ...rest })=>/*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
        ...rest,
        children: children
    }))(({ theme , isCurrentPath  })=>({
        display: "flex",
        alignItems: "center",
        borderLeft: "4px solid",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        marginBottom: "1.25rem",
        justifyContent: "space-between",
        borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
        "& .nav-icon": {
            color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600]
        },
        "&:hover": {
            borderColor: theme.palette.primary.main,
            "& .nav-icon": {
                color: theme.palette.primary.main
            }
        }
    }));
const Navigations = ()=>{
    const { pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(MainContainer, {
        children: linkList.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        p: "26px 30px 1rem",
                        color: "grey.600",
                        fontSize: "12px",
                        children: item.title
                    }),
                    item.list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                            href: item.href,
                            isCurrentPath: pathname.includes(item.href),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex_box/* FlexBox */.hs, {
                                alignItems: "center",
                                gap: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                        color: "inherit",
                                        fontSize: "small",
                                        className: "nav-icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: item.title
                                    })
                                ]
                            })
                        }, item.title))
                ]
            }, item.title))
    });
};
const linkList = [
    {
        title: "DASHBOARD",
        list: [
            {
                href: "/orders",
                title: "Orders",
                icon: (ShoppingBagOutlined_default())
            },
            {
                href: "/wish-list",
                title: "Wishlist",
                icon: icons_material_.FavoriteBorder
            }, 
        ]
    },
    {
        title: "ACCOUNT SETTINGS",
        list: [
            {
                href: "/profile",
                title: "Profile Info",
                icon: icons_material_.Person
            },
            {
                href: "/address",
                title: "Addresses",
                icon: icons_material_.Place
            },
            , 
        ]
    }, 
];
/* harmony default export */ const customer_dashboard_Navigations = (Navigations);


/***/ }),

/***/ 940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6044);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navigations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__]);
components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */ const CustomerDashboardLayout = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_ShopLayout1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            sx: {
                my: "2rem"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 3,
                        xs: 12,
                        sx: {
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigations__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 9,
                        xs: 12,
                        children: children
                    })
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerDashboardLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;