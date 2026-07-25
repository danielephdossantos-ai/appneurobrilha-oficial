import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 5º Ano — "O Império dos Números"
 * ---------------------------------------------------
 *  U1 · Bem-vindo(a) ao Império dos Milhões         (EF05MA01–03)
 *  U2 · Somar e Subtrair Grandes Números            (EF05MA07)
 *  U3 · Multiplicando no Império                    (EF05MA07–08)
 *  U4 · Dividindo no Império                        (EF05MA07–08)
 *  U5 · Frações, Decimais e Porcentagem             (EF05MA03–05, 07, 09)
 *  U6 · Grandezas e Medidas do Império              (EF05MA19–22)
 *  U7 · Geometria, Dados e Missão Final             (EF05MA14–18, 23–25)
 *
 * Regra evolutiva: como M/C/D/U já foi consolidado no 3º/4º, o valor posicional
 * só aparece acompanhado de uma CONTA armada — nunca como explicação isolada.
 */
const curso: Curso = {
  slug: "matematica-5ano",
  disciplina: "Matemática",
  ano: "5º Ano",
  titulo: "O Império dos Números",
  descricao:
    "O Reino cresceu e virou IMPÉRIO. Brilha vira mestre-aprendiz: números até um milhão, contas grandes, frações, decimais, porcentagem, área, volume e o plano cartesiano. Culmina em Mestre do Império.",
  corPrimaria: "#0e7490",
  corSecundaria: "#083344",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
