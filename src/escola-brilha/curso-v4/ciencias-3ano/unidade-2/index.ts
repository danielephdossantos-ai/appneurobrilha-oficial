import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-vertebrados-invertebrados";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "O Reino Animal",
  subtitulo: "Vertebrados e Invertebrados",
  descricao:
    "Os Guardiões classificam a fauna: quem tem esqueleto interno e quem não tem. Descubra o segredo da coluna vertebral.",
  corTema: "#059669",
  aulas: [aula01],
};
