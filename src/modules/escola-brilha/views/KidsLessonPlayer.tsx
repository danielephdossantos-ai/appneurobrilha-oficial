import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Volume2, ChevronRight, ChevronLeft, Star } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import type { KidsLesson, KidsScene } from "../types/kids-lesson";
import { AudioSpeechService } from "../services/AudioSpeechService";
import pipImg from "@/assets/pip-mascot.png";
import pipaImg from "@/assets/pip-girl-mascot.png";
import type { LessonRef } from "../hooks/useNextLesson";
import { NextLessonInlineButton } from "../components/NextLessonInlineButton";

interface Props {
  lesson: KidsLesson;
  currentRef?: LessonRef;
}

const COLORS = {
  blue: { bg: "bg-sky-500", soft: "bg-sky-50", text: "text-sky-700", ring: "ring-sky-300", grad: "from-sky-400 to-blue-500" },
  green: { bg: "bg-emerald-500", soft: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-300", grad: "from-emerald-400 to-green-500" },
  violet: { bg: "bg-violet-500", soft: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-300", grad: "from-violet-400 to-purple-500" },
  amber: { bg: "bg-amber-500", soft: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-300", grad: "from-amber-400 to-orange-500" },
  pink: { bg: "bg-pink-500", soft: "bg-pink-50", text: "text-pink-700", ring: "ring-pink-300", grad: "from-pink-400 to-rose-500" },
};

export const KidsLessonPlayer: React.FC<Props> = ({ lesson, currentRef }) => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const c = COLORS[lesson.cor];
  const scene = lesson.scenes[idx];
  const isLast = idx === lesson.scenes.length - 1;
  const fallbackRef: LessonRef =
    currentRef ?? { kind: "static", id: lesson.codigo_bncc };

  const speak = useCallback(async (text: string) => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(text);
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => speak(scene.fala), 350);
    return () => {
      clearTimeout(t);
      AudioSpeechService.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${c.grad} flex flex-col`}>
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="w-11 h-11 rounded-2xl bg-white/90 shadow flex items-center justify-center"
          aria-label="Voltar"
        >
          <Home className="w-5 h-5 text-slate-700" />
        </button>

        <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((idx + 1) / lesson.scenes.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 80 }}
            className="h-full bg-white rounded-full"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-white/95 px-3 py-2 rounded-full shadow">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span className="text-sm font-black text-slate-700">{lesson.xp} XP</span>
        </div>

        <button
          onClick={() => speak(scene.fala)}
          className={`w-12 h-12 rounded-2xl bg-white shadow flex items-center justify-center ${
            isSpeaking ? "animate-pulse" : ""
          }`}
          aria-label="Ouvir de novo"
        >
          <Volume2 className={`w-6 h-6 ${c.text}`} />
        </button>
      </div>

      <div className="px-4 pb-2">
        <p className="text-white/90 text-xs font-bold uppercase tracking-wider">
          {lesson.disciplina} • {lesson.serie}
        </p>
      </div>

      {/* Scene */}
      <div className="flex-1 px-4 pb-4 flex items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-white rounded-3xl shadow-xl p-5 flex flex-col"
          >
            <SceneView scene={scene} accent={c} lesson={lesson} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="px-4 pb-5 flex items-center gap-3">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="w-14 h-14 rounded-2xl bg-white/90 shadow flex items-center justify-center disabled:opacity-40"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-7 h-7 text-slate-700" />
        </button>

        {!isLast ? (
          <button
            onClick={() => setIdx((i) => i + 1)}
            className={`flex-1 h-14 rounded-2xl ${c.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition`}
          >
            Continuar <ChevronRight className="w-6 h-6" />
          </button>
        ) : (
          <div className="flex-1">
            <NextLessonInlineButton current={fallbackRef} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ──────────────────────────── Scene renderer ──────────────────────────── */

const SceneView: React.FC<{
  scene: KidsScene;
  accent: (typeof COLORS)[keyof typeof COLORS];
  lesson: KidsLesson;
}> = ({ scene, accent, lesson }) => {
  const coachMascot = lesson.scenes.find((s) => s.kind === "intro")?.mascot ?? "pip";
  switch (scene.kind) {
    case "intro":
      return <IntroScene scene={scene} accent={accent} />;
    case "concept":
      return <ConceptScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "usecase":
      return <UseCaseScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_count":
      return <StepCountScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_join":
      return <StepJoinScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_vertical_sum":
      return <StepVerticalSumScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_subtract":
      return <StepSubtractScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_vertical_sub":
      return <StepVerticalSubScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "step_equal":
      return <StepEqualScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "practice_count":
      return <PracticeCountScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "summary":
      return <SummaryScene scene={scene} accent={accent} mascot={coachMascot} />;
    case "celebrate":
      return <CelebrateScene scene={scene} accent={accent} />;
  }
};

const SceneTitle: React.FC<{ children: React.ReactNode; accent: any }> = ({
  children,
  accent,
}) => (
  <h2 className={`text-2xl sm:text-3xl font-black ${accent.text} text-center mb-4`}>
    {children}
  </h2>
);

const CoachBubble: React.FC<{
  fala: string;
  accent: any;
  mascot?: "pip" | "pipa";
}> = ({ fala, accent, mascot = "pip" }) => (
  <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-3 sm:gap-4">
    <img
      src={mascot === "pip" ? pipImg : pipaImg}
      alt={mascot === "pip" ? "Pip explicando" : "Pipa explicando"}
      className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg shrink-0"
    />
    <div className={`${accent.soft} rounded-3xl px-4 py-3 shadow-sm border-2 border-white`}>
      <p className="text-slate-700 text-base sm:text-lg text-left font-bold leading-snug">
        {fala}
      </p>
    </div>
  </div>
);

const IntroScene: React.FC<{ scene: Extract<KidsScene, { kind: "intro" }>; accent: any }> = ({
  scene,
  accent,
}) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-4">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <motion.img
      src={scene.mascot === "pip" ? pipImg : pipaImg}
      alt={scene.mascot}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="w-48 h-48 sm:w-64 sm:h-64 object-contain drop-shadow-xl"
    />
    <div className={`${accent.soft} rounded-2xl p-4 max-w-md`}>
      <p className="text-slate-700 text-lg sm:text-xl text-center font-bold leading-snug">
        {scene.fala}
      </p>
    </div>
  </div>
);

const ConceptScene: React.FC<{ scene: Extract<KidsScene, { kind: "concept" }>; accent: any; mascot: "pip" | "pipa" }> = ({
  scene,
  accent,
  mascot,
}) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-5">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.7 }}
      className={`w-44 h-44 sm:w-56 sm:h-56 rounded-3xl ${accent.bg} shadow-2xl flex items-center justify-center`}
    >
      <span className="text-white font-black" style={{ fontSize: "9rem", lineHeight: 1 }}>
        {scene.simbolo ?? scene.emoji}
      </span>
    </motion.div>
    <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
  </div>
);

const UseCaseScene: React.FC<{ scene: Extract<KidsScene, { kind: "usecase" }>; accent: any; mascot: "pip" | "pipa" }> = ({
  scene,
  accent,
  mascot,
}) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-5">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
      {scene.cenas.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.3 }}
          className={`${accent.soft} rounded-2xl p-5 flex flex-col items-center gap-2`}
        >
          <span style={{ fontSize: "4rem" }}>{c.emoji}</span>
          <p className={`text-base font-black ${accent.text} text-center`}>{c.texto}</p>
        </motion.div>
      ))}
    </div>
    <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
  </div>
);

const RowOfObjects: React.FC<{ n: number; emoji: string; delay?: number }> = ({
  n,
  emoji,
  delay = 0,
}) => (
  <div className="flex flex-wrap justify-center gap-2">
    {Array.from({ length: n }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: delay + i * 0.15, type: "spring", stiffness: 200 }}
        style={{ fontSize: "3rem" }}
      >
        {emoji}
      </motion.span>
    ))}
  </div>
);

const StepCountScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_count" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-4">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <div className={`${accent.soft} rounded-3xl p-4 w-full max-w-xl flex flex-col gap-3`}>
      <div className="flex items-center gap-3">
        <div className={`w-14 h-14 rounded-2xl ${accent.bg} text-white text-3xl font-black flex items-center justify-center`}>
          {scene.a}
        </div>
        <RowOfObjects n={scene.a} emoji={scene.objeto} />
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 0.4 }}
          className={`w-14 h-14 rounded-full bg-amber-400 text-white text-4xl font-black flex items-center justify-center shadow-lg`}
        >
          +
        </motion.div>
      </div>
      <div className="flex items-center gap-3">
        <div className={`w-14 h-14 rounded-2xl ${accent.bg} text-white text-3xl font-black flex items-center justify-center`}>
          {scene.b}
        </div>
        <RowOfObjects n={scene.b} emoji={scene.objeto} delay={0.8} />
      </div>
    </div>
    <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
  </div>
);

const StepJoinScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_join" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => {
  const total = scene.a + scene.b;
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= total) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [total]);
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5">
      <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
      <div className="flex flex-wrap justify-center gap-2 max-w-xl">
        {Array.from({ length: total }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={i < count ? { scale: [0, 1.4, 1] } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: "3rem" }}
          >
            {scene.objeto}
          </motion.span>
        ))}
      </div>
      <div className={`${accent.bg} text-white px-8 py-4 rounded-2xl shadow-xl`}>
        <span className="text-5xl font-black">{count}</span>
      </div>
      <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
    </div>
  );
};

const StepVerticalSumScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_vertical_sum" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => {
  const total = scene.a + scene.b;
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5">
      <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
      <div className={`${accent.soft} rounded-3xl p-8 flex flex-col items-end font-mono`}>
        <motion.span initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl font-black text-slate-800">
          {scene.a}
        </motion.span>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="text-5xl font-black text-amber-500">+</span>
          <span className="text-7xl font-black text-slate-800">{scene.b}</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2 }}
          className="h-1.5 bg-slate-800 w-full my-2 origin-left rounded"
        />
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.4, 1] }}
          transition={{ delay: 1.6 }}
          className={`text-7xl font-black ${accent.text}`}
        >
          {total}
        </motion.span>
      </div>
      <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
    </div>
  );
};

const PracticeCountScene: React.FC<{
  scene: Extract<KidsScene, { kind: "practice_count" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => {
  const total = scene.a + scene.b;
  const items = useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);
  const [tapped, setTapped] = useState<Set<number>>(new Set());

  const tap = (i: number) => {
    if (tapped.has(i)) return;
    const next = new Set(tapped);
    next.add(i);
    setTapped(next);
    AudioSpeechService.speak(String(next.size));
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-xl">
        {items.map((i) => {
          const done = tapped.has(i);
          return (
            <button
              key={i}
              onClick={() => tap(i)}
              className={`w-20 h-20 rounded-2xl flex items-center justify-center transition active:scale-90 shadow ${
                done ? `${accent.bg} ring-4 ${accent.ring}` : "bg-white border-2 border-slate-200"
              }`}
              style={{ fontSize: "2.5rem" }}
            >
              {scene.objeto}
            </button>
          );
        })}
      </div>
      <div className={`${accent.bg} text-white px-6 py-3 rounded-2xl shadow-xl`}>
        <span className="text-4xl font-black">
          {tapped.size} / {total}
        </span>
      </div>
      <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
    </div>
  );
};

const SummaryScene: React.FC<{
  scene: Extract<KidsScene, { kind: "summary" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-4">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <div className="flex flex-col gap-3 w-full max-w-md">
      {scene.itens.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.4 }}
          className={`${accent.soft} rounded-2xl p-4 flex items-center gap-3`}
        >
          <div className={`w-10 h-10 rounded-xl ${accent.bg} text-white font-black text-xl flex items-center justify-center shrink-0`}>
            {i + 1}
          </div>
          <p className="text-slate-700 font-bold text-lg">{it}</p>
        </motion.div>
      ))}
    </div>
    <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
  </div>
);

/* ── Subtração visual: A maçãs, B saem voando ── */
const StepSubtractScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_subtract" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => {
  const [removed, setRemoved] = useState(0);
  useEffect(() => {
    setRemoved(0);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setRemoved(i);
      if (i >= scene.b) clearInterval(id);
    }, 700);
    return () => clearInterval(id);
  }, [scene.a, scene.b]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
      <div className={`${accent.soft} rounded-3xl p-5 w-full max-w-xl`}>
        <div className="flex flex-wrap justify-center gap-2 min-h-[5rem]">
          {Array.from({ length: scene.a }).map((_, i) => {
            const gone = i >= scene.a - removed;
            return (
              <motion.span
                key={i}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  gone
                    ? { y: -120, x: 80, opacity: 0, rotate: 90, scale: 0.5 }
                    : { y: 0, x: 0, opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.6 }}
                style={{ fontSize: "3rem" }}
              >
                {scene.objeto}
              </motion.span>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="text-4xl font-black text-slate-700">{scene.a}</span>
          <span className="text-4xl font-black text-rose-500">−</span>
          <span className="text-4xl font-black text-slate-700">{scene.b}</span>
          <span className="text-4xl font-black text-slate-400">=</span>
          <span className={`text-5xl font-black ${accent.text}`}>{scene.a - scene.b}</span>
        </div>
      </div>
      <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
    </div>
  );
};

/* ── Subtração na vertical ── */
const StepVerticalSubScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_vertical_sub" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => {
  const total = scene.a - scene.b;
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5">
      <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
      <div className={`${accent.soft} rounded-3xl p-8 flex flex-col items-end font-mono`}>
        <motion.span initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl font-black text-slate-800">
          {scene.a}
        </motion.span>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="text-5xl font-black text-rose-500">−</span>
          <span className="text-7xl font-black text-slate-800">{scene.b}</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2 }}
          className="h-1.5 bg-slate-800 w-full my-2 origin-left rounded"
        />
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.4, 1] }}
          transition={{ delay: 1.6 }}
          className={`text-7xl font-black ${accent.text}`}
        >
          {total}
        </motion.span>
      </div>
      <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
    </div>
  );
};

/* ── Sinal de igual: duas quantidades iguais ── */
const StepEqualScene: React.FC<{
  scene: Extract<KidsScene, { kind: "step_equal" }>;
  accent: any;
  mascot: "pip" | "pipa";
}> = ({ scene, accent, mascot }) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-4">
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <div className={`${accent.soft} rounded-2xl p-4 flex flex-wrap gap-1 justify-center max-w-[10rem]`}>
        {Array.from({ length: scene.n }).map((_, i) => (
          <span key={i} style={{ fontSize: "2rem" }}>
            {scene.objeto}
          </span>
        ))}
      </div>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.4, 1] }}
        className="text-6xl font-black text-amber-500"
      >
        =
      </motion.span>
      <div className={`${accent.soft} rounded-2xl p-4 flex flex-wrap gap-1 justify-center max-w-[10rem]`}>
        {Array.from({ length: scene.n }).map((_, i) => (
          <span key={i} style={{ fontSize: "2rem" }}>
            {scene.objeto}
          </span>
        ))}
      </div>
    </div>
    <CoachBubble fala={scene.fala} accent={accent} mascot={mascot} />
  </div>
);



const CelebrateScene: React.FC<{
  scene: Extract<KidsScene, { kind: "celebrate" }>;
  accent: any;
}> = ({ scene, accent }) => (
  <div className="flex-1 flex flex-col items-center justify-center gap-4">
    <motion.div
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{ fontSize: "8rem" }}
    >
      🎉
    </motion.div>
    <SceneTitle accent={accent}>{scene.titulo}</SceneTitle>
    <p className="text-slate-700 text-xl text-center font-bold max-w-md">{scene.fala}</p>
  </div>
);
