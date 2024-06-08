import { allArticles, Article as ArticleType } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import BackLink from "@/components/ui/BackLink";
import Newsletter from "@/components/ui/Newsletter";

import { Alexandria } from "next/font/google";
import TagsList from "./_components/TagsList";
import SidebarLinks from "./_components/SidebarLinks";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleSeries from "./_components/ArticleSeries";
import ArticleImage from "./_components/ArticleImage";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

const Page = async ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (post: ArticleType) => post.slug === params.slug,
  );

  const MDXContent = useMDXComponent(article?.body?.code as string);

  return (
    <main className="min-h-svh !px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/articles">back</BackLink>

      <ArticleHeader
        title={article?.title as string}
        publishedAt={article?.publishedAt as string}
        shareLink={article?.shareLink as string}
      />

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div className="w-full space-y-6">
          {/* Series Component */}
          {article?.hasSeries && <ArticleSeries />}

          {/* CONTENT OF ARTICLE */}
          <div
            className={`${alexandria.className} text-body2 font-light md:text-body1`}
          >
            <ArticleImage
              src="/images/article-img.webp"
              width={200}
              height={10}
              priority
              alt="imaeg"
              caption="this is caption"
              rounded
            />

            <MDXContent />
          </div>
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <SidebarLinks />
      </section>

      {/* TAGS SECTION */}
      <TagsList tags={article?.tags} />

      {/* NEWSLETTER SECTION */}
      <Newsletter />
    </main>
  );
};

export default Page;
