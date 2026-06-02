import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";

export const Route = createFileRoute("/rotina")({
  component: Rotina,
});

const itens = [
  { h: "07:00", t: "Acordar e tomar café", e: "☀️", cat: "casa" },
  { h: "08:30", t: "Escola Brilha · Português", e: "🎓", cat: "estudo" },
  { h: "10:00", t: "Lanchinho", e: "🍎", cat: "casa" },
  { h: "10:30", t: "Neuro-Treino · Respiração", e: "🌸", cat: "terapia" },
  { h: "11:00", t: "Matemática divertida", e: "🔢", cat: "estudo" },
  { h: "12:00", t: "Almoço com a família", e: "🍽️", cat: "casa" },
  { h: "14:00", t: "Terapia com Lia (fono)", e: "💬", cat: "terapia" },
  { h: "16:00", t: "Hora de brincar livre", e: "🧸", cat: "casa" },
  { h: "19:30", t: "Banho e história", e: "🛁", cat: "casa" },
];

const cores: Record<string, string> = {
  casa: "bg-sun/30",
  estudo: "bg-primary/15",
  terapia: "bg-petal/30",
};

function Rotina() {
  return (
    <Shell>
      <div className="flex flex-col lg:flex-row gap-8 mb-12 bg-white/50 p-8 rounded-[3rem] border-4 border-sun/10 shadow-soft items-center">
        <div className="flex-shrink-0">
          <PipPedagogicalGuidance stage="idle" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-black text-warning-foreground mb-2">Minha Rotina</h1>
          <p className="text-muted-foreground text-lg font-bold">Vamos ver o que temos para hoje? Seguir a rotina nos ajuda a brilhar!</p>
        </div>
      </div>

      <div className="space-y-2">
        {itens.map((i, idx) => (
          <div key={idx} className={`rounded-2xl p-4 flex items-center gap-4 shadow-soft ${cores[i.cat]}`}>
            <div className="font-mono font-extrabold text-lg w-16">{i.h}</div>
            <div className="text-3xl">{i.e}</div>
            <div className="flex-1 font-bold">{i.t}</div>
          </div>
        ))}
      </div>

      <Card className="mt-8">
        <h3 className="font-extrabold mb-2">Sugestão inteligente</h3>
        <p className="text-sm text-muted-foreground">O hook <code className="text-xs bg-muted px-1 py-0.5 rounded">useSmartRoutine</code> sugere encaixar 5 min de Rastreamento Sacádico depois do almoço — alinhado ao perfil de leitura.</p>
      </Card>
    </Shell>
  );
}
