import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "example.com",
      "images.rawpixel.com",
    ],
  },
};

export default nextConfig;
