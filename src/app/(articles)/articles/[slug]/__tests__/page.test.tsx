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

vi.mock("contentlayer/generated", () => ({
  allArticles: [
    {
      slug: "perfectionism-a-path-to-nowhere",
      title: "Perfectionism: A Path to Nowhere",
      publishedAt: "2024-06-17",
      updatedAt: "2024-06-18",
      summary: "Test summary",
      author: "Arman Ahmadi",
      keywords: ["test"],
      ogImage: "/articles/test.png",
      ogDescription: "Test description",
      ogTitle: "Test OG Title",
      ogUrl: "https://armancodes.com/articles/perfectionism-a-path-to-nowhere",
      twitterDescription: "Test description",
      twitterTitle: "Test Twitter Title",
      twitterImage: "/articles/test.png",
      shareLink: "/articles/perfectionism-a-path-to-nowhere",
      canonical: "",
      baseUrl: "https://armancodes.com/",
      body: { code: "<div>MDX</div>", raw: "MDX" },
      isDraft: false,
      tags: ["Perfectionism"],
      hasSeries: false,
      hasSidebarLinks: false,
    },
  ],
}));

describe("Article page", () => {
  it("renders an article for a matching slug", () => {
    render(<Page params={{ slug: "perfectionism-a-path-to-nowhere" }} />);

    expect(
      screen.getByText("Perfectionism: A Path to Nowhere"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("mdx-component")).toBeInTheDocument();
  });
});
