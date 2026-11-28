"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Shell, TextLink } from "@/components/site";
import { GuideCard } from "@/components/guide-card";
import { Reveal, useCopy, useLanguage, useUi } from "@/components/context";
import { categories, getGuide, guides, type GuideCategory } from "@/lib/guides";

type Sort = "default" | "az" | "za";

export function CinematicBanner({ title, text, label, image = "/images/hero-city.jpg", position = "60% 50%", className = "", intro }: { className?: string; intro?: React.ReactNode; title: string; text: string; label: string; image?: string; position?: string }) {
  return <section className={`cine-banner ${className}`}>
    <div className="cine-banner-art" aria-hidden="true"><Image src={image} alt="" fill priority quality={90} sizes="100vw" style={{ objectPosition: position }}/></div>
    <div className="cine-banner-content wrap">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <span className="section-label">{label}</span>
        {intro}
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </div>
  </section>;
}

export function GuidesPage() {
  const t = useCopy();
  const u = useUi();
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | GuideCategory>("all");
  const [sort, setSort] = useState<Sort>("default");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = guides.filter(guide => (category === "all" || guide.category === category)
      && (!needle || [guide.name[language], guide.name.en, guide.summary[language]].some(text => text.toLowerCase().includes(needle))));
    if (sort === "default") return list;
    const sorted = [...list].sort((a, b) => a.name[language].localeCompare(b.name[language], language));
    return sort === "za" ? sorted.reverse() : sorted;
  }, [query, category, sort, language]);

  const filtered = query !== "" || category !== "all" || sort !== "default";

  return <Shell><main id="main" className="public-page guides-page">
    <CinematicBanner title={u.guides.banner} text={t.pages.guides[1]} label={t.pageIntro}/>
    <section className="section wrap">
      <div className="guide-controls gold-frame" role="search">
        <label className="guide-search"><Search size={18}/><span className="sr-only">{u.guides.searchLabel}</span>
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={u.guides.search}/>
        </label>
        <label className="guide-sort"><span>{u.guides.sortLabel}</span>
          <select value={sort} onChange={e => setSort(e.target.value as Sort)}>
            <option value="default">{u.guides.sortDefault}</option><option value="az">{u.guides.sortAZ}</option><option value="za">{u.guides.sortZA}</option>
          </select>
        </label>
        <div className="guide-filters" role="group" aria-label={u.guides.categoryLabel}>
          {(["all", ...categories] as const).map(key => <button key={key} type="button" aria-pressed={category === key} className={category === key ? "is-active" : ""} onClick={() => setCategory(key)}>{u.guides.categories[key]}</button>)}
        </div>
      </div>
      <p className="guide-count" aria-live="polite">{visible.length} / {guides.length} {u.guides.results}{filtered && <button type="button" onClick={() => { setQuery(""); setCategory("all"); setSort("default"); }}><X size={13}/>{u.guides.clear}</button>}</p>
      {visible.length ? <div className="guide-grid">{visible.map((guide, i) => <GuideCard key={guide.slug} guide={guide} index={guides.indexOf(guide)}/>)}</div>
        : <div className="page-placeholder"><h2>{u.guides.noResults}</h2></div>}
    </section>
  </main></Shell>;
}

export function GuideDetail({ slug }: { slug: string }) {
  const guide = getGuide(slug)!;
  const t = useCopy();
  const u = useUi();
  const { language } = useLanguage();
  const g = u.guides;
  const { image } = guide;
  const others = guides.filter(item => item.slug !== slug).slice(0, 3);
  return <Shell><main id="main" className="public-page guide-detail">
    <CinematicBanner title={guide.name[language]} text={guide.summary[language]} label={g.categories[guide.category]} image={image.src} position={image.position}/>
    <section className="section wrap guide-detail-body">
      <Reveal className="guide-detail-main">
        <p className="guide-planned">{g.plannedNote}</p>
        <h2>{g.role}</h2><p>{guide.role[language]}</p>
        <h2>{g.responsibilities}</h2><ul>{guide.responsibilities[language].map(item => <li key={item}>{item}</li>)}</ul>
        <h2>{g.gameplay}</h2><ul>{guide.gameplay[language].map(item => <li key={item}>{item}</li>)}</ul>
        <h2>{g.requirements}</h2><p className="guide-requirements">{g.requirementsPending}</p>
        <div className="guide-detail-actions"><Link className="button button-primary" href="/community">{t.joinCommunity}<ArrowUpRight size={16}/></Link></div>
      </Reveal>
      <Reveal className="guide-detail-aside">
        <figure className="gold-frame"><Image src={image.src} alt={guide.name[language]} width={image.width} height={image.height} quality={90} sizes="(max-width:900px) 100vw, 480px" style={{ objectPosition: image.position }}/>
          <figcaption>{image.official ? g.officialArt : g.conceptVisual}</figcaption></figure>
        <dl><dt>{g.category}</dt><dd>{g.categories[guide.category]}</dd></dl>
      </Reveal>
    </section>
    <section className="section wrap">
      <span className="section-label">{g.others}</span>
      <AnimatePresence><div className="guide-grid">{others.map(item => <GuideCard key={item.slug} guide={item} index={guides.indexOf(item)}/>)}</div></AnimatePresence>
      <TextLink href="/guides">{g.back}</TextLink>
    </section>
  </main></Shell>;
}
