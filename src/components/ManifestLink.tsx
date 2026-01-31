"use client";

import { useEffect } from "react";

const MANIFEST_SELECTOR = 'link[rel="manifest"]';

const ensureManifestLink = () => {
  const head = document.head;
  if (!head) {
    return;
  }

  const link = document.querySelector<HTMLLinkElement>(MANIFEST_SELECTOR);
  if (link) {
    link.setAttribute("crossorigin", "use-credentials");
    link.setAttribute("href", "/manifest.webmanifest");
    return;
  }

  const manifestLink = document.createElement("link");
  manifestLink.setAttribute("rel", "manifest");
  manifestLink.setAttribute("href", "/manifest.webmanifest");
  manifestLink.setAttribute("crossorigin", "use-credentials");
  head.appendChild(manifestLink);
};

export { ensureManifestLink };

const ManifestLink = () => {
  useEffect(() => {
    ensureManifestLink();
  }, []);

  return null;
};

export default ManifestLink;
