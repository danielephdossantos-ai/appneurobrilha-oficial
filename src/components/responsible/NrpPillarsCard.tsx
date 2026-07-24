import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { getNrpPillarStats, type PillarStat } from "@/services/neuro-treino/nrpPillars";

/**
 * Painel dos 5 pilares do National Reading Panel (2000), mostrando o
 * progresso da criança em cada pilar da leitura científica.
 *
 * Alimentado por `child_skill_mastery` filtrando `skill_code LIKE 'alfa:%'`.
 */
export function NrpPillarsCard({ childId }: { childId: string }) {
  const [stats, setStats] = useState<PillarStat[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getNrpPillarStats(childId).then((s) => {
      if (!cancelled) setStats(s);
    });
    return () => {
      cancelled = true;
    };
  }, [childId]);

  return (
    <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0">
          <BookOpen className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            National Reading Panel (2000)
          </div>
          <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">
            5 Pilares da Leitura Científica
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Progresso da criança em cada pilar, medido pelo Alfabetização Brilha.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {(stats ?? []).map((p) => (
          <div key={p.pilar}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-bold text-slate-800">{p.label}</span>
              <span className="text-xs font-black text-slate-600">
                {p.mastery}% <span className="text-slate-400 font-medium">· {p.attempts} tent.</span>
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${p.cor} transition-all`}
                style={{ width: `${Math.max(2, p.mastery)}%` }}
              />
            </div>
          </div>
        ))}
        {stats === null && (
          <div className="text-xs text-slate-400 py-6 text-center">Carregando…</div>
        )}
        {stats && stats.every((s) => s.attempts === 0) && (
          <div className="text-xs text-slate-500 py-3 text-center">
            Nenhuma atividade concluída ainda. Assim que a criança começar as aulas do
            Alfabetização Brilha, os 5 pilares vão aparecer aqui.
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
        Referência: National Reading Panel (2000) — os 5 componentes essenciais para aprender a
        ler: Consciência Fonológica, Fônica, Fluência, Vocabulário e Compreensão.
      </div>
    </div>
  );
}
