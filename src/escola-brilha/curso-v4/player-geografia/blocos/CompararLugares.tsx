import { useState } from "react";
import type { CompararLugaresData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { Scale, Check, X } from "lucide-react";

/**
 * Duas fotos lado a lado. Toca na que responde a pergunta.
 * A errada esmaece, a certa ganha borda verde e a explicação aparece.
 */
export function CompararLugares({
  data,
  indice,
}: {
  data: CompararLugaresData;
  indice: number;
}) {
  const [escolha, setEscolha] = useState<"a" | "b" | null>(null);
  const respondeu = escolha !== null;
  const acertou = escolha === data.correta;

  const foto = (chave: "a" | "b") => {
    const lado = chave === "a" ? data.a : data.b;
    const isEscolha = escolha === chave;
    const isCerta = data.correta === chave;
    let borda = "border-white/20";
    let overlay = "";
    if (respondeu) {
      if (isCerta) borda = "border-emerald-300";
      else if (isEscolha) borda = "border-rose-400";
      else {
        borda = "border-white/10";
        overlay = "opacity-40";
      }
    }
    return (
      <button
        key={chave}
        disabled={respondeu}
        onClick={() => setEscolha(chave)}
        className={`group relative rounded-2xl overflow-hidden border-4 ${borda} transition ${overlay}`}
      >
        <div className="relative aspect-[4/5] bg-black">
          <FotoLugar
            imagemUrl={lado.imagemUrl}
            corPlaceholder={lado.corPlaceholder}
            emoji={lado.emoji}
            nome={lado.nome}
          />
          {respondeu && isCerta && (
            <div className="absolute inset-0 bg-emerald-500/15 grid place-items-center">
              <Check className="w-16 h-16 text-emerald-300 drop-shadow-lg" />
            </div>
          )}
          {respondeu && isEscolha && !isCerta && (
            <div className="absolute inset-0 bg-rose-500/15 grid place-items-center">
              <X className="w-16 h-16 text-rose-300 drop-shadow-lg" />
            </div>
          )}
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-black/70 px-3 py-2 text-white text-sm font-bold text-left flex items-center gap-2">
          <span className="text-xl">{lado.emoji}</span>
          {lado.nome}
        </div>
      </button>
    );
  };

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Scale className="w-5 h-5 text-emerald-300" />
        <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
          Comparação {indice}
        </div>
      </div>
      <p className="text-white text-base font-bold mb-4">{data.pergunta}</p>

      <div className="grid grid-cols-2 gap-3">
        {foto("a")}
        {foto("b")}
      </div>

      {respondeu && (
        <div
          className={`mt-4 rounded-2xl border-2 p-4 ${
            acertou
              ? "bg-emerald-500/15 border-emerald-400/50"
              : "bg-amber-500/15 border-amber-300/50"
          }`}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-emerald-200">
            {acertou ? "🎯 Certeiro!" : "🤔 Repara comigo:"}
          </div>
          <p className="text-white text-sm leading-relaxed">{data.explicacao}</p>
        </div>
      )}
    </div>
  );
}
