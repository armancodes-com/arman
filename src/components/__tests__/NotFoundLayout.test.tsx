import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import NotFoundLayout from "../ui/NotFoundLayout";

describe("NotFoundLayout Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(
      <NotFoundLayout
        title="error"
        subTitle="not found"
        buttonLink="/"
        buttonTitle="take me back to home"
      />,
    );
    const wrapperElement = screen.getByTestId("not-found-wrapper");
    expect(wrapperElement).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/error/i);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
