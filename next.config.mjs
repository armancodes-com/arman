/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "armancodes.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
