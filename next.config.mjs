/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',  // Matches all files under _next/static
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000',  // Cache for 1 month, immutable
          },
        ],
      },
    ];
  },
};

export default withContentlayer(nextConfig);
