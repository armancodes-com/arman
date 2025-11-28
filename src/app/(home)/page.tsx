import { headers } from "next/headers";

import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";

import HomeHeroSection from "./_components/HomeHeroSection";
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";
import HomePageArticlesList from "./_components/HomePageArticlesList";
import GoogleAnalytics from "@/services/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Backend Engineer",
  description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: "https://armancodes.com",
  },
  openGraph: {
    title: "Arman Ahmadi - Backend Engineer",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    url: "http://armancodes.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - Backend Engineer",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    site: "http://armancodes.com/",
  },
};

export default async function Home() {
  const nonce = headers().get("x-nonce");
  const featuredArticles = allArticles.filter((article) => article.isFeatured);

  return (
    <>
      <GoogleAnalytics nonce={nonce!} />

      <main className="pt-4 sm:pt-14.5">
        <HomeHeroSection />

        <Section type="primary" hasEllipse>
          <Header title="latest articles" linkText="see all" href="/articles" />
          <HomePageArticlesList articles={featuredArticles} />
        </Section>
      </main>
    </>
  );
}
