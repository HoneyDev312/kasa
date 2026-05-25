import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s3-eu-west-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
