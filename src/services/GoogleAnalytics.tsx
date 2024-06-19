/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

interface IGoogleAnalyticsProps {
  nonce: string;
}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({ nonce }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      // @ts-ignore
      if (typeof window.gtag !== "undefined") {
        // @ts-ignore
        window?.gtag(
          "config",
          // process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID,
          "G-49WYNRYB8Y",
          {
            page_path: url,
          },
        );
      }
    };

    handleRouteChange(pathname);

    // Listen for changes in the pathname and handle route change
    return () => {
      handleRouteChange(pathname);
    };
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-49WYNRYB8Y`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-49WYNRYB8Y', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
