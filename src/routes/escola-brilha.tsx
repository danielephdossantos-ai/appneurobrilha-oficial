import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState, useEffect } from "react";
import { Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2, Calendar, ArrowRight, Star, Trophy, Zap, GraduationCap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReforcoEngine, ReforcoLesson } from "@/core/pedagogy/reforco-engine";
import { useNotifications } from "@/hooks/useNotifications";

export const Route = createFileRoute("/escola-brilha")({
  component: Escola,
});

const materias = [
  { id: "portugues", nome: "Português", emoji: "📚", cor: "from-coral/30 to-coral/5" },
  { id: "matematica", nome: "Matemática", emoji: "🔢", cor: "from-sky/30 to-sky/5" },
  { id: "ciencias", nome: "Ciências", emoji: "🔬", cor: "from-success/20 to-success/5" },
  { id: "historia", nome: "História", emoji: "🏛️", cor: "from-sun/30 to-sun/5" },
  { id: "geografia", nome: "Geografia", emoji: "🌍", cor: "from-lilac/30 to-lilac/5" },
] as const;

function Escola() {
  const { activeChild } = useAppState();
  const { sendNotification } = useNotifications();
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<"basic" | "intermediate" | "advanced">("basic");

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

  const carregarAula = async (materiaId: string, topic?: string, isSystemGenerated = false) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      if (isSystemGenerated && topic) {
        // Geração via SISTEMA (BNCC Estruturada) como pedido pelo usuário
        const lesson = await ReforcoEngine.generateLesson(topic);
        setAula({
          ...lesson,
          materia: materiaId,
          etapa: "ensino",
          isSystem: true
        });
        
        sendNotification({
          title: "Hora de Estudar! 📚",
          message: `${activeChild.nome} começou a rotina de estudos: ${topic}`,
          type: 'estudo'
        });
      } else {
        // Geração via IA para conteúdos dinâmicos
        const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
          body: {
            mode: "escola",
            child: activeChild,
            subject: materiaId,
            topic: topic || "conforme BNCC da série"
          }
        });

        if (error) throw error;
        setAula({ ...data, materia: materiaId, etapa: "ensino" });
      }
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

  if (aula) return <AulaView aula={aula} setAula={setAula} childNome={activeChild.nome} hiperfoco={activeChild.hiperfoco} />;

  return (
    <Shell>
      <PageHeader emoji="🎓" title="Escola Brilha" subtitle={`BNCC adaptada · ${activeChild.serie}`} />

      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-success/5">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{activeChild.avatar}</div>
          <div className="flex-1">
            <div className="font-extrabold text-lg">Continue de onde parou</div>
            <div className="text-sm text-muted-foreground">Português · Encontros vocálicos · Aula 3 de 8</div>
            <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "37%" }} />
            </div>
          </div>
          <button onClick={() => carregarAula("portugues", "Encontros vocálicos")} className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-3 font-bold flex items-center gap-2">
            <Play className="h-4 w-4" /> Retomar
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
      <PageHeader emoji="🎓" title={titulos[aula.etapa]} subtitle={`${aula.materia.charAt(0).toUpperCase() + aula.materia.slice(1)} · Adaptado para você`} />

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
            <p className="text-xl mb-6 font-bold">{aula.pergunta}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aula.opcoes.map((opt: string) => (
                <button 
                  key={opt} 
                  onClick={() => {
                    setTentativa(opt);
                    setAcertou(opt === aula.resposta_correta);
                  }}
                  disabled={acertou === true}
                  className={`btn-tap p-6 rounded-2xl text-xl font-extrabold border-2 transition-all text-left ${
                    tentativa === opt 
                      ? (opt === aula.resposta_correta ? "border-success bg-success/10 text-success" : "border-destructive bg-destructive/5 text-destructive")
                      : "border-border bg-muted hover:border-primary"
                  }`}>
                  {opt}
                </button>
              ))}
            </div>

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
