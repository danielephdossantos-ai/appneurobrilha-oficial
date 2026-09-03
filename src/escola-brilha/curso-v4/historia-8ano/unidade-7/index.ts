import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-imperialismo";
import { aula02 } from "./aula-02-produtos-africanos-imperialismo";
import { aula03 } from "./aula-03-eua-america-latina";

export const unidade7: UnidadeGeoV1 = {
  slug: "unidade-7",
  numero: 7,
  titulo: "Imperialismo e a Partilha do Mundo",
  subtitulo: "O cetro global europeu",
  descricao:
    "2ª Revolução Industrial exige matérias-primas e mercados. Conferência de Berlim retalha a África. Missão 'civilizatória' esconde o motor real: lucro. Resistência africana e asiática deixa marcas até hoje.",
  corTema: "#1e3a8a",
  aulas: [aula01, aula02, aula03],
};
