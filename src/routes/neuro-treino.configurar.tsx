import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { HIPERFOCO_LIST } from "@/data/hiperfocos";
import { useHiperfoco } from "@/context/HiperfocoContext";

interface ConfigSearch {
  next?: string;
}

export const Route = createFileRoute("/neuro-treino/configurar")({
  validateSearch: (s: Record<string, unknown>): ConfigSearch => ({
    next: typeof s.next === "string" ? s.next : undefined,
  }),
  component: ConfigurarHiperfoco,
});

function ConfigurarHiperfoco() {
  const navigate = useNavigate();
  const { next } = useSearch({ from: "/neuro-treino/configurar" });
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom } = useHiperfoco();
  const [custom, setCustom] = useState("");

  const continuar = () => {
    if (next) navigate({ to: "/neuro-treino/$slug", params: { slug: next } });
    else navigate({ to: "/neuro-treino" });
  };

  return (
    <Shell>
      <div className="flex items-center gap-3 mb-2">
        <Link to="/neuro-treino" className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>
      <PageHeader
        emoji="✨"
        title="Qual é o hiperfoco de hoje?"
        subtitle="Escolha um tema para personalizar as atividades — o PIP vai usar essa paixão para guiar a criança."
      />

      <Card>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {HIPERFOCO_LIST.map((h) => {
            const ativo = hiperfoco?.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => h.id !== "custom" && setHiperfocoById(h.id)}
                className={`rounded-2xl p-4 border-2 text-left transition-all hover:scale-105 ${
                  ativo
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="text-4xl mb-2">{h.emoji}</div>
                <div className="font-extrabold">{h.label}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  Ex: {h.elementos.slice(0, 3).join(", ")}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <label className="block text-sm font-bold mb-2">Outro hiperfoco? Escreva aqui:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Ex: Trens, Patrulha Canina, Espaço…"
              className="flex-1 rounded-xl border-2 border-border bg-background px-3 py-2 focus:border-primary outline-none"
            />
            <button
              onClick={() => {
                if (custom.trim()) {
                  setHiperfocoCustom(custom);
                  setCustom("");
                }
              }}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold disabled:opacity-50"
              disabled={!custom.trim()}
            >
              Usar
            </button>
          </div>
        </div>

        {hiperfoco && (
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-success/10 border-2 border-success/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-success" />
              <span className="font-bold">
                Hiperfoco ativo: {hiperfoco.emoji} {hiperfoco.label}
              </span>
            </div>
            <button
              onClick={continuar}
              className="rounded-xl bg-success text-success-foreground px-5 py-2 font-extrabold hover:scale-105 transition-all"
            >
              Começar →
            </button>
          </div>
        )}
      </Card>
    </Shell>
  );
}
