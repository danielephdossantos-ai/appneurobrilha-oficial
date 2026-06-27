import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { ETAPA_POR_ID } from "@/modules/alfabetizacao/data/etapas";
import { AtividadePlayer } from "@/modules/alfabetizacao/components/AtividadePlayer";
import { useProgressoAlfa } from "@/modules/alfabetizacao/hooks/useProgressoAlfa";

export const Route = createFileRoute("/alfabetizacao/etapa/$etapaId")({
  component: EtapaPage,
});

function EtapaPage() {
  const { etapaId } = useParams({ from: "/alfabetizacao/etapa/$etapaId" });
  const navigate = useNavigate();
  const { activeChild, isLoading } = useAppState();
  const etapa = ETAPA_POR_ID[etapaId];
  const { progresso, registrarAcerto } = useProgressoAlfa(activeChild?.id ?? "");

  if (isLoading) {
    return <div className="min-h-screen grid place-items-center text-slate-500">Carregando…</div>;
  }

  if (!activeChild) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center gap-4">
        <p className="text-slate-600">Cadastre uma criança para começar.</p>
        <button
          onClick={() => navigate({ to: "/painel-pais" })}
          className="px-5 py-2 rounded-full bg-indigo-600 text-white font-bold"
        >
          Ir para Painel
        </button>
      </div>
    );
  }

  if (!etapa) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center gap-4">
        <p className="text-slate-600">Categoria não encontrada.</p>
        <button
          onClick={() => navigate({ to: "/neuro-treino" })}
          className="px-5 py-2 rounded-full bg-indigo-600 text-white font-bold"
        >
          Voltar
        </button>
      </div>
    );
  }

  const acertosAtuais = progresso[etapa.id] ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <AtividadePlayer
          etapa={etapa}
          acertosAtuais={acertosAtuais}
          childId={activeChild.id}
          onAcerto={() => registrarAcerto(etapa.id)}
          onSair={() => navigate({ to: "/neuro-treino" })}
        />
      </div>
    </div>
  );
}
