import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-guerra-fria";
import { aula02 } from "./aula-02-tensoes-dentro-dos-blocos";
import { aula03 } from "./aula-03-ditaduras-america-latina";
import { aula04 } from "./aula-04-descolonizacao";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Guerra Fria",
  subtitulo: "1947–1991: o mundo em dois blocos",
  descricao:
    "EUA × URSS por 44 anos sem se enfrentar diretamente. Corrida nuclear, Muro de Berlim, Homem na Lua e guerras por procuração. Queda da URSS em 1991.",
  corTema: "#0891b2",
  aulas: [aula01, aula02, aula03, aula04],
};
