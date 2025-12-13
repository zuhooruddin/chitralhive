import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  // Defer Google Tag Manager loading to improve initial page load performance
  useEffect(() => {
    // Only load after page is interactive
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadGoogleAnalytics();
      }, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadGoogleAnalytics, 2000);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Load gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-VVDHZDQQZC';
    document.head.appendChild(script1);

    // Load gtag config
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VVDHZDQQZC');
    `;
    document.head.appendChild(script2);
  };

  return null; // No SSR rendering to avoid blocking
};

export default GoogleAnalytics;
