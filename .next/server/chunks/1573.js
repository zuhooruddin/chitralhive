"use strict";
exports.id = 1573;
exports.ids = [1573];
exports.modules = {

/***/ 1573:
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



const getProducts = async (slug)=>{
    const url = process.env.BACKEND_API_BASE + "getItemSearchCategory";
    if (slug !== undefined) {
        const args = {
            "id": slug
        };
        let data = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, args).then((res)=>res.data);
        return data;
    }
    return null;
};
const getSectionProduct = async (slug2)=>{
    const url = process.env.BACKEND_API_BASE + "getItemSearchCategory";
    if (slug2 !== undefined) {
        const args = {
            "id": slug2
        };
        let data = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, args).then((res)=>res.data);
        return data;
    }
    return null;
};
const GetWishlist = async ()=>{
    const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        }).then((response)=>response.data);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(process.env.BACKEND_API_BASE + "getWishlist", fetcher);
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "failed to load"
    });
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "loading..."
    });
};
const getindvidualorderbox = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "webind");
    return response.data;
};
const getSectionSequence = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getsection");
    return response.data;
};
const getLatestProducts = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getFearuredProduct");
    return response.data;
};
const getBundles = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getBundels");
    return response.data;
};
const getBrandBundles = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getBrandBundels");
    return response.data;
};
const getProductBundles = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getProductBundels");
    return response.data;
};
const getSlidersFromCloud = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getSlidersFromCloud");
    return response.data;
};
const getSlidersFromLocal = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getsliderimage");
    return response.data;
};
const getFooterItem = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getFooterSettings");
    return response.data;
};
const getGeneralSetting = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(process.env.BACKEND_API_BASE + "getGeneralSetting");
    return response.data;
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