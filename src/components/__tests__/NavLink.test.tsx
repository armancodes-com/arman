import { render } from "../../../utilities";
import NavLink from "../Navigation/NavLink";
import { screen } from "@testing-library/react";

const mockUsePathname = vi.fn();

describe("NavLink Tests Suite", () => {
  beforeEach(() => {
    vi.mock("next/navigation", () => ({
      usePathname() {
        return mockUsePathname();
      },
    }));
  });

  it("should render the component", () => {
    render(<NavLink href="/about-me">about me</NavLink>);
  });

  it.todo(
    "should not render the active styles initially when routing does not match",
    () => {
      render(<NavLink href="/about-me">about me</NavLink>);

      const activeStyles = "font-bold text-primary";
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("href", `/about-me`);
      expect(linkElement).not.toHaveClass(activeStyles);
    },
  );

  it("should render the active styles when routing matches", () => {
    mockUsePathname.mockImplementation(() => "/about-me");
    render(<NavLink href="/about-me">about me</NavLink>);

    const activeStyles = "font-bold text-primary";
    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveAttribute("href", `/about-me`);
    expect(linkElement).toHaveClass(activeStyles);
  });
});
