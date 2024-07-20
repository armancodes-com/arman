"use client";

import type { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";
import readingTime from "@/utils/reading-time";
import useQueryString from "@/hooks/useQueryString";
import { useEffect, useState } from "react";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  const { getQueryStringValue } = useQueryString();
  const pageFromUrl = getQueryStringValue("page");
  const [currentPage, setCurrentPage] = useState<number>(
    pageFromUrl ? +pageFromUrl : 1,
  );

  // Calculate the starting and ending index of the articles to display
  const startIdx = (currentPage - 1) * SHOW_PER_PAGE;
  const endIdx = startIdx + SHOW_PER_PAGE;

  const paginatedArticles = articles.slice(startIdx, endIdx);

  useEffect(() => {
    setCurrentPage(pageFromUrl ? +pageFromUrl : 1);
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
