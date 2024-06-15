import { armanFirstImage, armanSecondImage, heroImage } from "@/constants";
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
          Fueling the CPU with code.
        </span>
      </header>

      <div className="space-y-6 px-4 md:space-y-11 md:px-0">
        <div className="mx-auto mb-32 grid grid-cols-2 grid-rows-1 items-center justify-items-center sm:w-1/2 md:mb-16 md:w-full md:grid-cols-4">
          <figure className="relative left-14 top-6 block h-[240px] w-[270px] -rotate-6 self-center overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:h-[240px] md:w-[320px] md:hover:left-8">
            <Image
              src={heroImage}
              alt="hero image"
              width={1000}
              height={1000}
              priority
              decoding="async"
              sizes="(min-width: 1024px) 32rem, 20rem"
              quality={100}

              className="h-full w-full object-cover object-top"
            />
          </figure>
          <figure className="relative -left-4 top-1/3 block h-[255px] w-[190px] rotate-[7.39deg] select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-14 md:top-8 md:h-[250px] md:w-[230px] md:hover:left-16">
            <Image
              src={armanFirstImage}
              alt="hero image"
              width={1000}
              height={1000}
              priority
              decoding="async"
              sizes="(min-width: 1024px) 32rem, 20rem"
              quality={100}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative hidden -rotate-6 select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-8 md:top-6 md:block md:h-[235px] md:w-[280px] md:hover:left-4">
            <Image
              src={armanSecondImage}
              alt="hero image"
              width={1000}
              height={1000}
              priority
              decoding="async"
              sizes="(min-width: 1024px) 32rem, 20rem"
              quality={100}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative hidden overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:-left-3 md:top-8 md:block md:h-[260px] md:w-[220px] md:rotate-[7.39deg] md:hover:-left-4">
            <Image
              src={heroImage}
              alt="hero image"
              width={1000}
              height={1000}
              priority
              decoding="async"
              sizes="(min-width: 1024px) 32rem, 20rem"
              quality={100}
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </div>

        <p className="text-body2 leading-6 text-text-primary md:text-body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget.
        </p>
      </div>
    </section>
  );
};

export default AboutMeHeroSection;
