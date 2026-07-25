import type { Unidade } from "../../types";
import { aula01_paralelas } from "./aula-01-paralelas";
import { aula02_polig } from "./aula-02-polig";
import { aula03_congruencia } from "./aula-03-congruencia";
import { aula04_mediatriz } from "./aula-04-mediatriz";
import { aula05_transformacoes } from "./aula-05-transformacoes";
import { aula06_missao } from "./aula-06-missao";

export const unidade6: Unidade = {
  slug: "unidade-6-geometria-oitavo",
  numero: 6,
  titulo: "Geometria: Ângulos, Congruência e Transformações",
  subtitulo: "Estruturas do plano",
  descricao:
    "Brilha explora retas paralelas cortadas por transversal, ângulos de polígonos, congruência de triângulos, construções (mediatriz/bissetriz) e transformações do plano.",
  corTema: "#0ea5e9",
  aulas: [aula01_paralelas, aula02_polig, aula03_congruencia, aula04_mediatriz, aula05_transformacoes, aula06_missao],
};
