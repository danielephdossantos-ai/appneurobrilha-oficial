import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-globalizacao-digital";
import { aula05 } from "./aula-05-brasil-globalizacao";
import { aula06 } from "./aula-06-neoliberalismo";
import { aula07 } from "./aula-07-onu-organismos";
import { aula02 } from "./aula-02-brasil-pos-1989";
import { aula03 } from "./aula-03-sociedade-civil";
import { aula04 } from "./aula-04-violencia-marginalizados";

export const unidade7: UnidadeGeoV1 = {
  slug: "unidade-7",
  numero: 7,
  titulo: "Globalização e Mundo de Hoje",
  subtitulo: "1991–2025: internet, clima e IA",
  descricao:
    "Fim da URSS, internet, redes sociais, pandemia, IA. A Teia toda desemboca no presente — e vocês são o próximo capítulo.",
  corTema: "#0891b2",
  aulas: [aula01, aula05, aula06, aula07, aula02, aula03, aula04],
};
