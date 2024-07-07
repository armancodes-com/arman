import { render, screen } from "@testing-library/react";
import Tag from "../ui/Tag";

describe("Tag Component Test Suite", () => {
  it("should render the Tag Component with its children properly", () => {
    render(<Tag>sample text</Tag>);

    expect(screen.getByText(/sample text/i)).toBeInTheDocument();
  });
});
