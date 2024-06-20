const ArticleItemSkeleton = () => {
  return (
    <article
      className={`flex animate-pulse flex-col gap-y-4 border-b border-border-articles pb-10 transition-all duration-200 ease-linear md:gap-y-6 md:pb-12`}
    >
      <span className="group space-y-1 underline-offset-4 transition-all duration-75 ease-linear hover:text-primary hover:underline">
        <p className="h-4 bg-gray-2"></p>
        <p className="h-4 w-1/2 bg-gray-2"></p>
      </span>
      <p className="bg-gray-2"></p>

      <span
        className={`flex h-4 w-32 items-center gap-2 bg-gray-2 text-caption2 capitalize leading-4 text-primary underline-offset-4 hover:underline md:text-body2`}
      ></span>

      <div className="flex items-center gap-10">
        <p className="space-x-4 text-text-primary">
          <span className="inline-block h-3 w-16 bg-gray-2"></span>
          <span className="inline-block h-3 w-10 bg-gray-2"></span>
        </p>
        <p className="space-x-2 text-text-primary">
          <span className="inline-block h-3 w-16 bg-gray-2"></span>
          <span className="inline-block h-3 w-10 bg-gray-2"></span>
        </p>
      </div>
    </article>
  );
};

export default ArticleItemSkeleton;
