import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { Card, Pill } from "@/components/Layout";
import {
  Calendar,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  Calculator,
  Pencil,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNotifications } from "@/hooks/useNotifications";
import { OfflineEngine, ConflictEngine } from "@/engines/offline";
import { db } from "@/engines/offline/database";
import { useLiveQuery } from "dexie-react-hooks";

interface AgendaEstudosProps {
  childId: string;
}

export interface AgendaItem {
  id: string;
  topic: string;
  description: string;
  exam_date: string;
  type: "prova" | "trabalho" | "exercicio" | "estudo" | "aurora" | "outro";
  completed: boolean;
  child_id?: string;
  time_of_day?: string | null;
  category?: string | null;
}

export function AgendaEstudos({ childId }: AgendaEstudosProps) {
  const queryClient = useQueryClient();
  const [isAdding, setIsAdding] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newType, setNewType] = useState<AgendaItem["type"]>("prova");
  const { sendNotification } = useNotifications();

  // Dados locais (Offline-first)
  const localAgenda = useLiveQuery(
    () => db.records.where({ type: "study_agenda" }).toArray(),
    [childId],
  );

  const { data: agenda = [], isLoading } = useQuery({
    queryKey: ["study_agenda", childId],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("study_agenda")
          .select("*")
          .eq("child_id", childId)
          .order("exam_date", { ascending: true });

        if (error) throw error;

        // Sincronizar cache local com dados remotos
        for (const item of data || []) {
          await db.records.put({
            id: item.id,
            type: "study_agenda",
            data: item,
            updatedAt: Date.now(),
          });
        }

        return data as AgendaItem[];
      } catch (error) {
        console.warn("[AgendaEstudos] Servidor inacessível, usando cache local.");
        return (localAgenda || [])
          .map((r) => r.data)
          .filter((d) => d.child_id === childId) as AgendaItem[];
      }
    },
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      const newItem = {
        id: crypto.randomUUID(),
        child_id: childId,
        topic: newTopic,
        exam_date: newDate || new Date().toISOString().split("T")[0],
        type: newType,
        completed: false,
      };

      // Persistência Offline Imediata
      await OfflineEngine.queueAction("study_agenda_upsert", newItem);

      // Enviar notificação para a criança (se online)
      if (navigator.onLine) {
        sendNotification({
          child_id: childId,
          title: `Novo item na sua Agenda!`,
          message: `Mamãe adicionou um(a) ${newType} de ${newTopic}. Vamos nos preparar?`,
          type: "estudo",
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["study_agenda", childId] });
      setIsAdding(false);
      setNewTopic("");
      setNewDate("");
      toast.success("Estudo agendado com sucesso!");
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, completed }: { id: string; completed: boolean }) => {
      const item = agenda.find((i) => i.id === id);
      if (!item) return;

      const updatedItem = { ...item, completed };

      // Persistência Offline Imediata
      await OfflineEngine.queueAction("study_agenda_upsert", updatedItem);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["study_agenda", childId] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      // Nota: Para deleção offline, precisaríamos de um soft-delete ou um tipo de evento 'delete' na fila.
      // Simplificando: o sync-engine poderia tratar delete se enviarmos um flag.
      // Por agora, deletamos localmente e tentamos no remoto.
      await db.records.delete(id);

      const { error } = await supabase.from("study_agenda").delete().eq("id", id);
      if (error && navigator.onLine) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["study_agenda", childId] });
      toast.info("Item removido da agenda.");
    },
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "prova":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "trabalho":
        return <BookOpen className="h-4 w-4 text-purple-500" />;
      case "exercicio":
        return <Calculator className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-slate-500" />;
    }
  };

  return (
    <Card className="bg-white border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-indigo-600" />
            Agenda de Estudos (Mãe)
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Defina o que a criança precisa estudar esta semana.
          </p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition-colors"
        >
          <Plus className={`h-5 w-5 transition-transform ${isAdding ? "rotate-45" : ""}`} />
        </button>
      </div>

      <div className="p-6 space-y-4">
        {isAdding && (
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Ex: Prova de Português, Tabuada..."
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
              />
              <input
                type="date"
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                value={newType}
                onChange={(e) => setNewType(e.target.value as any)}
              >
                <option value="prova">Prova</option>
                <option value="trabalho">Trabalho</option>
                <option value="exercicio">Exercício</option>
                <option value="estudo">Estudo Regular</option>
              </select>
              <button
                disabled={!newTopic || addMutation.isPending}
                onClick={() => addMutation.mutate()}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 disabled:opacity-50"
              >
                {addMutation.isPending ? "Salvando..." : "Agendar"}
              </button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {agenda.length === 0 && !isAdding && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm">Nenhum estudo agendado para esta semana.</p>
            </div>
          )}

          {agenda.map((item) => (
            <div
              key={item.id}
              className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                item.completed
                  ? "bg-slate-50 border-slate-100 opacity-60"
                  : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleMutation.mutate({ id: item.id, completed: !item.completed })}
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  item.completed
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-slate-300 hover:border-indigo-400"
                }`}
              >
                {item.completed && <CheckCircle2 className="h-4 w-4" />}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 truncate">{item.topic}</span>
                  <Pill
                    tone={item.type === "prova" ? "danger" : "info"}
                    className="text-[10px] uppercase py-0 px-1.5 h-auto"
                  >
                    {item.type}
                  </Pill>
                </div>
                <div className="flex items-center gap-3 mt-0.5 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    {getIcon(item.type)}
                    <span>
                      {item.exam_date
                        ? format(new Date(item.exam_date + "T12:00:00"), "dd 'de' MMMM", {
                            locale: ptBR,
                          })
                        : "Sem data"}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteMutation.mutate(item.id)}
                className="opacity-0 group-hover:opacity-100 h-8 w-8 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
