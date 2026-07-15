import { createFileRoute, redirect } from "@tanstack/react-router";

// Redireciona para o curso no padrão único (mesmo player das Ciências).
export const Route = createFileRoute("/escola-brilha/arte-1ano/")({
  beforeLoad: () => {
    throw redirect({ to: "/escola-brilha/curso/$slug", params: { slug: "arte-1ano" } });
  },
  component: () => null,
});
