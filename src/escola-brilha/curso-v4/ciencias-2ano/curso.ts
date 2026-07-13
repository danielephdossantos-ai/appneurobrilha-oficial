import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ciências 2º Ano — "Kit do Jovem Cientista"
 *
 * Padrão visual único: reutiliza o PlayerPortuguesV4 (tipoAula "portugues"),
 * o mesmo player usado em Matemática/Português/História/Geografia do 2º ano.
 * Nenhum layout ou bloco novo — só encaixa o roteiro nos blocos existentes.
 */
const curso: CursoPortugues = {
  slug: "ciencias-2ano",
  disciplina: "Ciências",
  ano: "2º Ano",
  titulo: "Kit do Jovem Cientista",
  descricao:
    "Brilha entra no Laboratório Escola Brilha com Aurora. Aprende a observar, perguntar, testar e registrar — como um verdadeiro cientista.",
  corPrimaria: "#14b8a6",
  corSecundaria: "#0f172a",
  tipoAula: "portugues",
  unidades: [unidade1],
};

export default curso;
