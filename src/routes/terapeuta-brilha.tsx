import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/terapeuta-brilha")({
  component: Terapeuta,
});

function Terapeuta() {
  const { activeChild } = useAppState();
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; t: string }[]>([
    { role: "ai", t: `Oi! Sou a Terapeuta Brilha 💚 Estou aqui pra te ajudar com ${activeChild?.nome ?? "sua criança"}. Pode perguntar sobre comportamento, regulação emocional, estratégias caseiras ou quando procurar ajuda profissional.` },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const q = input;
    setMsgs((m) => [...m, { role: "user", t: q }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "ai", t: `Considerando que ${activeChild?.nome} tem perfil ${activeChild?.diagnostico.toUpperCase()} e adora ${activeChild?.hiperfoco}, uma estratégia útil é começar pelo interesse dela. (Demo: aqui conectaríamos no IA Gateway com o perfil neuro como contexto.)` }]);
    }, 700);
  };

  const sugestoes = [
    "Como acalmar uma crise sensorial?",
    "Ela não quer fazer tarefa, o que faço?",
    "Quando procurar fonoaudióloga?",
    "Dicas para estruturar a rotina da manhã",
  ];

  return (
    <Shell>
      <PageHeader emoji="💬" title="Terapeuta Brilha" subtitle="IA especializada em neurodesenvolvimento — orientação para a família" />

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
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Pergunte alguma coisa…"
            className="flex-1 p-3 rounded-xl bg-input border border-border font-medium" />
          <button onClick={send} className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 font-bold">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <p className="text-xs text-muted-foreground text-center">A Terapeuta Brilha não substitui acompanhamento clínico — é um apoio entre consultas.</p>
    </Shell>
  );
}
