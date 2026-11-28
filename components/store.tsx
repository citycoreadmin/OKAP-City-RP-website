"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Shell, TextLink } from "@/components/site";
import { CinematicBanner } from "@/components/guides";
import { Reveal, useCopy, useLanguage, useUi } from "@/components/context";
import { coinPackages } from "@/lib/content";
import { homeCoins } from "@/lib/ui";
import { availableStoreArt, formatCoins, packageKinds, storeArtFiles, storeSlugs, type PackageKind } from "@/lib/store";

type Coin = { x: number; y: number; s: number };

// Deterministic coin layouts (percent of the stage) so server and client markup match.
function layout(kind: PackageKind, tier: number): Coin[] {
  const coins: Coin[] = [];
  if (kind === "pile") return [{ x: 30, y: 8, s: 26 }, { x: 50, y: 8, s: 26 }, { x: 70, y: 8, s: 26 }, { x: 40, y: 19, s: 26 }, { x: 60, y: 19, s: 26 }, { x: 50, y: 30, s: 26 }];
  if (kind === "stack") {
    [[28, 6], [50, 9], [72, 6]].forEach(([x, count]) => { for (let i = 0; i < count; i++) coins.push({ x, y: 6 + i * 6, s: 30 }); });
    return coins;
  }
  const rows = kind === "bag" ? 4 : kind === "briefcase" ? 5 + (tier > 3 ? 1 : 0) : 7;
  const size = Math.min(22, 88 / ((rows + 1) * 0.95));
  for (let r = 0; r < rows; r++) {
    const count = rows - r + 1;
    for (let i = 0; i < count; i++) coins.push({ x: 50 + (i - (count - 1) / 2) * (size * 0.95), y: 5 + r * size * 0.4, s: size });
  }
  return coins;
}

function CoinHoard({ kind, tier }: { kind: PackageKind; tier: number }) {
  const coins = layout(kind, tier);
  return <div className={`hoard hoard-${kind}`} aria-hidden="true">
    <span className="hoard-glow"/>
    {coins.map((coin, i) => <i key={i} className="hc" style={{ left: `${coin.x}%`, bottom: `${coin.y}%`, width: `${coin.s}%`, zIndex: i }}/>)}
  </div>;
}

export function ProductArt({ index, size = "card" }: { index: number; size?: "card" | "hero" }) {
  const u = useUi();
  const file = storeArtFiles.products[index];
  const hasArt = availableStoreArt().includes(file);
  return <div className={`product-art product-art-${size}`}>
    {hasArt ? <Image src={`/images/store/${file}`} alt={u.store.kinds[packageKinds[index]]} width={1200} height={900} quality={90} sizes={size === "hero" ? "(max-width:900px) 100vw, 640px" : "(max-width:650px) 100vw, 33vw"}/>
      : <><CoinHoard kind={packageKinds[index]} tier={index}/><span className="product-art-note">{u.store.artPending}</span></>}
  </div>;
}

function Price({ price }: { price: string }) {
  return <p className="coin-price" dir="ltr"><span className="coin-currency">$</span><span className="coin-amount">{price}</span><span className="coin-usd">USD</span></p>;
}

export function StorePage({ home = false }: { home?: boolean }) {
  const t = useCopy();
  const u = useUi();
  const [title, description] = t.pages.store;
  const { language } = useLanguage();
  const hc = homeCoins[language];
  const bannerFile = storeArtFiles.banner;
  const hasBanner = availableStoreArt().includes(bannerFile);
  return <Shell><main id="main" className="public-page store-page">
    <CinematicBanner title={u.store.bannerTitle} text={description} label={home ? hc.kicker : t.storeLabel} className={home ? "home-coins" : ""}
      intro={home ? <div className="home-welcome-block"><p className="home-welcome">{hc.welcome}</p><p className="home-welcome-text">{hc.text}</p></div> : undefined}
      image={hasBanner ? `/images/store/${bannerFile}` : "/images/hero-city.jpg"} position={hasBanner ? "50% 50%" : "70% 60%"}/>
    <section className="section wrap">
      <div className="development-notice"><span className="badge">{t.storeSoon}</span><p>{u.store.notice}</p><span className="sr-only">{title}</span></div>
      <div className="coin-grid">{coinPackages.map(({ coins: amount, price }, i) => <Reveal key={amount} className="coin-card gold-frame">
        <div className="coin-card-top"><span>{t.storePackage} 0{i + 1}</span><span className="coin-soon">{t.storeSoon}</span></div>
        <Link href={`/store/${storeSlugs[i]}`} className="coin-stage" aria-label={`${u.store.viewDetails}: ${formatCoins(amount, t.storeSep)} ${t.storeCoin}`}><ProductArt index={i}/></Link>
        <h3><strong>{formatCoins(amount, t.storeSep)}</strong> {t.storeCoin}</h3>
        <p className="coin-kind">{u.store.kinds[packageKinds[i]]}</p>
        <Price price={price}/>
        <Link className="coin-details" href={`/store/${storeSlugs[i]}`}>{u.store.viewDetails}<ArrowUpRight size={15}/></Link>
        <button type="button" className="coin-button" disabled aria-disabled="true">{t.storeSoon}</button>
      </Reveal>)}</div>
    </section>
  </main></Shell>;
}

export function ProductPage({ index }: { index: number }) {
  const t = useCopy();
  const u = useUi();
  const { coins: amount, price } = coinPackages[index];
  const label = `${formatCoins(amount, t.storeSep)} ${t.storeCoin}`;
  const bannerFile = storeArtFiles.banner;
  const hasBanner = availableStoreArt().includes(bannerFile);
  const others = coinPackages.map((_, i) => i).filter(i => i !== index);
  return <Shell><main id="main" className="public-page store-page product-page">
    <CinematicBanner title={label} text={u.store.bannerText} label={`${t.storePackage} 0${index + 1}`}
      image={hasBanner ? `/images/store/${bannerFile}` : "/images/hero-city.jpg"} position={hasBanner ? "50% 50%" : "70% 60%"}/>
    <section className="section wrap product-detail">
      <Reveal className="product-detail-art gold-frame"><ProductArt index={index} size="hero"/></Reveal>
      <Reveal className="product-detail-info">
        <span className="coin-soon">{t.storeSoon}</span>
        <h2>{label}</h2>
        <p className="coin-kind">{u.store.presentation}: {u.store.kinds[packageKinds[index]]}</p>
        <Price price={price}/>
        <button type="button" className="coin-button" disabled aria-disabled="true">{t.storeSoon}</button>
        <p className="product-notice">{u.store.notice}</p>
        <h3>{u.store.about}</h3>
        <p>{u.store.aboutText}</p>
        <h3>{u.store.includes}</h3>
        <p>{label}</p>
      </Reveal>
    </section>
    <section className="section wrap">
      <span className="section-label">{u.store.otherPackages}</span>
      <div className="other-packages">{others.map(i => <Link key={i} className="other-package gold-frame" href={`/store/${storeSlugs[i]}`}><strong>{formatCoins(coinPackages[i].coins, t.storeSep)}</strong><span>{t.storeCoin}</span><em dir="ltr">${coinPackages[i].price}</em></Link>)}</div>
      <TextLink href="/store">{u.store.back}</TextLink>
    </section>
  </main></Shell>;
}
