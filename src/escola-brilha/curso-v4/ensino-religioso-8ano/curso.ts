import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ensino Religioso 8º Ano — "Investigador da Convivência Pública"
 * BNCC EF08ER01 → EF08ER07. NÃO CONFESSIONAL.
 * Foco: crenças/convicções, ética das tradições, vida e morte, religião
 * na esfera pública, Estado laico, cuidado da vida, transmissão das tradições.
 */
const curso: CursoGeoV1 = {
  slug: "ensino-religioso-8ano",
  disciplina: "Ensino Religioso",
  ano: "8º Ano",
  titulo: "Investigador da Convivência Pública",
  descricao:
    "Aurora e Brilha investigam como crenças, convicções e tradições religiosas influenciam escolhas pessoais, o cuidado com a vida e a convivência na esfera pública do Estado laico.",
  corPrimaria: "#c9a84c",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
