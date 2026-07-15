import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Check, X, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/Layout";
import { getVerb, VERBS } from "@/english-academy/data/verbs";
import { speakEnglish } from "@/lib/native-tts-en";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/english-academy/verbs/$verb")({
  loader: ({ params }) => {
    const verb = getVerb(params.verb);
    if (!verb) throw notFound();
    return { verb };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.verb.base ?? "Verb"} — Verb Academy` },
      { name: "description", content: loaderData?.verb.significado ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <Shell>
      <div className="max-w-md mx-auto text-center py-12 text-white">
        <div className="text-6xl mb-3">🔎</div>
        <h1 className="text-2xl font-black mb-2">Verbo não encontrado</h1>
        <Link to="/english-academy/$academy" params={{ academy: "verbs" }} className="text-[#FFC93C] font-black">
          ← Ver todos os verbos
        </Link>
      </div>
    </Shell>
  ),
  component: VerbPage,
});

type Section = "significado" | "pronuncia" | "conjugacao" | "exemplos" | "situacoes" | "quiz";

const SECTIONS: { id: Section; label: string; emoji: string }[] = [
  { id: "significado", label: "Significado", emoji: "💡" },
  { id: "pronuncia", label: "Pronúncia", emoji: "🔊" },
  { id: "conjugacao", label: "Conjugação", emoji: "📐" },
  { id: "exemplos", label: "Exemplos", emoji: "📝" },
  { id: "situacoes", label: "No dia a dia", emoji: "💬" },
  { id: "quiz", label: "Quiz", emoji: "🎯" },
];

function VerbPage() {
  const { verb } = Route.useLoaderData();
  const [section, setSection] = useState<Section>("significado");
  const currentIndex = VERBS.findIndex((v) => v.slug === verb.slug);
  const nextVerb = VERBS[currentIndex + 1];

  return (
    <Shell>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/english-academy/$academy"
          params={{ academy: "verbs" }}
          className="inline-flex items-center gap-1.5 text-white/80 text-sm font-black mb-3 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} /> Verb Academy
        </Link>

        {/* Cabeçalho do verbo */}
        <div
          className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-5 md:p-7 mb-4"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, #7f1d1d 0%, #450a0a 55%, #1c0505 100%)",
          }}
        >
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                Verbo {verb.tipo}
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-none">
                  {verb.base}
                </h1>
                <span className="text-white/60 text-sm md:text-lg font-mono">{verb.ipa}</span>
              </div>
              <div className="text-[#FFC93C] font-black text-lg mt-1">= {verb.pt}</div>
            </div>
            <button
              onClick={() => speakEnglish(verb.base)}
              aria-label={`Ouvir ${verb.base}`}
              className="shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] grid place-items-center transition-transform active:scale-90 shadow-lg"
            >
              <Volume2 className="h-7 w-7 md:h-8 md:w-8" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3 -mx-1 px-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={cn(
                "shrink-0 px-3 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all",
                section === s.id
                  ? "bg-[#FFC93C] text-[#0d1f55] border-[#FFC93C]"
                  : "bg-white/8 text-white/70 border-white/15 hover:border-white/30",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-white/8 to-white/2 border-2 border-white/15 rounded-2xl p-5 md:p-6"
          >
            {section === "significado" && <SignificadoView verb={verb} />}
            {section === "pronuncia" && <PronunciaView verb={verb} />}
            {section === "conjugacao" && <ConjugacaoView verb={verb} />}
            {section === "exemplos" && <ExemplosView verb={verb} />}
            {section === "situacoes" && <SituacoesView verb={verb} />}
            {section === "quiz" && (
              <QuizView verb={verb} nextVerbSlug={nextVerb?.slug} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Shell>
  );
}

/* =================== SEÇÕES =================== */

function SignificadoView({ verb }: { verb: ReturnType<typeof getVerb> & object }) {
  return (
    <div>
      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
        💡 O que significa
      </div>
      <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
        {verb.significado}
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <MiniInfo label="Base" value={verb.base} />
        <MiniInfo label="Passado" value={verb.conjugation.past} />
        <MiniInfo label="Particípio" value={verb.conjugation.pastParticiple} />
      </div>
    </div>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
      <div className="text-white/50 text-[9px] font-black uppercase tracking-widest">
        {label}
      </div>
      <div className="text-white font-black text-lg mt-1 leading-tight">{value}</div>
    </div>
  );
}

function PronunciaView({ verb }: { verb: ReturnType<typeof getVerb> & object }) {
  return (
    <div>
      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
        🔊 Ouça e repita
      </div>
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="text-6xl md:text-7xl font-black text-white">{verb.base}</div>
        <div className="text-white/60 text-xl font-mono">{verb.ipa}</div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => speakEnglish(verb.base, { rate: 0.95 })}
            className="inline-flex items-center gap-2 bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] px-5 py-3 rounded-full font-black uppercase tracking-wider text-sm active:scale-95"
          >
            <Volume2 className="h-5 w-5" strokeWidth={3} /> Normal
          </button>
          <button
            onClick={() => speakEnglish(verb.base, { rate: 0.6 })}
            className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white border-2 border-white/25 px-5 py-3 rounded-full font-black uppercase tracking-wider text-sm active:scale-95"
          >
            🐢 Devagar
          </button>
        </div>
      </div>
      <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
        <div className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-2">
          Formas para praticar
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            verb.base,
            verb.conjugation.thirdPerson,
            verb.conjugation.past,
            verb.conjugation.pastParticiple,
            verb.conjugation.gerund,
          ]
            .filter(Boolean)
            .map((w, i) => (
              <button
                key={`${w}-${i}`}
                onClick={() => speakEnglish(w.split(" / ")[0])}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-full px-3 py-1.5 text-white font-black text-sm active:scale-95"
              >
                <Volume2 className="h-3.5 w-3.5" strokeWidth={3} /> {w}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

function ConjugacaoView({ verb }: { verb: ReturnType<typeof getVerb> & object }) {
  const rows = [
    { pron: "I / You / We / They", form: verb.base },
    { pron: "He / She / It", form: verb.conjugation.thirdPerson },
    { pron: "Passado (Past)", form: verb.conjugation.past },
    { pron: "Particípio (Past Participle)", form: verb.conjugation.pastParticiple },
    { pron: "Gerúndio (-ing)", form: verb.conjugation.gerund },
  ];
  return (
    <div>
      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
        📐 Como conjugar
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.pron}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3"
          >
            <div className="flex-1">
              <div className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                {r.pron}
              </div>
              <div className="text-white font-black text-lg md:text-xl">{r.form}</div>
            </div>
            <button
              onClick={() => speakEnglish(r.form.split(" / ")[0])}
              aria-label={`Ouvir ${r.form}`}
              className="shrink-0 h-9 w-9 rounded-full bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] grid place-items-center active:scale-90"
            >
              <Volume2 className="h-4 w-4" strokeWidth={3} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExemplosView({ verb }: { verb: ReturnType<typeof getVerb> & object }) {
  return (
    <div>
      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
        📝 Frases de exemplo
      </div>
      <div className="space-y-2">
        {verb.examples.map((ex, i) => (
          <SentenceRow key={i} en={ex.en} pt={ex.pt} />
        ))}
      </div>
    </div>
  );
}

function SituacoesView({ verb }: { verb: ReturnType<typeof getVerb> & object }) {
  return (
    <div>
      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
        💬 No dia a dia
      </div>
      <div className="space-y-2">
        {verb.situations.map((ex, i) => (
          <SentenceRow key={i} en={ex.en} pt={ex.pt} highlight />
        ))}
      </div>
    </div>
  );
}

function SentenceRow({ en, pt, highlight }: { en: string; pt: string; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl p-3 border",
        highlight
          ? "bg-[#FFC93C]/10 border-[#FFC93C]/30"
          : "bg-white/5 border-white/10",
      )}
    >
      <button
        onClick={() => speakEnglish(en)}
        aria-label="Ouvir frase"
        className="shrink-0 h-9 w-9 rounded-full bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] grid place-items-center active:scale-90 mt-0.5"
      >
        <Volume2 className="h-4 w-4" strokeWidth={3} />
      </button>
      <div className="flex-1 min-w-0">
        <div className="text-white font-black text-base md:text-lg leading-tight">{en}</div>
        <div className="text-white/60 text-sm mt-0.5">{pt}</div>
      </div>
    </div>
  );
}

/* =================== QUIZ =================== */

function QuizView({
  verb,
  nextVerbSlug,
}: {
  verb: ReturnType<typeof getVerb> & object;
  nextVerbSlug: string | undefined;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = verb.quiz[i];
  const isCorrect = picked === q?.answer;

  function pick(opt: string) {
    if (picked) return;
    setPicked(opt);
    if (opt === q!.answer) setScore((s) => s + 1);
  }

  function next() {
    if (i + 1 >= verb.quiz.length) {
      setFinished(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
  }

  function restart() {
    setI(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / verb.quiz.length) * 100);
    const passed = pct >= 60;
    return (
      <div className="text-center py-4">
        <div className="text-6xl mb-3">{passed ? "🏆" : "💪"}</div>
        <div className="text-white text-2xl font-black">
          {passed ? "Muito bem!" : "Vamos treinar mais!"}
        </div>
        <div className="text-white/70 mt-1">
          Você acertou {score} de {verb.quiz.length} ({pct}%)
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-5">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white border-2 border-white/25 px-5 py-3 rounded-full font-black uppercase text-sm active:scale-95"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={3} /> Refazer
          </button>
          {nextVerbSlug && (
            <Link
              to="/english-academy/verbs/$verb"
              params={{ verb: nextVerbSlug }}
              className="inline-flex items-center gap-2 bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] px-5 py-3 rounded-full font-black uppercase text-sm active:scale-95"
            >
              <Trophy className="h-4 w-4" strokeWidth={3} /> Próximo verbo
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
          Quiz — {i + 1}/{verb.quiz.length}
        </div>
        <div className="text-white/70 text-xs font-black">Pontos: {score}</div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-3">
        <div className="text-white text-lg md:text-xl font-black leading-tight">
          {q!.en.split("___").map((part, idx, arr) => (
            <span key={idx}>
              {part}
              {idx < arr.length - 1 && (
                <span className="inline-block mx-1 px-3 py-0.5 bg-[#FFC93C]/25 border-b-4 border-[#FFC93C] text-[#FFC93C] rounded">
                  ___
                </span>
              )}
            </span>
          ))}
        </div>
        <div className="text-white/50 text-sm mt-1">{q!.pt}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {q!.options.map((opt) => {
          const isPicked = picked === opt;
          const isRight = opt === q!.answer;
          return (
            <button
              key={opt}
              onClick={() => pick(opt)}
              disabled={!!picked}
              className={cn(
                "px-4 py-3 rounded-xl font-black text-lg border-2 transition-all active:scale-95",
                !picked && "bg-white/8 border-white/20 text-white hover:bg-white/15",
                picked && isRight && "bg-emerald-500/25 border-emerald-400 text-emerald-100",
                picked && isPicked && !isRight && "bg-rose-500/25 border-rose-400 text-rose-100",
                picked && !isPicked && !isRight && "opacity-40 bg-white/5 border-white/10 text-white/70",
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {picked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-4 rounded-xl p-4 border-2 flex items-start gap-3",
              isCorrect
                ? "bg-emerald-500/15 border-emerald-400/40"
                : "bg-rose-500/15 border-rose-400/40",
            )}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full grid place-items-center shrink-0",
                isCorrect ? "bg-emerald-500 text-white" : "bg-rose-500 text-white",
              )}
            >
              {isCorrect ? <Check className="h-5 w-5" strokeWidth={4} /> : <X className="h-5 w-5" strokeWidth={4} />}
            </div>
            <div className="flex-1">
              <div className="text-white font-black">
                {isCorrect ? "Correto!" : `A resposta certa é "${q!.answer}".`}
              </div>
              <div className="text-white/80 text-sm mt-1">{q!.explain}</div>
              <button
                onClick={next}
                className="mt-3 inline-flex items-center gap-2 bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] px-4 py-2 rounded-full font-black text-sm uppercase tracking-wider active:scale-95"
              >
                {i + 1 >= verb.quiz.length ? "Ver resultado" : "Próxima"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
