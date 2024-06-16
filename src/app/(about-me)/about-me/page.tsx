import { Metadata } from "next";

import AboutMeHeroSection from "../_components/AboutMeHero";
import ConnectSection from "../_components/ConnectSection";
import WorkExperienceSection from "../_components/WorkExperienceSection";

export const metadata: Metadata = {
  title: "Arman Ahmadi - About me",
  description:
    "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  keywords: ["php", "software engineering", "backend"],
};

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <ConnectSection />
      <WorkExperienceSection />
    </main>
  );
};

export default Page;
