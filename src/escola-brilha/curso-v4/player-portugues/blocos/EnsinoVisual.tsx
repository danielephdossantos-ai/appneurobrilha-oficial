import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { EnsinoVisualBloco } from "../../types";
import { ConscienciaFonemica } from "./ConscienciaFonemica";

/**
 * Bloco de ENSINO VISUAL de Português — o equivalente ao "eu faço"
 * visual da Matemática. Ensina de verdade o pré-requisito antes de
 * cobrar. Todo elemento fala em voz alta quando tocado (TTS).
 *
 * Modos implementados nesta etapa:
 *   - maiusculaMinuscula → mostra os pares A/a, B/b… lado a lado
 *   - fraseComPonto      → mostra frase com a 1ª letra MAIÚSCULA em
 *                          verde e o ponto/interrogação/exclamação em
 *                          vermelho, com animação e áudio.
 */
export function EnsinoVisual({ bloco }: { bloco: EnsinoVisualBloco }) {
  if (bloco.tipo === "maiusculaMinuscula") return <MaiusculaMinuscula bloco={bloco} />;
  if (bloco.tipo === "fraseComPonto") return <FraseComPonto bloco={bloco} />;
  if (bloco.tipo === "alfabetoCompleto") return <AlfabetoCompleto bloco={bloco} />;
  return <ConscienciaFonemica bloco={bloco} />;
}

// ---------- Alfabeto completo (26 letras clicáveis) ------------------

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const EXEMPLOS_PADRAO: Record<string, string> = {
  A: "ABELHA", B: "BOLA", C: "CASA", D: "DADO", E: "ESCOLA",
  F: "FLOR", G: "GATO", H: "HIENA", I: "IGREJA", J: "JACARÉ",
  K: "KIWI", L: "LIVRO", M: "MÃO", N: "NARIZ", O: "OVO",
  P: "PATO", Q: "QUEIJO", R: "RATO", S: "SOL", T: "TATU",
  U: "UVA", V: "VACA", W: "WAFFLE", X: "XÍCARA", Y: "IOGURTE", Z: "ZEBRA",
};

function AlfabetoCompleto({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "alfabetoCompleto" }>;
}) {
  const [ativo, setAtivo] = useState<string | null>(null);

  const falar = (letra: string) => {
    stopSpeaking();
    setAtivo(letra);
    const nome = nomeDaLetra(letra);
    const exemplo = bloco.exemplos?.[letra] ?? EXEMPLOS_PADRAO[letra];
    const texto = exemplo
      ? `${nome}. ${nome} de ${exemplo}.`
      : `${nome}.`;
    speakChunked(texto);
    setTimeout(() => setAtivo(null), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-amber-500/10 border border-amber-300/30 p-3 text-sm text-amber-100">
        🔤 <b>Toque em cada letra</b> pra ouvir o nome dela. O alfabeto tem <b>26 letras</b> na
        ordem: <b>A → Z</b>. Essa ordem NUNCA muda.
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
        {ALFABETO.map((L) => {
          const isAtivo = ativo === L;
          const exemplo = bloco.exemplos?.[L] ?? EXEMPLOS_PADRAO[L];
          return (
            <button
              key={L}
              onClick={() => falar(L)}
              className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition transform ${
                isAtivo
                  ? "scale-110 border-amber-300 bg-amber-400/30 shadow-lg shadow-amber-400/40"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }`}
              title={exemplo ? `${L} de ${exemplo}` : L}
            >
              <div className="text-2xl md:text-3xl font-black text-emerald-300 leading-none">
                {L}
              </div>
              <div className="text-lg md:text-xl font-black text-sky-300 leading-none mt-0.5">
                {L.toLowerCase()}
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-3 text-xs text-emerald-100">
        💡 Cada letra tem 2 desenhos: a <b className="text-emerald-300">MAIÚSCULA</b> (letra
        grande) e a <b className="text-sky-300">minúscula</b> (letra pequena). São a MESMA letra.
      </div>
    </div>
  );
}


// ---------- Maiúscula × Minúscula ------------------------------------

function MaiusculaMinuscula({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "maiusculaMinuscula" }>;
}) {
  const [ativo, setAtivo] = useState<number | null>(null);

  const falarPar = (idx: number, maiuscula: string, minuscula: string, exemplo?: string) => {
    stopSpeaking();
    setAtivo(idx);
    let texto: string;
    if (exemplo) {
      // "ANA / amor" → "ANA é maiúscula, amor é minúscula."
      const partes = exemplo.split("/").map((s) => s.trim()).filter(Boolean);
      if (partes.length >= 2) {
        texto = `${partes[0]} é maiúscula. ${partes[1]} é minúscula.`;
      } else {
        texto = `${exemplo}.`;
      }
    } else {
      const nome = nomeDaLetra(maiuscula);
      texto = `${nome} maiúscula, ${nome} minúscula.`;
    }
    void minuscula;
    speakChunked(texto);
    setTimeout(() => setAtivo(null), 2500);
  };

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-amber-500/10 border border-amber-300/30 p-3 text-sm text-amber-100">
        👆 <b>Toque em cada par</b> para ouvir. A letra <span className="text-amber-300 font-black">MAIÚSCULA</span> é a
        "letra grande". A letra <span className="text-amber-300 font-black">minúscula</span> é a "letra pequena". Elas
        são a MESMA letra, só desenhadas diferentes.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {bloco.pares.map((par, i) => {
          const isAtivo = ativo === i;
          return (
            <button
              key={i}
              onClick={() => falarPar(i, par.maiuscula, par.minuscula, par.exemplo)}
              className={`rounded-2xl border-2 p-3 text-center transition transform ${
                isAtivo
                  ? "scale-105 border-amber-300 bg-amber-400/30 shadow-lg shadow-amber-400/30"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex items-baseline justify-center gap-2 leading-none">
                <span className="text-5xl font-black text-emerald-300">
                  {par.maiuscula}
                </span>
                <span className="text-sm text-white/60">·</span>
                <span className="text-5xl font-black text-sky-300">
                  {par.minuscula.toLowerCase()}
                </span>
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
                Maiúscula · minúscula
              </div>
              {par.exemplo && (
                <div className="mt-1 text-xs text-white/85">
                  Ex: <span className="font-bold text-amber-200">{par.exemplo}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-3 text-xs text-emerald-100">
        💡 <b>Quando usar MAIÚSCULA?</b> No <b>começo</b> da frase e em <b>nomes de pessoa, lugar ou bicho de estimação</b>
        (Ana · Brasil · Rex). Nas outras palavras, usamos minúscula.
      </div>
    </div>
  );
}

// nome falado da letra em português
function nomeDaLetra(letra: string): string {
  const l = letra.toUpperCase();
  const nomes: Record<string, string> = {
    A: "á", B: "bê", C: "cê", D: "dê", E: "é", F: "éfe", G: "gê", H: "agá",
    I: "i", J: "jota", K: "cá", L: "éle", M: "ême", N: "êne", O: "ó",
    P: "pê", Q: "quê", R: "érre", S: "ésse", T: "tê", U: "u", V: "vê",
    W: "dábliu", X: "xis", Y: "ípsilon", Z: "zê",
  };
  return nomes[l] ?? l;
}

// ---------- Frase com Ponto (e maiúscula inicial) --------------------

function FraseComPonto({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "fraseComPonto" }>;
}) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-amber-500/10 border border-amber-300/30 p-3 text-sm text-amber-100">
        👀 Toda frase tem <span className="text-emerald-300 font-black">🟢 letra MAIÚSCULA no começo</span> e{" "}
        <span className="text-red-300 font-black">🔴 pontuação no fim</span> (
        <span className="font-mono">.</span> ponto ·{" "}
        <span className="font-mono">?</span> pergunta ·{" "}
        <span className="font-mono">!</span> emoção).
      </div>

      <div className="space-y-3">
        {bloco.frases.map((f, i) => (
          <FraseItem key={i} texto={f.texto} explicacao={f.explicacao} />
        ))}
      </div>
    </div>
  );
}

function FraseItem({ texto, explicacao }: { texto: string; explicacao?: string }) {
  const [tocando, setTocando] = useState(false);

  const falar = () => {
    stopSpeaking();
    setTocando(true);
    speakChunked(texto);
    setTimeout(() => setTocando(false), Math.min(6000, texto.length * 90));
  };

  // pega 1ª letra alfabética (pode ter "  A menina")
  const idxPrimeiraLetra = texto.search(/\p{L}/u);
  const idxPontuacaoFinal = texto.search(/[.!?]\s*$/);

  const antes = idxPrimeiraLetra > 0 ? texto.slice(0, idxPrimeiraLetra) : "";
  const primeira = idxPrimeiraLetra >= 0 ? texto[idxPrimeiraLetra] : "";
  const meioFim = idxPrimeiraLetra >= 0 ? texto.slice(idxPrimeiraLetra + 1) : texto;

  // separa pontuação final do meio
  const meio =
    idxPontuacaoFinal >= 0 && idxPontuacaoFinal > idxPrimeiraLetra
      ? texto.slice(idxPrimeiraLetra + 1, idxPontuacaoFinal)
      : meioFim;
  const pontuacao = idxPontuacaoFinal >= 0 ? texto.slice(idxPontuacaoFinal).trim() : "";

  return (
    <div
      className={`rounded-2xl border-2 p-4 transition ${
        tocando
          ? "border-amber-300 bg-amber-400/10 shadow-lg shadow-amber-400/20"
          : "border-white/15 bg-white/5"
      }`}
    >
      <div className="text-2xl md:text-3xl font-black leading-relaxed break-words">
        <span className="text-white/50">{antes}</span>
        {primeira && (
          <span className="relative inline-block">
            <span className="text-emerald-300 underline decoration-emerald-400/60 decoration-4 underline-offset-4">
              {primeira.toUpperCase()}
            </span>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-emerald-300 whitespace-nowrap">
              🟢 maiúscula
            </span>
          </span>
        )}
        <span className="text-white">{meio}</span>
        {pontuacao && (
          <span className="relative inline-block ml-1">
            <span className="text-red-400">{pontuacao}</span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-red-300 whitespace-nowrap">
              🔴 fim
            </span>
          </span>
        )}
      </div>

      {explicacao && (
        <div className="mt-6 text-xs text-white/80 italic">{explicacao}</div>
      )}

      <div className="mt-4 flex justify-end">
        <button
          onClick={falar}
          className="px-4 py-2 rounded-full bg-amber-400 text-[#1a0d3d] font-bold text-sm hover:bg-amber-300"
        >
          🔊 Ouvir a frase
        </button>
      </div>
    </div>
  );
}
