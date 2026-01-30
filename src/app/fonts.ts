import localFont from "next/font/local";

const ubuntu = localFont({
  src: [{ path: "./fonts/placeholder.woff2", weight: "400" }],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  preload: false,
});

const firaCode = localFont({
  src: [{ path: "./fonts/placeholder.woff2", weight: "400" }],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
  adjustFontFallback: false,
  preload: false,
});

const alexandria = localFont({
  src: [{ path: "./fonts/placeholder.woff2", weight: "400" }],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  preload: false,
});

const quantico = localFont({
  src: [{ path: "./fonts/placeholder.woff2", weight: "400" }],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  preload: false,
});

export { ubuntu, firaCode, alexandria, quantico };
