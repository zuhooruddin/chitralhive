"use strict";
exports.id = 8745;
exports.ids = [8745];
exports.modules = {

/***/ 5503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bp": () => (/* binding */ useAppContext),
/* harmony export */   "wI": () => (/* binding */ AppProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // =================================================================================
// =================================================================================
const initialState = {
    isHeaderFixed: false,
    cart: []
};
const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    state: initialState,
    dispatch: ()=>{}
});
const reducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_CART_AMOUNT":
            let cartList = state.cart;
            let cartItem = action.payload;
            let exist = cartList.find((item)=>item.id === cartItem.id);
            if (cartItem.qty < 1) {
                const filteredCart = cartList.filter((item)=>item.id !== cartItem.id);
                return {
                    ...state,
                    cart: filteredCart
                };
            }
            if (exist) {
                if ("bundle" in cartItem && cartItem.bundle) {
                    const newCart1 = cartList.map((item)=>item.id === cartItem.id ? {
                            ...item,
                            qty: parseInt(cartItem.qty) + parseInt(item.qty)
                        } : item);
                    return {
                        ...state,
                        cart: newCart1
                    };
                } else {
                    const newCart2 = cartList.map((item)=>item.id === cartItem.id ? {
                            ...item,
                            qty: cartItem.qty
                        } : item);
                    return {
                        ...state,
                        cart: newCart2
                    };
                }
                return {
                    ...state,
                    cart: newCart
                };
            }
            return {
                ...state,
                cart: [
                    ...cartList,
                    cartItem
                ]
            };
        case "TOGGLE_HEADER":
            return {
                ...state,
                isHeaderFixed: action.payload
            };
        default:
            {
                return state;
            }
    }
};
const AppProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            state,
            dispatch
        }), [
        state,
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: contextValue,
        children: children
    });
};
const useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AppContext)));


/***/ }),

/***/ 8327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // ============================================================
// ============================================================
// SET "rtl" OR "ltr" HERE
// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCALSTORAGE
const initialSettings = {
    direction: "ltr"
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    settings: initialSettings,
    updateSettings: (arg)=>{}
}); // ============================================================
// ============================================================
const SettingsProvider = ({ children  })=>{
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
    const updateSettings = (updatedSetting)=>{
        setSettings(updatedSetting);
        window.localStorage.setItem("bazaar_settings", JSON.stringify(updatedSetting));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!window) return null;
        const getItem = window.localStorage.getItem("bazaar_settings");
        if (getItem) setSettings(JSON.parse(getItem));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            updateSettings
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsProvider);


/***/ }),

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var contexts_SettingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8327);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_SettingContext__WEBPACK_IMPORTED_MODULE_0__/* .SettingsContext */ .J);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);


/***/ })

};
;