import IconArrowDownCircle from "@/assets/icons/ArrowDownCircle";
import IconHeart from "@/assets/icons/HeartIcon";
import IconShare from "@/assets/icons/ShareIcon";
import BackLink from "@/components/ui/BackLink";
import Newsletter from "@/components/ui/Newsletter";

import { Alexandria } from "next/font/google";
import TagsList from "./_components/TagsList";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div className="w-full space-y-6">
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
          <div
            className={`${alexandria.className} text-body2 font-light md:text-body1`}
          >
            <p className="text-inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
              diam maecenas sed. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>
          </div>
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <aside className="relative hidden w-full max-w-[172px] sm:block">
          <div className="sticky top-20 space-y-3">
            <header className="pb-2 pr-1">
              <h3 className="text-body2 leading-9 text-primary">
                On this blog
              </h3>
            </header>
            <ul className="pt-1">
              <li className="text-caption2 leading-9 text-text-primary">
                How It Works
              </li>
              <li className="text-text-link text-caption2 leading-9">
                Why Is This a Big Deal?
              </li>
              <li className="text-text-link text-caption2 leading-9">
                Install Pretty Code
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* TAGS SECTION */}
      <TagsList />

      {/* NEWSLETTER SECTION */}
      <Newsletter />
    </main>
  );
};

export default Page;
