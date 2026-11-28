"use client";

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
  return <div className={`loader ${phase === "leaving" ? "loader-leaving" : ""}`} role="status" aria-live="polite" aria-label={label}>
    <div className="loader-glow" aria-hidden="true"><span className="loader-glow-gold"/><span className="loader-glow-red"/></div>
    <div className="loader-particles" aria-hidden="true">{particles.map((p, i) => <i key={i} style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}/>)}</div>
    <div className="loader-center">
      <div className="loader-logo-wrap" aria-hidden="true"><span className="loader-halo"/><div className="loader-logo"><span className="logo-mark">O<span>.</span></span><span className="logo-words">OKAP <b>CITY RP</b></span></div></div>
      <div className="loader-bar" aria-hidden="true"><span/></div>
      <p className="loader-label">{label}</p>
    </div>
  </div>;
}
