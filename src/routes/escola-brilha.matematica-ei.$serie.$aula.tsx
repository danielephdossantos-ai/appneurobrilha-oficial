import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useBackNavigation } from "@/lib/navigation-context";
import { completePlanItem, advancePlanFlow } from "@/lib/plan-flow";
import {
  getCursoMatEIBySerie,
  getAulaMatEI,
} from "@/escola-brilha/curso-matematica-ei/registry";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
import { ProfessorBrilhaBubble } from "@/escola-brilha/professor-brilha/ProfessorBrilhaBubble";

/**
 * Rota da aula de Matemática — Educação Infantil.
 * URL: /escola-brilha/matematica-ei/<serie>/<aula>
 * Reutiliza o PlayerPortuguesEI (mesmos tipos de momento).
 */
export const Route = createFileRoute("/escola-brilha/matematica-ei/$serie/$aula")({
  head: () => ({
    meta: [{ title: "Matemática EI — Escola Brilha" }],
  }),
  component: AulaMatEIRoute,
});

function AulaMatEIRoute() {
  const { serie, aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const { handleBack, context: navContext } = useBackNavigation();

  const curso = getCursoMatEIBySerie(serie);
  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Série não encontrada: {serie}</p>
          <Link to="/escola-brilha/matematica-ei" className="underline text-sky-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  const found = getAulaMatEI(curso.slug, aulaSlug);
  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Aula não encontrada.</p>
          <Link to="/escola-brilha/matematica-ei" className="underline text-sky-300">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PlayerPortuguesEI
        curso={found.curso}
        aula={found.aula}
        voltarPara="/escola-brilha/matematica-ei"
        onConcluir={async () => {
          try {
            const childId = localStorage.getItem("neurobrilha:activeChildId") || "sem-crianca";
            const key = `eb.ei.mat.concluidas.${curso.slug}.${childId}`;
            const raw = localStorage.getItem(key);
            const list: string[] = raw ? JSON.parse(raw) : [];
            if (!list.includes(aulaSlug)) list.push(aulaSlug);
            localStorage.setItem(key, JSON.stringify(list));
          } catch {
            /* ignore */
          }
          await completePlanItem(navContext);
        const nextRoute = advancePlanFlow(navContext);
        if (nextRoute) { navigate({ to: nextRoute }); return; }
        if (!handleBack(navigate)) navigate({ to: "/escola-brilha/matematica-ei" });
        }}
      />
      <ProfessorBrilhaBubble
        contexto={{
          cursoSlug: curso.slug,
          aulaSlug,
          cursoTitulo: (curso as any)?.titulo,
          aulaTitulo: (found.aula as any)?.titulo,
          serie: serie,
          disciplina: "Matemática (Educação Infantil)",
          bncc: (found.aula as any)?.bncc,
        }}
      />
    </>
  );
}
