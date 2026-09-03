import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useNavigationStore, useBackNavigation } from "@/lib/navigation-context";
import { getAulaPortuguesFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerPortuguesV4 } from "@/escola-brilha/curso-v4/player-portugues/PlayerPortuguesV4";
import { ProfessorBrilhaBubble } from "@/escola-brilha/professor-brilha/ProfessorBrilhaBubble";

/**
 * Rota da AULA de Português v4.
 * URL: /escola-brilha/aula-pt-v4/<curso>/<aula>
 */
export const Route = createFileRoute("/escola-brilha/aula-pt-v4/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Aula de Português — Escola Brilha" }],
  }),
  component: AulaPtV4Route,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
      Aula não encontrada.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => {
  const childId = typeof window !== "undefined" ? localStorage.getItem("neurobrilha:activeChildId") : null;
  return `eb.v4.progresso.${childId || "sem-crianca"}.${slug}`;
};

function AulaPtV4Route() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const { handleBack } = useBackNavigation();
  const found = getAulaPortuguesFromCurso(cursoSlug, aulaSlug);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  const serieNum = cursoSlug.match(/(\d+)\s*ano/)?.[1];

  return (
    <>
      <PlayerPortuguesV4
        aula={found.aula}
        cursoSlug={cursoSlug}
        voltarPara={`/escola-brilha/curso/${cursoSlug}`}
        onConcluir={() => {
          try {
            const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
            const list: string[] = raw ? JSON.parse(raw) : [];
            if (!list.includes(aulaSlug)) list.push(aulaSlug);
            localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(list));
          } catch {
            /* ignore */
          }

          if (!handleBack(navigate)) {
            navigate({
              to: "/escola-brilha/curso/$slug",
              params: { slug: cursoSlug },
            });
          }
        }}
      />
      <ProfessorBrilhaBubble
        teen={!!serieNum && Number(serieNum) >= 6}
        contexto={{
          cursoSlug,
          aulaSlug,
          cursoTitulo: (found as any).curso?.titulo,
          aulaTitulo: (found.aula as any)?.titulo,
          serie: serieNum ? `${serieNum}º ano` : undefined,
          disciplina: "Língua Portuguesa",
          bncc: (found.aula as any)?.bncc,
        }}
      />
    </>
  );
}
