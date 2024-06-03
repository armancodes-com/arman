import HomeHeroSection from "./_components/HomeHeroSection";
import ArticlesList from "../(articles)/_components/ArticlesList";
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="min-h-svh pt-4 sm:pt-14.5">
      <HomeHeroSection />

      <Section>
        <Header title="latest articles" linkText="see all" href="/articles" />
        <ArticlesList />
      </Section>
    </main>
  );
}