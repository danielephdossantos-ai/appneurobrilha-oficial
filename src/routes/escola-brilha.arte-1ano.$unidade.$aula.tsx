import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PlayerArteV1 } from "@/escola-brilha/arte-1ano/PlayerArteV1";
import { getAula, CURSO_ARTE_1ANO } from "@/escola-brilha/arte-1ano/registry";

export const Route = createFileRoute("/escola-brilha/arte-1ano/$unidade/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Estúdio Brilha — Arte · ${params.unidade}/${params.aula}` },
      { name: "description", content: "Aula de Arte com 12 momentos: história, atividade, ferramenta digital, música, teatro, dança, jogo e álbum." },
    ],
  }),
  component: AulaArtePage,
  errorComponent: ErrPage,
  notFoundComponent: NotFoundPage,
});

function AulaArtePage() {
  const { unidade, aula } = Route.useParams();
  const par = getAula(unidade, aula);
  if (!par) throw notFound();
  const idx = par.unidade.aulas.findIndex((a) => a.slug === par.aula.slug);
  const prox = par.unidade.aulas[idx + 1]?.slug;
  return <PlayerArteV1 unidade={par.unidade} aula={par.aula} proximaAulaSlug={prox} />;
}

function ErrPage({ error, reset }: { error: unknown; reset: () => void }) {
  return (
    <div className="min-h-screen grid place-items-center bg-[#F5F0FF] p-6 text-center">
      <div>
        <div className="text-6xl mb-3">🎨</div>
        <div className="font-black text-xl mb-2">Algo deu errado no Estúdio Brilha.</div>
        <div className="text-sm text-[#3B1D6E]/70 mb-4">{String((error as any)?.message ?? error)}</div>
        <button onClick={reset} className="px-4 py-2 rounded-full bg-[#7C3AED] text-white font-black">Tentar de novo</button>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-[#F5F0FF] p-6 text-center">
      <div>
        <div className="text-6xl mb-3">🖼️</div>
        <div className="font-black text-xl mb-2">Essa aula ainda não existe.</div>
        <Link to="/escola-brilha/arte-1ano" className="px-4 py-2 rounded-full bg-[#3B1D6E] text-white font-black inline-block">
          Voltar ao mapa
        </Link>
        <div className="text-xs text-[#3B1D6E]/60 mt-3">Curso: {CURSO_ARTE_1ANO.titulo}</div>
      </div>
    </div>
  );
}
