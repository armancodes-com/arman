import type { Article as ArticleType } from "contentlayer/generated";

import { IS_PRODUCTION } from "@/constants";
import readingTime from "@/utils/reading-time";
import reverseArrayHandler from "@/utils/reverse-array";
import ArticleItem from "@/app/(articles)/_components/ArticleItem";

interface IArticlesListProps {
  articles: ArticleType[];
}

const HomePageArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const publishedArticles = articles?.filter((article) => !article?.isDraft);
  const allArticlesReversed = reverseArrayHandler(articles);
  const publishedArticlesReversed = reverseArrayHandler(publishedArticles);

  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      {IS_PRODUCTION
        ? publishedArticlesReversed?.map((article) => (
            <ArticleItem
              key={article?.title}
              data={article}
              readTime={readingTime(article?.body?.raw).minutes}
            />
          ))
        : allArticlesReversed?.map((article) => (
            <ArticleItem
              key={article?.title}
              data={article}
              readTime={readingTime(article?.body?.raw).minutes}
            />
          ))}
    </div>
  );
};

export default HomePageArticlesList;
