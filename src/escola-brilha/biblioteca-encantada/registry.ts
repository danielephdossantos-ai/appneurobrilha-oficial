import type { TrilhaBE } from "./types";
import { aula01Olha } from "./aulas/aula-01-olha";
import { aula02Quero } from "./aulas/aula-02-quero";
import { aula03Mais } from "./aulas/aula-03-mais";
import { aula04Acabou } from "./aulas/aula-04-acabou";
import { aula05Oi } from "./aulas/aula-05-oi";
import { aula06QueroVer } from "./aulas/aula-06-quero-ver";
import { aula07Grande } from "./aulas/aula-07-grande";
import { aula08Dorme } from "./aulas/aula-08-dorme";

export const trilhaBibliotecaEncantada: TrilhaBE = {
  slug: "biblioteca-encantada",
  titulo: "A Biblioteca Encantada",
  descricao:
    "Curso de linguagem para os anos iniciais, neuroinclusivo. Une ABA, método fônico, TEACCH, PECS, Denver e Orton-Gillingham. Uma aula por vez, no ritmo da criança.",
  aulas: [
    aula01Olha,
    aula02Quero,
    aula03Mais,
    aula04Acabou,
    aula05Oi,
    aula06QueroVer,
    aula07Grande,
    aula08Dorme,
  ],
};

export function getAulaBE(slug: string) {
  return trilhaBibliotecaEncantada.aulas.find((a) => a.slug === slug);
}
