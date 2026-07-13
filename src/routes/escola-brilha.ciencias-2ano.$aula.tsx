import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerCiencias } from "@/escola-brilha/curso-v4/ciencias-2ano/player/PlayerCiencias";
import { getAulaCiencias } from "@/escola-brilha/curso-v4/ciencias-2ano/tipos";
// Auto-registro das aulas
import "@/escola-brilha/curso-v4/ciencias-2ano/dados/aula-01-metodo-cientista";

export const Route = createFileRoute("/escola-brilha/ciencias-2ano/$aula")({
  head: () => ({
    meta: [
      { title: "Ciências 2º Ano · Laboratório Escola Brilha" },
      {
        name: "description",
        content:
          "Missão Cientistas da Natureza — aulas interativas de Ciências para o 2º ano, no laboratório roxo do Escola Brilha.",
      },
    ],
  }),
  component: CienciasPage,
});

function CienciasPage() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const aula = getAulaCiencias(aulaSlug);

  if (!aula) {
    return (
      <div className="min-h-screen bg-[#1a0b2e] text-white flex items-center justify-center p-6">
        <div className="text-center space-y-3">
          <div className="text-5xl">🔬</div>
          <div className="text-xl font-black">Aula em preparação</div>
          <div className="text-white/70 text-sm">
            Esta aula do laboratório ainda vai chegar.
          </div>
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="mt-4 px-4 py-2 rounded-xl bg-purple-600 font-bold"
          >
            Voltar para o Escola Brilha
          </button>
        </div>
      </div>
    );
  }

  return (
    <PlayerCiencias
      aula={aula}
      onSair={() => navigate({ to: "/escola-brilha" })}
      onConcluir={() => navigate({ to: "/escola-brilha" })}
    />
  );
}
