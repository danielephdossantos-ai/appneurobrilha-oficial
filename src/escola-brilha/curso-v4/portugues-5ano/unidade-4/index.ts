import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-noticia-e-reportagem";
import { aula2 } from "./aula-02-biografia-e-relato";
import { aula3 } from "./aula-03-resenha-e-carta-argumentativa";
import { aula4 } from "./aula-04-propaganda-e-persuasao";

/**
 * Unidade 4 — Território dos Gêneros
 * -------------------------------------------------------------
 * Da notícia à propaganda, passando pela biografia e pela carta
 * argumentativa: aqui o aluno reconhece os diferentes gêneros
 * textuais que circulam no dia a dia e as intenções por trás deles.
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Território dos Gêneros",
  subtitulo: "Cada texto tem um jeito e uma intenção",
  descricao:
    "Nesta unidade o aluno explora quatro territórios: a notícia e a reportagem, a biografia e o relato pessoal, a resenha e a carta argumentativa, e por fim a propaganda, aprendendo a reconhecer como cada gênero é construído e o que ele quer do leitor.",
  corTema: "#34d399",
  aulas: [aula1, aula2, aula3, aula4],
};
