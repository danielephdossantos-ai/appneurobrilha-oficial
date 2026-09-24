import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpenCheck, GraduationCap, Printer } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/area-professor/aula-inclusiva/$lessonId")({
  component: InclusiveLesson,
});
type Page = {
  title?: string;
  purpose?: string;
  sections?: Array<{ heading?: string; content?: string | string[] }>;
  instruction?: string;
  content?: string;
  activity?: string;
  support?: string;
};
type Answer = {
  question?: string;
  answer?: string;
  accepted_answers?: string[];
  criteria?: string | string[];
  teacher_note?: string;
};
type Lesson = {
  codigo_bncc: string;
  title: string;
  school_year: string;
  subject: string;
  learning_goal: string;
  teacher_pages: Page[];
  student_pages: Page[];
  answer_key: Answer[];
};
type PrintMode = "all" | "teacher" | "student";

const ROTULOS: Record<string, string> = {
  step: "Etapa", detail: "Detalhe", question: "Pergunta", answer: "Resposta", why: "Por quê",
  resolution: "Resolução", line: "", examples: "Exemplos", title: "", content: "",
  criteria: "Critérios", teacher_note: "Nota docente", accepted_answers: "Aceitar também",
};

function Valor({ v }: { v: unknown }) {
  if (v == null || v === "") return null;
  if (typeof v !== "object") return <p className="mt-2 whitespace-pre-wrap leading-relaxed">{String(v)}</p>;
  if (Array.isArray(v))
    return (
      <ul className="mt-2 list-disc space-y-2 pl-6">
        {v.map((x, i) => (
          <li key={i}>{typeof x === "object" && x !== null ? <Valor v={x} /> : String(x)}</li>
        ))}
      </ul>
    );
  return (
    <div className="mt-1 space-y-1">
      {Object.entries(v as Record<string, unknown>).map(([k, x]) => {
        const r = ROTULOS[k] ?? k;
        if (typeof x !== "object" || x === null)
          return <p key={k}>{r && <b>{r}: </b>}{String(x ?? "")}</p>;
        return <div key={k}>{r && <b>{r}:</b>}<Valor v={x} /></div>;
      })}
    </div>
  );
}

function InclusiveLesson() {
  const { lessonId } = Route.useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [printMode, setPrintMode] = useState<PrintMode>("all");
  useEffect(() => {
    void (async () => {
      const { data } = await (supabase as any).rpc("teacher_get_inclusive_lesson", {
        selected_id: lessonId,
      });
      setLesson(data?.[0] ?? null);
      setLoading(false);
    })();
  }, [lessonId]);
  useEffect(() => {
    const reset = () => setPrintMode("all");
    window.addEventListener("afterprint", reset);
    return () => window.removeEventListener("afterprint", reset);
  }, []);
  function print(mode: PrintMode) {
    setPrintMode(mode);
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  }
  if (loading)
    return (
      <Shell>
        <p className="p-8 text-center">Carregando material…</p>
      </Shell>
    );
  if (!lesson)
    return (
      <Shell>
        <p className="p-8 text-center">Material não encontrado ou ainda não aprovado.</p>
      </Shell>
    );
  const brand = (
    <footer className="mt-8 flex items-center justify-between border-t pt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
      <span>NeuroBrilha Kids · uso pedagógico</span>
      <span>{lesson.codigo_bncc}</span>
    </footer>
  );
  const renderPage = (page: Page, index: number, kind: "teacher" | "student") => (
    <article
      key={`${kind}-${index}`}
      data-print-section={kind}
      className="print:break-after-page min-h-[70vh] rounded-2xl border bg-white p-6 md:p-10 print:min-h-0 print:rounded-none print:border-0 print:p-0"
    >
      <p className="text-xs font-black uppercase tracking-wider text-indigo-600">
        {kind === "teacher" ? "Orientação ao professor" : "Atividade do estudante"} · Página{" "}
        {index + 1}
      </p>
      <h2 className="mt-3 text-2xl font-black">{page.title || lesson.title}</h2>
      {page.purpose && (
        <p className="mt-3 rounded-xl bg-indigo-50 p-4 font-semibold print:border print:bg-white">
          {String(page.purpose)}
        </p>
      )}
      {page.instruction && <p className="mt-5 text-lg font-bold">{String(page.instruction)}</p>}
      {page.content != null && <div className="mt-4 text-lg"><Valor v={page.content} /></div>}
      {page.activity != null && <div className="mt-6 rounded-xl border-2 p-5 text-lg"><Valor v={page.activity} /></div>}
      {page.support != null && (
        <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm print:border print:bg-white">
          <b>Apoio:</b> <Valor v={page.support} />
        </div>
      )}
      {page.sections?.map((s, i) => (
        <section key={i} className="mt-6">
          <h3 className="text-lg font-black">{s.heading}</h3>
          <Valor v={s.content} />
        </section>
      ))}
      {brand}
    </article>
  );
  const showTeacher=printMode!=="student";
  const showStudent = printMode !== "teacher";
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6 print:max-w-none print:p-0">
        <div className="print:hidden flex flex-wrap justify-between gap-3">
          <Link
            to="/area-professor/biblioteca-inclusiva"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Biblioteca
          </Link>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => print("teacher")}>
              <GraduationCap className="mr-2 h-4 w-4" />
              Professor
            </Button>
            <Button variant="outline" onClick={() => print("student")}>
              <BookOpenCheck className="mr-2 h-4 w-4" />
              Estudante
            </Button>
            <Button onClick={() => print("all")}>
              <Printer className="mr-2 h-4 w-4" />
              Material completo
            </Button>
          </div>
        </div>
        <header className="rounded-2xl bg-indigo-700 p-6 text-white print:rounded-none print:border print:border-slate-700 print:bg-white print:text-black">
          <p className="font-mono font-bold">
            {lesson.codigo_bncc} · {lesson.school_year} · {lesson.subject}
          </p>
          <h1 className="mt-2 text-3xl font-black">{lesson.title}</h1>
          <p className="mt-2">{lesson.learning_goal}</p>
        </header>
        {showTeacher && (
          <section data-print-bundle="teacher" className="space-y-5">
            {(lesson.teacher_pages ?? []).map((p, i) => renderPage(p, i, "teacher"))}
            {(lesson.answer_key ?? []).length > 0 && (
              <article
                data-print-section="answer-key"
                className="print:break-before-page rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 print:border-slate-700 print:bg-white"
              >
                <p className="text-xs font-black uppercase tracking-wider text-emerald-800">
                  Somente para o professor
                </p>
                <h2 className="mt-2 text-2xl font-black">Gabarito e critérios de observação</h2>
                <ol className="mt-5 space-y-5">
                  {(lesson.answer_key ?? []).map((item, i) => (
                    <li key={i} className="rounded-xl border bg-white p-4">
                      <b>
                        {i + 1}. {item.question || (item as any).title || "Item da atividade"}
                      </b>
                      {!item.question && <Valor v={Object.fromEntries(Object.entries(item).filter(([k]) => k !== "title"))} />}
                      {item.answer && (
                        <p className="mt-2">
                          <b>Resposta esperada:</b> {item.answer}
                        </p>
                      )}
                      {Array.isArray(item.accepted_answers) && item.accepted_answers.length ? (
                        <p className="mt-2">
                          <b>Aceitar também:</b> {item.accepted_answers.join("; ")}
                        </p>
                      ) : null}
                      {item.criteria && (
                        <div className="mt-2">
                          <b>Critérios:</b>{" "}
                          {Array.isArray(item.criteria) ? (
                            <ul className="list-disc pl-6">
                              {item.criteria.map((x, j) => (
                                <li key={j}>{x}</li>
                              ))}
                            </ul>
                          ) : (
                            <span> {String(item.criteria)}</span>
                          )}
                        </div>
                      )}
                      {item.teacher_note && (
                        <p className="mt-2 text-sm">
                          <b>Nota docente:</b> {item.teacher_note}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
                {brand}
              </article>
            )}
          </section>
        )}
        {showStudent && (
          <section data-print-bundle="student" className="space-y-5">
            {(lesson.student_pages ?? []).map((p, i) => renderPage(p, i, "student"))}
          </section>
        )}
        <p className="print:hidden rounded-xl bg-slate-100 p-4 text-sm text-muted-foreground">
          Imprima apenas o material do estudante quando for entregar em sala. O gabarito aparece
          somente nas opções “Professor” e “Material completo”.
        </p>
      </main>
    </Shell>
  );
}
