import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-reportagem";
import { aula02 } from "./aula-02-divulgacao-cientifica";
import { aula03 } from "./aula-03-verbete-infografico";
import { aula04 } from "./aula-04-carta-leitor-anuncio";

/**
 * Unidade 4 — Território dos Textos
 * Tema: gêneros que informam, explicam e convencem — cada um com
 * missão própria dentro da expedição de escrita.
 *
 * Ao concluir esta unidade o estudante deverá ser capaz de:
 *  - diferenciar notícia de reportagem, reconhecendo fontes,
 *    entrevistas e dados como marcas da apuração jornalística;
 *  - produzir e compreender textos de divulgação científica,
 *    explicando fenômenos com clareza, usando glossário e legenda;
 *  - ler e escrever verbetes e infográficos, dois jeitos diferentes
 *    de organizar informação (definição x etapas de um processo);
 *  - reconhecer e produzir carta de leitor e anúncio, textos que
 *    argumentam e convencem, pensando sempre no público-alvo.
 *
 * Ao final da unidade o estudante recebe o Crachá do
 * Repórter-Explorador.
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Território dos Textos",
  subtitulo: "Cada gênero tem uma missão: informar, explicar ou convencer",
  descricao:
    "A expedição chega ao território mais denso da jornada: aqui cada texto tem uma missão própria. O time investiga um fato a fundo para virar reportagem, explica um fenômeno da natureza com clareza científica, organiza descobertas em verbetes e infográficos, e usa a força da palavra para convencer uma comunidade a agir — a carta de leitor e o anúncio.",
  corTema: "#10b981",
  aulas: [aula01, aula02, aula03, aula04],
};
