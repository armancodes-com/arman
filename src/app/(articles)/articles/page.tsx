import Header from "@/components/ui/Header";
import ArticlesList from "../_components/ArticlesList";
import Section from "@/components/ui/Section";

const Page = () => {
  return (
    <main className="min-h-svh">
      <Section type="common" className="space-y-8">
        <Header title="my articles" />
        <ArticlesList />
      </Section>
    </main>
  );
};

export default Page;
