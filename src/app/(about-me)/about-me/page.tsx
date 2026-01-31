export const dynamic = "force-static";

import { Metadata } from "next";

import AboutMeHeroSection from "../_components/AboutMeHero";
import JsonLd from "@/components/seo/JsonLd";
import ConnectSection from "../_components/ConnectSection";
import WorkExperienceSection from "../_components/WorkExperienceSection";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Arman Ahmadi - About me",
  description:
    "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
  authors: [{ name: "Arman Ahmadi", url: SITE_URL }],
  keywords: ["php", "software engineering", "backend"],
  alternates: {
    canonical: `${SITE_URL}/about-me`,
  },
  openGraph: {
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
    images: [`${SITE_URL}/images/new-hero.jpeg`],
    url: `${SITE_URL}/about-me`,
    type: "website",
    siteName: "Arman Ahmadi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@armancodes",
    title: "Arman Ahmadi - About me",
    description:
      "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
    images: [`${SITE_URL}/images/new-hero.jpeg`],
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
      image: `${SITE_URL}/images/hero-img.webp`,
      description:
        "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Urban Sports Club Nederland (formerly OneFit).",
      url: SITE_URL,
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
