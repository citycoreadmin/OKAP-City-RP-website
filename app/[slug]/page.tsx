import { notFound } from "next/navigation";
import { PublicPage } from "@/components/site";
import type { PageKey } from "@/lib/content";

const pages = ["about", "news", "gallery", "factions", "team", "rules", "download", "community", "store", "privacy", "terms", "guidelines"] as const;
export function generateStaticParams() { return pages.map((slug) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages.some(page => page === slug)) notFound();
  return <PublicPage page={slug as PageKey} />;
}
