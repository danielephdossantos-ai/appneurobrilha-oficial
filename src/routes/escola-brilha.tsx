import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState, useEffect, useRef } from "react";
import { Play, BookOpen, Volume2, VolumeX, CheckCircle2, Lightbulb, Loader2, Calendar, ArrowRight, Star, Trophy, Zap, GraduationCap, Headphones } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReforcoEngine } from "@/core/pedagogy/reforco-engine";
import { useNotifications } from "@/hooks/useNotifications";

export const Route = createFileRoute("/escola-brilha")({
  errorComponent: ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Card className="max-w-md text-center p-8 border-destructive/20 bg-destructive/5">
          <h2 className="text-xl font-bold text-destructive mb-2">Ops! O Escola Brilha tropeçou.</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Não conseguimos carregar a página devido a um erro técnico: {error.message}
          </p>
          <div className="flex gap-2 justify-center">
            <button onClick={reset} className="btn-tap px-4 py-2 bg-primary text-white rounded-xl font-bold">
              Tentar Novamente
            </button>
            <a href="/" className="btn-tap px-4 py-2 bg-white border border-border rounded-xl font-bold">
              Voltar ao Início
            </a>
          </div>
        </Card>
      </div>
    );
  },
  component: Escola,
});

const materias = [
  { id: "Português", nome: "Português", emoji: "📚", cor: "from-coral/20 to-coral/5", dbName: "Português" },
  { id: "Matemática", nome: "Matemática", emoji: "🔢", cor: "from-sky/20 to-sky/5", dbName: "Matemática" },
  { id: "Ciências", nome: "Ciências", emoji: "🔬", cor: "from-success/15 to-success/5", dbName: "Ciências" },
  { id: "História", nome: "História", emoji: "🏛️", cor: "from-sun/20 to-sun/5", dbName: "História" },
  { id: "Geografia", nome: "Geografia", emoji: "🌍", cor: "from-lilac/20 to-lilac/5", dbName: "Geografia" },
] as const;

function Escola() {
  const { activeChild } = useAppState();
  const notifications = useNotifications();
  const sendNotification = notifications?.sendNotification;
  
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<"basic" | "intermediate" | "advanced">("basic");

  const { data: agenda = [], isError: agendaError, isLoading: isLoadingAgenda } = useQuery({
    queryKey: ["study_agenda", activeChild?.id],
    queryFn: async () => {
      if (!activeChild?.id) return [];
      try {
        const { data, error } = await supabase
          .from("study_agenda")
          .select("*")
          .eq("child_id", activeChild.id)
          .eq("completed", false)
          .order("exam_date", { ascending: true });
        
        if (error) {
          console.error("Erro ao buscar agenda:", error);
          return [];
        }
        return data || [];
      } catch (err) {
        console.error("Exceção ao buscar agenda:", err);
        return [];
      }
    },
    enabled: !!activeChild?.id,
  });

  const carregarAula = async (materiaId: string, topic?: string, isSystemGenerated = false) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      const serie = activeChild.serie || "1º Ano";
      const serieNum = serie.includes('Educação Infantil') ? 0 : 
                       parseInt(serie.match(/\d+/)?.[0] || "1");

      console.log(`Carregando aula para: ${materiaId}, Série: ${serie}`);

      // Geração via SISTEMA (BNCC Estruturada + Banco Pedagógico)
      const lesson = await ReforcoEngine.generateLesson(
        topic || materiaId, 
        undefined, 
        { ...activeChild, serie_num: serieNum, serie: serie }
      );
      
      setAula({
        ...lesson,
        materia: materiaId,
        etapa: "ensino"
      });
      
      if (sendNotification) {
        sendNotification({
          title: "Hora de Estudar! 📚",
          message: `${activeChild.nome} começou a rotina de estudos: ${topic || materiaId}`,
          type: 'estudo'
        });
      }
    } catch (err) {
      console.error("Erro ao carregar aula:", err);
      toast.error("Erro ao preparar sua aula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!activeChild) return <Shell><p className="p-8 text-center font-bold">Por favor, selecione uma criança no menu principal.</p></Shell>;

  if (loading) {
    return (
      <Shell>
        <div className="h-full flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-700">
          <div className="relative">
            <Loader2 className="h-20 w-20 text-primary animate-spin mb-8 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl animate-bounce">
              {activeChild.hiperfoco === 'dinossauros' ? '🦕' : '🌟'}
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-800">Organizando seu Brilho...</h2>
          <p className="text-muted-foreground mt-2 text-lg">Preparando uma aula incrível para você!</p>
        </div>
      </Shell>
    );
  }

  if (aula) return (
    <AulaViewWrapper 
      aula={aula} 
      setAula={setAula} 
      childNome={activeChild.nome} 
      hiperfoco={activeChild.hiperfoco}
      currentLevel={currentLevel}
      setCurrentLevel={setCurrentLevel}
    />
  );

  return (
    <Shell>
      <PageHeader emoji="🎓" title="Escola Brilha" subtitle={`BNCC adaptada · ${activeChild?.serie ?? "Ensino Fundamental"}`} />

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
                        {(() => {
                          try {
                            const date = new Date(item.exam_date + 'T12:00:00');
                            return isNaN(date.getTime()) ? item.exam_date : format(date, "dd 'de' MMMM", { locale: ptBR });
                          } catch (e) {
                            return item.exam_date;
                          }
                        })()}
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
            <Pill tone="info">Nível {activeChild?.niveis ? (activeChild.niveis as any)[m.id.toLowerCase()] ?? 2 : 2}</Pill>
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
  const [isReading, setIsReading] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleReading = (text: string) => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 0.9; // Friendly slower pace
    utterance.pitch = 1.2; // Friendly higher pitch
    
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);
    
    speechRef.current = utterance;
    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const titulos: Record<string, string> = {
    ensino: "📖 Vamos Aprender",
    demo: "🎨 Exemplo Prático",
    opcoes: "✨ Sua Vez!",
  };

  const steps = (aula.isSystem && aula.levels) ? (aula.levels[currentLevel] || []) : [];
  const explanation = aula.isSystem ? steps.find((s: any) => s.type === "explanation")?.text : (aula.ensino || aula.explanation);
  const example = aula.isSystem ? steps.find((s: any) => s.type === "example")?.text : (aula.demo || "");
  const exercise = aula.isSystem ? steps.find((s: any) => s.type === "exercise") : null;

  return (
    <Shell>
      <div className="max-w-4xl mx-auto pb-20">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setAula(null)} className="btn-tap flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-colors">
            ← Voltar
          </button>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleReading(explanation + (example ? ". Exemplo: " + example : ""))}
              className={`btn-tap h-12 w-12 rounded-2xl flex items-center justify-center transition-all ${isReading ? "bg-destructive text-white animate-pulse" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
              title={isReading ? "Parar leitura" : "Ouvir professor"}
            >
              {isReading ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full mb-1">
                SISTEMA BNCC ATIVO
              </span>
              <span className="text-xs text-muted-foreground font-medium">Modo Escola Adaptativa</span>
            </div>
          </div>
        </div>

        <PageHeader 
          emoji="🎓" 
          title={aula.isSystem ? aula.title.replace("[ESCOLA BRILHA] ", "") : titulos[aula.etapa]} 
          subtitle={aula.bnccCode ? `Habilidade ${aula.bnccCode}` : "Conteúdo Pedagógico Estruturado"} 
        />

        {aula.isSystem && (
          <div className="flex p-1.5 bg-slate-100/50 backdrop-blur-md rounded-[2rem] mb-8 border border-white shadow-inner max-w-sm mx-auto overflow-hidden">
            {(["basic", "intermediate", "advanced"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setCurrentLevel(lvl);
                  setAcertou(null);
                  setTentativa(null);
                  window.speechSynthesis.cancel();
                  setIsReading(false);
                }}
                className={`flex-1 py-3 px-4 rounded-[1.5rem] text-xs font-black transition-all flex items-center justify-center gap-2 ${
                  currentLevel === lvl 
                  ? "bg-white text-primary shadow-soft scale-100" 
                  : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {lvl === "basic" ? "FÁCIL" : lvl === "intermediate" ? "MÉDIO" : "MESTRE"}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Card className="overflow-hidden border-none shadow-soft-xl bg-white/80 backdrop-blur-md">
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 via-sky/5 to-transparent flex items-center justify-center relative">
              <div className="text-8xl animate-bounce-short select-none">
                {hiperfoco === "dinossauros" ? "🦕" : hiperfoco === "espaco" ? "🚀" : hiperfoco === "animais" ? "🦁" : "🌟"}
              </div>
              <div className="absolute inset-0 bg-grid-slate-900/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            </div>
            
            <div className="p-8 sm:p-10">
              <div className="space-y-8">
                <section>
                  <h3 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-2">
                    <BookOpen className="h-3 w-3" /> EXPLICAÇÃO DO PROFESSOR
                  </h3>
                  <p className="text-2xl sm:text-3xl leading-relaxed font-black text-slate-800">
                    {explanation}
                  </p>
                </section>

                {example && (
                  <section className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-100">
                    <h3 className="font-black text-slate-400 uppercase tracking-[0.2em] text-[10px] mb-4">EXEMPLO PRÁTICO</h3>
                    <div className="text-xl font-bold text-slate-600 italic leading-relaxed">
                      "{example}"
                    </div>
                  </section>
                )}
              </div>
            </div>
          </Card>

          {(aula.etapa === "opcoes" || (aula.isSystem && exercise)) && (
            <Card className="p-8 sm:p-10 border-none shadow-soft-xl bg-white/80 backdrop-blur-md">
              <h3 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-2">
                <Zap className="h-3 w-3" /> DESAFIO DO BRILHO
              </h3>
              <p className="text-2xl mb-10 font-black text-slate-800 leading-tight">
                {aula.isSystem ? (exercise?.text || "Qual a resposta correta?") : aula.pergunta}
              </p>
              
              <div className={`grid gap-4 ${exercise?.content?.type === "visual_match" ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                {(aula.isSystem ? (exercise?.content?.options || ["Opção A", "Opção B", "Opção C", "Opção D"]) : (aula.opcoes || [])).map((opt: string) => (
                  <button 
                    key={opt} 
                    onClick={() => {
                      setTentativa(opt);
                      const isCorrect = aula.isSystem ? opt === (exercise?.content?.answer || "Opção B") : opt === aula.resposta_correta;
                      setAcertou(isCorrect);
                      if (isCorrect) {
                        toast.success("Incrível! Você acertou!", { icon: "🌟" });
                      }
                    }}
                    disabled={acertou === true}
                    className={`btn-tap p-6 rounded-[2rem] font-black border-4 transition-all text-left shadow-soft ${
                      exercise?.content?.type === "visual_match" ? "text-5xl sm:text-7xl flex items-center justify-center p-8" : "text-xl"
                    } ${
                      tentativa === opt 
                        ? (acertou ? "border-success bg-success/10 text-success shadow-glow-success" : "border-destructive bg-destructive/5 text-destructive")
                        : "border-slate-50 bg-slate-50 hover:border-primary/20 hover:bg-white"
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>

              {acertou === true && (
                <div className="mt-10 p-10 rounded-[3rem] bg-gradient-to-br from-success/20 to-success/5 border-2 border-success/20 text-success animate-in zoom-in duration-500 shadow-glow-success">
                  <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <div className="h-20 w-20 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                      <Trophy className="h-10 w-10" />
                    </div>
                    <div>
                      <div className="font-black text-3xl uppercase tracking-tighter mb-1">BRILHANTE, {childNome.toUpperCase()}!</div>
                      <div className="font-bold text-lg opacity-90">{aula.isSystem ? "Você dominou este nível com perfeição!" : aula.reforco_positivo}</div>
                    </div>
                    <div className="sm:ml-auto">
                      <button onClick={() => setAula(null)} className="btn-tap px-8 py-4 bg-success text-white font-black rounded-2xl shadow-lg">
                        PRÓXIMA AULA →
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {acertou === false && (
                <div className="mt-8 p-6 rounded-[2rem] bg-sun/10 border-2 border-sun/20 flex items-start gap-4 animate-in slide-in-from-top-2">
                  <div className="h-10 w-10 bg-sun/20 rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Lightbulb className="h-6 w-6 text-sun-foreground" />
                  </div>
                  <div>
                    <div className="font-black text-sun-foreground uppercase tracking-widest text-[10px] mb-1">DICA DO AMIGO VIRTUAL</div>
                    <div className="text-xl text-slate-800 font-bold leading-tight">
                      {aula.isSystem ? "Tente novamente com calma! Você está quase lá." : (aula.reforco_erro || "Quase lá! Tente de novo.")}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-white shadow-sm">
            <Pill tone="info" className="font-black uppercase tracking-widest text-[9px]">Proteção BNCC</Pill>
            <div className="h-1 w-1 rounded-full bg-slate-300"></div>
            <Pill tone="success" className="font-black uppercase tracking-widest text-[9px]">Seguro para Crianças</Pill>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function AulaViewWrapper(props: any) {
  try {
    return <AulaView {...props} />;
  } catch (error) {
    console.error("Erro no AulaView:", error);
    return (
      <Shell>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-destructive">Ops! Algo deu errado.</h2>
          <p className="mt-2">Não conseguimos carregar esta atividade. Por favor, tente outra ou volte mais tarde.</p>
          <button onClick={() => props.setAula(null)} className="mt-4 btn-tap px-6 py-2 bg-primary text-white rounded-xl">
            Voltar
          </button>
        </div>
      </Shell>
    );
  }
}

