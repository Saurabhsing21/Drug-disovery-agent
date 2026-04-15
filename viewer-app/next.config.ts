import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
