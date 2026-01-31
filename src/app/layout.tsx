import "./globals.css";

import type { Metadata, Viewport } from "next";

import NextTopLoader from "nextjs-toploader";

import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation/Navigation";
import ToolbarLinks from "@/components/Navigation/ToolbarLinks";
import Footer from "@/components/ui/Footer";
import { ubuntu } from "./fonts";
import { toolbarLinks } from "@/constants/toolbarlinks.constants";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/constants";
import ManifestLink from "@/components/ManifestLink";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7127ba",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arman Ahmadi - Backend Engineer",
    template: "%s | Arman Ahmadi",
  },
  description:
    "A Backend engineer working with PHP, sharing insights on software engineering, design patterns, and personal development.",
  keywords: [
    "PHP",
    "Backend Engineer",
    "Software Engineering",
    "Web Development",
    "Design Patterns",
  ],
  authors: [{ name: "Arman Ahmadi", url: SITE_URL }],
  creator: "Arman Ahmadi",
  // Use a static manifest file with credentials instead of Next.js auto link.
  manifest: null,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arman Ahmadi",
    title: "Arman Ahmadi - Backend Engineer",
    description:
      "A Backend engineer working with PHP, sharing insights on software engineering, design patterns, and personal development.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@armancodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person Schema for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arman Ahmadi",
    url: SITE_URL,
    jobTitle: "Backend Engineer",
    description:
      "Backend engineer specializing in PHP and software engineering",
    sameAs: [
      "https://github.com/armancodes-com",
      "https://twitter.com/armancodes",
    ],
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
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

          {/* Global Person Schema */}
          <JsonLd data={personSchema} />
          <ManifestLink />
        </ThemeProvider>
      </body>
    </html>
  );
}
