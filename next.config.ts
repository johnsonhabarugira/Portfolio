import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["134.209.255.41"],
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
