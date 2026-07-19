import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Filosofia 8º Ano — "Investigador da Modernidade"
 * Componente autoral (Filosofia não tem BNCC oficial no Fundamental).
 * Códigos internos: EF08FI01 → EF08FI07.
 * Tema-espinha: a virada moderna — de Descartes ao existencialismo.
 *
 * Curso completo: 7 unidades (EF08FI01 → EF08FI07).
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-8ano",
  disciplina: "Filosofia",
  ano: "8º Ano",
  titulo: "Investigador da Modernidade",
  descricao:
    "Aurora e Brilha atravessam a Modernidade com o aluno — de Descartes ao existencialismo — para investigar como o pensamento humano se libertou da tradição.",
  corPrimaria: "#38bdf8",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
