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
  ClipboardList,
  Trophy,
  ListChecks,
  Sparkles,
  User,
  Award,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import type { LessonV2, OptionV2 } from "../types/lesson-v2";
import { AudioSpeechService } from "../services/AudioSpeechService";
import { NextLessonInlineButton } from "../components/NextLessonInlineButton";
import type { LessonRef } from "../hooks/useNextLesson";

interface Props {
  lesson: LessonV2;
  currentRef?: LessonRef;
  capitulo?: string;
}

type StepId =
  | "missao"
  | "exploracao"
  | "explicacao"
  | "exemplo"
  | "guiada"
  | "atividade"
  | "desafio"
  | "resumo"
  | "dominio";

const STEPS: { id: StepId; label: string; Icon: typeof Target }[] = [
  { id: "missao",     label: "MISSÃO",            Icon: Target },
  { id: "exploracao", label: "EXPLORAÇÃO",        Icon: Compass },
  { id: "explicacao", label: "EXPLICAÇÃO",        Icon: BookOpen },
  { id: "exemplo",    label: "EXEMPLO RESOLVIDO", Icon: Lightbulb },
  { id: "guiada",     label: "PRÁTICA GUIADA",    Icon: ClipboardCheck },
  { id: "atividade",  label: "ATIVIDADE",         Icon: ClipboardList },
  { id: "desafio",    label: "DESAFIO",           Icon: Sparkles },
  { id: "resumo",     label: "RESUMO",            Icon: ListChecks },
  { id: "dominio",    label: "DOMÍNIO BNCC",      Icon: Award },
];

/* ─────────── Top bar ─────────── */
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

/** Botão de opção com feedback explicativo do MOTIVO (não só certo/errado). */
const ChoiceButton: React.FC<{
  opt: OptionV2;
  letter: string;
  picked: OptionV2 | null;
  onPick: (o: OptionV2) => void;
}> = ({ opt, letter, picked, onPick }) => {
  const isPick = picked?.text === opt.text;
  return (
    <button
      disabled={!!picked}
      onClick={() => onPick(opt)}
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
};

const Feedback: React.FC<{ picked: OptionV2 | null }> = ({ picked }) =>
  picked ? (
    <div className={`mt-4 p-3 rounded-lg text-sm font-semibold
      ${picked.isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-orange-50 text-orange-800"}`}>
      {picked.reason}
    </div>
  ) : null;

/* ─────────── MathBoard — "lousa" de resolução passo a passo ───────────
   Detecta linhas com '=' como equações e linhas com "dos dois lados",
   "÷", "×", "+" ou "−" como operações. Renderiza cada passo como linha
   da lousa, com a operação aplicada visivelmente entre uma equação e
   a próxima, e setas verticais conectando os passos.                       */
const isEquationLine = (s: string) => /[=]/.test(s);
const looksLikeOperation = (s: string) =>
  /dos dois lados/i.test(s) || /^[\s]*[+\-−×÷xX·*\/][\s]*\d/.test(s.trim());

const MathLine: React.FC<{ text: string; tone?: "eq" | "op" | "note" }> = ({ text, tone = "eq" }) => {
  if (tone === "op") {
    return (
      <div className="flex flex-col items-center my-1">
        <div className="text-slate-400 text-lg leading-none">↓</div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider border border-amber-200">
          {text}
        </div>
        <div className="text-slate-400 text-lg leading-none">↓</div>
      </div>
    );
  }
  if (tone === "note") {
    return <div className="text-center text-xs text-slate-500 mt-1">{text}</div>;
  }
  return (
    <div className="text-center font-mono text-3xl sm:text-4xl font-black text-slate-900 tracking-wider py-2">
      {text}
    </div>
  );
};

const MathBoard: React.FC<{ steps: { step: string; detail: string }[] }> = ({ steps }) => {
  // Flatten cada passo em uma sequência de linhas (equação / operação / nota).
  const lines: { text: string; tone: "eq" | "op" | "note"; tag?: string }[] = [];
  steps.forEach((p, idx) => {
    const head = p.step.includes("—") ? p.step.split("—").slice(1).join("—").trim() : p.step.trim();
    const detail = (p.detail || "").trim();
    const tag = `Passo ${idx + 1}`;
    if (isEquationLine(head)) {
      lines.push({ text: head, tone: "eq", tag });
      if (detail && !isEquationLine(detail)) lines.push({ text: detail, tone: "note" });
      else if (detail) lines.push({ text: detail, tone: "eq" });
    } else if (looksLikeOperation(head)) {
      lines.push({ text: head, tone: "op", tag });
      if (detail) lines.push({ text: detail, tone: isEquationLine(detail) ? "eq" : "note" });
    } else {
      // header genérico — vira nota acima da equação seguinte
      if (head) lines.push({ text: head, tone: "note" });
      if (detail) lines.push({ text: detail, tone: isEquationLine(detail) ? "eq" : "note" });
    }
  });

  return (
    <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 sm:p-8 shadow-inner">
      {lines.map((ln, i) => (
        <div key={i} className="relative">
          {ln.tag && ln.tone === "eq" && (
            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-700 text-center mb-1">
              {ln.tag}
            </div>
          )}
          <MathLine text={ln.text} tone={ln.tone} />
        </div>
      ))}
    </div>
  );
};

/* ════════════════════════════════════════════════ */


export const Fund2Player: React.FC<Props> = ({ lesson, currentRef, capitulo }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [guidedPick, setGuidedPick] = useState<OptionV2 | null>(null);
  const [activityPicks, setActivityPicks] = useState<Record<number, OptionV2>>({});
  const [challengePick, setChallengePick] = useState<OptionV2 | null>(null);
  const [startedAt] = useState(() => Date.now());

  const s = lesson.screens;

  const total = STEPS.length;

  // métricas de domínio
  const dominio = useMemo(() => {
    const allOptions: OptionV2[] = [
      ...(guidedPick ? [guidedPick] : []),
      ...Object.values(activityPicks),
      ...(challengePick ? [challengePick] : []),
    ];
    const answered = allOptions.length;
    const correct = allOptions.filter((o) => o.isCorrect).length;
    const wrong = answered - correct;
    const percent = answered === 0 ? 0 : Math.round((correct / answered) * 100);
    const minutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000));
    const level =
      percent >= 80 ? "Avançado" : percent >= 50 ? "Intermediário" : "Iniciante";
    return { answered, correct, wrong, percent, minutes, level };
  }, [guidedPick, activityPicks, challengePick, startedAt]);

  const fullText = useMemo(
    () =>
      [
        s.missao.studentObjective,
        s.explicacao.conceito,
        s.exemplo.answer,
      ].join(". "),
    [s],
  );

  const next = () => setStep((i) => Math.min(total - 1, i + 1));
  const prev = () => setStep((i) => Math.max(0, i - 1));

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
        disciplina={lesson.discipline}
        serie={lesson.grade}
        capitulo={capitulo ?? lesson.bnccCode}
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
                {s.missao.heroImage ? (
                  <div className="relative h-56 sm:h-72 w-full bg-slate-200">
                    <img src={s.missao.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                  <p className="text-3xl mb-2">{s.missao.contextEmoji}</p>
                  <p className="text-lg text-slate-800 font-bold mb-1">{s.missao.contextLine}</p>
                  <p className="text-slate-700 mb-4">{s.missao.studentObjective}</p>
                  <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider mb-3">
                    Nesta aula você vai:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.missao.whatYouWillDo.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-800">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    BNCC · {lesson.bnccCode}
                  </div>
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
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-2">
                  {s.exploracao.provokingQuestion}
                </h2>
                <p className="text-slate-600 mb-4">{s.exploracao.observation}</p>
                {s.exploracao.heroImage && (
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img src={s.exploracao.heroImage} alt="" className="w-full h-64 object-cover" />
                    {s.exploracao.caption && (
                      <p className="text-xs text-slate-500 px-3 py-2">{s.exploracao.caption}</p>
                    )}
                  </div>
                )}
                {lesson.discipline === "Matemática" ? (
                  <MathBoard
                    steps={s.exploracao.pairs.map((p) => ({ step: p.left, detail: p.right }))}
                  />
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {s.exploracao.pairs.map((p, i) => (
                      <div key={i} className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                        <p className="text-sm font-black text-slate-900">{p.left}</p>
                        <p className="text-sm text-slate-600">{p.right}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}

            {/* 3 — EXPLICAÇÃO (Conceito → Passo a passo → Exemplo → Aplicação → Resumo) */}
            {step === 2 && (
              <Card className="p-6">
                <SectionLabel Icon={BookOpen} text="EXPLICAÇÃO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">Conceito</h2>
                <p className="text-slate-800 mb-6">{s.explicacao.conceito}</p>

                <h3 className="font-black text-slate-900 mb-3">Passo a passo</h3>
                {lesson.discipline === "Matemática" ? (
                  <div className="mb-6">
                    <MathBoard steps={s.explicacao.passoAPasso} />
                  </div>
                ) : (
                  <ol className="space-y-3 mb-6">
                    {s.explicacao.passoAPasso.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-lg bg-[#0b2545] text-white grid place-items-center text-xs font-black">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-bold text-slate-900">{p.step}</p>
                          <p className="text-slate-700 text-sm">{p.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4 bg-amber-50/40">
                    <p className="font-black text-slate-900 mb-1">Exemplo</p>
                    <p className="text-slate-700 text-sm">{s.explicacao.exemplo}</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-sky-50/40">
                    <p className="font-black text-slate-900 mb-1">Aplicação</p>
                    <p className="text-slate-700 text-sm">{s.explicacao.aplicacao}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#0b2545] text-white p-4">
                  <p className="text-xs font-black uppercase tracking-wider opacity-70 mb-1">Resumo</p>
                  <p className="font-bold">{s.explicacao.resumo}</p>
                </div>
              </Card>
            )}

            {/* 4 — EXEMPLO RESOLVIDO */}
            {step === 3 && (
              <Card className="p-6">
                <SectionLabel Icon={Lightbulb} text="EXEMPLO RESOLVIDO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-4">{s.exemplo.question}</h2>
                {s.exemplo.image && (
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img src={s.exemplo.image} alt="" className="w-full h-56 object-cover" />
                  </div>
                )}
                <div className="space-y-2 mb-4">
                  {s.exemplo.resolution.map((r, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="w-6 h-6 shrink-0 rounded-md bg-slate-100 text-slate-700 grid place-items-center text-xs font-black">
                        {i + 1}
                      </span>
                      <p className="text-slate-800">
                        {r.note && <span className="mr-1">{r.note}</span>}
                        {r.line}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                  <p className="text-xs font-black uppercase text-emerald-700">Resposta</p>
                  <p className="text-emerald-900 font-bold">{s.exemplo.answer}</p>
                  <p className="text-emerald-800 text-sm mt-2">
                    <span className="font-black">Por quê: </span>{s.exemplo.why}
                  </p>
                </div>
              </Card>
            )}

            {/* 5 — PRÁTICA GUIADA */}
            {step === 4 && (
              <Card className="p-6">
                <SectionLabel Icon={ClipboardCheck} text="PRÁTICA GUIADA" />
                <h2 className="mt-2 text-lg font-black mb-3">{s.guiada.prompt}</h2>
                <p className="text-slate-600 mb-4 text-sm">
                  <span className="font-black">Dica: </span>{s.guiada.hint}
                </p>
                <div className="space-y-2">
                  {s.guiada.options.map((o, i) => (
                    <ChoiceButton
                      key={i}
                      opt={o}
                      letter={["A", "B", "C", "D"][i] ?? "•"}
                      picked={guidedPick}
                      onPick={setGuidedPick}
                    />
                  ))}
                </div>
                <Feedback picked={guidedPick} />
              </Card>
            )}

            {/* 6 — ATIVIDADE */}
            {step === 5 && (
              <Card className="p-6">
                <SectionLabel Icon={ClipboardList} text="ATIVIDADE" />
                <p className="mt-2 mb-4 text-sm text-slate-600">
                  Resolva sozinho. Sem ajuda. Você verá o feedback ao responder.
                </p>
                <div className="space-y-6">
                  {s.atividade.items.map((it, qi) => (
                    <div key={qi}>
                      <h3 className="font-black text-slate-900 mb-3">
                        {qi + 1}. {it.question}
                      </h3>
                      <div className="space-y-2">
                        {it.options.map((o, i) => (
                          <ChoiceButton
                            key={i}
                            opt={o}
                            letter={["A", "B", "C", "D"][i] ?? "•"}
                            picked={activityPicks[qi] ?? null}
                            onPick={(opt) =>
                              setActivityPicks((p) => ({ ...p, [qi]: opt }))
                            }
                          />
                        ))}
                      </div>
                      <Feedback picked={activityPicks[qi] ?? null} />
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 7 — DESAFIO */}
            {step === 6 && (
              <Card className="p-6">
                <SectionLabel Icon={Sparkles} text="DESAFIO" />
                <p className="mt-2 text-sm italic text-slate-600 mb-2">
                  {s.desafio.contextualScenario}
                </p>
                <h2 className="text-lg font-black mb-4">{s.desafio.question}</h2>
                <div className="space-y-2">
                  {s.desafio.options.map((o, i) => (
                    <ChoiceButton
                      key={i}
                      opt={o}
                      letter={["A", "B", "C", "D"][i] ?? "•"}
                      picked={challengePick}
                      onPick={setChallengePick}
                    />
                  ))}
                </div>
                <Feedback picked={challengePick} />
              </Card>
            )}

            {/* 8 — RESUMO (estruturado, nunca texto corrido) */}
            {step === 7 && (
              <Card className="p-6">
                <SectionLabel Icon={ListChecks} text="RESUMO" />
                <h2 className="mt-2 text-xl sm:text-2xl font-black mb-1">{s.resumo.title}</h2>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Formato: {s.resumo.format}
                </p>

                {s.resumo.format === "table" ? (
                  <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-2 font-black text-slate-800">Conceito</th>
                        <th className="text-left p-2 font-black text-slate-800">Definição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.resumo.nodes.map((n, i) => (
                        <tr key={i} className="border-t border-slate-200">
                          <td className="p-2 font-bold text-slate-900">{n.label}</td>
                          <td className="p-2 text-slate-700">{n.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : s.resumo.format === "timeline" ? (
                  <ol className="relative border-l-2 border-emerald-200 pl-4 space-y-3 mb-4">
                    {s.resumo.nodes.map((n, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-emerald-500" />
                        <p className="font-black text-slate-900">{n.label}</p>
                        <p className="text-sm text-slate-700">{n.detail}</p>
                      </li>
                    ))}
                  </ol>
                ) : s.resumo.format === "flow" ? (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {s.resumo.nodes.map((n, i) => (
                      <React.Fragment key={i}>
                        <div className="px-3 py-2 rounded-lg bg-sky-50 border border-sky-200">
                          <p className="font-black text-slate-900 text-sm">{n.label}</p>
                          <p className="text-xs text-slate-600">{n.detail}</p>
                        </div>
                        {i < s.resumo.nodes.length - 1 && <span className="text-slate-400">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                ) : s.resumo.format === "diagram" ? (
                  <div className="grid sm:grid-cols-3 gap-2 mb-4">
                    {s.resumo.nodes.map((n, i) => (
                      <div key={i} className="rounded-xl border-2 border-dashed border-slate-300 p-3 text-center">
                        <p className="font-black text-slate-900">{n.label}</p>
                        <p className="text-xs text-slate-600">{n.detail}</p>
                      </div>
                    ))}
                  </div>
                ) : s.resumo.format === "mindmap" ? (
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 mb-4">
                    <p className="text-center font-black text-slate-900 mb-3">{s.resumo.title}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {s.resumo.nodes.map((n, i) => (
                        <span
                          key={i}
                          title={n.detail}
                          className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700"
                        >
                          {n.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2 mb-4">
                    {s.resumo.nodes.map((n, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 grid place-items-center shrink-0">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-slate-800">
                          <span className="font-bold">{n.label}</span>
                          {n.detail && <> — {n.detail}</>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <p className="font-black text-slate-900 mb-2">Pontos-chave</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    {s.resumo.takeaways.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}

            {/* 9 — DOMÍNIO BNCC */}
            {step === 8 && (
              <Card className="p-8">
                <SectionLabel Icon={Award} text="DOMÍNIO BNCC" />
                <h2 className="mt-2 text-2xl font-black mb-1">Excelente trabalho!</h2>
                <p className="text-slate-600 mb-6">Veja seu domínio nesta habilidade.</p>

                <div className="grid sm:grid-cols-[auto_minmax(0,1fr)] gap-6 items-center mb-6">
                  <div className="w-40 h-40 relative mx-auto">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="44" stroke="#e2e8f0" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        stroke="#0ea5e9"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(dominio.percent / 100) * 276.5} 276.5`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-3xl font-black text-[#0b2545]">{dominio.percent}%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="text-xs font-bold uppercase text-slate-500">Competência BNCC</p>
                      <p className="font-black text-slate-900">{s.dominio.bnccCode}</p>
                      <p className="text-sm text-slate-700">{s.dominio.bnccObjective}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                        <p className="text-xs font-bold text-emerald-700">Acertos</p>
                        <p className="text-xl font-black text-emerald-800">{dominio.correct}</p>
                      </div>
                      <div className="rounded-xl bg-red-50 border border-red-200 p-3">
                        <p className="text-xs font-bold text-red-700">Erros</p>
                        <p className="text-xl font-black text-red-800">{dominio.wrong}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                        <p className="text-xs font-bold text-slate-700">Tempo</p>
                        <p className="text-xl font-black text-slate-800">{dominio.minutes} min</p>
                      </div>
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
                        <p className="text-xs font-bold text-amber-700">Nível</p>
                        <p className="text-xl font-black text-amber-800">{dominio.level}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 mb-6">
                  <p className="font-black text-slate-900 mb-1">Recomendação</p>
                  <p className="text-sm text-slate-700">{s.dominio.recommendation}</p>
                </div>

                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full font-black mb-6">
                  <Star className="w-4 h-4 fill-amber-500 stroke-amber-600" /> + {lesson.xp} XP
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
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
