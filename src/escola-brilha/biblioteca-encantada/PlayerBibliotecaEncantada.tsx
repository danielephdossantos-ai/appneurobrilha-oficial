import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Sparkles } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { AulaBE, CenaBE } from "./types";

interface Props {
  aula: AulaBE;
  onSair: () => void;
  onConcluir: () => void;
}

/**
 * Player standalone da Biblioteca Encantada.
 * Kawaii, personagem centralizado (Pip Veterinária), rotina TEACCH:
 *  - barra de progresso visual (símbolos por cena)
 *  - início → meio → fim
 *  - reforço imediato ABA (estrela + som)
 *  - PECS: toca na figura pra "pedir"
 */
export function PlayerBibliotecaEncantada({ aula, onSair, onConcluir }: Props) {
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState<"idle" | "acerto" | "erro">("idle");
  const [estrelas, setEstrelas] = useState(0);
  const cena = aula.cenas[idx];
  const total = aula.cenas.length;
  const isUltima = idx === total - 1;

  // Fala automática ao entrar em cada cena
  useEffect(() => {
    setOk("idle");
    stopSpeaking();
    const t = window.setTimeout(() => {
      speakChunked(cena.fala);
    }, 250);
    return () => {
      window.clearTimeout(t);
      stopSpeaking();
    };
  }, [idx, cena.fala]);

  useEffect(() => () => stopSpeaking(), []);

  function avancar() {
    if (isUltima) {
      onConcluir();
      return;
    }
    setIdx((i) => i + 1);
  }

  function tocarFala() {
    stopSpeaking();
    speakChunked(cena.fala);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7E9FF] via-[#FFE8F0] to-[#FFF5E6] flex flex-col">
      {/* Topo com progresso TEACCH */}
      <header className="flex items-center gap-3 p-4">
        <button
          onClick={() => {
            stopSpeaking();
            onSair();
          }}
          className="rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
          aria-label="Sair"
        >
          <ArrowLeft className="h-5 w-5 text-purple-700" />
        </button>

        <div className="flex-1 flex items-center gap-1">
          {aula.cenas.map((_, i) => (
            <div
              key={i}
              className={`h-3 flex-1 rounded-full transition-all ${
                i < idx
                  ? "bg-emerald-400"
                  : i === idx
                  ? "bg-purple-500 scale-y-125"
                  : "bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-md">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span className="font-black text-amber-700">{estrelas}</span>
        </div>
      </header>

      {/* Cena */}
      <main className="flex-1 flex items-center justify-center px-4 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-xl bg-white/80 backdrop-blur rounded-[2.5rem] shadow-xl border-4 border-white p-6 md:p-8"
          >
            <CenaView
              cena={cena}
              ok={ok}
              onAcerto={() => {
                setOk("acerto");
                setEstrelas((s) => s + 1);
                stopSpeaking();
                speakChunked("Isso!");
                window.setTimeout(avancar, 1200);
              }}
              onErro={() => {
                setOk("erro");
                stopSpeaking();
                speakChunked("Quase. Tenta de novo.");
                window.setTimeout(() => setOk("idle"), 900);
              }}
              onProximo={avancar}
              onFalar={tocarFala}
              isUltima={isUltima}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function CenaView({
  cena,
  ok,
  onAcerto,
  onErro,
  onProximo,
  onFalar,
  isUltima,
}: {
  cena: CenaBE;
  ok: "idle" | "acerto" | "erro";
  onAcerto: () => void;
  onErro: () => void;
  onProximo: () => void;
  onFalar: () => void;
  isUltima: boolean;
}) {
  const opcoes = useMemo(() => {
    if (cena.tipo !== "pecs") return [];
    const arr = [
      { palavra: cena.palavra, imagem: cena.imagem, correta: true },
      ...cena.distratores.map((d) => ({ ...d, correta: false })),
    ];
    // embaralha só uma vez por cena (idx do useEffect faz remount)
    return arr.sort(() => Math.random() - 0.5);
  }, [cena]);

  if (cena.tipo === "pecs") {
    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={onFalar}
          className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-black px-4 py-2 rounded-full"
        >
          <Volume2 className="h-4 w-4" /> Ouvir de novo
        </button>

        <div className="grid grid-cols-2 gap-4 w-full">
          {opcoes.map((o) => (
            <motion.button
              key={o.palavra}
              whileTap={{ scale: 0.92 }}
              onClick={() => (o.correta ? onAcerto() : onErro())}
              className={`aspect-square rounded-3xl border-4 bg-white shadow-lg overflow-hidden flex items-center justify-center transition-all ${
                ok === "acerto" && o.correta
                  ? "border-emerald-400 ring-4 ring-emerald-200"
                  : ok === "erro"
                  ? "border-rose-200"
                  : "border-white hover:border-purple-300"
              }`}
            >
              <img
                src={o.imagem}
                alt=""
                className="w-full h-full object-contain p-3"
                draggable={false}
              />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Cenas narrativas (abertura, olha, reforco, fim)
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={cena.imagem}
        alt=""
        className="w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-xl"
        draggable={false}
      />

      {"palavra" in cena && cena.palavra ? (
        <div className="text-4xl md:text-5xl font-black text-purple-700 tracking-wide">
          {cena.palavra}
        </div>
      ) : null}

      <button
        onClick={onFalar}
        className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-black px-4 py-2 rounded-full"
      >
        <Volume2 className="h-4 w-4" /> Ouvir de novo
      </button>

      <button
        onClick={onProximo}
        className="mt-2 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-xl py-4 rounded-2xl shadow-lg hover:brightness-110"
      >
        {isUltima ? "Terminei! 🎉" : "Continuar →"}
      </button>
    </div>
  );
}
