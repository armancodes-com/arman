import Image from "next/image";
import { heroImage } from "@/constants";
import { firaCode } from "@/app/fonts";
import {
  MAIN_PAGE_DESCRIPTION,
  MAIN_PAGE_SUB_TITLE,
  MAIN_PAGE_TITLE,
} from "@/constants/Content.constants";

const HomeHeroSection = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center gap-x-14 md:flex-row">
      <article className="animate-in order-2 flex flex-1 flex-col gap-y-4 px-4 py-10 md:order-1">
        <div className="rounded-5 hidden h-1 min-h-1 w-21 bg-[#7127BA] md:block"></div>

        <div
          className={`md:text-title1 text-xl ${firaCode.className} font-bold`}
        >
          <h1>{MAIN_PAGE_TITLE}</h1>
          <h2 className={`text-caption1 text-primary md:text-title2`}>
            {MAIN_PAGE_SUB_TITLE}
          </h2>
        </div>

        <p className="text-body2 text-text-primary md:text-body1">
          {MAIN_PAGE_DESCRIPTION}
        </p>
      </article>

      <figure className="rounded-20 shadow-heroImage2 relative block h-[330px] max-h-[420px] w-[270px] max-w-[384px] rotate-6 overflow-hidden transition-all duration-100 ease-linear hover:-rotate-2 sm:h-[370px] sm:w-[330px] md:order-2">
        <Image
          src={heroImage}
          alt="Arman in Berlin"
          priority
          decoding="sync"
          layout="responsive"
          quality={70}
          className="h-full w-full scale-125 object-cover object-center"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 33vw"
        />
      </figure>
    </section>
  );
};

export default HomeHeroSection;
