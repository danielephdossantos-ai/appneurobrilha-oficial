import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-noticia-quem-o-que";
import { aula02 } from "./aula-02-fato-ou-opiniao";
import { aula03 } from "./aula-03-relato-pessoal";
import { aula04 } from "./aula-04-texto-instrucional";

/**
 * Unidade 4 — Redação do Caso
 * Tema: gêneros informativos — escrever para informar de verdade.
 *
 * Ao concluir esta unidade o estudante deverá ser capaz de:
 *  - reconhecer notícia, identificando manchete, lide e corpo;
 *  - distinguir fato de opinião, com base em marcas linguísticas;
 *  - produzir um relato pessoal em primeira pessoa, respeitando a
 *    ordem dos acontecimentos com marcadores de tempo;
 *  - compreender e produzir texto instrucional (receita/regra de
 *    jogo), com verbos no imperativo, lista de materiais e passos
 *    numerados.
 *
 * Ao final da unidade o estudante recebe o crachá de Repórter
 * do Clube dos Detetives da Palavra.
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Redação do Caso",
  subtitulo: "Notícia, relato e instrução: escrever para informar",
  descricao:
    "O Clube dos Detetives da Palavra assume sua missão mais séria: virar repórteres de verdade. Investigam casos do bairro para escrever notícias, aprendem a separar fato de opinião, registram experiências em relatos pessoais e criam manuais que ensinam qualquer pessoa a fazer algo, passo a passo.",
  corTema: "#10b981",
  aulas: [aula01, aula02, aula03, aula04],
};
