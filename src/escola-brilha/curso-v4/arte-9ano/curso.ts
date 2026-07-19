import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Arte · 9º Ano — "🌐 Cosmopolitismo, Hibridismo e a Estética das Fronteiras"
 *
 * Categoria Teen/Pre-Vestibular. Ápice da jornada.
 * Aluno assume o papel de Pensador Visual e Curador Crítico: diálogo
 * intercultural, descolonização da arte, hibridismo de mídias e o panorama
 * global contemporâneo.
 */
const curso: CursoArteV1 = {
  slug: "arte-9ano",
  disciplina: "Arte",
  ano: "9º Ano",
  titulo: "Cosmopolitismo, Hibridismo e a Estética das Fronteiras",
  descricao:
    "Depois do corpo ciber-digital do 8º ano, você chega ao ápice: o mundo inteiro cabe na sua obra. Brilha e Aurora abrem o Códice dos Cosmopolitismos — você vira pensador visual e curador crítico, cruzando matrizes indígenas, africanas, orientais e europeias na fronteira da arte contemporânea.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "arte-v1",
  unidades: [unidade1],
};

export default curso;
