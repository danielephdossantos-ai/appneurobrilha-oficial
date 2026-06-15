import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  component: Agenda,
});

const eventos = [
  {
    dia: "Hoje · Qua",
    itens: [
      { h: "14:00", t: "Terapia · Lia (fono)", cat: "terapia", c: "bg-petal/30" },
      { h: "16:30", t: "Tarefa de Português", cat: "escola", c: "bg-primary/15" },
    ],
  },
  {
    dia: "Amanhã · Qui",
    itens: [
      { h: "09:00", t: "Pediatra · Dr. Marcos", cat: "medico", c: "bg-coral/25" },
      { h: "15:00", t: "Remédio · Metilfenidato", cat: "remedio", c: "bg-warning/30" },
    ],
  },
  {
    dia: "Sexta",
    itens: [{ h: "10:00", t: "Psicopedagoga · Aline", cat: "terapia", c: "bg-petal/30" }],
  },
];

function Agenda() {
  return (
    <Shell>
      <PageHeader emoji="📅" title="Agenda" subtitle="Terapias, consultas, remédios e tarefas" />

      <div className="flex justify-end mb-4">
        <button className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold flex items-center gap-1.5">
          <Plus className="h-4 w-4" /> Novo compromisso
        </button>
      </div>

      <div className="space-y-6">
        {eventos.map((g) => (
          <section key={g.dia}>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
              {g.dia}
            </h2>
            <div className="space-y-2">
              {g.itens.map((i, idx) => (
                <Card key={idx} className={`${i.c} border-0 flex items-center gap-4`}>
                  <div className="font-mono font-extrabold text-lg w-16">{i.h}</div>
                  <div className="flex-1 font-bold">{i.t}</div>
                  <Pill>{i.cat}</Pill>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
