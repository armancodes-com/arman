import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { URL } from "url";
import { notFound } from "next/navigation";

import { allArticles, Article as ArticleType } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import ArticleHeader from "./_components/ArticleHeader";
import MdxWrapper from "./_components/mdx/MdxWrapper";
import readingTime from "@/utils/reading-time";
import { IS_PRODUCTION } from "@/constants";

const DynamicNewsLetterComponent = dynamic(
  () => import("@/components/ui/Newsletter"),
  { ssr: false },
);

const DynamicTagListComponent = dynamic(
  () => import("./_components/TagsList"),
  { ssr: false },
);

const DynamicArticlesSeries = dynamic(
  () => import("./_components/ArticleSeries"),
  {
    ssr: false,
    loading: () => <div className="w-full"></div>,
  },
);

const DynamicSidebarLinks = dynamic(
  () => import("./_components/SidebarLinks"),
  {
    ssr: false,
    loading: () => <div className="w-full max-w-[172px]"></div>,
  },
);

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // finding article data
  const articleData = allArticles?.find((article) => article.slug === slug);

  return {
    metadataBase: articleData?.baseUrl as unknown as URL,
    title: `Arman Ahmadi - ${articleData?.title}`,
    description: articleData?.metaDescription,
    authors: { name: articleData?.author },
    keywords: articleData?.keywords,
    openGraph: {
      images: [articleData?.ogImage as string],
      type: "website",
      description: articleData?.ogDescription,
      title: articleData?.ogTitle,
      url: articleData?.ogUrl,
    },
    robots: articleData?.robots,
    alternates: {
      canonical:
        articleData?.canonical ||
        `${articleData?.baseUrl}${articleData?.shareLink}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: articleData?.author,
      description: articleData?.twitterDescription,
      title: articleData?.twitterTitle,
      images: articleData?.twitterImage,
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (post: ArticleType) => post.slug === params.slug,
  );
  const isArticleDraft = IS_PRODUCTION && article?.isDraft;
  const noArticleFound = !article;

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
          {article?.hasSeries && <DynamicArticlesSeries />}

          <MdxWrapper code={article?.body?.code as string} />
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        {sidebarLinks && sidebarLinks.length > 0 && (
          <DynamicSidebarLinks links={sidebarLinks} />
        )}
      </section>

      {/* TAGS SECTION */}
      <DynamicTagListComponent tags={article?.tags} />

      {/* NEWSLETTER SECTION */}
      <DynamicNewsLetterComponent />
    </main>
  );
};

export default Page;

// As our blogs are built-in the project and then published (not fetched from a backend source), it is better to be statically generated to increase load time
export async function generateStaticParams() {
  // IS_PRODUCTION && article?.isDraft
  const articles = allArticles.filter((article) => !article?.isDraft);

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
