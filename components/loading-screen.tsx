"use client";

import { useEffect, useState } from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + (i % 3),
  duration: 7 + (i % 5) * 1.4,
  delay: -((i * 1.3) % 9),
}));

export function LoadingScreen({ label }: { label: string }) {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const finish = () => setPhase(current => (current === "loading" ? "leaving" : current));
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const cap = window.setTimeout(finish, 4000);
    return () => { window.removeEventListener("load", finish); window.clearTimeout(cap); };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = window.setTimeout(() => setPhase("done"), 1000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;
  return <div className={`loader ${phase === "leaving" ? "loader-leaving" : ""}`} role="status" aria-live="polite" aria-label={label}>
    <div className="loader-glow" aria-hidden="true"><span className="loader-glow-gold"/><span className="loader-glow-red"/></div>
    <div className="loader-particles" aria-hidden="true">{particles.map((p, i) => <i key={i} style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}/>)}</div>
    <div className="loader-center">
      <div className="loader-logo" aria-hidden="true"><span className="logo-mark">O<span>.</span></span><span className="logo-words">OKAP <b>CITY RP</b></span></div>
      <div className="loader-bar" aria-hidden="true"><span/></div>
      <p className="loader-label">{label}</p>
    </div>
  </div>;
}
