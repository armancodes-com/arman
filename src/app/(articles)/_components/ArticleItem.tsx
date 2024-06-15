import formatPublishedDateHandler from "@/utils/date";
import textEllipsisFormatter from "@/utils/text-ellipsis";
import { Article as ArticleType } from "contentlayer/generated";

import { Alexandria } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

interface IArticleItemProps {
  data: ArticleType;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ data }) => {
  const { title, summary, publishedAt, slug, isDraft } = data;

  return (
    <article
      className={`flex flex-col gap-y-4 border-b border-border-articles pb-10 md:gap-y-6 md:pb-12 ${isDraft ? "line-through opacity-50" : "opacity-100"}`}
    >
      <Link
        href={`/articles/${slug}`}
        className="group underline-offset-4 transition-all duration-75 ease-linear hover:text-primary hover:underline"
      >
        <h3 className="text-caption1 font-bold tracking-wide text-text-primary group-hover:text-primary md:text-title2 md:font-normal">
          {title}
        </h3>
      </Link>
      <p className="text-body2 font-light leading-6 text-text-primary">
        {textEllipsisFormatter(summary, 130)}
      </p>

      <Link
        href={`/articles/${slug}`}
        className={`flex items-center gap-2 ${alexandria.className} text-caption2 capitalize leading-4 text-primary underline-offset-4 hover:underline md:text-body2`}
      >
        read more {">"}
        {">"}
      </Link>

      <div className="flex items-center gap-10">
        <p className="space-x-2 text-text-primary">
          <span className="text-xs font-bold tracking-wide md:text-caption2">
            Date
          </span>
          <span className="text-xs font-light md:text-caption2">
            {formatPublishedDateHandler(publishedAt)}
          </span>
        </p>
        <p className="space-x-2 text-text-primary">
          <span className="text-xs font-bold tracking-wide md:text-caption2">
            Read
          </span>
          <span className="text-xs font-light md:text-caption2">1 Min</span>
        </p>
      </div>
    </article>
  );
};

export default ArticleItem;
