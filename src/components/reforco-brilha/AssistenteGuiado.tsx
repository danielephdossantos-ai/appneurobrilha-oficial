import { useEffect, useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { Wand2, Sparkles, BookOpen, PlayCircle, Loader2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import {
  seedTrilhaAnual,
  listarTrilhaAnual,
  gerarAulasHabilidade,
  obterAulasTrilha,
} from "@/lib/reforco-trilha-anual.functions";

type TrilhaItem = {
  id: string;
  componente: string;
  bimestre: number | null;
  ordem: number | null;
  habilidade_descricao: string;
  unidade_tematica: string | null;
  aulas_geradas: boolean;
  status: string;
};

type AulaGerada = {
  titulo: string;
  objetivo: string;
  tipo_atividade: string;
  passos: string[];
  pergunta_chave?: string;
  reforco_positivo: string;
  dica_erro: string;
};

interface Props {
  onAbrirAula?: (id: string, titulo: string) => void;
}

export function AssistenteGuiado({ onAbrirAula: _onAbrirAula }: Props) {
  const { activeChild } = useAppState();
  const seed = useServerFn(seedTrilhaAnual);
  const list = useServerFn(listarTrilhaAnual);
  const gerar = useServerFn(gerarAulasHabilidade);
  const obter = useServerFn(obterAulasTrilha);

  const [trilha, setTrilha] = useState<TrilhaItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>("");
  const [progress, setProgress] = useState<{ feito: number; total: number } | null>(null);
  const [openComp, setOpenComp] = useState<string | null>(null);
  const [openHab, setOpenHab] = useState<string | null>(null);
  const [aulasView, setAulasView] = useState<AulaGerada[] | null>(null);
  const [needsAnamnese, setNeedsAnamnese] = useState(false);
  const cancelRef = useRef(false);

  async function carregar() {
    if (!activeChild) return;
    const r = await list({ data: { childId: activeChild.id } });
    if (r.ok) setTrilha(r.trilha as TrilhaItem[]);
  }

  useEffect(() => {
    if (activeChild) carregar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChild?.id]);

  async function iniciar() {
    if (!activeChild) return;
    setLoading(true);
    setMsg("");
    setNeedsAnamnese(false);
    try {
      const r = await seed({ data: { childId: activeChild.id } });
      if (!r.ok) {
        if (r.error === "ANAMNESE_INCOMPLETA") setNeedsAnamnese(true);
        else setMsg(r.error);
        return;
      }
      await carregar();
      await gerarTudo();
    } finally {
      setLoading(false);
    }
  }

  async function gerarTudo() {
    if (!activeChild) return;
    cancelRef.current = false;
    const r = await list({ data: { childId: activeChild.id } });
    if (!r.ok) return;
    const pend = (r.trilha as TrilhaItem[]).filter((t) => !t.aulas_geradas);
    setProgress({ feito: 0, total: pend.length });
    for (let i = 0; i < pend.length; i++) {
      if (cancelRef.current) break;
      const item = pend[i];
      try {
        const g = await gerar({ data: { trilhaId: item.id } });
        if (!g.ok) console.warn("[trilha] falhou", item.id, g.error);
      } catch (e) {
        console.warn("[trilha] erro", e);
      }
      setProgress({ feito: i + 1, total: pend.length });
      if ((i + 1) % 5 === 0) await carregar();
    }
    await carregar();
    setProgress(null);
  }

  async function abrirHabilidade(item: TrilhaItem) {
    if (!item.aulas_geradas) {
      setMsg("Aulas ainda em geração. Aguarde…");
      return;
    }
    setOpenHab(item.id);
    setAulasView(null);
    const r = await obter({ data: { trilhaId: item.id } });
    if (r.ok && Array.isArray(r.trilha.aulas)) {
      setAulasView(r.trilha.aulas as AulaGerada[]);
    }
  }

  const porComponente = useMemo(() => {
    const m = new Map<string, TrilhaItem[]>();
    (trilha ?? []).forEach((t) => {
      const arr = m.get(t.componente) ?? [];
      arr.push(t);
      m.set(t.componente, arr);
    });
    return Array.from(m.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [trilha]);

  if (!activeChild) {
    return (
      <Card className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border-violet-500/30">
        <p className="text-sm text-muted-foreground">
          Selecione uma criança no painel dos pais para gerar a trilha anual.
        </p>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border-violet-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-violet-500" />
          Trilha anual adaptada
        </h3>
        {trilha && trilha.length > 0 && (
          <div className="text-xs text-muted-foreground">
            {trilha.filter((t) => t.aulas_geradas).length}/{trilha.length} prontas
          </div>
        )}
      </div>

      {needsAnamnese && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-sm space-y-2">
          <p className="font-semibold">Anamnese premium incompleta</p>
          <p className="text-muted-foreground">
            O Reforço Brilho usa a anamnese que o app fez no início para personalizar as aulas.
            Termine a anamnese para liberar a trilha.
          </p>
          <Link
            to="/anamnese/$childId"
            params={{ childId: activeChild.id }}
            className="inline-block mt-1 text-sm font-semibold text-violet-600 hover:underline"
          >
            Completar anamnese →
          </Link>
        </div>
      )}

      {!trilha || trilha.length === 0 ? (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Vamos montar a trilha do ano inteiro de <strong>{activeChild.nome}</strong> usando o
            perfil da anamnese e a biblioteca BNCC. Cada habilidade gera 15 aulas variadas.
          </p>
          <button
            onClick={iniciar}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-violet-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-violet-600 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Preparando…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" /> Gerar trilha do ano
              </>
            )}
          </button>
          {msg && <p className="text-xs text-rose-500">{msg}</p>}
        </div>
      ) : (
        <div className="space-y-4">
          {progress && (
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold flex items-center gap-2">
                  <Loader2 className="h-3 w-3 animate-spin" /> Gerando aulas adaptadas…
                </span>
                <span>
                  {progress.feito}/{progress.total}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-violet-500/20 overflow-hidden">
                <div
                  className="h-full bg-violet-500 transition-all"
                  style={{ width: `${(progress.feito / Math.max(1, progress.total)) * 100}%` }}
                />
              </div>
              <button
                onClick={() => {
                  cancelRef.current = true;
                }}
                className="mt-2 text-[11px] text-muted-foreground hover:underline"
              >
                Pausar
              </button>
            </div>
          )}

          {!progress && trilha.some((t) => !t.aulas_geradas) && (
            <button
              onClick={gerarTudo}
              className="w-full py-2 rounded-xl bg-violet-500/15 text-violet-700 text-sm font-semibold hover:bg-violet-500/25"
            >
              Continuar gerando aulas pendentes
            </button>
          )}

          {porComponente.map(([comp, itens]) => {
            const aberta = openComp === comp;
            const prontas = itens.filter((i) => i.aulas_geradas).length;
            return (
              <div key={comp} className="rounded-2xl border-2 border-violet-500/20 bg-card">
                <button
                  onClick={() => setOpenComp(aberta ? null : comp)}
                  className="w-full flex items-center justify-between p-3 text-left"
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <BookOpen className="h-4 w-4 text-violet-500" />
                    {comp}
                    <span className="ml-2 text-[11px] font-medium text-muted-foreground">
                      {prontas}/{itens.length}
                    </span>
                  </div>
                  <span className="text-xs">{aberta ? "▲" : "▼"}</span>
                </button>
                {aberta && (
                  <div className="px-3 pb-3 space-y-1.5">
                    {itens.map((it) => (
                      <button
                        key={it.id}
                        onClick={() => abrirHabilidade(it)}
                        className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                          it.aulas_geradas
                            ? "bg-violet-500/5 hover:bg-violet-500/15"
                            : "bg-muted/40 opacity-70"
                        }`}
                      >
                        {it.aulas_geradas ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        ) : (
                          <Loader2 className="h-4 w-4 text-muted-foreground shrink-0" />
                        )}
                        <span className="flex-1 font-medium line-clamp-2">
                          {it.habilidade_descricao}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {openHab && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">15 aulas adaptadas</h4>
                  <button
                    onClick={() => {
                      setOpenHab(null);
                      setAulasView(null);
                    }}
                    className="text-sm text-muted-foreground"
                  >
                    Fechar
                  </button>
                </div>
                {!aulasView ? (
                  <p className="text-sm text-muted-foreground py-8 text-center">Carregando…</p>
                ) : (
                  <div className="space-y-3">
                    {aulasView.map((a, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-violet-500/20 bg-violet-500/5"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <PlayCircle className="h-4 w-4 text-violet-500" />
                          <span className="font-bold text-sm">
                            {idx + 1}. {a.titulo}
                          </span>
                          <span className="ml-auto text-[10px] uppercase font-black text-violet-500">
                            {a.tipo_atividade}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{a.objetivo}</p>
                        <ol className="text-xs space-y-1 list-decimal pl-4">
                          {a.passos.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ol>
                        <p className="mt-2 text-[11px] text-emerald-600">⭐ {a.reforco_positivo}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
