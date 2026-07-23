import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Sparkles, Hand } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";
import type { AulaDlx, CenaDlx } from "./types";
import { imagemPalavra } from "./word-images";

interface Props {
  aula: AulaDlx;
  onSair: () => void;
  onConcluir: () => void;
}

/**
 * Player da trilha Dislexia · Orton-Gillingham.
 * Skin roxo/laranja (diferencia da Biblioteca Encantada).
 * Prompting ABA: 3 tentativas com dicas escalonadas.
 */
export function PlayerDislexia({ aula, onSair, onConcluir }: Props) {
  const [idx, setIdx] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [estado, setEstado] = useState<"idle" | "acerto" | "erro">("idle");
  const [estrelas, setEstrelas] = useState(0);
  const cena = aula.cenas[idx];
  const total = aula.cenas.length;
  const isUltima = idx === total - 1;

  useEffect(() => {
    setEstado("idle");
    setTentativas(0);
    stopSpeaking();
    const t = window.setTimeout(() => speakChunked(cena.fala), 250);
    return () => {
      window.clearTimeout(t);
      stopSpeaking();
    };
  }, [idx, cena.fala]);

  useEffect(() => () => stopSpeaking(), []);

  function avancar() {
    if (isUltima) return onConcluir();
    setIdx((i) => i + 1);
  }

  function tocarFala(texto?: string) {
    stopSpeaking();
    speakChunked(texto ?? cena.fala);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3A1F5C] via-[#4A2670] to-[#1F1233] text-white flex flex-col">
      <header className="flex items-center gap-3 p-4">
        <button
          onClick={() => {
            stopSpeaking();
            onSair();
          }}
          className="rounded-full bg-white/15 hover:bg-white/25 p-2"
          aria-label="Sair"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 flex items-center gap-1">
          {aula.cenas.map((_, i) => (
            <div
              key={i}
              className={`h-3 flex-1 rounded-full transition-all ${
                i < idx
                  ? "bg-orange-400"
                  : i === idx
                    ? "bg-orange-300 scale-y-125"
                    : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 bg-white/15 rounded-full px-3 py-1">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="font-black text-amber-200">{estrelas}</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl bg-white/10 backdrop-blur border-2 border-white/20 rounded-[2rem] shadow-xl p-6 md:p-8"
          >
            <CenaView
              cena={cena}
              estado={estado}
              tentativas={tentativas}
              onAcerto={() => {
                setEstado("acerto");
                setEstrelas((s) => s + 1);
                stopSpeaking();
                speakChunked("Isso! Muito bem.");
                window.setTimeout(avancar, 1300);
              }}
              onErro={() => {
                const nova = tentativas + 1;
                setTentativas(nova);
                setEstado("erro");
                stopSpeaking();
                if (nova === 1) speakChunked("Quase. Olha de novo.");
                else if (nova === 2) speakChunked("Ouve com atenção.");
                else {
                  speakChunked("Deixa eu te mostrar. É essa aqui.");
                  window.setTimeout(() => {
                    setEstado("acerto");
                    setEstrelas((s) => s + 1);
                    window.setTimeout(avancar, 1000);
                  }, 1500);
                }
                if (nova < 3) window.setTimeout(() => setEstado("idle"), 900);
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
  estado,
  tentativas,
  onAcerto,
  onErro,
  onProximo,
  onFalar,
  isUltima,
}: {
  cena: CenaDlx;
  estado: "idle" | "acerto" | "erro";
  tentativas: number;
  onAcerto: () => void;
  onErro: () => void;
  onProximo: () => void;
  onFalar: (t?: string) => void;
  isUltima: boolean;
}) {
  const opcoes = useMemo(() => {
    if (cena.tipo !== "escolha") return [];
    return [...cena.opcoes].sort(() => Math.random() - 0.5);
  }, [cena]);

  const [silabasTocadas, setSilabasTocadas] = useState<number[]>([]);
  useEffect(() => setSilabasTocadas([]), [cena]);

  if (cena.tipo === "escolha") {
    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => onFalar()}
          className="flex items-center gap-2 bg-orange-400/90 hover:bg-orange-400 text-purple-900 font-black px-4 py-2 rounded-full shadow"
        >
          <Volume2 className="h-4 w-4" /> Ouvir de novo
        </button>

        <div
          className={`grid gap-3 w-full ${
            opcoes.length <= 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {opcoes.map((o, i) => {
            const dica = tentativas >= 1 && o.correta;
            return (
              <motion.button
                key={o.palavra + i}
                whileTap={{ scale: 0.94 }}
                onClick={() => (o.correta ? onAcerto() : onErro())}
                onDoubleClick={() => onFalar(o.palavra)}
                className={`rounded-2xl border-4 bg-white text-purple-900 shadow-lg p-3 flex flex-col items-center justify-center gap-2 min-h-[9rem] transition-all ${
                  estado === "acerto" && o.correta
                    ? "border-emerald-400 ring-4 ring-emerald-200"
                    : dica
                      ? "border-amber-300 ring-4 ring-amber-200 animate-pulse"
                      : estado === "erro"
                        ? "border-rose-200"
                        : "border-white hover:border-orange-300"
                }`}
              >
                {(() => {
                  const src = o.imagem ?? imagemPalavra(o.palavra);
                  return src ? (
                    <img
                      src={src}
                      alt=""
                      className="w-full h-20 object-contain"
                      draggable={false}
                    />
                  ) : null;
                })()}
                <div className="text-2xl font-black tracking-wider">
                  {o.palavra}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  if (cena.tipo === "silabas") {
    const todasTocadas = silabasTocadas.length === cena.silabas.length;
    return (
      <div className="flex flex-col items-center gap-5">
        {cena.imagem ? (
          <img
            src={cena.imagem}
            alt=""
            className="w-40 h-40 object-contain drop-shadow-xl"
            draggable={false}
          />
        ) : null}
        <div className="text-3xl md:text-4xl font-black text-white tracking-widest">
          {cena.palavra}
        </div>
        <p className="text-sm text-orange-200 flex items-center gap-2">
          <Hand className="h-4 w-4" /> Toca em cada pedaço
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {cena.silabas.map((s, i) => {
            const tocada = silabasTocadas.includes(i);
            return (
              <button
                key={i}
                onClick={() => {
                  if (tocada) return;
                  onFalar(s);
                  setSilabasTocadas((prev) => [...prev, i]);
                }}
                className={`px-5 py-4 rounded-2xl font-black text-2xl border-4 transition-all ${
                  tocada
                    ? "bg-emerald-400 text-purple-900 border-emerald-200 scale-105"
                    : "bg-white/90 text-purple-800 border-white hover:bg-white"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <button
          onClick={onProximo}
          disabled={!todasTocadas}
          className="mt-2 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-xl py-4 rounded-2xl shadow-lg hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {todasTocadas
            ? isUltima
              ? "Terminei! 🎉"
              : "Continuar →"
            : `Falta ${cena.silabas.length - silabasTocadas.length}`}
        </button>
      </div>
    );
  }

  // abertura, escuta, reforco, fim
  const imgSrc =
    ("imagem" in cena && cena.imagem) ||
    (cena.tipo === "abertura" || cena.tipo === "reforco" || cena.tipo === "fim"
      ? pipVet
      : undefined);
  const palavra = cena.tipo === "escuta" ? cena.palavra : undefined;
  const enfase = cena.tipo === "escuta" ? cena.enfase : undefined;

  return (
    <div className="flex flex-col items-center gap-5">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt=""
          className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-xl"
          draggable={false}
        />
      ) : null}

      {palavra ? (
        <div className="text-5xl md:text-6xl font-black text-white tracking-widest">
          {enfase && palavra.toUpperCase().includes(enfase.toUpperCase()) ? (
            (() => {
              const upper = palavra.toUpperCase();
              const idx = upper.indexOf(enfase.toUpperCase());
              return (
                <>
                  {palavra.slice(0, idx)}
                  <span className="text-orange-300">
                    {palavra.slice(idx, idx + enfase.length)}
                  </span>
                  {palavra.slice(idx + enfase.length)}
                </>
              );
            })()
          ) : (
            palavra
          )}
        </div>
      ) : null}

      <button
        onClick={() => onFalar()}
        className="flex items-center gap-2 bg-orange-400/90 hover:bg-orange-400 text-purple-900 font-black px-4 py-2 rounded-full shadow"
      >
        <Volume2 className="h-4 w-4" /> Ouvir de novo
      </button>

      <button
        onClick={onProximo}
        className="mt-2 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-xl py-4 rounded-2xl shadow-lg hover:brightness-110"
      >
        {isUltima ? "Terminei! 🎉" : "Continuar →"}
      </button>
    </div>
  );
}
