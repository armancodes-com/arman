import IconHeart from "@/assets/icons/HeartIcon";
import IconShare from "@/assets/icons/ShareIcon";
import BackLink from "@/components/ui/BackLink";

const Page = () => {
  return (
    <main className="min-h-svh px-4 pt-6 md:px-0 md:pt-11">
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
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8"
            />
            <IconHeart
              viewBox="0 0 32 32"
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8"
            />
          </div>
        </div>
      </header>

      {/* body section */}
      <section className="border border-red-500"></section>
    </main>
  );
};

export default Page;
