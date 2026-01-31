import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";

import HomeHeroSection from "./_components/HomeHeroSection";
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";
import HomePageArticlesList from "./_components/HomePageArticlesList";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Backend Engineer",
  description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
  authors: [{ name: "Arman Ahmadi", url: SITE_URL }],
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Arman Ahmadi - Backend Engineer",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    images: [`${SITE_URL}/images/new-hero.jpeg`],
    url: `${SITE_URL}/`,
    type: "website",
    siteName: "Arman Ahmadi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@armancodes",
    title: "Arman Ahmadi - Backend Engineer",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    images: [`${SITE_URL}/images/new-hero.jpeg`],
  },
};

export default async function Home() {
  const featuredArticles = allArticles.filter((article) => article.isFeatured);

  return (
    <main className="pt-4 sm:pt-14.5">
      <HomeHeroSection />

      <Section type="primary" hasEllipse>
        <Header title="latest articles" linkText="see all" href="/articles" />
        <HomePageArticlesList articles={featuredArticles} />
      </Section>
    </main>
  );
}
