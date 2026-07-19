import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Filosofia 7º Ano — "Investigador da Justiça"
 * Componente autoral (Filosofia não tem BNCC oficial no Fundamental).
 * Códigos internos: EF07FI01 → EF07FI07.
 * Tema-espinha: Justiça — da pólis grega às éticas contemporâneas.
 *
 * PILOTO: Unidade 1 (EF07FI01). Demais unidades entram após validação.
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-7ano",
  disciplina: "Filosofia",
  ano: "7º Ano",
  titulo: "Investigador da Justiça",
  descricao:
    "Aurora e Brilha investigam com o aluno o que é JUSTIÇA — de Platão e Aristóteles ao contrato social e ao véu da ignorância de Rawls.",
  corPrimaria: "#a78bfa",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
