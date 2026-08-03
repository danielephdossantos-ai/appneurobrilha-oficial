import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-forca-da-noticia";
import { aula2 } from "./aula-02-reportagem-e-investigacao";
import { aula3 } from "./aula-03-fato-ou-opiniao";
import { aula4 } from "./aula-04-o-corpo-da-noticia";

// BNCC 6º Ano Unidade 1
// EF06LP01, EF06LP02: Notícia, Reportagem, Lide, Pirâmide Invertida.

export const unidade1: UnidadePortugues = {
  numero: 1,
  titulo: "A Investigação Jornalística",
  subtitulo: "A força da notícia",
  descricao: "Mergulho na estrutura das notícias, do lide ao corpo do texto.",
  corTema: "#2563eb",
  slug: "unidade-1-investigacao",
  aulas: [aula1, aula2, aula3, aula4],
};

