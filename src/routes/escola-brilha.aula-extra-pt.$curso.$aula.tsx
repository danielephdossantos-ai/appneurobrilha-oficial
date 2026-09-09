import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getAulaPortuguesFromCurso } from "@/escola-brilha/curso-v4/registry";
import { LousaPlayer } from "@/components/aulas-extras/LousaPlayer";
import { ProfessorBrilhaBubble } from "@/escola-brilha/professor-brilha/ProfessorBrilhaBubble";
import type { AulaExtraLousa } from "@/escola-brilha/curso-v4/portugues-aulas-extras/types-extras";

export const Route = createFileRoute("/escola-brilha/aula-extra-pt/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Aulas Extras° — Escola Brilha" }],
  }),
  component: AulaExtraRoute,
});

function AulaExtraRoute() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const found = getAulaPortuguesFromCurso(cursoSlug, aulaSlug);

  if (!found || !(found.aula as any).isAulaExtra) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-slate-950">
        Aula extra não encontrada.
      </div>
    );
  }

  return (
    <>
      <LousaPlayer
        aula={found.aula as AulaExtraLousa}
        onConcluir={() => {
          navigate({
            to: "/escola-brilha/curso/$slug",
            params: { slug: cursoSlug },
          });
        }}
      />
      <ProfessorBrilhaBubble
        contexto={{
          cursoSlug,
          aulaSlug,
          aulaTitulo: (found.aula as any)?.titulo,
          disciplina: "Língua Portuguesa",
          bncc: (found.aula as any)?.bncc,
        }}
      />
    </>
  );
}
