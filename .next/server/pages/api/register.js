"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/api/register.js


/* harmony default export */ const register = (async (req, res)=>{
    const router = (0,router_namespaceObject.useRouter)();
    const server_ip = "https://chitralhive.com/api/";
    let accessToken = null;
    if (req.method === "POST") {
        const { username , email , password  } = req.body;
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };
        const body = {
            username,
            email,
            password
        };
        try {
            await external_axios_default().post(server_ip + "registerUser", body, config);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return res.status(401).json({
                    message: error.response.data.detail
                });
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            } else {
            // Something happened in setting up the request that triggered an Error
            }
            return res.status(500).json({
                message: "Something went wrong"
            });
        }
        res.status(200).json({
            message: "User has been created"
        });
        router.push("/");
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).json({
            message: `Method ${req.method} is not allowed`
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2811));
module.exports = __webpack_exports__;

})();