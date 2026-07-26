import type { Unidade } from "../../types";
import { aula01_conjuntosNumericos } from "./aula-01-conjuntos-numericos";
import { aula02_radiciacao } from "./aula-02-radiciacao";
import { aula03_operacoesRadicais } from "./aula-03-operacoes-radicais";
import { aula04_racionalizacao } from "./aula-04-racionalizacao";
import { aula05_potenciasNotacao } from "./aula-05-potencias-notacao";

export const unidade1: Unidade = {
  slug: "unidade-1-numeros-reais",
  numero: 1,
  titulo: "Números Reais e o Poder das Raízes",
  subtitulo: "De raízes quadradas à notação científica",
  descricao:
    "Brilha explora os números reais: conjuntos numéricos, radiciação, operações com radicais, racionalização de denominadores e as potências especiais que os cientistas usam para escrever do minúsculo ao gigantesco.",
  corTema: "#7c3aed",
  aulas: [
    aula01_conjuntosNumericos,
    aula02_radiciacao,
    aula03_operacoesRadicais,
    aula04_racionalizacao,
    aula05_potenciasNotacao,
  ],
};
