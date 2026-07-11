import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";

/**
 * Curso: História 2º Ano — "Pequeno Historiador"
 *
 * Usa `tipoAula: "portugues"` de propósito — mesmo padrão visual
 * único do Fund. 1 ao 9 (PlayerPortuguesV4). Nenhum bloco novo.
 * Narrativa: Brilha e Aurora recuperam as 7 engrenagens do
 * Relógio do Tempo, montando o Museu Digital sala por sala.
 */
const curso: CursoPortugues = {
  slug: "historia-2ano",
  disciplina: "História",
  ano: "2º Ano",
  titulo: "Pequeno Historiador",
  descricao:
    "Brilha vira Pequeno Historiador com a Aurora. Investiga fontes, monta sua Linha do Tempo, a Árvore Genealógica e a História da Escola — recuperando as engrenagens do Relógio do Tempo.",
  corPrimaria: "#B45309",
  corSecundaria: "#0f172a",
  tipoAula: "portugues",
  unidades: [unidade1, unidade2, unidade3],
};

export default curso;
