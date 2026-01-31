import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Article as ArticleType } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import ArticleHeader from "./_components/ArticleHeader";
import MdxContent from "./_components/mdx/MdxContent";
import readingTime from "@/utils/reading-time";
import { IS_PRODUCTION, SITE_URL } from "@/constants";
import JsonLd from "@/components/seo/JsonLd";

const DynamicTagListComponent = nextDynamic(
  () => import("./_components/TagsList"),
  { ssr: true },
);

const DynamicArticlesSeries = nextDynamic(
  () => import("./_components/ArticleSeries"),
  {
    ssr: true,
    loading: () => <div className="w-full"></div>,
  },
);

const DynamicSidebarLinks = nextDynamic(
  () => import("./_components/SidebarLinks"),
  {
    ssr: true,
    loading: () => <div className="w-full max-w-[172px]"></div>,
  },
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // read route params - await params in Next.js 15+
  const { slug } = await params;

  // finding article data
  const articleData = allArticles?.find((article) => article.slug === slug);

  const baseUrl = articleData?.baseUrl?.replace(/\/$/, "") || SITE_URL; // Remove trailing slash if present
  const shareLink = articleData?.shareLink?.replace(/^\//, ""); // Remove leading slash
  const canonicalUrl = `${baseUrl}/${shareLink}`;

  return {
    metadataBase: new globalThis.URL(articleData?.baseUrl || SITE_URL),
    title: `Arman Ahmadi - ${articleData?.title}`,
    description: articleData?.metaDescription,
    authors: [{ name: articleData?.author }],
    keywords: articleData?.keywords,
    openGraph: {
      images: [articleData?.ogImage as string],
      type: "article",
      description: articleData?.ogDescription,
      title: articleData?.ogTitle,
      url: articleData?.ogUrl,
      siteName: "Arman Ahmadi",
      locale: "en_US",
      publishedTime: articleData?.publishedAt,
      modifiedTime: articleData?.updatedAt || articleData?.publishedAt,
      authors: [articleData?.author],
      tags: articleData?.tags as string[],
    },
    robots: articleData?.robots,
    alternates: {
      canonical: articleData?.canonical || canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@armancodes",
      description: articleData?.twitterDescription,
      title: articleData?.twitterTitle,
      images: articleData?.twitterImage,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // await params in Next.js 15+
  const { slug } = await params;

  const article = allArticles.find((post: ArticleType) => post.slug === slug);
  const isArticleDraft = IS_PRODUCTION && article?.isDraft;
  const noArticleFound = !article;

  // create JSON+LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${article?.baseUrl}articles/${article?.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Arman Ahmadi",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "armancodes.com",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/dark-logo.png`,
      },
    },
    headline: article?.title,
    image: article?.image,
    datePublished: new Date(article?.publishedAt as string),
    dateModified: new Date(article?.updatedAt as string),
    keywords: article?.keywords,
    articleSection: article?.category || "Technology",
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article?.title,
        item: `${article?.baseUrl}articles/${article?.slug}`,
      },
    ],
  };

  // handle redirect when article is draft or slut not found
  if (isArticleDraft || noArticleFound) {
    notFound();
  }

  const sidebarLinks: { title: string; href: string }[] =
    article?.sidebarLinks?.map((linkItem: string) => ({
      title: linkItem,
      href: linkItem?.toLowerCase()?.split(" ")?.join("-"),
    }));

  const readingTimeData = readingTime(article?.body?.raw as string);

  return (
    <main className="!px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/articles">all articles</BackLink>

      <ArticleHeader
        title={article?.title as string}
        publishedAt={article?.publishedAt as string}
        shareLink={article?.shareLink as string}
        readTime={readingTimeData?.minutes}
      />

      <div className="relative">
        {/* Hero Image Section - Static Images */}
        {article?.image && (
          <>
            <figure className="relative h-[350px] w-full overflow-hidden rounded-10 sm:h-[400px]">
              <Image
                src={`${article?.image}`}
                alt={`${article.title} article image`}
                fill
                className=" mx-auto h-full w-full object-cover object-center"
                style={{ "--index": 2 } as React.CSSProperties}
                priority
                quality={100}
                sizes="(min-width: 1024px) 32rem, 20rem"
              />
            </figure>
            <div className="h-16" />
          </>
        )}

        {/* body section */}
        <section className="flex sm:gap-x-6 md:gap-x-14">
          <div
            className={`${article?.hasSidebarLinks ? "max-w-[600px]" : "w-full"} space-y-6`}
          >
            {/* Series Component */}
            {article?.hasSeries && (
              <DynamicArticlesSeries seriesLinks={article?.blogSeriesLinks} />
            )}

            <MdxContent code={article?.body?.code as string} />
          </div>

          {/* SIDEBAR OF SINGLE ARTICLES */}
          {sidebarLinks && sidebarLinks.length > 0 && (
            <DynamicSidebarLinks links={sidebarLinks} />
          )}
        </section>
      </div>

      {/* TAGS SECTION */}
      <DynamicTagListComponent tags={article?.tags} />

      {/* JSON+LD data */}
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}

// As our blogs are built-in the project and then published (not fetched from a backend source), it is better to be statically generated to increase load time
export async function generateStaticParams() {
  // IS_PRODUCTION && article?.isDraft
  const articles = allArticles.filter((article) => !article?.isDraft);

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
