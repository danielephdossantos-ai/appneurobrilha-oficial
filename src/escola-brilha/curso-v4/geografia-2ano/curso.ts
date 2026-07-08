import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";

/**
 * Curso: Geografia 2º Ano — "Explorador dos Lugares"
 *
 * Usa `tipoAula: "portugues"` de propósito — o discriminador roteia
 * o curso para o PlayerPortuguesV4, que é o padrão visual único do
 * Fund. 1 ao 9 para aulas com texto + leitura + interação. Nenhum
 * bloco visual novo foi criado.
 */
const curso: CursoPortugues = {
  slug: "geografia-2ano",
  disciplina: "Geografia",
  ano: "2º Ano",
  titulo: "Explorador dos Lugares",
  descricao:
    "Brilha vira Investigador de Moradias com Aurora. Descobre por que cada família mora de um jeito diferente — cidade, campo, rio, aldeia.",
  corPrimaria: "#0EA5E9",
  corSecundaria: "#0f172a",
  tipoAula: "portugues",
  unidades: [unidade1, unidade2],
};

export default curso;
