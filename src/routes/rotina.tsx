import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar, Plus, Trash2, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/rotina")({
  component: Rotina,
});

type RotinaItem = {
  id: string;
  child_id: string;
  title: string | null;
  time_of_day: string | null;
  category: string | null;
  routine_code: string;
  completed_at: string | null;
};

const cores: Record<string, string> = {
  casa: "bg-sun/30",
  estudo: "bg-primary/15",
  terapia: "bg-petal/30",
  saude: "bg-coral/25",
};

function Rotina() {
  const { activeChild } = useAppState();
  const qc = useQueryClient();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("08:00");
  const [category, setCategory] = useState("casa");

  const { data: itens = [], isLoading } = useQuery({
    queryKey: ["daily_routines", activeChild?.id],
    enabled: !!activeChild?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("daily_routines")
        .select("*")
        .eq("child_id", activeChild!.id)
        .order("time_of_day", { ascending: true });
      if (error) throw error;
      return (data ?? []) as RotinaItem[];
    },
  });

  const addMut = useMutation({
    mutationFn: async () => {
      if (!activeChild) throw new Error("Selecione uma criança");
      if (!title.trim()) throw new Error("Dê um nome para a tarefa");
      const { error } = await supabase.from("daily_routines").insert({
        child_id: activeChild.id,
        title: title.trim(),
        time_of_day: time,
        category,
        routine_code: `custom-${Date.now()}`,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setTitle("");
      qc.invalidateQueries({ queryKey: ["daily_routines", activeChild?.id] });
      toast.success("Rotina criada!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const toggleMut = useMutation({
    mutationFn: async (item: RotinaItem) => {
      const { error } = await supabase
        .from("daily_routines")
        .update({ completed_at: item.completed_at ? null : new Date().toISOString() })
        .eq("id", item.id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["daily_routines", activeChild?.id] }),
  });

  const delMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("daily_routines").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["daily_routines", activeChild?.id] });
      toast.success("Removida");
    },
  });

  return (
    <Shell>
      <PageHeader icon={Calendar} title="Rotina de Hoje" subtitle="Crie e organize as tarefas da criança" />

      {!activeChild ? (
        <Card>Selecione uma criança no Painel dos Pais para criar a rotina.</Card>
      ) : (
        <>
          <Card className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_120px_140px_auto] gap-2 items-center">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Tomar café com a família"
                className="rounded-xl border-2 border-primary/30 px-3 py-2 font-bold"
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
                <option value="casa">Casa</option>
                <option value="estudo">Estudo</option>
                <option value="terapia">Terapia</option>
                <option value="saude">Saúde</option>
              </select>
              <button
                onClick={() => addMut.mutate()}
                disabled={addMut.isPending}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 font-extrabold flex items-center gap-1.5"
              >
                <Plus className="h-4 w-4" /> Adicionar
              </button>
            </div>
          </Card>

          {isLoading ? (
            <Card>Carregando…</Card>
          ) : itens.length === 0 ? (
            <Card>Nenhuma rotina cadastrada ainda. Crie a primeira acima!</Card>
          ) : (
            <div className="space-y-2">
              {itens.map((i) => (
                <div
                  key={i.id}
                  className={`rounded-2xl p-4 flex items-center gap-4 shadow-soft ${cores[i.category ?? "casa"] ?? "bg-muted"} ${i.completed_at ? "opacity-60 line-through" : ""}`}
                >
                  <div className="font-mono font-extrabold text-lg w-16">{i.time_of_day ?? "--:--"}</div>
                  <div className="flex-1 font-bold">{i.title ?? i.routine_code}</div>
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
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </Shell>
  );
}
