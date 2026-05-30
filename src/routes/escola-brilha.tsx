import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect, Component, ReactNode } from "react";
import { Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2, AlertCircle, Palette } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { ActivityProceduralService } from "@/modules/escola-brilha/services/ActivityProceduralService";

// Error Boundary para capturar falhas na renderização da aula
class AulaErrorBoundary extends Component<{ children: ReactNode; onReset: () => void }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("AulaErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Ops! Algo deu errado na aula.</h2>
            <p className="text-muted-foreground mt-2 mb-6">
              Ocorreu um erro técnico ao renderizar esta atividade.<br/>
              <b>Erro:</b> {this.state.error?.message}
            </p>
            <button 
              onClick={() => {
                this.setState({ hasError: false });
                this.props.onReset();
              }}
              className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-glow"
            >
              Tentar novamente
            </button>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}


export const Route = createFileRoute("/escola-brilha")({
  component: Escola,
});

const materias = [
  { id: "portugues", nome: "Português", emoji: "📚", cor: "from-coral/30 to-coral/5" },
  { id: "matematica", nome: "Matemática", emoji: "🔢", cor: "from-sky/30 to-sky/5" },
  { id: "ciencias", nome: "Ciências", emoji: "🔬", cor: "from-success/20 to-success/5" },
  { id: "historia", nome: "História", emoji: "🏛️", cor: "from-sun/30 to-sun/5" },
  { id: "geografia", nome: "Geografia", emoji: "🌍", cor: "from-lilac/30 to-lilac/5" },
  { id: "artes", nome: "Artes", emoji: "🎨", cor: "from-pink/30 to-pink/5" },
] as const;

function Escola() {
  const { activeChild } = useAppState();
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>(activeChild?.serie || "1º Ano");

  const grades = [
    "Educação Infantil",
    "1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano",
    "6º Ano", "7º Ano", "8º Ano", "9º Ano"
  ];

  const carregarAula = async (materiaId: string, topic?: string) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      // 1. O SISTEMA gera a atividade (Título, Pergunta, Opções, Resposta)
      const service = ActivityProceduralService.getInstance();
      const domain = materiaId === "matematica" ? "math" : "linguistics";
      
      console.log("Generating activity for domain:", domain, "grade:", selectedGrade);
      
      const activity = service.generateActivity({
        domain,
        difficulty: 0.5,
        grade: selectedGrade,
        childProfile: {
          neurodivergence: [activeChild.diagnostico],
          interests: [activeChild.hiperfoco],
          sensoryThreshold: 0.5,
          lastErrors: []
        },
        previousActivityIds: []
      });

      console.log("Activity generated:", activity);

      // Pre-formatar os dados para a IA entender o que é pergunta, opções e resposta
      let systemQuestion = activity.instruction;
      let systemOptions = [];
      let systemAnswer = "";

      if (activity.content.options) {
        systemOptions = activity.content.options.map(String);
      }

      if (activity.content.answer) {
        systemAnswer = String(activity.content.answer);
      } else if (activity.content.targetCount !== undefined) {
        systemAnswer = String(activity.content.targetCount);
      } else if (activity.content.a !== undefined) {
        systemAnswer = String(activity.content.a);
      } else if (activity.content.firstLetter) {
        systemAnswer = String(activity.content.firstLetter);
      } else if (activity.content.missingSyllable) {
        systemAnswer = String(activity.content.missingSyllable);
      }

      if (activity.content.q) {
        systemQuestion = activity.content.q;
      } else if (activity.content.question) {
        systemQuestion = activity.content.question;
      }

      console.log("Formatted data for AI:", { systemQuestion, systemOptions, systemAnswer });

      // 2. A IA atua apenas como "Professor" ensinando o que o sistema gerou
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "escola",
          child: activeChild,
          subject: materiaId,
          topic: activity.title,
          systemQuestion,
          systemOptions,
          systemAnswer,
          instruction: activity.instruction
        }
      });

      if (error) throw error;
      
      console.log("AI Response:", data);

      const novaAula = { 
        ...data, 
        materia: materiaId, 
        etapa: "ensino", 
        grade: selectedGrade,
        // Garantindo que os dados do Motor Infinito persistam para a terceira tela
        pergunta: systemQuestion,
        opcoes: systemOptions,
        resposta_correta: systemAnswer
      };

      console.log("FINAL AULA STATE:", novaAula);
      setAula(novaAula);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao gerar a aula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  if (loading) {
    return (
      <Shell>
        <div className="h-full flex flex-col items-center justify-center p-12 text-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
          <h2 className="text-2xl font-bold">Preparando sua aula especial...</h2>
          <p className="text-muted-foreground">O {activeChild.hiperfoco === 'dinossauros' ? 'dinossauro' : 'amigo'} está organizando tudo!</p>
        </div>
      </Shell>
    );
  }

  if (aula) {
    return (
      <AulaErrorBoundary onReset={() => setAula(null)}>
        <AulaView aula={aula} setAula={setAula} childNome={activeChild.nome} hiperfoco={activeChild.hiperfoco} />
      </AulaErrorBoundary>
    );
  }

  return (
    <Shell>
      <PageHeader emoji="🎓" title="Escola Brilha" subtitle={`BNCC adaptada · Atualmente em: ${selectedGrade}`} />

      <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                selectedGrade === grade
                  ? "bg-primary text-white shadow-glow scale-105"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-success/5">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{activeChild.avatar}</div>
          <div className="flex-1">
            <div className="font-extrabold text-lg">Pronto para brilhar?</div>
            <div className="text-sm text-muted-foreground">Escolha uma matéria do {selectedGrade} e vamos começar!</div>
            <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "10%" }} />
            </div>
          </div>
          <button onClick={() => carregarAula("matematica")} className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-3 font-bold flex items-center gap-2">
            <Play className="h-4 w-4" /> Começar
          </button>
        </div>
      </Card>

      <h2 className="text-xl mb-4">Matérias</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {materias.map((m) => (
          <button key={m.id} onClick={() => carregarAula(m.id)}
            className={`rounded-2xl p-5 bg-gradient-to-br ${m.cor} border border-border shadow-soft hover:shadow-glow transition-all text-left`}>
            <div className="text-4xl">{m.emoji}</div>
            <div className="font-extrabold text-lg mt-2">{m.nome}</div>
            <Pill tone="info">Nível {(activeChild.niveis as any)[m.id] ?? 2}</Pill>
          </button>
        ))}
      </div>
    </Shell>
  );
}

function AulaView({ aula, setAula, childNome, hiperfoco }: { aula: any; setAula: (a: any) => void; childNome: string; hiperfoco: string }) {
  const [acertou, setAcertou] = useState<null | boolean>(null);
  const [tentativa, setTentativa] = useState<string | null>(null);

  const titulos: Record<string, string> = {
    ensino: "📖 Aula",
    demo: "🎨 Demonstração",
    opcoes: "✨ Sua vez!",
  };

  return (
    <Shell>
      <PageHeader 
        emoji="🎓" 
        title={titulos[aula.etapa] || "Aula"} 
        subtitle={`${(aula.materia || "Aula").charAt(0).toUpperCase() + (aula.materia || "Aula").slice(1)} · ${aula.grade || "Geral"} · Adaptado para você`} 
      />

      <Card className="mb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-3">
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "ensino" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1. Ensino</span>
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "demo" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2. Demonstração</span>
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "opcoes" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>3. Opções</span>
        </div>


        {aula.etapa === "ensino" && (
          <div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-sky/40 to-petal/30 grid place-items-center mb-4 relative overflow-hidden">
              <div className="text-8xl animate-pulse">
                {hiperfoco === "dinossauros" ? "🦕" : hiperfoco === "espaco" ? "🚀" : hiperfoco === "animais" ? "🦁" : "🌟"}
              </div>
            </div>
            <p className="text-xl leading-relaxed font-medium">
              {aula.ensino}
            </p>
            <div className="mt-6 flex gap-2 flex-wrap">
              <button onClick={() => setAula({ ...aula, etapa: "demo" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
                Continuar →
              </button>
            </div>
          </div>
        )}

        {aula.etapa === "demo" && (
          <div>
            <h3 className="text-lg font-bold mb-4">Veja alguns exemplos:</h3>
            <div className="rounded-2xl bg-secondary p-8 mb-6 text-center text-3xl font-extrabold text-primary leading-loose">
              {aula.demo}
            </div>
            <button onClick={() => setAula({ ...aula, etapa: "opcoes" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
              Estou pronto para o desafio!
            </button>
          </div>
        )}

        {aula.etapa === "opcoes" && (
          <div>
            <p className="text-xl mb-6 font-bold">{aula.pergunta || "O que você acha?"}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(aula.opcoes || []).map((opt: string, index: number) => (
                <button 
                  key={`${opt}-${index}`} 
                  onClick={() => {
                    setTentativa(opt);
                    setAcertou(opt === (aula.resposta_correta || aula.answer));
                  }}
                  disabled={acertou === true}
                  className={`btn-tap p-6 rounded-2xl text-xl font-extrabold border-2 transition-all text-left ${
                    tentativa === opt 
                      ? (opt === (aula.resposta_correta || aula.answer) ? "border-success bg-success/10 text-success" : "border-destructive bg-destructive/5 text-destructive")
                      : "border-border bg-muted hover:border-primary"
                  }`}>
                  {opt}
                </button>
              ))}
            </div>
            {(!aula.opcoes || aula.opcoes.length === 0) && (
              <p className="text-muted-foreground italic">Nenhuma opção de resposta disponível.</p>
            )}


            {acertou === true && (
              <div className="mt-6 p-6 rounded-2xl bg-success/15 border-2 border-success/30 text-success text-lg animate-bounce-short">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8" />
                  <div>
                    <div className="font-extrabold">Incrível, {childNome}!</div>
                    <div>{aula.reforco_positivo}</div>
                  </div>
                </div>
              </div>
            )}
            
            {acertou === false && (
              <div className="mt-6 p-6 rounded-2xl bg-sun/20 border-2 border-sun/30 flex items-start gap-3">
                <Lightbulb className="h-7 w-7 text-sun shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sun-foreground">Dica especial:</div>
                  <div className="text-lg text-sun-foreground/90">{aula.dica}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      <button onClick={() => setAula(null)} className="text-sm text-muted-foreground hover:text-foreground">← Voltar para matérias</button>
    </Shell>
  );
}
