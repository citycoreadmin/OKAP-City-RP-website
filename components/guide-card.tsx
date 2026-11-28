"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, useLanguage, useUi } from "@/components/context";
import type { Guide } from "@/lib/guides";

export function GuideCard({ guide, index }: { guide: Guide; index: number }) {
  const { language } = useLanguage();
  const u = useUi();
  const { image } = guide;
  return <Reveal className="guide-card gold-frame">
    <Link href={`/guides/${guide.slug}`} className="guide-card-media" aria-label={`${u.guides.readMore}: ${guide.name[language]}`}>
      <Image src={image.src} alt={guide.name[language]} width={image.width} height={image.height} quality={90} sizes="(max-width:650px) 100vw, (max-width:1100px) 50vw, 33vw" style={{ objectPosition: image.position }}/>
      <span className="guide-card-index">0{index + 1}</span>
      <span className="guide-card-tag">{u.guides.categories[guide.category]}</span>
    </Link>
    <div className="guide-card-body">
      <h3>{guide.name[language]}</h3>
      <p>{guide.summary[language]}</p>
      <Link className="guide-read-more" href={`/guides/${guide.slug}`}>{u.guides.readMore}<ArrowUpRight size={15}/></Link>
    </div>
  </Reveal>;
}
