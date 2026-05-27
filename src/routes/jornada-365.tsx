import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { Play, Pause, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/jornada-365")({
  component: Jornada,
});

function Jornada() {
  const { activeChild } = useAppState();
  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  const blocos = [
    { tipo: "ativo", titulo: "Português · Sílabas", dur: activeChild.tempoAtencaoMin, status: "done" },
    { tipo: "pausa", titulo: "Pausa ativa · Respiração", dur: 3, status: "done" },
    { tipo: "ativo", titulo: "Matemática · Somar", dur: activeChild.tempoAtencaoMin, status: "now" },
    { tipo: "pausa", titulo: "Pausa ativa · Alongamento", dur: 3, status: "next" },
    { tipo: "ativo", titulo: "Ciências · Plantas", dur: activeChild.tempoAtencaoMin, status: "next" },
  ];

  return (
    <Shell>
      <PageHeader emoji="🧭" title="Jornada 365" subtitle={`Dia 47 de 365 · perfil ajustado a ${activeChild.tempoAtencaoMin} min de foco`} />

      <Card className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold">Progresso de hoje</div>
          <Pill tone="success">2 de 3 blocos</Pill>
        </div>
        <div className="h-3 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-success" style={{ width: "66%" }} />
        </div>
      </Card>

      <div className="space-y-2">
        {blocos.map((b, i) => (
          <div key={i} className={`rounded-2xl p-4 flex items-center gap-3 border-2 ${
            b.status === "now" ? "border-primary bg-primary/5 shadow-glow" :
            b.status === "done" ? "border-success/30 bg-success/5" :
            "border-border bg-card"
          }`}>
            <div className={`h-12 w-12 rounded-xl grid place-items-center ${b.tipo === "ativo" ? "bg-primary/15" : "bg-sky/30"}`}>
              {b.status === "done" ? <CheckCircle2 className="h-6 w-6 text-success" /> :
               b.status === "now" ? <Play className="h-5 w-5" /> :
               <Pause className="h-5 w-5 text-muted-foreground" />}
            </div>
            <div className="flex-1">
              <div className="font-extrabold">{b.titulo}</div>
              <div className="text-xs text-muted-foreground">{b.dur} min · {b.tipo === "ativo" ? "bloco ativo" : "pausa terapêutica"}</div>
            </div>
            {b.status === "now" && (
              <button className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold">Começar</button>
            )}
          </div>
        ))}
      </div>
    </Shell>
  );
}
