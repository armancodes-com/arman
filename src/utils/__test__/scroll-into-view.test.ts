import { scrollToSection } from "../scroll-into-view";

describe("Scroll into view helper function Tests suite", () => {
  beforeEach(() => {
    // Reset the hash before each test
    window.location.hash = "";
  });

  it("should scroll to the section and set the window hash if the element exists", () => {
    // mock the element
    const mockElement = {
      scrollIntoView: vi.fn(),
    };

    // mock document.getElementById to return the mock element
    document.getElementById = vi.fn().mockReturnValue(mockElement);

    scrollToSection("test-id");

    expect(document.getElementById).toHaveBeenCalledWith("test-id");
    expect(window.location.hash).toBe("#test-id");
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "smooth",
    });
  });

  it("should do nothing if the element does not exist", () => {
    document.getElementById = vi.fn().mockReturnValue(null);

    scrollToSection("invalid-id");

    expect(document.getElementById).toHaveBeenCalledWith("invalid-id");
    expect(window.location.hash).toBe("");
  });
});
