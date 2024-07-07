import { render } from "../../../../utilities";
import { screen } from "@testing-library/react";
import WorkExperienceSection from "../_components/WorkExperienceSection";

describe("WorkExperienceSection Component Tests Suite", () => {
  it("should render the work experience section component properly", () => {
    render(<WorkExperienceSection />);

    const sectionHeadingElement = screen.getByRole("heading", {
      name: /work/i,
    });
    const sectionDescriptionElement = screen.getByTestId(
      "section-header-description",
    );

    expect(sectionHeadingElement).toBeInTheDocument();
    expect(sectionDescriptionElement).toBeInTheDocument();
  });
});
