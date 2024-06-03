import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation/Navigation";
import { Ubuntu } from "next/font/google";

export const metadata: Metadata = {
  title: "Arman Ahmadi",
  description: "A Backend-engineer working with PHP.",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className={`${ubuntu.className} bg-bgColor`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />

          <div className={"mx-auto max-w-[800px]"}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
