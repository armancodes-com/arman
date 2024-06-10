import "./globals.css";
import "../../public/prism/one-dark.css";

import { headers } from "next/headers";
import Script from "next/script";
import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";

import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation/Navigation";
import ToolbarLinks from "@/components/Navigation/ToolbarLinks";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Arman Ahmadi",
  description: "A Backend-engineer working with PHP.",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: true,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = headers().get("x-nonce");

  return (
    <html lang="en" className="light">
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="afterInteractive"
        nonce={nonce!}
      />
      <Analytics />
      <SpeedInsights />
      <body className={`${ubuntu.className} bg-bgColor`}>
        <NextTopLoader
          color="#7127ba"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #7127ba,0 0 5px #7127ba"
          zIndex={1600}
          showAtBottom={false}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />

          <div className={"relative mx-auto max-w-[800px]"}>
            {children}

            <ToolbarLinks />
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
