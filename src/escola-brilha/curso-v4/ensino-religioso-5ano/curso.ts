import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ensino Religioso 5º Ano — "Explorador das Tradições"
 * Piloto: 1 unidade (EF05ER01). Serão 7 unidades quando o 5º ano
 * for aprovado (uma por código: EF05ER01 até EF05ER07).
 *
 * PRINCÍPIO: aula NÃO CONFESSIONAL, respeitosa com todas as tradições.
 */
const curso: CursoGeoV1 = {
  slug: "ensino-religioso-5ano",
  disciplina: "Ensino Religioso",
  ano: "5º Ano",
  titulo: "Explorador das Tradições",
  descricao:
    "Brilha e Aurora exploram as celebrações, símbolos e valores das grandes tradições religiosas do Brasil e do mundo, com respeito e sem julgamentos.",
  corPrimaria: "#c9a84c",
  corSecundaria: "#1a1035",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
