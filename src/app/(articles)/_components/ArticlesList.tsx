import ArticleItem from "./ArticleItem";

const ArticlesList = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
};

export default ArticlesList;
