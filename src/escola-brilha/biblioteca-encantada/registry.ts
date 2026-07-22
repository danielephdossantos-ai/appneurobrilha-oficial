import type { TrilhaBE } from "./types";
import { aula01Olha } from "./aulas/aula-01-olha";
import { aula02Quero } from "./aulas/aula-02-quero";
import { aula03Mais } from "./aulas/aula-03-mais";
import { aula04Acabou } from "./aulas/aula-04-acabou";

export const trilhaBibliotecaEncantada: TrilhaBE = {
  slug: "biblioteca-encantada",
  titulo: "A Biblioteca Encantada",
  descricao:
    "Curso de linguagem para os anos iniciais, neuroinclusivo. Une ABA, método fônico, TEACCH, PECS, Denver e Orton-Gillingham. Uma aula por vez, no ritmo da criança.",
  aulas: [aula01Olha, aula02Quero, aula03Mais, aula04Acabou],
};

export function getAulaBE(slug: string) {
  return trilhaBibliotecaEncantada.aulas.find((a) => a.slug === slug);
}
