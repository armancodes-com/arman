import SectionHeader from "@/components/ui/SectionHeader";
import AboutMeHeroSection from "../_components/AboutMeHero";
import ConnectSection from "../_components/ConnectSection";
// import { Fira_Code } from "next/font/google";

// const firaCode = Fira_Code({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   preload: true,
// });

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <ConnectSection />

      <section className="mt-11 space-y-4 px-4 md:mt-20 md:space-y-10 md:p-0">
        <SectionHeader
          title="work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed"
        />
      </section>
    </main>
  );
};

export default Page;
