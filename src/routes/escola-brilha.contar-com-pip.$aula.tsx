import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
import {
  cursoContarComPipFase1,
  getAulaContarComPipFase1,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase1";
import {
  cursoContarComPipFase2,
  getAulaContarComPipFase2,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase2";
import {
  cursoContarComPipFase3,
  getAulaContarComPipFase3,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase3";
import {
  cursoContarComPipFase4,
  getAulaContarComPipFase4,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase4";
import {
  cursoContarComPipFase5,
  getAulaContarComPipFase5,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase5";
import { marcarMissaoPipConcluida } from "@/escola-brilha/curso-contar-com-pip/progresso";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/escola-brilha/contar-com-pip/$aula")({
  head: () => ({ meta: [{ title: "Contar com Pip — Missão" }] }),
  component: AulaContarComPipRoute,
});

function AulaContarComPipRoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild } = useAppState();

  const aulaF1 = getAulaContarComPipFase1(aulaSlug);
  const aulaF2 = aulaF1 ? undefined : getAulaContarComPipFase2(aulaSlug);
  const aulaF3 = aulaF1 || aulaF2 ? undefined : getAulaContarComPipFase3(aulaSlug);
  const aulaF4 = aulaF1 || aulaF2 || aulaF3 ? undefined : getAulaContarComPipFase4(aulaSlug);
  const aulaF5 = aulaF1 || aulaF2 || aulaF3 || aulaF4 ? undefined : getAulaContarComPipFase5(aulaSlug);
  const aula = aulaF1 ?? aulaF2 ?? aulaF3 ?? aulaF4 ?? aulaF5;
  const curso = aulaF1
    ? cursoContarComPipFase1
    : aulaF2
      ? cursoContarComPipFase2
      : aulaF3
        ? cursoContarComPipFase3
        : aulaF4
          ? cursoContarComPipFase4
          : cursoContarComPipFase5;

  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Missão não encontrada.</p>
          <Link
            to="/escola-brilha/contar-com-pip"
            className="underline text-yellow-300"
          >
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
      voltarPara="/escola-brilha/contar-com-pip"
      onConcluir={() => {
        marcarMissaoPipConcluida({
          childId: activeChild?.id ?? null,
          slug: aulaSlug,
        });
        navigate({ to: "/escola-brilha/contar-com-pip" });
      }}
    />
  );
}
