/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MetadataRoute } from "next";
import { allArticles, Article as ArticleType } from "contentlayer/generated";
import { SITE_URL } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedArticles: ArticleType[] = allArticles?.filter(
    (article) => !article?.isDraft,
  );

  const articlesUrls = publishedArticles?.map((article) => ({
    url: `${article?.baseUrl}articles/${article?.slug}`,
    lastModified: article?.updatedAt
      ? new Date(Date.parse(article?.updatedAt as string))
      : new Date(article?.publishedAt),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/about-me`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // @ts-ignore
    ...articlesUrls,
  ];
}
