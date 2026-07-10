import { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Visual interativo para a cena do minijogo (Astrônomo Express).
 * Renderiza um mini-simulador diferente conforme o conceito da rodada:
 *  - "rotacao"    → Globo giratório com dia/noite (drag para girar)
 *  - "inclinacao" → Terra inclinada com alternador Junho/Dezembro
 *  - "translacao" → Terra orbitando o Sol (drag ao longo da órbita)
 */

type Conceito = "rotacao" | "translacao" | "inclinacao" | "combinado";

export function MinijogoVisual({ conceito }: { conceito: string }) {
  if (conceito === "rotacao") return <GloboDiaNoite />;
  if (conceito === "inclinacao") return <TerraInclinada />;
  if (conceito === "translacao" || conceito === "combinado") return <OrbitaTerra />;
  return null;
}

/* ================================================================== */
/* 1) GLOBO DIA / NOITE — arraste horizontalmente para girar           */
/* ================================================================== */

type Cidade = { nome: string; lat: number; lon: number; cor: string };
const CIDADES: Cidade[] = [
  { nome: "Brasil",  lat: -15, lon: -55, cor: "#34d399" },
  { nome: "Japão",   lat:  36, lon: 138, cor: "#f472b6" },
  { nome: "Europa",  lat:  48, lon:  10, cor: "#60a5fa" },
];

function GloboDiaNoite() {
  const [rot, setRot] = useState(-90); // começa com Japão iluminado
  const dragging = useRef(false);
  const lastX = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const R = 110;      // raio do globo em px
  const CX = 140;
  const CY = 140;

  const onDown = (x: number) => {
    dragging.current = true;
    lastX.current = x;
  };
  const onMove = (x: number) => {
    if (!dragging.current) return;
    const dx = x - lastX.current;
    lastX.current = x;
    setRot((r) => r + dx * 0.6);
  };
  const onUp = () => (dragging.current = false);

  useEffect(() => {
    const up = () => (dragging.current = false);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const marcadores = useMemo(() => {
    return CIDADES.map((c) => {
      const lat = (c.lat * Math.PI) / 180;
      const lon = ((c.lon + rot) * Math.PI) / 180;
      const x = Math.cos(lat) * Math.sin(lon);
      const y = -Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);
      // Sol está no eixo +X (à direita) → iluminado se x > 0
      const iluminado = x > 0;
      const visivel = z > -0.15; // pequeno margem para não sumir bruscamente
      return {
        ...c,
        px: CX + x * R,
        py: CY + y * R,
        iluminado,
        visivel,
        z,
      };
    });
  }, [rot]);

  return (
    <div
      ref={wrapRef}
      className="relative select-none touch-none"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
    >
      <div className="text-[10px] uppercase tracking-widest text-white/50 text-center mb-2">
        ← arraste para girar a Terra →
      </div>

      <svg viewBox="0 0 340 280" className="w-full h-auto cursor-grab active:cursor-grabbing">
        <defs>
          {/* Terra base (oceano) */}
          <radialGradient id="oceano" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0b1a3d" />
          </radialGradient>
          {/* Terminador dia/noite (sombra à esquerda) */}
          <linearGradient id="noite" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.75)" />
            <stop offset="45%" stopColor="rgba(0,0,0,0.55)" />
            <stop offset="55%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <radialGradient id="brilhoSol" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="60%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="rgba(251,191,36,0)" />
          </radialGradient>
          <clipPath id="clipGlobo">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

        {/* Sol à direita */}
        <circle cx={310} cy={80} r={26} fill="url(#brilhoSol)" />
        <text x={310} y={125} textAnchor="middle" fontSize="10" fill="#fbbf24" fontWeight="600">SOL</text>

        {/* Halo atmosférico */}
        <circle cx={CX} cy={CY} r={R + 6} fill="rgba(96,165,250,0.15)" />

        {/* Globo */}
        <g clipPath="url(#clipGlobo)">
          <circle cx={CX} cy={CY} r={R} fill="url(#oceano)" />
          {/* Sombra da noite (metade esquerda) */}
          <rect x={CX - R} y={CY - R} width={R} height={R * 2} fill="url(#noite)" />
        </g>
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.15)" />

        {/* Marcadores das cidades */}
        {marcadores.map((m) =>
          m.visivel ? (
            <g key={m.nome} opacity={0.55 + Math.max(0, m.z) * 0.45}>
              <circle
                cx={m.px}
                cy={m.py}
                r={m.iluminado ? 6 : 5}
                fill={m.iluminado ? m.cor : "#1e293b"}
                stroke={m.iluminado ? "#fff" : m.cor}
                strokeWidth={1.5}
              />
              <text
                x={m.px}
                y={m.py - 10}
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill={m.iluminado ? "#fff" : "rgba(255,255,255,0.55)"}
              >
                {m.nome}
              </text>
              <text
                x={m.px}
                y={m.py + 18}
                textAnchor="middle"
                fontSize="8"
                fill={m.iluminado ? "#fde68a" : "#94a3b8"}
              >
                {m.iluminado ? "☀️ dia" : "🌙 noite"}
              </text>
            </g>
          ) : null,
        )}
      </svg>

      <div className="mt-2 text-center text-[11px] text-white/60">
        Gire o globo: veja como o mesmo instante é <span className="text-amber-300">dia</span> num lado e <span className="text-indigo-300">noite</span> no outro.
      </div>
    </div>
  );
}

/* ================================================================== */
/* 2) TERRA INCLINADA — alterne Junho / Dezembro e veja as estações    */
/* ================================================================== */

function TerraInclinada() {
  const [mes, setMes] = useState<"junho" | "dezembro">("dezembro");

  // Em dezembro: hemisfério SUL recebe mais luz (verão no Brasil).
  // Em junho:   hemisfério NORTE recebe mais luz (verão na Europa).
  const solNoSul = mes === "dezembro";

  return (
    <div>
      <div className="flex gap-2 mb-3 justify-center">
        {(["junho", "dezembro"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMes(m)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors ${
              mes === m
                ? "bg-white text-[#0d1f55] border-white"
                : "border-white/25 text-white/70 hover:border-white/50"
            }`}
          >
            {m === "junho" ? "☀️ Junho" : "🎄 Dezembro"}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 340 240" className="w-full h-auto">
        <defs>
          <radialGradient id="oceanoI" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="80%" stopColor="#0f172a" />
          </radialGradient>
          <radialGradient id="solQuente" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="rgba(245,158,11,0)" />
          </radialGradient>
        </defs>

        <circle cx={40} cy={120} r={28} fill="url(#solQuente)" />
        <text x={40} y={170} textAnchor="middle" fontSize="10" fill="#fbbf24" fontWeight="600">SOL</text>

        {/* Raios do sol */}
        {[100, 120, 140].map((y) => (
          <line
            key={y}
            x1={70}
            y1={y}
            x2={170}
            y2={y}
            stroke="#fbbf24"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.6}
          />
        ))}

        {/* Terra inclinada 23.5° */}
        <g transform={`translate(230,120) rotate(-23.5)`}>
          <circle cx={0} cy={0} r={70} fill="url(#oceanoI)" stroke="rgba(255,255,255,0.2)" />
          {/* Eixo */}
          <line x1={0} y1={-95} x2={0} y2={95} stroke="#f87171" strokeWidth="2" strokeDasharray="3 3" />
          {/* Equador */}
          <ellipse cx={0} cy={0} rx={70} ry={8} fill="none" stroke="rgba(255,255,255,0.35)" />
          {/* Hemisfério destacado */}
          <path
            d={
              solNoSul
                ? "M -70 0 A 70 70 0 0 0 70 0 Z"  // sul
                : "M -70 0 A 70 70 0 0 1 70 0 Z"  // norte
            }
            fill="rgba(251,191,36,0.25)"
          />
          <text
            x={0}
            y={solNoSul ? 45 : -35}
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#fde68a"
          >
            {solNoSul ? "VERÃO" : "VERÃO"}
          </text>
          <text
            x={0}
            y={solNoSul ? -35 : 45}
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#bfdbfe"
          >
            INVERNO
          </text>
        </g>

        <text x={230} y={215} textAnchor="middle" fontSize="10" fill="#e5e7eb">
          Hemisfério inclinado <tspan fill="#fbbf24" fontWeight="700">para o Sol</tspan> → verão
        </text>
      </svg>

      <div className="mt-2 text-center text-[11px] text-white/60">
        A inclinação do eixo (23,5°) é o que causa as estações — não a distância ao Sol.
      </div>
    </div>
  );
}

/* ================================================================== */
/* 3) ÓRBITA — arraste a Terra ao longo da órbita para ver 1 ano       */
/* ================================================================== */

function OrbitaTerra() {
  const [ang, setAng] = useState(0); // 0..360
  const dragging = useRef(false);
  const wrapRef = useRef<SVGSVGElement>(null);

  const CX = 170;
  const CY = 120;
  const RX = 130;
  const RY = 70;

  const posX = CX + RX * Math.cos((ang * Math.PI) / 180);
  const posY = CY + RY * Math.sin((ang * Math.PI) / 180);

  const setFromPointer = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // converte para coordenadas do viewBox
    const vx = ((clientX - r.left) / r.width) * 340 - CX;
    const vy = ((clientY - r.top) / r.height) * 240 - CY;
    const a = (Math.atan2(vy, vx) * 180) / Math.PI;
    setAng(a);
  };

  // Mês aproximado com base no ângulo (0° = mar, 90° = jun, 180° = set, 270° = dez)
  const meses = ["Março", "Junho", "Setembro", "Dezembro"];
  const idx = Math.round(((ang + 360) % 360) / 90) % 4;
  const mesAtual = meses[idx];

  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-white/50 text-center mb-2">
        arraste a Terra pela órbita
      </div>
      <svg
        ref={wrapRef}
        viewBox="0 0 340 240"
        className="w-full h-auto touch-none select-none"
        onMouseDown={(e) => {
          dragging.current = true;
          setFromPointer(e.clientX, e.clientY);
        }}
        onMouseMove={(e) => {
          if (dragging.current) setFromPointer(e.clientX, e.clientY);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => {
          dragging.current = true;
          const t = e.touches[0];
          setFromPointer(t.clientX, t.clientY);
        }}
        onTouchMove={(e) => {
          if (!dragging.current) return;
          const t = e.touches[0];
          setFromPointer(t.clientX, t.clientY);
        }}
        onTouchEnd={() => (dragging.current = false)}
      >
        <defs>
          <radialGradient id="solOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="rgba(245,158,11,0)" />
          </radialGradient>
          <radialGradient id="terraOrb" cx="40%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="80%" stopColor="#1e3a8a" />
          </radialGradient>
        </defs>

        {/* Órbita */}
        <ellipse
          cx={CX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeDasharray="3 4"
        />

        {/* Sol */}
        <circle cx={CX} cy={CY} r={26} fill="url(#solOrb)" />
        <text x={CX} y={CY + 4} textAnchor="middle" fontSize="10" fill="#7c2d12" fontWeight="700">SOL</text>

        {/* Marcadores dos meses */}
        {[0, 90, 180, 270].map((a, i) => {
          const x = CX + RX * Math.cos((a * Math.PI) / 180);
          const y = CY + RY * Math.sin((a * Math.PI) / 180);
          return (
            <g key={a}>
              <circle cx={x} cy={y} r={3} fill="rgba(255,255,255,0.4)" />
              <text x={x} y={y - 8} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)">
                {meses[i]}
              </text>
            </g>
          );
        })}

        {/* Terra */}
        <g transform={`translate(${posX} ${posY})`}>
          <circle r={18} fill="url(#terraOrb)" stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
          <text y={4} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">TERRA</text>
        </g>

        <text x={CX} y={225} textAnchor="middle" fontSize="11" fill="#e5e7eb">
          Posição: <tspan fill="#fbbf24" fontWeight="700">{mesAtual}</tspan> — 1 volta = 1 ano (365,25 dias)
        </text>
      </svg>
      <div className="mt-2 text-center text-[11px] text-white/60">
        A volta completa em torno do Sol é a <span className="text-amber-300">Translação</span>.
      </div>
    </div>
  );
}
