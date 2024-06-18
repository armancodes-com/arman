import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";

import HomeHeroSection from "./_components/HomeHeroSection";
import ArticlesList from "../(articles)/_components/ArticlesList";
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Backend Engineer",
  description: "",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: "https://armancodes.com",
  },
};

export default async function Home() {
  return (
    <>
      <main className="pt-4 sm:pt-14.5">
        <HomeHeroSection />

        <Section type="primary" hasEllipse>
          <Header title="latest articles" linkText="see all" href="/articles" />
          <ArticlesList articles={allArticles} />
        </Section>
      </main>
    </>
  );
}
