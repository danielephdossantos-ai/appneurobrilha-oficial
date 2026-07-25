import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 8º Ano — "A Oficina Algébrica"
 * ------------------------------------------------
 * No 8º ano Brilha entra na OFICINA. Aqui ela MONTA e DESMONTA
 * expressões (produtos notáveis, fatoração), resolve sistemas,
 * investiga congruências e transforma figuras no plano. É o
 * ano em que a matemática do ensino fundamental fica pronta
 * para o rigor do 9º ano e do Ensino Médio.
 *
 *  U1 · Números Reais na Oficina                   ✅
 *       dízimas periódicas, potência com expoente inteiro,
 *       notação científica (grandes e pequenos), operações NC
 *       BNCC: EF08MA01, EF08MA02
 *
 *  U2 · Expressões Algébricas e Produtos Notáveis  ✅
 *       valor numérico, monômios/polinômios, (a+b)², (a−b)²,
 *       (a+b)(a−b)
 *       BNCC: EF08MA06, EF08MA07
 *
 *  U3 · Fatoração                                   ✅
 *       fator comum, agrupamento, trinômio quadrado perfeito,
 *       diferença de quadrados
 *       BNCC: EF08MA06, EF08MA07
 *
 *  U4 · Equações e Sistemas 2×2                     ✅
 *       equação do 1º grau, problemas, substituição, adição
 *       BNCC: EF08MA07, EF08MA08
 *
 *  U5 · Porcentagem, Juros e Proporcionalidade      ✅
 *       aumento/desconto sucessivos, juros simples,
 *       grandezas direta e inversamente proporcionais
 *       BNCC: EF08MA04, EF08MA05, EF08MA12, EF08MA13
 *
 *  U6 · Geometria: Ângulos, Congruência, Transformações ✅
 *       retas paralelas + transversal, ângulos internos de
 *       polígonos, congruência de triângulos, mediatriz/bissetriz,
 *       translação/reflexão/rotação
 *       BNCC: EF08MA14, EF08MA15, EF08MA16, EF08MA17, EF08MA18
 *
 *  U7 · Áreas, Volumes, Probabilidade — Missão Final ✅
 *       áreas de polígonos, volume de prismas, princípio
 *       multiplicativo, probabilidade, medidas de tendência
 *       central + missão final
 *       BNCC: EF08MA19, EF08MA20, EF08MA22, EF08MA23, EF08MA25,
 *             EF08MA27
 */
const curso: Curso = {
  slug: "matematica-8ano",
  disciplina: "Matemática",
  ano: "8º Ano",
  titulo: "A Oficina Algébrica",
  descricao:
    "Brilha entra na OFICINA ALGÉBRICA. Monta e desmonta expressões, resolve sistemas, investiga congruências e transforma figuras. Aqui a álgebra vira ferramenta de verdade.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0c4a6e",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
