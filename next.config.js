/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
