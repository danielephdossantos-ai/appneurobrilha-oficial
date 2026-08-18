import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  CalendarDays,
  Clock,
  Sparkles,
  CheckCircle2,
  Circle,
  BellRing,
  Bell,
  RefreshCw,
  GraduationCap,
} from "lucide-react";
import {
  DIAS_LABEL,
  diaSemanaHoje,
  semanaAtual,
  serieParaNumero,
  cursosDaSerie,
} from "@/modules/curriculo-anual/builder";
import {
  carregarCurriculo,
  carregarHorarios,
  carregarItens,
  contarProgresso,
  gerarESalvar,
  marcarItem,
  salvarHorario,
  sincronizarAgendaDoDia,
  type CurriculoSalvo,
  type HorarioSalvo,
  type ItemSalvo,
} from "@/modules/curriculo-anual/persist";
import { garantirPlanoSeNecessario } from "@/modules/primeiros-anos/persist";
import { usePushNotifications } from "@/hooks/usePushNotifications";


export const Route = createFileRoute("/curriculo-anual")({
  head: () => ({
    meta: [
      { title: "Currículo Anual — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Ano letivo completo da criança dividido em 2 semestres, ligado à anamnese, com rotina diária, horário editável e lembretes no celular.",
      },
      { property: "og:title", content: "Currículo Anual — Neuro Brilha Kids" },
      {
        property: "og:description",
        content: "As aulas do Escola Brilha organizadas em ano letivo, semestre por semestre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CurriculoAnualPage,
});

function CurriculoAnualPage() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const serieNum = serieParaNumero(activeChild?.serie);
  const { permission, request } = usePushNotifications(childId);

  const [loading, setLoading] = useState(true);
  const [gerando, setGerando] = useState(false);
  const [plano, setPlano] = useState<CurriculoSalvo | null>(null);
  const [itens, setItens] = useState<ItemSalvo[]>([]);
  const [horarios, setHorarios] = useState<HorarioSalvo[]>([]);
  const [progresso, setProgresso] = useState({ total: 0, concluidas: 0 });
  const [semestre, setSemestre] = useState<1 | 2>(1);
  const [semana, setSemana] = useState(1);
  const [temAlfabetizacao, setTemAlfabetizacao] = useState(false);


  const cursos = useMemo(() => (serieNum ? cursosDaSerie(serieNum) : []), [serieNum]);
  const hoje = diaSemanaHoje();

  const recarregar = useCallback(
    async (sem: 1 | 2, wk: number) => {
      if (!childId) return;
      const [lista, prog, hrs] = await Promise.all([
        carregarItens(childId, sem, wk),
        contarProgresso(childId),
        carregarHorarios(childId),
      ]);
      setItens(lista);
      setProgresso(prog);
      setHorarios(hrs);
      const horaHoje = hrs.find((h) => h.dia_semana === hoje)?.hora ?? "17:00";
      const doDia = lista.filter((i) => i.dia_semana === hoje);
      void sincronizarAgendaDoDia(childId, doDia, horaHoje);
    },
    [childId, hoje],
  );

  useEffect(() => {
    if (!childId) {
      setLoading(false);
      return;
    }
    (async () => {
      setLoading(true);

      // Regra importante: se a criança não está no 1º ao 9º ano, não gera currículo anual.
      if (serieNum === null || serieNum < 1) {
        setPlano(null);
        setLoading(false);
        return;
      }

      let p = await carregarCurriculo(childId);
      // Geração automática: se a criança ainda não tem plano, monta o ano
      // letivo completo da série dela na primeira visita.
      if (!p && serieNum) {
        try {
          setGerando(true);
          await gerarESalvar({ childId, serie: serieNum });
          p = await carregarCurriculo(childId);
        } catch {
          /* mostra o botão manual se falhar */
        } finally {
          setGerando(false);
        }
      }
      setPlano(p);
      if (p) {
        const atual = semanaAtual(p.gerado_em, p.semanas_por_semestre);
        setSemestre(atual.semestre);
        setSemana(atual.semana);
        await recarregar(atual.semestre, atual.semana);
      }
      // 7+ que ainda não lê (pela anamnese) entra automaticamente na
      // rotina de alfabetização dos Primeiros Anos.
      try {
        const alfa = await garantirPlanoSeNecessario(childId, activeChild?.idade ?? 7);
        setTemAlfabetizacao(!!alfa);
      } catch {
        /* noop */
      }
      setLoading(false);
    })();
  }, [childId, serieNum, recarregar, activeChild?.idade]);


  async function gerar() {
    if (!childId || !serieNum) return;
    setGerando(true);
    try {
      await gerarESalvar({ childId, serie: serieNum });
      const p = await carregarCurriculo(childId);
      setPlano(p);
      setSemestre(1);
      setSemana(1);
      await recarregar(1, 1);
      toast.success("Currículo anual criado! A rotina da criança já está na agenda.");
    } catch (e: any) {
      toast.error(e?.message ?? "Não deu para criar o currículo agora.");
    } finally {
      setGerando(false);
    }
  }


  async function trocarSemana(sem: 1 | 2, wk: number) {
    setSemestre(sem);
    setSemana(wk);
    await recarregar(sem, wk);
  }

  async function alternar(item: ItemSalvo) {
    await marcarItem(item.id, !item.concluido);
    setItens((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, concluido: !i.concluido } : i)),
    );
    setProgresso((p) => ({
      ...p,
      concluidas: p.concluidas + (item.concluido ? -1 : 1),
    }));
  }

  async function mudarHora(dia: number, hora: string) {
    if (!childId) return;
    const atual = horarios.find((h) => h.dia_semana === dia);
    setHorarios((prev) => {
      const outros = prev.filter((h) => h.dia_semana !== dia);
      return [...outros, { dia_semana: dia, hora, lembrete: atual?.lembrete ?? true }].sort(
        (a, b) => a.dia_semana - b.dia_semana,
      );
    });
    await salvarHorario(childId, dia, hora, atual?.lembrete ?? true);
  }

  async function alternarLembrete(dia: number) {
    if (!childId) return;
    const atual = horarios.find((h) => h.dia_semana === dia);
    const novo = !(atual?.lembrete ?? true);
    setHorarios((prev) =>
      prev.map((h) => (h.dia_semana === dia ? { ...h, lembrete: novo } : h)),
    );
    await salvarHorario(childId, dia, atual?.hora ?? "17:00", novo);
  }

  const porDia = useMemo(() => {
    const mapa = new Map<number, ItemSalvo[]>();
    for (const i of itens) {
      const arr = mapa.get(i.dia_semana) ?? [];
      arr.push(i);
      mapa.set(i.dia_semana, arr);
    }
    return mapa;
  }, [itens]);

  const dias = plano?.dias_por_semana ?? 5;
  const pct = progresso.total ? Math.round((progresso.concluidas / progresso.total) * 100) : 0;

  return (
    <Shell>
      <PageHeader
        emoji="🎓"
        title="Currículo Anual"
        subtitle="O ano letivo completo da criança, em 2 semestres"
      />

      {temAlfabetizacao && (
        <Link to="/primeiros-anos" className="block mb-4">
          <Card className="bg-emerald-500/10 border-emerald-500/40">
            <div className="text-[11px] font-black uppercase tracking-wider text-emerald-600">
              🌱 Primeiros Anos · na rotina
            </div>
            <p className="text-sm font-bold">
              A criança ainda está aprendendo a ler — o plano de alfabetização entrou na rotina
              dela. Toque para ver.
            </p>
          </Card>
        </Link>
      )}



      {!childId ? (
        <Card className="text-center">
          <p className="font-bold">Escolha uma criança primeiro.</p>
          <Link to="/" className="text-primary font-bold underline">
            Voltar ao início
          </Link>
        </Card>
      ) : loading ? (
        <Card className="text-center font-bold">
          {gerando ? "Montando o ano letivo completo da série…" : "Carregando o ano letivo…"}
        </Card>

      ) : serieNum === null || serieNum < 1 ? (
        <Card className="text-center space-y-4 py-10">
          <div className="text-5xl mb-4">🛑</div>
          <h2 className="text-xl font-black text-[#0d1f55]">Acesso Restrito</h2>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto font-bold">
            O Currículo Anual está disponível apenas para crianças a partir do 1º Ano.
            {activeChild?.nome} ainda não está no 1º ano.
          </p>
          <Link to="/" className="inline-block btn-tap rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-black">
            Voltar ao Início
          </Link>
        </Card>
      ) : !plano ? (
        <Card className="text-center space-y-3">
          <Sparkles className="h-10 w-10 mx-auto text-primary" />
          <h2 className="text-xl font-black">Montar o ano letivo de {activeChild?.nome}</h2>
          {serieNum ? (
            <>
              <p className="text-sm text-muted-foreground">
                Vamos organizar <b>{cursos.length} disciplinas</b> do {serieNum}º ano em 2
                semestres, 5 dias por semana, priorizando o que a anamnese apontou.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {cursos.map((c) => (
                  <Pill key={c.slug}>{c.disciplina}</Pill>
                ))}
              </div>
              <button
                onClick={gerar}
                disabled={gerando || cursos.length === 0}
                className="btn-tap rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-black disabled:opacity-60"
              >
                {gerando ? "Montando…" : "Criar currículo anual"}
              </button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Cadastre a série da criança no perfil para montar o currículo (1º ao 9º ano).
            </p>
          )}
        </Card>
      ) : (
        <div className="space-y-5">
          {/* Progresso do ano */}
          <Card className="bg-primary/10 border-primary/30">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                  Ano letivo {plano.ano_letivo} · {plano.serie}º ano
                </div>
                <div className="text-lg font-black">
                  {progresso.concluidas} de {progresso.total} aulas concluídas
                </div>
              </div>
              <button
                onClick={gerar}
                disabled={gerando}
                title="Refazer o currículo"
                className="btn-tap rounded-xl bg-background border-2 border-primary/30 px-3 py-2 font-bold flex items-center gap-1.5"
              >
                <RefreshCw className="h-4 w-4" /> Refazer
              </button>
            </div>
            <div className="h-3 rounded-full bg-background overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
              />
            </div>
          </Card>

          {/* Semestres + semanas */}
          <div className="flex gap-2">
            {([1, 2] as const).map((s) => (
              <button
                key={s}
                onClick={() => trocarSemana(s, 1)}
                className={`btn-tap flex-1 rounded-xl px-4 py-2 font-black border-2 ${
                  semestre === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border"
                }`}
              >
                {s}º semestre
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {Array.from({ length: plano.semanas_por_semestre }, (_, i) => i + 1).map((wk) => (
              <button
                key={wk}
                onClick={() => trocarSemana(semestre, wk)}
                className={`btn-tap shrink-0 rounded-lg w-10 h-10 font-bold border-2 ${
                  semana === wk
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border"
                }`}
              >
                {wk}
              </button>
            ))}
          </div>

          {/* Aulas da semana */}
          <div className="space-y-4">
            {Array.from({ length: dias }, (_, i) => i + 1).map((dia) => {
              const lista = porDia.get(dia) ?? [];
              const hora = horarios.find((h) => h.dia_semana === dia)?.hora ?? "17:00";
              const ehHoje = dia === hoje;
              return (
                <section key={dia}>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">
                      {DIAS_LABEL[dia]}
                      {ehHoje && " · hoje"}
                    </h2>
                    <span className="flex items-center gap-1 text-xs font-bold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {hora}
                    </span>
                  </div>
                  {lista.length === 0 ? (
                    <Card className="text-sm text-muted-foreground">Dia livre 🌿</Card>
                  ) : (
                    <div className="space-y-2">
                      {lista.map((item) => (
                        <Card
                          key={item.id}
                          className={`flex items-center gap-3 ${
                            ehHoje ? "border-primary/40" : ""
                          } ${item.concluido ? "opacity-60" : ""}`}
                        >
                          <button
                            onClick={() => alternar(item)}
                            aria-label={item.concluido ? "Desmarcar aula" : "Marcar como feita"}
                            className="btn-tap shrink-0"
                          >
                            {item.concluido ? (
                              <CheckCircle2 className="h-6 w-6 text-primary" />
                            ) : (
                              <Circle className="h-6 w-6 text-muted-foreground" />
                            )}
                          </button>
                          <Link to={item.rota} className="flex-1 min-w-0">
                            <div className="text-[11px] font-black uppercase tracking-wider text-primary flex items-center gap-1">
                              <GraduationCap className="h-3.5 w-3.5" />
                              {item.disciplina}
                              {item.prioridade === 1 && " · reforço"}
                            </div>
                            <div className="font-bold break-words">{item.titulo}</div>
                          </Link>
                          <Pill>{item.minutos} min</Pill>
                        </Card>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Horário editável + lembretes */}
          <Card className="space-y-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h2 className="font-black">Horário da rotina (a mãe edita)</h2>
            </div>
            {permission !== "granted" && (
              <button
                onClick={request}
                className="btn-tap w-full rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold flex items-center justify-center gap-2"
              >
                <BellRing className="h-4 w-4" /> Ativar lembretes no celular
              </button>
            )}
            <div className="space-y-2">
              {Array.from({ length: dias }, (_, i) => i + 1).map((dia) => {
                const h = horarios.find((x) => x.dia_semana === dia);
                return (
                  <div key={dia} className="flex items-center gap-3">
                    <span className="w-12 font-black">{DIAS_LABEL[dia]}</span>
                    <input
                      type="time"
                      value={h?.hora ?? "17:00"}
                      onChange={(e) => mudarHora(dia, e.target.value)}
                      className="flex-1 rounded-xl border-2 border-border bg-background px-3 py-2 font-bold"
                      aria-label={`Horário de ${DIAS_LABEL[dia]}`}
                    />
                    <button
                      onClick={() => alternarLembrete(dia)}
                      aria-label={`Lembrete de ${DIAS_LABEL[dia]}`}
                      className={`btn-tap rounded-xl border-2 p-2 ${
                        h?.lembrete ?? true
                          ? "bg-primary/15 border-primary/40 text-primary"
                          : "bg-background border-border text-muted-foreground"
                      }`}
                    >
                      {h?.lembrete ?? true ? (
                        <BellRing className="h-5 w-5" />
                      ) : (
                        <Bell className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              As aulas de hoje aparecem também na agenda da criança e nos lembretes diários.
            </p>
          </Card>
        </div>
      )}
    </Shell>
  );
}
