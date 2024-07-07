import { render } from "../../../utilities";
import ThemeProvider from "../ThemeProvider";
import Footer from "../ui/Footer";

describe("Footer Component Tests Suite", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("should render the footer properly", () => {
    render(<Footer />);
  });

  it("should render the footer's logo src correct when theme is set to dark", () => {
    render(
      <ThemeProvider forcedTheme="dark">
        <Footer />
      </ThemeProvider>,
    );
  });
});
