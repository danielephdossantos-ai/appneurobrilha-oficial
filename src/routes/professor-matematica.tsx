import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { ProfessorPipMat } from "@/components/professor/ProfessorPipMat";

export const Route = createFileRoute("/professor-matematica")({
  head: () => ({
    meta: [
      { title: "Pip Teen Roqueiro — Professor de Matemática" },
      {
        name: "description",
        content:
          "Tire dúvidas de matemática com o Pip Teen Roqueiro: explicações na lousa, conta escrita passo a passo e pouco texto.",
      },
      { property: "og:title", content: "Pip Teen Roqueiro — Professor de Matemática" },
      {
        property: "og:description",
        content: "Dúvidas de matemática resolvidas na lousa, passo a passo, com o Pip Teen Roqueiro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PageProfessorMatematica,
});

function PageProfessorMatematica() {
  const { activeChild } = useAppState();
  return (
    <Shell>
      <div className="p-3 sm:p-5">
        <ProfessorPipMat
          crianca={
            activeChild
              ? {
                  nome: activeChild.nome ?? undefined,
                  idade: activeChild.idade ?? undefined,
                  serie: activeChild.serie ?? undefined,
                }
              : undefined
          }
        />
      </div>
    </Shell>
  );
}
