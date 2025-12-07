"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_RTL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8074);
/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5503);
/* harmony import */ var contexts_SettingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8327);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var theme_MuiTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6917);
/* harmony import */ var _src_fake_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6047);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8298);
/* harmony import */ var _src_utils_useScrollRestoration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7107);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_RTL__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_13__, _src_loader__WEBPACK_IMPORTED_MODULE_16__]);
([components_RTL__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_13__, _src_loader__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// Lazy load heavy CSS to improve initial load - only load when needed









// Lazy load heavy components that aren't needed immediately
const ToastContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.jsx -> " + "react-toastify"
        ]
    },
    ssr: false
});
const FloatingWhatsApp = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.jsx -> " + "react-floating-whatsapp"
        ]
    },
    ssr: false
});
// Lazy load CSS for toastify - only load when needed
if (false) {}
//Binding events.
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().start());
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done()); // small change
nprogress__WEBPACK_IMPORTED_MODULE_6___default().configure({
    showSpinner: false
});
const App = ({ router , Component , pageProps: { session , ...pageProps }  })=>{
    const AnyComponent = Component;
    const idrisLogo = process.env.NEXT_PUBLIC_IDRIS_LOGO_API_URL;
    const getLayout = AnyComponent.getLayout ?? ((page)=>page);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        // Lazy load heavy CSS only when needed (not on initial load)
        // These will be loaded on-demand when components that need them are rendered
        const loadHeavyCSS = async ()=>{
            // Only load if not already loaded
            if (!document.querySelector('link[href*="quill"]')) {
                const quillCSS = document.createElement("link");
                quillCSS.rel = "stylesheet";
                quillCSS.href = "https://cdn.quilljs.com/1.3.6/quill.snow.css";
                quillCSS.media = "print";
                quillCSS.onload = ()=>{
                    quillCSS.media = "all";
                };
                document.head.appendChild(quillCSS);
            }
        };
        // Load after initial render to not block
        setTimeout(loadHeavyCSS, 2000);
    }, []);
    // useScrollRestoration(router);
    const imgbaseurl = "https://api.chitralhive.com/api/media/";
    // Create axios instance with timeout to prevent hanging
    const axiosWithTimeout = axios__WEBPACK_IMPORTED_MODULE_14___default().create({
        timeout: 5000
    });
    const fetcher = async (url)=>{
        try {
            const res = await axiosWithTimeout.get(url);
            return res.data;
        } catch (error) {
            // Return empty array on error to prevent crashes
            console.error("API Error:", error.message);
            return [];
        }
    };
    const server_ip = "https://api.chitralhive.com/api/";
    // Use SWR with revalidation to cache and share data across components
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_13__["default"])(server_ip + "getGeneralSetting", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
        // Don't retry on error to prevent hanging
        shouldRetryOnError: false,
        // Use stale data if available
        revalidateIfStale: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (false) {}
    }, [
        data
    ]);
    // Memoize FloatingWhatsApp props to prevent unnecessary re-renders
    const whatsappProps = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>({
            phoneNumber: data && data.length > 0 ? data[0].whatsapp : "+923239119309",
            accountName: data && data.length > 0 ? data[0].site_name : "Ecommerce",
            avatar: data && data.length > 0 ? imgbaseurl + data[0].site_logo : "/assets/images/banners/banner-1.png",
            allowEsc: true,
            allowClickAway: true,
            notification: true,
            notificationSound: true
        }), [
        data,
        imgbaseurl
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_10__.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_11__/* .AuthenticationProvider */ .i, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                charSet: "utf-8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "Chitral Hive | Online Chitrali "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Navigate through our wide collection of School, Colleges and other Story Books. Buy Books & other items Online from largest bookstore in Islamabad. Order Now!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                httpEquiv: "Content-Type",
                                content: "text/html; charset=utf-8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "preconnect",
                                href: "https://api.chitralhive.com/api/",
                                crossOrigin: "anonymous"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "dns-prefetch",
                                href: "https://api.chitralhive.com/api/media/"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_loader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                     false && /*#__PURE__*/ 0,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_SettingContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .AppProvider */ .wI, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_MuiTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_RTL__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    children: [
                                        getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnyComponent, {
                                            ...pageProps
                                        })),
                                         false && /*#__PURE__*/ 0
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8440);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4615);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_1__, _emotion_react__WEBPACK_IMPORTED_MODULE_2__, stylis__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_cache__WEBPACK_IMPORTED_MODULE_1__, _emotion_react__WEBPACK_IMPORTED_MODULE_2__, stylis__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






 // ========================================================
// ========================================================
const cacheRTL = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key: "rtl",
    prepend: true,
    stylisPlugins: [
        (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6___default()),
        stylis__WEBPACK_IMPORTED_MODULE_5__.prefixer
    ]
});
const RTL = ({ children  })=>{
    const { settings  } = (0,hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        document.dir = settings.direction;
    }, [
        settings.direction
    ]);
    if (settings.direction === "rtl") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, {
            value: cacheRTL,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RTL);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6047:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/fake-db/mock.js
const MockAdapter = __webpack_require__(6963);
const axios = __webpack_require__(2167);
const Mock = new MockAdapter(axios);
/* harmony default export */ const mock = (Mock);

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/brand.js
const brands = [
    {
        id: 1,
        featured: true,
        name: "Samsung",
        logo: "/assets/images/brands/samsung.png"
    },
    {
        id: 2,
        featured: false,
        name: "Brokeshire’s",
        logo: "/assets/images/brands/brokshire.png"
    },
    {
        id: 3,
        featured: true,
        name: "Levis",
        logo: "/assets/images/brands/levis.png"
    },
    {
        id: 4,
        featured: false,
        name: "Raymond",
        logo: "/assets/images/brands/raymond.png"
    },
    {
        id: 5,
        featured: true,
        name: "Apple",
        logo: "/assets/images/brands/apple-2.png"
    },
    {
        id: 6,
        featured: false,
        name: "Amazon",
        logo: "/assets/images/brands/amazon.png"
    },
    {
        id: 7,
        featured: true,
        name: "AliBaba",
        logo: "/assets/images/brands/alibaba.png"
    },
    {
        id: 8,
        featured: true,
        name: "ebay",
        logo: "/assets/images/brands/ebay.png"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/categories.js
const categories = [
    {
        level: 0,
        featured: true,
        category: "Gadgets",
        name: "Samsung Galaxy-M1",
        banner: "/assets/images/products/samsung.png"
    },
    {
        level: 1,
        featured: true,
        name: "Tomatto",
        category: "Grocery",
        banner: "/assets/images/products/tomato.png"
    },
    {
        level: 0,
        featured: false,
        category: "Beauty",
        name: "Boston Round Cream Pack",
        banner: "/assets/images/products/beauty-cream.png"
    },
    {
        level: 1,
        featured: true,
        category: "Fashion",
        name: "Woman Party Dress",
        banner: "/assets/images/products/red-dress.png"
    },
    {
        level: 0,
        featured: true,
        name: "White Tops",
        category: "Fashion",
        banner: "/assets/images/products/white-tops.png"
    },
    {
        level: 1,
        featured: false,
        category: "Fashion",
        name: "Casual Shirt for Man",
        banner: "/assets/images/products/formal-shirt.png"
    },
    {
        level: 0,
        featured: true,
        category: "Fashion",
        name: "Blue Premium T-shirt",
        banner: "/assets/images/products/blu-tshirt.png"
    },
    {
        level: 1,
        featured: false,
        category: "Fashion",
        name: "Man Trowzer Pant",
        banner: "/assets/images/products/pnat.png"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/customers.js
const customers = [
    {
        phone: "+12345678910",
        email: "ethan@gmail.com",
        balance: "$10,350.25",
        orders: "07",
        name: "Ethan Booth",
        image: "/assets/images/avatars/001-man.svg"
    },
    {
        phone: "+12343458910",
        email: "sofia@gmail.com",
        balance: "$12,350.45",
        orders: "02",
        name: "Sofia Hall",
        image: "/assets/images/avatars/002-girl.svg"
    },
    {
        phone: "+12345678910",
        email: "dominic@gmail.com",
        balance: "$11,345.25",
        orders: "03",
        name: "Dominic Moss",
        image: "/assets/images/avatars/002-woman.svg"
    },
    {
        phone: "+12345678910",
        email: "tilly@gmail.com",
        balance: "$9,540.47",
        orders: "04",
        name: "Tilly Thomson",
        image: "/assets/images/avatars/003-boy.svg"
    },
    {
        phone: "+12345678910",
        email: "finley@gmail.com",
        balance: "$7,250.36",
        orders: "09",
        name: "Finley Henry",
        image: "/assets/images/avatars/003-man-1.svg"
    },
    {
        phone: "+12345678910",
        email: "lora@gmail.com",
        balance: "$8,356.34",
        orders: "09",
        name: "Lola Ryan",
        image: "/assets/images/avatars/004-bald.svg"
    },
    {
        phone: "+12345678910",
        email: "gabriel@gmail.com",
        balance: "$4,370.55",
        orders: "12",
        name: "Gabriel McKenzie",
        image: "/assets/images/avatars/004-woman.svg"
    },
    {
        phone: "+12345678910",
        email: "james@gmail.com",
        balance: "$2,458.15",
        orders: "11",
        name: "James Davey",
        image: "/assets/images/avatars/005-man-2.svg"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/data.js
const cardList = [
    {
        id: 1,
        title: "Order",
        amount1: "32,350",
        amount2: "$9,350",
        color: "info.main",
        percentage: "25.25%"
    },
    {
        id: 2,
        title: "Sold Items",
        amount1: "2,360",
        amount2: "$1,350",
        color: "error.main",
        percentage: "2.65%",
        status: "down"
    },
    {
        id: 3,
        title: "Gross Sale",
        amount1: "$12,460.25",
        amount2: "$11,350",
        color: "success.main",
        percentage: "10.25%"
    },
    {
        id: 4,
        title: "Total Shipping Cost",
        amount1: "$6,240",
        amount2: "$4,350",
        color: "error.main",
        percentage: "13.15%",
        status: "down"
    }, 
];
const recentPurchase = [
    {
        id: "#6d3wedo5",
        amount: "$152.25",
        payment: "Success",
        product: "Aavic Headphone"
    },
    {
        id: "#6d3wedo6",
        amount: "$125.25",
        payment: "Pending",
        product: "Nike Shoes"
    },
    {
        id: "#6d3wedo7",
        amount: "$115.25",
        payment: "Success",
        product: "Premium Shirt For Men"
    },
    {
        id: "#6d3wedo8",
        amount: "$97.25",
        payment: "Pending",
        product: "Polo T-shirt"
    },
    {
        id: "#6d3wedo9",
        amount: "$255.25",
        payment: "Success",
        product: "Jeans Pant"
    }, 
];
const stockOutProducts = [
    {
        amount: "$152.25",
        stock: "00",
        product: "Samsung Glaxy-M1"
    },
    {
        amount: "$125.25",
        stock: "00",
        product: "Nike Shoes"
    },
    {
        amount: "$115.25",
        stock: "00",
        product: "Premium Shirt For Men"
    },
    {
        amount: "$97.25",
        stock: "00",
        product: "Polo T-shirt"
    },
    {
        amount: "$255.25",
        stock: "00",
        product: "Jeans Pant"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/earning-history.js
const earningHistory = [
    {
        no: 1,
        date: "20-04-2022",
        sellerEarning: 200,
        adminCommission: 5.15,
        orderNo: "5256SD6465D32",
        shopName: "The Beauty Shop"
    },
    {
        no: 2,
        date: "19-04-2022",
        shopName: "The Gainner",
        orderNo: "5256SD6465D33",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 3,
        date: "17-04-2022",
        orderNo: "5256SD6465D34",
        shopName: "The Beauty Shop",
        adminCommission: 5.15,
        sellerEarning: 200
    },
    {
        no: 4,
        orderNo: "5256SD6465D35",
        date: "14-04-2022",
        shopName: "The Beauty Shop",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 5,
        orderNo: "5256SD6465D36",
        date: "08-04-2022",
        shopName: "The Beauty Shop",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 6,
        orderNo: "5256SD6465D37",
        date: "01-04-2022",
        shopName: "Beyond Threads",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 7,
        orderNo: "5256SD6465D38",
        date: "26-03-2022",
        shopName: "Beyond Threads",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 8,
        orderNo: "5256SD6465D39",
        date: "16-03-2022",
        shopName: "Beyond Threads",
        adminCommission: 2.5,
        sellerEarning: 250
    },
    {
        no: 9,
        orderNo: "5256SD6465D40",
        date: "12-03-2022",
        shopName: "Beyond Threads",
        adminCommission: 2.5,
        sellerEarning: 250
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/orders.js
const orders = [
    {
        qty: 12,
        amount: "$250",
        id: "6ed34Edf65d",
        status: "Delivered",
        purchaseDate: "19 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 2,
        amount: "$24",
        id: "6ed34Edf65e",
        status: "Pending",
        purchaseDate: "18 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 3,
        amount: "$240",
        id: "6ed34Edf65f",
        status: "Processing",
        purchaseDate: "17 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 6,
        amount: "$210",
        id: "6ed34Edf65g",
        status: "Delivered",
        purchaseDate: "16 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 12,
        amount: "$2000",
        id: "6ed34Edf65h",
        status: "Pending",
        purchaseDate: "15 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 4,
        amount: "$2500",
        id: "6ed34Edf65i",
        status: "Delivered",
        purchaseDate: "12 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 1,
        amount: "$100",
        id: "6ed34Edf65j",
        status: "Processing",
        purchaseDate: "16 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    },
    {
        qty: 6,
        amount: "$780",
        id: "6ed34Edf65k",
        status: "Delivered",
        purchaseDate: "1 April, 2022",
        billingAddress: "19 Moulton Road, GULBERWICK."
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/package-payments.js
const packagePayments = [
    {
        no: 1,
        date: "20-04-2022",
        seller: "Ethan Booth",
        package: "Premium",
        amount: 200,
        payment: "Stripe"
    },
    {
        no: 2,
        date: "19-04-2022",
        seller: "Morgan Benson",
        package: "Gold",
        amount: 115,
        payment: "PayPal"
    },
    {
        no: 3,
        date: "17-04-2022",
        seller: "Hayden Arnold",
        package: "Silver",
        amount: 105,
        payment: "Payoneer"
    },
    {
        no: 4,
        date: "14-04-2022",
        seller: "Connor Birch",
        package: "Premium",
        amount: 215,
        payment: "Stripe"
    },
    {
        no: 5,
        date: "08-04-2022",
        seller: "Jude Sullivan",
        package: "Premium",
        amount: 200,
        payment: "PayPal"
    },
    {
        no: 6,
        date: "01-04-2022",
        seller: "Alex Sykes",
        package: "Silver",
        amount: 100,
        payment: "Visa Card"
    },
    {
        no: 7,
        date: "26-03-2022",
        seller: "Alex Sykes",
        package: "Silver",
        amount: 100,
        payment: "Visa Card"
    },
    {
        no: 8,
        date: "16-03-2022",
        seller: "Alex Sykes",
        package: "Silver",
        amount: 100,
        payment: "Visa Card"
    },
    {
        no: 9,
        date: "12-03-2022",
        seller: "Alex Sykes",
        package: "Silver",
        amount: 100,
        payment: "Visa Card"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/payout-requests.js
const payoutRequests = [
    {
        no: 1,
        date: "20-04-2022",
        status: "Accepted",
        seller: "Ethan Booth",
        totalAmount: 1200,
        requestAmount: 200,
        shopName: "The Beauty Shop"
    },
    {
        no: 2,
        date: "19-04-2022",
        status: "Rejected",
        totalAmount: 250,
        seller: "Sofia Hall",
        requestAmount: 25,
        shopName: "The Gainner"
    },
    {
        no: 3,
        date: "17-04-2022",
        status: "Processing",
        totalAmount: 1300,
        requestAmount: 200,
        shopName: "Tech Tube",
        seller: "Dominic Moss"
    },
    {
        no: 4,
        date: "14-04-2022",
        status: "Accepted",
        shopName: "Smart HD",
        totalAmount: 2200,
        requestAmount: 200,
        seller: "Tilly Thomson"
    },
    {
        no: 5,
        date: "08-04-2022",
        status: "Accepted",
        totalAmount: 700,
        requestAmount: 100,
        shopName: "Dream Boy",
        seller: "Finley Henry"
    },
    {
        no: 6,
        date: "01-04-2022",
        totalAmount: 930,
        seller: "Lola Ryan",
        status: "Processing",
        requestAmount: 130,
        shopName: "Beyond Threads"
    },
    {
        no: 7,
        date: "26-03-2022",
        status: "Rejected",
        totalAmount: 450,
        requestAmount: 50,
        seller: "Gabriel Mckenzie",
        shopName: "Febrick Fashion"
    },
    {
        no: 8,
        date: "16-03-2022",
        status: "Processing",
        totalAmount: 360,
        requestAmount: 60,
        seller: "James Davey",
        shopName: "Icon Boy"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/payouts.js
const payouts = [
    {
        no: 1,
        amount: 1200,
        date: "20-04-2022",
        payment: "Cash",
        sellerInfo: "The Beauty Shop"
    },
    {
        no: 2,
        amount: 250,
        date: "19-04-2022",
        payment: "Visa Cash",
        sellerInfo: "The Gainner"
    },
    {
        no: 3,
        amount: 9300,
        date: "17-04-2022",
        payment: "Stripe",
        sellerInfo: "Tech Tube"
    },
    {
        no: 4,
        amount: 2200,
        date: "14-04-2022",
        payment: "Paypal",
        sellerInfo: "Smart HD"
    },
    {
        no: 5,
        amount: 700,
        date: "08-04-2022",
        payment: "Payoneer",
        sellerInfo: "Dream Boy"
    },
    {
        no: 6,
        amount: 930,
        date: "01-04-2022",
        payment: "Cash",
        sellerInfo: "Beyond Threads"
    },
    {
        no: 7,
        amount: 450,
        date: "26-03-2022",
        payment: "Stripe",
        sellerInfo: "Febrick Fashion"
    },
    {
        no: 8,
        amount: 360,
        date: "16-03-2022",
        payment: "PayPal",
        sellerInfo: "Icon Boy"
    },
    {
        no: 9,
        amount: 120,
        date: "12-03-2022",
        payment: "Cash",
        sellerInfo: "Mobile Gadgets"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/products.js
const products = [
    {
        price: 250,
        published: true,
        id: "6ed34Edf65d",
        category: "Gadgets",
        name: "Samsung Galaxy-M1",
        brand: "/assets/images/brands/samsung.png",
        image: "/assets/images/products/samsung.png"
    },
    {
        price: 10,
        published: true,
        id: "6ed34Edf65d",
        category: "Grocery",
        name: "Tomatto",
        brand: "/assets/images/brands/brokshire.png",
        image: "/assets/images/products/tomato.png"
    },
    {
        price: 24,
        published: false,
        id: "6ed34Edf65d",
        category: "Beauty",
        name: "Boston Round Cream Pack",
        brand: "/assets/images/brands/levis.png",
        image: "/assets/images/products/beauty-cream.png"
    },
    {
        price: 35,
        published: true,
        id: "6ed34Edf65d",
        category: "Fashion",
        name: "Woman Party Dress",
        brand: "/assets/images/brands/raymond.png",
        image: "/assets/images/products/red-dress.png"
    },
    {
        price: 16,
        published: true,
        id: "6ed34Edf65d",
        category: "Fashion",
        name: "White Tops",
        brand: "/assets/images/brands/raymond.png",
        image: "/assets/images/products/white-tops.png"
    },
    {
        price: 26,
        published: false,
        id: "6ed34Edf65d",
        category: "Fashion",
        name: "Casual Shirt for Man",
        brand: "/assets/images/brands/raymond.png",
        image: "/assets/images/products/formal-shirt.png"
    },
    {
        price: 21,
        published: true,
        id: "6ed34Edf65d",
        category: "Fashion",
        name: "Blue Premium T-shirt",
        brand: "/assets/images/brands/raymond.png",
        image: "/assets/images/products/blu-tshirt.png"
    },
    {
        price: 12,
        published: false,
        id: "6ed34Edf65d",
        category: "Fashion",
        name: "Man Trowzer Pant",
        brand: "/assets/images/brands/raymond.png",
        image: "/assets/images/products/pnat.png"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/refundRequests.js
const refundRequest = [
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 250,
        status: "Accepted",
        name: "Samsung Galaxy-M1",
        image: "/assets/images/products/samsung.png"
    },
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 250,
        status: "Accepted",
        name: "Tomatto",
        image: "/assets/images/products/tomato.png"
    },
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 24,
        status: "Pending",
        name: "Boston Round Cream Pack",
        image: "/assets/images/products/beauty-cream.png"
    },
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 250,
        status: "Processing",
        name: "Woman Party Dress",
        image: "/assets/images/products/red-dress.png"
    },
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 250,
        status: "Accepted",
        name: "White Tops",
        image: "/assets/images/products/white-tops.png"
    },
    {
        orderNo: "6ed34Edf65d",
        shopName: "Shopify Store",
        amount: 450,
        status: "Processing",
        name: "Casual Shirt for Man",
        image: "/assets/images/products/formal-shirt.png"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/reviews.js
const reviews = [
    {
        published: true,
        name: "Samsung Galaxy-M1",
        customer: "Gage Pequette",
        image: "/assets/images/products/samsung.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: true,
        name: "Tomatto",
        customer: "Zachary Taylor",
        image: "/assets/images/products/tomato.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: false,
        name: "Boston Round Cream Pack",
        customer: "Ollie Casper",
        image: "/assets/images/products/beauty-cream.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: true,
        name: "Woman Party Dress",
        customer: "Tony Richardson",
        image: "/assets/images/products/red-dress.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: true,
        name: "White Tops",
        customer: "Zach Marshall",
        image: "/assets/images/products/white-tops.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: false,
        name: "Casual Shirt for Man",
        customer: "Ken Matthews",
        image: "/assets/images/products/formal-shirt.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: true,
        name: "Blue Premium T-shirt",
        customer: "Nathan Clark",
        image: "/assets/images/products/blu-tshirt.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    },
    {
        published: false,
        name: "Man Trowzer Pant",
        customer: "Bruce Reynolds",
        image: "/assets/images/products/pnat.png",
        comment: "“But I must explain to you how all this of denouncing pleasure.”"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/sellers.js
const sellers = [
    {
        phone: "+12345678910",
        balance: 10350.25,
        name: "Ethan Booth",
        shopName: "The Beauty",
        package: "Premium",
        published: true,
        image: "/assets/images/avatars/001-man.svg"
    },
    {
        phone: "+12343458910",
        balance: 12350.45,
        name: "Sofia Hall",
        shopName: "Mobile Gadgets",
        package: "Gold",
        published: true,
        image: "/assets/images/avatars/002-girl.svg"
    },
    {
        phone: "+12345678910",
        balance: 11345.25,
        shopName: "Tech Tube",
        package: "Premium",
        published: true,
        name: "Dominic Moss",
        image: "/assets/images/avatars/002-woman.svg"
    },
    {
        phone: "+12345678910",
        balance: 9540.47,
        package: "Silver",
        published: true,
        shopName: "Beyond Threads",
        name: "Tilly Thomson",
        image: "/assets/images/avatars/003-boy.svg"
    },
    {
        phone: "+12345678910",
        balance: 7250.36,
        package: "Gold",
        published: true,
        shopName: "Beauty Shop",
        name: "Finley Henry",
        image: "/assets/images/avatars/003-man-1.svg"
    },
    {
        phone: "+12345678910",
        balance: 8356.34,
        package: "Silver",
        published: true,
        shopName: "Febrick Fashion",
        name: "Lola Ryan",
        image: "/assets/images/avatars/004-bald.svg"
    },
    {
        phone: "+12345678910",
        balance: 4370.55,
        package: "Gold",
        published: true,
        shopName: "The Fashion",
        name: "Gabriel McKenzie",
        image: "/assets/images/avatars/004-woman.svg"
    },
    {
        phone: "+12345678910",
        balance: 2458.15,
        package: "Premium",
        published: true,
        shopName: "Icon Boy",
        name: "James Davey",
        image: "/assets/images/avatars/005-man-2.svg"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/dashboard/index.js














mock.onGet("/api/dashboard-cards").reply(()=>{
    try {
        return [
            200,
            cardList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/recent-purchase").reply(()=>{
    try {
        return [
            200,
            recentPurchase
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/stock-out-products").reply(()=>{
    try {
        return [
            200,
            stockOutProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/products").reply(()=>{
    try {
        return [
            200,
            products
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/category").reply(()=>{
    try {
        return [
            200,
            categories
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/brands").reply(()=>{
    try {
        return [
            200,
            brands
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/reviews").reply(()=>{
    try {
        return [
            200,
            reviews
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/orders").reply(()=>{
    try {
        return [
            200,
            orders
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/customers").reply(()=>{
    try {
        return [
            200,
            customers
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/refund-requests").reply(()=>{
    try {
        return [
            200,
            refundRequest
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/sellers").reply(()=>{
    try {
        return [
            200,
            sellers
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/package-payments").reply(()=>{
    try {
        return [
            200,
            packagePayments
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/earning-history").reply(()=>{
    try {
        return [
            200,
            earningHistory
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/payouts").reply(()=>{
    try {
        return [
            200,
            payouts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/payout-requests").reply(()=>{
    try {
        return [
            200,
            payoutRequests
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/fashion-shop-2/data.js
// products
const data_products = [
    {
        url: "#",
        price: 210,
        reviews: 12,
        category: "Men's Fashion",
        id: "62c56550a8d0b277770b9a0a",
        name: "Silver High Neck Sweater",
        img: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        category: "Women's Fashion",
        name: "Yellow Casual Sweater",
        id: "62c56550a8d0b277770b9a0b",
        img: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
    },
    {
        url: "#",
        price: 140,
        reviews: 13,
        category: "Men's Fashion",
        name: "Denim Blue Jeans",
        id: "62c56550a8d0b277770b9a0c",
        img: "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png"
    },
    {
        url: "#",
        price: 180,
        reviews: 21,
        category: "Men's Fashion",
        name: "Black White Sweater",
        id: "62c56550a8d0b277770b9a0d",
        img: "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        category: "Women's Fashion",
        name: "Gray Overcoat Women",
        id: "62c56550a8d0b277770b9a0e",
        img: "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png"
    },
    {
        url: "#",
        price: 140,
        reviews: 13,
        category: "Fashion",
        name: "Women's Fashion",
        id: "62c56550a8d0b277770b9a0f",
        img: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png"
    },
    {
        url: "#",
        price: 210,
        reviews: 12,
        name: "Nike Red",
        category: "Men's Fashion",
        id: "62c5a6cce541ffcc58accf8d",
        img: "/assets/images/products/Fashion/Shoes/1.Nike Red.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        name: "North Star Blue",
        category: "Women's Fashion",
        id: "62c5a6d930eff1fa830af885",
        img: "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png"
    }, 
]; // feature products
const featureProducts = [
    {
        url: "#",
        price: 310,
        reviews: 1,
        category: "Men's Fashion",
        id: "62c5660aa8d0b277770b9a11",
        name: "Denim Classic Blue Jeans",
        img: "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png"
    },
    {
        url: "#",
        price: 310,
        reviews: 2,
        category: "Women's Fashion",
        name: "Double Wool Overcoat",
        id: "62c5660aa8d0b277770b9a12",
        img: "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png"
    },
    {
        url: "#",
        price: 1140,
        reviews: 1,
        category: "Men's Fashion",
        name: "Royal Black Suit Pant",
        id: "62c5660aa8d0b277770b9a13",
        img: "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png"
    },
    {
        url: "#",
        price: 180,
        reviews: 3,
        name: "Blue Trousers",
        category: "Men's Fashion",
        id: "62c5660aa8d0b277770b9a14",
        img: "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png"
    },
    {
        url: "#",
        price: 140,
        reviews: 13,
        category: "Fashion",
        name: "Women's Fashion",
        id: "62c5660aa8d0b277770b9a15",
        img: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        category: "Women's Fashion",
        name: "Gray Overcoat Women",
        id: "62c5660aa8d0b277770b9a156",
        img: "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png"
    },
    {
        url: "#",
        price: 140,
        reviews: 13,
        category: "Fashion",
        name: "Women's Fashion",
        id: "62c5660aa8d0b277770b9a17",
        img: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png"
    }, 
]; // sale products
const saleProducts = [
    {
        url: "#",
        price: 310,
        reviews: 1,
        category: "Men's Fashion",
        id: "62c5669ca8d0b277770b9a68",
        name: "Denim Classic Blue Jeans",
        img: "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png"
    },
    {
        url: "#",
        price: 310,
        reviews: 2,
        category: "Women's Fashion",
        name: "Double Wool Overcoat",
        id: "62c5669ca8d0b277770b9a69",
        img: "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png"
    },
    {
        url: "#",
        price: 1140,
        reviews: 1,
        category: "Men's Fashion",
        name: "Royal Black Suit Pant",
        id: "62c5669ca8d0b277770b9a70",
        img: "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png"
    }, 
]; // latest products
const latestProducts = [
    {
        url: "#",
        price: 210,
        reviews: 12,
        name: "Nike Red",
        category: "Men's Fashion",
        id: "62c5a6cce541ffcc58accf8d",
        img: "/assets/images/products/Fashion/Shoes/1.Nike Red.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        name: "North Star Blue",
        category: "Women's Fashion",
        id: "62c5a6d930eff1fa830af885",
        img: "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png"
    },
    {
        url: "#",
        price: 110,
        reviews: 10,
        name: "Puma Black",
        category: "Women's Fashion",
        id: "62c5669ca8d0b277770b9a6c",
        img: "/assets/images/products/Fashion/Shoes/3.PumaBlack.png"
    }, 
]; // best Week Products
const bestWeekProducts = [
    {
        url: "#",
        price: 140,
        reviews: 13,
        name: "Black Metal Ring",
        category: "Women's Fashion",
        id: "62c5669ca8d0b277770b9a71",
        img: "/assets/images/products/Fashion/Jewellery/2.Black Metal Ring.png"
    },
    {
        url: "#",
        price: 1140,
        reviews: 1,
        category: "Women's Fashion",
        id: "62c5669ca8d0b277770b9a72",
        name: "Heavy Stone Colorful Necklace",
        img: "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png"
    },
    {
        url: "#",
        price: 310,
        reviews: 2,
        category: "Women's Fashion",
        name: "Indian Copper Earrings",
        id: "62c5669ca8d0b277770b9a73",
        img: "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png"
    }, 
]; // popular Products
const popularProducts = [
    {
        url: "#",
        price: 110,
        reviews: 10,
        category: "Women's Fashion",
        name: "Gray Overcoat Women",
        id: "62c5669ca8d0b277770b9a7a",
        img: "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png"
    },
    {
        url: "#",
        price: 140,
        reviews: 13,
        category: "Fashion",
        name: "Women's Fashion",
        id: "62c5669ca8d0b277770b9a7b",
        img: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png"
    },
    {
        url: "#",
        price: 180,
        reviews: 3,
        name: "Blue Trousers",
        category: "Men's Fashion",
        id: "62c5669ca8d0b277770b9a7c",
        img: "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png"
    }, 
]; // blogs
const blogs = [
    {
        url: "#",
        date: "21 SEP",
        id: "62c5a445e3d78b2828205e22",
        title: "30% Off Coupon for Black Friday",
        img: "/assets/images/blogs/blog-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…"
    },
    {
        url: "#",
        date: "21 SEP",
        id: "62c5a4548f8c98b1700257fb",
        title: "10% Discount for Cosmatics",
        img: "/assets/images/blogs/blog-2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…"
    },
    {
        url: "#",
        date: "21 SEP",
        id: "62c5a4668249d8018948abfa",
        title: " Buy 2 get 1 free Offer",
        img: "/assets/images/blogs/blog-3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/fashion-shop-2/index.js

 // get all products
mock.onGet("/api/fashion-shop-2/products").reply(()=>{
    try {
        return [
            200,
            data_products
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get feature products
mock.onGet("/api/fashion-shop-2/feature-products").reply(()=>{
    try {
        return [
            200,
            data_products
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get sale products
mock.onGet("/api/fashion-shop-2/sale-products").reply(()=>{
    try {
        return [
            200,
            saleProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get latest products
mock.onGet("/api/fashion-shop-2/lasest-products").reply(()=>{
    try {
        return [
            200,
            latestProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get best week products
mock.onGet("/api/fashion-shop-2/best-week-products").reply(()=>{
    try {
        return [
            200,
            bestWeekProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get popular products
mock.onGet("/api/fashion-shop-2/popular-products").reply(()=>{
    try {
        return [
            200,
            popularProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
}); // get blogs
mock.onGet("/api/fashion-shop-2/blogs").reply(()=>{
    try {
        return [
            200,
            blogs
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/fashion-shop/fashion-store-data.js
const flashDealsData = [
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 7164715289
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 5567565503
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 8850904069
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 7525085761
    },
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8770107119
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 9042058779
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 9245877597
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 915565643
    },
    {
        price: 299,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 5715764445
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 6196630337
    }, 
];
const newArrivalsList = [
    {
        price: 150,
        title: "Sunglass",
        imgUrl: "/assets/images/products/imagegoggles.png",
        discount: 8,
        id: 1670078035,
        rating: 5
    },
    {
        price: 250,
        title: "Makeup",
        imgUrl: "/assets/images/products/lipstick (2).png",
        discount: 8,
        id: 3302401429,
        rating: 4
    },
    {
        price: 350,
        title: "Smart Watch",
        imgUrl: "/assets/images/products/bgwatch.png",
        discount: 10,
        id: 814272833,
        rating: 5
    },
    {
        price: 15,
        title: "Lipstick",
        imgUrl: "/assets/images/products/lipstick (1).png",
        discount: 5,
        id: 8169421085,
        rating: 4
    },
    {
        price: 55,
        title: "Green plant",
        imgUrl: "/assets/images/products/lipstick (4).png",
        discount: 7,
        id: 8398582292,
        rating: 2
    },
    {
        price: 535,
        title: "Bonsai tree",
        imgUrl: "/assets/images/products/lipstick (3).png",
        discount: 6,
        id: 6046531880,
        rating: 5
    },
    {
        price: 350,
        title: "Smart Watch",
        imgUrl: "/assets/images/products/bgwatch.png",
        discount: 10,
        id: 814272833,
        rating: 5
    },
    {
        price: 55,
        title: "Green plant",
        imgUrl: "/assets/images/products/lipstick (4).png",
        discount: 7,
        id: 8398582292,
        rating: 2
    }, 
];
const dealOfTheWeekList = [
    {
        imgUrl: "/assets/images/products/sunglass.png",
        brand: "Say Ban Sunglass",
        off: 50
    },
    {
        imgUrl: "/assets/images/products/nike.png",
        brand: "Yike Shoe Air Max",
        off: 30
    },
    {
        imgUrl: "/assets/images/products/apple-watch.png",
        brand: "Air Jordan",
        off: 40
    },
    {
        imgUrl: "/assets/images/products/perfume.png",
        brand: "Perfume",
        off: 20
    },
    {
        imgUrl: "/assets/images/products/sunglass.png",
        brand: "Say Ban Sunglass",
        off: 50
    },
    {
        imgUrl: "/assets/images/products/nike.png",
        brand: "Yike Shoe Air Max",
        off: 30
    },
    {
        imgUrl: "/assets/images/products/apple-watch.png",
        brand: "Air Jordan",
        off: 40
    },
    {
        imgUrl: "/assets/images/products/perfume.png",
        brand: "Perfume",
        off: 20
    }, 
];
const hotDealsData = [
    {
        productName: "Apple Watch Series 4 (Black)",
        expireDate: "Dec 5, 2022",
        imgUrl: "/assets/images/products/xiaomi-watch.png"
    },
    {
        productName: "Apple Watch Series 4 (Black)",
        expireDate: "Dec 5, 2022",
        imgUrl: "/assets/images/products/xiaomi-watch.png"
    },
    {
        productName: "Apple Watch Series 4 (Black)",
        expireDate: "Dec 5, 2022",
        imgUrl: "/assets/images/products/xiaomi-watch.png"
    }, 
];
const trendingItems = [
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 56,
        id: 9766792956
    },
    {
        price: 140,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 23,
        id: 7459423931
    },
    {
        price: 200,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 42,
        id: 6309213496
    },
    {
        price: 450,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 39,
        id: 391400042
    },
    {
        price: 750,
        title: "ASUS ROG Strix G15",
        rating: 1,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 24,
        id: 4699929309
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 56,
        id: 952795536
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 54,
        id: 2130678973
    }, 
];
const serviceList = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        subtitle: "Start from $10"
    },
    {
        icon: "MoneyGuarantee",
        title: "Money Guarantee",
        subtitle: "7 Days Back"
    },
    {
        icon: "AlarmClock",
        title: "365 Days",
        subtitle: "For free return"
    },
    {
        icon: "Payment",
        title: "Payment",
        subtitle: "Secure system"
    },
    {
        icon: "OnlineSupport",
        title: "Online Support",
        subtitle: "24/7 daily"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/fashion-shop/carouselsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/fashion-store/deal-of-the-week").reply(()=>{
    try {
        return [
            200,
            dealOfTheWeekList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/fashion-store/hot-deals").reply(()=>{
    try {
        return [
            200,
            hotDealsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/fashion-shop/sectionDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/fashion-store/flash-deals").reply(async ()=>{
    try {
        return [
            200,
            flashDealsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/fashion-store/new-arrivals").reply(()=>{
    try {
        return [
            200,
            newArrivalsList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/fashion-store/trending-items").reply(()=>{
    try {
        return [
            200,
            trendingItems
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/fashion-store/service-list").reply(()=>{
    try {
        return [
            200,
            serviceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/furniture-shop/furnitureShopData.js
const furnitureShopNavigation = [
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "Home",
                title: "Home",
                href: "/product/search/Dariry & Eggs"
            },
            {
                icon: "Popular",
                title: "Popular Products",
                href: "/product/search/Breakfast"
            },
            {
                icon: "Trending",
                title: "Trending Products",
                href: "/product/search/Frozen"
            },
            {
                icon: "Products",
                title: "All Products",
                href: "/product/search/vegetables"
            }, 
        ]
    },
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "Chair",
                title: "Chair",
                href: "/product/search/vegetables",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Decoration",
                title: "Decors",
                href: "/product/search/Fruits & Vegetables",
                child: [
                    {
                        title: "Onion",
                        href: "/product/search/Onion"
                    },
                    {
                        title: "Potato",
                        href: "/product/search/Potato"
                    },
                    {
                        title: "Vegetable Pack",
                        href: "/product/search/Vegetable Pack"
                    }, 
                ]
            },
            {
                icon: "Interior",
                title: "Interior",
                href: "/product/search/Dariry & Eggs",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Furniture",
                title: "Furniture",
                href: "/product/search/Dariry & Eggs",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Sofa",
                title: "Sofa",
                href: "/product/search/Breakfast",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Stool",
                title: "Stool",
                href: "/product/search/Frozen",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Wardrobe",
                title: "Wardrobe",
                href: "/product/search/Organic",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Dining",
                title: "Dining",
                href: "/product/search/Canned Food",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Living",
                title: "Living",
                href: "/product/search/Coffee & Snacks"
            },
            {
                icon: "RoundTable",
                title: "Coffee Tea Table",
                href: "/product/search/Coffee & Snacks"
            },
            {
                icon: "RoomSet",
                title: "Living Room Sets",
                href: "/product/search/Coffee & Snacks"
            }, 
        ]
    }, 
];
const topNewProducts = [
    {
        price: 200,
        title: "Grey Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (1).png",
        discount: 5,
        status: "",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 9166392247
    },
    {
        price: 125,
        title: "Black Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (2).png",
        discount: 0,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3568601376
    },
    {
        price: 150,
        title: "Comfortable Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (3).png",
        discount: 20,
        status: "",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7295351859
    },
    {
        price: 146,
        title: "Study Chair",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture (4).png",
        discount: 5,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7882384109
    },
    {
        price: 138,
        title: "Study Gold Chair",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (6).png",
        discount: 0,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3806497434
    },
    {
        price: 100,
        title: "Double Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (7).png",
        discount: 13,
        status: "",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 783537235
    }, 
];
const topSellingProducts = [
    {
        price: 146,
        title: "Study Chair",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture (4).png",
        discount: 5,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7882384109
    },
    {
        price: 138,
        title: "Study Gold Chair",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (6).png",
        discount: 0,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3806497434
    },
    {
        price: 100,
        title: "Double Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (7).png",
        discount: 13,
        status: "",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 783537235
    },
    {
        price: 457,
        title: "Brown Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (8).png",
        discount: 0,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 6886713098
    },
    {
        price: 110,
        title: "Arm Sofa",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (9).png",
        discount: 17,
        status: "",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 4553983073
    },
    {
        price: 146,
        title: "Couple Sofa",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture.png",
        discount: 2,
        status: "New",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 8883030738
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/furniture-shop/navigationDB.js


mock.onGet("/api/furniture-shop/navigation").reply(()=>{
    try {
        return [
            200,
            furnitureShopNavigation
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/data/bazaar-react-database.js
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const bazaar_react_database = ([
    {
        price: 168,
        title: "Lord 2019",
        imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
        category: "automotive",
        unit: "kg",
        discount: 8,
        id: "7222243834583537",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/1.Ford2019.png",
            "/assets/images/products/Automotive/1.Ford2019.png",
            "/assets/images/products/Automotive/1.Ford2019.png", 
        ]
    },
    {
        price: 226,
        title: "Budi 2017",
        imgUrl: "/assets/images/products/Automotive/2.Audi2017.png",
        category: "automotive",
        discount: 6,
        id: "6270512109915791",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/2.Audi2017.png",
            "/assets/images/products/Automotive/2.Audi2017.png",
            "/assets/images/products/Automotive/2.Audi2017.png", 
        ]
    },
    {
        price: 101,
        title: "Resla 2015",
        imgUrl: "/assets/images/products/Automotive/3.Tesla2015.png",
        category: "automotive",
        discount: 10,
        id: "1499483877456218",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/3.Tesla2015.png",
            "/assets/images/products/Automotive/3.Tesla2015.png",
            "/assets/images/products/Automotive/3.Tesla2015.png", 
        ]
    },
    {
        price: 241,
        title: "Xorsche 2018",
        imgUrl: "/assets/images/products/Automotive/4.Porsche2018.png",
        category: "automotive",
        discount: 7,
        id: "7645684541406523",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/4.Porsche2018.png",
            "/assets/images/products/Automotive/4.Porsche2018.png",
            "/assets/images/products/Automotive/4.Porsche2018.png", 
        ]
    },
    {
        price: 236,
        title: "Lord 2018",
        imgUrl: "/assets/images/products/Automotive/5.Ford2018.png",
        category: "automotive",
        discount: 7,
        id: "7388289389097056",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/5.Ford2018.png",
            "/assets/images/products/Automotive/5.Ford2018.png",
            "/assets/images/products/Automotive/5.Ford2018.png", 
        ]
    },
    {
        price: 117,
        title: "Lord 2020",
        imgUrl: "/assets/images/products/Automotive/6.Ford2020.png",
        category: "automotive",
        discount: 6,
        id: "2888627310384324",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/6.Ford2020.png",
            "/assets/images/products/Automotive/6.Ford2020.png",
            "/assets/images/products/Automotive/6.Ford2020.png", 
        ]
    },
    {
        price: 291,
        title: "Witsubishi 2018",
        imgUrl: "/assets/images/products/Automotive/7.Mitsubishi2018.png",
        category: "automotive",
        discount: 9,
        id: "2908155613760488",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/7.Mitsubishi2018.png",
            "/assets/images/products/Automotive/7.Mitsubishi2018.png",
            "/assets/images/products/Automotive/7.Mitsubishi2018.png", 
        ]
    },
    {
        price: 140,
        title: "WMB 2019",
        imgUrl: "/assets/images/products/Automotive/8.BMW2019.png",
        category: "automotive",
        discount: 8,
        id: "29241195756827887",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/8.BMW2019.png",
            "/assets/images/products/Automotive/8.BMW2019.png",
            "/assets/images/products/Automotive/8.BMW2019.png", 
        ]
    },
    {
        price: 143,
        title: "Loyota 2018",
        imgUrl: "/assets/images/products/Automotive/9.Toyota2018.png",
        category: "automotive",
        discount: 5,
        id: "02426374266957243",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/9.Toyota2018.png",
            "/assets/images/products/Automotive/9.Toyota2018.png",
            "/assets/images/products/Automotive/9.Toyota2018.png", 
        ]
    },
    {
        price: 190,
        title: "Wercedes Benz2019",
        imgUrl: "/assets/images/products/Automotive/10.MercedesBenz2019.png",
        category: "automotive",
        discount: 10,
        id: "7316276988248163",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/10.MercedesBenz2019.png",
            "/assets/images/products/Automotive/10.MercedesBenz2019.png",
            "/assets/images/products/Automotive/10.MercedesBenz2019.png", 
        ]
    },
    {
        price: 140,
        title: "Lord 2015",
        imgUrl: "/assets/images/products/Automotive/11.Ford2015.png",
        category: "automotive",
        discount: 7,
        id: "1552485948265332",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/11.Ford2015.png",
            "/assets/images/products/Automotive/11.Ford2015.png",
            "/assets/images/products/Automotive/11.Ford2015.png", 
        ]
    },
    {
        price: 262,
        title: "Wercedes Benz2018",
        imgUrl: "/assets/images/products/Automotive/12.MercedesBenz2018.png",
        category: "automotive",
        discount: 6,
        id: "631895451439084",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/12.MercedesBenz2018.png",
            "/assets/images/products/Automotive/12.MercedesBenz2018.png",
            "/assets/images/products/Automotive/12.MercedesBenz2018.png", 
        ]
    },
    {
        price: 256,
        title: "Wercedes Benz2017",
        imgUrl: "/assets/images/products/Automotive/13.MercedesBenz2017.png",
        category: "automotive",
        discount: 5,
        id: "6700897430836932",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/13.MercedesBenz2017.png",
            "/assets/images/products/Automotive/13.MercedesBenz2017.png",
            "/assets/images/products/Automotive/13.MercedesBenz2017.png", 
        ]
    },
    {
        price: 196,
        title: "ACURA 2015",
        imgUrl: "/assets/images/products/Automotive/14.ACURA2015.png",
        category: "automotive",
        discount: 5,
        id: "07304705352695673",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/14.ACURA2015.png",
            "/assets/images/products/Automotive/14.ACURA2015.png",
            "/assets/images/products/Automotive/14.ACURA2015.png", 
        ]
    },
    {
        price: 256,
        title: "Wclaren 2010",
        imgUrl: "/assets/images/products/Automotive/15.Maclaren2010.png",
        category: "automotive",
        discount: 8,
        id: "48896596025717165",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/15.Maclaren2010.png",
            "/assets/images/products/Automotive/15.Maclaren2010.png",
            "/assets/images/products/Automotive/15.Maclaren2010.png", 
        ]
    },
    {
        price: 215,
        title: "CHERY 2019",
        imgUrl: "/assets/images/products/Automotive/16.CHERY2019.png",
        category: "automotive",
        discount: 7,
        id: "745601632283764",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/16.CHERY2019.png",
            "/assets/images/products/Automotive/16.CHERY2019.png",
            "/assets/images/products/Automotive/16.CHERY2019.png", 
        ]
    },
    {
        price: 209,
        title: "Aston Martin 2015",
        imgUrl: "/assets/images/products/Automotive/17.AstonMartin2015.png",
        category: "automotive",
        discount: 10,
        id: "050462580795485046",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/17.AstonMartin2015.png",
            "/assets/images/products/Automotive/17.AstonMartin2015.png",
            "/assets/images/products/Automotive/17.AstonMartin2015.png", 
        ]
    },
    {
        price: 244,
        title: "Budi 2019",
        imgUrl: "/assets/images/products/Automotive/18.Audi2019.png",
        category: "automotive",
        discount: 9,
        id: "5759837782376804",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/18.Audi2019.png",
            "/assets/images/products/Automotive/18.Audi2019.png",
            "/assets/images/products/Automotive/18.Audi2019.png", 
        ]
    },
    {
        price: 161,
        title: "Kissan 2017",
        imgUrl: "/assets/images/products/Automotive/19.Nissan2017.png",
        category: "automotive",
        discount: 7,
        id: "253807887146561",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/19.Nissan2017.png",
            "/assets/images/products/Automotive/19.Nissan2017.png",
            "/assets/images/products/Automotive/19.Nissan2017.png", 
        ]
    },
    {
        price: 202,
        title: "Hundai 2020",
        imgUrl: "/assets/images/products/Automotive/20.Hyundai2020.png",
        category: "automotive",
        discount: 7,
        id: "2533239812248598",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/20.Hyundai2020.png",
            "/assets/images/products/Automotive/20.Hyundai2020.png",
            "/assets/images/products/Automotive/20.Hyundai2020.png", 
        ]
    },
    {
        price: 279,
        title: "LALA 2015",
        imgUrl: "/assets/images/products/Automotive/21.TATA2015.png",
        category: "automotive",
        discount: 5,
        id: "4501673519233724",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/21.TATA2015.png",
            "/assets/images/products/Automotive/21.TATA2015.png",
            "/assets/images/products/Automotive/21.TATA2015.png", 
        ]
    },
    {
        price: 102,
        title: "Lord 2011",
        imgUrl: "/assets/images/products/Automotive/22.Ford2011.png",
        category: "automotive",
        discount: 5,
        id: "7745174121248635",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/22.Ford2011.png",
            "/assets/images/products/Automotive/22.Ford2011.png",
            "/assets/images/products/Automotive/22.Ford2011.png", 
        ]
    },
    {
        price: 172,
        title: "Eerrari 2020",
        imgUrl: "/assets/images/products/Automotive/23.Ferrari2020.png",
        category: "automotive",
        discount: 10,
        id: "8769395747361355",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/23.Ferrari2020.png",
            "/assets/images/products/Automotive/23.Ferrari2020.png",
            "/assets/images/products/Automotive/23.Ferrari2020.png", 
        ]
    },
    {
        price: 128,
        title: "WMB 2020",
        imgUrl: "/assets/images/products/Automotive/24.BMW2020.png",
        category: "automotive",
        discount: 8,
        id: "12330963912417348",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/24.BMW2020.png",
            "/assets/images/products/Automotive/24.BMW2020.png",
            "/assets/images/products/Automotive/24.BMW2020.png", 
        ]
    },
    {
        price: 256,
        title: "Wazda 2014",
        imgUrl: "/assets/images/products/Automotive/25.Mazda2014.png",
        category: "automotive",
        discount: 9,
        id: "2532223161496625",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/25.Mazda2014.png",
            "/assets/images/products/Automotive/25.Mazda2014.png",
            "/assets/images/products/Automotive/25.Mazda2014.png", 
        ]
    },
    {
        price: 142,
        title: "KIA 2020",
        imgUrl: "/assets/images/products/Automotive/26.KIA2020.png",
        category: "automotive",
        discount: 5,
        id: "46268774996962425",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/26.KIA2020.png",
            "/assets/images/products/Automotive/26.KIA2020.png",
            "/assets/images/products/Automotive/26.KIA2020.png", 
        ]
    },
    {
        price: 191,
        title: "Shevrolet 2013",
        imgUrl: "/assets/images/products/Automotive/27.Chevrolet2013.png",
        category: "automotive",
        discount: 8,
        id: "21554875446547594",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/27.Chevrolet2013.png",
            "/assets/images/products/Automotive/27.Chevrolet2013.png",
            "/assets/images/products/Automotive/27.Chevrolet2013.png", 
        ]
    },
    {
        price: 300,
        title: "Xorsche 2020",
        imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
        category: "automotive",
        discount: 5,
        id: "38553442244076086",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/28.Porsche2020.png",
            "/assets/images/products/Automotive/28.Porsche2020.png",
            "/assets/images/products/Automotive/28.Porsche2020.png", 
        ]
    },
    {
        price: 133,
        title: "Capgnold WX-R",
        imgUrl: "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
        category: "bikes",
        discount: 10,
        id: "09958080057251117",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png", 
        ]
    },
    {
        price: 137,
        title: "Hero 2017",
        imgUrl: "/assets/images/products/Bikes/2.Hero2017.png",
        category: "bikes",
        discount: 5,
        id: "4887644084298386",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/2.Hero2017.png",
            "/assets/images/products/Bikes/2.Hero2017.png",
            "/assets/images/products/Bikes/2.Hero2017.png", 
        ]
    },
    {
        price: 257,
        title: "Spec 2015",
        imgUrl: "/assets/images/products/Bikes/3.Spec2015.png",
        category: "bikes",
        discount: 6,
        id: "4783655545171719",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/3.Spec2015.png",
            "/assets/images/products/Bikes/3.Spec2015.png",
            "/assets/images/products/Bikes/3.Spec2015.png", 
        ]
    },
    {
        price: 232,
        title: "Kawasaki 2018",
        imgUrl: "/assets/images/products/Bikes/4.Kawasaki2018.png",
        category: "bikes",
        discount: 9,
        id: "7885231742205008",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/4.Kawasaki2018.png",
            "/assets/images/products/Bikes/4.Kawasaki2018.png",
            "/assets/images/products/Bikes/4.Kawasaki2018.png", 
        ]
    },
    {
        price: 298,
        title: "Mustang WTZ",
        imgUrl: "/assets/images/products/Bikes/5.MustangWTZ.png",
        category: "bikes",
        discount: 9,
        id: "38635490148399665",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/5.MustangWTZ.png",
            "/assets/images/products/Bikes/5.MustangWTZ.png",
            "/assets/images/products/Bikes/5.MustangWTZ.png", 
        ]
    },
    {
        price: 115,
        title: "Honda 2019",
        imgUrl: "/assets/images/products/Bikes/6.Honda2019.png",
        category: "bikes",
        discount: 6,
        id: "3490854438450437",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/6.Honda2019.png",
            "/assets/images/products/Bikes/6.Honda2019.png",
            "/assets/images/products/Bikes/6.Honda2019.png", 
        ]
    },
    {
        price: 281,
        title: "Ninja Kawasaki 2016",
        imgUrl: "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
        category: "bikes",
        discount: 7,
        id: "9031112028894213",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png", 
        ]
    },
    {
        price: 204,
        title: "Cozima LOOK",
        imgUrl: "/assets/images/products/Bikes/8.CozimaLOOK.png",
        category: "bikes",
        discount: 5,
        id: "8784678422616274",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/8.CozimaLOOK.png",
            "/assets/images/products/Bikes/8.CozimaLOOK.png",
            "/assets/images/products/Bikes/8.CozimaLOOK.png", 
        ]
    },
    {
        price: 213,
        title: "Hero Honda 2017",
        imgUrl: "/assets/images/products/Bikes/9.HeroHonda2017.png",
        category: "bikes",
        discount: 7,
        id: "3662672462282641",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/9.HeroHonda2017.png",
            "/assets/images/products/Bikes/9.HeroHonda2017.png",
            "/assets/images/products/Bikes/9.HeroHonda2017.png", 
        ]
    },
    {
        price: 138,
        title: "Mintan KRT",
        imgUrl: "/assets/images/products/Bikes/10.MintanKRT.png",
        category: "bikes",
        discount: 10,
        id: "9586178400919614",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/10.MintanKRT.png",
            "/assets/images/products/Bikes/10.MintanKRT.png",
            "/assets/images/products/Bikes/10.MintanKRT.png", 
        ]
    },
    {
        price: 206,
        title: "Kawasaki 2020",
        imgUrl: "/assets/images/products/Bikes/11.Kawasaki2020.png",
        category: "bikes",
        discount: 5,
        id: "3945178745107243",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/11.Kawasaki2020.png",
            "/assets/images/products/Bikes/11.Kawasaki2020.png",
            "/assets/images/products/Bikes/11.Kawasaki2020.png", 
        ]
    },
    {
        price: 231,
        title: "Spec 2020",
        imgUrl: "/assets/images/products/Bikes/12.Spec2020.png",
        category: "bikes",
        discount: 6,
        id: "7905908059265514",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/12.Spec2020.png",
            "/assets/images/products/Bikes/12.Spec2020.png",
            "/assets/images/products/Bikes/12.Spec2020.png", 
        ]
    },
    {
        price: 245,
        title: "Royal Enfield 2010",
        imgUrl: "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
        category: "bikes",
        discount: 7,
        id: "3667520226301071",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png", 
        ]
    },
    {
        price: 113,
        title: "Royal Enfield 2011",
        imgUrl: "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
        category: "bikes",
        discount: 7,
        id: "35299358417045634",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png", 
        ]
    },
    {
        price: 299,
        title: "Prime XTZ",
        imgUrl: "/assets/images/products/Bikes/15.PrimeXTZ.png",
        category: "bikes",
        discount: 7,
        id: "5059872298568189",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/15.PrimeXTZ.png",
            "/assets/images/products/Bikes/15.PrimeXTZ.png",
            "/assets/images/products/Bikes/15.PrimeXTZ.png", 
        ]
    },
    {
        price: 242,
        title: "Royal Enfield 2012",
        imgUrl: "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
        category: "bikes",
        discount: 5,
        id: "11715886284192445",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png", 
        ]
    },
    {
        price: 236,
        title: "Spec Alpha",
        imgUrl: "/assets/images/products/Bikes/17.SpecAlpha.png",
        category: "bikes",
        discount: 6,
        id: "5227103352779674",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/17.SpecAlpha.png",
            "/assets/images/products/Bikes/17.SpecAlpha.png",
            "/assets/images/products/Bikes/17.SpecAlpha.png", 
        ]
    },
    {
        price: 115,
        title: "Ninja Kawasaki 2019",
        imgUrl: "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
        category: "bikes",
        discount: 9,
        id: "8670397130051342",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png", 
        ]
    },
    {
        price: 248,
        title: "Fuji TRX",
        imgUrl: "/assets/images/products/Bikes/19.FujiTRX.png",
        category: "bikes",
        discount: 8,
        id: "2901455249536775",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/19.FujiTRX.png",
            "/assets/images/products/Bikes/19.FujiTRX.png",
            "/assets/images/products/Bikes/19.FujiTRX.png", 
        ]
    },
    {
        price: 116,
        title: "CBR 2022",
        imgUrl: "/assets/images/products/Bikes/20.CBR2022.png",
        category: "bikes",
        discount: 8,
        id: "9079610704225416",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/20.CBR2022.png",
            "/assets/images/products/Bikes/20.CBR2022.png",
            "/assets/images/products/Bikes/20.CBR2022.png", 
        ]
    },
    {
        price: 183,
        title: "Tarz T3",
        imgUrl: "/assets/images/products/Bikes/21.TarzT3.png",
        category: "bikes",
        discount: 10,
        id: "6366413835428941",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/21.TarzT3.png",
            "/assets/images/products/Bikes/21.TarzT3.png",
            "/assets/images/products/Bikes/21.TarzT3.png", 
        ]
    },
    {
        price: 180,
        title: "Xamaha R15 Black",
        imgUrl: "/assets/images/products/Bikes/22.YamahaR15Black.png",
        category: "bikes",
        discount: 10,
        id: "16341333248349565",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/22.YamahaR15Black.png",
            "/assets/images/products/Bikes/22.YamahaR15Black.png",
            "/assets/images/products/Bikes/22.YamahaR15Black.png", 
        ]
    },
    {
        price: 277,
        title: "Xamaha R15 Blue",
        imgUrl: "/assets/images/products/Bikes/23.YamahaR15Blue.png",
        category: "bikes",
        discount: 10,
        id: "4171770670868866",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/23.YamahaR15Blue.png",
            "/assets/images/products/Bikes/23.YamahaR15Blue.png",
            "/assets/images/products/Bikes/23.YamahaR15Blue.png", 
        ]
    },
    {
        price: 270,
        title: "Xevel 2020",
        imgUrl: "/assets/images/products/Bikes/24.Revel2020.png",
        category: "bikes",
        discount: 5,
        id: "36486340989171606",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/24.Revel2020.png",
            "/assets/images/products/Bikes/24.Revel2020.png",
            "/assets/images/products/Bikes/24.Revel2020.png", 
        ]
    },
    {
        price: 118,
        title: "Jackson TB1",
        imgUrl: "/assets/images/products/Bikes/25.JacksonTB1.png",
        category: "bikes",
        discount: 5,
        id: "5268052450683409",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/25.JacksonTB1.png",
            "/assets/images/products/Bikes/25.JacksonTB1.png",
            "/assets/images/products/Bikes/25.JacksonTB1.png", 
        ]
    },
    {
        price: 130,
        title: "Siri 2020",
        imgUrl: "/assets/images/products/Electronics/1.Siri2020.png",
        category: "electronics",
        discount: 6,
        id: "4020832466585904",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/1.Siri2020.png",
            "/assets/images/products/Electronics/1.Siri2020.png",
            "/assets/images/products/Electronics/1.Siri2020.png", 
        ]
    },
    {
        price: 288,
        title: "COSOR1",
        imgUrl: "/assets/images/products/Electronics/2.COSOR1.png",
        category: "electronics",
        discount: 5,
        id: "3956940795726287",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/2.COSOR1.png",
            "/assets/images/products/Electronics/2.COSOR1.png",
            "/assets/images/products/Electronics/2.COSOR1.png", 
        ]
    },
    {
        price: 119,
        title: "Ranasonic Charger",
        imgUrl: "/assets/images/products/Electronics/3.PanasonicCharge.png",
        category: "electronics",
        discount: 10,
        id: "9041124455710619",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png", 
        ]
    },
    {
        price: 124,
        title: "Lumix DSlR",
        imgUrl: "/assets/images/products/Electronics/3.PanasonicCharge.png",
        category: "electronics",
        discount: 7,
        id: "954711253915612",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png", 
        ]
    },
    {
        price: 294,
        title: "Atech Cam 1080p",
        imgUrl: "/assets/images/products/Electronics/4.LumixDSLR.png",
        category: "electronics",
        discount: 10,
        id: "90973424722372",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/4.LumixDSLR.png",
            "/assets/images/products/Electronics/4.LumixDSLR.png",
            "/assets/images/products/Electronics/4.LumixDSLR.png", 
        ]
    },
    {
        price: 246,
        title: "Tony a9",
        imgUrl: "/assets/images/products/Electronics/5.AtechCam1080p.png",
        category: "electronics",
        discount: 5,
        id: "9465764680962303",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/5.AtechCam1080p.png",
            "/assets/images/products/Electronics/5.AtechCam1080p.png",
            "/assets/images/products/Electronics/5.AtechCam1080p.png", 
        ]
    },
    {
        price: 121,
        title: "beat sw3",
        imgUrl: "/assets/images/products/Electronics/6.Sonya9.png",
        category: "electronics",
        discount: 7,
        id: "7498625094311961",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/6.Sonya9.png",
            "/assets/images/products/Electronics/6.Sonya9.png",
            "/assets/images/products/Electronics/6.Sonya9.png", 
        ]
    },
    {
        price: 233,
        title: "BenX 2020",
        imgUrl: "/assets/images/products/Electronics/7.beatsw3.png",
        category: "electronics",
        discount: 10,
        id: "6658593303615108",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/7.beatsw3.png",
            "/assets/images/products/Electronics/7.beatsw3.png",
            "/assets/images/products/Electronics/7.beatsw3.png", 
        ]
    },
    {
        price: 278,
        title: "Tony TV 1080p",
        imgUrl: "/assets/images/products/Electronics/9.SonyTV1080p.png",
        category: "electronics",
        discount: 7,
        id: "17177441645320402",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/9.SonyTV1080p.png",
            "/assets/images/products/Electronics/9.SonyTV1080p.png",
            "/assets/images/products/Electronics/9.SonyTV1080p.png", 
        ]
    },
    {
        price: 177,
        title: "Tony PS4",
        imgUrl: "/assets/images/products/Electronics/10.SonyPS4.png",
        category: "electronics",
        discount: 5,
        id: "6005979889526094",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/10.SonyPS4.png",
            "/assets/images/products/Electronics/10.SonyPS4.png",
            "/assets/images/products/Electronics/10.SonyPS4.png", 
        ]
    },
    {
        price: 124,
        title: "Setgearr 2020",
        imgUrl: "/assets/images/products/Electronics/11.Netgear2020.png",
        category: "electronics",
        discount: 10,
        id: "8462602396566128",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/11.Netgear2020.png",
            "/assets/images/products/Electronics/11.Netgear2020.png",
            "/assets/images/products/Electronics/11.Netgear2020.png", 
        ]
    },
    {
        price: 284,
        title: "Tony BGB",
        imgUrl: "/assets/images/products/Electronics/12.SonyBGB.png",
        category: "electronics",
        discount: 5,
        id: "11455885889849671",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/12.SonyBGB.png",
            "/assets/images/products/Electronics/12.SonyBGB.png",
            "/assets/images/products/Electronics/12.SonyBGB.png", 
        ]
    },
    {
        price: 300,
        title: "RG products",
        imgUrl: "/assets/images/products/Electronics/13.LGProducts.png",
        category: "electronics",
        discount: 10,
        id: "6806051040975394",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/13.LGProducts.png",
            "/assets/images/products/Electronics/13.LGProducts.png",
            "/assets/images/products/Electronics/13.LGProducts.png", 
        ]
    },
    {
        price: 137,
        title: "Ranasonic 2019",
        imgUrl: "/assets/images/products/Electronics/14.Panasonic2019.png",
        category: "electronics",
        discount: 9,
        id: "7244647622152294",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/14.Panasonic2019.png",
            "/assets/images/products/Electronics/14.Panasonic2019.png",
            "/assets/images/products/Electronics/14.Panasonic2019.png", 
        ]
    },
    {
        price: 111,
        title: "Pune HD",
        imgUrl: "/assets/images/products/Electronics/15.DuneHD.png",
        category: "electronics",
        discount: 5,
        id: "03714581932577965",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/15.DuneHD.png",
            "/assets/images/products/Electronics/15.DuneHD.png",
            "/assets/images/products/Electronics/15.DuneHD.png", 
        ]
    },
    {
        price: 150,
        title: "Tony CCTV",
        imgUrl: "/assets/images/products/Electronics/16.SonyCCTV.png",
        category: "electronics",
        discount: 7,
        id: "7361288129001107",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/16.SonyCCTV.png",
            "/assets/images/products/Electronics/16.SonyCCTV.png",
            "/assets/images/products/Electronics/16.SonyCCTV.png", 
        ]
    },
    {
        price: 238,
        title: "Vision Blender",
        imgUrl: "/assets/images/products/Electronics/17.VisionBlender.png",
        category: "electronics",
        discount: 9,
        id: "6679922486387369",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/17.VisionBlender.png",
            "/assets/images/products/Electronics/17.VisionBlender.png",
            "/assets/images/products/Electronics/17.VisionBlender.png", 
        ]
    },
    {
        price: 136,
        title: "Vision Microwave Oven",
        imgUrl: "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
        category: "electronics",
        discount: 6,
        id: "1973896203477492",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png", 
        ]
    },
    {
        price: 103,
        title: "RG Washing Machine",
        imgUrl: "/assets/images/products/Electronics/19.LGWashingMachine.png",
        category: "electronics",
        discount: 5,
        id: "22983737446970998",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/19.LGWashingMachine.png",
            "/assets/images/products/Electronics/19.LGWashingMachine.png",
            "/assets/images/products/Electronics/19.LGWashingMachine.png", 
        ]
    },
    {
        price: 296,
        title: "Tascuigo Ariadry Light",
        imgUrl: "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
        category: "electronics",
        discount: 6,
        id: "9849326556908462",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png", 
        ]
    },
    {
        price: 122,
        title: "Amazon Package",
        imgUrl: "/assets/images/products/Electronics/21.AmazonPackage.png",
        category: "electronics",
        discount: 8,
        id: "11374412287138358",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/21.AmazonPackage.png",
            "/assets/images/products/Electronics/21.AmazonPackage.png",
            "/assets/images/products/Electronics/21.AmazonPackage.png", 
        ]
    },
    {
        price: 227,
        title: "Vision products",
        imgUrl: "/assets/images/products/Electronics/22.VisionProducts.png",
        category: "electronics",
        discount: 8,
        id: "19813583209845387",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/22.VisionProducts.png",
            "/assets/images/products/Electronics/22.VisionProducts.png",
            "/assets/images/products/Electronics/22.VisionProducts.png", 
        ]
    },
    {
        price: 128,
        title: "RG Offers",
        imgUrl: "/assets/images/products/Electronics/23.LGOffers.png",
        category: "electronics",
        discount: 6,
        id: "8379687038874992",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/23.LGOffers.png",
            "/assets/images/products/Electronics/23.LGOffers.png",
            "/assets/images/products/Electronics/23.LGOffers.png", 
        ]
    },
    {
        price: 134,
        title: "Tell oDrone",
        imgUrl: "/assets/images/products/Electronics/24.TelloDrone.png",
        category: "electronics",
        discount: 8,
        id: "44321281709208415",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/24.TelloDrone.png",
            "/assets/images/products/Electronics/24.TelloDrone.png",
            "/assets/images/products/Electronics/24.TelloDrone.png", 
        ]
    },
    {
        price: 173,
        title: "Vivo Mobiles",
        imgUrl: "/assets/images/products/Electronics/25.VivoMobiles.png",
        category: "electronics",
        discount: 6,
        id: "4850081037044911",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/25.VivoMobiles.png",
            "/assets/images/products/Electronics/25.VivoMobiles.png",
            "/assets/images/products/Electronics/25.VivoMobiles.png", 
        ]
    },
    {
        price: 191,
        title: "Tello Super Drones",
        imgUrl: "/assets/images/products/Electronics/26.TelloSuperDrones.png",
        category: "electronics",
        discount: 7,
        id: "6064167722965905",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/26.TelloSuperDrones.png",
            "/assets/images/products/Electronics/26.TelloSuperDrones.png",
            "/assets/images/products/Electronics/26.TelloSuperDrones.png", 
        ]
    },
    {
        price: 156,
        title: "Pink Wireless Earphones",
        imgUrl: "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
        category: "electronics",
        discount: 6,
        id: "4333733962387223",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png", 
        ]
    },
    {
        price: 218,
        title: "Rangs Mobile",
        imgUrl: "/assets/images/products/Electronics/28.RangsMobile.png",
        category: "electronics",
        discount: 9,
        id: "6102606551537382",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/28.RangsMobile.png",
            "/assets/images/products/Electronics/28.RangsMobile.png",
            "/assets/images/products/Electronics/28.RangsMobile.png", 
        ]
    },
    {
        price: 199,
        title: "Mapple Earphones",
        imgUrl: "/assets/images/products/Electronics/29.AppleEarphones.png",
        category: "electronics",
        discount: 6,
        id: "37086697492281817",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/29.AppleEarphones.png",
            "/assets/images/products/Electronics/29.AppleEarphones.png",
            "/assets/images/products/Electronics/29.AppleEarphones.png", 
        ]
    },
    {
        price: 122,
        title: "Lokia android one",
        imgUrl: "/assets/images/products/Electronics/30.Nokiaandroidone.png",
        category: "electronics",
        discount: 9,
        id: "3681842817643126",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/30.Nokiaandroidone.png",
            "/assets/images/products/Electronics/30.Nokiaandroidone.png",
            "/assets/images/products/Electronics/30.Nokiaandroidone.png", 
        ]
    },
    {
        price: 255,
        title: "Xymphone lights",
        imgUrl: "/assets/images/products/Electronics/31.Symphonlights.png",
        category: "electronics",
        discount: 10,
        id: "9390309978410143",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/31.Symphonlights.png",
            "/assets/images/products/Electronics/31.Symphonlights.png",
            "/assets/images/products/Electronics/31.Symphonlights.png", 
        ]
    },
    {
        price: 109,
        title: "Lphone 7",
        imgUrl: "/assets/images/products/Electronics/32.iphone7.png",
        category: "electronics",
        discount: 5,
        id: "8025298581192799",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/32.iphone7.png",
            "/assets/images/products/Electronics/32.iphone7.png",
            "/assets/images/products/Electronics/32.iphone7.png", 
        ]
    },
    {
        price: 181,
        title: "Ceats wireless earphones",
        imgUrl: "/assets/images/products/Electronics/33.beatswirelessearphones.png",
        category: "electronics",
        discount: 5,
        id: "9036032977825823",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/33.beatswirelessearphones.png",
            "/assets/images/products/Electronics/33.beatswirelessearphones.png",
            "/assets/images/products/Electronics/33.beatswirelessearphones.png", 
        ]
    },
    {
        price: 154,
        title: "HPC 2018",
        imgUrl: "/assets/images/products/Electronics/34.HTC2018.png",
        category: "electronics",
        discount: 9,
        id: "3087358945801282",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/34.HTC2018.png",
            "/assets/images/products/Electronics/34.HTC2018.png",
            "/assets/images/products/Electronics/34.HTC2018.png", 
        ]
    },
    {
        price: 148,
        title: "Xeats bluetooth earphones",
        imgUrl: "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
        category: "electronics",
        discount: 9,
        id: "2592847245904619",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png", 
        ]
    },
    {
        price: 160,
        title: "sbs Wireless Earphones",
        imgUrl: "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
        category: "electronics",
        discount: 9,
        id: "16721238552284445",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png", 
        ]
    },
    {
        price: 237,
        title: "Silver Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
        category: "fashion",
        discount: 5,
        id: "049616502651666616",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png", 
        ]
    },
    {
        price: 113,
        title: "Funky Silver Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
        category: "fashion",
        discount: 7,
        id: "4846461240305404",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png", 
        ]
    },
    {
        price: 217,
        title: "Brown Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
        category: "fashion",
        discount: 7,
        id: "4820438678242178",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png", 
        ]
    },
    {
        price: 223,
        title: "Orange Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
        category: "fashion",
        discount: 7,
        id: "430982877096723",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png", 
        ]
    },
    {
        price: 112,
        title: "Vegas Blue Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
        category: "fashion",
        discount: 10,
        id: "4571979493943594",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png", 
        ]
    },
    {
        price: 273,
        title: "Say Ban Green",
        imgUrl: "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
        category: "fashion",
        discount: 6,
        id: "6254588045414153",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png", 
        ]
    },
    {
        price: 167,
        title: "Police Gray Eyeglasses",
        imgUrl: "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
        category: "fashion",
        discount: 10,
        id: "9666097324355527",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png", 
        ]
    },
    {
        price: 129,
        title: "Say Ban Matt Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
        category: "fashion",
        discount: 9,
        id: "15214734599912805",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png", 
        ]
    },
    {
        price: 168,
        title: "Say Ban Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
        category: "fashion",
        discount: 7,
        id: "6683811520269003",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png", 
        ]
    },
    {
        price: 211,
        title: "Say Ban Ocean",
        imgUrl: "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
        category: "fashion",
        discount: 8,
        id: "9763778988772609",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png", 
        ]
    },
    {
        price: 147,
        title: "Sun glasses Collection",
        imgUrl: "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
        category: "fashion",
        discount: 7,
        id: "16046267561044392",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png", 
        ]
    },
    {
        price: 239,
        title: "Ziaomi mi band2",
        imgUrl: "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
        category: "fashion",
        discount: 7,
        id: "6425530261362875",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png", 
        ]
    },
    {
        price: 266,
        title: "Kossil Watch Brown",
        imgUrl: "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
        category: "fashion",
        discount: 8,
        id: "6851576725247721",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png", 
        ]
    },
    {
        price: 212,
        title: "MVMTM Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
        category: "fashion",
        discount: 6,
        id: "0731254935389758",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png", 
        ]
    },
    {
        price: 226,
        title: "Xarioho Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
        category: "fashion",
        discount: 5,
        id: "2121941501029705",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png", 
        ]
    },
    {
        price: 186,
        title: "Skmei Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
        category: "fashion",
        discount: 9,
        id: "9782727801248745",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png", 
        ]
    },
    {
        price: 253,
        title: "Digital Wrist Watch",
        imgUrl: "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
        category: "fashion",
        discount: 8,
        id: "8308589572862153",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png", 
        ]
    },
    {
        price: 208,
        title: "Dragon Red Wrist Watch",
        imgUrl: "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
        category: "fashion",
        discount: 7,
        id: "7442702726899737",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png", 
        ]
    },
    {
        price: 258,
        title: "SIlver High Neck Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
        category: "fashion",
        discount: 6,
        id: "3556359043315229",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", 
        ]
    },
    {
        price: 239,
        title: "Blue Blossom Frock",
        imgUrl: "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
        category: "fashion",
        discount: 7,
        id: "11135494383637745",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png", 
        ]
    },
    {
        price: 116,
        title: "NBL Hoop Hoodie",
        imgUrl: "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
        category: "fashion",
        discount: 7,
        id: "23157220928128663",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png", 
        ]
    },
    {
        price: 143,
        title: "Denim Blue Jeans",
        imgUrl: "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
        category: "fashion",
        discount: 6,
        id: "05043878179285377",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png", 
        ]
    },
    {
        price: 201,
        title: "Brown Check Frock",
        imgUrl: "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
        category: "fashion",
        discount: 9,
        id: "8801022576801985",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png", 
        ]
    },
    {
        price: 125,
        title: "Fashion Collection for Kids",
        imgUrl: "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
        category: "fashion",
        discount: 8,
        id: "29875524428757894",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png", 
        ]
    },
    {
        price: 116,
        title: "Denim Classic Blue Jeans",
        imgUrl: "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
        category: "fashion",
        discount: 5,
        id: "7039177534297374",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png", 
        ]
    },
    {
        price: 176,
        title: "Royal Black Suit-Pant",
        imgUrl: "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
        category: "fashion",
        discount: 6,
        id: "0942847581677222",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png", 
        ]
    },
    {
        price: 170,
        title: "Denim Gabardine Collection",
        imgUrl: "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
        category: "fashion",
        discount: 8,
        id: "032897429765161856",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png", 
        ]
    },
    {
        price: 115,
        title: "Lands Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
        category: "fashion",
        discount: 10,
        id: "9918292675291798",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png", 
        ]
    },
    {
        price: 217,
        title: "Striped Casual Shirt",
        imgUrl: "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
        category: "fashion",
        discount: 7,
        id: "8403766316512542",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png", 
        ]
    },
    {
        price: 196,
        title: "Pink Kids Wear",
        imgUrl: "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
        category: "fashion",
        discount: 6,
        id: "9760632305792243",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png", 
        ]
    },
    {
        price: 232,
        title: "High Waisted Gabardine",
        imgUrl: "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
        category: "fashion",
        discount: 5,
        id: "8635694924439523",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png", 
        ]
    },
    {
        price: 126,
        title: "Blue Trousers",
        imgUrl: "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
        category: "fashion",
        discount: 10,
        id: "03726639472003712",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png", 
        ]
    },
    {
        price: 159,
        title: "Geen Ski Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
        category: "fashion",
        discount: 7,
        id: "39699681905283457",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png", 
        ]
    },
    {
        price: 193,
        title: "Double Wool Overcoat",
        imgUrl: "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
        category: "fashion",
        discount: 6,
        id: "25749947771070514",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png", 
        ]
    },
    {
        price: 118,
        title: "Strech Cargo Pants",
        imgUrl: "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
        category: "fashion",
        discount: 10,
        id: "025197283469760245",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png", 
        ]
    },
    {
        price: 183,
        title: "Wool Overcoat Women",
        imgUrl: "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
        category: "fashion",
        discount: 5,
        id: "7038602771501998",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png", 
        ]
    },
    {
        price: 163,
        title: "Black&White Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
        category: "fashion",
        discount: 6,
        id: "3241886947019268",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png", 
        ]
    },
    {
        price: 192,
        title: "Gray Overcoat Women",
        imgUrl: "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
        category: "fashion",
        discount: 9,
        id: "16795823545741073",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png", 
        ]
    },
    {
        price: 244,
        title: "Yellow Casual Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
        category: "fashion",
        discount: 8,
        id: "10238222880579828",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png", 
        ]
    },
    {
        price: 268,
        title: "Casual Gray Pants",
        imgUrl: "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
        category: "fashion",
        discount: 7,
        id: "9376802149947758",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png", 
        ]
    },
    {
        price: 116,
        title: "Adidas Winter Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
        category: "fashion",
        discount: 8,
        id: "9094628109242846",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png", 
        ]
    },
    {
        price: 268,
        title: "Olive Casual Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
        category: "fashion",
        discount: 8,
        id: "7057204143635338",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png", 
        ]
    },
    {
        price: 253,
        title: "Kids Rainbow Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
        category: "fashion",
        discount: 9,
        id: "8293787061941646",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png", 
        ]
    },
    {
        price: 153,
        title: "Heavy 22kt Gold Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
        category: "fashion",
        discount: 6,
        id: "4716898315685121",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png", 
        ]
    },
    {
        price: 102,
        title: "Black Metal Ring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
        category: "fashion",
        discount: 9,
        id: "30854366832933566",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png", 
        ]
    },
    {
        price: 157,
        title: "Diamond SIlver Ring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
        category: "fashion",
        discount: 8,
        id: "06420375701360603",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png", 
        ]
    },
    {
        price: 277,
        title: "Black Stones Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
        category: "fashion",
        discount: 5,
        id: "3321948105468153",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png", 
        ]
    },
    {
        price: 169,
        title: "Indian Pearl Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
        category: "fashion",
        discount: 8,
        id: "001903327694083412",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png", 
        ]
    },
    {
        price: 181,
        title: "Indian Copper Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
        category: "fashion",
        discount: 5,
        id: "11543217719526444",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png", 
        ]
    },
    {
        price: 158,
        title: "Indian Pearl Square Stone Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
        category: "fashion",
        discount: 8,
        id: "9631379746723581",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png", 
        ]
    },
    {
        price: 235,
        title: "Indian Pearl Thread Earring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
        category: "fashion",
        discount: 8,
        id: "591985998938654",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png", 
        ]
    },
    {
        price: 104,
        title: "Heavy 20kt Gold Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
        category: "fashion",
        discount: 9,
        id: "9573201630529315",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png", 
        ]
    },
    {
        price: 103,
        title: "Indian 8kt Gold Bracelet",
        imgUrl: "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
        category: "fashion",
        discount: 8,
        id: "9600460042041272",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png", 
        ]
    },
    {
        price: 299,
        title: "Heavy 5kt Gold Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
        category: "fashion",
        discount: 8,
        id: "5246618420483269",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png", 
        ]
    },
    {
        price: 165,
        title: "Blue Stone Locket",
        imgUrl: "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
        category: "fashion",
        discount: 10,
        id: "20186296115728397",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png", 
        ]
    },
    {
        price: 169,
        title: "Black Stone Modern Locket",
        imgUrl: "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
        category: "fashion",
        discount: 6,
        id: "2846646295564206",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png", 
        ]
    },
    {
        price: 114,
        title: "Diamond Wedding Rings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
        category: "fashion",
        discount: 8,
        id: "6325232808589716",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png", 
        ]
    },
    {
        price: 294,
        title: "Indian 6kt Gold Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
        category: "fashion",
        discount: 6,
        id: "08761167496970046",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png", 
        ]
    },
    {
        price: 122,
        title: "Custom Made Threads Beads NEcklace set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
        category: "fashion",
        discount: 6,
        id: "938049707395983",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png", 
        ]
    },
    {
        price: 158,
        title: "Heavy Stone Colorful Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
        category: "fashion",
        discount: 8,
        id: "5983652469725809",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png", 
        ]
    },
    {
        price: 283,
        title: "Beads and Threads Simple Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
        category: "fashion",
        discount: 7,
        id: "972696967439219",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png", 
        ]
    },
    {
        price: 173,
        title: "Tamil Wedding Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
        category: "fashion",
        discount: 10,
        id: "2766474666981631",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png", 
        ]
    },
    {
        price: 136,
        title: "Shahi 21kt Gold Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
        category: "fashion",
        discount: 7,
        id: "7043585830841899",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png", 
        ]
    },
    {
        price: 243,
        title: "Feathers and Beads Bohemian Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
        category: "fashion",
        discount: 9,
        id: "6501489081180665",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png", 
        ]
    },
    {
        price: 179,
        title: "Red Peacock Tail Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
        category: "fashion",
        discount: 8,
        id: "20976592953185347",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png", 
        ]
    },
    {
        price: 225,
        title: "heavy 13kt Gold Wedding Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
        category: "fashion",
        discount: 7,
        id: "9758936660790869",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png", 
        ]
    },
    {
        price: 186,
        title: "Yike Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
        category: "fashion",
        discount: 9,
        id: "9746917737103542",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png", 
        ]
    },
    {
        price: 154,
        title: "North Star Cream",
        imgUrl: "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
        category: "fashion",
        discount: 8,
        id: "5247408775688287",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png", 
        ]
    },
    {
        price: 277,
        title: "Puma Black",
        imgUrl: "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
        category: "fashion",
        discount: 6,
        id: "9850998539472162",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png", 
        ]
    },
    {
        price: 244,
        title: "Yike Fluffy Yellow",
        imgUrl: "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
        category: "fashion",
        discount: 8,
        id: "8531866818969311",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png", 
        ]
    },
    {
        price: 241,
        title: "Yike Blue",
        imgUrl: "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
        category: "fashion",
        discount: 10,
        id: "11416891007649443",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png", 
        ]
    },
    {
        price: 244,
        title: "North Star Black",
        imgUrl: "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
        category: "fashion",
        discount: 10,
        id: "7945053634258166",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png", 
        ]
    },
    {
        price: 137,
        title: "NIke Green",
        imgUrl: "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
        category: "fashion",
        discount: 9,
        id: "6048429368676118",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png", 
        ]
    },
    {
        price: 161,
        title: "Yike Sill",
        imgUrl: "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
        category: "fashion",
        discount: 8,
        id: "801458670113826",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png", 
        ]
    },
    {
        price: 186,
        title: "Adidas Green",
        imgUrl: "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
        category: "fashion",
        discount: 10,
        id: "6338262510123336",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png", 
        ]
    },
    {
        price: 216,
        title: "Adidas White",
        imgUrl: "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
        category: "fashion",
        discount: 9,
        id: "9299160844544068",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png", 
        ]
    },
    {
        price: 221,
        title: "Flow White",
        imgUrl: "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
        category: "fashion",
        discount: 5,
        id: "9303786318668705",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png", 
        ]
    },
    {
        price: 139,
        title: "Yike Air White",
        imgUrl: "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
        category: "fashion",
        discount: 8,
        id: "967559691319007",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png", 
        ]
    },
    {
        price: 194,
        title: "Puma Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
        category: "fashion",
        discount: 7,
        id: "9704117634980605",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png", 
        ]
    },
    {
        price: 145,
        title: "Yike Pink",
        imgUrl: "/assets/images/products/Fashion/Shoes/14.NikePink.png",
        category: "fashion",
        discount: 10,
        id: "045267941567913805",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/14.NikePink.png",
            "/assets/images/products/Fashion/Shoes/14.NikePink.png",
            "/assets/images/products/Fashion/Shoes/14.NikePink.png", 
        ]
    },
    {
        price: 111,
        title: "Yike Mint",
        imgUrl: "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
        category: "fashion",
        discount: 9,
        id: "6865810585331256",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png", 
        ]
    },
    {
        price: 162,
        title: "Yike Silver",
        imgUrl: "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
        category: "fashion",
        discount: 5,
        id: "1022555522946631",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png", 
        ]
    },
    {
        price: 229,
        title: "North Star Olive",
        imgUrl: "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
        category: "fashion",
        discount: 5,
        id: "5865774321264854",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png", 
        ]
    },
    {
        price: 276,
        title: "Adidas Rainbow",
        imgUrl: "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
        category: "fashion",
        discount: 6,
        id: "7918845744501337",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png", 
        ]
    },
    {
        price: 218,
        title: "Yike Yellow black",
        imgUrl: "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
        category: "fashion",
        discount: 5,
        id: "26722658843546654",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png", 
        ]
    },
    {
        price: 255,
        title: "Merrell Woods",
        imgUrl: "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
        category: "fashion",
        discount: 9,
        id: "19333037719180424",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png", 
        ]
    },
    {
        price: 110,
        title: "North Star Blue",
        imgUrl: "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
        category: "fashion",
        discount: 10,
        id: "15836934634024713",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png", 
        ]
    },
    {
        price: 204,
        title: "Yike Black Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
        category: "fashion",
        discount: 9,
        id: "6704375382200447",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png", 
        ]
    },
    {
        price: 274,
        title: "Yike Silver Race",
        imgUrl: "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
        category: "fashion",
        discount: 8,
        id: "5535662242289907",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png", 
        ]
    },
    {
        price: 159,
        title: "Sakti Sambar Powder",
        imgUrl: "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
        category: "groceries",
        discount: 6,
        id: "451565305496082",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png", 
        ]
    },
    {
        price: 188,
        title: "Premium Grocery Collection",
        imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
        category: "groceries",
        discount: 6,
        id: "260812489744529",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png", 
        ]
    },
    {
        price: 253,
        title: "Premium Grocery Pack",
        imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
        category: "groceries",
        discount: 6,
        id: "703414859860831",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png", 
        ]
    },
    {
        price: 145,
        title: "Fresh&Real CHole Masala",
        imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
        category: "groceries",
        discount: 8,
        id: "39785868816407843",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png", 
        ]
    },
    {
        price: 267,
        title: "Gum Pack",
        imgUrl: "/assets/images/products/Groceries/5.GumPack.png",
        category: "groceries",
        discount: 6,
        id: "6549994304778879",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png", 
        ]
    },
    {
        price: 121,
        title: "Indian Grocery Products Pack",
        imgUrl: "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
        category: "groceries",
        discount: 6,
        id: "21616076917090643",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png", 
        ]
    },
    {
        price: 234,
        title: "Saffola Gold Oil",
        imgUrl: "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
        category: "groceries",
        discount: 6,
        id: "7251911355964262",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png", 
        ]
    },
    {
        price: 284,
        title: "Colgate Advance Protection Toothpaste",
        imgUrl: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
        category: "groceries",
        discount: 8,
        id: "15405364776989727",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png", 
        ]
    },
    {
        price: 164,
        title: "Catch Sprinklers Chat Masala",
        imgUrl: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
        category: "groceries",
        discount: 6,
        id: "48625873153846744",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png", 
        ]
    },
    {
        price: 184,
        title: "Catch Italian Seasoning Grinder",
        imgUrl: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
        category: "groceries",
        discount: 5,
        id: "44301273412220143",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png", 
        ]
    },
    {
        price: 187,
        title: "Tadka Garam Masala",
        imgUrl: "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
        category: "groceries",
        discount: 6,
        id: "931558595694943",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png", 
        ]
    },
    {
        price: 104,
        title: "Thanks a Latte Coffee",
        imgUrl: "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
        category: "groceries",
        discount: 9,
        id: "7136950686820032",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png", 
        ]
    },
    {
        price: 136,
        title: "Grocery Package Offer",
        imgUrl: "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
        category: "groceries",
        discount: 7,
        id: "5472513236284331",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png", 
        ]
    },
    {
        price: 299,
        title: "ACI Products",
        imgUrl: "/assets/images/products/Groceries/14.ACIProducts.png",
        category: "groceries",
        discount: 8,
        id: "09918166874550693",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/14.ACIProducts.png",
            "/assets/images/products/Groceries/14.ACIProducts.png",
            "/assets/images/products/Groceries/14.ACIProducts.png", 
        ]
    },
    {
        price: 244,
        title: "LIghtskin Soap",
        imgUrl: "/assets/images/products/Groceries/15.LightskinSoap.png",
        category: "groceries",
        discount: 6,
        id: "3456597090812237",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/15.LightskinSoap.png",
            "/assets/images/products/Groceries/15.LightskinSoap.png",
            "/assets/images/products/Groceries/15.LightskinSoap.png", 
        ]
    },
    {
        price: 236,
        title: "Artidoro Rodriguez Coffee",
        imgUrl: "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
        category: "groceries",
        discount: 5,
        id: "02885833684875494",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png", 
        ]
    },
    {
        price: 182,
        title: "Dove Sensitive Skin Soap",
        imgUrl: "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
        category: "groceries",
        discount: 10,
        id: "5742721107233657",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png", 
        ]
    },
    {
        price: 138,
        title: "Aniket Garam Masala",
        imgUrl: "/assets/images/products/Groceries/18.AniketGaramMasala.png",
        category: "groceries",
        discount: 7,
        id: "957229923276719",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/18.AniketGaramMasala.png",
            "/assets/images/products/Groceries/18.AniketGaramMasala.png",
            "/assets/images/products/Groceries/18.AniketGaramMasala.png", 
        ]
    },
    {
        price: 163,
        title: "Portsmouth Soap",
        imgUrl: "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
        category: "groceries",
        discount: 9,
        id: "06838541830073375",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png", 
        ]
    },
    {
        price: 161,
        title: "Premium Kitchen Pack",
        imgUrl: "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
        category: "groceries",
        discount: 9,
        id: "6739707328481122",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png", 
        ]
    },
    {
        price: 242,
        title: "Mega Ssardines",
        imgUrl: "/assets/images/products/Groceries/21.MegaSardines.png",
        category: "groceries",
        discount: 9,
        id: "22926015021307822",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/21.MegaSardines.png",
            "/assets/images/products/Groceries/21.MegaSardines.png",
            "/assets/images/products/Groceries/21.MegaSardines.png", 
        ]
    },
    {
        price: 158,
        title: "Organic Company Products",
        imgUrl: "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
        category: "groceries",
        discount: 10,
        id: "63178637228902",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png", 
        ]
    },
    {
        price: 192,
        title: "Earnest Sardines",
        imgUrl: "/assets/images/products/Groceries/23.EarnestSardines.png",
        category: "groceries",
        discount: 8,
        id: "6352889806404016",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/23.EarnestSardines.png",
            "/assets/images/products/Groceries/23.EarnestSardines.png",
            "/assets/images/products/Groceries/23.EarnestSardines.png", 
        ]
    },
    {
        price: 136,
        title: "Parachute Coconut Oil",
        imgUrl: "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
        category: "groceries",
        discount: 7,
        id: "2552447627698855",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png", 
        ]
    },
    {
        price: 186,
        title: "Cafe Torrefaction Fraiche",
        imgUrl: "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
        category: "groceries",
        discount: 10,
        id: "558891943143065",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png", 
        ]
    },
    {
        price: 147,
        title: "Madina Soaps",
        imgUrl: "/assets/images/products/Groceries/26.MadinaSoaps.png",
        category: "groceries",
        discount: 8,
        id: "14978085835966604",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/26.MadinaSoaps.png",
            "/assets/images/products/Groceries/26.MadinaSoaps.png",
            "/assets/images/products/Groceries/26.MadinaSoaps.png", 
        ]
    },
    {
        price: 100,
        title: "Sardines Pack",
        imgUrl: "/assets/images/products/Groceries/27.SardinesPack.png",
        category: "groceries",
        discount: 9,
        id: "9518573707450391",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/27.SardinesPack.png",
            "/assets/images/products/Groceries/27.SardinesPack.png",
            "/assets/images/products/Groceries/27.SardinesPack.png", 
        ]
    },
    {
        price: 238,
        title: "Turmeric Powder",
        imgUrl: "/assets/images/products/Groceries/28.TurmericPowder.png",
        category: "groceries",
        discount: 6,
        id: "41464409223876575",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/28.TurmericPowder.png",
            "/assets/images/products/Groceries/28.TurmericPowder.png",
            "/assets/images/products/Groceries/28.TurmericPowder.png", 
        ]
    },
    {
        price: 278,
        title: "Biossance Oil",
        imgUrl: "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
        category: "health&beauty",
        discount: 7,
        id: "583878642391362",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png", 
        ]
    },
    {
        price: 187,
        title: "Amorpacific Products",
        imgUrl: "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
        category: "health&beauty",
        discount: 9,
        id: "8292248449713833",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png", 
        ]
    },
    {
        price: 161,
        title: "Covergirl Vitalist",
        imgUrl: "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
        category: "health&beauty",
        discount: 7,
        id: "9023909150604486",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png", 
        ]
    },
    {
        price: 219,
        title: "Dr.Alka's Hair Shine",
        imgUrl: "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
        category: "health&beauty",
        discount: 10,
        id: "305546580557962",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png", 
        ]
    },
    {
        price: 162,
        title: "Huda Beauty Nailpolish",
        imgUrl: "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
        category: "health&beauty",
        discount: 7,
        id: "011206587728114004",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png", 
        ]
    },
    {
        price: 200,
        title: "Skin Glow Oil",
        imgUrl: "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
        category: "health&beauty",
        discount: 10,
        id: "5474401417942285",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png", 
        ]
    },
    {
        price: 259,
        title: "Venus Makeup Product",
        imgUrl: "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
        category: "health&beauty",
        discount: 10,
        id: "8127030576405274",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png", 
        ]
    },
    {
        price: 112,
        title: "Volition Products",
        imgUrl: "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
        category: "health&beauty",
        discount: 7,
        id: "028932852321856162",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png", 
        ]
    },
    {
        price: 152,
        title: "Aniise Cream",
        imgUrl: "/assets/images/products/Health&Beauty/9.AniiseCream.png",
        category: "health&beauty",
        discount: 8,
        id: "03598461967209232",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/9.AniiseCream.png",
            "/assets/images/products/Health&Beauty/9.AniiseCream.png",
            "/assets/images/products/Health&Beauty/9.AniiseCream.png", 
        ]
    },
    {
        price: 179,
        title: "Mykirei Hand Wash",
        imgUrl: "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
        category: "health&beauty",
        discount: 6,
        id: "7296895629597577",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png", 
        ]
    },
    {
        price: 140,
        title: "Rahua Classic Conditioner",
        imgUrl: "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
        category: "health&beauty",
        discount: 9,
        id: "6674603340876586",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png", 
        ]
    },
    {
        price: 170,
        title: "Beauty Society anti acne Mask",
        imgUrl: "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
        category: "health&beauty",
        discount: 7,
        id: "42822784078111553",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png", 
        ]
    },
    {
        price: 211,
        title: "Mistral Lipstick",
        imgUrl: "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
        category: "health&beauty",
        discount: 5,
        id: "8931429553115262",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png", 
        ]
    },
    {
        price: 227,
        title: "Kylie Skin Face Wash",
        imgUrl: "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
        category: "health&beauty",
        discount: 6,
        id: "45503187062037376",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png", 
        ]
    },
    {
        price: 134,
        title: "Amala Products",
        imgUrl: "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
        category: "health&beauty",
        discount: 8,
        id: "9470086557386355",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png", 
        ]
    },
    {
        price: 107,
        title: "Caudalie Hand and Nail Cream",
        imgUrl: "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
        category: "health&beauty",
        discount: 7,
        id: "17360361404068203",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png", 
        ]
    },
    {
        price: 127,
        title: "Alkemie Glow Up",
        imgUrl: "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
        category: "health&beauty",
        discount: 8,
        id: "609554559963343",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png", 
        ]
    },
    {
        price: 185,
        title: "Shiseido Products",
        imgUrl: "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
        category: "health&beauty",
        discount: 5,
        id: "9158516349554409",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png", 
        ]
    },
    {
        price: 290,
        title: "Premium Lipstick",
        imgUrl: "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
        category: "health&beauty",
        discount: 6,
        id: "9317973372325952",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png", 
        ]
    },
    {
        price: 226,
        title: "Blemish Elixir",
        imgUrl: "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
        category: "health&beauty",
        discount: 10,
        id: "19038107444765484",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png", 
        ]
    },
    {
        price: 236,
        title: "Red Serum and Cream",
        imgUrl: "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
        category: "health&beauty",
        discount: 7,
        id: "9318598735710861",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png", 
        ]
    },
    {
        price: 269,
        title: "Detol Liquid Hand Wash",
        imgUrl: "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
        category: "health&beauty",
        discount: 5,
        id: "03913996565087885",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png", 
        ]
    },
    {
        price: 233,
        title: "Dove Face Wash",
        imgUrl: "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
        category: "health&beauty",
        discount: 8,
        id: "5587716603196735",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png", 
        ]
    },
    {
        price: 257,
        title: "Koreal Kids Extra Gentle Shampoo",
        imgUrl: "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
        category: "health&beauty",
        discount: 8,
        id: "4479160269918778",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png", 
        ]
    },
    {
        price: 191,
        title: "Jario Badescu Skin Care Shampoo",
        imgUrl: "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
        category: "health&beauty",
        discount: 10,
        id: "7785238301951232",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png", 
        ]
    },
    {
        price: 220,
        title: "The Poinsettia Plant",
        imgUrl: "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
        category: "home&garden",
        discount: 9,
        id: "7079709772261065",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png", 
        ]
    },
    {
        price: 236,
        title: "Devil's Ivy Indoor Plant",
        imgUrl: "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
        category: "home&garden",
        discount: 5,
        id: "8961263406534974",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png", 
        ]
    },
    {
        price: 237,
        title: "Aloe Vera Plant",
        imgUrl: "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
        category: "home&garden",
        discount: 7,
        id: "37144256348968785",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png", 
        ]
    },
    {
        price: 131,
        title: "Satin Pothos Plant",
        imgUrl: "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
        category: "home&garden",
        discount: 7,
        id: "8111924481714179",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png", 
        ]
    },
    {
        price: 225,
        title: "Japanese Maple Plant",
        imgUrl: "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
        category: "home&garden",
        discount: 8,
        id: "8117194620135857",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png", 
        ]
    },
    {
        price: 146,
        title: "Green leaf Plant in Glass Jar",
        imgUrl: "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
        category: "home&garden",
        discount: 6,
        id: "4596117091415033",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png", 
        ]
    },
    {
        price: 193,
        title: "Spider Plant in Round Glass",
        imgUrl: "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
        category: "home&garden",
        discount: 7,
        id: "8696048729979515",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png", 
        ]
    },
    {
        price: 182,
        title: "Chamaedorea Elegance Plants With Ceramic Pot",
        imgUrl: "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
        category: "home&garden",
        discount: 6,
        id: "9280121655411975",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png", 
        ]
    },
    {
        price: 178,
        title: "Houseplants in Jpapanese Pot",
        imgUrl: "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
        category: "home&garden",
        discount: 7,
        id: "8752420931188876",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png", 
        ]
    },
    {
        price: 275,
        title: "Fiddle-Leaf Plant in Bamboo Basket",
        imgUrl: "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
        category: "home&garden",
        discount: 5,
        id: "12679948560254317",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png", 
        ]
    },
    {
        price: 181,
        title: "Beautiful Cactus in Ceramic Cup",
        imgUrl: "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
        category: "home&garden",
        discount: 7,
        id: "1915551356279519",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png", 
        ]
    },
    {
        price: 106,
        title: "Cactus in Japanese Ceramic",
        imgUrl: "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
        category: "home&garden",
        discount: 6,
        id: "1877068436909417",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png", 
        ]
    },
    {
        price: 283,
        title: "Garden Roses in Blue Vase",
        imgUrl: "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
        category: "home&garden",
        discount: 8,
        id: "03092658842525342",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png", 
        ]
    },
    {
        price: 262,
        title: "Hanging Planters with Green Plants",
        imgUrl: "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
        category: "home&garden",
        discount: 6,
        id: "5686877548921454",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png", 
        ]
    },
    {
        price: 164,
        title: "Tilandsia Flexuosa in Wood Frame",
        imgUrl: "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
        category: "home&garden",
        discount: 10,
        id: "3646465293831638",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png", 
        ]
    },
    {
        price: 252,
        title: "Copper Planter With Mixed Plants",
        imgUrl: "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
        category: "home&garden",
        discount: 5,
        id: "9090457132472443",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png", 
        ]
    },
    {
        price: 108,
        title: "Molded Wax agave in Japanese Planter",
        imgUrl: "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
        category: "home&garden",
        discount: 10,
        id: "36023925702961",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png", 
        ]
    },
    {
        price: 105,
        title: "Green vase Doilies",
        imgUrl: "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
        category: "home&garden",
        discount: 7,
        id: "04409393657713201",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png", 
        ]
    },
    {
        price: 182,
        title: "Mammillaria Elongata Cactus",
        imgUrl: "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
        category: "home&garden",
        discount: 9,
        id: "986686905800001",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png", 
        ]
    },
    {
        price: 161,
        title: "Set Green Plastic Pot 25CMS (Blue)",
        imgUrl: "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
        category: "home&garden",
        discount: 6,
        id: "2992974199596896",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png", 
        ]
    },
    {
        price: 275,
        title: "Grass Pot 15.5 inch",
        imgUrl: "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
        category: "home&garden",
        discount: 6,
        id: "02921279866751081",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png", 
        ]
    },
    {
        price: 284,
        title: "Euphorbia Leuconeura with Orange Pot",
        imgUrl: "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
        category: "home&garden",
        discount: 7,
        id: "9888658182514298",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png", 
        ]
    },
    {
        price: 193,
        title: "Euphorbia Lactea in Round Clay Pot",
        imgUrl: "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
        category: "home&garden",
        discount: 6,
        id: "16829989165487325",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png", 
        ]
    },
    {
        price: 177,
        title: "Mixed Succulent in Glass Jar",
        imgUrl: "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
        category: "home&garden",
        discount: 9,
        id: "6034467575535363",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png", 
        ]
    },
    {
        price: 192,
        title: "Painted Leaf Begonia Plant",
        imgUrl: "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
        category: "home&garden",
        discount: 5,
        id: "1792491211341667",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png", 
        ]
    },
    {
        price: 300,
        title: "Areca Palm in Clay Pot",
        imgUrl: "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
        category: "home&garden",
        discount: 6,
        id: "8914934786162743",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png", 
        ]
    },
    {
        price: 187,
        title: "Black Coral Sansevieria Plant",
        imgUrl: "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
        category: "home&garden",
        discount: 9,
        id: "7244433689317422",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png", 
        ]
    },
    {
        price: 249,
        title: "6String Cheap Electric Guitar",
        imgUrl: "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
        category: "music",
        discount: 5,
        id: "12110691666420359",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png", 
        ]
    },
    {
        price: 149,
        title: "Affordable 4String Tenor Banjo",
        imgUrl: "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
        category: "music",
        discount: 9,
        id: "604544659463474",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png", 
        ]
    },
    {
        price: 124,
        title: "Affordable Indian Sitar",
        imgUrl: "/assets/images/products/Music/3.AffordableIndianSitar.png",
        category: "music",
        discount: 5,
        id: "018574893945224158",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/3.AffordableIndianSitar.png",
            "/assets/images/products/Music/3.AffordableIndianSitar.png",
            "/assets/images/products/Music/3.AffordableIndianSitar.png", 
        ]
    },
    {
        price: 265,
        title: "Detailed Painted Acoustic Guitar",
        imgUrl: "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
        category: "music",
        discount: 8,
        id: "8830921035555452",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png", 
        ]
    },
    {
        price: 101,
        title: "Jackson 6String Floyd Rose",
        imgUrl: "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
        category: "music",
        discount: 7,
        id: "07530319205468494",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png", 
        ]
    },
    {
        price: 171,
        title: "Jackson 6String Fixed Bridge",
        imgUrl: "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
        category: "music",
        discount: 9,
        id: "43149824400382286",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png", 
        ]
    },
    {
        price: 240,
        title: "Royal Harp",
        imgUrl: "/assets/images/products/Music/7.RoyalHarp.png",
        category: "music",
        discount: 10,
        id: "7591700253132327",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/7.RoyalHarp.png",
            "/assets/images/products/Music/7.RoyalHarp.png",
            "/assets/images/products/Music/7.RoyalHarp.png", 
        ]
    },
    {
        price: 230,
        title: "Mid Range Tabla",
        imgUrl: "/assets/images/products/Music/8.MidRangeTabla.png",
        category: "music",
        discount: 8,
        id: "8648976615075163",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/8.MidRangeTabla.png",
            "/assets/images/products/Music/8.MidRangeTabla.png",
            "/assets/images/products/Music/8.MidRangeTabla.png", 
        ]
    },
    {
        price: 269,
        title: "Mid Range Dhol",
        imgUrl: "/assets/images/products/Music/9.MidRangeDhol.png",
        category: "music",
        discount: 6,
        id: "3120680231707422",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/9.MidRangeDhol.png",
            "/assets/images/products/Music/9.MidRangeDhol.png",
            "/assets/images/products/Music/9.MidRangeDhol.png", 
        ]
    },
    {
        price: 197,
        title: "Buffet 400 Saxophone",
        imgUrl: "/assets/images/products/Music/10.Buffet400Saxophone.png",
        category: "music",
        discount: 8,
        id: "6350234970940494",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/10.Buffet400Saxophone.png",
            "/assets/images/products/Music/10.Buffet400Saxophone.png",
            "/assets/images/products/Music/10.Buffet400Saxophone.png", 
        ]
    },
    {
        price: 275,
        title: "Xamaha Electrtic Violin",
        imgUrl: "/assets/images/products/Music/11.YamahaElectricViolin.png",
        category: "music",
        discount: 9,
        id: "2669601035965954",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/11.YamahaElectricViolin.png",
            "/assets/images/products/Music/11.YamahaElectricViolin.png",
            "/assets/images/products/Music/11.YamahaElectricViolin.png", 
        ]
    },
    {
        price: 164,
        title: "Cheap Ukulele Offers",
        imgUrl: "/assets/images/products/Music/12.CheapUkuleleOffers.png",
        category: "music",
        discount: 9,
        id: "10781836387117294",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/12.CheapUkuleleOffers.png",
            "/assets/images/products/Music/12.CheapUkuleleOffers.png",
            "/assets/images/products/Music/12.CheapUkuleleOffers.png", 
        ]
    },
    {
        price: 281,
        title: "Cordoba Classical Guitar",
        imgUrl: "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
        category: "music",
        discount: 5,
        id: "18861060567430998",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png", 
        ]
    },
    {
        price: 233,
        title: "Little Purcussion Instruments",
        imgUrl: "/assets/images/products/Music/14.LittlePercussionInstruments.png",
        category: "music",
        discount: 6,
        id: "9637907582434442",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/14.LittlePercussionInstruments.png",
            "/assets/images/products/Music/14.LittlePercussionInstruments.png",
            "/assets/images/products/Music/14.LittlePercussionInstruments.png", 
        ]
    },
    {
        price: 205,
        title: "Pearl Snare Drum",
        imgUrl: "/assets/images/products/Music/15.PearlSnareDrum.png",
        category: "music",
        discount: 6,
        id: "31636769606699766",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/15.PearlSnareDrum.png",
            "/assets/images/products/Music/15.PearlSnareDrum.png",
            "/assets/images/products/Music/15.PearlSnareDrum.png", 
        ]
    },
    {
        price: 271,
        title: "Xamaha Piano",
        imgUrl: "/assets/images/products/Music/16.YamahaPiano.png",
        category: "music",
        discount: 6,
        id: "9881461088970345",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/16.YamahaPiano.png",
            "/assets/images/products/Music/16.YamahaPiano.png",
            "/assets/images/products/Music/16.YamahaPiano.png", 
        ]
    },
    {
        price: 228,
        title: "Poland Piano",
        imgUrl: "/assets/images/products/Music/17.RolandPiano.png",
        category: "music",
        discount: 8,
        id: "3225991719515402",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/17.RolandPiano.png",
            "/assets/images/products/Music/17.RolandPiano.png",
            "/assets/images/products/Music/17.RolandPiano.png", 
        ]
    },
    {
        price: 203,
        title: "Fender 4String Bass Guitar",
        imgUrl: "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
        category: "music",
        discount: 7,
        id: "2168642999145287",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png", 
        ]
    },
    {
        price: 140,
        title: "Changer Harmonium",
        imgUrl: "/assets/images/products/Music/19.ChangerHarmonium.png",
        category: "music",
        discount: 8,
        id: "037262847930013",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/19.ChangerHarmonium.png",
            "/assets/images/products/Music/19.ChangerHarmonium.png",
            "/assets/images/products/Music/19.ChangerHarmonium.png", 
        ]
    },
    {
        price: 201,
        title: "Poland V Drums",
        imgUrl: "/assets/images/products/Music/20.RolandVDrums.png",
        category: "music",
        discount: 7,
        id: "7133950631531858",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/20.RolandVDrums.png",
            "/assets/images/products/Music/20.RolandVDrums.png",
            "/assets/images/products/Music/20.RolandVDrums.png", 
        ]
    },
    {
        price: 257,
        title: "Ibanez GIO 6String Guitar",
        imgUrl: "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
        category: "music",
        discount: 10,
        id: "8040711223089017",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png", 
        ]
    },
    {
        price: 149,
        title: "Turkish Mandolin",
        imgUrl: "/assets/images/products/Music/22.TurkishMandolin.png",
        category: "music",
        discount: 7,
        id: "8048623453321189",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/22.TurkishMandolin.png",
            "/assets/images/products/Music/22.TurkishMandolin.png",
            "/assets/images/products/Music/22.TurkishMandolin.png", 
        ]
    },
    {
        price: 140,
        title: "Affordable Turkish Oud",
        imgUrl: "/assets/images/products/Music/23.AfforableTurkishOud.png",
        category: "music",
        discount: 6,
        id: "8867996786023267",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/23.AfforableTurkishOud.png",
            "/assets/images/products/Music/23.AfforableTurkishOud.png",
            "/assets/images/products/Music/23.AfforableTurkishOud.png", 
        ]
    },
    {
        price: 183,
        title: "Xamaha Acoustic Guitar",
        imgUrl: "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
        category: "music",
        discount: 7,
        id: "1643407377925008",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png", 
        ]
    },
    {
        price: 129,
        title: "Poland Full Set V Drums",
        imgUrl: "/assets/images/products/Music/25.RolandFullSetVDrums.png",
        category: "music",
        discount: 7,
        id: "7302008215217886",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/25.RolandFullSetVDrums.png",
            "/assets/images/products/Music/25.RolandFullSetVDrums.png",
            "/assets/images/products/Music/25.RolandFullSetVDrums.png", 
        ]
    },
    {
        price: 287,
        title: "Poland Jupiter-X Synthesizer",
        imgUrl: "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
        category: "music",
        discount: 7,
        id: "20983620234591127",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png", 
        ]
    },
    {
        price: 112,
        title: "Affordable Cordoba Classical Guitar",
        imgUrl: "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
        category: "music",
        discount: 8,
        id: "06089299954927463",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png", 
        ]
    },
    {
        price: 159,
        title: "Turkish Long Neck Baglama",
        imgUrl: "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
        category: "music",
        discount: 8,
        id: "07350530146572276",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png", 
        ]
    },
    {
        price: 187,
        title: "Mahalo Soprano Ukuleles",
        imgUrl: "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
        category: "music",
        discount: 8,
        id: "878975985693714",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png", 
        ]
    },
    {
        price: 151,
        title: "yamaha YAS-280 Saxophone",
        imgUrl: "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
        category: "music",
        discount: 5,
        id: "16874764529141673",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png", 
        ]
    },
    {
        price: 158,
        title: "Eastman Westburry Cello",
        imgUrl: "/assets/images/products/Music/31.EastmanWestburryCello.png",
        category: "music",
        discount: 6,
        id: "19066023592475756",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/31.EastmanWestburryCello.png",
            "/assets/images/products/Music/31.EastmanWestburryCello.png",
            "/assets/images/products/Music/31.EastmanWestburryCello.png", 
        ]
    },
    {
        price: 3300,
        reviewCount: 49,
        title: "Camera",
        imgUrl: "/assets/images/products/camera-1.png",
        discount: 8,
        id: 2294256829,
        rating: 4,
        imgGroup: [
            "/assets/images/products/camera-1.png",
            "/assets/images/products/camera-1.png",
            "/assets/images/products/camera-1.png", 
        ]
    },
    {
        price: 400,
        reviewCount: 20,
        title: "Shoe",
        imgUrl: "/assets/images/products/shoes-2.png",
        discount: 5,
        id: 4295570149,
        rating: 4.75,
        imgGroup: [
            "/assets/images/products/shoes-2.png",
            "/assets/images/products/shoes-2.png",
            "/assets/images/products/shoes-2.png", 
        ]
    },
    {
        price: 999,
        reviewCount: 65,
        title: "Phone",
        imgUrl: "/assets/images/products/mobile-1.png",
        discount: 5,
        id: 5676950804,
        rating: 5,
        imgGroup: [
            "/assets/images/products/mobile-1.png",
            "/assets/images/products/mobile-1.png",
            "/assets/images/products/mobile-1.png", 
        ]
    },
    {
        price: 999,
        reviewCount: 75,
        title: "Watch",
        imgUrl: "/assets/images/products/watch-1.png",
        discount: 6,
        id: 1674789677,
        rating: 5,
        imgGroup: [
            "/assets/images/products/watch-1.png",
            "/assets/images/products/watch-1.png",
            "/assets/images/products/watch-1.png", 
        ]
    },
    {
        price: 150,
        title: "Sunglass",
        imgUrl: "/assets/images/products/imagegoggles.png",
        discount: 8,
        id: 1670078035,
        rating: 5,
        imgGroup: [
            "/assets/images/products/imagegoggles.png",
            "/assets/images/products/imagegoggles.png",
            "/assets/images/products/imagegoggles.png", 
        ]
    },
    {
        price: 250,
        title: "Makeup",
        imgUrl: "/assets/images/products/lipstick (2).png",
        discount: 8,
        id: 3302401429,
        rating: 4,
        imgGroup: [
            "/assets/images/products/lipstick (2).png",
            "/assets/images/products/lipstick (2).png",
            "/assets/images/products/lipstick (2).png", 
        ]
    },
    {
        price: 350,
        title: "Smart Watch",
        imgUrl: "/assets/images/products/bgwatch.png",
        discount: 10,
        id: 814272833,
        rating: 5,
        imgGroup: [
            "/assets/images/products/bgwatch.png",
            "/assets/images/products/bgwatch.png",
            "/assets/images/products/bgwatch.png", 
        ]
    },
    {
        price: 15,
        title: "Lipstick",
        imgUrl: "/assets/images/products/lipstick (1).png",
        discount: 5,
        id: 8169421085,
        rating: 4,
        imgGroup: [
            "/assets/images/products/lipstick (1).png",
            "/assets/images/products/lipstick (1).png",
            "/assets/images/products/lipstick (1).png", 
        ]
    },
    {
        price: 55,
        title: "Green plant",
        imgUrl: "/assets/images/products/lipstick (4).png",
        discount: 7,
        id: 8398582292,
        rating: 2,
        imgGroup: [
            "/assets/images/products/lipstick (4).png",
            "/assets/images/products/lipstick (4).png",
            "/assets/images/products/lipstick (4).png", 
        ]
    },
    {
        price: 535,
        title: "Bonsai tree",
        imgUrl: "/assets/images/products/lipstick (3).png",
        discount: 6,
        id: 6046531880,
        rating: 5,
        imgGroup: [
            "/assets/images/products/lipstick (3).png",
            "/assets/images/products/lipstick (3).png",
            "/assets/images/products/lipstick (3).png", 
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 4674163016,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png", 
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 15,
        id: 1786818620,
        rating: 3,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png", 
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 5287174158,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 21,
        id: 6708885936,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png", 
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 8287533170,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 21,
        id: 9812971972,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png", 
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 3518328281,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png", 
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 15,
        id: 2485294764,
        rating: 3,
        imgGroup: [
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png", 
        ]
    },
    {
        price: 299,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 19,
        id: 2427928893,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 21,
        id: 2124324879,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png", 
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 7164715289,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 5567565503,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png", 
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 8850904069,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 7525085761,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png", 
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8770107119,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 9042058779,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 9245877597,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png", 
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 915565643,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png", 
        ]
    },
    {
        price: 299,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 5715764445,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 6196630337,
        imgGroup: [
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg", 
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 56,
        id: 9766792956,
        imgGroup: [
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png", 
        ]
    },
    {
        price: 140,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 23,
        id: 7459423931,
        imgGroup: [
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png", 
        ]
    },
    {
        price: 200,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 42,
        id: 6309213496,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png", 
        ]
    },
    {
        price: 450,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 39,
        id: 391400042,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 750,
        title: "ASUS ROG Strix G15",
        rating: 1,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 24,
        id: 4699929309,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png", 
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 56,
        id: 952795536,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 54,
        id: 2130678973,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 87,
        title: "Introducing New Winter Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/chair-with-clothes.png",
        discount: 30,
        id: 7768130770,
        imgGroup: [
            "/assets/images/products/chair-with-clothes.png",
            "/assets/images/products/chair-with-clothes.png",
            "/assets/images/products/chair-with-clothes.png", 
        ]
    },
    {
        price: 39,
        title: "Introducing New Headphone Collection",
        rating: 5,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/headphone.png",
        discount: 40,
        id: 4530136512,
        imgGroup: [
            "/assets/images/products/headphone.png",
            "/assets/images/products/headphone.png",
            "/assets/images/products/headphone.png", 
        ]
    },
    {
        price: 99,
        title: "Introducing Gaming Gear Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/gaming-gear.png",
        discount: 60,
        id: 1797219567,
        imgGroup: [
            "/assets/images/products/gaming-gear.png",
            "/assets/images/products/gaming-gear.png",
            "/assets/images/products/gaming-gear.png", 
        ]
    },
    {
        price: 1262,
        title: "Bluetooth Speaker",
        rating: 3,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 19,
        id: 394210513,
        imgGroup: [
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png", 
        ]
    },
    {
        price: 1093,
        title: "Titan Watch",
        rating: 2,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 16,
        id: 2860736089,
        imgGroup: [
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png", 
        ]
    },
    {
        price: 1033,
        title: "N95 White Mask",
        rating: 5,
        imgUrl: "/assets/images/products/mask.png",
        discount: 19,
        id: 6548686235,
        imgGroup: [
            "/assets/images/products/mask.png",
            "/assets/images/products/mask.png",
            "/assets/images/products/mask.png", 
        ]
    },
    {
        price: 1495,
        title: "Formal Shoe",
        rating: 3,
        imgUrl: "/assets/images/products/shoe.png",
        discount: 17,
        id: 1461853177,
        imgGroup: [
            "/assets/images/products/shoe.png",
            "/assets/images/products/shoe.png",
            "/assets/images/products/shoe.png", 
        ]
    },
    {
        price: 1321,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 15,
        id: 8223513721,
        imgGroup: [
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png", 
        ]
    },
    {
        price: 1278,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 20,
        id: 7348916584,
        imgGroup: [
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png", 
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8439174779,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 8014401053,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png", 
        ]
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 4831049945,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 569265108,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png", 
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 1785388011,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 2797198596,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png", 
        ]
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 6097712332,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png", 
        ]
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 3823161404,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png", 
        ]
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 9649434184,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png", 
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 7972403121,
        imgGroup: [
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg", 
        ]
    },
    {
        price: 200,
        title: "Grey Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (1).png",
        discount: 5,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 9166392247,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (1).png",
            "/assets/images/Furniture Shop/Furniture (1).png",
            "/assets/images/Furniture Shop/Furniture (1).png", 
        ]
    },
    {
        price: 125,
        title: "Black Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (2).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3568601376,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (2).png",
            "/assets/images/Furniture Shop/Furniture (2).png",
            "/assets/images/Furniture Shop/Furniture (2).png", 
        ]
    },
    {
        price: 150,
        title: "Comfortable Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (3).png",
        discount: 20,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7295351859,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (3).png",
            "/assets/images/Furniture Shop/Furniture (3).png",
            "/assets/images/Furniture Shop/Furniture (3).png", 
        ]
    },
    {
        price: 146,
        title: "Study Chair",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture (4).png",
        discount: 5,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7882384109,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (4).png",
            "/assets/images/Furniture Shop/Furniture (4).png",
            "/assets/images/Furniture Shop/Furniture (4).png", 
        ]
    },
    {
        price: 138,
        title: "Study Gold Chair",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (6).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3806497434,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (6).png",
            "/assets/images/Furniture Shop/Furniture (6).png",
            "/assets/images/Furniture Shop/Furniture (6).png", 
        ]
    },
    {
        price: 100,
        title: "Double Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (7).png",
        discount: 13,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 783537235,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (7).png",
            "/assets/images/Furniture Shop/Furniture (7).png",
            "/assets/images/Furniture Shop/Furniture (7).png", 
        ]
    },
    {
        price: 457,
        title: "Brown Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (8).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 6886713098,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (8).png",
            "/assets/images/Furniture Shop/Furniture (8).png",
            "/assets/images/Furniture Shop/Furniture (8).png", 
        ]
    },
    {
        price: 110,
        title: "Arm Sofa",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (9).png",
        discount: 17,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 4553983073,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (9).png",
            "/assets/images/Furniture Shop/Furniture (9).png",
            "/assets/images/Furniture Shop/Furniture (9).png", 
        ]
    },
    {
        price: 146,
        title: "Couple Sofa",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture.png",
        discount: 2,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 8883030738,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture.png",
            "/assets/images/Furniture Shop/Furniture.png",
            "/assets/images/Furniture Shop/Furniture.png", 
        ]
    },
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        category: "grocery1",
        id: 5761782611,
        imgGroup: [
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png", 
        ]
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        category: "grocery1",
        id: 4473716044,
        imgGroup: [
            "/assets/images/Groceries Shop/MiniPeppers.png",
            "/assets/images/Groceries Shop/MiniPeppers.png",
            "/assets/images/Groceries Shop/MiniPeppers.png", 
        ]
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        category: "grocery1",
        id: 8672259219,
        imgGroup: [
            "/assets/images/Groceries Shop/strawberry.png",
            "/assets/images/Groceries Shop/strawberry.png",
            "/assets/images/Groceries Shop/strawberry.png", 
        ]
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        category: "grocery1",
        id: 4694350957,
        imgGroup: [
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png", 
        ]
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        category: "grocery1",
        id: 4330013762,
        imgGroup: [
            "/assets/images/Groceries Shop/Orange.png",
            "/assets/images/Groceries Shop/Orange.png",
            "/assets/images/Groceries Shop/Orange.png", 
        ]
    },
    {
        price: 141,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 12,
        category: "grocery1",
        id: 3437114550,
        imgGroup: [
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png", 
        ]
    },
    {
        price: 145,
        title: "Red Apple",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/Red apple.png",
        discount: 7,
        category: "grocery1",
        id: 145450158,
        imgGroup: [
            "/assets/images/Groceries Shop/Red apple.png",
            "/assets/images/Groceries Shop/Red apple.png",
            "/assets/images/Groceries Shop/Red apple.png", 
        ]
    },
    {
        price: 216,
        title: "Lemon",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 9,
        category: "grocery1",
        id: 6935257247,
        imgGroup: [
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png", 
        ]
    },
    {
        price: 198,
        title: "Offer Fruits",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        discount: 12,
        category: "grocery1",
        id: 3805054724,
        imgGroup: [
            "/assets/images/Groceries Shop/Offer Card.png",
            "/assets/images/Groceries Shop/Offer Card.png",
            "/assets/images/Groceries Shop/Offer Card.png", 
        ]
    },
    {
        price: 230,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (1).png",
        discount: 8,
        id: 7070790490,
        imgGroup: [
            "/assets/images/Health Shop/Product (1).png",
            "/assets/images/Health Shop/Product (1).png",
            "/assets/images/Health Shop/Product (1).png", 
        ]
    },
    {
        price: 65,
        title: "Sphygmomanometer",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (2).png",
        discount: 6,
        id: 1964376306,
        imgGroup: [
            "/assets/images/Health Shop/Product (2).png",
            "/assets/images/Health Shop/Product (2).png",
            "/assets/images/Health Shop/Product (2).png", 
        ]
    },
    {
        price: 181,
        title: "Fresh Strawberry",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (4).png",
        discount: 11,
        id: 6124133195,
        imgGroup: [
            "/assets/images/Health Shop/Product (4).png",
            "/assets/images/Health Shop/Product (4).png",
            "/assets/images/Health Shop/Product (4).png", 
        ]
    },
    {
        price: 211,
        title: "Nivea Cream",
        rating: 4,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (5).png",
        discount: 11,
        id: 4980810486,
        imgGroup: [
            "/assets/images/Health Shop/Product (5).png",
            "/assets/images/Health Shop/Product (5).png",
            "/assets/images/Health Shop/Product (5).png", 
        ]
    },
    {
        price: 189,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (6).png",
        discount: 8,
        id: 928671027,
        imgGroup: [
            "/assets/images/Health Shop/Product (6).png",
            "/assets/images/Health Shop/Product (6).png",
            "/assets/images/Health Shop/Product (6).png", 
        ]
    },
    {
        price: 165,
        title: "Blue Stethoscope",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (3).png",
        discount: 9,
        id: 3965473517,
        imgGroup: [
            "/assets/images/Health Shop/Product (3).png",
            "/assets/images/Health Shop/Product (3).png",
            "/assets/images/Health Shop/Product (3).png", 
        ]
    },
    {
        price: 72,
        title: "Sphygmomanometer",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (7).png",
        discount: 12,
        id: 8082689609,
        imgGroup: [
            "/assets/images/Health Shop/Product (7).png",
            "/assets/images/Health Shop/Product (7).png",
            "/assets/images/Health Shop/Product (7).png", 
        ]
    },
    {
        price: 163,
        title: "Vichy Liftactiv Cream",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (8).png",
        discount: 7,
        id: 3417973164,
        imgGroup: [
            "/assets/images/Health Shop/Product (8).png",
            "/assets/images/Health Shop/Product (8).png",
            "/assets/images/Health Shop/Product (8).png", 
        ]
    },
    {
        price: 180,
        title: "Nivea Cream Soft Milk",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (9).png",
        discount: 8,
        id: 398141020,
        imgGroup: [
            "/assets/images/Health Shop/Product (9).png",
            "/assets/images/Health Shop/Product (9).png",
            "/assets/images/Health Shop/Product (9).png", 
        ]
    },
    {
        price: 219,
        title: "Gold Wedding Ring",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 7.png",
        discount: 9,
        id: 6503013484,
        imgGroup: [
            "/assets/images/Gift Shop/Product 7.png",
            "/assets/images/Gift Shop/Product 7.png",
            "/assets/images/Gift Shop/Product 7.png", 
        ]
    },
    {
        price: 209,
        title: "Gift For Baby",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 4.png",
        discount: 17,
        id: 1042471944,
        imgGroup: [
            "/assets/images/Gift Shop/Product 4.png",
            "/assets/images/Gift Shop/Product 4.png",
            "/assets/images/Gift Shop/Product 4.png", 
        ]
    },
    {
        price: 248,
        title: "Special Gift For Young",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift Box.png",
        discount: 9,
        id: 1263502673,
        imgGroup: [
            "/assets/images/Gift Shop/Gift Box.png",
            "/assets/images/Gift Shop/Gift Box.png",
            "/assets/images/Gift Shop/Gift Box.png", 
        ]
    },
    {
        price: 111,
        title: "Gift For Boy",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 12,
        id: 5884344952,
        imgGroup: [
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png", 
        ]
    },
    {
        price: 65,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 18,
        id: 8634030972,
        imgGroup: [
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png", 
        ]
    },
    {
        price: 71,
        title: "Baby Doll Gift",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 8,
        id: 7101230747,
        imgGroup: [
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png", 
        ]
    },
    {
        price: 172,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 18,
        id: 3376292520,
        imgGroup: [
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png", 
        ]
    },
    {
        price: 162,
        title: "Birthday Gift For Girl",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/pngwing.com (3).png",
        discount: 8,
        id: 7544411360,
        imgGroup: [
            "/assets/images/Gift Shop/pngwing.com (3).png",
            "/assets/images/Gift Shop/pngwing.com (3).png",
            "/assets/images/Gift Shop/pngwing.com (3).png", 
        ]
    },
    {
        price: 98,
        title: "Gift For Boy",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 11,
        id: 6808422238,
        imgGroup: [
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png", 
        ]
    },
    {
        price: 85,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 13,
        id: 8643586433,
        imgGroup: [
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png", 
        ]
    },
    {
        price: 218,
        title: "Baby Doll Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 11,
        id: 5666445442,
        imgGroup: [
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png", 
        ]
    },
    {
        price: 142,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 12,
        id: 3938759640,
        imgGroup: [
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png", 
        ]
    },
    {
        title: "Premium Grocery Collection",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
        imgGroup: [
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png", 
        ],
        category: "groceries",
        discount: 11,
        id: 1818036939
    },
    {
        title: "Premium Grocery Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png", 
        ],
        category: "groceries",
        discount: 14,
        id: 8990926163
    },
    {
        title: "Fresh&Real CHole Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
        imgGroup: [
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png", 
        ],
        category: "groceries",
        discount: 13,
        id: 3085195407
    },
    {
        title: "Gum Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/5.GumPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png", 
        ],
        category: "groceries",
        discount: 13,
        id: 3098429480
    },
    {
        title: "Colgate Advance Protection Toothpaste",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
        category: "groceries",
        discount: 12,
        id: 4145242238,
        imgGroup: [
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png", 
        ]
    },
    {
        title: "Catch Sprinklers Chat Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
        category: "groceries",
        discount: 19,
        id: 7485173785,
        imgGroup: [
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png", 
        ]
    },
    {
        title: "Catch Italian Seasoning Grinder",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
        category: "groceries",
        discount: 10,
        id: 8359512442,
        imgGroup: [
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png", 
        ]
    },
    {
        title: "Tadka Garam Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
        category: "groceries",
        discount: 16,
        id: 2796979839,
        imgGroup: [
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png", 
        ]
    }, 
]);

;// CONCATENATED MODULE: ./src/fake-db/server/furniture-shop/productsDB.js



mock.onGet("/api/furniture-shop/top-new-products").reply(()=>{
    try {
        return [
            200,
            topNewProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/furniture-shop/top-selling-products").reply(()=>{
    try {
        return [
            200,
            topSellingProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const furnitureAllProducts = bazaar_react_database.slice(345, 354);
mock.onGet("/api/furniture-shop/all-products").reply(()=>{
    try {
        return [
            200,
            furnitureAllProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/gadget-shop/gadget-store-data.js
const mainCarouselData = [
    {
        price: 87,
        title: "Introducing New Winter Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/chair-with-clothes.png",
        discount: 30,
        id: 7768130770
    },
    {
        price: 39,
        title: "Introducing New Headphone Collection",
        rating: 5,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/headphone.png",
        discount: 40,
        id: 4530136512
    },
    {
        price: 99,
        title: "Introducing Gaming Gear Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/gaming-gear.png",
        discount: 60,
        id: 1797219567
    }, 
];
const topPicksItem = [
    {
        price: 1262,
        title: "Bluetooth Speaker",
        rating: 3,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 19,
        id: 394210513
    },
    {
        price: 1093,
        title: "Titan Watch",
        rating: 2,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 16,
        id: 2860736089
    },
    {
        price: 1033,
        title: "N95 White Mask",
        rating: 5,
        imgUrl: "/assets/images/products/mask.png",
        discount: 19,
        id: 6548686235
    },
    {
        price: 1495,
        title: "Formal Shoe",
        rating: 3,
        imgUrl: "/assets/images/products/shoe.png",
        discount: 17,
        id: 1461853177
    },
    {
        price: 1321,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 15,
        id: 8223513721
    },
    {
        price: 1278,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 20,
        id: 7348916584
    }, 
];
const featuredCategories = [
    {
        title: "CAMERA",
        imgUrl: "/assets/images/products/camera.png"
    },
    {
        title: "GAMING",
        imgUrl: "/assets/images/products/game-box.png"
    },
    {
        title: "WATCH",
        imgUrl: "/assets/images/products/watch.png"
    },
    {
        title: "DRONE",
        imgUrl: "/assets/images/products/drone.png"
    },
    {
        title: "PHONE",
        imgUrl: "/assets/images/products/mobile-2.png"
    }, 
];
const bannerData = [
    {
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/table.png",
        title: "Big Saves on Home Decoration. Save Upto 80%",
        body: "Easy payment policy, 12 months 0% in interest."
    },
    {
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/clothes.png",
        title: "Exclusive Men’s Clothes. Save Upto 50%",
        body: "Comfortable, stylish, elegant and long lasting."
    }, 
];
const mostViewedList = [
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8439174779
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 8014401053
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 4831049945
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 569265108
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 1785388011
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 2797198596
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 6097712332
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 3823161404
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 9649434184
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 7972403121
    }, 
];
const blogsList = [
    {
        url: "#",
        comments: 3,
        createdAt: "24 Feb 2020",
        imgUrl: "/assets/images/products/blog-1.png",
        title: "Art of Keeping Home Minimal & Organised.",
        description: "Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
    },
    {
        url: "#",
        comments: 14,
        createdAt: "12 Jan 2020",
        imgUrl: "/assets/images/products/blog-2.png",
        title: "The Monthly Guide to Cleaning Your Home",
        description: "Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/gadget-shop/carouselsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/gadget-store/main-carousel").reply(()=>{
    try {
        return [
            200,
            mainCarouselData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gadget-store/top-picks-list").reply(()=>{
    try {
        return [
            200,
            topPicksItem
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gadget-store/most-viewed").reply(async ()=>{
    try {
        return [
            200,
            mostViewedList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/gadget-shop/sectionsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/gadget-store/featured-categories").reply(async ()=>{
    try {
        return [
            200,
            featuredCategories
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gadget-store/two-banners").reply(async ()=>{
    try {
        return [
            200,
            bannerData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gadget-store/blog-lists").reply(async ()=>{
    try {
        return [
            200,
            blogsList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/gift-shop/giftShopData.js
const giftShopNavigation = [
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "Home",
                title: "Home",
                href: "/product/search/Dariry & Eggs"
            },
            {
                icon: "Popular",
                title: "Popular Products",
                href: "/product/search/Breakfast"
            },
            {
                icon: "Trending",
                title: "Trending Products",
                href: "/product/search/Frozen"
            },
            {
                icon: "Products",
                title: "All Products",
                href: "/product/search/vegetables"
            }, 
        ]
    },
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "BirthdayCake",
                title: "Birthday",
                href: "/product/search/vegetables",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Children",
                title: "Children's",
                href: "/product/search/Fruits & Vegetables",
                child: [
                    {
                        title: "Onion",
                        href: "/product/search/Onion"
                    },
                    {
                        title: "Potato",
                        href: "/product/search/Potato"
                    },
                    {
                        title: "Vegetable Pack",
                        href: "/product/search/Vegetable Pack"
                    }, 
                ]
            },
            {
                icon: "Chirstmas",
                title: "Christmas Gifts",
                href: "/product/search/Dariry & Eggs",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Flower",
                title: "Flower",
                href: "/product/search/Dariry & Eggs"
            },
            {
                icon: "TeddyBear",
                title: "Teddy Bears",
                href: "/product/search/Breakfast"
            },
            {
                icon: "ValentineGift",
                title: "Valentine Gifts",
                href: "/product/search/Frozen"
            },
            {
                icon: "WeddingGift",
                title: "Wedding Gifts",
                href: "/product/search/Organic"
            },
            {
                icon: "NewYearGift",
                title: "New Year Gift",
                href: "/product/search/Canned Food"
            },
            {
                icon: "Toys",
                title: "Toys",
                href: "/product/search/Coffee & Snacks"
            },
            {
                icon: "Football",
                title: "Ball",
                href: "/product/search/Sauces & Jems"
            },
            {
                icon: "BabyToys",
                title: "Baby Toys",
                href: "/product/search/Sauces & Jems"
            },
            {
                icon: "Robot",
                title: "Robot",
                href: "/product/search/Sauces & Jems"
            }, 
        ]
    }, 
];
const giftShopData_serviceList = [
    {
        icon: "Truck",
        title: "Delivery quality gift",
        subtitle1: "information on its origins",
        subtitle2: "centric approach"
    },
    {
        icon: "PickUpBox",
        title: "Gift for all Occession",
        subtitle1: "information on its origins",
        subtitle2: "centric approach"
    },
    {
        icon: "OnlineService",
        title: "Happy Service",
        subtitle1: "information on its origins",
        subtitle2: "centric approach"
    }, 
];
const topCategories = [
    {
        title: "Birthday Gift",
        available: "27 Available Items",
        imgUrl: "/assets/images/Gift Shop/Product 1.png"
    },
    {
        title: "Couple Gift",
        available: "17 Available Items",
        imgUrl: "/assets/images/Gift Shop/Product 2.png"
    },
    {
        title: "Baby Doll",
        available: "27 Available Items",
        imgUrl: "/assets/images/Gift Shop/Product 4.png"
    }, 
];
const giftShopData_popularProducts = [
    {
        price: 162,
        title: "Birthday Gift For Girl",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/pngwing.com (3).png",
        discount: 8,
        id: 7544411360
    },
    {
        price: 98,
        title: "Gift For Boy",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 11,
        id: 6808422238
    },
    {
        price: 85,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 13,
        id: 8643586433
    },
    {
        price: 218,
        title: "Baby Doll Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 11,
        id: 5666445442
    },
    {
        price: 142,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 12,
        id: 3938759640
    },
    {
        price: 71,
        title: "Baby Doll Gift",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 8,
        id: 7101230747
    }, 
];
const topSailedProducts = [
    {
        price: 219,
        title: "Gold Wedding Ring",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 7.png",
        discount: 9,
        id: 6503013484
    },
    {
        price: 209,
        title: "Gift For Baby",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 4.png",
        discount: 17,
        id: 1042471944
    },
    {
        price: 248,
        title: "Special Gift For Young",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift Box.png",
        discount: 9,
        id: 1263502673
    },
    {
        price: 111,
        title: "Gift For Boy",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 12,
        id: 5884344952
    },
    {
        price: 65,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 18,
        id: 8634030972
    },
    {
        price: 71,
        title: "Baby Doll Gift",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 8,
        id: 7101230747
    }, 
];
const giftShopProducts = [
    {
        price: 219,
        title: "Gold Wedding Ring",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 7.png",
        discount: 9,
        id: 6503013484
    },
    {
        price: 209,
        title: "Gift For Baby",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 4.png",
        discount: 17,
        id: 1042471944
    },
    {
        price: 248,
        title: "Special Gift For Young",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift Box.png",
        discount: 9,
        id: 1263502673
    },
    {
        price: 111,
        title: "Gift For Boy",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 12,
        id: 5884344952
    },
    {
        price: 65,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 18,
        id: 8634030972
    },
    {
        price: 71,
        title: "Baby Doll Gift",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 8,
        id: 7101230747
    },
    {
        price: 172,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 18,
        id: 3376292520
    },
    {
        price: 162,
        title: "Birthday Gift For Girl",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/pngwing.com (3).png",
        discount: 8,
        id: 7544411360
    },
    {
        price: 98,
        title: "Gift For Boy",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 11,
        id: 6808422238
    },
    {
        price: 85,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 13,
        id: 8643586433
    },
    {
        price: 218,
        title: "Baby Doll Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 11,
        id: 5666445442
    },
    {
        price: 142,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 12,
        id: 3938759640
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/gift-shop/navigationDB.js


mock.onGet("/api/gift-shop-navigation").reply(()=>{
    try {
        return [
            200,
            giftShopNavigation
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/gift-shop/productsDB.js


mock.onGet("/api/gift-shop/popular-products").reply(()=>{
    try {
        return [
            200,
            giftShopData_popularProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gift-shop/top-sailed-products").reply(()=>{
    try {
        return [
            200,
            topSailedProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gift-shop/all-products").reply(()=>{
    try {
        return [
            200,
            giftShopProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/gift-shop/servicesAndCategoriesDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/gift-shop/service-list").reply(()=>{
    try {
        return [
            200,
            giftShopData_serviceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/gift-shop/top-categories").reply(()=>{
    try {
        return [
            200,
            topCategories
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery1-shop/grocery1Data.js
const grocery1Navigation = [
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "Milk",
                title: "Dariry & Eggs",
                href: "/product/search/Dariry & Eggs"
            },
            {
                icon: "Breakfast",
                title: "Breakfast",
                href: "/product/search/Breakfast"
            },
            {
                icon: "Yogurt",
                title: "Frozen",
                href: "/product/search/Frozen"
            },
            {
                icon: "Carrot",
                title: "Vegetables",
                href: "/product/search/vegetables",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Apple",
                title: "Fruits & Vegetables",
                href: "/product/search/Fruits & Vegetables",
                child: [
                    {
                        title: "Onion",
                        href: "/product/search/Onion"
                    },
                    {
                        title: "Potato",
                        href: "/product/search/Potato"
                    },
                    {
                        title: "Vegetable Pack",
                        href: "/product/search/Vegetable Pack"
                    }, 
                ]
            },
            {
                icon: "Milk",
                title: "Dariry & Eggs",
                href: "/product/search/Dariry & Eggs",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            }, 
        ]
    },
    {
        category: "Top Categories",
        categoryItem: [
            {
                icon: "Carrot",
                title: "Fish and Mil",
                href: "/product/search/vegetables",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Apple",
                title: "Health and beauty",
                href: "/product/search/Fruits & Vegetables",
                child: [
                    {
                        title: "Onion",
                        href: "/product/search/Onion"
                    },
                    {
                        title: "Potato",
                        href: "/product/search/Potato"
                    },
                    {
                        title: "Vegetable Pack",
                        href: "/product/search/Vegetable Pack"
                    }, 
                ]
            },
            {
                icon: "Milk",
                title: "Dress and something",
                href: "/product/search/Dariry & Eggs",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                icon: "Milk",
                title: "Dariry & Eggs",
                href: "/product/search/Dariry & Eggs"
            },
            {
                icon: "Breakfast",
                title: "Breakfast",
                href: "/product/search/Breakfast"
            },
            {
                icon: "Yogurt",
                title: "Frozen",
                href: "/product/search/Frozen"
            },
            {
                icon: "Honey",
                title: "Organic",
                href: "/product/search/Organic"
            },
            {
                icon: "Beer",
                title: "Canned Food",
                href: "/product/search/Canned Food"
            },
            {
                icon: "Snack",
                title: "Coffee & Snacks",
                href: "/product/search/Coffee & Snacks"
            },
            {
                icon: "Bottle",
                title: "Sauces & Jems",
                href: "/product/search/Sauces & Jems"
            }, 
        ]
    }, 
];
const grocery1ServiceList = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        subtitle: "Start from $10"
    },
    {
        icon: "MoneyGuarantee",
        title: "Money Guarantee",
        subtitle: "7 Days Back"
    },
    {
        icon: "AlarmClock",
        title: "365 Days",
        subtitle: "For free return"
    },
    {
        icon: "Payment",
        title: "Payment",
        subtitle: "Secure system"
    },
    {
        icon: "OnlineSupport",
        title: "Online Support",
        subtitle: "24/7 daily"
    }, 
];
const grocery1Data_popularProducts = [
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        id: 5761782611
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        id: 4473716044
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        id: 8672259219
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        id: 4694350957
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        id: 4330013762
    }, 
];
const trendingProducts = [
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        id: 4330013762
    },
    {
        price: 141,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 12,
        id: 3437114550
    },
    {
        price: 145,
        title: "Red Apple",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/Red apple.png",
        discount: 7,
        id: 145450158
    },
    {
        price: 216,
        title: "Lemon",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 9,
        id: 6935257247
    },
    {
        price: 198,
        title: "Offer Fruits",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        discount: 12,
        id: 3805054724
    }, 
];
const grocery1Products = [
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        id: 5761782611
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        id: 4473716044
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        id: 8672259219
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        id: 4694350957
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        id: 4330013762
    },
    {
        price: 141,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 12,
        id: 3437114550
    },
    {
        price: 145,
        title: "Red Apple",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/Red apple.png",
        discount: 7,
        id: 145450158
    },
    {
        price: 216,
        title: "Lemon",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 9,
        id: 6935257247
    },
    {
        price: 198,
        title: "Offer Fruits",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        discount: 12,
        id: 3805054724
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/grocery1-shop/navigationDB.js


mock.onGet("/api/grocery1/navigation").reply(()=>{
    try {
        return [
            200,
            grocery1Navigation
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery1-shop/productsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/grocery1/popular-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            grocery1Data_popularProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery1/trending-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            trendingProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery1/all-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            grocery1Products
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery1-shop/servicesDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/grocery1/services").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            grocery1ServiceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery2-shop/grocery-data.js
const grocery_data_serviceList = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        subtitle: "Start from $10"
    },
    {
        icon: "FeedbackThumbsUp",
        title: "Feedback",
        subtitle: "97% positive"
    },
    {
        icon: "Shield",
        title: "Payment",
        subtitle: "100% secured"
    }, 
];
const shopByCategory = [
    {
        imgUrl: "/assets/images/icons/healthy-food.svg",
        title: "Fruits & Vegatables",
        subtitle: "Upto 60% off",
        url: "/"
    },
    {
        imgUrl: "/assets/images/icons/fish.svg",
        title: "Fish & meat",
        subtitle: "Upto 30% off",
        url: "/"
    },
    {
        imgUrl: "/assets/images/icons/wheat-flour.svg",
        title: "Rice & Flour",
        subtitle: "Upto 40% off",
        url: "/"
    },
    {
        imgUrl: "/assets/images/products/Orange 1kg 2.png",
        title: "Fruits & Vegatables",
        subtitle: "Upto 40% off",
        url: "/"
    },
    {
        imgUrl: "/assets/images/icons/feeding-bottle.svg",
        title: "Baby Food",
        subtitle: "Upto 30% off",
        url: "/"
    },
    {
        imgUrl: "/assets/images/icons/skincare.svg",
        title: "Personal Care",
        subtitle: "Upto 60% off",
        url: "/"
    }, 
];
const carouselCardList = [
    {
        title: "25% Special Off Today Only for Vegetables",
        subtitle: "Till 10 Sept, 2021",
        imgUrl: "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
        shopUrl: "/",
        bgColor: "#F6FFE5"
    },
    {
        title: "15% Off for All Product Only Need to Subscribe",
        subtitle: "Subscribe Us",
        imgUrl: "/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png",
        shopUrl: "/",
        bgColor: "#FFF8E5"
    },
    {
        title: "25% Special Off Today Only for Vegetables",
        subtitle: "Till 10 Sept, 2021",
        imgUrl: "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
        shopUrl: "/",
        bgColor: "#F6FFE5"
    }, 
];
const testimonialList = [
    {
        clientName: "Jonathon Doe",
        comment: "Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !",
        photoUrl: "/assets/images/faces/7.png"
    },
    {
        clientName: "Jonathon Doe",
        comment: "Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !",
        photoUrl: "/assets/images/faces/7.png"
    },
    {
        clientName: "Jonathon Doe",
        comment: "Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !",
        photoUrl: "/assets/images/faces/7.png"
    }, 
];
const grocery2Navigations = [
    {
        icon: "Carrot",
        title: "Vegetables",
        href: "/product/search/vegetables"
    },
    {
        icon: "Apple",
        title: "Fruits & Vegetables",
        href: "/product/search/Fruits & Vegetables",
        child: [
            {
                title: "Fresh Frutes",
                href: "/product/search/Fresh Frutes",
                child: [
                    {
                        title: "Pears, apples, quinces",
                        href: "/product/search/Pears, apples, quinces"
                    },
                    {
                        title: "Peaches, plums, apricots",
                        href: "/product/search/Peaches, plums, apricots"
                    },
                    {
                        title: "Grapes",
                        href: "/product/search/Grapes"
                    }, 
                ]
            },
            {
                title: "Fresh Vegetables",
                href: "/product/search/Fresh Vegetables",
                child: [
                    {
                        title: "Onion",
                        href: "/product/search/Onion"
                    },
                    {
                        title: "Potato",
                        href: "/product/search/Potato"
                    },
                    {
                        title: "Vegetable Pack",
                        href: "/product/search/Vegetable Pack"
                    }, 
                ]
            }, 
        ]
    },
    {
        icon: "Milk",
        title: "Dariry & Eggs",
        href: "/product/search/Dariry & Eggs"
    },
    {
        icon: "Breakfast",
        title: "Breakfast",
        href: "/product/search/Breakfast"
    },
    {
        icon: "Yogurt",
        title: "Frozen",
        href: "/product/search/Frozen"
    },
    {
        icon: "Honey",
        title: "Organic",
        href: "/product/search/Organic"
    },
    {
        icon: "Beer",
        title: "Canned Food",
        href: "/product/search/Canned Food"
    },
    {
        icon: "Snack",
        title: "Coffee & Snacks",
        href: "/product/search/Coffee & Snacks"
    },
    {
        icon: "Bottle",
        title: "Sauces & Jems",
        href: "/product/search/Sauces & Jems"
    },
    {
        icon: "Honey",
        title: "Organic",
        href: "/product/search/Organic"
    },
    {
        icon: "Beer",
        title: "Canned Food",
        href: "/product/search/Canned Food"
    },
    {
        icon: "Snack",
        title: "Coffee & Snacks",
        href: "/product/search/Coffee & Snacks"
    },
    {
        icon: "Bottle",
        title: "Sauces & Jems",
        href: "/product/search/Sauces & Jems"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/grocery2-shop/carouselsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com



const section4Data = bazaar_react_database.slice(179, 188);
mock.onGet("/api/grocery-section4/products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            section4Data
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const section5Data = bazaar_react_database.slice(229, 241);
mock.onGet("/api/grocery-section5/products").reply(()=>{
    try {
        return [
            200,
            section5Data
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const section7Data = bazaar_react_database.slice(190, 199);
mock.onGet("/api/grocery-section7/products").reply(()=>{
    try {
        return [
            200,
            section7Data
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const section8Data = bazaar_react_database.slice(197, 206);
mock.onGet("/api/grocery-section8/products").reply(()=>{
    try {
        return [
            200,
            section8Data
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery-section9/testimonial-list").reply(()=>{
    try {
        return [
            200,
            testimonialList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery2-shop/navigationDB.js


mock.onGet("/api/grocery-navigation").reply(()=>{
    try {
        return [
            200,
            grocery2Navigations
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery2-shop/sectionDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/grocery-section2/services").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            grocery_data_serviceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery-section3/shop-by-category").reply(()=>{
    try {
        return [
            200,
            shopByCategory
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery-section6/card-list").reply(()=>{
    try {
        return [
            200,
            carouselCardList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/grocery3-shop/grocery3Data.js
const grocery3Data_grocery1ServiceList = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        subtitle: "Start from $10"
    },
    {
        icon: "MoneyGuarantee",
        title: "Money Guarantee",
        subtitle: "7 Days Back"
    },
    {
        icon: "AlarmClock",
        title: "365 Days",
        subtitle: "For free return"
    },
    {
        icon: "Payment",
        title: "Payment",
        subtitle: "Secure system"
    },
    {
        icon: "OnlineSupport",
        title: "Online Support",
        subtitle: "24/7 daily"
    }, 
];
const grocery3Data_topSailedProducts = [
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        id: 5761782611
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        id: 4473716044
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        id: 8672259219
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        id: 4694350957
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        id: 4330013762
    }, 
];
const grocery3Products = [
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        id: 5761782611
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        id: 4473716044
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        id: 8672259219
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        id: 4694350957
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        id: 4330013762
    },
    {
        price: 141,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 12,
        id: 3437114550
    },
    {
        price: 145,
        title: "Red Apple",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/Red apple.png",
        discount: 7,
        id: 145450158
    },
    {
        price: 216,
        title: "Lemon",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 9,
        id: 6935257247
    },
    {
        price: 198,
        title: "Offer Fruits",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        discount: 12,
        id: 3805054724
    }, 
];
const grocery3offerProducts = [
    {
        title: "Till 10 Dec, 2021",
        discountOffer: "25% Special Off Today Only for Vegetables",
        imgUrl: "/assets/images/Groceries Shop/vagitable.png",
        buttonText: "Shop Now"
    },
    {
        title: "New Offer!",
        discountOffer: "15% Special Off Today Only for Fruits Item.",
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        buttonText: "Shop Now"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/grocery3-shop/productsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/grocery3/top-sailed-products").reply(async ()=>{
    try {
        return [
            200,
            grocery3Data_topSailedProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery3/all-products").reply(async ()=>{
    try {
        return [
            200,
            grocery3Products
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/grocery3/offer-products").reply(async ()=>{
    try {
        return [
            200,
            grocery3offerProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/healthbeauty-shop/healthBeautyData.js
const healthBeautyNavigation = [
    {
        icon: "Home",
        title: "Home",
        href: "/product/search/Dariry & Eggs"
    },
    {
        icon: "Popular",
        title: "Popular Products",
        href: "/product/search/Breakfast"
    },
    {
        icon: "Trending",
        title: "Trending Products",
        href: "/product/search/Frozen"
    },
    {
        icon: "Products",
        title: "All Products",
        href: "/product/search/vegetables"
    },
    {
        icon: "HealthBeauty",
        title: "Health and beauty",
        href: "/product/search/Fruits & Vegetables",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "Mascara",
        title: "Mascara",
        href: "/product/search/Dariry & Eggs",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "Powder",
        title: "Powder",
        href: "/product/search/Breakfast",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "Lotion",
        title: "Lotion",
        href: "/product/search/Frozen",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "HealthBeauty",
        title: "Makeup",
        href: "/product/search/Organic",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "Lipstick",
        title: "Lipstick",
        href: "/product/search/Canned Food",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "FaceMask",
        title: "Face Mask",
        href: "/product/search/Coffee & Snacks",
        child: [
            {
                title: "Beauty Items",
                href: "/product/search/Onion"
            },
            {
                title: "Medicine Items",
                href: "/product/search/Potato"
            },
            {
                title: "Makeup Items",
                href: "/product/search/Vegetable Pack"
            }, 
        ]
    },
    {
        icon: "Thermometer",
        title: "Digital Thermometer",
        href: "/product/search/Sauces & Jems"
    },
    {
        icon: "OxygenPump",
        title: "Oxygen Pump",
        href: "/product/search/Breakfast"
    },
    {
        icon: "LenseCase",
        title: "Lense Case Kit",
        href: "/product/search/Frozen"
    },
    {
        icon: "AutoMotive",
        title: "Automotive",
        href: "/product/search/Organic"
    }, 
];
const healthBeautyData_topNewProducts = [
    {
        price: 189,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (6).png",
        discount: 8,
        id: 928671027
    },
    {
        price: 165,
        title: "Blue Stethoscope",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (3).png",
        discount: 9,
        id: 3965473517
    },
    {
        price: 72,
        title: "Sphygmomanometer",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (7).png",
        discount: 12,
        id: 8082689609
    },
    {
        price: 163,
        title: "Vichy Liftactiv Cream",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (8).png",
        discount: 7,
        id: 3417973164
    },
    {
        price: 180,
        title: "Nivea Cream Soft Milk",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (9).png",
        discount: 8,
        id: 398141020
    }, 
];
const healthBeautyProducts = [
    {
        price: 230,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (1).png",
        discount: 8,
        id: 7070790490
    },
    {
        price: 65,
        title: "Sphygmomanometer",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (2).png",
        discount: 6,
        id: 1964376306
    },
    {
        price: 181,
        title: "Fresh Strawberry",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (4).png",
        discount: 11,
        id: 6124133195
    },
    {
        price: 211,
        title: "Nivea Cream",
        rating: 4,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (5).png",
        discount: 11,
        id: 4980810486
    },
    {
        price: 189,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (6).png",
        discount: 8,
        id: 928671027
    },
    {
        price: 165,
        title: "Blue Stethoscope",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (3).png",
        discount: 9,
        id: 3965473517
    },
    {
        price: 72,
        title: "Sphygmomanometer",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (7).png",
        discount: 12,
        id: 8082689609
    },
    {
        price: 163,
        title: "Vichy Liftactiv Cream",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (8).png",
        discount: 7,
        id: 3417973164
    },
    {
        price: 180,
        title: "Nivea Cream Soft Milk",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (9).png",
        discount: 8,
        id: 398141020
    }, 
];
const healthBeautyServices = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        subtitle1: "Start from $10",
        subtitle2: "centric approach"
    },
    {
        icon: "PickUpBox",
        title: "Pick Up",
        subtitle1: "Secure system",
        subtitle2: "centric approach"
    },
    {
        icon: "OnlineService",
        title: "Online Support",
        subtitle1: "24/7 daily",
        subtitle2: "centric approach"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/healthbeauty-shop/navigationDB.js


mock.onGet("/api/healthbeauty/navigation").reply(()=>{
    try {
        return [
            200,
            healthBeautyNavigation
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/healthbeauty-shop/productsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/healthbeauty/top-new-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            healthBeautyData_topNewProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/healthbeauty/all-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            healthBeautyProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/healthbeauty-shop/servicesDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/healthbeauty/services").reply(()=>{
    try {
        return [
            200,
            healthBeautyServices
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/related-products/related-data.js
const frequentlyBoughtData = [
    {
        title: "Premium Grocery Collection",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
        imgGroup: [
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png", 
        ],
        category: "groceries",
        discount: 11,
        id: 1818036939
    },
    {
        title: "Premium Grocery Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png", 
        ],
        category: "groceries",
        discount: 14,
        id: 8990926163
    },
    {
        title: "Fresh&Real CHole Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
        imgGroup: [
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png", 
        ],
        category: "groceries",
        discount: 13,
        id: 3085195407
    },
    {
        title: "Gum Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/5.GumPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png", 
        ],
        category: "groceries",
        discount: 13,
        id: 3098429480
    }, 
];
const relatedProducts = [
    {
        title: "Colgate Advance Protection Toothpaste",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
        category: "groceries",
        discount: 12,
        id: 4145242238,
        imgGroup: [
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png", 
        ]
    },
    {
        title: "Catch Sprinklers Chat Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
        category: "groceries",
        discount: 19,
        id: 7485173785,
        imgGroup: [
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png", 
        ]
    },
    {
        title: "Catch Italian Seasoning Grinder",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
        category: "groceries",
        discount: 10,
        id: 8359512442,
        imgGroup: [
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png", 
        ]
    },
    {
        title: "Tadka Garam Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
        category: "groceries",
        discount: 16,
        id: 2796979839,
        imgGroup: [
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png", 
        ]
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/related-products/productsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com


mock.onGet("/api/frequently-bought-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            frequentlyBoughtData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/related-products").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            relatedProducts
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/market-1/market-1-data.js

const market_1_data_mainCarouselData = [
    {
        title: "50% Off For Your First Shopping",
        photoUrl: "/assets/images/products/nike-black.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
        buttonText: "Shop Now",
        buttonLik: "#"
    },
    {
        title: "50% Off For Your First Shopping",
        photoUrl: "/assets/images/products/nike-black.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
        buttonText: "Shop Now",
        buttonLik: "#"
    }, 
];
const market_1_data_flashDealsData = [
    {
        price: 250,
        title: "NikeCourt Zoom Vapor Cage",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 4674163016,
        rating: 4
    },
    {
        price: 350,
        title: "Classic Rolex Watch",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 15,
        id: 1786818620,
        rating: 3
    },
    {
        price: 150,
        title: "IPhone 13 Pro Max",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 5287174158,
        rating: 5
    },
    {
        price: 180,
        title: "Mi Led Smart Watch",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 21,
        id: 6708885936,
        rating: 4
    },
    {
        price: 250,
        title: "NikeCourt Zoom Vapor Cage",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 4674163013436,
        rating: 4
    },
    {
        price: 350,
        title: "Classic Rolex Watch",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 15,
        id: 178681823432620,
        rating: 3
    },
    {
        price: 150,
        title: "IPhone 13 Pro Max",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 528717423432158,
        rating: 5
    },
    {
        price: 180,
        title: "Mi Led Smart Watch",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 21,
        id: 670883242385936,
        rating: 4
    }, 
];
const topCategoryList = [
    {
        title: "Headphone",
        subtitle: "3k orders this week",
        categoryUrl: "/",
        imgUrl: "/assets/images/banners/category-1.png"
    },
    {
        title: "Watch",
        subtitle: "3k orders this week",
        categoryUrl: "/",
        imgUrl: "/assets/images/banners/category-2.png"
    },
    {
        title: "Sunglass",
        subtitle: "3k orders this week",
        categoryUrl: "/",
        imgUrl: "/assets/images/banners/category-3.png"
    },
    {
        title: "Headphone",
        subtitle: "3k orders this week",
        categoryUrl: "/",
        imgUrl: "/assets/images/banners/category-1.png"
    },
    {
        title: "Watch",
        subtitle: "3k orders this week",
        categoryUrl: "/",
        imgUrl: "/assets/images/banners/category-2.png"
    }, 
];
const topRatedList = [
    {
        price: 3300,
        reviewCount: 49,
        title: "Camera",
        imgUrl: "/assets/images/products/camera-1.png",
        discount: 8,
        id: 2294256829,
        rating: 4
    },
    {
        price: 400,
        reviewCount: 20,
        title: "Shoe",
        imgUrl: "/assets/images/products/shoes-2.png",
        discount: 5,
        id: 4295570149,
        rating: 4.75
    },
    {
        price: 999,
        reviewCount: 65,
        title: "Phone",
        imgUrl: "/assets/images/products/mobile-1.png",
        discount: 5,
        id: 5676950804,
        rating: 5
    },
    {
        price: 999,
        reviewCount: 75,
        title: "Watch",
        imgUrl: "/assets/images/products/watch-1.png",
        discount: 6,
        id: 1674789677,
        rating: 5
    }, 
];
const topRatedBrandList = [
    {
        imgUrl: "/assets/images/products/london-britches.png",
        title: "London Britches",
        productUrl: "/"
    },
    {
        imgUrl: "/assets/images/products/jim and jiko.png",
        title: "Jim & Jago",
        productUrl: "/"
    }, 
];
const market_1_data_newArrivalsList = [
    {
        price: 150,
        title: "Sunglass",
        imgUrl: "/assets/images/products/imagegoggles.png",
        discount: 8,
        id: 1670078035,
        rating: 5
    },
    {
        price: 250,
        title: "Makeup",
        imgUrl: "/assets/images/products/lipstick (2).png",
        discount: 8,
        id: 3302401429,
        rating: 4
    },
    {
        price: 350,
        title: "Smart Watch",
        imgUrl: "/assets/images/products/bgwatch.png",
        discount: 10,
        id: 814272833,
        rating: 5
    },
    {
        price: 15,
        title: "Lipstick",
        imgUrl: "/assets/images/products/lipstick (1).png",
        discount: 5,
        id: 8169421085,
        rating: 4
    },
    {
        price: 55,
        title: "Green plant",
        imgUrl: "/assets/images/products/lipstick (4).png",
        discount: 7,
        id: 8398582292,
        rating: 2
    },
    {
        price: 535,
        title: "Bonsai tree",
        imgUrl: "/assets/images/products/lipstick (3).png",
        discount: 6,
        id: 6046531880,
        rating: 5
    }, 
];
const carBrandList = [
    "ferrari",
    "tesla",
    "bmw",
    "toyota",
    "mini",
    "ford", 
];
const mobileBrandList = [
    "apple",
    "dell",
    "xiaomi",
    "asus",
    "sony",
    "acer", 
];
const mobileShopList = [
    "herman miller",
    "otobi",
    "hatil",
    "steelcase"
];
const opticsBrandList = [
    "ray-ban",
    "zeiss",
    "occular",
    "apple",
    "titan", 
];
const opticsShopList = [
    "herman miller",
    "zeiss",
    "hatil",
    "steelcase"
];
const bottomCategoryList = [
    {
        name: "Automobile",
        imgUrl: bazaar_react_database[13 + 100].imgUrl
    },
    {
        name: "Car",
        imgUrl: bazaar_react_database[2 * 13 + 100].imgUrl
    },
    {
        name: "Fashion",
        imgUrl: bazaar_react_database[3 * 13 + 100].imgUrl
    },
    {
        name: "Mobile",
        imgUrl: bazaar_react_database[4 * 13 + 100].imgUrl
    },
    {
        name: "Laptop",
        imgUrl: bazaar_react_database[5 * 13 + 100].imgUrl
    },
    {
        name: "Desktop",
        imgUrl: bazaar_react_database[6 * 13 + 100].imgUrl
    },
    {
        name: "Tablet",
        imgUrl: bazaar_react_database[7 * 13 + 100].imgUrl
    },
    {
        name: "Fashion",
        imgUrl: bazaar_react_database[8 * 13 + 100].imgUrl
    },
    {
        name: "Electronics",
        imgUrl: bazaar_react_database[9 * 13 + 100].imgUrl
    },
    {
        name: "Furniture",
        imgUrl: bazaar_react_database[10 * 13 + 100].imgUrl
    },
    {
        name: "Camera",
        imgUrl: bazaar_react_database[11 * 13 + 100].imgUrl
    },
    {
        name: "Electronics",
        imgUrl: bazaar_react_database[100].imgUrl
    }, 
];
const market_1_data_serviceList = [
    {
        icon: "Truck",
        title: "Worldwide Delivery"
    },
    {
        icon: "CreditCardVerified",
        title: "Safe Payment"
    },
    {
        icon: "Shield",
        title: "Shop With Confidence"
    },
    {
        icon: "CustomerService",
        title: "24/7 Support"
    }, 
];

;// CONCATENATED MODULE: ./src/fake-db/server/market-1/carouselsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com



mock.onGet("/api/market-1/main-carousel").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            market_1_data_mainCarouselData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/flash-deals").reply(async ()=>{
    try {
        return [
            200,
            market_1_data_flashDealsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/top-categories").reply(async ()=>{
    try {
        return [
            200,
            topCategoryList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const bigDiscountList = bazaar_react_database.slice(60, 69);
mock.onGet("/api/market-1/big-discounts").reply(async ()=>{
    try {
        return [
            200,
            bigDiscountList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/market-1/sectionsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com



mock.onGet("/api/market-1/toprated-product").reply(async ()=>{
    try {
        return [
            200,
            topRatedList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/toprated-brand").reply(async ()=>{
    try {
        return [
            200,
            topRatedBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/new-arrivals").reply(async ()=>{
    try {
        return [
            200,
            market_1_data_newArrivalsList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/car-brand-list").reply(async ()=>{
    try {
        return [
            200,
            carBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const cartList = bazaar_react_database.slice(0, 6);
mock.onGet("/api/market-1/car-list").reply(async ()=>{
    try {
        return [
            200,
            cartList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/mobile-brand-list").reply(async ()=>{
    try {
        return [
            200,
            mobileBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/mobile-shop-list").reply(async ()=>{
    try {
        return [
            200,
            mobileShopList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const mobileData = bazaar_react_database.slice(81, 90);
mock.onGet("/api/market-1/mobile-list").reply(async ()=>{
    try {
        return [
            200,
            mobileData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/optics/watch-brands").reply(async ()=>{
    try {
        return [
            200,
            opticsBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/optics/watch-shops").reply(async ()=>{
    try {
        return [
            200,
            opticsShopList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const opticsData = bazaar_react_database.slice(95, 104);
mock.onGet("/api/market-1/optics-list").reply(async ()=>{
    try {
        return [
            200,
            opticsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/bottom-categories").reply(async ()=>{
    try {
        return [
            200,
            bottomCategoryList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
const moreData = bazaar_react_database.slice(48, 60);
mock.onGet("/api/market-1/get-more-items").reply(async ()=>{
    try {
        return [
            200,
            moreData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});
mock.onGet("/api/market-1/get-service-list").reply(async ()=>{
    try {
        return [
            200,
            market_1_data_serviceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }, 
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/index.js

























mock.onAny().passThrough();


/***/ }),

/***/ 4555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// Create axios instance with timeout to prevent hanging
const axiosWithTimeout = axios__WEBPACK_IMPORTED_MODULE_3___default().create({
    timeout: 2000
});
function Loader() {
    const { 0: showLoader , 1: setShowLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: hasShown , 1: setHasShown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const imgbaseurl = "https://api.chitralhive.com/api/media/";
    const fetcher = async (url)=>{
        try {
            const res = await axiosWithTimeout.get(url);
            return res.data;
        } catch (error) {
            // If API fails, return null to use fallback
            return null;
        }
    };
    const server_ip = "https://api.chitralhive.com/api/";
    // Share the same SWR cache from _app.jsx to avoid duplicate API calls
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(server_ip + "getGeneralSetting", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
        // Don't block on error - use fallback
        shouldRetryOnError: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Maximum 500ms wait time - much faster initial load
        // Don't wait for API response - show loader briefly then hide
        const maxWaitTime = 500;
        const timer = setTimeout(()=>{
            setShowLoader(false);
            setHasShown(true);
        }, maxWaitTime);
        return ()=>clearTimeout(timer);
    }, []);
    // If API data arrives quickly, use it; otherwise use fallback
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data && !hasShown) {
            const splashTime = data.length > 0 ? Math.min(Math.max(data[0].splashtime || 300, 200), 500) : 300;
            const timer = setTimeout(()=>{
                setShowLoader(false);
                setHasShown(true);
            }, splashTime);
            return ()=>clearTimeout(timer);
        }
    }, [
        data,
        hasShown
    ]);
    // Hide loader immediately on user interaction for better UX
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleInteraction = ()=>{
            setShowLoader(false);
            setHasShown(true);
        };
        window.addEventListener("click", handleInteraction, {
            once: true
        });
        window.addEventListener("keydown", handleInteraction, {
            once: true
        });
        window.addEventListener("scroll", handleInteraction, {
            once: true
        });
        window.addEventListener("touchstart", handleInteraction, {
            once: true
        });
        return ()=>{
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
        };
    }, []);
    const closeLoader = ()=>{
        setShowLoader(false);
    };
    const loaderStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
    };
    const contentStyle = {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
        position: "relative"
    };
    const imageStyle = {
        maxWidth: "100%",
        width: "100%",
        maxHeight: "500px",
        height: "auto",
        margin: "20px 0",
        resizeMode: "contain"
    };
    const closeStyle = {
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
        fontSize: "20px",
        color: "#000"
    };
    // Use fallback image if data not loaded yet
    const splashImage = data && data.length > 0 && data[0].site_splash ? imgbaseurl + data[0].site_splash : "/assets/images/banners/banner-1.png";
    return showLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: loaderStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: contentStyle,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: splashImage,
                    alt: "Loading",
                    width: 500,
                    height: 500,
                    style: imageStyle,
                    priority: true,
                    onError: (e)=>{
                        // Fallback if image fails to load
                        e.target.src = "/assets/images/banners/banner-1.png";
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: closeStyle,
                    onClick: closeLoader,
                    role: "button",
                    tabIndex: 0,
                    "aria-label": "Close loader",
                    children: "✖"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_MuiTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/hooks/useSettings.js
var useSettings = __webpack_require__(571);
;// CONCATENATED MODULE: external "merge"
const external_merge_namespaceObject = require("merge");
;// CONCATENATED MODULE: external "next/config"
const config_namespaceObject = require("next/config");
var config_default = /*#__PURE__*/__webpack_require__.n(config_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/theme/themeColors.js
// =================================================================
// =================================================================
const grey = {
    900: "#2B3445",
    // 900: "#f50057",
    // Main Text
    800: "#373F50",
    // Paragraph
    700: "#4B566B",
    600: "#7D879C",
    // Low Priority form Title/Text
    500: "#AEB4BE",
    400: "#DAE1E7",
    // Border
    300: "#E3E9EF",
    200: "#F3F5F9",
    // Line Stroke
    100: "#F6F9FC"
};
const primary = {
    100: "#FCE9EC",
    200: "#F8C7CF",
    300: "#F07D90",
    400: "#EC6178",
    500: "#D23F57",
    600: "#E63E58",
    700: "#E3364E",
    800: "#DF2E44",
    900: "#D91F33"
};
const secondary = {
    100: "#e8e8ee",
    200: "#b9bacb",
    300: "#8a8ca8",
    400: "#5b5d85",
    500: "#141850",
    600: "#0F3460",
    700: "#101340",
    800: "#0e1138",
    900: "#0c0e30",
    // main: "#0F3460",
    main: "#cc0000",
    // dark: "#0c0e30",
    dark: "#303444"
};
const error = {
    100: "#FFEAEA",
    200: "#FFCBCB",
    300: "#FFA9A9",
    400: "#FF6D6D",
    500: "#FF5353",
    600: "#FF4C4C",
    700: "#FF4242",
    800: "#FF3939",
    900: "#FF2929",
    main: "#E94560"
};
const success = {
    100: "#E7F9ED",
    200: "#C2F1D1",
    300: "#99E8B3",
    400: "#52D77E",
    500: "#33D067",
    600: "#2ECB5F",
    700: "#27C454",
    800: "#20BE4A",
    900: "#0b7724",
    main: "rgb(51, 208, 103)"
};
const blue = {
    50: "#f3f5f9",
    100: "#DBF0FE",
    200: "#B8DEFE",
    300: "#94C9FE",
    400: "#7AB6FD",
    500: "#4E97FD",
    600: "#3975D9",
    700: "#2756B6",
    800: "#183C92",
    900: "#0E2979",
    main: "#4E97FD",
    contrastText: "#FFFFFF"
};
const marron = {
    50: "#f3f5f9",
    100: "#F6F2ED",
    200: "#F8DBD1",
    300: "#EBBCB3",
    400: "#D89C98",
    600: "#A3545C",
    700: "#883948",
    800: "#6E2438",
    900: "#5B162F",
    main: "#BE7374"
};
const paste = {
    50: "#F5F5F5",
    100: "#DDFBF1",
    200: "#BDF7E8",
    300: "#97E8DA",
    400: "#76D2CA",
    600: "#36929A",
    700: "#257181",
    800: "#175368",
    900: "#0E3D56",
    main: "#4BB4B4",
    contrastText: "#FFFFFF"
};
const warning = {
    100: "#FFF8E5",
    main: "#FFCD4E",
    contrastText: "#FFFFFF"
};
const dark = {
    main: "#222"
};
const white = {
    main: "#fff"
};
const themeColors = {
    dark,
    grey,
    paste,
    error,
    marron,
    warning,
    success,
    secondary,
    info: blue,
    divider: grey[200],
    background: {
        default: grey[100]
    },
    text: {
        primary: grey[900],
        secondary: grey[800],
        disabled: grey[400]
    }
};

;// CONCATENATED MODULE: ./src/theme/typography.js
const fontSize = 14;
const fontFamily = [
    "Open Sans",
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif", 
].join(",");
const typography = {
    fontSize,
    fontFamily,
    htmlFontSize: 16,
    body1: {
        fontSize
    },
    body2: {
        fontSize
    }
};

;// CONCATENATED MODULE: ./src/theme/components.js

 // ========================================================
// =========================================================
const components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                scrollBehavior: "smooth"
            },
            p: {
                lineHeight: 1.75
            },
            button: {
                fontFamily: fontFamily,
                fontSize: fontSize
            },
            ".MuiRating-sizeSmall": {
                fontSize: "20px"
            },
            a: {
                textDecoration: "none",
                color: "inherit"
            },
            ul: {
                margin: 0,
                padding: 0,
                listStyle: "none"
            },
            "#nprogress .bar": {
                top: 0,
                left: 0,
                position: "fixed",
                overflow: "hidden",
                height: "3px !important",
                backgroundColor: blue.main,
                zIndex: "99999999 !important",
                borderRadius: "0px 300px 300px 0px !important"
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                zIndex: 0
            }
        }
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: 8
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: "8px"
            }
        }
    },
    MuiPagination: {
        defaultProps: {
            variant: "outlined",
            color: "primary"
        }
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    },
    MuiSvgIcon: {
        styleOverrides: {
            root: {
                "& .secondary": {
                    opacity: 0.4
                }
            }
        }
    },
    MuiTextField: {
        defaultProps: {
            size: "small",
            variant: "outlined"
        },
        styleOverrides: {
            root: ({ ownerState  })=>({
                    ...ownerState.color === "info" && {
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            fontWeight: 600
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: grey[300]
                        }
                    }
                })
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ ownerState  })=>({
                    minWidth: 0,
                    minHeight: 0,
                    fontWeight: 600,
                    textTransform: "capitalize",
                    ...ownerState.color === "info" && {
                        borderRadius: "8px"
                    },
                    ...ownerState.color === "dark" && {
                        color: "#fff",
                        borderRadius: 0,
                        transition: "all 0.3s",
                        ":hover": {
                            backgroundColor: "#343434"
                        }
                    },
                    ...ownerState.color === "dark" && ownerState.variant === "outlined" && {
                        color: dark.main,
                        borderRadius: "3px",
                        transition: "all 0.3s",
                        ":hover": {
                            backgroundColor: dark.main,
                            color: "white"
                        }
                    }
                }),
            sizeLarge: {
                padding: ".6rem 2.5rem"
            }
        },
        defaultProps: {
            color: "inherit"
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/themeOptions.js



const THEMES = {
    GIFT: "GIFT",
    HEALTH: "HEALTH",
    DEFAULT: "DEFAULT",
    GROCERY: "GROCERY",
    FURNITURE: "FURNITURE"
};
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }
};
/*
WE CREATED MULTIPLE THEME OPTIONS FOR DIFFERENT SHOP VARIATION.

YOU CAN JUST KEEP [THEMES.DEFAULT] AND REMOVE OTHER THEME OPTIONS.
*/ const themesOptions = {
    [THEMES.DEFAULT]: {
        typography: typography,
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...primary,
                light: primary[100]
            },
            ...themeColors
        }
    },
    [THEMES.GROCERY]: {
        typography: typography,
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...primary,
                light: primary[100]
            },
            ...themeColors
        }
    },
    [THEMES.FURNITURE]: {
        typography: typography,
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...paste,
                light: paste[100]
            },
            ...themeColors
        }
    },
    [THEMES.HEALTH]: {
        typography: typography,
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...blue,
                light: blue[100]
            },
            ...themeColors
        }
    },
    [THEMES.GIFT]: {
        typography: typography,
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...marron,
                light: marron[100]
            },
            ...themeColors
        }
    }
};
const themeOptions = (publicRuntimeConfig, pathname)=>{
    let themeOptions;
    /*
    YOU CAN ALSO REMOVE updateTheme function
    AND FOLLOWING ENTIRE switch case BLOCK.
  */ const updateTheme = (themeName)=>{
        publicRuntimeConfig.theme = themeName;
        themeOptions = themesOptions[publicRuntimeConfig.theme];
    };
    switch(pathname){
        // case "/":
        //    ('case 1 /');
        //   updateTheme(THEMES.DEFAULT);
        //   break;
        case "/":
        case "/grocery1":
        case "/grocery2":
        case "/grocery3":
        case "/gadget-shop":
        case "/fashion-shop":
        case "/market-1":
            updateTheme(THEMES.DEFAULT);
            break;
        case "/furniture-shop":
            updateTheme(THEMES.FURNITURE);
            break;
        case "/healthbeauty-shop":
            updateTheme(THEMES.HEALTH);
            break;
        case "/gift-shop":
            updateTheme(THEMES.GIFT);
            break;
        default:
            themeOptions = themesOptions[publicRuntimeConfig.theme];
            break;
    }
    /*
        IF YOU REMOVE THE switch case, YOU NEED TO ASSIGN VALUE TO themeOptions
        E.G. themeOptions = themesOptions[THEMES.DEFAULT];
    */ // themeOptions = themesOptions[THEMES.DEFAULT];
    return themeOptions;
};
/* harmony default export */ const theme_themeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/theme/MuiTheme.jsx







 // =======================================================
// =======================================================
const MuiTheme = ({ children  })=>{
    const { settings  } = (0,useSettings/* default */.Z)();
    const { pathname  } = (0,router_.useRouter)();
    const { publicRuntimeConfig  } = config_default()(); // Value is coming from next.config.js
    const themeOptions = theme_themeOptions(publicRuntimeConfig, pathname);
    let theme = (0,styles_.createTheme)((0,external_merge_namespaceObject.merge)({}, {
        ...themeOptions,
        direction: settings.direction
    }));
    theme = (0,styles_.responsiveFontSizes)(theme); // theme shadows
    theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
    theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
    theme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
    theme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            children
        ]
    });
};
/* harmony default export */ const theme_MuiTheme = (MuiTheme);


/***/ }),

/***/ 7107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function saveScrollPos(url) {
    const scrollPos = {
        x: window.scrollX,
        y: window.scrollY
    };
    sessionStorage.setItem(url, JSON.stringify(scrollPos));
}
function restoreScrollPos(url) {
    const scrollPos = JSON.parse(sessionStorage.getItem(url));
    if (scrollPos) {
        window.scrollTo(scrollPos.x, scrollPos.y);
    }
}
function useScrollRestoration(router) {
    useEffect(()=>{
        if ("scrollRestoration" in window.history) {
            let shouldScrollRestore = false;
            window.history.scrollRestoration = "manual";
            restoreScrollPos(router.asPath);
            const onBeforeUnload = (event)=>{
                saveScrollPos(router.asPath);
                delete event["returnValue"];
            };
            const onRouteChangeStart = ()=>{
                saveScrollPos(router.asPath);
            };
            const onRouteChangeComplete = (url)=>{
                if (shouldScrollRestore) {
                    shouldScrollRestore = false;
                    restoreScrollPos(url);
                }
            };
            window.addEventListener("beforeunload", onBeforeUnload);
            Router.events.on("routeChangeStart", onRouteChangeStart);
            Router.events.on("routeChangeComplete", onRouteChangeComplete);
            Router.beforePopState(()=>{
                shouldScrollRestore = true;
                return true;
            });
            return ()=>{
                window.removeEventListener("beforeunload", onBeforeUnload);
                Router.events.off("routeChangeStart", onRouteChangeStart);
                Router.events.off("routeChangeComplete", onRouteChangeComplete);
                Router.beforePopState(()=>true);
            };
        }
    }, [
        router
    ]);
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6963:
/***/ ((module) => {

module.exports = require("axios-mock-adapter");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3195:
/***/ ((module) => {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ 8440:
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ 4615:
/***/ ((module) => {

module.exports = import("stylis");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,6964,5675,5152,8745,8298], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();