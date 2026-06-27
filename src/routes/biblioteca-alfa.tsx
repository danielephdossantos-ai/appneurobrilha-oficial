import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { BibliotecaHistorias } from "@/modules/alfabetizacao/components/BibliotecaHistorias";

export const Route = createFileRoute("/biblioteca-alfa")({
  component: BibliotecaPage,
});

function BibliotecaPage() {
  const { activeChild, isLoading } = useAppState();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando…</div>;
  }
  if (!activeChild) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <button
          onClick={() => navigate({ to: "/painel-pais" })}
          className="px-5 py-2 rounded-full bg-indigo-600 text-white font-bold"
        >
          Cadastre uma criança no Painel dos Pais
        </button>
      </div>
    );
  }
  return (
    <BibliotecaHistorias
      childId={activeChild.id}
      childName={activeChild.nome}
      onSair={() => navigate({ to: "/alfabetizacao" })}
    />
  );
}
