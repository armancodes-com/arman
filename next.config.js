/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  // Empty turbopack config to silence the warning about webpack config
  // Turbopack is enabled by default in Next.js 16
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
