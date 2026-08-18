import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useNavigationStore, useBackNavigation } from "@/lib/navigation-context";
import { getAulaFromCurso } from "@/escola-brilha/curso-v4/registry";
import { PlayerV4 } from "@/escola-brilha/curso-v4/player/PlayerV4";
import { ProfessorBrilhaBubble } from "@/escola-brilha/professor-brilha/ProfessorBrilhaBubble";
import { useAppState } from "@/core/store";

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
  const { handleBack } = useBackNavigation();
  const { activeChild, session } = useAppState();
  const found = getAulaFromCurso(cursoSlug, aulaSlug);

  // Bloqueio de série para Player v4
  useEffect(() => {
    if (activeChild && found && (found as any).curso) {
      const isAdmin = session?.user?.user_metadata?.role === "admin" || (session?.user as any)?.role === "admin";
      if (!isAdmin) {
        const cursoAno = (found as any).curso.ano;
        if (cursoAno && cursoAno !== activeChild.serie) {
           const isEI = activeChild.serie.includes("Infantil") || activeChild.serie.includes("Pré");
           if (isEI && cursoAno === "Educação Infantil") return;
           navigate({ to: "/escola-brilha" });
        }
      }
    }
  }, [activeChild, session, navigate, found]);

  if (!found) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
        Aula não encontrada nesse curso.
      </div>
    );
  }

  return (
    <>
      <PlayerV4
        aula={found.aula}
        cursoSlug={cursoSlug}
        voltarPara={navContext?.isPlanFlow ? navContext.returnPath : `/escola-brilha/curso/${cursoSlug}`}
        onConcluir={() => {
          try {
            const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
            const list: string[] = raw ? JSON.parse(raw) : [];
            if (!list.includes(aulaSlug)) list.push(aulaSlug);
            localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(list));
          } catch {
            /* ignore */
          }
          
          if (navContext?.isPlanFlow) {
             handleBack(navigate);
             return;
          }

          if (!handleBack(navigate)) {
            navigate({
              to: "/escola-brilha/curso/$slug",
              params: { slug: cursoSlug },
            });
          }
        }}
      />
      <ProfessorBrilhaBubble
        contexto={{
          cursoSlug,
          aulaSlug,
          cursoTitulo: (found as any).curso?.titulo,
          aulaTitulo: (found.aula as any)?.titulo,
          serie: (found as any).curso?.ano,
          disciplina: (found as any).curso?.disciplina,
          bncc: (found.aula as any)?.bncc,
        }}
      />
    </>
  );
}

