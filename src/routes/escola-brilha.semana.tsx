import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, CalendarDays, Sparkles, Clock, CheckCircle2, Loader2, User, PlayCircle } from "lucide-react";
import { useAppState } from "@/core/store";
import { gerarAulasSemana, listarAulasSemana } from "@/lib/aulas-semana";
import { getSegundaDaSemana } from "@/modules/escola-brilha/engine/weekly-planner";
import { friendlyLessonTitle } from "@/modules/escola-brilha/utils/bnccDisplayText";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/escola-brilha/semana")({
  component: AulasSemanaPage,
});

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex"];

function AulasSemanaPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { activeChild, isLoading: loadingChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const semanaInicio = getSegundaDaSemana();
  const [horarioEdit, setHorarioEdit] = useState<Record<string, string>>({});

  const { data: aulas, isLoading } = useQuery({
    queryKey: ["aulas-semana", childId, semanaInicio.toISOString()],
    queryFn: () => listarAulasSemana({ childId: childId!, semanaInicio }),
    enabled: !!childId,
  });

  const gerar = useMutation({
    mutationFn: () => gerarAulasSemana({ childId: childId!, semanaInicio }),
    onSuccess: (res) => {
      toast.success(`${res.criadas} aulas criadas para ${activeChild?.nome} (perfil ${res.perfil})`);
      qc.invalidateQueries({ queryKey: ["aulas-semana", childId] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const salvarHorario = async (id: string, horario: string) => {
    const { error } = await supabase
      .from("aulas_semana")
      .update({ agenda_horario: horario })
      .eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Horário atualizado");
    qc.invalidateQueries({ queryKey: ["aulas-semana", childId] });
  };

  const abrirAula = async (codigoBncc: string | null) => {
    if (!codigoBncc) return toast.error("Esta aula ainda não está disponível");
    const { data, error } = await supabase
      .from("aulas_bncc")
      .select("id")
      .eq("codigo_bncc", codigoBncc)
      .eq("ativo", true)
      .limit(1)
      .maybeSingle();
    if (error) return toast.error(error.message);
    if (!data?.id) return toast.error("Esta aula ainda não está disponível");
    navigate({ to: "/escola-brilha/db/$aulaId", params: { aulaId: data.id } });
  };

  if (loadingChild) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!childId || !activeChild) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center gap-4 text-center">
        <User className="w-10 h-10 text-amber-300" />
        <p className="text-white font-bold">Cadastre ou selecione um aluno para ver as aulas.</p>
        <Link to="/perfil-aluno" className="rounded-xl bg-amber-500 px-4 py-2 font-black text-white">
          Ir para perfil
        </Link>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-violet-950 pb-12">
      <div className="px-5 pt-8 pb-6 max-w-2xl mx-auto">
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
            <CalendarDays className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Aulas da Semana</h1>
            <p className="text-white/60 text-xs font-semibold">Adaptadas ao perfil neurodivergente</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2">
          <User className="w-4 h-4 text-amber-300" />
          <p className="text-white text-xs font-bold">
            {activeChild.nome}
            <span className="text-white/60 font-semibold">
              {activeChild.idade ? ` • ${activeChild.idade} anos` : ""}
              {activeChild.serie ? ` • ${activeChild.serie}` : ""}
            </span>
          </p>
        </div>

        <button
          onClick={() => gerar.mutate()}
          disabled={gerar.isPending}
          className="mt-4 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
        >
          {gerar.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {aulas && aulas.length > 0 ? "Gerar novamente" : "Gerar aulas da semana"}
        </button>

        <div className="mt-6 space-y-3">
          {isLoading && <p className="text-white/60 text-center">Carregando...</p>}
          {!isLoading && (!aulas || aulas.length === 0) && (
            <p className="text-white/60 text-center py-8">
              Nenhuma aula para esta semana. Toque em "Gerar aulas da semana".
            </p>
          )}
          {aulas?.map((aula, i) => {
            const a = aula as {
              id: string; data: string; titulo: string; materia: string | null;
              habilidade_bncc: string | null; agenda_horario: string | null;
              concluida: boolean; perfil_neuro: string | null;
            };
            return (
              <div
                key={a.id}
                className="rounded-2xl border border-white/15 bg-white/5 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex flex-col items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-black">{DIAS[i] || ""}</span>
                    <span className="text-white text-sm font-black leading-none">
                      {new Date(a.data + "T00:00:00").getDate()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm truncate">
                      {friendlyLessonTitle({ title: a.titulo, subject: a.materia })}
                    </p>
                    <p className="text-white/50 text-[11px] font-semibold">
                      {a.materia}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-3.5 h-3.5 text-white/60" />
                      <input
                        type="time"
                        defaultValue={a.agenda_horario || "09:00"}
                        onChange={(e) => setHorarioEdit({ ...horarioEdit, [a.id]: e.target.value })}
                        onBlur={(e) => {
                          if (e.target.value !== a.agenda_horario) {
                            salvarHorario(a.id, e.target.value);
                          }
                        }}
                        className="bg-white/10 text-white text-xs px-2 py-1 rounded-md border border-white/20"
                      />
                      {a.concluida && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <button
                      type="button"
                      onClick={() => abrirAula(a.habilidade_bncc)}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-amber-400/20 px-3 py-2 text-[11px] font-black text-amber-100 transition hover:bg-amber-400/30"
                    >
                      <PlayCircle className="w-3.5 h-3.5" /> Abrir aula
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {aulas && aulas.length > 0 && (
          <p className="text-white/40 text-[11px] text-center mt-6 font-semibold">
            Perfil aplicado: {(aulas[0] as { perfil_neuro: string | null }).perfil_neuro}
          </p>
        )}
      </div>
    </div>
  );
}
