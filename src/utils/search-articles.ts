import type { Article as ArticleType } from "contentlayer/generated";

/**
 *
 * @param articles
 * @param value
 * @returns articles || string
 */

export default function searchArticlesHandler(
  articles: ArticleType[],
  value: string,
): ArticleType[] | string | undefined {
  // if value is empty return
  if (!value) return `Please enter a valid query!`;

  const articlesFound = articles.filter((article) =>
    article?.title?.toLowerCase()?.includes(value.toLowerCase()),
  );

  // return all the articles that their titles includes the query
  if (articlesFound?.length > 0) {
    return articlesFound;
  }

  // return `NOTHING FOUND` when no article was found
  if (articlesFound.length === 0) {
    return `Nothing found!`;
  }
}
