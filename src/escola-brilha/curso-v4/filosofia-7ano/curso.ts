import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Filosofia 7º Ano — "Investigador da Justiça"
 * Componente autoral (Filosofia não tem BNCC oficial no Fundamental).
 * Códigos internos: EF07FI01 → EF07FI07.
 * Tema-espinha: Justiça — da pólis grega às éticas contemporâneas.
 *
 * Curso completo: 7 unidades (EF07FI01 → EF07FI07).
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
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
