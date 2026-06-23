import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { Network, ChevronDown, ChevronRight, CheckCircle2, Circle, Clock, BookOpen } from "lucide-react";

export const Route = createFileRoute("/matriz-pedagogica")({
  component: MatrizPedagogicaPage,
});

interface Habilidade {
  id: string;
  nome: string;
  descricao: string | null;
  categoria_id: string;
  subcategoria: string | null;
  faixa_etaria: string | null;
  ano_escolar: string | null;
  nivel_dificuldade: string | null;
}
interface Categoria { id: string; nome: string }
interface Prereq { habilidade_id: string; pre_requisito_id: string }
interface Rel { habilidade_id: string; relacionada_id: string }
interface Dominio { habilidade_id: string; status: string; percentual: number }

const ANOS = ["Pré","1º ano","2º ano","3º ano","4º ano","5º ano","6º ano","7º ano","8º ano","9º ano"];
const STATUS_LABEL: Record<string,string> = {
  nao_iniciado: "Não iniciado",
  em_desenvolvimento: "Em desenvolvimento",
  dominado: "Dominado",
};

function MatrizPedagogicaPage() {
  const [habs, setHabs] = useState<Habilidade[]>([]);
  const [cats, setCats] = useState<Categoria[]>([]);
  const [prereqs, setPrereqs] = useState<Prereq[]>([]);
  const [rels, setRels] = useState<Rel[]>([]);
  const [dominios, setDominios] = useState<Record<string, Dominio>>({});
  const [loading, setLoading] = useState(true);
  const [filtroAno, setFiltroAno] = useState<string>("");
  const [filtroCat, setFiltroCat] = useState<string>("");
  const [filtroStatus, setFiltroStatus] = useState<string>("");
  const [expandida, setExpandida] = useState<string | null>(null);

  useEffect(() => { void carregar(); }, []);

  const carregar = async () => {
    setLoading(true);
    const [habsRes, catsRes, preRes, relRes, userRes] = await Promise.all([
      supabase.from("rb_habilidades").select("id,nome,descricao,categoria_id,subcategoria,faixa_etaria,ano_escolar,nivel_dificuldade").order("ano_escolar", { ascending: true }).order("ordem", { ascending: true }).limit(500),
      supabase.from("rb_categorias").select("id,nome"),
      supabase.from("rb_habilidade_prerequisitos").select("habilidade_id,pre_requisito_id"),
      supabase.from("rb_habilidade_relacionadas").select("habilidade_id,relacionada_id"),
      supabase.auth.getUser(),
    ]);
    setHabs((habsRes.data || []) as Habilidade[]);
    setCats((catsRes.data || []) as Categoria[]);
    setPrereqs((preRes.data || []) as Prereq[]);
    setRels((relRes.data || []) as Rel[]);
    if (userRes.data.user) {
      const { data: dom } = await supabase
        .from("rb_dominio_habilidade")
        .select("habilidade_id,status,percentual")
        .eq("user_id", userRes.data.user.id);
      const map: Record<string, Dominio> = {};
      (dom || []).forEach((d: any) => { map[d.habilidade_id] = d as Dominio; });
      setDominios(map);
    }
    setLoading(false);
  };

  const catMap = useMemo(() => new Map(cats.map((c) => [c.id, c.nome])), [cats]);
  const habMap = useMemo(() => new Map(habs.map((h) => [h.id, h])), [habs]);

  const filtradas = habs.filter((h) => {
    if (filtroAno && h.ano_escolar !== filtroAno) return false;
    if (filtroCat && h.categoria_id !== filtroCat) return false;
    if (filtroStatus) {
      const st = dominios[h.id]?.status || "nao_iniciado";
      if (st !== filtroStatus) return false;
    }
    return true;
  });

  // Agrupa por categoria
  const agrupadas = useMemo(() => {
    const g = new Map<string, Habilidade[]>();
    for (const h of filtradas) {
      const arr = g.get(h.categoria_id) || [];
      arr.push(h);
      g.set(h.categoria_id, arr);
    }
    return g;
  }, [filtradas]);

  const atualizarStatus = async (habId: string, status: string) => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;
    const percentual = status === "dominado" ? 100 : status === "em_desenvolvimento" ? 50 : 0;
    const { error } = await supabase
      .from("rb_dominio_habilidade")
      .upsert(
        { user_id: userData.user.id, habilidade_id: habId, status, percentual, ultima_atualizacao: new Date().toISOString() },
        { onConflict: "user_id,habilidade_id" },
      );
    if (!error) {
      setDominios((prev) => ({ ...prev, [habId]: { habilidade_id: habId, status, percentual } }));
    }
  };

  const totais = {
    total: habs.length,
    dominado: Object.values(dominios).filter((d) => d.status === "dominado").length,
    desenv: Object.values(dominios).filter((d) => d.status === "em_desenvolvimento").length,
  };

  return (
    <Shell>
      <PageHeader
        icon={Network}
        title="Matriz Pedagógica"
        subtitle="Mapa completo das habilidades do Pré ao 9º ano"
      />

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card><div className="text-xs text-muted-foreground">Habilidades</div><div className="text-2xl font-bold">{totais.total}</div></Card>
        <Card><div className="text-xs text-muted-foreground">Dominadas</div><div className="text-2xl font-bold text-emerald-500">{totais.dominado}</div></Card>
        <Card><div className="text-xs text-muted-foreground">Em desenvolvimento</div><div className="text-2xl font-bold text-amber-500">{totais.desenv}</div></Card>
      </div>

      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <select value={filtroAno} onChange={(e) => setFiltroAno(e.target.value)} className="rounded-xl border-2 border-border px-3 py-2 text-sm bg-background">
            <option value="">Todos os anos</option>
            {ANOS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select value={filtroCat} onChange={(e) => setFiltroCat(e.target.value)} className="rounded-xl border-2 border-border px-3 py-2 text-sm bg-background">
            <option value="">Todas as categorias</option>
            {cats.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
          <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)} className="rounded-xl border-2 border-border px-3 py-2 text-sm bg-background">
            <option value="">Todos os status</option>
            <option value="nao_iniciado">Não iniciado</option>
            <option value="em_desenvolvimento">Em desenvolvimento</option>
            <option value="dominado">Dominado</option>
          </select>
        </div>
      </Card>

      {loading && <p className="text-center text-muted-foreground py-8">Carregando matriz...</p>}

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
              const d = dominios[h.id];
              const st = d?.status || "nao_iniciado";
              const isOpen = expandida === h.id;
              const pre = prereqs.filter((p) => p.habilidade_id === h.id).map((p) => habMap.get(p.pre_requisito_id)).filter(Boolean) as Habilidade[];
              const re = rels.filter((r) => r.habilidade_id === h.id).map((r) => habMap.get(r.relacionada_id)).filter(Boolean) as Habilidade[];
              return (
                <Card key={h.id} className="!p-0 overflow-hidden">
                  <button onClick={() => setExpandida(isOpen ? null : h.id)} className="w-full p-4 flex items-center gap-3 text-left hover:bg-muted/40">
                    {st === "dominado" ? <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" /> :
                      st === "em_desenvolvimento" ? <Clock className="h-5 w-5 text-amber-500 shrink-0" /> :
                      <Circle className="h-5 w-5 text-muted-foreground shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm">{h.nome}</div>
                      <div className="text-xs text-muted-foreground flex flex-wrap gap-2 mt-0.5">
                        {h.ano_escolar && <span>📚 {h.ano_escolar}</span>}
                        {h.faixa_etaria && <span>👶 {h.faixa_etaria}</span>}
                        {h.subcategoria && <span>🏷️ {h.subcategoria}</span>}
                        {h.nivel_dificuldade && <span className="uppercase font-bold">· {h.nivel_dificuldade}</span>}
                      </div>
                    </div>
                    <span className={`text-[10px] uppercase font-black px-2 py-1 rounded-full ${st === "dominado" ? "bg-emerald-500/15 text-emerald-600" : st === "em_desenvolvimento" ? "bg-amber-500/15 text-amber-600" : "bg-muted text-muted-foreground"}`}>
                      {STATUS_LABEL[st]}
                    </span>
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-3 border-t">
                      {h.descricao && <p className="text-sm text-muted-foreground mt-3">{h.descricao}</p>}

                      {pre.length > 0 && (
                        <div>
                          <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Pré-requisitos</div>
                          <div className="flex flex-wrap gap-1.5">
                            {pre.map((p) => <span key={p.id} className="text-xs px-2 py-1 rounded-lg bg-blue-500/10 text-blue-600">{p.nome}</span>)}
                          </div>
                        </div>
                      )}

                      {re.length > 0 && (
                        <div>
                          <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Habilidades relacionadas</div>
                          <div className="flex flex-wrap gap-1.5">
                            {re.map((r) => <span key={r.id} className="text-xs px-2 py-1 rounded-lg bg-violet-500/10 text-violet-600">{r.nome}</span>)}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Marcar status</div>
                        <div className="flex gap-2">
                          {(["nao_iniciado","em_desenvolvimento","dominado"] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => atualizarStatus(h.id, s)}
                              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border-2 transition-all ${
                                st === s
                                  ? s === "dominado" ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                                    : s === "em_desenvolvimento" ? "border-amber-500 bg-amber-500/10 text-amber-600"
                                    : "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {STATUS_LABEL[s]}
                            </button>
                          ))}
                        </div>
                      </div>
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
