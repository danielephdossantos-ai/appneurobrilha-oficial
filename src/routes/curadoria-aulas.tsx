import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { ClipboardCheck, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/curadoria-aulas")({
  component: CuradoriaAulasPage,
});

interface AulaStatus {
  aula_id: string;
  titulo: string;
  habilidade_id: string;
  etapas_presentes: number;
  etapas_obrigatorias: number;
  pct_premium: number;
  is_premium_completa: boolean;
  etapas_faltantes: string[] | null;
  etapas_presentes_list: string[] | null;
}

interface Habilidade { id: string; nome: string; categoria_id: string }
interface Categoria { id: string; nome: string }

const ETAPA_LABEL: Record<string, string> = {
  objetivo: "1. Objetivo claro",
  explicacao: "2. Explicação visual",
  exemplo: "3. Exemplos resolvidos",
  pratica_guiada: "4. Prática guiada",
  desafio: "5. Desafio",
  revisao: "6. Revisão",
};

const ETAPA_ORDER = ["objetivo", "explicacao", "exemplo", "pratica_guiada", "desafio", "revisao"];

function CuradoriaAulasPage() {
  const [status, setStatus] = useState<AulaStatus[]>([]);
  const [habs, setHabs] = useState<Habilidade[]>([]);
  const [cats, setCats] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<"todas" | "premium" | "incompletas">("todas");

  useEffect(() => { void carregar(); }, []);

  const carregar = async () => {
    setLoading(true);
    const [stRes, hRes, cRes] = await Promise.all([
      (supabase.from("rb_aulas_premium_status" as never) as any).select("*").order("pct_premium", { ascending: false }),
      supabase.from("rb_habilidades").select("id,nome,categoria_id"),
      supabase.from("rb_categorias").select("id,nome"),
    ]);
    setStatus((stRes.data || []) as AulaStatus[]);
    setHabs((hRes.data || []) as Habilidade[]);
    setCats((cRes.data || []) as Categoria[]);
    setLoading(false);
  };

  const habMap = useMemo(() => new Map(habs.map((h) => [h.id, h])), [habs]);
  const catMap = useMemo(() => new Map(cats.map((c) => [c.id, c.nome])), [cats]);

  const filtradas = status.filter((s) => {
    if (filtro === "premium") return s.is_premium_completa;
    if (filtro === "incompletas") return !s.is_premium_completa;
    return true;
  });

  const totais = {
    total: status.length,
    premium: status.filter((s) => s.is_premium_completa).length,
    pctMedio: status.length
      ? Math.round(status.reduce((acc, s) => acc + Number(s.pct_premium || 0), 0) / status.length)
      : 0,
  };

  return (
    <Shell>
      <PageHeader
        icon={ClipboardCheck}
        title="Curadoria de Aulas"
        subtitle="Padrão premium: objetivo, explicação, exemplo, prática, desafio e revisão"
      />

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card><div className="text-xs text-muted-foreground">Aulas</div><div className="text-2xl font-bold">{totais.total}</div></Card>
        <Card><div className="text-xs text-muted-foreground">Premium completas</div><div className="text-2xl font-bold text-emerald-500">{totais.premium}</div></Card>
        <Card><div className="text-xs text-muted-foreground">% médio</div><div className="text-2xl font-bold text-primary">{totais.pctMedio}%</div></Card>
      </div>

      <div className="flex gap-2 mb-4">
        {(["todas","premium","incompletas"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
              filtro === f ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"
            }`}
          >
            {f === "todas" ? "Todas" : f === "premium" ? "✨ Premium" : "⚠️ Incompletas"}
          </button>
        ))}
      </div>

      {loading && <p className="text-center text-muted-foreground py-8">Carregando aulas...</p>}

      {!loading && filtradas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">Nenhuma aula encontrada.</p>
      )}

      <div className="space-y-3">
        {filtradas.map((s) => {
          const hab = habMap.get(s.habilidade_id);
          const catNome = hab ? catMap.get(hab.categoria_id) : null;
          const pct = Number(s.pct_premium || 0);
          const faltantes = s.etapas_faltantes || [];
          const presentes = new Set(s.etapas_presentes_list || []);
          const corBarra = pct === 100 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-rose-500";
          return (
            <Card key={s.aula_id} className="!p-0 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <div className="font-bold text-sm">{s.titulo}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 flex flex-wrap gap-2">
                      {catNome && <span>📂 {catNome}</span>}
                      {hab && <span>🎯 {hab.nome}</span>}
                    </div>
                  </div>
                  {s.is_premium_completa ? (
                    <span className="shrink-0 flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-black uppercase">
                      <Sparkles className="h-3 w-3" /> Premium
                    </span>
                  ) : (
                    <span className="shrink-0 flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 text-[10px] font-black uppercase">
                      <AlertCircle className="h-3 w-3" /> {s.etapas_presentes}/6
                    </span>
                  )}
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                  <div className={`h-full transition-all ${corBarra}`} style={{ width: `${pct}%` }} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {ETAPA_ORDER.map((etapa) => {
                    const ok = presentes.has(etapa);
                    return (
                      <div
                        key={etapa}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-[11px] ${
                          ok
                            ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                            : "border-dashed border-rose-400/40 bg-rose-500/5 text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {ok
                          ? <CheckCircle2 className="h-4 w-4 shrink-0" />
                          : <AlertCircle className="h-4 w-4 shrink-0" />}
                        <span className="font-bold">{ETAPA_LABEL[etapa]}</span>
                      </div>
                    );
                  })}
                </div>

                {faltantes.length > 0 && (
                  <div className="mt-3 text-[11px] text-muted-foreground">
                    <span className="font-black uppercase">Faltam:</span>{" "}
                    {faltantes.map((f) => ETAPA_LABEL[f] || f).join(" · ")}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Shell>
  );
}
