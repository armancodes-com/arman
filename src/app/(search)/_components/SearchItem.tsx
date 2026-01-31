import formatPublishedDateHandler from "@/utils/date";
import { Article as ArticleType } from "contentlayer/generated";
import Link from "next/link";

interface ISearchItemProps {
  item: ArticleType;
}

const SearchItem: React.FC<ISearchItemProps> = ({ item }) => {
  return (
    <article className="border-border-gray border-b pb-8">
      <header className="space-y-2">
        <Link
          href={`/articles/${item?.slug}`}
          className="hover:underline hover:underline-offset-4"
        >
          <h2 className="text-caption2 text-text-primary md:text-body2">
            {item?.title} | <span className="text-primary">article</span>
          </h2>
        </Link>

        <span className="text-text-primary md:text-caption2 text-xs font-light">
          {formatPublishedDateHandler(item?.publishedAt)}
        </span>
      </header>
    </article>
  );
};

export default SearchItem;
