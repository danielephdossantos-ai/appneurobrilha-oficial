import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { Shell, PageHeader } from "@/components/Layout";
import { MissaoEscolarV2 } from "@/components/apoio-escolar-v2/MissaoEscolarV2";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/missao-tarefa")({ component: MissaoTarefaPage });

function MissaoTarefaPage() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <PageHeader
        icon={ClipboardList}
        title="MISSÃO TAREFA BRILHA"
        subtitle="Organize a tarefa e aprenda a resolver sem receber somente a resposta."
      />
      {activeChild ? (
        <MissaoEscolarV2 childId={activeChild.id} serie={activeChild.serie} tipo="tarefa" />
      ) : (
        <p className="py-10 text-center">Cadastre uma criança para começar.</p>
      )}
    </Shell>
  );
}
