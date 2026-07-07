import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getAulaGeografiaFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerGeografiaV4 } from "@/escola-brilha/curso-v4/player-geografia/PlayerGeografiaV4";

/**
 * Rota da AULA de Geografia v4.
 * URL: /escola-brilha/aula-geo-v4/<curso>/<aula>
 */
export const Route = createFileRoute("/escola-brilha/aula-geo-v4/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Expedição GeoBrilha — Escola Brilha" }],
  }),
  component: AulaGeoV4Route,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#020a15]">
      Aula não encontrada.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function AulaGeoV4Route() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const found = getAulaGeografiaFromCurso(cursoSlug, aulaSlug);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#020a15]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  return (
    <PlayerGeografiaV4
      aula={found.aula}
      cursoSlug={cursoSlug}
      voltarPara={`/escola-brilha/curso/${cursoSlug}`}
      onConcluir={() => {
        try {
          const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(list));
        } catch {
          /* ignore */
        }
        navigate({
          to: "/escola-brilha/curso/$slug",
          params: { slug: cursoSlug },
        });
      }}
    />
  );
}
