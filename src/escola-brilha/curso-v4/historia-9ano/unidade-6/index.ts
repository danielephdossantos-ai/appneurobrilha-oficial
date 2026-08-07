import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-ditadura-militar";
import { aula02 } from "./aula-02-golpe-memoria-justica";
import { aula03 } from "./aula-03-resistencias-reorganizacao";
import { aula04 } from "./aula-04-indigenas-quilombolas-desenvolvimentismo";
import { aula05 } from "./aula-05-diretas-ja";
import { aula06 } from "./aula-06-cf88-direitos";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Ditadura Militar Brasileira",
  subtitulo: "1964–1985: censura, resistência e redemocratização",
  descricao:
    "Do golpe aos anos de chumbo, das Diretas Já à Constituição de 1988. A democracia brasileira que vivemos foi conquistada nas ruas.",
  corTema: "#059669",
  aulas: [aula01, aula02, aula03, aula04, aula05, aula06],
};
