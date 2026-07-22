import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { getAulaDlx } from "@/escola-brilha/dislexia/registry";
import { PlayerDislexia } from "@/escola-brilha/dislexia/PlayerDislexia";

export const Route = createFileRoute("/escola-brilha/dislexia/$aula")({
  head: () => ({
    meta: [
      { title: "Aula — Trilha da Leitura" },
      {
        name: "description",
        content: "Aula do programa Orton-Gillingham para dislexia.",
      },
    ],
  }),
  component: AulaDlxRoute,
});

function AulaDlxRoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const aula = getAulaDlx(aulaSlug);

  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6 text-center">
        <div>
          <p className="text-xl mb-4">Aula não encontrada.</p>
          <Link
            to="/escola-brilha/dislexia"
            className="underline text-orange-300"
          >
            Voltar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PlayerDislexia
      aula={aula}
      onSair={() => navigate({ to: "/escola-brilha/dislexia" })}
      onConcluir={() => {
        try {
          const key = "eb.dislexia.concluidas";
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/dislexia" });
      }}
    />
  );
}
