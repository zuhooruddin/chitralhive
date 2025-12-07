"use strict";
exports.id = 4210;
exports.ids = [4210];
exports.modules = {

/***/ 4167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);

const BazaarImage = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("img")((0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_0__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_0__.display));
BazaarImage.defaultProps = {
    display: "block"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazaarImage); // compose,
 // borders,
 // display,
 // flexbox,
 // palette,
 // positions,
 // shadows,
 // sizing,
 // spacing,
 // typography


/***/ }),

/***/ 2659:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const EyeToggleButton = ({ show , click  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        size: "small",
        type: "button",
        onClick: click,
        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Visibility, {
            className: "passwordEye",
            fontSize: "small"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.VisibilityOff, {
            className: "passwordEye",
            fontSize: "small"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EyeToggleButton);


/***/ }),

/***/ 4210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7449);
/* harmony import */ var components_BazaarTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1400);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(403);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _EyeToggleButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2659);
/* harmony import */ var _SocialButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4245);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_14__, swr__WEBPACK_IMPORTED_MODULE_15__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_14__, swr__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const fbStyle = {
    background: "#3B5998",
    color: "white"
};
const googleStyle = {
    background: "#4285F4",
    color: "white"
};
const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(({ children , passwordVisibility , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
        ...rest,
        children: children
    }))(({ theme , passwordVisibility  })=>({
        width: 500,
        padding: "2rem 3rem",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        ".passwordEye": {
            color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
        },
        ".facebookButton": {
            marginBottom: 10,
            ...fbStyle,
            "&:hover": fbStyle
        },
        ".googleButton": {
            ...googleStyle,
            "&:hover": googleStyle
        },
        ".agreement": {
            marginTop: 12,
            marginBottom: 24
        }
    }));
const Login = ()=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)();
    const { 0: loginError , 1: setLoginError  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_16___default().get(url).then((res)=>res.data);
    const server_ip = "https://api.chitralhive.com/api/";
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_15__["default"])(server_ip + "getGeneralSetting", fetcher);
    const { 0: passwordVisibility , 1: setPasswordVisibility  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const togglePasswordVisibility = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        setPasswordVisibility((visible)=>!visible);
    }, []);
    const handleFormSubmit = async (values)=>{
        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.signIn)("credentials", {
            username: values.email,
            password: values.password,
            role: 3,
            callbackUrl: `${window.location.origin}/  `,
            redirect: false
        }).then(function(result) {
            "Result", result;
            if (result.error !== null) {
                if (result.status === 401) {
                    setLoginError(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_13___default()), {
                        variant: "filled",
                        severity: "error",
                        children: "Invalid Credentials.Please try Again"
                    }));
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Invalid Credentials.Please try with correct credentials", {
                        position: react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.POSITION.TOP_RIGHT
                    });
                    setLoginError(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_13___default()), {
                        variant: "filled",
                        severity: "error",
                        children: "Invalid Credentials.Please try Again"
                    }));
                }
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Login Successfully", {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.POSITION.TOP_RIGHT
                });
                router.push(result.url);
            }
        });
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { values , errors , touched , handleBlur , handleChange , handleSubmit  } = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
        initialValues,
        onSubmit: handleFormSubmit,
        validationSchema: formSchema
    });
    const title = process.env.NEXT_PUBLIC_COMPANY_TITLE;
    if (session) {
        router.push("/profile");
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            elevation: 3,
            passwordVisibility: passwordVisibility,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        loginError,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H3, {
                            textAlign: "center",
                            mb: 1,
                            children: [
                                "Welcome to ",
                                data && data.length > 0 ? data[0].site_name : "Site"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Small */ .x4, {
                            mb: 4.5,
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "grey.800",
                            textAlign: "center",
                            children: "Log in with email & password"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            mb: 1.5,
                            fullWidth: true,
                            name: "email",
                            size: "small",
                            type: "email",
                            variant: "outlined",
                            onBlur: handleBlur,
                            value: values.email,
                            onChange: handleChange,
                            label: "Email ",
                            placeholder: "exmple@mail.com",
                            error: !!touched.email && !!errors.email,
                            helperText: touched.email && errors.email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            mb: 2,
                            fullWidth: true,
                            size: "small",
                            name: "password",
                            label: "Password",
                            autoComplete: "on",
                            variant: "outlined",
                            onBlur: handleBlur,
                            onChange: handleChange,
                            value: values.password,
                            placeholder: "*********",
                            type: passwordVisibility ? "text" : "password",
                            error: !!touched.password && !!errors.password,
                            helperText: touched.password && errors.password,
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EyeToggleButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    show: passwordVisibility,
                                    click: togglePasswordVisibility
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            fullWidth: true,
                            type: "submit",
                            color: "primary",
                            variant: "contained",
                            sx: {
                                mb: "1.65rem",
                                height: 44
                            },
                            children: "Login"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButtons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    redirect: "/signup",
                    redirectText: "Sign Up"
                })
            ]
        });
    }
};
const initialValues = {
    email: "",
    password: ""
};
const formSchema = yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
    password: yup__WEBPACK_IMPORTED_MODULE_8__.string().required("Password is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_8__.string().email("invalid email").required("Email is required")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_BazaarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7449);
/* harmony import */ var components_BazaarImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4167);
/* harmony import */ var components_flex_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9029);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(403);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);









const SocialButtons = (props)=>{
    const { redirect ="/login" , redirectText ="Login"  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mb: 2,
                mt: 3.3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "200px",
                        mx: "auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBox */ .hs, {
                        justifyContent: "center",
                        mt: -1.625,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            color: "grey.600",
                            bgcolor: "background.paper",
                            px: 2,
                            children: "or"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_BazaarButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("google"),
                className: "googleButton",
                size: "medium",
                fullWidth: true,
                sx: {
                    height: 44
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazaarImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        src: "/assets/images/icons/google-1.svg",
                        alt: "facebook"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        fontSize: "12px",
                        ml: 1,
                        children: "Continue with Google"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexRowCenter */ .b0, {
                my: "1.25rem",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: "Don't have account?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: redirect,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
                                ml: 1,
                                borderBottom: "1px solid",
                                borderColor: "grey.900",
                                children: redirectText
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_flex_box__WEBPACK_IMPORTED_MODULE_4__/* .FlexBox */ .hs, {
                justifyContent: "center",
                bgcolor: "grey.200",
                borderRadius: "4px",
                py: 2.5,
                children: [
                    "Forgot your password?",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/forgot-password",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
                                ml: 1,
                                borderBottom: "1px solid",
                                borderColor: "grey.900",
                                children: "Reset It"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialButtons);


/***/ })

};
;