import type { MetadataRoute } from "next";
import { routes, coinPackages } from "@/lib/content";
import { guides } from "@/lib/guides";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [...routes, ...guides.map(g => `/guides/${g.slug}`), ...coinPackages.map(p => `/store/${p.coins}-oc`), "/privacy", "/terms", "/guidelines"].map((route) => ({ url: `${url}${route}${route === "/" ? "" : "/"}` }));
}
