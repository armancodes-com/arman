import { render, screen } from "@testing-library/react";
import BackLink from "../ui/BackLink";

describe("BackLink Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<BackLink href="/link-href">click me</BackLink>);

    const linkElement = screen.getByRole("link", { name: /click me/g });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/link-href");
  });
});
