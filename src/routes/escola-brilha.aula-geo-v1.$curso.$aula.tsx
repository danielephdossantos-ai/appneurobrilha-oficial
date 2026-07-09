import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerGeoV1 } from "@/escola-brilha/curso-v4/geografia-3ano/player/PlayerGeoV1";
import { getAulaGeoV1FromCurso } from "@/escola-brilha/curso-v4/registry";

export const Route = createFileRoute("/escola-brilha/aula-geo-v1/$curso/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Aula ${params.aula} — Cartógrafo` },
      { name: "description", content: "Aula Geografia — player customizado 3º ao 9º ano." },
    ],
  }),
  component: AulaGeoV1Page,
});

function AulaGeoV1Page() {
  const { curso, aula } = Route.useParams();
  const navigate = useNavigate();
  const dados = getAulaGeoV1FromCurso(curso, aula);

  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#0d1f55] text-white text-center p-6">
        <div>
          <div className="text-4xl mb-3">🧭</div>
          Aula de Geografia não encontrada.
          <button
            onClick={() => navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } })}
            className="block mx-auto mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm"
          >
            ← Voltar à trilha
          </button>
        </div>
      </div>
    );
  }

  const sair = () =>
    navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } });

  const concluir = () => {
    try {
      const chave = `eb.v4.progresso.${curso}`;
      const raw = localStorage.getItem(chave);
      const arr: string[] = raw ? JSON.parse(raw) : [];
      if (!arr.includes(aula)) arr.push(aula);
      localStorage.setItem(chave, JSON.stringify(arr));
    } catch {
      /* ignore */
    }
    sair();
  };

  return <PlayerGeoV1 aula={dados.aula} onSair={sair} onConcluir={concluir} />;
}
