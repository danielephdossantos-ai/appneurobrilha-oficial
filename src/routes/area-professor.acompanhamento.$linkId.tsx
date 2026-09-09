import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, BarChart3, BookOpenCheck, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { supabase } from "@/database/supabase/client";
export const Route = createFileRoute("/area-professor/acompanhamento/$linkId")({
  component: Tracking,
});
type Row = {
  subject: string;
  observed_skills: number;
  completed_skills: number;
  in_progress_skills: number;
  last_activity_at: string | null;
};
type HW = {
  assigned_count: number;
  started_count: number;
  completed_count: number;
  overdue_count: number;
};
function Tracking() {
  const { linkId } = Route.useParams();
  const [rows, setRows] = useState<Row[]>([]);
  const [hw, setHw] = useState<HW | null>(null);
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  useEffect(() => {
    void (async () => {
      const db = supabase as any;
      const [{ data: r, error: e }, { data: h, error: he }] = await Promise.all([
        db.rpc("teacher_get_student_learning_summary", { selected_link_id: linkId }),
        db.rpc("teacher_get_student_homework_summary", { selected_link_id: linkId }),
      ]);
      setDenied(Boolean(e || he));
      setRows(r ?? []);
      setHw(h?.[0] ?? null);
      setLoading(false);
    })();
  }, [linkId]);
  if (loading)
    return (
      <Shell>
        <div className="grid min-h-[50vh] place-items-center">
          <Loader2 className="animate-spin" />
        </div>
      </Shell>
    );
  return (
    <Shell>
      <main className="mx-auto max-w-5xl space-y-5 p-4 md:p-6">
        <Link
          to="/area-professor"
          className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Painel docente
        </Link>
        <header className="rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 p-6 text-white">
          <BarChart3 />
          <h1 className="mt-2 text-3xl font-black">Acompanhamento pedagógico</h1>
           <p className="mt-2">{"Resumo das habilidades realmente utilizadas no app. Não é nota, diagnóstico nem comparação entre alunos."}</p>
        </header>
        {denied ? (
          <p className="rounded-xl bg-amber-50 p-5 font-bold text-amber-900">
            Vínculo indisponível, vencido ou sem autorização.
          </p>
        ) : (
          <>
            <section className="grid gap-3 sm:grid-cols-4">
              <Card icon={<BookOpenCheck />} label="Enviadas" value={hw?.assigned_count ?? 0} />
              <Card icon={<Clock />} label="Em andamento" value={hw?.started_count ?? 0} />
              <Card icon={<CheckCircle2 />} label="Concluídas" value={hw?.completed_count ?? 0} />
              <Card icon={<Clock />} label="Fora do prazo" value={hw?.overdue_count ?? 0} />
            </section>
            <section className="rounded-2xl border bg-white p-5">
              <h2 className="text-xl font-black">Habilidades observadas por disciplina</h2>
               <p className="mt-1 text-sm text-muted-foreground">{"“Observada” significa que existe registro de uso; não significa domínio curricular completo."}</p>
              <div className="mt-4 space-y-3">
                {rows.length === 0 ? (
                  <p className="rounded-xl border border-dashed p-6 text-center text-muted-foreground">
                    Ainda não há atividade escolar registrada.
                  </p>
                ) : (
                  rows.map((r) => (
                    <article key={r.subject} className="rounded-xl border p-4">
                      <div className="flex flex-wrap justify-between gap-3">
                        <h3 className="font-black">{r.subject}</h3>
                        <span className="text-xs text-muted-foreground">
                          {r.last_activity_at
                            ? `Último registro: ${new Date(r.last_activity_at).toLocaleDateString("pt-BR")}`
                            : "Sem data"}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                        <Metric label="Observadas" value={r.observed_skills} />
                        <Metric label="Concluídas" value={r.completed_skills} />
                        <Metric label="Em andamento" value={r.in_progress_skills} />
                      </div>
                    </article>
                  ))
                )}
              </div>
            </section>
            <p className="rounded-xl bg-slate-100 p-4 text-sm text-muted-foreground">
              Use estes dados para planejar apoio e conversar com a família. A decisão pedagógica continua sendo humana e contextualizada.
            </p>
          </>
        )}
      </main>
    </Shell>
  );
}
function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      {icon}
      <p className="mt-2 text-2xl font-black">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <b className="text-xl">{value}</b>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
