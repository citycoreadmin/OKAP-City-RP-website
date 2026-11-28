import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "OKAP CITY RP | Your City. Your Story.", template: "%s | OKAP CITY RP" },
  description: "Discover OKAP CITY RP, a roleplay world built for the stories you want to tell.",
  openGraph: { title: "OKAP CITY RP", description: "Your City. Your Story. Your Destiny.", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteProvider>{children}</SiteProvider></body></html>;
}
