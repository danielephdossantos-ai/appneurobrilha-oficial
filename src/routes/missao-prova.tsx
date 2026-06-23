import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { KidCard } from "@/components/ui/KidCard";

import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { useState, useEffect } from "react";

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
import { GraduationCap, BookOpen } from "lucide-react";

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
  const [lessonContent, setLessonContent] = useState<any>(null);
  const [tutorAberto, setTutorAberto] = useState(false);
  const [autoStarted, setAutoStarted] = useState(false);
  const [autoGenerating, setAutoGenerating] = useState(false);
  const [recursosVistos, setRecursosVistos] = useState(0);

  const { data: missions = [], isLoading } = useQuery({
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

  // 🤖 AUTOMÁTICO: Gera plano de estudos se faltar
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

  // 🤖 AUTOMÁTICO: Abre a aula de hoje + Tutor sem precisar clicar
  useEffect(() => {
    if (autoStarted || isStudying || !missions.length) return;
    for (const mission of missions) {
      const todaySession = mission.study_plan?.find(
        (s: any) => !s.completed && s.scheduled_date === format(new Date(), "yyyy-MM-dd"),
      );
      if (todaySession) {
        setAutoStarted(true);
        startSession(todaySession, mission);
        setTutorAberto(true);
        return;
      }
    }
  }, [missions, autoStarted, isStudying]);

  const startSession = async (session: any, mission: any) => {
    setIsStudying(true);
    setCurrentSession(session);
    setCurrentMission(mission);
    setLessonContent(null);
    setRecursosVistos(0);

    try {
      // Usar o ReforcoEngine para gerar uma aula baseada no tópico da sessão
      const lesson = await ReforcoEngine.generateLesson(
        session.title + ": " + mission.subject,
        engine?.adaptive as any,
      );
      setLessonContent(lesson);
    } catch (error) {
      console.error("Erro ao gerar aula:", error);
      toast.error("Erro ao preparar sua missão de estudo.");
      setIsStudying(false);
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
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          <button
            onClick={() => setIsStudying(false)}
            className="mb-4 text-sm font-bold text-primary flex items-center gap-1 hover:underline"
          >
            ← Voltar para Missões
          </button>

          {!lessonContent ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="font-bold animate-pulse">
                O Professor Brilha está preparando sua missão de estudo...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <Card className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none p-8 relative overflow-hidden">
                  {/* Pip Commander Overlay */}
                  <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                    <KidLiveMascot size="lg" emotion="excited" showBadge={false} />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                    <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center text-white shadow-xl">
                      <Rocket className="h-10 w-10" />
                    </div>
                    <div>
                      <Pill tone="info" className="bg-white/20 text-white mb-2">
                        MISSÃO EM CURSO
                      </Pill>
                      <h2 className="text-3xl font-black">{currentSession.title}</h2>
                      <p className="text-indigo-100 mt-1">{currentSession.description}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    {lessonContent.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {lessonContent.explanation}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {lessonContent.steps?.map((step: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 flex gap-4"
                      >
                        <div className="h-8 w-8 rounded-full bg-primary text-white grid place-items-center font-black shrink-0">
                          {idx + 1}
                        </div>
                        <p className="font-bold text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-emerald-700" />
                      <h4 className="font-black text-emerald-800 text-sm uppercase tracking-wider">
                        Material de estudo (Wikipédia, YouTube, Khan, livros)
                      </h4>
                    </div>
                    <p className="text-xs text-emerald-700 mb-3">
                      Abra pelo menos 1 material abaixo antes de marcar como concluído. Tudo abre dentro do app.
                    </p>
                    <BibliotecaInternet
                      query={`${currentSession.title} ${currentMission.subject}`}
                      onAbrirRecurso={() => setRecursosVistos((n) => n + 1)}
                    />
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setTutorAberto(true)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-2xl font-black text-base shadow-kid hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <GraduationCap className="h-5 w-5" /> Tutor Brilha
                    </button>
                    <button
                      onClick={() => {
                        if (recursosVistos === 0) {
                          toast.error("Abra pelo menos 1 material de estudo antes de concluir 📚");
                          return;
                        }
                        completeSession();
                      }}
                      disabled={recursosVistos === 0}
                      className="bg-success text-white px-10 py-4 rounded-2xl font-black text-xl shadow-glow hover:scale-105 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      CONCLUÍDO! <CheckCircle2 className="h-6 w-6" />
                    </button>
                  </div>
                </Card>
              </div>


              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-4">
                  <KidCard className="p-6 border-indigo-200 bg-indigo-50/50">
                    <KidLiveMascot
                      emotion="happy"
                      size="md"
                      message="Você consegue! Estou aqui para te ajudar a brilhar nessa prova!"
                    />
                  </KidCard>
                  <div className="p-4 rounded-2xl bg-white border-2 border-indigo-100 shadow-soft">
                    <h4 className="font-black text-indigo-600 uppercase tracking-widest text-[10px] mb-2">
                      Comando do Pip
                    </h4>
                    <p className="text-xs text-slate-500 italic">
                      "Foque nos passos e respire fundo. O conhecimento é como um quebra-cabeça,
                      vamos montar peça por peça!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {tutorAberto && currentSession && currentMission && (
          <TutorTrabalho
            modo="missao-prova"
            tema={`${currentSession.title} (${currentMission.subject})`}
            materia={currentMission.subject}
            diasAteProva={Math.max(
              0,
              differenceInDays(
                new Date(currentMission.exam_date + "T12:00:00"),
                new Date(),
              ),
            )}
            onFechar={() => setTutorAberto(false)}
          />
        )}
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
        {missions.length === 0 ? (
          <Card className="py-16 text-center space-y-5">
            <div className="h-24 w-24 bg-muted rounded-full grid place-items-center mx-auto">
              <Target className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Nenhuma prova cadastrada!</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Peça para o papai ou a mamãe cadastrar sua próxima prova no Painel dos Pais.
              Enquanto isso, você pode estudar qualquer tema com o Tutor Brilha 👇
            </p>
            <TutorLivre />
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {missions.map((mission) => {
              const daysLeft = differenceInDays(
                new Date(mission.exam_date + "T12:00:00"),
                new Date(),
              );
              const progress =
                mission.contents.length > 0
                  ? (mission.contents.filter((c: any) => c.completed).length /
                      mission.contents.length) *
                    100
                  : 0;

              const todaySession = mission.study_plan?.find(
                (s: any) => !s.completed && s.scheduled_date === format(new Date(), "yyyy-MM-dd"),
              );

              return (
                <Card
                  key={mission.id}
                  className="overflow-hidden p-0 border-2 border-indigo-100 hover:border-indigo-300 transition-all"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center text-white shadow-lg">
                        {mission.subject === "Matemática" ? (
                          <Calculator className="h-8 w-8" />
                        ) : mission.subject === "Português" ? (
                          <PenTool className="h-8 w-8" />
                        ) : (
                          <FlaskConical className="h-8 w-8" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black">{mission.subject}</h3>
                        <p className="text-indigo-100 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Prova em{" "}
                          {format(new Date(mission.exam_date + "T12:00:00"), "dd 'de' MMMM", {
                            locale: ptBR,
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl text-center min-w-[120px]">
                      <div className="text-3xl font-black">{daysLeft}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest">
                        Dias Restantes
                      </div>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Progresso */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-black text-xs text-slate-400 uppercase tracking-widest">
                        <span>Seu Progresso</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-50">
                        <div
                          className="h-full bg-gradient-to-r from-success to-emerald-400 transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mission.contents.map((content: any) => (
                          <div
                            key={content.id}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              content.completed
                                ? "bg-success/20 text-success"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {content.completed && <CheckCircle2 className="h-3 w-3" />}
                            {content.content_title}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Próxima Sessão */}
                    <div className="lg:col-span-2">
                      {todaySession ? (
                        <div className="bg-primary/5 border-2 border-primary/20 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-6">
                          <div className="h-16 w-16 bg-primary text-white rounded-full grid place-items-center animate-pulse shrink-0 shadow-glow">
                            <Zap className="h-8 w-8" />
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h4 className="text-xl font-black text-primary">Missão de Hoje!</h4>
                            <p className="text-slate-600 font-bold">{todaySession.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {todaySession.description}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 shrink-0">
                            <button
                              onClick={() => startSession(todaySession, mission)}
                              className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-kid hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                              COMEÇAR AGORA <ArrowRight className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                setCurrentSession(todaySession);
                                setCurrentMission(mission);
                                setTutorAberto(true);
                              }}
                              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-2xl font-black text-xs flex items-center gap-2 justify-center"
                            >
                              <GraduationCap className="h-4 w-4" /> Tutor Brilha
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-100 rounded-[2rem] text-center text-slate-400 gap-3">
                          <Clock className="h-10 w-10 opacity-20" />
                          <p className="font-bold">Nenhum treino agendado para hoje.</p>
                          <button
                            onClick={() => {
                              setCurrentSession({
                                title: `Estudo livre — ${mission.subject}`,
                                description: `Conteúdos da prova de ${mission.subject}`,
                              });
                              setCurrentMission(mission);
                              setTutorAberto(true);
                            }}
                            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-2xl font-black text-xs flex items-center gap-2"
                          >
                            <GraduationCap className="h-4 w-4" /> Estudar com Tutor Brilha
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Todas as aulas do plano diário */}
                    {mission.study_plan && mission.study_plan.length > 0 && (
                      <div className="lg:col-span-3 mt-2">
                        <h4 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> Plano de Aulas Diárias
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[...mission.study_plan]
                            .sort((a: any, b: any) =>
                              (a.scheduled_date || "").localeCompare(b.scheduled_date || ""),
                            )
                            .map((sess: any) => {
                              const dia = sess.scheduled_date
                                ? format(
                                    new Date(sess.scheduled_date + "T12:00:00"),
                                    "dd/MM (EEE)",
                                    { locale: ptBR },
                                  )
                                : "—";
                              return (
                                <div
                                  key={sess.id}
                                  className={`flex items-center gap-3 p-3 rounded-xl border-2 ${
                                    sess.completed
                                      ? "bg-success/5 border-success/20"
                                      : "bg-white border-slate-100 hover:border-primary/30"
                                  }`}
                                >
                                  <div
                                    className={`shrink-0 h-9 w-9 rounded-lg grid place-items-center text-xs font-black ${
                                      sess.completed
                                        ? "bg-success text-white"
                                        : "bg-primary/10 text-primary"
                                    }`}
                                  >
                                    {sess.completed ? (
                                      <CheckCircle2 className="h-5 w-5" />
                                    ) : (
                                      <PlayCircle className="h-5 w-5" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                      {dia}
                                    </p>
                                    <p className="font-bold text-sm text-slate-700 truncate">
                                      {sess.title}
                                    </p>
                                  </div>
                                  {!sess.completed && (
                                    <div className="flex flex-col gap-1 shrink-0">
                                      <button
                                        onClick={() => startSession(sess, mission)}
                                        className="bg-primary text-white px-3 py-1.5 rounded-lg font-black text-[11px] hover:scale-105 transition-all"
                                      >
                                        Abrir aula
                                      </button>
                                      <button
                                        onClick={() => {
                                          setCurrentSession(sess);
                                          setCurrentMission(mission);
                                          setTutorAberto(true);
                                        }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg font-black text-[11px] flex items-center gap-1 justify-center"
                                      >
                                        <GraduationCap className="h-3 w-3" /> Tutor
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-amber-50 border-amber-200">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 grid place-items-center text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Neuro-Treino</h4>
                <p className="text-[11px] text-muted-foreground">
                  Sua mente está sendo preparada para o sucesso.
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-indigo-100 grid place-items-center text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Sistema Infinito</h4>
                <p className="text-[11px] text-muted-foreground">
                  O conteúdo se adapta ao que você precisa aprender.
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 grid place-items-center text-primary">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Pronto para Brilhar</h4>
                <p className="text-[11px] text-muted-foreground">
                  Siga o plano e você terá um resultado incrível!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <FloatingActivityControls
        onSkip={
          isStudying && lessonContent
            ? () => {
                toast.info("Indo direto para a prática!");
              }
            : undefined
        }
        onChange={
          isStudying
            ? () => {
                setIsStudying(false);
                setCurrentSession(null);
                setLessonContent(null);
              }
            : undefined
        }
        changeLabel="Trocar sessão"
      />
      {tutorAberto && currentSession && currentMission && (
        <TutorTrabalho
          modo="missao-prova"
          tema={`${currentSession.title} (${currentMission.subject})`}
          materia={currentMission.subject}
          diasAteProva={Math.max(
            0,
            differenceInDays(
              new Date(currentMission.exam_date + "T12:00:00"),
              new Date(),
            ),
          )}
          onFechar={() => setTutorAberto(false)}
        />
      )}
    </Shell>
  );
}

function TutorLivre() {
  const [tema, setTema] = useState("");
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4">
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tema.trim() && setAberto(true)}
          placeholder="Ex: sistema solar, frações, verbos..."
          className="flex-1 text-sm border-2 border-amber-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500"
        />
        <button
          onClick={() => tema.trim() && setAberto(true)}
          disabled={!tema.trim()}
          className="bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 justify-center whitespace-nowrap"
        >
          <GraduationCap className="h-4 w-4" /> Estudar com Tutor
        </button>
      </div>
      {aberto && (
        <TutorTrabalho
          modo="missao-prova"
          tema={tema}
          onFechar={() => setAberto(false)}
        />
      )}
    </>
  );
}
