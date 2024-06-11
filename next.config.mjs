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
        hostname: "miro.medium.com",
        port: "",
        pathname: "/v2/**",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
