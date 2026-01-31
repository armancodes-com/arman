import { render, screen } from "@/utilities";
import { vi, describe, it, expect } from "vitest";
import MdxWrapper from "../MdxWrapper";

// Mock the fonts module
vi.mock("@/app/fonts", () => ({
  alexandria: { className: "alexandria-font" },
}));

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

// Shared simple valid MDX code that returns a default export
const SIMPLE_MDX_CODE = `
  return {
    default: function TestComponent({ components }) {
      const { h1, h2, h3, h4, h5, h6, a, Link } = components;
      return React.createElement('div', { 'data-testid': 'mdx-content' }, 
        React.createElement(h1, { children: 'Test Heading 1' }),
        React.createElement(h2, { children: 'Test Heading 2' }),
        React.createElement(h3, { children: 'Test Heading 3' }),
        React.createElement(h4, { children: 'Test Heading 4' }),
        React.createElement(h5, { children: 'Test Heading 5' }),
        React.createElement(h6, { children: 'Test Heading 6' }),
        React.createElement(a, { href: '/internal', children: 'Internal Link' }),
        React.createElement(a, { href: 'https://example.com', children: 'External Link' }),
        React.createElement(Link, { href: '#section', children: 'Hash Link' })
      );
    }
  };
`;

describe("MdxWrapper Component Tests Suite", () => {

  it("should render the MDX wrapper component with proper styling classes", () => {
    const { container } = render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    const wrapper = container.querySelector("div");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).toContain("prose");
    expect(wrapper?.className).toContain("alexandria-font");
  });

  it("should render all heading levels (h1-h6) using HeadingProps type", () => {
    render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    // These headings should be rendered through the components object with HeadingProps
    expect(screen.getByText("Test Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Test Heading 2")).toBeInTheDocument();
    expect(screen.getByText("Test Heading 3")).toBeInTheDocument();
    expect(screen.getByText("Test Heading 4")).toBeInTheDocument();
    expect(screen.getByText("Test Heading 5")).toBeInTheDocument();
    expect(screen.getByText("Test Heading 6")).toBeInTheDocument();
  });

  it("should render internal links with Next.js Link component", () => {
    render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    const internalLink = screen.getByText("Internal Link");
    expect(internalLink).toBeInTheDocument();
    expect(internalLink.getAttribute("href")).toBe("/internal");
  });

  it("should render external links without aria-label attribute", () => {
    render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    const externalLink = screen.getByText("External Link");
    expect(externalLink).toBeInTheDocument();
    expect(externalLink.getAttribute("target")).toBe("_blank");
    expect(externalLink.getAttribute("rel")).toBe("noopener noreferrer");
    // Verify aria-label is NOT present (accessibility improvement)
    expect(externalLink.getAttribute("aria-label")).toBeNull();
  });

  it("should render hash links as internal links", () => {
    render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    const hashLink = screen.getByText("Hash Link");
    expect(hashLink).toBeInTheDocument();
    expect(hashLink.getAttribute("href")).toBe("#section");
  });

  it("should load Prism CSS stylesheet using PRISM_ONE_DARK_CSS_PATH constant", () => {
    // Render component which triggers useEffect
    render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    // Check if stylesheet link was added to document
    const stylesheetLink = document.querySelector(
      'link[id="one-dark-theme-style"]',
    );
    expect(stylesheetLink).toBeInTheDocument();
    expect(stylesheetLink?.getAttribute("href")).toBe("/prism/one-dark.css");
    expect(stylesheetLink?.getAttribute("rel")).toBe("stylesheet");
  });

  it("should handle getMDXComponent with proper scope parameter", () => {
    // Test that the component renders without errors using the new Function scope approach
    const { container } = render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    const mdxContent = container.querySelector('[data-testid="mdx-content"]');
    expect(mdxContent).toBeInTheDocument();
  });

  it("should render correctly on rerender with the same code", () => {
    const { rerender } = render(<MdxWrapper code={SIMPLE_MDX_CODE} />);

    // First render should work
    expect(screen.getByText("Test Heading 1")).toBeInTheDocument();

    // Rerender with same code should still render correctly
    rerender(<MdxWrapper code={SIMPLE_MDX_CODE} />);
    expect(screen.getByText("Test Heading 1")).toBeInTheDocument();
  });

  it("should render successfully with React internals polyfill (happy path)", () => {
    // This test verifies that the component renders correctly when React internals behave as expected
    const codeWithSimpleComponent = `
      return {
        default: function TestComponent() {
          return React.createElement('div', { 'data-testid': 'simple-test' }, 'Error handled');
        }
      };
    `;

    const { container } = render(<MdxWrapper code={codeWithSimpleComponent} />);
    expect(
      container.querySelector('[data-testid="simple-test"]'),
    ).toBeInTheDocument();
  });

  it("should handle React internals polyfill errors without crashing", () => {
    // This test verifies that the component doesn't crash even if React internals change
    // or the evaluated MDX code throws. The try-catch in getMDXComponent should handle
    // any errors gracefully.
    const codeWithError = `
      return {
        default: function BrokenComponent() {
          throw new Error('Simulated React internals failure');
        }
      };
    `;

    // Rendering should not throw, even though the component itself throws when invoked.
    // The error-handling in getMDXComponent is expected to catch this.
    const { container } = render(<MdxWrapper code={codeWithError} />);

    // We only assert that the render completed and a container exists; specific fallback UI,
    // if any, is handled within MdxWrapper and is not asserted here to avoid coupling to implementation details.
    expect(container).toBeTruthy();
  });
});
