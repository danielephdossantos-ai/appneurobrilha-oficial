import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Sparkles, X } from "lucide-react";
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
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom, limpar } = useHiperfoco();
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {HIPERFOCO_LIST.map((h) => {
            const ativo = hiperfoco?.id === h.id;
            // Se for custom e tivermos um hiperfoco custom ativo, mostramos o custom ativo em vez do template
            if (h.id === "custom") return null;

            return (
              <button
                key={h.id}
                onClick={() => setHiperfocoById(h.id)}
                className={`rounded-2xl p-4 border-2 text-left transition-all hover:scale-105 flex flex-col items-center text-center ${
                  ativo
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="text-5xl mb-3">{h.emoji}</div>
                <div className="font-extrabold text-sm">{h.label}</div>
                <div className="text-[10px] text-muted-foreground mt-1 line-clamp-1">
                  {h.elementos.slice(0, 2).join(", ")}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <label className="block text-sm font-bold mb-3 flex items-center gap-2">
             Ou escreva um novo hiperfoco:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && custom.trim()) {
                  setHiperfocoCustom(custom);
                  setCustom("");
                }
              }}
              placeholder="Ex: Trens, Patrulha Canina, Espaço…"
              className="flex-1 rounded-xl border-2 border-border bg-background px-4 py-3 focus:border-primary outline-none font-medium"
            />
            <button
              onClick={() => {
                if (custom.trim()) {
                  setHiperfocoCustom(custom);
                  setCustom("");
                }
              }}
              className="rounded-xl bg-primary text-primary-foreground px-6 py-3 font-bold disabled:opacity-50 hover:scale-105 transition-all shadow-md"
              disabled={!custom.trim()}
            >
              Criar
            </button>
          </div>
        </div>

        {hiperfoco && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-primary/5 border-2 border-primary/20 p-6 animate-fade-in shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl shadow-inner border border-primary/10">
                {hiperfoco.emoji}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-primary/60">Hiperfoco Ativo</span>
                <span className="text-xl font-black text-foreground">{hiperfoco.label}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={limpar}
                title="Limpar hiperfoco"
                className="p-3 rounded-xl border-2 border-border bg-card text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-all shadow-sm"
              >
                <X size={20} />
              </button>
              <button
                onClick={continuar}
                className="flex-1 sm:flex-none rounded-2xl bg-primary text-primary-foreground px-8 py-4 font-black text-lg hover:scale-105 transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                Começar Treino <Sparkles size={20} />
              </button>
            </div>
          </div>
        )}
      </Card>
    </Shell>
  );
}
