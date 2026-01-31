/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  output: "standalone",
  reactStrictMode: false, // Disabled to fix MDX bundle compatibility
  basePath: "",
  // Turbopack is only available in Next.js 15+
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure React is properly resolved during SSR
      config.externals = [
        ...(config.externals || []),
        {
          react: "commonjs react",
          "react-dom": "commonjs react-dom",
        },
      ];
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = withContentlayer(nextConfig);
