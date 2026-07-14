import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerEnglishV1 } from "@/escola-brilha/ingles-1ano/PlayerEnglishV1";

export const Route = createFileRoute("/escola-brilha/ingles-v1/$curso/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `English · ${params.aula}` },
      {
        name: "description",
        content:
          "My First English Adventure — aula de inglês com áudio, speaking, listening e prática real.",
      },
    ],
  }),
  component: IngV1Page,
});

function IngV1Page() {
  const navigate = useNavigate();
  const sair = () => navigate({ to: "/" });
  const concluir = () => navigate({ to: "/" });
  return <PlayerEnglishV1 onSair={sair} onConcluir={concluir} />;
}
