import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { getCursoEIBySerie, getAulaEI } from "@/escola-brilha/curso-portugues-ei/registry";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";

/**
 * Rota da aula de Português Educação Infantil.
 * URL: /escola-brilha/portugues-ei/<serie>/<aula>
 * <serie>: maternal | pre1 | pre2
 */
export const Route = createFileRoute("/escola-brilha/portugues-ei/$serie/$aula")({
  head: () => ({
    meta: [{ title: "Português EI — Escola Brilha" }],
  }),
  component: AulaEIRoute,
});

function AulaEIRoute() {
  const { serie, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();

  const curso = getCursoEIBySerie(serie);
  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Série não encontrada: {serie}</p>
          <Link to="/escola-brilha/portugues-ei" className="underline text-purple-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  const found = getAulaEI(curso.slug, aulaSlug);
  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Aula não encontrada.</p>
          <Link to="/escola-brilha/portugues-ei" className="underline text-purple-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PlayerPortuguesEI
      curso={found.curso}
      aula={found.aula}
      voltarPara="/escola-brilha/portugues-ei"
      onConcluir={() => {
        try {
          const key = `eb.ei.pt.concluidas.${curso.slug}`;
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/portugues-ei" });
      }}
    />
  );
}
