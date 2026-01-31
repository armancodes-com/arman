import { render, screen } from "../../../../../utilities";
import ArticleItem from "../ArticleItem";
import type { Article as ArticleType } from "contentlayer/generated";

const baseArticle = {
  title: "Test article title",
  summary: "This is a short summary for the article.",
  publishedAt: "2024-01-01",
  slug: "test-article",
  isDraft: false,
  category: "Testing",
} as ArticleType;

describe("ArticleItem Component Tests Suite", () => {
  it("should render read time and category details when provided", () => {
    render(<ArticleItem data={baseArticle} readTime={5} />);

    expect(screen.getByText("Read")).toBeInTheDocument();
    expect(screen.getByText("5 Mins")).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("should apply draft styling and hide optional metadata when missing", () => {
    const draftArticle = {
      ...baseArticle,
      isDraft: true,
      category: undefined,
    } as ArticleType;

    const { container } = render(<ArticleItem data={draftArticle} readTime={0} />);

    const article = container.querySelector("article");
    expect(article).toHaveClass("line-through");
    expect(screen.queryByText("Read")).not.toBeInTheDocument();
    expect(screen.queryByText("Category")).not.toBeInTheDocument();
  });
});
