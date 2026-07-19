import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Ciências · 3º Ano — "Os Guardiões da Biosfera e os Mistérios da Matéria"
 *
 * Categoria Kids-Transition. Aurora orientadora, Brilha explorador júnior,
 * aluno é o Cientista Investigador. Foco: observação da natureza,
 * matéria e biosfera com fotografia real + infográfico.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-3ano",
  disciplina: "Ciências",
  ano: "3º Ano",
  titulo: "Os Guardiões da Biosfera e os Mistérios da Matéria",
  descricao:
    "Você entra na equipe dos Guardiões da Biosfera. Cada unidade é uma missão de campo: solo, água, seres vivos e a matéria que forma o mundo ao seu redor. Investigar, observar e proteger — esse é o método.",
  corPrimaria: "#059669",
  corSecundaria: "#052e16",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
