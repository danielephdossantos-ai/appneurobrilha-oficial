import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Lightbulb } from "lucide-react";

type TokenRole = "unknown" | "coef" | "number" | "op" | "eq" | "paren";

interface Token {
  text: string;
  role: TokenRole;
  dim?: boolean;
  strike?: boolean;
}

interface VisualStep {
  id: number;
  action: string;
  action_symbol: string;
  accent: string;
  explanation: string;
  before: Token[];
  result: Token[];
}

interface Props {
  build: Token[];
  steps: VisualStep[];
  verification: string;
  accentColor: string;
}

const TOKEN_STYLES: Record<TokenRole, string> = {
  unknown: "text-blue-600 font-black",
  coef: "text-blue-600 font-black",
  number: "text-amber-600 font-black",
  op: "text-slate-500 font-bold",
  eq: "text-slate-700 font-black",
  paren: "text-slate-600 font-bold",
};

const ACCENT_STYLES: Record<
  string,
  { bg: string; text: string; border: string; light: string; badge: string }
> = {
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-300",
    light: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-600",
    border: "border-violet-300",
    light: "bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
  },
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    border: "border-emerald-300",
    light: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-600",
    border: "border-blue-300",
    light: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
};

function EquationLine({ tokens, size = "lg" }: { tokens: Token[]; size?: "sm" | "lg" | "xl" }) {
  const sizeClass = size === "xl" ? "text-4xl" : size === "lg" ? "text-3xl" : "text-2xl";
  return (
    <div className={`flex items-center justify-center flex-wrap gap-0.5 font-mono ${sizeClass}`}>
      {tokens.map((t, i) => (
        <motion.span
          key={i}
          className={`relative inline-block leading-none px-0.5 transition-all duration-300
            ${TOKEN_STYLES[t.role]}
            ${t.dim ? "opacity-30" : "opacity-100"}
          `}
        >
          {t.text}
          {t.strike && (
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-y-1/2 left-0 right-0 h-0.5 bg-red-500 origin-left"
            />
          )}
        </motion.span>
      ))}
    </div>
  );
}

export const MathVisualizer: React.FC<Props> = ({ build, steps, verification }) => {
  const [phase, setPhase] = useState<"building" | "steps" | "done">("building");
  const [builtCount, setBuiltCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepPhase, setStepPhase] = useState<"before" | "result">("before");
  const [stepsRevealed, setStepsRevealed] = useState<number[]>([]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await delay(400);
      for (let i = 0; i < build.length; i++) {
        if (cancelled) return;
        setBuiltCount(i + 1);
        await delay(380);
      }
      await delay(700);
      if (cancelled) return;
      setPhase("steps");
      setCurrentStep(0);
      setStepsRevealed([0]);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [build.length]);

  const handleStepForward = async () => {
    if (stepPhase === "before") {
      setStepPhase("result");
    } else {
      if (currentStep < steps.length - 1) {
        const next = currentStep + 1;
        setCurrentStep(next);
        setStepPhase("before");
        setStepsRevealed((prev) => [...prev, next]);
      } else {
        setPhase("done");
      }
    }
  };

  const step = steps[currentStep];
  const ac = step ? (ACCENT_STYLES[step.accent] ?? ACCENT_STYLES.orange) : ACCENT_STYLES.orange;

  return (
    <div className="space-y-4">
      {/* ── Phase 1: Equation assembling ── */}
      <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 text-center">
          Equação
        </p>
        <div className="min-h-[52px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {phase === "building" ? (
              <motion.div
                key="building"
                className="flex items-center justify-center flex-wrap gap-0.5 font-mono text-4xl"
              >
                {build.slice(0, builtCount).map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -18, scale: 0.6 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className={`inline-block leading-none px-0.5 ${TOKEN_STYLES[t.role]}`}
                  >
                    {t.text}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div key="done-build" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <EquationLine tokens={build} size="xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Phase 2: Step-by-step resolution ── */}
      <AnimatePresence>
        {phase !== "building" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {/* Step card */}
            <div className={`rounded-2xl border-2 ${ac.border} ${ac.light} overflow-hidden`}>
              {/* Step header */}
              <div className={`${ac.bg} px-4 py-2.5 flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <span className="bg-white/25 text-white text-xs font-black px-2 py-0.5 rounded-full">
                    Passo {step.id}
                  </span>
                  <span className="text-white font-bold text-sm">{step.action}</span>
                </div>
                <span className="bg-white/20 text-white font-black text-lg px-3 py-0.5 rounded-xl font-mono">
                  {step.action_symbol}
                </span>
              </div>

              <div className="p-4 space-y-3">
                {/* Before equation */}
                <div className="bg-white rounded-xl p-3 border border-white shadow-sm">
                  <p className="text-xs font-black text-slate-400 text-center mb-2">ANTES</p>
                  <EquationLine tokens={step.before} size="lg" />
                </div>

                {/* Arrow + result */}
                <AnimatePresence>
                  {stepPhase === "result" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-center">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          className={`w-0.5 h-6 ${ac.bg} origin-top`}
                        />
                      </div>
                      <div className={`bg-white rounded-xl p-3 border-2 ${ac.border} shadow`}>
                        <p className="text-xs font-black text-slate-400 text-center mb-2">
                          RESULTADO
                        </p>
                        <EquationLine tokens={step.result} size="lg" />
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-center text-xs font-semibold ${ac.text} px-2`}
                      >
                        <Lightbulb className="w-3 h-3 inline mr-1 shrink-0" />
                        {step.explanation}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Forward button */}
            {phase === "steps" && (
              <button
                onClick={handleStepForward}
                className={`w-full ${ac.bg} text-white font-black py-3 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition shadow`}
              >
                {stepPhase === "before"
                  ? "Ver resultado →"
                  : currentStep < steps.length - 1
                    ? `Próximo passo (${currentStep + 2}/${steps.length})`
                    : "Ver verificação"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Phase 3: Final answer + verification ── */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="space-y-3"
          >
            {/* Final answer */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-5 text-center text-white shadow-lg">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
              >
                <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-white" />
              </motion.div>
              <p className="text-4xl font-black font-mono">
                {steps[steps.length - 1].result.map((t) => t.text).join("")}
              </p>
              <p className="text-emerald-100 text-sm font-bold mt-1">Resposta encontrada!</p>
            </div>

            {/* Verification */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white border-2 border-emerald-200 rounded-2xl p-4"
            >
              <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2 text-center">
                Verificação
              </p>
              <p className="text-center text-slate-700 font-bold text-base font-mono">
                {verification}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
