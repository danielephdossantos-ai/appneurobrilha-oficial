import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-tema-e-ideia-central";
import { aula2 } from "./aula-02-inferencia-pistas-do-texto";
import { aula3 } from "./aula-03-fato-e-opiniao";
import { aula4 } from "./aula-04-resumo-do-detetive";

export const unidade1: UnidadePortugues = {
  numero: 1,
  titulo: "O Detetive da Leitura",
  subtitulo: "Ler nas entrelinhas",
  descricao: "A investigação começa distinguindo o tema da ideia central e separando fatos de opiniões.",
  corTema: "#22d3ee",
  slug: "unidade-1-detetive-leitura",
  aulas: [aula1, aula2, aula3, aula4],
};
