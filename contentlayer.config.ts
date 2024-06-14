/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import textEllipsisFormatter from "./src/utils/text-ellipsis";

// computing some values from docs
const getSlug = (doc: any) => doc?._raw.sourceFileName.replace(/\.mdx$/, "");

const articleComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/articles/${getSlug(doc)}/image.jpg`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/articles/${getSlug(doc)}/image.png`,
  },
  shareLink: {
    type: "string",
    resolve: (doc) => `/articles/${getSlug(doc)}`,
  },
  metaTitle: {
    type: "string",
    resolve: (doc) => `${doc?.title}`,
  },
  metaDescription: {
    type: "string",
    resolve: (doc) => `${textEllipsisFormatter(doc?.summary, 130)}`,
  },
  ogDescription: {
    type: "string",
    resolve: (doc) => `${textEllipsisFormatter(doc?.summary, 130)}`,
  },
  twitterDescription: {
    type: "string",
    resolve: (doc) => `${textEllipsisFormatter(doc?.summary, 130)}`,
  },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `articles/*.mdx`,
  fields: {
    baseUrl: {
      type: "string",
      required: false,
      default: "https://armancodes.com/",
    },
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    hasSeries: { type: "boolean", required: false, default: false },
    shortTitle: { type: "string", required: false, default: "" },
    robots: { type: "string", required: false, default: "noindex, nofollow" },
    canonical: { type: "string", required: false, default: "" },
    ogTitle: { type: "string", required: false, default: "" },
    ogType: { type: "string", required: false, default: "website" },
    ogUrl: { type: "string", required: false, default: "" },
    ogImage: { type: "string", required: false, default: "" },
    twitterTitle: { type: "string", required: false, default: "" },
    twitterUrl: { type: "string", required: false, default: "" },
    twitterImage: { type: "string", required: false, default: "" },
    author: { type: "string", required: true, default: "" },
    keywords: { type: "json", required: false },
    isDraft: { type: "boolean", required: false, default: true },
  },
  computedFields: articleComputedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  markdown: {
    // @ts-ignore
    rehypePlugins: [rehypePrism, rehypePrettyCode, rehypeSlug], // adding id tag automatically to headings (h1-h6)
    remarkPlugins: [],
  },
  documentTypes: [Article],
  mdx: {
    rehypePlugins: [
      // @ts-ignore
      rehypePrettyCode,
      rehypePrism,
      rehypeSlug,
    ],
    remarkPlugins: [],
  },
});
