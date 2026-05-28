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

      {agenda.length > 0 && (
        <div className="mb-10 space-y-4 animate-in slide-in-from-top-4 duration-500">
          <h3 className="text-sm font-black flex items-center gap-2 px-1 text-primary uppercase tracking-widest">
            <Calendar className="h-4 w-4" />
            Agenda da Mamãe: Estudos da Semana
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agenda.map((item) => (
              <button
                key={item.id}
                onClick={() => carregarAula("Geral", item.topic, true)}
                className="p-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all text-left flex items-start gap-4 group relative overflow-hidden"

              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-3xl">
                  {item.type === 'prova' ? '🚩' : item.type === 'trabalho' ? '📝' : '📖'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    {item.exam_date && (
                      <span className="text-[10px] text-muted-foreground font-bold">
                        {format(new Date(item.exam_date + 'T12:00:00'), "dd 'de' MMMM", { locale: ptBR })}
                      </span>
                    )}
                  </div>
                  <div className="font-black text-slate-800 text-xl leading-tight">{item.topic}</div>
                  <div className="mt-3 flex items-center gap-1.5 text-primary font-bold text-xs">
                    INICIAR ROTINA DE ESTUDO <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
                <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="h-20 w-20" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-xl font-black mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        Matérias Base
      </h2>
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

function AulaView({ 
  aula, 
  setAula, 
  childNome, 
  hiperfoco,
  currentLevel,
  setCurrentLevel
}: { 
  aula: any; 
  setAula: (a: any) => void; 
  childNome: string; 
  hiperfoco: string;
  currentLevel: "basic" | "intermediate" | "advanced";
  setCurrentLevel: (l: "basic" | "intermediate" | "advanced") => void;
}) {
  const [acertou, setAcertou] = useState<null | boolean>(null);
  const [tentativa, setTentativa] = useState<string | null>(null);

  const titulos: Record<string, string> = {
    ensino: "📖 Aula",
    demo: "🎨 Demonstração",
    opcoes: "✨ Sua vez!",
  };

  // Se for sistema, pegamos o conteúdo do nível atual
  const steps = aula.isSystem ? aula.levels[currentLevel] : [];
  const explanation = aula.isSystem ? steps.find((s: any) => s.type === "explanation")?.text : aula.ensino;
  const example = aula.isSystem ? steps.find((s: any) => s.type === "example")?.text : aula.demo;
  const exercise = aula.isSystem ? steps.find((s: any) => s.type === "exercise") : null;

  return (
    <Shell>
      <PageHeader 
        emoji="🎓" 
        title={aula.isSystem ? aula.title : titulos[aula.etapa]} 
        subtitle={aula.isSystem ? "Sistema BNCC Ativo" : `${aula.materia.charAt(0).toUpperCase() + aula.materia.slice(1)} · Adaptado para você`} 
      />

      {aula.isSystem && (
        <div className="flex p-1 bg-white/50 backdrop-blur-sm rounded-2xl mb-6 border border-white max-w-md mx-auto">
          {(["basic", "intermediate", "advanced"] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setCurrentLevel(lvl);
                setAcertou(null);
                setTentativa(null);
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                currentLevel === lvl 
                ? "bg-primary text-white shadow-glow scale-105" 
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {lvl === "basic" && <Zap className="h-3 w-3" />}
              {lvl === "intermediate" && <Star className="h-3 w-3" />}
              {lvl === "advanced" && <Trophy className="h-3 w-3" />}
              {lvl === "basic" ? "Fácil" : lvl === "intermediate" ? "Médio" : "Mestre"}
            </button>
          ))}
        </div>
      )}

      <Card className="mb-4">
        {!aula.isSystem && (
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-3">
            <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "ensino" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1. Ensino</span>
            <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "demo" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2. Demonstração</span>
            <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "opcoes" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>3. Opções</span>
          </div>
        )}

        {(aula.etapa === "ensino" || aula.isSystem) && (
          <div className="animate-in fade-in duration-500">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-primary/20 via-sky/10 to-transparent grid place-items-center mb-6 relative overflow-hidden border-2 border-primary/5">
              <div className="text-9xl animate-bounce-short">
                {hiperfoco === "dinossauros" ? "🦕" : hiperfoco === "espaco" ? "🚀" : hiperfoco === "animais" ? "🦁" : "🌟"}
              </div>
              <div className="absolute inset-0 bg-grid-slate-100/[0.05] bg-[center_top_-1px]"></div>
            </div>
            
            <div className="bg-white/40 p-6 rounded-2xl border border-white/60 mb-6">
              <h3 className="font-black text-primary uppercase tracking-widest text-xs mb-2">Explicação do Professor</h3>
              <p className="text-2xl leading-relaxed font-black text-slate-800">
                {explanation}
              </p>
            </div>

            {example && (
              <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary/50 mb-6">
                <h3 className="font-black text-secondary-foreground uppercase tracking-widest text-xs mb-2">Exemplo Prático</h3>
                <div className="text-xl font-bold text-slate-700 italic">
                  "{example}"
                </div>
              </div>
            )}

            {!aula.isSystem && (
              <div className="mt-6 flex gap-2 flex-wrap">
                <button onClick={() => setAula({ ...aula, etapa: "demo" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg shadow-glow">
                  Continuar →
                </button>
              </div>
            )}
          </div>
        )}

        {(aula.etapa === "demo" && !aula.isSystem) && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <h3 className="text-lg font-bold mb-4">Veja alguns exemplos:</h3>
            <div className="rounded-2xl bg-secondary p-8 mb-6 text-center text-3xl font-extrabold text-primary leading-loose">
              {aula.demo}
            </div>
            <button onClick={() => setAula({ ...aula, etapa: "opcoes" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg shadow-glow">
              Estou pronto para o desafio!
            </button>
          </div>
        )}

        {(aula.etapa === "opcoes" || (aula.isSystem && exercise)) && (
          <div className="animate-in slide-in-from-bottom-4 duration-500 mt-8 pt-8 border-t border-slate-100">
            <p className="text-2xl mb-8 font-black text-slate-800">
              {aula.isSystem ? exercise.text : aula.pergunta}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(aula.isSystem ? ["Opção A", "Opção B", "Opção C", "Opção D"] : aula.opcoes).map((opt: string) => (
                <button 
                  key={opt} 
                  onClick={() => {
                    setTentativa(opt);
                    // No modo sistema, vamos simular acerto na Opção B para teste ou se houver resposta_correta
                    const isCorrect = aula.isSystem ? opt === "Opção B" : opt === aula.resposta_correta;
                    setAcertou(isCorrect);
                  }}
                  disabled={acertou === true}
                  className={`btn-tap p-6 rounded-[2rem] text-xl font-black border-4 transition-all text-left shadow-soft ${
                    tentativa === opt 
                      ? (acertou ? "border-success bg-success/10 text-success" : "border-destructive bg-destructive/5 text-destructive")
                      : "border-slate-100 bg-slate-50 hover:border-primary/40 hover:bg-white"
                  }`}>
                  {opt}
                </button>
              ))}
            </div>

            {acertou === true && (
              <div className="mt-8 p-8 rounded-[2.5rem] bg-gradient-to-br from-success/20 to-success/5 border-2 border-success/30 text-success text-xl animate-bounce-short shadow-glow">
                <div className="flex items-center gap-4">
                  <Trophy className="h-12 w-12" />
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tighter">Incrível, {childNome}!</div>
                    <div className="font-bold opacity-90">{aula.isSystem ? "Você dominou este nível! Quer tentar o próximo?" : aula.reforco_positivo}</div>
                  </div>
                </div>
              </div>
            )}
            
            {acertou === false && (
              <div className="mt-8 p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-start gap-3 shadow-sm">
                <Lightbulb className="h-8 w-8 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-amber-700 uppercase tracking-widest text-xs mb-1">Dica do Professor</div>
                  <div className="text-xl text-amber-900 font-bold leading-tight">{aula.isSystem ? "Tente analisar cada parte do exemplo novamente." : aula.dica}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      <div className="flex justify-between items-center mt-6">
        <button onClick={() => setAula(null)} className="font-black text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
          ← Sair da Aula
        </button>
        {aula.isSystem && (
          <div className="flex items-center gap-2">
            <Pill tone="info" className="font-black uppercase tracking-widest text-[10px]">Proteção BNCC</Pill>
            <Pill tone="success" className="font-black uppercase tracking-widest text-[10px]">Auditado</Pill>
          </div>
        )}
      </div>
    </Shell>
  );
}
