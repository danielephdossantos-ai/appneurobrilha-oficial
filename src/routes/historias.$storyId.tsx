import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Play, Pause, ChevronLeft, ChevronRight, Trophy, RotateCcw, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useStory, saveStoryProgress } from "@/modules/historias/hooks/useStories";
import { speak, type TTSHandle } from "@/modules/historias/lib/tts";
import { useAppState } from "@/core/store";
import { THEME_META, type StoryTheme } from "@/modules/historias/types";
import {
  generateStoryPageImage,
  generateStoryCoverImage,
} from "@/services/api/story-illustration.functions";
import { getThemeScene } from "@/modules/historias/lib/theme-scenes";

type Ripple = { id: number; x: number; y: number };

function IllustrationSkeleton({ theme }: { theme: string }) {
  const svgScene = getThemeScene(theme);
  return (
    <div
      className="relative w-full rounded-[2rem] overflow-hidden shadow-xl"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{ __html: svgScene }}
        style={{ lineHeight: 0 }}
      />
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 flex flex-col items-end justify-end p-5 gap-2">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-2xl px-4 py-2.5">
          <motion.div
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white"
                animate={{ scale: [1, 1.7, 1], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.16 }}
              />
            ))}
          </motion.div>
          <motion.p
            className="text-white text-xs font-bold tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Pintando o cenário...
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function StoryIllustration({
  imageUrl,
  coverImage,
  theme,
  bg,
  pageId,
  pageText,
  storyId,
  storyTitle,
  storyDescription,
  isCoverPage,
}: {
  imageUrl: string | null;
  coverImage: string | null;
  theme: string;
  bg?: string;
  pageId?: string;
  pageText?: string;
  storyId?: string;
  storyTitle?: string;
  storyDescription?: string;
  isCoverPage?: boolean;
}) {
  const rawSrc = imageUrl || coverImage;
  const isSvgOrEmpty = !rawSrc || rawSrc.startsWith("data:image/svg");
  const [src, setSrc] = useState<string | null>(isSvgOrEmpty ? null : rawSrc);
  const [generating, setGenerating] = useState(isSvgOrEmpty);
  const controls = useAnimation();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const generatedRef = useRef(false);

  const tryGenerate = useCallback(async () => {
    if (generatedRef.current) return;
    generatedRef.current = true;
    setGenerating(true);
    try {
      if (isCoverPage && storyId && storyTitle) {
        const result = await generateStoryCoverImage({
          data: { storyId, storyTitle, theme, description: storyDescription ?? "" },
        });
        if (result.imageUrl) setSrc(result.imageUrl);
      } else if (pageId && pageText && storyTitle) {
        const result = await generateStoryPageImage({
          data: { pageId, pageText, theme, storyTitle },
        });
        if (result.imageUrl) setSrc(result.imageUrl);
      }
    } catch (e) {
      console.error("[StoryIllustration] generate error:", e);
    } finally {
      setGenerating(false);
    }
  }, [pageId, pageText, storyId, storyTitle, theme, storyDescription, isCoverPage]);

  useEffect(() => {
    if (isSvgOrEmpty) {
      tryGenerate();
    } else {
      setSrc(rawSrc);
      generatedRef.current = false;
    }
  }, [rawSrc, isSvgOrEmpty]);

  const handleInteract = (e: React.MouseEvent | React.TouchEvent) => {
    if (generating) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? rect.left + rect.width / 2 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY ?? rect.top + rect.height / 2 : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 900);
    controls.start({ scale: [1, 1.04, 0.98, 1.01, 1], transition: { duration: 0.45, ease: "easeOut" } });
  };

  if (generating) {
    return <IllustrationSkeleton theme={theme} />;
  }

  if (src && !src.startsWith("data:image/svg")) {
    const isAI = src.startsWith("data:image/png;base64") || src.startsWith("data:image/jpeg");
    return (
      <motion.div
        animate={controls}
        onClick={handleInteract}
        onTouchStart={handleInteract}
        className="relative w-full rounded-[2rem] overflow-hidden shadow-xl cursor-pointer select-none"
        style={{ aspectRatio: "4 / 3" }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={`Ilustração de ${theme}`}
          className="w-full h-full object-cover"
          style={{ imageRendering: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.div
              key={r.id}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{ left: r.x, top: r.y, x: "-50%", y: "-50%" }}
              initial={{ width: 0, height: 0, opacity: 0.55 }}
              animate={{ width: 180, height: 180, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
        {isAI && (
          <div className="absolute bottom-3 right-3 pointer-events-none">
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
              <Sparkles className="w-3 h-3 text-[#FFD93D]" />
              <span className="text-white/80 text-[10px] font-bold">IA</span>
            </div>
          </div>
        )}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="text-white/50 text-[10px] font-bold bg-black/20 rounded-full px-2.5 py-1">
            Toque para animar
          </span>
        </div>
      </motion.div>
    );
  }

  const svgScene = getThemeScene(theme);
  return (
    <div
      className="relative w-full rounded-[2rem] overflow-hidden shadow-lg"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{ __html: svgScene }}
        style={{ lineHeight: 0 }}
      />
    </div>
  );
}

export const Route = createFileRoute("/historias/$storyId")({
  component: StoryReader,
});

function StoryReader() {
  const { storyId } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild, addCoins } = useAppState();
  const { data, isLoading } = useStory(storyId);

  const [pageIdx, setPageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [phase, setPhase] = useState<"reading" | "questions" | "result">("reading");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<Record<string, boolean>>({});
  const ttsRef = useRef<TTSHandle | null>(null);

  const pages = data?.pages ?? [];
  const questions = data?.questions ?? [];
  const story = data?.story;
  const currentPage = pages[pageIdx];
  const themeMeta = story ? THEME_META[story.theme as StoryTheme] : undefined;

  useEffect(() => {
    return () => {
      ttsRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (!activeChild || !story) return;
    saveStoryProgress({
      childId: activeChild.id,
      storyId: story.id,
      currentPage: pageIdx + 1,
    }).catch(() => {});
  }, [pageIdx, activeChild, story]);

  const handlePlay = () => {
    if (!currentPage) return;
    if (isPlaying) {
      ttsRef.current?.stop();
      setIsPlaying(false);
      setCurrentWord(null);
      return;
    }
    setIsPlaying(true);
    ttsRef.current = speak(currentPage.text, {
      onWord: (_i, word) => setCurrentWord(word.replace(/[.,!?]/g, "")),
      onEnd: () => {
        setIsPlaying(false);
        setCurrentWord(null);
      },
    });
  };

  const next = () => {
    ttsRef.current?.stop();
    setIsPlaying(false);
    setCurrentWord(null);
    if (pageIdx < pages.length - 1) {
      setPageIdx(pageIdx + 1);
    } else if (questions.length > 0) {
      setPhase("questions");
    } else {
      finalize(100);
    }
  };

  const prev = () => {
    ttsRef.current?.stop();
    setIsPlaying(false);
    if (pageIdx > 0) setPageIdx(pageIdx - 1);
  };

  const finalize = (score: number) => {
    if (activeChild && story) {
      saveStoryProgress({
        childId: activeChild.id,
        storyId: story.id,
        currentPage: pages.length,
        completed: true,
        score,
      }).catch(() => {});
      addCoins(Math.max(5, Math.round(score / 10)));
    }
    setPhase("result");
  };

  const submitAnswer = (qid: string, opt: string, correct: string) => {
    if (showResult[qid]) return;
    setAnswers({ ...answers, [qid]: opt });
    setShowResult({ ...showResult, [qid]: true });
  };

  const allAnswered = questions.every((q) => showResult[q.id]);
  const correctCount = questions.filter((q) => {
    const ca = q.correctAnswer ?? q.correct_answer;
    return answers[q.id] === ca;
  }).length;
  const finalScore = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 100;

  const highlighted = useMemo(() => {
    if (!currentPage) return null;
    const words = currentPage.text.split(/(\s+)/);
    const hw = currentPage.highlightWords ?? currentPage.highlight_words ?? [];
    return words.map((w, i) => {
      const clean = w.replace(/[.,!?]/g, "").toLowerCase();
      const isHighlight = hw.some((h: string) => h.toLowerCase() === clean);
      const isActive = currentWord && currentWord.toLowerCase() === clean && clean.length > 0;
      return (
        <span
          key={i}
          className={`transition-all ${isActive ? "bg-[#FFD93D] text-[#6C5CE7] px-1 rounded scale-110 inline-block" : isHighlight ? "text-[#6C5CE7] font-black underline decoration-wavy decoration-[#FFD93D]" : ""}`}
        >
          {w}
        </span>
      );
    });
  }, [currentPage, currentWord]);

  if (isLoading || !story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F7FF]">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <p className="text-[#6C5CE7] font-bold">Carregando história...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7FF] to-[#EEF1FF] pb-24">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#6C5CE7]/10">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center gap-3">
          <button onClick={() => navigate({ to: "/historias" })} className="p-2 rounded-full hover:bg-[#6C5CE7]/10">
            <ArrowLeft className="w-6 h-6 text-[#6C5CE7]" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-black text-[#6C5CE7] truncate">{story.title}</h1>
            {phase === "reading" && (
              <p className="text-xs text-gray-500 font-medium">
                Página {pageIdx + 1} de {pages.length}
              </p>
            )}
          </div>
        </div>
        {phase === "reading" && (
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-[#6C5CE7] to-[#FFD93D] transition-all"
              style={{ width: `${((pageIdx + 1) / pages.length) * 100}%` }}
            />
          </div>
        )}
      </header>

      <main className="max-w-2xl mx-auto px-5 pt-6">
        <AnimatePresence mode="wait">
          {phase === "reading" && currentPage && (
            <motion.div
              key={pageIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-5"
            >
              <StoryIllustration
                imageUrl={currentPage.imageUrl ?? currentPage.image_url ?? null}
                coverImage={story.coverImage ?? story.cover_image ?? null}
                theme={story.theme}
                bg={themeMeta?.bg}
                pageId={currentPage.id}
                pageText={currentPage.text}
                storyId={story.id}
                storyTitle={story.title}
                storyDescription={story.description ?? ""}
              />

              <div className="bg-white rounded-3xl p-6 shadow-md">
                <p className="text-xl leading-relaxed font-medium text-[#2D3436]">{highlighted}</p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={prev}
                  disabled={pageIdx === 0}
                  className="p-4 rounded-full bg-white shadow-md disabled:opacity-30"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-[#6C5CE7]" />
                </button>

                <button
                  onClick={handlePlay}
                  className="flex-1 mx-2 py-4 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] text-white font-black flex items-center justify-center gap-2 shadow-lg active:scale-95 transition"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  {isPlaying ? "Pausar" : "Ouvir"}
                </button>

                <button
                  onClick={next}
                  className="p-4 rounded-full bg-[#FFD93D] shadow-md active:scale-95"
                  aria-label="Próxima"
                >
                  <ChevronRight className="w-6 h-6 text-[#6C5CE7]" />
                </button>
              </div>
            </motion.div>
          )}

          {phase === "questions" && (
            <motion.div
              key="q"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5"
            >
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#6C5CE7]">Hora das perguntas!</h2>
                <p className="text-gray-500 font-medium">Vamos ver o que você entendeu.</p>
              </div>

              {questions.map((q, i) => {
                const optA = q.optionA ?? q.option_a ?? "";
                const optB = q.optionB ?? q.option_b ?? "";
                const optC = q.optionC ?? q.option_c ?? "";
                const correctAnswer = q.correctAnswer ?? q.correct_answer ?? "";
                const opts: Array<["a" | "b" | "c", string]> = [
                  ["a", optA],
                  ["b", optB],
                  ["c", optC],
                ];
                const result = showResult[q.id];
                return (
                  <div key={q.id} className="bg-white rounded-3xl p-5 shadow-md">
                    <p className="font-bold text-[#2D3436] mb-3">
                      <span className="text-[#6C5CE7]">{i + 1}.</span> {q.question}
                    </p>
                    <div className="space-y-2">
                      {opts.map(([key, label]) => {
                        const picked = answers[q.id] === key;
                        const correct = correctAnswer === key;
                        let cls = "border-gray-200 bg-white";
                        if (result) {
                          if (correct) cls = "border-green-500 bg-green-50";
                          else if (picked) cls = "border-red-400 bg-red-50";
                        } else if (picked) cls = "border-[#6C5CE7] bg-[#6C5CE7]/5";
                        return (
                          <button
                            key={key}
                            onClick={() => submitAnswer(q.id, key, correctAnswer)}
                            className={`w-full text-left p-3 rounded-2xl border-2 font-bold transition ${cls}`}
                          >
                            <span className="uppercase text-xs mr-2 text-gray-400">{key}</span>
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {allAnswered && (
                <button
                  onClick={() => finalize(finalScore)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6C5CE7] to-[#FFD93D] text-white font-black text-lg shadow-lg"
                >
                  Ver resultado!
                </button>
              )}
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="r"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#FFD93D] to-[#FF7675] flex items-center justify-center shadow-2xl">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#6C5CE7]">Parabéns!</h2>
                <p className="text-gray-600 font-medium mt-2">
                  Você terminou <span className="font-black">{story.title}</span>
                </p>
                {questions.length > 0 && (
                  <p className="text-xl font-black text-[#FF7675] mt-4">
                    {correctCount} de {questions.length} acertos
                  </p>
                )}
                <div className="mt-4 inline-flex items-center gap-2 bg-[#FFD93D]/20 px-4 py-2 rounded-full">
                  <span className="text-2xl">🪙</span>
                  <span className="font-black text-[#6C5CE7]">+{Math.max(5, Math.round(finalScore / 10))} BrilhoCoins</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <button
                  onClick={() => {
                    setPageIdx(0);
                    setPhase("reading");
                    setAnswers({});
                    setShowResult({});
                  }}
                  className="w-full py-3 rounded-2xl bg-white text-[#6C5CE7] font-black border-2 border-[#6C5CE7]/20 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Ler de novo
                </button>
                <button
                  onClick={() => navigate({ to: "/historias" })}
                  className="w-full py-3 rounded-2xl bg-[#6C5CE7] text-white font-black"
                >
                  Voltar à biblioteca
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
