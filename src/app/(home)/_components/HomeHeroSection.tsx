import Image from "next/image";
import { heroImage } from "@/constants";
import { firaCode } from "@/app/fonts";

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
          Hey there! This is where I share my journey through software
          engineering, personal anecdotes, and articles covering a wide range of
          topics. Dive into tech trends, conquer coding challenges, and discover
          more about life beyond the screen.
        </p>
      </article>

      <figure className="relative block h-[330px] max-h-[420px] w-[270px] max-w-[384px] rotate-6 overflow-hidden rounded-20 shadow-heroImage2 transition-all duration-100 ease-linear hover:-rotate-2 sm:h-[370px] sm:w-[330px] md:order-2">
        <Image
          src={heroImage}
          alt="Arman in Berlin"
          fill
          priority
          decoding="async"
          quality={85}
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 500px) 50vw, (max-width: 750px) 33vw, (max-width: 995px) 25vw, (max-width: 1125px) 22vw, (max-width: 1280px) 21vw, 33vw"
        />
      </figure>
    </section>
  );
};

export default HomeHeroSection;
