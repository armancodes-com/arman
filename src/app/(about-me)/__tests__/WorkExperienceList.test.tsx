import { render } from "../../../../utilities";
import { screen } from "@testing-library/react";
import WorkExperienceList from "../_components/WorkExperienceList";
import { COMPANIES_DATA } from "@/constants/Companies.constants";

describe("WorkExperienceList Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<WorkExperienceList />);

    const companiesElements = screen.getAllByTestId("company-component");

    expect(companiesElements).toHaveLength(COMPANIES_DATA.length);
  });
});
