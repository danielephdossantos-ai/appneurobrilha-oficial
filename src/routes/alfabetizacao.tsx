import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { TrilhaAlfa } from "@/modules/alfabetizacao/components/TrilhaAlfa";

export const Route = createFileRoute("/alfabetizacao")({
  component: AlfabetizacaoPage,
});

function AlfabetizacaoPage() {
  const { activeChild, isLoading } = useAppState();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Carregando…
      </div>
    );
  }

  if (!activeChild) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center gap-4">
        <p className="text-slate-600">Cadastre uma criança para começar a alfabetização.</p>
        <button
          onClick={() => navigate({ to: "/painel-pais" })}
          className="px-5 py-2 rounded-full bg-indigo-600 text-white font-bold"
        >
          Ir para Painel
        </button>
      </div>
    );
  }

  return <TrilhaAlfa childId={activeChild.id} childName={activeChild.nome} />;
}
