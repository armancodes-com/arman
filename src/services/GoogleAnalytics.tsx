import React from "react";
import Script from "next/script";

interface IGoogleAnalyticsProps {
  nonce: string;
}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({ nonce }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />
      <Script async strategy="lazyOnload" nonce={nonce}>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
