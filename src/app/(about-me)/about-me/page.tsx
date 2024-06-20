// export const dynamic = "force-static";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import AboutMeHeroSection from "../_components/AboutMeHero";

const DynamicConnectSection = dynamic(
  () => import("../_components/ConnectSection"),
  { ssr: false },
);

const DynamicWorkExperienceSection = dynamic(
  () => import("../_components/WorkExperienceSection"),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Arman Ahmadi - About me",
  description:
    "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: "https://armancodes.com/about-me",
  },
  openGraph: {
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
    images: ["https://armancodes.com/images/hero-img.jpeg"],
    url: "http://armancodes.com/about-me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
    images: ["https://armancodes.com/images/hero-img.jpeg"],
    site: "http://armancodes.com/about-me",
  },
};

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectSection />
      <DynamicWorkExperienceSection />
    </main>
  );
};

export default Page;
