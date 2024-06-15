import { Metadata } from "next";
import Image from "next/image";
import { URL } from "url";

import { allArticles, Article as ArticleType } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import Newsletter from "@/components/ui/Newsletter";
import TagsList from "./_components/TagsList";
import SidebarLinks from "./_components/SidebarLinks";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleSeries from "./_components/ArticleSeries";
import MdxWrapper from "./_components/mdx/MdxWrapper";
import readingTime from "@/utils/reading-time";

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
    title: articleData?.title,
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
    alternates: {
      canonical: articleData?.canonical,
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

      {/* Hero Image Section */}
      {article?.image && (
        <>
          <figure className="relative h-[350px] w-full overflow-hidden rounded-10 sm:h-[400px]">
            <Image
              src={article?.image}
              alt={`${article.title} article image`}
              fill
              className=" mx-auto h-full w-full object-cover object-center"
              style={{ "--index": 2 } as React.CSSProperties}
              priority
              quality={100}
            />
          </figure>
          <div className="h-16" />
        </>
      )}

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div className="w-full max-w-[600px] space-y-6">
          {/* Series Component */}
          {article?.hasSeries && <ArticleSeries />}

          <MdxWrapper code={article?.body?.code as string} />
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <SidebarLinks links={sidebarLinks} />
      </section>

      {/* TAGS SECTION */}
      <TagsList tags={article?.tags} />

      {/* NEWSLETTER SECTION */}
      <Newsletter />
    </main>
  );
};

export default Page;
