import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { RefreshCw, TrendingDown, CalendarClock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Reco = {
  codigo_bncc: string;
  motivo: "desempenho_caiu" | "data_programada" | "ok";
  ultimo_desempenho: number | null;
  variacao: number | null;
  proxima_revisao: string | null;
};

export function RevisoesRecomendadas({ childId }: { childId: string | undefined }) {
  const [items, setItems] = useState<Reco[] | null>(null);

  useEffect(() => {
    if (!childId) {
      setItems([]);
      return;
    }
    let alive = true;
    (async () => {
      const { data, error } = await supabase.rpc("recomendar_revisoes", { _child_id: childId });
      if (!alive) return;
      if (error) {
        setItems([]);
        return;
      }
      setItems((data ?? []) as Reco[]);
    })();
    return () => {
      alive = false;
    };
  }, [childId]);

  if (!childId || items === null || items.length === 0) return null;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#FFC93C]/20 to-[#FF7B54]/20 border-2 border-[#FF7B54]/30 p-4 mb-4">
      <div className="flex items-center gap-2 text-[#B0431E] mb-2">
        <RefreshCw className="h-4 w-4" />
        <span className="text-[10px] font-black uppercase tracking-widest">
          Revisões recomendadas ({items.length})
        </span>
      </div>
      <p className="text-xs text-[#0d1f55]/70 mb-3">
        Hora de fortalecer o que você aprendeu — dá uma revisada rapidinho!
      </p>
      <div className="space-y-2">
        {items.slice(0, 6).map((it) => {
          const caiu = it.motivo === "desempenho_caiu";
          return (
            <Link
              key={it.codigo_bncc}
              to="/escola-brilha/$codigo"
              params={{ codigo: it.codigo_bncc }}
              className="flex items-center gap-3 bg-white rounded-xl px-3 py-2 border border-[#0d1f55]/10 active:scale-[0.98]"
            >
              {caiu ? (
                <TrendingDown className="h-4 w-4 text-[#DC2626] shrink-0" />
              ) : (
                <CalendarClock className="h-4 w-4 text-[#4C9EFF] shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-black text-[#0d1f55] truncate">{it.codigo_bncc}</div>
                <div className="text-[10px] text-[#0d1f55]/60">
                  {caiu
                    ? `Caiu ${Math.abs(it.variacao ?? 0)} pts — revisar`
                    : "Programado para revisão"}
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/40">
                Revisar
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
