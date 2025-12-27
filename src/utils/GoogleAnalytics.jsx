import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  // Defer Google Tag Manager loading to improve initial page load performance
  useEffect(() => {
    // Only load after page is interactive and browser is idle
    if (typeof window !== 'undefined') {
      const loadAfterIdle = () => {
        if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadGoogleAnalytics();
          }, { timeout: 3000 }); // Increased timeout to ensure page is fully loaded
    } else {
      // Fallback for browsers without requestIdleCallback
          setTimeout(loadGoogleAnalytics, 3000);
        }
      };
      
      // Wait for page to be fully interactive
      if (document.readyState === 'complete') {
        loadAfterIdle();
      } else {
        window.addEventListener('load', loadAfterIdle, { once: true });
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Check if already loaded to prevent duplicate scripts
    if (document.querySelector('script[src*="googletagmanager.com"]')) {
      return;
    }
    
    // Load gtag script with defer attribute
    const script1 = document.createElement('script');
    script1.async = true;
    script1.defer = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-VVDHZDQQZC';
    document.head.appendChild(script1);

    // Load gtag config
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VVDHZDQQZC', {
        'send_page_view': false
      });
    `;
    document.head.appendChild(script2);
  };

  return null; // No SSR rendering to avoid blocking
};

export default GoogleAnalytics;
