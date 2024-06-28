/* eslint-disable @typescript-eslint/ban-ts-comment */

/**
 *
 * @param articles
 * @param value
 * @returns articles || string
 */

export default function searchArticlesHandler<T>(
  articles: T[],
  value: string,
): T[] | string | undefined {
  // if value is empty return
  if (!value) return `Please enter a valid query!`;

  const articlesFound = articles.filter((article) =>
    //@ts-ignore
    article?.title?.toLowerCase()?.includes(value.toLowerCase()),
  );

  // return all the articles that their titles includes the query
  return articlesFound;
}
