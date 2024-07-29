export default function getTotalArticlesPage(
  totalArticles: number,
  showPerPage: number,
): number {
  return Math.ceil(totalArticles / showPerPage);
}
