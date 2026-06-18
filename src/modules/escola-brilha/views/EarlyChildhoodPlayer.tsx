import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ArrowLeft } from "lucide-react";
import { LessonEnvironment } from "../components/LessonEnvironment";
import { MascotTeacher } from "../components/MascotTeacher";
import { AudioSpeechService } from "../services/AudioSpeechService";
import { Illustration } from "@/components/Illustration";
import {
  EarlyLesson,
  EarlyStep,
  IntroStep,
  VowelTeachStep,
  VowelPracticeStep,
  CountTeachStep,
  CountPracticeStep,
  SubtractStep,
} from "../types/early-lesson";
import {
  getRotationHead,
  advanceRotationHead,
  rotateFrom,
} from "../utils/lessonRotation";

interface Props {
  lesson: EarlyLesson;
  onBack?: () => void;
}

const speak = (text: string, slow = false) =>
  AudioSpeechService.speakWithOptions(text, { rate: slow ? 0.72 : 0.88, pitch: 1.25 });

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/* ─── MAIN PLAYER ────────────────────────────────────── */
export const EarlyChildhoodPlayer: React.FC<Props> = ({ lesson, onBack }) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [done, setDone] = useState(false);
  const cancelRef = useRef(false);

  const step = lesson.steps[stepIdx];
  const progress = ((stepIdx + 1) / lesson.steps.length) * 100;

  const goNext = useCallback(() => {
    cancelRef.current = true;
    AudioSpeechService.stop();
    if (stepIdx < lesson.steps.length - 1) {
      cancelRef.current = false;
      setStepIdx((s) => s + 1);
    } else {
      setDone(true);
    }
  }, [stepIdx, lesson.steps.length]);

  const replayStep = useCallback(async () => {
    AudioSpeechService.stop();
    setIsSpeaking(true);
    const s = step as any;
    await speak(s.speech || s.teach_speech || s.question_speech || "", s.kind === "vowel-teach");
    setIsSpeaking(false);
  }, [step]);

  if (done) return <CelebrationScreen lesson={lesson} onBack={onBack} />;

  return (
    <LessonEnvironment>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 pb-2 bg-white/80 backdrop-blur-md border-b border-white/60">
        <div className="flex items-center gap-2 max-w-xl mx-auto">
          {onBack && (
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
            </button>
          )}
          <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 60 }}
            />
          </div>
          <button
            onClick={replayStep}
            className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center hover:bg-violet-200 transition shrink-0"
          >
            <Volume2 className="w-4 h-4 text-violet-600" />
          </button>
        </div>
        <p className="text-center text-xs font-bold text-slate-400 mt-1">
          {stepIdx + 1} / {lesson.steps.length}
        </p>
      </div>

      {/* Step content */}
      <div className="w-full max-w-lg mx-auto px-3 pt-20 pb-48 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="w-full"
          >
            <StepRenderer
              step={step}
              isSpeaking={isSpeaking}
              setIsSpeaking={setIsSpeaking}
              onNext={goNext}
              cancelRef={cancelRef}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <MascotTeacher type="pip" isSpeaking={isSpeaking} />
    </LessonEnvironment>
  );
};

/* ─── STEP DISPATCHER ────────────────────────────────── */
interface StepProps {
  step: EarlyStep;
  isSpeaking: boolean;
  setIsSpeaking: (v: boolean) => void;
  onNext: () => void;
  cancelRef: React.MutableRefObject<boolean>;
}

const StepRenderer: React.FC<StepProps> = (props) => {
  switch (props.step.kind) {
    case "intro":
      return <IntroSlide {...props} step={props.step} />;
    case "vowel-teach":
      return <VowelTeachSlide {...props} step={props.step} />;
    case "vowel-practice":
      return <VowelPracticeSlide {...props} step={props.step} />;
    case "count-teach":
      return <CountTeachSlide {...props} step={props.step} />;
    case "count-practice":
      return <CountPracticeSlide {...props} step={props.step} />;
    case "subtract":
      return <SubtractSlide {...props} step={props.step} />;
  }
};

/* ─── INTRO ──────────────────────────────────────────── */
const IntroSlide: React.FC<StepProps & { step: IntroStep }> = ({
  step,
  setIsSpeaking,
  onNext,
  cancelRef,
}) => {
  useEffect(() => {
    let live = true;
    (async () => {
      setIsSpeaking(true);
      await speak(step.speech);
      if (!live || cancelRef.current) return;
      setIsSpeaking(false);
      await delay(600);
      if (!live || cancelRef.current) return;
      onNext();
    })();
    return () => {
      live = false;
    };
  }, [step.id]);

  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-violet-200 p-8 flex flex-col items-center gap-5 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        <Illustration name={step.illustration} className="w-28 h-28" />
      </motion.div>
      <h1 className="text-3xl font-black text-slate-800">{step.title}</h1>
      <p className="text-slate-500 font-semibold text-sm">O professor vai te ajudar!</p>
      <div className="flex gap-1 mt-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, delay: i * 0.2, duration: 0.8 }}
            className="w-3 h-3 rounded-full bg-violet-400"
          />
        ))}
      </div>
    </div>
  );
};

/* ─── VOWEL TEACH ────────────────────────────────────── */
const VowelTeachSlide: React.FC<StepProps & { step: VowelTeachStep }> = ({
  step,
  setIsSpeaking,
  onNext,
  cancelRef,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let live = true;
    setShow(false);
    (async () => {
      await delay(300);
      if (!live || cancelRef.current) return;
      setShow(true);
      setIsSpeaking(true);
      await speak(step.speech, true);
      if (!live || cancelRef.current) return;
      setIsSpeaking(false);
      await delay(1200);
      if (!live || cancelRef.current) return;
      onNext();
    })();
    return () => {
      live = false;
    };
  }, [step.id]);

  return (
    <div
      className={`rounded-3xl border-4 ${step.text} ${step.bg} p-6 flex flex-col items-center gap-4 shadow-xl`}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            className={`text-[9rem] leading-none font-black ${step.color} drop-shadow-md select-none`}
          >
            {step.vowel}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex flex-col items-center gap-3"
          >
            <Illustration name={step.illustration} className="w-28 h-28" alt={step.word} />
            <div className={`text-2xl font-black ${step.color}`}>{step.word}</div>
            {step.word2 && (
              <div className="text-sm font-bold text-slate-500">
                {step.vowel} de {step.word2} também!
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── VOWEL PRACTICE ─────────────────────────────────── */
const VowelPracticeSlide: React.FC<StepProps & { step: VowelPracticeStep }> = ({
  step,
  setIsSpeaking,
  onNext,
}) => {
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);
  const [chosen, setChosen] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setFeedback(null);
    setChosen(null);
    setVisible(false);
    (async () => {
      setIsSpeaking(true);
      await speak(step.question_speech, false);
      setIsSpeaking(false);
      setVisible(true);
    })();
  }, [step.id]);

  const handlePick = async (letter: string) => {
    if (chosen) return;
    setChosen(letter);
    const ok = letter === step.target;
    setFeedback(ok ? "ok" : "err");
    if (ok) {
      setIsSpeaking(true);
      await speak(`Isso mesmo! ${letter}! Que incrível! Você acertou!`);
      setIsSpeaking(false);
      await delay(700);
      onNext();
    } else {
      setIsSpeaking(true);
      await speak(`Ops! Tente de novo! Toque na letra ${step.target}!`);
      setIsSpeaking(false);
      await delay(700);
      setFeedback(null);
      setChosen(null);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-slate-100 p-6 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <p className="text-slate-500 font-bold text-sm">Toque na letra</p>
        <div
          className={`text-8xl font-black ${step.target_color} ${step.target_bg} rounded-2xl px-6 py-2 leading-none`}
        >
          {step.target}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {visible &&
          step.options.map((opt, i) => {
            const isChosen = chosen === opt.letter;
            const isCorrect = opt.letter === step.target;
            const borderClass = isChosen
              ? isCorrect
                ? "border-emerald-500 ring-4 ring-emerald-300"
                : "border-red-400 ring-4 ring-red-200"
              : "border-transparent";
            return (
              <motion.button
                key={opt.letter}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, delay: i * 0.12 }}
                onClick={() => handlePick(opt.letter)}
                disabled={!!chosen}
                className={`w-28 h-28 rounded-3xl text-8xl font-black shadow-xl border-4 ${borderClass} ${opt.bg} ${opt.color}
                hover:scale-105 active:scale-95 transition-transform flex items-center justify-center`}
              >
                {opt.letter}
              </motion.button>
            );
          })}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`w-full py-4 rounded-2xl text-center text-2xl font-black
              ${feedback === "ok" ? "bg-emerald-400 text-white" : "bg-rose-400 text-white"}`}
          >
            {feedback === "ok" ? "Parabéns!" : "Tente de novo!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── COUNT TEACH ────────────────────────────────────── */
const CountTeachSlide: React.FC<StepProps & { step: CountTeachStep }> = ({
  step,
  setIsSpeaking,
  onNext,
  cancelRef,
}) => {
  const [shown, setShown] = useState(0);
  const [currentCount, setCurrentCount] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    setShown(0);
    setCurrentCount(null);

    (async () => {
      setIsSpeaking(true);
      await speak(step.speech);
      if (!live || cancelRef.current) return;

      for (let i = 0; i < step.count; i++) {
        await delay(200);
        if (!live || cancelRef.current) return;
        const word = step.count_words[i];
        setShown(i + 1);
        setCurrentCount(word);
        await speak(word + "!", true);
        if (!live || cancelRef.current) return;
        setCurrentCount(null);
        await delay(200);
      }

      await delay(400);
      if (!live || cancelRef.current) return;
      await speak(`Isso! Contamos até ${step.count_words[step.count - 1]}! Muito bem!`);
      if (!live || cancelRef.current) return;
      setIsSpeaking(false);
      await delay(800);
      if (!live || cancelRef.current) return;
      onNext();
    })();

    return () => {
      live = false;
    };
  }, [step.id]);

  const itemsPerRow = step.count <= 5 ? step.count : 5;

  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-amber-200 p-6 flex flex-col items-center gap-4">
      {/* Count badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={shown}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center shadow-lg"
        >
          <span className="text-4xl font-black text-white">{shown}</span>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentCount && (
          <motion.div
            key={currentCount}
            initial={{ scale: 0.5, opacity: 0, y: -10 }}
            animate={{ scale: 1.2, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-3xl font-black text-amber-600"
          >
            {currentCount}!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Illustration grid */}
      <div
        className="flex flex-wrap justify-center gap-2"
        style={{ maxWidth: `${itemsPerRow * 72}px` }}
      >
        {Array.from({ length: step.count }, (_, i) => i).map((i) => (
          <AnimatePresence key={i}>
            {shown > i && (
              <motion.div
                initial={{ scale: 0, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 16 }}
              >
                <Illustration name={step.illustration} className="w-14 h-14" />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

/* ─── COUNT PRACTICE ─────────────────────────────────── */
const CountPracticeSlide: React.FC<StepProps & { step: CountPracticeStep }> = ({
  step,
  setIsSpeaking,
  onNext,
}) => {
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setFeedback(null);
    setChosen(null);
    setShowButtons(false);
    (async () => {
      setIsSpeaking(true);
      await speak(step.question_speech);
      setIsSpeaking(false);
      setShowButtons(true);
    })();
  }, [step.id]);

  const handlePick = async (n: number) => {
    if (chosen !== null) return;
    setChosen(n);
    const ok = n === step.count;
    setFeedback(ok ? "ok" : "err");
    if (ok) {
      setIsSpeaking(true);
      await speak(`${n}! Correto! Você é incrível!`);
      setIsSpeaking(false);
      await delay(600);
      onNext();
    } else {
      setIsSpeaking(true);
      await speak(`Não! Olhe bem e conte de novo! Tente outra vez!`);
      setIsSpeaking(false);
      await delay(700);
      setFeedback(null);
      setChosen(null);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-amber-200 p-6 flex flex-col items-center gap-5">
      <div className="flex flex-wrap justify-center gap-2 min-h-[80px] items-center">
        {Array.from({ length: step.count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.06, type: "spring" }}
          >
            <Illustration name={step.illustration} className="w-14 h-14" />
          </motion.div>
        ))}
      </div>

      <p className="text-slate-500 font-bold text-base text-center">Quantos você vê?</p>

      <div className="flex gap-4 justify-center flex-wrap">
        {showButtons &&
          step.options.map((n, i) => {
            const isChosen = chosen === n;
            const isCorrect = n === step.count;
            const border = isChosen
              ? isCorrect
                ? "border-emerald-500 ring-4 ring-emerald-200"
                : "border-red-400 ring-4 ring-red-200"
              : "border-transparent";
            const bg = isChosen ? (isCorrect ? "bg-emerald-400" : "bg-rose-400") : "bg-amber-400";
            return (
              <motion.button
                key={n}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 220, delay: i * 0.1 }}
                onClick={() => handlePick(n)}
                disabled={!!chosen}
                className={`w-24 h-24 rounded-3xl text-5xl font-black text-white shadow-xl border-4 ${border} ${bg}
                hover:scale-105 active:scale-95 transition-transform`}
              >
                {n}
              </motion.button>
            );
          })}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full py-4 rounded-2xl text-center text-2xl font-black
              ${feedback === "ok" ? "bg-emerald-400 text-white" : "bg-rose-400 text-white"}`}
          >
            {feedback === "ok" ? "Isso mesmo!" : "Tente de novo!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── SUBTRACT ───────────────────────────────────────── */
type SubPhase = "show-all" | "removing" | "question";

const SubtractSlide: React.FC<StepProps & { step: SubtractStep }> = ({
  step,
  setIsSpeaking,
  onNext,
  cancelRef,
}) => {
  const [subPhase, setSubPhase] = useState<SubPhase>("show-all");
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);
  const [showButtons, setShowButtons] = useState(false);

  const total = step.total;
  const remove = step.remove;
  const remaining = total - remove;

  useEffect(() => {
    let live = true;
    setSubPhase("show-all");
    setFeedback(null);
    setChosen(null);
    setShowButtons(false);

    (async () => {
      await delay(400);
      if (!live || cancelRef.current) return;
      setIsSpeaking(true);
      await speak(step.teach_speech);
      if (!live || cancelRef.current) return;
      await delay(500);

      setSubPhase("removing");
      await speak(step.remove_speech);
      if (!live || cancelRef.current) return;
      await delay(1200);

      if (!live || cancelRef.current) return;
      setSubPhase("question");
      setIsSpeaking(false);
      await delay(500);
      if (!live || cancelRef.current) return;
      setIsSpeaking(true);
      await speak(step.question_speech);
      if (!live || cancelRef.current) return;
      setIsSpeaking(false);
      setShowButtons(true);
    })();

    return () => {
      live = false;
    };
  }, [step.id]);

  const handlePick = async (n: number) => {
    if (chosen !== null) return;
    setChosen(n);
    const ok = n === remaining;
    setFeedback(ok ? "ok" : "err");
    if (ok) {
      setIsSpeaking(true);
      await speak(`${n}! Correto! Você arrasou! Isso é subtração!`);
      setIsSpeaking(false);
      await delay(700);
      onNext();
    } else {
      setIsSpeaking(true);
      await speak(`Não! Conta só os que sobraram! Tente de novo!`);
      setIsSpeaking(false);
      await delay(700);
      setFeedback(null);
      setChosen(null);
    }
  };

  const allItems = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-rose-200 p-6 flex flex-col items-center gap-4">
      {/* Operation header */}
      <div className="flex items-center justify-center gap-3 text-3xl font-black text-slate-700">
        <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-xl">{total}</span>
        <span className="text-slate-400">−</span>
        <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-xl">{remove}</span>
        <span className="text-slate-400">=</span>
        <AnimatePresence mode="wait">
          {subPhase === "question" ? (
            <motion.span
              key="reveal"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-xl"
            >
              ?
            </motion.span>
          ) : (
            <motion.span key="q" className="bg-slate-100 text-slate-400 px-3 py-1 rounded-xl">
              ?
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Illustration objects */}
      <div className="flex flex-wrap justify-center gap-2 min-h-[72px] items-center">
        {allItems.map((i) => {
          const isRemoved = i >= remaining;
          const shouldShow =
            subPhase === "show-all" ||
            subPhase === "removing" ||
            (subPhase === "question" && !isRemoved);
          return (
            <AnimatePresence key={i} mode="wait">
              {shouldShow && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="relative"
                >
                  <div
                    className={`transition-all duration-300 ${isRemoved && subPhase === "removing" ? "opacity-35 grayscale" : ""}`}
                  >
                    <Illustration name={step.illustration} className="w-14 h-14" />
                  </div>
                  <AnimatePresence>
                    {isRemoved && subPhase === "removing" && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="text-4xl font-black text-red-500 drop-shadow">X</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={subPhase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500 font-bold text-sm text-center"
        >
          {subPhase === "show-all" && `Temos ${total} ao todo`}
          {subPhase === "removing" && `Tirando ${remove}...`}
          {subPhase === "question" && `Sobraram quantos?`}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence>
        {subPhase === "question" && showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 justify-center flex-wrap w-full"
          >
            {step.options.map((n, i) => {
              const isChosen = chosen === n;
              const isCorrect = n === remaining;
              const bg = isChosen ? (isCorrect ? "bg-emerald-400" : "bg-rose-400") : "bg-rose-500";
              const border = isChosen
                ? isCorrect
                  ? "border-emerald-300 ring-4 ring-emerald-200"
                  : "border-red-300 ring-4 ring-red-200"
                : "border-rose-700";
              return (
                <motion.button
                  key={n}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, delay: i * 0.1 }}
                  onClick={() => handlePick(n)}
                  disabled={!!chosen}
                  className={`w-24 h-24 rounded-3xl text-5xl font-black text-white shadow-xl border-b-8 ${border} ${bg}
                    hover:scale-105 active:scale-95 transition-transform`}
                >
                  {n}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full py-4 rounded-2xl text-center text-2xl font-black
              ${feedback === "ok" ? "bg-emerald-400 text-white" : "bg-rose-400 text-white"}`}
          >
            {feedback === "ok" ? "Isso mesmo!" : "Tente de novo!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── CELEBRATION ─────────────────────────────────────── */
const CelebrationScreen: React.FC<{ lesson: EarlyLesson; onBack?: () => void }> = ({
  lesson,
  onBack,
}) => {
  useEffect(() => {
    speak(
      `Parabéns! Você completou ${lesson.title}! Você é muito inteligente! Continue aprendendo!`,
    );
  }, []);

  return (
    <LessonEnvironment>
      <div className="w-full max-w-sm mx-auto px-4 pt-24 pb-48 flex flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 160 }}
        >
          <Illustration name="star" className="w-36 h-36" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-slate-800"
        >
          Missão Cumprida!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-yellow-400 text-white rounded-2xl px-6 py-3 text-xl font-black shadow-lg"
        >
          Você aprendeu {lesson.title}!
        </motion.div>
        {onBack && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={onBack}
            className="bg-violet-500 text-white font-black px-8 py-4 rounded-2xl text-lg shadow-lg hover:bg-violet-600 active:scale-95 transition"
          >
            Continuar
          </motion.button>
        )}
      </div>
      <MascotTeacher type="pip" isSpeaking={false} />
    </LessonEnvironment>
  );
};
