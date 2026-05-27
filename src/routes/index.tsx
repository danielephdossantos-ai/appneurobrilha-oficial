import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { GraduationCap, Sparkles, Brain, Compass, ShieldCheck, MessagesSquare, AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroBrilha Kids — Início" },
      { name: "description", content: "Escolha quem vai brilhar hoje e continue a jornada de aprendizagem adaptativa." },
    ],
  }),
  component: Index,
});

function Index() {
  const { children: allChildren, activeChild, setActiveChild } = useAppState();

  return (
    <Shell>
      <PageHeader
        emoji="🌱"
        title={`Olá, ${activeChild?.nome ?? "amigo"}!`}
        subtitle="Quem vai brilhar hoje?"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {allChildren.map((c: any) => (
          <button
            key={c.id}
            onClick={() => setActiveChild(c.id)}
            className={`text-left rounded-3xl p-5 transition-all shadow-soft border-2 ${
              c.id === activeChild?.id
                ? "bg-gradient-to-br from-primary/15 to-success/10 border-primary"
                : "bg-card border-transparent hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-secondary grid place-items-center text-4xl">{c.avatar}</div>
              <div>
                <div className="text-lg font-extrabold">{c.nome}</div>
                <div className="text-sm text-muted-foreground">{c.idade} anos · {c.serie}</div>
                <div className="mt-1 flex gap-1.5">
                  <Pill tone="info">{c.diagnostico.toUpperCase()}</Pill>
                  {!c.anamnese_completa && <Pill tone="warning">Anamnese</Pill>}
                </div>
              </div>
            </div>
          </button>
        ))}
        <Link
          to="/anamnese/$childId"
          params={{ childId: "nova" }}
          className="rounded-3xl border-2 border-dashed border-primary/40 p-5 grid place-items-center text-primary font-bold hover:bg-primary/5 min-h-[7.5rem]"
        >
          + Cadastrar criança
        </Link>
      </div>

      {activeChild && !activeChild.anamnese_completa && (
        <Card className="mb-8 bg-warning/15 border-warning/40">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-warning-foreground shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-extrabold">Anamnese de {activeChild.nome} ainda não foi concluída</div>
              <p className="text-sm text-muted-foreground mt-1">Sem ela, o app entrega conteúdo genérico. Leva 5 minutos.</p>
            </div>
            <Link to="/anamnese/$childId" params={{ childId: activeChild.id }} className="btn-tap rounded-xl bg-warning px-4 py-2 text-warning-foreground font-bold">
              Iniciar
            </Link>
          </div>
        </Card>
      )}

      <h2 className="text-xl mb-4">Por onde quer ir?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Tile to="/escola-brilha" emoji="🎓" title="Escola Brilha" desc="BNCC 2º–9º" color="from-primary/20 to-primary/5" />
        <Tile to="/mundo-brilha" emoji="✨" title="Mundo Brilha" desc="Pré-escolar" color="from-petal/30 to-petal/5" />
        <Tile to="/neuro-treino" emoji="🧠" title="Neuro-Treino" desc="Reforço terapêutico" color="from-sky/30 to-sky/5" />
        <Tile to="/jornada-365" emoji="🧭" title="Jornada 365" desc="Rotina diária" color="from-sun/30 to-sun/5" />
        <Tile to="/painel-pais" emoji="🛡️" title="Painel dos Pais" desc="Evolução real" color="from-lilac/30 to-lilac/5" />
        <Tile to="/terapeuta-brilha" emoji="💬" title="Terapeuta Brilha" desc="IA para a família" color="from-success/20 to-success/5" />
      </div>
    </Shell>
  );
}

function Tile({ to, emoji, title, desc, color }: { to: string; emoji: string; title: string; desc: string; color: string }) {
  return (
    <Link to={to} className={`rounded-2xl p-4 bg-gradient-to-br ${color} border border-border shadow-soft hover:shadow-glow transition-all flex flex-col gap-1`}>
      <span className="text-3xl">{emoji}</span>
      <span className="font-extrabold mt-1">{title}</span>
      <span className="text-xs text-muted-foreground flex items-center gap-1">{desc} <ArrowRight className="h-3 w-3" /></span>
    </Link>
  );
}
