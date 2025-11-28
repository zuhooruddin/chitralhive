"use strict";
(() => {
var exports = {};
exports.id = 2077;
exports.ids = [2077];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);

// import { stripe } from '../../src/utils/stripe'; 
// const { loadStripe } = require('@stripe/stripe-js');
const stripe = __webpack_require__(8174)("sk_test_51NqYEKDw734ydLm24O5xrLXrmGDhvniTpLoUBTULsRVjlgzwGWRmatdGe3an4dDoiIxzh9xqdH1KgIT90rpoMWeW00spc8M3R6");
async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    try {
        const { session_id  } = req.query;
        const session = await stripe.checkout.sessions.retrieve(session_id);
        res.status(200).json(session);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: "An error occurred while fetching payment details."
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(672));
module.exports = __webpack_exports__;

})();