"use strict";
(() => {
var exports = {};
exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGoogleProvider": () => (/* binding */ getGoogleProvider)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);


async function fetchGoogleCredentials() {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://api.chitralhive.com/api/" + "getGeneralSetting");
        const data = response.data[0];
        return {
            googleClientId: data.googleid,
            googleClientSecret: data.googlesecret
        };
    } catch (error) {
        throw new Error("Error fetching Google credentials from API.");
    }
}
function getGoogleProvider() {
    return fetchGoogleCredentials().then((credentials)=>{
        ;
        return next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: credentials.googleClientId,
            clientSecret: credentials.googleClientSecret
        });
    });
}



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9440));
module.exports = __webpack_exports__;

})();