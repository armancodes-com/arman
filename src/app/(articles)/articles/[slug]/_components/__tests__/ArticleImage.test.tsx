import { render, screen } from "../../../../../../../utilities";
import ArticleImage from "../ArticleImage";

describe("ArticleImage Component Tests Suite", () => {
  it("should render image without rounded styles when reset is true", () => {
    const { container } = render(
      <ArticleImage
        src="/images/article.png"
        alt="Article image"
        width={320}
        height={240}
        reset
      />,
    );

    const wrapper = container.querySelector("div");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).not.toContain("rounded-10");
    expect(screen.getByAltText("Article image")).toBeInTheDocument();
  });

  it("should render caption when provided", () => {
    render(
      <ArticleImage
        src="/images/article.png"
        alt="Article image"
        width={320}
        height={240}
        caption="Test caption"
      />,
    );

    expect(screen.getByText("Test caption")).toBeInTheDocument();
  });
});
