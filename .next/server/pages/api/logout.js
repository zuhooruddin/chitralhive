"use strict";
(() => {
var exports = {};
exports.id = 7030;
exports.ids = [7030];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);

// import { getSession } from "next-auth/react"

// import { authOptions } from "./auth/[...nextauth]"
const signoutCallbackUrl = (/* unused pure expression or super */ null && ("https://chitralhive.com/api/" + "api/auth/logout/"));
process.env.NEXTAUTH_SITE = "http://chitralhive.com/api";
function handler(req, res) {
    "request in logout";
// const session =   getSession({req});
// const { data: session, status } = useSession({req});
// const session = await unstable_getServerSession(req, res, authOptions)
//   (data,status);
// // const { data: session, status } = useSession()
// const session = await getSession({req})
// // const session = await unstable_getServerSession(req, res, authOptions)
// if (session) {
//   // Signed in
//    ("logout Session")
//    ("session token: ", session.token.user)
// } 
// return res.status(200).json({message: 'Logged out returned'})
// const server_ip = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
// if(session){
//   if (req.method === 'POST') {
//     const {username} = req.body
//     const config = {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }
//     const body = {
//       username
//     }
//     try {
//       await axios.post(server_ip+'api/auth/logout/', body, config)
//     } catch(error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error(error.response.data);
//         console.error(error.response.status);
//         console.error(error.response.headers);
//         return res.status(401).json({message: error.response.data.detail})
//       } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//         // http.ClientRequest in node.js
//         console.error(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error', error.message);
//       }
//       console.error(error.config);
//       return res.status(500).json({message: 'Something went wrong. Try again'})
//     }
//     res.status(200).json({message: "User has been logged out"})
//     router.push('/')
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).json({message: `Method ${req.method} is not allowed`})
// }
// }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1535));
module.exports = __webpack_exports__;

})();