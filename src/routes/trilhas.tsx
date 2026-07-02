import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, CheckCircle2, PlayCircle, Circle, Sparkles, RotateCcw } from "lucide-react";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { MotorPedagogico, type TrilhaDisciplina, type NoTrilha } from "@/escola-brilha/motor";
import { temaDaDisciplina } from "@/escola-brilha/missoes-tema";

export const Route = createFileRoute("/trilhas")({
  head: () => ({
    meta: [
      { title: "Trilhas de Aprendizagem — Neuro Brilha" },
      {
        name: "description",
        content:
          "Trilhas oficiais BNCC por disciplina: continue de onde parou, veja sua evolução e a próxima missão sugerida.",
      },
    ],
  }),
  component: TrilhasPage,
});

function TrilhasPage() {
  const { activeChild } = useAppState();
  const [trilhas, setTrilhas] = useState<TrilhaDisciplina[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!activeChild?.id) {
      setTrilhas([]);
      return;
    }
    let vivo = true;
    setTrilhas(null);
    MotorPedagogico.trilhas
      .todas(activeChild.id)
      .then((t) => {
        if (vivo) setTrilhas(t);
      })
      .catch((e) => {
        if (vivo) setErro(e?.message ?? "Erro ao carregar trilhas.");
      });
    return () => {
      vivo = false;
    };
  }, [activeChild?.id]);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        <header className="flex items-center gap-3">
          <Link
            to="/escola-brilha"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Escola Brilha
          </Link>
        </header>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-3">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Trilhas de Aprendizagem</h1>
            <p className="text-sm text-muted-foreground">
              Sequência oficial BNCC por disciplina. Continue de onde parou, veja sua evolução e a próxima missão sugerida.
            </p>
          </div>
        </div>

        {!activeChild && (
          <div className="rounded-xl border bg-card p-6 text-center text-muted-foreground">
            Selecione uma criança para visualizar as trilhas.
          </div>
        )}

        {erro && (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {erro}
          </div>
        )}

        {trilhas === null && activeChild && (
          <div className="rounded-xl border bg-card p-6 text-muted-foreground">Carregando trilhas…</div>
        )}

        {trilhas && trilhas.length === 0 && activeChild && (
          <div className="rounded-xl border bg-card p-6 text-muted-foreground">
            Nenhuma trilha disponível ainda.
          </div>
        )}

        <div className="grid gap-6">
          {trilhas?.map((t) => (
            <TrilhaCard key={t.disciplina} trilha={t} />
          ))}
        </div>
      </div>
    </Shell>
  );
}

function TrilhaCard({ trilha }: { trilha: TrilhaDisciplina }) {
  const tema = temaDaDisciplina(trilha.disciplina);
  const [aberto, setAberto] = useState(false);

  return (
    <section
      className="rounded-2xl border bg-card overflow-hidden shadow-sm"
      style={{ borderColor: `${tema.cor}30` }}
    >
      <header className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="rounded-2xl h-12 w-12 grid place-items-center text-2xl"
            style={{ background: `${tema.cor}20`, color: tema.cor }}
            aria-hidden="true"
          >
            {tema.emoji}
          </div>
          <div>
            <h2 className="text-xl font-bold">{trilha.disciplina}</h2>
            <p className="text-xs text-muted-foreground">
              {trilha.concluidas}/{trilha.totalHabilidades} habilidades · {trilha.pendentes} pendentes
              {trilha.emAndamento > 0 ? ` · ${trilha.emAndamento} em andamento` : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {trilha.continuarDe && (
            <Link
              to="/escola-brilha/$codigo"
              params={{ codigo: trilha.continuarDe.codigo }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:brightness-110"
            >
              <RotateCcw className="h-4 w-4" />
              Continuar de onde parou
            </Link>
          )}
          {trilha.proximaSugerida &&
            trilha.proximaSugerida.codigo !== trilha.continuarDe?.codigo && (
              <Link
                to="/escola-brilha/$codigo"
                params={{ codigo: trilha.proximaSugerida.codigo }}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted"
                style={{ borderColor: `${tema.cor}60`, color: tema.cor }}
              >
                <Sparkles className="h-4 w-4" />
                Próxima missão
              </Link>
            )}
        </div>
      </header>

      <div className="px-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${trilha.evolucaoPercentual}%`,
                background: tema.cor,
              }}
            />
          </div>
          <span className="text-sm font-semibold tabular-nums" style={{ color: tema.cor }}>
            {trilha.evolucaoPercentual}%
          </span>
        </div>
      </div>

      <div className="border-t bg-muted/30">
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="w-full px-5 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-muted/50 flex items-center justify-between"
          aria-expanded={aberto}
        >
          <span>Ver todas as missões da trilha ({trilha.totalHabilidades})</span>
          <span>{aberto ? "−" : "+"}</span>
        </button>

        {aberto && (
          <ol className="divide-y">
            {trilha.nos.map((n) => (
              <MissaoLinha key={n.codigo} no={n} cor={tema.cor} />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function MissaoLinha({ no, cor }: { no: NoTrilha; cor: string }) {
  const icone =
    no.status === "concluida" ? (
      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
    ) : no.status === "em_andamento" ? (
      <PlayCircle className="h-5 w-5" style={{ color: cor }} />
    ) : (
      <Circle className="h-5 w-5 text-muted-foreground/60" />
    );

  const label =
    no.status === "concluida"
      ? "Concluída"
      : no.status === "em_andamento"
        ? "Em andamento"
        : "Pendente";

  return (
    <li
      className={`flex items-center gap-3 px-5 py-3 ${
        no.ehProxima ? "bg-primary/5" : ""
      }`}
    >
      <span className="w-8 text-xs text-muted-foreground tabular-nums">{no.posicao}.</span>
      {icone}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">
          <span className="font-mono text-xs text-muted-foreground mr-2">{no.codigo}</span>
          {no.titulo}
        </div>
        <div className="text-[11px] text-muted-foreground">
          {no.ano} · {label}
          {no.ehProxima && " · sugerida agora"}
        </div>
      </div>
      <Link
        to="/escola-brilha/$codigo"
        params={{ codigo: no.codigo }}
        className="text-xs font-medium underline-offset-2 hover:underline"
        style={{ color: cor }}
      >
        {no.status === "concluida" ? "Revisar" : "Abrir"}
      </Link>
    </li>
  );
}
