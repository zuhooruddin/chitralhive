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
import "../src/fake-db";
import {SessionProvider}  from "next-auth/react";
import { AuthenticationProvider } from '../context/AuthenticationContext'
import useScrollRestoration from "../src/utils/useScrollRestoration";
import useSWR from 'swr'
import axios from 'axios';
import dynamic from 'next/dynamic';
import Loader from '../src/loader';

// Lazy load heavy components that aren't needed immediately
const ToastContainer = dynamic(
  () => import('react-toastify').then(mod => mod.ToastContainer),
  { ssr: false }
);
const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp),
  { ssr: false }
);

// Lazy load CSS for toastify - only load when needed
if (typeof window !== 'undefined') {
  import('react-toastify/dist/ReactToastify.css');
}

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});

const App = ({ router,Component, pageProps: { session, ...pageProps } }) => {
  const AnyComponent = Component;
  const idrisLogo = process.env.NEXT_PUBLIC_IDRIS_LOGO_API_URL

  const getLayout = AnyComponent.getLayout ?? ((page) => page);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
    // Lazy load heavy CSS only when needed (not on initial load)
    // These will be loaded on-demand when components that need them are rendered
    const loadHeavyCSS = async () => {
      // Only load if not already loaded
      if (!document.querySelector('link[href*="quill"]')) {
        const quillCSS = document.createElement('link');
        quillCSS.rel = 'stylesheet';
        quillCSS.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
        quillCSS.media = 'print';
        quillCSS.onload = () => { quillCSS.media = 'all'; };
        document.head.appendChild(quillCSS);
      }
    };
    
    // Load after initial render to not block
    setTimeout(loadHeavyCSS, 2000);
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
  const whatsappProps = useMemo(() => ({
    phoneNumber: data && data.length > 0 ? data[0].whatsapp : '+923239119309',
    accountName: data && data.length > 0 ? data[0].site_name : 'Ecommerce',
    avatar: data && data.length > 0 ? imgbaseurl + data[0].site_logo : '/assets/images/banners/banner-1.png',
    allowEsc: true,
    allowClickAway: true,
    notification: true,
    notificationSound: true,
  }), [data, imgbaseurl]);

  return (
    <SessionProvider session={session}>
            <AuthenticationProvider>

    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Chitral Hive | Online Chitrali </title>
        <meta
          name="description"
          content="Navigate through our wide collection of authentic Chitrali products at Chitral Hive. Shop traditional crafts, local specialties, handmade items, and unique products from Chitral. Buy Chitrali products online and get them delivered to your doorstep. Order Now!"
        />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>  */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Resource hints for faster loading - limit to most important origins only */}
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_BACKEND_API_BASE} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL} />
      </Head>
      <Loader />

      {/* Lazy load FloatingWhatsApp - only render after initial load */}
      {typeof window !== 'undefined' && (
        <FloatingWhatsApp {...whatsappProps} />
      )}

      <SettingsProvider>
        <AppProvider>
          <MuiTheme>
            <RTL>{getLayout(<AnyComponent {...pageProps} />)}
            {/* Lazy load ToastContainer - only render when needed */}
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
