import IconEmail from "@/assets/icons/EmailIcon";
import { render } from "@/utilities";
import LinkButton from "../ui/LinkButton";
import { screen } from "@testing-library/react";

describe("LinkButton Tests Suite Component", () => {
  it("should render the link button properly", () => {
    render(
      <LinkButton
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        href="/articles"
      >
        see all
      </LinkButton>,
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/articles");
  });

  it("should include security attributes for links opening in new tabs", () => {
    render(
      <LinkButton
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        href="/articles"
      >
        see all
      </LinkButton>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should include accessibility attributes for new tab indication", () => {
    render(
      <LinkButton
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        href="/articles"
      >
        see all
      </LinkButton>,
    );

    expect(screen.getByText("(opens in a new tab)")).toHaveClass("sr-only");
  });

  it("should render the link button with icon if it has one", () => {
    render(
      <LinkButton
        href="/articles"
        icon={
          <IconEmail
            data-testid="link-icon"
            className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary"
          />
        }
      >
        see all
      </LinkButton>,
    );

    expect(screen.getByTestId("link-icon")).toBeInTheDocument();
  });

  it("should render the link icon if it is set to true", () => {
    render(
      <LinkButton
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        href="/articles"
        hasLinkIcon
      >
        see all
      </LinkButton>,
    );

    expect(screen.getByTestId("LinkButton-icon")).toBeInTheDocument();
  });
});
