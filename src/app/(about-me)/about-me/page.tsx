import dynamic from "next/dynamic";
import { Metadata } from "next";

import AboutMeHeroSection from "../_components/AboutMeHero";
import JsonLd from "@/components/seo/JsonLd";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Arman Ahmadi",
      image: "https://armancodes.com/images/hero-img.webp",
      description:
        "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
      url: "https://armancodes.com",
      jobTitle: "Backend Engineer",
    },
  };

  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectSection />
      <DynamicWorkExperienceSection />

      {/* JSON+LD data */}
      <JsonLd data={jsonLd} />
    </main>
  );
};

export default Page;
