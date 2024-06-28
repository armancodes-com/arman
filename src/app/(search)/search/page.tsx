/* eslint-disable no-irregular-whitespace */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";

import Section from "@/components/ui/Section";
import SearchItemList from "../_components/SearchItemList";
import SearchInput from "../_components/SearchInput";
import BackLink from "@/components/ui/BackLink";
import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import searchArticlesHandler from "@/utils/search-articles";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Search",
  description: "Search articles by Arman for topics you want to read.",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  alternates: {
    canonical: "https://armancodes.com/search",
  },
  openGraph: {
    title: "Arman Ahmadi - Search",
    description: "Search articles by Arman for topics you want to read.",
    images: ["https://armancodes.com/images/hero-img.jpg"],
    url: "http://armancodes.com/search",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - Search",
    description: "Search articles by Arman for topics you want to read.",
    images: ["https://armancodes.com/images/hero-img.jpg"],
    site: "http://armancodes.com/search",
  },
};

const Page = () => {
  // handle redirect when article is draft or slut not found
  if (!isSearchSystemReleased) {
    notFound();
  }

  console.log(searchArticlesHandler(allArticles, ""));

  return (
    <main className="min-h-svh px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/">back</BackLink>

      <SearchInput />

      <Section type="common" className="!px-0">
        <header className="mb-10 mt-6 md:mb-12 md:mt-16">
          <span className="text-caption2 text-gray-2">
            Found 6 results for 'tec'
          </span>
        </header>

        <SearchItemList />
      </Section>
    </main>
  );
};

export default Page;
