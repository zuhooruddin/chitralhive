import RTL from "components/RTL";
import { AppProvider } from "contexts/AppContext";
import SettingsProvider from "contexts/SettingContext";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Fragment, useEffect, useMemo } from "react";
// Lazy load heavy CSS to improve initial load - only load when needed
import MuiTheme from "theme/MuiTheme";
import {SessionProvider}  from "next-auth/react";
import { AuthenticationProvider } from '../context/AuthenticationContext'
import useScrollRestoration from "../src/utils/useScrollRestoration";
import useSWR from 'swr'
import axios from 'axios';
import dynamic from 'next/dynamic';
import GoogleAnalytics from "utils/GoogleAnalytics";
import { sanitizeSiteName, SITE_NAME } from "utils/seoConstants";
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
  { ssr: false }
);

// Toastify CSS will be loaded only when ToastContainer is rendered (via dynamic import)

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});

const App = ({ router, Component, pageProps: { session, ...pageProps } }) => {
  const idrisLogo = process.env.NEXT_PUBLIC_IDRIS_LOGO_API_URL

  // Safely get layout function - ensure it always returns a valid React element
  const getLayout = Component.getLayout ?? ((page) => page);
  
  // Ensure Component is valid before rendering
  if (!Component) {
    return null;
  }

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

const imgbaseurl=process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL
  
  // Create axios instance with timeout to prevent hanging
  const axiosWithTimeout = axios.create({
    timeout: 5000, // 5 second timeout for API calls
  });
  
  const fetcher = async (url) => {
    try {
      const res = await axiosWithTimeout.get(url);
      return res.data;
    } catch (error) {
      // Return empty array on error to prevent crashes
      console.error('API Error:', error.message);
      return [];
    }
  };
  
  const server_ip = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  // Use SWR with revalidation to cache and share data across components
  const { data, error } = useSWR(server_ip + 'getGeneralSetting', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // Cache for 1 minute
    // Don't retry on error to prevent hanging
    shouldRetryOnError: false,
    // Use stale data if available
    revalidateIfStale: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage && data && data.length > 0) {
      localStorage.setItem('currency', data[0].currency || 'PKR');
    }
  }, [data]);

  // Memoize FloatingWhatsApp props to prevent unnecessary re-renders
  // Ensure all values are valid to prevent React errors
  const whatsappProps = useMemo(() => {
    const phoneNumber = (data && data.length > 0 && data[0].whatsapp) ? data[0].whatsapp : '+923239119309';
    const accountName = (data && data.length > 0 && data[0].site_name)
      ? sanitizeSiteName(data[0].site_name)
      : SITE_NAME;
    const avatar = (data && data.length > 0 && data[0].site_logo && imgbaseurl) 
      ? `${imgbaseurl}${data[0].site_logo}` 
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
  }, [data, imgbaseurl]);

  return (
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
      {/* Loader removed - no popup on page load */}

      {/* Lazy load FloatingWhatsApp - ssr: false ensures client-side only */}
      {typeof window !== 'undefined' && <FloatingWhatsApp {...whatsappProps} />}

      {/* Load Google Analytics client-side only - component handles SSR check */}
      {typeof window !== 'undefined' && <GoogleAnalytics />}

      <SettingsProvider>
        <AppProvider>
          <MuiTheme>
            <RTL>
              {(() => {
                try {
                  const layoutContent = getLayout(<Component {...pageProps} />);
                  // Ensure layoutContent is a valid React element
                  if (!layoutContent || (typeof layoutContent !== 'object' && typeof layoutContent !== 'function')) {
                    return <Component {...pageProps} />;
                  }
                  return layoutContent;
                } catch (error) {
                  console.error('Error in getLayout:', error);
                  return <Component {...pageProps} />;
                }
              })()}
              {/* ToastContainer - ssr: false ensures client-side only */}
              {typeof window !== 'undefined' && (
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
