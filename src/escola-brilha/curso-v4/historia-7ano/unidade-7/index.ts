import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-brasil-colonial";
import { aula02 } from "./aula-02-territorios-populacoes";
import { aula03 } from "./aula-03-comercio-africa-asia";

export const unidade7: UnidadeGeoV1 = {
  slug: "unidade-7",
  numero: 7,
  titulo: "O Brasil Colonial: Açúcar, Escravidão e Resistência",
  subtitulo: "Engenho, senzala e Palmares",
  descricao:
    "Brilha e Aurora fecham a Bússola no Brasil colonial. Capitanias, engenhos de açúcar, escravidão africana e o Quilombo dos Palmares destravam a Engrenagem 7 — final.",
  corTema: "#0f766e",
  aulas: [aula01, aula02, aula03],
};
