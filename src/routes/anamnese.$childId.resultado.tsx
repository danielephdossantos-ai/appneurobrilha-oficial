import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAnamneseV2 } from "@/modules/anamnese/hooks/useAnamneseV2";
import { DisclaimerBanner } from "@/modules/anamnese/components/DisclaimerBanner";
import { PERFIL_LABEL, RISK_BG, RISK_COLOR, RISK_LABEL } from "@/modules/anamnese/v2/scoring";
import { getRecommendations, focusAreas, needsProfessionalReferral } from "@/modules/anamnese/v2/recommendations";
import { generateAnamnesePDF } from "@/modules/anamnese/lib/pdf";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Download, RefreshCw, ArrowLeft, AlertTriangle } from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from "recharts";
import type { PerfilScores } from "@/modules/anamnese/v2/types";

export const Route = createFileRoute("/anamnese/$childId/resultado")({
  component: ResultadoRoute,
});

function ResultadoRoute() {
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

  const { scores, risk, responses } = a;
  const childName = (responses.step1 as any)?.nome ?? "Criança";
  const focus = focusAreas(scores);
  const recs = getRecommendations(scores);
  const needsPro = needsProfessionalReferral(risk);

  const chartData = (Object.keys(scores) as (keyof PerfilScores)[]).map((k) => ({
    area: PERFIL_LABEL[k],
    valor: scores[k],
  }));

  const handlePDF = () => {
    generateAnamnesePDF({ childName, responses, scores, risk });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-3 md:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Início</Link>
          </Button>
          <Button size="sm" onClick={handlePDF}>
            <Download className="h-4 w-4 mr-1" /> Baixar PDF
          </Button>
        </div>

        <DisclaimerBanner />

        <Card className="p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold mb-1">Resultado da Anamnese</h1>
          <p className="text-sm text-muted-foreground">Criança: {childName}</p>
        </Card>

        {/* Cards de perfil */}
        <div className="grid gap-3">
          {(Object.keys(scores) as (keyof PerfilScores)[]).map((k) => {
            const v = scores[k];
            const lvl = risk[k];
            return (
              <Card key={k} className={`p-4 border-2 ${RISK_BG[lvl]}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">{PERFIL_LABEL[k]}</span>
                  <span className="text-xs uppercase font-bold px-2 py-0.5 rounded-full"
                    style={{ background: RISK_COLOR[lvl], color: "white" }}>
                    {lvl}
                  </span>
                </div>
                <div className="h-2 bg-white/40 rounded-full overflow-hidden mb-1">
                  <div className="h-full rounded-full" style={{
                    width: `${v}%`,
                    background: RISK_COLOR[lvl],
                  }} />
                </div>
                <p className="text-xs">{v}% de indicadores — {RISK_LABEL[lvl]}</p>
              </Card>
            );
          })}
        </div>

        {/* Gráfico radar */}
        <Card className="p-4">
          <h2 className="font-bold mb-3">Perfil geral</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Radar dataKey="valor" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {focus.length > 0 && (
          <Card className="p-4">
            <h2 className="font-bold mb-2">Áreas de maior atenção</h2>
            <ul className="space-y-1 text-sm">
              {focus.map((k) => (
                <li key={k} className="flex justify-between">
                  <span>{PERFIL_LABEL[k]}</span>
                  <span className="font-bold" style={{ color: RISK_COLOR[risk[k]] }}>
                    {scores[k]}%
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Recomendações */}
        <Card className="p-4">
          <h2 className="font-bold mb-3">Recomendações educacionais</h2>
          <div className="space-y-4">
            {recs.map((r) => (
              <div key={r.area}>
                <p className="text-sm font-bold mb-1" style={{ color: RISK_COLOR[r.level] }}>
                  {PERFIL_LABEL[r.area]} — {r.level}
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                  {r.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {needsPro && (
          <Card className="p-4 bg-red-50 dark:bg-red-950/30 border-2 border-red-300">
            <div className="flex gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200">
                  Avaliação profissional recomendada
                </h3>
                <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                  Os indicadores sugerem que uma avaliação especializada (neuropediatra,
                  psicólogo, psicopedagogo, fonoaudiólogo ou terapeuta ocupacional) pode
                  beneficiar o desenvolvimento da criança.
                </p>
              </div>
            </div>
          </Card>
        )}

        <div className="flex gap-2 pb-6">
          <Button variant="outline" className="flex-1" onClick={() => nav({ to: "/anamnese/$childId", params: { childId } })}>
            <RefreshCw className="h-4 w-4 mr-1" /> Revisar respostas
          </Button>
          <Button className="flex-1" onClick={handlePDF}>
            <Download className="h-4 w-4 mr-1" /> Baixar relatório
          </Button>
        </div>
      </div>
    </div>
  );
}
