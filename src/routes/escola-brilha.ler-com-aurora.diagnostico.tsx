import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";

/**
 * O antigo Diagnóstico Dia 0 foi absorvido pela anamnese respondida pelo
 * adulto. Esta rota agora só redireciona para a anamnese da criança ativa
 * (ou para o painel de pais, quando não há criança selecionada).
 */
export const Route = createFileRoute("/escola-brilha/ler-com-aurora/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico · Ler com Aurora" },
      {
        name: "description",
        content:
          "O diagnóstico da leitura agora é feito pelo adulto dentro da anamnese. O app usa as respostas para escolher a fase inicial da criança.",
      },
    ],
  }),
  component: DiagnosticoRedirect,
});

function DiagnosticoRedirect() {
  const { activeChild } = useAppState();
  if (activeChild?.id) {
    return <Navigate to="/anamnese/$childId" params={{ childId: activeChild.id }} replace />;
  }
  return <Navigate to="/painel-pais" replace />;
}
