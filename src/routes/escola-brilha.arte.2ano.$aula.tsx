import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerArteV1 } from "@/escola-brilha/arte-2ano/PlayerArteV1";
import { getAulaArte } from "@/escola-brilha/arte-2ano/registry";

export const Route = createFileRoute("/escola-brilha/arte/2ano/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Arte 2º Ano — ${params.aula}` },
      { name: "description", content: "Aula de Arte no Ateliê Brilha — cores, texturas e emoções." },
    ],
  }),
  component: Page,
  notFoundComponent: () => <div className="p-8 text-center">Aula não encontrada.</div>,
});

function Page() {
  const { aula } = Route.useParams();
  const navigate = useNavigate();
  const dados = getAulaArte(aula);
  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Aula não encontrada</h1>
          <button className="underline" onClick={() => navigate({ to: "/" })}>Voltar</button>
        </div>
      </div>
    );
  }
  return <PlayerArteV1 aula={dados} onSair={() => navigate({ to: "/" })} />;
}
