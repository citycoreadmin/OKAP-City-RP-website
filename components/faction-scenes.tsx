import type { ReactNode } from "react";

type Theme = { sky: [string, string]; glow: string; accent: string };

const themes: Theme[] = [
  { sky: ["#1b2748", "#e0a46a"], glow: "#ffd27a", accent: "#d9b45a" },
  { sky: ["#0b1030", "#2a3a7a"], glow: "#4a7bff", accent: "#ff2d3d" },
  { sky: ["#1b2418", "#c98a4a"], glow: "#ffb35c", accent: "#8a9a5b" },
  { sky: ["#0d1f2d", "#3b6e8f"], glow: "#7fe3ff", accent: "#ff3b3b" },
  { sky: ["#1a1626", "#8a5a4a"], glow: "#ffcf9a", accent: "#c9a24a" },
  { sky: ["#241a34", "#e07a5f"], glow: "#ffb08a", accent: "#7fd4c1" },
  { sky: ["#0c1a2e", "#4b7fb5"], glow: "#9fd0ff", accent: "#6fe0ff" },
  { sky: ["#10192b", "#d9823a"], glow: "#ffc15a", accent: "#ffcc33" },
];

const windows = (seed: number, x: number, w: number, top: number, bottom: number, color: string) => {
  const items: ReactNode[] = [];
  for (let cx = x + 5; cx < x + w - 6; cx += 9)
    for (let cy = top + 8; cy < bottom - 6; cy += 11) {
      const on = ((cx * 7 + cy * 13 + seed * 31) % 5) < 2;
      items.push(<rect key={`${cx}-${cy}`} x={cx} y={cy} width="4" height="6" fill={on ? color : "#0a0d14"} opacity={on ? 0.9 : 0.6} />);
    }
  return items;
};

function Skyline({ seed, glow, far = false }: { seed: number; glow: string; far?: boolean }) {
  const blocks = [0, 38, 80, 118, 160, 205, 245, 290, 330, 372];
  return <g opacity={far ? 0.55 : 1} transform={far ? "translate(0,-26)" : undefined}>
    {blocks.map((x, i) => {
      const h = 90 + ((i * 53 + seed * 37) % 110);
      const w = 34 + ((i * 17 + seed) % 14);
      return <g key={x}>
        <rect x={x} y={250 - h} width={w} height={h + 10} fill={far ? "#1a2238" : "url(#bld)"} />
        <rect x={x + w - 4} y={250 - h} width="4" height={h + 10} fill="#ffffff" opacity=".05" />
        {!far && windows(seed + i, x, w, 250 - h, 250, glow)}
      </g>;
    })}
  </g>;
}

function Person({ x, y, scale = 1, uniform, trim, skin = "#c58c63", hat, vest }: { x: number; y: number; scale?: number | string; uniform: string; trim: string; skin?: string; hat?: string; vest?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="62" rx="18" ry="4" fill="#000" opacity=".45" />
    <path d="M-8 30 L-9 60 L-2 60 L0 38 L2 60 L9 60 L8 30Z" fill="#1a1d27" />
    <path d="M-14 -2 Q-16 -10 -6 -12 L6 -12 Q16 -10 14 -2 L12 34 L-12 34Z" fill={uniform} />
    <path d="M-14 -2 Q-16 -10 -6 -12 L-6 34 L-12 34Z" fill="#fff" opacity=".12" />
    {vest && <path d="M-9 -10 L9 -10 L8 28 L-8 28Z" fill={vest} opacity=".9" />}
    <rect x="-12" y="22" width="24" height="3" fill={trim} />
    <rect x="-3" y="-17" width="6" height="7" fill={skin} />
    <ellipse cx="0" cy="-25" rx="8" ry="9.5" fill={skin} />
    <path d="M-8 -26 Q0 -22 8 -26" fill="#000" opacity=".15" />
    {hat && <path d="M-10 -30 Q0 -42 10 -30 L12 -28 L-12 -28Z" fill={hat} />}
    <circle cx="-9" cy="0" r="3" fill={trim} />
  </g>;
}

function Vehicle({ x, y, body, accent, kind = "sedan", scale = 1, lights }: { x: number; y: number; body: string; accent: string; kind?: "sedan" | "suv" | "van" | "bus"; scale?: number; lights?: [string, string] }) {
  const long = kind === "bus" ? 150 : kind === "van" ? 105 : 90;
  const roofH = kind === "bus" ? 52 : kind === "van" ? 40 : kind === "suv" ? 32 : 26;
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx={long / 2} cy="26" rx={long / 1.7} ry="6" fill="#000" opacity=".55" />
    {lights && <><circle cx={long / 2 - 10} cy={-roofH} r="22" fill={lights[0]} opacity=".25" /><circle cx={long / 2 + 10} cy={-roofH} r="22" fill={lights[1]} opacity=".25" /></>}
    <path d={`M0 18 L0 4 Q2 -2 14 -3 L${long * 0.28} -${roofH} L${long * 0.75} -${roofH} L${long - 8} -3 Q${long} 0 ${long} 6 L${long} 18Z`} fill={body} />
    <path d={`M${long * 0.3} -${roofH - 4} L${long * 0.74} -${roofH - 4} L${long - 14} -4 L14 -4Z`} fill="#0a1220" opacity=".92" />
    <path d={`M${long * 0.3} -${roofH - 4} L${long * 0.5} -${roofH - 4} L${long * 0.38} -4 L14 -4Z`} fill="#fff" opacity=".14" />
    <path d={`M0 6 L${long} 6 L${long} 9 L0 9Z`} fill={accent} />
    <path d={`M0 4 Q${long / 2} -2 ${long} 4`} fill="none" stroke="#fff" strokeWidth="1" opacity=".3" />
    {lights && <><rect x={long / 2 - 16} y={-roofH - 5} width="14" height="5" rx="2" fill={lights[0]} /><rect x={long / 2 + 2} y={-roofH - 5} width="14" height="5" rx="2" fill={lights[1]} /></>}
    <rect x={long - 6} y="5" width="6" height="4" rx="1" fill="#fff6c8" /><rect x="0" y="5" width="5" height="4" rx="1" fill="#ff3340" />
    {[long * 0.22, long * 0.78].map((cx) => <g key={cx}><circle cx={cx} cy="19" r="9" fill="#0b0b0e" /><circle cx={cx} cy="19" r="5" fill="#8d919b" /><circle cx={cx} cy="19" r="2" fill="#2b2d35" /></g>)}
  </g>;
}

function Helicopter({ x, y, body, accent, scale = 1 }: { x: number; y: number; body: string; accent: string; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="-26" rx="70" ry="3" fill="#fff" opacity=".22" />
    <rect x="-2" y="-26" width="4" height="8" fill="#222" />
    <path d="M-34 0 Q-34 -18 -6 -20 Q26 -20 32 -4 L34 8 Q10 14 -30 8Z" fill={body} />
    <path d="M-30 -2 Q-26 -15 -8 -16 L4 -16 L4 -2Z" fill="#9fd4ff" opacity=".85" />
    <path d="M-30 -2 Q-26 -15 -8 -16 L-12 -2Z" fill="#fff" opacity=".3" />
    <path d="M30 -2 L78 -8 L80 -4 L32 6Z" fill={body} />
    <path d="M74 -18 L82 -10 L78 -6Z" fill={accent} />
    <rect x="-24" y="12" width="52" height="3" rx="1.5" fill="#15171d" /><path d="M-14 8 L-16 12M16 8 L18 12" stroke="#15171d" strokeWidth="2" />
    <path d="M-34 4 L34 4" stroke={accent} strokeWidth="2" />
    <path d="M-30 6 L-210 90 L-60 120Z" fill={accent} opacity=".07" />
  </g>;
}

function Landmark({ kind, glow, accent }: { kind: "capitol" | "court" | "tower"; glow: string; accent: string }) {
  if (kind === "tower") return <g>
    <path d="M250 250 L250 70 L300 60 L350 70 L350 250Z" fill="url(#glass)" />
    <path d="M250 70 L300 60 L300 250 L250 250Z" fill="#fff" opacity=".09" />
    {[100, 130, 160, 190, 220].map((yy) => <path key={yy} d={`M250 ${yy} L350 ${yy}`} stroke={accent} strokeWidth=".8" opacity=".5" />)}
    <path d="M300 60 L300 30" stroke={accent} strokeWidth="2" /><circle cx="300" cy="28" r="3" fill="#ff3340" />
  </g>;
  return <g>
    <path d="M230 120 L300 80 L370 120Z" fill="url(#stone)" /><rect x="230" y="120" width="140" height="8" fill="#d8d2c4" />
    {[240, 262, 284, 306, 328, 350].map((cx) => <g key={cx}><rect x={cx} y="128" width="10" height="100" fill="url(#stone)" /><rect x={cx + 7} y="128" width="3" height="100" fill="#000" opacity=".25" /></g>)}
    <rect x="224" y="228" width="152" height="22" fill="#cfc9ba" />
    {kind === "capitol" ? <><ellipse cx="300" cy="78" rx="26" ry="10" fill="#d8d2c4" /><path d="M276 78 Q300 30 324 78Z" fill={glow} opacity=".8" /><path d="M300 36 L300 14 L318 20 L300 26" fill={accent} stroke={accent} /></>
      : <circle cx="300" cy="106" r="7" fill={accent} />}
    <path d="M240 232 L360 232" stroke={glow} strokeWidth="2" opacity=".6" />
  </g>;
}

function Scene({ index }: { index: number }) {
  const th = themes[index];
  const street = <><rect x="0" y="236" width="400" height="64" fill="url(#road)" /><path d="M0 266 L400 266" stroke="#fff" strokeWidth="1.5" strokeDasharray="18 14" opacity=".35" /><rect x="0" y="236" width="400" height="3" fill={th.glow} opacity=".35" /><rect x="0" y="236" width="400" height="64" fill={`url(#reflect${index})`} /></>;
  const bg = <><rect width="400" height="300" fill={`url(#sky${index})`} /><circle cx="320" cy="150" r="90" fill={th.glow} opacity=".18" filter="url(#blur)" /><Skyline seed={index} glow={th.glow} far /><Skyline seed={index + 3} glow={th.glow} /></>;
  const content: ReactNode[] = [
    <><Landmark kind="capitol" glow={th.glow} accent={th.accent} />{street}<Vehicle x={40} y={238} body="#14161c" accent={th.accent} kind="sedan" scale={1.15} /><Person x={170} y={186} uniform="#1d2236" trim={th.accent} /><Person x={200} y={190} scale=".9" uniform="#2b2f45" trim="#fff" skin="#8a5a3c" /></>,
    <>{street}<Vehicle x={30} y={236} body="#f1f3f7" accent="#0e2a6b" kind="suv" scale={1.5} lights={["#ff2233", "#2d6bff"]} /><Person x={250} y={184} scale="1.15" uniform="#1c2b55" trim="#f0c24a" hat="#10183a" vest="#0f1736" /><Person x={300} y={190} scale="1" uniform="#1c2b55" trim="#f0c24a" skin="#7a4a30" hat="#10183a" /></>,
    <>{street}<Helicopter x={250} y={80} body="#3f4a33" accent="#171c12" scale={1.1} /><Vehicle x={20} y={236} body="#56633f" accent="#2a3220" kind="suv" scale={1.5} /><Person x={270} y={186} uniform="#4a5636" trim="#2a3220" hat="#2a3220" scale="1.15" /><Person x={320} y={190} uniform="#4a5636" trim="#2a3220" skin="#8a5a3c" hat="#2a3220" /></>,
    <>{street}<Helicopter x={270} y={70} body="#f4f4f6" accent="#ff3b3b" scale={1} /><Vehicle x={20} y={236} body="#f6f6f8" accent="#e5262e" kind="van" scale={1.5} lights={["#ff2233", "#ffffff"]} /><Person x={230} y={186} uniform="#1f6a4a" trim="#fff" vest="#ff6a3a" scale="1.15" /><Person x={280} y={190} uniform="#1f6a4a" trim="#fff" skin="#7a4a30" /></>,
    <><Landmark kind="court" glow={th.glow} accent={th.accent} />{street}<Vehicle x={30} y={238} body="#1b1b22" accent={th.accent} kind="sedan" scale={1.15} /><Person x={170} y={186} uniform="#16161d" trim={th.accent} /><Person x={200} y={190} uniform="#2b2b35" trim="#fff" skin="#8a5a3c" scale=".92" /></>,
    <>{street}<path d="M200 120 L400 120 L400 236 L200 236Z" fill="#2a1f33" opacity=".9" /><rect x="214" y="136" width="170" height="64" fill={th.glow} opacity=".35" /><path d="M200 120 L400 120 L400 138 L200 138Z" fill={th.accent} opacity=".85" /><Vehicle x={20} y={238} body="#c9553d" accent="#fff" kind="sedan" scale={1.15} /><Person x={240} y={186} uniform="#3d6a8a" trim="#fff" scale="1.15" /><Person x={290} y={188} uniform="#a24a6a" trim="#fff" skin="#7a4a30" /><Person x={335} y={190} uniform="#5a7a4a" trim="#fff" skin="#e0b090" scale=".95" /></>,
    <><Landmark kind="tower" glow={th.glow} accent={th.accent} />{street}<Vehicle x={30} y={238} body="#cfd4de" accent={th.accent} kind="sedan" scale={1.2} /><Person x={200} y={186} uniform="#222a3d" trim={th.accent} scale="1.15" /><Person x={238} y={190} uniform="#3a2a44" trim="#fff" skin="#8a5a3c" /></>,
    <>{street}<Vehicle x={15} y={236} body="#2a6a9a" accent="#fff" kind="bus" scale={1.35} /><Vehicle x={235} y={240} body={th.accent} accent="#15171d" kind="sedan" scale={1.1} /><Person x={355} y={190} uniform="#e0922a" trim="#fff" vest="#f5d33a" /></>,
  ];
  return <svg className="faction-scene" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id={`sky${index}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={th.sky[0]} /><stop offset="1" stopColor={th.sky[1]} /></linearGradient>
      <linearGradient id="bld" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1f2740" /><stop offset="1" stopColor="#0a0d18" /></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a8ec0" /><stop offset=".5" stopColor="#1e3558" /><stop offset="1" stopColor="#0a1426" /></linearGradient>
      <linearGradient id="stone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#bdb7a8" /><stop offset=".6" stopColor="#efe9da" /><stop offset="1" stopColor="#8c8678" /></linearGradient>
      <linearGradient id="road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a2d36" /><stop offset="1" stopColor="#0a0b0f" /></linearGradient>
      <linearGradient id={`reflect${index}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={th.glow} stopOpacity=".18" /><stop offset="1" stopColor={th.glow} stopOpacity="0" /></linearGradient>
      <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".7" /></radialGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="14" /></filter>
    </defs>
    {bg}{content[index]}
    <rect width="400" height="300" fill="url(#vig)" />
  </svg>;
}

export function FactionScene({ index }: { index: number }) {
  return <div className="faction-visual"><Scene index={index % themes.length} /></div>;
}
