import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, Trash2, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/agenda")({
  component: Agenda,
});

type AgendaItem = {
  id: string;
  child_id: string;
  topic: string;
  description: string | null;
  exam_date: string | null;
  time_of_day: string | null;
  category: string | null;
  type: string | null;
  completed: boolean | null;
};

const cores: Record<string, string> = {
  escola: "bg-primary/15",
  terapia: "bg-petal/30",
  medico: "bg-coral/25",
  remedio: "bg-warning/30",
  outro: "bg-sun/30",
};

function Agenda() {
  const { activeChild } = useAppState();
  const qc = useQueryClient();
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("09:00");
  const [category, setCategory] = useState("escola");

  const { data: itens = [], isLoading } = useQuery({
    queryKey: ["study_agenda", activeChild?.id],
    enabled: !!activeChild?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("study_agenda")
        .select("*")
        .eq("child_id", activeChild!.id)
        .order("exam_date", { ascending: true });
      if (error) throw error;
      return (data ?? []) as AgendaItem[];
    },
  });

  const addMut = useMutation({
    mutationFn: async () => {
      if (!activeChild) throw new Error("Selecione uma criança");
      if (!topic.trim()) throw new Error("Dê um título ao compromisso");
      const { error } = await supabase.from("study_agenda").insert({
        child_id: activeChild.id,
        topic: topic.trim(),
        description: description.trim() || null,
        exam_date: date,
        time_of_day: time,
        category,
        type: category,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setTopic("");
      setDescription("");
      qc.invalidateQueries({ queryKey: ["study_agenda", activeChild?.id] });
      toast.success("Compromisso criado!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const toggleMut = useMutation({
    mutationFn: async (item: AgendaItem) => {
      const { error } = await supabase
        .from("study_agenda")
        .update({ completed: !item.completed })
        .eq("id", item.id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["study_agenda", activeChild?.id] }),
  });

  const delMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("study_agenda").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["study_agenda", activeChild?.id] });
      toast.success("Removido");
    },
  });

  // Group by date
  const grupos = itens.reduce<Record<string, AgendaItem[]>>((acc, i) => {
    const key = i.exam_date ?? "Sem data";
    (acc[key] = acc[key] || []).push(i);
    return acc;
  }, {});

  return (
    <Shell>
      <PageHeader emoji="📅" title="Agenda" subtitle="Terapias, consultas, remédios e tarefas" />

      {!activeChild ? (
        <Card>Selecione uma criança no Painel dos Pais para usar a agenda.</Card>
      ) : (
        <>
          <Card className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Terapia com Lia"
                className="rounded-xl border-2 border-primary/30 px-3 py-2 font-bold md:col-span-2"
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Observações (opcional)"
                className="rounded-xl border-2 border-primary/30 px-3 py-2 md:col-span-2"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl border-2 border-primary/30 px-3 py-2 font-mono"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-xl border-2 border-primary/30 px-3 py-2 font-mono"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border-2 border-primary/30 px-3 py-2 font-bold"
              >
                <option value="escola">Escola</option>
                <option value="terapia">Terapia</option>
                <option value="medico">Médico</option>
                <option value="remedio">Remédio</option>
                <option value="outro">Outro</option>
              </select>
              <button
                onClick={() => addMut.mutate()}
                disabled={addMut.isPending}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 font-extrabold flex items-center justify-center gap-1.5"
              >
                <Plus className="h-4 w-4" /> Novo compromisso
              </button>
            </div>
          </Card>

          {isLoading ? (
            <Card>Carregando…</Card>
          ) : Object.keys(grupos).length === 0 ? (
            <Card>Nenhum compromisso ainda. Crie o primeiro acima!</Card>
          ) : (
            <div className="space-y-6">
              {Object.entries(grupos).map(([dia, lista]) => (
                <section key={dia}>
                  <h2 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
                    {dia}
                  </h2>
                  <div className="space-y-2">
                    {lista.map((i) => (
                      <Card
                        key={i.id}
                        className={`${cores[i.category ?? "outro"] ?? "bg-muted"} border-0 flex items-center gap-4 ${i.completed ? "opacity-60 line-through" : ""}`}
                      >
                        <div className="font-mono font-extrabold text-lg w-16">{i.time_of_day ?? "--:--"}</div>
                        <div className="flex-1">
                          <div className="font-bold">{i.topic}</div>
                          {i.description && <div className="text-xs text-muted-foreground">{i.description}</div>}
                        </div>
                        <Pill>{i.category ?? i.type ?? "evento"}</Pill>
                        <button
                          onClick={() => toggleMut.mutate(i)}
                          className="rounded-full p-2 bg-white/70 hover:bg-white"
                          title="Concluir"
                        >
                          <Check className="h-5 w-5 text-primary" />
                        </button>
                        <button
                          onClick={() => delMut.mutate(i.id)}
                          className="rounded-full p-2 bg-white/70 hover:bg-coral/50"
                          title="Excluir"
                        >
                          <Trash2 className="h-5 w-5 text-coral" />
                        </button>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </Shell>
  );
}
