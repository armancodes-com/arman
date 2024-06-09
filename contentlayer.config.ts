/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

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
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `articles/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    hasSeries: { type: "boolean", required: false, default: false },
    shortTitle: { type: "string", required: false, default: "" },
  },
  computedFields: articleComputedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  markdown: {
    rehypePlugins: [rehypeSlug], // adding id tag automatically to headings (h1-h6)
  },
  documentTypes: [Article],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
