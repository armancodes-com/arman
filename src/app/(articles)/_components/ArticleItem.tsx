import { alexandria } from "@/app/fonts";
import formatPublishedDateHandler from "@/utils/date";
import textEllipsisFormatter from "@/utils/text-ellipsis";
import { Article as ArticleType } from "contentlayer/generated";

import Link from "next/link";

interface IArticleItemProps {
  data: ArticleType;
  readTime: number;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ data, readTime }) => {
  const { title, summary, publishedAt, slug, isDraft, category } = data;

  return (
    <article
      className={`border-border-articles flex flex-col gap-y-4 border-b pb-10 md:gap-y-6 md:pb-12 ${isDraft ? "line-through opacity-50" : "opacity-100"}`}
    >
      <Link
        href={`/articles/${slug}`}
        className="group hover:text-primary underline-offset-4 transition-all duration-75 ease-linear hover:underline"
      >
        <h3 className="text-caption1 text-text-primary group-hover:text-primary md:text-title2 font-bold tracking-wide md:font-normal">
          {title}
        </h3>
      </Link>
      <p className="text-body2 text-text-primary leading-6 font-light">
        {textEllipsisFormatter(summary, 130)}
      </p>

      <Link
        href={`/articles/${slug}`}
        className={`flex items-center gap-2 ${alexandria.className} text-caption2 text-primary md:text-body2 leading-4 capitalize underline-offset-4 hover:underline`}
      >
        read more {">"}
        {">"}
      </Link>

      <div className="flex items-center gap-10">
        <p className="text-text-primary space-x-2">
          <span className="md:text-caption2 text-xs font-bold tracking-wide">
            Date
          </span>
          <span className="md:text-caption2 text-xs font-light">
            {formatPublishedDateHandler(publishedAt)}
          </span>
        </p>
        {readTime && readTime !== 0 && (
          <p className="text-text-primary space-x-2">
            <span className="md:text-caption2 text-xs font-bold tracking-wide">
              Read
            </span>
            <span className="md:text-caption2 text-xs font-light">
              {`${readTime} ${readTime > 1 ? "Mins" : "Min"}`}
            </span>
          </p>
        )}
        {category && (
          <p className="text-text-primary space-x-2">
            <span className="md:text-caption2 text-xs font-bold tracking-wide">
              Category
            </span>
            <span className="md:text-caption2 text-xs font-light">
              {category}
            </span>
          </p>
        )}
      </div>
    </article>
  );
};

export default ArticleItem;
