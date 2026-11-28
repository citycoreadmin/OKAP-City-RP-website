import { notFound } from "next/navigation";
import { ProductPage } from "@/components/store";
import { storeSlugs } from "@/lib/store";

export const dynamicParams = false;
export function generateStaticParams() { return storeSlugs.map(slug => ({ package: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ package: string }> }) {
  const slug = (await params).package;
  return { title: storeSlugs.includes(slug) ? `${slug.replace("-oc", "")} OKAP Coins` : "OKAP Coins Store" };
}
export default async function Page({ params }: { params: Promise<{ package: string }> }) {
  const slug = (await params).package;
  const index = storeSlugs.indexOf(slug);
  if (index < 0) notFound();
  return <ProductPage index={index} />;
}
