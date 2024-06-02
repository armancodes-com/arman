import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import { ubuntu } from "./fonts";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Arman Ahmadi",
  description: "A Backend-engineer working with PHP.",
};

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
