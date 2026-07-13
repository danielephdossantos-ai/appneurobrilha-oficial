import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 2º Ano — "Máquina do Tempo do Brilha"
 *
 * Piloto usando o motor PlayerGeoV1 (mesmo esqueleto 11 cenas travado).
 * O visual "Cabine da Máquina do Tempo" custom é skin planejada como
 * próxima etapa depois da validação da Aula 01.
 */
const curso: CursoGeoV1 = {
  slug: "historia-2ano",
  disciplina: "História",
  ano: "2º Ano",
  titulo: "Máquina do Tempo do Brilha",
  descricao:
    "Brilha e Aurora ligam a Máquina do Tempo pra investigar como as coisas mudam. Ontem, Hoje e Amanhã viram peças do Relógio do Tempo — cada aula recupera uma engrenagem.",
  corPrimaria: "#b45309",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
