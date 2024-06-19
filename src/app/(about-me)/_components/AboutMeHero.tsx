import {
  armanBikeImage,
  armanFirstImage,
  armanSecondImage,
  armanThirdImage,
} from "@/constants";
import { Fira_Code } from "next/font/google";
import Image from "next/image";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
  preload: true,
});

const AboutMeHeroSection = () => {
  return (
    <section className="mt-4 md:mt-16 md:space-y-10">
      <header className="hidden md:block">
        <h1
          className={`text-[2.5rem] font-bold leading-10 text-text-primary ${firaCode.className}`}
        >
          I'm Arman
        </h1>
        <span className="pt-3 text-body2 text-text-primary">
          From Backend Engineering to Personal Pursuits
        </span>
      </header>

      <div className="space-y-6 px-4 md:space-y-11 md:px-0">
        <div className="mx-auto mb-32 grid grid-cols-2 grid-rows-1 items-center justify-items-center sm:w-1/2 md:mb-16 md:w-full md:grid-cols-4">
          <figure className="relative left-14 top-6 block h-[240px] w-[270px] -rotate-6 self-center overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:h-[240px] md:w-[320px] md:hover:left-8">
            <Image
              src={armanThirdImage}
              alt="arman's image in Berlin"
              width={300}
              height={300}
              priority
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 17vw, 17vw"
              quality={70}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative -left-4 top-1/3 block h-[255px] w-[190px] rotate-[7.39deg] select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-14 md:top-8 md:h-[250px] md:w-[230px] md:hover:left-16">
            <Image
              src={armanFirstImage}
              alt="arman's image in Switzerland"
              width={300}
              height={300}
              priority
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 14vw, 15vw"
              quality={70}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative hidden -rotate-6 select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-8 md:top-6 md:block md:h-[235px] md:w-[280px] md:hover:left-4">
            <Image
              src={armanSecondImage}
              alt="arman's image in Switzerland"
              width={300}
              height={300}
              decoding="async"
              sizes="(max-width: 1024px) 15vw, (max-width: 1280px) 18vw, (max-width: 1560px) 18vw, 15vw"
              quality={70}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative hidden overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:-left-3 md:top-8 md:block md:h-[260px] md:w-[220px] md:rotate-[7.39deg] md:hover:-left-4">
            <Image
              src={armanBikeImage}
              alt="arman's bike image"
              width={300}
              height={300}
              decoding="async"
              sizes="(max-width: 1024px) 15vw, (max-width: 1280px) 18vw, (max-width: 1560px) 18vw, 15vw"
              quality={70}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </div>

        <p className="text-body2 leading-6 text-text-primary md:text-body1">
          Hi, I'm Arman! I'm based in the Netherlands and work as a backend
          engineer at Onefit/Urban Sports Club. Beyond coding, I really enjoy
          exploring a variety of topics and writing about things that pique my
          interest, whether they're related to technology or beyond. In my free
          time, you'll often find me playing tennis, cycling on my XC bike,
          hitting the gym, and diving into technical books.
        </p>
      </div>
    </section>
  );
};

export default AboutMeHeroSection;
