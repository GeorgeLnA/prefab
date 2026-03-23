import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-VRFQSX71WS';
const GOOGLE_ADS_ID = 'AW-18036713914';

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      // Initialize Google Analytics
      if (!window.gtag) {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: location.pathname,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
    if (GOOGLE_ADS_ID && window.gtag) {
      window.gtag('config', GOOGLE_ADS_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

