"use client";

import type { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";
import readingTime from "@/utils/reading-time";
import useQueryString from "@/hooks/useQueryString";
import { useEffect, useState, useMemo } from "react";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";
import getTotalArticlesPage from "@/utils/pagination-utils";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const { getQueryStringValue, createQueryString } = useQueryString();
  const pageFromUrl = getQueryStringValue("page");

  const totalPages = getTotalArticlesPage(articles?.length, SHOW_PER_PAGE);

  const [currentPage, setCurrentPage] = useState<number>(
    pageFromUrl ? +pageFromUrl : 1,
  );

  // Calculate the starting and ending index of the articles to display
  const startIdx = (currentPage - 1) * SHOW_PER_PAGE;
  const endIdx = startIdx + SHOW_PER_PAGE;

  const paginatedArticles = articles.slice(startIdx, endIdx);

  // Memoize reading times to avoid recalculating on every render
  const articlesWithReadTime = useMemo(
    () =>
      paginatedArticles.map((article) => ({
        article,
        readTime: readingTime(article?.body?.raw).minutes,
      })),
    [paginatedArticles],
  );

  useEffect(() => {
    if (pageFromUrl) {
      if (+pageFromUrl > totalPages || +pageFromUrl < 1) {
        setCurrentPage(1);
        createQueryString("page", `1`);
      } else {
        setCurrentPage(pageFromUrl ? +pageFromUrl : 1);
      }
    }
  }, [pageFromUrl, totalPages, createQueryString]);

  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      {articlesWithReadTime.map(({ article, readTime }) => (
        <ArticleItem key={article?.slug} data={article} readTime={readTime} />
      ))}
    </div>
  );
};

export default ArticlesList;
