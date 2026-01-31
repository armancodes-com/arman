import { screen } from "@testing-library/react";
import { render } from "@/utilities";
import NavList from "../Navigation/NavList";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";

describe("NavList Test Suite", () => {
  it("should render the NavList component", () => {
    render(<NavList links={NAVIGATION_LINKS} />);
  });

  it("should render as much links passed to it as props", () => {
    render(<NavList links={NAVIGATION_LINKS} />);

    const linkElements = screen.getAllByRole("link");

    linkElements.map((link, index) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", NAVIGATION_LINKS[index]?.href);
      expect(link).toHaveTextContent(NAVIGATION_LINKS[index]?.title);
    });

    expect(NAVIGATION_LINKS.length).toEqual(linkElements.length);
  });
});
