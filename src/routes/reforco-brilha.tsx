// ============= Full file contents =============

import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useState, useEffect, Component, ReactNode } from "react";
import { Search, Sparkles, BookOpen, Calculator, Pencil, MessageSquare, ArrowRight, PlayCircle, Star, Zap, Info, ChevronRight, Trophy, CheckCircle2, RefreshCw, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { useAppState } from "@/core/store";
import { usePedagogicalEngine } from "@/hooks/usePedagogicalEngine";
import { ReforcoEngine, ReforcoLesson } from "@/engines/pedagogical-engine/reforco-engine";
import { ProgressionService } from "@/engines/progression-engine/service";
import { ProgressionEngine } from "@/engines/progression-engine/engine/progression-engine";
import { ProgressionStats, SkillMastery } from "@/engines/progression-engine/types";

class ReforcoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: any) { console.error("ReforcoErrorBoundary:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Reforço Brilha</h2>
            <p className="text-muted-foreground mt-2 mb-6"><b>Erro:</b> {this.state.error?.message}</p>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}

export const Route = createFileRoute("/reforco-brilha")({
  component: () => (
    <ReforcoErrorBoundary>
      <ReforcoBrilha />
    </ReforcoErrorBoundary>
  ),
});

const CATEGORIAS = [
  { id: "tabuada", label: "Tabuada", icon: Calculator, color: "text-blue-500", suggestions: ["Tabuada do 7", "Tabuada do 9", "Multiplicação por 5"] },
  { id: "portugues", label: "Português", icon: Pencil, color: "text-orange-500", suggestions: ["Verbos no passado", "Acentuação", "Ortografia do S e Z"] },
  { id: "problemas", label: "Problemas", icon: BookOpen, color: "text-purple-500", suggestions: ["Problemas de divisão", "Lógica matemática", "Sistema monetário"] },
  { id: "leitura", label: "Alfabetização", icon: MessageSquare, color: "text-green-500", suggestions: ["Leitura de sílabas", "Formação de frases", "Interpretação de texto"] },
];

function ReforcoBrilha() {
  const { activeChild } = useAppState();
  const engine = usePedagogicalEngine();
  const { sendNotification } = useNotifications();
  const [topic, setTopic] = useState("");
  const [isTeaching, setIsTeaching] = useState(false);
  const [lessonContent, setLessonContent] = useState<ReforcoLesson | null>(null);
  const [currentLevel, setCurrentLevel] = useState<"basic" | "intermediate" | "advanced">("basic");
  const [stats, setStats] = useState<ProgressionStats | null>(null);
  const [skills, setSkills] = useState<SkillMastery[]>([]);
  const [pendingReviews, setPendingReviews] = useState<any[]>([]);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const queryClient = useQueryClient();

  const { data: agenda = [] } = useQuery({
    queryKey: ["study_agenda", activeChild?.id],
    queryFn: async () => {
      if (!activeChild) return [];
      const { data, error } = await supabase
        .from("study_agenda")
        .select("*")
        .eq("child_id", activeChild.id)
        .eq("completed", false)
        .order("exam_date", { ascending: true });
      
      if (error) throw error;
      return data;
    },
    enabled: !!activeChild,
  });

  useEffect(() => {
    if (activeChild) {
      loadGeneralStats();
    }
  }, [activeChild]);

  const loadGeneralStats = async () => {
    if (!activeChild) return;
    setIsLoadingStats(true);
    try {
      const reviews = await ProgressionService.getPendingReviews(activeChild.id);
      setPendingReviews(reviews);
    } catch (error) {
      console.error("Erro ao carregar stats:", error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  const loadTopicStats = async (materia: string) => {
    if (!activeChild) return;
    try {
      const topicStats = await ProgressionService.getStats(activeChild.id, materia);
      const topicSkills = await ProgressionService.getSkillMastery(activeChild.id, materia);
      setStats(topicStats);
      setSkills(topicSkills);
    } catch (error) {
      console.error("Erro ao carregar stats do tópico:", error);
    }
  };

  const startLesson = (customTopic?: string) => {
    const finalTopic = customTopic || topic;
    if (!finalTopic) return;
    
    setIsTeaching(true);
    setLessonContent(null);
    
    // Generating structured lesson
    const loadLesson = async () => {
      if (activeChild) {
        const needsRecovery = await ProgressionEngine.checkNeedForRecovery(activeChild.id, finalTopic.toUpperCase().replace(/\s/g, '_'));
        if (needsRecovery) {
          toast.info("Identificamos que este tema precisa de reforço extra! Preparei uma aula especial de recuperação.");
        }
      }

      try {
        const lesson = await ReforcoEngine.generateLesson(finalTopic, engine?.adaptive as any);
        setLessonContent(lesson);
        setCurrentLevel("basic");
        if (lesson.category) {
          loadTopicStats(lesson.category);
        }

        // Notificar a mãe que a criança começou a estudar
        if (activeChild) {
          sendNotification({
            title: `${activeChild.nome} começou a estudar!`,
            message: `${activeChild.nome} está brilhando agora no reforço de "${finalTopic}".`,
            type: 'estudo'
          });
        }
      } catch (error) {
        console.error("Erro ao carregar aula:", error);
        setIsTeaching(false);
      }
    };

    loadLesson();
  };

  const completeLesson = async () => {
    if (!activeChild || !lessonContent) return;
    
    try {
      // Mock de sucesso na atividade
      const skillCode = lessonContent.topic.toUpperCase().replace(/\s/g, '_');
      await ProgressionEngine.updateMastery(
        activeChild.id, 
        skillCode, 
        lessonContent.category, 
        true
      );
      
      if (lessonContent.activityId) {
        await ProgressionEngine.scheduleNextReview(activeChild.id, lessonContent.activityId, 5);
      }
      
      toast.success("Parabéns! Sua evolução foi registrada.");
      setIsTeaching(false);
      setLessonContent(null);
      loadGeneralStats();
    } catch (error) {
      console.error("Erro ao completar aula:", error);
      toast.error("Erro ao salvar progresso.");
    }
  };

  return (
    <Shell>
      <PageHeader 
        emoji="✨" 
        title="REFORÇO BRILHA" 
        subtitle="O professor particular infinito que ensina qualquer assunto" 
      />

      {!isTeaching ? (
        <div className="space-y-8 animate-in fade-in duration-500">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              O que vamos reforçar hoje?
            </h3>
            <div className="relative">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && startLesson()}
                placeholder="Ex: Tabuada do 7, Verbos, Ortografia..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none text-lg transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <button 
                onClick={() => startLesson()}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-xl hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              A mãe escreve o tema e o Sistema Brilha cria a aula perfeita.
            </p>
            </Card>

          {agenda.length > 0 && (
            <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
              <h3 className="text-sm font-bold flex items-center gap-2 px-1 text-indigo-600">
                <Calendar className="h-4 w-4" />
                PLANO DE ESTUDOS DA SEMANA (DEFINIDO PELA MÃE)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agenda.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => startLesson(item.topic)}
                    className="p-5 rounded-[2rem] bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100/50 transition-all text-left flex items-start gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.type === 'prova' ? '🚩' : item.type === 'trabalho' ? '📝' : '📖'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                          {item.type}
                        </span>
                        {item.exam_date && (
                          <span className="text-[10px] text-indigo-400 font-bold">
                            {format(new Date(item.exam_date + 'T12:00:00'), "dd/MM", { locale: ptBR })}
                          </span>
                        )}
                      </div>
                      <div className="font-extrabold text-slate-800 text-lg">{item.topic}</div>
                      <div className="mt-2 flex items-center gap-1.5 text-indigo-600 font-bold text-xs">
                        ESTUDAR AGORA <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {pendingReviews.length > 0 && (
            <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
              <h3 className="text-sm font-bold flex items-center gap-2 px-1 text-primary">
                <RefreshCw className="h-4 w-4 animate-spin-slow" />
                REVISÕES AGENDADAS (Repetição Espaçada)
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {pendingReviews.map((review) => (
                  <button
                    key={review.id}
                    onClick={() => startLesson(review.activity?.titulo || review.skill_code)}
                    className="flex-shrink-0 w-48 p-4 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all text-left group"
                  >
                    <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-wider">Revisão Sugerida</div>
                    <div className="font-bold text-sm line-clamp-1">{review.activity?.titulo || review.skill_code}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="h-1.5 flex-1 bg-primary/10 rounded-full overflow-hidden mr-2">
                        <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                      </div>
                      <PlayCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CATEGORIAS.map((cat) => (
                  <div key={cat.id} className="space-y-3">
                    <h4 className="font-bold flex items-center gap-2 px-1 text-base">
                      <cat.icon className={`h-5 w-5 ${cat.color}`} />
                      {cat.label}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {cat.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setTopic(s);
                            startLesson(s);
                          }}
                          className="text-left p-3.5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 hover:shadow-glow transition-all flex justify-between items-center group"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">{s}</span>
                            <span className="text-[10px] text-muted-foreground">Sistema Infinito · BNCC</span>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <PlayCircle className="h-5 w-5" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-success/5 border-success/20">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-success/20 grid place-items-center text-2xl">📚</div>
                    <div>
                      <h4 className="font-bold text-sm">Base Pedagógica Completa</h4>
                      <p className="text-[11px] text-muted-foreground">Tabuada, Verbos, Interpretação, Ortografia e mais.</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary/20 grid place-items-center text-2xl">🧠</div>
                    <div>
                      <h4 className="font-bold text-sm">Neuro-Adaptação Ativa</h4>
                      <p className="text-[11px] text-muted-foreground">O sistema ensina muito melhor que um professor comum.</p>
                    </div>
                  </div>
                </Card>
              </div>
        </div>
      ) : (
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => {
              setIsTeaching(false);
              setLessonContent(null);
            }}
            className="mb-4 text-sm font-bold text-primary flex items-center gap-1 hover:underline"
          >
            ← Voltar para temas
          </button>
          
          {!lessonContent ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="font-bold animate-pulse">O Professor Brilha está preparando sua aula...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cabeçalho da Aula Premium */}
              <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-background rounded-[2.5rem] p-8 border border-primary/20 relative overflow-hidden shadow-premium">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Star className="h-24 w-24 text-primary fill-primary" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                  <div className="h-24 w-24 rounded-3xl bg-white shadow-xl grid place-items-center text-5xl transform -rotate-3 border-2 border-primary/10">
                    {lessonContent.category === "Matemática" ? "🧮" : lessonContent.category === "Português" ? "✍️" : "📚"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">SISTEMA INFINITO</span>
                      <Pill tone="success" className="text-[10px] font-black">SISTEMA BNCC ATIVO</Pill>
                    </div>
                    <h2 className="text-3xl font-black text-foreground leading-none">{lessonContent.title}</h2>
                    <p className="text-muted-foreground mt-2 font-medium">{lessonContent.explanation}</p>
                  </div>
                </div>

                {/* Seletor de Nível de Progressão */}
                <div className="flex p-1 bg-white/50 backdrop-blur-sm rounded-2xl mt-8 border border-white max-w-md">
                  {(["basic", "intermediate", "advanced"] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setCurrentLevel(lvl)}
                      className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        currentLevel === lvl 
                        ? "bg-primary text-white shadow-glow scale-105" 
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {lvl === "basic" && <Zap className="h-3 w-3" />}
                      {lvl === "intermediate" && <Star className="h-3 w-3" />}
                      {lvl === "advanced" && <Trophy className="h-3 w-3" />}
                      {lvl === "basic" ? "Simples" : lvl === "intermediate" ? "Intermediário" : "Complexo"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Conteúdo da Aula */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 px-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Roteiro de Estudos (Gerado pelo Sistema)
                  </h3>
                  <div className="bg-indigo-600/10 border border-indigo-200 rounded-2xl p-4 mb-4 text-xs text-indigo-700 font-medium">
                    ✨ O Professor IA está ensinando agora o roteiro que o sistema preparou baseado na BNCC.
                  </div>
                  {lessonContent.levels[currentLevel].slice(0, engine?.adaptive?.maxItemsPerScreen ?? 6).map((step, idx) => (
                    <div 
                      key={`${currentLevel}-${idx}`} 
                      className="bg-card rounded-3xl p-6 border border-border/50 shadow-soft animate-in slide-in-from-bottom-4 stimuli-sensitive"
                      style={{ 
                        animationDelay: `${idx * (0.1 * (engine?.adaptive?.animationSpeed ?? 1))}s`,
                      }}
                    >
                      <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-2xl shrink-0 grid place-items-center text-lg ${
                          step.type === "explanation" ? "bg-blue-100 text-blue-600" :
                          step.type === "example" ? "bg-purple-100 text-purple-600" :
                          "bg-green-100 text-green-600"
                        }`}>
                          {step.type === "explanation" ? "💡" : step.type === "example" ? "📝" : "🎯"}
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
                            {step.type === "explanation" ? "Explicação" : step.type === "example" ? "Exemplo Prático" : "Desafio"}
                          </span>
                          <p className="text-lg font-medium leading-relaxed text-foreground">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 flex gap-3">
                    <button 
                      onClick={completeLesson}
                      className="flex-1 bg-primary text-white font-black py-5 rounded-[2rem] shadow-glow hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-2 text-lg"
                    >
                      FINALIZAR E SALVAR PROGRESSO
                      <CheckCircle2 className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Dicas Premium */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 px-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    Dicas Premium
                  </h3>
                  <div className="space-y-3">
                    {lessonContent.premiumTips.map((tip, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-4 border border-secondary/50 relative overflow-hidden group hover:border-primary/30 transition-colors"
                      >
                        <div className="absolute top-2 right-2 opacity-20 group-hover:scale-125 transition-transform">
                          <Info className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-medium leading-tight">
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {stats && (
                    <Card className="bg-primary/5 border-primary/20 mt-4 overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Sua Evolução
                        </h4>
                        <span className="text-lg font-black text-primary">{Math.round(stats.evolution_percentage)}%</span>
                      </div>
                      <div className="h-3 w-full bg-primary/10 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-primary shadow-glow transition-all duration-1000" 
                          style={{ width: `${stats.evolution_percentage}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground font-medium">
                        {stats.activities_completed} atividades concluídas nesta matéria.
                      </p>
                    </Card>
                  )}

                  {skills.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Domínio por Habilidade</h4>
                      <div className="space-y-2">
                        {skills.map((skill) => (
                          <div key={skill.id} className="bg-card border border-border/50 rounded-xl p-3 flex items-center justify-between">
                            <span className="text-[10px] font-bold truncate max-w-[120px]">{skill.skill_code}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-success" style={{ width: `${skill.mastery_level}%` }} />
                              </div>
                              <span className="text-[10px] font-black">{Math.round(skill.mastery_level)}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Card className="bg-amber-50 border-amber-200 mt-6">
                    <div className="flex gap-3">
                      <div className="text-2xl">👩‍🏫</div>
                      <div>
                        <h4 className="text-sm font-bold text-amber-900">Nota do Professor</h4>
                        <p className="text-xs text-amber-800 leading-relaxed mt-1">
                          Este conteúdo foi gerado para o nível de {activeChild?.nome}, adaptando a complexidade automaticamente.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Shell>
  );
}
