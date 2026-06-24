import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import {
  Sun,
  GraduationCap,
  Apple,
  Flower,
  Calculator,
  Utensils,
  MessageSquare,
  ToyBrick,
  Bath,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/rotina")({
  component: Rotina,
});

const itens = [
  { h: "07:00", t: "Acordar e tomar café", e: Sun, cat: "casa" },
  { h: "08:30", t: "Escola Brilha · Português", e: GraduationCap, cat: "estudo" },
  { h: "10:00", t: "Lanchinho", e: Apple, cat: "casa" },
  { h: "10:30", t: "Neuro-Treino · Respiração", e: Flower, cat: "terapia" },
  { h: "11:00", t: "Matemática divertida", e: Calculator, cat: "estudo" },
  { h: "12:00", t: "Almoço com a família", e: Utensils, cat: "casa" },
  { h: "14:00", t: "Terapia com Lia (fono)", e: MessageSquare, cat: "terapia" },
  { h: "16:00", t: "Hora de brincar livre", e: ToyBrick, cat: "casa" },
  { h: "19:30", t: "Banho e história", e: Bath, cat: "casa" },
];

const cores: Record<string, string> = {
  casa: "bg-sun/30",
  estudo: "bg-primary/15",
  terapia: "bg-petal/30",
};

function Rotina() {
  return (
    <Shell>
      <PageHeader icon={Calendar} title="Rotina de Hoje" subtitle="O dia inteiro num lugar só" />

      <div className="space-y-2">
        {itens.map((i, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-4 flex items-center gap-4 shadow-soft ${cores[i.cat]}`}
          >
            <div className="font-mono font-extrabold text-lg w-16">{i.h}</div>
            <div className="text-primary">
              <i.e className="h-8 w-8" />
            </div>
            <div className="flex-1 font-bold">{i.t}</div>
          </div>
        ))}
      </div>

      <Card className="mt-8">
        <h3 className="font-extrabold mb-2">Sugestão inteligente</h3>
        <p className="text-sm text-muted-foreground">
          O hook <code className="text-xs bg-muted px-1 py-0.5 rounded">useSmartRoutine</code>{" "}
          sugere encaixar 5 min de Achar o Diferente depois do almoço — alinhado ao perfil de leitura.
        </p>
      </Card>
    </Shell>
  );
}
