import { Alexandria } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

const ArticleItem = () => {
  return (
    <article className="flex flex-col gap-y-4 border-b border-border-articles pb-10 md:gap-y-6 md:pb-12">
      <h3 className="text-caption1 font-bold tracking-wide text-text-primary md:text-title2 md:font-normal">
        What does it take to become a web developer?
      </h3>
      <p className="text-body2 font-light leading-6 text-text-primary">
        Web development, also known as website development, encompasses a
        variety of tasks and processes involved in creating websites for the
        internet…
      </p>

      <Link
        href={"/articles"}
        className={`flex items-center gap-2 ${alexandria.className} group text-caption2 capitalize leading-4 text-primary md:text-body2`}
      >
        read more {">"}
        {">"}
      </Link>

      <div className="flex items-center gap-10">
        <p className="space-x-2 text-text-primary">
          <span className="text-caption2 font-bold tracking-wide">Date</span>
          <span className="text-caption2 font-light">10, Oct 2023</span>
        </p>
        <p className="space-x-2 text-text-primary">
          <span className="text-caption2 font-bold tracking-wide">Read</span>
          <span className="text-caption2 font-light">1 Min</span>
        </p>
      </div>
    </article>
  );
};

export default ArticleItem;
