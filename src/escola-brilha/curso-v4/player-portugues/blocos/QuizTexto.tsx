import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { QuizTextoData } from "../../types";

/**
 * Quiz VISUAL — não é mais questionário de texto.
 * Cada opção vira um BOTÃO REDONDO GIGANTE que a criança toca.
 * O professor lê a pergunta em voz alta, a criança escuta a opção
 * quando toca. Feedback visual grande, celebração no acerto.
 *
 * Mesma estrutura de dados de antes (pergunta / opcoes / correta),
 * então TODOS os quizzes do curso viram jogo automaticamente.
 */

// Cores rotativas para as bolinhas — vivas mas legíveis.
const CORES = [
  { bg: "from-rose-400 to-pink-500", ring: "ring-rose-200" },
  { bg: "from-sky-400 to-blue-500", ring: "ring-sky-200" },
  { bg: "from-emerald-400 to-green-500", ring: "ring-emerald-200" },
  { bg: "from-amber-400 to-orange-500", ring: "ring-amber-200" },
];

// Cores rotativas para as sílabas — cada palma acende de uma cor.
const CORES_SILABA = [
  "from-rose-400 to-pink-500",
  "from-sky-400 to-blue-500",
  "from-emerald-400 to-green-500",
  "from-amber-400 to-orange-500",
  "from-violet-400 to-purple-500",
];

function SilabasParaTocar({ silabas }: { silabas: string[] }) {
  const [acesas, setAcesas] = useState<boolean[]>(() => silabas.map(() => false));

  function tocarSilaba(i: number) {
    setAcesas((prev) => {
      const nova = [...prev];
      nova[i] = !nova[i];
      return nova;
    });
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try { navigator.vibrate?.(30); } catch { /* ignore */ }
    }
  }

  function resetar() {
    setAcesas(silabas.map(() => false));
  }

  const contadas = acesas.filter(Boolean).length;

  return (
    <div className="mb-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-3 border-2 border-indigo-200">
      <div className="text-xs sm:text-sm font-bold text-indigo-700 mb-2 text-center">
        👏 Toque em cada pedaço pra acender
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {silabas.map((s, i) => {
          const cor = CORES_SILABA[i % CORES_SILABA.length];
          const on = acesas[i];
          return (
            <button
              key={i}
              type="button"
              onClick={() => tocarSilaba(i)}
              className={`min-w-16 h-16 sm:min-w-20 sm:h-20 px-3 rounded-2xl font-black text-2xl sm:text-3xl shadow-md transition-all duration-200 active:scale-95 ${
                on
                  ? `bg-gradient-to-br ${cor} text-white scale-110 ring-4 ring-white`
                  : "bg-white text-slate-300 border-2 border-dashed border-slate-300"
              }`}
              aria-pressed={on}
            >
              {s}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="text-lg font-black text-indigo-800">
          👏 {contadas}
        </div>
        {contadas > 0 && (
          <button
            type="button"
            onClick={resetar}
            className="text-xs font-bold text-indigo-600 underline"
          >
            apagar
          </button>
        )}
      </div>
    </div>
  );
}


export function QuizTexto({ quiz }: { quiz: QuizTextoData }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && escolha === quiz.correta;

  function ouvirPergunta() {
    stopSpeaking();
    speakChunked(quiz.pergunta);
  }

  function tocar(i: number) {
    if (escolha !== null) return;
    stopSpeaking();
    // Fala a opção que a criança tocou.
    speakChunked(quiz.opcoes[i]);
    setEscolha(i);
    // Depois, o professor explica o que aconteceu.
    const msg = i === quiz.correta ? quiz.feedbackAcerto : quiz.feedbackErro;
    setTimeout(() => speakChunked(msg), 900);
  }

  function tentarDeNovo() {
    stopSpeaking();
    setEscolha(null);
  }

  // Detecta palavra silabada tipo CA-SA, BA-NA-NA, JA-NE-LA na pergunta,
  // pra virar um "contador de palmas" visual (acende quando toca).
  const silabada = quiz.pergunta.match(/\b([A-ZÁÉÍÓÚÂÊÔÃÕÇ]{1,4}(?:-[A-ZÁÉÍÓÚÂÊÔÃÕÇ]{1,4})+)\b/);
  const silabas = silabada ? silabada[1].split("-") : null;

  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-4 shadow-lg border-2 border-white/60">
      {/* Pergunta com botão de ouvir */}
      <div className="flex items-start gap-3 mb-4">
        <button
          onClick={ouvirPergunta}
          aria-label="Ouvir a pergunta"
          className="shrink-0 w-12 h-12 rounded-full bg-amber-400 text-[#0d1f55] text-2xl font-black grid place-items-center shadow-md active:scale-95"
        >
          🔊
        </button>
        <p className="text-lg sm:text-xl font-black leading-snug flex-1">
          {quiz.pergunta}
        </p>
      </div>

      {silabas && <SilabasParaTocar silabas={silabas} />}


      {/* Bolas de opção — GRANDES pra tocar */}
      <div
        className={`grid gap-3 justify-items-center ${
          quiz.opcoes.length <= 2
            ? "grid-cols-2"
            : quiz.opcoes.length === 3
              ? "grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4"
        }`}
      >
        {quiz.opcoes.map((op, i) => {
          const cor = CORES[i % CORES.length];
          const marcada = escolha === i;
          const certa = i === quiz.correta;
          const revelou = escolha !== null;

          let estado = "";
          if (!revelou) {
            estado = `bg-gradient-to-br ${cor.bg} text-white hover:scale-105 active:scale-95`;
          } else if (marcada && certa) {
            estado = "bg-gradient-to-br from-emerald-400 to-green-600 text-white ring-8 ring-emerald-200 scale-110";
          } else if (marcada && !certa) {
            estado = "bg-gradient-to-br from-rose-400 to-red-600 text-white ring-8 ring-rose-200 animate-pulse";
          } else if (certa) {
            estado = "bg-gradient-to-br from-emerald-400 to-green-600 text-white ring-8 ring-emerald-200";
          } else {
            estado = "bg-slate-200 text-slate-400";
          }

          const curto = op.length <= 8;
          const forma = curto
            ? "w-24 h-24 sm:w-28 sm:h-28 rounded-full"
            : "min-h-24 sm:min-h-28 w-full rounded-[2rem] px-4 py-4";
          const tamanhoTexto = op.length <= 3
            ? "text-4xl sm:text-5xl"
            : curto
              ? "text-xl sm:text-2xl"
              : "text-sm sm:text-base leading-snug";
          return (
            <button
              key={i}
              disabled={revelou}
              onClick={() => tocar(i)}
              className={`relative ${forma} font-black shadow-xl transition-all duration-200 grid place-items-center text-center ${estado}`}
            >
              <span className={tamanhoTexto}>{op}</span>
              {revelou && marcada && certa && (
                <span className="absolute -top-2 -right-2 text-3xl">🎉</span>
              )}
              {revelou && marcada && !certa && (
                <span className="absolute -top-2 -right-2 text-3xl">💭</span>
              )}
              {revelou && !marcada && certa && (
                <span className="absolute -top-2 -right-2 text-2xl">✅</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback do professor */}
      {escolha !== null && (
        <div
          className={`mt-4 p-4 rounded-2xl text-base font-bold leading-snug ${
            acertou
              ? "bg-emerald-100 text-emerald-900 border-2 border-emerald-300"
              : "bg-amber-100 text-amber-900 border-2 border-amber-300"
          }`}
        >
          <div className="flex items-start gap-2">
            <span className="text-2xl">{acertou ? "🌟" : "🤔"}</span>
            <div className="flex-1">
              <div>{acertou ? quiz.feedbackAcerto : quiz.feedbackErro}</div>
              {quiz.ondeEstaNoTexto && (
                <div className="mt-2 text-xs italic text-[#0d1f55]/70">
                  📖 No texto: "{quiz.ondeEstaNoTexto}"
                </div>
              )}
            </div>
          </div>

          {!acertou && (
            <button
              onClick={tentarDeNovo}
              className="mt-3 w-full h-12 rounded-2xl bg-amber-400 text-[#0d1f55] font-black text-lg active:scale-95 shadow"
            >
              🔄 Tentar de novo
            </button>
          )}
        </div>
      )}
    </div>
  );
}
