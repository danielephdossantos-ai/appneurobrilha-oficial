import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { useAppState } from "@/core/store";
import { UserCircle2, ChevronDown, ChevronRight, CheckCircle2, Circle, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/perfil-aluno")({
  component: PerfilAlunoPage,
});

interface Habilidade {
  id: string;
  nome: string;
  descricao: string | null;
  categoria_id: string;
  ano_escolar: string | null;
  ordem: number;
}
interface Categoria { id: string; nome: string }
interface Indicador {
  id: string;
  habilidade_id: string;
  ordem: number;
  texto: string;
  descricao: string | null;
}
interface Progresso {
  indicador_id: string;
  atingido: boolean;
}

const ANOS = ["Pré","1º ano","2º ano","3º ano","4º ano","5º ano","6º ano","7º ano","8º ano","9º ano"];

function PerfilAlunoPage() {
  const { activeChild, children, setActiveChild } = useAppState();
  const childId = activeChild?.id;

  const [habs, setHabs] = useState<Habilidade[]>([]);
  const [cats, setCats] = useState<Categoria[]>([]);
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);
  const [progresso, setProgresso] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [filtroAno, setFiltroAno] = useState<string>("");
  const [filtroCat, setFiltroCat] = useState<string>("");
  const [expandida, setExpandida] = useState<string | null>(null);

  useEffect(() => {
    if (!childId) { setLoading(false); return; }
    void carregar(childId);
  }, [childId]);

  const carregar = async (cid: string) => {
    setLoading(true);
    const [habsRes, catsRes, indRes, progRes] = await Promise.all([
      supabase.from("rb_habilidades").select("id,nome,descricao,categoria_id,ano_escolar,ordem").order("ordem"),
      supabase.from("rb_categorias").select("id,nome"),
      supabase.from("rb_indicadores").select("id,habilidade_id,ordem,texto,descricao").order("ordem"),
      supabase.from("rb_progresso_indicadores").select("indicador_id,atingido").eq("child_id", cid),
    ]);
    setHabs((habsRes.data || []) as Habilidade[]);
    setCats((catsRes.data || []) as Categoria[]);
    setIndicadores((indRes.data || []) as Indicador[]);
    const map: Record<string, boolean> = {};
    (progRes.data as Progresso[] | null || []).forEach((p) => { map[p.indicador_id] = p.atingido; });
    setProgresso(map);
    setLoading(false);
  };

  const catMap = useMemo(() => new Map(cats.map((c) => [c.id, c.nome])), [cats]);
  const indPorHab = useMemo(() => {
    const m = new Map<string, Indicador[]>();
    for (const i of indicadores) {
      const arr = m.get(i.habilidade_id) || [];
      arr.push(i);
      m.set(i.habilidade_id, arr);
    }
    return m;
  }, [indicadores]);

  const filtradas = habs.filter((h) => {
    if (filtroAno && h.ano_escolar !== filtroAno) return false;
    if (filtroCat && h.categoria_id !== filtroCat) return false;
    return true;
  });

  const agrupadas = useMemo(() => {
    const g = new Map<string, Habilidade[]>();
    for (const h of filtradas) {
      const arr = g.get(h.categoria_id) || [];
      arr.push(h);
      g.set(h.categoria_id, arr);
    }
    return g;
  }, [filtradas]);

  const toggle = async (indicadorId: string, atual: boolean) => {
    if (!childId) return;
    setSavingId(indicadorId);
    const novo = !atual;
    setProgresso((p) => ({ ...p, [indicadorId]: novo }));
    const { error } = await supabase
      .from("rb_progresso_indicadores")
      .upsert(
        { child_id: childId, indicador_id: indicadorId, atingido: novo, marcado_em: novo ? new Date().toISOString() : null },
        { onConflict: "child_id,indicador_id" },
      );
    if (error) {
      // reverte
      setProgresso((p) => ({ ...p, [indicadorId]: atual }));
    }
    setSavingId(null);
  };

  const totaisGerais = useMemo(() => {
    const total = indicadores.length;
    const atingidos = indicadores.filter((i) => progresso[i.id]).length;
    return { total, atingidos, pct: total ? Math.round((atingidos / total) * 100) : 0 };
  }, [indicadores, progresso]);

  if (!childId) {
    return (
      <Shell>
        <PageHeader icon={UserCircle2} title="Perfil do Aluno" subtitle="Acompanhamento de habilidades por indicadores" />
        <Card>
          <p className="text-sm text-muted-foreground mb-4">Selecione uma criança para ver o perfil de habilidades.</p>
          <div className="flex flex-wrap gap-2">
            {children.map((c: any) => (
              <button
                key={c.id}
                onClick={() => setActiveChild(c.id)}
                className="px-4 py-2 rounded-xl border-2 border-border hover:border-primary text-sm font-bold"
              >
                {c.nome}
              </button>
            ))}
            {children.length === 0 && (
              <Link to="/anamnese/$childId" params={{ childId: "nova" }} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold">
                Cadastrar primeira criança
              </Link>
            )}
          </div>
        </Card>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHeader
        icon={UserCircle2}
        title={`Perfil de ${activeChild?.nome ?? "Aluno"}`}
        subtitle="Acompanhamento de habilidades por indicadores"
      />

      {/* Resumo geral */}
      <Card className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xs text-muted-foreground font-bold uppercase">Progresso geral</div>
            <div className="text-2xl font-black">{totaisGerais.atingidos} / {totaisGerais.total} indicadores</div>
          </div>
          <div className="text-3xl font-black text-primary">{totaisGerais.pct}%</div>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all" style={{ width: `${totaisGerais.pct}%` }} />
        </div>
      </Card>

      {/* Filtros */}
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select value={filtroAno} onChange={(e) => setFiltroAno(e.target.value)} className="rounded-xl border-2 border-border px-3 py-2 text-sm bg-background">
            <option value="">Todos os anos</option>
            {ANOS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select value={filtroCat} onChange={(e) => setFiltroCat(e.target.value)} className="rounded-xl border-2 border-border px-3 py-2 text-sm bg-background">
            <option value="">Todas as categorias</option>
            {cats.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
        </div>
      </Card>

      {loading && <p className="text-center text-muted-foreground py-8">Carregando perfil...</p>}

      {!loading && filtradas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">Nenhuma habilidade encontrada com esses filtros.</p>
      )}

      {!loading && Array.from(agrupadas.entries()).map(([catId, lista]) => (
        <div key={catId} className="mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            {catMap.get(catId) || "Categoria"} ({lista.length})
          </h3>
          <div className="space-y-2">
            {lista.map((h) => {
              const inds = indPorHab.get(h.id) || [];
              const atingidos = inds.filter((i) => progresso[i.id]).length;
              const pct = inds.length ? Math.round((atingidos / inds.length) * 100) : 0;
              const isOpen = expandida === h.id;
              const corBarra = pct === 100 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : pct > 0 ? "bg-primary" : "bg-muted-foreground/30";
              return (
                <Card key={h.id} className="!p-0 overflow-hidden">
                  <button onClick={() => setExpandida(isOpen ? null : h.id)} className="w-full p-4 flex items-center gap-3 text-left hover:bg-muted/40">
                    {pct === 100 ? <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" /> : <Sparkles className={`h-5 w-5 shrink-0 ${pct > 0 ? "text-amber-500" : "text-muted-foreground"}`} />}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm">{h.nome}</div>
                      <div className="mt-1.5 flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full transition-all ${corBarra}`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-[10px] font-black text-muted-foreground tabular-nums whitespace-nowrap">
                          {atingidos}/{inds.length}
                        </span>
                      </div>
                    </div>
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-2 space-y-2 border-t bg-muted/20">
                      {h.descricao && <p className="text-xs text-muted-foreground">{h.descricao}</p>}
                      {inds.length === 0 && <p className="text-xs text-muted-foreground italic">Sem indicadores cadastrados.</p>}
                      {inds.map((ind) => {
                        const ok = !!progresso[ind.id];
                        const isSaving = savingId === ind.id;
                        return (
                          <button
                            key={ind.id}
                            disabled={isSaving}
                            onClick={() => toggle(ind.id, ok)}
                            className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 transition-all ${
                              ok ? "border-emerald-500 bg-emerald-500/10" : "border-border bg-background hover:border-primary/50"
                            } ${isSaving ? "opacity-60" : ""}`}
                          >
                            {ok
                              ? <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                              : <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />}
                            <div className="flex-1 min-w-0">
                              <div className={`text-sm font-bold ${ok ? "text-emerald-700 dark:text-emerald-400" : ""}`}>
                                {ind.ordem}. {ind.texto}
                              </div>
                              {ind.descricao && (
                                <div className="text-xs text-muted-foreground mt-0.5">{ind.descricao}</div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </Shell>
  );
}
