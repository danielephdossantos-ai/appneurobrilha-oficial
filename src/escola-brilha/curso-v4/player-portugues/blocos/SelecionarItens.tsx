import { useState } from "react";
import type { SelecionarItensData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";

/**
 * Minijogo "Selecionar apenas os itens pedidos".
 * A criança marca/desmarca cartões. Botão "conferir" avalia.
 */
export function SelecionarItens({ data }: { data: SelecionarItensData }) {
  const [marcados, setMarcados] = useState<Set<string>>(new Set());
  const [conferiu, setConferiu] = useState(false);

  const toggle = (id: string) => {
    setMarcados((prev) => {
      const cp = new Set(prev);
      if (cp.has(id)) cp.delete(id);
      else cp.add(id);
      return cp;
    });
    setConferiu(false);
  };

  const corretos = data.opcoes.filter((o) => o.correto);
  const acertosMarcados = corretos.filter((o) => marcados.has(o.id)).length;
  const errosMarcados = data.opcoes.filter((o) => !o.correto && marcados.has(o.id)).length;
  const acertouTudo =
    conferiu && acertosMarcados === corretos.length && errosMarcados === 0;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
      <div className="text-sm font-bold text-white">🛒 {data.instrucao}</div>
      <div className="text-base text-white">{data.pergunta}</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {data.opcoes.map((o) => {
          const marcado = marcados.has(o.id);
          const cor = conferiu
            ? marcado && o.correto
              ? "bg-emerald-500/50 border-emerald-300"
              : marcado && !o.correto
                ? "bg-rose-500/50 border-rose-300"
                : !marcado && o.correto
                  ? "bg-amber-500/25 border-amber-300"
                  : "bg-white/5 border-white/10"
            : marcado
              ? "bg-amber-400/30 border-amber-300"
              : "bg-white/10 border-white/10 hover:bg-white/15";
          return (
            <button
              key={o.id}
              onClick={() => toggle(o.id)}
              className={`text-left rounded-xl p-3 border-2 transition flex flex-col items-center gap-2 ${cor}`}
            >
              {o.imagemUrl && (
                <img src={o.imagemUrl} alt="" className="w-14 h-14 object-contain" />
              )}
              <span className="text-xs text-white font-medium text-center">
                {o.texto}
              </span>
              <span
                className={`text-[10px] font-bold ${
                  marcado ? "text-amber-200" : "text-white/40"
                }`}
              >
                {marcado ? "✓ marcado" : "toque pra marcar"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center pt-1">
        <button
          onClick={() => setConferiu(true)}
          disabled={marcados.size === 0}
          className="px-5 py-2 rounded-full bg-amber-400 text-[#1a0d3d] font-bold text-sm hover:bg-amber-300 disabled:opacity-40"
        >
          ✓ Conferir seleção
        </button>
      </div>

      {conferiu && (
        <div
          className={`text-sm p-3 rounded-xl ${
            acertouTudo
              ? "bg-emerald-500/20 text-emerald-100"
              : "bg-amber-500/20 text-amber-100"
          }`}
        >
          <div className="font-bold mb-1">
            Você marcou {acertosMarcados}/{corretos.length} certos
            {errosMarcados > 0 ? ` e ${errosMarcados} errado(s)` : ""}.
          </div>
          {acertouTudo ? data.feedbackAcerto : data.feedbackErro}
        </div>
      )}
    </div>
  );
}
