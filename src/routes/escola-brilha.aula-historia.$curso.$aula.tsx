import { createFileRoute, notFound } from "@tanstack/react-router";
import { getAulaHistoria } from "@/escola-brilha/historia/dados";
import { PlayerHistoriaSPEB } from "@/escola-brilha/historia/player/PlayerHistoriaSPEB";

export const Route = createFileRoute("/escola-brilha/aula-historia/$curso/$aula")({
  head: () => ({
    meta: [
      { title: "Aula de História — Escola Brilha" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AulaHistoriaPage,
  errorComponent: ({ error }) => (
    <div className="p-8 text-center text-red-700">Erro ao carregar aula: {String(error)}</div>
  ),
  notFoundComponent: () => (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Aula não encontrada</h1>
      <p className="mt-2 text-sm text-slate-600">Volte ao menu de História.</p>
    </div>
  ),
});

function AulaHistoriaPage() {
  const { curso, aula } = Route.useParams();
  const dados = getAulaHistoria(curso, aula);
  if (!dados) throw notFound();
  return <PlayerHistoriaSPEB aula={dados} />;
}
