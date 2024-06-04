import AboutMeHeroSection from "../_components/AboutMeHero";
import ConnectSection from "../_components/ConnectSection";
import WorkExperienceSection from "../_components/WorkExperienceSection";

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
