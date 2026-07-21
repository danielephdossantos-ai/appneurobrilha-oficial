import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
import {
  cursoContarComPipFase1,
  getAulaContarComPipFase1,
} from "@/escola-brilha/curso-contar-com-pip/aulas-fase1";
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

  const aula = getAulaContarComPipFase1(aulaSlug);
  const curso = cursoContarComPipFase1;

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
