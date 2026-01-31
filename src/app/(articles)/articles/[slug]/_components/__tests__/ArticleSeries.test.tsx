import { render, screen } from "../../../../../../../utilities";
import ArticleSeries from "../ArticleSeries";

describe("ArticleSeries Component Tests Suite", () => {
  const seriesLinks = [
    { title: "Episode One", link: "/articles/ep1", episode: 1 },
    { title: "Episode Two", link: "/articles/ep2", episode: 2, isCurrent: true },
  ];

  it("should toggle the series list when clicked", async () => {
    const { user } = render(<ArticleSeries seriesLinks={seriesLinks} />);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("opacity-0");

    const toggle = screen.getByRole("button");
    await user.click(toggle);

    expect(list).toHaveClass("opacity-100");
  });
});
