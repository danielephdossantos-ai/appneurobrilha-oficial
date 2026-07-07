import type { AulaV4 } from "../../types";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 5 · Aula 2 — "Problemas de Subtração"
 * BNCC EF02MA06.
 *
 * Aplica os 4 passos em problemas de TIRAR — vendeu, comeu, sobrou.
 */
export const aula02_problemasSubtracao: AulaV4 = {
  slug: "u5-02-problemas-subtracao",
  titulo: "Problemas de Subtração",
  iconeTrilha: "🥖",
  bncc: ["EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O padeiro precisa de ajuda!",
    historia:
      "Seu Urso, o padeiro, chegou correndo: 'Fiz 15 pães hoje e já VENDI 6. Preciso saber quantos SOBRARAM na prateleira!' Brilha disse: 'Fácil! Vamos usar os 4 passos — só que agora a operação é OUTRA.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Sobraram 9 pães na prateleira. Toque em cada UM pra conferir:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: bola,
      quantidade: 9,
      itemPlural: "pães",
      pergunta: "15 − 6 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Nesse problema, algo FOI EMBORA. Que operação usar?",
    pista:
      "Os pães foram VENDIDOS. Sumiram da prateleira.",
    revelacao:
      "Isso! Quando algo VAI EMBORA, VENDE, COME ou é TIRADO, usamos a SUBTRAÇÃO. Palavra-chave: 'sobrou'.",
  },

  momento04_explicacao: {
    titulo: "Problemas de subtração",
    etapas: [
      {
        texto: "1️⃣ LER: 'Fez 15 pães. Vendeu 6. Quantos sobraram?'",
        exemplo: "Devagar, palavra por palavra.",
      },
      {
        texto: "2️⃣ NÚMEROS: 15 e 6.",
        exemplo: "Sempre grifar mentalmente.",
      },
      {
        texto:
          "3️⃣ DECIDIR: 'vendeu' = TIRAR. Operação: SUBTRAÇÃO.",
        exemplo: "Sinal: −.",
      },
      {
        texto: "4️⃣ RESOLVER: 15 − 6 = 9. Conferir: 9 é menor que 15. ✔",
        exemplo: "Sobraram 9 pães.",
        contaArmada: { a: 15, b: 6, resultado: 9, operacao: "subtracao" },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve: 'Havia 18 balas. Comeram 7.' Sobraram?",
    passos: [
      "1) LEIO: 'havia 18… comeram 7.'",
      "2) NÚMEROS: 18 e 7.",
      "3) DECIDO: 'comeram' = TIRAR. Subtração.",
      "4) RESOLVO: 18 − 7 = 11 balas.",
      "5) CONFIRO: 11 é menor que 18. ✔",
    ],
    resposta: "18 − 7 = 11 balas",
    visualUrl: estrela,
    colecaoVisual: {
      imagemUrl: estrela,
      grupos: [11],
      itemPlural: "balas",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — 'Havia 12 maçãs. Venderam 5.' Sobraram?",
    dica: "'Venderam' = TIRAR. 12 − 5 = 7.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 12,
      b: 5,
      legenda: "12 − 5 = 7 maçãs",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — 'Havia 20 frutas na banca. Venderam 8.' Sobraram?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 12, rotulo: "Sobraram" },
      ],
      pergunta: "20 − 8 = ?",
      opcoes: ["10", "12", "14"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 20 − 8 = 12 frutas.",
      feedbackErro: "'Venderam' = tirar. 20 − 8 = 12.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Na loja havia 14 bolas. 6 foram vendidas.",
    problema:
      "Quantas bolas sobraram?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: bola,
      itemPlural: "bolas",
      a: 14,
      b: 6,
      legenda: "14 − 6 = 8 bolas",
    },
  },

  momento09_revisao: {
    pontos: [
      "'Vendeu', 'comeu', 'sobrou', 'foi embora' = SUBTRAÇÃO.",
      "Resposta menor que o total inicial = faz sentido.",
      "Os 4 passos servem pra qualquer problema.",
      "🥖 Minijogo: Padaria Encantada!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 10, rotulo: "Fez" },
      ],
      pergunta:
        "'Padeiro fez 10 pães, vendeu 4.' Sobraram?",
      opcoes: ["4", "6", "8"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 10 − 4 = 6 pães.",
      feedbackErro: "'Vendeu' = tirar. 10 − 4 = 6.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Pergunta 1 de 5 — 'Havia 15 pães. Vendeu 6.' Sobraram?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        visualGrupos: [{ imagemUrl: bola, quantidade: 15, rotulo: "Tinha" }],
        tirar: 6,
        feedbackAcerto: "🎉 Isso! 15 − 6 = 9.",
        feedbackErro: "15 − 6 = 9.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — 'Havia 18 balas. Comeram 7.' Sobraram?",
        opcoes: ["10", "11", "12"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 18, rotulo: "Tinha" }],
        tirar: 7,
        feedbackAcerto: "🎉 Boa! 18 − 7 = 11.",
        feedbackErro: "'Comeram' = tirar. 18 − 7 = 11.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — 'Havia 12 maçãs. Venderam 5.' Sobraram?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [{ imagemUrl: maca, quantidade: 12, rotulo: "Tinha" }],
        tirar: 5,
        feedbackAcerto: "🎉 Isso! 12 − 5 = 7.",
        feedbackErro: "12 − 5 = 7.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — 'Havia 20 frutas. Venderam 8.' Sobraram?",
        opcoes: ["10", "12", "14"],
        correta: 1,
        visualGrupos: [{ imagemUrl: maca, quantidade: 20, rotulo: "Tinha" }],
        tirar: 8,
        feedbackAcerto: "🎉 Uau! 20 − 8 = 12.",
        feedbackErro: "20 − 8 = 12.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Qual palavra indica SUBTRAÇÃO?",
        opcoes: ["Ganhou", "Sobrou", "Chegou"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Sobrou' indica subtração. 🏆",
        feedbackErro: "'Sobrou' vem depois de tirar. É SUBTRAÇÃO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🥖 Padaria em Casa",
    materiais: [
      "Objetos pra contar (biscoitos, uvas, macarrão cru)",
      "Papel e lápis",
    ],
    passos: [
      "1) A família separa 10 a 20 objetos e finge que é uma padaria.",
      "2) O adulto 'compra' uma parte (retira).",
      "3) A criança segue os 4 PASSOS e escreve o problema.",
      "4) Resolve a subtração e diz quanto sobrou.",
      "5) Repete 2 vezes.",
    ],
    registro:
      "📸 Foto dos dois problemas resolvidos.",
  },

  recompensa: {
    xp: 190,
    moedas: 95,
    medalha: "Ajudante do Padeiro",
  },
};
