import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import Company from "../_components/Company";
import { ICompanyInfoProps } from "@/constants/Companies.constants";

const sampleCompany: ICompanyInfoProps = {
  id: "1",
  companyName: "test company",
  image: "/images/urbansportsclubnl-logo.jpeg",
  jobType: "On-site",
  endData: "present",
  role: "Backend Engineer",
  location: "Amsterdam",
  startDate: "2022",
};

describe("Company Component Tests Suite", () => {
  it("should render the component with the props given to it properly", () => {
    render(<Company {...sampleCompany} />);

    const companyWrapper = screen.getByRole("article");

    expect(companyWrapper).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      `${sampleCompany?.companyName} logo`,
    );
  });
});
