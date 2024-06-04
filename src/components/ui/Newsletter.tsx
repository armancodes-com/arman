/* eslint-disable no-irregular-whitespace */
import { Alexandria, Ubuntu } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300"],
  preload: true,
});

const Newsletter = () => {
  return (
    <section className="px-4 md:p-0">
      <article className="bg-tertiary-bg rounded-10 mt-[72px] flex flex-col items-center justify-center gap-3 border border-[#7127BACC] px-6 pb-4 pt-6 text-center dark:border-none md:mt-25 md:gap-6">
        <h3
          className={`${alexandria.className} text-body2 font-semibold text-text-primary md:text-xl md:font-bold`}
        >
          Subscribe to my newsletter
        </h3>
        <p
          className={`${alexandria.className} text-caption2 font-light text-text-primary md:${ubuntu.className} leading-6 md:text-caption1`}
        >
          Monthly personal reading and updates on topics like tech, design,
          productivity, programming, and more!
        </p>

        <div className="flex w-full flex-col gap-4 px-4 sm:flex-row md:px-13">
          <div className="flex-[4]">
            <input
              type="email"
              className="w-full rounded-80 border border-border-articles bg-transparent px-4 py-2 text-caption2 leading-7 text-text-primary outline-primary"
              placeholder="your email"
            />
          </div>
          <div className="flex-1">
            <button className="flex w-full items-center justify-center rounded-80 border border-primary px-4 py-2 text-body2 font-medium text-primary">
              Sign up
            </button>
          </div>
        </div>

        <span className="mt-3 text-caption2 font-light text-text-primary md:mb-7 md:mt-0">
          Join the 110 other readers.
        </span>
      </article>
    </section>
  );
};

export default Newsletter;