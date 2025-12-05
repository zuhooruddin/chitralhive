"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 5836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
// EXTERNAL MODULE: external "next-auth/providers/google"
var google_ = __webpack_require__(3598);
var google_default = /*#__PURE__*/__webpack_require__.n(google_);
;// CONCATENATED MODULE: external "next-auth/providers/facebook"
const facebook_namespaceObject = require("next-auth/providers/facebook");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js





async function refreshAccessTokenCredentials(token) {
    const url = "https://chitralhive.com/api/" + "api/auth/token/refresh/";
    const payload = {
        refresh: token.refreshToken
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const refreshedTokens = await response.json();
        if (!response.ok) {
            throw refreshedTokens;
        }
        return {
            ...token,
            error: undefined,
            accessToken: refreshedTokens.access,
            accessTokenExpires: Math.floor(new Date(refreshedTokens.access_token_expiration)),
            refreshToken: refreshedTokens.refresh ?? token.refreshToken
        };
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError"
        };
    }
}
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    secret: process.env.JWT_SECRET,
    providers: [
        credentials_default()({
            name: "Email and Password",
            credentials: {
                username: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async (credentials)=>{
                const payload = {
                    username: credentials.username,
                    password: credentials.password,
                    role: credentials.role
                };
                const url = "https://chitralhive.com/api/" + "api/auth/login/";
                const res = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        }),
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        facebook_default()({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }), 
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn ({ user , account , profile , email , credentials  }) {
            return true;
        },
        async jwt ({ token , user , account , profile  }) {
            if (account?.provider === "credentials") {
                if (user && account) {
                    token = {
                        ...token,
                        accessToken: user.access_token,
                        refreshToken: user.refresh_token,
                        accessTokenExpires: Math.floor(new Date(user.access_token_expiration)),
                        refreshTokenExpires: Math.floor(new Date(user.refresh_token_expiration)),
                        user: user.user,
                        provider: account.provider
                    };
                    return token;
                }
            }
            if (account && user && account.provider === "google") {
                const response = await external_axios_default()({
                    method: "post",
                    url: "https://chitralhive.com/api/" + "google/",
                    data: {
                        access_token: account.access_token,
                        id_token: account.id_token
                    }
                });
                const { access_token , refresh_token , user: user1 , access_token_expiration , refresh_token_expiration  } = response.data;
                token = {
                    ...token,
                    accessToken: access_token,
                    refreshToken: refresh_token,
                    accessTokenExpires: Math.floor(new Date(access_token_expiration)),
                    refreshTokenExpires: Math.floor(new Date(refresh_token_expiration)),
                    user: user1,
                    provider: account.provider
                };
                return token;
            }
            if (account && user && account.provider === "facebook") {
                ;
                ;
                const response1 = await external_axios_default()({
                    method: "post",
                    url: "https://chitralhive.com/api/" + "facebook/",
                    data: {
                        access_token: account.access_token
                    }
                });
                const { access_token: access_token1 , refresh_token: refresh_token1 , user: user2 , access_token_expiration: access_token_expiration1 , refresh_token_expiration: refresh_token_expiration1  } = response1.data;
                user2.name = profile.name;
                user2.picture = profile.picture.data.url;
                token = {
                    ...token,
                    accessToken: access_token1,
                    refreshToken: refresh_token1,
                    accessTokenExpires: Math.floor(new Date(access_token_expiration1)),
                    refreshTokenExpires: Math.floor(new Date(refresh_token_expiration1)),
                    user: user2,
                    provider: account.provider
                };
                return token;
            }
            if (token) {
                const currentTime = Date.now();
                if (currentTime < token.accessTokenExpires) {
                    return token;
                }
                return refreshAccessTokenCredentials(token);
            }
            return token;
        },
        //,trigger, newSession
        async session ({ session , token  }) {
            if (token) {
                // Set session properties from the token
                session.accessToken = token.accessToken;
                session.user = token.user;
                session.provider = token.provider;
                const url = "https://chitralhive.com/api/" + "getCusWishlists";
                if (session.accessToken) {
                    try {
                        const response = await fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + session.accessToken
                            },
                            body: JSON.stringify({
                                id: session.user.id
                            })
                        });
                        if (response.ok) {
                            const wishlistdata = await response.json();
                            session.wishlist = wishlistdata;
                        } else {}
                    } catch (error) {}
                }
                return session;
            }
            return {};
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5836));
module.exports = __webpack_exports__;

})();