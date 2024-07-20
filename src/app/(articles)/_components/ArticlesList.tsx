"use client";

import type { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";
import readingTime from "@/utils/reading-time";
import useQueryString from "@/hooks/useQueryString";
import { useEffect, useState } from "react";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";
import reverseArrayHandler from "@/utils/reverse-array";
import { IS_PRODUCTION } from "@/constants";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const { getQueryStringValue } = useQueryString();
  const pageFromUrl = getQueryStringValue("page");
  const [currentPage, setCurrentPage] = useState<number>(
    pageFromUrl ? +pageFromUrl : 0,
  );

  const publishedArticles = articles?.filter((article) => !article?.isDraft);
  const allArticlesReversed = reverseArrayHandler(articles);
  const publishedArticlesReversed = reverseArrayHandler(publishedArticles);

  const displayedArticles = IS_PRODUCTION
    ? publishedArticlesReversed
    : allArticlesReversed;

  // Calculate the starting and ending index of the articles to display
  const startIdx = (currentPage - 1) * SHOW_PER_PAGE;
  const endIdx = startIdx + SHOW_PER_PAGE;

  const paginatedArticles = displayedArticles.slice(startIdx, endIdx);
  console.log(paginatedArticles, "pgination");

  useEffect(() => {
    setCurrentPage(pageFromUrl ? +pageFromUrl : 0);
  }, [pageFromUrl]);

  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      {paginatedArticles?.map((article) => (
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
