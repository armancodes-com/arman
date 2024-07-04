import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import Navigation from "../Navigation/Navigation";
import ThemeProvider from "../ThemeProvider";

describe("Navigation Component Tests Suite", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("should render the Navigation component", () => {
    render(<Navigation />);
    const navigationElement = screen.getByRole("navigation");
    expect(navigationElement).toBeInTheDocument();

    // the default image src should be dark-logo.svg
    const logoImageElement = screen.getByRole("img");
    expect(logoImageElement.getAttribute("src")).toEqual(
      "/public/images/dark-logo.svg",
    );
  });

  it("should render 'white' logo img if the theme is set to 'white'", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <Navigation />
      </ThemeProvider>,
    );

    const logoImageElement = screen.getByRole("img");

    expect(logoImageElement.getAttribute("src")).toEqual(
      "/public/images/white-logo.svg",
    );
  });

  it("should render 'dark' logo img if the theme is set to 'dark'", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <Navigation />
      </ThemeProvider>,
    );

    const logoImageElement = screen.getByRole("img");

    expect(logoImageElement.getAttribute("src")).toEqual(
      "/public/images/dark-logo.svg",
    );
  });
});
