import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Geografia 3º Ano — "Cartógrafo do Município"
 *
 * Único tipoAula "geo-v1" — usa PlayerGeoV1 (player 100% customizado
 * para Geografia 3º–9º). Exceção ao padrão-visual-unico documentada em
 * .lovable/mem/constraints/geografia-3ao9-player-custom.md.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-3ano",
  disciplina: "Geografia",
  ano: "3º Ano",
  titulo: "Cartógrafo do Município",
  descricao:
    "Brilha vira cartógrafo com Aurora. Descobre o município camada por camada — cidade, campo, fronteiras e o Atlas Municipal.",
  corPrimaria: "#22c55e",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
