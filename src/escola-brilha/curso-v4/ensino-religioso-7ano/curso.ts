import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";
import { unidade8 } from "./unidade-8";

/**
 * Curso: Ensino Religioso 7º Ano — "Investigador das Éticas"
 * BNCC EF07ER01 → EF07ER08. NÃO CONFESSIONAL.
 */
const curso: CursoGeoV1 = {
  slug: "ensino-religioso-7ano",
  disciplina: "Ensino Religioso",
  ano: "7º Ano",
  titulo: "Investigador das Éticas",
  descricao:
    "Aurora e Brilha investigam princípios éticos compartilhados, símbolos, ritos, mitos e as diferentes ideias de divindade das tradições religiosas.",
  corPrimaria: "#c9a84c",
  corSecundaria: "#1a1035",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7, unidade8].map((unidade,indice)=>indice<7?{...unidade,aulas:unidade.aulas.map(aula=>({...aula,bncc:[]}))}:unidade),
};

export default curso;
