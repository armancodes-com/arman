"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

interface IGoogleAnalyticsProps {
  nonce: string;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({ nonce }) => {
  const pathname = usePathname();
  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

  useEffect(() => {
    if (typeof window.gtag !== "undefined" && measurementId) {
      window.gtag("config", measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, measurementId]);

  // Don't render if measurement ID is not configured
  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        nonce={nonce}
        async
      />
      <Script
        id="google-tag-manager"
        async
        strategy="afterInteractive"
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
