import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Layout";
import { FileText } from "lucide-react";
import { useAppState } from "@/core/store";
import { TrabalhoBrilha } from "@/components/reforco-brilha/TrabalhoBrilha";
import { CalendarioProvas } from "@/components/reforco-brilha/CalendarioProvas";

export const Route = createFileRoute("/missao-trabalho")({
  component: MissaoTrabalho,
});

function MissaoTrabalho() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <PageHeader
        icon={FileText}
        title="MISSÃO TRABALHO BRILHA"
        subtitle="Monte seu trabalho escolar com Wikipédia, YouTube, livros e o Tutor Brilha guiando passo a passo."
      />
      <div className="mt-4 space-y-4">
        <CalendarioProvas
          childId={activeChild?.id ?? null}
          filtroTipo="trabalho"
          titulo="Calendário de Trabalhos"
        />
        <TrabalhoBrilha childId={activeChild?.id ?? null} />
      </div>
    </Shell>
  );
}
