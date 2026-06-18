// ============================================================
// Card "Aula de hoje" — lê pei_aulas da data atual e abre
// as atividades. Auto-contido: tem seus próprios estados de
// loading / vazio / em-progresso.
// ============================================================

import { useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckCircle2, Loader2, PlayCircle, Sparkles, Clock } from "lucide-react";
import { useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/utils/utils";

type AtividadeBloco = {
  tipo: string;
  slug: string;
  payload?: Record<string, unknown> | null;
  tempo_min: number;
};

type Aula = {
  id: string;
  ordem: number;
  titulo: string;
  objetivo: string | null;
  bncc_codigos: string[];
  atividades: AtividadeBloco[];
  tempo_total_min: number;
  status: "bloqueada" | "disponivel" | "em_andamento" | "concluida" | "pulada";
};

const ROTAS: Record<string, string> = {
  "neuro-treino": "/neuro-treino",
  alfabetizacao: "/neuro-treino",
  matematica: "/neuro-treino",
  leitura: "/neuro-treino",
  movimento: "/neuro-treino",
};

export function AulaDeHoje({ childId }: { childId: string }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const hoje = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const { data: aula, isLoading } = useQuery({
    queryKey: ["pei-aula-hoje", childId, hoje],
    queryFn: async (): Promise<Aula | null> => {
      const { data, error } = await supabase
        .from("pei_aulas")
        .select(
          "id, ordem, titulo, objetivo, bncc_codigos, atividades, tempo_total_min, status",
        )
        .eq("child_id", childId)
        .eq("data_prevista", hoje)
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return (data as Aula | null) ?? null;
    },
    enabled: !!childId,
  });

  if (isLoading) {
    return (
      <div className="bg-white/95 rounded-3xl p-5 shadow-2xl border border-white flex items-center gap-3">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
        <span className="font-bold text-sm">Preparando a aula de hoje...</span>
      </div>
    );
  }

  if (!aula) {
    return (
      <div className="bg-white/95 rounded-3xl p-5 shadow-2xl border border-white">
        <div className="flex items-center gap-2 text-primary font-black">
          <Sparkles className="h-5 w-5" /> Aula de hoje
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          O sistema está montando seu plano. Volte em instantes.
        </p>
      </div>
    );
  }

  async function iniciarBloco(bloco: AtividadeBloco) {
    if (!aula) return;
    if (aula.status === "disponivel") {
      await supabase
        .from("pei_aulas")
        .update({ status: "em_andamento" })
        .eq("id", aula.id);
      queryClient.invalidateQueries({ queryKey: ["pei-aula-hoje", childId, hoje] });
    }
    const rota = ROTAS[bloco.tipo] ?? "/neuro-treino";
    navigate({ to: rota });
  }

  async function concluirAula() {
    if (!aula) return;
    await supabase
      .from("pei_aulas")
      .update({ status: "concluida", concluida_em: new Date().toISOString() })
      .eq("id", aula.id);
    queryClient.invalidateQueries({ queryKey: ["pei-aula-hoje", childId, hoje] });
    queryClient.invalidateQueries({ queryKey: ["pei-plano-ativo", childId] });
  }

  const isConcluida = aula.status === "concluida";

  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl p-5 shadow-2xl border border-white">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-wider">
          <Sparkles className="h-4 w-4" /> Aula de hoje · Nº {aula.ordem}
        </div>
        <div className="text-[10px] font-bold bg-primary/10 text-primary rounded-full px-2 py-0.5 flex items-center gap-1">
          <Clock className="h-3 w-3" /> {aula.tempo_total_min} min
        </div>
      </div>
      <h3 className="font-black text-lg leading-tight">{aula.titulo}</h3>
      {aula.objetivo && (
        <p className="text-xs text-muted-foreground mt-1">{aula.objetivo}</p>
      )}
      {aula.bncc_codigos.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {aula.bncc_codigos.map((c) => (
            <span
              key={c}
              className="text-[10px] font-bold bg-muted text-muted-foreground rounded px-1.5 py-0.5"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 space-y-2">
        {aula.atividades.map((b, i) => (
          <button
            key={i}
            onClick={() => iniciarBloco(b)}
            disabled={isConcluida}
            className={cn(
              "w-full rounded-2xl p-3 flex items-center gap-3 border-2 text-left transition-all",
              isConcluida
                ? "border-success/30 bg-success/5 opacity-70"
                : "border-border bg-card hover:border-primary",
            )}
          >
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
              {isConcluida ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <PlayCircle className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-black text-sm truncate capitalize">
                {b.slug.replace(/-/g, " ")}
              </div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase">
                {b.tempo_min} min · {b.tipo}
              </div>
            </div>
          </button>
        ))}
      </div>

      {!isConcluida ? (
        <button
          onClick={concluirAula}
          className="btn-tap mt-4 w-full rounded-2xl bg-gradient-to-r from-success to-primary text-primary-foreground px-4 py-3 font-bold flex items-center justify-center gap-2 shadow-glow"
        >
          <CheckCircle2 className="h-4 w-4" /> Concluir aula de hoje
        </button>
      ) : (
        <div className="mt-4 rounded-2xl bg-success/10 text-success font-bold text-sm py-3 text-center">
          ✅ Aula de hoje concluída! Volte amanhã.
        </div>
      )}
    </div>
  );
}
