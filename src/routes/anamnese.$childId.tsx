import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState, type Hiperfoco, type Diagnostico } from "@/lib/store";
import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/anamnese/$childId")({
  component: Anamnese,
});

const hiperfocos: { v: Hiperfoco; emoji: string; label: string }[] = [
  { v: "animais", emoji: "🐶", label: "Animais" },
  { v: "dinossauros", emoji: "🦕", label: "Dinossauros" },
  { v: "espaco", emoji: "🚀", label: "Espaço" },
  { v: "veiculos", emoji: "🚗", label: "Veículos" },
  { v: "princesas", emoji: "👑", label: "Princesas" },
  { v: "super-herois", emoji: "🦸", label: "Super-heróis" },
  { v: "robos", emoji: "🤖", label: "Robôs" },
  { v: "musica", emoji: "🎵", label: "Música" },
];

const diagnosticos: { v: Diagnostico; label: string }[] = [
  { v: "tdah", label: "TDAH" },
  { v: "tea", label: "TEA (autismo)" },
  { v: "dislexia", label: "Dislexia" },
  { v: "tod", label: "TOD" },
  { v: "deficiencia_intelectual", label: "Deficiência Intelectual" },
  { v: "altas_habilidades", label: "Altas Habilidades" },
  { v: "neurotipico", label: "Neurotípico" },
  { v: "discalculia", label: "Discalculia" },
  { v: "multiplo", label: "Múltiplo" },
  { v: "nenhum", label: "Nenhum / em investigação" },
];

function Anamnese() {
  const { childId } = Route.useParams();
  const { children: allChildren, updateChild, addChild } = useAppState();
  const navigate = useNavigate();
  const existing = allChildren.find((c: any) => c.id === childId);
  const isNew = !existing;

  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    nome: existing?.nome ?? "",
    idade: existing?.idade ?? 6,
    serie: existing?.serie ?? "1º ano",
    hiperfoco: (existing?.hiperfoco ?? "animais") as Hiperfoco,
    diagnostico: (existing?.diagnostico ?? "nenhum") as Diagnostico,
    avatar: existing?.avatar ?? "🌟",
    trocaLetras: existing?.flags.trocaLetras ?? false,
    palavrasLongas: existing?.flags.palavrasLongas ?? false,
    preferAudio: existing?.flags.preferAudio ?? false,
    contaNosDedos: existing?.flags.contaNosDedos ?? false,
    apoioVisual: existing?.flags.apoioVisual ?? true,
    tempoAtencao: existing?.tempo_atencao_min ?? 10,
  });

  const blocos = ["Identidade", "Hiperfoco", "Diagnóstico", "Português", "Matemática", "Atenção", "Pronto!"];

  const finish = () => {
    const payload = {
      nome: data.nome || "Criança",
      idade: data.idade,
      serie: data.serie,
      hiperfoco: data.hiperfoco,
      diagnostico: data.diagnostico,
      avatar: data.avatar,
      anamnese_completa: true,
      tempo_atencao_min: data.tempoAtencao,
      flags: {
        apoioVisual: data.apoioVisual,
        passoAPasso: true,
        preferAudio: data.preferAudio,
        contaNosDedos: data.contaNosDedos,
        trocaLetras: data.trocaLetras,
        palavrasLongas: data.palavrasLongas,
      },
    };
    if (isNew) {
      addChild({
        ...payload,
        perfil: { leitura: 50, escrita: 50, matematica: 50, atencao: 50, linguagem: 50, autonomia: 50, emocional: 50, social: 50 },
        niveis: { geral: 2, portugues: 2, matematica: 2, ciencias: 2, historia: 2, geografia: 2 },
        observacoes: "",
      });
    } else {
      updateChild(childId, payload);
    }
    navigate({ to: "/painel-pais" });
  };

  return (
    <Shell>
      <PageHeader emoji="📋" title="Anamnese" subtitle={`Como ${data.nome || "essa criança"} aprende?`} />

      <div className="mb-6 flex gap-1.5 overflow-x-auto pb-2">
        {blocos.map((b, i) => (
          <div key={b} className={`flex items-center gap-1.5 text-xs whitespace-nowrap px-3 py-1.5 rounded-full font-bold ${i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"}`}>
            {i < step && <CheckCircle2 className="h-3.5 w-3.5" />} {b}
          </div>
        ))}
      </div>

      <Card>
        {step === 0 && (
          <div className="space-y-4">
            <h2>Quem é a criança?</h2>
            <Field label="Nome">
              <input className="input" value={data.nome} onChange={(e) => setData({ ...data, nome: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Idade"><input type="number" min={2} max={15} className="input" value={data.idade} onChange={(e) => setData({ ...data, idade: +e.target.value })} /></Field>
              <Field label="Série"><input className="input" value={data.serie} onChange={(e) => setData({ ...data, serie: e.target.value })} /></Field>
            </div>
            <Field label="Avatar (emoji)">
              <div className="flex flex-wrap gap-2">
                {["🌟","🦕","🚀","🦊","🦄","🐢","🐝","🌈","🦖","🐳"].map((e) => (
                  <button key={e} onClick={() => setData({ ...data, avatar: e })} className={`h-12 w-12 rounded-xl text-2xl border-2 ${data.avatar === e ? "border-primary bg-primary/10" : "border-border bg-muted"}`}>{e}</button>
                ))}
              </div>
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h2>O que ela mais ama?</h2>
            <p className="text-sm text-muted-foreground">O hiperfoco vira combustível pedagógico — abrirá atividades, dará reforço positivo e apoio emocional.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {hiperfocos.map((h) => (
                <button key={h.v} onClick={() => setData({ ...data, hiperfoco: h.v })}
                  className={`rounded-2xl p-4 border-2 text-center ${data.hiperfoco === h.v ? "border-primary bg-primary/10" : "border-border bg-muted hover:border-primary/40"}`}>
                  <div className="text-3xl">{h.emoji}</div>
                  <div className="text-sm font-bold mt-1">{h.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2>Diagnóstico clínico</h2>
            <p className="text-sm text-muted-foreground">Pode ser diagnóstico fechado ou hipótese. Define qual protocolo (ABA, Orton-Gillingham, TEACCH, CRA) o app vai priorizar.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {diagnosticos.map((d) => (
                <button key={d.v} onClick={() => setData({ ...data, diagnostico: d.v })}
                  className={`rounded-xl p-3 border-2 text-left font-bold ${data.diagnostico === d.v ? "border-primary bg-primary/10" : "border-border bg-muted"}`}>
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h2>Português</h2>
            <Toggle label="Troca letras parecidas (b/d, p/q)" v={data.trocaLetras} on={(v) => setData({ ...data, trocaLetras: v })} />
            <Toggle label="Tem dificuldade com palavras longas" v={data.palavrasLongas} on={(v) => setData({ ...data, palavrasLongas: v })} />
            <Toggle label="Prefere ouvir ao invés de ler" v={data.preferAudio} on={(v) => setData({ ...data, preferAudio: v })} />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <h2>Matemática</h2>
            <Toggle label="Conta nos dedos" v={data.contaNosDedos} on={(v) => setData({ ...data, contaNosDedos: v })} />
            <Toggle label="Precisa de apoio visual em todo exercício" v={data.apoioVisual} on={(v) => setData({ ...data, apoioVisual: v })} />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h2>Atenção</h2>
            <Field label={`Tempo médio de foco em uma atividade: ${data.tempoAtencao} minutos`}>
              <input type="range" min={3} max={45} value={data.tempoAtencao} onChange={(e) => setData({ ...data, tempoAtencao: +e.target.value })} className="w-full" />
            </Field>
            <p className="text-sm text-muted-foreground">O app vai respeitar este tempo em todas as sessões — sem cronômetros visíveis para a criança.</p>
          </div>
        )}

        {step === 6 && (
          <div className="text-center space-y-4 py-6">
            <div className="text-6xl">🎉</div>
            <h2>Pronto!</h2>
            <p className="text-muted-foreground">Perfil neuro-adaptativo de <strong>{data.nome}</strong> está sendo gerado. Cada explicação, exercício e feedback será ajustado automaticamente.</p>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <button disabled={step === 0} onClick={() => setStep(step - 1)} className="btn-tap px-4 py-2 rounded-xl bg-muted font-bold disabled:opacity-30">Voltar</button>
          {step < blocos.length - 1 ? (
            <button onClick={() => setStep(step + 1)} className="btn-tap px-6 py-2 rounded-xl bg-primary text-primary-foreground font-bold flex items-center gap-1">
              Continuar <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button onClick={finish} className="btn-tap px-6 py-2 rounded-xl bg-success text-success-foreground font-bold">Finalizar anamnese</button>
          )}
        </div>
      </Card>

      <style>{`.input{width:100%;padding:.6rem .8rem;border-radius:.75rem;background:var(--color-input);border:1px solid var(--color-border);font-weight:600}`}</style>
    </Shell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-foreground/80">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Toggle({ label, v, on }: { label: string; v: boolean; on: (b: boolean) => void }) {
  return (
    <button onClick={() => on(!v)} className={`w-full flex items-center justify-between p-3 rounded-xl border-2 ${v ? "border-primary bg-primary/10" : "border-border bg-muted"}`}>
      <span className="font-bold text-left">{label}</span>
      <span className={`h-6 w-11 rounded-full relative transition-colors ${v ? "bg-primary" : "bg-border"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${v ? "left-5" : "left-0.5"}`} />
      </span>
    </button>
  );
}
