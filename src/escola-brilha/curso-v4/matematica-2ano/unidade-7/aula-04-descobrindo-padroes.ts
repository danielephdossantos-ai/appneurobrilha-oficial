import type { AulaV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as circulo } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as triangulo } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";
import { url as quadrado } from "@/assets/neuro-treino/objetos/quadrado.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 4 — "Descobrindo Padrões"
 * Centro de Pesquisas · Álgebra inicial — sequências e padrões (2º ano).
 */
export const aula04_descobrindoPadroes: AulaV4 = {
  slug: "u7-04-descobrindo-padroes",
  titulo: "Descobrindo Padrões",
  iconeTrilha: "🧩",
  bncc: ["EF02MA09", "EF02MA10"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A Máquina dos Padrões",
    historia:
      "A Máquina dos Padrões do Centro travou! A Coruja explicou: 'Ela cria SEQUÊNCIAS: estrela, círculo, estrela, círculo… Precisamos descobrir a REGRA e completar!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Observe a sequência: ⭐ 🔵 ⭐ 🔵 ⭐ 🔵 __. O que vem depois?",
    cenas: [
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
      { tipo: "grupoItens", imagemUrl: circulo, quantidade: 1, rotulo: "🔵" },
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
      { tipo: "grupoItens", imagemUrl: circulo, quantidade: 1, rotulo: "🔵" },
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
      { tipo: "grupoItens", imagemUrl: circulo, quantidade: 1, rotulo: "🔵" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual é a REGRA da sequência?",
    pista: "A cada estrela, vem um círculo. Depois estrela, depois círculo…",
    revelacao:
      "Isso! A REGRA é 'estrela, círculo' que se REPETE. Depois de círculo vem ⭐ ESTRELA de novo!",
  },

  momento04_explicacao: {
    titulo: "Como descobrir um padrão",
    etapas: [
      { texto: "1️⃣ Olho o que se REPETE.", exemplo: "⭐🔵⭐🔵… repete '⭐🔵'." },
      { texto: "2️⃣ Descubro a REGRA da repetição.", exemplo: "Regra: 1 estrela + 1 círculo." },
      { texto: "3️⃣ Continuo aplicando a regra.", exemplo: "Depois de 🔵 vem ⭐." },
      { texto: "Números também têm padrões!", exemplo: "2, 4, 6, 8, __ (regra: +2). Próximo = 10." },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha completa 2, 4, 6, 8, __:",
    passos: [
      "Vejo os números: 2, 4, 6, 8.",
      "De 2 pra 4: pulou 2. De 4 pra 6: pulou 2. De 6 pra 8: pulou 2.",
      "Regra: SEMPRE +2.",
      "Próximo: 8 + 2 = 10.",
    ],
    resposta: "Próximo = 10.",
    visualUrl: estrela,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — ⭐ 🔵 ⭐ 🔵 ⭐ 🔵 __. O que vem?",
    dica: "A regra é 'estrela, círculo'. Última foi 🔵…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual figura completa a sequência?",
      opcoes: [
        { nome: "Estrela", imagemUrl: estrela },
        { nome: "Círculo", imagemUrl: circulo },
        { nome: "Triângulo", imagemUrl: triangulo },
      ],
      respostaCerta: "Estrela",
      feedbackAcerto: "🎉 Isso! Depois de 🔵 vem ⭐.",
      feedbackErro: "A regra é ⭐🔵… então volta pra ⭐.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — 🔺 🔵 🔺 🔵 __. O que vem?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Complete a sequência.",
      opcoes: [
        { nome: "Triângulo", imagemUrl: triangulo },
        { nome: "Círculo", imagemUrl: circulo },
        { nome: "Quadrado", imagemUrl: quadrado },
      ],
      respostaCerta: "Triângulo",
      feedbackAcerto: "🎉 Isso! Depois de 🔵 vem 🔺.",
      feedbackErro: "Regra: 🔺🔵… volta pra 🔺.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Sequência de números: 10, 20, 30, __.",
    problema: "Qual vem depois?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: estrela, quantidade: 3, rotulo: "10, 20, 30…" }],
      pergunta: "Regra: +10. Próximo?",
      opcoes: ["31", "40", "50"],
      correta: 1,
      feedbackAcerto: "🎉 30 + 10 = 40.",
      feedbackErro: "Regra é +10. 30 + 10 = 40.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Padrão = regra que se REPETE.",
      "Nos números procuro o SALTO (ex.: +2, +10).",
      "Nas figuras procuro o que se REPETE.",
      "🧩 Minijogo: Complete o Padrão.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "🌸 ⭐ 🌸 ⭐ 🌸 __. O que vem?",
      opcoes: [
        { nome: "Estrela", imagemUrl: estrela },
        { nome: "Flor", imagemUrl: flor },
        { nome: "Triângulo", imagemUrl: triangulo },
      ],
      respostaCerta: "Estrela",
      feedbackAcerto: "🎉 Depois de 🌸 vem ⭐.",
      feedbackErro: "Regra: 🌸⭐… então vem ⭐.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Padrão é uma REGRA que…",
        opcoes: ["Muda toda vez", "Se REPETE", "Não existe"],
        correta: 1,
        feedbackAcerto: "🎉 Padrão é REGRA que se REPETE.",
        feedbackErro: "Padrão sempre se REPETE.",
      },
      {
        pergunta: "Pergunta 2 de 5 — ⭐ 🔵 ⭐ 🔵 __. O que vem?",
        opcoes: ["Estrela", "Círculo", "Triângulo"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
          { imagemUrl: circulo, quantidade: 1, rotulo: "🔵" },
        ],
        feedbackAcerto: "🎉 Depois de 🔵 vem ⭐.",
        feedbackErro: "A regra é ⭐🔵… então ⭐.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 2, 4, 6, 8, __. Próximo?",
        opcoes: ["9", "10", "12"],
        correta: 1,
        feedbackAcerto: "🎉 Regra +2. 8 + 2 = 10.",
        feedbackErro: "Regra: +2. 8 + 2 = 10.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 10, 20, 30, __. Próximo?",
        opcoes: ["31", "40", "100"],
        correta: 1,
        feedbackAcerto: "🎉 +10. 30 + 10 = 40.",
        feedbackErro: "Regra: +10. Próximo = 40.",
      },
      {
        pergunta: "Pergunta 5 de 5 — 🔺 🟦 🔺 🟦 🔺 __. O que vem?",
        opcoes: ["Triângulo", "Quadrado", "Círculo"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: triangulo, quantidade: 1, rotulo: "🔺" },
          { imagemUrl: quadrado, quantidade: 1, rotulo: "🟦" },
        ],
        feedbackAcerto: "🎉 Depois de 🔺 vem 🟦. 🏆",
        feedbackErro: "Regra: 🔺🟦. Depois de 🔺 vem 🟦.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧩 Caça-Padrões em Casa",
    materiais: ["Olhos atentos"],
    passos: [
      "1) Procurem padrões: piso, roupas, cerca, cortina, azulejo.",
      "2) A criança descreve a REGRA: 'quadrado, quadrado, quadrado…' ou 'listra escura, clara…'.",
      "3) A família ajuda a inventar UMA nova sequência com objetos da casa.",
    ],
    registro: "📸 Foto de 2 padrões encontrados.",
  },

  recompensa: {
    xp: 230,
    moedas: 120,
    medalha: "Caçador(a) de Padrões",
  },
};
