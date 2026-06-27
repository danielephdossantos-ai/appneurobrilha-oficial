import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Volume2,
  Flame,
  Star,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Target,
  Compass,
  BookOpen,
  Lightbulb,
  ClipboardCheck,
  Trophy,
  ListChecks,
  Sparkles,
  User,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { ActivityLesson, PraticarOption } from "../types/activity-lesson";
import { AudioSpeechService } from "../services/AudioSpeechService";
import { NextLessonInlineButton } from "../components/NextLessonInlineButton";
import type { LessonRef } from "../hooks/useNextLesson";

interface Props {
  lesson: ActivityLesson;
  currentRef?: LessonRef;
  disciplina?: string;
  serie?: string;
  capitulo?: string;
  codigoBncc?: string;
}

type StepId =
  | "missao"
  | "exploracao"
  | "explicacao"
  | "exemplo"
  | "guiada"
  | "desafio"
  | "revisao"
  | "conclusao";

const STEPS: { id: StepId; label: string; Icon: typeof Target }[] = [
  { id: "missao",     label: "MISSÃO",           Icon: Target },
  { id: "exploracao", label: "EXPLORAÇÃO",       Icon: Compass },
  { id: "explicacao", label: "EXPLICAÇÃO",       Icon: BookOpen },
  { id: "exemplo",    label: "EXEMPLO APLICADO", Icon: Lightbulb },
  { id: "guiada",     label: "ATIVIDADE GUIADA", Icon: ClipboardCheck },
  { id: "desafio",    label: "DESAFIO",          Icon: Sparkles },
  { id: "revisao",    label: "REVISÃO E SÍNTESE", Icon: ListChecks },
  { id: "conclusao",  label: "CONCLUSÃO",        Icon: Trophy },
];

/* ─────────── Top bar (fixed) ─────────── */
const TopBar: React.FC<{
  disciplina: string;
  serie: string;
  capitulo?: string;
  xp: number;
  onHome: () => void;
}> = ({ disciplina, serie, capitulo, xp, onHome }) => (
  <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
      <button
        onClick={onHome}
        className="shrink-0 grid place-items-center w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-700"
        aria-label="Menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="min-w-0 flex items-center gap-2 text-sm">
        <span className="font-bold text-slate-900 truncate">{disciplina}</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600 truncate">{serie}</span>
        {capitulo && (
          <>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-600 truncate hidden sm:inline">{capitulo}</span>
          </>
        )}
      </div>
      <div className="shrink-0 flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1 text-orange-600 font-bold text-sm">
          <Flame className="w-4 h-4" /> 7
        </span>
        <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-black">
          <Star className="w-3.5 h-3.5 fill-amber-500 stroke-amber-600" /> {xp} XP
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-200 grid place-items-center text-slate-600">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  </header>
);

/* ─────────── Stepper (progress) ─────────── */
const Stepper: React.FC<{ current: number; onJump: (i: number) => void }> = ({
  current,
  onJump,
}) => (
  <div className="bg-white border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto">
      <ol className="flex items-center gap-2 min-w-max">
        {STEPS.map((s, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <li key={s.id} className="flex items-center gap-2">
              <button
                onClick={() => i <= current && onJump(i)}
                disabled={i > current}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all
                  ${active ? "bg-[#0b2545] text-white shadow"
                    : done ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    : "bg-slate-100 text-slate-400"}`}
              >
                <span className={`w-5 h-5 rounded-full grid place-items-center text-[10px] font-black
                  ${active ? "bg-white text-[#0b2545]"
                    : done ? "bg-emerald-500 text-white"
                    : "bg-slate-300 text-white"}`}>
                  {done ? <Check className="w-3 h-3" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <span className={`h-px w-4 ${done ? "bg-emerald-300" : "bg-slate-200"}`} />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </div>
);

/* ─────────── Shared card frame ─────────── */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 ${className}`}>
    {children}
  </div>
);

const SectionLabel: React.FC<{ Icon: typeof Target; text: string }> = ({ Icon, text }) => (
  <div className="flex items-center gap-2 text-teal-700 font-black text-xs tracking-wider">
    <Icon className="w-4 h-4" />
    {text}
  </div>
);

const AudioButton: React.FC<{ text: string }> = ({ text }) => (
  <button
    onClick={() => AudioSpeechService.speak(text)}
    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
    aria-label="Ouvir explicação"
  >
    <Volume2 className="w-4 h-4" />
  </button>
);

/* ════════════════════════════════════════════════ */

export const Fund2Player: React.FC<Props> = ({
  lesson,
  currentRef,
  disciplina = lesson.subject,
  serie = "",
  capitulo,
  codigoBncc,
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [guidedPick, setGuidedPick] = useState<{ left: string; right: string } | null>(null);
  const [challengePick, setChallengePick] = useState<PraticarOption | null>(null);

  const { explicacao, exploracao, explicacao_curta, exemplo_visual, praticar } = lesson.screens;

  const heroImage = explicacao.image_url;
  const exemploImage = exemplo_visual.image_url;

  // Derive "explicação" cards from short text + highlights + tip + pairs
  const explanationCards = useMemo(() => {
    const cards: { title: string; text: string }[] = [];
    cards.push({ title: "Conceito", text: explicacao_curta.text });
    if (explicacao_curta.tip) cards.push({ title: "Dica", text: explicacao_curta.tip });
    exploracao.pairs.slice(0, 3).forEach((p) =>
      cards.push({ title: p.left, text: p.right })
    );
    return cards.slice(0, 4);
  }, [explicacao_curta, exploracao.pairs]);

  // Correct pair for guided activity (first pair)
  const guidedPairs = exploracao.pairs.slice(0, 4);
  const guidedTarget = guidedPairs[0];
  const shuffledRights = useMemo(
    () => [...guidedPairs].sort(() => 0.5 - Math.random()),
    [guidedPairs],
  );

  const total = STEPS.length;
  const percent = Math.round(((step + 1) / total) * 100);
  const fullText = useMemo(
    () =>
      [
        explicacao.instruction,
        explicacao.summary,
        explicacao_curta.text,
        exemplo_visual.conclusion,
      ].join(". "),
    [explicacao, explicacao_curta, exemplo_visual],
  );

  const next = () => setStep((s) => Math.min(total - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const Footer = (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
      <button
        onClick={prev}
        disabled={step === 0}
        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-slate-700 font-bold disabled:opacity-30 hover:bg-slate-100"
      >
        <ChevronLeft className="w-4 h-4" /> Voltar
      </button>
      <div className="flex items-center gap-2">
        <AudioButton text={fullText} />
        {step < total - 1 ? (
          <button
            onClick={next}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow"
          >
            Continuar <ChevronRight className="w-4 h-4" />
          </button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopBar
        disciplina={disciplina}
        serie={serie}
        capitulo={capitulo ?? codigoBncc}
        xp={lesson.xp}
        onHome={() => navigate({ to: "/escola-brilha" })}
      />
      <Stepper current={step} onJump={setStep} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* 1 — MISSÃO */}
            {step === 0 && (
              <Card className="overflow-hidden">
                {heroImage ? (
                  <div className="relative h-56 sm:h-72 w-full bg-slate-200">
                    <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/85 via-[#0b2545]/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <SectionLabel Icon={Target} text="MISSÃO" />
                      <h1 className="mt-2 text-2xl sm:text-3xl font-black text-white leading-tight">
                        {lesson.title}
                      </h1>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 pt-6">
                    <SectionLabel Icon={Target} text="MISSÃO" />
                    <h1 className="mt-2 text-2xl sm:text-3xl font-black">{lesson.title}</h1>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider mb-3">
                    Nesta aula você vai:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[explicacao.summary, explicacao_curta.text, exemplo_visual.conclusion]
                      .filter(Boolean)
                      .slice(0, 3)
                      .map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-800">
                          <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                  </ul>
                  {codigoBncc && (
                    <div className="inline-block bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      BNCC · {codigoBncc}
                    </div>
                  )}
                  <button
                    onClick={next}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow"
                  >
                    Começar Missão <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            )}

            {/* 2 — EXPLORAÇÃO */}
            {step === 1 && (
              <Card className="p-6">
                <SectionLabel Icon={Compass} text="EXPLORAÇÃO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">
                  {exploracao.instruction}
                </h2>
                {heroImage && (
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img src={heroImage} alt="" className="w-full h-64 object-cover" />
                    {explicacao.image_caption && (
                      <p className="text-xs text-slate-500 px-3 py-2">{explicacao.image_caption}</p>
                    )}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-3">
                  {exploracao.pairs.slice(0, 4).map((p, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                      <p className="text-sm font-black text-slate-900">{p.left}</p>
                      <p className="text-sm text-slate-600">{p.right}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 3 — EXPLICAÇÃO */}
            {step === 2 && (
              <Card className="p-6">
                <SectionLabel Icon={BookOpen} text="EXPLICAÇÃO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">
                  {explicacao.highlight}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {explanationCards.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-7 h-7 rounded-lg bg-[#0b2545] text-white grid place-items-center text-xs font-black">
                          {i + 1}
                        </span>
                        <p className="font-black text-slate-900">{c.title}</p>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 4 — EXEMPLO APLICADO */}
            {step === 3 && (
              <Card className="p-6">
                <SectionLabel Icon={Lightbulb} text="EXEMPLO APLICADO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">
                  {exemplo_visual.title}
                </h2>
                {exemploImage && (
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img src={exemploImage} alt="" className="w-full h-56 object-cover" />
                  </div>
                )}
                <div className="grid sm:grid-cols-3 gap-3">
                  {exemplo_visual.sentences.slice(0, 3).map((s, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
                      {s.image_url ? (
                        <img src={s.image_url} alt="" className="w-full h-28 object-cover" />
                      ) : (
                        <div className="w-full h-28 grid place-items-center bg-slate-50 text-4xl">
                          {s.emoji ?? "📌"}
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-sm text-slate-800 font-semibold">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-slate-700 text-sm border-l-4 border-orange-400 pl-3 italic">
                  {exemplo_visual.conclusion}
                </p>
              </Card>
            )}

            {/* 5 — ATIVIDADE GUIADA */}
            {step === 4 && (
              <Card className="p-6">
                <SectionLabel Icon={ClipboardCheck} text="ATIVIDADE GUIADA" />
                <h2 className="mt-2 text-lg font-black mb-4">
                  1. Relacione a característica com o conceito.
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#0b2545] text-white p-4 text-center">
                    <p className="text-xs font-bold opacity-70 mb-1">CONCEITO</p>
                    <p className="text-xl font-black">{guidedTarget?.left}</p>
                  </div>
                  <div className="space-y-2">
                    {shuffledRights.map((p, i) => {
                      const isPick = guidedPick?.right === p.right;
                      const correct = p.right === guidedTarget?.right;
                      return (
                        <button
                          key={i}
                          disabled={!!guidedPick}
                          onClick={() => setGuidedPick(p)}
                          className={`w-full text-left px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all
                            ${isPick
                              ? correct
                                ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                                : "border-red-400 bg-red-50 text-red-700"
                              : "border-slate-200 hover:border-slate-300 bg-white text-slate-800"}`}
                        >
                          <span className="flex items-center justify-between gap-2">
                            {p.right}
                            {isPick && (correct ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {guidedPick && (
                  <div className={`mt-4 p-3 rounded-lg text-sm font-semibold
                    ${guidedPick.right === guidedTarget?.right
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-orange-50 text-orange-800"}`}>
                    {guidedPick.right === guidedTarget?.right
                      ? "Correto! " + explicacao_curta.text
                      : `Quase! A resposta certa é: ${guidedTarget?.right}.`}
                  </div>
                )}
              </Card>
            )}

            {/* 6 — DESAFIO */}
            {step === 5 && (
              <Card className="p-6">
                <SectionLabel Icon={Sparkles} text="DESAFIO" />
                <h2 className="mt-2 text-lg font-black mb-4">{praticar.question}</h2>
                <div className="space-y-2">
                  {praticar.options.map((opt, i) => {
                    const letter = ["A", "B", "C", "D"][i] ?? "•";
                    const isPick = challengePick?.text === opt.text;
                    return (
                      <button
                        key={i}
                        disabled={!!challengePick}
                        onClick={() => setChallengePick(opt)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all
                          ${isPick
                            ? opt.isCorrect
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-red-400 bg-red-50"
                            : "border-slate-200 hover:border-slate-300 bg-white"}`}
                      >
                        <span className={`w-7 h-7 grid place-items-center rounded-full font-black text-xs
                          ${isPick && opt.isCorrect ? "bg-emerald-500 text-white"
                            : isPick ? "bg-red-400 text-white"
                            : "bg-slate-100 text-slate-700"}`}>
                          {letter}
                        </span>
                        <span className="text-sm font-semibold text-slate-800 flex-1">{opt.text}</span>
                        {isPick && (opt.isCorrect
                          ? <Check className="w-5 h-5 text-emerald-600" />
                          : <X className="w-5 h-5 text-red-500" />)}
                      </button>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* 7 — REVISÃO E SÍNTESE */}
            {step === 6 && (
              <Card className="p-6">
                <SectionLabel Icon={ListChecks} text="REVISÃO E SÍNTESE" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">
                  Nesta aula você aprendeu:
                </h2>
                <ul className="space-y-3 mb-6">
                  {[explicacao.summary, explicacao_curta.text, exemplo_visual.conclusion]
                    .filter(Boolean)
                    .map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 grid place-items-center shrink-0">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-slate-800">{t}</span>
                      </li>
                    ))}
                </ul>
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <p className="font-black text-slate-900 mb-2">Mapa Mental</p>
                  <div className="flex flex-wrap gap-2">
                    {(explicacao_curta.highlights ?? exploracao.pairs.map((p) => p.left))
                      .slice(0, 6)
                      .map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700"
                        >
                          {h}
                        </span>
                      ))}
                  </div>
                </div>
              </Card>
            )}

            {/* 8 — CONCLUSÃO */}
            {step === 7 && (
              <Card className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <Trophy className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black mb-1">Excelente!</h2>
                <p className="text-slate-600 mb-6">Você concluiu esta aula.</p>
                <div className="mx-auto w-40 h-40 relative mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="44" stroke="#e2e8f0" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      stroke="#0ea5e9"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(percent / 100) * 276.5} 276.5`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-3xl font-black text-[#0b2545]">{percent}%</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-6">Nível de domínio desta habilidade</p>
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full font-black mb-6">
                  <Star className="w-4 h-4 fill-amber-500 stroke-amber-600" /> + {lesson.xp} XP
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {currentRef && <NextLessonInlineButton current={currentRef} />}
                  <button
                    onClick={() => navigate({ to: "/escola-brilha" })}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50"
                  >
                    Voltar à trilha
                  </button>
                </div>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="sticky bottom-0 bg-white/90 backdrop-blur border-t border-slate-200">
        {Footer}
      </div>
    </div>
  );
};

export default Fund2Player;
