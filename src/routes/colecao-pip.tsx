import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { ColecaoMascotes } from "@/components/ColecaoMascotes";

export const Route = createFileRoute("/colecao-pip")({
  head: () => ({
    meta: [
      { title: "Coleção de Mascotes · NeuroBrilha Kids" },
      { name: "description", content: "Todos os mascotes Pip e Pipa nos tamanhos Baby, Grande e Teen." },
      { property: "og:title", content: "Coleção de Mascotes Pip e Pipa" },
      { property: "og:description", content: "Desbloqueie fantasias com BrilhoCoins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <Shell><ColecaoMascotes /></Shell>,
});

