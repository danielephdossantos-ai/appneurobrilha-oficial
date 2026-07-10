/**
 * Componente visual central dinâmico para o PlayerGeoV2.
 * Renderiza esquemas didáticos em abas conforme o `tipo` do roteiro visual.
 * Fallback: card ilustrativo genérico com ícone + descrição.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Orbit, Compass, Sparkles, Snowflake, Flame } from "lucide-react";
import type { RoteiroVisual } from "./dados-fund2";
import planetaTerra from "@/assets/geo-fund2/planeta-terra.png";

/** Terra realista reutilizável (foto NASA-style com borda atmosférica). */
function TerraReal({
  size = 96,
  spin = 0,
  className = "",
  shadow,
}: {
  size?: number;
  /** duração em segundos de uma rotação completa; 0 = sem giro */
  spin?: number;
  className?: string;
  /** sombreamento de hemisfério para simular iluminação do Sol */
  shadow?: "norte" | "sul" | "leste" | "oeste" | null;
}) {
  const shadowGradient =
    shadow === "norte"
      ? "radial-gradient(ellipse 120% 80% at 50% 110%, transparent 40%, rgba(2,6,23,0.85) 85%)"
      : shadow === "sul"
      ? "radial-gradient(ellipse 120% 80% at 50% -10%, transparent 40%, rgba(2,6,23,0.85) 85%)"
      : shadow === "leste"
      ? "radial-gradient(ellipse 80% 120% at -10% 50%, transparent 40%, rgba(2,6,23,0.85) 85%)"
      : shadow === "oeste"
      ? "radial-gradient(ellipse 80% 120% at 110% 50%, transparent 40%, rgba(2,6,23,0.85) 85%)"
      : null;
  return (
    <div
      className={`relative rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 28px rgba(56,189,248,0.35), inset 0 0 12px rgba(191,219,254,0.15)",
      }}
    >
      <motion.img
        src={planetaTerra}
        alt="Planeta Terra"
        width={size}
        height={size}
        loading="lazy"
        className="absolute inset-0 h-full w-full rounded-full object-cover select-none pointer-events-none"
        animate={spin > 0 ? { rotate: 360 } : undefined}
        transition={spin > 0 ? { duration: spin, repeat: Infinity, ease: "linear" } : undefined}
      />
      {shadowGradient && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: shadowGradient, mixBlendMode: "multiply" }}
        />
      )}
      {/* Halo atmosférico */}
      <div className="absolute inset-0 rounded-full ring-1 ring-cyan-200/30 pointer-events-none" />
    </div>
  );
}

export function VisualEsquematico({ roteiro }: { roteiro: RoteiroVisual }) {
  if (roteiro.tipo === "terra-orbita") return <TerraOrbita legenda={roteiro.legenda} />;
  return <Generico roteiro={roteiro} />;
}

/** Mini animação embutida em cada etapa do passo a passo. */
export function MiniPalco({ tipo }: { tipo: "rotacao" | "translacao" | "inclinacao" | "piao" }) {
  return (
    <div className={`relative rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 p-3 overflow-hidden ${tipo === "piao" ? "h-[260px]" : "h-[180px]"}`}>
      {tipo === "rotacao" && <PalcoRotacao />}
      {tipo === "translacao" && <PalcoTranslacao />}
      {tipo === "inclinacao" && <PalcoInclinacao />}
      {tipo === "piao" && <PalcoPiao />}
    </div>
  );
}

/** --- Palco 0: Pião (metáfora — Terra como pião inclinado que gira) --- */
function PalcoPiao() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center gap-2"
    >
      {/* Chão / reflexo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-2 rounded-full bg-cyan-400/20 blur-md" />

      {/* Pião inclinado: Terra real girando com eixo inclinado ~23° */}
      <div className="relative" style={{ transform: "rotate(18deg)" }}>
        {/* Eixo do pião (prolongado acima e abaixo) */}
        <div className="absolute left-1/2 -top-8 h-[calc(100%+4rem)] w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-500 shadow-[0_0_10px_rgba(248,113,113,0.7)]" />
        {/* Terra real girando */}
        <TerraReal size={110} spin={6} />
        {/* Ponta metálica do pião */}
        <div className="mx-auto -mt-2 h-4 w-4 rotate-45 bg-gradient-to-br from-slate-300 to-slate-500 shadow-md" />
      </div>

      {/* Marca de ângulo */}
      <div className="absolute top-3 right-3 font-mono text-[10px] text-red-300 border border-red-400/40 rounded px-1.5 py-0.5 bg-slate-950/60">
        eixo ≈ 23°
      </div>

      <div className="text-center text-slate-300 text-xs mt-2 max-w-[260px]">
        A Terra é como um <span className="text-cyan-300 font-medium">pião inclinado</span> que gira sem parar — desse giro nascem o dia, a noite e as estações.
      </div>
    </motion.div>
  );
}


/* ============================================================
   ESQUEMA: TERRA EM ÓRBITA (Rotação · Translação · Inclinação)
   ============================================================ */

type AbaTerra = "rotacao" | "translacao" | "inclinacao";

function TerraOrbita({ legenda }: { legenda: string }) {
  const [aba, setAba] = useState<AbaTerra>("rotacao");

  const abas: Array<{ id: AbaTerra; rotulo: string; Icon: typeof Sun }> = [
    { id: "rotacao", rotulo: "Rotação", Icon: Orbit },
    { id: "translacao", rotulo: "Translação", Icon: Sun },
    { id: "inclinacao", rotulo: "Inclinação", Icon: Compass },
  ];

  return (
    <div className="space-y-3">
      {/* Abas */}
      <div className="flex gap-1 rounded-lg border border-slate-700 bg-slate-950/60 p-1">
        {abas.map((a) => {
          const ativa = aba === a.id;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => setAba(a.id)}
              className={[
                "flex-1 flex items-center justify-center gap-1.5 rounded-md px-2 py-2 text-xs font-medium transition",
                ativa
                  ? "bg-cyan-500 text-slate-950"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-slate-900",
              ].join(" ")}
            >
              <a.Icon className="h-3.5 w-3.5" />
              <span>{a.rotulo}</span>
            </button>
          );
        })}
      </div>

      {/* Palco visual */}
      <div className="relative rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait">
          {aba === "rotacao" && <PalcoRotacao key="rot" />}
          {aba === "translacao" && <PalcoTranslacao key="tra" />}
          {aba === "inclinacao" && <PalcoInclinacao key="inc" />}
        </AnimatePresence>
      </div>

      {/* Legenda didática */}
      <div className="rounded-lg border-l-2 border-cyan-400 bg-cyan-500/5 px-3 py-2">
        <div className="text-[10px] uppercase tracking-widest text-cyan-400 mb-0.5">Legenda</div>
        <p className="text-slate-300 text-xs leading-relaxed italic">{legenda}</p>
      </div>
    </div>
  );
}

/* --- Palco 1: Rotação (Dia × Noite) --- */
function PalcoRotacao() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-2 gap-3 h-full"
    >
      {/* Dia */}
      <div className="relative rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-400/30 p-4 flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sun className="h-12 w-12 text-amber-300" strokeWidth={1.5} />
        </motion.div>
        <div className="mt-3 text-amber-200 font-serif text-lg">DIA</div>
        <div className="text-amber-100/70 text-[11px] text-center mt-1">Lado da Terra virado para o Sol</div>
      </div>
      {/* Noite */}
      <div className="relative rounded-lg bg-gradient-to-br from-indigo-900/60 to-slate-900 border border-indigo-400/30 p-4 flex flex-col items-center justify-center">
        <div className="relative">
          <Moon className="h-12 w-12 text-indigo-200" strokeWidth={1.5} />
          <Sparkles className="absolute -top-1 -right-2 h-3 w-3 text-indigo-300 animate-pulse" />
        </div>
        <div className="mt-3 text-indigo-100 font-serif text-lg">NOITE</div>
        <div className="text-indigo-200/70 text-[11px] text-center mt-1">Lado oposto, no escuro</div>
      </div>
      <div className="col-span-2 text-center text-slate-400 text-xs">
        A Terra gira <span className="text-cyan-300 font-medium">24 horas</span> em torno do próprio eixo.
      </div>
    </motion.div>
  );
}

/* --- Palco 2: Translação (Terra ao redor do Sol) --- */
function PalcoTranslacao() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-[240px] flex items-center justify-center"
    >
      {/* Órbita elíptica */}
      <div className="absolute inset-x-6 inset-y-8 rounded-[50%] border-2 border-dashed border-cyan-500/40" />

      {/* Sol no centro */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-10"
      >
        <div className="absolute inset-0 rounded-full bg-amber-400/40 blur-2xl scale-150" />
        <Sun className="h-16 w-16 text-amber-300 relative" strokeWidth={1.5} />
      </motion.div>

      {/* Terra orbitando */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-6 inset-y-8"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <TerraReal size={36} spin={12} />
        </div>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 text-center text-slate-400 text-xs">
        Uma volta completa = <span className="text-cyan-300 font-medium">365 dias e 6h</span> = 1 ano
      </div>
    </motion.div>
  );
}

/* --- Palco 3: SIMULADOR de Estações (Sol + Terra com botões) --- */
function PalcoInclinacao() {
  const [cenario, setCenario] = useState<"verao-sul" | "inverno-sul">("verao-sul");
  const veraoSul = cenario === "verao-sul";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-3"
    >
      {/* Palco espacial */}
      <div className="relative h-[240px] rounded-lg border border-cyan-500/30 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.35),rgba(2,6,23,0.95))] overflow-hidden">
        {/* estrelas */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/70"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.3 + ((i * 7) % 7) / 10,
            }}
          />
        ))}

        {/* Sol */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-amber-400/40 blur-2xl scale-[2.2]" />
          <Sun className="relative h-14 w-14 text-amber-300" strokeWidth={1.5} />
        </div>

        {/* Raios de luz direcionais */}
        <motion.div
          key={cenario + "-rays"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col gap-1"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-0.5 w-40 rounded-full bg-gradient-to-r from-amber-300/80 to-transparent"
              style={{ transform: `rotate(${veraoSul ? 8 : -8}deg)`, transformOrigin: "left center" }}
            />
          ))}
        </motion.div>

        {/* Terra com eixo inclinado */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <motion.div
            key={cenario + "-earth"}
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="relative h-24 w-24"
          >
            {/* Eixo inclinado 23° */}
            <div className="absolute left-1/2 -top-4 h-32 w-[3px] -translate-x-1/2 rotate-[23deg] rounded-full bg-red-400 origin-center shadow-[0_0_8px_rgba(248,113,113,0.7)]" />
            {/* Rótulos N/S */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 rotate-[23deg] text-[9px] font-mono text-red-300">N</div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rotate-[23deg] text-[9px] font-mono text-red-300">S</div>

            {/* Corpo Terra com sombreamento condicional */}
            <div
              className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-cyan-200/50 shadow-lg shadow-cyan-500/30"
              style={{
                background: veraoSul
                  ? "radial-gradient(circle at 30% 75%, #93c5fd 0%, #2563eb 45%, #0f172a 90%)"
                  : "radial-gradient(circle at 30% 25%, #93c5fd 0%, #2563eb 45%, #0f172a 90%)",
              }}
            >
              {/* Marcação hemisfério iluminado */}
              <div
                className={[
                  "absolute left-2 text-[9px] font-mono font-bold rounded px-1 backdrop-blur-sm",
                  veraoSul ? "bottom-2 bg-rose-500/80 text-white" : "bottom-2 bg-slate-950/70 text-sky-200",
                ].join(" ")}
              >
                HS {veraoSul ? "☀" : "❄"}
              </div>
              <div
                className={[
                  "absolute right-2 text-[9px] font-mono font-bold rounded px-1 backdrop-blur-sm",
                  veraoSul ? "top-2 bg-slate-950/70 text-sky-200" : "top-2 bg-rose-500/80 text-white",
                ].join(" ")}
              >
                HN {veraoSul ? "❄" : "☀"}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marcador de época */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 rounded border border-cyan-500/40 bg-slate-950/80 backdrop-blur px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
          {veraoSul ? "DEZ · JAN · FEV" : "JUN · JUL · AGO"}
        </div>
      </div>

      {/* Botões interativos */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setCenario("verao-sul")}
          className={[
            "rounded-lg border px-3 py-2.5 text-xs font-medium transition flex items-center justify-center gap-1.5",
            veraoSul
              ? "border-rose-400 bg-rose-500/20 text-rose-100 shadow-inner shadow-rose-500/30"
              : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-rose-400/60 hover:text-rose-200",
          ].join(" ")}
        >
          <Flame className="h-3.5 w-3.5" />
          Verão no Sul
        </button>
        <button
          type="button"
          onClick={() => setCenario("inverno-sul")}
          className={[
            "rounded-lg border px-3 py-2.5 text-xs font-medium transition flex items-center justify-center gap-1.5",
            !veraoSul
              ? "border-sky-400 bg-sky-500/20 text-sky-100 shadow-inner shadow-sky-500/30"
              : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-sky-400/60 hover:text-sky-200",
          ].join(" ")}
        >
          <Snowflake className="h-3.5 w-3.5" />
          Inverno no Sul
        </button>
      </div>

      {/* Explicação dinâmica */}
      <div className="rounded-lg border-l-2 border-cyan-400 bg-cyan-500/5 px-3 py-2">
        <p className="text-slate-300 text-xs leading-relaxed">
          {veraoSul
            ? "O eixo inclina o Hemisfério Sul em direção ao Sol: raios batem mais direto, aquecem mais → Verão no HS / Inverno no HN."
            : "O eixo inclina o Hemisfério Norte em direção ao Sol: o HS fica afastado, raios chegam oblíquos → Inverno no HS / Verão no HN."}
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   FALLBACK GENÉRICO
   ============================================================ */

function Generico({ roteiro }: { roteiro: RoteiroVisual }) {
  return (
    <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 p-5 space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-cyan-300" />
        <div className="text-[11px] uppercase tracking-widest text-cyan-400">{roteiro.foco}</div>
      </div>
      <p className="text-slate-200 text-sm leading-relaxed">{roteiro.descricao}</p>
      <div className="rounded-lg border-l-2 border-cyan-400 bg-cyan-500/5 px-3 py-2">
        <div className="text-[10px] uppercase tracking-widest text-cyan-400 mb-0.5">Legenda</div>
        <p className="text-slate-300 text-xs leading-relaxed italic">{roteiro.legenda}</p>
      </div>
    </div>
  );
}
