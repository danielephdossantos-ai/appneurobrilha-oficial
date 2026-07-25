import type { Unidade } from "../../types";
import { aula01_equacao } from "./aula-01-equacao";
import { aula02_problemas } from "./aula-02-problemas";
import { aula03_substituicao } from "./aula-03-substituicao";
import { aula04_adicao } from "./aula-04-adicao";
import { aula05_probSistemas } from "./aula-05-prob-sistemas";
import { aula06_missao } from "./aula-06-missao";

export const unidade4: Unidade = {
  slug: "unidade-4-equacoes-sistemas",
  numero: 4,
  titulo: "Equações e Sistemas 2×2",
  subtitulo: "Achar valores com uma ou duas incógnitas",
  descricao:
    "Brilha aprende a montar e resolver equações do 1º grau e sistemas 2×2 (substituição e adição). Álgebra vira ferramenta para resolver problemas de verdade.",
  corTema: "#0ea5e9",
  aulas: [aula01_equacao, aula02_problemas, aula03_substituicao, aula04_adicao, aula05_probSistemas, aula06_missao],
};
