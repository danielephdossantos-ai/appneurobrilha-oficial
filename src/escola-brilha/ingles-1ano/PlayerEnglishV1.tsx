import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Mic, MicOff, Check, X, Sparkles, PartyPopper } from "lucide-react";
import { speakEnglish, stopSpeakingEn, warmupEnVoices } from "@/lib/native-tts-en";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { LessonData, Vocab } from "./types";
import defaultLesson from "./u1-a01-hello/data";

type Props = { onSair: () => void; onConcluir: () => void; lesson?: LessonData };

const LessonCtx = createContext<LessonData>(defaultLesson);
const useLesson = () => useContext(LessonCtx);

// Dicionário mínimo pra palavras comuns que aparecem em opções curtas
// (Writing, Grammar) e não estão isoladas no VOCAB.
const MINI_DICT: Record<string, string> = {
  i: "eu", you: "você", he: "ele", she: "ela", we: "nós", they: "eles",
  my: "meu/minha", your: "seu/sua", the: "o/a", a: "um/uma", an: "um/uma",
  am: "sou/estou", is: "é/está", are: "são/estão", be: "ser/estar",
  and: "e", or: "ou", but: "mas", not: "não", yes: "sim", no: "não",
  wake: "acordar", "wake up": "acordar", brush: "escovar", eat: "comer",
  drink: "beber", go: "ir", come: "vir", play: "brincar", read: "ler",
  write: "escrever", sleep: "dormir", run: "correr", walk: "andar",
  see: "ver", look: "olhar", hear: "ouvir", listen: "escutar",
  like: "gostar", love: "amar", want: "querer", need: "precisar",
  have: "ter", has: "tem", make: "fazer", do: "fazer", does: "faz",
  can: "poder", cannot: "não pode", let: "deixar", say: "dizer",
  early: "cedo", late: "tarde", now: "agora", today: "hoje",
  breakfast: "café da manhã", lunch: "almoço", dinner: "jantar",
  school: "escola", home: "casa", bed: "cama", teeth: "dentes",
  hello: "olá", hi: "oi", bye: "tchau", "good morning": "bom dia",
  "good night": "boa noite", please: "por favor", thanks: "obrigado",
  friend: "amigo", family: "família", mom: "mamãe", dad: "papai",
  red: "vermelho", blue: "azul", yellow: "amarelo", green: "verde",
  orange: "laranja", purple: "roxo", black: "preto", white: "branco",
  pink: "rosa", brown: "marrom",
};

function useTranslator() {
  const { VOCAB, DIALOG, STORY, READING } = useLesson();
  return useMemo(() => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9' ]/g, "").replace(/\s+/g, " ").trim();
    return (en: string): string => {
      if (!en) return "";
      const t = norm(en);
      if (!t) return "";
      if (MINI_DICT[t]) return MINI_DICT[t];
      const inVocab = VOCAB.find((v) => norm(v.en) === t);
      if (inVocab) return inVocab.pt;
      const partialVocab = VOCAB.find((v) => {
        const ne = norm(v.en);
        return ne.includes(t) || t.includes(ne);
      });
      if (partialVocab) return partialVocab.pt;
      const inDialog = DIALOG.find((d) => norm(d.en) === t);
      if (inDialog) return inDialog.pt;
      const inStory = STORY.find((s) => norm(s.en) === t);
      if (inStory) return inStory.pt;
      for (const part of READING.parts) {
        if (norm(part.en) === t) return part.pt;
      }
      return "";
    };
  }, [VOCAB, DIALOG, STORY, READING]);
}

/**
 * PlayerEnglishV1 — engine dedicada de Inglês.
 * Renderiza os 11 momentos obrigatórios em scroll contínuo, consumindo
 * `LessonData` via contexto (permite múltiplas aulas usando o mesmo player).
 */
export function PlayerEnglishV1({ onSair, onConcluir, lesson = defaultLesson }: Props) {
  useEffect(() => {
    warmupEnVoices();
    return () => {
      stopSpeakingEn();
      stopSpeaking();
    };
  }, []);

  return (
    <LessonCtx.Provider value={lesson}>
      <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] via-[#1a0d3d] to-[#0d1f55] text-white">
        <header className="sticky top-0 z-40 backdrop-blur bg-[#0d1f55]/80 border-b border-white/10">
          <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            <button
              onClick={onSair}
              className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} /> Sair
            </button>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-amber-300 font-black">
                {lesson.meta.headerKicker}
              </div>
              <div className="text-sm font-black text-white">{lesson.meta.unitLabel}</div>
            </div>
            <div className="w-14" />
          </div>
        </header>

        <MainSections onConcluir={onConcluir} />
      </div>
    </LessonCtx.Provider>
  );
}

function MainSections({ onConcluir }: { onConcluir: () => void }) {
  const lesson = useLesson();
  const { meta, READING, GRAMMAR, SONG, HUNTER, PAINT, MEMORY, VIRTUAL_ROOM, BOOK, PACK, COMMANDS, CULTURE } = lesson;

  // Monta lista de seções na ordem certa, pulando as opcionais ausentes.
  const sections: { label: string; title: string; node: React.ReactNode }[] = [
    { label: "História inicial", title: meta.storyTitle, node: <Story /> },
    { label: "Vocabulário novo", title: meta.vocabularyTitle, node: <Vocabulary /> },
    { label: "Speaking", title: "Now you speak!", node: <SpeakingMic /> },
    { label: "Listening", title: "Listen carefully", node: <ListeningDialog /> },
    { label: "Reading", title: READING.title, node: <Reading /> },
    { label: "Writing", title: "Complete the sentence", node: <Writing /> },
    { label: "Grammar", title: GRAMMAR.focus, node: <GrammarWhy /> },
    { label: "Real Life", title: "In real life", node: <RealLife /> },
  ];
  if (SONG) sections.push({ label: "Song", title: SONG.title, node: <Song /> });
  if (HUNTER) sections.push({ label: "Mini Game", title: "Classroom Explorer", node: <Hunter /> });
  if (COMMANDS) sections.push({ label: "Mini Game", title: "Follow the Teacher", node: <Commands /> });
  if (PACK) sections.push({ label: "Mini Game", title: "Pack My Backpack", node: <Pack /> });
  if (PAINT) sections.push({ label: "Mini Game", title: "Paint the Picture", node: <Paint /> });
  if (MEMORY) sections.push({ label: "Mini Game", title: "Memory Game", node: <Memory /> });
  sections.push({ label: "Mini Game", title: "Match the word!", node: <MiniGameMatch /> });
  sections.push({ label: "Quiz", title: "Quick check", node: <Quiz /> });
  if (CULTURE) sections.push({ label: "Cultura", title: CULTURE.title, node: <Culture /> });
  if (BOOK) sections.push({ label: "Livrinho", title: BOOK.title, node: <Book /> });
  if (VIRTUAL_ROOM) sections.push({ label: "Missão", title: "Explore the room!", node: <VirtualRoom /> });
  sections.push({
    label: "Projeto",
    title: meta.finalProjectSectionTitle,
    node: <FinalProject onFinish={onConcluir} />,
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 space-y-8 pb-32 text-slate-900">
      <SectionCover onStart={() => scrollToId("s1")} />
      {sections.map((s, i) => (
        <Section key={i} id={`s${i + 1}`} step={i + 1} label={s.label} title={s.title}>
          {s.node}
        </Section>
      ))}
    </main>
  );
}

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================= UI base ============================= */

function SectionCover({ onStart }: { onStart: () => void }) {
  const { meta } = useLesson();
  return (
    <div className="text-center py-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-block bg-gradient-to-br from-sky-400 to-indigo-500 text-white rounded-3xl px-8 py-6 shadow-xl"
      >
        <div className="text-xs uppercase tracking-widest opacity-80">{meta.coverKicker}</div>
        <div className="text-3xl font-black mt-1">{meta.coverTitle}</div>
        <div className="text-sm opacity-90 mt-2 max-w-xs mx-auto">
          {meta.coverSubtitle}
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
        <div className="w-9 h-9 rounded-full bg-amber-400 text-[#1a0d3d] grid place-items-center font-black text-sm shadow-lg">
          {step}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
            {label}
          </div>
          <div className="text-xl font-black text-white">{title}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">{children}</div>
    </section>
  );
}

/** Botão de áudio em inglês (falante nativo) + botão "devagar". */
function PlayEn({ text, size = "md" }: { text: string; size?: "sm" | "md" }) {
  const [playing, setPlaying] = useState<"normal" | "slow" | null>(null);
  const cls =
    size === "sm" ? "w-9 h-9 text-sm" : "w-11 h-11 text-base";
  const play = async (mode: "normal" | "slow") => {
    if (playing) {
      stopSpeakingEn();
      setPlaying(null);
      return;
    }
    setPlaying(mode);
    await speakEnglish(text, {
      rate: mode === "slow" ? 0.55 : 0.9,
      onEnd: () => setPlaying(null),
    });
  };
  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        onClick={() => play("normal")}
        className={`${cls} rounded-full grid place-items-center transition ${
          playing === "normal" ? "bg-rose-500 text-white" : "bg-sky-500 text-white hover:bg-sky-600"
        }`}
        aria-label={playing === "normal" ? "Parar" : "Ouvir em inglês"}
        title="Ouvir em inglês (normal)"
      >
        <Volume2 size={size === "sm" ? 16 : 20} />
      </button>
      <button
        onClick={() => play("slow")}
        className={`${cls} rounded-full grid place-items-center transition text-lg ${
          playing === "slow" ? "bg-rose-500 text-white" : "bg-amber-400 text-white hover:bg-amber-500"
        }`}
        aria-label={playing === "slow" ? "Parar" : "Ouvir devagar"}
        title="Ouvir devagar 🐢"
      >
        🐢
      </button>
    </div>
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
  const { STORY } = useLesson();
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
  const { VOCAB } = useLesson();
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

function WordSPEB({ word, onClose }: { word: Vocab; onClose: () => void }) {
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
  const { meta, VOCAB, DIALOG, STORY } = useLesson();
  const targets = meta.speakingTargets;
  const [i, setI] = useState(0);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string>("");
  const [result, setResult] = useState<"idle" | "ok" | "again">("idle");
  const recRef = useRef<SR>(null);
  const target = targets[i];
  const translateTarget = (en: string): string => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
    const t = norm(en);
    const fromVocab = VOCAB.find((v) => norm(v.en) === t || norm(v.en).includes(t) || t.includes(norm(v.en)));
    if (fromVocab) return fromVocab.pt;
    const fromDialog = DIALOG.find((d) => norm(d.en) === t);
    if (fromDialog) return fromDialog.pt;
    const fromStory = STORY.find((s) => norm(s.en) === t);
    if (fromStory) return fromStory.pt;
    return "";
  };
  const targetPt = translateTarget(target);

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
        {targetPt && (
          <div className="mt-1 text-sm text-slate-600 italic">🇧🇷 {targetPt}</div>
        )}
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
  const { DIALOG, meta } = useLesson();
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
            {meta.listeningQuestion}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {meta.listeningOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswer(opt)}
                className={`py-2 rounded-lg font-bold border-2 transition ${
                  answer === opt
                    ? opt === meta.listeningCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-white border-slate-200 text-slate-700 hover:border-sky-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {answer === meta.listeningCorrect && (
            <div className="mt-2 text-emerald-600 font-bold text-sm">✔ Correct!</div>
          )}
          {answer && answer !== meta.listeningCorrect && (
            <div className="mt-2 text-rose-600 font-bold text-sm">
              ✘ {meta.listeningWrongHint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ============================ 5. Reading ============================ */

function Reading() {
  const { READING, meta } = useLesson();
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
        <PlayPt text={meta.readingNarration} />
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
  const { WRITING } = useLesson();
  const translate = useTranslator();
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [tapped, setTapped] = useState<string | null>(null);
  const q = WRITING[i];
  const correct = pick === q.answer;
  const fullSentence = q.prompt.replace("___", pick ?? q.answer);
  const promptPt = translate(fullSentence);
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
        {promptPt && pick && (
          <div className="text-sm text-slate-600 italic mt-2">🇧🇷 {promptPt}</div>
        )}
        <div className="text-xs text-slate-500 mt-2 italic">Dica: {q.hint}</div>
      </div>
      <div className="text-[11px] text-slate-500 text-center mt-3 mb-1">
        👆 Toque em uma palavra pra ver o significado
      </div>
      <div className="grid grid-cols-3 gap-2">
        {q.options.map((opt) => {
          const optPt = translate(opt);
          const isTapped = tapped === opt;
          return (
            <button
              key={opt}
              onClick={() => {
                if (pick === null && !isTapped && optPt) {
                  // primeiro toque: mostra tradução + fala
                  setTapped(opt);
                  speakEnglish(opt);
                  return;
                }
                setTapped(null);
                setPick(opt);
                if (opt === q.answer) speakEnglish(q.prompt.replace("___", opt));
              }}
              className={`py-2 px-1 rounded-lg font-bold border-2 transition flex flex-col items-center ${
                pick === opt
                  ? opt === q.answer
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-rose-500 text-white border-rose-500"
                  : isTapped
                    ? "bg-amber-50 text-slate-800 border-amber-400"
                    : "bg-white text-slate-700 border-slate-200 hover:border-sky-300"
              }`}
            >
              <span>{opt}</span>
              {(isTapped || pick) && optPt && (
                <span className={`text-[10px] italic mt-0.5 ${pick === opt ? "text-white/90" : "text-slate-500"}`}>
                  = {optPt}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {tapped && !pick && (
        <div className="mt-2 text-[11px] text-center text-amber-700">
          Toque de novo pra escolher <b>{tapped}</b> como resposta.
        </div>
      )}
      {pick && (
        <div
          className={`mt-3 rounded-xl border-2 p-3 text-sm font-semibold ${
            correct
              ? "border-emerald-300 bg-emerald-50 text-emerald-800"
              : "border-rose-300 bg-rose-50 text-rose-800"
          }`}
        >
          <div className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">
            {correct ? "✔ Explicação" : "✘ Vamos entender"}
          </div>
          {correct
            ? `"${q.answer}" completa a frase: ${fullSentence}. ${q.hint ? `Dica: ${q.hint}` : ""}`
            : `A resposta certa é "${q.answer}". Frase completa: ${q.prompt.replace("___", q.answer)}. ${q.hint ? `Dica: ${q.hint}` : ""}`}
          {q.explain && <div className="mt-1 opacity-90">{q.explain}</div>}
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
  const { GRAMMAR, meta } = useLesson();
  return (
    <div>
      <PlayPt
        text={meta.grammarNarration}
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
  const { REAL_LIFE } = useLesson();
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
  const { VOCAB } = useLesson();
  const pool = VOCAB.slice(0, 4);
  // pairs[enId] = { pt, correct } — só ficam travadas as corretas
  const [pairs, setPairs] = useState<Record<string, { pt: string; correct: boolean }>>({});
  const [selEn, setSelEn] = useState<string | null>(null);
  const [wrong, setWrong] = useState<{ en: string; pt: string } | null>(null);
  const shuffledPt = useMemo(() => shuffle(pool.map((p) => p.id)), []);

  const done = Object.values(pairs).filter((p) => p.correct).length === pool.length;

  const onPickEn = (enId: string) => {
    if (pairs[enId]?.correct) return;
    setSelEn(enId);
    const w = pool.find((p) => p.id === enId);
    if (w) speakEnglish(w.en);
  };

  const onPickPt = (ptId: string) => {
    if (!selEn) return;
    const isCorrect = selEn === ptId;
    if (isCorrect) {
      setPairs((p) => ({ ...p, [selEn]: { pt: ptId, correct: true } }));
      setSelEn(null);
      setWrong(null);
      speakEnglish("Perfect!");
    } else {
      setWrong({ en: selEn, pt: ptId });
      setSelEn(null);
      setTimeout(() => setWrong(null), 3500);
    }

  };

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        Toque numa palavra em <b>inglês</b> (ouça o som), depois na tradução em <b>português</b>. Errou? Tente de novo!
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {pool.map((w) => {
            const solved = pairs[w.id]?.correct;
            const isWrong = wrong?.en === w.id;
            return (
              <button
                key={w.id}
                disabled={solved}
                onClick={() => onPickEn(w.id)}
                className={`w-full py-3 rounded-lg font-bold border-2 transition ${
                  solved
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : isWrong
                      ? "bg-rose-500 text-white border-rose-500 animate-pulse"
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
          {shuffledPt.map((id) => {
            const v = pool.find((p) => p.id === id)!;
            const solved = pairs[id]?.correct; // resolvido quando o par en=pt certo foi feito
            const isWrong = wrong?.pt === id;
            return (
              <button
                key={id}
                disabled={solved}
                onClick={() => onPickPt(id)}
                className={`w-full py-3 rounded-lg font-bold border-2 transition ${
                  solved
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : isWrong
                      ? "bg-rose-500 text-white border-rose-500 animate-pulse"
                      : "bg-white border-slate-200 text-slate-700 hover:border-sky-300"
                }`}
              >
                {v.pt}
              </button>
            );
          })}
        </div>
      </div>
      {wrong && (() => {
        const wEn = pool.find((p) => p.id === wrong.en)!;
        const wPt = pool.find((p) => p.id === wrong.pt)!;
        return (
          <div className="mt-3 rounded-xl bg-rose-50 border-2 border-rose-200 p-3 text-sm text-rose-800">
            <div className="font-black mb-1">Ops! Ainda não é essa 💪</div>
            <div>
              <b>{wEn.en}</b> em português é <b>“{wEn.pt}”</b>.
            </div>
            <div className="text-rose-700/80 mt-0.5">
              <b>“{wPt.pt}”</b> é a tradução de <b>{wPt.en}</b>.
            </div>
            <div className="mt-1 text-xs text-rose-600">Toque de novo em <b>{wEn.en}</b> e escolha a resposta certa.</div>
          </div>
        );
      })()}

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
  const { QUIZ } = useLesson();
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
          {answers[i] !== null && (() => {
            const chosen = q.options[answers[i]!];
            const correctOpt = q.options.find((o) => o.correct);
            const acertou = !!chosen?.correct;
            const explicacao =
              chosen?.explain ||
              q.explain ||
              (acertou
                ? `Isso mesmo! "${correctOpt?.text}" é a resposta certa.`
                : `A resposta certa é "${correctOpt?.text}". Você escolheu "${chosen?.text}".`);
            return (
              <div
                className={`mt-3 rounded-xl border-2 p-3 text-sm font-semibold ${
                  acertou
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-rose-300 bg-rose-50 text-rose-800"
                }`}
              >
                <div className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">
                  {acertou ? "✔ Explicação" : "✘ Vamos entender"}
                </div>
                {explicacao}
              </div>
            );
          })()}
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
  const { meta } = useLesson();
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const phrase = name.trim() ? meta.finalProjectPhrase(name.trim()) : "";

  return (
    <div>
      <div className="text-sm text-slate-600 mb-3">
        {meta.finalProjectIntro}
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

/* ============================ 🎵 Song ============================ */

function Song() {
  const { SONG } = useLesson();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  if (!SONG) return null;

  const playAll = async () => {
    setPlaying(true);
    for (let i = 0; i < SONG.verses.length; i++) {
      setCurrent(i);
      // eslint-disable-next-line no-await-in-loop
      await speakEnglish(SONG.verses[i].en, { queue: false });
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 200));
    }
    setCurrent(null);
    setPlaying(false);
  };

  return (
    <div>
      {SONG.hookPt && <div className="text-sm text-slate-600 mb-3">{SONG.hookPt}</div>}
      <button
        onClick={playing ? () => { stopSpeakingEn(); setPlaying(false); setCurrent(null); } : playAll}
        className={`w-full py-3 rounded-xl font-black text-white flex items-center justify-center gap-2 transition ${
          playing ? "bg-rose-500" : "bg-gradient-to-r from-pink-500 to-purple-500"
        }`}
      >
        <Volume2 size={18} /> {playing ? "Pausar música" : "▶ Play song"}
      </button>
      <div className="mt-4 space-y-2">
        {SONG.verses.map((v, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-xl p-3 transition ${
              current === i ? "bg-amber-100 border-2 border-amber-400 scale-[1.02]" : "bg-slate-50"
            }`}
          >
            <div className="text-3xl">{v.emoji ?? "🎵"}</div>
            <div className="flex-1">
              <div className="font-black text-slate-800">{v.en}</div>
              <div className="text-xs italic text-slate-500">{v.pt}</div>
            </div>
            <PlayEn text={v.en} size="sm" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================ 🎮 Hunter (Color/Object) ============================ */

function Hunter() {
  const { HUNTER } = useLesson();
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<Record<number, string | null>>({});
  if (!HUNTER) return null;
  const round = HUNTER.rounds[i];
  const pick = picks[i] ?? null;
  const chosen = round.objects.find((o) => o.id === pick);
  const correct = chosen?.isTarget === true;

  useEffect(() => {
    const t = setTimeout(() => speakEnglish(round.promptEn), 250);
    return () => clearTimeout(t);
  }, [i, round.promptEn]);

  return (
    <div>
      {HUNTER.intro && <div className="text-sm text-slate-600 mb-3">{HUNTER.intro}</div>}
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 p-4">
        <div className="flex items-center gap-2">
          <PlayEn text={round.promptEn} size="sm" />
          <div>
            <div className="text-lg font-black text-slate-800">{round.promptEn}</div>
            <div className="text-xs italic text-slate-500">{round.promptPt}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {round.objects.map((o) => {
          const isPicked = pick === o.id;
          const showResult = isPicked;
          return (
            <button
              key={o.id}
              disabled={pick !== null && correct}
              onClick={() => {
                setPicks((p) => ({ ...p, [i]: o.id }));
                if (o.isTarget) speakEnglish("Great job!");
              }}
              className={`aspect-square rounded-xl border-2 p-2 grid place-items-center transition ${
                showResult
                  ? o.isTarget
                    ? "bg-emerald-500 border-emerald-500"
                    : "bg-rose-500 border-rose-500 animate-pulse"
                  : "bg-white border-slate-200 hover:border-sky-300"
              }`}
            >
              {o.img ? (
                <img src={o.img} alt={o.label} className="w-full h-full object-contain" />
              ) : (
                <div className="text-sm font-bold text-slate-700 text-center px-1">{o.label}</div>
              )}
            </button>
          );
        })}
      </div>
      {pick && !correct && (
        <div className="mt-3 rounded-lg bg-rose-50 border border-rose-200 p-3 text-sm text-rose-700">
          Ops! Escute de novo: <b>{round.promptEn}</b>. Tenta outro.
        </div>
      )}
      {pick && correct && (
        <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-700 font-black">
          ⭐ Perfect! You found it!
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Voltar
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {HUNTER.rounds.length}
        </div>
        <button
          onClick={() => setI((v) => Math.min(HUNTER.rounds.length - 1, v + 1))}
          disabled={i === HUNTER.rounds.length - 1 || !correct}
          className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 🎨 Paint the Picture ============================ */

function Paint() {
  const { PAINT } = useLesson();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Record<number, string | null>>({});
  if (!PAINT) return null;
  const round = PAINT.rounds[i];
  const pick = picked[i] ?? null;
  const filled = pick === round.correctHex;

  useEffect(() => {
    const t = setTimeout(() => speakEnglish(round.promptEn), 250);
    return () => clearTimeout(t);
  }, [i, round.promptEn]);

  return (
    <div>
      {PAINT.intro && <div className="text-sm text-slate-600 mb-3">{PAINT.intro}</div>}
      <div className="rounded-xl bg-slate-50 p-4 flex items-center gap-3">
        <PlayEn text={round.promptEn} size="sm" />
        <div>
          <div className="text-lg font-black text-slate-800">{round.promptEn}</div>
          <div className="text-xs italic text-slate-500">{round.promptPt}</div>
        </div>
      </div>
      <div className="mt-4 aspect-video rounded-2xl grid place-items-center overflow-hidden transition-colors"
        style={{ background: pick ?? "#f1f5f9" }}
      >
        <div className="text-9xl drop-shadow-lg" style={{ filter: filled ? "none" : "grayscale(1) opacity(0.5)" }}>
          {round.outlineEmoji}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {round.options.map((c) => (
          <button
            key={c.hex}
            onClick={() => {
              setPicked((p) => ({ ...p, [i]: c.hex }));
              speakEnglish(c.en);
            }}
            className={`aspect-square rounded-xl border-4 transition ${
              pick === c.hex ? (filled ? "border-emerald-500 scale-110" : "border-rose-500") : "border-white shadow"
            }`}
            style={{ background: c.hex }}
            aria-label={c.name}
          />
        ))}
      </div>
      {pick && !filled && (
        <div className="mt-3 text-sm text-rose-700 font-bold">
          ✘ Essa não é. Escute: {round.promptEn}
        </div>
      )}
      {filled && (
        <div className="mt-3 text-emerald-700 font-black">⭐ Perfect painting!</div>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Voltar
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {PAINT.rounds.length}
        </div>
        <button
          onClick={() => setI((v) => Math.min(PAINT.rounds.length - 1, v + 1))}
          disabled={i === PAINT.rounds.length - 1 || !filled}
          className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 🧠 Memory ============================ */

function Memory() {
  const { MEMORY } = useLesson();
  // 2 cartas por par: uma "en" e uma "img"
  type Card = { key: string; pairId: string; kind: "en" | "img"; en: string; pt: string; img: string };
  const initialCards: Card[] = useMemo(() => {
    if (!MEMORY) return [];
    const cards: Card[] = [];
    for (const p of MEMORY.pairs) {
      cards.push({ key: `${p.id}-en`, pairId: p.id, kind: "en", en: p.en, pt: p.pt, img: p.img });
      cards.push({ key: `${p.id}-img`, pairId: p.id, kind: "img", en: p.en, pt: p.pt, img: p.img });
    }
    return shuffle(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MEMORY?.pairs.length]);

  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [locked, setLocked] = useState(false);

  if (!MEMORY) return null;

  const flip = (key: string) => {
    if (locked) return;
    if (flipped.includes(key)) return;
    if (matched.has(key)) return;
    const nextFlipped = [...flipped, key];
    setFlipped(nextFlipped);
    if (nextFlipped.length === 2) {
      const [a, b] = nextFlipped.map((k) => initialCards.find((c) => c.key === k)!);
      if (a.pairId === b.pairId && a.kind !== b.kind) {
        setMatched((m) => new Set([...m, a.key, b.key]));
        setFlipped([]);
        speakEnglish(a.en);
      } else {
        setLocked(true);
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 900);
      }
    } else if (nextFlipped.length === 1) {
      const c = initialCards.find((x) => x.key === key)!;
      if (c.kind === "en") speakEnglish(c.en);
    }
  };

  const done = matched.size === initialCards.length && initialCards.length > 0;

  return (
    <div>
      {MEMORY.intro && <div className="text-sm text-slate-600 mb-3">{MEMORY.intro}</div>}
      <div className="grid grid-cols-4 gap-2">
        {initialCards.map((c) => {
          const isShown = flipped.includes(c.key) || matched.has(c.key);
          const isMatched = matched.has(c.key);
          return (
            <button
              key={c.key}
              onClick={() => flip(c.key)}
              className={`aspect-square rounded-xl border-2 grid place-items-center text-center transition ${
                isMatched
                  ? "bg-emerald-100 border-emerald-400"
                  : isShown
                    ? "bg-white border-sky-400"
                    : "bg-gradient-to-br from-sky-500 to-indigo-500 border-transparent text-white"
              }`}
            >
              {isShown ? (
                c.kind === "en" ? (
                  <div className="font-black text-slate-800 text-sm px-1">{c.en}</div>
                ) : (
                  <img src={c.img} alt="" className="w-full h-full object-contain p-1" />
                )
              ) : (
                <div className="text-2xl">?</div>
              )}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center text-emerald-700 font-black">
          🧠 All pairs matched!
        </div>
      )}
    </div>
  );
}

/* ============================ 🏠 Virtual Room ============================ */

function VirtualRoom() {
  const { VIRTUAL_ROOM } = useLesson();
  const [found, setFound] = useState<Set<number>>(new Set());
  if (!VIRTUAL_ROOM) return null;
  const total = VIRTUAL_ROOM.items.length;

  return (
    <div>
      {VIRTUAL_ROOM.intro && <div className="text-sm text-slate-600 mb-3">{VIRTUAL_ROOM.intro}</div>}
      <img
        src={VIRTUAL_ROOM.img}
        alt=""
        className="w-full max-h-64 object-contain rounded-xl bg-slate-50"
      />
      <div className="mt-4 text-xs font-bold text-slate-500">
        Missão: encontre {total} coisas no quarto. Toque em cada uma quando descobrir!
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {VIRTUAL_ROOM.items.map((it, i) => {
          const isFound = found.has(i);
          return (
            <button
              key={i}
              onClick={() => {
                setFound((s) => new Set([...s, i]));
                speakEnglish(it.en);
              }}
              className={`flex items-center gap-2 rounded-xl border-2 p-3 text-left transition ${
                isFound
                  ? "bg-emerald-50 border-emerald-400"
                  : "bg-white border-slate-200 hover:border-sky-300"
              }`}
            >
              <div className="text-2xl">{it.emoji}</div>
              <div className="flex-1">
                <div className={`font-black text-sm ${isFound ? "text-emerald-700" : "text-slate-800"}`}>
                  {it.en}
                </div>
                <div className="text-[11px] italic text-slate-500">{it.pt}</div>
              </div>
              {isFound && <Check className="text-emerald-600" size={18} />}
            </button>
          );
        })}
      </div>
      <div className="mt-3 text-center text-sm font-black text-slate-700">
        {found.size} / {total} encontrados
      </div>
      {found.size === total && (
        <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center text-emerald-700 font-black">
          🏆 Missão cumprida!
        </div>
      )}
    </div>
  );
}

/* ============================ 📖 My Book (páginas) ============================ */

function Book() {
  const { BOOK } = useLesson();
  const [i, setI] = useState(0);
  if (!BOOK) return null;
  const page = BOOK.pages[i];

  useEffect(() => {
    const t = setTimeout(() => speakEnglish(page.en), 250);
    return () => clearTimeout(t);
  }, [i, page.en]);

  return (
    <div>
      {BOOK.intro && <div className="text-sm text-slate-600 mb-3">{BOOK.intro}</div>}
      <div className="rounded-2xl border-4 border-amber-300 bg-gradient-to-b from-amber-50 to-white overflow-hidden shadow-lg">
        <div className="aspect-video grid place-items-center bg-white">
          <motion.img
            key={i}
            src={page.img}
            alt=""
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-h-52 object-contain"
          />
        </div>
        <div className="p-4 text-center">
          {page.badge && (
            <div className="inline-block text-[10px] font-black uppercase tracking-widest bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full mb-1">
              {page.badge}
            </div>
          )}
          <div className="flex items-center justify-center gap-2">
            <PlayEn text={page.en} size="sm" />
            <div className="text-2xl font-black text-slate-800">{page.en}</div>
          </div>
          <div className="text-xs italic text-slate-500 mt-1">{page.pt}</div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Página anterior
        </button>
        <div className="text-xs text-slate-500 font-bold">
          Página {i + 1} / {BOOK.pages.length}
        </div>
        <button
          onClick={() => setI((v) => Math.min(BOOK.pages.length - 1, v + 1))}
          disabled={i === BOOK.pages.length - 1}
          className="px-3 py-2 rounded-lg bg-amber-400 text-slate-900 text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 🎒 Pack My Backpack ============================ */

function Pack() {
  const { PACK } = useLesson();
  const [packed, setPacked] = useState<Record<string, boolean>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  if (!PACK) return null;

  const needed = PACK.items.filter((it) => it.belongs);
  const packedCount = needed.filter((it) => packed[it.id]).length;
  const done = packedCount === needed.length;

  const onTap = (id: string, belongs: boolean, en: string) => {
    if (belongs) {
      setPacked((p) => ({ ...p, [id]: true }));
      speakEnglish(en);
    } else {
      speakEnglish("Oops! That doesn't belong in the backpack.");
      setWrongFlash(id);
      setTimeout(() => setWrongFlash(null), 800);
    }
  };

  return (
    <div>
      {PACK.intro && <div className="text-sm text-slate-600 mb-3">{PACK.intro}</div>}
      <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 p-4">
        <div className="relative mx-auto w-56 h-56">
          <img src={PACK.backpackImg} alt="backpack" className="w-full h-full object-contain" />
          <div className="absolute inset-x-6 bottom-4 top-16 grid grid-cols-3 gap-1 place-content-start">
            {needed.filter((it) => packed[it.id]).map((it) => (
              <div key={it.id} className="text-2xl grid place-items-center">
                {it.img ? (
                  <img src={it.img} alt={it.en} className="w-8 h-8 object-contain" />
                ) : (
                  <span>{it.emoji}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-xs font-bold text-slate-500 mt-2">
          {packedCount} / {needed.length} packed
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {PACK.items.map((it) => {
          const isPacked = packed[it.id];
          const flash = wrongFlash === it.id;
          return (
            <button
              key={it.id}
              disabled={isPacked}
              onClick={() => onTap(it.id, it.belongs, it.en)}
              className={`aspect-square rounded-xl border-2 p-2 grid place-items-center transition ${
                isPacked
                  ? "bg-emerald-100 border-emerald-400 opacity-40"
                  : flash
                  ? "bg-rose-500 border-rose-500 animate-pulse"
                  : "bg-white border-slate-200 hover:border-sky-300"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl">
                  {it.img ? (
                    <img src={it.img} alt={it.en} className="w-10 h-10 object-contain mx-auto" />
                  ) : (
                    it.emoji
                  )}
                </div>
                <div className="text-[10px] font-bold mt-1">{it.en}</div>
              </div>
            </button>
          );
        })}
      </div>

      {done && (
        <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-700 font-black text-center">
          ⭐ Great! My backpack is ready for school!
        </div>
      )}
    </div>
  );
}

/* ============================ 🧑‍🏫 Follow the Teacher (Commands / TPR) ============================ */

function Commands() {
  const { COMMANDS } = useLesson();
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<Record<number, string | null>>({});
  if (!COMMANDS) return null;
  const round = COMMANDS.rounds[i];
  const pick = picks[i] ?? null;
  const chosen = round.actions.find((a) => a.id === pick);
  const correct = chosen?.isTarget === true;

  useEffect(() => {
    const t = setTimeout(() => speakEnglish(round.promptEn), 250);
    return () => clearTimeout(t);
  }, [i, round.promptEn]);

  return (
    <div>
      {COMMANDS.intro && <div className="text-sm text-slate-600 mb-3">{COMMANDS.intro}</div>}
      <div className="rounded-xl bg-gradient-to-br from-violet-50 to-sky-50 p-4">
        <div className="flex items-center gap-2">
          <PlayEn text={round.promptEn} size="sm" />
          <div>
            <div className="text-lg font-black text-slate-800">{round.promptEn}</div>
            <div className="text-xs italic text-slate-500">{round.promptPt}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {round.actions.map((a) => {
          const isPicked = pick === a.id;
          return (
            <button
              key={a.id}
              disabled={pick !== null && correct}
              onClick={() => {
                setPicks((p) => ({ ...p, [i]: a.id }));
                speakEnglish(a.isTarget ? "Great!" : a.en);
              }}
              className={`aspect-square rounded-xl border-2 p-2 grid place-items-center transition ${
                isPicked
                  ? a.isTarget
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "bg-rose-500 border-rose-500 animate-pulse text-white"
                  : "bg-white border-slate-200 hover:border-violet-300 text-slate-800"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl">{a.emoji}</div>
                <div className="text-[11px] font-bold mt-1">{a.en}</div>
              </div>
            </button>
          );
        })}
      </div>
      {pick && !correct && (
        <div className="mt-3 rounded-lg bg-rose-50 border border-rose-200 p-3 text-sm text-rose-700">
          Escute de novo: <b>{round.promptEn}</b> — {round.promptPt}
        </div>
      )}
      {pick && correct && (
        <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-700 font-black">
          ⭐ You followed the teacher!
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold disabled:opacity-40"
        >
          ← Voltar
        </button>
        <div className="text-xs text-slate-500 font-bold">
          {i + 1} / {COMMANDS.rounds.length}
        </div>
        <button
          onClick={() => setI((v) => Math.min(COMMANDS.rounds.length - 1, v + 1))}
          disabled={i === COMMANDS.rounds.length - 1 || !correct}
          className="px-3 py-2 rounded-lg bg-violet-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ============================ 🌍 Culture Card ============================ */

function Culture() {
  const { CULTURE } = useLesson();
  if (!CULTURE) return null;
  return (
    <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5">
      <div className="flex items-center gap-3 mb-3">
        {CULTURE.img ? (
          <img src={CULTURE.img} alt="" className="w-16 h-16 object-contain rounded-lg" />
        ) : (
          <div className="text-4xl">{CULTURE.emoji || "🌍"}</div>
        )}
        <div className="text-lg font-black text-amber-900">{CULTURE.title}</div>
      </div>
      <div className="space-y-3">
        {CULTURE.paragraphs.map((p, i) => (
          <div key={i} className="text-sm text-slate-700 leading-relaxed">
            {p.en && (
              <div className="flex items-start gap-2 mb-1">
                <PlayEn text={p.en} size="sm" />
                <div className="font-bold text-slate-800">{p.en}</div>
              </div>
            )}
            <div className={p.en ? "italic text-slate-600" : ""}>{p.pt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

