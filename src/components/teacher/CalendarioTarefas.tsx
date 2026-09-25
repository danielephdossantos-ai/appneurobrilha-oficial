import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2, Plus, Send, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";
import { idadeDoAno, indicarRecursos, RECURSOS, type Recurso } from "@/lib/assistente-professor";

type Student = { link_id: string; child_name: string; school_year: string | null };
type Tarefa = { recursoId: string; dia: number }; // dia 0..4 (seg..sex)
type Plano = { porSemana: number; semanas: Record<number, Tarefa[]> };

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const SEMANAS_ANO = 40;
const APP = RECURSOS.filter((r) => r.destino === "crianca");
const chave = (link: string) => `nb-calendario-tarefas:v1:${link}`;

function segundaDaSemana(semana: number) {
  const hoje = new Date();
  const d = new Date(hoje);
  d.setDate(hoje.getDate() - ((hoje.getDay() + 6) % 7) + semana * 7);
  d.setHours(12, 0, 0, 0);
  return d;
}
function dataDe(semana: number, dia: number) {
  const d = segundaDaSemana(semana);
  d.setDate(d.getDate() + dia);
  return d;
}

/** Gera o ano inteiro: N tarefas por semana, alternando os jogos indicados. */
function gerarAno(ano: string | null, porSemana: number): Plano {
  const indicados = indicarRecursos({ idade: idadeDoAno(ano), sinais: [], destino: "crianca", limite: 10 }).filter((r) => r.id !== "rotina");
  const lista = indicados.length ? indicados : APP;
  const semanas: Record<number, Tarefa[]> = {};
  let k = 0;
  for (let s = 0; s < SEMANAS_ANO; s++) {
    semanas[s] = Array.from({ length: porSemana }, (_, i) => ({ recursoId: lista[k++ % lista.length].id, dia: Math.floor((i * 5) / porSemana) }));
  }
  return { porSemana, semanas };
}

export function CalendarioTarefas({ students, onEnviado }: { students: Student[]; onEnviado: () => void }) {
  const db = supabase as any;
  const [linkId, setLinkId] = useState("");
  const [plano, setPlano] = useState<Plano | null>(null);
  const [semana, setSemana] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const aluno = students.find((s) => s.link_id === linkId);

  useEffect(() => {
    if (!linkId) return setPlano(null);
    const salvo = localStorage.getItem(chave(linkId));
    setPlano(salvo ? JSON.parse(salvo) : gerarAno(aluno?.school_year ?? null, 3));
    setSemana(0);
  }, [linkId]); // eslint-disable-line react-hooks/exhaustive-deps

  function salvar(p: Plano) {
    setPlano(p);
    if (linkId) localStorage.setItem(chave(linkId), JSON.stringify(p));
  }
  const tarefas = plano?.semanas[semana] ?? [];
  const recurso = (id: string) => APP.find((r) => r.id === id) as Recurso;
  const inicio = useMemo(() => segundaDaSemana(semana), [semana]);

  function editar(i: number, mudanca: Partial<Tarefa>) {
    if (!plano) return;
    const nova = tarefas.map((t, j) => (j === i ? { ...t, ...mudanca } : t));
    salvar({ ...plano, semanas: { ...plano.semanas, [semana]: nova } });
  }
  function remover(i: number) {
    if (!plano) return;
    salvar({ ...plano, semanas: { ...plano.semanas, [semana]: tarefas.filter((_, j) => j !== i) } });
  }
  function adicionar(dia: number) {
    if (!plano) return;
    salvar({ ...plano, semanas: { ...plano.semanas, [semana]: [...tarefas, { recursoId: APP[0].id, dia }] } });
  }
  function mudarQuantidade(n: number) {
    const q = Math.max(1, Math.min(10, n));
    if (confirm(`Refazer o calendário do ano com ${q} tarefa(s) por semana? As edições feitas serão trocadas.`)) salvar(gerarAno(aluno?.school_year ?? null, q));
  }

  async function enviarSemana() {
    if (!linkId || !tarefas.length) return;
    setEnviando(true);
    let ok = 0;
    for (const t of tarefas) {
      const r = recurso(t.recursoId);
      const d = dataDe(semana, t.dia);
      const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
      if (d < hoje) continue;
      const { error } = await db.rpc("teacher_create_homework_assignment", {
        selected_link_id: linkId,
        assignment_title: `${DIAS[t.dia]}: ${r.nome}`,
        assignment_subject: r.disciplina.slice(0, 60),
        assignment_instructions: `Abra "${r.nome}" no app e faça cerca de ${r.minutos} minutos. ${r.descricao}`,
        assignment_due_date: d.toISOString().slice(0, 10),
        assignment_source_type: r.fonte === "neuro_treino" ? "neuro_treino" : "escola_brilha",
        assignment_source_route: r.rota,
        selected_inclusive_lesson_id: null,
      });
      if (!error) ok++;
    }
    setEnviando(false);
    if (ok) { toast.success(`${ok} tarefa(s) enviada(s) para o app da criança.`); onEnviado(); }
    else toast.error("Nenhuma tarefa enviada. Confira a semana e o vínculo do aluno.");
  }

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-white p-5">
      <h2 className="flex items-center gap-2 text-2xl font-black"><CalendarDays className="text-sky-700" />Calendário semanal de tarefas</h2>
      <p className="mt-1 text-sm text-muted-foreground">O sistema já monta as tarefas do ano inteiro com jogos e atividades do app da criança. Você escolhe quantas tarefas por semana e edita o que precisar.</p>
      <select value={linkId} onChange={(e) => setLinkId(e.target.value)} className="mt-3 min-h-12 w-full rounded-xl border-2 px-3" aria-label="Aluno do calendário">
        <option value="">Escolha a criança conectada…</option>
        {students.map((s) => <option key={s.link_id} value={s.link_id}>{s.child_name} · {s.school_year ?? "ano não informado"}</option>)}
      </select>

      {plano && (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 font-bold">Tarefas por semana
              <input type="number" min={1} max={10} defaultValue={plano.porSemana} key={plano.porSemana} onBlur={(e) => Number(e.target.value) !== plano.porSemana && mudarQuantidade(Number(e.target.value))} className="min-h-11 w-20 rounded-xl border-2 px-2 text-center" />
            </label>
            <div className="ml-auto flex items-center gap-2">
              <button type="button" onClick={() => setSemana((s) => Math.max(0, s - 1))} disabled={semana === 0} className="min-h-11 rounded-xl border-2 px-3 disabled:opacity-40" aria-label="Semana anterior"><ChevronLeft /></button>
              <span className="min-w-40 text-center font-black">Semana {semana + 1} · {inicio.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}</span>
              <button type="button" onClick={() => setSemana((s) => Math.min(SEMANAS_ANO - 1, s + 1))} disabled={semana === SEMANAS_ANO - 1} className="min-h-11 rounded-xl border-2 px-3 disabled:opacity-40" aria-label="Próxima semana"><ChevronRight /></button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {DIAS.map((dia, d) => (
              <div key={dia} className="rounded-2xl bg-sky-50 p-3">
                <p className="font-black">{dia} <span className="text-xs font-bold text-muted-foreground">{dataDe(semana, d).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}</span></p>
                <div className="mt-2 space-y-2">
                  {tarefas.map((t, i) => t.dia === d && (
                    <div key={i} className="rounded-xl bg-white p-2">
                      <select value={t.recursoId} onChange={(e) => editar(i, { recursoId: e.target.value })} className="w-full rounded-lg border px-1 py-1 text-sm font-bold" aria-label="Atividade">
                        {APP.map((r) => <option key={r.id} value={r.id}>{r.nome}</option>)}
                      </select>
                      <div className="mt-1 flex items-center gap-1">
                        <select value={t.dia} onChange={(e) => editar(i, { dia: Number(e.target.value) })} className="flex-1 rounded-lg border px-1 py-1 text-xs" aria-label="Dia">
                          {DIAS.map((x, j) => <option key={x} value={j}>{x}</option>)}
                        </select>
                        <button type="button" onClick={() => remover(i)} className="rounded-lg p-1 text-rose-600" aria-label="Remover tarefa"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={() => adicionar(d)} className="inline-flex w-full items-center justify-center gap-1 rounded-xl border-2 border-dashed border-sky-300 py-1 text-sm font-bold text-sky-700"><Plus className="h-4 w-4" />Tarefa</button>
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={enviarSemana} disabled={enviando || !tarefas.length} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-sky-700 px-5 font-bold text-white disabled:opacity-40">
            {enviando ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}Enviar esta semana ({tarefas.length})
          </button>
          <p className="text-xs text-muted-foreground">Dias que já passaram não são enviados. Tudo é feito no app da criança — nada para imprimir.</p>
        </div>
      )}
    </section>
  );
}
