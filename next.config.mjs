import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/8e93067/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
