import type { AulaV4 } from "../../types";

export const aula01_ideiaDeFracao: AulaV4 = {
  slug: "u5-01-ideia-de-fracao",
  titulo: "O que é uma fração?",
  iconeTrilha: "🍰",
  bncc: ["EF04MA09"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Parte de um todo",
    historia:
      "{NOME}, quando dividimos algo em partes IGUAIS e pegamos algumas, o número que descreve isso é uma FRAÇÃO. Ex.: pizza em 4 fatias, comer 1 = 1/4.",
  },
  momento02_exploracao: {
    instrucao: "Numerador (em cima) e denominador (embaixo).",
    cenas: [
      { tipo: "texto", texto: "1/4 lê-se 'um quarto'. Em cima: quantas partes peguei. Embaixo: em quantas dividi.", destaque: true },
      { tipo: "texto", texto: "Frações unitárias têm numerador 1: 1/2, 1/3, 1/4, 1/5, 1/10 e 1/100." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "1/4 é mais que 1/2?",
    pista: "Pense na pizza cortada.",
    revelacao: "Não. Quando comparamos o MESMO inteiro dividido em partes iguais, quanto maior o denominador, menores são as partes. Dividir o mesmo inteiro em 4 dá pedaços menores do que dividi-lo em 2.",
  },
  momento04_explicacao: {
    titulo: "Ler uma fração",
    etapas: [
      {
        texto: "Fração = parte / todo. As partes precisam ser IGUAIS.",
        exemploReal: {
          contexto: "Barra dividida em 5 partes, 2 pintadas.",
          destaque: "2/5 (dois quintos).",
        },
      },
      {
        texto: "Se peguei TODAS as partes, a fração vale 1 (o inteiro).",
        exemploReal: {
          contexto: "4 fatias comidas de 4.",
          destaque: "4/4 = 1 (inteiro).",
        },
      },
      {
        texto: "Na reta numérica, as frações ficam entre os números inteiros. Divida o trecho de 0 a 1 em partes iguais e marque quantas partes percorreu.",
        exemploReal: {
          contexto: "Divida o trecho de 0 a 1 em 4 intervalos iguais. O primeiro ponto depois do zero representa 1/4.",
          destaque: "0 — 1/4 — 2/4 — 3/4 — 1",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Uma barra tem 6 partes iguais. 4 estão pintadas.",
    passos: ["Numerador (pintadas) = 4.", "Denominador (total) = 6.", "Fração = 4/6."],
    resposta: "4/6",
  },
  momento06_praticaGuiada: {
    enunciado: "Pizza em 8 fatias, comi 3. Que fração comi?",
    dica: "Comidas em cima, total embaixo.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/8" }, { nome: "8/3" }, { nome: "3/5" }],
      respostaCerta: "3/8",
      feedbackAcerto: "🎯 3/8.",
      feedbackErro: "Numerador é o quanto pegou.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Bolo em 10 fatias, sobraram 3. Que fração restou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/10" }, { nome: "7/10" }, { nome: "10/3" }],
      respostaCerta: "3/10",
      feedbackAcerto: "🎯 3/10 restou.",
      feedbackErro: "Restou 3 de 10.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma horta com 12 canteiros.",
    problema: "Se 5 têm alface, que fração é de alface?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/12" }, { nome: "12/5" }, { nome: "7/12" }],
      respostaCerta: "5/12",
      feedbackAcerto: "🎯 5/12.",
      feedbackErro: "5 canteiros de 12.",
    },
  },
  momento09_revisao: {
    pontos: ["Fração representa partes iguais de um inteiro.", "Numerador em cima, denominador embaixo.", "Frações também podem ser localizadas na reta numérica."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Barra em 4, pintei 1. Fração?", opcoes: ["1/4", "4/1", "3/4"], correta: 0, feedbackAcerto: "🎉 1/4.", feedbackErro: "1 de 4." },
      { pergunta: "Torta em 6, comi 5. Fração?", opcoes: ["5/6", "6/5", "1/6"], correta: 0, feedbackAcerto: "🎉 5/6.", feedbackErro: "5 comidas de 6." },
      { pergunta: "Como se lê 1/3?", opcoes: ["um terço", "um trio", "terceiro"], correta: 0, feedbackAcerto: "🎉 um terço.", feedbackErro: "Denominador 3 → terços." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cortando o Bolo",
    materiais: ["Papel", "Tesoura"],
    passos: ["Corte um círculo em 4, 6 e 8 partes iguais.", "Pinte algumas.", "Escreva a fração pintada em cada um."],
    registro: "📸 Foto dos 3 círculos com as frações.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
