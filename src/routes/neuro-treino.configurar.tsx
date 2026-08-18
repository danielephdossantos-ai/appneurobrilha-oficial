import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { Brain, GraduationCap, Settings, Bell, Calendar } from "lucide-react";

export const Route = createFileRoute("/neuro-treino/configurar")({
  head: () => ({
    meta: [{ title: "Configurar Planos — Neuro Brilha Kids" }],
  }),
  component: ConfigurarPlanos,
});

function ConfigurarPlanos() {
  const { activeChild } = useAppState();

  if (!activeChild) {
    return (
      <Shell>
        <PageHeader icon={Settings} title="Configuração" subtitle="Escolha uma criança" />
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHeader 
        icon={Settings} 
        title="Meu Plano" 
        subtitle={`Organize a jornada de ${activeChild.nome}`} 
      />

      <div className="space-y-6">
        {/* Sistema 1: Alfabetização */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-black">Plano de Alfabetização</h2>
          </div>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Jornada pedagógica de 40 semanas para crianças de 3 a 6 anos. 
              Foca em prontidão, consciência fonológica e escrita.
            </p>
            <Link 
              to="/plano-anual"
              className="btn-tap w-full bg-primary text-primary-foreground py-3 rounded-2xl font-black flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" /> Ver Cronograma Anual
            </Link>
          </Card>
        </section>

        {/* Sistema 2: Neuro-Treino */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 bg-sun/20 rounded-lg">
              <Brain className="h-5 w-5 text-sun-foreground" />
            </div>
            <h2 className="text-xl font-black">Plano Neuro-Treino</h2>
          </div>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Treino cognitivo personalizado baseado na anamnese. 
              Atividades diárias para memória, atenção e controle.
            </p>
            <Link 
              to="/plano-neuro"
              className="btn-tap w-full bg-sun text-sun-foreground py-3 rounded-2xl font-black flex items-center justify-center gap-2"
            >
              <Settings className="h-5 w-5" /> Ajustar Sessões e Horários
            </Link>
          </Card>
        </section>

        {/* Notificações */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 bg-petal/20 rounded-lg">
              <Bell className="h-5 w-5 text-petal-foreground" />
            </div>
            <h2 className="text-xl font-black">Lembretes</h2>
          </div>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">
              Configure notificações no celular para não perder nenhuma missão do dia. 
              Os horários podem ser ajustados dentro de cada plano.
            </p>
          </Card>
        </section>
      </div>
    </Shell>
  );
}
