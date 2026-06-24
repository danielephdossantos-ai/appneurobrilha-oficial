import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import pipEgg from "@/assets/pip-egg.png";
import pipHatching from "@/assets/pip-hatching.png";
import pipBaby from "@/assets/pip-baby.png";
import pipaEgg from "@/assets/pipa-egg.png";
import pipaHatching from "@/assets/pipa-hatching.png";
import pipaBaby from "@/assets/pipa-baby.png";
import { KidButton } from "@/components/ui/KidButton";
import { supabase } from "@/database/supabase/client";

const MASCOT_IDS: Record<"pip" | "pipa", string> = {
  pip: "00000000-0000-0000-0000-000000000001",
  pipa: "00000000-0000-0000-0000-000000000002",
};

type MascotChoice = "pip" | "pipa";

interface Props {
  childId: string;
  childName: string;
  onClose: () => void;
}

const STORAGE_KEY = (childId: string) => `neurobrilha:hasSeenEggHatch:${childId}`;

export function EggHatchCinematic({ childId, childName, onClose }: Props) {
  const [phase, setPhase] = useState<
    "intro" | "choose" | "shake" | "spin" | "stop" | "crack" | "open" | "bubble" | "reveal"
  >("intro");
  const [mascot, setMascot] = useState<MascotChoice>("pip");
  const [speechSupported, setSpeechSupported] = useState(false);
  const [poppedTaps, setPoppedTaps] = useState(0);
  const [bubbleBurst, setBubbleBurst] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSpeechSupported("speechSynthesis" in window);
    }
  }, []);

  // Timing slow + suspense — cada fase tem espaço pra criança observar.
  useEffect(() => {
    if (phase === "shake") {
      const t = setTimeout(() => setPhase("spin"), 3000);
      return () => clearTimeout(t);
    }
    if (phase === "spin") {
      const t = setTimeout(() => setPhase("stop"), 3200);
      return () => clearTimeout(t);
    }
    if (phase === "stop") {
      // Pausa dramática: ovo para de girar, suspense
      const t = setTimeout(() => setPhase("crack"), 1800);
      return () => clearTimeout(t);
    }
    if (phase === "crack") {
      // 4 pedaços caem um por um — 4 x 700ms + margem
      const t = setTimeout(() => setPhase("open"), 3600);
      return () => clearTimeout(t);
    }
    if (phase === "open") {
      const t = setTimeout(() => setPhase("bubble"), 2200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const finish = async () => {
    try {
      localStorage.setItem(STORAGE_KEY(childId), "1");
      localStorage.setItem(`neurobrilha:starterMascot:${childId}`, mascot);
    } catch {}
    try {
      await supabase.rpc("activate_user_mascot" as any, {
        p_mascot_id: MASCOT_IDS[mascot],
      });
    } catch (e) {
      console.error("Falha ao ativar mascote", e);
    }
    onClose();
  };

  const eggImg = mascot === "pip" ? pipEgg : pipaEgg;
  const hatchImg = mascot === "pip" ? pipHatching : pipaHatching;
  const babyImg = mascot === "pip" ? pipBaby : pipaBaby;
  const mascotName = mascot === "pip" ? "o Pip" : "a Pipa";
  const greetingSpeech = `Olá, ${childName}! Eu sou ${mascotName} e vou te ajudar nessa aventura. Vamos crescer juntos!`;

  useEffect(() => {
    if (phase !== "reveal") return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(greetingSpeech);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.lang = "pt-BR";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [phase, greetingSpeech]);

  // Play a provided MP3 file if available (public/sounds/pop.mp3), otherwise fallback to Web Audio.
  const playPopSound = async () => {
    if (typeof window === "undefined") return;
    const mp3Url = "/sounds/pop.mp3";
    try {
      // Try the simple HTMLAudioElement first (works if file is present and allowed by browser)
      const a = new Audio(mp3Url);
      a.volume = 0.9;
      await a.play().catch(() => {
        throw new Error("audio-play-failed");
      });
      return;
    } catch (e) {
      // Fallback: generate a short pop with WebAudio
      try {
        const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.value = 700;
        o.connect(g);
        g.connect(ctx.destination);

        const now = ctx.currentTime;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.linearRampToValueAtTime(0.18, now + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        o.start(now);
        o.stop(now + 0.24);

        setTimeout(() => {
          try {
            ctx.close();
          } catch (e) {}
        }, 500);
      } catch (er) {
        // give up silently
      }
    }
  };

  // Play small pops when shell cracks and when the hatch opens
  useEffect(() => {
    if (phase === "crack") {
      playPopSound();
      const t = setTimeout(() => playPopSound(), 220);
      return () => clearTimeout(t);
    }
    if (phase === "open") {
      const t = setTimeout(() => playPopSound(), 120);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-md p-4"
    >
      {/* sparkles bg */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(2px_2px_at_20%_20%,white,transparent),radial-gradient(2px_2px_at_70%_40%,white,transparent),radial-gradient(1.5px_1.5px_at_40%_70%,white,transparent),radial-gradient(2px_2px_at_85%_80%,white,transparent)] opacity-70 animate-pulse" />

      <div className="relative w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="space-y-8"
            >
              <div className="relative mx-auto w-48 h-48 mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img
                    src={pipEgg}
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    alt="Ovo Misterioso"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white/20 blur-2xl rounded-full"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                  Um ovo mágico apareceu!
                </h1>
                <p className="text-white/80 text-xl max-w-md mx-auto font-bold">
                  Você está pronto para ver quem vai nascer?
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <KidButton
                  variant="primary"
                  onClick={() => setPhase("choose")}
                  className="px-12 py-6 text-2xl shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-bounce"
                >
                  SIM! ESTOU PRONTO! 🐣
                </KidButton>
              </motion.div>
            </motion.div>
          )}

          {phase === "choose" && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-white font-black uppercase tracking-widest text-xs mb-4">
                  <Sparkles size={14} /> Sua jornada começa aqui
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-3">
                  Escolha seu ovo: azul ou rosa?
                </h1>
                <p className="text-white/80 text-lg max-w-md mx-auto">
                  Toque no ovo que você mais gostou e prepare-se para a grande surpresa.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {(["pip", "pipa"] as MascotChoice[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMascot(m)}
                    className={`relative rounded-3xl p-6 border-4 transition-all bg-white/10 backdrop-blur hover:bg-white/20 ${
                      mascot === m
                        ? m === "pip"
                          ? "border-sky-300 ring-4 ring-sky-300/40 scale-105"
                          : "border-pink-300 ring-4 ring-pink-300/40 scale-105"
                        : "border-white/20"
                    }`}
                  >
                    <img
                      src={m === "pip" ? pipEgg : pipaEgg}
                      alt={`Ovo ${m === "pip" ? "Azul" : "Rosa"}`}
                      className="w-32 h-32 mx-auto object-contain drop-shadow-2xl"
                    />
                    <div className="mt-3 text-white font-black uppercase tracking-wider text-sm">
                      Ovo {m === "pip" ? "Azul" : "Rosa"}
                    </div>
                  </button>
                ))}
              </div>

              <KidButton
                variant="primary"
                onClick={() => setPhase("shake")}
                className="px-10 py-5 text-lg"
              >
                Chocar meu ovo! ✨
              </KidButton>
            </motion.div>
          )}

          {phase === "shake" && (
            <motion.div
              key="shake"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                O seu ovo mágico está se mexendo...
              </h2>
              <motion.div
                animate={{
                  rotate: [-8, 8, -8, 8, -4, 4, 0],
                  y: [0, -10, 0, -10, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={eggImg}
                  alt="Ovo chocando"
                  className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 blur-xl rounded-full"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
              <p className="text-white/80 text-lg">Sinta o ovo girar e o mistério ficar maior...</p>
            </motion.div>
          )}

          {phase === "spin" && (
            <motion.div
              key="spin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                O ovo está girando...
              </h2>
              <motion.div
                animate={{ rotate: [0, 360, 720, 1080], scale: [1, 1.06, 1, 1.06, 1] }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={eggImg}
                  alt="Ovo girando"
                  className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
              <p className="text-white/80 text-lg">
                Cada volta deixa a casca mais pronta para nascer.
              </p>
            </motion.div>
          )}

          {phase === "stop" && (
            <motion.div
              key="stop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                Shhh... O ovo parou!
              </h2>
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                animate={{
                  scale: [1, 1.04, 1, 1.04, 1],
                  rotate: [0, -1.5, 1.5, -1.5, 0],
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={eggImg}
                  alt="Ovo parado, prestes a abrir"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30 blur-2xl"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </motion.div>
              <p className="text-white/80 text-lg">
                Algo está prestes a acontecer... olha bem de pertinho.
              </p>
            </motion.div>
          )}

          {phase === "crack" && (
            <motion.div
              key="crack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                A casca está se abrindo em pedaços!
              </h2>
              {/* Quebra-cabeça: 4 pedaços da casca caindo um por um */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Glow central crescente */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-200/50 blur-2xl"
                  animate={{ opacity: [0, 0.6, 0.9], scale: [0.6, 1.1, 1.3] }}
                  transition={{ duration: 3.4, ease: "easeInOut" }}
                />
                {/* 4 pedaços do ovo, cada um com clip de um quadrante */}
                {[
                  { clip: "inset(0 50% 50% 0)", x: -80, y: -90, r: -35, delay: 0 },
                  { clip: "inset(0 0 50% 50%)", x: 80, y: -90, r: 35, delay: 0.7 },
                  { clip: "inset(50% 50% 0 0)", x: -90, y: 90, r: -25, delay: 1.4 },
                  { clip: "inset(50% 0 0 50%)", x: 90, y: 90, r: 25, delay: 2.1 },
                ].map((p, i) => (
                  <motion.img
                    key={i}
                    src={eggImg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                    style={{ clipPath: p.clip, WebkitClipPath: p.clip }}
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    animate={{
                      x: [0, 0, p.x],
                      y: [0, -6, p.y],
                      rotate: [0, 0, p.r],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 1.1,
                      delay: p.delay,
                      times: [0, 0.3, 1],
                      ease: "easeIn",
                    }}
                  />
                ))}
              </div>
              <p className="text-white/80 text-lg">
                Um pedaço de cada vez... que surpresa vem dentro?
              </p>
            </motion.div>
          )}

          {phase === "open" && (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                Apareceu! Quem será?
              </h2>
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <motion.img
                  src={hatchImg}
                  initial={{ scale: 0.4, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, type: "spring", bounce: 0.4 }}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  alt="Nascendo"
                />
                <motion.div
                  className="absolute inset-0 bg-yellow-200/40 blur-3xl rounded-full"
                  animate={{ scale: [1, 1.6, 1.2], opacity: [0, 0.9, 0.4] }}
                  transition={{ duration: 1.6 }}
                />
              </div>
            </motion.div>
          )}

          {phase === "bubble" && (
            <motion.div
              key="bubble"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                Toque na bolha para estourar! 👆
              </h2>
              <p className="text-white/80 text-lg">
                {poppedTaps === 0 && "Toca 3 vezes pra libertar o mascote!"}
                {poppedTaps === 1 && "Mais 2 vezes!"}
                {poppedTaps === 2 && "Última! Toca de novo!"}
                {poppedTaps >= 3 && "Boooom! 🎉"}
              </p>
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Mascote dentro da bolha */}
                <motion.img
                  src={babyImg}
                  alt="Mascote dentro da bolha"
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain drop-shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* A bolha — clicável */}
                {!bubbleBurst && (
                  <motion.button
                    type="button"
                    aria-label="Estourar bolha"
                    onClick={() => {
                      playPopSound();
                      const next = poppedTaps + 1;
                      setPoppedTaps(next);
                      if (next >= 3) {
                        setBubbleBurst(true);
                        setTimeout(() => setPhase("reveal"), 700);
                      }
                    }}
                    className="absolute inset-0 rounded-full cursor-pointer focus:outline-none"
                    animate={{
                      scale: poppedTaps === 0 ? [1, 1.04, 1] : [1, 1.08, 0.96, 1],
                    }}
                    transition={{ duration: poppedTaps === 0 ? 2.4 : 0.35, repeat: poppedTaps === 0 ? Infinity : 0 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      background:
                        "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, rgba(180,220,255,0.08) 60%, rgba(180,220,255,0.25) 100%)",
                      boxShadow:
                        "inset 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(180,220,255,0.4)",
                      border: "2px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    {/* Reflexo no topo da bolha */}
                    <span
                      className="absolute top-[12%] left-[20%] w-[28%] h-[18%] rounded-full bg-white/70 blur-md"
                      aria-hidden
                    />
                    <span
                      className="absolute top-[22%] left-[60%] w-[10%] h-[10%] rounded-full bg-white/80 blur-sm"
                      aria-hidden
                    />
                  </motion.button>
                )}

                {/* Partículas de pop quando estoura */}
                {bubbleBurst && (
                  <>
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i / 12) * Math.PI * 2;
                      const dist = 140;
                      return (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white"
                          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                          animate={{
                            x: Math.cos(angle) * dist,
                            y: Math.sin(angle) * dist,
                            opacity: 0,
                            scale: 0.3,
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </motion.div>
          )}


          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-sun/30 backdrop-blur px-4 py-1.5 rounded-full text-white font-black uppercase tracking-widest text-xs">
                <Sparkles size={14} /> Bem-vindo ao mundo!
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                Olá, {childName}!
              </h2>
              <p className="text-white/90 text-lg max-w-md mx-auto font-bold">
                Eu sou {mascot === "pip" ? "o Pip" : "a Pipa"} e vou te ajudar nessa aventura. Vamos
                crescer juntos!
              </p>
              <p className="text-white/70 text-sm max-w-sm mx-auto">
                {speechSupported
                  ? "Vou falar seu nome com carinho em voz alta."
                  : "Se o som não aparecer, pode ler a mensagem comigo."}
              </p>
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  initial={{ opacity: 0.85, scale: 0.95 }}
                  animate={{ opacity: [0.85, 1, 0.85], y: [0, -8, 0], scale: [0.96, 1, 0.96] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-white/10"
                />
                <motion.img
                  src={babyImg}
                  alt="Mascote bebê"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -14, 0],
                    rotate: [-2, 2, -2, 2, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <svg
                  viewBox="0 0 220 220"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <motion.circle
                    cx="30"
                    cy="40"
                    r="6"
                    className="fill-sky-300"
                    animate={{ x: [0, -6, 0], y: [0, 8, 0], opacity: [0.8, 1, 0.2] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  />
                  <motion.circle
                    cx="190"
                    cy="32"
                    r="5"
                    className="fill-pink-300"
                    animate={{ x: [0, 6, 0], y: [0, 10, 0], opacity: [0.8, 1, 0.2] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.rect
                    x="95"
                    y="16"
                    width="8"
                    height="8"
                    rx="2"
                    className="fill-amber-300"
                    animate={{ x: [0, -4, 0], y: [0, 10, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                  />
                  <motion.rect
                    x="50"
                    y="180"
                    width="6"
                    height="6"
                    rx="2"
                    className="fill-emerald-300"
                    animate={{ x: [0, 3, 0], y: [0, 8, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
                  />
                  {/* bochechas e sorriso removidos — bolha sem rosto */}

                  <motion.g
                    animate={{ rotate: [0, -8, 0, -8, 0], y: [0, -2, 0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "20%", originY: "60%" }}
                  >
                    <path
                      d="M20 140 C40 120 60 110 80 118"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: [0, 8, 0, 8, 0], y: [0, -2, 0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ originX: "80%", originY: "60%" }}
                  >
                    <path
                      d="M200 140 C180 120 160 110 140 118"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </motion.g>

                  <motion.g
                    animate={{ scaleY: [1, 0.25, 1], y: [0, -2, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }}
                    style={{ originX: "31%", originY: "30%" }}
                  >
                    <circle cx="70" cy="65" r="14" fill="#fff" />
                    <motion.circle
                      cx="70"
                      cy="65"
                      r="6"
                      fill="#0f172a"
                      animate={{ x: [0, 1.5, 0], y: [0, 0.5, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.g>
                  <motion.g
                    animate={{ scaleY: [1, 0.25, 1], y: [0, -2, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2,
                      delay: 0.25,
                    }}
                    style={{ originX: "69%", originY: "30%" }}
                  >
                    <circle cx="150" cy="65" r="14" fill="#fff" />
                    <motion.circle
                      cx="150"
                      cy="65"
                      r="6"
                      fill="#0f172a"
                      animate={{ x: [0, -1.5, 0], y: [0, 0.5, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    />
                  </motion.g>
                </svg>
              </div>
              <p className="text-white/90 text-lg max-w-md mx-auto">
                Brinque, aprenda e ganhe Moedas Brilha 💰 para me ver crescer ainda mais!
              </p>
              <KidButton variant="primary" onClick={finish} className="px-10 py-5 text-lg">
                Vamos brincar! 🚀
              </KidButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function shouldShowEggHatch(childId: string | null | undefined): boolean {
  if (!childId) return false;
  try {
    return localStorage.getItem(STORAGE_KEY(childId)) !== "1";
  } catch {
    return false;
  }
}

export function getStarterMascot(childId: string | null | undefined): MascotChoice | null {
  if (!childId) return null;
  try {
    const v = localStorage.getItem(`neurobrilha:starterMascot:${childId}`);
    return v === "pip" || v === "pipa" ? v : null;
  } catch {
    return null;
  }
}
