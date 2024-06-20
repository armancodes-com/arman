import ArticleItemSkeleton from "../_components/ArticlesListSkeleton";

export default function Loading() {
  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      <ArticleItemSkeleton />
      <ArticleItemSkeleton />
      <ArticleItemSkeleton />
    </div>
  );
}
