import type { UnidadeArteV1 } from "../../types";
import { aula01 } from "./aula-01-luz-sombra-opacidade";

export const unidade1: UnidadeArteV1 = {
  slug: "unidade-1-luz-sombra-opacidade",
  numero: 1,
  titulo: "A Luz, a Sombra e o Mistério da Opacidade",
  subtitulo: "Uma expedição óptica pelo ateliê de Da Vinci e Caravaggio.",
  descricao:
    "Entramos no Laboratório da Ilusão Visu-Espacial com Brilha e a Professora Aurora. Descobrimos como materiais transparentes, translúcidos e opacos controlam a luz — e como os grandes mestres transformaram a física da luz em drama pictórico.",
  corTema: "#1e3a8a",
  aulas: [aula01],
};
