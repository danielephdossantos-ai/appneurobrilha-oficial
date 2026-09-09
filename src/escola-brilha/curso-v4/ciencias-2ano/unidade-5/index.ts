import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-agua-luz";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Água e Luz",
  subtitulo: "O que planta precisa pra viver",
  descricao: "Recuperar o Cristal da Água e da Luz: experimento com 4 tubos e o que planta precisa.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
