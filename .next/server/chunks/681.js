"use strict";
exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 681:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _flex_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9029);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(403);







 // custom styled components
const MainContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        top: 50,
        right: 50,
        zIndex: 1501,
        position: "fixed",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }));
const StyledIconButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton)(({ theme  })=>({
        right: 50,
        zIndex: 99,
        bottom: 50,
        padding: 12,
        color: "#fff",
        position: "fixed",
        borderRadius: "50%",
        boxShadow: theme.shadows[12],
        backgroundColor: theme.palette.primary.main,
        ":hover": {
            backgroundColor: theme.palette.primary.main
        }
    }));
const BodyWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme , showBody  })=>({
        overflow: "auto",
        borderRadius: "4px",
        backgroundColor: "white",
        opacity: showBody ? 1 : 0,
        width: showBody ? 300 : 0,
        transition: "transform 0.4s",
        padding: showBody ? 24 : 0,
        boxShadow: theme.shadows[3],
        maxHeight: showBody ? "calc(100vh - 100px)" : 0,
        transform: `translateY(${showBody ? 0 : "10px"})`
    }));
const StyledAvatar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar)(()=>({
        flexGrow: 1,
        height: 100,
        width: "45%",
        cursor: "pointer",
        borderRadius: "10px",
        ":last-of-type": {
            flexGrow: 0
        },
        ":hover": {
            "&::after": {
                opacity: 0.5
            }
        },
        "::after": {
            opacity: 0,
            content: '""',
            width: "100%",
            height: "100%",
            background: "black",
            position: "absolute",
            transition: "all 0.3s"
        }
    }));
const Setting = ()=>{
    const { push  } = useRouter();
    const { updateSettings , settings  } = useSettings();
    const { 0: showBody , 1: setShowBody  } = useState(false);
    return /*#__PURE__*/ _jsx(ClickAwayListener, {
        onClickAway: ()=>setShowBody(false),
        children: /*#__PURE__*/ _jsxs(MainContainer, {
            children: [
                /*#__PURE__*/ _jsx(Tooltip, {
                    title: "Settings & Demos",
                    placement: "left",
                    children: /*#__PURE__*/ _jsxs(StyledIconButton, {
                        onClick: ()=>setShowBody((state)=>!state),
                        "aria-label": showBody ? "Close settings" : "Open settings",
                        sx: {
                            minWidth: "44px",
                            minHeight: "44px"
                        },
                        children: [
                            !showBody && /*#__PURE__*/ _jsx(Settings, {}),
                            showBody && /*#__PURE__*/ _jsx(Close, {})
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs(BodyWrapper, {
                    showBody: showBody ? 1 : 0,
                    children: [
                        /*#__PURE__*/ _jsxs(FlexBox, {
                            gap: 2,
                            children: [
                                /*#__PURE__*/ _jsx(Button, {
                                    fullWidth: true,
                                    onClick: ()=>updateSettings({
                                            direction: "rtl"
                                        }),
                                    color: settings.direction === "rtl" ? "primary" : "secondary",
                                    variant: settings.direction === "rtl" ? "contained" : "outlined",
                                    children: "RTL"
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    fullWidth: true,
                                    onClick: ()=>updateSettings({
                                            direction: "ltr"
                                        }),
                                    color: settings.direction === "ltr" ? "primary" : "secondary",
                                    variant: settings.direction === "ltr" ? "contained" : "outlined",
                                    children: "LTR"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Divider, {
                            sx: {
                                my: 3
                            }
                        }),
                        /*#__PURE__*/ _jsx(H6, {
                            textAlign: "center",
                            mb: 2,
                            children: "Bazaar Demos"
                        }),
                        /*#__PURE__*/ _jsx(FlexBox, {
                            gap: 2,
                            flexWrap: "wrap",
                            children: demos.map((demo)=>/*#__PURE__*/ _jsx(StyledAvatar, {
                                    src: demo.img,
                                    onClick: ()=>push(demo.path)
                                }, demo.id))
                        })
                    ]
                })
            ]
        })
    });
};
const demos = [
    {
        id: 1,
        path: "/market-1",
        img: "/assets/images/landing/page-1.png"
    },
    {
        id: 2,
        path: "/grocery2",
        img: "/assets/images/landing/page-2.png"
    },
    {
        id: 3,
        path: "/fashion-shop",
        img: "/assets/images/landing/page-3.png"
    },
    {
        id: 4,
        path: "/gadget-shop",
        img: "/assets/images/landing/page-4.png"
    },
    {
        id: 5,
        path: "/furniture-shop",
        img: "/assets/images/landing/furniture.png"
    },
    {
        id: 6,
        path: "/gift-shop",
        img: "/assets/images/landing/gift-shop.png"
    },
    {
        id: 7,
        path: "/grocery1",
        img: "/assets/images/landing/grocery1.png"
    },
    {
        id: 8,
        path: "/grocery3",
        img: "/assets/images/landing/grocery3.png"
    },
    {
        id: 9,
        path: "/healthbeauty-shop",
        img: "/assets/images/landing/healthbeauty.png"
    }, 
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Setting)));


/***/ })

};
;