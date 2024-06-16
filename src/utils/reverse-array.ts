import { Article as ArticleType } from "contentlayer/generated";

export default function reverseArrayHandler(
  data: ArticleType[],
): ArticleType[] {
  const reversedArray = [];

  for (let i = data?.length - 1; i >= 0; i--) {
    reversedArray.push(data[i]);
  }

  return reversedArray;
}
