import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Volume2, ChevronRight, Star, Check, X } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { ActivityLesson, PraticarOption, MathStep, VisualConfig } from "../types/activity-lesson";
import { AudioSpeechService } from "../services/AudioSpeechService";
import pipImg from "@/assets/pip-mascot.png";
import pipaImg from "@/assets/pip-girl-mascot.png";
import { RenderEmoji } from "@/components/neuro-treino/RenderEmoji";

interface ActivityPlayerProps {
  lesson: ActivityLesson;
}

type ScreenId = "explicacao" | "exploracao" | "explicacao_curta" | "exemplo_visual" | "praticar";

const SCREENS: { id: ScreenId; label: string; color: string; dot: string }[] = [
  { id: "explicacao", label: "EXPLICAÇÃO", color: "bg-violet-500", dot: "bg-violet-500" },
  { id: "exploracao", label: "EXPLORAÇÃO", color: "bg-teal-500", dot: "bg-teal-500" },
  { id: "explicacao_curta", label: "EXPLICAÇÃO CURTA", color: "bg-blue-500", dot: "bg-blue-500" },
  { id: "exemplo_visual", label: "EXEMPLO VISUAL", color: "bg-amber-500", dot: "bg-amber-500" },
  { id: "praticar", label: "VAMOS PRATICAR", color: "bg-emerald-500", dot: "bg-emerald-500" },
];

const OPTION_STYLES: Record<string, string> = {
  red: "bg-red-500    border-red-700    hover:bg-red-400",
  green: "bg-emerald-500 border-emerald-700 hover:bg-emerald-400",
  orange: "bg-orange-500 border-orange-700 hover:bg-orange-400",
  blue: "bg-blue-500   border-blue-700   hover:bg-blue-400",
  purple: "bg-violet-500 border-violet-700 hover:bg-violet-400",
  yellow: "bg-yellow-400 border-yellow-600 hover:bg-yellow-300",
};

/* ════════════════════════════════════════════════
   VISUAL COMPONENTS
   ════════════════════════════════════════════════ */

/** Shows equation steps one by one with coloured highlight */
const MathStepsVisual: React.FC<{ steps: MathStep[]; startDelay?: number }> = ({
  steps,
  startDelay = 400,
}) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const reveal = async () => {
      for (let i = 0; i < steps.length; i++) {
        await new Promise((r) => setTimeout(r, startDelay + i * 750));
        setRevealed((prev) => [...prev, i]);
      }
    };
    reveal();
  }, [steps.length, startDelay]);

  const colorClass: Record<string, string> = {
    blue: "bg-blue-50   border-blue-300   text-blue-800",
    green: "bg-emerald-50 border-emerald-300 text-emerald-800",
    orange: "bg-orange-50 border-orange-300 text-orange-800",
    purple: "bg-violet-50 border-violet-300 text-violet-800",
    teal: "bg-teal-50   border-teal-300   text-teal-800",
  };

  return (
    <div className="space-y-2 my-3">
      {steps.map((step, i) => (
        <AnimatePresence key={i}>
          {revealed.includes(i) && (
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`border-2 rounded-2xl px-4 py-3 ${colorClass[step.color ?? "blue"]}
                ${step.highlight ? "ring-4 ring-yellow-300 shadow-lg scale-105" : ""}`}
            >
              {step.label && (
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-0.5">
                  {step.label}
                </p>
              )}
              <p className="font-black text-lg text-center leading-snug">{step.expr}</p>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

/** Premium 2D SVG Pizza divided into 4 labelled slices — interactive fraction visual */
const FractionBarVisual: React.FC<{ fraction: NonNullable<VisualConfig["fraction"]> }> = ({
  fraction,
}) => {
  const [mode, setMode] = useState(0); // 0=1/4  1=2/4  2=3/4
  const [visibleSlices, setVisibleSlices] = useState<number[]>([]);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const go = async () => {
      for (let i = 0; i < 4; i++) {
        await new Promise((r) => setTimeout(r, 200 + i * 280));
        setVisibleSlices((p) => [...p, i]);
      }
    };
    go();
  }, []);

  const cx = 130,
    cy = 130,
    rCrust = 122,
    rFill = 108;

  const polar = (r: number, deg: number) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  });

  const wedge = (start: number, end: number) => {
    const s = polar(rFill, start);
    const e = polar(rFill, end);
    const large = end - start > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${s.x.toFixed(1)} ${s.y.toFixed(1)} A ${rFill} ${rFill} 0 ${large} 1 ${e.x.toFixed(1)} ${e.y.toFixed(1)} Z`;
  };

  const slices = [
    { start: -90, end: 0, mid: -45 },
    { start: 0, end: 90, mid: 45 },
    { start: 90, end: 180, mid: 135 },
    { start: 180, end: 270, mid: 225 },
  ];

  const modes = [
    { count: 1, top: "1", bot: "4", label: "1/4", name: "um quarto", color: "#EF4444" },
    { count: 2, top: "2", bot: "4", label: "2/4", name: "= ½ metade", color: "#F97316" },
    { count: 3, top: "3", bot: "4", label: "3/4", name: "três quartos", color: "#8B5CF6" },
  ];

  const highlighted = modes[mode].count;
  const modeColor = modes[mode].color;

  /* toppings per slice (decorative) */
  const toppings = [
    [
      { dx: -28, dy: -18 },
      { dx: -10, dy: -38 },
    ],
    [
      { dx: 28, dy: -18 },
      { dx: 10, dy: -38 },
    ],
    [
      { dx: 28, dy: 18 },
      { dx: 10, dy: 38 },
    ],
    [
      { dx: -28, dy: 18 },
      { dx: -10, dy: 38 },
    ],
  ];

  return (
    <div className="my-2 text-center select-none">
      {/* SVG PIZZA */}
      <div className="flex justify-center">
        <svg width="260" height="260" viewBox="0 0 260 260">
          {/* Drop shadow */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#0002" />
          </filter>

          {/* Outer crust */}
          <circle cx={cx} cy={cy} r={rCrust} fill="#C2823A" filter="url(#shadow)" />
          {/* Crust highlight ring */}
          <circle
            cx={cx}
            cy={cy}
            r={rCrust - 2}
            fill="none"
            stroke="#E5A55A"
            strokeWidth="4"
            strokeDasharray="6 4"
          />
          {/* Cheese base */}
          <circle cx={cx} cy={cy} r={rFill} fill="#FDE68A" />

          {/* Wedges */}
          {slices.map((s, i) => {
            if (!visibleSlices.includes(i)) return null;
            const isLit = i < highlighted;
            const mp = polar(rFill * 0.58, s.mid);
            return (
              <g key={i}>
                <motion.path
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  d={wedge(s.start, s.end)}
                  fill={isLit ? modeColor : "#FBBF24"}
                  stroke="#D97706"
                  strokeWidth="1.5"
                />
                {/* Sauce circle on highlighted */}
                {isLit && <circle cx={mp.x} cy={mp.y} r={14} fill={modeColor} opacity={0.25} />}
                {/* Decorative toppings (pepperoni) */}
                {toppings[i].map((t, ti) => (
                  <circle
                    key={ti}
                    cx={cx + t.dx}
                    cy={cy + t.dy}
                    r={5}
                    fill={isLit ? "#7F1D1D" : "#B45309"}
                    opacity={0.7}
                  />
                ))}
                {/* Fraction label */}
                <text
                  x={mp.x}
                  y={mp.y - 5}
                  textAnchor="middle"
                  fill={isLit ? "white" : "#78350F"}
                  fontSize="15"
                  fontWeight="900"
                >
                  1
                </text>
                <line
                  x1={mp.x - 7}
                  y1={mp.y + 1}
                  x2={mp.x + 7}
                  y2={mp.y + 1}
                  stroke={isLit ? "white" : "#78350F"}
                  strokeWidth="1.5"
                />
                <text
                  x={mp.x}
                  y={mp.y + 15}
                  textAnchor="middle"
                  fill={isLit ? "white" : "#78350F"}
                  fontSize="15"
                  fontWeight="900"
                >
                  4
                </text>
              </g>
            );
          })}

          {/* Divider lines */}
          {[-90, 0, 90, 180].map((a) => {
            const e = polar(rFill, a);
            return (
              <line
                key={a}
                x1={cx}
                y1={cy}
                x2={e.x.toFixed(1)}
                y2={e.y.toFixed(1)}
                stroke="#D97706"
                strokeWidth="2"
              />
            );
          })}

          {/* Centre circle */}
          <circle cx={cx} cy={cy} r={18} fill="white" stroke="#D97706" strokeWidth="2" />
          <text
            x={cx}
            y={cy - 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#D97706"
            fontSize="11"
            fontWeight="900"
          >
            1/4
          </text>
        </svg>
      </div>

      {/* Mode buttons */}
      <div className="flex gap-2 justify-center mt-1">
        {modes.map((m, i) => (
          <button
            key={m.label}
            onClick={() => setMode(i)}
            style={mode === i ? { background: m.color } : {}}
            className={`px-3 py-1.5 rounded-xl font-black text-sm transition active:scale-95 shadow-sm
              ${mode === i ? "text-white shadow-md" : "bg-slate-100 text-slate-600"}`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="text-xs font-bold text-slate-500 mt-1">{modes[mode].name}</p>

      {/* Formula banner */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{ background: modeColor }}
          className="mt-3 text-white rounded-2xl px-4 py-2.5 inline-block shadow-lg"
        >
          <p className="font-black text-xs uppercase tracking-wider opacity-80">
            Numerador ÷ Denominador = Fração
          </p>
          <p className="font-black text-2xl mt-0.5 tracking-wide">
            {modes[mode].top} ÷ 4 = {modes[mode].label}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/** Multiplication grid — groups of emoji appearing one at a time */
const MultiplicationGridVisual: React.FC<{ mult: NonNullable<VisualConfig["multiplication"]> }> = ({
  mult,
}) => {
  const [visibleGroups, setVisibleGroups] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const reveal = async () => {
      for (let g = 0; g < mult.groups; g++) {
        await new Promise((r) => setTimeout(r, 400 + g * 600));
        setVisibleGroups((p) => p + 1);
      }
    };
    reveal();
  }, [mult.groups]);

  return (
    <div className="my-4">
      <div className="flex gap-3 justify-center flex-wrap">
        {Array.from({ length: mult.groups }).map((_, g) => (
          <AnimatePresence key={g}>
            {g < visibleGroups && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-3 flex flex-col items-center gap-1"
              >
                <div
                  className={`grid gap-1 ${mult.items_per_group <= 4 ? "grid-cols-2" : "grid-cols-3"}`}
                >
                  {Array.from({ length: mult.items_per_group }).map((_, i) => (
                    <span key={i} className="text-2xl leading-none">
                      {mult.emoji}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-black text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full mt-1">
                  {mult.items_per_group}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      <AnimatePresence>
        {visibleGroups >= mult.groups && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-3 text-center bg-orange-500 text-white rounded-2xl py-3 shadow-lg"
          >
            <span className="font-black text-2xl">
              {mult.groups} × {mult.items_per_group} = {mult.groups * mult.items_per_group}{" "}
              {mult.emoji}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** Counter grid — emoji that disappear when tapped/counted */
const CounterGridVisual: React.FC<{ counter: NonNullable<VisualConfig["counter"]> }> = ({
  counter,
}) => {
  const [removed, setRemoved] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleTap = (i: number) => {
    if (removed.includes(i) || showResult) return;
    const next = [...removed, i];
    setRemoved(next);
    if (next.length >= counter.items.length - counter.answer) {
      setTimeout(() => setShowResult(true), 400);
    }
  };

  const remaining = counter.items.length - removed.length;

  return (
    <div className="my-4 text-center">
      <p className="text-xs font-bold text-slate-500 mb-2">Toque para remover os itens!</p>
      <div className="flex flex-wrap gap-2 justify-center mb-3">
        {counter.items.map((emoji, i) => (
          <motion.button
            key={i}
            onClick={() => handleTap(i)}
            animate={removed.includes(i) ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
            className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center text-2xl shadow-sm active:scale-90 transition-all"
          >
            {!removed.includes(i) && emoji}
          </motion.button>
        ))}
      </div>
      <p className="text-sm font-bold text-slate-600">
        Sobraram: <span className="text-violet-700 font-black text-lg">{remaining}</span>
      </p>
      {showResult && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-2 bg-emerald-100 border-2 border-emerald-300 rounded-2xl py-2 px-4"
        >
          <p className="font-black text-emerald-700">Isso mesmo! {counter.answer} frutas!</p>
        </motion.div>
      )}
    </div>
  );
};

/* ─── PIZZA BITE — pedaço some ao ser comido ─── */
const PizzaBiteVisual: React.FC<{ bite: NonNullable<VisualConfig["pizza_bite"]> }> = ({ bite }) => {
  const [phase, setPhase] = useState(0);
  // 0 = pizza inteira aparece  |  1 = pedaço comido voa para fora  |  2 = fórmula aparece
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    setTimeout(() => setPhase(1), 1400);
    setTimeout(() => setPhase(2), 2600);
  }, []);

  const { total, eaten } = bite;
  const cx = 118,
    cy = 118,
    rCrust = 110,
    rFill = 96;

  const polar = (r: number, deg: number) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  });

  const sliceAngle = 360 / total;

  const wedgePath = (idx: number) => {
    const start = -90 + idx * sliceAngle;
    const end = start + sliceAngle;
    const s = polar(rFill, start);
    const e = polar(rFill, end);
    const large = sliceAngle > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${s.x.toFixed(1)} ${s.y.toFixed(1)} A ${rFill} ${rFill} 0 ${large} 1 ${e.x.toFixed(1)} ${e.y.toFixed(1)} Z`;
  };

  const midAngle = (idx: number) => -90 + idx * sliceAngle + sliceAngle / 2;

  /* toppings (pepperoni): 2 per slice */
  const toppingOffsets = [
    [
      { r: 0.42, a: -30 },
      { r: 0.65, a: 10 },
    ],
    [
      { r: 0.42, a: 60 },
      { r: 0.65, a: 100 },
    ],
    [
      { r: 0.42, a: 150 },
      { r: 0.65, a: 190 },
    ],
    [
      { r: 0.42, a: 240 },
      { r: 0.65, a: 280 },
    ],
  ];

  const remaining = total - eaten;

  return (
    <div className="text-center select-none">
      {/* Step label */}
      <div className="mb-2">
        {phase === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-black text-amber-700 bg-amber-50 rounded-xl px-3 py-1 inline-block border border-amber-200"
          >
            Pizza inteira — {total} pedaços iguais
          </motion.p>
        )}
        {phase === 1 && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black text-red-700 bg-red-50 rounded-xl px-3 py-1 inline-block border border-red-200"
          >
            Um pedaço foi comido — veja sumir!
          </motion.p>
        )}
        {phase === 2 && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black text-green-700 bg-green-50 rounded-xl px-3 py-1 inline-block border border-green-200"
          >
            Sobraram {remaining} pedaços de {total}
          </motion.p>
        )}
      </div>

      {/* PIZZA SVG */}
      <div className="flex justify-center overflow-visible">
        <svg width="236" height="236" viewBox="0 0 236 236" overflow="visible">
          <filter id="bshadow">
            <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#00000022" />
          </filter>
          {/* Crust base */}
          <circle cx={cx} cy={cy} r={rCrust} fill="#C2823A" filter="url(#bshadow)" />
          {/* Crust ring */}
          <circle
            cx={cx}
            cy={cy}
            r={rCrust - 2}
            fill="none"
            stroke="#E8B06A"
            strokeWidth="5"
            strokeDasharray="7 4"
          />
          {/* Cheese layer */}
          <circle cx={cx} cy={cy} r={rFill} fill="#FDE68A" />

          {/* Slices */}
          {Array.from({ length: total }).map((_, i) => {
            const isEaten = i < eaten;
            const mid = midAngle(i);
            const mp = polar(rFill * 0.58, mid);
            const flyVec = polar(280, mid); // direction to fly off screen

            return (
              <motion.g
                key={i}
                animate={
                  isEaten && phase >= 1
                    ? { x: flyVec.x - cx, y: flyVec.y - cy, opacity: 0, scale: 0.15 }
                    : { x: 0, y: 0, opacity: 1, scale: 1 }
                }
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 14, duration: 0.7 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                {/* Wedge fill */}
                <path
                  d={wedgePath(i)}
                  fill={isEaten ? "#EF4444" : "#FCD34D"}
                  stroke="#D97706"
                  strokeWidth="1.5"
                />

                {/* Sauce pool */}
                {isEaten && <circle cx={mp.x} cy={mp.y} r={16} fill="#EF4444" opacity={0.18} />}

                {/* Pepperoni toppings */}
                {(toppingOffsets[i] ?? []).map((t, ti) => {
                  const tp = polar(rFill * t.r, t.a);
                  return (
                    <circle
                      key={ti}
                      cx={tp.x}
                      cy={tp.y}
                      r={5}
                      fill={isEaten ? "#7F1D1D" : "#B45309"}
                      opacity={0.75}
                    />
                  );
                })}

                {/* Fraction label: numerator / line / denominator */}
                <text
                  x={mp.x}
                  y={mp.y - 6}
                  textAnchor="middle"
                  fill={isEaten ? "white" : "#78350F"}
                  fontSize="13"
                  fontWeight="900"
                >
                  1
                </text>
                <line
                  x1={mp.x - 7}
                  y1={mp.y}
                  x2={mp.x + 7}
                  y2={mp.y}
                  stroke={isEaten ? "white" : "#78350F"}
                  strokeWidth="1.8"
                />
                <text
                  x={mp.x}
                  y={mp.y + 14}
                  textAnchor="middle"
                  fill={isEaten ? "white" : "#78350F"}
                  fontSize="13"
                  fontWeight="900"
                >
                  {total}
                </text>
              </motion.g>
            );
          })}

          {/* Divider lines */}
          {Array.from({ length: total }).map((_, i) => {
            const angle = -90 + i * sliceAngle;
            const e = polar(rFill, angle);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={e.x.toFixed(1)}
                y2={e.y.toFixed(1)}
                stroke="#D97706"
                strokeWidth="1.8"
              />
            );
          })}

          {/* Centre label */}
          <circle cx={cx} cy={cy} r={18} fill="white" stroke="#D97706" strokeWidth="2" />
          <text
            x={cx}
            y={cy + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontWeight="900"
            fill="#D97706"
          >
            PIZZA
          </text>
        </svg>
      </div>

      {/* Logic build — appears progressively */}
      <div className="space-y-2 mt-3">
        <motion.div className="bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-blue-500 text-white font-black text-sm flex items-center justify-center shrink-0">
            D
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-wider">
              Denominador
            </p>
            <p className="font-black text-blue-800 text-base">Pizza inteira = {total} pedaços</p>
          </div>
        </motion.div>

        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 border-2 border-red-200 rounded-xl px-4 py-2.5 flex items-center gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-red-500 text-white font-black text-sm flex items-center justify-center shrink-0">
                N
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-red-400 uppercase tracking-wider">
                  Numerador
                </p>
                <p className="font-black text-red-800 text-base">Comemos → {eaten} pedaço</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-green-500 text-white rounded-xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-[10px] font-black opacity-80 uppercase tracking-wider">
                Numerador ÷ Denominador = Fração
              </p>
              <p className="font-black text-2xl mt-0.5">
                {eaten} ÷ {total} = {eaten}/{total}
              </p>
              <p className="text-sm opacity-90 mt-0.5">
                {eaten}/{total} da pizza foi comida!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─── GROUP BUILD — grupos de itens construindo o total (multiplicação) ─── */
const GroupBuildVisual: React.FC<{ gb: NonNullable<VisualConfig["group_build"]> }> = ({ gb }) => {
  const [visibleGroups, setVisibleGroups] = useState(0);
  const [showFormula, setShowFormula] = useState(false);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const go = async () => {
      for (let g = 0; g < gb.groups; g++) {
        await new Promise((r) => setTimeout(r, 500 + g * 800));
        setVisibleGroups((p) => p + 1);
      }
      await new Promise((r) => setTimeout(r, 600));
      setShowFormula(true);
    };
    go();
  }, [gb.groups]);

  const runningTotal = visibleGroups * gb.items_per_group;
  const boxColors = ["bg-orange-400", "bg-amber-400", "bg-yellow-400"];

  return (
    <div className="text-center select-none">
      {/* Running total counter */}
      <div className="mb-3 flex items-center justify-center gap-3">
        <div className="bg-slate-100 rounded-xl px-4 py-2 border-2 border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
            Total acumulado
          </p>
          <motion.p
            key={runningTotal}
            initial={{ scale: 1.4, color: "#F97316" }}
            animate={{ scale: 1, color: "#1e293b" }}
            className="font-black text-3xl"
          >
            {runningTotal} {gb.emoji}
          </motion.p>
        </div>
      </div>

      {/* Groups */}
      <div className="flex gap-2 justify-center flex-wrap mb-3">
        {Array.from({ length: gb.groups }).map((_, g) => (
          <AnimatePresence key={g}>
            {g < visibleGroups && (
              <motion.div
                initial={{ opacity: 0, y: -24, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className={`${boxColors[g % boxColors.length]} rounded-2xl p-3 shadow-md`}
              >
                {/* Box label */}
                <p className="text-white font-black text-[10px] text-center mb-1.5 uppercase tracking-wider">
                  Caixa {g + 1}
                </p>
                {/* Items in a 2-col grid */}
                <div
                  className={`grid gap-1 ${gb.items_per_group <= 4 ? "grid-cols-2" : "grid-cols-3"}`}
                >
                  {Array.from({ length: gb.items_per_group }).map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.07 }}
                      className="text-xl leading-none text-center"
                    >
                      {gb.emoji}
                    </motion.span>
                  ))}
                </div>
                <p className="text-white/80 font-black text-xs text-center mt-1.5">
                  +{gb.items_per_group}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Addition bridge */}
      <AnimatePresence>
        {visibleGroups === gb.groups && !showFormula && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 font-black text-base mb-2"
          >
            {Array.from({ length: gb.groups }).map((_, i) => (
              <span key={i}>
                {gb.items_per_group}
                {i < gb.groups - 1 ? " + " : ""}
              </span>
            ))}
            {" = "}
            <span className="text-orange-600 text-xl">{gb.groups * gb.items_per_group}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result formula */}
      <AnimatePresence>
        {showFormula && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-orange-500 text-white rounded-2xl px-5 py-3 shadow-xl"
          >
            <p className="text-xs font-black opacity-80 uppercase tracking-wider mb-0.5">
              grupos × itens = total
            </p>
            <p className="font-black text-2xl">
              {gb.groups} × {gb.items_per_group} = {gb.groups * gb.items_per_group} {gb.emoji}
            </p>
            <p className="text-sm opacity-90 mt-0.5">
              {gb.groups} caixas com {gb.items_per_group} {gb.item_name} ={" "}
              {gb.groups * gb.items_per_group} {gb.item_name}!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** Dispatch the right visual component */
const WordVisual: React.FC<{ items: Array<{ label: string; emoji: string; caption?: string }>; connector?: string; connectorLabel?: string }> = ({ items, connector, connectorLabel }) => (
  <div className="py-4">
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.25, type: "spring", stiffness: 200, damping: 16 }}
            className="flex flex-col items-center gap-1 bg-white rounded-2xl border-2 border-slate-200 px-3 py-3 shadow-sm min-w-[88px]"
          >
            <RenderEmoji e={it.emoji} className="w-16 h-16" />
            <div className="font-black text-slate-800 text-sm uppercase tracking-wide">{it.label}</div>
            {it.caption && <div className="text-[10px] text-slate-500 font-semibold">{it.caption}</div>}
          </motion.div>
          {connector && i < items.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.25 + 0.15, type: "spring", stiffness: 220 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl font-black text-amber-500">{connector}</div>
              {connectorLabel && (
                <div className="text-[9px] font-black text-amber-600 uppercase tracking-widest">{connectorLabel}</div>
              )}
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const VisualBlock: React.FC<{ visual: VisualConfig; startDelay?: number }> = ({
  visual,
  startDelay,
}) => {
  if (visual.type === "math_steps" && visual.math_steps) {
    return <MathStepsVisual steps={visual.math_steps} startDelay={startDelay} />;
  }
  if (visual.type === "fraction_bar" && visual.fraction) {
    return <FractionBarVisual fraction={visual.fraction} />;
  }
  if (visual.type === "pizza_bite" && visual.pizza_bite) {
    return <PizzaBiteVisual bite={visual.pizza_bite} />;
  }
  if (visual.type === "multiplication_grid" && visual.multiplication) {
    return <MultiplicationGridVisual mult={visual.multiplication} />;
  }
  if (visual.type === "group_build" && visual.group_build) {
    return <GroupBuildVisual gb={visual.group_build} />;
  }
  if (visual.type === "counter_grid" && visual.counter) {
    return <CounterGridVisual counter={visual.counter} />;
  }
  if (visual.type === "word_visual" && visual.word_visual) {
    return <WordVisual {...visual.word_visual} />;
  }
  return null;
};

/* ════════════════════════════════════════════════
   MAIN PLAYER
   ════════════════════════════════════════════════ */

export const ActivityPlayer: React.FC<ActivityPlayerProps> = ({ lesson }) => {
  const navigate = useNavigate();
  const [screenIndex, setScreenIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedOption, setSelectedOption] = useState<PraticarOption | null>(null);
  const [completed, setCompleted] = useState(false);
  const [pairsRevealed, setPairsRevealed] = useState<number[]>([]);

  const currentScreen = SCREENS[screenIndex];
  const progress = ((screenIndex + 1) / SCREENS.length) * 100;

  const speak = useCallback(async (text: string) => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(text);
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    setPairsRevealed([]);
    setSelectedOption(null);

    const revealPairs = async () => {
      if (currentScreen.id === "exploracao") {
        for (let i = 0; i < lesson.screens.exploracao.pairs.length; i++) {
          await new Promise((r) => setTimeout(r, 400 + i * 500));
          setPairsRevealed((prev) => [...prev, i]);
        }
      }
    };

    const autoSpeak = async () => {
      await new Promise((r) => setTimeout(r, 300));
      const s = lesson.screens;
      if (currentScreen.id === "explicacao") {
        await speak(
          `${s.explicacao.instruction} ${s.explicacao.highlight}. ${s.explicacao.summary}`,
        );
      } else if (currentScreen.id === "exploracao") {
        await speak(s.exploracao.instruction);
      } else if (currentScreen.id === "explicacao_curta") {
        await speak(s.explicacao_curta.text);
      } else if (currentScreen.id === "exemplo_visual") {
        await speak(s.exemplo_visual.title);
        for (const sentence of s.exemplo_visual.sentences) await speak(sentence.text);
        await speak(s.exemplo_visual.conclusion);
      } else if (currentScreen.id === "praticar") {
        await speak(`${s.praticar.question} ${s.praticar.reference ?? ""}?`);
      }
    };

    revealPairs();
    autoSpeak();
    return () => AudioSpeechService.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIndex]);

  const handleNext = () => {
    if (screenIndex < SCREENS.length - 1) setScreenIndex((p) => p + 1);
  };

  const handleOption = async (opt: PraticarOption) => {
    if (selectedOption) return;
    setSelectedOption(opt);
    if (opt.isCorrect) {
      await speak("Isso mesmo! Você é incrível!");
      setCompleted(true);
    } else {
      await speak("Tente de novo! Você consegue!");
      setTimeout(() => setSelectedOption(null), 1800);
    }
  };

  const replayAudio = async () => {
    const s = lesson.screens;
    if (currentScreen.id === "explicacao")
      speak(`${s.explicacao.instruction} ${s.explicacao.highlight}. ${s.explicacao.summary}`);
    else if (currentScreen.id === "exploracao") speak(s.exploracao.instruction);
    else if (currentScreen.id === "explicacao_curta") speak(s.explicacao_curta.text);
    else if (currentScreen.id === "exemplo_visual") {
      for (const sentence of s.exemplo_visual.sentences) await speak(sentence.text);
      speak(s.exemplo_visual.conclusion);
    } else if (currentScreen.id === "praticar")
      speak(`${s.praticar.question} ${s.praticar.reference ?? ""}?`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50 flex flex-col items-center justify-start p-4 pt-6 pb-10">
      {/* Top bar */}
      <div className="w-full max-w-md mb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-violet-600 hover:bg-violet-50 active:scale-95 transition"
          >
            <Home className="w-5 h-5" />
          </button>
          <div className="flex-1 h-4 bg-white rounded-full overflow-hidden shadow-inner border border-white/60">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80 }}
              className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            />
          </div>
          <div className="shrink-0 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-md border border-yellow-100">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-black text-yellow-500">{lesson.xp}</span>
          </div>
          <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 border-2 border-white shadow-md overflow-hidden">
            <img src={pipaImg} alt="mascot" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {SCREENS.map((s, i) => (
            <div
              key={s.id}
              className={`rounded-full transition-all duration-300 ${
                i === screenIndex
                  ? `w-6 h-3 ${s.dot}`
                  : i < screenIndex
                    ? `w-3 h-3 ${s.dot} opacity-60`
                    : "w-3 h-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen.id}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 130, damping: 18 }}
          className="w-full max-w-md"
        >
          {/* Screen label */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span
              className={`${currentScreen.color} text-white text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-widest`}
            >
              {screenIndex + 1} &nbsp; {currentScreen.label}
            </span>
            <button
              onClick={replayAudio}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-violet-500 hover:bg-violet-50 active:scale-95 transition"
            >
              <Volume2 className={`w-5 h-5 ${isSpeaking ? "animate-pulse text-violet-600" : ""}`} />
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-white overflow-hidden">
            {currentScreen.id === "explicacao" && (
              <ExplicacaoScreen lesson={lesson} isSpeaking={isSpeaking} />
            )}
            {currentScreen.id === "exploracao" && (
              <ExploracaoScreen lesson={lesson} pairsRevealed={pairsRevealed} speak={speak} />
            )}
            {currentScreen.id === "explicacao_curta" && <ExplicacaoCurtaScreen lesson={lesson} />}
            {currentScreen.id === "exemplo_visual" && (
              <ExemploVisualScreen lesson={lesson} speak={speak} />
            )}
            {currentScreen.id === "praticar" && (
              <VamosPraticarScreen
                lesson={lesson}
                selectedOption={selectedOption}
                onSelect={handleOption}
                completed={completed}
              />
            )}
          </div>

          {currentScreen.id !== "praticar" && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 active:scale-95 text-white font-black px-6 py-3 rounded-2xl shadow-lg transition"
              >
                Próximo <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div className="text-center bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 w-full">
                <p className="text-2xl font-black text-emerald-600">Missão Cumprida!</p>
                <p className="text-sm text-emerald-500 font-bold mt-1">
                  +{lesson.xp} XP conquistados!
                </p>
              </div>
              <button
                onClick={() => navigate({ to: "/escola-brilha" })}
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-black py-3 rounded-2xl shadow-lg transition active:scale-95"
              >
                Voltar para o início
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ─── SCREEN 1: EXPLICAÇÃO ─── */
const ExplicacaoScreen: React.FC<{ lesson: ActivityLesson; isSpeaking: boolean }> = ({
  lesson,
  isSpeaking,
}) => {
  const s = lesson.screens.explicacao;
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 px-6 pt-8 pb-24 text-center relative">
        {lesson.screens.explicacao.visual_emoji && (
          <div className="absolute top-4 right-4 text-7xl opacity-15 select-none pointer-events-none">
            {lesson.screens.explicacao.visual_emoji}
          </div>
        )}
        <div className="absolute top-4 left-4 w-14 h-14 bg-white/10 rounded-full" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 rounded-full" />
        <p className="text-white/90 text-base font-bold mb-1">{s.instruction}</p>
        <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg leading-tight">
          {s.highlight}
        </h2>
      </div>
      <div className="relative -mt-20 flex justify-between items-end px-4 pb-2">
        <motion.img
          src={pipaImg}
          alt="Pipa"
          animate={isSpeaking ? { y: [0, -6, 0], scale: [1, 1.04, 1] } : { y: 0 }}
          transition={isSpeaking ? { repeat: Infinity, duration: 0.8 } : {}}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain drop-shadow-xl select-none"
          draggable={false}
        />
        <motion.img
          src={pipImg}
          alt="Pip"
          animate={isSpeaking ? { y: [0, -8, 0], scale: [1, 1.03, 1] } : { y: 0 }}
          transition={isSpeaking ? { repeat: Infinity, duration: 0.9, delay: 0.2 } : {}}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain drop-shadow-xl select-none"
          draggable={false}
        />
      </div>
      <div className="px-5 pb-6 pt-2">
        <div className="bg-violet-50 border-2 border-violet-100 rounded-2xl p-4 text-center">
          <p className="text-violet-800 font-bold text-base leading-snug">{s.summary}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 2: EXPLORAÇÃO ─── */
const ExploracaoScreen: React.FC<{
  lesson: ActivityLesson;
  pairsRevealed: number[];
  speak: (t: string) => Promise<void>;
}> = ({ lesson, pairsRevealed, speak }) => {
  const s = lesson.screens.exploracao;
  return (
    <div className="p-5">
      <p className="text-slate-600 font-bold text-sm mb-4">{s.instruction}</p>
      <div className="space-y-3 mb-3">
        {s.pairs.map((pair, i) => (
          <AnimatePresence key={i}>
            {pairsRevealed.includes(i) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-100 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-xl font-black text-teal-700">{pair.left}</span>
                  <span className="text-teal-400 font-black text-lg">=</span>
                  <span className="text-xl font-black text-emerald-700">{pair.right}</span>
                </div>
                <button
                  onClick={() => speak(`${pair.left}. ${pair.right}`)}
                  className="ml-2 w-9 h-9 rounded-full bg-white shadow-sm border border-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-50 active:scale-95 transition"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Visual component below pairs */}
      {s.visual && pairsRevealed.length >= s.pairs.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-center">
              Visual
            </p>
            <VisualBlock visual={s.visual} startDelay={200} />
          </div>
        </motion.div>
      )}

      <div className="flex justify-end -mb-2 mt-2">
        <img
          src={pipImg}
          alt="Pip"
          className="w-20 h-20 object-contain drop-shadow-lg select-none"
          draggable={false}
        />
      </div>
    </div>
  );
};

/* ─── SCREEN 3: EXPLICAÇÃO CURTA ─── */
const ExplicacaoCurtaScreen: React.FC<{ lesson: ActivityLesson }> = ({ lesson }) => {
  const s = lesson.screens.explicacao_curta;

  const renderText = () => {
    if (!s.highlights?.length)
      return <p className="text-slate-700 font-semibold text-base leading-relaxed">{s.text}</p>;
    let remaining = s.text;
    const parts: React.ReactNode[] = [];
    let key = 0;
    for (const h of s.highlights) {
      const idx = remaining.indexOf(h);
      if (idx === -1) continue;
      if (idx > 0) parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>);
      parts.push(
        <span key={key++} className="text-violet-600 font-black bg-violet-50 px-1 rounded">
          {h}
        </span>,
      );
      remaining = remaining.slice(idx + h.length);
    }
    if (remaining) parts.push(<span key={key++}>{remaining}</span>);
    return <p className="text-slate-700 font-semibold text-base leading-relaxed">{parts}</p>;
  };

  return (
    <div className="p-5">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 mb-4 text-white text-center">
        <p className="text-xs font-black tracking-widest uppercase opacity-80 mb-1">Definição</p>
        <div className="w-8 h-1 bg-white/40 rounded mx-auto" />
      </div>
      <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 mb-4">
        {renderText()}
      </div>
      <div className="flex items-end justify-between px-2">
        <img
          src={pipaImg}
          alt="Pipa"
          className="w-20 h-20 object-contain drop-shadow-md select-none"
          draggable={false}
        />
        <div className="flex-1 mx-3 bg-blue-50 border border-blue-100 rounded-xl p-2 text-center">
          <p className="text-blue-600 text-xs font-bold">Lembre-se!</p>
          <p className="text-blue-500 text-xs mt-0.5">{s.tip ?? "Preste atenção!"}</p>
        </div>
        <img
          src={pipImg}
          alt="Pip"
          className="w-20 h-20 object-contain drop-shadow-md select-none"
          draggable={false}
        />
      </div>
    </div>
  );
};

/* ─── SCREEN 4: EXEMPLO VISUAL ─── */
const ExemploVisualScreen: React.FC<{
  lesson: ActivityLesson;
  speak: (t: string) => Promise<void>;
}> = ({ lesson, speak }) => {
  const s = lesson.screens.exemplo_visual;

  /* colour accent per subject (visual type gives us a hint) */
  const isPizza = s.visual?.type === "pizza_bite";
  const isGroup = s.visual?.type === "group_build";
  const accent = isPizza
    ? "from-red-500 to-orange-400"
    : isGroup
      ? "from-orange-500 to-amber-400"
      : "from-amber-400 to-orange-400";

  return (
    <div className="overflow-hidden">
      {/* ── Coloured header strip ── */}
      <div className={`bg-gradient-to-r ${accent} px-5 pt-4 pb-3 flex items-start justify-between`}>
        <div className="flex-1">
          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">
            Exemplo concreto
          </p>
          <p className="text-white font-black text-base leading-snug mt-0.5">{s.title}</p>
        </div>
        <button
          onClick={() => speak(s.sentences.map((s) => s.text).join(". ") + ". " + s.conclusion)}
          className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition shrink-0 ml-3 mt-0.5"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      <div className="px-4 pt-3 pb-5 space-y-4">
        {/* ── Context chips (o problema concreto) ── */}
        <div className="flex flex-wrap gap-2">
          {s.sentences.map((sentence, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5"
            >
              {sentence.emoji && <span className="text-base leading-none">{sentence.emoji}</span>}
              <span className="text-slate-700 font-semibold text-xs leading-snug">
                {sentence.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── VISUAL PRINCIPAL — full width, no labels above it ── */}
        {s.visual ? (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3">
            <VisualBlock visual={s.visual} startDelay={300} />
          </div>
        ) : (
          /* Fallback when no visual configured */
          <div className="bg-amber-50 border-2 border-amber-100 rounded-2xl p-4 text-center">
            <p className="text-slate-600 font-semibold text-sm">{s.conclusion}</p>
          </div>
        )}

        {/* ── Conclusion badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: s.visual ? 3.2 : 0.6 }}
          className={`bg-gradient-to-r ${accent} rounded-2xl px-5 py-3 text-white text-center shadow-lg`}
        >
          <p className="text-xs font-black opacity-80 uppercase tracking-widest mb-0.5">
            Conclusão
          </p>
          <p className="font-black text-base">{s.conclusion}</p>
        </motion.div>

        {/* ── Mascot ── */}
        <div className="flex justify-end -mb-1">
          <img
            src={pipImg}
            alt="Pip"
            className="w-16 h-16 object-contain drop-shadow-lg select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 5: VAMOS PRATICAR ─── */
const VamosPraticarScreen: React.FC<{
  lesson: ActivityLesson;
  selectedOption: PraticarOption | null;
  onSelect: (opt: PraticarOption) => void;
  completed: boolean;
}> = ({ lesson, selectedOption, onSelect, completed }) => {
  const s = lesson.screens.praticar;
  return (
    <div className="p-5">
      <div className="text-center mb-4">
        <p className="text-slate-600 font-bold text-base">{s.question}</p>
        {s.reference && (
          <div className="inline-block mt-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black text-2xl px-6 py-2 rounded-2xl shadow-lg">
            {s.reference}
          </div>
        )}
      </div>

      {/* Counter grid visual (if present) */}
      {s.visual && <VisualBlock visual={s.visual} />}

      <div className="flex flex-col gap-3 mb-4">
        {s.options.map((opt, i) => {
          const isSelected = selectedOption?.text === opt.text;
          const resultStyle = isSelected
            ? opt.isCorrect
              ? "ring-4 ring-emerald-300 scale-105"
              : "ring-4 ring-red-300 opacity-70 scale-95"
            : "";
          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              onClick={() => onSelect(opt)}
              disabled={!!selectedOption}
              className={`w-full py-4 rounded-2xl text-white font-black text-xl shadow-lg border-b-4 transition-all
                ${OPTION_STYLES[opt.color]} ${resultStyle}
                ${!selectedOption ? "hover:scale-105 active:scale-95" : ""}`}
            >
              <span className="flex items-center justify-center gap-3">
                {opt.text}
                {isSelected &&
                  (opt.isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />)}
              </span>
            </motion.button>
          );
        })}
      </div>

      {!completed && (
        <div className="flex justify-between items-end px-2">
          <img
            src={pipaImg}
            alt="Pipa"
            className="w-20 h-20 object-contain drop-shadow-md select-none"
            draggable={false}
          />
          <img
            src={pipImg}
            alt="Pip"
            className="w-20 h-20 object-contain drop-shadow-md select-none"
            draggable={false}
          />
        </div>
      )}
    </div>
  );
};
