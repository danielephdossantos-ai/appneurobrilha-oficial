import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Mic, MicOff, Check, X, Sparkles, PartyPopper } from "lucide-react";
import { speakEnglish, stopSpeakingEn, warmupEnVoices } from "@/lib/native-tts-en";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import {
  VOCAB,
  STORY,
  DIALOG,
  READING,
  WRITING,
  QUIZ,
  REAL_LIFE,
  GRAMMAR,
} from "./u1-a01-hello/data";

type Props = { onSair: () => void; onConcluir: () => void };

/**
 * PlayerEnglishV1 — engine dedicada de Inglês (piloto).
 * Renderiza os 11 momentos obrigatórios do curso de idiomas em scroll
 * contínuo. Cada seção tem TTS (falante nativo), narração em pt-BR
 * opcional, e componentes específicos (SpeakingMic, WordCardSPEB,
 * ListeningDialog, GrammarWhy, RealLifeScenarios, MiniGameMatch).
 */
export function PlayerEnglishV1({ onSair, onConcluir }: Props) {
  useEffect(() => {
    warmupEnVoices();
    return () => {
      stopSpeakingEn();
      stopSpeaking();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={onSair}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft size={18} /> Sair
          </button>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-widest text-sky-600 font-black">
              My First English Adventure
            </div>
            <div className="text-sm font-black text-slate-800">Unit 1 · Lesson 1 — Hello!</div>
          </div>
          <div className="w-14" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-8 pb-32">
        <SectionCover onStart={() => scrollToId("s1")} />
        <Section id="s1" step={1} label="História inicial" title="Meet Lily!">
          <Story />
        </Section>
        <Section id="s2" step={2} label="Vocabulário novo" title="New words">
          <Vocabulary />
        </Section>
        <Section id="s3" step={3} label="Speaking" title="Now you speak!">
          <SpeakingMic />
        </Section>
        <Section id="s4" step={4} label="Listening" title="Listen carefully">
          <ListeningDialog />
        </Section>
        <Section id="s5" step={5} label="Reading" title={READING.title}>
          <Reading />
        </Section>
        <Section id="s6" step={6} label="Writing" title="Complete the sentence">
          <Writing />
        </Section>
        <Section id="s7" step={7} label="Grammar" title={GRAMMAR.focus}>
          <GrammarWhy />
        </Section>
        <Section id="s8" step={8} label="Real Life" title="In real life">
          <RealLife />
        </Section>
        <Section id="s9" step={9} label="Mini Game" title="Match the word!">
          <MiniGameMatch />
        </Section>
        <Section id="s10" step={10} label="Quiz" title="Quick check">
          <Quiz />
        </Section>
        <Section id="s11" step={11} label="Projeto" title="Introduce yourself!">
          <FinalProject onFinish={onConcluir} />
        </Section>
      </main>
    </div>
  );
}

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================= UI base ============================= */

function SectionCover({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center py-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-block bg-gradient-to-br from-sky-400 to-indigo-500 text-white rounded-3xl px-8 py-6 shadow-xl"
      >
        <div className="text-xs uppercase tracking-widest opacity-80">Lesson 1</div>
        <div className="text-3xl font-black mt-1">Hello, friend!</div>
        <div className="text-sm opacity-90 mt-2 max-w-xs mx-auto">
          Hoje você vai aprender a cumprimentar e dizer seu nome em inglês.
        </div>
      </motion.div>
      <div className="mt-6">
        <button
          onClick={onStart}
          className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-black shadow hover:bg-amber-300 transition"
        >
          Start ▸
        </button>
      </div>
    </div>
  );
}

function Section({
  id,
  step,
  label,
  title,
  children,
}: {
  id: string;
  step: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-slate-900 text-white grid place-items-center font-black text-sm">
          {step}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            {label}
          </div>
          <div className="text-xl font-black text-slate-800">{title}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">{children}</div>
    </section>
  );
}

/** Botão de áudio em inglês (falante nativo). */
function PlayEn({ text, size = "md" }: { text: string; size?: "sm" | "md" }) {
  const [playing, setPlaying] = useState(false);
  const cls =
    size === "sm"
      ? "w-9 h-9 text-sm"
      : "w-11 h-11 text-base";
  return (
    <button
      onClick={async () => {
        if (playing) {
          stopSpeakingEn();
          setPlaying(false);
          return;
        }
        setPlaying(true);
        await speakEnglish(text, { onEnd: () => setPlaying(false) });
      }}
      className={`${cls} rounded-full grid place-items-center shrink-0 transition ${
        playing ? "bg-rose-500 text-white" : "bg-sky-500 text-white hover:bg-sky-600"
      }`}
      aria-label={playing ? "Parar" : "Ouvir em inglês"}
      title="Ouvir em inglês"
    >
      <Volume2 size={size === "sm" ? 16 : 20} />
    </button>
  );
}

/** Botão de narração em português (Aurora explica). */
function PlayPt({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      onClick={async () => {
        if (playing) {
          stopSpeaking();
          setPlaying(false);
          return;
        }
        setPlaying(true);
        await speakChunked(text, { onEnd: () => setPlaying(false) });
      }}
      className={`text-xs px-3 py-1.5 rounded-full font-bold transition inline-flex items-center gap-1.5 ${
        playing ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
    >
      <Volume2 size={12} /> {playing ? "Parar" : "Aurora explica"}
    </button>
  );
}

/* ============================ 1. Story ============================ */

function Story() {
  const [i, setI] = useState(0);
  const panel = STORY[i];
  useEffect(() => {
    // Auto-fala em inglês ao abrir cada painel
    const t = setTimeout(() => speakEnglish(panel.en), 300);
    return () => clearTimeout(t);
  }, [i, panel.en]);
  return (
    <div>
      <div className="rounded-xl bg-slate-50 overflow-hidden">
        <div className="aspect-video grid place-items-center bg-gradient-to-b from-sky-100 to-white">
          <motion.img
            key={i}
            src={panel.img}
            alt=""
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-h-56 object-contain"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start gap-2">
            <PlayEn text={panel.en} />
            <div>
              <div className="text-lg font-black text-slate-800">{panel.en}</div>
              <div className="text-sm text-slate-500 italic">{panel.pt}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Voltar
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {STORY.length}
        </div>
        <button
          onClick={() => setI((v) => Math.min(STORY.length - 1, v + 1))}
          disabled={i === STORY.length - 1}
          className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}

/* ========================= 2. Vocabulary (SPEB) ========================= */

/** Card de palavra que passa pelas etapas SPEB: Ver → Ouvir → Repetir → Ler. */
function Vocabulary() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Toque em cada palavra. Você vai <b>ver</b>, <b>ouvir</b> e <b>repetir</b> em voz alta.
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {VOCAB.map((w) => (
          <button
            key={w.id}
            onClick={() => {
              setOpenId(w.id);
              speakEnglish(w.en);
            }}
            className="bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-xl p-3 text-left transition"
          >
            <img src={w.img} alt="" className="w-full h-24 object-contain" />
            <div className="mt-1 font-black text-slate-800 text-center">{w.en}</div>
            <div className="text-[11px] text-slate-500 text-center italic">{w.pt}</div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {openId && (
          <WordSPEB word={VOCAB.find((v) => v.id === openId)!} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function WordSPEB({ word, onClose }: { word: (typeof VOCAB)[number]; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const steps = ["👀 Ver", "👂 Ouvir", "🗣️ Repetir", "📖 Ler", "✅ Ok!"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl"
      >
        <div className="flex justify-between text-xs font-bold text-slate-500 mb-3">
          {steps.map((s, i) => (
            <div key={i} className={i === step ? "text-sky-600" : ""}>
              {s}
            </div>
          ))}
        </div>
        <img src={word.img} alt="" className="w-40 h-40 mx-auto object-contain" />
        <div className="text-center mt-3">
          <div className="text-3xl font-black text-slate-800">{word.en}</div>
          <div className="text-sm text-slate-500 italic">{word.pt}</div>
        </div>
        <div className="mt-4 space-y-2">
          {step === 0 && (
            <StepBtn onClick={() => setStep(1)}>👀 Já vi a imagem</StepBtn>
          )}
          {step === 1 && (
            <>
              <StepBtn onClick={() => speakEnglish(word.en)}>👂 Ouvir de novo</StepBtn>
              <StepBtn onClick={() => setStep(2)} primary>
                Já ouvi →
              </StepBtn>
            </>
          )}
          {step === 2 && (
            <>
              <div className="text-center text-sm text-slate-600">
                Repete alto agora: <b>{word.en}</b>
              </div>
              <StepBtn onClick={() => speakEnglish(word.en)}>👂 Ouvir modelo</StepBtn>
              <StepBtn onClick={() => setStep(3)} primary>
                Repeti! →
              </StepBtn>
            </>
          )}
          {step === 3 && (
            <>
              <div className="text-center text-sm text-slate-600">
                Lê a palavra escrita: <b>{word.en}</b>
              </div>
              <StepBtn onClick={() => setStep(4)} primary>
                Li →
              </StepBtn>
            </>
          )}
          {step === 4 && (
            <>
              <div className="text-center text-emerald-600 font-black text-lg">
                ⭐ Palavra aprendida!
              </div>
              <StepBtn onClick={onClose} primary>
                Fechar
              </StepBtn>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function StepBtn({
  children,
  onClick,
  primary,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2.5 rounded-xl font-bold transition ${
        primary
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}

/* ============================ 3. Speaking ============================ */

type SR = any;

function SpeakingMic() {
  const targets = ["Hello", "Good morning", "My name is Lily"];
  const [i, setI] = useState(0);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string>("");
  const [result, setResult] = useState<"idle" | "ok" | "again">("idle");
  const recRef = useRef<SR>(null);
  const target = targets[i];

  const supported =
    typeof window !== "undefined" &&
    ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  const start = () => {
    if (!supported) return;
    setHeard("");
    setResult("idle");
    const SRClass: any =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const rec = new SRClass();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onresult = (e: any) => {
      const alts: string[] = [];
      for (let j = 0; j < e.results[0].length; j++) alts.push(e.results[0][j].transcript);
      const said = alts.join(" | ");
      setHeard(said);
      const norm = (s: string) => s.toLowerCase().replace(/[^a-z ]/g, "").trim();
      const t = norm(target);
      const okAny = alts.some((a) => norm(a).includes(t) || t.includes(norm(a)));
      setResult(okAny ? "ok" : "again");
      if (okAny) speakEnglish("Very good!");
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    try {
      rec.start();
      setListening(true);
      recRef.current = rec;
    } catch {
      setListening(false);
    }
  };

  const stop = () => {
    try {
      recRef.current?.stop?.();
    } catch {
      /* ignore */
    }
    setListening(false);
  };

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Ouça o modelo, depois <b>fale</b> alto. Vou reconhecer sua voz.
      </div>
      <div className="rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 p-5 text-center">
        <div className="text-3xl font-black text-slate-800">{target}</div>
        <div className="mt-3 flex justify-center gap-2">
          <PlayEn text={target} />
          {supported ? (
            <button
              onClick={listening ? stop : start}
              className={`w-11 h-11 rounded-full grid place-items-center text-white transition ${
                listening ? "bg-rose-500 animate-pulse" : "bg-emerald-500 hover:bg-emerald-600"
              }`}
              aria-label="Falar"
            >
              {listening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          ) : null}
        </div>
        {!supported && (
          <div className="text-xs text-slate-500 mt-3">
            Este navegador não reconhece voz. Repete alto em voz igual!
          </div>
        )}
        {heard && (
          <div className="mt-3 text-sm">
            <div className="text-slate-500">Ouvi:</div>
            <div className="font-bold text-slate-700">{heard}</div>
          </div>
        )}
        {result === "ok" && (
          <div className="mt-3 text-emerald-600 font-black flex items-center justify-center gap-2">
            <Check size={18} /> Very good!
          </div>
        )}
        {result === "again" && (
          <div className="mt-3 text-amber-600 font-black flex items-center justify-center gap-2">
            <X size={18} /> Tenta de novo, mais devagar.
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => {
            setI((v) => Math.max(0, v - 1));
            setHeard("");
            setResult("idle");
          }}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Anterior
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {targets.length}
        </div>
        <button
          onClick={() => {
            setI((v) => Math.min(targets.length - 1, v + 1));
            setHeard("");
            setResult("idle");
          }}
          disabled={i === targets.length - 1}
          className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 4. Listening ============================ */

function ListeningDialog() {
  const [playedAll, setPlayedAll] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const playAll = async () => {
    setPlayedAll(false);
    for (const t of DIALOG) {
      await speakEnglish(`${t.who} says: ${t.en}`, { queue: true });
    }
    setPlayedAll(true);
  };

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Ouça o diálogo entre a professora e a Lily.
      </div>
      <button
        onClick={playAll}
        className="w-full py-3 rounded-xl bg-sky-500 text-white font-black flex items-center justify-center gap-2"
      >
        <Volume2 size={18} /> Play dialogue
      </button>
      <div className="mt-4 space-y-2">
        {DIALOG.map((t, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 rounded-lg p-2 ${
              t.who === "Lily" ? "bg-pink-50" : "bg-sky-50"
            }`}
          >
            <img src={t.img} alt="" className="w-12 h-12 rounded-full object-contain bg-white" />
            <div className="flex-1">
              <div className="text-[11px] font-bold text-slate-500">{t.who}</div>
              <div className="flex items-center gap-2">
                <PlayEn text={t.en} size="sm" />
                <div>
                  <div className="font-bold text-slate-800">{t.en}</div>
                  <div className="text-xs text-slate-500 italic">{t.pt}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {playedAll && (
        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="text-sm font-bold text-slate-700 mb-2">
            Pergunta de compreensão: qual é o nome da menina?
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Ana", "Lily", "Mia"].map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswer(opt)}
                className={`py-2 rounded-lg font-bold border-2 transition ${
                  answer === opt
                    ? opt === "Lily"
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-white border-slate-200 text-slate-700 hover:border-sky-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {answer === "Lily" && (
            <div className="mt-2 text-emerald-600 font-bold text-sm">✔ Correct!</div>
          )}
          {answer && answer !== "Lily" && (
            <div className="mt-2 text-rose-600 font-bold text-sm">
              ✘ Ouve outra vez: ela diz "My name is Lily".
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ============================ 5. Reading ============================ */

function Reading() {
  return (
    <div>
      <img
        src={READING.img}
        alt=""
        loading="lazy"
        width={800}
        height={450}
        className="w-full max-h-56 object-contain rounded-xl bg-slate-50"
      />
      <div className="mt-4 space-y-3">
        {READING.parts.map((p, i) => (
          <div key={i} className="flex items-start gap-2">
            <PlayEn text={p.en} size="sm" />
            <div>
              <div className="text-lg font-bold text-slate-800">
                {highlightWords(p.en, p.highlight)}
              </div>
              <div className="text-xs text-slate-500 italic">{p.pt}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <PlayPt text={`Vamos ler juntos. A Lily é uma menina. Ela vai para a escola. Ela diz "Hello". A professora responde "Good morning".`} />
      </div>
    </div>
  );
}

function highlightWords(text: string, words: string[]) {
  if (!words || words.length === 0) return text;
  const parts: React.ReactNode[] = [];
  let rest = text;
  let key = 0;
  while (rest.length) {
    const idxs = words
      .map((w) => ({ w, i: rest.toLowerCase().indexOf(w.toLowerCase()) }))
      .filter((x) => x.i >= 0)
      .sort((a, b) => a.i - b.i);
    if (idxs.length === 0) {
      parts.push(rest);
      break;
    }
    const first = idxs[0];
    parts.push(rest.slice(0, first.i));
    parts.push(
      <mark
        key={key++}
        className="bg-amber-200 text-slate-900 px-1 rounded"
      >
        {rest.slice(first.i, first.i + first.w.length)}
      </mark>,
    );
    rest = rest.slice(first.i + first.w.length);
  }
  return <>{parts}</>;
}

/* ============================ 6. Writing ============================ */

function Writing() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const q = WRITING[i];
  const correct = pick === q.answer;
  return (
    <div>
      <div className="rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xl font-black text-slate-800">
          {q.prompt.split("___").map((seg, idx, arr) => (
            <span key={idx}>
              {seg}
              {idx < arr.length - 1 && (
                <span
                  className={`inline-block min-w-[80px] mx-1 px-3 py-1 rounded-lg border-2 border-dashed align-middle ${
                    pick ? (correct ? "border-emerald-500 bg-emerald-50" : "border-rose-500 bg-rose-50") : "border-slate-300 bg-white"
                  }`}
                >
                  {pick ?? "___"}
                </span>
              )}
            </span>
          ))}
        </div>
        <div className="text-xs text-slate-500 mt-2 italic">Dica: {q.hint}</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              setPick(opt);
              if (opt === q.answer) speakEnglish(q.prompt.replace("___", opt));
            }}
            className={`py-2 rounded-lg font-bold border-2 transition ${
              pick === opt
                ? opt === q.answer
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-rose-500 text-white border-rose-500"
                : "bg-white text-slate-700 border-slate-200 hover:border-sky-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {pick && (
        <div className={`mt-3 text-sm font-bold ${correct ? "text-emerald-600" : "text-rose-600"}`}>
          {correct ? "✔ Great job!" : `✘ Não é essa. A resposta é "${q.answer}".`}
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => {
            setI((v) => Math.max(0, v - 1));
            setPick(null);
          }}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Voltar
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {WRITING.length}
        </div>
        <button
          onClick={() => {
            setI((v) => Math.min(WRITING.length - 1, v + 1));
            setPick(null);
          }}
          disabled={i === WRITING.length - 1}
          className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 7. Grammar (Why?) ============================ */

function GrammarWhy() {
  return (
    <div>
      <PlayPt
        text={`Por que dizemos "My name is"? Em inglês, MY quer dizer MEU. NAME é NOME. IS é a palavrinha que junta as duas ideias. Sempre juntas: MY NAME IS mais o seu nome.`}
      />
      <div className="mt-3 rounded-xl bg-indigo-50 border border-indigo-200 p-4">
        <div className="text-xs uppercase tracking-wider text-indigo-600 font-black">Por quê?</div>
        <div className="text-sm text-slate-700 mt-1">{GRAMMAR.why}</div>
      </div>
      <div className="mt-4">
        <div className="text-xs uppercase tracking-wider text-slate-500 font-black mb-2">
          Exemplos
        </div>
        <div className="space-y-2">
          {GRAMMAR.examples.map((ex, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-lg p-2">
              <PlayEn text={ex.en} size="sm" />
              <div>
                <div className="font-bold text-slate-800">{ex.en}</div>
                <div className="text-xs text-slate-500 italic">{ex.pt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xs uppercase tracking-wider text-rose-600 font-black mb-2">
          Cuidado! Erros comuns
        </div>
        <div className="space-y-2">
          {GRAMMAR.errors.map((e, i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-3">
              <div className="text-sm text-rose-600 line-through">{e.wrong}</div>
              <div className="text-sm text-emerald-600 font-bold">{e.right}</div>
              <div className="text-xs text-slate-500 mt-1">{e.why}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ 8. Real Life ============================ */

function RealLife() {
  const [reveal, setReveal] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-3">
      <div className="text-sm text-slate-600">
        Situações do dia a dia. O que você diria em inglês?
      </div>
      {REAL_LIFE.map((s, i) => (
        <div key={i} className="rounded-xl border border-slate-200 p-3">
          <div className="text-sm text-slate-700">{s.situation}</div>
          {reveal[i] ? (
            <div className="mt-2 flex items-center gap-2 bg-emerald-50 rounded-lg p-2">
              <PlayEn text={s.answer.replace("___", "Ana")} size="sm" />
              <div className="font-bold text-emerald-700">{s.answer}</div>
            </div>
          ) : (
            <button
              onClick={() => setReveal((r) => ({ ...r, [i]: true }))}
              className="mt-2 text-xs font-bold text-sky-600 hover:underline"
            >
              Ver resposta →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

/* ============================ 9. Mini Game ============================ */

function MiniGameMatch() {
  const pool = VOCAB.slice(0, 4);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [selEn, setSelEn] = useState<string | null>(null);
  const shuffledImages = useMemo(() => shuffle(pool.map((p) => p.id)), []);

  const done = Object.keys(pairs).length === pool.length;

  const onPickImg = (imgId: string) => {
    if (!selEn) return;
    setPairs((p) => ({ ...p, [selEn]: imgId }));
    setSelEn(null);
    if (selEn === imgId) speakEnglish("Perfect!");
  };

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Toque numa <b>palavra</b>, depois na <b>imagem</b> certa.
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {pool.map((w) => {
            const answered = pairs[w.id];
            const correct = answered === w.id;
            return (
              <button
                key={w.id}
                disabled={!!answered}
                onClick={() => setSelEn(w.id)}
                className={`w-full py-2 rounded-lg font-bold border-2 transition ${
                  answered
                    ? correct
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : selEn === w.id
                      ? "bg-sky-500 text-white border-sky-500"
                      : "bg-white border-slate-200 text-slate-700 hover:border-sky-300"
                }`}
              >
                {w.en}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {shuffledImages.map((id) => {
            const v = pool.find((p) => p.id === id)!;
            const usedFor = Object.entries(pairs).find(([, iid]) => iid === id)?.[0];
            return (
              <button
                key={id}
                disabled={!!usedFor}
                onClick={() => onPickImg(id)}
                className={`w-full rounded-lg border-2 transition ${
                  usedFor
                    ? usedFor === id
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-rose-500 bg-rose-50"
                    : "border-slate-200 hover:border-sky-300 bg-white"
                }`}
              >
                <img src={v.img} alt="" className="w-full h-16 object-contain" />
              </button>
            );
          })}
        </div>
      </div>
      {done && (
        <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center text-emerald-700 font-black">
          <Sparkles className="inline mr-1" size={18} /> Você conectou tudo!
        </div>
      )}
    </div>
  );
}

/* ============================ 10. Quiz ============================ */

function Quiz() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(QUIZ.map(() => null));
  const q = QUIZ[i];
  const done = answers.every((a) => a !== null);
  const score = answers.filter((a, idx) => a !== null && QUIZ[idx].options[a].correct).length;

  return (
    <div>
      {!done ? (
        <>
          <div className="text-xs font-bold text-slate-500 mb-2">
            Pergunta {i + 1} / {QUIZ.length}
          </div>
          {q.img && (
            <img src={q.img} alt="" className="w-32 h-32 object-contain mx-auto mb-2" />
          )}
          <div className="text-base font-bold text-slate-800 text-center">
            {q.q}
            {q.qEn && (
              <div className="text-xs text-slate-500 italic mt-1 flex items-center justify-center gap-1">
                <PlayEn text={q.qEn} size="sm" /> {q.qEn}
              </div>
            )}
          </div>
          <div className="mt-4 space-y-2">
            {q.options.map((opt, k) => {
              const chosen = answers[i] === k;
              const showResult = chosen;
              return (
                <button
                  key={k}
                  onClick={() => {
                    if (answers[i] !== null) return;
                    const next = [...answers];
                    next[i] = k;
                    setAnswers(next);
                    if (opt.correct) speakEnglish("Correct!");
                  }}
                  disabled={answers[i] !== null}
                  className={`w-full py-3 rounded-xl font-bold border-2 transition text-left px-4 ${
                    showResult
                      ? opt.correct
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-rose-500 text-white border-rose-500"
                      : "bg-white border-slate-200 text-slate-700 hover:border-sky-300"
                  }`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>
          {answers[i] !== null && (
            <button
              onClick={() => setI((v) => Math.min(QUIZ.length - 1, v + 1))}
              disabled={i === QUIZ.length - 1}
              className="mt-4 w-full py-3 rounded-xl bg-sky-500 text-white font-black disabled:opacity-40"
            >
              {i === QUIZ.length - 1 ? "Ver resultado" : "Próxima →"}
            </button>
          )}
        </>
      ) : (
        <div className="text-center py-4">
          <PartyPopper className="mx-auto text-amber-500" size={48} />
          <div className="text-2xl font-black text-slate-800 mt-2">
            {score} / {QUIZ.length} acertos!
          </div>
          <div className="text-sm text-slate-500 mt-1">
            {score === QUIZ.length ? "Perfeito! ⭐⭐⭐" : "Bom trabalho!"}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================ 11. Projeto Final ============================ */

function FinalProject({ onFinish }: { onFinish: () => void }) {
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const phrase = name.trim() ? `Hello! My name is ${name.trim()}. Nice to meet you!` : "";

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Se apresenta em inglês! Escreve seu nome e depois <b>diz alto</b>:
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 outline-none text-lg font-bold"
      />
      {phrase && (
        <div className="mt-4 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white p-5 text-center">
          <div className="text-2xl font-black">{phrase}</div>
          <div className="mt-3 flex justify-center gap-2">
            <PlayEn text={phrase} />
          </div>
          <div className="text-xs mt-2 opacity-80">Ouça o modelo e repita alto!</div>
        </div>
      )}
      {!done ? (
        <button
          onClick={() => {
            setDone(true);
          }}
          disabled={!name.trim()}
          className="mt-5 w-full py-3 rounded-xl bg-amber-400 text-slate-900 font-black disabled:opacity-40"
        >
          Marcar como feito
        </button>
      ) : (
        <div className="mt-5 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center">
          <div className="text-2xl">⭐</div>
          <div className="font-black text-emerald-700 mt-1">Lesson complete!</div>
          <button
            onClick={onFinish}
            className="mt-3 w-full py-3 rounded-xl bg-emerald-500 text-white font-black"
          >
            Concluir aula →
          </button>
        </div>
      )}
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Ensure React import for useMemo below
import { useMemo } from "react";
