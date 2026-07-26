import type { Unidade } from "../../types";
import { aula01_ideiaDeFuncao } from "./aula-01-ideia-de-funcao";
import { aula02_funcaoAfim } from "./aula-02-funcao-afim";
import { aula03_zeroEGraficos } from "./aula-03-zero-e-graficos";
import { aula04_funcaoQuadratica } from "./aula-04-funcao-quadratica";
import { aula05_missaoModelagem } from "./aula-05-missao-modelagem";

export const unidade3: Unidade = {
  slug: "unidade-3-funcoes",
  numero: 3,
  titulo: "Funções: a Máquina que Transforma",
  subtitulo: "De uma regra que transforma números até a curva do lucro máximo",
  descricao:
    "Nesta unidade você vira o engenheiro da máquina das funções: descobre a lei de formação, desenha gráficos, calcula raízes, entende o formato de parábolas e usa tudo isso para tomar decisões reais, como comparar planos e maximizar o lucro de um negócio.",
  corTema: "#10b981",
  aulas: [
    aula01_ideiaDeFuncao,
    aula02_funcaoAfim,
    aula03_zeroEGraficos,
    aula04_funcaoQuadratica,
    aula05_missaoModelagem,
  ],
};
