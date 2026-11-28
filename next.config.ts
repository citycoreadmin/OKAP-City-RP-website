import type { NextConfig } from "next";
import { existsSync, readdirSync } from "node:fs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const storeDir = "public/images/store";
const storeArt = existsSync(storeDir) ? readdirSync(storeDir).filter(file => /\.(jpe?g|png|webp)$/i.test(file)) : [];

const config: NextConfig = {
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_STORE_ART: JSON.stringify(storeArt) },
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
};

export default config;
