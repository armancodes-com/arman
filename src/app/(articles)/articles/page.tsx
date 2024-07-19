import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";
import Pagination from "@/components/Navigation/Pagination";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";

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
    images: ["https://armancodes.com/images/hero-img.jpg"],
    url: "http://armancodes.com/articles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - Articles",
    description:
      "Here you can find blogs that Arman writes about tech, and lifestyle articles",
    images: ["https://armancodes.com/images/hero-img.jpg"],
    site: "http://armancodes.com/articles",
  },
};

const Page = () => {
  return (
    <main>
      <Section type="common" className="space-y-8">
        <Header title="my articles" />
        <ArticlesList articles={allArticles} />
        {/* Pagination */}
        {allArticles.length > SHOW_PER_PAGE && <Pagination />}
      </Section>

      <DynamicNewsletter />
    </main>
  );
};

export default Page;
