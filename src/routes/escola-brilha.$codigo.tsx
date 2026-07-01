import { createFileRoute } from "@tanstack/react-router";
import { UniversalPlayer } from "@/escola-brilha/player/UniversalPlayer";

export const Route = createFileRoute("/escola-brilha/$codigo")({
  head: () => ({
    meta: [
      { title: `Missão de Aprendizagem — Escola Brilha` },
      { name: "description", content: `Uma missão de aprendizagem na Escola Brilha.` },
    ],
  }),
  component: AulaRoute,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
      <div>
        <div className="text-2xl font-black mb-2">Missão ainda não disponível</div>
        <div className="text-sm text-white/70">Volte ao catálogo e escolha outra aventura.</div>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
      <div className="text-sm">{error.message}</div>
    </div>
  ),
});

function AulaRoute() {
  const { codigo } = Route.useParams();
  return <UniversalPlayer codigo={codigo} />;
}
