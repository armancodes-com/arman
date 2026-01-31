import { render, screen } from "@/utilities";
import ArticleHeader from "../ArticleHeader";

vi.mock("@/constants/FeatureFlag.constants", () => ({
  isLikeArticleFeatureReleased: true,
}));

describe("ArticleHeader Component Tests Suite", () => {
  it("should render read time and like icon when feature flag is enabled", () => {
    const { container } = render(
      <ArticleHeader
        title="Test article"
        publishedAt="2024-01-01"
        shareLink="/articles/test-article"
        readTime={3}
      />,
    );

    expect(screen.getByText("3 Mins")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
