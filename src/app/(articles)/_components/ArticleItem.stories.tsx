/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta, StoryObj } from "@storybook/react";
import ArticleItem from "./ArticleItem";

const meta: Meta<typeof ArticleItem> = {
  title: "Components/ArticleItem",
  component: ArticleItem,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ArticleItemCard: Story = {
  render: (args) => <ArticleItem {...args} />,
  args: {
    // @ts-ignore
    data: {
      title: "Article Title",
      author: "John Doe",
      slug: "article-title",
      isDraft: false,
      category: "tech",
      summary:
        "This is the summary of the article. Lorem interface will be updated soon enough.",
      publishedAt: "2019-11-28",
    },
    readTime: 7,
  },
  argTypes: {
    data: {
      control: "object",
    },
    readTime: {
      control: "number",
    },
  },
};

export const DraftArticleItemCard: Story = {
  render: (args) => <ArticleItem {...args} />,
  args: {
    // @ts-ignore
    data: {
      title: "Article Title",
      author: "John Doe",
      slug: "article-title",
      isDraft: true,
      category: "tech",
      summary:
        "This is the summary of the article. Lorem interface will be updated soon enough.",
      publishedAt: "2019-11-28",
    },
    readTime: 7,
  },
  argTypes: {
    data: {
      control: "object",
    },
    readTime: {
      control: "number",
    },
  },
};
