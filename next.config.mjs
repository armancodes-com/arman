/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abolfazlcodes.github.io",
        port: "",
        pathname: "/arman/**",
      },
    ],
  },
};

export default nextConfig;
