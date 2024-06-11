import { armanFirstImage, armanSecondImage, heroImage } from "@/constants";
import { Fira_Code } from "next/font/google";
import Image from "next/image";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
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
        <div className="mx-auto grid grid-cols-2 grid-rows-2 items-center justify-items-center sm:w-1/2 md:w-full md:grid-cols-4 md:grid-rows-1">
          <figure className="relative left-10 top-6 h-[165px] w-[150px] -rotate-[13.84deg] self-center overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:top-0 md:h-[275px] md:w-[250px] md:hover:left-8">
            <Image
              src={heroImage}
              alt="hero image"
              placeholder="blur"
              fill
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative -left-12 top-6 h-[165px] w-[150px] rotate-[7.39deg] overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-0 md:top-0 md:h-[275px] md:w-[250px] md:hover:left-4">
            <Image
              src={armanFirstImage}
              alt="hero image"
              placeholder="blur"
              fill
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative -top-4 left-10 h-[165px] w-[150px] rotate-[7.39deg] overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:-left-2 md:top-0 md:h-[275px] md:w-[250px] md:-rotate-[13.84deg] md:hover:-left-4">
            <Image
              src={armanSecondImage}
              alt="hero image"
              placeholder="blur"
              fill
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <figure className="relative -left-12 -top-4 h-[165px] w-[150px] -rotate-[13.84deg] overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:-left-8 md:top-0 md:h-[275px] md:w-[250px] md:rotate-[7.39deg] md:hover:-left-4">
            <Image
              src={heroImage}
              alt="hero image"
              placeholder="blur"
              fill
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
