import React from "react";
import Script from "next/script";

interface IGoogleAnalyticsProps {
  nonce: string;
}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({ nonce }) => {
  return (
    <>
      <Script
        async
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      ></Script>
      <Script nonce={nonce} id="google-analytics">
        {` window.dataLayer = window.dataLayer || []; function
          gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}')`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
