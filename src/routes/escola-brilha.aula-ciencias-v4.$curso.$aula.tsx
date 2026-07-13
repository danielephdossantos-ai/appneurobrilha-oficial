import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getAulaPortuguesFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerCienciasV4 } from "@/escola-brilha/curso-v4/player-ciencias/PlayerCienciasV4";

/**
 * Rota da AULA de Ciências v4.
 * URL: /escola-brilha/aula-ciencias-v4/<curso>/<aula>
 * Reusa o contrato AulaPortuguesV4, mas renderiza no PlayerCienciasV4
 * (identidade visual de laboratório).
 */
export const Route = createFileRoute("/escola-brilha/aula-ciencias-v4/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Aula de Ciências — Escola Brilha" }],
  }),
  component: AulaCienciasV4Route,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-violet-50 bg-[#17093a]">
      Aula não encontrada.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function AulaCienciasV4Route() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const found = getAulaPortuguesFromCurso(cursoSlug, aulaSlug);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-violet-50 bg-[#17093a]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  return (
    <PlayerCienciasV4
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
