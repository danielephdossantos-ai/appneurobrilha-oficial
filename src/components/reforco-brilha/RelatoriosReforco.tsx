import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Trophy,
  TrendingUp,
  Target,
  RefreshCw,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface PlanoRow {
  id: string;
  habilidade_id: string;
  progresso: number;
  status: string;
  aulas_concluidas: any;
  sequencia_aulas: any;
  atividades_sugeridas: any;
  updated_at: string;
  rb_habilidades: { nome: string } | null;
}

const arr = (v: any): any[] => (Array.isArray(v) ? v : []);

export function RelatoriosReforco() {
  const [planos, setPlanos] = useState<PlanoRow[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregar() {
    setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) {
      setPlanos([]);
      setLoading(false);
      return;
    }
    const { data } = await supabase
      .from("rb_planos_intervencao")
      .select(
        "id,habilidade_id,progresso,status,aulas_concluidas,sequencia_aulas,atividades_sugeridas,updated_at,rb_habilidades(nome)",
      )
      .eq("user_id", auth.user.id)
      .order("updated_at", { ascending: false });
    setPlanos((data || []) as any);
    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center text-sm text-muted-foreground">
        Carregando relatórios...
      </div>
    );
  }

  if (planos.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center">
        <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-black mb-1">Nenhum relatório ainda</h3>
        <p className="text-sm text-muted-foreground">
          Crie um Plano de Intervenção e marque aulas concluídas para começar a ver os relatórios aqui.
        </p>
      </div>
    );
  }

  const totalHabilidades = new Set(planos.map((p) => p.habilidade_id)).size;
  const aulasConcluidas = planos.reduce((s, p) => s + arr(p.aulas_concluidas).length, 0);
  const totalAulas = planos.reduce((s, p) => s + arr(p.sequencia_aulas).length, 0);
  const atividades = planos.reduce((s, p) => s + arr(p.atividades_sugeridas).length, 0);
  const percentualAcertos =
    totalAulas > 0 ? Math.round((aulasConcluidas / totalAulas) * 100) : 0;

  const dominadas = planos.filter((p) => p.progresso >= 100);
  const emDesenvolvimento = planos.filter((p) => p.progresso < 100 && p.status === "ativo");

  const barData = planos.slice(0, 8).map((p) => ({
    nome: (p.rb_habilidades?.nome || "—").slice(0, 16),
    progresso: p.progresso,
  }));

  const pieData = [
    { name: "Dominadas", value: dominadas.length, cor: "#10b981" },
    { name: "Em desenvolvimento", value: emDesenvolvimento.length, cor: "#f59e0b" },
  ].filter((d) => d.value > 0);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Relatórios da criança
        </h3>
        <button
          onClick={carregar}
          className="text-xs font-bold text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Atualizar
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <KPI icon={Sparkles} cor="bg-primary" label="Habilidades estudadas" valor={totalHabilidades} />
        <KPI icon={BookOpen} cor="bg-sky-500" label="Aulas concluídas" valor={aulasConcluidas} />
        <KPI icon={Target} cor="bg-amber-500" label="Atividades sugeridas" valor={atividades} />
        <KPI icon={TrendingUp} cor="bg-violet-500" label="% de acertos" valor={`${percentualAcertos}%`} />
        <KPI icon={Trophy} cor="bg-emerald-500" label="Dominadas" valor={dominadas.length} />
        <KPI icon={CheckCircle2} cor="bg-orange-500" label="Em desenvolvimento" valor={emDesenvolvimento.length} />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl border-2 border-border p-5">
          <h4 className="text-sm font-black mb-3">Progresso por habilidade</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 8, right: 8, bottom: 8, left: 0 }}>
                <XAxis dataKey="nome" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={50} />
                <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} unit="%" />
                <Tooltip cursor={{ fill: "rgba(99,102,241,0.08)" }} />
                <Bar dataKey="progresso" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border-2 border-border p-5">
          <h4 className="text-sm font-black mb-3">Dominadas vs Em desenvolvimento</h4>
          <div className="h-64">
            {pieData.length === 0 ? (
              <div className="h-full grid place-items-center text-sm text-muted-foreground">
                Sem dados ainda.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={4}
                    label={(d: any) => `${d.value}`}
                  >
                    {pieData.map((d, i) => (
                      <Cell key={i} fill={d.cor} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* Listas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ListaHabilidades
          titulo="Habilidades dominadas"
          cor="border-emerald-300 bg-emerald-50"
          icone={Trophy}
          corIcone="text-emerald-600"
          itens={dominadas}
          vazio="Nenhuma habilidade dominada ainda. Continue praticando!"
        />
        <ListaHabilidades
          titulo="Em desenvolvimento"
          cor="border-amber-300 bg-amber-50"
          icone={TrendingUp}
          corIcone="text-amber-600"
          itens={emDesenvolvimento}
          vazio="Nenhuma habilidade em desenvolvimento."
        />
      </div>
    </div>
  );
}

function KPI({ icon: Icon, cor, label, valor }: { icon: any; cor: string; label: string; valor: number | string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-3 text-center">
      <div className={`h-9 w-9 rounded-xl ${cor} text-white grid place-items-center mx-auto mb-1.5`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-2xl font-black text-foreground leading-none">{valor}</div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function ListaHabilidades({
  titulo,
  cor,
  icone: Icon,
  corIcone,
  itens,
  vazio,
}: {
  titulo: string;
  cor: string;
  icone: any;
  corIcone: string;
  itens: PlanoRow[];
  vazio: string;
}) {
  return (
    <div className={`rounded-3xl border-2 ${cor} p-4`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`h-5 w-5 ${corIcone}`} />
        <h4 className="text-sm font-black uppercase tracking-widest">{titulo}</h4>
        <span className="ml-auto text-xs font-bold text-muted-foreground">{itens.length}</span>
      </div>
      {itens.length === 0 ? (
        <p className="text-xs text-muted-foreground italic">{vazio}</p>
      ) : (
        <ul className="space-y-2">
          {itens.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-between gap-3 bg-white rounded-2xl px-3 py-2 border border-border"
            >
              <span className="font-bold text-sm truncate">{p.rb_habilidades?.nome || "—"}</span>
              <span className="text-xs font-black text-primary shrink-0">{p.progresso}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RelatoriosReforco;
