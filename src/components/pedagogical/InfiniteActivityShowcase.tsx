import React, { useState, useEffect } from "react";
import { InfiniteActivityEngine } from "@/engines/infinite-activity-engine";
import { PedagogicalValidationEngine } from "@/engines/infinite-activity-engine/validation-engine";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck, ShieldAlert, PieChart } from "lucide-react";

export const InfiniteActivityShowcase = () => {
  const [activity, setActivity] = useState<any>(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [validationStats, setValidationStats] = useState<any>(null);

  const generate = () => {
    const newActivity = InfiniteActivityEngine.generate({
      childId: "test-child",
      age: 6,
      grade: 1,
      neuroProfile: "TDAH",
      previousPerformance: 0.8,
      adjustments: {
        visualComplexity: "low",
        stimuliReduction: true,
        interfaceSimplification: true,
        difficultyScale: 0.5,
        positiveReinforcementFrequency: 0.8,
        suggestBreak: false,
        audioAdaptation: { volume: 0.7, pacing: "slow" },
        animationIntensity: "low",
        maxInformationDensity: 3,
      },
    });
    setActivity(newActivity);
    setSessionCount((prev) => prev + 1);
    setValidationStats(PedagogicalValidationEngine.getStats());
  };

  useEffect(() => {
    generate();
  }, []);

  if (!activity) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Motor Infinito de Atividades</h2>
          <p className="text-muted-foreground text-sm">
            Geração estrutural baseada em regras (Zero IA)
          </p>
        </div>
        <Button onClick={generate} className="bg-primary hover:bg-primary/90">
          Gerar Próxima Combinação
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 overflow-hidden border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <div className="flex justify-end items-center">
              <Badge variant="outline" className="capitalize">
                {activity.difficulty}
              </Badge>
            </div>
            <CardTitle className="mt-2 text-xl">{activity.content.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎭</div>
              <p className="text-lg font-medium text-slate-700">{activity.content.question}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {activity.content.options?.map((opt: any) => (
                <Button
                  key={opt.id}
                  variant="outline"
                  className="h-24 text-lg hover:bg-primary/5 hover:border-primary"
                >
                  {opt.content}
                </Button>
              ))}
              {activity.content.items?.map((item: any) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-xl bg-slate-50 text-center font-bold"
                >
                  {item.content}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-dashed">
                <h4 className="text-[10px] font-bold uppercase text-muted-foreground mb-2">
                  Meta-dados do Motor
                </h4>
                <div className="grid grid-cols-1 gap-1 text-[10px]">
                  <div>
                    Template: <span className="font-mono">{activity.templateId}</span>
                  </div>
                  <div>
                    Cenário: <span className="font-mono">{activity.content.scenario}</span>
                  </div>
                  <div>
                    Personagem: <span className="font-mono">{activity.content.character}</span>
                  </div>
                </div>
              </div>

              {validationStats && (
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="text-[10px] font-bold uppercase text-primary mb-2 flex items-center gap-1">
                    <ShieldCheck size={10} /> Validador Pedagógico
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-success font-bold">VÁLIDO</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Aprovadas:</span>
                      <span className="font-bold">{validationStats.approved}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                Progresso Pedagógico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Domínio BNCC</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Nível Cognitivo</span>
                  <span>Intermediário</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="pt-4 border-t text-[10px] text-muted-foreground">
                Atividades geradas nesta sessão: {sessionCount}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-success/5 border-success/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm uppercase tracking-wider text-success">
                Neuro-Adaptação Ativa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-success" />
                Redução de estímulos visuais
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-success" />
                Ritmo de áudio: {activity.adaptation.audioAdaptation.pacing}
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-success" />
                Densidade de info: {activity.adaptation.maxInformationDensity}
              </div>
            </CardContent>
          </Card>

          {validationStats && validationStats.rejectionRate > 0 && (
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase tracking-wider text-destructive flex items-center gap-2">
                  <ShieldAlert size={14} /> Rejeições (Filtro)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">
                  {validationStats.rejectionRate.toFixed(1)}%
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">
                  Atividades descartadas por falha nos critérios pedagógicos antes de chegar ao
                  usuário.
                </p>
                {validationStats.logs.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-destructive/10">
                    <p className="text-[10px] font-bold text-destructive uppercase mb-1">
                      Último Motivo:
                    </p>
                    <p className="text-[9px] text-slate-600 italic">
                      {validationStats.logs[validationStats.logs.length - 1].errors[0]}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
