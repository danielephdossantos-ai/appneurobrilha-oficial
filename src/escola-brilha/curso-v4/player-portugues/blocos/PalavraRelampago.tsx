import { useEffect, useRef, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { EnsinoVisualBloco } from "../../types";

/**
 * Fase 9 — PALAVRAS TEIMOSAS (reconhecimento lexical direto).
 *
 * Palavras de alta frequência que NÃO obedecem à decodificação
 * (é, as, os, um, muito, hoje, aqui…) precisam ser reconhecidas
 * inteiras, num relance. A palavra pisca por poucos segundos, some,
 * e a criança escolhe qual era entre parecidas.
 *
 * Não é pegadinha: o app fala a palavra antes, mostra de novo no fim
 * e explica dentro de uma frase de verdade.
 */
type Bloco = Extract<EnsinoVisualBloco, { tipo: "palavraRelampago" }>;

export function PalavraRelampago({ bloco }: { bloco: Bloco }) {
  const segundos = bloco.segundos ?? 2;
  const [i, setI] = useState(0);
  const [fase, setFase] = useState<"pronta" | "mostrando" | "escolher" | "feito">(
    "pronta",
  );
  const [escolha, setEscolha] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = bloco.palavras[i];

  const alternativas = useRef<string[]>([]);
  if (alternativas.current.length === 0 && item) {
    alternativas.current = embaralhar([item.palavra, ...item.distratores]);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      stopSpeaking();
    };
  }, []);

  if (!item) return null;

  const mostrar = () => {
    setEscolha(null);
    setFase("mostrando");
    stopSpeaking();
    speakChunked(`Olhe rápido: ${item.palavra}.`, { rate: 0.72 }).catch(() => {});
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFase("escolher"), segundos * 1000);
  };

  const responder = (op: string) => {
    if (escolha) return;
    setEscolha(op);
    const certo = op === item.palavra;
    stopSpeaking();
    speakChunked(
      certo
        ? `Isso! A palavra é ${item.palavra}.${item.frase ? ` ${item.frase}` : ""}`
        : `Era ${item.palavra}. Olhe de novo: ${item.palavra}.`,
      { rate: 0.7 },
    ).catch(() => {});
    setFase("feito");
  };

  const proxima = () => {
    if (i + 1 >= bloco.palavras.length) {
      setI(0);
    } else {
      setI(i + 1);
    }
    alternativas.current = [];
    setEscolha(null);
    setFase("pronta");
  };

  const certo = escolha === item.palavra;

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-indigo-500/10 border border-indigo-300/30 p-3 text-sm text-indigo-100">
        ⚡ <b>Palavras teimosas</b> não dá pra montar juntando os sons: a gente
        aprende de olhar. Ela vai piscar na tela e sumir — depois você diz qual era.
      </div>

      {/* Palco */}
      <div className="grid min-h-[9rem] place-items-center rounded-3xl bg-white/95 p-6 shadow-lg">
        {fase === "pronta" && (
          <button
            type="button"
            onClick={mostrar}
            className="h-14 px-7 rounded-2xl bg-indigo-500 text-white font-black text-lg active:scale-95"
          >
            👀 Ver de relance
          </button>
        )}
        {fase === "mostrando" && (
          <span className="text-5xl md:text-6xl font-black tracking-widest text-[#2b1258] animate-pulse">
            {item.palavra.toUpperCase()}
          </span>
        )}
        {fase === "escolher" && (
          <span className="text-2xl font-black text-[#2b1258]/40">Qual era?</span>
        )}
        {fase === "feito" && (
          <div className="text-center">
            <span className="block text-5xl font-black tracking-widest text-[#2b1258]">
              {item.palavra.toUpperCase()}
            </span>
            {item.frase && (
              <span className="mt-2 block text-base font-bold text-[#2b1258]/70">
                {item.frase}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Alternativas */}
      {(fase === "escolher" || fase === "feito") && (
        <div className="flex flex-col gap-2">
          {alternativas.current.map((op) => {
            const eEsta = escolha === op;
            const eCerta = op === item.palavra;
            const revelar = fase === "feito";
            return (
              <button
                key={op}
                type="button"
                onClick={() => responder(op)}
                disabled={fase === "feito"}
                className={`h-14 rounded-2xl border-2 text-xl font-black tracking-wide transition active:scale-95 ${
                  revelar && eCerta
                    ? "bg-emerald-400 text-[#0b1020] border-emerald-200"
                    : revelar && eEsta
                      ? "bg-rose-500/80 text-white border-rose-300"
                      : "bg-white/90 text-[#2b1258] border-white"
                }`}
              >
                {op.toUpperCase()}
              </button>
            );
          })}
        </div>
      )}

      {fase === "feito" && (
        <div
          className={`rounded-2xl border-2 p-3 text-sm font-bold ${
            certo
              ? "bg-emerald-500/15 border-emerald-400/60 text-emerald-100"
              : "bg-amber-500/15 border-amber-400/60 text-amber-100"
          }`}
        >
          {certo
            ? `Boa! Você reconheceu ${item.palavra.toUpperCase()} num relance — é assim que o leitor rápido faz.`
            : `Quase! A palavra era ${item.palavra.toUpperCase()}. Guarde o desenho dela inteiro: ela vai aparecer muitas vezes nos textos.`}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-widest text-white/60">
          Palavra {i + 1} de {bloco.palavras.length}
        </span>
        {fase === "feito" && (
          <button
            type="button"
            onClick={proxima}
            className="h-11 px-5 rounded-2xl bg-amber-400 text-[#2b1258] font-black active:scale-95"
          >
            {i + 1 >= bloco.palavras.length ? "🔁 Recomeçar" : "Próxima →"}
          </button>
        )}
      </div>
    </div>
  );
}

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
