"use strict";
(() => {
var exports = {};
exports.id = 2804;
exports.ids = [2804];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 7716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6381);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_0__]);
utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { getProducts } from '../../src/utils/api/fashion-shop-2'

async function handler(req, res) {
    //  ("Resoponse of Staus Before",res)
    //   ("Request",req)
    ("-------------------------------------------------------------");
    const data = await utils_api_fashion_shop_2__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getProducts */ .Z.getProducts()("Resoponse of getProducts inside helper ", data);
    res.status(200).json(data)("Resoponse of Staus After", res);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const server_ip = "https://api.chitralhive.com/api/" || 0;
// Create axios instance with timeout to prevent hanging
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});
const getProducts = async (slug)=>{
    const url = server_ip + "getItemSearchCategory";
    if (slug !== undefined) {
        try {
            const args = {
                "id": slug
            };
            let data = await axiosInstance.post(url, args).then((res)=>res.data);
            return data;
        } catch (error) {
            console.error("Error fetching products:", error.message);
            return null;
        }
    }
    return null;
};
const getSectionProduct = async (slug2)=>{
    const url = server_ip + "getItemSearchCategory";
    if (slug2 !== undefined) {
        try {
            const args = {
                "id": slug2
            };
            let data = await axiosInstance.post(url, args).then((res)=>res.data);
            return data;
        } catch (error) {
            console.error("Error fetching section products:", error.message);
            return null;
        }
    }
    return null;
};
const GetWishlist = async ()=>{
    const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        }).then((response)=>response.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(server_ip + "getWishlist", fetcher);
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "failed to load"
    });
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "loading..."
    });
};
const getindvidualorderbox = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "webind");
        return response.data;
    } catch (error) {
        console.error("Error fetching individual order box:", error.message);
        return [];
    }
};
const getSectionSequence = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getsection");
        return response.data;
    } catch (error) {
        console.error("Error fetching section sequence:", error.message);
        return [];
    }
};
const getLatestProducts = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getFearuredProduct");
        return response.data;
    } catch (error) {
        console.error("Error fetching latest products:", error.message);
        return [];
    }
};
const getBundles = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getBundels");
        return response.data;
    } catch (error) {
        console.error("Error fetching bundles:", error.message);
        return [];
    }
};
const getBrandBundles = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getBrandBundels");
        return response.data;
    } catch (error) {
        console.error("Error fetching brand bundles:", error.message);
        return [];
    }
};
const getProductBundles = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getProductBundels");
        return response.data;
    } catch (error) {
        console.error("Error fetching product bundles:", error.message);
        return [];
    }
};
const getSlidersFromCloud = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getSlidersFromCloud");
        return response.data;
    } catch (error) {
        console.error("Error fetching sliders from cloud:", error.message);
        return [];
    }
};
const getSlidersFromLocal = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getsliderimage");
        return response.data;
    } catch (error) {
        console.error("Error fetching sliders from local:", error.message);
        return [];
    }
};
const getFooterItem = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getFooterSettings");
        return response.data;
    } catch (error) {
        console.error("Error fetching footer item:", error.message);
        return {};
    }
};
const getGeneralSetting = async ()=>{
    try {
        const response = await axiosInstance.get(server_ip + "getGeneralSetting");
        return response.data;
    } catch (error) {
        console.error("Error fetching general setting:", error.message);
        return [];
    }
};
// const getFeatureProducts = async () => {
//   const response = await axios.get("/api/fashion-shop-2/feature-products");
//   return response.data;
// };
// const getSaleProducts = async () => {
//   const response = await axios.get("/api/fashion-shop-2/sale-products");
//   return response.data;
// };
// const getPopularProducts = async () => {
//   const response = await axios.get("/api/fashion-shop-2/popular-products");
//   return response.data;
// };
// const getBestWeekProducts = async () => {
//   const response = await axios.get("/api/fashion-shop-2/best-week-products");
//   return response.data;
// };
// const getBlogs = async () => {
//   const response = await axios.get("/api/fashion-shop-2/blogs");
//   return response.data;
// }; // eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // getBlogs,
    getProducts,
    getBundles,
    getBrandBundles,
    getSectionProduct,
    getProductBundles,
    getLatestProducts,
    // getFeatureProducts,
    // getPopularProducts,
    // getBestWeekProducts,
    getindvidualorderbox,
    GetWishlist,
    getSectionSequence,
    getSlidersFromCloud,
    getSlidersFromLocal,
    getFooterItem,
    getGeneralSetting
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7716));
module.exports = __webpack_exports__;

})();