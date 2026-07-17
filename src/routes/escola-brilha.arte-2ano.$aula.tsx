import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerArteV1 } from "@/escola-brilha/arte-2ano/PlayerArteV1";
import autorretrato from "@/escola-brilha/arte-2ano/data/u1-a01-autorretrato";
import type { AulaArte } from "@/escola-brilha/arte-2ano/types";

const AULAS: Record<string, AulaArte> = {
  [autorretrato.slug]: autorretrato,
};

export const Route = createFileRoute("/escola-brilha/arte-2ano/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Arte 2º Ano — ${params.aula}` },
      {
        name: "description",
        content:
          "Ateliê Brilha — Arte 2º Ano. Aula modelo SPEB 1.0 com 17 etapas: da história ao portfólio.",
      },
    ],
  }),
  component: ArteAulaPage,
});

function ArteAulaPage() {
  const { aula } = Route.useParams();
  const navigate = useNavigate();
  const dados = AULAS[aula];

  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center bg-rose-50 text-stone-800 p-6 text-center">
        <div>
          <div className="text-5xl mb-3">🎨</div>
          <div className="font-black">Aula de Arte não encontrada.</div>
          <button
            onClick={() => navigate({ to: "/" })}
            className="mt-4 px-4 py-2 rounded-xl bg-rose-500 text-white text-sm font-bold"
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <PlayerArteV1
      aula={dados}
      onSair={() => navigate({ to: "/" })}
    />
  );
}
