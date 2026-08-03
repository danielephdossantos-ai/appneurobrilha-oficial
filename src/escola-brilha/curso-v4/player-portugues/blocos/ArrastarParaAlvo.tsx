import { useState, useContext } from "react";
import type { ArrastarParaAlvoData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";
import { KidsCtx } from "../PlayerPortuguesV4";
import { TeenBlackboard } from "./TeenBlackboard";

/**
 * Minijogo "Arrastar para o alvo".
 * Fluxo mobile-friendly (sem drag-and-drop HTML5):
 *   1) criança toca no ITEM (fica destacado)
 *   2) criança toca no ALVO onde acha que aquele item pertence
 *   3) o item "vai" pro alvo e some da lista de itens soltos
 * No fim, botão "conferir" mostra acerto/erro por item.
 */
export function ArrastarParaAlvo({ data }: { data: ArrastarParaAlvoData }) {
  const skin = useContext(KidsCtx);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  /** id do item → id do alvo escolhido (ou null se ainda solto). */
  const [colocacao, setColocacao] = useState<Record<string, string>>({});
  const [conferiu, setConferiu] = useState(false);

  const itensSoltos = data.itens.filter((it) => !(it.id in colocacao));

  const colocar = (alvoId: string) => {
    if (!selecionado) return;
    setColocacao((prev) => ({ ...prev, [selecionado]: alvoId }));
    setSelecionado(null);
    setConferiu(false);
  };

  const remover = (itemId: string) => {
    setColocacao((prev) => {
      const cp = { ...prev };
      delete cp[itemId];
      return cp;
    });
    setConferiu(false);
  };

  const todosColocados = data.itens.every((it) => it.id in colocacao);
  const acertos = data.itens.filter((it) => colocacao[it.id] === it.alvoId).length;
  const acertouTudo = conferiu && acertos === data.itens.length;

  return (
    <TeenBlackboard titulo="Protocolo de Mapeamento de Alvos">
      <div className={`rounded-2xl p-4 space-y-4 ${skin.teen ? "bg-transparent text-cyan-50" : "bg-white/5 border border-white/10"}`}>
        <div className="flex items-center justify-between gap-2">
          <div className={`text-sm font-bold ${skin.teen ? "text-cyan-100" : "text-white"}`}>🎯 {data.instrucao}</div>
          <BotaoOuvirEnunciado texto={data.instrucao} rotulo="Repetir" auto />
        </div>


      {/* Itens soltos */}
      {itensSoltos.length > 0 && (
        <div>
          <div className={`text-[11px] uppercase tracking-widest mb-2 ${skin.teen ? "text-cyan-400/60" : "text-white/50"}`}>
            Toque em um item e depois no lugar certo:
          </div>
          <div className="flex flex-wrap gap-2">
            {itensSoltos.map((it) => {
              const ativo = selecionado === it.id;
              return (
                <button
                  key={it.id}
                  onClick={() => setSelecionado(ativo ? null : it.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition ${
                    ativo
                      ? skin.teen ? "bg-cyan-600 text-white ring-4 ring-cyan-400" : "bg-amber-400 text-[#1a0d3d] ring-4 ring-amber-200"
                      : skin.teen ? "bg-slate-800/50 border border-cyan-900/30 text-cyan-100" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {it.imagemUrl && (
                    <img src={it.imagemUrl} alt="" className="w-8 h-8 object-contain" />
                  )}
                  <span>{it.texto}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Alvos */}
      <div className="grid md:grid-cols-2 gap-3">
        {data.alvos.map((alvo) => {
          const dentro = data.itens.filter((it) => colocacao[it.id] === alvo.id);
          return (
            <button
              key={alvo.id}
              onClick={() => colocar(alvo.id)}
              disabled={!selecionado}
              className={`text-left rounded-2xl p-3 border-2 border-dashed transition min-h-[110px] ${
                selecionado
                  ? skin.teen ? "border-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/40" : "border-amber-300 bg-amber-400/10 hover:bg-amber-400/20"
                  : skin.teen ? "border-cyan-900/30 bg-slate-900/50" : "border-white/20 bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {alvo.imagemUrl && (
                  <img src={alvo.imagemUrl} alt="" className="w-10 h-10 object-contain" />
                )}
                <div>
                  <div className={`text-sm font-bold ${skin.teen ? "text-cyan-50" : "text-white"}`}>{alvo.nome}</div>
                  {alvo.descricao && (
                    <div className={`text-[11px] ${skin.teen ? "text-cyan-400/60" : "text-white/60"}`}>{alvo.descricao}</div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {dentro.map((it) => {
                  const certo = it.alvoId === alvo.id;
                  const cor = conferiu
                    ? certo
                      ? skin.teen ? "bg-cyan-600/60 text-white" : "bg-emerald-500/60 text-white"
                      : skin.teen ? "bg-rose-600/60 text-white" : "bg-rose-500/60 text-white"
                    : skin.teen ? "bg-slate-700/60 text-cyan-100" : "bg-white/20 text-white";
                  return (
                    <span
                      key={it.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        remover(it.id);
                      }}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium cursor-pointer ${cor}`}
                      title="Toque pra tirar"
                    >
                      {it.imagemUrl && (
                        <img src={it.imagemUrl} alt="" className="w-4 h-4 object-contain" />
                      )}
                      {it.texto}
                    </span>
                  );
                })}
                {dentro.length === 0 && (
                  <span className={`text-[11px] italic ${skin.teen ? "text-cyan-400/30" : "text-white/40"}`}>
                    (arraste um item pra cá)
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center pt-1">
          <button
            onClick={() => setConferiu(true)}
            disabled={!todosColocados}
            className={`px-5 py-2 rounded-full font-bold text-sm transition disabled:opacity-40 ${skin.teen ? "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-amber-400 text-[#1a0d3d] hover:bg-amber-300"}`}
          >
            ✓ Conferir
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
            {acertos} de {data.itens.length} no lugar certo.
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
