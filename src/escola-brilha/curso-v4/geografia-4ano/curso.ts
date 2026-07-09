import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Geografia 4º Ano — "Explorador Nacional"
 *
 * Player customizado geo-v1 (mesmo do 3º ano). Foco: território brasileiro,
 * IBGE, regiões, população, relevo, clima, economia e preservação. 7 unidades
 * planejadas — hoje disponível a Unidade 1 (gabarito para validação).
 */
const curso: CursoGeoV1 = {
  slug: "geografia-4ano",
  disciplina: "Geografia",
  ano: "4º Ano",
  titulo: "Explorador Nacional do Brasil",
  descricao:
    "Brilha vira Explorador Nacional com Aurora. Descobre o Brasil inteiro camada por camada — regiões, população, relevo, clima, economia e a proteção do nosso território.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
