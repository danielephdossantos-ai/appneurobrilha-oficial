import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { AlertTriangle, TrendingUp, Star, Flame, Clock, ArrowRight, SlidersHorizontal } from "lucide-react";
import { SensoryModeSwitcher } from "@/components/sensory/SensoryModeSwitcher";


export const Route = createFileRoute("/painel-pais")({
  component: Painel,
});

function Painel() {
  const { activeChild } = useAppState();
  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  const p = activeChild.perfil;
  const radar = [
    { l: "Leitura", v: p.leitura }, { l: "Escrita", v: p.escrita },
    { l: "Matemática", v: p.matematica }, { l: "Atenção", v: p.atencao },
    { l: "Linguagem", v: p.linguagem }, { l: "Autonomia", v: p.autonomia },
    { l: "Emocional", v: p.emocional }, { l: "Social", v: p.social },
  ];

  return (
    <Shell>
      <PageHeader emoji="🛡️" title="Painel dos Pais" subtitle={`Acompanhamento de ${activeChild.nome}`} />

      {!activeChild.anamnese_completa && (
        <Card className="mb-6 bg-destructive/10 border-destructive/30">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-extrabold">Validador: anamnese incompleta</div>
              <p className="text-sm text-muted-foreground mt-1">O app está entregando conteúdo genérico. Sem o perfil clínico não dá pra ativar Orton-Gillingham, CRA ou TEACCH.</p>
            </div>
            <Link to="/anamnese/$childId" params={{ childId: activeChild.id }} className="btn-tap rounded-xl bg-destructive text-destructive-foreground px-4 py-2 font-bold whitespace-nowrap">Refazer</Link>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Stat icon={Clock} label="Tempo hoje" v="32 min" tone="primary" />
        <Stat icon={Flame} label="Sequência" v="7 dias" tone="warning" />
        <Stat icon={Star} label="Estrelas" v="48" tone="sun" />
        <Stat icon={TrendingUp} label="Fases" v="12 / 30" tone="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-extrabold mb-4">Perfil de Desenvolvimento</h3>
          <div className="space-y-2.5">
            {radar.map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{r.l}</span>
                  <span className="text-muted-foreground">{r.v}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full ${r.v >= 70 ? "bg-success" : r.v >= 50 ? "bg-primary" : "bg-warning"}`} style={{ width: `${r.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-extrabold mb-4">Nível Escola · por matéria</h3>
          <div className="space-y-2">
            {Object.entries(activeChild.niveis).map(([k, v]) => (
              <div key={k} className="flex justify-between items-center p-2.5 rounded-xl bg-muted">
                <span className="font-bold capitalize">{k}</span>
                <Pill tone={v >= 3 ? "success" : v === 2 ? "info" : "warning"}>Nível {v}</Pill>
              </div>
            ))}
          </div>
          <Link to="/ajuste-dificuldades/$childId" params={{ childId: activeChild.id }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-bold">
            Ajustar manualmente <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>

      <div className="mb-6">
        <Card className="border-primary/20 bg-primary/5">
          <SensoryModeSwitcher />
        </Card>
      </div>


      <h2 className="text-xl mb-3">Atalhos rápidos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Atalho to="/relatorio" emoji="📊" label="Relatório" />
        <Atalho to="/agenda" emoji="📅" label="Agenda" />
        <Atalho to={`/ajuste-dificuldades/${activeChild.id}`} emoji="🎚️" label="Ajuste fino" />
        <Atalho to="/terapeuta-brilha" emoji="💬" label="Terapeuta IA" />
      </div>
    </Shell>
  );
}

function Stat({ icon: Icon, label, v, tone }: any) {
  const tones: Record<string, string> = { primary: "from-primary/15 to-primary/5", warning: "from-warning/20 to-warning/5", sun: "from-sun/30 to-sun/5", success: "from-success/15 to-success/5" };
  return (
    <Card className={`bg-gradient-to-br ${tones[tone]}`}>
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div className="text-2xl font-extrabold mt-1">{v}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </Card>
  );
}

function Atalho({ to, emoji, label }: { to: string; emoji: string; label: string }) {
  return (
    <Link to={to} className="rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-glow transition-all text-center">
      <div className="text-3xl">{emoji}</div>
      <div className="font-bold mt-1">{label}</div>
    </Link>
  );
}
