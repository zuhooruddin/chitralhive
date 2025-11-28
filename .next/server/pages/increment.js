"use strict";
(() => {
var exports = {};
exports.id = 1538;
exports.ids = [1538];
exports.modules = {

/***/ 5294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// pages/increment.js


function Increment({ initialId  }) {
    // Validate the initialId prop and set a default value if it's not a valid number
    const initialIdValue = !isNaN(initialId) && Number.isInteger(Number(initialId)) ? Number(initialId) : 1;
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialIdValue);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            // Check if the new ID exceeds the maximum limit (1000), and reset it if necessary
            const newId = id >= 299000 ? 1 : id + 1;
            const url = `https://www.amadox.co.uk/collectReward?id=${newId}`;
            // Open the URL in a new browser tab
            window.open(url, "_blank");
            // Update the state with the new ID
            setId(newId);
        }, 100); // Change the interval as needed (e.g., 1000 milliseconds or 1 second)
        // Clean up the interval when the component unmounts
        return ()=>{
            clearInterval(interval);
        };
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Current ID:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: id
            })
        ]
    });
}
Increment.getInitialProps = async ()=>{
    // You can fetch the initial ID from an API or other data source here.
    // For simplicity, we're starting with an initial ID of 1.
    return {
        initialId: 200000
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Increment);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5294));
module.exports = __webpack_exports__;

})();