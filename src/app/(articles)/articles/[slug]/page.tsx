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

const Page = async () => {
  return (
    <main className="min-h-svh !px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/articles">back</BackLink>

      <ArticleHeader />

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div className="w-full space-y-6">
          {/* Series Component */}
          <ArticleSeries />

          {/* CONTENT OF ARTICLE */}
          <div
            className={`${alexandria.className} text-body2 font-light md:text-body1`}
          >
            <p className="text-inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
              diam maecenas sed. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>

            <ArticleImage
              src="/images/hero-img.jpeg"
              width={200}
              height={200}
              alt="imaeg"
              caption="this is the caption"
            />
          </div>
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <SidebarLinks />
      </section>

      {/* TAGS SECTION */}
      <TagsList />

      {/* NEWSLETTER SECTION */}
      <Newsletter />
    </main>
  );
};

export default Page;
