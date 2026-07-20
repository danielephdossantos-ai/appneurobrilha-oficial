import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
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

/**
 * Player de uma missão do curso "Ler com Aurora".
 * Aceita slugs das Fases 1-7.
 */
export const Route = createFileRoute("/escola-brilha/ler-com-aurora/$aula")({
  head: () => ({ meta: [{ title: "Ler com Aurora — Missão" }] }),
  component: AulaLerComAuroraRoute,
});

function AulaLerComAuroraRoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();

  const aulaF7 = getAulaLerComAuroraFase7(aulaSlug);
  const aulaF6 = aulaF7 ? undefined : getAulaLerComAuroraFase6(aulaSlug);
  const aulaF5 = aulaF7 || aulaF6 ? undefined : getAulaLerComAuroraFase5(aulaSlug);
  const aulaF4 = aulaF7 || aulaF6 || aulaF5 ? undefined : getAulaLerComAuroraFase4(aulaSlug);
  const aulaF3 = aulaF7 || aulaF6 || aulaF5 || aulaF4 ? undefined : getAulaLerComAuroraFase3(aulaSlug);
  const aulaF2 = aulaF7 || aulaF6 || aulaF5 || aulaF4 || aulaF3 ? undefined : getAulaLerComAuroraFase2(aulaSlug);
  const aula = aulaF7 ?? aulaF6 ?? aulaF5 ?? aulaF4 ?? aulaF3 ?? aulaF2 ?? getAulaLerComAurora(aulaSlug);
  const curso = aulaF7
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

  return (
    <PlayerPortuguesEI
      curso={curso}
      aula={aula}
      voltarPara="/escola-brilha/ler-com-aurora"
      onConcluir={() => {
        try {
          const key = "eb.ler-aurora.concluidas";
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
          localStorage.setItem("eb.ler-aurora.ultimo-dia", new Date().toISOString().slice(0, 10));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/ler-com-aurora" });
      }}
    />
  );
}
