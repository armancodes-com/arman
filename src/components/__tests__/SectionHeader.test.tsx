import { screen } from "@testing-library/react";
import { render } from "../../../utilities";
import SectionHeader from "../ui/SectionHeader";

describe("SectionHeader Tests Suite", () => {
  it("should render the section header properly", () => {
    render(<SectionHeader title="Work" />);

    expect(screen.getByTestId("section-header-component")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/work/i);
  });

  it("should render the section header with description if given", () => {
    render(<SectionHeader title="Work" description="describe title" />);

    expect(screen.getByTestId("section-header-component")).toBeInTheDocument();
    expect(screen.getByTestId("section-header-description")).toHaveTextContent(
      /describe title/i,
    );
  });
});
