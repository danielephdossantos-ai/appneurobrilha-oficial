import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ClipboardList, Loader2, Send, Trash2 } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
export const Route = createFileRoute("/area-professor/tarefas")({ component: TeacherHomework });
type Student = { link_id: string; child_name: string; school_year: string | null };
type Task = {
  id: string;
  child_id: string;
  title: string;
  subject: string;
  instructions: string;
  due_date: string;
  status: string;
  source_route: string | null;
  teacher_student_link_id: string;
};
const labels: Record<string, string> = {
  assigned: "Enviada",
  started: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada",
};
function TeacherHomework() {
  const db = supabase as any;
  const [students, setStudents] = useState<Student[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [linkId, setLinkId] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [instructions, setInstructions] = useState("");
  const [due, setDue] = useState(new Date().toISOString().slice(0, 10));
  const [route, setRoute] = useState("");
  const [busy, setBusy] = useState(false);
  async function load() {
    const [{ data: s }, { data: t }] = await Promise.all([
      db.rpc("teacher_list_students"),
      db.rpc("teacher_list_homework_assignments"),
    ]);
    setStudents(s ?? []);
    setTasks(t ?? []);
  }
  useEffect(() => {
    void load();
  }, []);
  async function send() {
    setBusy(true);
    const { error } = await db.rpc("teacher_create_homework_assignment", {
      selected_link_id: linkId,
      assignment_title: title,
      assignment_subject: subject,
      assignment_instructions: instructions,
      assignment_due_date: due,
      assignment_source_type: route ? "escola_brilha" : "teacher_text",
      assignment_source_route: route || null,
      selected_inclusive_lesson_id: null,
    });
    setBusy(false);
    if (error) return toast.error("Confira os dados, o prazo e o vínculo do aluno.");
    toast.success("Tarefa enviada ao aluno.");
    setTitle("");
    setInstructions("");
    setRoute("");
    await load();
  }
  async function cancel(id: string) {
    const { error } = await db.rpc("teacher_cancel_homework_assignment", {
      selected_assignment_id: id,
    });
    if (error) return toast.error("Esta tarefa não pode ser cancelada.");
    await load();
  }
  const studentName = (id: string) =>
    students.find((s) => s.link_id === id)?.child_name ?? "Aluno conectado";
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
        <header className="rounded-3xl bg-gradient-to-r from-sky-700 to-indigo-700 p-6 text-white">
          <ClipboardList />
          <h1 className="mt-2 text-3xl font-black">Tarefa de Casa Inteligente</h1>
          <p className="mt-2">
            Envie instruções ou uma atividade interna do NeuroBrilha e acompanhe apenas o andamento
            desta tarefa.
          </p>
        </header>
        <section className="grid gap-4 rounded-2xl border bg-white p-5 md:grid-cols-2">
          <label className="md:col-span-2">
            <b>Aluno autorizado</b>
            <select
              value={linkId}
              onChange={(e) => setLinkId(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            >
              <option value="">Selecione</option>
              {students.map((s) => (
                <option key={s.link_id} value={s.link_id}>
                  {s.child_name} · {s.school_year ?? "ano não informado"}
                </option>
              ))}
            </select>
          </label>
          <label>
            <b>Título</b>
            <input
              value={title}
              maxLength={120}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            />
          </label>
          <label>
            <b>Disciplina</b>
            <input
              value={subject}
              maxLength={60}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            />
          </label>
          <label>
            <b>Prazo</b>
            <input
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            />
          </label>
          <label>
            <b>Link interno opcional</b>
            <input
              value={route}
              maxLength={300}
              onChange={(e) => setRoute(e.target.value)}
              placeholder="/escola-brilha/..."
              className="mt-1 w-full rounded-xl border p-3"
            />
            <small className="text-muted-foreground">Somente páginas internas do aplicativo.</small>
          </label>
          <label className="md:col-span-2">
            <b>Instruções</b>
            <textarea
              value={instructions}
              maxLength={1000}
              rows={4}
              onChange={(e) => setInstructions(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            />
          </label>
          <button
            onClick={send}
            disabled={
              busy ||
              !linkId ||
              title.trim().length < 3 ||
              subject.trim().length < 2 ||
              instructions.trim().length < 5
            }
            className="md:col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-700 font-black text-white disabled:opacity-50"
          >
            {busy ? <Loader2 className="animate-spin" /> : <Send />}Enviar tarefa
          </button>
        </section>
        <section className="rounded-2xl border bg-white p-5">
          <h2 className="text-xl font-black">Tarefas enviadas</h2>
          <div className="mt-4 space-y-3">
            {tasks.length === 0 ? (
              <p className="text-muted-foreground">Nenhuma tarefa enviada.</p>
            ) : (
              tasks.map((t) => (
                <article key={t.id} className="rounded-xl border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{t.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {studentName(t.teacher_student_link_id)} · {t.subject} · prazo{" "}
                        {new Date(t.due_date + "T12:00:00").toLocaleDateString("pt-BR")}
                      </p>
                      <p className="mt-2">{t.instructions}</p>
                      <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                        {labels[t.status] ?? t.status}
                      </span>
                    </div>
                    {!["completed", "cancelled"].includes(t.status) && (
                      <button
                        aria-label="Cancelar tarefa"
                        onClick={() => cancel(t.id)}
                        className="min-h-11 rounded-xl border px-3 text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
        <p className="rounded-xl bg-slate-100 p-4 text-sm text-muted-foreground">
          O professor não acessa fotos, conversas nem tarefas particulares cadastradas pela família.
        </p>
      </main>
    </Shell>
  );
}
