/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MetadataRoute } from "next";
import { allArticles, Article as ArticleType } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedArticles: ArticleType[] = allArticles?.filter(
    (article) => !article?.isDraft,
  );

  const articlesUrls = publishedArticles?.map((article) => ({
    url: `${article?.baseUrl}articles/${article?.slug}`,
    lastModified: new Date(article?.publishedAt),
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [
    {
      url: "https://armancodes.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://armancodes.com/about-me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://armancodes.com/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // @ts-ignore
    ...articlesUrls,
  ];
}
