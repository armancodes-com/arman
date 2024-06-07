/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
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
