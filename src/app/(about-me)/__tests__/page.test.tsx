import { render } from "../../../../utilities";
import { screen } from "@testing-library/react";
import Page, { metadata } from "../about-me/page";

describe("About me page test suite", () => {
  it("should render the page properly", () => {
    render(<Page />);
    const pageMainSection = screen.getByTestId("about-me-page");

    // sections
    const aboutMeHeroSection = screen.getByTestId("about-me-hero-section");

    expect(pageMainSection).toBeInTheDocument();

    expect(aboutMeHeroSection).toBeInTheDocument();
  });

  it("should have correct metadata", () => {
    // You might need to test this indirectly or through a utility
    expect(metadata).toEqual(
      expect.objectContaining({
        title: "Arman Ahmadi - About me",
        description:
          "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
      }),
    );
  });
});
