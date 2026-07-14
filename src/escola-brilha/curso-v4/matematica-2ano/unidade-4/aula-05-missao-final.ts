import type { AulaV4 } from "../../types";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 4 · Aula 5 — "Missão Final da Oficina"
 * BNCC EF02MA05, EF02MA06, EF02MA07.
 *
 * Fecha a Unidade 4. Sequência de 5 desafios ligando cada máquina:
 *   1) Cálculo mental · 2) Decomposição · 3) Completar 10 ·
 *   4) Escolher estratégia · 5) Problema aplicado.
 * Conquista: 🏅 Inventor(a) dos Cálculos.
 * Desbloqueio: ⚙️ Caixa de Ferramentas Matemáticas.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u4-05-missao-final-oficina",
  titulo: "Missão Final da Oficina",
  iconeTrilha: "🛠️",
  bncc: ["EF02MA05", "EF02MA06", "EF02MA07"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Ligar todas as máquinas!",
    historia:
      "O Inventor sorriu: 'Você já sabe pensar, decompor, completar dezenas e escolher estratégias. Falta a ÚLTIMA missão: ligar TODAS as máquinas de uma vez!' Se conseguir, ganha a medalha INVENTOR(A) DOS CÁLCULOS e destrava a ⚙️ CAIXA DE FERRAMENTAS MATEMÁTICAS!",
    imagemUrl: brilha,
  },

  // Desafio 1 — CÁLCULO MENTAL (30 + 4)
  momento02_exploracao: {
    instrucao:
      "Desafio 1 de 5 — CÁLCULO MENTAL. Rápido: 30 + 4. Toque nas peças:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: bloco,
      quantidade: 34,
      itemPlural: "peças",
      pergunta: "30 + 4 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você lembra tudo que aprendeu na Oficina?",
    pista:
      "Cálculo mental, decomposição, completar 10, escolher estratégia.",
    revelacao:
      "É! Agora é hora de mostrar tudo em 5 desafios. Vamos ligar a Oficina!",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto: "5 desafios em sequência — cada um liga uma máquina.",
        exemplo:
          "1) Mental · 2) Decompor · 3) Completar 10 · 4) Escolher · 5) Problema.",
      },
      {
        texto:
          "Se errar, Brilha ensina e você tenta outra vez.",
        exemplo: "É MISSÃO, não é prova.",
      },
      {
        texto:
          "No final: 🏅 medalha, XP, moedas e ⚙️ CAIXA DE FERRAMENTAS destravada.",
        exemplo: "Você leva as ferramentas pra Unidade 5.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha revisa cada desafio:",
    passos: [
      "1) Mental: 30 + 4 = 34.",
      "2) Decompor: 46 = 40 + 6.",
      "3) Completar 10: 8 + 2 = 10.",
      "4) Estratégia: 15 − 5 = 10 (tirar unidades).",
      "5) Problema: '20 livros + 4' = 24.",
    ],
    resposta: "Pronto pra missão!",
    visualUrl: brilha,
  },

  // Desafio 2 — DECOMPOSIÇÃO (46)
  momento06_praticaGuiada: {
    enunciado:
      "Desafio 2 de 5 — DECOMPOR o 46.",
    dica: "4 é dezena (40). 6 é unidade. Fica 40 + 6.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 6, rotulo: "⭐" },
      ],
      pergunta: "46 = ?",
      opcoes: ["4 + 6", "40 + 6", "40 + 60"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 46 = 40 + 6.",
      feedbackErro: "4 dezenas (40) + 6 unidades = 40 + 6.",
    },
  },

  // Desafio 3 — COMPLETAR A DEZENA (7 + ? = 10)
  momento07_praticaIndependente: {
    enunciado:
      "Desafio 3 de 5 — COMPLETAR A DEZENA. 7 + ? = 10.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 7, rotulo: "Já tem" },
      ],
      pergunta: "Quantas faltam pra 10?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 + 3 = 10.",
      feedbackErro: "Do 7 faltam 3 (8, 9, 10).",
    },
  },

  // Desafio 4 — ESCOLHER ESTRATÉGIA (18 − 8)
  momento08_aplicacao: {
    contexto:
      "Desafio 4 de 5 — ESCOLHER E RESOLVER. 18 − 8. Qual a MELHOR ferramenta?",
    problema:
      "18 − 8 = ?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 8, rotulo: "⭐" },
      ],
      pergunta: "18 − 8 = ?",
      opcoes: ["8", "10", "16"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 18 − 8 = 10. Ferramenta: TIRAR AS UNIDADES.",
      feedbackErro:
        "As 8 unidades somem. Sobra a dezena: 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "4 desafios completos! Falta um problema aplicado.",
      "🎯 ÚLTIMO DESAFIO: usar tudo num problema.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: livro, quantidade: 10, rotulo: "📦" },
        { imagemUrl: livro, quantidade: 10, rotulo: "📦" },
        { imagemUrl: livro, quantidade: 4, rotulo: "📕" },
      ],
      pergunta:
        "Desafio 5 — 'Havia 20 livros, chegaram 4.' Quantos agora?",
      opcoes: ["23", "24", "25"],
      correta: 1,
      feedbackAcerto:
        "🎉 MISSÃO CUMPRIDA! 20 + 4 = 24 livros. Cálculo mental na cabeça!",
      feedbackErro:
        "20 é dezena. + 4 = 24.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Ritual 1 de 5 — 10 + 3 = ?",
        opcoes: ["12", "13", "14"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 10 + 3 = 13.",
        feedbackErro: "Dezena + 3 = 13.",
      },
      {
        pergunta: "Ritual 2 de 5 — 52 = ?",
        opcoes: ["50 + 2", "5 + 2", "20 + 5"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 52 = 50 + 2.",
        feedbackErro: "5 dezenas (50) + 2 = 52.",
      },
      {
        pergunta: "Ritual 3 de 5 — 6 + ? = 10",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 6, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Isso! 6 + 4 = 10.",
        feedbackErro: "Do 6 faltam 4.",
      },
      {
        pergunta: "Ritual 4 de 5 — 'Ana tem 8 maçãs e ganhou 2.' Total?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 8, rotulo: "Tinha" },
          { imagemUrl: maca, quantidade: 2, rotulo: "Ganhou" },
        ],
        feedbackAcerto: "🎉 Isso! 8 + 2 = 10 (completou a dezena).",
        feedbackErro: "8 + 2 fecha 10.",
      },
      {
        pergunta:
          "Ritual 5 de 5 — Qual frase MELHOR descreve um bom matemático?",
        opcoes: [
          "Sempre conta um por um",
          "Escolhe a MELHOR estratégia para cada conta",
          "Nunca erra",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 MISSÃO COMPLETA! Você é INVENTOR(A) DOS CÁLCULOS! 🏅 ⚙️ Caixa de Ferramentas destravada!",
        feedbackErro:
          "Bom matemático ESCOLHE a estratégia certa. Erros ajudam a aprender.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "⚙️ Oficina em Casa",
    materiais: [
      "4 papeizinhos escritos: 'MENTAL', 'DECOMPOR', 'COMPLETAR 10', 'ESCOLHER'",
      "Uma caixa (será a 'Caixa de Ferramentas')",
      "Objetos pra contar",
    ],
    passos: [
      "1) A família propõe uma conta pra cada papel (ex.: 10+3, 45, 7+?=10, 15−5).",
      "2) A criança resolve usando a ferramenta do papel.",
      "3) A cada acerto, coloca o papel dentro da caixa.",
      "4) Quando a caixa estiver com as 4, ela é a CAIXA DE FERRAMENTAS.",
      "5) A criança recebe a medalha INVENTOR(A) DOS CÁLCULOS.",
    ],
    registro:
      "📸 Foto da Caixa de Ferramentas montada e da criança com a medalha.",
  },

  recompensa: {
    xp: 550,
    moedas: 350,
    medalha: "Inventor(a) dos Cálculos",
  },
};
