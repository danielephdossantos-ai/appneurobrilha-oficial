import { createFileRoute, redirect } from "@tanstack/react-router";

// Redireciona qualquer aula antiga pro player padrão (mesmo do Ciências).
export const Route = createFileRoute("/escola-brilha/arte-1ano/$unidade/$aula")({
  beforeLoad: ({ params }) => {
    // Mapeamento slug antigo → novo
    const map: Record<string, string> = {
      "aula-01-cores-primarias": "aula-01-primarias",
      "aula-02-mistura-de-cores": "aula-02-mistura",
      "aula-03-quentes-e-frias": "aula-03-quentes-frias",
      "aula-04-meu-primeiro-arco-iris": "aula-04-arco-iris",
    };
    const novo = map[params.aula] ?? params.aula;
    throw redirect({
      to: "/escola-brilha/aula-geo-v1/$curso/$aula",
      params: { curso: "arte-1ano", aula: novo },
    });
  },
  component: () => null,
});
