import { Metadata } from "next";
import { notFound } from "next/navigation";

import BackLink from "@/components/ui/BackLink";
import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import SearchMainSection from "../_components/MainSection";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Search",
  description: "Search articles by Arman for topics you want to read.",
  authors: [{ name: "Arman Ahmadi", url: "https://armancodes.com" }],
  alternates: {
    canonical: "https://armancodes.com/search",
  },
  openGraph: {
    title: "Arman Ahmadi - Search",
    description: "Search articles by Arman for topics you want to read.",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    url: "https://armancodes.com/search",
    type: "website",
    siteName: "Arman Ahmadi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@armancodes",
    title: "Arman Ahmadi - Search",
    description: "Search articles by Arman for topics you want to read.",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
  },
};

const Page = () => {
  // handle redirect when article is draft or slut not found
  if (!isSearchSystemReleased) {
    notFound();
  }

  return (
    <main className="min-h-svh px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/">back</BackLink>

      <SearchMainSection />
    </main>
  );
};

export default Page;
