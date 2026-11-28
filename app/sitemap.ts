import type { MetadataRoute } from "next";
import { routes } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [...routes, "/privacy", "/terms", "/guidelines"].map((route) => ({ url: `${url}${route}` }));
}
