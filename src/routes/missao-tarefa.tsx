import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { ClipboardList } from "lucide-react";
import { MissaoTarefa } from "@/components/missao-tarefa/MissaoTarefa";

export const Route = createFileRoute("/missao-tarefa")({
  component: MissaoTarefaPage,
});

function MissaoTarefaPage() {
  const { activeChild } = useAppState();

  return (
    <Shell>
      <div className="space-y-4 px-3 sm:px-4 max-w-3xl mx-auto pb-24">
        <PageHeader
          icon={ClipboardList}
          title="MISSÃO TAREFA BRILHA"
          subtitle="A tarefa de casa do dia a dia, com dicas da IA — sem entregar a resposta."
        />
        {!activeChild ? (
          <div className="text-center text-sm text-muted-foreground py-10">
            Cadastre uma criança no perfil pra começar.
          </div>
        ) : (
          <MissaoTarefa childId={activeChild.id} />
        )}
      </div>
    </Shell>
  );
}
