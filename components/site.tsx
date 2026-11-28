"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, Globe2, Menu, Play, Shield, Sparkles, X } from "lucide-react";
import { coinPackages, copy, languages, routes, type Language, type PageKey } from "@/lib/content";
import { FactionScene } from "@/components/faction-scenes";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });
function useCopy() { const { language } = useContext(LanguageContext); return copy[language]; }

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = localStorage.getItem("okap-language");
    if (saved === "en" || saved === "fr" || saved === "ht" || saved === "ar") setLanguage(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("okap-language", language);
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

function Logo() {
  return <Link href="/" className="logo" aria-label="OKAP CITY RP home"><span className="logo-mark">O<span>.</span></span><span className="logo-words">OKAP <b>CITY RP</b></span></Link>;
}

const socialAccounts = [
  { name: "TikTok", href: "https://www.tiktok.com/@themooo5?_r=1&_t=ZP-9BlWoFDvEY3" },
  { name: "Instagram", href: "https://www.instagram.com/okapcityrp509?fqnt=MWc0aWJwMHNubDd3Zg%3D%3D&utm_source=qr" },
  { name: "X", href: "https://x.com/woobensplug?s=11" },
  { name: "YouTube", href: "https://youtube.com/@okapcityrp?si=KQy-T5c1XXvZ5O-9" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "TikTok") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25F4EE" d="M16.6 2h-3.7v13.6a2.8 2.8 0 1 1-2.8-2.8c.4 0 .8.1 1.1.2V9.2a6.7 6.7 0 1 0 5.4 6.5V8.8a8.6 8.6 0 0 0 5 1.6V6.7A4.9 4.9 0 0 1 16.6 2Z" transform="translate(-.6 0)"/></svg>;
  if (name === "Instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.8" r="1.2" fill="currentColor"/></svg>;
  if (name === "X") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.8h1.7L7.3 4H5.5l12.3 15.8Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0033"/><path d="m10 9 5 3-5 3z" fill="white"/></svg>;
}

function SocialLinks({ className }: { className: string }) {
  return <div className={className} aria-label="Official social media">{socialAccounts.map(account => <a key={account.name} href={account.href} target="_blank" rel="noopener noreferrer" aria-label={`${account.name} — OKAP CITY RP`} title={account.name}><SocialIcon name={account.name}/></a>)}</div>;
}

function Header() {
  const t = useCopy();
  const { language, setLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  return <header className="header">
    <div className="header-inner">
      <Logo />
      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {routes.map((route, i) => <Link key={route} href={route} aria-current={pathname === route ? "page" : undefined} onClick={() => setOpen(false)}>{t.nav[i]}</Link>)}
        <SocialLinks className="mobile-socials"/>
      </nav>
      <div className="header-actions">
        <SocialLinks className="header-socials"/>
        <label className="language-select"><Globe2 size={15}/><span className="sr-only">{t.language}</span><select value={language} onChange={(e) => setLanguage(e.target.value as Language)}>{Object.entries(languages).map(([key, value]) => <option value={key} key={key}>{value}</option>)}</select></label>
        <Link href="/community" className="header-cta">{t.communityCTA} <ArrowUpRight size={15}/></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.close : t.menu}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}

function Footer() {
  const t = useCopy();
  return <footer className="footer"><div className="footer-top wrap">
    <div className="footer-brand"><Logo/><p>{t.footerText}</p><span className="footer-coordinates">{t.officialWebsite} &nbsp; / &nbsp; OKAP CITY RP</span><SocialLinks className="footer-socials"/></div>
    <div><h3>{t.navigation}</h3>{[1, 2, 4, 7].map(i => <Link key={routes[i]} href={routes[i]}>{t.nav[i]}</Link>)}</div>
    <div><h3>{t.community}</h3><Link href="/community">{t.join}</Link><Link href="/team">{t.nav[5]}</Link></div>
    <div><h3>{t.legal}</h3><Link href="/privacy">{t.privacy}</Link><Link href="/terms">{t.terms}</Link><Link href="/guidelines">{t.guidelines}</Link></div>
  </div><div className="footer-bottom wrap"><span>© 2026 OKAP CITY RP. {t.rights}</span><span>{t.brandSlogan}</span></div></footer>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return <><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .65 }}>{children}</motion.div>;
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children} <span><ArrowUpRight size={16}/></span></Link>;
}

const factionPhotos: Record<number, { src: string; width: number; height: number }> = {
  0: { src: "/images/president.jpg", width: 1199, height: 1312 },
  1: { src: "/images/police.jpg", width: 1122, height: 1402 },
  2: { src: "/images/army.jpg", width: 1122, height: 1402 },
  3: { src: "/images/medics.jpg", width: 1122, height: 1402 },
  8: { src: "/images/fbi.jpg", width: 1199, height: 1312 },
};

function FactionCards({ limit }: { limit?: number }) {
  const t = useCopy();
  return <div className="faction-grid">{t.factions.slice(0, limit).map(([name, description], i) => {
    const photo = factionPhotos[i];
    return <Reveal key={name} className={photo ? "faction-card faction-card-photo" : "faction-card"}>
      <div className="faction-card-top"><span>0{i + 1} / OKAP CITY</span><ArrowUpRight size={18}/></div>
      {photo ? <figure className="faction-photo"><Image src={photo.src} alt={name} width={photo.width} height={photo.height} quality={90} sizes="(max-width:650px) 100vw, (max-width:1100px) 50vw, 33vw"/><figcaption>{t.conceptVisual}</figcaption></figure> : <FactionScene index={i}/>}
      <div><h3>{name}</h3><p>{description}</p></div>
    </Reveal>;
  })}</div>;
}

function DiscordMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.7 5.2a18.7 18.7 0 0 0-4.6-1.4l-.6 1.2a17 17 0 0 0-5 0l-.6-1.2a18.6 18.6 0 0 0-4.6 1.4C1.4 9.4.6 13.5 1 17.6a18.6 18.6 0 0 0 5.7 2.9l1.2-2a11.8 11.8 0 0 1-1.9-.9l.5-.4a13.3 13.3 0 0 0 11 0l.5.4a11.8 11.8 0 0 1-1.9.9l1.2 2a18.5 18.5 0 0 0 5.7-2.9c.5-4.8-.8-8.8-3.3-12.4ZM8.7 14.8c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm6.6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/></svg>;
}

const discordLinks = [
  "https://discord.gg/nw7PWS4grJ",
  "https://discord.gg/vYhbuZVmTG",
  "https://discord.gg/WEzAZvc3aU",
  "https://discord.gg/v2JFTjGHc8",
];
const flags = ["🇭🇹", "🇺🇸", "🇫🇷", "🇸🇦"];

function CommunityCards() {
  const t = useCopy();
  return <div className="community-grid">{t.discordCommunities.map(([country, community, language], index) => <Reveal className="community-card" key={country}>
    <div className="community-card-top"><span className="community-flag" aria-hidden="true">{flags[index]}</span><span className="community-language">{language}</span></div>
    <div><span className="community-country">{country}</span><h3>{community}</h3></div>
    <a className="community-button" href={discordLinks[index]} target="_blank" rel="noopener noreferrer"><DiscordMark/>{t.joinCommunity}<ArrowUpRight size={16}/></a>
  </Reveal>)}</div>;
}

function SocialCards() {
  const t = useCopy();
  return <div className="social-grid">{socialAccounts.map(account => <Reveal className="social-card" key={account.name}>
    <a href={account.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.followButton} on ${account.name} — OKAP CITY RP`}>
      <span className={`social-card-icon social-${account.name.toLowerCase()}`}><SocialIcon name={account.name}/></span>
      <span className="social-card-platform">{account.name}</span>
      <span className="social-card-action">{t.followButton}<ArrowUpRight size={16}/></span>
    </a>
  </Reveal>)}</div>;
}

export function Home() {
  const t = useCopy();
  return <Shell><main id="main">
    <section className="hero">
      <div className="hero-art" aria-hidden="true"><Image src="/images/hero-city.jpg" alt="" fill priority quality={90} sizes="100vw" className="hero-photo"/></div><div className="hero-noise" aria-hidden="true"/>
      <div className="hero-side" aria-hidden="true"><span>OKAP CITY RP</span><span>{t.officialWebsite}</span></div>
      <div className="hero-content wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="hero-eyebrow"><span className="red-line"/>{t.eyebrow}<span className="eyebrow-index"> / 01</span></div>
          <p className="hero-welcome">{t.welcome}</p><h1>OKAP CITY<span>RP<span className="hero-period">.</span></span></h1>
          <p className="hero-tagline">{t.tagline}</p><p className="hero-intro">{t.intro}</p>
          <div className="hero-buttons"><Link className="button button-primary" href="/community">{t.communityCTA}<ArrowUpRight size={17}/></Link><Link className="button button-outline" href="/download">{t.download}<ArrowDown size={16}/></Link></div>
          <div className="hero-secondary"><span><Play size={13} fill="currentColor"/> {t.trailerPending}</span><span className="secondary-divider"/><Link href="/community">{t.join}</Link></div>
        </motion.div>
      </div>
      <div className="hero-bottom wrap"><a href="#world"><span className="scroll-icon"><ArrowDown size={15}/></span>{t.scroll}</a><span className="hero-status"><i/> {t.online}</span><span className="hero-number">01 — 06</span></div>
    </section>
    <div className="ticker" aria-hidden="true"><div>{t.tagline} <span>✦</span> OKAP CITY RP <span>✦</span> {t.tagline} <span>✦</span> OKAP CITY RP <span>✦</span></div></div>
    <section id="world" className="section world-section wrap">
      <Reveal className="world-copy"><span className="section-label">{t.aboutLabel}</span><h2>{t.aboutTitle}<br/><em>{t.aboutAccent}</em></h2><p>{t.aboutText}</p><TextLink href="/about">{t.explore}</TextLink></Reveal>
      <Reveal className="world-image"><div className="image-cross">+</div><div className="image-caption"><span>OKAP CITY RP</span><span>{t.conceptArt}</span></div><div className="image-frame-text">{t.imageFrame[0]}<br/>{t.imageFrame[1]}<span>.</span></div></Reveal>
    </section>
    <section className="section feature-section"><div className="wrap"><Reveal><span className="section-label">{t.featureLabel}</span><div className="section-heading"><h2>{t.featureTitle}</h2><span className="heading-number">01 — 03</span></div></Reveal>
      <div className="features">{t.features.map(([title, description], i) => <Reveal key={title} className="feature"><div className="feature-icon">{[<Compass key="compass"/>, <Sparkles key="sparkles"/>, <Shield key="shield"/>][i]}<span>0{i + 1}</span></div><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
    </div></section>
    <section className="section faction-section wrap"><Reveal><span className="section-label">{t.factionLabel}</span><div className="section-heading"><div><h2>{t.factionTitle}</h2><p>{t.factionText}</p></div><TextLink href="/factions">{t.allFactions}</TextLink></div></Reveal><FactionCards limit={6}/></section>
    <section className="section news-section"><div className="wrap"><Reveal><span className="section-label">{t.newsLabel}</span><div className="section-heading"><h2>{t.newsTitle}</h2><TextLink href="/news">{t.viewNews}</TextLink></div></Reveal><Reveal className="news-empty"><span className="news-date">OKAP CITY RP</span><div><span className="badge">{t.underDevelopment}</span><h3>{t.developmentText}</h3><Link className="news-community-link" href="/community">{t.joinCommunity} <ArrowUpRight size={15}/></Link></div><ArrowUpRight size={24}/></Reveal></div></section>
    <section className="section trailer-section wrap"><Reveal><span className="section-label">{t.trailerLabel}</span><div className="section-heading"><div><h2>{t.trailerLabel}</h2><p>{t.trailerIntro}</p></div><TextLink href="/community">{t.joinCommunity}</TextLink></div></Reveal><Reveal className="trailer-frame"><span className="badge">{t.coming}</span><span className="trailer-wordmark">OKAP CITY RP</span><span className="trailer-note">{t.trailerPending}</span></Reveal></section>
    <section className="section gallery-section wrap"><Reveal><span className="section-label">{t.galleryLabel}</span><div className="section-heading"><div><h2>{t.galleryTitle}</h2><p>{t.galleryText}</p></div><TextLink href="/gallery">{t.nav[3]}</TextLink></div></Reveal><Reveal className="gallery-preview"><span>OKAP CITY RP / {t.conceptArt}</span><span className="gallery-play" aria-hidden="true">{t.coming}</span><span>{t.trailerPending}</span></Reveal></section>
    <section className="community-section"><div className="community-art" aria-hidden="true"/><div className="wrap community-inner"><Reveal><span className="section-label">{t.communityLabel}</span><h2>{t.communityTitle}<br/><em>{t.communityAccent}</em></h2><p>{t.communityText}</p><h3 className="community-section-title">{t.communitySectionTitle}</h3><p>{t.communitySectionIntro}</p></Reveal><CommunityCards/></div></section>
    <section className="section social-section wrap"><Reveal><span className="section-label">{t.followUs}</span><div className="section-heading"><div><h2>{t.followTitle}</h2><p>{t.followText}</p></div></div></Reveal><SocialCards/></section>
  </main></Shell>;
}

function Coin({ size }: { size: number }) {
  return <div className="coin-scene" style={{ "--coin-size": `${size}px` } as React.CSSProperties} aria-hidden="true">
    <div className="coin">
      {Array.from({ length: 9 }, (_, k) => <i key={k} className="coin-layer" style={{ transform: `translateZ(${(k - 4) * 1.6}px)` }}/>)}
      <b className="coin-face coin-front"><span>OC</span></b>
      <b className="coin-face coin-back"><span>OC</span></b>
    </div>
  </div>;
}

function formatCoins(amount: number, separator: string) {
  return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

function CoinStore() {
  const t = useCopy();
  return <>
    <div className="development-notice"><span className="badge">{t.storeSoon}</span><p>{t.storeNotice}</p></div>
    <div className="coin-grid">{coinPackages.map(({ coins: amount, price }, i) => <Reveal key={amount} className="coin-card">
      <div className="coin-card-top"><span>{t.storePackage} 0{i + 1}</span><span className="coin-soon">{t.storeSoon}</span></div>
      <div className="coin-stage"><Coin size={96 + i * 9}/></div>
      <h3><strong>{formatCoins(amount, t.storeSep)}</strong> {t.storeCoin}</h3>
      <p className="coin-price" dir="ltr"><span className="coin-currency">$</span><span className="coin-amount">{price}</span><span className="coin-usd">USD</span></p>
      <button type="button" className="coin-button" disabled aria-disabled="true">{t.storeSoon}</button>
    </Reveal>)}</div>
  </>;
}

export function PublicPage({ page }: { page: PageKey }) {
  const t = useCopy();
  const [title, description] = t.pages[page];
  return <Shell><main id="main" className="public-page">
    <section className="page-hero"><div className="page-hero-art" aria-hidden="true"/><div className="wrap page-hero-content"><span className="section-label">{t.pageIntro}</span><h1>{title}</h1><p>{description}</p></div></section>
    <section className="section wrap page-content">
      {page === "factions" ? <FactionCards/> : page === "store" ? <CoinStore/> : page === "community" ? <><div className="development-notice"><span className="badge">{t.underDevelopment}</span><p>{t.developmentText}</p></div><CommunityCards/></> : page === "download" ? <div className="platform-grid">{["iOS", "Android", "Windows", "macOS"].map((platform, i) => <div className="platform-card" key={platform}><div className="platform-top"><span>{t.platform} / 0{i + 1}</span><ArrowUpRight size={18}/></div><h2>{platform}</h2><div className="platform-status"><span>{t.availability}</span><strong>{t.coming}</strong></div><p>{t.unavailable}</p><Link className="news-community-link" href="/community">{t.joinCommunity} <ArrowUpRight size={15}/></Link></div>)}</div> : page === "news" || page === "gallery" ? <div className="page-placeholder"><span className="placeholder-index">{t.underDevelopment}</span><h2>{page === "news" ? t.newsTitle : t.galleryTitle}<span>.</span></h2><p>{page === "news" ? t.developmentText : `${description} ${t.trailerIntro}`}</p><Link className="news-community-link" href="/community">{t.joinCommunity} <ArrowUpRight size={15}/></Link></div> : <div className="page-placeholder"><span className="placeholder-index">OKAP CITY RP</span><h2>{t.coming}<span>.</span></h2><p>{description}</p></div>}
      <TextLink href="/">{t.back}</TextLink>
    </section>
  </main></Shell>;
}
