export const dynamic = "force-static";

import { Metadata } from "next";

import AboutMeHeroSection from "../_components/AboutMeHero";
import JsonLd from "@/components/seo/JsonLd";
import ConnectSection from "../_components/ConnectSection";
import WorkExperienceSection from "../_components/WorkExperienceSection";

export const metadata: Metadata = {
  title: "Arman Ahmadi - About me",
  description:
    "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: "https://armancodes.com/about-me",
  },
  openGraph: {
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    url: "http://armancodes.com/about-me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Arman Ahmadi",
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
    images: ["https://armancodes.com/images/new-hero.jpeg"],
    site: "http://armancodes.com/about-me",
  },
};

const Page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Arman Ahmadi",
      image: "https://armancodes.com/images/hero-img.webp",
      description:
        "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
      url: "https://armancodes.com",
      jobTitle: "Backend Engineer",
    },
  };

  return (
    <main className="min-h-svh" data-testid="about-me-page">
      <AboutMeHeroSection />
      <ConnectSection />
      <WorkExperienceSection />

      {/* JSON+LD data */}
      <JsonLd data={jsonLd} />
    </main>
  );
};

export default Page;
