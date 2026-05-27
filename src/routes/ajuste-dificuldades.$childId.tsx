import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState, NIVEL_DESC } from "@/lib/store";
import { Save } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/ajuste-dificuldades/$childId")({
  component: Ajuste,
});

const materias = [
  { k: "geral", label: "Geral" },
  { k: "portugues", label: "Português" },
  { k: "matematica", label: "Matemática" },
  { k: "ciencias", label: "Ciências" },
  { k: "historia", label: "História" },
  { k: "geografia", label: "Geografia" },
] as const;

function Ajuste() {
  const { childId } = Route.useParams();
  const { state, updateChild } = useAppState();
  const child = state.children.find((c) => c.id === childId);
  const [niveis, setNiveis] = useState(child?.niveis);
  const [tempo, setTempo] = useState(child?.tempoAtencaoMin ?? 10);
  const [flags, setFlags] = useState(child?.flags);
  const [obs, setObs] = useState(child?.observacoes ?? "");
  const [saved, setSaved] = useState(false);

  if (!child || !niveis || !flags) return <Shell><p>Criança não encontrada.</p></Shell>;

  const salvar = () => {
    updateChild(childId, { niveis, tempoAtencaoMin: tempo, flags, observacoes: obs });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Shell>
      <PageHeader emoji="🎚️" title="Ajuste fino" subtitle={`Sobrescrever o que o sistema deduziu sobre ${child.nome}`} />

      <Card className="mb-4">
        <h3 className="font-extrabold mb-3">Nível de explicação por matéria</h3>
        <div className="space-y-4">
          {materias.map((m) => {
            const val = niveis[m.k];
            return (
              <div key={m.k}>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold">{m.label}</span>
                  <span className="text-xs text-muted-foreground">{NIVEL_DESC[val].titulo}</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 3, 4].map((n) => (
                    <button key={n} onClick={() => setNiveis({ ...niveis, [m.k]: n as any })}
                      className={`btn-tap py-2 rounded-xl font-bold ${val === n ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent"}`}>
                      {n}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{NIVEL_DESC[val].desc}</p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="mb-4">
        <h3 className="font-extrabold mb-3">Tempo de atenção: {tempo} min</h3>
        <input type="range" min={3} max={45} value={tempo} onChange={(e) => setTempo(+e.target.value)} className="w-full" />
        <p className="text-xs text-muted-foreground mt-1">Duração de cada sessão antes da pausa ativa.</p>
      </Card>

      <Card className="mb-4">
        <h3 className="font-extrabold mb-3">Flags clínicas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {([
            ["apoioVisual","Precisa de apoio visual"],
            ["passoAPasso","Precisa de passo a passo"],
            ["preferAudio","Prefere áudio"],
            ["contaNosDedos","Conta nos dedos"],
            ["trocaLetras","Troca letras parecidas"],
            ["palavrasLongas","Dificuldade com palavras longas"],
          ] as const).map(([k, l]) => (
            <button key={k} onClick={() => setFlags({ ...flags, [k]: !flags[k] })}
              className={`p-3 rounded-xl border-2 text-left font-bold ${flags[k] ? "border-primary bg-primary/10" : "border-border bg-muted"}`}>
              {l}
            </button>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <h3 className="font-extrabold mb-3">Observações da equipe</h3>
        <textarea value={obs} onChange={(e) => setObs(e.target.value)} rows={4}
          className="w-full p-3 rounded-xl bg-input border border-border font-medium"
          placeholder="Gostos, gatilhos, jeito de aprender…" />
      </Card>

      <button onClick={salvar} className="btn-tap rounded-xl bg-primary text-primary-foreground px-6 py-3 font-bold flex items-center gap-2">
        <Save className="h-4 w-4" /> {saved ? "Salvo ✓" : "Salvar ajustes"}
      </button>
    </Shell>
  );
}
