import AboutMeHeroSection from "../_components/AboutMeHero";
import { Fira_Code } from "next/font/google";
import IconEmail from "@/assets/icons/EmailIcon";
import LinkButton from "@/components/ui/LinkButton";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />

      <section className="mt-11 space-y-4 px-4 md:mt-20 md:space-y-10 md:p-0">
        <header>
          <h2
            className={`${firaCode.className} text-body1 font-bold capitalize md:text-title3`}
          >
            connect
          </h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-x-20 md:gap-y-6">
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
          <LinkButton
            href="/"
            icon={
              <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
            }
            hasLinkIcon
          >
            email
          </LinkButton>
        </div>
      </section>
    </main>
  );
};

export default Page;
