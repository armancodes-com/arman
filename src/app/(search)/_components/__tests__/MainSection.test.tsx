import { render, screen } from "../../../../../utilities";
import SearchMainSection from "../MainSection";

describe("SearchMainSection Component Tests Suite", () => {
  it("should render no results message when there are no matches", async () => {
    const { user } = render(<SearchMainSection />);

    const input = screen.getByRole("textbox");
    await user.type(input, "NoResults");

    const message = await screen.findByText("No article was found!");
    expect(message).toBeInTheDocument();
  });
});
