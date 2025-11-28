"use strict";
(() => {
var exports = {};
exports.id = 7352;
exports.ids = [7352];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 9764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const stripe = __webpack_require__(8174)("sk_test_51NqYEKDw734ydLm24O5xrLXrmGDhvniTpLoUBTULsRVjlgzwGWRmatdGe3an4dDoiIxzh9xqdH1KgIT90rpoMWeW00spc8M3R6");
async function handler(req, res) {
    try {
        const { body  } = req;
        const session = await stripe.checkout.sessions.create({
            submit_type: "pay",
            mode: "payment",
            payment_method_types: [
                "card"
            ],
            billing_address_collection: "auto",
            customer_email: body.email,
            invoice_creation: {
                enabled: true
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: body.deliveryFee * 100,
                            currency: "pkr"
                        },
                        display_name: "Standard Shipping"
                    }
                }, 
            ],
            line_items: body.cartList.map((item)=>{
                return {
                    price_data: {
                        currency: "pkr",
                        product_data: {
                            name: item.name,
                            images: [
                                item.image
                            ]
                        },
                        unit_amount: body.totalPrice * 100
                    },
                    quantity: item.qty,
                    adjustable_quantity: {
                        enabled: false
                    }
                };
            }),
            phone_number_collection: {
                enabled: true
            },
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}&orderno=${body.orderno}`,
            cancel_url: `${req.headers.origin}/cancelpayment?session_id={CHECKOUT_SESSION_ID}&orderno=${body.orderno}`,
            "consent_collection": {
                "terms_of_service": "required"
            }
        });
        res.json({
            url: session.url
        });
    } catch (err) {
        console.error(err);
        res.status(err.statusCode || 500).json(err.message);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9764));
module.exports = __webpack_exports__;

})();