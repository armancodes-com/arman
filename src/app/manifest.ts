import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arman Ahmadi - Backend Engineer",
    short_name: "Arman Ahmadi",
    description:
      "Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7127ba",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/dark-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/dark-logo-1000px.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
