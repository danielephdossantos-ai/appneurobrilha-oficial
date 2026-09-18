import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Shell, PageHeader } from "@/components/Layout";
import { TrabalhoBrilha } from "@/components/reforco-brilha/TrabalhoBrilha";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/missao-trabalho")({ component: MissaoTrabalhoPage });

function MissaoTrabalhoPage() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <PageHeader
        icon={FileText}
        title="MISSÃO TRABALHO BRILHA"
        subtitle="Pesquise, organize as ideias, escreva com suas palavras e confira se cumpriu tudo o que o professor pediu."
      />
      {activeChild ? (
        <div className="mx-auto max-w-7xl px-3 pb-24 sm:px-4">
          <TrabalhoBrilha childId={activeChild.id} />
        </div>
      ) : (
        <p className="py-10 text-center">Cadastre uma criança para começar.</p>
      )}
    </Shell>
  );
}
