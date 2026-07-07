import { useState } from "react";
import type { ArrastarParaAlvoData } from "../../types";

/**
 * Minijogo "Arrastar para o alvo".
 * Fluxo mobile-friendly (sem drag-and-drop HTML5):
 *   1) criança toca no ITEM (fica destacado)
 *   2) criança toca no ALVO onde acha que aquele item pertence
 *   3) o item "vai" pro alvo e some da lista de itens soltos
 * No fim, botão "conferir" mostra acerto/erro por item.
 */
export function ArrastarParaAlvo({ data }: { data: ArrastarParaAlvoData }) {
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
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-4">
      <div className="text-sm font-bold text-white">🎯 {data.instrucao}</div>

      {/* Itens soltos */}
      {itensSoltos.length > 0 && (
        <div>
          <div className="text-[11px] uppercase tracking-widest text-white/50 mb-2">
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
                      ? "bg-amber-400 text-[#1a0d3d] ring-4 ring-amber-200"
                      : "bg-white/10 text-white hover:bg-white/20"
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
                  ? "border-amber-300 bg-amber-400/10 hover:bg-amber-400/20"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {alvo.imagemUrl && (
                  <img src={alvo.imagemUrl} alt="" className="w-10 h-10 object-contain" />
                )}
                <div>
                  <div className="text-sm font-bold text-white">{alvo.nome}</div>
                  {alvo.descricao && (
                    <div className="text-[11px] text-white/60">{alvo.descricao}</div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {dentro.map((it) => {
                  const certo = it.alvoId === alvo.id;
                  const cor = conferiu
                    ? certo
                      ? "bg-emerald-500/60 text-white"
                      : "bg-rose-500/60 text-white"
                    : "bg-white/20 text-white";
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
                  <span className="text-[11px] text-white/40 italic">
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
          className="px-5 py-2 rounded-full bg-amber-400 text-[#1a0d3d] font-bold text-sm hover:bg-amber-300 disabled:opacity-40"
        >
          ✓ Conferir
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
            {acertos} de {data.itens.length} no lugar certo.
          </div>
          {acertouTudo ? data.feedbackAcerto : data.feedbackErro}
        </div>
      )}
    </div>
  );
}
