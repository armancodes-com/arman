import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import Input from "../Inputs/Input";

describe("Input Component Tests Suite", () => {
  it("should render the input component properly without icon initially", () => {
    render(<Input />);

    const iconElement = screen.queryByTestId("input-icon");
    expect(iconElement).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render the icon element when 'hasSearchIcon' is set to true", () => {
    render(<Input hasSearchIcon />);

    const iconElement = screen.queryByTestId("input-icon");
    expect(iconElement).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
