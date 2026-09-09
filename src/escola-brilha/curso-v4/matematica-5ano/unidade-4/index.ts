import type { Unidade } from "../../types";
import { aula01_divisaoPor1Digito } from "./aula-01-divisao-por-1-digito";
import { aula02_divisaoComResto } from "./aula-02-divisao-com-resto";
import { aula03_zeroNoQuociente } from "./aula-03-zero-no-quociente";
import { aula04_divisaoPor2Digitos } from "./aula-04-divisao-por-2-digitos";
import { aula05_problemas } from "./aula-05-problemas";
import { aula06_missaoFinal } from "./aula-06-missao-final";

export const unidade4: Unidade = {
  slug: "unidade-4-dividindo",
  numero: 4,
  titulo: "Dividindo no Império",
  subtitulo: "Divisão longa por 1 e 2 dígitos, com e sem resto",
  descricao:
    "Brilha domina a divisão pela CHAVE: por 1 dígito, com resto, com zero no quociente e por 2 dígitos. Usa a tabuada de referência sempre à mão.",
  corTema: "#0e7490",
  aulas: [
    aula01_divisaoPor1Digito,
    aula02_divisaoComResto,
    aula03_zeroNoQuociente,
    aula04_divisaoPor2Digitos,
    aula05_problemas,
    aula06_missaoFinal,
  ],
};
