import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState } from "react";
import { Send, Sparkles, Loader2, MessagesSquare } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { useMascot } from "@/contexts/MascotContext";

export const Route = createFileRoute("/terapeuta-brilha")({
  component: Terapeuta,
});

function Terapeuta() {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();
  const mascotName = activeMascot?.mascot?.name || "Pip";
  const mascotPayload = activeMascot ? {
    name: activeMascot.mascot?.name,
    description: activeMascot.mascot?.description,
    category: activeMascot.mascot?.category,
    level: activeMascot.level,
    affinity: activeMascot.affinity,
  } : null;
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; t: string }[]>([
    { role: "ai", t: `Oi! Sou ${mascotName}. Hoje vou te ajudar como terapeuta com ${activeChild?.nome ?? "sua criança"}. Pode perguntar sobre comportamento, regulação emocional, estratégias caseiras ou quando procurar ajuda profissional.` },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || !activeChild || isLoading) return;
    setIsLoading(true);
    const q = input;
    const newMsgs = [...msgs, { role: "user" as const, t: q }];
    setMsgs(newMsgs);
    setInput("");
    
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "terapeuta",
          child: activeChild,
          mascot: mascotPayload,
          message: q,
          chatHistory: msgs.map(m => ({
            role: m.role === "ai" ? "assistant" : "user",
            content: m.t
          }))
        }
      });

      if (error) throw error;
      
      setMsgs([...newMsgs, { role: "ai", t: data }]);
    } catch (err) {
      console.error(err);
      setMsgs([...newMsgs, { role: "ai", t: "Ops, tive um probleminha para pensar agora. Tente de novo em instantes!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sugestoes = [
    "Como acalmar uma crise sensorial?",
    "Ela não quer fazer tarefa, o que faço?",
    "Quando procurar fonoaudióloga?",
    "Dicas para estruturar a rotina da manhã",
  ];

  return (
    <Shell>
      <PageHeader icon={MessagesSquare} title="Terapeuta Brilha" subtitle="IA especializada em neurodesenvolvimento — orientação para a família" />

      <Card className="mb-4 min-h-[400px] flex flex-col">
        <div className="flex-1 space-y-3 mb-4">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                {m.role === "ai" && <Sparkles className="h-4 w-4 inline mr-1 -mt-0.5" />}
                {m.t}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {sugestoes.map((s) => (
            <button key={s} onClick={() => setInput(s)} className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-accent">
              {s}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && send()}
            disabled={isLoading}
            placeholder="Pergunte alguma coisa…"
            className="flex-1 p-3 rounded-xl bg-input border border-border font-medium disabled:opacity-50" 
          />
          <button 
            onClick={send} 
            disabled={isLoading}
            className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 font-bold disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </div>
      </Card>

      <p className="text-xs text-muted-foreground text-center">A Terapeuta Brilha não substitui acompanhamento clínico — é um apoio entre consultas.</p>
    </Shell>
  );
}
