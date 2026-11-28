import { coinPackages } from "@/lib/content";

export type PackageKind = "pile" | "stack" | "bag" | "briefcase" | "container";

export const packageKinds: PackageKind[] = ["pile", "stack", "bag", "briefcase", "briefcase", "container"];

export const storeSlugs = coinPackages.map(pkg => `${pkg.coins}-oc`);

// Product renders and the vehicle banner activate automatically when these
// files exist in public/images/store (detected at build time by next.config.ts).
export const storeArtFiles = {
  banner: "store-banner-vehicle.jpg",
  products: ["coins-100-pile.jpg", "coins-500-stack.jpg", "coins-1000-bag.jpg", "coins-2500-briefcase.jpg", "coins-5000-briefcase-open.jpg", "coins-10000-container.jpg"],
};

export function availableStoreArt(): string[] {
  try { return JSON.parse(process.env.NEXT_PUBLIC_STORE_ART || "[]"); } catch { return []; }
}

export function formatCoins(amount: number, separator: string) {
  return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

// Provisional custom-package pricing; change the rate here only.
export const customCoins = { pricePerCoin: 0.01, min: 100, max: 50000 };

export function customTotal(amount: number) {
  return (Math.round(amount * customCoins.pricePerCoin * 100) / 100).toFixed(2);
}
