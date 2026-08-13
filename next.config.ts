import type { NextConfig } from "next";

/**
 * Production‑ready Next.js configuration.
 * - `reactStrictMode` catches potential bugs early.
 * - SWC minification is always on by default in Next.js 15+ (swcMinify removed).
 * - `output: "standalone"` bundles dependencies for Vercel serverless.
 * - Optionally define `basePath` if you ever need a sub‑folder.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
    qualities: [75, 100],
  },
};

export default nextConfig;
