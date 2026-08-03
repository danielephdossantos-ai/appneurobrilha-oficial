import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getAulaPortuguesFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerPortuguesV4 } from "@/escola-brilha/curso-v4/player-portugues/PlayerPortuguesV4";
import { PlayerPortuguesTeen } from "@/escola-brilha/curso-v4/portugues-6ano/player/PlayerPortuguesTeen";

/**
 * Rota da AULA de Português v4.
 * URL: /escola-brilha/aula-pt-v4/<curso>/<aula>
 */
export const Route = createFileRoute("/escola-brilha/aula-pt-v4/$curso/$aula")({
  head: () => ({
    meta: [{ title: "Aula de Português — Escola Brilha" }],
  }),
  component: AulaPtV4Route,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
      Aula não encontrada.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function AulaPtV4Route() {
  const { curso: cursoSlug, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const found = getAulaPortuguesFromCurso(cursoSlug, aulaSlug);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  const handleConcluir = () => {
    try {
      const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(aulaSlug)) list.push(aulaSlug);
      localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(list));
    } catch {
      /* ignore */
    }
    navigate({
      to: "/escola-brilha/trilha/$serie/$disc",
      params: { 
        serie: found.curso.ano.toLowerCase().replace("º ano", "ano").replace(" ", ""),
        disc: "portugues"
      },
    });
  };

  if (cursoSlug.includes("6ano") || cursoSlug.includes("7ano") || cursoSlug.includes("8ano") || cursoSlug.includes("9ano")) {
    return <PlayerPortuguesTeen aula={found.aula} onConcluir={handleConcluir} />;
  }

  return (
    <PlayerPortuguesV4
      aula={found.aula}
      cursoSlug={cursoSlug}
      voltarPara={`/escola-brilha/curso/${cursoSlug}`}
      onConcluir={handleConcluir}
    />
  );
}
