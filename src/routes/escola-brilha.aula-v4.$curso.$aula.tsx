import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getAulaFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerV4 } from "@/escola-brilha/curso-v4/player/PlayerV4";

/**
 * Rota da AULA v4.1 dentro do curso.
 * URL: /escola-brilha/aula-v4/<curso>/<aula>
 * ?livre=1 mantém o modo revisão ao voltar para a trilha.
 */
export const Route = createFileRoute("/escola-brilha/aula-v4/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Aula — Escola Brilha" }],
  }),
  component: AulaV4Route,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
      Aula não encontrada.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function AulaV4Route() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const found = getAulaFromCurso(cursoSlug, aulaSlug);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  return (
    <PlayerV4
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
