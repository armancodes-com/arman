export const revalidate = 604800;

import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";
import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";
import Pagination from "@/components/Navigation/Pagination";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";
import { IS_PRODUCTION, SITE_URL } from "@/constants";
import reverseArrayHandler from "@/utils/reverse-array";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Articles",
  authors: [{ name: "Arman Ahmadi", url: SITE_URL }],
  description:
    "Here you can find blogs that Arman writes about tech, and lifestyle articles",
  keywords: ["php", "engineer", "tech", "personal weblog"],
  alternates: {
    canonical: `${SITE_URL}/articles`,
  },
  openGraph: {
    title: "Arman Ahmadi - Articles",
    description:
      "Here you can find blogs that Arman writes about tech, and lifestyle articles",
    images: [`${SITE_URL}/images/new-hero.jpeg`],
    url: `${SITE_URL}/articles`,
    type: "website",
    siteName: "Arman Ahmadi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@armancodes",
    title: "Arman Ahmadi - Articles",
    description:
      "Here you can find blogs that Arman writes about tech, and lifestyle articles",
    images: [`${SITE_URL}/images/new-hero.jpeg`],
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
    </main>
  );
};

export default Page;
