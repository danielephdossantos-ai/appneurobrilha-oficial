import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso PILOTO: Geografia 6º Ano — formato 5º Ano (PlayerGeoV1)
 * 11 cenas visuais + linguagem adolescente. Apenas Unidade 1 pra validação.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-6ano-v2",
  disciplina: "Geografia",
  ano: "6º Ano (Piloto)",
  titulo: "Explorador Planetário",
  descricao:
    "Piloto do 6º Ano no formato do 5º Ano: 11 cenas visuais interativas com linguagem adolescente. A Terra no espaço, Rotação, Translação e Inclinação.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
