import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";

export const Route = createFileRoute("/mundo-brilha")({
  component: Mundo,
});

const portugues = ["Letra Inicial","Acha a Vogal","Junta Sílabas","Conta Sílabas","Letra que Some","Rima ou Não","Letra Final","Conta Letras","Sílaba do Meio","Forma Palavra"];
const matematica = ["Conta Bichinhos","Maior ou Menor","Quem Vem Depois","Igual ou Diferente","Junta Bichinhos","Tira Bichinhos","Conta até Dez","Antes/Depois","Dobro","Pares Iguais"];

function Mundo() {
  return (
    <Shell>
      <PageHeader emoji="✨" title="Mundo Brilha" subtitle="BNCC Pré-escolar · atividades lúdicas para 3–6 anos" />

      <Card className="mb-6 bg-gradient-to-br from-petal/30 to-petal/5">
        <p className="text-sm">Cada atividade começa com uma <strong>mini-aula animada narrada</strong>, com visual concreto, antes de pedir resposta. Sem cronômetros, sem game over.</p>
      </Card>

      <section className="mb-8">
        <h2 className="text-xl mb-3 flex items-center gap-2">📚 Português Pré</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portugues.map((p, i) => <Atividade key={p} nome={p} emoji={["✏️","🅰️","🧩","🔢","🔤","🎵","🅿️","📏","🔡","🌟"][i]} />)}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-3 flex items-center gap-2">🔢 Matemática Pré</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {matematica.map((p, i) => <Atividade key={p} nome={p} emoji={["🐰","⚖️","➡️","🟰","➕","➖","🔟","🕐","✖️","👯"][i]} />)}
        </div>
      </section>
    </Shell>
  );
}

function Atividade({ nome, emoji }: { nome: string; emoji: string }) {
  return (
    <button className="text-left rounded-2xl p-4 bg-card border border-border shadow-soft hover:shadow-glow hover:border-primary/40 transition-all">
      <div className="text-3xl">{emoji}</div>
      <div className="font-bold mt-2">{nome}</div>
      <Pill tone="success">Nova</Pill>
    </button>
  );
}
