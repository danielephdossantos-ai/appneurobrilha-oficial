import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { Card, Pill } from "@/components/Layout";
import {
  Target,
  Plus,
  Trash2,
  Calendar,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import { format, differenceInDays, addDays, isBefore, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";

interface MissaoProvaManagerProps {
  childId: string;
}

const missionQueryKeys = (childId: string) => [
  ["exam_missions", childId] as const,
  ["exam_missions_child", childId] as const,
];

export function MissaoProvaManager({ childId }: MissaoProvaManagerProps) {
  const queryClient = useQueryClient();
  const [isAdding, setIsAdding] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const { data: missions = [], isLoading } = useQuery({
    queryKey: ["exam_missions", childId],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("exam_missions")
        .select(
          `
          *,
          contents:exam_mission_contents(*),
          study_plan:exam_study_plans(*)
        `,
        )
        .eq("child_id", childId)
        .order("exam_date", { ascending: true });

      if (error) throw error;
      return data as any[];
    },
  });

  const createMissionMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await (supabase as any)
        .from("exam_missions")
        .insert([
          {
            child_id: childId,
            subject: newSubject,
            exam_date: newDate,
            notes: newNotes,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      const { error: contentError } = await (supabase as any).from("exam_mission_contents").insert([
        {
          mission_id: data.id,
          content_title: newSubject,
        },
      ]);

      if (contentError) throw contentError;
      return data;
    },
    onSuccess: () => {
      missionQueryKeys(childId).forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      setIsAdding(false);
      setNewSubject("");
      setNewDate("");
      setNewNotes("");
      toast.success("Missão Prova criada e conectada ao plano de estudos.");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Não consegui salvar a Missão Prova.");
    },
  });

  const deleteMissionMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await (supabase as any).from("exam_missions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      missionQueryKeys(childId).forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      toast.info("Missão removida.");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Não consegui remover a Missão Prova.");
    },
  });

  const addContentMutation = useMutation({
    mutationFn: async ({ missionId, title }: { missionId: string; title: string }) => {
      const { error } = await (supabase as any).from("exam_mission_contents").insert([
        {
          mission_id: missionId,
          content_title: title,
        },
      ]);
      if (error) throw error;
    },
    onSuccess: () => {
      missionQueryKeys(childId).forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      toast.success("Conteúdo adicionado à Missão Prova.");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Não consegui adicionar o conteúdo.");
    },
  });

  const generatePlanMutation = useMutation({
    mutationFn: async (mission: any) => {
      const daysUntilExam = differenceInDays(new Date(mission.exam_date + "T12:00:00"), new Date());
      if (daysUntilExam <= 0) {
        throw new Error("A data da prova precisa ser no futuro.");
      }

      const contents = mission.contents;
      if (contents.length === 0) {
        throw new Error("Adicione conteúdos antes de gerar o plano.");
      }

      // Simular identificação automática de habilidades BNCC
      const contentsWithBncc = contents.map((c: any) => ({
        ...c,
        bncc_code: mission.subject === "Matemática" ? "EF01MA01" : "EF01LP01", // Mock BNCC mapping
      }));

      // Limpar plano anterior
      await (supabase as any).from("exam_study_plans").delete().eq("mission_id", mission.id);

      const studySessions = [];
      const contentsPerDay = Math.ceil(contentsWithBncc.length / Math.min(daysUntilExam, 7)); // Distribui em até 7 dias

      let contentIndex = 0;
      for (let i = 0; i < Math.min(daysUntilExam, 7); i++) {
        const sessionDate = addDays(startOfDay(new Date()), i + 1);
        if (isBefore(sessionDate, new Date(mission.exam_date + "T12:00:00"))) {
          const sessionContents = contentsWithBncc.slice(
            contentIndex,
            contentIndex + contentsPerDay,
          );
          if (sessionContents.length > 0) {
            studySessions.push({
              mission_id: mission.id,
              scheduled_date: format(sessionDate, "yyyy-MM-dd"),
              title: `Estudo: ${mission.subject}`,
              description: `Revisar: ${sessionContents.map((c: any) => c.content_title).join(", ")}.`,
            });
          }
          contentIndex += contentsPerDay;
        }
      }

      const { error } = await (supabase as any).from("exam_study_plans").insert(studySessions);
      if (error) throw error;
    },
    onSuccess: () => {
      missionQueryKeys(childId).forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      toast.success("Plano de estudos gerado com sucesso pelo Sistema Infinito!");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return (
    <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-50/50 to-transparent">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" />
            Missão Prova Brilha
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Transforme provas em missões de aprendizado.
          </p>
        </div>
        <button
          aria-label={isAdding ? "Fechar cadastro de prova" : "Cadastrar prova"}
          onClick={() => setIsAdding(!isAdding)}
          className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all"
        >
          <Plus className={`h-5 w-5 transition-transform ${isAdding ? "rotate-45" : ""}`} />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {isAdding && (
          <div className="bg-indigo-50/50 p-5 rounded-2xl border-2 border-dashed border-indigo-200 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-indigo-700 uppercase ml-1">Matéria</label>
                <input
                  type="text"
                  placeholder="Ex: Matemática, Ciências..."
                  className="w-full px-4 py-2.5 rounded-xl border border-indigo-100 focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-indigo-700 uppercase ml-1">
                  Data da Prova
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 rounded-xl border border-indigo-100 focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-indigo-700 uppercase ml-1">
                Observações (Opcional)
              </label>
              <textarea
                placeholder="Ex: Levar régua e calculadora..."
                className="w-full px-4 py-2.5 rounded-xl border border-indigo-100 focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white min-h-[80px]"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={!newSubject || !newDate || createMissionMutation.isPending}
                onClick={() => createMissionMutation.mutate()}
                className="bg-indigo-600 text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 shadow-lg shadow-indigo-100"
              >
                {createMissionMutation.isPending ? "Criando..." : "Criar Missão"}
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {missions.length === 0 && !isAdding && (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Target className="h-8 w-8 text-slate-300" />
              </div>
              <p className="text-slate-500 font-medium">Nenhuma missão de prova ativa.</p>
              <button
                onClick={() => setIsAdding(true)}
                className="mt-4 text-indigo-600 font-bold text-sm hover:underline"
              >
                Começar primeira missão
              </button>
            </div>
          )}

          {missions.map((mission: any) => {
            const daysLeft = differenceInDays(
              new Date(mission.exam_date + "T12:00:00"),
              startOfDay(new Date()),
            );
            const isCompleted =
              mission.contents &&
              mission.contents.length > 0 &&
              mission.contents.every((c: any) => c.completed);

            return (
              <div
                key={mission.id}
                className="bg-white border border-slate-200 rounded-3xl p-5 hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                        daysLeft < 3 ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {mission.subject === "Matemática"
                        ? "🧮"
                        : mission.subject === "Português"
                          ? "✍️"
                          : "🧪"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-slate-800 text-lg">{mission.subject}</h4>
                        <Pill
                          tone={daysLeft < 3 ? "danger" : "info"}
                          className="text-[10px] py-0.5"
                        >
                          {daysLeft < 0
                            ? "Encerrado"
                            : daysLeft === 0
                              ? "É HOJE!"
                              : `${daysLeft} dias restantes`}
                        </Pill>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {format(new Date(mission.exam_date + "T12:00:00"), "dd 'de' MMMM", {
                          locale: ptBR,
                        })}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMissionMutation.mutate(mission.id)}
                    className="h-8 w-8 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Conteúdos */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <BookOpen className="h-3 w-3" /> Conteúdos da Prova
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {mission.contents
                        ? mission.contents.filter((c: any) => c.completed).length
                        : 0}
                      /{mission.contents ? mission.contents.length : 0} Concluídos
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mission.contents?.map((content: any) => (
                      <div
                        key={content.id}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                          content.completed
                            ? "bg-green-50 border-green-100 text-green-700"
                            : "bg-slate-50 border-slate-100 text-slate-600"
                        }`}
                      >
                        {content.completed && <CheckCircle2 className="h-3 w-3" />}
                        {content.content_title}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const title = prompt("Digite o conteúdo (ex: Multiplicação):");
                        if (title) addContentMutation.mutate({ missionId: mission.id, title });
                      }}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-dashed border-indigo-200 text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-all"
                    >
                      <Plus className="h-3 w-3" /> Adicionar
                    </button>
                  </div>
                </div>

                {/* Study Plan Status */}
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {mission.study_plan?.length > 0 ? (
                      <div className="flex items-center gap-1.5 text-green-600 font-bold text-xs bg-green-50 px-3 py-1.5 rounded-full">
                        <Sparkles className="h-3.5 w-3.5" /> Plano Ativo pelo Sistema Infinito
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs bg-amber-50 px-3 py-1.5 rounded-full">
                        <AlertTriangle className="h-3.5 w-3.5" /> Aguardando Plano de Estudos
                      </div>
                    )}
                  </div>
                  <button
                    disabled={
                      !mission.contents ||
                      mission.contents.length === 0 ||
                      generatePlanMutation.isPending
                    }
                    onClick={() => generatePlanMutation.mutate(mission)}
                    className="flex items-center gap-1.5 text-indigo-600 font-black text-xs hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all uppercase tracking-wider"
                  >
                    {mission.study_plan?.length > 0 ? "Regerar Plano" : "Gerar Plano Automático"}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
