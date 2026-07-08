import { useState } from "react";
import type { InvestigacaoLivreData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { Check, X, Sparkles, Eye } from "lucide-react";

/**
 * Investigação Livre (M7): foto nova, sem pins pré-marcados. A criança
 * escolhe da lista de pistas o que realmente vê. Algumas pistas são
 * armadilha (existe:false) pra treinar OBSERVAÇÃO — não é chute.
 * Só depois de "Ver conclusão" o Brilha revela o que era certo.
 */
export function InvestigacaoLivre({ data }: { data: InvestigacaoLivreData }) {
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set());
  const [enviado, setEnviado] = useState(false);

  const toggle = (id: string) => {
    if (enviado) return;
    setMarcadas((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const total = data.pistas.filter((p) => p.existe).length;
  const acertos = data.pistas.filter(
    (p) => p.existe && marcadas.has(p.id),
  ).length;
  const erros = data.pistas.filter(
    (p) => !p.existe && marcadas.has(p.id),
  ).length;

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <Eye className="w-5 h-5 text-emerald-300" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            Investigação livre
          </div>
          <div className="text-white text-sm font-bold">
            O que você consegue descobrir só observando?
          </div>
        </div>
        {enviado && (
          <div className="text-xs font-mono text-emerald-300 shrink-0">
            {acertos}/{total}
          </div>
        )}
      </div>

      <div className="relative aspect-[16/10] bg-black">
        <FotoLugar
          imagemUrl={data.imagemUrl}
          corPlaceholder={data.corPlaceholder}
          emoji="🛰️"
          nome="Paisagem misteriosa"
        />
      </div>

      <div className="p-4 space-y-4">
        <p className="text-sm text-emerald-100/90 italic">{data.instrucao}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {data.pistas.map((p) => {
            const on = marcadas.has(p.id);
            let cls =
              "bg-white/5 border-white/15 text-white hover:bg-white/10";
            if (enviado) {
              if (p.existe && on)
                cls = "bg-emerald-500/25 border-emerald-300 text-white";
              else if (!p.existe && on)
                cls = "bg-rose-500/20 border-rose-300/70 text-white";
              else if (p.existe && !on)
                cls =
                  "bg-amber-500/15 border-amber-300/60 text-amber-100";
              else cls = "bg-white/5 border-white/10 text-white/40";
            } else if (on) {
              cls = "bg-emerald-400/25 border-emerald-300 text-white";
            }
            return (
              <button
                key={p.id}
                disabled={enviado}
                onClick={() => toggle(p.id)}
                className={`flex items-center gap-2 text-left px-3 py-2.5 rounded-2xl border-2 text-sm font-bold transition ${cls}`}
              >
                <span className="text-xl leading-none shrink-0">{p.icone}</span>
                <span className="flex-1">{p.rotulo}</span>
                {enviado && p.existe && on && (
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                )}
                {enviado && !p.existe && on && (
                  <X className="w-4 h-4 text-rose-300 shrink-0" />
                )}
                {enviado && p.existe && !on && (
                  <span className="text-[10px] uppercase font-black text-amber-300 shrink-0">
                    faltou
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {!enviado ? (
          <button
            onClick={() => setEnviado(true)}
            disabled={marcadas.size === 0}
            className="w-full px-5 py-3 rounded-2xl bg-emerald-400 text-slate-950 font-black text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-300 transition"
          >
            🔍 Ver minha conclusão ({marcadas.size} marcadas)
          </button>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/40 py-2">
                <div className="text-2xl font-black text-emerald-300">
                  {acertos}
                </div>
                <div className="text-[10px] uppercase text-emerald-200/80 font-bold">
                  Acertou
                </div>
              </div>
              <div className="rounded-xl bg-amber-500/15 border border-amber-300/40 py-2">
                <div className="text-2xl font-black text-amber-300">
                  {total - acertos}
                </div>
                <div className="text-[10px] uppercase text-amber-200/80 font-bold">
                  Faltou ver
                </div>
              </div>
              <div className="rounded-xl bg-rose-500/15 border border-rose-300/40 py-2">
                <div className="text-2xl font-black text-rose-300">{erros}</div>
                <div className="text-[10px] uppercase text-rose-200/80 font-bold">
                  Não existia
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-emerald-400/50 bg-emerald-500/15 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200">
                  Aurora conclui
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {data.conclusao}
              </p>
            </div>

            <button
              onClick={() => {
                setEnviado(false);
                setMarcadas(new Set());
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white/80 text-xs font-bold hover:bg-white/10 transition"
            >
              ↻ Investigar de novo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
