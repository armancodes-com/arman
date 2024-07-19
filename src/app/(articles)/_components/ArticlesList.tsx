"use client";

import type { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";
import { IS_PRODUCTION } from "@/constants";
import readingTime from "@/utils/reading-time";
import reverseArrayHandler from "@/utils/reverse-array";
import useQueryString from "@/hooks/useQueryString";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const { getQueryStringValue } = useQueryString();

  const currentPage = getQueryStringValue("page");
  console.log(currentPage, "currentPage");

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

export default ArticlesList;
