import { useEffect, useState } from "react";
import { Calendar, CheckCircle2, Circle, PlayCircle, Sparkles, Trash2 } from "lucide-react";
import { Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { PLANOS_TEMPLATES, AreaPlano, SemanaTemplate } from "@/lib/reforco-brilha-planos-templates";
import { stripBncc } from "@/lib/strip-bncc";

interface SemanaPlano extends SemanaTemplate {
  habilidade_id: string | null;
  habilidade_nome: string | null;
  aulas: { id: string; titulo: string; nivel: string }[];
}

interface PlanoSalvo {
  id: string;
  area: string;
  titulo: string;
  semanas: SemanaPlano[];
  semana_atual: number;
  semanas_concluidas: number[];
  progresso: number;
  status: string;
}

interface Props {
  area: AreaPlano;
  onAbrirAula?: (id: string, titulo: string) => void;
}

export function PlanoAutomatico({ area, onAbrirAula }: Props) {
  const [loading, setLoading] = useState(true);
  const [plano, setPlano] = useState<PlanoSalvo | null>(null);
  const template = PLANOS_TEMPLATES[area];

  useEffect(() => {
    void carregar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area]);

  const carregar = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        setPlano(null);
        return;
      }
      const { data } = await supabase
        .from("rb_planos_semanais")
        .select("*")
        .eq("user_id", userData.user.id)
        .eq("area", area)
        .eq("status", "ativo")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (data) {
        setPlano({
          id: data.id,
          area: data.area,
          titulo: data.titulo,
          semanas: (data.semanas as unknown as SemanaPlano[]) || [],
          semana_atual: data.semana_atual,
          semanas_concluidas: (data.semanas_concluidas as unknown as number[]) || [],
          progresso: data.progresso,
          status: data.status,
        });
      } else {
        setPlano(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const gerarPlano = async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      toast.error("Faça login para criar um plano.");
      return;
    }
    setLoading(true);
    try {
      // monta semanas casando keywords com o banco
      const semanas: SemanaPlano[] = [];
      for (const s of template.semanas) {
        const { data: hab } = await supabase
          .from("rb_habilidades")
          .select("id,nome")
          .overlaps("palavras_chave", s.keywords)
          .limit(1)
          .maybeSingle();
        let aulas: SemanaPlano["aulas"] = [];
        if (hab) {
          const { data: aulasData } = await supabase
            .from("rb_aulas")
            .select("id,titulo,nivel,ordem")
            .eq("habilidade_id", hab.id)
            .order("ordem", { ascending: true })
            .limit(3);
          aulas = (aulasData || []).map((a: any) => ({ id: a.id, titulo: a.titulo, nivel: a.nivel }));
        }
        semanas.push({
          ...s,
          habilidade_id: hab?.id || null,
          habilidade_nome: hab?.nome || null,
          aulas,
        });
      }

      const { data, error } = await supabase
        .from("rb_planos_semanais")
        .insert({
          user_id: userData.user.id,
          area,
          titulo: template.titulo,
          semanas: semanas as any,
          semana_atual: 1,
          semanas_concluidas: [],
          progresso: 0,
        })
        .select("*")
        .single();
      if (error) throw error;
      toast.success("Plano criado!");
      setPlano({
        id: data.id,
        area: data.area,
        titulo: data.titulo,
        semanas: data.semanas as unknown as SemanaPlano[],
        semana_atual: data.semana_atual,
        semanas_concluidas: (data.semanas_concluidas as unknown as number[]) || [],
        progresso: data.progresso,
        status: data.status,
      });
    } catch (e: any) {
      toast.error(e.message || "Erro ao gerar plano");
    } finally {
      setLoading(false);
    }
  };

  const concluirSemana = async (numero: number) => {
    if (!plano) return;
    const novasConcluidas = plano.semanas_concluidas.includes(numero)
      ? plano.semanas_concluidas.filter((n) => n !== numero)
      : [...plano.semanas_concluidas, numero];
    const progresso = Math.round((novasConcluidas.length / plano.semanas.length) * 100);
    const proxima = Math.min(plano.semanas.length, novasConcluidas.length + 1);
    const status = progresso === 100 ? "concluido" : "ativo";
    const { error } = await supabase
      .from("rb_planos_semanais")
      .update({
        semanas_concluidas: novasConcluidas,
        progresso,
        semana_atual: proxima,
        status,
      })
      .eq("id", plano.id);
    if (error) {
      toast.error("Não foi possível salvar.");
      return;
    }
    setPlano({
      ...plano,
      semanas_concluidas: novasConcluidas,
      progresso,
      semana_atual: proxima,
      status,
    });
  };

  const apagar = async () => {
    if (!plano) return;
    if (!confirm("Apagar este plano?")) return;
    await supabase.from("rb_planos_semanais").delete().eq("id", plano.id);
    setPlano(null);
  };

  if (loading) {
    return (
      <Card className="border-dashed">
        <p className="text-sm text-muted-foreground text-center py-4">Carregando plano...</p>
      </Card>
    );
  }

  if (!plano) {
    return (
      <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-500/30">
        <h4 className="font-bold flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-amber-500" />
          {template.titulo}
        </h4>
        <p className="text-sm text-muted-foreground mb-3">
          {template.semanas.length} semanas guiadas com habilidades e aulas do banco. Você pode salvar e acompanhar a evolução.
        </p>
        <button
          onClick={gerarPlano}
          className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors"
        >
          Gerar plano automático
        </button>
      </Card>
    );
  }

  return (
    <Card className="border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-500" />
            {plano.titulo}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            Semana atual: {plano.semana_atual} de {plano.semanas.length} · {plano.progresso}% concluído
          </p>
        </div>
        <button onClick={apagar} className="text-muted-foreground hover:text-red-500" aria-label="Apagar plano">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="h-2 bg-amber-500/15 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-amber-500 transition-all" style={{ width: `${plano.progresso}%` }} />
      </div>

      <div className="space-y-3">
        {plano.semanas.map((s) => {
          const concluida = plano.semanas_concluidas.includes(s.numero);
          return (
            <div
              key={s.numero}
              className={`p-3 rounded-xl border-2 transition-all ${
                concluida
                  ? "border-emerald-500/40 bg-emerald-500/5"
                  : s.numero === plano.semana_atual
                    ? "border-amber-500 bg-amber-500/5"
                    : "border-border"
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => concluirSemana(s.numero)}
                  className="mt-0.5 shrink-0"
                  aria-label={concluida ? "Desmarcar" : "Marcar como concluída"}
                >
                  {concluida ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-600">
                    Semana {s.numero}
                  </div>
                  <div className="font-bold text-sm">{s.tema}</div>
                  <p className="text-xs text-muted-foreground mt-1">{s.descricao}</p>
                  {s.habilidade_nome && (
                    <div className="text-[11px] text-amber-700 mt-1">→ {s.habilidade_nome}</div>
                  )}
                  {s.aulas.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {s.aulas.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => onAbrirAula?.(a.id, a.titulo)}
                          className="w-full flex items-center gap-2 text-left px-2.5 py-1.5 rounded-lg bg-background hover:bg-amber-500/10 text-xs"
                        >
                          <PlayCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                          <span className="flex-1 font-medium">{a.titulo}</span>
                          <span className="text-[10px] uppercase font-black text-amber-500">{a.nivel}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
