// Premium 2D illustrated SVG sticker components for Decoração Criativa.
// Each sticker is a React component returning a scaled SVG.
// Items without furniture SVGs fall back to the existing premium PNG registry.
import { ilustracao } from "@/data/neuro-treino/objetos";

export type StickerDef = {
  id: string;
  label: string;
  /** natural aspect ratio width */
  nw: number;
  /** natural aspect ratio height */
  nh: number;
  /** "lg" ~90-110px, "md" ~60-72px, "sm" ~40-48px in longest dimension */
  tier: "sm" | "md" | "lg";
  render: (w: number, h: number) => React.ReactNode;
};

// ─── helper: resolved pixel size from tier + natural proportions ─────────────
const TIER_MAX: Record<string, number> = { sm: 46, md: 68, lg: 100 };
export function stickerSize(s: StickerDef): { w: number; h: number } {
  const max = TIER_MAX[s.tier] ?? 68;
  const scale = max / Math.max(s.nw, s.nh);
  return { w: Math.round(s.nw * scale), h: Math.round(s.nh * scale) };
}

// ─── Reusable SVG primitives ──────────────────────────────────────────────────
const DROP = (
  <defs>
    <filter id="ds" x="-15%" y="-15%" width="130%" height="145%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.18" />
    </filter>
  </defs>
);

// ─── SVG sticker catalogue ────────────────────────────────────────────────────
export const STICKER_REGISTRY: Record<string, StickerDef> = {

  // ── BEDROOM ──────────────────────────────────────────────────────────────

  cama: {
    id: "cama", label: "Cama", nw: 140, nh: 88, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 140 88" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* legs */}
          <rect x="10" y="64" width="9" height="20" rx="3" fill="#8B5E3C"/>
          <rect x="121" y="64" width="9" height="20" rx="3" fill="#8B5E3C"/>
          {/* headboard */}
          <rect x="2" y="4" width="136" height="62" rx="10" fill="#C8834A"/>
          <rect x="10" y="12" width="120" height="46" rx="7" fill="#E8B87E"/>
          {/* arch detail */}
          <ellipse cx="70" cy="18" rx="42" ry="10" fill="#D4955A" opacity=".5"/>
          {/* base */}
          <rect x="2" y="44" width="136" height="30" rx="5" fill="#C8834A"/>
          {/* mattress */}
          <rect x="5" y="42" width="130" height="28" rx="7" fill="#F5EFE0"/>
          {/* duvet */}
          <rect x="5" y="50" width="130" height="20" rx="6" fill="#7CC8E3"/>
          <rect x="5" y="56" width="130" height="3" rx="1.5" fill="#5AADCA" opacity=".8"/>
          <rect x="5" y="62" width="130" height="3" rx="1.5" fill="#5AADCA" opacity=".5"/>
          {/* pillows */}
          <rect x="14" y="41" width="48" height="16" rx="6" fill="#fff" stroke="#D9CEBF" strokeWidth="1.5"/>
          <ellipse cx="38" cy="49" rx="12" ry="3" fill="#EDE3D5" opacity=".5"/>
          <rect x="78" y="41" width="48" height="16" rx="6" fill="#fff" stroke="#D9CEBF" strokeWidth="1.5"/>
          <ellipse cx="102" cy="49" rx="12" ry="3" fill="#EDE3D5" opacity=".5"/>
        </g>
      </svg>
    ),
  },

  armario: {
    id: "armario", label: "Armário", nw: 82, nh: 120, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 82 120" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* feet */}
          <rect x="6" y="112" width="10" height="8" rx="2" fill="#7A4A28"/>
          <rect x="66" y="112" width="10" height="8" rx="2" fill="#7A4A28"/>
          {/* body */}
          <rect x="2" y="4" width="78" height="112" rx="6" fill="#C8834A"/>
          {/* crown molding */}
          <rect x="0" y="4" width="82" height="8" rx="3" fill="#A06430"/>
          <rect x="2" y="6" width="78" height="4" rx="2" fill="#E8B87E"/>
          {/* left door */}
          <rect x="6" y="16" width="32" height="92" rx="4" fill="#E0A860"/>
          <rect x="8" y="18" width="28" height="88" rx="3" fill="#E8B87E" opacity=".6"/>
          {/* left door handle */}
          <rect x="35" y="58" width="5" height="14" rx="2.5" fill="#9E6B3A"/>
          {/* right door */}
          <rect x="44" y="16" width="32" height="92" rx="4" fill="#E0A860"/>
          <rect x="46" y="18" width="28" height="88" rx="3" fill="#E8B87E" opacity=".6"/>
          {/* right door handle */}
          <rect x="42" y="58" width="5" height="14" rx="2.5" fill="#9E6B3A"/>
          {/* center divider */}
          <rect x="39" y="12" width="4" height="100" fill="#A06430"/>
          {/* mirror on right door */}
          <rect x="48" y="24" width="24" height="36" rx="3" fill="#B0D4F0" opacity=".7"/>
          <rect x="50" y="26" width="8" height="4" rx="1" fill="#fff" opacity=".5"/>
          {/* hang rod hint left door */}
          <line x1="10" y1="62" x2="38" y2="62" stroke="#9E6B3A" strokeWidth="1.5" strokeDasharray="3 2"/>
        </g>
      </svg>
    ),
  },

  gaveteiro: {
    id: "gaveteiro", label: "Gaveteiro", nw: 90, nh: 80, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 90 80" fill="none">
        {DROP}
        <g filter="url(#ds)">
          <rect x="4" y="2" width="82" height="74" rx="6" fill="#C8834A"/>
          <rect x="4" y="2" width="82" height="8" rx="3" fill="#A06430"/>
          {/* 3 drawers */}
          {[14, 35, 56].map((y, i) => (
            <g key={i}>
              <rect x="10" y={y} width="70" height="18" rx="4" fill="#E0A860"/>
              <rect x="12" y={y+2} width="66" height="14" rx="3" fill="#E8B87E" opacity=".5"/>
              <rect x="40" y={y+6} width="10" height="6" rx="3" fill="#9E6B3A"/>
            </g>
          ))}
          {/* legs */}
          <rect x="10" y="72" width="10" height="8" rx="2" fill="#7A4A28"/>
          <rect x="70" y="72" width="10" height="8" rx="2" fill="#7A4A28"/>
        </g>
      </svg>
    ),
  },

  luminaria: {
    id: "luminaria", label: "Luminária", nw: 48, nh: 110, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 48 110" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* shade */}
          <path d="M6 26 L42 26 L34 6 L14 6 Z" fill="#F5D88A" stroke="#D4AA40" strokeWidth="1.5"/>
          <path d="M6 26 L42 26 L34 10 L14 10 Z" fill="#FDE68A" opacity=".6"/>
          {/* bulb glow */}
          <ellipse cx="24" cy="26" rx="10" ry="4" fill="#FFF9C4" opacity=".8"/>
          {/* pole */}
          <rect x="22" y="26" width="4" height="70" rx="2" fill="#9CA3AF"/>
          {/* base */}
          <ellipse cx="24" cy="100" rx="18" ry="6" fill="#6B7280"/>
          <ellipse cx="24" cy="98" rx="16" ry="5" fill="#9CA3AF"/>
          {/* joint */}
          <circle cx="24" cy="60" r="5" fill="#6B7280"/>
        </g>
      </svg>
    ),
  },

  espelho: {
    id: "espelho", label: "Espelho", nw: 60, nh: 100, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 60 100" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* frame */}
          <rect x="2" y="2" width="56" height="82" rx="8" fill="#C8834A"/>
          {/* mirror glass */}
          <rect x="8" y="8" width="44" height="70" rx="5" fill="#B8D4E8"/>
          <rect x="10" y="10" width="14" height="20" rx="3" fill="#D4E8F5" opacity=".7"/>
          <line x1="10" y1="30" x2="52" y2="70" stroke="#C8E0F0" strokeWidth="0.8" opacity=".4"/>
          {/* stand */}
          <path d="M22 84 L38 84 L34 98 L26 98 Z" fill="#A06430"/>
          <rect x="16" y="96" width="28" height="4" rx="2" fill="#7A4A28"/>
        </g>
      </svg>
    ),
  },

  tapete: {
    id: "tapete", label: "Tapete", nw: 120, nh: 60, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 120 60" fill="none">
        <g>
          <ellipse cx="60" cy="30" rx="56" ry="26" fill="#E07850"/>
          <ellipse cx="60" cy="30" rx="48" ry="20" fill="#F09060"/>
          <ellipse cx="60" cy="30" rx="36" ry="14" fill="#E07850"/>
          <ellipse cx="60" cy="30" rx="24" ry="8" fill="#F09060"/>
          <ellipse cx="60" cy="30" rx="10" ry="4" fill="#E07850"/>
          {/* fringe left */}
          {[0,1,2,3,4].map(i => (
            <line key={i} x1={4+i*2} y1="28" x2={0+i*2} y2="60" stroke="#C05830" strokeWidth="1.5" opacity=".7"/>
          ))}
          {/* fringe right */}
          {[0,1,2,3,4].map(i => (
            <line key={i} x1={110+i*2} y1="28" x2={112+i*2} y2="60" stroke="#C05830" strokeWidth="1.5" opacity=".7"/>
          ))}
        </g>
      </svg>
    ),
  },

  // ── LIVING ROOM ───────────────────────────────────────────────────────────

  sofa: {
    id: "sofa", label: "Sofá", nw: 150, nh: 80, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 150 80" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* back */}
          <rect x="4" y="20" width="142" height="40" rx="10" fill="#E8855A"/>
          {/* cushion ridge */}
          <rect x="10" y="28" width="40" height="28" rx="7" fill="#F09870"/>
          <rect x="55" y="28" width="40" height="28" rx="7" fill="#F09870"/>
          <rect x="100" y="28" width="40" height="28" rx="7" fill="#F09870"/>
          {/* seat base */}
          <rect x="4" y="52" width="142" height="20" rx="6" fill="#D07048"/>
          {/* armrests */}
          <rect x="0" y="30" width="14" height="42" rx="6" fill="#C05838"/>
          <rect x="136" y="30" width="14" height="42" rx="6" fill="#C05838"/>
          {/* legs */}
          <rect x="14" y="68" width="8" height="12" rx="3" fill="#7A4A28"/>
          <rect x="48" y="68" width="8" height="12" rx="3" fill="#7A4A28"/>
          <rect x="84" y="68" width="8" height="12" rx="3" fill="#7A4A28"/>
          <rect x="118" y="68" width="8" height="12" rx="3" fill="#7A4A28"/>
          {/* back cushions */}
          <rect x="10" y="12" width="40" height="22" rx="7" fill="#F09870"/>
          <rect x="55" y="12" width="40" height="22" rx="7" fill="#F09870"/>
          <rect x="100" y="12" width="40" height="22" rx="7" fill="#F09870"/>
        </g>
      </svg>
    ),
  },

  poltrona: {
    id: "poltrona", label: "Poltrona", nw: 88, nh: 78, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 88 78" fill="none">
        {DROP}
        <g filter="url(#ds)">
          <rect x="4" y="22" width="80" height="36" rx="8" fill="#7C9CF0"/>
          <rect x="10" y="28" width="68" height="26" rx="6" fill="#92AEF8"/>
          <rect x="4" y="50" width="80" height="18" rx="6" fill="#6080D8"/>
          <rect x="0" y="28" width="14" height="40" rx="6" fill="#5870C8"/>
          <rect x="74" y="28" width="14" height="40" rx="6" fill="#5870C8"/>
          <rect x="10" y="10" width="68" height="20" rx="6" fill="#92AEF8"/>
          <rect x="16" y="64" width="8" height="14" rx="3" fill="#4A5A9A"/>
          <rect x="64" y="64" width="8" height="14" rx="3" fill="#4A5A9A"/>
        </g>
      </svg>
    ),
  },

  tv: {
    id: "tv", label: "TV", nw: 110, nh: 88, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 110 88" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* screen frame */}
          <rect x="2" y="2" width="106" height="66" rx="6" fill="#1F2937"/>
          {/* screen */}
          <rect x="6" y="6" width="98" height="58" rx="4" fill="#1A3A5C"/>
          {/* screen content */}
          <rect x="8" y="8" width="94" height="54" rx="3" fill="#1E5080"/>
          <rect x="8" y="8" width="30" height="16" rx="2" fill="#2A6A9A" opacity=".8"/>
          <rect x="12" y="14" width="8" height="4" rx="1" fill="#5AADE0" opacity=".7"/>
          <line x1="8" y1="40" x2="102" y2="40" stroke="#2A6A9A" strokeWidth="0.5"/>
          {/* screen glare */}
          <rect x="10" y="10" width="20" height="8" rx="2" fill="#FFFFFF" opacity=".08"/>
          {/* stand neck */}
          <rect x="48" y="68" width="14" height="10" rx="2" fill="#374151"/>
          {/* stand base */}
          <rect x="28" y="76" width="54" height="8" rx="4" fill="#374151"/>
          {/* power light */}
          <circle cx="96" cy="62" r="2" fill="#4ADE80"/>
        </g>
      </svg>
    ),
  },

  estante: {
    id: "estante", label: "Estante", nw: 78, nh: 118, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 78 118" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* main body */}
          <rect x="2" y="2" width="74" height="114" rx="4" fill="#C8834A"/>
          {/* back panel */}
          <rect x="6" y="6" width="66" height="106" rx="2" fill="#E8D5B8"/>
          {/* shelves */}
          {[28, 52, 76, 100].map((y, i) => (
            <rect key={i} x="6" y={y} width="66" height="5" rx="1" fill="#A06430"/>
          ))}
          {/* books row 1 - colorful */}
          {[
            { x: 8, w: 8, h: 20, fill: "#EF4444" },
            { x: 17, w: 6, h: 18, fill: "#3B82F6" },
            { x: 24, w: 9, h: 20, fill: "#10B981" },
            { x: 34, w: 7, h: 17, fill: "#F59E0B" },
            { x: 42, w: 8, h: 20, fill: "#8B5CF6" },
            { x: 51, w: 6, h: 16, fill: "#EC4899" },
            { x: 58, w: 9, h: 19, fill: "#06B6D4" },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={28 - b.h} width={b.w} height={b.h} rx="1" fill={b.fill}/>
              <rect x={b.x+1} y={28 - b.h + 1} width={2} height={b.h - 2} rx="0.5" fill="#fff" opacity=".2"/>
            </g>
          ))}
          {/* books row 2 */}
          {[
            { x: 9, w: 7, h: 19, fill: "#F97316" },
            { x: 17, w: 9, h: 21, fill: "#14B8A6" },
            { x: 27, w: 6, h: 17, fill: "#A855F7" },
            { x: 34, w: 8, h: 20, fill: "#EAB308" },
            { x: 43, w: 7, h: 19, fill: "#22C55E" },
            { x: 51, w: 10, h: 21, fill: "#F43F5E" },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={52 - b.h} width={b.w} height={b.h} rx="1" fill={b.fill}/>
              <rect x={b.x+1} y={52 - b.h + 1} width={2} height={b.h - 2} rx="0.5" fill="#fff" opacity=".2"/>
            </g>
          ))}
          {/* shelf 3 - decorative items */}
          <rect x="10" y="59" width="14" height="14" rx="2" fill="#7C9CF0"/>
          <circle cx="44" cy="68" r="7" fill="#F0A060"/>
          <rect x="56" y="62" width="8" height="11" rx="1" fill="#60B070"/>
          {/* shelf 4 - more books */}
          {[
            { x: 8, w: 8, h: 20, fill: "#6366F1" },
            { x: 17, w: 6, h: 16, fill: "#D946EF" },
            { x: 24, w: 9, h: 21, fill: "#0EA5E9" },
            { x: 34, w: 7, h: 18, fill: "#F87171" },
            { x: 42, w: 8, h: 20, fill: "#34D399" },
            { x: 51, w: 6, h: 17, fill: "#FBBF24" },
            { x: 58, w: 9, h: 19, fill: "#818CF8" },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={100 - b.h} width={b.w} height={b.h} rx="1" fill={b.fill}/>
              <rect x={b.x+1} y={100 - b.h + 1} width={2} height={b.h - 2} rx="0.5" fill="#fff" opacity=".2"/>
            </g>
          ))}
          {/* legs */}
          <rect x="8" y="110" width="10" height="8" rx="2" fill="#7A4A28"/>
          <rect x="60" y="110" width="10" height="8" rx="2" fill="#7A4A28"/>
        </g>
      </svg>
    ),
  },

  mesa_centro: {
    id: "mesa_centro", label: "Mesa de Centro", nw: 110, nh: 55, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 110 55" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* legs */}
          <rect x="14" y="36" width="8" height="18" rx="3" fill="#8B5E3C"/>
          <rect x="88" y="36" width="8" height="18" rx="3" fill="#8B5E3C"/>
          <rect x="30" y="36" width="8" height="14" rx="3" fill="#8B5E3C"/>
          <rect x="72" y="36" width="8" height="14" rx="3" fill="#8B5E3C"/>
          {/* glass top */}
          <rect x="2" y="18" width="106" height="22" rx="6" fill="#C8834A"/>
          <rect x="4" y="20" width="102" height="18" rx="5" fill="#B8D4E8" opacity=".75"/>
          <rect x="6" y="22" width="30" height="6" rx="2" fill="#fff" opacity=".35"/>
          {/* items on table */}
          <circle cx="55" cy="26" r="6" fill="#F5D88A" opacity=".9"/>
          <rect x="72" y="22" width="14" height="6" rx="2" fill="#E07850" opacity=".8"/>
        </g>
      </svg>
    ),
  },

  planta: {
    id: "planta", label: "Planta", nw: 60, nh: 90, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 60 90" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* pot */}
          <path d="M16 68 L44 68 L40 85 L20 85 Z" fill="#C05A30"/>
          <ellipse cx="30" cy="68" rx="14" ry="4" fill="#E07050"/>
          {/* soil */}
          <ellipse cx="30" cy="68" rx="12" ry="3" fill="#5C3A1A"/>
          {/* stem */}
          <path d="M30 66 Q28 52 22 40 Q18 30 24 20" stroke="#4A7C3F" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M30 66 Q32 50 38 36 Q44 24 36 14" stroke="#4A7C3F" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <line x1="30" y1="66" x2="30" y2="28" stroke="#4A7C3F" strokeWidth="3" strokeLinecap="round"/>
          {/* leaves */}
          <ellipse cx="22" cy="38" rx="14" ry="8" fill="#5DA040" transform="rotate(-30 22 38)"/>
          <ellipse cx="38" cy="32" rx="14" ry="8" fill="#4E8E38" transform="rotate(25 38 32)"/>
          <ellipse cx="26" cy="22" rx="12" ry="7" fill="#5DA040" transform="rotate(-15 26 22)"/>
          <ellipse cx="36" cy="16" rx="12" ry="7" fill="#4E8E38" transform="rotate(20 36 16)"/>
          {/* top leaf */}
          <ellipse cx="30" cy="10" rx="10" ry="6" fill="#5DA040"/>
        </g>
      </svg>
    ),
  },

  // ── KITCHEN ──────────────────────────────────────────────────────────────

  geladeira: {
    id: "geladeira", label: "Geladeira", nw: 68, nh: 118, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 68 118" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* body */}
          <rect x="2" y="2" width="64" height="114" rx="8" fill="#E5E7EB"/>
          <rect x="4" y="4" width="60" height="110" rx="7" fill="#F3F4F6"/>
          {/* divider */}
          <rect x="2" y="72" width="64" height="5" fill="#9CA3AF"/>
          {/* top door (freezer) */}
          <rect x="4" y="6" width="56" height="62" rx="4" fill="#E9ECEF"/>
          {/* top handle */}
          <rect x="54" y="22" width="5" height="30" rx="2.5" fill="#9CA3AF"/>
          {/* bottom door (fridge) */}
          <rect x="4" y="80" width="56" height="32" rx="4" fill="#E9ECEF"/>
          {/* bottom handle */}
          <rect x="54" y="88" width="5" height="16" rx="2.5" fill="#9CA3AF"/>
          {/* bottom handle2 */}
          <rect x="5" y="88" width="5" height="16" rx="2.5" fill="#9CA3AF"/>
          {/* logo */}
          <rect x="18" y="38" width="32" height="14" rx="3" fill="#CBD5E1" opacity=".6"/>
          {/* ice dispenser hint */}
          <rect x="10" y="48" width="18" height="10" rx="2" fill="#D1D5DB"/>
          {/* feet */}
          <rect x="10" y="110" width="8" height="6" rx="2" fill="#9CA3AF"/>
          <rect x="50" y="110" width="8" height="6" rx="2" fill="#9CA3AF"/>
        </g>
      </svg>
    ),
  },

  fogao: {
    id: "fogao", label: "Fogão", nw: 96, nh: 88, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 96 88" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* body */}
          <rect x="2" y="30" width="92" height="56" rx="6" fill="#F3F4F6"/>
          <rect x="4" y="32" width="88" height="52" rx="5" fill="#E5E7EB"/>
          {/* oven door */}
          <rect x="10" y="50" width="76" height="30" rx="5" fill="#D1D5DB"/>
          <rect x="14" y="54" width="68" height="22" rx="4" fill="#B0D4E8" opacity=".5"/>
          <rect x="16" y="56" width="20" height="6" rx="2" fill="#fff" opacity=".4"/>
          {/* oven handle */}
          <rect x="30" y="52" width="36" height="5" rx="2.5" fill="#9CA3AF"/>
          {/* oven light */}
          <circle cx="80" cy="58" r="4" fill="#FDE68A" opacity=".8"/>
          {/* stovetop surface */}
          <rect x="2" y="4" width="92" height="30" rx="6" fill="#374151"/>
          <rect x="4" y="6" width="88" height="26" rx="5" fill="#4B5563"/>
          {/* burners */}
          {[
            { cx: 24, cy: 18 },
            { cx: 72, cy: 18 },
            { cx: 24, cy: 42 },
            { cx: 72, cy: 42 },
          ].map((b, i) => (
            <g key={i}>
              <circle cx={b.cx} cy={b.cy} r="10" fill="#1F2937" stroke="#374151" strokeWidth="1"/>
              <circle cx={b.cx} cy={b.cy} r="7" fill="#111827" stroke="#6B7280" strokeWidth="1"/>
              <circle cx={b.cx} cy={b.cy} r="3" fill="#374151"/>
            </g>
          ))}
          {/* knobs */}
          {[16, 32, 64, 80].map((x, i) => (
            <circle key={i} cx={x} cy={28} r="4" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1"/>
          ))}
        </g>
      </svg>
    ),
  },

  mesa_jantar: {
    id: "mesa_jantar", label: "Mesa de Jantar", nw: 130, nh: 90, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 130 90" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* chairs back */}
          {[16, 96].map((x, i) => (
            <g key={i}>
              <rect x={x} y="10" width="18" height="38" rx="6" fill="#E0A860"/>
              <rect x={x+2} y="16" width="14" height="26" rx="4" fill="#E8B87E" opacity=".5"/>
              <rect x={x} y="44" width="18" height="14" rx="4" fill="#C8834A"/>
              <rect x={x+2} y="56" width="5" height="16" rx="2" fill="#A06430"/>
              <rect x={x+11} y="56" width="5" height="16" rx="2" fill="#A06430"/>
            </g>
          ))}
          {/* table */}
          <rect x="4" y="30" width="122" height="36" rx="8" fill="#C8834A"/>
          <rect x="6" y="32" width="118" height="32" rx="7" fill="#E0A860"/>
          {/* tablecloth */}
          <rect x="8" y="34" width="114" height="28" rx="6" fill="#F5F0E0"/>
          <rect x="10" y="36" width="110" height="24" rx="5" fill="#FFF8EC"/>
          {/* items on table */}
          <circle cx="40" cy="48" r="10" fill="#B8D4E8" opacity=".8"/>
          <circle cx="65" cy="48" r="6" fill="#F5D88A" opacity=".9"/>
          <circle cx="90" cy="48" r="10" fill="#B8D4E8" opacity=".8"/>
          {/* table legs */}
          <rect x="16" y="62" width="8" height="20" rx="3" fill="#A06430"/>
          <rect x="106" y="62" width="8" height="20" rx="3" fill="#A06430"/>
        </g>
      </svg>
    ),
  },

  microondas: {
    id: "microondas", label: "Microondas", nw: 100, nh: 62, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 100 62" fill="none">
        {DROP}
        <g filter="url(#ds)">
          <rect x="2" y="2" width="96" height="58" rx="7" fill="#374151"/>
          <rect x="4" y="4" width="92" height="54" rx="6" fill="#4B5563"/>
          {/* door */}
          <rect x="6" y="8" width="64" height="46" rx="5" fill="#1F2937"/>
          <rect x="8" y="10" width="60" height="42" rx="4" fill="#111827" opacity=".9"/>
          {/* glass window */}
          <rect x="10" y="12" width="56" height="38" rx="3" fill="#1E3A5C" opacity=".7"/>
          <rect x="12" y="14" width="18" height="8" rx="2" fill="#fff" opacity=".08"/>
          {/* handle */}
          <rect x="68" y="24" width="6" height="14" rx="3" fill="#6B7280"/>
          {/* panel */}
          <rect x="76" y="8" width="18" height="46" rx="3" fill="#374151"/>
          {/* display */}
          <rect x="78" y="12" width="14" height="10" rx="2" fill="#064E3B"/>
          <rect x="80" y="14" width="10" height="6" rx="1" fill="#10B981" opacity=".7"/>
          {/* buttons */}
          {[0,1,2,3,4,5].map(i => (
            <circle key={i} cx={80 + (i%2)*8} cy={28 + Math.floor(i/2)*8} r="2.5" fill="#6B7280"/>
          ))}
        </g>
      </svg>
    ),
  },

  // ── ROAD / CITY ──────────────────────────────────────────────────────────

  carro: {
    id: "carro", label: "Carro", nw: 130, nh: 68, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 130 68" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* body */}
          <path d="M8 42 Q8 22 18 20 L36 14 L94 14 L112 22 Q122 26 122 42 Z" fill="#EF4444"/>
          <rect x="4" y="40" width="122" height="16" rx="6" fill="#DC2626"/>
          {/* windows */}
          <path d="M40 16 L36 34 L54 34 L54 14 Z" fill="#B0D4E8" opacity=".85"/>
          <rect x="56" y="14" width="36" height="20" rx="2" fill="#B0D4E8" opacity=".85"/>
          <path d="M94 14 L98 16 L106 34 L92 34 L92 14 Z" fill="#B0D4E8" opacity=".85"/>
          <line x1="55" y1="14" x2="55" y2="34" stroke="#DC2626" strokeWidth="2"/>
          <line x1="92" y1="14" x2="92" y2="34" stroke="#DC2626" strokeWidth="2"/>
          {/* glare */}
          <rect x="58" y="16" width="10" height="5" rx="2" fill="#fff" opacity=".3"/>
          {/* wheels */}
          <circle cx="30" cy="54" r="12" fill="#1F2937"/>
          <circle cx="30" cy="54" r="7" fill="#374151"/>
          <circle cx="30" cy="54" r="3" fill="#9CA3AF"/>
          <circle cx="100" cy="54" r="12" fill="#1F2937"/>
          <circle cx="100" cy="54" r="7" fill="#374151"/>
          <circle cx="100" cy="54" r="3" fill="#9CA3AF"/>
          {/* headlight */}
          <ellipse cx="120" cy="40" rx="5" ry="3" fill="#FDE68A" opacity=".9"/>
          {/* taillight */}
          <ellipse cx="10" cy="40" rx="4" ry="2.5" fill="#FCA5A5" opacity=".9"/>
          {/* door line */}
          <path d="M52 22 Q52 42 56 42" stroke="#DC2626" strokeWidth="1.5" fill="none" opacity=".5"/>
        </g>
      </svg>
    ),
  },

  onibus: {
    id: "onibus", label: "Ônibus", nw: 140, nh: 75, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 140 75" fill="none">
        {DROP}
        <g filter="url(#ds)">
          <rect x="4" y="6" width="132" height="54" rx="10" fill="#FBBF24"/>
          <rect x="6" y="8" width="128" height="50" rx="9" fill="#FCD34D"/>
          {/* windows */}
          {[14, 40, 62, 84, 106].map((x, i) => (
            <rect key={i} x={x} y="14" width="20" height="18" rx="3" fill="#B0D4E8" opacity=".85"/>
          ))}
          {/* door */}
          <rect x="120" y="20" width="14" height="32" rx="3" fill="#1F2937" opacity=".7"/>
          <line x1="127" y1="20" x2="127" y2="52" stroke="#374151" strokeWidth="1.5"/>
          {/* front face */}
          <rect x="4" y="6" width="14" height="54" rx="10" fill="#F59E0B"/>
          <rect x="8" y="14" width="8" height="12" rx="2" fill="#B0D4E8" opacity=".8"/>
          <rect x="8" y="32" width="8" height="6" rx="1" fill="#FDE68A" opacity=".9"/>
          {/* wheels */}
          <circle cx="26" cy="58" r="11" fill="#1F2937"/>
          <circle cx="26" cy="58" r="6" fill="#374151"/>
          <circle cx="26" cy="58" r="2.5" fill="#9CA3AF"/>
          <circle cx="110" cy="58" r="11" fill="#1F2937"/>
          <circle cx="110" cy="58" r="6" fill="#374151"/>
          <circle cx="110" cy="58" r="2.5" fill="#9CA3AF"/>
          {/* stripe */}
          <rect x="4" y="36" width="132" height="4" fill="#F59E0B"/>
        </g>
      </svg>
    ),
  },

  casinha: {
    id: "casinha", label: "Casa", nw: 100, nh: 100, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 100 100" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* walls */}
          <rect x="8" y="46" width="84" height="52" rx="3" fill="#FEF3C7"/>
          <rect x="10" y="48" width="80" height="50" rx="2" fill="#FFFBEB"/>
          {/* roof */}
          <path d="M2 48 L50 8 L98 48 Z" fill="#EF4444"/>
          <path d="M2 48 L50 8 L98 48" stroke="#DC2626" strokeWidth="2" fill="none"/>
          {/* chimney */}
          <rect x="62" y="14" width="12" height="22" rx="2" fill="#C8834A"/>
          <rect x="60" y="12" width="16" height="5" rx="2" fill="#A06430"/>
          {/* door */}
          <rect x="38" y="68" width="24" height="30" rx="4" fill="#C8834A"/>
          <rect x="40" y="70" width="20" height="28" rx="3" fill="#E0A860"/>
          <circle cx="56" cy="85" r="2.5" fill="#7A4A28"/>
          {/* windows */}
          <rect x="12" y="58" width="20" height="18" rx="3" fill="#B0D4E8" opacity=".85"/>
          <line x1="22" y1="58" x2="22" y2="76" stroke="#fff" strokeWidth="1.5"/>
          <line x1="12" y1="67" x2="32" y2="67" stroke="#fff" strokeWidth="1.5"/>
          <rect x="68" y="58" width="20" height="18" rx="3" fill="#B0D4E8" opacity=".85"/>
          <line x1="78" y1="58" x2="78" y2="76" stroke="#fff" strokeWidth="1.5"/>
          <line x1="68" y1="67" x2="88" y2="67" stroke="#fff" strokeWidth="1.5"/>
          {/* path */}
          <rect x="42" y="96" width="16" height="4" rx="1" fill="#D4A96E"/>
        </g>
      </svg>
    ),
  },

  semaforo: {
    id: "semaforo", label: "Semáforo", nw: 36, nh: 100, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 36 100" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* pole */}
          <rect x="15" y="60" width="6" height="40" rx="3" fill="#4B5563"/>
          {/* arm */}
          <rect x="18" y="44" width="16" height="5" rx="2" fill="#4B5563"/>
          {/* box */}
          <rect x="2" y="2" width="32" height="58" rx="6" fill="#1F2937"/>
          <rect x="4" y="4" width="28" height="54" rx="5" fill="#374151"/>
          {/* red light */}
          <circle cx="18" cy="16" r="9" fill="#FCA5A5" opacity=".3"/>
          <circle cx="18" cy="16" r="7" fill="#EF4444"/>
          <circle cx="15" cy="13" r="2" fill="#fff" opacity=".3"/>
          {/* yellow */}
          <circle cx="18" cy="35" r="9" fill="#FDE68A" opacity=".3"/>
          <circle cx="18" cy="35" r="7" fill="#D97706" opacity=".5"/>
          <circle cx="15" cy="32" r="2" fill="#fff" opacity=".2"/>
          {/* green */}
          <circle cx="18" cy="54" r="9" fill="#6EE7B7" opacity=".3"/>
          <circle cx="18" cy="54" r="7" fill="#10B981"/>
          <circle cx="15" cy="51" r="2" fill="#fff" opacity=".3"/>
          {/* base */}
          <rect x="10" y="94" width="16" height="6" rx="3" fill="#374151"/>
        </g>
      </svg>
    ),
  },

  bicicleta: {
    id: "bicicleta", label: "Bicicleta", nw: 110, nh: 72, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 110 72" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* wheels */}
          <circle cx="24" cy="52" r="18" fill="none" stroke="#374151" strokeWidth="5"/>
          <circle cx="24" cy="52" r="10" fill="none" stroke="#6B7280" strokeWidth="2"/>
          <circle cx="24" cy="52" r="4" fill="#374151"/>
          <circle cx="86" cy="52" r="18" fill="none" stroke="#374151" strokeWidth="5"/>
          <circle cx="86" cy="52" r="10" fill="none" stroke="#6B7280" strokeWidth="2"/>
          <circle cx="86" cy="52" r="4" fill="#374151"/>
          {/* spokes */}
          {[0,45,90,135].map(a => {
            const rad = a * Math.PI / 180;
            return (
              <line key={a}
                x1={24 + Math.cos(rad)*4} y1={52 + Math.sin(rad)*4}
                x2={24 + Math.cos(rad)*18} y2={52 + Math.sin(rad)*18}
                stroke="#9CA3AF" strokeWidth="1.5"/>
            );
          })}
          {[0,45,90,135].map(a => {
            const rad = a * Math.PI / 180;
            return (
              <line key={a}
                x1={86 + Math.cos(rad)*4} y1={52 + Math.sin(rad)*4}
                x2={86 + Math.cos(rad)*18} y2={52 + Math.sin(rad)*18}
                stroke="#9CA3AF" strokeWidth="1.5"/>
            );
          })}
          {/* frame */}
          <line x1="24" y1="52" x2="55" y2="28" stroke="#22C55E" strokeWidth="4" strokeLinecap="round"/>
          <line x1="55" y1="28" x2="86" y2="52" stroke="#22C55E" strokeWidth="4" strokeLinecap="round"/>
          <line x1="55" y1="28" x2="55" y2="52" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
          <line x1="55" y1="52" x2="24" y2="52" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
          <line x1="55" y1="28" x2="70" y2="18" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
          {/* seat */}
          <rect x="48" y="22" width="18" height="5" rx="2.5" fill="#1F2937"/>
          <rect x="53" y="20" width="4" height="8" rx="2" fill="#374151"/>
          {/* handlebar */}
          <rect x="68" y="12" width="16" height="3" rx="1.5" fill="#374151"/>
          <rect x="74" y="12" width="4" height="8" rx="2" fill="#374151"/>
          {/* pedal */}
          <circle cx="55" cy="52" r="5" fill="#374151"/>
          <rect x="50" y="52" width="10" height="3" rx="1.5" fill="#1F2937" transform="rotate(25 55 52)"/>
        </g>
      </svg>
    ),
  },

  // ── BEACH ─────────────────────────────────────────────────────────────────

  coqueiro: {
    id: "coqueiro", label: "Coqueiro", nw: 74, nh: 118, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 74 118" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* trunk */}
          <path d="M30 110 Q28 80 24 60 Q22 44 28 24 Q32 12 36 8" stroke="#A06430" strokeWidth="8" strokeLinecap="round" fill="none"/>
          <path d="M30 110 Q32 80 36 60 Q38 44 36 24 Q34 12 36 8" stroke="#C8834A" strokeWidth="5" strokeLinecap="round" fill="none"/>
          {/* trunk segments */}
          {[20, 34, 48, 62, 76, 90].map((y, i) => (
            <line key={i} x1={28 + i*0.5} y1={y} x2={34 + i*0.4} y2={y} stroke="#A06430" strokeWidth="1.5"/>
          ))}
          {/* coconuts */}
          <circle cx="28" cy="24" r="6" fill="#7A4A28"/>
          <circle cx="38" cy="20" r="6" fill="#8B5E3C"/>
          {/* leaves */}
          <path d="M34 14 Q20 0 2 6 Q14 12 30 18" fill="#4A8A3A"/>
          <path d="M34 14 Q10 10 4 26 Q18 18 32 20" fill="#5A9A48"/>
          <path d="M36 12 Q50 0 68 8 Q56 14 38 18" fill="#4A8A3A"/>
          <path d="M36 12 Q62 6 70 22 Q56 18 40 20" fill="#5A9A48"/>
          <path d="M34 14 Q24 14 10 28 Q22 22 34 20" fill="#3A7A2E"/>
          <path d="M36 12 Q48 12 58 28 Q46 22 38 20" fill="#3A7A2E"/>
          {/* coconut fiber dots */}
          <circle cx="27" cy="23" r="1.5" fill="#5C3A1A"/>
          <circle cx="29" cy="26" r="1.5" fill="#5C3A1A"/>
          <circle cx="38" cy="19" r="1.5" fill="#5C3A1A"/>
          {/* base */}
          <ellipse cx="34" cy="112" rx="18" ry="5" fill="#C8A87A" opacity=".5"/>
        </g>
      </svg>
    ),
  },

  guarda_sol: {
    id: "guarda_sol", label: "Guarda-sol", nw: 110, nh: 100, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 110 100" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* umbrella canopy */}
          <path d="M55 10 Q16 14 8 36 Q30 28 55 30 Q80 28 102 36 Q96 14 55 10 Z" fill="#EF4444"/>
          <path d="M55 10 Q16 14 8 36 Q30 28 55 30" fill="#FCA5A5" opacity=".4"/>
          {/* stripes */}
          {[0,1,2,3,4,5,6,7].map(i => {
            const angle = (i * 45) * Math.PI / 180;
            const x2 = 55 + Math.cos(angle) * 48;
            const y2 = 30 + Math.sin(angle) * 20;
            return <line key={i} x1="55" y1="10" x2={x2} y2={y2} stroke="#fff" strokeWidth="1" opacity=".4"/>;
          })}
          <path d="M8 36 Q30 28 55 30 Q80 28 102 36" fill="none" stroke="#DC2626" strokeWidth="1.5"/>
          {/* pole */}
          <line x1="55" y1="10" x2="55" y2="90" stroke="#9CA3AF" strokeWidth="3"/>
          <rect x="52" y="88" width="6" height="4" rx="2" fill="#6B7280"/>
          {/* lounger */}
          <rect x="14" y="76" width="58" height="10" rx="4" fill="#FDE68A"/>
          <rect x="14" y="72" width="20" height="8" rx="3" fill="#FCD34D"/>
          <rect x="14" y="82" width="10" height="10" rx="2" fill="#D4A96E"/>
          <rect x="66" y="82" width="10" height="10" rx="2" fill="#D4A96E"/>
          {/* pillow */}
          <rect x="14" y="70" width="16" height="8" rx="3" fill="#fff" opacity=".8"/>
          {/* sand base */}
          <ellipse cx="55" cy="92" rx="46" ry="6" fill="#FDE68A" opacity=".4"/>
        </g>
      </svg>
    ),
  },

  barco: {
    id: "barco", label: "Barco", nw: 120, nh: 90, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 120 90" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* hull */}
          <path d="M6 54 Q6 70 14 74 L106 74 Q114 70 114 54 Z" fill="#DC2626"/>
          <path d="M8 54 L112 54 L106 72 L14 72 Z" fill="#EF4444"/>
          {/* deck */}
          <rect x="6" y="48" width="108" height="10" rx="3" fill="#F5EFE0"/>
          {/* cabin */}
          <rect x="34" y="24" width="52" height="28" rx="5" fill="#F5EFE0"/>
          <rect x="38" y="28" width="20" height="14" rx="3" fill="#B0D4E8" opacity=".8"/>
          <rect x="62" y="28" width="20" height="14" rx="3" fill="#B0D4E8" opacity=".8"/>
          <rect x="40" y="30" width="6" height="4" rx="1" fill="#fff" opacity=".4"/>
          {/* mast */}
          <line x1="60" y1="48" x2="60" y2="4" stroke="#8B5E3C" strokeWidth="3"/>
          {/* main sail */}
          <path d="M60 6 L60 46 L92 32 Z" fill="#FFFBEB" stroke="#D4A96E" strokeWidth="1.5"/>
          {/* jib sail */}
          <path d="M60 10 L60 38 L30 38 Z" fill="#FEF9C3" stroke="#D4A96E" strokeWidth="1"/>
          {/* flag */}
          <path d="M60 4 L72 8 L60 12 Z" fill="#EF4444"/>
          {/* water line */}
          <path d="M0 76 Q30 72 60 76 Q90 80 120 76" stroke="#60A5FA" strokeWidth="2" fill="none" opacity=".6"/>
        </g>
      </svg>
    ),
  },

  castelo_areia: {
    id: "castelo_areia", label: "Castelo de Areia", nw: 100, nh: 88, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 100 88" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* base */}
          <rect x="8" y="58" width="84" height="26" rx="4" fill="#F5CB80"/>
          {/* main tower */}
          <rect x="34" y="24" width="32" height="40" rx="3" fill="#F5CB80"/>
          <rect x="34" y="16" width="8" height="12" rx="2" fill="#F5CB80"/>
          <rect x="42" y="12" width="8" height="16" rx="2" fill="#F5CB80"/>
          <rect x="50" y="16" width="8" height="12" rx="2" fill="#F5CB80"/>
          <rect x="36" y="16" width="28" height="6" fill="#E8A840"/>
          {/* side towers */}
          <rect x="6" y="38" width="28" height="28" rx="3" fill="#F5CB80"/>
          <rect x="6" y="32" width="6" height="10" rx="2" fill="#F5CB80"/>
          <rect x="14" y="28" width="6" height="14" rx="2" fill="#F5CB80"/>
          <rect x="22" y="32" width="6" height="10" rx="2" fill="#F5CB80"/>
          <rect x="66" y="38" width="28" height="28" rx="3" fill="#F5CB80"/>
          <rect x="66" y="32" width="6" height="10" rx="2" fill="#F5CB80"/>
          <rect x="74" y="28" width="6" height="14" rx="2" fill="#F5CB80"/>
          <rect x="82" y="32" width="6" height="10" rx="2" fill="#F5CB80"/>
          {/* door arch */}
          <path d="M44 64 Q44 52 50 52 Q56 52 56 64 Z" fill="#E8A840"/>
          {/* windows */}
          <circle cx="50" cy="38" r="4" fill="#E8A840"/>
          <circle cx="20" cy="46" r="3" fill="#E8A840"/>
          <circle cx="80" cy="46" r="3" fill="#E8A840"/>
          {/* flag */}
          <line x1="50" y1="12" x2="50" y2="4" stroke="#E8A840" strokeWidth="2"/>
          <path d="M50 4 L60 7 L50 10 Z" fill="#EF4444"/>
        </g>
      </svg>
    ),
  },

  // ── PARK ─────────────────────────────────────────────────────────────────

  escorregador: {
    id: "escorregador", label: "Escorregador", nw: 100, nh: 105, tier: "lg",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 100 105" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* slide */}
          <path d="M60 16 L90 86" stroke="#F59E0B" strokeWidth="16" strokeLinecap="round"/>
          <path d="M60 16 L90 86" stroke="#FCD34D" strokeWidth="12" strokeLinecap="round"/>
          {/* platform */}
          <rect x="18" y="12" width="52" height="10" rx="3" fill="#F59E0B"/>
          <rect x="20" y="8" width="48" height="8" rx="3" fill="#FCD34D"/>
          {/* ladder posts */}
          <rect x="22" y="22" width="6" height="72" rx="3" fill="#6B7280"/>
          <rect x="40" y="22" width="6" height="72" rx="3" fill="#6B7280"/>
          {/* ladder rungs */}
          {[30, 44, 58, 70, 82].map((y, i) => (
            <rect key={i} x="22" y={y} width="24" height="5" rx="2" fill="#9CA3AF"/>
          ))}
          {/* railings top */}
          <rect x="22" y="4" width="6" height="12" rx="3" fill="#6B7280"/>
          <rect x="40" y="4" width="6" height="12" rx="3" fill="#6B7280"/>
          <rect x="22" y="4" width="24" height="4" rx="2" fill="#9CA3AF"/>
          {/* slide rail */}
          <path d="M58 18 L88 84" stroke="#E07830" strokeWidth="4" strokeLinecap="round"/>
          <path d="M68 18 L98 84" stroke="#E07830" strokeWidth="4" strokeLinecap="round"/>
          {/* ground base */}
          <rect x="14" y="90" width="82" height="8" rx="4" fill="#D4A96E" opacity=".6"/>
        </g>
      </svg>
    ),
  },

  balanco: {
    id: "balanco", label: "Balanço", nw: 100, nh: 100, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 100 100" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* A-frame posts */}
          <line x1="10" y1="90" x2="30" y2="8" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round"/>
          <line x1="38" y1="90" x2="30" y2="8" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round"/>
          <line x1="62" y1="90" x2="70" y2="8" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round"/>
          <line x1="90" y1="90" x2="70" y2="8" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round"/>
          {/* top bar */}
          <line x1="28" y1="6" x2="72" y2="6" stroke="#C8834A" strokeWidth="7" strokeLinecap="round"/>
          {/* cross braces */}
          <line x1="12" y1="72" x2="36" y2="20" stroke="#A06430" strokeWidth="3" strokeLinecap="round" opacity=".5"/>
          <line x1="64" y1="20" x2="88" y2="72" stroke="#A06430" strokeWidth="3" strokeLinecap="round" opacity=".5"/>
          {/* swing chains */}
          <line x1="40" y1="8" x2="36" y2="68" stroke="#9CA3AF" strokeWidth="2"/>
          <line x1="60" y1="8" x2="64" y2="68" stroke="#9CA3AF" strokeWidth="2"/>
          {/* seat */}
          <rect x="34" y="66" width="32" height="8" rx="4" fill="#C8834A"/>
          <rect x="36" y="64" width="28" height="6" rx="3" fill="#E0A860"/>
          {/* ground bars */}
          <rect x="6" y="88" width="38" height="6" rx="3" fill="#7A4A28"/>
          <rect x="56" y="88" width="38" height="6" rx="3" fill="#7A4A28"/>
        </g>
      </svg>
    ),
  },

  gangorra: {
    id: "gangorra", label: "Gangorra", nw: 120, nh: 70, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 120 70" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* fulcrum */}
          <path d="M50 50 L60 28 L70 50 Z" fill="#9CA3AF"/>
          <rect x="46" y="48" width="28" height="6" rx="3" fill="#6B7280"/>
          {/* plank */}
          <rect x="4" y="28" width="112" height="8" rx="4" fill="#C8834A"/>
          <rect x="6" y="30" width="108" height="4" rx="2" fill="#E0A860"/>
          {/* handles left */}
          <rect x="8" y="14" width="5" height="18" rx="2.5" fill="#6B7280"/>
          <rect x="20" y="14" width="5" height="18" rx="2.5" fill="#6B7280"/>
          <rect x="8" y="12" width="17" height="5" rx="2.5" fill="#9CA3AF"/>
          {/* handles right */}
          <rect x="107" y="14" width="5" height="18" rx="2.5" fill="#6B7280"/>
          <rect x="95" y="14" width="5" height="18" rx="2.5" fill="#6B7280"/>
          <rect x="95" y="12" width="17" height="5" rx="2.5" fill="#9CA3AF"/>
          {/* seats */}
          <rect x="6" y="34" width="26" height="6" rx="3" fill="#EF4444"/>
          <rect x="88" y="34" width="26" height="6" rx="3" fill="#3B82F6"/>
          {/* ground */}
          <rect x="20" y="52" width="80" height="5" rx="2.5" fill="#D4A96E" opacity=".5"/>
        </g>
      </svg>
    ),
  },

  fonte: {
    id: "fonte", label: "Fonte", nw: 88, nh: 88, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 88 88" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* basin */}
          <ellipse cx="44" cy="70" rx="40" ry="14" fill="#9CA3AF"/>
          <ellipse cx="44" cy="68" rx="38" ry="12" fill="#B8D4E8"/>
          <ellipse cx="44" cy="66" rx="36" ry="10" fill="#7EC8E3" opacity=".7"/>
          {/* pedestal */}
          <rect x="36" y="36" width="16" height="34" rx="4" fill="#D1D5DB"/>
          <ellipse cx="44" cy="36" rx="10" ry="4" fill="#9CA3AF"/>
          {/* upper bowl */}
          <ellipse cx="44" cy="32" rx="24" ry="8" fill="#9CA3AF"/>
          <ellipse cx="44" cy="30" rx="22" ry="7" fill="#B8D4E8"/>
          <ellipse cx="44" cy="28" rx="20" ry="6" fill="#7EC8E3" opacity=".7"/>
          {/* spout */}
          <rect x="42" y="10" width="4" height="24" rx="2" fill="#6B7280"/>
          {/* water streams */}
          <path d="M44 10 Q40 20 36 28" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity=".8"/>
          <path d="M44 10 Q48 20 52 28" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity=".8"/>
          <path d="M44 10 Q44 22 44 30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
          {/* water ripples */}
          <ellipse cx="44" cy="68" rx="20" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity=".5"/>
          <ellipse cx="44" cy="68" rx="12" ry="2.5" fill="none" stroke="#60A5FA" strokeWidth="1" opacity=".4"/>
        </g>
      </svg>
    ),
  },

  banco_jardim: {
    id: "banco_jardim", label: "Banco de Jardim", nw: 110, nh: 68, tier: "md",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 110 68" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* back legs */}
          <rect x="12" y="28" width="8" height="36" rx="3" fill="#374151"/>
          <rect x="90" y="28" width="8" height="36" rx="3" fill="#374151"/>
          {/* front legs */}
          <rect x="16" y="44" width="7" height="20" rx="3" fill="#374151"/>
          <rect x="87" y="44" width="7" height="20" rx="3" fill="#374151"/>
          {/* back rest slats */}
          {[14, 28, 42, 56, 70, 84, 96].map((x, i) => (
            <rect key={i} x={x} y="14" width="6" height="32" rx="2" fill="#C8834A"/>
          ))}
          {/* back rail */}
          <rect x="10" y="12" width="90" height="5" rx="2.5" fill="#A06430"/>
          <rect x="10" y="34" width="90" height="5" rx="2.5" fill="#A06430"/>
          {/* seat slats */}
          {[12, 26, 40, 54, 68, 82, 96].map((x, i) => (
            <rect key={i} x={x} y="42" width="8" height="6" rx="2" fill="#E0A860"/>
          ))}
          <rect x="10" y="40" width="90" height="4" rx="2" fill="#C8834A"/>
          <rect x="10" y="46" width="90" height="4" rx="2" fill="#C8834A"/>
        </g>
      </svg>
    ),
  },

  cerca: {
    id: "cerca", label: "Cerca", nw: 120, nh: 60, tier: "sm",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 120 60" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* rails */}
          <rect x="2" y="18" width="116" height="6" rx="3" fill="#E0A860"/>
          <rect x="2" y="36" width="116" height="6" rx="3" fill="#E0A860"/>
          {/* pickets */}
          {[4, 18, 32, 46, 60, 74, 88, 102, 116].map((x, i) => (
            <g key={i}>
              <path d={`M${x} 52 L${x} 8 L${x+6} 2 L${x+12} 8 L${x+12} 52 Z`} fill="#C8834A"/>
              <rect x={x} y="8" width="12" height="44" fill="#E0A860"/>
              <path d={`M${x} 8 L${x+6} 2 L${x+12} 8 Z`} fill="#C8834A"/>
            </g>
          ))}
          {/* shadow line */}
          <line x1="2" y1="52" x2="118" y2="52" stroke="#A06430" strokeWidth="1.5" opacity=".5"/>
        </g>
      </svg>
    ),
  },

  regador: {
    id: "regador", label: "Regador", nw: 80, nh: 70, tier: "sm",
    render: (w, h) => (
      <svg width={w} height={h} viewBox="0 0 80 70" fill="none">
        {DROP}
        <g filter="url(#ds)">
          {/* body */}
          <ellipse cx="38" cy="44" rx="28" ry="20" fill="#60A5FA"/>
          <ellipse cx="38" cy="42" rx="26" ry="18" fill="#7EC8E3"/>
          {/* spout */}
          <path d="M64 40 L76 28 L72 24 L60 36" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
          {/* rose */}
          <circle cx="74" cy="26" r="6" fill="#93C5FD"/>
          {[0,45,90,135,180,225,270,315].map(a => {
            const r = a * Math.PI / 180;
            const x = 74 + Math.cos(r) * 8;
            const y = 26 + Math.sin(r) * 8;
            return <circle key={a} cx={x} cy={y} r="2" fill="#60A5FA"/>;
          })}
          {/* handle */}
          <path d="M46 30 Q58 18 52 38" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" fill="none"/>
          {/* bottom */}
          <ellipse cx="38" cy="62" rx="24" ry="5" fill="#3B82F6" opacity=".6"/>
          {/* water drops */}
          {[0,1,2].map(i => (
            <ellipse key={i} cx={68 + i*3} cy={16 + i*6} rx="1.5" ry="3" fill="#60A5FA" opacity=".7" transform={`rotate(20 ${68+i*3} ${16+i*6})`}/>
          ))}
        </g>
      </svg>
    ),
  },

};

// ─── Sticker scene definitions ────────────────────────────────────────────────
export type SceneStickerItem = {
  id: string;
  /** if missing, uses STICKER_REGISTRY[id] */
  emojiOverride?: string;
};

// Renders a sticker. Falls back to emoji PNG, then raw emoji.
export function RenderSticker({
  id, sizePx, emojiOverride,
}: {
  id: string;
  sizePx: number;
  emojiOverride?: string;
}) {
  const def = STICKER_REGISTRY[id];
  if (def) {
    const { w, h } = stickerSize(def);
    return <>{def.render(w, h)}</>;
  }
  // fallback: try existing premium PNG
  if (emojiOverride) {
    const src = ilustracao(emojiOverride, id);
    if (src) {
      return (
        <img
          src={src}
          alt={id}
          width={sizePx}
          height={sizePx}
          draggable={false}
          style={{ objectFit: "contain", display: "block" }}
        />
      );
    }
    return <span style={{ fontSize: sizePx, lineHeight: 1 }}>{emojiOverride}</span>;
  }
  return null;
}
