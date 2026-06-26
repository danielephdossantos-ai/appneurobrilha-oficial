import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { stripBncc } from "@/lib/strip-bncc";
import { toast } from "sonner";
import {
  ClipboardList,
  Target,
  Clock,
  CheckCircle2,
  Circle,
  PlayCircle,
  Sparkles,
  Save,
  Trash2,
  TrendingUp,
  Zap,
} from "lucide-react";

interface AulaRef {
  id: string;
  titulo: string;
  nivel?: string | null;
  faixa_etaria?: string | null;
  objetivo?: string | null;
}

interface AtividadeRef {
  id: string;
  titulo?: string | null;
  modulo?: string | null;
  rota?: string | null;
}

interface HabilidadeRef {
  id: string;
  nome: string;
  descricao?: string | null;
}

export interface PlanoIntervencaoProps {
  habilidade: HabilidadeRef;
  dificuldadeBuscada: string;
  aulas: AulaRef[];
  atividades: AtividadeRef[];
  onAbrirAula: (aulaId: string, titulo: string) => void;
}

interface PlanoRow {
  id: string;
  dificuldade: string;
  objetivo: string | null;
  sequencia_aulas: AulaRef[];
  atividades_sugeridas: AtividadeRef[];
  tempo_estimado_min: number;
  aulas_concluidas: string[];
  progresso: number;
  observacoes: string | null;
  updated_at: string;
}

const MIN_POR_AULA = 12;

export function PlanoIntervencao({
  habilidade,
  dificuldadeBuscada,
  aulas,
  atividades,
  onAbrirAula,
}: PlanoIntervencaoProps) {
  const [plano, setPlano] = useState<PlanoRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [observacoes, setObservacoes] = useState("");

  const tempoEstimado = useMemo(() => aulas.length * MIN_POR_AULA, [aulas]);
  const objetivoSugerido = useMemo(
    () =>
      habilidade.descricao
        ? `Trabalhar "${habilidade.nome.toLowerCase()}" para que a criança ${habilidade.descricao.toLowerCase()}.`
        : `Desenvolver a habilidade: ${habilidade.nome}.`,
    [habilidade],
  );

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) {
        if (alive) {
          setPlano(null);
          setLoading(false);
        }
        return;
      }
      const { data } = await supabase
        .from("rb_planos_intervencao")
        .select(
          "id,dificuldade,objetivo,sequencia_aulas,atividades_sugeridas,tempo_estimado_min,aulas_concluidas,progresso,observacoes,updated_at",
        )
        .eq("user_id", auth.user.id)
        .eq("habilidade_id", habilidade.id)
        .eq("status", "ativo")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (!alive) return;
      if (data) {
        const row = data as any;
        setPlano({
          ...row,
          sequencia_aulas: row.sequencia_aulas || [],
          atividades_sugeridas: row.atividades_sugeridas || [],
          aulas_concluidas: row.aulas_concluidas || [],
        });
        setObservacoes(row.observacoes || "");
      } else {
        setPlano(null);
        setObservacoes("");
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [habilidade.id]);

  async function criarPlano() {
    setSaving(true);
    try {
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) {
        toast.error("Faça login para salvar o plano.");
        setSaving(false);
        return;
      }
      const payload = {
        user_id: auth.user.id,
        habilidade_id: habilidade.id,
        dificuldade: dificuldadeBuscada || habilidade.nome,
        objetivo: objetivoSugerido,
        sequencia_aulas: aulas,
        atividades_sugeridas: atividades,
        tempo_estimado_min: tempoEstimado,
        aulas_concluidas: [],
        progresso: 0,
        status: "ativo",
        observacoes: null,
      };
      const { data, error } = await supabase
        .from("rb_planos_intervencao")
        .insert(payload as any)
        .select(
          "id,dificuldade,objetivo,sequencia_aulas,atividades_sugeridas,tempo_estimado_min,aulas_concluidas,progresso,observacoes,updated_at",
        )
        .single();
      if (error) throw error;
      setPlano(data as any);
      toast.success("Plano de Intervenção criado!");
    } catch (e: any) {
      console.error(e);
      toast.error("Não foi possível criar o plano.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleAulaConcluida(aulaId: string) {
    if (!plano) return;
    const ja = plano.aulas_concluidas.includes(aulaId);
    const novas = ja
      ? plano.aulas_concluidas.filter((x) => x !== aulaId)
      : [...plano.aulas_concluidas, aulaId];
    const total = plano.sequencia_aulas.length || 1;
    const novoProgresso = Math.round((novas.length / total) * 100);
    setPlano({ ...plano, aulas_concluidas: novas, progresso: novoProgresso });
    const { error } = await supabase
      .from("rb_planos_intervencao")
      .update({ aulas_concluidas: novas as any, progresso: novoProgresso })
      .eq("id", plano.id);
    if (error) {
      toast.error("Erro ao salvar progresso.");
    } else if (!ja) {
      toast.success("Aula marcada como concluída! 🎉");
    }
  }

  async function salvarObservacoes() {
    if (!plano) return;
    setSaving(true);
    const { error } = await supabase
      .from("rb_planos_intervencao")
      .update({ observacoes })
      .eq("id", plano.id);
    setSaving(false);
    if (error) toast.error("Erro ao salvar observações.");
    else toast.success("Observações salvas.");
  }

  async function finalizarPlano() {
    if (!plano) return;
    const ok = window.confirm("Finalizar este plano? Você poderá criar um novo depois.");
    if (!ok) return;
    const { error } = await supabase
      .from("rb_planos_intervencao")
      .update({ status: "concluido" })
      .eq("id", plano.id);
    if (error) toast.error("Erro ao finalizar.");
    else {
      toast.success("Plano finalizado!");
      setPlano(null);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center text-sm text-muted-foreground">
        Carregando plano de intervenção...
      </div>
    );
  }

  // SEM PLANO — CTA para criar
  if (!plano) {
    return (
      <div className="rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-primary text-white grid place-items-center shrink-0 shadow-glow">
            <ClipboardList className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary">
              Plano de Intervenção
            </div>
            <h4 className="text-lg sm:text-xl font-black text-foreground leading-tight">
              Monte um plano personalizado para a criança
            </h4>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Vamos organizar uma trilha com {aulas.length} aula{aulas.length === 1 ? "" : "s"} e {atividades.length} atividade
          {atividades.length === 1 ? "" : "s"} práticas para trabalhar
          <b className="text-foreground"> {habilidade.nome.toLowerCase()}</b>. Você acompanha a evolução aqui mesmo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <Resumo icon={Target} label="Dificuldade" valor={dificuldadeBuscada || "—"} />
          <Resumo icon={Sparkles} label="Habilidade" valor={habilidade.nome} />
          <Resumo icon={Clock} label="Tempo" valor={`~${tempoEstimado} min`} />
          <Resumo icon={PlayCircle} label="Etapas" valor={`${aulas.length} aulas`} />
        </div>

        <button
          onClick={criarPlano}
          disabled={saving || aulas.length === 0}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-white font-black text-sm shadow-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          <Save className="h-5 w-5" />
          {saving ? "Criando plano..." : "Criar Plano de Intervenção"}
        </button>
      </div>
    );
  }

  // COM PLANO ATIVO
  const totalAulas = plano.sequencia_aulas.length;
  return (
    <div className="rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 space-y-5">
      {/* Header com progresso */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-primary text-white grid place-items-center shrink-0 shadow-glow">
          <ClipboardList className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-black uppercase tracking-widest text-primary">
            Plano de Intervenção
          </div>
          <h4 className="text-lg sm:text-xl font-black text-foreground leading-tight">
            {habilidade.nome}
          </h4>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[10px] font-black uppercase text-muted-foreground">Progresso</div>
          <div className="text-2xl font-black text-primary">{plano.progresso}%</div>
        </div>
      </div>

      <div className="h-3 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-success rounded-full transition-all duration-500"
          style={{ width: `${plano.progresso}%` }}
        />
      </div>

      {/* Cards de informação */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InfoCard icon={Target} titulo="Dificuldade identificada" texto={plano.dificuldade} />
        <InfoCard icon={Sparkles} titulo="Habilidade trabalhada" texto={habilidade.nome} />
        <InfoCard icon={TrendingUp} titulo="Objetivo pedagógico" texto={plano.objetivo || objetivoSugerido} />
        <InfoCard
          icon={Clock}
          titulo="Tempo estimado"
          texto={`~${plano.tempo_estimado_min} minutos · ${plano.aulas_concluidas.length}/${totalAulas} aulas concluídas`}
        />
      </div>

      {/* Sequência recomendada */}
      <div>
        <h5 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
          <PlayCircle className="h-3.5 w-3.5" />
          Sequência recomendada
        </h5>
        <div className="space-y-2">
          {plano.sequencia_aulas.map((aula, i) => {
            const done = plano.aulas_concluidas.includes(aula.id);
            return (
              <div
                key={aula.id}
                className={`flex items-center gap-3 p-3 rounded-2xl border transition-colors ${
                  done ? "bg-success/10 border-success/40" : "bg-card border-border"
                }`}
              >
                <button
                  onClick={() => toggleAulaConcluida(aula.id)}
                  className="shrink-0"
                  aria-label={done ? "Marcar como não concluída" : "Marcar como concluída"}
                >
                  {done ? (
                    <CheckCircle2 className="h-7 w-7 text-success" />
                  ) : (
                    <Circle className="h-7 w-7 text-muted-foreground" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black uppercase text-primary tracking-wider">
                    Passo {i + 1} {aula.nivel ? `· ${aula.nivel}` : ""}
                  </div>
                  <div className={`font-bold text-sm ${done ? "line-through text-muted-foreground" : ""}`}>
                    {aula.titulo}
                  </div>
                </div>
                <button
                  onClick={() => onAbrirAula(aula.id, aula.titulo)}
                  className="shrink-0 flex items-center gap-1 px-3 py-2 rounded-xl bg-primary text-white text-xs font-black hover:opacity-90"
                >
                  <PlayCircle className="h-4 w-4" /> Abrir
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Atividades sugeridas */}
      {plano.atividades_sugeridas.length > 0 && (
        <div>
          <h5 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
            <Zap className="h-3.5 w-3.5" />
            Atividades sugeridas
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {plano.atividades_sugeridas.map((at) => (
              <a
                key={at.id}
                href={at.rota || "#"}
                className="p-3 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-100 flex justify-between items-center gap-2 text-sm"
              >
                <div className="min-w-0">
                  {at.modulo && (
                    <div className="text-[10px] font-black uppercase text-amber-700 tracking-wider">
                      {at.modulo}
                    </div>
                  )}
                  <div className="font-bold text-amber-900 truncate">{at.titulo || "Atividade"}</div>
                </div>
                <PlayCircle className="h-5 w-5 text-amber-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Observações de evolução */}
      <div>
        <h5 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          Anotações da evolução
        </h5>
        <textarea
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          rows={3}
          placeholder="Anote como a criança está evoluindo, o que deu certo, o que precisa reforçar..."
          className="w-full p-3 rounded-2xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <div className="flex items-center justify-between gap-2 mt-2">
          <button
            onClick={salvarObservacoes}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-black hover:opacity-90 disabled:opacity-50"
          >
            <Save className="h-4 w-4" /> Salvar anotações
          </button>
          <button
            onClick={finalizarPlano}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-foreground text-xs font-bold hover:bg-secondary/70"
          >
            <Trash2 className="h-4 w-4" /> Finalizar plano
          </button>
        </div>
      </div>
    </div>
  );
}

function Resumo({ icon: Icon, label, valor }: { icon: any; label: string; valor: string }) {
  return (
    <div className="bg-white/70 rounded-2xl p-3 border border-primary/20">
      <Icon className="h-4 w-4 text-primary mx-auto mb-1" />
      <div className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-xs font-black text-foreground truncate">{valor}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, titulo, texto }: { icon: any; titulo: string; texto: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-3">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-4 w-4 text-primary" />
        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          {titulo}
        </div>
      </div>
      <div className="text-sm font-bold text-foreground">{texto}</div>
    </div>
  );
}

export default PlanoIntervencao;
