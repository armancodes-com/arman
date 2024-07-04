import { render } from "../../../utilities";
import Newsletter from "../ui/Newsletter";
import { screen } from "@testing-library/react";
// import * as FeatureFlags from "@/constants/FeatureFlag.constants";

describe("Newsletter Tests Suite", () => {
  it("should not render the newsletter component when the 'isNewsLetterFeatureReleased' is set to false", () => {
    render(<Newsletter />);
    const newsLetterWrapper = screen.queryByTestId("newsletter-section");
    expect(newsLetterWrapper).not.toBeInTheDocument();
  });

  // it('should render the newsletter component when the "isNewsLetterFeatureReleased" is set to true', () => {
  //   // Mock the entire module
  //   vi.spyOn(
  //     FeatureFlags,
  //     "isNewsLetterFeatureReleased",
  //     "get",
  //   ).mockReturnValue(true);

  //   const { container } = render(<Newsletter />);
  //   screen.debug();
  //   expect(container).not.toBeInTheDocument();
  // });
});

// import * as FeatureFlag from "@/constants/FeatureFlag.constants";

//   it("does not render and returns null when isNewsLetterFeatureReleased is false", () => {
//     // Mock the feature flag to be false
//     vi.spyOn(FeatureFlag, "isNewsLetterFeatureReleased", "get").mockReturnValue(
//       false,
//     );

//     const { container } = render(<Newsletter />);

//     // Check if nothing is rendered
//     expect(container).toBeEmptyDOMElement();
//   });
