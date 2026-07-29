import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-fato-e-opiniao";

/**
 * Unidade 1 — Protocolo do Leitor Crítico
 * -------------------------------------------------------------
 * Abre o curso "Mestres da Palavra" (5º ano). A unidade instala no
 * leitor o primeiro filtro do pensamento crítico: distinguir o que é
 * FATO (verificável) do que é OPINIÃO (avaliação de quem escreve).
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Protocolo do Leitor Crítico",
  subtitulo: "Nem tudo que está escrito é verdade comprovada",
  descricao:
    "A primeira missão de um Mestre da Palavra é aprender a filtrar o que lê: reconhecer fatos que podem ser verificados, identificar opiniões disfarçadas de informação e перceber as marcas de linguagem que denunciam cada uma.",
  corTema: "#8B5CF6",
  aulas: [aula1],
};
