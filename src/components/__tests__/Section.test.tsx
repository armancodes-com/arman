import { render } from "@/utilities";
import Section from "../ui/Section";
import { screen } from "@testing-library/react";

describe("Section Component Test Suite", () => {
  it("should render the section component", () => {
    render(
      <Section>
        <span>section child</span>
      </Section>,
    );
  });

  it("should render the section component with Ellipsis if hasEllipse props is true and type of primary", () => {
    render(
      <Section type="primary" hasEllipse>
        <span>section child</span>
      </Section>,
    );

    const sectionElement = screen.getByTestId("section-component");

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass("ellipse");
  });

  it("should render the section component without Ellipsis if hasEllipse props is false and type of primary", () => {
    render(
      <Section type="primary">
        <span>section child</span>
      </Section>,
    );

    const sectionElement = screen.getByTestId("section-component");

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).not.toHaveClass("ellipse");
  });
});
