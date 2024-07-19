/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { allArticles } from "contentlayer/generated";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import useQueryString from "@/hooks/useQueryString";
import { SHOW_PER_PAGE } from "@/constants/Pagination.constants";

// if we get the total num of articles ==> 10
// each page should have 5 articles ==> page 1 => articles: 1 - 2 - 3 - 4- 5
// total number of articles / 5 ==> 10 / 5 = 2 pages
// if total articles becomes 7 ==> 7 / 5 = 1.4 which should be rounded up to 2

const Pagination = () => {
  const { createQueryString, getQueryStringValue } = useQueryString();
  const [totalPages, _] = useState(
    Math.ceil(allArticles.length / SHOW_PER_PAGE),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageQueryValue = getQueryStringValue("page");

  const handleUpdatePagination = (page: number) => {
    // update page query
    setCurrentPage(page);
    createQueryString("page", `${page}`);
  };

  const handleNextPage = () => {
    // if page equals total pages we should return
    if (currentPage === totalPages) return;

    handleUpdatePagination(currentPage + 1);
  };

  const handlePrevPage = () => {
    // if page equals 1
    if (currentPage === 1) return;

    handleUpdatePagination(currentPage - 1);
  };

  useEffect(() => {
    // check if it already exists
    if (pageQueryValue) {
      setCurrentPage(+pageQueryValue);
      createQueryString("page", `${pageQueryValue}`);
    } else {
      createQueryString("page", `${currentPage}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createQueryString, pageQueryValue]);

  return (
    <article className="!md:mt-[68px] mx-auto !mt-11 flex max-w-[258px] items-center justify-center gap-12">
      <Button
        className="!font-medium"
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        previous
      </Button>
      <Button
        className="!font-medium"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        next
      </Button>
    </article>
  );
};

export default Pagination;
