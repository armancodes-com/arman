export const revalidate = 60 * 60 * 24 * 7;

import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";
import Pagination from "@/components/Navigation/Pagination";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";
import { IS_PRODUCTION } from "@/constants";
import reverseArrayHandler from "@/utils/reverse-array";

const DynamicNewsletter = dynamic(() => import("@/components/ui/Newsletter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Arman Ahmadi - Articles",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  description:
    "Here you can find blogs that Arman writes about tech, and lifestyle articles",
  keywords: ["php", "engineer", "tech", "personal weblog"],
  alternates: {
    canonical: "https://armancodes.com/articles",
  },
  openGraph: {
    title: "Arman Ahmadi - Articles",
    description:
      "Here you can find blogs that Arman writes about tech, and lifestyle articles",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    url: "http://armancodes.com/articles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - Articles",
    description:
      "Here you can find blogs that Arman writes about tech, and lifestyle articles",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    site: "http://armancodes.com/articles",
  },
};

const Page = () => {
  const publishedArticles = allArticles?.filter((article) => !article?.isDraft);
  const allArticlesReversed = reverseArrayHandler(allArticles);
  const publishedArticlesReversed = reverseArrayHandler(publishedArticles);

  const displayedArticles = IS_PRODUCTION
    ? publishedArticlesReversed
    : allArticlesReversed;

  return (
    <main>
      <Section type="common" className="space-y-8">
        <Header title="my articles" />
        <ArticlesList articles={displayedArticles} />
        {/* Pagination */}
        {displayedArticles.length > SHOW_PER_PAGE && (
          <Pagination totalArticles={displayedArticles.length} />
        )}
      </Section>

      <DynamicNewsletter />
    </main>
  );
};

export default Page;
