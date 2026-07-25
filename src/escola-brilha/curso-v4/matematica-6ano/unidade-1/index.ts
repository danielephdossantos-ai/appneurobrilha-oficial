import type { Unidade } from "../../types";
import { aula01_bilhao } from "./aula-01-bilhao";
import { aula02_comparar } from "./aula-02-comparar";
import { aula03_arredondar } from "./aula-03-arredondar";
import { aula04_reta } from "./aula-04-reta";
import { aula05_negativos } from "./aula-05-negativos";
import { aula06_opostoModulo } from "./aula-06-oposto-modulo";
import { aula07_missao } from "./aula-07-missao";

export const unidade1: Unidade = {
  slug: "unidade-1-laboratorio-dos-numeros",
  numero: 1,
  titulo: "Bem-vindo(a) ao Laboratório dos Números",
  subtitulo: "Bilhões, comparação, arredondamento e reta numérica com negativos",
  descricao:
    "Brilha entra no Laboratório. Aprende a ler bilhões, testa hipóteses de comparação, arredonda com critério científico e descobre um mundo novo: os números NEGATIVOS.",
  corTema: "#7c3aed",
  aulas: [
    aula01_bilhao,
    aula02_comparar,
    aula03_arredondar,
    aula04_reta,
    aula05_negativos,
    aula06_opostoModulo,
    aula07_missao,
  ],
};
