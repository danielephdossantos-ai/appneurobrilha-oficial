import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { CheckCircle2, Circle, Sparkles, Trash2, Plus, Pencil, X } from "lucide-react";
import { toast } from "sonner";

interface Props {
  missionId: string;
  subject: string;
  examDate: string; // YYYY-MM-DD
  notes: string | null;
}

interface PlanoDia {
  id: string;
  mission_id: string;
  scheduled_date: string;
  title: string;
  description: string | null;
  completed: boolean;
}

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function diasEntre(de: string, ate: string): string[] {
  const out: string[] = [];
  const a = new Date(de + "T00:00:00");
  const b = new Date(ate + "T00:00:00");
  if (b < a) return out;
  for (let d = new Date(a); d <= b; d.setDate(d.getDate() + 1)) {
    out.push(ymd(d));
  }
  return out;
}

export function PlanoEstudoProva({ missionId, subject, examDate, notes }: Props) {
  const qc = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const { data: plano = [], isLoading } = useQuery({
    queryKey: ["exam_study_plans", missionId],
    queryFn: async (): Promise<PlanoDia[]> => {
      const { data, error } = await supabase
        .from("exam_study_plans")
        .select("id,mission_id,scheduled_date,title,description,completed")
        .eq("mission_id", missionId)
        .order("scheduled_date", { ascending: true });
      if (error) {
        console.warn("[plano] erro:", error);
        return [];
      }
      return (data || []) as PlanoDia[];
    },
  });

  const hoje = ymd(new Date());
  const diasRestantes = useMemo(() => diasEntre(hoje, examDate), [hoje, examDate]);

  async function gerarPlano() {
    if (diasRestantes.length === 0) {
      toast.error("A data da prova já passou");
      return;
    }
    // divide notes em N pedaços; se vazio, slot "Estudar {subject}"
    const topicos = (notes || "")
      .split(/[,;\n]/)
      .map((s) => s.trim())
      .filter(Boolean);

    const dias = diasRestantes;
    // último dia: revisão geral
    const revisaoDia = dias[dias.length - 1];

    const rows = dias.map((data, i) => {
      const isUltimo = data === revisaoDia && dias.length > 1;
      if (isUltimo) {
        return {
          mission_id: missionId,
          scheduled_date: data,
          title: `Revisão geral — ${subject}`,
          description: "Revise tudo o que estudou nos dias anteriores.",
          completed: false,
        };
      }
      const topicoIdx = topicos.length > 0 ? i % topicos.length : -1;
      const titulo =
        topicoIdx >= 0
          ? `Estudar: ${topicos[topicoIdx]}`
          : `Estudar ${subject} (dia ${i + 1})`;
      return {
        mission_id: missionId,
        scheduled_date: data,
        title: titulo,
        description: null,
        completed: false,
      };
    });

    // apaga plano antigo e insere novo
    await supabase.from("exam_study_plans").delete().eq("mission_id", missionId);
    const { error } = await supabase.from("exam_study_plans").insert(rows);
    if (error) {
      toast.error("Erro ao gerar plano: " + error.message);
      return;
    }
    toast.success(`Plano de ${dias.length} dia(s) gerado!`);
    qc.invalidateQueries({ queryKey: ["exam_study_plans", missionId] });
    qc.invalidateQueries({ queryKey: ["lembretes_hoje"] });
  }

  async function toggleCompleto(p: PlanoDia) {
    const { error } = await supabase
      .from("exam_study_plans")
      .update({ completed: !p.completed })
      .eq("id", p.id);
    if (error) {
      toast.error("Erro");
      return;
    }
    qc.invalidateQueries({ queryKey: ["exam_study_plans", missionId] });
    qc.invalidateQueries({ queryKey: ["lembretes_hoje"] });
  }

  async function remover(id: string) {
    await supabase.from("exam_study_plans").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["exam_study_plans", missionId] });
    qc.invalidateQueries({ queryKey: ["lembretes_hoje"] });
  }

  async function salvarEdicao(id: string) {
    const { error } = await supabase
      .from("exam_study_plans")
      .update({ title: editTitle.trim(), description: editDesc.trim() || null })
      .eq("id", id);
    if (error) {
      toast.error("Erro ao salvar");
      return;
    }
    setEditingId(null);
    qc.invalidateQueries({ queryKey: ["exam_study_plans", missionId] });
  }

  async function adicionarDia() {
    const data = prompt("Data (YYYY-MM-DD):", hoje);
    if (!data) return;
    const titulo = prompt("O que estudar?", `Estudar ${subject}`);
    if (!titulo) return;
    const { error } = await supabase.from("exam_study_plans").insert({
      mission_id: missionId,
      scheduled_date: data,
      title: titulo,
      description: null,
      completed: false,
    });
    if (error) {
      toast.error("Erro");
      return;
    }
    qc.invalidateQueries({ queryKey: ["exam_study_plans", missionId] });
  }

  if (isLoading) {
    return <p className="text-xs text-muted-foreground italic">Carregando plano...</p>;
  }

  if (plano.length === 0) {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 space-y-2">
        <p className="text-xs text-indigo-900">
          {diasRestantes.length > 0
            ? `Faltam ${diasRestantes.length} dia(s) até a prova. Gere um plano diário.`
            : "Data da prova já passou."}
        </p>
        {diasRestantes.length > 0 && (
          <button
            onClick={gerarPlano}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1"
          >
            <Sparkles className="h-3 w-3" />
            Gerar plano de estudo
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-black uppercase tracking-wider text-indigo-700">
          Plano de estudo ({plano.filter((p) => p.completed).length}/{plano.length})
        </p>
        <div className="flex gap-1">
          <button
            onClick={adicionarDia}
            className="text-[10px] text-indigo-700 hover:bg-indigo-100 px-2 py-0.5 rounded flex items-center gap-1"
          >
            <Plus className="h-3 w-3" /> Dia
          </button>
          <button
            onClick={gerarPlano}
            className="text-[10px] text-indigo-700 hover:bg-indigo-100 px-2 py-0.5 rounded flex items-center gap-1"
          >
            <Sparkles className="h-3 w-3" /> Refazer
          </button>
        </div>
      </div>
      {plano.map((p) => {
        const isHoje = p.scheduled_date === hoje;
        const isEditing = editingId === p.id;
        return (
          <div
            key={p.id}
            className={[
              "bg-white border rounded-lg px-2 py-1.5 flex items-start gap-2",
              isHoje ? "border-indigo-400 ring-1 ring-indigo-200" : "border-gray-200",
              p.completed ? "opacity-60" : "",
            ].join(" ")}
          >
            <button onClick={() => toggleCompleto(p)} className="mt-0.5 shrink-0">
              {p.completed ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              ) : (
                <Circle className="h-4 w-4 text-gray-400" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-indigo-700 font-bold">
                {new Date(p.scheduled_date + "T00:00:00").toLocaleDateString("pt-BR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                })}
                {isHoje && " • HOJE"}
              </p>
              {isEditing ? (
                <div className="space-y-1 mt-1">
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full text-xs border border-indigo-200 rounded px-2 py-1"
                  />
                  <textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    rows={2}
                    placeholder="Detalhes (opcional)"
                    className="w-full text-xs border border-indigo-200 rounded px-2 py-1"
                  />
                  <div className="flex gap-1">
                    <button
                      onClick={() => salvarEdicao(p.id)}
                      className="text-[10px] bg-indigo-600 text-white px-2 py-1 rounded font-bold"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-[10px] bg-gray-200 px-2 py-1 rounded"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p
                    className={[
                      "text-xs font-semibold",
                      p.completed ? "line-through text-muted-foreground" : "text-foreground",
                    ].join(" ")}
                  >
                    {p.title}
                  </p>
                  {p.description && (
                    <p className="text-[11px] text-muted-foreground">{p.description}</p>
                  )}
                </>
              )}
            </div>
            {!isEditing && (
              <div className="flex gap-0.5 shrink-0">
                <button
                  onClick={() => {
                    setEditingId(p.id);
                    setEditTitle(p.title);
                    setEditDesc(p.description || "");
                  }}
                  className="p-0.5 text-muted-foreground hover:text-indigo-700"
                  aria-label="Editar"
                >
                  <Pencil className="h-3 w-3" />
                </button>
                <button
                  onClick={() => remover(p.id)}
                  className="p-0.5 text-muted-foreground hover:text-rose-600"
                  aria-label="Remover"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
