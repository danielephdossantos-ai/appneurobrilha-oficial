import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 3º Ano — "O Livro das Memórias do Brasil"
 * (SPEB 1.0 · Cláusula 14 · Fase 3 · Unidade 1 em produção)
 *
 * Reaproveita o engine PlayerGeoV1 (11 cenas, mesmo esqueleto do 3º–5º
 * de Geografia). As cenas são componentes visuais reutilizáveis; o que
 * muda é o script da Aurora, os assets históricos e a narrativa do
 * Livro das Memórias. Se depois de validado for preciso rebrand visual
 * dos componentes, migramos para um PlayerHistV1 dedicado.
 */
const curso: CursoGeoV1 = {
  slug: "historia-3ano",
  disciplina: "História",
  ano: "3º Ano",
  titulo: "O Livro das Memórias do Brasil",
  descricao:
    "Brilha vira Investigador da História com Aurora e o Guardião da Memória. A cada aula recupera uma página perdida do Livro das Memórias, usando a Lupa do Historiador para revelar pistas em fotografias, cartas, objetos e mapas antigos.",
  corPrimaria: "#b45309", // âmbar/sepia — cor de arquivo antigo
  corSecundaria: "#1c1917",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
