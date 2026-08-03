import type { UnidadePortugues } from "../../types";
import { aula1 as aula01 } from "./aula-01-noticia-e-reportagem";
import { aula2 as aula02 } from "./aula-02-biografia-e-relato";
import { aula3 as aula03 } from "./aula-03-resenha-e-carta-argumentativa";
import { aula4 as aula04 } from "./aula-04-propaganda-e-persuasao";

export const unidade4: UnidadePortugues = {
  numero: 4,
  titulo: "Cada Texto em seu Lugar",
  subtitulo: "Reconhecer cada gênero",
  descricao: "Mergulho nos gêneros do dia a dia: notícia, biografia, resenha e propaganda.",
  corTema: "#0e7490",
  slug: "unidade-4-cada-texto",
  aulas: [aula01, aula02, aula03, aula04],
};
