import type { UnidadePortugues } from "../../types";
import { aula1 as aula01 } from "./aula-01-concordancia-nominal-e-verbal";
import { aula2 as aula02 } from "./aula-02-registro-formal-e-informal";
import { aula3 as aula03 } from "./aula-03-pronomes-que-evitam-repeticao";
import { aula4 as aula04 } from "./aula-04-tempos-verbais-passado-presente-futuro";

export const unidade3: UnidadePortugues = {
  numero: 3,
  titulo: "O Motor das Frases",
  subtitulo: "Montar frases firmes",
  descricao: "Concordância, pronomes, tempos verbais e a diferença entre o registro formal e informal.",
  corTema: "#0891b2",
  slug: "unidade-3-motor-frases",
  aulas: [aula01, aula02, aula03, aula04],
};
