import type { Unidade } from "../../types";
import { aula01_fatorComum } from "./aula-01-fator-comum";
import { aula02_agrupamento } from "./aula-02-agrupamento";
import { aula03_diferencaQuad } from "./aula-03-diferenca-quadrados";
import { aula04_trinomio } from "./aula-04-trinomio";
import { aula05_missao } from "./aula-05-missao";

export const unidade3: Unidade = {
  slug: "unidade-3-fatoracao",
  numero: 3,
  titulo: "Fatoração",
  subtitulo: "Desmontar expressões em produto de fatores",
  descricao:
    "Se U2 foi MONTAR expressões, U3 é DESMONTAR. Brilha aprende a transformar somas em produtos: fator comum, agrupamento, diferença de quadrados e trinômio quadrado perfeito.",
  corTema: "#0ea5e9",
  aulas: [aula01_fatorComum, aula02_agrupamento, aula03_diferencaQuad, aula04_trinomio, aula05_missao],
};
