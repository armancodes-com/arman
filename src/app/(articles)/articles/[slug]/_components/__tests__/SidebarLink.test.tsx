import { render, screen } from "../../../../../../../utilities";
import SidebarLink from "../SidebarLink";

vi.mock("@/hooks/useHash", () => ({
  default: () => "#intro",
}));

const scrollToSectionMock = vi.fn();

vi.mock("@/utils/scroll-into-view", () => ({
  scrollToSection: (section: string) => scrollToSectionMock(section),
}));

describe("SidebarLink Component Tests Suite", () => {
  it("should scroll to the section when hash updates and link is clicked", async () => {
    const { user } = render(<SidebarLink href="#intro">Intro</SidebarLink>);

    expect(scrollToSectionMock).toHaveBeenCalledWith("intro");

    await user.click(screen.getByRole("link", { name: "Intro" }));

    expect(scrollToSectionMock).toHaveBeenCalledWith("intro");
  });
});
