import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 7º Ano — "O Laboratório dos Números"
 * ------------------------------------------------------
 *  U1 · Números Inteiros                    ✅ EF07MA02–04
 *  U2 · Números Racionais                   ✅ EF07MA05, EF07MA06, EF07MA08
 *  U3 · Razão, Porcentagem e Proporção      ✅ EF07MA09, EF07MA17
 *  U4 · Álgebra e Equações                 ✅ EF07MA13–18
 *  U5 · Geometria                           ✅ EF07MA19–21, EF07MA23–28
 *  U6 · Grandezas e Medidas                 ✅ EF07MA30, EF07MA32, EF07MA33
 *  U7 · Estatística e Probabilidade         ✅ EF07MA34–37
 */
const curso: Curso = {
  slug: "matematica-7ano",
  disciplina: "Matemática",
  ano: "7º Ano",
  titulo: "O Laboratório dos Números",
  descricao:
    "Brilha entra no laboratório: números negativos, racionais em todas as formas e a matemática das proporções — a ponte entre a aritmética do 6º ano e a álgebra do 8º.",
  corPrimaria: "#6366f1",
  corSecundaria: "#1e1b4b",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};


export default curso;
