import type { NextConfig } from "next";

/**
 * Production‑ready Next.js configuration.
 * - `reactStrictMode` catches potential bugs early.
 * - `swcMinify` enables the fast SWC minifier.
 * - `output: "standalone"` bundles dependencies for Vercel serverless.
 * - Optionally define `basePath` if you ever need a sub‑folder.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  // basePath: "", // uncomment and set if you deploy under a sub‑path
};

export default nextConfig;
