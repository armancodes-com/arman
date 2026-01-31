import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import ConnectSection from "../_components/ConnectSection";

describe("ConnectSection Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<ConnectSection />);

    const sectionHeaderElement = screen.getByRole("heading");
    const connectLinksWrapper = screen.getByTestId("connect-links-wrapper");

    expect(sectionHeaderElement).toHaveTextContent("connect");
    expect(connectLinksWrapper).toBeInTheDocument();
  });
});
