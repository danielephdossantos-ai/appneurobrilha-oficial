import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { LessonEnvironment } from "../components/LessonEnvironment";
import { MascotTeacher } from "../components/MascotTeacher";
import { LessonHeader } from "../components/LessonHeader";
import { AudioSpeechService } from "../services/AudioSpeechService";
import { Lesson, LessonPerformance } from "../types/lesson";
import { useSearch } from "@tanstack/react-router";
import { getRotationHead, advanceRotationHead, rotateFrom } from "../utils/lessonRotation";
import { RenderEmoji } from "@/components/neuro-treino/RenderEmoji";
import { semEmoji, objetoImg } from "@/data/neuro-treino/objetos";
import * as Lessons from "../data/lessons";
import { ActivityPlayer } from "./ActivityPlayer";
import { ActivityPlayerC } from "./ActivityPlayerC";
import { EarlyChildhoodPlayer } from "./EarlyChildhoodPlayer";
import { VOGAIS_LESSON, CONTAGEM_LESSON, SUBTRACAO_LESSON } from "../data/early-lessons";
import { ActivityLesson } from "../types/activity-lesson";
import { ActivityLessonC } from "../types/activity-lesson-c";
import {
  SINONIMOS_LESSON,
  ANTONIMOS_LESSON,
  FRACOES_LESSON,
  SUBSTANTIVOS_LESSON,
  MULTIPLICACAO_LESSON,
  VOGAIS_1ANO_LESSON,
  ALFABETO_1ANO_LESSON,
  RIMAS_1ANO_LESSON,
  SILABAS_1ANO_LESSON,
} from "../data/activity-lessons";
import {
  OCEANOS_LESSON,
  BIOMAS_LESSON,
  CELULAS_LESSON,
  EQUACOES_LESSON,
  REVOLUCAO_LESSON,
  SISTEMA_NERVOSO_LESSON,
  GENETICA_LESSON,
  ILUMINISMO_LESSON,
} from "../data/activity-lessons-c";
import { useAppState } from "@/core/store";
import { diagnosticoToNeuroProfile } from "@/lib/neuro-profile";
import { resolveLesson, hasAdaptedVariants } from "../engine/lesson-resolver";

const ACTIVITY_MAP: Record<string, ActivityLesson> = {
  sinonimos: SINONIMOS_LESSON,
  antonimos: ANTONIMOS_LESSON,
  fracoes: FRACOES_LESSON,
  substantivos: SUBSTANTIVOS_LESSON,
  multiplicacao: MULTIPLICACAO_LESSON,
  vogais_1ano: VOGAIS_1ANO_LESSON,
  alfabeto_1ano: ALFABETO_1ANO_LESSON,
  rimas_1ano: RIMAS_1ANO_LESSON,
  silabas_1ano: SILABAS_1ANO_LESSON,
};

const ACTIVITY_C_MAP: Record<string, ActivityLessonC> = {
  oceanos: OCEANOS_LESSON,
  biomas: BIOMAS_LESSON,
  celulas: CELULAS_LESSON,
  equacoes: EQUACOES_LESSON,
  revolucao: REVOLUCAO_LESSON,
  sistema_nervoso: SISTEMA_NERVOSO_LESSON,
  genetica: GENETICA_LESSON,
  iluminismo: ILUMINISMO_LESSON,
};

const EARLY_MAP: Record<string, typeof VOGAIS_LESSON> = {
  vogais: VOGAIS_LESSON,
  contagem: CONTAGEM_LESSON,
  subtracao: SUBTRACAO_LESSON,
};

const NUMBER_WORDS = [
  "Um", "Dois", "Três", "Quatro", "Cinco",
  "Seis", "Sete", "Oito", "Nove", "Dez",
];

const isPictograph = (s: string) => /\p{Extended_Pictographic}/u.test(s);

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: "/escola-brilha/aula" }) as { category: string; type: string };
  const { activeChild } = useAppState();
  const neuroProfile = diagnosticoToNeuroProfile(activeChild?.diagnostico);

  const lessonC = ACTIVITY_C_MAP[search.category];
  if (lessonC) return <ActivityPlayerC lesson={lessonC} />;

  const lessonB = ACTIVITY_MAP[search.category];
  if (lessonB) {
    const resolved = hasAdaptedVariants(search.category)
      ? (resolveLesson(search.category, neuroProfile) ?? lessonB)
      : lessonB;
    return <ActivityPlayer lesson={resolved} />;
  }

  const earlyLesson = EARLY_MAP[search.category];
  if (earlyLesson) return <EarlyChildhoodPlayer lesson={earlyLesson} />;

  return <LegacyLessonPlayer />;
};

/* ─── Legacy Player (1º e 2º Ano) ─── */
const LegacyLessonPlayer: React.FC = () => {
  const search = useSearch({ from: "/escola-brilha/aula" }) as { category: string };

  const baseLesson = React.useMemo((): Lesson => {
    switch (search.category) {
      case "matematica":
        return Lessons.MATH_1ANO_LESSON;
      case "portugues_1ano":
        return Lessons.PORTUGUES_1ANO_LESSON;
      case "ciencias_1ano":
        return Lessons.CIENCIAS_1ANO_LESSON;
      case "historia_1ano":
        return Lessons.HISTORIA_1ANO_LESSON;
      default:

        return Lessons.LANG_LESSON;
    }
  }, [search.category]);

  /* Fila rotativa: cada execução continua de onde parou (localStorage por lesson.id). */
  const currentLesson = React.useMemo((): Lesson => {
    const total = baseLesson.steps.length;
    if (total <= 1) return baseLesson;
    const head = getRotationHead(baseLesson.id, total);
    return { ...baseLesson, steps: rotateFrom(baseLesson.steps, head) };
  }, [baseLesson]);

  const isSecondYear = search.category.includes("2ano");

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightedElementId, setHighlightedElementId] = useState<string | null>(null);
  const [visibleOptions, setVisibleOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ kind: "ok" | "err" | "done"; msg: string } | null>(
    null,
  );
  const [, setPerformance] = useState<LessonPerformance>({
    hits: 0,
    misses: 0,
    startTime: Date.now(),
    percentage: 0,
  });

  const currentStep = currentLesson.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / currentLesson.steps.length) * 100;

  useEffect(() => {
    runStep();
    return () => AudioSpeechService.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStepIndex, currentLesson.id]);

  const getStepSpeech = (step: any) => {
    let text = step.speech;
    if (step.elements) {
      const elementsText = step.elements
        .filter((el: any) => el.type === "text")
        .map((el: any) => {
          if (objetoImg(el.content)) return "";
          return semEmoji(el.content);
        })
        .filter((txt: string) => txt.length > 0)
        .join(". ");
      if (elementsText && !text.includes(elementsText)) {
        text += ". " + elementsText;
      }
    }
    if (step.type === "interaction" && step.interaction?.options) {
      const options = step.interaction.options;
      // Não ler números das opções em voz alta — a criança lê visualmente
      // e clica. Só lê opções textuais não-numéricas (ex.: palavras).
      const textOptions = options.filter(
        (opt: string) => !isPictograph(opt) && !objetoImg(opt) && !/^\d+$/.test(String(opt).trim()),
      );
      if (textOptions.length > 0) {
        const optionsText =
          textOptions.slice(0, -1).join("... ") +
          (textOptions.length > 1 ? "... ou ... " : "") +
          textOptions[textOptions.length - 1];
        text += ". " + optionsText + "?";
      }
    }

    return text;
  };

  const runStep = async () => {
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    setHighlightedElementId(null);
    await new Promise((r) => setTimeout(r, 300));
    // Conta em voz alta os elementos visuais (ensino guiado).
    const countables = (currentStep.elements || []).filter(
      (el: any) => el.type === "text" && objetoImg(el.content),
    );
    const shouldCountAloud =
      countables.length >= 2 && currentStep.type === "interaction";
    let countedSoFar = 0;
    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise((r) => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements((prev) => [...prev, el.id]);
        if (shouldCountAloud && el.type === "text" && objetoImg(el.content)) {
          countedSoFar++;
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          await AudioSpeechService.speak(NUMBER_WORDS[countedSoFar - 1] || String(countedSoFar));
          setIsSpeaking(false);
          setHighlightedElementId(null);
        } else if (
          currentStep.type === "demonstration" ||
          currentStep.type === "explanation"
        ) {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          const speechText = el.content === "↓" ? "junta" : el.content;
          await AudioSpeechService.speak(speechText);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise((r) => setTimeout(r, 400));
        }
      }
    }

    // Subtração visual: tira os últimos N objetos, depois conta os que sobraram.
    const take = (currentStep as any).meta?.take ?? 0;
    if (take > 0 && countables.length > 0) {
      await new Promise((r) => setTimeout(r, 500));
      const toRemove = countables.slice(-take);
      for (const el of toRemove) {
        setHighlightedElementId(el.id);
        setIsSpeaking(true);
        await AudioSpeechService.speak("Tirou um!");
        setIsSpeaking(false);
        setShowElements((prev) => prev.filter((x) => x !== el.id));
        await new Promise((r) => setTimeout(r, 250));
      }
      setHighlightedElementId(null);
      const remaining = countables.slice(0, countables.length - take);
      await new Promise((r) => setTimeout(r, 350));
      setIsSpeaking(true);
      await AudioSpeechService.speak("Agora vamos contar quantos sobraram!");
      setIsSpeaking(false);
      for (let i = 0; i < remaining.length; i++) {
        setHighlightedElementId(remaining[i].id);
        setIsSpeaking(true);
        await AudioSpeechService.speak(NUMBER_WORDS[i] || String(i + 1));
        setIsSpeaking(false);
      }
      setHighlightedElementId(null);
    }

    const fullSpeech =
      take > 0 ? "Quantos sobraram?" : getStepSpeech(currentStep);
    setIsSpeaking(true);
    const speechPromise = AudioSpeechService.speak(fullSpeech);

    if (currentStep.type === "interaction" && currentStep.interaction?.options) {
      await new Promise((r) => setTimeout(r, 1500));
      const opts = Array.from(new Set(currentStep.interaction.options));
      for (let i = 0; i < opts.length; i++) {
        setVisibleOptions(opts.slice(0, i + 1));
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    await speechPromise;
    setIsSpeaking(false);
    if (currentStep.type === "explanation" || currentStep.type === "demonstration") {
      await new Promise((r) => setTimeout(r, 1800));
      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      }
    }
  };

  const replaySpeech = async () => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(getStepSpeech(currentStep));
    setIsSpeaking(false);
  };

  const handleInteraction = async (answer: string) => {
    const isCorrect = answer === currentStep.interaction?.correctAnswer;
    if (isCorrect) {
      setPerformance((prev) => ({
        ...prev,
        hits: prev.hits + 1,
        percentage: ((prev.hits + 1) / (prev.hits + prev.misses + 1)) * 100,
      }));
      setFeedback({ kind: "ok", msg: "Isso mesmo!" });
      setIsSpeaking(true);
      await AudioSpeechService.speak("Isso mesmo! Você é demais!");
      setIsSpeaking(false);
      await new Promise((r) => setTimeout(r, 600));
      /* Cada atividade concluída avança a cabeça da fila rotativa. */
      advanceRotationHead(baseLesson.id, baseLesson.steps.length);
      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setFeedback({ kind: "done", msg: "Missão Cumprida!" });
        await AudioSpeechService.speak("Parabéns! Você completou toda a missão!");
      }
    } else {
      setPerformance((prev) => ({
        ...prev,
        misses: prev.misses + 1,
        percentage: (prev.hits / (prev.hits + prev.misses + 1)) * 100,
      }));
      setFeedback({ kind: "err", msg: "Vamos tentar de novo!" });
      setIsSpeaking(true);
      await AudioSpeechService.speak("Vamos tentar juntos! Olhe com atenção.");
      setIsSpeaking(false);
      await new Promise((r) => setTimeout(r, 800));
      runStep();
    }
  };

  return (
    <LessonEnvironment>
      <LessonHeader
        progress={progress}
        missionName={currentLesson.title}
        field={currentLesson.bncc_field}
        stepIndex={currentStepIndex}
        totalSteps={currentLesson.steps.length}
      />
      <div
        className={`w-full ${isSecondYear ? "max-w-2xl px-2" : "max-w-md px-4"} pt-24 pb-56 flex flex-col items-center`}
      >
        <motion.div
          key={currentStep.id}
          initial={isSecondYear ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            isSecondYear ? { duration: 0.3 } : { type: "spring", stiffness: 120, damping: 16 }
          }
          className={`w-full bg-white rounded-3xl shadow-2xl border-4 border-white ${isSecondYear ? "p-6 sm:p-10" : "p-5 sm:p-6"} flex flex-col items-center gap-5`}
        >
          <div className="w-full flex items-start gap-2">
            <p className="flex-1 text-center text-lg sm:text-xl font-black text-slate-700 leading-snug">
              {currentStep.speech}
            </p>
            <button
              onClick={replaySpeech}
              className="shrink-0 w-9 h-9 rounded-full bg-violet-100 hover:bg-violet-200 text-violet-600 flex items-center justify-center active:scale-95 transition"
              aria-label="Ouvir novamente"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          {currentStep.elements && currentStep.elements.length > 0 && (
            <div className="w-full min-h-[140px] flex items-center justify-center gap-6 flex-wrap">
              <AnimatePresence>
                {currentStep.elements.map(
                  (el: any) =>
                    showElements.includes(el.id) && (
                      <motion.div
                        key={el.id}
                        initial={isSecondYear ? { opacity: 0 } : { scale: 0, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={
                          isSecondYear
                            ? { duration: 0.2 }
                            : { type: "spring", stiffness: 200, damping: 14 }
                        }
                        className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${highlightedElementId === el.id ? "scale-110" : "scale-100"}`}
                      >
                        {isPictograph(el.content) || objetoImg(el.content) ? (
                          <>
                            <div
                              className={
                                highlightedElementId === el.id
                                  ? "drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                                  : ""
                              }
                            >
                              <RenderEmoji e={el.content} className="w-24 h-24 sm:w-32 sm:h-32" />
                            </div>
                            {!isSecondYear && (
                              <span className="text-xl sm:text-2xl font-black text-slate-700 uppercase tracking-wider">
                                {semEmoji(el.content)}
                              </span>
                            )}
                          </>
                        ) : (
                          <div
                            className={`text-5xl sm:text-6xl font-black px-2 transition-all duration-300 ${highlightedElementId === el.id ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" : "text-blue-600"}`}
                          >
                            {el.content}
                          </div>
                        )}
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          )}
          {currentStep.type === "interaction" && currentStep.interaction?.options && (
            <div className="w-full flex flex-wrap items-center justify-center gap-4 pt-4">
              <AnimatePresence>
                {visibleOptions.map((opt, i) => {
                  const palette = [
                    "bg-blue-500 border-blue-700",
                    "bg-emerald-500 border-emerald-700",
                    "bg-yellow-400 border-yellow-600",
                    "bg-pink-500 border-pink-700",
                  ];
                  const color = palette[i % palette.length];
                  const hasIllust = isPictograph(opt) || objetoImg(opt);
                  const isNumber = /^\d+$/.test(String(opt).trim());
                  const isLetterOrSyllable = !hasIllust && /^[A-ZÇÃÕÁÉÍÓÚÂÊÔ]{1,3}$/.test(String(opt).trim());
                  return (
                    <motion.button
                      key={opt}
                      initial={{ scale: 0, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 220 }}
                      onClick={() => handleInteraction(opt)}
                      className={`${color} text-white ${hasIllust ? "w-28 h-32 sm:w-32 sm:h-36" : "w-24 h-24 sm:w-28 sm:h-28"} rounded-3xl font-black shadow-xl border-b-8 hover:scale-105 active:scale-95 transition flex flex-col items-center justify-center gap-1 p-2`}
                    >
                      {hasIllust ? (
                        <>
                          <RenderEmoji e={opt} className="w-16 h-16 sm:w-20 sm:h-20" label={semEmoji(opt)} />
                          <span className="text-sm sm:text-base font-black uppercase tracking-wide leading-none">
                            {semEmoji(opt)}
                          </span>
                        </>
                      ) : (
                        <span className={isNumber || isLetterOrSyllable ? "text-5xl sm:text-6xl drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]" : "text-3xl sm:text-4xl"}>
                          {opt}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
      <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none"
          >
            <div
              className={`px-8 py-5 rounded-3xl text-3xl sm:text-5xl font-black shadow-2xl border-4 ${feedback.kind === "ok" ? "bg-emerald-400 text-white border-emerald-200" : feedback.kind === "done" ? "bg-yellow-400 text-white border-yellow-200" : "bg-pink-400 text-white border-pink-200"}`}
            >
              {feedback.msg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};
