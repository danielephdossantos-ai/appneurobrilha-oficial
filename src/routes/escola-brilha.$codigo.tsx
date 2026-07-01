import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AulaPlayer } from "@/escola-brilha/player/AulaPlayer";
import { getAula } from "@/escola-brilha/registry";

export const Route = createFileRoute("/escola-brilha/$codigo")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.codigo} — Escola Brilha` },
      { name: "description", content: `Aula da habilidade ${params.codigo} na Escola Brilha.` },
    ],
  }),
  component: AulaRoute,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
      <div>
        <div className="text-2xl font-black mb-2">Aula ainda não escrita</div>
        <div className="text-sm text-white/70">Volte ao catálogo e escolha outra.</div>
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
  const navigate = useNavigate();
  const aula = getAula(codigo);
  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
        <div>
          <div className="text-2xl font-black mb-2">Aula {codigo}</div>
          <div className="text-sm text-white/70 mb-4">
            Essa habilidade ainda não tem aula escrita.
          </div>
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="px-5 py-2.5 rounded-2xl bg-[#FFC93C] text-[#0d1f55] font-black"
          >
            Voltar ao catálogo
          </button>
        </div>
      </div>
    );
  }
  return <AulaPlayer aula={aula} />;
}
