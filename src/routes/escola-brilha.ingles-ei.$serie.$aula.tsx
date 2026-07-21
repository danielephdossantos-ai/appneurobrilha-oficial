import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { getCursoInglesEIBySerie, getAulaInglesEI } from "@/escola-brilha/curso-ingles-ei/registry";
import { PlayerInglesEI } from "@/escola-brilha/curso-ingles-ei/PlayerInglesEI";

/**
 * Aula de Inglês Educação Infantil.
 * URL: /escola-brilha/ingles-ei/<serie>/<aula>
 */
export const Route = createFileRoute("/escola-brilha/ingles-ei/$serie/$aula")({
  head: () => ({
    meta: [
      { title: "Inglês EI — Escola Brilha" },
      { name: "description", content: "Trilha de inglês oral para 3 a 6 anos com método SPEB adaptado." },
    ],
  }),
  component: AulaInglesEIRoute,
});

function AulaInglesEIRoute() {
  const { serie, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();

  const curso = getCursoInglesEIBySerie(serie);
  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Série não encontrada: {serie}</p>
          <Link to="/escola-brilha/ingles-ei" className="underline text-purple-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  const found = getAulaInglesEI(serie, aulaSlug);
  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Aula não encontrada.</p>
          <Link to="/escola-brilha/ingles-ei" className="underline text-purple-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PlayerInglesEI
      curso={found.curso}
      aula={found.aula}
      onSair={() => navigate({ to: "/escola-brilha/ingles-ei" })}
      onConcluir={() => {
        try {
          const key = `eb.ei.en.concluidas.${found.curso.slug}`;
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/ingles-ei" });
      }}
    />
  );
}
