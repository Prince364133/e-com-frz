import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/freeze-hack",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
