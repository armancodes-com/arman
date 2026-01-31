"use client";

/* eslint-disable no-irregular-whitespace */
import { ChangeEvent, useState } from "react";
import { allArticles } from "contentlayer/generated";

import Section from "@/components/ui/Section";
import SearchInput from "./SearchInput";
import SearchItemList from "./SearchItemList";
import useDebounce from "@/hooks/useDebounce";
import searchArticlesHandler from "@/utils/search-articles";
import { IS_PRODUCTION } from "@/constants";

const SearchMainSection = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debouncedSearchQuery = useDebounce(query, 500);

  // filtering articles for search when IS_PRODUCTION is set to true
  const articlesToSearch = IS_PRODUCTION
    ? allArticles?.filter((article) => !article.isDraft)
    : allArticles;

  const searchResults = searchArticlesHandler(
    articlesToSearch,
    debouncedSearchQuery,
  );

  return (
    <>
      <SearchInput onChange={handleInputChange} value={query} />

      <Section type="common" className="!px-0">
        {debouncedSearchQuery && (
          <header className="mt-6 mb-10 md:mt-16 md:mb-12">
            <span className="text-caption2 text-gray-2">
              {`Found ${searchResults?.length} results for '${debouncedSearchQuery}'`}
            </span>
          </header>
        )}

        {searchResults && searchResults.length > 0 && (
          <SearchItemList results={searchResults} />
        )}

        {searchResults && searchResults.length === 0 && (
          <span className="text-caption1 text-text-primary md:text-body2 inline-block w-full text-center">
            No article was found!
          </span>
        )}
      </Section>
    </>
  );
};

export default SearchMainSection;
