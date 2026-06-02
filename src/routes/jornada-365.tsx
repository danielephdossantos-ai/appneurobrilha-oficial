import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { Play, Pause, CheckCircle2, Lock, ClipboardList, Loader2, Calendar, Trophy } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { PedagogyEngine } from "@/modules/escola-brilha/engine/pedagogy-core";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/jornada-365")({
  component: Jornada,
});

const CATEGORY_ROUTES: Record<string, string> = {
  "neuro-treino": "/neuro-treino",
  "escola-brilha": "/escola-brilha",
};

function Jornada() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  const { data: journeyState, isLoading: loadingJourney } = useQuery({
    queryKey: ["child-journey", activeChild?.id],
    queryFn: async () => {
      if (!activeChild) return null;
      const { data, error } = await supabase
        .from("child_journey")
        .select("*")
        .eq("child_id", activeChild.id)
        .maybeSingle();
      if (error) throw error;
      // Cria registro se não existir
      if (!data) {
        const { data: created } = await supabase
          .from("child_journey")
          .insert({ child_id: activeChild.id, current_day: 1, last_completed_day: 0 })
          .select()
          .single();
        return created;
      }
      return data;
    },
    enabled: !!activeChild,
  });

  const { data: activities = [], isLoading: loadingActivities } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data, error } = await supabase.from("activities").select("*");
      if (error) throw error;
      return data;
    },
  });

  // Mutation: avançar para o próximo dia
  const advanceDay = useMutation({
    mutationFn: async () => {
      if (!activeChild || !journeyState) throw new Error("no-journey");
      const nextDay = Math.min((journeyState.current_day || 1) + 1, 365);
      const { error } = await supabase
        .from("child_journey")
        .update({
          current_day: nextDay,
          last_completed_day: journeyState.current_day || 1,
          updated_at: new Date().toISOString(),
        })
        .eq("child_id", activeChild.id);
      if (error) throw error;
      return nextDay;
    },
    onSuccess: (nextDay) => {
      queryClient.invalidateQueries({ queryKey: ["child-journey", activeChild?.id] });
      toast.success(`Dia concluído! Bem-vindo ao Dia ${nextDay} 🌟`);
    },
    onError: () => toast.error("Não foi possível avançar o dia."),
  });

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  if (!activeChild.anamnese_completa) {
    return (
      <Shell>
        <PageHeader emoji="🧭" title="Jornada 365" subtitle="Caminho personalizado de aprendizagem" />
        <Card className="flex flex-col items-center text-center p-12 py-16 bg-gradient-to-b from-muted/50 to-background border-dashed">
          <div className="h-20 w-20 rounded-full bg-warning/10 flex items-center justify-center mb-6">
            <Lock className="h-10 w-10 text-warning" />
          </div>
          <h2 className="text-2xl font-extrabold mb-4">Jornada bloqueada</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            Para criar a jornada de 365 dias para <strong>{activeChild.nome}</strong>, precisamos primeiro concluir a anamnese pedagógica.
          </p>
          <Link
            to="/anamnese/$childId"
            params={{ childId: activeChild.id }}
            className="btn-tap rounded-2xl bg-primary text-primary-foreground px-8 py-4 font-bold text-lg flex items-center gap-2 shadow-glow"
          >
            <ClipboardList className="h-5 w-5" /> Fazer Anamnese Agora
          </Link>
        </Card>
      </Shell>
    );
  }

  if (loadingJourney || loadingActivities) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center p-20 text-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <p className="font-bold">Calculando sua rota pedagógica...</p>
        </div>
      </Shell>
    );
  }

  const currentDay = journeyState?.current_day || 1;
  const blocks = PedagogyEngine.generateDailyRoutine(currentDay, activeChild, activities);

  const progress = Math.min(Math.round(((currentDay - 1) / 365) * 100), 100);

  // Próxima conquista: a cada 7 dias
  const MILESTONE_INTERVAL = 7;
  const daysToMilestone = MILESTONE_INTERVAL - ((currentDay - 1) % MILESTONE_INTERVAL);

  const handleStart = (block: typeof blocks[number]) => {
    if (block.category === "pausa") {
      setActiveBlockId(block.id);
      return;
    }
    const route = CATEGORY_ROUTES[block.category];
    if (route) {
      navigate({ to: route });
    } else {
      setActiveBlockId(block.id);
    }
  };

  return (
    <Shell>
      <PageHeader
        emoji="🧭"
        title="Jornada 365"
        subtitle={`Dia ${currentDay} de 365 · Aula diária adaptada`}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="md:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Progresso do Ano
            </div>
            <Pill tone="info">{progress}% concluído</Pill>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-success transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Card>

        <Card className="flex flex-col justify-center items-center bg-primary/5 border-primary/20">
          <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Próxima conquista em</div>
          <div className="text-2xl font-black text-primary">{daysToMilestone} {daysToMilestone === 1 ? "dia" : "dias"}</div>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="font-extrabold text-lg px-1">Roteiro de hoje</h3>
        {blocks.map((b, i) => (
          <div key={i} className={`rounded-2xl p-4 flex items-center gap-4 border-2 transition-all ${
            b.status === "now" ? "border-primary bg-primary/5 shadow-glow" :
            b.status === "done" ? "border-success/30 bg-success/5" :
            "border-border bg-card opacity-80"
          }`}>
            <div className={`h-14 w-14 rounded-2xl grid place-items-center shrink-0 ${
              b.category === "neuro-treino" ? "bg-coral/20 text-coral" :
              b.category === "escola-brilha" ? "bg-sky/20 text-sky" :
              "bg-success/20 text-success"
            }`}>
              {b.status === "done" ? <CheckCircle2 className="h-7 w-7 text-success" /> :
               b.status === "now" ? <Play className="h-6 w-6 fill-current" /> :
               <Pause className="h-6 w-6" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-black text-lg truncate">{b.title}</span>
                {b.category !== "pausa" && (
                  <Pill tone={b.category === "neuro-treino" ? "warning" : "info"} className="text-[10px] py-0 px-1.5 uppercase">
                    {b.category === "neuro-treino" ? "Neuro" : "Escola"}
                  </Pill>
                )}
              </div>
              <div className="text-xs font-bold text-muted-foreground flex items-center gap-2">
                <span>{b.dur} min</span>
                <span>•</span>
                <span>{b.type === "ativo" ? "foco adaptado" : "autorregulação"}</span>
              </div>
            </div>

            <button
              onClick={() => handleStart(b)}
              className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-2.5 font-bold shadow-soft whitespace-nowrap"
            >
              {b.category === "pausa" ? "Iniciar" : "Começar"}
            </button>
          </div>
        ))}
      </div>

      {/* Concluir dia */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => advanceDay.mutate()}
          disabled={advanceDay.isPending || currentDay >= 365}
          className="btn-tap rounded-2xl bg-gradient-to-r from-success to-primary text-primary-foreground px-8 py-4 font-bold text-lg flex items-center gap-2 shadow-glow disabled:opacity-50"
        >
          {advanceDay.isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Trophy className="h-5 w-5" />}
          {currentDay >= 365 ? "Jornada completa!" : "Concluir Dia e Avançar"}
        </button>
      </div>

      {activeBlockId && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
          <div className="max-w-md w-full">
            <div className="text-6xl mb-6">🌬️</div>
            <h2 className="text-3xl font-black mb-2">Hora da Pausa</h2>
            <p className="text-muted-foreground mb-8">Respire fundo. Inspire... segure... e solte devagar.</p>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary animate-progress-loading" />
            </div>
            <button
              onClick={() => setActiveBlockId(null)}
              className="btn-tap w-full rounded-2xl bg-primary/10 text-primary p-4 font-bold"
            >
              Pronto, voltar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes progress-loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-loading {
          animation: progress-loading 3s ease-out forwards;
        }
      `}</style>
    </Shell>
  );
}
