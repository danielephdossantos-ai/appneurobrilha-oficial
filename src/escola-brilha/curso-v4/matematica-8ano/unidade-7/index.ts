import type { Unidade } from "../../types";
import { aula01_areas } from "./aula-01-areas";
import { aula02_volumes } from "./aula-02-volumes";
import { aula03_pm } from "./aula-03-pm";
import { aula04_prob } from "./aula-04-prob";
import { aula05_media } from "./aula-05-media";
import { aula06_missao } from "./aula-06-missao";

export const unidade7: Unidade = {
  slug: "unidade-7-areas-volumes-probabilidade",
  numero: 7,
  titulo: "Áreas, Volumes e Probabilidade — Missão Final",
  subtitulo: "Fechamento do 8º ano",
  descricao:
    "Brilha calcula áreas de polígonos, volumes de prismas, conta possibilidades, calcula probabilidades e mede tendência central. Fecha o 8º ano com a missão final.",
  corTema: "#0ea5e9",
  aulas: [aula01_areas, aula02_volumes, aula03_pm, aula04_prob, aula05_media, aula06_missao],
};
