import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-carta-e-diario";
import { aula02 } from "./aula-02-receita-do-bolo-secreto";
import { aula03 } from "./aula-03-cartaz-que-convence";
import { aula04 } from "./aula-04-pesquisa-e-apresentacao";

/**
 * Unidade 8 — Os Textos do Mundo Real
 * -------------------------------------------------------------
 * Fase 7 do contrato do 3º ano: fecha a cobertura BNCC com
 * PRODUÇÃO DE TEXTO POR GÊNERO e ORALIDADE FORMAL.
 *
 * 1) Carta e diário (formatação, parágrafo, pronomes sem repetir).
 * 2) Receita e regra de jogo (texto instrucional, verbo que manda).
 * 3) Cartaz e anúncio (persuasão, slogan, fato x promessa).
 * 4) Pesquisa, apresentação oral e leitura dramatizada.
 */
export const unidade8: UnidadePortugues = {
  slug: "unidade-8",
  numero: 8,
  titulo: "Os Textos do Mundo Real",
  subtitulo: "Carta, receita, cartaz e pesquisa apresentada",
  descricao:
    "O clube sai do caderno e vai para a vida: escrever carta que alguém recebe, receita que alguém cozinha, cartaz que convence a escola e pesquisa apresentada em voz alta para a turma.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04],
};
