import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const config: NextConfig = {
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
};

export default config;
