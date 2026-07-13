import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-arvore-genealogica";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Minha História e Minha Família",
  subtitulo: "Árvore Genealógica e Álbum",
  descricao:
    "Investigar as origens da família e montar a segunda sala do museu: a Árvore Genealógica e o Álbum de Família.",
  corTema: "#b45309",
  aulas: [aula01],
};
