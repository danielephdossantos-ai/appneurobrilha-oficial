import type { AulaV4 } from "../../types";

/**
 * Aula 2 · U1 — "Valor posicional: UM · C · D · U"
 * BNCC: EF04MA01, EF04MA02. Base: CPA · Skemp · Vergnaud.
 */
export const aula02_valorPosicionalUM: AulaV4 = {
  slug: "u1-02-valor-posicional-um",
  titulo: "Valor posicional: UM · C · D · U",
  iconeTrilha: "🏛️",
  bncc: ["EF04MA01", "EF04MA02"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Onde cada algarismo mora?",
    historia:
      "{NOME}, o escriba do Reino recebeu uma lista de 4.375 moedas de ouro. Ele precisa saber: quantos milhares? quantas centenas? quantas dezenas? Cada algarismo mora numa casa diferente e vale coisas diferentes.",
  },

  momento02_exploracao: {
    instrucao: "Cada casa tem um valor. Da esquerda pra direita, o valor diminui 10 vezes a cada passo.",
    cenas: [
      { tipo: "texto", texto: "UM = 1.000 · C = 100 · D = 10 · U = 1.", destaque: true },
      { tipo: "texto", texto: "Um algarismo sozinho vale de 0 a 9. É a CASA que multiplica esse valor." },
      { tipo: "texto", texto: "Em 4.375: 4 vale 4.000, 3 vale 300, 7 vale 70, 5 vale 5.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que muda entre 4.375 e 4.735?",
    pista: "Olhe a casa da centena e da dezena. Trocaram de lugar.",
    revelacao:
      "Em 4.375, o 3 vale 300 e o 7 vale 70. Em 4.735, o 7 vale 700 e o 3 vale 30. A casa manda no valor.",
  },

  momento04_explicacao: {
    titulo: "Como decompor um número",
    etapas: [
      {
        texto: "Decompor é separar o número em soma de cada casa.",
        exemploReal: {
          contexto: "O escriba decompõe 4.375:",
          casasValor: { numero: 4375, extenso: "quatro mil, trezentos e setenta e cinco", mostrarDecomposicao: true },
          destaque: "4.375 = 4.000 + 300 + 70 + 5.",
        },
      },
      {
        texto: "Se aparece 0 numa casa, ela não some — mas continua ocupando o lugar.",
        exemploReal: {
          contexto: "O número 5.208:",
          casasValor: { numero: 5208, extenso: "cinco mil, duzentos e oito", mostrarDecomposicao: true },
          destaque: "5.208 = 5.000 + 200 + 0 + 8. A dezena está vazia, mas o 0 segura o lugar.",
        },
      },
      {
        texto: "Compor é o caminho inverso: junto os valores e chego no número.",
        exemploReal: {
          contexto: "6.000 + 400 + 20 + 3 = ?",
          casasValor: { numero: 6423, extenso: "seis mil, quatrocentos e vinte e três", mostrarDecomposicao: true },
          destaque: "6.000 + 400 + 20 + 3 = 6.423.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Decomponha 7.209 e escreva por extenso.",
    resposta: "7.000 + 200 + 0 + 9 = 7.209 · sete mil, duzentos e nove",
    casasValor: { numero: 7209, mostrarDecomposicao: true, extenso: "sete mil, duzentos e nove" },
    passos: [
      "Milhar: 7 → 7.000.",
      "Centena: 2 → 200.",
      "Dezena: 0 → segura casa vazia.",
      "Unidade: 9 → 9.",
      "Total: 7.000 + 200 + 9 = 7.209.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Componha: 3.000 + 500 + 40 + 6 = ?",
    dica: "Some direto: milhar, centena, dezena e unidade se encaixam nas casas.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o número?",
      opcoes: [{ nome: "3.546" }, { nome: "3.456" }, { nome: "3.564" }],
      respostaCerta: "3.546",
      feedbackAcerto: "🎯 3.000 (UM) + 500 (C) + 40 (D) + 6 (U) = 3.546.",
      feedbackErro: "Encaixe casa a casa: 3.000 é o UM, 500 é a C, 40 é a D, 6 é a U → 3.546.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "No número 8.074, quanto vale o algarismo 7?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o valor certo:",
      opcoes: [{ nome: "7" }, { nome: "70" }, { nome: "700" }],
      respostaCerta: "70",
      feedbackAcerto: "🎯 O 7 está na DEZENA. 7 × 10 = 70.",
      feedbackErro: "Da direita pra esquerda: 4 (U), 7 (D), 0 (C), 8 (UM). O 7 é dezena → 70.",
    },
  },

  momento08_aplicacao: {
    contexto: "O tesoureiro anotou 6.030 moedas. Decompor ajuda a conferir.",
    problema: "Qual decomposição está CORRETA?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a certa:",
      opcoes: [
        { nome: "6.000 + 3 + 0" },
        { nome: "6.000 + 30" },
        { nome: "600 + 30" },
      ],
      respostaCerta: "6.000 + 30",
      feedbackAcerto: "🎯 6.030 = 6.000 (UM) + 0 (C) + 30 (D) + 0 (U) = 6.000 + 30.",
      feedbackErro: "Cuidado: o 3 está na DEZENA, vale 30 — não 3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "UM = 1.000, C = 100, D = 10, U = 1.",
      "Decompor: separar em soma de cada casa.",
      "Compor: juntar os valores para achar o número.",
      "0 numa casa não some, mas SEGURA o lugar.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "No número 9.451, quanto vale o 4?",
        opcoes: ["4", "40", "400"],
        correta: 2,
        feedbackAcerto: "🎉 4 na centena = 400.",
        feedbackErro: "O 4 é o segundo da esquerda pra direita: centena → 400.",
      },
      {
        pergunta: "Composição de 2.000 + 800 + 5:",
        opcoes: ["2.850", "2.805", "2.085"],
        correta: 1,
        feedbackAcerto: "🎉 2.000 (UM) + 800 (C) + 0 (D) + 5 (U) = 2.805.",
        feedbackErro: "Sem dezenas: 0 segura a casa. 2.805.",
      },
      {
        pergunta: "Decompondo 3.706:",
        opcoes: ["3.000 + 70 + 6", "3.000 + 700 + 6", "300 + 70 + 6"],
        correta: 1,
        feedbackAcerto: "🎉 3.706 = 3.000 + 700 + 0 + 6.",
        feedbackErro: "O 7 é a CENTENA → 700, não 70.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Casas de Valor pela Casa",
    materiais: ["Papel", "Caneta", "Uma nota fiscal ou extrato"],
    passos: [
      "Escolha 4 números de 4 algarismos.",
      "Decomponha cada um: UM + C + D + U.",
      "Escreva por extenso.",
      "Peça a alguém para conferir.",
    ],
    registro: "📸 Foto do papel com as decomposições.",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Escriba Iniciante" },
};
