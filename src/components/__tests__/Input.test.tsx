import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import Input from "../Inputs/Input";

describe("Input Component Tests Suite", () => {
  it("should render the input component properly without icon initially", () => {
    render(<Input />);

    const iconElement = screen.queryByTestId("input-icon");
    screen.debug();
    expect(iconElement).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
