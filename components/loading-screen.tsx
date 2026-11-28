"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 4000;
const MAX_DISPLAY_MS = 7000;

const particles = Array.from({ length: 30 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 3 + (i % 4),
  duration: 7 + (i % 5) * 1.4,
  delay: -((i * 1.3) % 9),
}));

export function LoadingScreen({ label }: { label: string }) {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimum = reduced ? 1500 : MIN_DISPLAY_MS;
    let minimumElapsed = false;
    let pageLoaded = document.readyState === "complete";
    const finish = () => setPhase(current => (current === "loading" ? "leaving" : current));
    const check = () => { if (minimumElapsed && pageLoaded) finish(); };
    const onLoad = () => { pageLoaded = true; check(); };
    const minTimer = window.setTimeout(() => { minimumElapsed = true; check(); }, minimum);
    const capTimer = window.setTimeout(finish, MAX_DISPLAY_MS);
    if (!pageLoaded) window.addEventListener("load", onLoad, { once: true });
    return () => { window.removeEventListener("load", onLoad); window.clearTimeout(minTimer); window.clearTimeout(capTimer); };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = window.setTimeout(() => setPhase("done"), 600);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;
  const logo = "/images/okap-logo-transparent.webp";
  const logoUrl = `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}${logo})`;
  return <div className={`loader ${phase === "leaving" ? "loader-leaving" : ""}`} role="status" aria-live="polite" aria-label={label}>
    <div className="loader-smoke" aria-hidden="true"><span/><span/><span/></div>
    <div className="loader-particles" aria-hidden="true">{particles.map((p, i) => <i key={i} style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}/>)}</div>
    <div className="loader-center">
      <div className="ld-stage" aria-hidden="true" style={{ "--logo-url": logoUrl } as React.CSSProperties}>
        <span className="ld-halo"/>
        <span className="ld-ring ld-ring-outer"/>
        <span className="ld-ring ld-ring-dash"/>
        <span className="ld-ring ld-ring-red"/>
        <span className="ld-ring ld-ring-streak"/>
        <span className="ld-ring ld-ring-streak ld-ring-streak-2"/>
        <div className="ld-logo">
          <Image className="ld-logo-img" src={logo} alt="" width={717} height={729} priority sizes="(max-width:767px) 200px, 280px"/>
          <span className="ld-sweep"/>
          <span className="ld-spark ld-spark-1"/><span className="ld-spark ld-spark-2"/><span className="ld-spark ld-spark-3"/>
        </div>
      </div>
      <div className="loader-bar" aria-hidden="true"><span/></div>
      <p className="loader-label">{label}</p>
    </div>
  </div>;
}
