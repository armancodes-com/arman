import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import Header from "../ui/Header";

describe("Header Component Tests Suite", () => {
  it("should render the header component", () => {
    render(<Header title="Work" />);
  });

  it("should render the header component with the corresponding title", () => {
    render(<Header title="Work" />);

    const titleElement = screen.getByTestId("header-text");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(/work/i);
  });

  it("should render the link if there is a href and linkText props", () => {
    render(<Header title="Work" href="/work" linkText="see work" />);

    const linkElement = screen.getByRole("link", { name: /see work/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/work");
  });
});
