import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";
import { Shell, PageHeader } from "@/components/Layout";
import { MissaoEscolarV2 } from "@/components/apoio-escolar-v2/MissaoEscolarV2";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/missao-prova")({ component: MissaoProvaPage });

function MissaoProvaPage() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <PageHeader
        icon={Target}
        title="MISSÃO PROVA BRILHA"
        subtitle="Cadastre a prova pelo conteúdo exato e acompanhe tudo pela agenda."
      />
      {activeChild ? (
        <MissaoEscolarV2 childId={activeChild.id} serie={activeChild.serie} tipo="prova" />
      ) : (
        <p className="py-10 text-center">Cadastre uma criança para começar.</p>
      )}
    </Shell>
  );
}
