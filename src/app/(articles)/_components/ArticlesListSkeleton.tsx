const ArticleItemSkeleton = () => {
  return (
    <article
      className={`border-border-articles flex animate-pulse flex-col gap-y-4 border-b pb-10 transition-all duration-200 ease-linear md:gap-y-6 md:pb-12`}
    >
      <span className="group hover:text-primary space-y-1 underline-offset-4 transition-all duration-75 ease-linear hover:underline">
        <p className="bg-gray-2 h-4"></p>
        <p className="bg-gray-2 h-4 w-1/2"></p>
      </span>
      <p className="bg-gray-2"></p>

      <span
        className={`bg-gray-2 text-caption2 text-primary md:text-body2 flex h-4 w-32 items-center gap-2 leading-4 capitalize underline-offset-4 hover:underline`}
      ></span>

      <div className="flex items-center gap-10">
        <p className="text-text-primary space-x-4">
          <span className="bg-gray-2 inline-block h-3 w-16"></span>
          <span className="bg-gray-2 inline-block h-3 w-10"></span>
        </p>
        <p className="text-text-primary space-x-2">
          <span className="bg-gray-2 inline-block h-3 w-16"></span>
          <span className="bg-gray-2 inline-block h-3 w-10"></span>
        </p>
      </div>
    </article>
  );
};

export default ArticleItemSkeleton;
