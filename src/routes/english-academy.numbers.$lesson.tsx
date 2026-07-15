import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Volume2, Check, X, Mic, Trophy, Turtle } from "lucide-react";
import { Shell } from "@/components/Layout";
import { NUMBERS_1_10, NUMBERS_1_10_LESSON } from "@/english-academy/data/numbers";
import { speakEnglish, stopSpeakingEn } from "@/lib/native-tts-en";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/english-academy/numbers/$lesson")({
  loader: ({ params }) => {
    if (params.lesson !== NUMBERS_1_10_LESSON.slug) throw notFound();
    return { lesson: NUMBERS_1_10_LESSON };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.lesson.title ?? "Numbers"} — English Academy` },
      { name: "description", content: loaderData?.lesson.descricao ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <Shell>
      <div className="text-center py-12 text-white">Aula não encontrada.</div>
    </Shell>
  ),
  component: NumbersLessonPage,
});

// ─── Cores / gradiente da Numbers Academy ───────────────
const G = "from-[#F59E0B] via-[#D97706] to-[#7C2D12]";
const ACCENT = "#FFC93C";

// ─── Momentos (16) ──────────────────────────────────────
type StepId =
  | "intro" | "objective" | "warmup" | "explanation" | "pronunciation"
  | "vocab" | "listening" | "speaking" | "reading" | "writing"
  | "real" | "minigame" | "challenge" | "curiosity" | "quiz" | "mission";

const STEPS: { id: StepId; label: string }[] = [
  { id: "intro",         label: "Introdução" },
  { id: "objective",     label: "Objetivo" },
  { id: "warmup",        label: "Aquecimento" },
  { id: "explanation",   label: "Explicação" },
  { id: "pronunciation", label: "Pronúncia" },
  { id: "vocab",         label: "Vocabulário" },
  { id: "listening",     label: "Listening" },
  { id: "speaking",      label: "Speaking" },
  { id: "reading",       label: "Reading" },
  { id: "writing",       label: "Writing" },
  { id: "real",          label: "Situação real" },
  { id: "minigame",      label: "Mini Game" },
  { id: "challenge",     label: "Desafio" },
  { id: "curiosity",     label: "Curiosidade" },
  { id: "quiz",          label: "Quiz" },
  { id: "mission",       label: "Missão Final" },
];

function NumbersLessonPage() {
  const { lesson } = Route.useLoaderData();
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx];

  useEffect(() => () => stopSpeakingEn(), []);
  useEffect(() => { stopSpeakingEn(); }, [stepIdx]);

  const next = () => setStepIdx((i) => Math.min(STEPS.length - 1, i + 1));
  const prev = () => setStepIdx((i) => Math.max(0, i - 1));
  const pct = ((stepIdx + 1) / STEPS.length) * 100;

  return (
    <Shell>
      <div className="max-w-3xl mx-auto pb-24">
        <Link
          to="/english-academy/$academy"
          params={{ academy: "numbers" }}
          className="inline-flex items-center gap-1.5 text-white/80 text-sm font-black mb-3 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} /> Numbers Academy
        </Link>

        {/* Header + progresso */}
        <div
          className={cn("relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-4 md:p-5 mb-4 bg-gradient-to-br", G)}
          style={{ boxShadow: "0 0 32px rgba(245,158,11,0.55)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">
                Aula · {stepIdx + 1}/{STEPS.length}
              </div>
              <h1 className="text-white text-xl md:text-2xl font-black leading-tight">
                {lesson.title} · <span className="text-white/90">{step.label}</span>
              </h1>
            </div>
          </div>
          <div className="h-2 bg-black/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={false}
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>

        {/* Conteúdo do momento */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="rounded-[1.6rem] bg-gradient-to-br from-white/8 to-white/2 border-2 border-white/15 p-4 md:p-5"
          >
            {step.id === "intro"         && <Intro lesson={lesson} onDone={next} />}
            {step.id === "objective"     && <Objective lesson={lesson} />}
            {step.id === "warmup"        && <Warmup />}
            {step.id === "explanation"   && <Explanation lesson={lesson} />}
            {step.id === "pronunciation" && <Pronunciation />}
            {step.id === "vocab"         && <VocabContext lesson={lesson} />}
            {step.id === "listening"     && <Listening lesson={lesson} onDone={next} />}
            {step.id === "speaking"      && <Speaking lesson={lesson} onDone={next} />}
            {step.id === "reading"       && <Reading lesson={lesson} onDone={next} />}
            {step.id === "writing"       && <Writing lesson={lesson} onDone={next} />}
            {step.id === "real"          && <RealSituation lesson={lesson} />}
            {step.id === "minigame"      && <BalloonGame onDone={next} />}
            {step.id === "challenge"     && <Challenge />}
            {step.id === "curiosity"     && <Curiosity lesson={lesson} />}
            {step.id === "quiz"          && <Quiz lesson={lesson} onDone={next} />}
            {step.id === "mission"       && <FinalMission lesson={lesson} />}
          </motion.div>
        </AnimatePresence>

        {/* Navegação */}
        <div className="fixed bottom-4 inset-x-0 flex justify-center pointer-events-none z-50">
          <div className="pointer-events-auto flex gap-2 bg-black/60 backdrop-blur border border-white/20 rounded-full p-1.5">
            <button
              onClick={prev}
              disabled={stepIdx === 0}
              className="px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-wider disabled:opacity-30 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1" strokeWidth={3} /> Voltar
            </button>
            <button
              onClick={next}
              disabled={stepIdx === STEPS.length - 1}
              className="px-4 py-2 rounded-full bg-[#FFC93C] text-[#0d1f55] text-xs font-black uppercase tracking-wider disabled:opacity-30"
            >
              Próximo <ArrowRight className="h-4 w-4 inline ml-1" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}

// ═══ COMPONENTES REUTILIZÁVEIS ══════════════════════════

function SpeakBtn({ text, size = "md", slow = false }: { text: string; size?: "sm" | "md" | "lg"; slow?: boolean }) {
  const dims =
    size === "lg" ? "h-14 w-14" : size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); e.stopPropagation();
        speakEnglish(text, { rate: slow ? 0.55 : 1 });
      }}
      aria-label={`Ouvir ${text}`}
      className={cn("shrink-0 rounded-full grid place-items-center transition-transform active:scale-90",
        slow ? "bg-white/95 text-[#7c2d12]" : "bg-[#FFC93C] text-[#0d1f55] hover:bg-[#FFD966]", dims)}
    >
      {slow ? <Turtle className={icon} strokeWidth={3} /> : <Volume2 className={icon} strokeWidth={3} />}
    </button>
  );
}

function Feedback({ ok, text }: { ok: boolean; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "mt-3 rounded-xl border-2 px-3 py-2 text-xs md:text-sm font-black flex items-start gap-2",
        ok ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-200" : "bg-rose-500/15 border-rose-500/50 text-rose-200",
      )}
    >
      {ok ? <Check className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={4} /> : <X className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={4} />}
      <span>{text}</span>
    </motion.div>
  );
}

// ═══ MOMENTOS ═══════════════════════════════════════════

function Intro({ lesson, onDone }: any) {
  const [line, setLine] = useState(0);
  const d = lesson.intro.dialogo[line];
  useEffect(() => { if (d) speakEnglish(d.en); }, [line]);
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-2">🎬 {lesson.intro.scene}</div>
      <div className="space-y-2">
        {lesson.intro.dialogo.slice(0, line + 1).map((li: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 border border-white/20 rounded-xl p-3">
            <div className="text-[#FFC93C] text-[10px] font-black uppercase tracking-wider">{li.who}</div>
            <div className="flex items-center gap-2 mt-0.5">
              <SpeakBtn text={li.en} size="sm" />
              <div className="text-white font-black text-base md:text-lg leading-tight">{li.en}</div>
            </div>
            <div className="text-white/60 text-xs mt-1 italic">{li.pt}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        {line < lesson.intro.dialogo.length - 1 ? (
          <button onClick={() => setLine((l) => l + 1)}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Continuar diálogo
          </button>
        ) : (
          <button onClick={onDone}
            className="bg-emerald-400 text-emerald-950 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Vamos aprender!
          </button>
        )}
      </div>
    </div>
  );
}

function Objective({ lesson }: any) {
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🎯 Hoje você vai aprender:</div>
      <ul className="space-y-2">
        {lesson.objectives.map((o: string, i: number) => (
          <motion.li key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * i }}
            className="flex items-start gap-2 bg-white/10 border border-white/20 rounded-xl p-3">
            <div className="shrink-0 h-6 w-6 rounded-full bg-[#FFC93C] text-[#0d1f55] grid place-items-center text-xs font-black">
              {i + 1}
            </div>
            <div className="text-white font-bold text-sm">{o}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function Warmup() {
  const [i, setI] = useState(0);
  const n = NUMBERS_1_10[i];
  useEffect(() => { speakEnglish(n.en); }, [i]);
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🔥 Aquecimento — toque para ouvir</div>
      <div className="flex flex-col items-center py-4">
        <div className="text-6xl md:text-7xl mb-2 select-none">
          {Array(n.n).fill("🍎").join("")}
        </div>
        <div className="text-white text-4xl md:text-6xl font-black">{n.n}</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="text-[#FFC93C] text-2xl md:text-3xl font-black">{n.en}</div>
          <SpeakBtn text={n.en} />
          <SpeakBtn text={n.en} slow />
        </div>
        <div className="text-white/60 text-xs mt-1 font-mono">{n.ipa} · {n.pt}</div>
      </div>
      <div className="flex gap-1.5 justify-center flex-wrap">
        {NUMBERS_1_10.map((num, idx) => (
          <button key={num.n} onClick={() => setI(idx)}
            className={cn("h-9 w-9 rounded-full font-black text-sm border-2 transition-all",
              idx === i ? "bg-[#FFC93C] text-[#0d1f55] border-white scale-110" : "bg-white/10 text-white border-white/25 hover:border-white/60")}>
            {num.n}
          </button>
        ))}
      </div>
    </div>
  );
}

function Explanation({ lesson }: any) {
  useEffect(() => { speakEnglish(lesson.explanation.text); }, []);
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-2">👩‍🏫 Professora {lesson.explanation.teacher} explica:</div>
      <div className="bg-white/10 border border-white/20 rounded-xl p-3 mb-3">
        <div className="flex items-start gap-2">
          <SpeakBtn text={lesson.explanation.text} size="sm" />
          <div className="text-white font-bold text-sm md:text-base">{lesson.explanation.text}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {lesson.explanation.examples.map((ex: any, i: number) => (
          <button key={i} onClick={() => speakEnglish(ex.en)}
            className="bg-white/8 hover:bg-white/15 border-2 border-white/20 rounded-xl p-2 text-center transition-colors">
            <div className="text-3xl mb-1">{ex.emoji}</div>
            <div className="text-white text-xs font-black">{ex.en}</div>
            <div className="text-white/60 text-[10px] italic">{ex.pt}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Pronunciation() {
  const [i, setI] = useState(6); // "seven" por padrão (o mais didático)
  const n = NUMBERS_1_10[i];
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🔊 Divida a palavra em sons</div>
      <div className="text-center py-3">
        <div className="text-white text-3xl md:text-4xl font-black mb-1">{n.en}</div>
        <div className="text-white/60 text-sm font-mono">{n.ipa}</div>
      </div>
      <div className="flex items-center justify-center gap-2 flex-wrap py-3">
        {n.syllables.map((syl, si) => (
          <button key={si} onClick={() => speakEnglish(syl, { rate: 0.7 })}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-3 rounded-2xl text-lg md:text-xl font-black shadow-lg active:scale-95">
            {syl}
          </button>
        ))}
        <div className="text-white/60 text-lg font-black">→</div>
        <button onClick={() => speakEnglish(n.en)}
          className="bg-white text-[#7c2d12] px-4 py-3 rounded-2xl text-lg md:text-xl font-black shadow-lg active:scale-95">
          {n.en}
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mb-3">
        <SpeakBtn text={n.en} slow />
        <SpeakBtn text={n.en} />
      </div>
      <div className="flex gap-1.5 justify-center flex-wrap">
        {NUMBERS_1_10.map((num, idx) => (
          <button key={num.n} onClick={() => setI(idx)}
            className={cn("h-9 w-9 rounded-full font-black text-sm border-2",
              idx === i ? "bg-[#FFC93C] text-[#0d1f55] border-white" : "bg-white/10 text-white border-white/25")}>
            {num.n}
          </button>
        ))}
      </div>
    </div>
  );
}

function VocabContext({ lesson }: any) {
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">💬 Os números viram frases:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {lesson.vocabInContext.map((v: any, i: number) => (
          <button key={i} onClick={() => speakEnglish(v.en)}
            className="bg-white/8 hover:bg-white/15 border-2 border-white/20 rounded-xl p-3 flex items-center gap-3 text-left transition-colors">
            <div className="text-4xl">{v.emoji}</div>
            <div className="flex-1">
              <div className="text-white font-black text-base">{v.en}</div>
              <div className="text-white/60 text-xs italic">{v.pt}</div>
            </div>
            <Volume2 className="h-5 w-5 text-[#FFC93C]" strokeWidth={3} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Listening({ lesson, onDone }: any) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = lesson.listening[i];
  useEffect(() => { setPicked(null); speakEnglish(q.audio); }, [i]);
  const ok = picked === q.correct;

  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🎧 Ouça e escolha — {i + 1}/{lesson.listening.length}</div>
      <div className="flex items-center gap-2 justify-center py-4">
        <SpeakBtn text={q.audio} size="lg" />
        <SpeakBtn text={q.audio} size="md" slow />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {q.options.map((op: number) => (
          <button key={op} onClick={() => setPicked(op)} disabled={picked !== null}
            className={cn("py-4 rounded-xl text-2xl md:text-3xl font-black border-2 transition-all",
              picked === null ? "bg-white/10 text-white border-white/25 hover:border-white/60" :
              op === q.correct ? "bg-emerald-500/30 text-emerald-100 border-emerald-400" :
              op === picked ? "bg-rose-500/30 text-rose-100 border-rose-400" :
              "bg-white/5 text-white/40 border-white/10")}>
            {op}
          </button>
        ))}
      </div>
      {picked !== null && (
        <>
          <Feedback ok={ok} text={ok ? `Certíssimo! "${q.audio}" = ${q.correct}.` : `A frase foi "${q.audio}", que é ${q.correct}.`} />
          <div className="mt-3 flex justify-end">
            {i < lesson.listening.length - 1 ? (
              <button onClick={() => setI(i + 1)} className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                Próxima
              </button>
            ) : (
              <button onClick={onDone} className="bg-emerald-400 text-emerald-950 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                Concluir listening
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Speaking({ lesson, onDone }: any) {
  const [i, setI] = useState(0);
  const [status, setStatus] = useState<"idle" | "listening" | "ok" | "fail">("idle");
  const [heard, setHeard] = useState("");
  const q = lesson.speaking[i];

  const listen = () => {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setStatus("ok"); // fallback: apenas seguir
      return;
    }
    const rec = new SR();
    rec.lang = "en-US"; rec.continuous = false; rec.interimResults = false;
    setStatus("listening");
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript.toLowerCase();
      setHeard(text);
      const target = String(q.answerNumber);
      const wordMap = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
      const spoken = wordMap[q.answerNumber];
      if (text.includes(target) || text.includes(spoken) || text.includes(q.answerEn.toLowerCase())) setStatus("ok");
      else setStatus("fail");
    };
    rec.onerror = () => setStatus("fail");
    rec.onend = () => { if (status === "listening") setStatus("idle"); };
    rec.start();
  };

  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🎙️ Speaking — {i + 1}/{lesson.speaking.length}</div>
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-3">
        <div className="flex items-center gap-2">
          <SpeakBtn text={q.prompt} size="sm" />
          <div className="text-white font-black text-lg">{q.prompt}</div>
        </div>
        <div className="text-5xl md:text-6xl text-center py-3 select-none">
          {Array(q.answerNumber).fill(q.emoji).join("")}
        </div>
        <div className="text-center text-white/60 text-xs italic">Diga: <b className="text-[#FFC93C] not-italic">"{q.answerEn}"</b> ({q.answerPt})</div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={listen} disabled={status === "listening"}
          className={cn("px-5 py-3 rounded-full font-black text-sm uppercase tracking-wider flex items-center gap-2",
            status === "listening" ? "bg-rose-500 text-white animate-pulse" : "bg-[#FFC93C] text-[#0d1f55]")}>
          <Mic className="h-4 w-4" strokeWidth={3} /> {status === "listening" ? "Ouvindo..." : "Falar"}
        </button>
      </div>

      {status === "ok" && <Feedback ok text={`Perfeito! Você disse "${heard || q.answerEn}".`} />}
      {status === "fail" && <Feedback ok={false} text={`Eu ouvi "${heard}". Tente de novo, dizendo "${q.answerEn}".`} />}

      {status === "ok" && (
        <div className="mt-3 flex justify-end">
          {i < lesson.speaking.length - 1 ? (
            <button onClick={() => { setI(i + 1); setStatus("idle"); setHeard(""); }}
              className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
              Próxima
            </button>
          ) : (
            <button onClick={onDone} className="bg-emerald-400 text-emerald-950 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
              Concluir speaking
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Reading({ lesson, onDone }: any) {
  const [phase, setPhase] = useState<"read" | "quiz">("read");
  const [qi, setQi] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = lesson.reading.questions[qi];

  if (phase === "read") {
    return (
      <div>
        <div className="text-white/70 text-xs font-bold mb-3">📖 Leia o texto e ouça</div>
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-3 space-y-2">
          {lesson.reading.text.map((line: any, i: number) => {
            const en = typeof line === "string" ? line : line.en;
            const pt = typeof line === "string" ? "" : line.pt;
            return (
              <div key={i} className="flex items-start gap-2">
                <SpeakBtn text={en} size="sm" />
                <div className="flex-1">
                  <div className="text-white font-bold text-sm md:text-base">{en}</div>
                  {pt && <div className="text-white/60 text-xs italic mt-0.5">{pt}</div>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={() => speakEnglish(lesson.reading.text.map((l: any) => typeof l === "string" ? l : l.en).join(" "))}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Ouvir tudo
          </button>
          <button onClick={() => setPhase("quiz")}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Responder perguntas
          </button>
        </div>
      </div>
    );
  }

  const ok = picked === q.correct;
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">❓ Reading — {qi + 1}/{lesson.reading.questions.length}</div>
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-3">
        <div className="text-white font-black text-base md:text-lg">{q.q}</div>
        {q.qPt && q.qPt !== q.q && <div className="text-white/60 text-xs italic mt-1">{q.qPt}</div>}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {q.options.map((op: number) => (
          <button key={op} onClick={() => setPicked(op)} disabled={picked !== null}
            className={cn("py-4 rounded-xl text-2xl font-black border-2 transition-all",
              picked === null ? "bg-white/10 text-white border-white/25 hover:border-white/60" :
              op === q.correct ? "bg-emerald-500/30 text-emerald-100 border-emerald-400" :
              op === picked ? "bg-rose-500/30 text-rose-100 border-rose-400" :
              "bg-white/5 text-white/40 border-white/10")}>
            {op}
          </button>
        ))}
      </div>
      {picked !== null && (
        <>
          <Feedback ok={ok} text={ok ? "Boa leitura!" : `A resposta era ${q.correct}.`} />
          <div className="mt-3 flex justify-end">
            {qi < lesson.reading.questions.length - 1 ? (
              <button onClick={() => { setQi(qi + 1); setPicked(null); }}
                className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                Próxima
              </button>
            ) : (
              <button onClick={onDone} className="bg-emerald-400 text-emerald-950 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                Concluir reading
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Writing({ lesson, onDone }: any) {
  const [i, setI] = useState(0);
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const q = lesson.writing[i];
  const ok = val.trim().toLowerCase() === q.correctEn.toLowerCase() || val.trim() === String(q.correctN);

  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">✍️ Complete — {i + 1}/{lesson.writing.length}</div>
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-3 text-center">
        <div className="text-4xl md:text-5xl mb-2 select-none">{q.emoji}</div>
        <div className="text-white font-black text-lg md:text-xl">
          {q.sentence.split("___")[0]}
          <span className="inline-block min-w-[80px] mx-1 border-b-2 border-[#FFC93C] text-[#FFC93C]">
            {done ? q.correctEn : val || "___"}
          </span>
          {q.sentence.split("___")[1]}
        </div>
        {q.sentencePt && (
          <div className="text-white/60 text-xs italic mt-2">
            {q.sentencePt.replace("___", done ? String(q.correctN) : "___")}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          disabled={done}
          placeholder="Digite a resposta em inglês"
          className="flex-1 bg-white/10 border-2 border-white/25 focus:border-[#FFC93C] rounded-xl px-3 py-2 text-white font-black outline-none"
        />
        {!done ? (
          <button onClick={() => setDone(true)}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider">
            Verificar
          </button>
        ) : i < lesson.writing.length - 1 ? (
          <button onClick={() => { setI(i + 1); setVal(""); setDone(false); }}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider">
            Próxima
          </button>
        ) : (
          <button onClick={onDone}
            className="bg-emerald-400 text-emerald-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider">
            Concluir
          </button>
        )}
      </div>
      {done && <Feedback ok={ok} text={ok ? "Escrita correta!" : `A resposta era "${q.correctEn}" (${q.correctN}).`} />}
    </div>
  );
}

function RealSituation({ lesson }: any) {
  const [line, setLine] = useState(0);
  const d = lesson.realSituation.dialogo[line];
  useEffect(() => { if (d) speakEnglish(d.en); }, [line]);
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🛒 {lesson.realSituation.place}</div>
      <div className="space-y-2">
        {lesson.realSituation.dialogo.slice(0, line + 1).map((li: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            className={cn("rounded-xl p-3 border",
              li.who === "Você" ? "bg-[#FFC93C]/10 border-[#FFC93C]/40 ml-6" : "bg-white/10 border-white/20 mr-6")}>
            <div className={cn("text-[10px] font-black uppercase tracking-wider",
              li.who === "Você" ? "text-[#FFC93C]" : "text-white/60")}>{li.who}</div>
            <div className="flex items-center gap-2 mt-0.5">
              <SpeakBtn text={li.en} size="sm" />
              <div className="text-white font-black text-sm md:text-base">{li.en}</div>
            </div>
            <div className="text-white/60 text-xs italic">{li.pt}</div>
          </motion.div>
        ))}
      </div>
      {line < lesson.realSituation.dialogo.length - 1 && (
        <div className="mt-3 flex justify-end">
          <button onClick={() => setLine(line + 1)}
            className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Continuar
          </button>
        </div>
      )}
    </div>
  );
}

function BalloonGame({ onDone }: { onDone: () => void }) {
  const [target, setTarget] = useState<number>(() => 1 + Math.floor(Math.random() * 10));
  const [balloons, setBalloons] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState<null | { ok: boolean; text: string }>(null);

  const spawn = () => {
    const arr: number[] = [target];
    while (arr.length < 6) {
      const n = 1 + Math.floor(Math.random() * 10);
      if (!arr.includes(n)) arr.push(n);
    }
    setBalloons(arr.sort(() => Math.random() - 0.5));
  };

  useEffect(() => { spawn(); speakEnglish(NUMBERS_1_10[target - 1].en); }, [target]);

  const pop = (n: number) => {
    if (n === target) {
      setScore((s) => s + 1);
      setMsg({ ok: true, text: `Boom! "${NUMBERS_1_10[target - 1].en}" = ${target}.` });
      setTimeout(() => {
        setMsg(null);
        setTarget(1 + Math.floor(Math.random() * 10));
      }, 900);
    } else {
      setMsg({ ok: false, text: `Não era ${n}. Ouça de novo!` });
      speakEnglish(NUMBERS_1_10[target - 1].en);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-white/70 text-xs font-bold">🎈 Estoure o balão do número falado</div>
        <div className="text-[#FFC93C] text-xs font-black">Pontos: {score}</div>
      </div>
      <div className="flex items-center justify-center gap-2 mb-3">
        <SpeakBtn text={NUMBERS_1_10[target - 1].en} size="lg" />
        <SpeakBtn text={NUMBERS_1_10[target - 1].en} slow />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {balloons.map((b, i) => (
          <motion.button key={`${target}-${i}-${b}`}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}
            whileTap={{ scale: 0.85 }}
            onClick={() => pop(b)}
            className="aspect-square rounded-full bg-gradient-to-br from-rose-400 to-rose-700 border-4 border-white text-white text-3xl md:text-4xl font-black grid place-items-center shadow-lg">
            {b}
          </motion.button>
        ))}
      </div>
      {msg && <Feedback ok={msg.ok} text={msg.text} />}
      {score >= 3 && (
        <div className="mt-4 flex justify-center">
          <button onClick={onDone}
            className="bg-emerald-400 text-emerald-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider">
            ✅ Concluir mini game
          </button>
        </div>
      )}
    </div>
  );
}

function Challenge() {
  const items = [
    { q: "Quantas cadeiras têm na sua sala?", hint: "Ex: five chairs" },
    { q: "Quantas janelas você vê?",          hint: "Ex: two windows" },
    { q: "Quantos lápis estão perto de você?", hint: "Ex: three pencils" },
  ];
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🏆 Desafio — conte de verdade!</div>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-3">
            <div className="text-white font-black text-sm">{i + 1}. {it.q}</div>
            <div className="text-white/60 text-xs mt-1 italic">{it.hint}</div>
            <button onClick={() => speakEnglish(it.hint)}
              className="mt-2 inline-flex items-center gap-1.5 bg-[#FFC93C] text-[#0d1f55] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              <Volume2 className="h-3 w-3" strokeWidth={3} /> Ouvir exemplo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Curiosity({ lesson }: any) {
  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-3">🌎 Curiosidade cultural</div>
      <div className="bg-gradient-to-br from-[#FFC93C]/20 to-transparent border-2 border-[#FFC93C]/40 rounded-xl p-4">
        <div className="text-white text-sm md:text-base leading-relaxed">{lesson.curiosity}</div>
      </div>
    </div>
  );
}

function Quiz({ lesson, onDone }: any) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | number | null>(null);
  const [score, setScore] = useState(0);
  const q = lesson.quiz[i];
  const isTrans = q.type === "translation";
  const correctVal: any = isTrans ? q.correctEn : q.correct;

  useEffect(() => {
    setPicked(null);
    if (q.type === "listening" && q.audio) speakEnglish(String(q.audio));
  }, [i]);

  const pick = (op: string | number) => {
    if (picked !== null) return;
    setPicked(op);
    if (op === correctVal) setScore((s) => s + 1);
  };
  const ok = picked === correctVal;

  if (i >= lesson.quiz.length) {
    return (
      <div className="text-center py-6">
        <Trophy className="h-14 w-14 mx-auto text-[#FFC93C] mb-2" strokeWidth={2.5} />
        <div className="text-white font-black text-2xl">Quiz concluído!</div>
        <div className="text-white/70 mt-1">{score}/{lesson.quiz.length} acertos</div>
        <button onClick={onDone}
          className="mt-4 bg-emerald-400 text-emerald-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider">
          Ir para a Missão Final
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-white/70 text-xs font-bold">🧠 Quiz — {i + 1}/{lesson.quiz.length}</div>
        <div className="text-[#FFC93C] text-xs font-black">Pontos: {score}</div>
      </div>
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-3">
        <div className="text-white font-black text-base md:text-lg">{q.q}</div>
        {q.emoji && <div className="text-4xl md:text-5xl text-center py-2 select-none">{q.emoji}</div>}
        {q.type === "listening" && (
          <div className="flex justify-center gap-2 mt-2">
            <SpeakBtn text={String(q.audio)} />
            <SpeakBtn text={String(q.audio)} slow />
          </div>
        )}
      </div>
      <div className={cn("grid gap-2", isTrans ? "grid-cols-2" : "grid-cols-4")}>
        {q.options.map((op: any) => (
          <button key={String(op)} onClick={() => pick(op)} disabled={picked !== null}
            className={cn("py-3 rounded-xl font-black border-2 transition-all",
              isTrans ? "text-base" : "text-xl",
              picked === null ? "bg-white/10 text-white border-white/25 hover:border-white/60" :
              op === correctVal ? "bg-emerald-500/30 text-emerald-100 border-emerald-400" :
              op === picked ? "bg-rose-500/30 text-rose-100 border-rose-400" :
              "bg-white/5 text-white/40 border-white/10")}>
            {op}
          </button>
        ))}
      </div>
      {picked !== null && (
        <>
          <Feedback ok={ok} text={ok ? "Correto!" : `A resposta certa era "${correctVal}".`} />
          <div className="mt-3 flex justify-end">
            <button onClick={() => setI(i + 1)}
              className="bg-[#FFC93C] text-[#0d1f55] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
              {i < lesson.quiz.length - 1 ? "Próxima" : "Ver resultado"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function FinalMission({ lesson }: any) {
  const m = lesson.finalMission;
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(m.shopping.map((s: any) => [s.en, 0])),
  );
  const [done, setDone] = useState(false);

  const allOk = useMemo(
    () => m.shopping.every((s: any) => counts[s.en] === s.quantity),
    [counts, m.shopping],
  );

  const add = (en: string) => setCounts((c) => ({ ...c, [en]: c[en] + 1 }));
  const sub = (en: string) => setCounts((c) => ({ ...c, [en]: Math.max(0, c[en] - 1) }));

  const confetti = useRef<HTMLDivElement>(null);

  if (done && allOk) {
    return (
      <div className="text-center py-6 relative overflow-hidden" ref={confetti}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
          className="text-6xl mb-2">🏆</motion.div>
        <div className="text-[#FFC93C] font-black text-2xl md:text-3xl">{m.badge}</div>
        <div className="text-white/80 mt-2 text-sm">Você concluiu a aula <b>{lesson.title}</b>!</div>
        <div className="mt-1 text-white/60 text-xs">Você aprendeu a contar de 1 a 10 em inglês. 🎉</div>
        <Link to="/english-academy/$academy" params={{ academy: "numbers" }}
          className="inline-block mt-5 bg-emerald-400 text-emerald-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider">
          Voltar à Numbers Academy
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="text-white/70 text-xs font-bold mb-1">🛒 Missão Final — {m.title}</div>
      <div className="text-white/60 text-xs mb-3">{m.instruction}</div>
      <div className="space-y-2">
        {m.shopping.map((s: any) => {
          const isOk = counts[s.en] === s.quantity;
          return (
            <div key={s.en}
              className={cn("rounded-xl p-3 border-2 flex items-center gap-3",
                isOk ? "bg-emerald-500/15 border-emerald-500/50" : "bg-white/10 border-white/20")}>
              <div className="text-3xl">{s.emoji}</div>
              <div className="flex-1">
                <div className="text-white font-black text-sm">
                  {s.quantity} {s.en}
                </div>
                <button onClick={() => speakEnglish(`${NUMBERS_1_10[s.quantity - 1].en} ${s.en}`)}
                  className="text-[#FFC93C] text-[10px] font-black uppercase tracking-wider inline-flex items-center gap-1 mt-0.5">
                  <Volume2 className="h-3 w-3" strokeWidth={3} /> Ouvir pedido
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => sub(s.en)}
                  className="h-8 w-8 rounded-full bg-white/15 text-white font-black">−</button>
                <div className="w-8 text-center text-white font-black text-lg">{counts[s.en]}</div>
                <button onClick={() => add(s.en)}
                  className="h-8 w-8 rounded-full bg-[#FFC93C] text-[#0d1f55] font-black">+</button>
              </div>
              {isOk && <Check className="h-5 w-5 text-emerald-400" strokeWidth={4} />}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={() => setDone(true)} disabled={!allOk}
          className={cn("px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider",
            allOk ? "bg-emerald-400 text-emerald-950" : "bg-white/10 text-white/40")}>
          {allOk ? "🏆 Finalizar missão" : "Ajuste as quantidades"}
        </button>
      </div>
    </div>
  );
}
