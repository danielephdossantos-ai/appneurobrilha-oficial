import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { Download, BrainCircuit } from "lucide-react";
import { ParentalEngine } from "@/core/parental/engine";

export const Route = createFileRoute("/relatorio")({
  component: Relatorio,
});

function Relatorio() {
  const { activeChild } = useAppState();
  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  const engineReport = ParentalEngine.generateDailyReport({}, { current: "feliz" });

  const semanas = [12, 18, 24, 30, 28, 35, 42];

  return (
    <Shell>
      <PageHeader emoji="📊" title="Relatório de Evolução" subtitle={`Últimos 30 dias · ${activeChild.nome}`} />

      <div className="flex justify-end mb-4">
        <button className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold flex items-center gap-1.5">
          <Download className="h-4 w-4" /> Exportar PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { l: "Tempo total", v: "4h 32m", d: "+18% vs mês anterior" },
          { l: "Taxa de acerto", v: "78%", d: "Era 71%" },
          { l: "Subidas de nível", v: "3", d: "Português, Mat e Ciências" },
        ].map((s) => (
          <Card key={s.l} className="bg-gradient-to-br from-primary/10 to-success/5">
            <div className="text-xs text-muted-foreground">{s.l}</div>
            <div className="text-3xl font-extrabold mt-1">{s.v}</div>
            <div className="text-xs text-success font-bold mt-1">{s.d}</div>
          </Card>
        ))}
      </div>

      <Card className="mb-4">
        <h3 className="font-extrabold mb-4">Minutos por semana</h3>
        <div className="flex items-end gap-2 h-40">
          {semanas.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-gradient-to-t from-primary to-success rounded-t-lg" style={{ height: `${(v / 45) * 100}%` }} />
              <div className="text-xs text-muted-foreground">S{i + 1}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-4 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-2 mb-3">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <h3 className="font-extrabold">Observação Pedagógica (IA)</h3>
        </div>
        <p className="text-sm leading-relaxed italic text-muted-foreground">
          "{engineReport.observation}"
        </p>
        <div className="mt-3 flex gap-4 text-xs font-bold">
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">Habilidades:</span>
            <span>+{engineReport.skillsGained} BNCC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">Humor médio:</span>
            <span className="capitalize">{engineReport.mood}</span>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-extrabold mb-3">Histórico de nível</h3>
        <div className="space-y-2 text-sm">
          {[
            { d: "12/05", t: "Português subiu para nível 2 — 5 acertos seguidos" },
            { d: "08/05", t: "Matemática subiu para nível 3 — completou ciclo CRA" },
            { d: "01/05", t: "Tempo de atenção ajustado para 12 min — pediu pausa" },
          ].map((h, i) => (
            <div key={i} className="flex gap-3 p-2 rounded-lg bg-muted">
              <span className="font-mono text-muted-foreground">{h.d}</span>
              <span className="font-bold">{h.t}</span>
            </div>
          ))}
        </div>
      </Card>
    </Shell>
  );
}
