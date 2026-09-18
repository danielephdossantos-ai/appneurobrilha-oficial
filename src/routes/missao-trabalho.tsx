import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Shell, PageHeader } from "@/components/Layout";
import { MissaoEscolarV2 } from "@/components/apoio-escolar-v2/MissaoEscolarV2";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/missao-trabalho")({ component: MissaoTrabalhoPage });

function MissaoTrabalhoPage() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <PageHeader
        icon={FileText}
        title="MISSÃO TRABALHO BRILHA"
        subtitle="Organize tema, conteúdo, prazo e as etapas do trabalho escolar."
      />
      {activeChild ? (
        <MissaoEscolarV2 childId={activeChild.id} serie={activeChild.serie} tipo="trabalho" />
      ) : (
        <p className="py-10 text-center">Cadastre uma criança para começar.</p>
      )}
    </Shell>
  );
}
