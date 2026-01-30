import { render, screen } from "../../../../../../utilities";
import { vi } from "vitest";
import type { ReactNode } from "react";
import Page from "../page";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
}));

vi.mock("next-contentlayer/hooks", () => ({
  useMDXComponent: () => () => <div data-testid="mdx-component" />,
}));

vi.mock("../_components/ArticleHeader", () => ({
  default: ({ title }: { title: ReactNode }) => <div>{title}</div>,
}));

vi.mock("../_components/TagsList", () => ({
  default: () => <div data-testid="tags-list" />,
}));

vi.mock("../_components/ArticleSeries", () => ({
  default: () => <div data-testid="article-series" />,
}));

vi.mock("../_components/SidebarLinks", () => ({
  default: () => <div data-testid="sidebar-links" />,
}));

vi.mock("@/components/ui/Newsletter", () => ({
  default: () => <div data-testid="newsletter" />,
}));

vi.mock("contentlayer/generated");

describe("Article page", () => {
  it("renders an article for a matching slug", () => {
    render(<Page params={{ slug: "perfectionism-a-path-to-nowhere" }} />);

    expect(
      screen.getByText("Perfectionism: A Path to Nowhere"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("mdx-component")).toBeInTheDocument();
  });
});
