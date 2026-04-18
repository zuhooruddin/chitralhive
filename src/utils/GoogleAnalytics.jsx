import { useEffect } from "react";
import Router from "next/router";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-VVDHZDQQZC";

/**
 * Route-change pageviews only. gtag.js + inline bootstrap are loaded from
 * `pages/_app.jsx` via next/script (strategy="lazyOnload") so analytics never
 * blocks initial load.
 */
const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleRouteChange = (url) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
