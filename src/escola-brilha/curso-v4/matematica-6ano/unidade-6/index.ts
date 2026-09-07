import type { Unidade } from "../../types";
import { aula01_igualdade } from "./aula-01-igualdade";
import { aula02_partilhas } from "./aula-02-partilhas";
import { aula04_equacoes } from "./aula-04-equacoes";

export const unidade6: Unidade = {
  slug: "unidade-6-igualdade-partilhas",
  numero: 6,
  titulo: "Igualdade e Partilhas",
  subtitulo: "Equilíbrio nos dois membros, valor desconhecido e partilhas desiguais",
  descricao: "Brilha aprende por que uma igualdade permanece verdadeira e resolve partilhas desiguais por relações aditivas e multiplicativas.",
  corTema: "#7c3aed",
  aulas: [aula01_igualdade, aula02_partilhas, aula04_equacoes],
};
