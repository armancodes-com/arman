import SearchItem from "./SearchItem";
import type { Article as ArticleType } from "contentlayer/generated";

interface ISearchILtemListProps {
  results: ArticleType[] | string;
}

const SearchItemList: React.FC<ISearchILtemListProps> = ({ results }) => {
  if (typeof results === "string") {
    return (
      <span className="text-caption1 text-text-primary md:text-body2 inline-block w-full text-center">
        Please start searching for a query ...
      </span>
    );
  }

  return (
    <div className="space-y-8">
      {results?.length > 0 &&
        results?.map((result) => (
          <SearchItem key={result.slug} item={result} />
        ))}
    </div>
  );
};

export default SearchItemList;
