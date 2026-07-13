import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ciências 2º Ano — "Missão Cientistas da Natureza"
 *
 * Segue o padrão único do app (PlayerGeoV1 / 11 cenas travadas).
 * Skin visual custom foi descontinuada — usamos as mesmas cenas
 * das outras matérias, apenas com paleta roxa de laboratório.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-2ano",
  disciplina: "Ciências",
  ano: "2º Ano",
  titulo: "Missão Cientistas da Natureza",
  descricao:
    "Brilha e Aurora entram no Laboratório Escola Brilha pra recuperar os 7 cristais de energia. Cada aula é uma investigação científica: observar, criar hipótese, testar e registrar.",
  corPrimaria: "#a855f7",
  corSecundaria: "#1a0b2e",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
