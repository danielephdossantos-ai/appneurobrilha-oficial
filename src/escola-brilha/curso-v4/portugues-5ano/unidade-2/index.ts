import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-silaba-tonica-e-acento";
import { aula02 } from "./aula-02-regras-de-acentuacao";
import { aula03 } from "./aula-03-ortografia-de-uso";
import { aula04 } from "./aula-04-prefixos-e-sufixos";

export const unidade2: UnidadePortugues = {
  numero: 2,
  titulo: "A Oficina da Escrita Certa",
  slug: "unidade-2-escrita-certa",
  aulas: [aula01, aula02, aula03, aula04],
};
