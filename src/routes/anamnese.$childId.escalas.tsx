import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAnamneseV2 } from "@/modules/anamnese/hooks/useAnamneseV2";
import { DisclaimerBanner } from "@/modules/anamnese/components/DisclaimerBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, AlertTriangle, BarChart3 } from "lucide-react";
import {
  scoreSnapIV,
  snapRecommendations,
  SNAP_DESATENCAO,
  SNAP_HIPERATIVIDADE,
  SNAP_IMPULSIVIDADE,
} from "@/modules/anamnese/v2/snap-iv";
import {
  scoreMCHAT,
  mchatRecommendations,
  MCHAT_LEVEL_LABEL,
  MCHAT_LEVEL_COLOR,
  MCHAT_ITEMS,
} from "@/modules/anamnese/v2/mchat-r";

export const Route = createFileRoute("/anamnese/$childId/escalas")({
  component: EscalasRoute,
});

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function EscalasRoute() {
  const { childId } = Route.useParams();
  const nav = useNavigate();
  const a = useAnamneseV2(childId);

  if (a.isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const childName = (a.responses.step1 as any)?.nome ?? "Criança";
  const snap = scoreSnapIV((a.responses.step18 ?? {}) as any);
  const mchat = scoreMCHAT((a.responses.step19 ?? {}) as any);

  const snapColor = (flag: boolean) => (flag ? "#dc2626" : "#16a34a");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-3 md:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/anamnese/$childId/resultado" params={{ childId }}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Resultado geral
            </Link>
          </Button>
          <span className="text-xs text-muted-foreground">{childName}</span>
        </div>

        <DisclaimerBanner />

        <Card className="p-4 md:p-6">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold">Escalas de triagem</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Relatório separado das escalas SNAP-IV (TDAH) e M-CHAT-R (TEA). Triagem orientadora —
            não substitui avaliação clínica.
          </p>
        </Card>

        {/* SNAP-IV */}
        <Card className="p-4 md:p-6 space-y-4">
          <header>
            <h2 className="text-lg font-bold">SNAP-IV — Triagem de TDAH</h2>
            <p className="text-xs text-muted-foreground">
              {snap.answered}/{snap.total} itens respondidos. Cortes: Desatenção ≥ 1,78 ·
              Hiperatividade/Impulsividade ≥ 1,44.
            </p>
          </header>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Desatenção</span>
                <span className="font-bold" style={{ color: snapColor(snap.desatencaoFlag) }}>
                  {snap.desatencaoMean.toFixed(2)} {snap.desatencaoFlag ? "▲ acima do corte" : "✓ abaixo do corte"}
                </span>
              </div>
              <Bar value={snap.desatencaoMean} max={3} color={snapColor(snap.desatencaoFlag)} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Hiperatividade</span>
                <span className="font-bold">{snap.hiperatividadeMean.toFixed(2)}</span>
              </div>
              <Bar value={snap.hiperatividadeMean} max={3} color="#6366f1" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Impulsividade</span>
                <span className="font-bold">{snap.impulsividadeMean.toFixed(2)}</span>
              </div>
              <Bar value={snap.impulsividadeMean} max={3} color="#6366f1" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Hiperatividade + Impulsividade (combinado)</span>
                <span className="font-bold" style={{ color: snapColor(snap.hiperImpulsividadeFlag) }}>
                  {snap.hiperImpulsividadeMean.toFixed(2)}{" "}
                  {snap.hiperImpulsividadeFlag ? "▲ acima do corte" : "✓ abaixo do corte"}
                </span>
              </div>
              <Bar
                value={snap.hiperImpulsividadeMean}
                max={3}
                color={snapColor(snap.hiperImpulsividadeFlag)}
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Interpretação e recomendações</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
              {snapRecommendations(snap).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          <details className="text-xs">
            <summary className="cursor-pointer text-muted-foreground">Ver respostas item a item</summary>
            <div className="mt-2 space-y-1">
              {[...SNAP_DESATENCAO, ...SNAP_HIPERATIVIDADE, ...SNAP_IMPULSIVIDADE].map((it) => {
                const v = (a.responses.step18 as any)?.[it.k];
                return (
                  <div key={String(it.k)} className="flex justify-between border-b py-1">
                    <span className="pr-2">{it.l}</span>
                    <span className="font-mono">{typeof v === "number" ? v : "—"}</span>
                  </div>
                );
              })}
            </div>
          </details>
        </Card>

        {/* M-CHAT-R */}
        <Card className="p-4 md:p-6 space-y-4">
          <header>
            <h2 className="text-lg font-bold">M-CHAT-R — Triagem de TEA</h2>
            <p className="text-xs text-muted-foreground">
              {mchat.answered}/{mchat.total} itens respondidos. Classificação: 0-2 baixo · 3-7
              médio · 8+ alto.
            </p>
          </header>

          <div className="rounded-lg p-4 border-2"
               style={{
                 borderColor: mchat.level ? MCHAT_LEVEL_COLOR[mchat.level] : "#94a3b8",
                 background: mchat.level ? `${MCHAT_LEVEL_COLOR[mchat.level]}10` : "transparent",
               }}>
            <div className="flex items-center justify-between">
              <span className="font-bold">Pontuação total</span>
              <span className="text-2xl font-bold">
                {mchat.score}
                <span className="text-sm font-normal text-muted-foreground">/{mchat.total}</span>
              </span>
            </div>
            {mchat.level && (
              <p
                className="mt-1 text-sm font-bold uppercase"
                style={{ color: MCHAT_LEVEL_COLOR[mchat.level] }}
              >
                {MCHAT_LEVEL_LABEL[mchat.level]}
              </p>
            )}
            {!mchat.level && (
              <p className="mt-1 text-xs text-muted-foreground">
                Responda às 20 perguntas na etapa 19 para obter a classificação completa.
              </p>
            )}
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Recomendações educativas</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
              {mchatRecommendations(mchat).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {mchat.flaggedKeys.length > 0 && (
            <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 p-3">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-200">
                    Itens sinalizados ({mchat.flaggedKeys.length})
                  </p>
                  <ul className="text-xs mt-1 space-y-0.5 text-amber-900/80 dark:text-amber-200/80">
                    {mchat.flaggedKeys.map((k) => {
                      const item = MCHAT_ITEMS.find((i) => i.k === k);
                      return <li key={String(k)}>• {item?.l}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Card>

        <div className="flex gap-2 pb-6">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => nav({ to: "/anamnese/$childId", params: { childId } })}
          >
            Revisar respostas
          </Button>
          <Button className="flex-1" asChild>
            <Link to="/anamnese/$childId/resultado" params={{ childId }}>
              Voltar ao resultado geral
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
