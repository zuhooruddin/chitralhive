import "../styles/globals.css";
import "../styles/fonts.css";
import RTL from "components/RTL";
import { AppProvider } from "contexts/AppContext";
import SettingsProvider from "contexts/SettingContext";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
// Lazy load heavy CSS to improve initial load - only load when needed
import MuiTheme from "theme/MuiTheme";
import {SessionProvider}  from "next-auth/react";
import { AuthenticationProvider } from '../context/AuthenticationContext'
import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(() => import("utils/GoogleAnalytics"), {
  ssr: false,
});
import { sanitizeSiteName, SITE_NAME } from "utils/seoConstants";
import Script from "next/script";
// Loader removed - no popup on page load

// Lazy load heavy components that aren't needed immediately
// Load CSS only when component is actually rendered
const ToastContainer = dynamic(
  () => import('react-toastify').then(async (mod) => {
    // Load CSS only when ToastContainer is needed
    if (typeof window !== 'undefined' && !document.querySelector('link[href*="ReactToastify"]')) {
      await import('react-toastify/dist/ReactToastify.css');
    }
    return mod.ToastContainer;
  }),
  { ssr: false }
);
const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp),
  {
    ssr: false,
    loadableGenerated: {
      webpackPrefetch: false,
      webpackPreload: false,
    },
  }
);

// Toastify CSS will be loaded only when ToastContainer is rendered (via dynamic import)

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});
const clientSideEmotionCache = createEmotionCache();

const App = ({
  router,
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  const [generalSettings, setGeneralSettings] = useState(
    Array.isArray(pageProps.GeneralSetting) ? pageProps.GeneralSetting : []
  );
  const [deferredUiReady, setDeferredUiReady] = useState(false);

  // Safely get layout function - ensure it always returns a valid React element
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    // Only enable mock API in development.
    // In production, this adds significant JS and hurts TBT.
    if (process.env.NODE_ENV !== "production") {
      import("../src/fake-db");
    }

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    

  }, []);
  // useScrollRestoration(router);

  useEffect(() => {
    if (Array.isArray(pageProps.GeneralSetting) && pageProps.GeneralSetting.length > 0) {
      setGeneralSettings(pageProps.GeneralSetting);
    }
  }, [pageProps.GeneralSetting]);

  useEffect(() => {
    if (generalSettings.length > 0 || typeof window === "undefined") return;

    let cancelled = false;
    const controller = new AbortController();
    const serverIp = process.env.NEXT_PUBLIC_BACKEND_API_BASE;

    const loadSettings = () => {
      window.setTimeout(async () => {
        try {
          const response = await fetch(`${serverIp}getGeneralSetting`, {
            signal: controller.signal,
          });
          const data = await response.json();

          if (!cancelled && Array.isArray(data)) {
            setGeneralSettings(data);
          }
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("General settings fetch failed:", error.message);
          }
        }
      }, 0);
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadSettings, { timeout: 3000 });
    } else {
      window.setTimeout(loadSettings, 1500);
    }

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [generalSettings]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let timeoutId;

    const markReady = () => {
      setDeferredUiReady(true);
      window.removeEventListener("scroll", markReady);
      window.removeEventListener("pointerdown", markReady);
      window.removeEventListener("touchstart", markReady);
      window.removeEventListener("keydown", markReady);
    };

    timeoutId = window.setTimeout(markReady, 4000);
    window.addEventListener("scroll", markReady, { once: true, passive: true });
    window.addEventListener("pointerdown", markReady, { once: true, passive: true });
    window.addEventListener("touchstart", markReady, { once: true, passive: true });
    window.addEventListener("keydown", markReady, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", markReady);
      window.removeEventListener("pointerdown", markReady);
      window.removeEventListener("touchstart", markReady);
      window.removeEventListener("keydown", markReady);
    };
  }, []);

  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-VVDHZDQQZC";
  const gaBootstrapScript = `(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ${JSON.stringify(gaMeasurementId)}, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    send_page_view: true,
    transport_type: 'beacon'
  });
})();`;

  const imgbaseurl = (process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL || "").replace(/\/?$/, "/");

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage && generalSettings.length > 0) {
      localStorage.setItem('currency', generalSettings[0].currency || 'PKR');
    }
  }, [generalSettings]);

  // Memoize FloatingWhatsApp props to prevent unnecessary re-renders
  // Ensure all values are valid to prevent React errors
  const whatsappProps = useMemo(() => {
    const phoneNumber = (generalSettings.length > 0 && generalSettings[0].whatsapp) ? generalSettings[0].whatsapp : '+923239119309';
    const accountName = (generalSettings.length > 0 && generalSettings[0].site_name)
      ? sanitizeSiteName(generalSettings[0].site_name)
      : SITE_NAME;
    const avatar = (generalSettings.length > 0 && generalSettings[0].site_logo && imgbaseurl)
      ? `${imgbaseurl}${String(generalSettings[0].site_logo).replace(/^\/+/, "")}`
      : '/assets/images/banners/banner-1.png';
    
    return {
      phoneNumber: phoneNumber || '+923239119309',
      accountName: accountName || SITE_NAME,
      avatar: avatar || '/assets/images/banners/banner-1.png',
      allowEsc: true,
      allowClickAway: true,
      notification: true,
      notificationSound: true,
      // Fix accessibility: don't use aria-hidden on the chat box when it's open
      // The library should handle this, but we ensure proper accessibility
      styles: {
        zIndex: 1000,
      },
      // Override the library's aria-hidden behavior
      notificationDelay: 60000, // 1 minute
    };
  }, [generalSettings, imgbaseurl]);

  // Ensure Component is valid before rendering
  if (!Component) {
    return null;
  }

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <AuthenticationProvider>
          <Fragment>
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="manifest" href="/site.webmanifest" />
              {/* Resource hints live in `_document.jsx` to avoid duplicates */}
              {/* Canonical link is handled by SEO component - removed duplicate */}
            </Head>

            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
                gaMeasurementId
              )}`}
              strategy="lazyOnload"
            />
            <Script
              id="google-analytics-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: gaBootstrapScript }}
            />

            {adsenseClient ? (
              <Script
                id="google-adsense"
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
                  adsenseClient
                )}`}
                strategy="lazyOnload"
                crossOrigin="anonymous"
                onLoad={() => {
                  if (typeof window === "undefined") return;
                  window.__adsenseScriptLoaded = true;
                  const el = document.querySelector('script[src*="pagead/js/adsbygoogle.js"]');
                  if (el) el.setAttribute("data-adsense-loaded", "true");
                }}
                onError={() => {
                  if (typeof window !== "undefined") {
                    window.__adsenseScriptLoaded = false;
                  }
                }}
              />
            ) : null}

            <Script
              id="microsoft-clarity"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wazku25yzp");`,
              }}
            />
            {/* Loader removed - no popup on page load */}

            {/* Lazy load FloatingWhatsApp - ssr: false ensures client-side only */}
            {typeof window !== "undefined" && deferredUiReady && (
              <FloatingWhatsApp {...whatsappProps} />
            )}

            <GoogleAnalytics />

            <SettingsProvider>
              <AppProvider>
                <MuiTheme>
                  <RTL>
                    {(() => {
                      try {
                        const layoutContent = getLayout(<Component {...pageProps} />);
                        // Ensure layoutContent is a valid React element
                        if (
                          !layoutContent ||
                          (typeof layoutContent !== "object" && typeof layoutContent !== "function")
                        ) {
                          return <Component {...pageProps} />;
                        }
                        return layoutContent;
                      } catch (error) {
                        console.error("Error in getLayout:", error);
                        return <Component {...pageProps} />;
                      }
                    })()}
                    {/* ToastContainer - ssr: false ensures client-side only */}
                    {typeof window !== "undefined" && deferredUiReady && (
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                      />
                    )}
                  </RTL>
                </MuiTheme>
              </AppProvider>
            </SettingsProvider>
          </Fragment>
        </AuthenticationProvider>
      </SessionProvider>
    </CacheProvider>
  );
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

export default App;
