import type { AulaV4 } from "../../types";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import estrelaBrilhante from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import circulo from "@/assets/neuro-treino/objetos/circulo.png";
import triangulo from "@/assets/neuro-treino/objetos/triangulo.png";
import quadrado from "@/assets/neuro-treino/objetos/quadrado.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 7 · Aula 5 — "Grande Missão dos Cientistas"
 * Fecha o curso: tabela + gráfico + comparação + padrão + revisão geral.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u7-05-grande-missao-cientistas",
  titulo: "Grande Missão dos Cientistas",
  iconeTrilha: "👑",
  bncc: ["EF02MA22", "EF02MA23", "EF02MA09", "EF02MA10"],
  duracaoMin: 30,

  momento01_motivacao: {
    titulo: "O Observatório Matemático",
    historia:
      "Brilha subiu na CÚPULA do Observatório. Cada pesquisa organizada acendia uma ESTRELA no céu. A Coruja disse: 'Se você resolver esta última missão, vira GRANDE CIENTISTA DA MATEMÁTICA!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Kit do cientista — tudo que você aprendeu:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: cachorro, quantidade: 1, rotulo: "Pesquisas" },
      { tipo: "grupoItens", imagemUrl: gato, quantidade: 1, rotulo: "Tabelas" },
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 1, rotulo: "Gráficos" },
      { tipo: "grupoItens", imagemUrl: triangulo, quantidade: 1, rotulo: "Padrões" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que um cientista faz com os dados?",
    pista: "Coleta, organiza, compara, descobre PADRÕES.",
    revelacao:
      "Você já sabe TUDO: pesquisar, montar tabela, ler gráfico, comparar, descobrir padrão e explicar as descobertas!",
  },

  momento04_explicacao: {
    titulo: "Kit do Grande Cientista",
    etapas: [
      { texto: "📋 TABELA: categoria + quantidade." },
      { texto: "📊 GRÁFICO: coluna mais alta = mais votos." },
      { texto: "🔍 DIFERENÇA: maior − menor." },
      { texto: "🧩 PADRÃO: regra que se REPETE." },
      { texto: "🗣️ CONCLUSÃO: 'Descobri que…' com números." },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Pesquisa dos animais: 🐶6 · 🐱4 · 🐰2 · 🐦3.",
    passos: [
      "Mais votado: cachorro (6).",
      "Menos votado: coelho (2).",
      "Diferença: 6 − 2 = 4.",
      "Total: 6 + 4 + 2 + 3 = 15 crianças.",
      "Conclusão: 'O cachorro foi o preferido, com 4 votos a mais que o coelho.'",
    ],
    resposta: "Pesquisa analisada!",
    visualUrl: cachorro,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Fruta: 🍎6, 🍌4. Quem venceu?",
    dica: "A coluna mais ALTA venceu.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual fruta teve mais votos?",
      opcoes: [
        { nome: "Maçã (6)", imagemUrl: maca },
        { nome: "Banana (4)", imagemUrl: banana },
      ],
      respostaCerta: "Maçã (6)",
      feedbackAcerto: "🎉 6 > 4 → MAÇÃ venceu.",
      feedbackErro: "6 é maior que 4 → MAÇÃ.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Sequência 5, 10, 15, __. Próximo?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: estrela, quantidade: 3, rotulo: "5, 10, 15…" }],
      pergunta: "Regra: +5. Próximo?",
      opcoes: ["16", "20", "25"],
      correta: 1,
      feedbackAcerto: "🎉 15 + 5 = 20.",
      feedbackErro: "Regra: +5. 15 + 5 = 20.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Diferença entre maçã (6) e banana (4).",
    problema: "Quantos votos a maçã teve a MAIS?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
      ],
      pergunta: "6 − 4 = ?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      feedbackAcerto: "🎉 6 − 4 = 2 votos a mais.",
      feedbackErro: "6 − 4 = 2.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Você aprendeu: NÚMEROS · DEZENAS · SOMAR · SUBTRAIR · ESTRATÉGIAS · PROBLEMAS · FORMAS · MEDIDAS · GRÁFICOS · PADRÕES.",
      "É um curso INTEIRO na sua cabeça!",
      "A Coruja: 'Você virou GRANDE CIENTISTA DA MATEMÁTICA!'",
      "👑 Troféu final desbloqueado!",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "⭐ 🔺 ⭐ 🔺 __. Qual vem?",
      opcoes: [
        { nome: "Estrela", imagemUrl: estrela },
        { nome: "Triângulo", imagemUrl: triangulo },
        { nome: "Círculo", imagemUrl: circulo },
      ],
      respostaCerta: "Estrela",
      feedbackAcerto: "🎉 Depois de 🔺 vem ⭐.",
      feedbackErro: "Regra: ⭐🔺… então ⭐.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Pesquisa: 🐶6, 🐱4. Diferença?",
        opcoes: ["1", "2", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: cachorro, quantidade: 6, rotulo: "🐶" },
          { imagemUrl: gato, quantidade: 4, rotulo: "🐱" },
        ],
        feedbackAcerto: "🎉 6 − 4 = 2.",
        feedbackErro: "6 − 4 = 2.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 🍎6 + 🍌4 = total?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 6 + 4 = 10.",
        feedbackErro: "6 + 4 = 10.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 2, 4, 6, 8, __. Próximo?",
        opcoes: ["9", "10", "12"],
        correta: 1,
        feedbackAcerto: "🎉 Regra +2. 8 + 2 = 10.",
        feedbackErro: "Regra +2. Próximo = 10.",
      },
      {
        pergunta: "Pergunta 4 de 5 — ⭐ 🟦 ⭐ 🟦 __. Qual vem?",
        opcoes: ["Estrela", "Quadrado", "Triângulo"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
          { imagemUrl: quadrado, quantidade: 1, rotulo: "🟦" },
        ],
        feedbackAcerto: "🎉 Depois de 🟦 vem ⭐.",
        feedbackErro: "Regra ⭐🟦 → volta pra ⭐.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Total 🐶6 + 🐱4 + 🐰2 + 🐦3 = ?",
        opcoes: ["14", "15", "16"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: cachorro, quantidade: 6, rotulo: "🐶" },
          { imagemUrl: passaro, quantidade: 3, rotulo: "🐦" },
        ],
        feedbackAcerto: "🎉 6+4+2+3 = 15. 👑 GRANDE CIENTISTA!",
        feedbackErro: "6+4=10 · +2=12 · +3=15.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔬 Minha Pesquisa Matemática",
    materiais: ["Papel", "Lápis de cor", "5 pessoas pra entrevistar"],
    passos: [
      "1) A criança escolhe UM tema (fruta, cor, brinquedo ou animal favorito).",
      "2) Entrevista 5 pessoas e anota cada resposta.",
      "3) Monta a TABELA (categoria + quantidade).",
      "4) Desenha o GRÁFICO de colunas.",
      "5) Escreve/diz a CONCLUSÃO: 'A campeã foi ___ com ___ votos.'",
    ],
    registro: "📸 Foto da pesquisa completa (tabela + gráfico + conclusão).",
  },

  recompensa: {
    xp: 1000,
    moedas: 800,
    medalha: "Grande Cientista da Matemática 👑",
  },
};

// Referência para satisfazer imports (usada em versões futuras do card final).
void estrelaBrilhante;
