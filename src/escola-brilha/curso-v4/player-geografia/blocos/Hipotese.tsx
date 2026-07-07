import { useState } from "react";
import type { HipoteseData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { HelpCircle, Check, X } from "lucide-react";

/**
 * A criança PALPITA antes de saber. Depois de escolher, o pin certo
 * acende, o errado desmancha e a explicação aparece.
 */
export function Hipotese({ data, indice }: { data: HipoteseData; indice: number }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const respondeu = escolha !== null;
  const acertou = escolha === data.correta;

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <HelpCircle className="w-5 h-5 text-emerald-300" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            Hipótese {indice}
          </div>
          <div className="text-white text-sm font-bold truncate">{data.pergunta}</div>
        </div>
      </div>

      <div className="relative aspect-[16/9] bg-black">
        <FotoLugar
          imagemUrl={data.imagemUrl}
          corPlaceholder={data.corPlaceholder}
          emoji="🌍"
          nome="Cena"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="grid gap-2">
          {data.hipoteses.map((h, i) => {
            const isCerta = i === data.correta;
            const isEscolha = i === escolha;
            let cls = "bg-white/5 border-white/15 text-white hover:bg-white/10";
            if (respondeu) {
              if (isCerta) cls = "bg-emerald-500/25 border-emerald-300 text-white";
              else if (isEscolha) cls = "bg-rose-500/20 border-rose-300/70 text-white opacity-70";
              else cls = "bg-white/5 border-white/10 text-white/40";
            }
            return (
              <button
                key={i}
                disabled={respondeu}
                onClick={() => setEscolha(i)}
                className={`flex items-center gap-3 text-left px-4 py-3 rounded-2xl border-2 text-sm font-bold transition ${cls}`}
              >
                <span className="w-7 h-7 rounded-full grid place-items-center bg-black/40 text-xs font-black shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{h}</span>
                {respondeu && isCerta && <Check className="w-5 h-5 text-emerald-300 shrink-0" />}
                {respondeu && isEscolha && !isCerta && (
                  <X className="w-5 h-5 text-rose-300 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {respondeu && (
          <div
            className={`rounded-2xl border-2 p-4 ${
              acertou
                ? "bg-emerald-500/15 border-emerald-400/50"
                : "bg-amber-500/15 border-amber-300/50"
            }`}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-emerald-200">
              {acertou ? "🎯 Boa observação!" : "🤔 Quase — repara comigo:"}
            </div>
            <p className="text-white text-sm leading-relaxed">{data.explicacao}</p>
          </div>
        )}
      </div>
    </div>
  );
}
