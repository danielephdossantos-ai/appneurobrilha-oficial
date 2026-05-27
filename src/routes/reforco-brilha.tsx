import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useState } from "react";
import { Search, Sparkles, BookOpen, Calculator, Pencil, MessageSquare, ArrowRight, PlayCircle } from "lucide-react";
import { useAppState } from "@/lib/store";

export const Route = createFileRoute("/reforco-brilha")({
  component: ReforcoBrilha,
});

const CATEGORIAS = [
  { id: "tabuada", label: "Tabuada", icon: Calculator, color: "text-blue-500", suggestions: ["Tabuada do 7", "Tabuada do 9", "Multiplicação por 5"] },
  { id: "portugues", label: "Português", icon: Pencil, color: "text-orange-500", suggestions: ["Verbos no passado", "Acentuação", "Ortografia do S e Z"] },
  { id: "problemas", label: "Problemas", icon: BookOpen, color: "text-purple-500", suggestions: ["Problemas de divisão", "Lógica matemática", "Sistema monetário"] },
  { id: "leitura", label: "Alfabetização", icon: MessageSquare, color: "text-green-500", suggestions: ["Leitura de sílabas", "Formação de frases", "Interpretação de texto"] },
];

function ReforcoBrilha() {
  const { activeChild } = useAppState();
  const [topic, setTopic] = useState("");
  const [isTeaching, setIsTeaching] = useState(false);
  const [lessonContent, setLessonContent] = useState<any>(null);

  const startLesson = (customTopic?: string) => {
    const finalTopic = customTopic || topic;
    if (!finalTopic) return;
    
    setIsTeaching(true);
    // Simulating "Infinite" Database/AI response
    setTimeout(() => {
      setLessonContent({
        title: `Aula de: ${finalTopic}`,
        steps: [
          { type: "explanation", text: `Olá ${activeChild?.nome}! Hoje vamos aprender tudo sobre ${finalTopic}.` },
          { type: "example", text: "Veja como é simples: [Exemplo visual e concreto aqui]" },
          { type: "exercise", text: `Agora é sua vez! Tente resolver este desafio de ${finalTopic}.` }
        ]
      });
    }, 1500);
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
              A mãe escreve o tema e a IA do Reforço Brilha cria a aula perfeita.
            </p>
          </Card>

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
              <Card className="bg-primary/5 border-primary/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-20 w-20 rounded-full bg-white shadow-soft grid place-items-center text-5xl">👨‍🏫</div>
                  <div>
                    <h2 className="text-2xl font-black text-primary uppercase">{lessonContent.title}</h2>
                    <div className="flex gap-2 mt-1">
                      <Pill tone="success">Aula Personalizada</Pill>
                      <Pill tone="info">Neuro-Adaptativo</Pill>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {lessonContent.steps.map((step: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-soft border border-border/50 animate-in fade-in slide-in-from-left-4" style={{ animationDelay: `${idx * 0.3}s` }}>
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-secondary grid place-items-center text-xs font-bold shrink-0 mt-1">
                          {idx + 1}
                        </div>
                        <p className="text-lg leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex gap-3">
                  <button className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-glow hover:opacity-90 transition-opacity">
                    Fazer Atividades
                  </button>
                  <button className="bg-secondary text-foreground font-bold py-4 px-8 rounded-2xl hover:bg-secondary/80 transition-colors">
                    Dúvida
                  </button>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </Shell>
  );
}
