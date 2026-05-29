
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Zap, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PedagogicalRecommendation } from "@/modules/parental/intelligence";

interface AdaptivePlanProps {
  recommendations: PedagogicalRecommendation[];
}

export const AdaptivePlan: React.FC<AdaptivePlanProps> = ({ recommendations }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pedagogical': return <Brain className="h-5 w-5 text-indigo-500" />;
      case 'sensory': return <Zap className="h-5 w-5 text-amber-500" />;
      case 'emotional': return <Heart className="h-5 w-5 text-rose-500" />;
      default: return <Sparkles className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <Card className="border-none shadow-sm bg-primary/5">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
          <Sparkles className="h-4 w-4" /> Inteligência Neuroeducacional
        </div>
        <CardTitle className="text-xl">Plano Adaptativo Personalizado</CardTitle>
        <CardDescription>Sugestões baseadas na análise dos últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white p-4 rounded-2xl shadow-sm border border-primary/10 flex gap-4">
            <div className="p-3 bg-slate-50 rounded-xl self-start">
              {getIcon(rec.type)}
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="font-bold text-slate-800 leading-tight">{rec.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{rec.description}</p>
              <Button variant="ghost" className="h-8 text-[11px] font-bold text-primary p-0 hover:bg-transparent hover:text-primary/80">
                {rec.action} <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
