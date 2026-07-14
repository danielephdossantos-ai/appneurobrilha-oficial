import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerEnglishV1 } from "@/escola-brilha/ingles-1ano/PlayerEnglishV1";
import { getLesson } from "@/escola-brilha/ingles-1ano/lessons";

export const Route = createFileRoute("/escola-brilha/ingles-v1/$curso/$aula")({
  head: ({ params }) => {
    const lesson = getLesson(params.aula);
    const title = lesson?.meta.unitLabel ?? `English · ${params.aula}`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            "My First English Adventure — aula de inglês com áudio, speaking, listening e prática real.",
        },
      ],
    };
  },
  component: IngV1Page,
});

function IngV1Page() {
  const navigate = useNavigate();
  const { aula } = Route.useParams();
  const lesson = getLesson(aula);
  const sair = () => navigate({ to: "/" });
  const concluir = () => navigate({ to: "/" });
  if (!lesson) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#0d1f55] text-white p-6 text-center">
        <div>
          <div className="text-2xl font-black mb-2">Aula não encontrada</div>
          <button
            onClick={sair}
            className="mt-4 px-4 py-2 rounded-full bg-amber-400 text-slate-900 font-bold"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }
  return <PlayerEnglishV1 onSair={sair} onConcluir={concluir} lesson={lesson} />;
}
