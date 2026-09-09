import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { supabase } from "@/database/supabase/client";
import {
  gerarSugestaoAssistentePedagogico,
  type PedagogicalSuggestion,
} from "@/lib/assistente-pedagogico-brilha.functions";
export const Route = createFileRoute("/area-professor/assistente-pedagogico")({
  component: Assistant,
});
type Student = { link_id: string; child_name: string; school_year: string | null };
function Assistant() {
  const [students, setStudents] = useState<Student[]>([]);
  const [linkId, setLinkId] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [ano, setAno] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [tipo, setTipo] = useState<"adaptacao_aula" | "atividade" | "avaliacao" | "rotina">(
    "adaptacao_aula",
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<PedagogicalSuggestion | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    void (async () => {
      const { data } = await (supabase as any).rpc("teacher_list_students");
      setStudents(data ?? []);
    })();
  }, []);
  function selectStudent(id: string) {
    setLinkId(id);
    const s = students.find((x) => x.link_id === id);
    if (s?.school_year) setAno(s.school_year);
  }
  async function generate() {
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const r = await gerarSugestaoAssistentePedagogico({
        data: { linkId, disciplina, ano, objetivo, tipo },
      });
      if (!r.ok) {
        setError(
          r.motivo === "CONSENT_REQUIRED"
            ? "A família ainda não autorizou o perfil pedagógico."
            : r.motivo === "PROFILE_REQUIRED"
              ? "Preencha o perfil pedagógico antes de pedir uma sugestão."
              : r.motivo === "DAILY_LIMIT"
                ? "O limite diário do assistente foi atingido."
                : "Não foi possível gerar agora.",
        );
        return;
      }
      setResult(r.sugestao);
      setRemaining(r.remaining);
    } catch {
      setError("Confira os campos e tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  const list = (title: string, items: string[]) => (
    <section className="rounded-2xl border bg-white p-5">
      <h2 className="font-black text-lg">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6">
        <Link
          to="/area-professor"
          className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Painel docente
        </Link>
        <header className="rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-600 p-6 text-white">
          <Sparkles />
          <h1 className="mt-2 text-3xl font-black">Assistente Pedagógico Brilha</h1>
          <p className="mt-2">
            Gera uma proposta anônima para revisão do professor. Não diagnostica, não decide nota e
            não substitui profissional.
          </p>
        </header>
        <section className="grid gap-4 rounded-2xl border bg-white p-5 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="font-bold">Aluno autorizado</span>
            <select
              value={linkId}
              onChange={(e) => selectStudent(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
            >
              <option value="">Selecione</option>
              {students.map((s) => (
                <option key={s.link_id} value={s.link_id}>
                  {s.child_name} · {s.school_year ?? "ano não informado"}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-muted-foreground">
              O nome serve apenas para sua escolha nesta tela e não é enviado à IA.
            </p>
          </label>
          <label>
            <span className="font-bold">Disciplina</span>
            <input
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
              maxLength={60}
              className="mt-1 w-full rounded-xl border p-3"
              placeholder="Ex.: Matemática"
            />
          </label>
          <label>
            <span className="font-bold">Ano</span>
            <input
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              maxLength={30}
              className="mt-1 w-full rounded-xl border p-3"
            />
          </label>
          <label>
            <span className="font-bold">Tipo</span>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as typeof tipo)}
              className="mt-1 w-full rounded-xl border p-3"
            >
              <option value="adaptacao_aula">Adaptar aula</option>
              <option value="atividade">Criar atividade</option>
              <option value="avaliacao">Adaptar avaliação</option>
              <option value="rotina">Organizar rotina</option>
            </select>
          </label>
          <label className="md:col-span-2">
            <span className="font-bold">Objetivo pedagógico</span>
            <textarea
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              maxLength={500}
              rows={4}
              className="mt-1 w-full rounded-xl border p-3"
              placeholder="Não escreva nome, diagnóstico ou informação familiar."
            />
            <span className="text-xs text-muted-foreground">{objetivo.length}/500</span>
          </label>
          <button
            onClick={generate}
            disabled={
              busy ||
              !linkId ||
              disciplina.trim().length < 2 ||
              !ano.trim() ||
              objetivo.trim().length < 5
            }
            className="md:col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 font-black text-white disabled:opacity-50"
          >
            {busy ? <Loader2 className="animate-spin" /> : <Sparkles />}
            {busy ? "Preparando..." : "Gerar sugestão"}
          </button>
          {error && (
            <p
              role="alert"
              className="md:col-span-2 rounded-xl bg-amber-50 p-4 font-bold text-amber-900"
            >
              {error}
            </p>
          )}
        </section>
        {result && (
          <div className="space-y-4">
            <header className="rounded-2xl border-2 border-violet-200 bg-violet-50 p-5">
              <h2 className="text-2xl font-black">{result.titulo}</h2>
              <p className="mt-2">{result.objetivo}</p>
              {remaining !== null && (
                <p className="mt-2 text-xs">{remaining} solicitações restantes hoje.</p>
              )}
            </header>
            {list("Preparação", result.preparacao)}
            {list("Passo a passo", result.passos)}
            {list("Formas de resposta", result.formas_resposta)}
            {list("Como verificar", result.verificacao)}
            {list("Cuidados", result.cuidados)}
            <p className="rounded-xl bg-slate-100 p-4 text-sm font-bold">{result.aviso}</p>
          </div>
        )}
      </main>
    </Shell>
  );
}
