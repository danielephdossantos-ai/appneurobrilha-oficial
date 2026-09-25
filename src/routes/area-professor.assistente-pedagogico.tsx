import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CalendarDays, Gamepad2, Loader2, Search, Send, Sparkles, BookOpenCheck } from "lucide-react";
import { toast } from "sonner";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { supabase } from "@/database/supabase/client";
import {
  buscarPedido, DIAS_SEMANA, idadeDoAno, indicarRecursos, montarRotina, proximaData, sinaisDoPerfil,
  type Indicacao, type PerfilApoio, type Recurso,
} from "@/lib/assistente-professor";

export const Route = createFileRoute("/area-professor/assistente-pedagogico")({
  component: Assistente,
  head: () => ({
    meta: [
      { title: "Assistente do Professor · NeuroBrilha Kids" },
      { name: "description", content: "Indica atividades, jogos e rotinas para cada aluno e envia tarefas em poucos toques." },
      { property: "og:title", content: "Assistente do Professor · NeuroBrilha Kids" },
      { property: "og:description", content: "Rotinas, atividades e tarefas prontas para cada criança conectada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type Student = { link_id: string; child_name: string; school_year: string | null };
const db = supabase as any;

function Assistente() {
  const [students, setStudents] = useState<Student[]>([]);
  const [linkId, setLinkId] = useState("");
  const [perfil, setPerfil] = useState<PerfilApoio>(null);
  const [carregando, setCarregando] = useState(false);
  const [pedido, setPedido] = useState("");
  const [enviando, setEnviando] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const { data } = await db.rpc("teacher_list_students");
      setStudents(data ?? []);
    })();
  }, []);

  useEffect(() => {
    if (!linkId) { setPerfil(null); return; }
    setCarregando(true);
    void (async () => {
      const { data } = await db.rpc("teacher_get_student_support_profile", { selected_link_id: linkId });
      setPerfil(data?.[0] ?? null);
      setCarregando(false);
    })();
  }, [linkId]);

  const aluno = students.find((s) => s.link_id === linkId);
  const idade = idadeDoAno(aluno?.school_year);
  const sinais = useMemo(() => sinaisDoPerfil(perfil), [perfil]);
  const paraCrianca = useMemo(() => indicarRecursos({ idade, sinais, destino: "crianca", limite: 6 }), [idade, sinais]);
  const paraProfessor = useMemo(() => indicarRecursos({ idade, sinais, destino: "professor", limite: 4 }), [idade, sinais]);
  const rotina = useMemo(() => montarRotina(paraCrianca), [paraCrianca]);
  const resultadosPedido = useMemo(() => buscarPedido(pedido, idade), [pedido, idade]);

  async function enviar(r: Recurso, data: string, titulo: string, chave: string) {
    if (!linkId) return toast.error("Escolha um aluno conectado primeiro.");
    if (r.destino !== "crianca") return;
    setEnviando(chave);
    const { error } = await db.rpc("teacher_create_homework_assignment", {
      selected_link_id: linkId,
      assignment_title: titulo.slice(0, 120),
      assignment_subject: r.disciplina.slice(0, 60),
      assignment_instructions: `Abra "${r.nome}" no app e faça cerca de ${r.minutos} minutos. ${r.descricao}`,
      assignment_due_date: data,
      assignment_source_type: r.fonte === "neuro_treino" ? "neuro_treino" : "escola_brilha",
      assignment_source_route: r.rota,
      selected_inclusive_lesson_id: null,
    });
    setEnviando(null);
    if (error) toast.error("Não foi possível enviar. Confira se o aluno ainda está conectado.");
    else toast.success("Tarefa enviada para o app da criança.");
  }

  async function enviarRotina() {
    for (let i = 0; i < rotina.length; i++) {
      const it = rotina[i];
      const d = DIAS_SEMANA.indexOf(it.dia);
      await enviar(it.recurso, proximaData(d), `Rotina · ${it.dia}: ${it.recurso.nome}`, `rot-${i}`);
    }
  }

  const Card = ({ r, chave }: { r: Indicacao; chave: string }) => (
    <div className="flex flex-col rounded-2xl border-2 border-violet-100 bg-white p-4">
      <div className="flex items-center gap-2">
        {r.destino === "crianca" ? <Gamepad2 className="h-5 w-5 text-violet-700" /> : <BookOpenCheck className="h-5 w-5 text-teal-700" />}
        <h3 className="font-black">{r.nome}</h3>
      </div>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{r.descricao}</p>
      <p className="mt-1 text-xs font-bold text-violet-700">{r.motivo}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a href={r.rota} className="inline-flex min-h-10 items-center rounded-xl border-2 border-violet-200 px-3 text-sm font-bold text-violet-700">Abrir</a>
        {r.destino === "crianca" && (
          <button type="button" disabled={!linkId || enviando === chave} onClick={() => enviar(r, proximaData(0), `Atividade: ${r.nome}`, chave)} className="inline-flex min-h-10 items-center gap-1 rounded-xl bg-violet-700 px-3 text-sm font-bold text-white disabled:opacity-40">
            {enviando === chave ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}Enviar como tarefa
          </button>
        )}
      </div>
    </div>
  );

  return (
    <Shell>
      <main className="mx-auto max-w-5xl space-y-6 p-4 md:p-6">
        <Link to="/area-professor" className="inline-flex items-center gap-2 font-bold text-violet-700"><ArrowLeft className="h-4 w-4" />Área do Professor</Link>
        <header className="rounded-3xl bg-violet-700 p-6 text-white">
          <h1 className="flex items-center gap-2 text-3xl font-black"><Sparkles />Assistente do Professor</h1>
          <p className="mt-2">Escolha a criança e o assistente mostra jogos, atividades, rotina e materiais do app — prontos para enviar. Funciona sem IA, com as regras do próprio app.</p>
        </header>

        <section className="rounded-2xl border bg-white p-5">
          <label className="font-black" htmlFor="aluno">Aluno conectado</label>
          <select id="aluno" value={linkId} onChange={(e) => setLinkId(e.target.value)} className="mt-2 min-h-12 w-full rounded-xl border-2 px-3">
            <option value="">Escolha a criança…</option>
            {students.map((s) => <option key={s.link_id} value={s.link_id}>{s.child_name} · {s.school_year ?? "ano não informado"}</option>)}
          </select>
          {students.length === 0 && <p className="mt-2 text-sm text-muted-foreground">Nenhum aluno conectado. Tarefas e rotinas só podem ser enviadas para crianças com conta no app conectadas a você (plano pago ou código grátis).</p>}
          {linkId && !carregando && (
            <p className="mt-2 text-sm text-muted-foreground">
              {perfil ? (sinais.length ? `Perfil pedagógico: ${sinais.join(", ")}.` : "Perfil pedagógico preenchido.") : <>Sem perfil pedagógico — indicações só pela idade. <Link to="/area-professor/perfil-pedagogico/$linkId" params={{ linkId }} className="font-bold text-violet-700 underline">Preencher perfil</Link></>}
            </p>
          )}
          {carregando && <p className="mt-2 inline-flex items-center gap-2 text-sm"><Loader2 className="h-4 w-4 animate-spin" />Lendo o perfil…</p>}
        </section>

        <section className="rounded-2xl border bg-white p-5">
          <h2 className="font-black">Do que você precisa?</h2>
          <label className="mt-2 flex items-center gap-2 rounded-xl border-2 border-violet-200 px-3">
            <Search className="h-5 w-5 text-violet-700" />
            <input value={pedido} onChange={(e) => setPedido(e.target.value)} placeholder="Ex.: atividade de sílabas, tabuada, emoções, imprimir, prova…" className="min-h-12 w-full outline-none" aria-label="Pedido do professor" />
          </label>
          {pedido.trim().length >= 3 && (
            resultadosPedido.length ? <div className="mt-4 grid gap-3 sm:grid-cols-2">{resultadosPedido.map((r) => <Card key={r.id} r={r} chave={`ped-${r.id}`} />)}</div>
              : <p className="mt-3 text-sm text-muted-foreground">Nada encontrado. Tente outra palavra, como leitura, matemática ou rotina.</p>
          )}
        </section>

        {linkId && (
          <>
            <section className="space-y-3">
              <h2 className="text-xl font-black">Jogos e atividades indicados para {aluno?.child_name}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{paraCrianca.map((r) => <Card key={r.id} r={r} chave={`cri-${r.id}`} />)}</div>
            </section>

            <section className="rounded-2xl border-2 border-violet-200 bg-violet-50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="flex items-center gap-2 text-xl font-black"><CalendarDays className="text-violet-700" />Rotina da semana</h2>
                <button type="button" disabled={!rotina.length || !!enviando} onClick={enviarRotina} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet-700 px-4 font-bold text-white disabled:opacity-40"><Send className="h-4 w-4" />Enviar rotina inteira</button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {DIAS_SEMANA.map((dia) => (
                  <div key={dia} className="rounded-xl bg-white p-3">
                    <p className="font-black">{dia}</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {rotina.filter((i) => i.dia === dia).map((i) => <li key={i.recurso.id}>• {i.recurso.nome} <span className="text-muted-foreground">({i.minutos} min)</span></li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Cada atividade vira uma tarefa no app da criança, com data da próxima semana.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black">Materiais para você usar em sala</h2>
              <div className="grid gap-3 sm:grid-cols-2">{paraProfessor.map((r) => <Card key={r.id} r={r} chave={`pro-${r.id}`} />)}</div>
            </section>
          </>
        )}
      </main>
    </Shell>
  );
}
