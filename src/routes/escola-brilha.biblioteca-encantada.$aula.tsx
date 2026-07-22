import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { getAulaBE } from "@/escola-brilha/biblioteca-encantada/registry";
import { PlayerBibliotecaEncantada } from "@/escola-brilha/biblioteca-encantada/PlayerBibliotecaEncantada";

export const Route = createFileRoute(
  "/escola-brilha/biblioteca-encantada/$aula",
)({
  head: () => ({
    meta: [
      { title: "Aula — Biblioteca Encantada" },
      {
        name: "description",
        content: "Aula do curso Biblioteca Encantada.",
      },
    ],
  }),
  component: AulaBERoute,
});

function AulaBERoute() {
  const { aula: aulaSlug } = Route.useParams();
  const navigate = useNavigate();
  const aula = getAulaBE(aulaSlug);

  if (!aula) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-6 text-center">
        <div>
          <p className="text-xl mb-4">Aula não encontrada.</p>
          <Link
            to="/escola-brilha/biblioteca-encantada"
            className="underline text-purple-300"
          >
            Voltar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PlayerBibliotecaEncantada
      aula={aula}
      onSair={() =>
        navigate({ to: "/escola-brilha/biblioteca-encantada" })
      }
      onConcluir={() => {
        try {
          const key = "eb.biblioteca-encantada.concluidas";
          const raw = localStorage.getItem(key);
          const list: string[] = raw ? JSON.parse(raw) : [];
          if (!list.includes(aulaSlug)) list.push(aulaSlug);
          localStorage.setItem(key, JSON.stringify(list));
        } catch {
          /* ignore */
        }
        navigate({ to: "/escola-brilha/biblioteca-encantada" });
      }}
    />
  );
}
