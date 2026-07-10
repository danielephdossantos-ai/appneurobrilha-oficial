import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Geografia 7º Ano — Território Brasileiro
 * 7 unidades, 11 cenas visuais interativas cada, linguagem adolescente.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-7ano-v2",
  disciplina: "Geografia",
  ano: "7º Ano",
  titulo: "Território Brasileiro",
  descricao:
    "Da formação territorial do Brasil às commodities atuais: 11 cenas visuais por aula, linguagem adolescente.",
  corPrimaria: "#16a34a",
  corSecundaria: "#065f46",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
