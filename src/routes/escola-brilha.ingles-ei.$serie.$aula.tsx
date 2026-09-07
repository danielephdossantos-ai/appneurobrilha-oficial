import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useBackNavigation } from "@/lib/navigation-context";
import { completePlanItem, advancePlanFlow } from "@/lib/plan-flow";
import { getCursoInglesEIBySerie, getAulaInglesEI } from "@/escola-brilha/curso-ingles-ei/registry";
import { PlayerInglesEI } from "@/escola-brilha/curso-ingles-ei/PlayerInglesEI";
import { ProfessorBrilhaBubble } from "@/escola-brilha/professor-brilha/ProfessorBrilhaBubble";

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
  const { handleBack, context: navContext } = useBackNavigation();

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
    <>
      <PlayerInglesEI
        curso={found.curso}
        aula={found.aula}
        onSair={() => { if (!handleBack(navigate)) navigate({ to: "/escola-brilha/ingles-ei" }); }}
        onConcluir={async () => {
          try {
            const childId = localStorage.getItem("neurobrilha:activeChildId") || "sem-crianca";
            const key = `eb.ei.en.concluidas.${found.curso.slug}.${childId}`;
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
        if (!handleBack(navigate)) navigate({ to: "/escola-brilha/ingles-ei" });
        }}
      />
      <ProfessorBrilhaBubble
        contexto={{
          cursoSlug: found.curso.slug,
          aulaSlug,
          cursoTitulo: (found.curso as any)?.titulo,
          aulaTitulo: (found.aula as any)?.titulo,
          serie: serie,
          disciplina: "Inglês (Educação Infantil)",
          bncc: (found.aula as any)?.bncc,
        }}
      />
    </>
  );
}
