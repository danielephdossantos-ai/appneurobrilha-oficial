import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Geografia 2º Ano (v2) — "Pequeno Cartógrafo"
 * Piloto migrando o 2º Ano para o padrão AulaGeoV1 (mesmo player
 * do 3º/4º/5º), com linguagem adaptada a crianças de 7 anos.
 * Piloto: apenas Unidade 1 por enquanto.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-2ano-v2",
  disciplina: "Geografia",
  ano: "2º Ano",
  titulo: "Pequeno Cartógrafo",
  descricao:
    "Explora com Aurora e Brilha o LUGAR onde você vive: as casas, as pessoas, o trabalho no campo e na cidade, e como se cuidar dos riscos do bairro.",
  corPrimaria: "#22c55e",
  corSecundaria: "#0d1f55",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
