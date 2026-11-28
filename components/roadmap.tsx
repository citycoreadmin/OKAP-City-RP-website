"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Building2, CarFront, Coins, FlaskConical, Rocket, Shield } from "lucide-react";
import type { Language } from "@/lib/content";
import { roadmapPhases, roadmapUpdates, type RoadmapStatus } from "@/lib/roadmap";

export interface RoadmapLabels {
  roadPhase: string;
  roadProgress: string;
  roadTbd: string;
  roadIncludes: string;
  roadStatuses: Record<RoadmapStatus, string>;
  roadUpdatesLabel: string;
  roadUpdatesTitle: string;
  roadNoUpdates: string;
  roadNote: string;
}

const icons = [Building2, CarFront, Shield, Coins, FlaskConical, Rocket];

// Blocks per phase: [x, y, width, depth, height] in px on the 3D platform.
const scenes: number[][][] = [
  [[20, 30, 50, 50, 90], [95, 20, 40, 40, 55], [95, 80, 50, 35, 35], [30, 110, 40, 35, 25]],
  [[15, 20, 150, 22, 10], [15, 70, 150, 22, 10], [30, 25, 40, 12, 22], [100, 75, 50, 14, 18]],
  [[20, 25, 60, 60, 70], [100, 25, 45, 45, 100], [100, 90, 55, 40, 40]],
  [[25, 90, 40, 40, 20], [25, 60, 40, 40, 45], [25, 30, 40, 40, 75], [100, 80, 55, 45, 30]],
  [[20, 20, 55, 55, 50], [95, 20, 55, 55, 85], [55, 95, 70, 40, 30]],
  [[20, 20, 40, 40, 110], [75, 20, 40, 40, 80], [130, 20, 40, 40, 55], [75, 80, 95, 40, 28]],
];

function Visual({ index, image, alt }: { index: number; image: string | null; alt: string }) {
  const Icon = icons[index % icons.length];
  if (image) return <div className="road-visual road-visual-photo"><Image src={image} alt={alt} fill sizes="(max-width:900px) 100vw, 480px"/></div>;
  return <div className="road-visual" aria-hidden="true">
    <div className="road-glow"/>
    <div className="road-scene"><div className="road-stage" style={{ animationDelay: `${-index * 2.2}s` }}>
      <div className="road-platform"/>
      {scenes[index % scenes.length].map(([x, y, w, d, h], k) => <div key={k} className="blk" style={{ left: x, top: y, width: w, height: d, "--h": `${h}px` } as React.CSSProperties}>
        <i className="blk-top" style={{ transform: `translateZ(${h}px)` }}/><i className="blk-front" style={{ height: h }}/><i className="blk-side" style={{ width: h }}/>
      </div>)}
    </div></div>
    <span className="road-icon"><Icon size={22}/></span>
  </div>;
}

export function Roadmap({ language, labels }: { language: Language; labels: RoadmapLabels }) {
  const reduced = useReducedMotion();
  const timeline = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ["start 65%", "end 65%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <>
    <p className="road-note">{labels.roadNote}</p>
    <div className="road-timeline" ref={timeline}>
      <div className="road-line" aria-hidden="true"><motion.span style={{ scaleY: reduced ? 1 : fill }}/></div>
      {roadmapPhases.map((phase, i) => {
        const status = phase.status;
        const progress = status && phase.progress !== null ? Math.min(100, Math.max(0, Math.round(phase.progress))) : null;
        const items = phase.items[language];
        return <motion.article key={phase.id} className={`road-phase ${i % 2 ? "road-right" : "road-left"}`} data-status={status ?? "tbd"}
          initial={reduced ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .65 }}>
          <span className="road-node" aria-hidden="true">{i + 1}</span>
          <div className="road-card">
            <Visual index={i} image={phase.image} alt={phase.title[language]}/>
            <div className="road-body">
              <div className="road-meta"><span>{labels.roadPhase} 0{i + 1}</span><span className={`road-status road-status-${status ?? "tbd"}`}>{status ? labels.roadStatuses[status] : labels.roadTbd}</span></div>
              <h3>{phase.title[language]}</h3>
              <p>{phase.description[language]}</p>
              {items.length > 0 && <ul className="road-items" aria-label={labels.roadIncludes}>{items.map(item => <li key={item}>{item}</li>)}</ul>}
              <div className="road-progress">
                <div className="road-progress-head"><span>{labels.roadProgress}</span><span>{progress === null ? labels.roadTbd : `${progress}%`}</span></div>
                <div className={`road-bar ${progress === null ? "road-bar-tbd" : ""}`} role={progress === null ? undefined : "progressbar"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress ?? undefined}>
                  {progress !== null && <motion.span initial={reduced ? false : { width: 0 }} whileInView={{ width: `${progress}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} style={reduced ? { width: `${progress}%` } : undefined}/>}
                </div>
              </div>
            </div>
          </div>
        </motion.article>;
      })}
    </div>
    <section className="road-updates" aria-labelledby="road-updates-title">
      <span className="section-label">{labels.roadUpdatesLabel}</span>
      <h2 id="road-updates-title">{labels.roadUpdatesTitle}</h2>
      {roadmapUpdates.length === 0 ? <p className="road-empty">{labels.roadNoUpdates}</p> : <div className="road-update-list">{roadmapUpdates.map(update => <article key={update.date + update.title.en} className="road-update">
        <time dir="ltr">{update.date}</time><h3>{update.title[language]}</h3><p>{update.text[language]}</p>
      </article>)}</div>}
    </section>
  </>;
}
