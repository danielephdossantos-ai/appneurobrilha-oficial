import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 9º Ano — "O Observatório Matemático"
 * ------------------------------------------------------
 *  U1 · Números Reais e o Poder das Raízes        EF09MA01–04
 *  U2 · A Equação do 2º Grau                      EF09MA09, EF09MA10
 *  U3 · Funções: a Máquina que Transforma         EF09MA06–08
 *  U4 · Semelhança e Teorema de Tales             EF09MA08, EF09MA12
 *  U5 · Pitágoras e Trigonometria                 EF09MA13, EF09MA14
 *  U6 · Circunferência, Áreas e Volumes           EF09MA11, EF09MA19, EF09MA20
 *  U7 · Estatística, Probabilidade e Missão Final EF09MA20–23
 */
const curso: Curso = {
  slug: "matematica-9ano",
  disciplina: "Matemática",
  ano: "9º Ano",
  titulo: "O Observatório Matemático",
  descricao:
    "O último ano do Fundamental: números reais, equações do 2º grau, funções, semelhança, Pitágoras e trigonometria. Aqui Brilha prepara a ponte para o Ensino Médio.",
  corPrimaria: "#7c3aed",
  corSecundaria: "#2e1065",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
