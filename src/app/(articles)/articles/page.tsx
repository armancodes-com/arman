import { allArticles } from "contentlayer/generated";

import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";

import Newsletter from "@/components/ui/Newsletter";

const Page = () => {
  return (
    <main className="min-h-svh">
      <Section type="common" className="space-y-8">
        <Header title="my articles" />
        <ArticlesList articles={allArticles} />
      </Section>

      <Newsletter />
    </main>
  );
};

export default Page;
