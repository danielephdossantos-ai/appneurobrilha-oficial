import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 4 — "Ler e Escrever Números até 1.000"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: ler número por extenso (duzentos e trinta e quatro) e escrever
 * a partir do enunciado falado. Ligações "e" entre centena/dezena e
 * dezena/unidade. Casos especiais: 100 (cem), 200-900 e a família do
 * 11-19 (onze, doze...).
 * BNCC: EF03MA01.
 */
export const aula04_lerNumeros: AulaV4 = {
  slug: "04-ler-numeros",
  titulo: "Ler e Escrever Números",
  iconeTrilha: "📖",
  bncc: ["EF03MA01"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A Prefeita ditou um número...",
    historia:
      "A Prefeita ditou pra Brilha: 'Anote trezentos e quarenta e dois maçãs!' Brilha ficou travada — como escreve isso na placa? Depois, ela viu uma placa '705' e não sabia ler. Vamos aprender os dois lados: LER e ESCREVER.",
    imagemUrl: coruja,
  },

  momento02_exploracao: {
    instrucao: "Olhe estas três placas e o que elas 'dizem':",
    cenas: [
      { tipo: "texto", texto: "100 → cem" },
      { tipo: "texto", texto: "342 → trezentos E quarenta E dois", destaque: true },
      { tipo: "texto", texto: "705 → setecentos E cinco (sem dezena!)" },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 10,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs? (10 = 'dez')",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a gente coloca 'E' entre as casas?",
    pista: "O 'e' junta as partes: centena E dezena E unidade.",
    revelacao:
      "Pra ler: fale a CENTENA + 'e' + a DEZENA + 'e' + a UNIDADE. Se alguma casa for zero, PULE. 100 tem nome próprio: CEM.",
  },

  momento04_explicacao: {
    titulo: "Regras rápidas de leitura",
    etapas: [
      {
        texto:
          "Centenas têm nomes: cem, duzentos, trezentos, quatrocentos, quinhentos, seiscentos, setecentos, oitocentos, novecentos.",
        exemplo: "500 = quinhentos. 800 = oitocentos.",
      },
      {
        texto:
          "Dezenas: dez, vinte, trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa.",
        exemplo: "60 = sessenta.",
      },
      {
        texto: "Família dos 'teen' (11–19) tem nomes próprios: onze, doze, treze, catorze, quinze, dezesseis, dezessete, dezoito, dezenove.",
        exemplo: "215 → duzentos e QUINZE (não 'dez e cinco').",
      },
      {
        texto: "Se a dezena for 0, pula o 'e vinte/trinta...' e vai direto pra unidade.",
        exemplo: "704 → setecentos E quatro (não fala 'zero').",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha vai LER o número 468 alto:",
    passos: [
      "Olho a centena: 4 → QUATROCENTOS.",
      "Olho a dezena: 6 → SESSENTA.",
      "Olho a unidade: 8 → OITO.",
      "Junto com 'e': QUATROCENTOS E SESSENTA E OITO.",
      "Pronto! 468. 📖",
    ],
    resposta: "quatrocentos e sessenta e oito",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Como se lê o número 250?",
    dica: "Centena 2 → duzentos. Dezena 5 → cinquenta. Unidade 0 → pula.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢×2" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦×5" },
      ],
      pergunta: "250 lê-se:",
      opcoes: [
        "duzentos e cinquenta",
        "vinte e cinquenta",
        "duzentos e cinco",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Duzentos e cinquenta. A unidade é 0, então some.",
      feedbackErro: "200 = duzentos, 50 = cinquenta. Junte: 'duzentos e cinquenta'.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! A Prefeita disse: 'setecentos e treze'. Que número é?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×7" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
      ],
      pergunta: "Escolha o número:",
      opcoes: ["73", "703", "713"],
      correta: 2,
      feedbackAcerto: "🎉 Isso! Setecentos e treze = 713 (treze é 13, família teen).",
      feedbackErro: "700 + 13 = 713. Cuidado: 'treze' já é 13, não 'dez e três'.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita pediu um cartaz: 'Escreva cem maçãs.' Brilha ficou em dúvida.",
    problema: "Qual é o certo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Cem = ?",
      opcoes: [
        { nome: "10", imagemUrl: banana },
        { nome: "100", imagemUrl: maca },
        { nome: "1.000", imagemUrl: coruja },
      ],
      respostaCerta: "100",
      feedbackAcerto:
        "🎯 Isso! CEM = 100. É o nome próprio de 1 centena redondinha.",
      feedbackErro:
        "Cem = 100. Dez = 10. Mil = 1.000. Só 100 tem nome curto especial.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ler: CENTENA + 'e' + DEZENA + 'e' + UNIDADE.",
      "Se alguma casa for 0, PULE.",
      "100 = cem. 200-900 têm nomes próprios (duzentos, trezentos...).",
      "11 a 19 têm nomes próprios (onze, doze, treze...).",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×4" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×0" },
        { imagemUrl: maca, quantidade: 9, rotulo: "🍎" },
      ],
      pergunta: "'Quatrocentos e nove' é qual número?",
      opcoes: ["49", "409", "490"],
      correta: 1,
      feedbackAcerto: "🎉 Perfeito! 400 + 9 = 409. Dezena é 0 (sem nome falado).",
      feedbackErro: "400 + 0 + 9 = 409. 'quatrocentos e nove' pula a dezena vazia.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Oitocentos e vinte e cinco' é:",
        opcoes: ["825", "285", "852"],
        correta: 0,
        feedbackAcerto: "🎉 825. Oito centenas + duas dezenas + cinco unidades.",
        feedbackErro: "800 + 20 + 5 = 825.",
      },
      {
        pergunta: "Como se lê 606?",
        opcoes: [
          "seis e seis",
          "seiscentos e seis",
          "sessenta e seis",
        ],
        correta: 1,
        feedbackAcerto: "Isso! 600 + 6 = seiscentos E seis.",
        feedbackErro: "600 = seiscentos. Dezena 0 pula. 6 = seis. 'Seiscentos e seis'.",
      },
      {
        pergunta: "Como se lê 312?",
        opcoes: [
          "trezentos e doze",
          "trezentos e um e dois",
          "trinta e doze",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 12 = doze (família teen). 300 + 12 = 'trezentos e doze'.",
        feedbackErro: "300 = trezentos, 12 = doze (não 'dez e dois'). Fica 'trezentos e doze'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Ditado dos Números",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Um adulto DITA 5 números entre 100 e 999 (ex.: 'quatrocentos e trinta e sete').",
      "Você escreve o número na placa CDU.",
      "Depois inverta: você fala, o adulto escreve.",
      "Confiram no fim. Riscar em vermelho os que precisam repetir.",
    ],
    registro: "📸 Foto da folha com os 5 números.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
