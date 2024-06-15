import { Fira_Code } from "next/font/google";
import Image from "next/image";
import { heroImage } from "@/constants";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
  preload: true,
});

const HomeHeroSection = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center gap-x-14 md:flex-row">
      <article className="order-2 flex flex-1 animate-in flex-col gap-y-4 px-4 py-10 md:order-1">
        <div className="hidden h-1 min-h-1 w-21 rounded-5 bg-[#7127BA] md:block"></div>

        <div
          className={`text-xl md:text-title1 ${firaCode.className} font-bold`}
        >
          <h1>Arman</h1>
          <h2 className={`text-caption1 text-primary md:text-title2`}>
            Back-end Engineer
          </h2>
        </div>

        <p className="text-body2 text-text-primary md:text-body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas purus viverra accumsan sample text
        </p>
      </article>

      <figure className="block rotate-6 overflow-hidden rounded-20 shadow-heroImage2 transition-all duration-100 ease-linear hover:-rotate-2 sm:h-[370px] sm:w-[330px] md:order-2 ">
        <Image
          src={heroImage}
          alt="hero image"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-cover object-center"
          quality={100}
          sizes="(min-width: 1024px) 32rem, 20rem"
        />
      </figure>
    </section>
  );
};

export default HomeHeroSection;
