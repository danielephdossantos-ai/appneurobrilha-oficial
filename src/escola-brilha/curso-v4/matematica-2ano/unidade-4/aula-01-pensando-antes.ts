import type { AulaV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 4 · Aula 1 — "Pensando Antes de Calcular"
 * Oficina das Estratégias · BNCC EF02MA05, EF02MA06.
 *
 * A criança percebe que somas com 10, 20, 30... podem sair NA CABEÇA,
 * sem precisar contar um a um. Introduz o cálculo mental.
 */
export const aula01_pensandoAntes: AulaV4 = {
  slug: "u4-01-pensando-antes-de-calcular",
  titulo: "Pensando Antes de Calcular",
  iconeTrilha: "⚙️",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Uma máquina quebrada!",
    historia:
      "Brilha chegou na OFICINA DAS ESTRATÉGIAS! O Inventor dos Números pediu ajuda: 'A Máquina do Pensamento Rápido parou. Ela responde contas na hora, sem contar um por um. Preciso que você me ajude a consertar.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Responda RÁPIDO, sem contar dedinho: 10 + 1. Toque nos livros pra ver o total:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: livro,
      quantidade: 11,
      itemPlural: "livros",
      pergunta: "10 + 1 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você contou um por um ou já sabia a resposta?",
    pista:
      "Quando um dos números é 10, 20, 30... é fácil.",
    revelacao:
      "Isso! Nem toda conta precisa ser contada do 1. Existem contas que a gente resolve NA CABEÇA. Isso se chama CÁLCULO MENTAL.",
  },

  momento04_explicacao: {
    titulo: "Cálculo mental com dezenas",
    etapas: [
      {
        texto: "Etapa 2 — 10 + 4 = 14. É só juntar o 4 na 'família do 10'.",
        exemplo: "Dez e quatro formam quatorze.",
        contaArmada: { a: 10, b: 4, resultado: 14, operacao: "soma" },
      },
      {
        texto: "Etapa 3 — 20 + 3 = 23. A dezena continua, só troca a unidade.",
        exemplo: "Vinte e três.",
        contaArmada: { a: 20, b: 3, resultado: 23, operacao: "soma" },
      },
      {
        texto: "Etapa 4 — 30 + 5 = 35. A dezena '30' fica; só somo o 5.",
        exemplo: "Trinta e cinco.",
        contaArmada: { a: 30, b: 5, resultado: 35, operacao: "soma" },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 10 + 4 pensando em voz alta:",
    passos: [
      "Olho o 10: já é uma dezena inteira.",
      "Olho o 4: são só unidades.",
      "Junto: dez... e quatro... catorze!",
      "Escrevo: 10 + 4 = 14.",
      "Nem precisei contar nos dedos.",
    ],
    resposta: "10 + 4 = 14",
    visualUrl: bloco,
    colecaoVisual: {
      imagemUrl: bloco,
      grupos: [10, 4],
      itemPlural: "blocos",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Junto! 20 + 3. Fala em voz alta antes de responder.",
    dica: "20 é 2 dezenas. Só junto 3 unidades: vinte e três.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 3, rotulo: "⭐" },
      ],
      pergunta: "20 + 3 = ?",
      opcoes: ["22", "23", "24"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 20 + 3 = 23. Você calculou de cabeça!",
      feedbackErro: "20 já é dezena. Só junte 3: vinte e TRÊS.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a)! Resolva 30 + 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 2, rotulo: "⭐" },
      ],
      pergunta: "30 + 2 = ?",
      opcoes: ["31", "32", "33"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 30 + 2 = 32.",
      feedbackErro: "3 dezenas + 2 unidades = 32.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Na biblioteca havia 20 livros. Chegaram mais 4.",
    problema:
      "Quantos livros existem agora?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: livro,
      itemPlural: "livros",
      a: 20,
      b: 4,
      legenda: "20 + 4 = 24 livros",
    },
  },

  momento09_revisao: {
    pontos: [
      "Cálculo mental = resolver na cabeça, sem contar um por um.",
      "Quando um número é dezena inteira (10, 20, 30...), é fácil.",
      "A dezena fica, só troca a unidade.",
      "⚙️ Minijogo: Máquina dos Cálculos Rápidos!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 5, rotulo: "⭐" },
      ],
      pergunta: "Rápido! 40 + 5 = ?",
      opcoes: ["44", "45", "50"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 40 + 5 = 45. Máquina consertada!",
      feedbackErro: "4 dezenas + 5 = 45.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 10 + 1 = ?",
        opcoes: ["10", "11", "12"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 10 + 1 = 11.",
        feedbackErro: "Uma dezena + uma unidade = 11.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 10 + 5 = ?",
        opcoes: ["14", "15", "16"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 10 + 5 = 15.",
        feedbackErro: "10 + 5: dez e cinco = 15.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 20 + 1 = ?",
        opcoes: ["20", "21", "22"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 20 + 1 = 21.",
        feedbackErro: "2 dezenas + 1 = 21.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 30 + 2 = ?",
        opcoes: ["31", "32", "33"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 30 + 2 = 32.",
        feedbackErro: "3 dezenas + 2 = 32.",
      },
      {
        pergunta: "Pergunta 5 de 5 — 40 + 5 = ?",
        opcoes: ["44", "45", "50"],
        correta: 1,
        feedbackAcerto: "🎉 Máquina 100%! 40 + 5 = 45. 🏆",
        feedbackErro: "4 dezenas + 5 = 45.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "⚙️ Rodada Relâmpago em Casa",
    materiais: [
      "Um relógio ou cronômetro",
      "Papel e lápis",
    ],
    passos: [
      "1) O adulto fala uma conta com dezena inteira: '10 + 3', '20 + 5', '40 + 2'.",
      "2) A criança tem 5 segundos pra responder de cabeça.",
      "3) Se acertar, ganha um ponto. Se errar, o adulto ensina e vai pra próxima.",
      "4) Fazer 6 contas seguidas.",
      "5) Contar quantos pontos a criança fez.",
    ],
    registro:
      "📸 Foto ou vídeo curto da rodada relâmpago em família.",
  },

  recompensa: {
    xp: 160,
    moedas: 80,
    medalha: "Aprendiz(a) da Oficina",
  },
};
