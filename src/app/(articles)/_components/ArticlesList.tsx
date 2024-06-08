import { Article as ArticleType } from "contentlayer/generated";

import ArticleItem from "./ArticleItem";

interface IArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<IArticlesListProps> = ({ articles }) => {
  return (
    <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10">
      {articles?.map((article) => (
        <ArticleItem key={article?.title} data={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
