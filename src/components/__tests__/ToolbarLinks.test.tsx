import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import ToolbarLinks from "../Navigation/ToolbarLinks";
import { toolbarLinks } from "@/constants/toolbarlinks.constants";

describe("ToolbarLinks Component Test Suite", () => {
  it("should render the ToolbarLinks component properly", () => {
    render(<ToolbarLinks links={toolbarLinks} />);

    const toolbarLinksSidebarWrapper = screen.getByTestId(
      "toolbar-lins-wrapper",
    );

    expect(toolbarLinksSidebarWrapper).toBeInTheDocument();
  });

  it("should render as much link as it is in the links array given to the component", () => {
    render(<ToolbarLinks links={toolbarLinks} />);

    const linkElements = screen.getAllByRole("link");

    expect(linkElements).toHaveLength(toolbarLinks.length);

    linkElements.forEach((link, index) => {
      expect(link).toHaveAttribute("href", toolbarLinks[index].href);
    });
  });
});
