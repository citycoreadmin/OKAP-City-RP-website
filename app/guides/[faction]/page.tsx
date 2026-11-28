import { notFound } from "next/navigation";
import { GuideDetail } from "@/components/guides";
import { getGuide, guides } from "@/lib/guides";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map(guide => ({ faction: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ faction: string }> }) {
  const guide = getGuide((await params).faction);
  return { title: guide ? `${guide.name.en} Guide` : "Guides" };
}
export default async function Page({ params }: { params: Promise<{ faction: string }> }) {
  const { faction } = await params;
  if (!getGuide(faction)) notFound();
  return <GuideDetail slug={faction} />;
}
