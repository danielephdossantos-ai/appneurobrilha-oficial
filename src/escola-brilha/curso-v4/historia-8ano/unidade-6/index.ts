import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-independencia-brasil";
import { aula02 } from "./aula-02-disputas-politicas-imperio";
import { aula03 } from "./aula-03-revoltas-regenciais";
import { aula04 } from "./aula-04-fronteiras-conflitos";
import { aula05 } from "./aula-05-guerra-paraguai";
import { aula06 } from "./aula-06-legado-escravidao";
import { aula07 } from "./aula-07-tutela-participacao";
import { aula08 } from "./aula-08-politicas-indigenistas";
import { aula09 } from "./aula-09-romantismo-identidade";
import { aula10 } from "./aula-10-legados-acoes-afirmativas";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Independência do Brasil e o Império",
  subtitulo: "Uma coroa tropical, escravismo mantido",
  descricao:
    "D. Pedro I proclama a Independência sem revolução social. Constituição outorgada, Poder Moderador, ciclo do café e revoltas regenciais marcam o Brasil imperial.",
  corTema: "#065f46",
  aulas: [aula01, aula02, aula03, aula04, aula05, aula06, aula07, aula08, aula09, aula10],
};
