import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Filosofia 9º Ano — "Investigador do Contemporâneo"
 * Componente autoral. Códigos internos: EF09FI01 → EF09FI07.
 * ÁPICE do Fund. 2: da Escola de Frankfurt ao pensamento decolonial brasileiro.
 *
 * PILOTO — apenas Unidade 1 liberada. Unidades 2-7 seguem após validação.
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-9ano",
  disciplina: "Filosofia",
  ano: "9º Ano",
  titulo: "Investigador do Contemporâneo",
  descricao:
    "Aurora e Brilha atravessam o século XX e o XXI — de Frankfurt a Foucault, de Arendt a Paulo Freire — para investigar o pensamento crítico que molda o presente.",
  corPrimaria: "#dc2626",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
