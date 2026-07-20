import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PlayerPortuguesEI } from "@/escola-brilha/curso-portugues-ei/PlayerPortuguesEI";
import {
  cursoLerComAurora,
  getAulaLerComAurora,
} from "@/escola-brilha/curso-ler-com-aurora/aulas";

/**
 * Player de uma missão do curso "Ler com Aurora — Fase 1".
 * Reusa PlayerPortuguesEI (audio-first, jogos por imagem).
 * URL: /escola-brilha/ler-com-aurora/<slug-da-aula>
 */
export const Route = createFileRoute("/escola-brilha/ler-com-aurora/$aula")({
  head: () => ({ meta: [{ title: "Ler com Aurora — Missão" }] }),
  component: AulaLerComAuroraRoute,
});

function AulaLerComAuroraRoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const aula = getAulaLerComAurora(aulaSlug);

  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Missão não encontrada.</p>
          <Link to="/escola-brilha/ler-com-aurora" className="underline text-yellow-300">
            Voltar para a trilha
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PlayerPortuguesEI
      curso={cursoLerComAurora}
      aula={aula}
      voltarPara="/escola-brilha/ler-com-aurora"
      onConcluir={() => {
        try {
          const key = "eb.ler-aurora.concluidas";
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
          // marca streak diário (uma missão/dia)
          localStorage.setItem("eb.ler-aurora.ultimo-dia", new Date().toISOString().slice(0, 10));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/ler-com-aurora" });
      }}
    />
  );
}
