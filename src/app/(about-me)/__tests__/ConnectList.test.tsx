import { render } from "@/utilities";
import { screen } from "@testing-library/react";
import ConnectLinksList from "../_components/ConnectList";
import { COMMUNICATION_LINKS_DATA } from "@/constants/CommunicationLinks.constants";

describe("ConnectList Component Tests Suite", () => {
  it("should render LinkButton components list properly", () => {
    render(<ConnectLinksList />);

    const allLinksElements = screen.getAllByRole("link");

    expect(allLinksElements).toHaveLength(COMMUNICATION_LINKS_DATA.length);

    allLinksElements.forEach((link, index) => {
      expect(link).toHaveAttribute(
        "href",
        COMMUNICATION_LINKS_DATA[index].href,
      );
    });
  });
});
