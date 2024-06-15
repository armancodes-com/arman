import { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";
import { IS_PRODUCTION } from "@/constants";
import readingTime from "@/utils/reading-time";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const publishedArticles = articles?.filter((article) => !article?.isDraft);

  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      {IS_PRODUCTION
        ? publishedArticles?.map((article) => (
            <ArticleItem
              key={article?.title}
              data={article}
              readTime={readingTime(article?.body?.raw).minutes}
            />
          ))
        : articles?.map((article) => (
            <ArticleItem
              key={article?.title}
              data={article}
              readTime={readingTime(article?.body?.raw).minutes}
            />
          ))}
    </div>
  );
};

export default ArticlesList;
