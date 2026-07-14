import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ciências 6º Ano — "Academia Científica Escola Brilha"
 * Entrada no Fundamental II. O app deixa de ser infantil e vira
 * plataforma de investigação: laboratórios virtuais, vídeos
 * científicos reais, gráficos, evidências e método rigoroso.
 * O protagonista é o próprio aluno — Aurora vira orientadora discreta.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-6ano",
  disciplina: "Ciências",
  ano: "6º Ano",
  titulo: "Academia Científica Escola Brilha",
  descricao:
    "Você foi aprovado na Academia. Sete laboratórios de pesquisa: método científico, vida, ecossistemas, matéria, energia, universo e projeto final. Fotografia real + vídeos científicos.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#020617",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
