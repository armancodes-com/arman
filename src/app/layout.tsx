import "./globals.css";
import "../../public/prism/one-dark.css";

import { headers } from "next/headers";
import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation/Navigation";
import ToolbarLinks from "@/components/Navigation/ToolbarLinks";
import Footer from "@/components/ui/Footer";
import GoogleAnalytics from "@/services/GoogleAnalytics";
import { ubuntu } from "./fonts";
import { toolbarLinks } from "@/constants/toolbarlinks.constants";

export const metadata: Metadata = {
  title: "Arman Ahmadi",
  description: "A Backend-engineer working with PHP.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = headers().get("x-nonce");

  return (
    <html lang="en" className="light">
      <GoogleAnalytics nonce={nonce!} />

      <body className={`${ubuntu.className} bg-bgColor`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
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
          <Navigation />

          <div className={"relative mx-auto max-w-[800px]"}>
            {children}

            <ToolbarLinks links={toolbarLinks} />
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
