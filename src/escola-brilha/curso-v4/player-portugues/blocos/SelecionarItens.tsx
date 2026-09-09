import { useState, useContext } from "react";
import type { SelecionarItensData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";
import { KidsCtx } from "../PlayerPortuguesV4";
import { TeenBlackboard } from "./TeenBlackboard";

/**
 * Minijogo "Selecionar apenas os itens pedidos".
 * A criança marca/desmarca cartões. Botão "conferir" avalia.
 */
export function SelecionarItens({ data }: { data: SelecionarItensData }) {
  const skin = useContext(KidsCtx);
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
    <TeenBlackboard titulo="Filtro de Seleção Lógica">
      <div className={`rounded-2xl p-4 space-y-3 ${skin.teen ? "bg-transparent text-cyan-50" : "bg-white/5 border border-white/10"}`}>
        <div className="flex items-center justify-between gap-2">
          <div className={`text-sm font-bold ${skin.teen ? "text-cyan-100" : "text-white"}`}>🛒 {data.instrucao}</div>
          <BotaoOuvirEnunciado texto={[data.instrucao, data.pergunta]} rotulo="Repetir" auto />
        </div>
        <div className={`text-base font-black ${skin.teen ? "text-cyan-50" : "text-white"}`}>{data.pergunta}</div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {data.opcoes.map((o) => {
          const marcado = marcados.has(o.id);
          const cor = conferiu
            ? marcado && o.correto
              ? skin.teen ? "bg-cyan-950/60 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-emerald-500/50 border-emerald-300"
              : marcado && !o.correto
                ? skin.teen ? "bg-rose-950/60 border-rose-400 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)]" : "bg-rose-500/50 border-rose-300"
                : !marcado && o.correto
                  ? skin.teen ? "bg-cyan-900/20 border-cyan-700/50 text-cyan-300" : "bg-amber-500/25 border-amber-300"
                  : skin.teen ? "bg-slate-900/40 border-slate-800 text-slate-500" : "bg-white/5 border-white/10"
            : marcado
              ? skin.teen ? "bg-cyan-800/40 border-cyan-400 text-cyan-100" : "bg-amber-400/30 border-amber-300"
              : skin.teen ? "bg-slate-800/50 border-cyan-900/30 text-cyan-100/60 hover:bg-slate-700" : "bg-white/10 border-white/10 hover:bg-white/15";
          return (
            <button
              key={o.id}
              onClick={() => toggle(o.id)}
              className={`text-left rounded-xl p-3 border-2 transition flex flex-col items-center gap-2 ${cor}`}
            >
              {o.imagemUrl && (
                <img src={o.imagemUrl} alt="" className={`w-14 h-14 object-contain ${skin.teen ? "brightness-90 contrast-125" : ""}`} />
              )}
              <span className={`text-xs font-black text-center ${skin.teen ? "text-cyan-50" : "text-white"}`}>
                {o.texto}
              </span>
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${
                  marcado ? skin.teen ? "text-cyan-400" : "text-amber-200" : skin.teen ? "text-slate-600" : "text-white/40"
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
            className={`px-5 py-2 rounded-full font-bold text-sm transition disabled:opacity-40 ${skin.teen ? "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-amber-400 text-[#1a0d3d] hover:bg-amber-300"}`}
          >
            ✓ Conferir seleção
          </button>
        </div>

      {conferiu && (
        <div
          className={`text-sm p-3 rounded-xl border ${
            acertouTudo
              ? skin.teen ? "bg-cyan-900/30 border-cyan-500/40 text-cyan-200" : "bg-emerald-500/20 text-emerald-100"
              : skin.teen ? "bg-rose-900/30 border-rose-500/40 text-rose-200" : "bg-amber-500/20 text-amber-100"
          }`}
        >
          <div className="font-bold mb-1">
            Você marcou {acertosMarcados}/{corretos.length} certos
            {errosMarcados > 0 ? ` e ${errosMarcados} errado(s)` : ""}.
          </div>
          {acertouTudo ? data.feedbackAcerto : data.feedbackErro}
          {!acertouTudo && data.dica && (
            <div className="mt-2 text-xs opacity-90">💡 {data.dica}</div>
          )}
        </div>
      )}
      </div>
    </TeenBlackboard>
  );
}
