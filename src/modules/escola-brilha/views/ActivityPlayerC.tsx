import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Volume2,
  ChevronRight,
  Star,
  Check,
  X,
  BookOpen,
  Image,
  BarChart3,
  Lightbulb,
  Target,
  Menu,
  Bookmark,
  Trophy,
  Focus,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { ActivityLessonC } from "../types/activity-lesson-c";
import { AudioSpeechService } from "../services/AudioSpeechService";
import pipImg from "@/assets/pip-mascot.png";
import pipaImg from "@/assets/pip-girl-mascot.png";
import planetaOceanoImg from "@/assets/escola-brilha/ciencias6/planeta-oceano.png";
import amazoniaImg from "@/assets/escola-brilha/geografia6/amazonia.png";
import { LessonVisualMap } from "../components/LessonVisualMap";
import { MathVisualizer } from "../components/MathVisualizer";

interface Props {
  lesson: ActivityLessonC;
}

const LESSON_ILLUSTRATIONS: Record<string, { src: string; alt: string }> = {
  "oceanos-6ano": { src: planetaOceanoImg, alt: "Ilustração infantil do planeta Terra com oceanos" },
  "biomas-6ano": { src: amazoniaImg, alt: "Ilustração infantil da Amazônia" },
};

type ScreenId = "missao" | "exploracao" | "pontos_chave" | "exemplo_aplicado" | "desafio";
type TabId = "texto" | "pontos" | "info";

const SCREENS: { id: ScreenId; label: string; icon: React.ElementType }[] = [
  { id: "missao", label: "Missão", icon: Target },
  { id: "exploracao", label: "Exploração", icon: BookOpen },
  { id: "pontos_chave", label: "Pontos-Chave", icon: Lightbulb },
  { id: "exemplo_aplicado", label: "Exemplo", icon: BarChart3 },
  { id: "desafio", label: "Desafio", icon: Trophy },
];

const LETTER_COLORS: Record<string, string> = {
  A: "bg-blue-500   border-blue-700  ",
  B: "bg-violet-500 border-violet-700",
  C: "bg-teal-500   border-teal-700  ",
  D: "bg-amber-500  border-amber-700 ",
};

export const ActivityPlayerC: React.FC<Props> = ({ lesson }) => {
  const navigate = useNavigate();
  const [screenIndex, setScreenIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("texto");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [pointsVisible, setPointsVisible] = useState<number[]>([]);

  const currentScreen = SCREENS[screenIndex];
  const progress = ((screenIndex + 1) / SCREENS.length) * 100;

  const speak = useCallback(async (text: string) => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(text);
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    setSelectedLetter(null);
    setShowExplanation(false);
    setPointsVisible([]);
    setActiveTab("texto");

    const autoSpeak = async () => {
      await new Promise((r) => setTimeout(r, 400));
      const s = lesson.screens;
      if (currentScreen.id === "missao") {
        await speak(lesson.mission_question);
      } else if (currentScreen.id === "exploracao") {
        await speak(s.exploracao.instruction + ". " + s.exploracao.texto);
      } else if (currentScreen.id === "pontos_chave") {
        await speak(s.pontos_chave.intro);
        for (const p of s.pontos_chave.points) await speak(p.title + ". " + p.text);
      } else if (currentScreen.id === "exemplo_aplicado") {
        await speak(s.exemplo_aplicado.title + ". " + s.exemplo_aplicado.scenario);
      } else if (currentScreen.id === "desafio") {
        await speak(s.desafio.question);
      }
    };

    const revealPoints = async () => {
      if (currentScreen.id === "pontos_chave") {
        for (let i = 0; i < lesson.screens.pontos_chave.points.length; i++) {
          await new Promise((r) => setTimeout(r, 600 + i * 500));
          setPointsVisible((prev) => [...prev, i]);
        }
      }
      if (currentScreen.id === "exemplo_aplicado") {
        for (let i = 0; i < lesson.screens.exemplo_aplicado.analysis.length; i++) {
          await new Promise((r) => setTimeout(r, 800 + i * 600));
          setPointsVisible((prev) => [...prev, i]);
        }
      }
    };

    autoSpeak();
    revealPoints();
    return () => AudioSpeechService.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIndex]);

  const handleNext = () => {
    if (screenIndex < SCREENS.length - 1) setScreenIndex((p) => p + 1);
  };

  const handleOption = async (letter: string, isCorrect: boolean) => {
    if (selectedLetter) return;
    setSelectedLetter(letter);
    if (isCorrect) {
      await speak("Correto! Excelente raciocínio!");
      setShowExplanation(true);
      setCompleted(true);
    } else {
      await speak("Não é essa. Leia a explicação e tente novamente!");
      setShowExplanation(true);
      setTimeout(() => {
        setSelectedLetter(null);
        setShowExplanation(false);
      }, 3000);
    }
  };

  const replayAudio = () => {
    const s = lesson.screens;
    if (currentScreen.id === "missao") speak(lesson.mission_question);
    else if (currentScreen.id === "exploracao") speak(s.exploracao.texto);
    else if (currentScreen.id === "pontos_chave")
      s.pontos_chave.points.forEach((p) => speak(p.title + ". " + p.text));
    else if (currentScreen.id === "exemplo_aplicado") speak(s.exemplo_aplicado.scenario);
    else if (currentScreen.id === "desafio") speak(s.desafio.question);
  };

  const accentClasses: Record<string, { bg: string; text: string; light: string; border: string }> =
    {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-emerald-600",
        text: "text-emerald-600",
        light: "bg-emerald-50",
        border: "border-emerald-200",
      },
      violet: {
        bg: "bg-violet-600",
        text: "text-violet-600",
        light: "bg-violet-50",
        border: "border-violet-200",
      },
      amber: {
        bg: "bg-amber-600",
        text: "text-amber-600",
        light: "bg-amber-50",
        border: "border-amber-200",
      },
      stone: {
        bg: "bg-stone-600",
        text: "text-stone-600",
        light: "bg-stone-50",
        border: "border-stone-200",
      },
      indigo: {
        bg: "bg-indigo-600",
        text: "text-indigo-600",
        light: "bg-indigo-50",
        border: "border-indigo-200",
      },
      pink: {
        bg: "bg-pink-600",
        text: "text-pink-600",
        light: "bg-pink-50",
        border: "border-pink-200",
      },
      yellow: {
        bg: "bg-yellow-600",
        text: "text-yellow-700",
        light: "bg-yellow-50",
        border: "border-yellow-200",
      },
    };
  const ac = accentClasses[lesson.color.accent] ?? accentClasses.blue;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── Left Sidebar ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed inset-y-0 left-0 z-50 w-56 bg-white shadow-2xl flex flex-col"
          >
            <div className={`bg-gradient-to-b ${lesson.color.from} ${lesson.color.to} p-4 pb-6`}>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/70 hover:text-white mb-3"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-xs font-black uppercase tracking-widest">
                {lesson.subject}
              </p>
              <p className="text-white font-black text-sm leading-tight mt-1">{lesson.title}</p>
            </div>
            <div className="flex-1 p-3 space-y-1">
              {SCREENS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setScreenIndex(i);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition ${
                    i === screenIndex
                      ? `${ac.light} ${ac.text} font-black`
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <s.icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-semibold">{s.label}</span>
                  {i < screenIndex && <Check className="w-3 h-3 ml-auto text-emerald-500" />}
                </button>
              ))}
            </div>
            <div className="p-3 border-t border-slate-100 space-y-1">
              {[
                { icon: Bookmark, label: "Anotações" },
                { icon: Trophy, label: "Conquistas" },
                { icon: Focus, label: "Modo Foco" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-50 text-sm"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Mini sidebar (always visible) ── */}
      <div className="hidden sm:flex flex-col items-center gap-3 w-14 bg-white border-r border-slate-100 py-4 shrink-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
        >
          <Menu className="w-4 h-4" />
        </button>
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 transition"
        >
          <Home className="w-4 h-4" />
        </button>
        <div className="flex-1" />
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setScreenIndex(i)}
            title={s.label}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
              i === screenIndex
                ? `${ac.bg} text-white shadow`
                : i < screenIndex
                  ? "text-emerald-500 bg-emerald-50"
                  : "text-slate-300 hover:bg-slate-100"
            }`}
          >
            {i < screenIndex ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
          </button>
        ))}
        <div className="flex-1" />
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 transition"
        >
          <Trophy className="w-4 h-4" />
        </button>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500"
          >
            <Menu className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="sm:hidden w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400"
          >
            <Home className="w-4 h-4" />
          </button>

          {/* Progress bar */}
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80 }}
              className={`h-full ${ac.bg} rounded-full`}
            />
          </div>

          <div
            className={`flex items-center gap-1.5 ${ac.light} ${ac.border} border px-3 py-1.5 rounded-full`}
          >
            <Star className={`w-3.5 h-3.5 ${ac.text} fill-current`} />
            <span className={`text-sm font-black ${ac.text}`}>{lesson.xp} XP</span>
          </div>

          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-slate-200 shrink-0">
            <img src={pipImg} alt="Pip" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* BNCC badge */}
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-black px-3 py-1 rounded-full ${ac.bg} text-white`}>
              {lesson.area_label}
            </span>
            <span className="text-xs font-bold text-slate-400">
              {lesson.grade} • BNCC {lesson.bncc_code}
            </span>
            <span className="text-xs text-slate-400 hidden sm:block">
              — {lesson.bncc_description}
            </span>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 px-4 py-3 max-w-2xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Screen label */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg ${ac.bg} flex items-center justify-center`}>
                    <currentScreen.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-black text-slate-700 text-sm uppercase tracking-wide">
                    {currentScreen.label}
                  </span>
                  <span className="text-slate-300 text-xs font-semibold">
                    {screenIndex + 1}/{SCREENS.length}
                  </span>
                </div>
                <button
                  onClick={replayAudio}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition active:scale-95"
                >
                  <Volume2 className={`w-4 h-4 ${isSpeaking ? `${ac.text} animate-pulse` : ""}`} />
                </button>
              </div>

              {/* Screens */}
              {currentScreen.id === "missao" && <MissaoScreen lesson={lesson} ac={ac} />}
              {currentScreen.id === "exploracao" && (
                <ExploracaoScreen
                  lesson={lesson}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  ac={ac}
                />
              )}
              {currentScreen.id === "pontos_chave" && (
                <PontosChaveScreen lesson={lesson} pointsVisible={pointsVisible} ac={ac} />
              )}
              {currentScreen.id === "exemplo_aplicado" && (
                <ExemploScreen lesson={lesson} pointsVisible={pointsVisible} ac={ac} />
              )}
              {currentScreen.id === "desafio" && (
                <DesafioScreen
                  lesson={lesson}
                  selectedLetter={selectedLetter}
                  showExplanation={showExplanation}
                  onSelect={handleOption}
                  ac={ac}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-5">
            {currentScreen.id !== "desafio" && (
              <button
                onClick={handleNext}
                className={`w-full ${ac.bg} text-white font-black py-3.5 rounded-2xl shadow-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition`}
              >
                Próximo <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {completed && currentScreen.id === "desafio" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className={`${ac.light} ${ac.border} border-2 rounded-2xl p-4 text-center`}>
                  <p className={`text-xl font-black ${ac.text}`}>Missão Concluída!</p>
                  <p className="text-slate-500 text-sm mt-1">
                    +{lesson.xp} XP • BNCC {lesson.bncc_code}
                  </p>
                </div>
                <button
                  onClick={() => navigate({ to: "/escola-brilha" })}
                  className={`w-full ${ac.bg} text-white font-black py-3.5 rounded-2xl shadow-md hover:opacity-90 active:scale-[0.98] transition`}
                >
                  Voltar para o início
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── TELA 1: MISSÃO ─── */
const MissaoScreen: React.FC<{ lesson: ActivityLessonC; ac: any }> = ({ lesson, ac }) => {
  const s = lesson.screens.missao;
  const illustration = LESSON_ILLUSTRATIONS[lesson.id];
  return (
    <div className="space-y-4">
      {/* Mission header card */}
      <div
        className={`bg-gradient-to-br ${lesson.color.from} ${lesson.color.to} rounded-2xl p-5 text-white relative overflow-hidden`}
      >
        <div className="absolute top-3 right-3 opacity-10 w-20 h-20 rounded-full bg-white pointer-events-none select-none" />
        <div
          className={`inline-block text-xs font-black px-2 py-0.5 rounded-full bg-white/20 mb-2 uppercase tracking-widest`}
        >
          MISSÃO
        </div>
        <h2 className="text-lg font-black leading-snug mb-4">{lesson.mission_question}</h2>
        <p className="text-xs font-bold text-white/80 mb-2">{s.intro}</p>
        <ul className="space-y-1.5">
          {s.objectives.map((obj, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-2 text-sm"
            >
              <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-xs font-black shrink-0">
                {i + 1}
              </span>
              <span>{obj}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {illustration && (
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex justify-center">
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="w-44 h-44 sm:w-52 sm:h-52 object-contain drop-shadow-lg select-none"
            draggable={false}
          />
        </div>
      )}

      {/* Context fact */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <div className={`w-10 h-10 rounded-xl ${ac.bg} flex items-center justify-center shrink-0`}>
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <p className="text-slate-600 font-semibold text-sm leading-snug">{s.context_text}</p>
      </div>

      {/* Mascots */}
      <div className="flex justify-between items-end px-4">
        <img
          src={pipaImg}
          alt="Pipa"
          className="w-20 h-20 object-contain drop-shadow-lg select-none"
          draggable={false}
        />
        <div className={`flex-1 mx-3 ${ac.light} ${ac.border} border rounded-xl p-2 text-center`}>
          <p className={`text-xs font-black ${ac.text}`}>Bem-vindo à missão!</p>
          <p className="text-slate-500 text-xs mt-0.5">
            {lesson.subject} • {lesson.grade}
          </p>
        </div>
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

/* ─── TELA 2: EXPLORAÇÃO ─── */
const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "texto", label: "TEXTO", icon: BookOpen },
  { id: "pontos", label: "PONTOS", icon: Lightbulb },
  { id: "info", label: "VISUAL", icon: Image },
];

const ExploracaoScreen: React.FC<{
  lesson: ActivityLessonC;
  activeTab: TabId;
  setActiveTab: (t: TabId) => void;
  ac: any;
}> = ({ lesson, activeTab, setActiveTab, ac }) => {
  const s = lesson.screens.exploracao;
  const illustration = LESSON_ILLUSTRATIONS[lesson.id];
  return (
    <div className="space-y-4">
      <p className="text-slate-600 font-semibold text-sm">{s.instruction}</p>

      {/* Tab bar */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-black transition ${
              activeTab === tab.id
                ? `bg-white shadow-sm ${ac.text}`
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {activeTab === "texto" && (
          <motion.div
            key="texto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
          >
            {illustration && (
              <div className="mb-3 flex justify-center">
                <img
                  src={illustration.src}
                  alt={illustration.alt}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-lg select-none"
                  draggable={false}
                />
              </div>
            )}
            <p className="text-slate-700 font-medium text-sm leading-relaxed">{s.texto}</p>
            {/* Mascot tip at bottom */}
            <div
              className={`mt-3 ${ac.light} ${ac.border} border rounded-xl p-3 flex items-start gap-2`}
            >
              <img
                src={pipaImg}
                alt="Pipa"
                className="w-10 h-10 object-contain shrink-0 select-none"
                draggable={false}
              />
              <p className={`text-xs font-semibold ${ac.text} leading-snug`}>{s.mascot_tip}</p>
            </div>
          </motion.div>
        )}
        {activeTab === "pontos" && (
          <motion.div
            key="pontos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            {s.pontos_destaque.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-xl p-3 flex items-start gap-3 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                <p className="text-slate-700 font-medium text-sm">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeTab === "info" && (
          <motion.div
            key="info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LessonVisualMap lessonId={lesson.id} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── TELA 3: PONTOS-CHAVE ─── */
const PontosChaveScreen: React.FC<{
  lesson: ActivityLessonC;
  pointsVisible: number[];
  ac: any;
}> = ({ lesson, pointsVisible, ac }) => {
  const s = lesson.screens.pontos_chave;
  return (
    <div className="space-y-4">
      <p className="text-slate-700 font-black text-base">{s.intro}</p>
      <div className="space-y-3">
        {s.points.map((pt, i) => (
          <AnimatePresence key={i}>
            {pointsVisible.includes(i) && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="bg-white border border-slate-100 rounded-2xl p-4 flex gap-3 shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${ac.bg} flex items-center justify-center text-sm font-black text-white shrink-0`}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-black text-slate-800 text-sm">{pt.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5 leading-snug">{pt.text}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      <div className={`${ac.light} ${ac.border} border rounded-2xl p-3 flex items-center gap-3`}>
        <img
          src={pipaImg}
          alt="Pipa"
          className="w-12 h-12 object-contain select-none"
          draggable={false}
        />
        <p className={`text-sm font-semibold ${ac.text}`}>
          Anote os pontos mais importantes — vão ajudar no desafio!
        </p>
      </div>
    </div>
  );
};

/* ─── TELA 4: EXEMPLO APLICADO ─── */
const ExemploScreen: React.FC<{ lesson: ActivityLessonC; pointsVisible: number[]; ac: any }> = ({
  lesson,
  pointsVisible,
  ac,
}) => {
  const s = lesson.screens.exemplo_aplicado;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className={`w-9 h-9 rounded-xl ${ac.bg} flex items-center justify-center shrink-0`}>
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-slate-700 font-black text-base leading-tight">{s.title}</p>
          <p className={`text-sm font-bold ${ac.text}`}>{s.scenario}</p>
        </div>
      </div>

      {/* ── Visual math mode ── */}
      {s.visual_steps ? (
        <MathVisualizer
          build={s.visual_steps.build}
          steps={s.visual_steps.steps}
          verification={s.visual_steps.verification}
          accentColor={lesson.color.accent}
        />
      ) : (
        <>
          {/* Scenario card (non-math lessons) */}
          <div
            className={`bg-gradient-to-br ${lesson.color.from} ${lesson.color.to} rounded-2xl p-4 text-white flex items-center gap-3`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <p className="font-semibold text-sm leading-snug">{s.scenario}</p>
          </div>

          {/* Analysis steps */}
          <div className="space-y-2">
            {s.analysis.map((step, i) => (
              <AnimatePresence key={i}>
                {pointsVisible.includes(i) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 180 }}
                    className="bg-white border border-slate-100 rounded-xl p-3 flex items-start gap-2 shadow-sm"
                  >
                    <div
                      className={`w-5 h-5 rounded-full ${ac.bg} flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5`}
                    >
                      {i + 1}
                    </div>
                    <p className="text-slate-700 font-medium text-sm">{step}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Conclusion */}
          {pointsVisible.length >= s.analysis.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`${ac.light} ${ac.border} border-2 rounded-2xl p-4 text-center`}
            >
              <p className={`font-black ${ac.text} text-sm`}>{s.conclusion}</p>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

/* ─── TELA 5: DESAFIO ─── */
const DesafioScreen: React.FC<{
  lesson: ActivityLessonC;
  selectedLetter: string | null;
  showExplanation: boolean;
  onSelect: (letter: string, correct: boolean) => void;
  ac: any;
}> = ({ lesson, selectedLetter, showExplanation, onSelect, ac }) => {
  const s = lesson.screens.desafio;
  return (
    <div className="space-y-4">
      {/* Challenge header */}
      <div className="bg-slate-800 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-black text-yellow-400 uppercase tracking-widest">
            Desafio
          </span>
          <span className="ml-auto text-xs font-bold text-slate-400">{lesson.xp} XP</span>
        </div>
        {s.context && <p className="text-slate-400 text-xs mb-2 italic">{s.context}</p>}
        <p className="font-bold text-sm leading-snug">{s.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {s.options.map((opt) => {
          const isSelected = selectedLetter === opt.letter;
          const showResult = !!selectedLetter && isSelected;
          const dimmed = !!selectedLetter && !isSelected && !opt.isCorrect;
          const highlightCorrect = !!selectedLetter && opt.isCorrect;

          return (
            <motion.button
              key={opt.letter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: dimmed ? 0.45 : 1, y: 0 }}
              transition={{ delay: ["A", "B", "C", "D"].indexOf(opt.letter) * 0.08 }}
              onClick={() => onSelect(opt.letter, opt.isCorrect)}
              disabled={!!selectedLetter}
              className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 text-left transition-all
                ${highlightCorrect ? "border-emerald-400 bg-emerald-50" : ""}
                ${showResult && !opt.isCorrect ? "border-red-300 bg-red-50" : ""}
                ${!selectedLetter ? "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm active:scale-[0.98]" : ""}
                ${!showResult && !highlightCorrect ? "bg-white border-slate-200" : ""}
              `}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0 ${LETTER_COLORS[opt.letter]}`}
              >
                {opt.letter}
              </div>
              <p className="text-slate-700 font-semibold text-sm flex-1 leading-snug">{opt.text}</p>
              {showResult &&
                (opt.isCorrect ? (
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                ))}
              {highlightCorrect && !showResult && (
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex gap-3"
          >
            <img
              src={pipaImg}
              alt="Pipa"
              className="w-10 h-10 object-contain shrink-0 select-none"
              draggable={false}
            />
            <div>
              <p className="text-xs font-black text-slate-500 mb-1 uppercase tracking-wide">
                Explicação
              </p>
              <p className="text-slate-700 font-medium text-sm leading-snug">{s.explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
