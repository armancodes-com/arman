import { render } from "../../../utilities";
import ManifestLink, { ensureManifestLink } from "../ManifestLink";

describe("ManifestLink", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  it("adds a manifest link with credentials when missing", () => {
    ensureManifestLink();
    const manifestLink = document.querySelector('link[rel="manifest"]');

    expect(manifestLink).toBeTruthy();
    expect(manifestLink).toHaveAttribute("href", "/manifest.webmanifest");
    expect(manifestLink).toHaveAttribute("crossorigin", "use-credentials");
  });

  it("updates an existing manifest link to use credentials", () => {
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = "/old.webmanifest";
    document.head.appendChild(link);

    ensureManifestLink();

    const manifestLink = document.querySelector('link[rel="manifest"]');
    expect(manifestLink).toHaveAttribute("href", "/manifest.webmanifest");
    expect(manifestLink).toHaveAttribute("crossorigin", "use-credentials");
  });

  it("renders without crashing", () => {
    render(<ManifestLink />);
    const manifestLink = document.querySelector('link[rel="manifest"]');
    expect(manifestLink).toBeTruthy();
    expect(manifestLink).toHaveAttribute("href", "/manifest.webmanifest");
    expect(manifestLink).toHaveAttribute("crossorigin", "use-credentials");
  });
});
