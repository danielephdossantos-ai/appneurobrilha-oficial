import { useState } from "react";
import type { PainelComparativoData } from "../../types";
import { LayoutGrid, Sparkles } from "lucide-react";

/**
 * Painel comparativo — a criança REVELA cada linha tocando.
 * Assim vira jogo, não tabela morta. Ao final, aparece a síntese.
 */
export function PainelComparativo({ data }: { data: PainelComparativoData }) {
  const [reveladas, setReveladas] = useState<Set<number>>(new Set());
  const total = data.linhas.length;
  const completo = reveladas.size === total;

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <LayoutGrid className="w-5 h-5 text-emerald-300" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            Painel do explorador
          </div>
          <div className="text-white text-sm font-bold">
            Toque em cada linha pra revelar o que você descobriu
          </div>
        </div>
        <div className="text-xs font-mono text-emerald-300">
          {reveladas.size}/{total}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-emerald-500/10">
            <tr>
              {data.colunas.map((c) => (
                <th
                  key={c}
                  className="text-left px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-emerald-200 font-bold"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.linhas.map((linha, i) => {
              const aberta = reveladas.has(i);
              return (
                <tr
                  key={i}
                  onClick={() =>
                    setReveladas((s) => {
                      const n = new Set(s);
                      n.add(i);
                      return n;
                    })
                  }
                  className={`border-t border-white/5 cursor-pointer transition ${
                    aberta ? "bg-white/5" : "bg-transparent hover:bg-white/5"
                  }`}
                >
                  {linha.celulas.map((cel, j) => (
                    <td key={j} className="px-3 py-3 align-top text-white">
                      {j === 0 ? (
                        <span className="flex items-center gap-2 font-bold">
                          <span className="text-xl">{linha.emoji}</span>
                          {cel}
                        </span>
                      ) : aberta ? (
                        <span className="text-white/90">{cel}</span>
                      ) : (
                        <span className="inline-block w-16 h-3 rounded-full bg-white/10" />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {completo && (
        <div className="p-4">
          <div className="rounded-2xl border-2 border-emerald-400/50 bg-emerald-500/15 p-4 flex gap-3">
            <Sparkles className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold mb-1">
                Síntese
              </div>
              <p className="text-white text-sm leading-relaxed">{data.sintese}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
