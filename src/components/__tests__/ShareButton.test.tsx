import { render } from "@/utilities";
import { cleanup, screen } from "@testing-library/react";
import ShareButton from "../ui/ShareButton";

describe("ShareButton Component Tests Suite", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render the component properly initially without the tooltip", () => {
    const url = "/sample-blog";
    render(<ShareButton url={url} />);

    const shareBtnWrapper = screen.getByTestId("share-btn-wrapper");
    const shareBtnElement = screen.getByTestId("share-btn");

    expect(shareBtnWrapper).toBeInTheDocument();
    expect(shareBtnElement).toBeInTheDocument();
  });

  it("should show the tooltip when clicked on the share button", async () => {
    const url = "/sample-blog";
    const expectedUrl = "http://localhost:3000/sample-blog";

    const { user } = render(<ShareButton url={url} />);

    const writeTextMock = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue();

    const shareBtnElement = screen.getByTestId("share-btn");

    // clicking on the share button
    await user.click(shareBtnElement);

    const tooltipElement = screen.getByTestId("share-button-tooltip");

    expect(tooltipElement).toBeInTheDocument();
    expect(writeTextMock).toHaveBeenCalledOnce();
    expect(writeTextMock).toHaveBeenCalledWith(expectedUrl);
  });

  // it("should throw error when the clipboard fails", async () => {
  //   const url = "/sample-blog";

  //   const { user } = render(<ShareButton url={url} />);

  //   const writeTextMockFail = vi
  //     .spyOn(navigator.clipboard, "writeText")
  //     .mockRejectedValue({ message: "Failed to copy:" });

  //   // click on the button
  //   const shareBtnElement = screen.getByTestId("share-btn");
  //   await user.click(shareBtnElement);

  //   const tooltipElement = screen.getByTestId("share-button-tooltip");

  //   expect(tooltipElement).not.toBeInTheDocument();
  //   expect(writeTextMockFail).toHaveBeenCalledOnce();
  // });
});
