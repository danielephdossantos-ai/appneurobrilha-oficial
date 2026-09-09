import type { Unidade } from "../../types";
import { aula01_ideiaDeFracao } from "./aula-01-ideia-de-fracao";
import { aula02_fracoesEquivalentes } from "./aula-02-fracoes-equivalentes";
import { aula03_compararFracoes } from "./aula-03-comparar-fracoes";
import { aula04_decimais01 } from "./aula-04-decimais-decimos";
import { aula05_decimaisCentesimos } from "./aula-05-decimais-centesimos";
import { aula06_problemasFracoesDecimais } from "./aula-06-problemas-fracoes-decimais";
import { aula07_missaoFinalU5 } from "./aula-07-missao-final";

export const unidade5: Unidade = {
  slug: "unidade-5-fracoes-decimais",
  numero: 5,
  titulo: "Frações e Decimais",
  subtitulo: "Partes do inteiro, vírgula e dinheiro",
  descricao:
    "Brilha descobre que a matemática vai além dos inteiros: frações representam partes iguais, e decimais são as mesmas partes escritas com vírgula.",
  corTema: "#ec4899",
  aulas: [
    aula01_ideiaDeFracao,
    aula02_fracoesEquivalentes,
    aula03_compararFracoes,
    aula04_decimais01,
    aula05_decimaisCentesimos,
    aula06_problemasFracoesDecimais,
    aula07_missaoFinalU5,
  ],
};
