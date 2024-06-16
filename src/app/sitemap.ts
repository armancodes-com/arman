import { MetadataRoute } from "next";
import { allArticles, Article as ArticleType } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedArticles: ArticleType[] = allArticles?.filter(
    (article) => !article?.isDraft,
  );

  const articlesUrls = publishedArticles?.map((article) => ({
    url: `${article?.baseUrl}articles/$${article?.slug}`,
    lastModified: new Date(article?.publishedAt),
  }));

  return [
    {
      url: "https://armancodes.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://armancodes.com/about-me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://armancodes.com/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...articlesUrls,
  ];
}
