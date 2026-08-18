import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { KidCard } from "@/components/ui/KidCard";

import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { useMemo, useState, useEffect } from "react";

import {
  Target,
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Star,
  Zap,
  Calendar,
  AlertCircle,
  TrendingUp,
  Layout,
  Rocket,
  Calculator,
  PenTool,
  FlaskConical,
  Brain,
  Trophy,
  Flag,
  GraduationCap,
  BookOpen,
  Loader2,
} from "lucide-react";
import { useAppState } from "@/core/store";
import { usePedagogicalEngine } from "@/hooks/usePedagogicalEngine";
import { supabase } from "@/database/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format, differenceInDays, addDays, startOfDay, isBefore } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { ReforcoEngine } from "@/engines/pedagogical-engine/reforco-engine";
import { FloatingActivityControls } from "@/components/activities/FloatingActivityControls";
import { TutorTrabalho } from "@/components/reforco-brilha/TutorTrabalho";
import { BibliotecaInternet } from "@/components/reforco-brilha/BibliotecaInternet";
import { MissaoProvaManager } from "@/components/responsible/MissaoProvaManager";
import { CalendarioProvas } from "@/components/reforco-brilha/CalendarioProvas";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { MissaoProvaQuiz } from "@/components/professor/MissaoProvaQuiz";
import { AulaViewer } from "@/components/reforco-brilha/AulaViewer";
import { buildAdaptiveUIState } from "@/engines/neuro-engine/adaptation-utils";
import { useServerFn } from "@tanstack/react-start";
import { gerarAulaMissaoIA } from "@/lib/ia-missao-aula.functions";

export const Route = createFileRoute("/missao-prova")({
  component: MissaoProva,
});

function MissaoProva() {
  const { activeChild } = useAppState();
  const engine = usePedagogicalEngine();
  const queryClient = useQueryClient();
  const [isStudying, setIsStudying] = useState(false);
  const [currentSession, setCurrentSession] = useState<any>(null);
  const [currentMission, setCurrentMission] = useState<any>(null);
  const [activeAulaId, setActiveAulaId] = useState<string | null>(null);
  const [tutorAberto, setTutorAberto] = useState(false);
  const [autoGenerating, setAutoGenerating] = useState(false);

  const adaptiveUI = useMemo(
    () =>
      buildAdaptiveUIState(
        {
          visualComplexity: engine?.adaptive?.visualComplexity,
          stimuliReduction: engine?.adaptive?.stimuliLevel === "low",
          interfaceSimplification: engine?.adaptive?.stimuliLevel === "low",
          difficultyScale: engine?.adaptive?.difficulty,
          audioAdaptation: { pacing: engine?.adaptive?.animationIntensity === "none" ? "slow" : "normal" },
          animationIntensity: engine?.adaptive?.animationIntensity,
          maxInformationDensity: engine?.adaptive?.maxItemsPerScreen,
        },
        engine?.profile?.base ?? "Tipico",
      ),
    [engine],
  );

  const { data: missions = [] } = useQuery({
    queryKey: ["exam_missions_child", activeChild?.id],
    queryFn: async () => {
      if (!activeChild) return [];
      const { data, error } = await (supabase as any)
        .from("exam_missions")
        .select(
          `
          *,
          contents:exam_mission_contents(*),
          study_plan:exam_study_plans(*)
        `,
        )
        .eq("child_id", activeChild.id)
        .order("exam_date", { ascending: true });

      if (error) throw error;
      return data as any[];
    },
    enabled: !!activeChild,
  });

  useEffect(() => {
    if (!missions.length || autoGenerating) return;
    const semPlano = missions.find(
      (m: any) =>
        (!m.study_plan || m.study_plan.length === 0) &&
        m.contents &&
        m.contents.length > 0 &&
        differenceInDays(new Date(m.exam_date + "T12:00:00"), new Date()) > 0,
    );
    if (!semPlano) return;

    setAutoGenerating(true);
    (async () => {
      try {
        const daysUntil = differenceInDays(
          new Date(semPlano.exam_date + "T12:00:00"),
          new Date(),
        );
        const contents = semPlano.contents;
        const dias = Math.min(daysUntil, 7);
        const perDay = Math.ceil(contents.length / dias);
        const sessions: any[] = [];
        let idx = 0;
        for (let i = 0; i < dias; i++) {
          const date = addDays(startOfDay(new Date()), i);
          if (!isBefore(date, new Date(semPlano.exam_date + "T12:00:00"))) break;
          const slice = contents.slice(idx, idx + perDay);
          if (slice.length === 0) break;
          sessions.push({
            mission_id: semPlano.id,
            scheduled_date: format(date, "yyyy-MM-dd"),
            title: `Aula: ${slice.map((c: any) => c.content_title).join(" + ")}`,
            description: `Estudo guiado de ${semPlano.subject}: ${slice.map((c: any) => c.content_title).join(", ")}`,
          });
          idx += perDay;
        }
        if (sessions.length > 0) {
          await (supabase as any).from("exam_study_plans").insert(sessions);
          await queryClient.invalidateQueries({
            queryKey: ["exam_missions_child", activeChild?.id],
          });
          toast.success("✨ Plano de aulas gerado automaticamente!");
        }
      } catch (e) {
        console.error("Auto-gerar plano falhou:", e);
      } finally {
        setAutoGenerating(false);
      }
    })();
  }, [missions, autoGenerating, queryClient, activeChild?.id]);

  const gerarAulaFn = useServerFn(gerarAulaMissaoIA);

  const startSession = async (session: any, mission: any) => {
    if (!activeChild) return;
    setIsStudying(true);
    setCurrentSession(session);
    setCurrentMission(mission);
    setActiveAulaId(null);

    try {
      // 1. Verificar se esta sessão já tem uma aula vinculada (opcional, já feito no serverFn por título)
      const res = await gerarAulaFn({
        data: {
          missaoId: mission.id,
          topico: session.title,
          materia: mission.subject,
          criancaId: activeChild.id,
          tipo: "prova",
        },
      });
      
      if (res.aulaId) {
        setActiveAulaId(res.aulaId);
        if (res.recemGerada) {
          toast.success(`✨ Aula preparada com sucesso! (${res.fonte || 'IA'})`);
        }
      } else {
        throw new Error("Não foi possível gerar a aula");
      }
    } catch (error: any) {
      console.error("Erro ao gerar aula:", error);
      setIsStudying(false);
      const { notificarErroIA } = await import("@/lib/notify-ai-error");
      notificarErroIA(error.message || "erro", "Missão Prova");
    }
  };

  const completeSession = async () => {
    if (!currentSession) return;
    try {
      const { error } = await (supabase as any)
        .from("exam_study_plans")
        .update({ completed: true })
        .eq("id", currentSession.id);
      if (error) throw error;
      toast.success("Missão cumprida! Você está mais perto de brilhar na prova!");
      setIsStudying(false);
      setCurrentSession(null);
    } catch (error) {
      console.error("Erro ao completar sessão:", error);
    }
  };

  if (isStudying) {
    return (
      <Shell>
        <div
          className="animate-in slide-in-from-bottom-4 duration-500"
          style={{
            fontSize: `${adaptiveUI.fontSize}px`,
            opacity: adaptiveUI.simplifiedUI ? 0.97 : 1,
          }}
        >
          <button
            onClick={() => setIsStudying(false)}
            className="mb-4 text-sm font-bold text-primary flex items-center gap-1 hover:underline"
          >
            ← Voltar para Missões
          </button>

          {!activeAulaId ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="h-16 w-16 text-primary animate-spin" />
              <p className="font-bold animate-pulse text-indigo-700">
                O Professor Brilha está preparando sua missão de estudo...
              </p>
            </div>
          ) : (
            <AulaViewer
              aulaId={activeAulaId}
              titulo={currentSession.title}
              onClose={() => setIsStudying(false)}
              onComplete={() => completeSession()}
            />
          )}
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHeader
        icon={Flag}
        title="MISSÃO PROVA BRILHA"
        subtitle="Sua jornada para o sucesso nas provas escolares!"
      />

      <div className="space-y-8 animate-in fade-in duration-500">
        {activeChild && (
          <CalendarioProvas
            childId={activeChild.id}
            filtroTipo="prova"
            titulo="Calendário de Provas — toque numa data para agendar"
          />
        )}

        {activeChild && (
          <MissaoProvaManager childId={activeChild.id} />
        )}

        {missions.length === 0 ? (
          <Card className="py-16 text-center space-y-5">
            <div className="h-24 w-24 bg-muted rounded-full grid place-items-center mx-auto">
              <Target className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Nenhuma prova cadastrada!</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Cadastre sua próxima prova no calendário acima.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {missions.map((mission) => {
              return (
                <Card
                  key={mission.id}
                  className="overflow-hidden p-0 border-2 border-indigo-100 hover:border-indigo-300 transition-all"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center text-white shadow-lg">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black">{mission.subject}</h3>
                        <p className="text-indigo-100 flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> {format(new Date(mission.exam_date + "T12:00:00"), "dd 'de' MMMM", { locale: ptBR })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3">
                      {mission.study_plan?.map((session: any) => (
                        <div
                          key={session.id}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                            session.completed
                              ? "bg-emerald-50 border-emerald-100 opacity-60"
                              : "bg-white border-slate-100 hover:border-indigo-200"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${session.completed ? "bg-emerald-500 text-white" : "bg-indigo-100 text-indigo-600"}`}>
                              {session.completed ? <CheckCircle2 className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                            </div>
                            <div>
                              <p className="font-bold text-slate-800">{session.title}</p>
                              <p className="text-xs text-slate-500">{session.description}</p>
                            </div>
                          </div>
                          {!session.completed && (
                            <button
                              onClick={() => startSession(session, mission)}
                              className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-black shadow-kid hover:scale-105 transition-all"
                            >
                              ESTUDAR AGORA
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {tutorAberto && currentSession && currentMission && (
        <TutorTrabalho
          modo="missao-prova"
          tema={`${currentSession.title} (${currentMission.subject})`}
          materia={currentMission.subject}
          onFechar={() => setTutorAberto(false)}
        />
      )}
    </Shell>
  );
}
