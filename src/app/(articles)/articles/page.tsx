import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";

import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";

import Newsletter from "@/components/ui/Newsletter";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Articles",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  description:
    "Here you can find blogs that Arman writes about tech, and lifestyle",
  keywords: ["php", "engineer", "tech", "personal weblog"],
  alternates: {
    canonical: "https://armancodes.com/articles",
  },
};

const Page = () => {
  return (
    <main>
      <Section type="common" className="space-y-8">
        <Header title="my articles" />
        <ArticlesList articles={allArticles} />
      </Section>

      <Newsletter />
    </main>
  );
};

export default Page;
