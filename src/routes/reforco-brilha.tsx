// ============= Full file contents =============

import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useState, useEffect, Component, ReactNode } from "react";
import {
  Search,
  Sparkles,
  BookOpen,
  Calculator,
  Pencil,
  MessageSquare,
  ArrowRight,
  PlayCircle,
  Star,
  Zap,
  Info,
  ChevronRight,
  Trophy,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  Calendar,
  AlertCircle,
  Palette,
  Target,
  PenTool,
  Brain,
  
} from "lucide-react";
import { useAppState } from "@/core/store";
import { usePedagogicalEngine } from "@/hooks/usePedagogicalEngine";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { ReforcoEngine, ReforcoLesson } from "@/engines/pedagogical-engine/reforco-engine";
import { ProgressionService } from "@/engines/progression-engine/service";
import { ProgressionEngine } from "@/engines/progression-engine/engine/progression-engine";
import { ProgressionStats, SkillMastery } from "@/engines/progression-engine/types";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNotifications } from "@/hooks/useNotifications";
import { FloatingActivityControls } from "@/components/activities/FloatingActivityControls";
import { buildAdaptiveUIState } from "@/engines/neuro-engine/adaptation-utils";
import { AulaViewer } from "@/components/reforco-brilha/AulaViewer";
import { PlanoIntervencao } from "@/components/reforco-brilha/PlanoIntervencao";
import { OrientacoesFamilia } from "@/components/reforco-brilha/OrientacoesFamilia";
import { RelatoriosReforco } from "@/components/reforco-brilha/RelatoriosReforco";
import { AssistenteGuiado } from "@/components/reforco-brilha/AssistenteGuiado";
import { BibliotecaInternet } from "@/components/reforco-brilha/BibliotecaInternet";
import { AulaInfinita } from "@/components/reforco-brilha/AulaInfinita";
import { CategoriasReforco } from "@/components/reforco-brilha/CategoriasReforco";
import { IAProfessorMentor } from "@/components/reforco-brilha/IAProfessorMentor";


class ReforcoErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: any) {
    console.error("ReforcoErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Reforço Brilha</h2>
            <p className="text-muted-foreground mt-2 mb-6">
              <b>Erro:</b> {this.state.error?.message}
            </p>
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


type Dificuldade = {
  id: string;
  emoji: string;
  titulo: string;
  busca: string;
  habilidades: string[];
};

const CATALOGO_DIFICULDADES: Dificuldade[] = [
  { id: "rec-letras", emoji: "🔤", titulo: "Não reconhece letras", busca: "reconhecimento de letras alfabeto",
    habilidades: ["Alfabeto", "Letras maiúsculas/minúsculas", "Consciência fonêmica"] },
  { id: "troca-letras", emoji: "🔁", titulo: "Troca letras (b/d, p/q)", busca: "troca de letras espelhamento",
    habilidades: ["Discriminação visual", "Lateralidade", "Ortografia inicial"] },
  { id: "silabas", emoji: "🧩", titulo: "Não junta sílabas", busca: "junção de sílabas formar palavras",
    habilidades: ["Consciência silábica", "Decodificação", "Sílabas simples"] },
  { id: "leitura-lenta", emoji: "🐢", titulo: "Leitura lenta / silabada", busca: "fluência de leitura",
    habilidades: ["Fluência leitora", "Automaticidade", "Prosódia"] },
  { id: "interpretacao", emoji: "📖", titulo: "Dificuldade de interpretação", busca: "interpretação de texto",
    habilidades: ["Compreensão leitora", "Inferência", "Ideia principal"] },
  { id: "ortografia", emoji: "✍️", titulo: "Erros de ortografia", busca: "ortografia palavras",
    habilidades: ["Regras ortográficas", "Memória ortográfica"] },
  { id: "mat-basica", emoji: "➕", titulo: "Dificuldade em matemática", busca: "operações matemáticas básicas",
    habilidades: ["Numeralização", "Adição/Subtração", "Valor posicional"] },
  { id: "tabuada", emoji: "✖️", titulo: "Não memoriza tabuada", busca: "tabuada multiplicação",
    habilidades: ["Multiplicação", "Fato básico", "Memória de longo prazo"] },
  { id: "problemas", emoji: "🧮", titulo: "Não resolve problemas", busca: "resolução de problemas matemáticos",
    habilidades: ["Interpretação de enunciado", "Raciocínio lógico"] },
  { id: "atencao", emoji: "🎯", titulo: "Dificuldade de atenção", busca: "atenção concentração",
    habilidades: ["Atenção sustentada", "Foco", "Funções executivas"] },
  { id: "memoria", emoji: "🧠", titulo: "Dificuldade de memória", busca: "memória de trabalho",
    habilidades: ["Memória de trabalho", "Memória de curto prazo"] },
  { id: "letra", emoji: "🖊️", titulo: "Letra ilegível", busca: "caligrafia coordenação motora fina",
    habilidades: ["Caligrafia", "Coordenação motora fina", "Preensão do lápis"] },
  { id: "copiar", emoji: "📋", titulo: "Dificuldade para copiar do quadro", busca: "cópia do quadro coordenação visomotora",
    habilidades: ["Coordenação visomotora", "Atenção visual"] },
  { id: "organizacao", emoji: "🗂️", titulo: "Dificuldade para organizar tarefas", busca: "organização e planejamento",
    habilidades: ["Funções executivas", "Planejamento", "Sequenciamento"] },
  { id: "tempo", emoji: "⏱️", titulo: "Não termina no tempo", busca: "ritmo de execução tempo",
    habilidades: ["Velocidade de processamento", "Autorregulação"] },
  { id: "frustracao", emoji: "😣", titulo: "Frustra-se com erros", busca: "regulação emocional frustração",
    habilidades: ["Regulação emocional", "Tolerância à frustração"] },
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<import("@/lib/reforco-brilha-search").SearchResult | null>(null);
  const [aulaAberta, setAulaAberta] = useState<{ id: string; titulo: string } | null>(null);
  const [aulasExtras, setAulasExtras] = useState<import("@/lib/reforco-brilha-search").RBAula[]>([]);
  const [carregandoMaisAulas, setCarregandoMaisAulas] = useState(false);
  const [semMaisAulas, setSemMaisAulas] = useState(false);

  const adaptiveUI = buildAdaptiveUIState(
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
  );

  useEffect(() => {
    setAulasExtras([]);
    setSemMaisAulas(false);
  }, [searchResult?.main?.id]);

  const carregarMaisAulas = async () => {
    if (!searchResult?.main?.id) return;
    setCarregandoMaisAulas(true);
    try {
      const { listAulasDaHabilidade } = await import("@/lib/reforco-brilha-search");
      const offset = searchResult.aulas.length + aulasExtras.length;
      const novas = await listAulasDaHabilidade(searchResult.main.id, { limit: 20, offset });
      if (novas.length === 0) setSemMaisAulas(true);
      else setAulasExtras((prev) => [...prev, ...novas]);
      if (novas.length < 20) setSemMaisAulas(true);
    } finally {
      setCarregandoMaisAulas(false);
    }
  };
  const queryClient = useQueryClient();

  const runSearch = async (q: string) => {
    const text = q.trim();
    if (!text) {
      setSearchResult(null);
      return;
    }
    setIsSearching(true);
    try {
      const { searchReforcoBrilha } = await import("@/lib/reforco-brilha-search");
      const res = await searchReforcoBrilha(text);
      setSearchResult(res);
      if (!res.main) {
        // Sem match no catálogo interno: o AulaInfinita assume e monta a aula com bibliotecas públicas.
      }
    } catch (e: any) {
      console.error("Busca Reforço Brilha:", e);
      toast.error(`Erro ao buscar: ${e?.message || "tente novamente"}`);
    } finally {
      setIsSearching(false);
    }
  };


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
        const needsRecovery = await ProgressionEngine.checkNeedForRecovery(
          activeChild.id,
          finalTopic.toUpperCase().replace(/\s/g, "_"),
        );
        if (needsRecovery) {
          toast.info(
            "Identificamos que este tema precisa de reforço extra! Preparei uma aula especial de recuperação.",
          );
        }
      }

      try {
        const lesson = await ReforcoEngine.getLesson(finalTopic, engine?.adaptive as any);
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
            type: "estudo",
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
      const skillCode = lessonContent.topic.toUpperCase().replace(/\s/g, "_");
      await ProgressionEngine.updateMastery(
        activeChild.id,
        skillCode,
        lessonContent.category,
        true,
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
      <div
        className="space-y-8"
        style={{
          fontSize: `${adaptiveUI.fontSize}px`,
          opacity: adaptiveUI.simplifiedUI ? 0.97 : 1,
        }}
      >
      <PageHeader
        icon={Sparkles}
        title="REFORÇO BRILHA"
        subtitle="Biblioteca pedagógica para pais, responsáveis e professores"
      />

      <Card className="border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Modo adaptativo</p>
            <p className="text-sm font-semibold text-foreground">
              {adaptiveUI.simplifiedUI
                ? "Interface simplificada com menos estímulos para apoiar foco e segurança."
                : "Interface mais aberta, com ritmo e estímulos ajustados para autonomia."}
            </p>
          </div>
          <div className="rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-bold text-primary">
            {engine?.profile?.base ?? "Tipico"}
          </div>
        </div>
      </Card>

      {!isTeaching ? (
        <div className="space-y-8 animate-in fade-in duration-500">


          <IAProfessorMentor
            onAbrirAula={(id, titulo) => setAulaAberta({ id, titulo })}
          />






          {aulaAberta && (
            <AulaViewer
              aulaId={aulaAberta.id}
              titulo={aulaAberta.titulo}
              onClose={() => setAulaAberta(null)}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-success/5 border-success/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-success/20 grid place-items-center text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">IA Professor Mentor</h4>
                  <p className="text-[11px] text-muted-foreground">
                    Geração automática de trilhas personalizadas para cada dificuldade.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/20 grid place-items-center text-primary">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Sistema Contínuo</h4>
                  <p className="text-[11px] text-muted-foreground">
                    As aulas geradas ficam salvas e evoluem com a comunidade.
                  </p>
                </div>
              </div>
            </Card>

          </div>


          {/* Relatório da criança — sempre no final da página */}
          <div className="pt-4 border-t-2 border-dashed border-indigo-200">
            <RelatoriosReforco />
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
              <p className="font-bold animate-pulse">
                O Professor Brilha está preparando sua aula...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                {/* Cabeçalho da Aula Premium */}
                <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-background rounded-[2.5rem] p-8 border border-primary/20 relative overflow-hidden shadow-premium">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Star className="h-24 w-24 text-primary fill-primary" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                    <div className="h-24 w-24 rounded-3xl bg-white shadow-xl grid place-items-center transform -rotate-3 border-2 border-primary/10 text-primary">
                      {lessonContent.category === "Matemática" ? (
                        <Calculator className="h-12 w-12" />
                      ) : lessonContent.category === "Português" ? (
                        <PenTool className="h-12 w-12" />
                      ) : (
                        <BookOpen className="h-12 w-12" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                          TRILHA PEDAGÓGICA
                        </span>
                        <Pill tone="success" className="text-[10px] font-black">
                          TRILHA ATIVA
                        </Pill>
                      </div>
                      <h2 className="text-3xl font-black text-foreground leading-none">
                        {lessonContent.title}
                      </h2>
                      <p className="text-muted-foreground mt-2 font-medium">
                        {lessonContent.explanation}
                      </p>
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
                        {lvl === "basic"
                          ? "Simples"
                          : lvl === "intermediate"
                            ? "Intermediário"
                            : "Complexo"}
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
                      📚 Trilha pedagógica estruturada, sem uso de IA generativa.
                    </div>
                    {lessonContent.levels[currentLevel]
                      .slice(0, engine?.adaptive?.maxItemsPerScreen ?? 6)
                      .map((step, idx) => (
                        <div
                          key={`${currentLevel}-${idx}`}
                          className="bg-card rounded-3xl p-6 border border-border/50 shadow-soft animate-in slide-in-from-bottom-4 stimuli-sensitive"
                          style={{
                            animationDelay: `${idx * (0.1 * (engine?.adaptive?.animationSpeed ?? 1))}s`,
                          }}
                        >
                          <div className="flex gap-4">
                            <div
                              className={`h-10 w-10 rounded-2xl shrink-0 grid place-items-center text-lg ${
                                step.type === "explanation"
                                  ? "bg-blue-100 text-blue-600"
                                  : step.type === "example"
                                    ? "bg-purple-100 text-purple-600"
                                    : "bg-green-100 text-green-600"
                              }`}
                            >
                              {step.type === "explanation"
                                ? "💡"
                                : step.type === "example"
                                  ? "📝"
                                  : "🎯"}
                            </div>
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
                                {step.type === "explanation"
                                  ? "Explicação"
                                  : step.type === "example"
                                    ? "Exemplo Prático"
                                    : "Desafio"}
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
                          <p className="text-sm font-medium leading-tight">{tip}</p>
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
                          <span className="text-lg font-black text-primary">
                            {Math.round(stats.evolution_percentage)}%
                          </span>
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
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">
                          Domínio por Habilidade
                        </h4>
                        <div className="space-y-2">
                          {skills.map((skill) => (
                            <div
                              key={skill.id}
                              className="bg-card border border-border/50 rounded-xl p-3 flex items-center justify-between"
                            >
                              <span className="text-[10px] font-bold truncate max-w-[120px]">
                                {skill.skill_code}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-success"
                                    style={{ width: `${skill.mastery_level}%` }}
                                  />
                                </div>
                                <span className="text-[10px] font-black">
                                  {Math.round(skill.mastery_level)}%
                                </span>
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
                            Este conteúdo foi gerado para o nível de {activeChild?.nome}, adaptando
                            a complexidade automaticamente.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <PipPedagogicalGuidance
                    stage={lessonContent ? "explanation" : "idle"}
                    className="animate-in fade-in slide-in-from-right-4"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <FloatingActivityControls
        onSkip={
          isTeaching && lessonContent
            ? () => {
                toast.info("Vamos pular para a prática!");
              }
            : undefined
        }
        onChange={
          isTeaching
            ? () => {
                setIsTeaching(false);
                setLessonContent(null);
              }
            : undefined
        }
        changeLabel="Trocar tópico"
      />
      {aulaAberta && (
        <AulaViewer
          aulaId={aulaAberta.id}
          titulo={aulaAberta.titulo}
          onClose={() => setAulaAberta(null)}
        />
      )}
      </div>
    </Shell>
  );
}

export default ReforcoBrilha;
