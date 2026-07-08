import { createFileRoute, notFound } from "@tanstack/react-router";
import { UnidadeLugares } from "@/escola-brilha/geo-2ano/unidade-1-lugares";

export const Route = createFileRoute("/escola-brilha/geo-2ano/$aula")({
  head: () => ({
    meta: [
      { title: "Os Lugares Onde Vivemos — Geografia 2º Ano · Neuro Brilha" },
      {
        name: "description",
        content:
          "Missão do Investigador: descubra por que cada casa foi construída de um jeito diferente. Apartamento, casa de rua, fazenda, casa ribeirinha e oca da aldeia.",
      },
      { property: "og:title", content: "Os Lugares Onde Vivemos — Neuro Brilha" },
      {
        property: "og:description",
        content: "Aula gamificada de Geografia (EF02GE01) com GeoScanner, Laboratório e Minijogo do Arquiteto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AulaGeoPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <p className="text-lg font-bold text-slate-700">Aula não encontrada.</p>
    </div>
  ),
});

function AulaGeoPage() {
  const { aula } = Route.useParams();
  if (aula !== "unidade-1-lugares" && aula !== "EF02GE01") {
    throw notFound();
  }
  return <UnidadeLugares />;
}
