import IconArrowDownCircle from "@/assets/icons/ArrowDownCircle";
import IconHeart from "@/assets/icons/HeartIcon";
import IconShare from "@/assets/icons/ShareIcon";
import BackLink from "@/components/ui/BackLink";

import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

const Page = () => {
  return (
    <main className="min-h-svh !px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/articles">back</BackLink>

      <header className="mb-11 mt-12 space-y-2 md:mb-12 md:mt-14 md:space-y-5">
        <h2 className="text-body2 text-primary md:text-title2">
          What does it take to become a web developer?
        </h2>

        <div className="flex items-center justify-between border-y border-border-articles py-2 md:py-4">
          <div className="flex items-center gap-6">
            <p className="space-x-2 text-text-primary">
              <span className="text-xs font-bold tracking-wide md:text-caption2">
                Date
              </span>
              <span className="text-xs font-light md:text-caption2">
                10, Oct 2023
              </span>
            </p>
            <p className="space-x-2 text-text-primary">
              <span className="text-xs font-bold tracking-wide md:text-caption2">
                Read
              </span>
              <span className="text-xs font-light md:text-caption2">1 Min</span>
            </p>
          </div>

          <div className="flex items-center gap-9">
            <IconShare
              viewBox="0 0 32 32"
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8 [&_path]:stroke-text-primary"
            />
            <IconHeart
              viewBox="0 0 32 32"
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8 [&_path]:stroke-text-primary"
            />
          </div>
        </div>
      </header>

      {/* body section */}
      <section className="flex h-svh border border-red-500 sm:gap-x-6 md:gap-x-14">
        <div className="w-full space-y-6 border border-blue-500">
          {/* Series Component */}
          <div className="bg-tertiary-bg-2 flex justify-between rounded-10 px-2 py-4 md:pl-6 md:pr-8">
            <div className="flex flex-col space-y-6">
              <span
                className={`${alexandria.className} text-caption2 font-medium capitalize text-[#9269BA] md:text-body2`}
              >
                series
              </span>
              <span
                className={`${alexandria.className} text-caption2 font-medium md:text-caption1`}
              >
                Build-Time Syntax Highlighting... |{" "}
                <span className="text-[#9269BA]">2 of 10</span>
              </span>
            </div>

            <div className="flex justify-center md:items-center">
              <IconArrowDownCircle
                viewBox="0 0 54 54"
                className="h-8 w-8 cursor-pointer md:h-12 md:w-12 [&_path]:stroke-[#9269BA]"
              />
            </div>
          </div>

          {/* CONTENT OF ARTICLE */}
          <div className="px-6 md:px-0">content ...</div>
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <aside className="relative hidden w-full max-w-[172px] border border-red-500 sm:block">
          <div className="sticky top-20 border">sidebar sticky</div>
        </aside>
      </section>
    </main>
  );
};

export default Page;
