import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 6º Ano — "O Laboratório dos Números"
 * ------------------------------------------------------
 * Brilha entra no LABORATÓRIO: formula HIPÓTESES, TESTA em vários
 * exemplos e escreve uma GENERALIZAÇÃO. É o método científico aplicado
 * à matemática — a ponte para a álgebra do 7º ano.
 *
 * Plano das 7 unidades (esqueleto oficial; U1 já entregue):
 *
 *  U1 · Bem-vindo(a) ao Laboratório dos Números       ✅
 *       SND até bilhão · comparar · arredondar · reta numérica ·
 *       outros sistemas de numeração · problemas com naturais
 *       BNCC: EF06MA01, EF06MA02, EF06MA03
 *
 *  U2 · Investigando as Operações                     ⏳
 *       + − × ÷ com naturais grandes · expressões com parênteses ·
 *       potências de base natural
 *       BNCC: EF06MA03
 *
 *  U3 · Múltiplos, Divisores e Primos                 ⏳
 *       múltiplos, divisores, critérios de divisibilidade,
 *       números primos, fatoração, MMC e MDC
 *       BNCC: EF06MA04, EF06MA05, EF06MA06
 *
 *  U4 · Frações no Laboratório                        ⏳
 *       equivalência, comparação, adição e subtração com frações,
 *       fração de uma quantidade
 *       BNCC: EF06MA07, EF06MA08, EF06MA09, EF06MA10
 *
 *  U5 · Decimais e Porcentagem                        ⏳
 *       ler, comparar, + − × ÷ decimais · relação com frações ·
 *       porcentagem como razão centesimal
 *       BNCC: EF06MA07, EF06MA08, EF06MA11, EF06MA13
 *
 *  U6 · Igualdade e Partilhas                          ✅
 *       propriedades da igualdade · valor desconhecido ·
 *       partilhas desiguais aditivas e multiplicativas
 *       BNCC: EF06MA14, EF06MA15
 *
 *  U7 · Geometria, Medidas, Estatística — Missão Final ⏳
 *       polígonos e ângulos · perímetro e área · volume · SI ·
 *       gráficos e pesquisa · projeto integrador
 *       BNCC: EF06MA17–EF06MA20, EF06MA24, EF06MA29–EF06MA33
 */
const curso: Curso = {
  slug: "matematica-6ano",
  disciplina: "Matemática",
  ano: "6º Ano",
  titulo: "O Laboratório dos Números",
  descricao:
    "Brilha entra no Laboratório. Aqui, matemática é ciência: cria hipótese, testa em exemplos e generaliza regras. Estuda números naturais, primos, frações, decimais, razão, álgebra inicial, geometria, medidas e estatística.",
  corPrimaria: "#7c3aed",
  corSecundaria: "#1e1b4b",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
