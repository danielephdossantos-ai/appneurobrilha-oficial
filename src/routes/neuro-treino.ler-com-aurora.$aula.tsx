import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
import { marcarMissaoConcluida } from "@/escola-brilha/curso-ler-com-aurora/progresso";
import { useAppState } from "@/core/store";
import {
  cursoLerComAurora,
  getAulaLerComAurora,
} from "@/escola-brilha/curso-ler-com-aurora/aulas";
import {
  cursoLerComAuroraFase2,
  getAulaLerComAuroraFase2,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase2";
import {
  cursoLerComAuroraFase3,
  getAulaLerComAuroraFase3,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase3";
import {
  cursoLerComAuroraFase4,
  getAulaLerComAuroraFase4,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase4";
import {
  cursoLerComAuroraFase5,
  getAulaLerComAuroraFase5,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase5";
import {
  cursoLerComAuroraFase6,
  getAulaLerComAuroraFase6,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase6";
import {
  cursoLerComAuroraFase7,
  getAulaLerComAuroraFase7,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase7";
import {
  cursoLerComAuroraFase8,
  getAulaLerComAuroraFase8,
} from "@/escola-brilha/curso-ler-com-aurora/aulas-fase8";

/**
 * Player de uma missão do curso "Ler com Aurora".
 * Aceita slugs das Fases 1-8.
 */
export const Route = createFileRoute("/neuro-treino/ler-com-aurora/$aula")({
  head: () => ({ meta: [{ title: "Ler com Aurora — Missão" }] }),
  component: AulaLerComAuroraRoute,
});

function AulaLerComAuroraRoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();

  const aulaF8 = getAulaLerComAuroraFase8(aulaSlug);
  const aulaF7 = aulaF8 ? undefined : getAulaLerComAuroraFase7(aulaSlug);
  const aulaF6 = aulaF8 || aulaF7 ? undefined : getAulaLerComAuroraFase6(aulaSlug);
  const aulaF5 = aulaF8 || aulaF7 || aulaF6 ? undefined : getAulaLerComAuroraFase5(aulaSlug);
  const aulaF4 = aulaF8 || aulaF7 || aulaF6 || aulaF5 ? undefined : getAulaLerComAuroraFase4(aulaSlug);
  const aulaF3 = aulaF8 || aulaF7 || aulaF6 || aulaF5 || aulaF4 ? undefined : getAulaLerComAuroraFase3(aulaSlug);
  const aulaF2 = aulaF8 || aulaF7 || aulaF6 || aulaF5 || aulaF4 || aulaF3 ? undefined : getAulaLerComAuroraFase2(aulaSlug);
  const aula = aulaF8 ?? aulaF7 ?? aulaF6 ?? aulaF5 ?? aulaF4 ?? aulaF3 ?? aulaF2 ?? getAulaLerComAurora(aulaSlug);
  const curso = aulaF8
    ? cursoLerComAuroraFase8
    : aulaF7
      ? cursoLerComAuroraFase7
      : aulaF6
        ? cursoLerComAuroraFase6
        : aulaF5
          ? cursoLerComAuroraFase5
          : aulaF4
            ? cursoLerComAuroraFase4
            : aulaF3
              ? cursoLerComAuroraFase3
              : aulaF2
                ? cursoLerComAuroraFase2
                : cursoLerComAurora;


  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Missão não encontrada.</p>
          <Link to="/escola-brilha/ler-com-aurora" className="underline text-yellow-300">
            Voltar para a trilha
          </Link>
        </div>
      </div>
    );
  }

  const { activeChild } = useAppState();
  const fase = aulaF8 ? 8 : aulaF7 ? 7 : aulaF6 ? 6 : aulaF5 ? 5 : aulaF4 ? 4 : aulaF3 ? 3 : aulaF2 ? 2 : 1;



  return (
    <PlayerPortuguesEI
      curso={curso}
      aula={aula}
      voltarPara="/escola-brilha/ler-com-aurora"
      onConcluir={() => {
        void marcarMissaoConcluida({
          childId: activeChild?.id ?? null,
          slug: aulaSlug,
          fase,
        });
        navigate({ to: "/escola-brilha/ler-com-aurora" });
      }}
    />
  );
}
