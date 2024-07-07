import { render } from "../../../../utilities";
import { screen } from "@testing-library/react";
import Page from "../about-me/page";

describe("About Me Page Component Tests Suite", () => {
  it("should render the component properly", async () => {
    render(<Page />);
    screen.debug();
  });
});
