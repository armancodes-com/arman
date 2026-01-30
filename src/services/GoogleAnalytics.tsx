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
      targetId: string,
      config?: { page_path: string },
    ) => void;
  }
}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({ nonce }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag(
        "config",
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID as string,
        {
          page_path: pathname,
        },
      );
    }
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        nonce={nonce}
        async
      />
      <Script
        id="google-tag-manager"
        async
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
