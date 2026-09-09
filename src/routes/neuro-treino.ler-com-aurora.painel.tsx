import { createFileRoute, Navigate } from "@tanstack/react-router";

/**
 * O painel de acompanhamento agora vive somente na Área dos Pais.
 * A área da criança fica exclusivamente para as missões.
 */
export const Route = createFileRoute("/neuro-treino/ler-com-aurora/painel")({
  head: () => ({
    meta: [
      { title: "Painel do Adulto · Área dos Pais" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Navigate to="/painel-pais" replace />,
});
