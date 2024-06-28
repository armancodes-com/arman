/* eslint-disable no-irregular-whitespace */
import { alexandria, ubuntu } from "@/app/fonts";
import Input from "../Inputs/Input";
import { isNewsLetterFeatureReleased } from "@/constants/FeatureFlag.constants";

const Newsletter = () => {
  {
    isNewsLetterFeatureReleased && (
      <section className="px-4 md:p-0">
        <article className="mt-[72px] flex flex-col items-center justify-center gap-3 rounded-10 border border-[#7127BACC] bg-tertiary-bg px-6 pb-4 pt-6 text-center dark:border-none md:mt-25 md:gap-6">
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
              <Input type="email" inputMode="email" placeholder="your email" />
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
  }

  if (!isNewsLetterFeatureReleased) return null;
};

export default Newsletter;
