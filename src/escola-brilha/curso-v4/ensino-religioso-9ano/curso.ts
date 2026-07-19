import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ensino Religioso 9º Ano — "Curador da Vida em Comum"
 * BNCC EF09ER01 → EF09ER07. NÃO CONFESSIONAL.
 * ÁPICE do Ensino Religioso no Fundamental: cuidado da vida, doutrinas
 * sobre vida/morte, imortalidade e ancestralidade, princípios éticos,
 * sentido da vida, projeto de vida e sociedades justas.
 */
const curso: CursoGeoV1 = {
  slug: "ensino-religioso-9ano",
  disciplina: "Ensino Religioso",
  ano: "9º Ano",
  titulo: "Curador da Vida em Comum",
  descricao:
    "Aurora e Brilha investigam como diferentes tradições religiosas e visões seculares respondem às grandes perguntas da existência — vida, morte, sentido, projeto — e como esses princípios éticos podem construir sociedades justas.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
