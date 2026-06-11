import React from "react";

export type SceneConfig = {
  bg: "forest" | "space" | "savanna" | "farm" | "city" | "castle" | "meadow" | "ocean" | "cozy" | "prehistoric";
  char?: "dino" | "dino2" | "rocket" | "lion" | "cow" | "horse" | "duck" | "chicken" | "cat" | "hero" | "princess" | "bee" | "dog" | "turtle" | "fish" | "girl" | "siblings";
  element?: "letter" | "number" | "vowels" | "syllable" | "shape" | "equation" | "celebrate" | "planets" | "color-mix" | "count" | "sharing" | "coral";
  letter?: string;
  number?: number;
  shape?: "circle" | "square" | "triangle" | "rectangle" | "diamond";
  color1?: string;
  color2?: string;
  colorResult?: string;
  equation?: string;
  syllable?: string;
  count?: number;
  label?: string;
  extra?: string;
  mood?: "happy" | "sad" | "excited" | "thinking" | "brave";
};

function Stars({ n = 18, id }: { n?: number; id: string }) {
  const pts = [
    [45,28],[115,55],[195,18],[275,75],[348,38],[78,115],[158,88],[318,145],[38,175],[385,200],
    [95,198],[242,158],[298,248],[168,298],[362,298],[30,260],[212,62],[338,188],[140,162],[58,330],
  ];
  return (
    <g>
      {pts.slice(0, n).map(([cx, cy], i) => (
        <circle key={`${id}-s${i}`} cx={cx} cy={cy} r={i % 3 === 0 ? 2.5 : 1.5} fill="white" opacity={0.7 + (i % 3) * 0.1} />
      ))}
    </g>
  );
}

function Cloud({ cx, cy, scale = 1, op = 0.85 }: { cx: number; cy: number; scale?: number; op?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${cx},${cy}) scale(${s})`} opacity={op}>
      <ellipse cx="0" cy="0" rx="38" ry="22" fill="white" />
      <ellipse cx="-22" cy="4" rx="24" ry="18" fill="white" />
      <ellipse cx="22" cy="4" rx="24" ry="18" fill="white" />
    </g>
  );
}

function Tree({ x, y, scale = 1, col1 = "#15803d", col2 = "#16a34a" }: { x: number; y: number; scale?: number; col1?: string; col2?: string }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <rect x="-9" y="40" width="18" height="60" fill="#92400e" rx="4" />
      <ellipse cx="0" cy="20" rx="38" ry="45" fill={col1} />
      <ellipse cx="-10" cy="10" rx="28" ry="35" fill={col2} />
    </g>
  );
}

function Sun({ cx, cy, r = 38, col = "#fbbf24" }: { cx: number; cy: number; r?: number; col?: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 12} fill={col} opacity={0.3} />
      <circle cx={cx} cy={cy} r={r} fill={col} />
      <circle cx={cx} cy={cy} r={r - 10} fill="#fde68a" />
    </g>
  );
}

// ─── BACKGROUNDS ───────────────────────────────────────────────────────────────
function ForestBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`fsky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#d1fae5" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#fsky-${uid})`} />
      <Sun cx={345} cy={58} />
      <Cloud cx={90} cy={70} scale={0.9} />
      <Cloud cx={280} cy={48} scale={0.75} />
      <Tree x={30} y={240} scale={1.1} />
      <Tree x={360} y={250} scale={0.9} />
      <rect x="0" y="310" width="400" height="90" fill="#15803d" />
      <ellipse cx="200" cy="310" rx="230" ry="22" fill="#22c55e" />
      <ellipse cx="70" cy="309" rx="32" ry="13" fill="#4ade80" />
      <ellipse cx="300" cy="309" rx="28" ry="12" fill="#4ade80" />
    </g>
  );
}

function SpaceBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`spbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#spbg-${uid})`} />
      <Stars n={20} id={uid} />
      <ellipse cx="200" cy="200" rx="180" ry="120" fill="#312e81" opacity="0.12" />
    </g>
  );
}

function SavannaBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`svbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="45%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#svbg-${uid})`} />
      <Sun cx={340} cy={65} col="#f97316" />
      <Cloud cx={100} cy={80} scale={0.8} op={0.6} />
      <rect x="0" y="300" width="400" height="100" fill="#ca8a04" />
      <ellipse cx="200" cy="300" rx="230" ry="20" fill="#eab308" />
      <ellipse cx="80" cy="299" rx="40" ry="14" fill="#fbbf24" />
      <ellipse cx="310" cy="299" rx="35" ry="12" fill="#fbbf24" />
    </g>
  );
}

function FarmBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`fmbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="60%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bbf7d0" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#fmbg-${uid})`} />
      <Sun cx={350} cy={55} r={32} />
      <Cloud cx={120} cy={68} scale={0.85} />
      <ellipse cx="200" cy="280" rx="230" ry="60" fill="#86efac" />
      <rect x="0" y="310" width="400" height="90" fill="#4ade80" />
      {/* Fence */}
      {[30,80,130,180,230,280,330,375].map((x, i) => (
        <rect key={i} x={x} y={290} width={8} height={30} fill="#a3a3a3" rx="2" />
      ))}
      <rect x="28" y="296" width="354" height="7" fill="#a3a3a3" rx="3" />
      <rect x="28" y="309" width="354" height="7" fill="#a3a3a3" rx="3" />
      {/* Barn */}
      <rect x="300" y="210" width="88" height="75" fill="#dc2626" rx="4" />
      <polygon points="296,210 388,210 342,172" fill="#b91c1c" />
      <rect x="328" y="250" width="28" height="35" fill="#92400e" rx="3" />
    </g>
  );
}

function CityBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`ctbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="55%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#ctbg-${uid})`} />
      <Sun cx={55} cy={60} r={30} col="#fde68a" />
      <Cloud cx={250} cy={55} scale={0.8} />
      {/* Buildings */}
      <rect x="0" y="240" width="60" height="160" fill="#475569" rx="4" />
      <rect x="55" y="210" width="45" height="190" fill="#334155" rx="4" />
      <rect x="320" y="220" width="80" height="180" fill="#475569" rx="4" />
      <rect x="348" y="190" width="52" height="210" fill="#334155" rx="4" />
      {/* Windows */}
      {[250,265,280].map((y, r) => [8,22,36].map((x, c) => (
        <rect key={`w${r}${c}`} x={x} y={y} width={10} height={8} fill="#fbbf24" opacity={0.7} rx="1" />
      )))}
      <rect x="0" y="370" width="400" height="30" fill="#1e293b" />
    </g>
  );
}

function CastleBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`csbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#csbg-${uid})`} />
      <Cloud cx={80} cy={70} scale={0.7} />
      <Cloud cx={310} cy={52} scale={0.65} />
      {/* Castle */}
      <rect x="235" y="170" width="150" height="230" fill="#c084fc" rx="6" />
      <rect x="228" y="145" width="30" height="35" fill="#a855f7" />
      <rect x="268" y="145" width="30" height="35" fill="#a855f7" />
      <rect x="308" y="145" width="30" height="35" fill="#a855f7" />
      <rect x="348" y="145" width="30" height="35" fill="#a855f7" />
      <rect x="272" y="240" width="50" height="70" fill="#7e22ce" rx="4" />
      {/* Windows */}
      <circle cx="280" cy="200" r="14" fill="#fbbf24" opacity={0.85} />
      <circle cx="340" cy="200" r="14" fill="#fbbf24" opacity={0.85} />
      <rect x="0" y="330" width="400" height="70" fill="#86efac" />
      <ellipse cx="150" cy="330" rx="200" ry="20" fill="#4ade80" />
      {/* Flowers */}
      {[40,80,120,170,220].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={340} r={7} fill={["#f472b6","#fb923c","#facc15","#f472b6","#a78bfa"][i]} />
          <rect x={x - 1} y={340} width={2} height={18} fill="#15803d" />
        </g>
      ))}
    </g>
  );
}

function MeadowBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`mdbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="55%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#dcfce7" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#mdbg-${uid})`} />
      <Sun cx={340} cy={62} r={34} />
      <Cloud cx={110} cy={75} scale={0.9} />
      <rect x="0" y="305" width="400" height="95" fill="#22c55e" />
      <ellipse cx="200" cy="305" rx="230" ry="18" fill="#4ade80" />
      {[35,75,115,160,200,245,285,330,370].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={313} r={8} fill={["#f472b6","#fb923c","#fbbf24","#a78bfa","#f472b6","#fb923c","#fbbf24","#a78bfa","#f472b6"][i]} />
          <rect x={x-1} y={313} width={2} height={20} fill="#15803d" />
        </g>
      ))}
    </g>
  );
}

function OceanBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`ocbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="40%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#ocbg-${uid})`} />
      {/* Bubbles */}
      {[50,130,220,310,370,90,250,340].map((cx, i) => (
        <circle key={i} cx={cx} cy={[80,40,110,60,130,170,180,200][i]} r={[8,5,6,9,4,7,5,8][i]} fill="white" opacity={0.2} />
      ))}
      {/* Sand bottom */}
      <ellipse cx="200" cy="390" rx="250" ry="40" fill="#fbbf24" opacity={0.7} />
      <rect x="0" y="375" width="400" height="25" fill="#fde68a" opacity={0.6} />
      {/* Coral decorations */}
      <ellipse cx="40" cy="360" rx="15" ry="30" fill="#f43f5e" opacity={0.8} />
      <ellipse cx="55" cy="355" rx="10" ry="22" fill="#fb7185" opacity={0.7} />
      <ellipse cx="360" cy="358" rx="15" ry="28" fill="#f43f5e" opacity={0.8} />
      <ellipse cx="345" cy="362" rx="10" ry="20" fill="#fda4af" opacity={0.7} />
      {/* Light rays */}
      <ellipse cx="200" cy="100" rx="80" ry="180" fill="#7dd3fc" opacity={0.08} />
      <ellipse cx="120" cy="80" rx="40" ry="150" fill="#7dd3fc" opacity={0.06} />
    </g>
  );
}

function CozyBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`czbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#czbg-${uid})`} />
      {/* Floor */}
      <rect x="0" y="330" width="400" height="70" fill="#92400e" rx="0" />
      <rect x="0" y="325" width="400" height="10" fill="#78350f" />
      {/* Wall decor */}
      <rect x="20" y="30" width="100" height="80" fill="white" rx="8" />
      <rect x="24" y="34" width="92" height="72" fill="#bfdbfe" rx="6" />
      <Stars n={6} id={`${uid}w`} />
      {/* Window frame */}
      <rect x="20" y="30" width="100" height="4" fill="#92400e" />
      <rect x="20" y="30" width="4" height="80" fill="#92400e" />
      <rect x="116" y="30" width="4" height="80" fill="#92400e" />
      <rect x="20" y="106" width="100" height="4" fill="#92400e" />
      <rect x="68" y="30" width="4" height="80" fill="#92400e" />
      <rect x="20" y="68" width="100" height="4" fill="#92400e" />
      {/* Bookshelf */}
      <rect x="280" y="180" width="110" height="145" fill="#92400e" rx="4" />
      {["#dc2626","#2563eb","#16a34a","#d97706","#7c3aed","#db2777"].map((c, i) => (
        <rect key={i} x={288 + i * 16} y={190} width={12} height={55} fill={c} rx="2" />
      ))}
      {["#059669","#b45309","#1d4ed8","#be123c","#6d28d9"].map((c, i) => (
        <rect key={i} x={288 + i * 20} y={255} width={15} height={62} fill={c} rx="2" />
      ))}
    </g>
  );
}

function PrehistoricBg({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`phbg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="55%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#phbg-${uid})`} />
      <Sun cx={340} cy={60} r={36} col="#fb923c" />
      <Cloud cx={100} cy={75} scale={0.85} op={0.7} />
      {/* Prehistoric ferns/plants */}
      <g transform="translate(20,260)">
        <path d="M20,80 Q-10,40 -20,0 Q0,20 20,60" fill="#15803d" />
        <path d="M20,80 Q50,40 60,0 Q40,20 20,60" fill="#16a34a" />
        <path d="M20,80 Q10,30 20,0" fill="#15803d" strokeWidth="3" />
      </g>
      <g transform="translate(330,255)">
        <path d="M20,80 Q-10,40 -20,0 Q0,20 20,60" fill="#15803d" />
        <path d="M20,80 Q50,40 60,0 Q40,20 20,60" fill="#16a34a" />
      </g>
      <rect x="0" y="315" width="400" height="85" fill="#15803d" />
      <ellipse cx="200" cy="315" rx="230" ry="20" fill="#22c55e" />
    </g>
  );
}

// ─── CHARACTERS ───────────────────────────────────────────────────────────────
function DinoChar({ cx = 130, cy = 250, col = "#22c55e", dark = "#15803d", accent = "#4ade80", mood = "happy" }: { cx?: number; cy?: number; col?: string; dark?: string; accent?: string; mood?: string }) {
  return (
    <g>
      {/* Tail */}
      <path d={`M${cx - 62},${cy + 22} Q${cx - 90},${cy + 2} ${cx - 106},${cy + 32} Q${cx - 92},${cy + 54} ${cx - 66},${cy + 36} Z`} fill={col} />
      {/* Body */}
      <ellipse cx={cx} cy={cy + 18} rx={62} ry={52} fill={col} />
      {/* Head */}
      <ellipse cx={cx + 65} cy={cy - 30} rx={45} ry={38} fill={col} />
      {/* Spines */}
      <polygon points={`${cx + 22},${cy - 27} ${cx + 33},${cy - 52} ${cx + 43},${cy - 27}`} fill={accent} />
      <polygon points={`${cx + 42},${cy - 32} ${cx + 53},${cy - 58} ${cx + 62},${cy - 32}`} fill={accent} />
      {/* Eye */}
      <circle cx={cx + 80} cy={cy - 38} r={9} fill="white" />
      <circle cx={cx + 82} cy={cy - 38} r={6} fill="#1e293b" />
      <circle cx={cx + 84} cy={cy - 40} r={2} fill="white" />
      {/* Nostril */}
      <ellipse cx={cx + 92} cy={cy - 24} rx={3} ry={4} fill={dark} />
      {/* Mouth */}
      {mood === "happy" && <path d={`M${cx + 72},${cy - 18} Q${cx + 83},${cy - 10} ${cx + 94},${cy - 18}`} stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {mood === "sad" && <path d={`M${cx + 72},${cy - 10} Q${cx + 83},${cy - 18} ${cx + 94},${cy - 10}`} stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {/* Arm */}
      <ellipse cx={cx + 8} cy={cy + 14} rx={20} ry={9} fill={dark} transform={`rotate(-25,${cx + 8},${cy + 14})`} />
      {/* Legs */}
      <ellipse cx={cx - 22} cy={cy + 62} rx={24} ry={14} fill={dark} />
      <ellipse cx={cx + 20} cy={cy + 62} rx={24} ry={14} fill={dark} />
    </g>
  );
}

function RocketChar({ cx = 180, cy = 150 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Body */}
      <rect x={cx - 30} y={cy} width={60} height={120} fill="#ef4444" rx="30" />
      {/* Nose */}
      <ellipse cx={cx} cy={cy} rx={30} ry={20} fill="#dc2626" />
      {/* Window */}
      <circle cx={cx} cy={cy + 45} r={18} fill="#bfdbfe" />
      <circle cx={cx} cy={cy + 45} r={13} fill="#dbeafe" />
      <ellipse cx={cx - 5} cy={cy + 38} rx={6} ry={8} fill="white" opacity={0.5} />
      {/* Fins */}
      <polygon points={`${cx - 30},${cy + 120} ${cx - 55},${cy + 145} ${cx - 30},${cy + 90}`} fill="#dc2626" />
      <polygon points={`${cx + 30},${cy + 120} ${cx + 55},${cy + 145} ${cx + 30},${cy + 90}`} fill="#dc2626" />
      {/* Flames */}
      <ellipse cx={cx} cy={cy + 140} rx={18} ry={22} fill="#fbbf24" opacity={0.9} />
      <ellipse cx={cx - 8} cy={cy + 152} rx={10} ry={16} fill="#f97316" opacity={0.8} />
      <ellipse cx={cx + 8} cy={cy + 152} rx={10} ry={16} fill="#f97316" opacity={0.8} />
      <ellipse cx={cx} cy={cy + 158} rx={6} ry={10} fill="white" opacity={0.7} />
      {/* Stars on side */}
      <polygon points={`${cx + 14},${cy + 72} ${cx + 18},${cy + 80} ${cx + 26},${cy + 80} ${cx + 20},${cy + 86} ${cx + 22},${cy + 94} ${cx + 14},${cy + 89} ${cx + 6},${cy + 94} ${cx + 8},${cy + 86} ${cx + 2},${cy + 80} ${cx + 10},${cy + 80}`} fill="#fbbf24" />
    </g>
  );
}

function LionChar({ cx = 150, cy = 240, mood = "thinking" }: { cx?: number; cy?: number; mood?: string }) {
  return (
    <g>
      {/* Mane */}
      <circle cx={cx} cy={cy - 30} r={52} fill="#f97316" />
      {/* Body */}
      <ellipse cx={cx} cy={cy + 30} rx={58} ry={48} fill="#fbbf24" />
      {/* Head */}
      <circle cx={cx} cy={cy - 30} r={40} fill="#fde68a" />
      {/* Ears */}
      <ellipse cx={cx - 38} cy={cy - 65} rx={12} ry={14} fill="#f97316" />
      <ellipse cx={cx + 38} cy={cy - 65} rx={12} ry={14} fill="#f97316" />
      <ellipse cx={cx - 38} cy={cy - 65} rx={7} ry={9} fill="#fbbf24" />
      <ellipse cx={cx + 38} cy={cy - 65} rx={7} ry={9} fill="#fbbf24" />
      {/* Eyes */}
      <circle cx={cx - 14} cy={cy - 36} r={8} fill="#1e293b" />
      <circle cx={cx + 14} cy={cy - 36} r={8} fill="#1e293b" />
      <circle cx={cx - 12} cy={cy - 38} r={2.5} fill="white" />
      <circle cx={cx + 16} cy={cy - 38} r={2.5} fill="white" />
      {mood === "thinking" && (
        <>
          <path d={`M${cx - 8},${cy - 20} Q${cx},${cy - 14} ${cx + 8},${cy - 20}`} stroke="#92400e" strokeWidth="2" fill="none" />
          {/* Thought bubble */}
          <circle cx={cx + 60} cy={cy - 80} r={25} fill="white" opacity={0.9} />
          <circle cx={cx + 46} cy={cy - 62} r={8} fill="white" opacity={0.8} />
          <circle cx={cx + 38} cy={cy - 52} r={5} fill="white" opacity={0.7} />
        </>
      )}
      {mood === "happy" && <path d={`M${cx - 10},${cy - 18} Q${cx},${cy - 10} ${cx + 10},${cy - 18}`} stroke="#92400e" strokeWidth="2.5" fill="none" />}
      {mood === "sad" && <path d={`M${cx - 10},${cy - 12} Q${cx},${cy - 20} ${cx + 10},${cy - 12}`} stroke="#92400e" strokeWidth="2.5" fill="none" />}
      {/* Nose */}
      <ellipse cx={cx} cy={cy - 22} rx={10} ry={7} fill="#f97316" />
      {/* Tail */}
      <path d={`M${cx + 58},${cy + 30} Q${cx + 90},${cy + 10} ${cx + 88},${cy + 55}`} stroke="#f97316" strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx={cx + 88} cy={cy + 58} rx={10} ry={8} fill="#f97316" />
      {/* Legs */}
      <ellipse cx={cx - 28} cy={cy + 72} rx={20} ry={13} fill="#f59e0b" />
      <ellipse cx={cx + 28} cy={cy + 72} rx={20} ry={13} fill="#f59e0b" />
    </g>
  );
}

function CowChar({ cx = 150, cy = 250 }: { cx?: number; cy?: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={70} ry={55} fill="white" />
      <ellipse cx={cx - 25} cy={cy - 15} rx={22} ry={18} fill="#1e293b" />
      <ellipse cx={cx + 30} cy={cy + 10} rx={18} ry={14} fill="#1e293b" />
      <ellipse cx={cx - 5} cy={cy - 50} rx={45} ry={35} fill="white" />
      <ellipse cx={cx - 25} cy={cy - 60} rx={12} ry={16} fill="white" />
      <ellipse cx={cx + 15} cy={cy - 62} rx={12} ry={16} fill="white" />
      <ellipse cx={cx - 25} cy={cy - 60} rx={8} ry={10} fill="#fda4af" />
      <ellipse cx={cx + 15} cy={cy - 62} rx={8} ry={10} fill="#fda4af" />
      <circle cx={cx - 12} cy={cy - 55} r={7} fill="#1e293b" />
      <circle cx={cx + 8} cy={cy - 55} r={7} fill="#1e293b" />
      <circle cx={cx - 10} cy={cy - 57} r={2} fill="white" />
      <circle cx={cx + 10} cy={cy - 57} r={2} fill="white" />
      <ellipse cx={cx} cy={cy - 42} rx={8} ry={5} fill="#fda4af" />
      <path d={`M${cx - 6},${cy - 38} Q${cx},${cy - 34} ${cx + 6},${cy - 38}`} stroke="#be185d" strokeWidth="2" fill="none" />
      {/* Horns */}
      <path d={`M${cx - 22},${cy - 74} Q${cx - 30},${cy - 90} ${cx - 20},${cy - 82}`} stroke="#f59e0b" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d={`M${cx + 12},${cy - 76} Q${cx + 22},${cy - 92} ${cx + 12},${cy - 84}`} stroke="#f59e0b" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x={cx - 48} y={cy + 48} width={22} height={40} fill="white" rx="8" />
      <rect x={cx + 26} y={cy + 48} width={22} height={40} fill="white" rx="8" />
    </g>
  );
}

function BeeChar({ cx = 180, cy = 200 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Wings */}
      <ellipse cx={cx - 35} cy={cy - 25} rx={30} ry={18} fill="#bfdbfe" opacity={0.85} />
      <ellipse cx={cx + 35} cy={cy - 25} rx={30} ry={18} fill="#bfdbfe" opacity={0.85} />
      <ellipse cx={cx - 30} cy={cy - 10} rx={22} ry={12} fill="#dbeafe" opacity={0.7} />
      <ellipse cx={cx + 30} cy={cy - 10} rx={22} ry={12} fill="#dbeafe" opacity={0.7} />
      {/* Body */}
      <ellipse cx={cx} cy={cy + 15} rx={28} ry={40} fill="#fbbf24" />
      <rect x={cx - 28} y={cy} width={56} height={14} fill="#1e293b" rx="6" />
      <rect x={cx - 28} y={cy + 22} width={56} height={12} fill="#1e293b" rx="5" />
      {/* Head */}
      <circle cx={cx} cy={cy - 22} r={28} fill="#fbbf24" />
      {/* Eyes */}
      <circle cx={cx - 9} cy={cy - 26} r={7} fill="#1e293b" />
      <circle cx={cx + 9} cy={cy - 26} r={7} fill="#1e293b" />
      <circle cx={cx - 7} cy={cy - 28} r={2} fill="white" />
      <circle cx={cx + 11} cy={cy - 28} r={2} fill="white" />
      {/* Smile */}
      <path d={`M${cx - 8},${cy - 12} Q${cx},${cy - 5} ${cx + 8},${cy - 12}`} stroke="#92400e" strokeWidth="2" fill="none" />
      {/* Antennae */}
      <path d={`M${cx - 10},${cy - 48} Q${cx - 20},${cy - 68} ${cx - 26},${cy - 75}`} stroke="#1e293b" strokeWidth="3" fill="none" />
      <circle cx={cx - 26} cy={cy - 77} r={5} fill="#fbbf24" />
      <path d={`M${cx + 10},${cy - 48} Q${cx + 20},${cy - 68} ${cx + 26},${cy - 75}`} stroke="#1e293b" strokeWidth="3" fill="none" />
      <circle cx={cx + 26} cy={cy - 77} r={5} fill="#fbbf24" />
      {/* Stinger */}
      <polygon points={`${cx - 5},${cy + 54} ${cx + 5},${cy + 54} ${cx},${cy + 68}`} fill="#f59e0b" />
    </g>
  );
}

function DogChar({ cx = 150, cy = 250, mood = "happy" }: { cx?: number; cy?: number; mood?: string }) {
  return (
    <g>
      {/* Body */}
      <ellipse cx={cx} cy={cy + 18} rx={62} ry={52} fill="#f59e0b" />
      {/* Tail */}
      <path d={`M${cx + 62},${cy + 20} Q${cx + 92},${cy - 10} ${cx + 80},${cy - 30}`} stroke="#f59e0b" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Head */}
      <circle cx={cx + 12} cy={cy - 28} r={42} fill="#f59e0b" />
      {/* Ears */}
      <ellipse cx={cx - 20} cy={cy - 58} rx={16} ry={26} fill="#d97706" transform={`rotate(-20,${cx - 20},${cy - 58})`} />
      <ellipse cx={cx + 44} cy={cy - 58} rx={16} ry={26} fill="#d97706" transform={`rotate(20,${cx + 44},${cy - 58})`} />
      {/* Eyes */}
      <circle cx={cx - 2} cy={cy - 32} r={9} fill="#1e293b" />
      <circle cx={cx + 26} cy={cy - 32} r={9} fill="#1e293b" />
      <circle cx={cx} cy={cy - 34} r={3} fill="white" />
      <circle cx={cx + 28} cy={cy - 34} r={3} fill="white" />
      {/* Nose muzzle */}
      <ellipse cx={cx + 12} cy={cy - 14} rx={16} ry={12} fill="#fde68a" />
      <ellipse cx={cx + 12} cy={cy - 16} rx={8} ry={5} fill="#1e293b" />
      {mood === "happy" && <path d={`M${cx + 2},${cy - 6} Q${cx + 12},${cy + 2} ${cx + 22},${cy - 6}`} stroke="#92400e" strokeWidth="2.5" fill="none" />}
      {mood === "sad" && <path d={`M${cx + 2},${cy} Q${cx + 12},${cy - 8} ${cx + 22},${cy}`} stroke="#92400e" strokeWidth="2.5" fill="none" />}
      {/* Paws */}
      <ellipse cx={cx - 30} cy={cy + 64} rx={22} ry={14} fill="#d97706" />
      <ellipse cx={cx + 28} cy={cy + 64} rx={22} ry={14} fill="#d97706" />
      {/* Spot on body */}
      <ellipse cx={cx + 20} cy={cy + 28} rx={18} ry={14} fill="#d97706" opacity={0.5} />
    </g>
  );
}

function HeroChar({ cx = 160, cy = 230 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Cape */}
      <path d={`M${cx - 30},${cy - 30} L${cx - 60},${cy + 80} L${cx + 30},${cy + 60} Z`} fill="#dc2626" />
      {/* Body */}
      <rect x={cx - 28} y={cy - 30} width={56} height={80} fill="#1d4ed8" rx="12" />
      {/* Belt */}
      <rect x={cx - 28} y={cy + 28} width={56} height={12} fill="#f59e0b" rx="4" />
      {/* Logo */}
      <polygon points={`${cx},${cy - 18} ${cx + 8},${cy + 2} ${cx - 2},${cy + 2} ${cx + 6},${cy + 18} ${cx - 10},${cy}`} fill="#fbbf24" />
      {/* Head */}
      <circle cx={cx + 2} cy={cy - 55} r={32} fill="#fde68a" />
      {/* Mask */}
      <rect x={cx - 18} y={cy - 68} width={38} height={18} fill="#1d4ed8" rx="8" />
      <circle cx={cx - 8} cy={cy - 60} r={7} fill="#bfdbfe" />
      <circle cx={cx + 16} cy={cy - 60} r={7} fill="#bfdbfe" />
      {/* Smile */}
      <path d={`M${cx - 6},${cy - 38} Q${cx + 2},${cy - 30} ${cx + 10},${cy - 38}`} stroke="#92400e" strokeWidth="2" fill="none" />
      {/* Arms */}
      <ellipse cx={cx - 42} cy={cy + 8} rx={14} ry={28} fill="#1d4ed8" transform={`rotate(-15,${cx - 42},${cy + 8})`} />
      <ellipse cx={cx + 46} cy={cy - 10} rx={14} ry={28} fill="#1d4ed8" transform={`rotate(25,${cx + 46},${cy - 10})`} />
      {/* Fist */}
      <circle cx={cx + 60} cy={cy - 30} r={14} fill="#fde68a" />
      {/* Legs */}
      <rect x={cx - 28} y={cy + 48} width={24} height={50} fill="#1d4ed8" rx="10" />
      <rect x={cx + 4} y={cy + 48} width={24} height={50} fill="#1d4ed8" rx="10" />
    </g>
  );
}

function PrincessChar({ cx = 155, cy = 240 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Dress */}
      <polygon points={`${cx},${cy - 20} ${cx - 75},${cy + 90} ${cx + 75},${cy + 90}`} fill="#c084fc" />
      <ellipse cx={cx} cy={cy + 90} rx={75} ry={15} fill="#a855f7" />
      {/* Dress pattern */}
      {[0.3,0.5,0.7].map((t, i) => (
        <ellipse key={i} cx={cx + (i - 1) * 18} cy={cy + 40 + i * 12} rx={12} ry={8} fill="#e879f9" opacity={0.5} />
      ))}
      {/* Body */}
      <rect x={cx - 20} y={cy - 20} width={40} height={40} fill="#fde68a" rx="8" />
      {/* Head */}
      <circle cx={cx} cy={cy - 52} r={34} fill="#fde68a" />
      {/* Hair */}
      <ellipse cx={cx} cy={cy - 70} rx={36} ry={18} fill="#f59e0b" />
      <ellipse cx={cx - 32} cy={cy - 52} rx={12} ry={30} fill="#f59e0b" />
      <ellipse cx={cx + 32} cy={cy - 52} rx={12} ry={30} fill="#f59e0b" />
      {/* Crown */}
      <polygon points={`${cx - 22},${cy - 83} ${cx - 18},${cy - 100} ${cx - 8},${cy - 90} ${cx},${cy - 105} ${cx + 8},${cy - 90} ${cx + 18},${cy - 100} ${cx + 22},${cy - 83}`} fill="#fbbf24" />
      {[cx - 18, cx, cx + 18].map((x, i) => (
        <circle key={i} cx={x} cy={cy - 86} r={4} fill={["#dc2626","#2563eb","#16a34a"][i]} />
      ))}
      {/* Eyes */}
      <circle cx={cx - 10} cy={cy - 54} r={7} fill="#1e293b" />
      <circle cx={cx + 10} cy={cy - 54} r={7} fill="#1e293b" />
      <circle cx={cx - 8} cy={cy - 56} r={2} fill="white" />
      <circle cx={cx + 12} cy={cy - 56} r={2} fill="white" />
      <path d={`M${cx - 8},${cy - 40} Q${cx},${cy - 33} ${cx + 8},${cy - 40}`} stroke="#be185d" strokeWidth="2" fill="none" />
    </g>
  );
}

function TurtleChar({ cx = 180, cy = 250 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Shell */}
      <ellipse cx={cx} cy={cy} rx={55} ry={45} fill="#15803d" />
      <ellipse cx={cx} cy={cy} rx={45} ry={36} fill="#16a34a" />
      {/* Shell pattern */}
      <ellipse cx={cx} cy={cy - 10} rx={18} ry={14} fill="#22c55e" opacity={0.6} />
      <ellipse cx={cx - 22} cy={cy + 8} rx={14} ry={10} fill="#22c55e" opacity={0.6} />
      <ellipse cx={cx + 22} cy={cy + 8} rx={14} ry={10} fill="#22c55e" opacity={0.6} />
      {/* Head */}
      <ellipse cx={cx + 60} cy={cy - 20} rx={28} ry={22} fill="#4ade80" />
      <circle cx={cx + 72} cy={cy - 26} r={6} fill="#1e293b" />
      <circle cx={cx + 74} cy={cy - 28} r={2} fill="white" />
      <path d={`M${cx + 54},${cy - 10} Q${cx + 65},${cy - 4} ${cx + 76},${cy - 10}`} stroke="#15803d" strokeWidth="2" fill="none" />
      {/* Legs */}
      <ellipse cx={cx - 45} cy={cy - 25} rx={18} ry={10} fill="#4ade80" transform={`rotate(-30,${cx - 45},${cy - 25})`} />
      <ellipse cx={cx - 45} cy={cy + 20} rx={18} ry={10} fill="#4ade80" transform={`rotate(30,${cx - 45},${cy + 20})`} />
      <ellipse cx={cx + 30} cy={cy + 35} rx={18} ry={10} fill="#4ade80" />
      {/* Tail */}
      <path d={`M${cx - 55},${cy} Q${cx - 78},${cy + 10} ${cx - 80},${cy + 25}`} stroke="#4ade80" strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  );
}

function GirlChar({ cx = 155, cy = 240 }: { cx?: number; cy?: number }) {
  return (
    <g>
      {/* Dress */}
      <polygon points={`${cx},${cy - 15} ${cx - 55},${cy + 90} ${cx + 55},${cy + 90}`} fill="#f472b6" />
      {/* Body */}
      <rect x={cx - 18} y={cy - 15} width={36} height={38} fill="#fde68a" rx="6" />
      {/* Head */}
      <circle cx={cx} cy={cy - 48} r={32} fill="#fde68a" />
      {/* Hair */}
      <ellipse cx={cx} cy={cy - 64} rx={34} ry={16} fill="#92400e" />
      <ellipse cx={cx - 30} cy={cy - 48} rx={10} ry={26} fill="#92400e" />
      <ellipse cx={cx + 30} cy={cy - 48} rx={10} ry={26} fill="#92400e" />
      {/* Pigtails */}
      <circle cx={cx - 34} cy={cy - 70} r={8} fill="#f472b6" />
      <circle cx={cx + 34} cy={cy - 70} r={8} fill="#f472b6" />
      {/* Eyes */}
      <circle cx={cx - 10} cy={cy - 50} r={7} fill="#1e293b" />
      <circle cx={cx + 10} cy={cy - 50} r={7} fill="#1e293b" />
      <circle cx={cx - 8} cy={cy - 52} r={2} fill="white" />
      <circle cx={cx + 12} cy={cy - 52} r={2} fill="white" />
      <path d={`M${cx - 8},${cy - 36} Q${cx},${cy - 28} ${cx + 8},${cy - 36}`} stroke="#be185d" strokeWidth="2" fill="none" />
      {/* Arms */}
      <ellipse cx={cx - 36} cy={cy + 12} rx={10} ry={24} fill="#fde68a" transform={`rotate(15,${cx - 36},${cy + 12})`} />
      <ellipse cx={cx + 36} cy={cy + 12} rx={10} ry={24} fill="#fde68a" transform={`rotate(-15,${cx + 36},${cy + 12})`} />
    </g>
  );
}

// ─── EDUCATIONAL ELEMENTS ─────────────────────────────────────────────────────
function LetterBadge({ letter, x = 285, y = 30, col = "#fbbf24", textCol = "#1e293b" }: { letter: string; x?: number; y?: number; col?: string; textCol?: string }) {
  return (
    <g>
      <circle cx={x + 45} cy={y + 45} r={55} fill={col} opacity={0.25} />
      <circle cx={x + 45} cy={y + 45} r={44} fill={col} />
      <text x={x + 45} y={y + 66} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="68" fill={textCol} textAnchor="middle">{letter}</text>
    </g>
  );
}

function NumberBadge({ num, x = 285, y = 30, col = "#6366f1" }: { num: number; x?: number; y?: number; col?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={90} height={90} rx="20" fill={col} opacity={0.2} />
      <rect x={x + 5} y={y + 5} width={80} height={80} rx="16" fill={col} />
      <text x={x + 45} y={y + 62} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="62" fill="white" textAnchor="middle">{num}</text>
    </g>
  );
}

function VowelsBadge({ x = 30, y = 20 }: { x?: number; y?: number }) {
  const vowels = [
    { l: "A", c: "#ef4444" }, { l: "E", c: "#f97316" },
    { l: "I", c: "#eab308" }, { l: "O", c: "#22c55e" }, { l: "U", c: "#6366f1" },
  ];
  return (
    <g>
      {vowels.map((v, i) => (
        <g key={v.l}>
          <circle cx={x + i * 72} cy={y + 45} r={32} fill={v.c} />
          <text x={x + i * 72} y={y + 57} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="38" fill="white" textAnchor="middle">{v.l}</text>
        </g>
      ))}
    </g>
  );
}

function SyllableBadge({ syllable, x = 50, y = 30, col = "#6366f1" }: { syllable: string; x?: number; y?: number; col?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={300} height={80} rx="20" fill={col} opacity={0.15} />
      <rect x={x + 4} y={y + 4} width={292} height={72} rx="16" fill={col} />
      <text x={x + 150} y={y + 58} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="52" fill="white" textAnchor="middle" letterSpacing="6">{syllable}</text>
    </g>
  );
}

function ShapeElement({ shape, x = 240, y = 30, col = "#6366f1" }: { shape: string; x?: number; y?: number; col?: string }) {
  const cx = x + 70; const cy = y + 70;
  return (
    <g>
      <circle cx={cx} cy={cy} r={75} fill={col} opacity={0.15} />
      {shape === "circle" && <circle cx={cx} cy={cy} r={55} fill={col} />}
      {shape === "square" && <rect x={cx - 50} y={cy - 50} width={100} height={100} fill={col} />}
      {shape === "triangle" && <polygon points={`${cx},${cy - 58} ${cx - 52},${cy + 42} ${cx + 52},${cy + 42}`} fill={col} />}
      {shape === "rectangle" && <rect x={cx - 65} y={cy - 38} width={130} height={76} fill={col} />}
      {shape === "diamond" && <polygon points={`${cx},${cy - 60} ${cx + 50},${cy} ${cx},${cy + 60} ${cx - 50},${cy}`} fill={col} />}
    </g>
  );
}

function EquationBadge({ equation, x = 30, y = 20, col = "#6366f1" }: { equation: string; x?: number; y?: number; col?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={340} height={80} rx="20" fill={col} opacity={0.15} />
      <rect x={x + 3} y={y + 3} width={334} height={74} rx="17" fill={col} />
      <text x={x + 170} y={y + 55} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="44" fill="white" textAnchor="middle">{equation}</text>
    </g>
  );
}

function ColorMixBadge({ c1 = "#ef4444", c2 = "#3b82f6", cr = "#8b5cf6", x = 30, y = 20 }: { c1?: string; c2?: string; cr?: string; x?: number; y?: number }) {
  return (
    <g>
      <circle cx={x + 50} cy={y + 55} r={45} fill={c1} />
      <text x={x + 105} y={y + 65} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="50" fill="#1e293b" textAnchor="middle">+</text>
      <circle cx={x + 158} cy={y + 55} r={45} fill={c2} />
      <text x={x + 215} y={y + 65} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="50" fill="#1e293b" textAnchor="middle">=</text>
      <circle cx={x + 268} cy={y + 55} r={45} fill={cr} />
    </g>
  );
}

function CelebrateBadge({ x = 30, y = 30, uid }: { x?: number; y?: number; uid: string }) {
  const items = [
    { cx: 80, cy: 80, col: "#ef4444" }, { cx: 200, cy: 50, col: "#fbbf24" },
    { cx: 320, cy: 75, col: "#6366f1" }, { cx: 140, cy: 40, col: "#22c55e" },
    { cx: 260, cy: 45, col: "#f97316" },
  ];
  return (
    <g>
      {items.map((it, i) => (
        <g key={i}>
          <polygon points={`${it.cx},${it.cy - 14} ${it.cx + 5},${it.cy - 4} ${it.cx + 16},${it.cy - 4} ${it.cx + 7},${it.cy + 4} ${it.cx + 10},${it.cy + 16} ${it.cx},${it.cy + 9} ${it.cx - 10},${it.cy + 16} ${it.cx - 7},${it.cy + 4} ${it.cx - 16},${it.cy - 4} ${it.cx - 5},${it.cy - 4}`} fill={it.col} />
        </g>
      ))}
      <rect x="80" y="110" width="240" height="65" rx="18" fill="#6366f1" opacity={0.9} />
      <text x="200" y="155" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="36" fill="white" textAnchor="middle">PARABENS!</text>
    </g>
  );
}

function PlanetsBadge({ uid }: { uid: string }) {
  return (
    <g>
      <circle cx="60" cy="80" r="20" fill="#e2e8f0" />
      <circle cx="105" cy="70" r="24" fill="#fde68a" />
      <circle cx="158" cy="80" r="18" fill="#4ade80" />
      <circle cx="200" cy="66" r="14" fill="#ef4444" />
      <circle cx="248" cy="56" r="32" fill="#f97316" />
      <ellipse cx="248" cy="56" rx="48" ry="10" fill="none" stroke="#d97706" strokeWidth="3" opacity={0.7} />
      <circle cx="305" cy="70" r="22" fill="#a3e635" />
      <circle cx="348" cy="60" r="17" fill="#22d3ee" />
      <circle cx="385" cy="72" r="13" fill="#818cf8" />
      {/* Labels */}
      {[
        { x: 60, label: "Me" }, { x: 105, label: "Ve" }, { x: 158, label: "Te" },
        { x: 200, label: "Ma" }, { x: 248, label: "Ju" }, { x: 305, label: "Sa" },
        { x: 348, label: "Ur" }, { x: 385, label: "Ne" },
      ].map((p) => (
        <text key={p.label} x={p.x} y={130} fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="#1e293b" textAnchor="middle">{p.label}</text>
      ))}
    </g>
  );
}

function CountDots({ count, col = "#6366f1", x = 50, y = 30 }: { count: number; col?: string; x?: number; y?: number }) {
  const positions: [number, number][] = [];
  const cols = Math.min(5, count);
  const rows = Math.ceil(count / cols);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols && r * cols + c < count; c++) {
      positions.push([x + c * 58, y + r * 58]);
    }
  }
  return (
    <g>
      {positions.map(([px, py], i) => (
        <circle key={i} cx={px + 24} cy={py + 24} r={22} fill={col} opacity={0.9} />
      ))}
      <text x={x + (Math.min(cols, count) * 58) / 2} y={y + rows * 58 + 35} fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="36" fill={col} textAnchor="middle">{count}</text>
    </g>
  );
}

// ─── LABEL ─────────────────────────────────────────────────────────────────────
function SceneLabel({ text, uid }: { text: string; uid: string }) {
  return (
    <g>
      <rect x="20" y="358" width="360" height="36" rx="18" fill="#1e293b" opacity={0.82} />
      <text x="200" y="381" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="15" fill="white" textAnchor="middle">{text}</text>
    </g>
  );
}

// ─── EXTRA OBJECTS ─────────────────────────────────────────────────────────────
function ExtraObject({ extra, uid }: { extra?: string; uid: string }) {
  if (!extra) return null;
  if (extra === "tree-A") return (
    <g>
      <rect x="285" y="220" width="22" height="90" fill="#92400e" rx="5" />
      <ellipse cx="296" cy="195" rx="52" ry="62" fill="#15803d" />
      <ellipse cx="278" cy="182" rx="36" ry="46" fill="#16a34a" />
      <text x="296" y="172" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="28" fill="#fbbf24" textAnchor="middle">A</text>
    </g>
  );
  if (extra === "elephant") return (
    <g>
      <ellipse cx="310" cy="270" rx="60" ry="48" fill="#94a3b8" />
      <ellipse cx="310" cy="225" rx="42" ry="36" fill="#94a3b8" />
      <ellipse cx="290" cy="210" rx="16" ry="22" fill="#94a3b8" />
      <ellipse cx="332" cy="208" rx="16" ry="22" fill="#94a3b8" />
      <path d="M330,248 Q355,268 350,300 Q345,322 335,315" stroke="#94a3b8" strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="300" cy="220" r="6" fill="#1e293b" />
    </g>
  );
  if (extra === "butterfly") return (
    <g>
      <ellipse cx="295" cy="190" rx="38" ry="26" fill="#f472b6" transform="rotate(-30,295,190)" />
      <ellipse cx="340" cy="185" rx="38" ry="26" fill="#a78bfa" transform="rotate(30,340,185)" />
      <ellipse cx="295" cy="235" rx="28" ry="18" fill="#fb923c" transform="rotate(20,295,235)" />
      <ellipse cx="340" cy="232" rx="28" ry="18" fill="#34d399" transform="rotate(-20,340,232)" />
      <ellipse cx="318" cy="212" rx="7" ry="24" fill="#1e293b" />
    </g>
  );
  if (extra === "egg") return (
    <g>
      <ellipse cx="295" cy="255" rx="40" ry="52" fill="#fef9c3" />
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx={280 + (i % 3) * 18} cy={235 + Math.floor(i/3) * 25} r={7} fill={["#f472b6","#fb923c","#a78bfa"][i % 3]} />
      ))}
    </g>
  );
  if (extra === "grapes") return (
    <g>
      {[290,310,330,300,320,310].map((cx, i) => (
        <circle key={i} cx={cx} cy={200 + Math.floor(i/2) * 28} r={18} fill="#7c3aed" />
      ))}
      <rect x="306" y="142" width="8" height="30" fill="#15803d" />
      <path d="M310,142 Q340,120 360,130" stroke="#15803d" strokeWidth="5" fill="none" />
    </g>
  );
  if (extra === "coral") return (
    <g>
      <ellipse cx="260" cy="340" rx="20" ry="50" fill="#f43f5e" opacity={0.9} />
      <ellipse cx="280" cy="330" rx="14" ry="38" fill="#fb7185" opacity={0.8} />
      <ellipse cx="295" cy="345" rx="18" ry="42" fill="#f43f5e" opacity={0.7} />
      {[262,275,290].map((cx,i)=>(
        <circle key={i} cx={cx} cy={290+i*5} r={10} fill={"#fda4af"} opacity={0.9} />
      ))}
    </g>
  );
  return null;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function StoryIllustration({ sceneKey }: { sceneKey: string | null | undefined }) {
  const uid = React.useId().replace(/:/g, "");

  let config: SceneConfig = { bg: "forest" };

  if (sceneKey) {
    try { config = JSON.parse(sceneKey); } catch { /* fall back to default */ }
  }

  const mood = config.mood ?? "happy";

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Background */}
      {config.bg === "forest" && <ForestBg uid={uid} />}
      {config.bg === "space" && <SpaceBg uid={uid} />}
      {config.bg === "savanna" && <SavannaBg uid={uid} />}
      {config.bg === "farm" && <FarmBg uid={uid} />}
      {config.bg === "city" && <CityBg uid={uid} />}
      {config.bg === "castle" && <CastleBg uid={uid} />}
      {config.bg === "meadow" && <MeadowBg uid={uid} />}
      {config.bg === "ocean" && <OceanBg uid={uid} />}
      {config.bg === "cozy" && <CozyBg uid={uid} />}
      {config.bg === "prehistoric" && <PrehistoricBg uid={uid} />}

      {/* Extra objects (behind character) */}
      <ExtraObject extra={config.extra} uid={uid} />

      {/* Character */}
      {(config.char === "dino") && <DinoChar cx={105} cy={235} col="#22c55e" dark="#15803d" accent="#4ade80" mood={mood} />}
      {(config.char === "dino2") && <DinoChar cx={100} cy={230} col="#f97316" dark="#c2410c" accent="#fb923c" mood={mood} />}
      {config.char === "rocket" && <RocketChar cx={175} cy={100} />}
      {config.char === "lion" && <LionChar cx={145} cy={240} mood={mood} />}
      {config.char === "cow" && <CowChar cx={140} cy={250} />}
      {config.char === "bee" && <BeeChar cx={160} cy={210} />}
      {config.char === "dog" && <DogChar cx={140} cy={248} mood={mood} />}
      {config.char === "turtle" && <TurtleChar cx={150} cy={252} />}
      {config.char === "princess" && <PrincessChar cx={145} cy={238} />}
      {config.char === "hero" && <HeroChar cx={145} cy={225} />}
      {config.char === "girl" && <GirlChar cx={145} cy={238} />}

      {/* Educational element */}
      {config.element === "letter" && config.letter && <LetterBadge letter={config.letter} x={260} y={25} />}
      {config.element === "number" && config.number !== undefined && <NumberBadge num={config.number} x={268} y={25} />}
      {config.element === "vowels" && <VowelsBadge x={32} y={20} />}
      {config.element === "syllable" && config.syllable && <SyllableBadge syllable={config.syllable} x={50} y={30} />}
      {config.element === "shape" && config.shape && <ShapeElement shape={config.shape} x={232} y={28} />}
      {config.element === "equation" && config.equation && <EquationBadge equation={config.equation} x={30} y={22} />}
      {config.element === "celebrate" && <CelebrateBadge uid={uid} />}
      {config.element === "planets" && <PlanetsBadge uid={uid} />}
      {config.element === "color-mix" && <ColorMixBadge c1={config.color1} c2={config.color2} cr={config.colorResult} x={30} y={22} />}
      {config.element === "count" && config.count !== undefined && <CountDots count={config.count} x={55} y={30} />}

      {/* Label */}
      {config.label && <SceneLabel text={config.label} uid={uid} />}
    </svg>
  );
}
