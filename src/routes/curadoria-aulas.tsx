import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  listDrafts,
  getDraft,
  approveDraft,
  rejectDraft,
  generateBatch1Ano,
  generateLessonDraft,
} from "@/lib/lesson-generator.functions";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  RefreshCw,
  Loader2,
  Eye,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/curadoria-aulas")({
  component: CuradoriaAulasPage,
});

type DraftRow = {
  id: string;
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string | null;
  status: string;
  model: string | null;
  tokens_used: number | null;
  created_at: string;
  reviewed_at: string | null;
  notes: string | null;
};

function CuradoriaAulasPage() {
  const list = useServerFn(listDrafts);
  const get = useServerFn(getDraft);
  const approve = useServerFn(approveDraft);
  const reject = useServerFn(rejectDraft);
  const batch = useServerFn(generateBatch1Ano);
  const generateOne = useServerFn(generateLessonDraft);

  const [drafts, setDrafts] = useState<DraftRow[]>([]);
  const [status, setStatus] = useState<"pending" | "approved" | "rejected" | "all">("pending");
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [selected, setSelected] = useState<any | null>(null);
  const [msg, setMsg] = useState<string>("");
  const [generatingCode, setGeneratingCode] = useState("");

  const reload = async () => {
    setLoading(true);
    try {
      const r = await list({ data: { status } });
      setDrafts(r.drafts as DraftRow[]);
    } catch (e: any) {
      setMsg("Erro ao listar: " + (e?.message ?? e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void reload();
  }, [status]);

  const counts = useMemo(() => {
    const c = { pending: 0, approved: 0, rejected: 0 };
    drafts.forEach((d) => {
      if (d.status in c) (c as any)[d.status]++;
    });
    return c;
  }, [drafts]);

  const handleApprove = async (id: string) => {
    if (!confirm("Aprovar e publicar essa aula?")) return;
    setBusy(id);
    try {
      await approve({ data: { draftId: id } });
      setMsg("Aula publicada com sucesso!");
      setSelected(null);
      await reload();
    } catch (e: any) {
      setMsg("Erro: " + (e?.message ?? e));
    } finally {
      setBusy(null);
    }
  };

  const handleReject = async (id: string) => {
    const notes = prompt("Motivo da rejeição (opcional):") ?? "";
    setBusy(id);
    try {
      await reject({ data: { draftId: id, notes } });
      setSelected(null);
      await reload();
    } catch (e: any) {
      setMsg("Erro: " + (e?.message ?? e));
    } finally {
      setBusy(null);
    }
  };

  const openDraft = async (id: string) => {
    setBusy(id);
    try {
      const r = await get({ data: { draftId: id } });
      setSelected(r.draft);
    } catch (e: any) {
      setMsg("Erro ao abrir: " + (e?.message ?? e));
    } finally {
      setBusy(null);
    }
  };

  const handleBatch = async () => {
    if (
      !confirm(
        "Gerar TODAS as aulas pendentes do 1º Ano (Matemática + Português) via Groq?\nIsso pode consumir tokens.",
      )
    )
      return;
    setBusy("batch");
    setMsg("Gerando lote... (pode levar minutos)");
    try {
      const r = await batch({ data: { limit: 80 } });
      const detalhe = r.primeirosErros?.length
        ? ` | Erros: ${r.primeirosErros.join(" • ")}`
        : "";
      setMsg(
        `Lote finalizado: ${r.sucesso}/${r.total} ok, ${r.falha} falhas. ${r.tokensUsados} tokens.${detalhe}`,
      );
      await reload();
    } catch (e: any) {
      setMsg("Erro no lote: " + (e?.message ?? e));
    } finally {
      setBusy(null);
    }
  };

  const handleGenerateOne = async () => {
    if (!generatingCode.trim()) return;
    setBusy("one");
    try {
      const r = await generateOne({
        data: { codigo_bncc: generatingCode.trim().toUpperCase() },
      });
      setMsg(`Gerado: draft ${r.draftId} (${r.tokens} tokens)`);
      setGeneratingCode("");
      await reload();
    } catch (e: any) {
      setMsg("Erro: " + (e?.message ?? e));
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => history.back()}
              className="p-2 rounded-lg hover:bg-white/10"
              aria-label="Voltar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-black">Curadoria de aulas</h1>
              <p className="text-sm text-white/60">
                Aprove ou rejeite aulas geradas por IA antes que cheguem nas crianças.
              </p>
            </div>
          </div>

          <button
            onClick={handleBatch}
            disabled={!!busy}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-900 font-bold px-4 py-2 rounded-xl"
          >
            <Sparkles className="w-4 h-4" />
            Gerar lote 1º Ano (Mat + Port)
          </button>
        </header>

        {/* Gerar uma habilidade específica */}
        <div className="bg-white/5 rounded-xl p-3 mb-4 flex flex-wrap gap-2 items-center">
          <label className="text-sm text-white/80">Gerar uma só:</label>
          <input
            value={generatingCode}
            onChange={(e) => setGeneratingCode(e.target.value)}
            placeholder="Ex: EF01MA01"
            className="bg-slate-800 border border-white/10 rounded-lg px-3 py-1.5 text-sm w-48"
          />
          <button
            onClick={handleGenerateOne}
            disabled={!!busy || !generatingCode.trim()}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 text-sm font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            {busy === "one" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Gerar
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {(["pending", "approved", "rejected", "all"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-2 rounded-lg text-sm font-bold ${
                status === s
                  ? "bg-white text-slate-900"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {s === "pending"
                ? "Pendentes"
                : s === "approved"
                ? "Aprovadas"
                : s === "rejected"
                ? "Rejeitadas"
                : "Todas"}
            </button>
          ))}
          <button
            onClick={reload}
            disabled={loading}
            className="ml-auto p-2 rounded-lg hover:bg-white/10"
            aria-label="Recarregar"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>

        {msg && (
          <div className="mb-4 bg-blue-500/20 border border-blue-400/40 rounded-lg p-3 text-sm">
            {msg}
          </div>
        )}

        {/* Lista */}
        <div className="grid gap-2">
          {loading ? (
            <p className="text-white/60">Carregando…</p>
          ) : drafts.length === 0 ? (
            <p className="text-white/60">Nenhum rascunho neste filtro.</p>
          ) : (
            drafts.map((d) => (
              <div
                key={d.id}
                className="bg-white/5 hover:bg-white/10 rounded-xl p-3 flex flex-wrap items-center gap-3"
              >
                <span
                  className={`px-2 py-0.5 rounded text-xs font-bold ${
                    d.status === "pending"
                      ? "bg-amber-500 text-slate-900"
                      : d.status === "approved"
                      ? "bg-emerald-500 text-slate-900"
                      : "bg-rose-500 text-white"
                  }`}
                >
                  {d.status}
                </span>
                <span className="font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">
                  {d.codigo_bncc}
                </span>
                <span className="text-xs text-white/60">
                  {d.ano} · {d.disciplina}
                </span>
                <span className="flex-1 font-bold truncate">{d.titulo}</span>
                <span className="text-xs text-white/40">{d.tokens_used} tk</span>

                <button
                  onClick={() => openDraft(d.id)}
                  disabled={!!busy}
                  className="bg-white/10 hover:bg-white/20 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" /> Ver
                </button>
                {d.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(d.id)}
                      disabled={!!busy}
                      className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3" /> Aprovar
                    </button>
                    <button
                      onClick={() => handleReject(d.id)}
                      disabled={!!busy}
                      className="bg-rose-500 hover:bg-rose-400 disabled:opacity-50 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                    >
                      <XCircle className="w-3 h-3" /> Rejeitar
                    </button>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        {/* Modal de preview */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs font-mono bg-slate-900 inline px-2 py-0.5 rounded">
                    {selected.codigo_bncc}
                  </p>
                  <h2 className="text-xl font-black mt-1">
                    {selected.payload?.titulo ?? selected.titulo}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <PayloadPreview payload={selected.payload} />

              {selected.status === "pending" && (
                <div className="flex gap-2 mt-6 sticky bottom-0 bg-slate-800 pt-3">
                  <button
                    onClick={() => handleApprove(selected.id)}
                    disabled={!!busy}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Aprovar e publicar
                  </button>
                  <button
                    onClick={() => handleReject(selected.id)}
                    disabled={!!busy}
                    className="flex-1 bg-rose-500 hover:bg-rose-400 disabled:opacity-50 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-4 h-4" /> Rejeitar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 bg-slate-900/60 rounded-lg p-3">
      <p className="text-xs uppercase tracking-wide text-amber-400 font-bold mb-1">
        {title}
      </p>
      <div className="text-sm text-white/90 space-y-1">{children}</div>
    </div>
  );
}

function PayloadPreview({ payload }: { payload: any }) {
  if (!payload) return <p className="text-white/60">Sem payload.</p>;
  const p = payload;
  return (
    <div>
      <Section title="Objetivo">{p.objetivo}</Section>
      <Section title="Introdução">{p.introducao}</Section>
      <Section title="Explicação">
        <p className="whitespace-pre-wrap">{p.explicacao}</p>
      </Section>
      <Section title="Contextualização">{p.contextualizacao}</Section>
      <Section title={`Exemplos (${p.exemplos?.length ?? 0})`}>
        {(p.exemplos ?? []).map((e: any, i: number) => (
          <div key={i} className="mb-2 border-l-2 border-amber-400 pl-2">
            <p className="font-bold">{e.titulo}</p>
            <p className="text-xs text-white/70">{e.enunciado}</p>
            <p className="text-xs text-emerald-300">→ {e.resposta}</p>
          </div>
        ))}
      </Section>
      <Section title={`Quiz (${p.quiz?.questoes?.length ?? 0} questões)`}>
        {(p.quiz?.questoes ?? []).map((q: any, i: number) => (
          <div key={i} className="mb-2">
            <p className="font-bold">{i + 1}. {q.enunciado}</p>
            <ul className="text-xs ml-3">
              {q.alternativas?.map((a: any, j: number) => (
                <li key={j} className={a.correta ? "text-emerald-300" : ""}>
                  {a.correta ? "✓" : "·"} {a.texto}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
      <Section title={`Desafios (${p.desafios?.length ?? 0})`}>
        {(p.desafios ?? []).map((d: any, i: number) => (
          <div key={i} className="mb-2">
            <p className="font-bold">{d.titulo}</p>
            <p className="text-xs">{d.descricao}</p>
          </div>
        ))}
      </Section>
      <Section title={`Adaptações (${p.adaptacoes?.length ?? 0})`}>
        {(p.adaptacoes ?? []).map((a: any, i: number) => (
          <div key={i} className="mb-1">
            <span className="font-mono text-xs bg-slate-800 px-2 py-0.5 rounded mr-2">
              {a.perfil}
            </span>
            <span className="text-xs">{a.objetivo}</span>
          </div>
        ))}
      </Section>
      <Section title="Resumo">{p.resumo}</Section>
    </div>
  );
}
