import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 3 · Aula 5 — "Missão Final do Reino das Subtrações"
 * BNCC EF02MA05, EF02MA06, EF02MA07.
 *
 * Fecha a Unidade 3. Sequência de 5 desafios reorganizando o reino:
 *   1) Tirar frutas · 2) Contar o que sobrou · 3) Comparar ·
 *   4) Resolver conta armada · 5) Resolver problema.
 * Conquista: 🏅 Guardião(ã) do Reino das Subtrações.
 * Desbloqueio: 🛡️ Escudo dos Números.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u3-05-missao-final-subtracoes",
  titulo: "Missão Final do Reino das Subtrações",
  iconeTrilha: "🛡️",
  bncc: ["EF02MA05", "EF02MA06", "EF02MA07"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O vento voltou!",
    historia:
      "O vento forte voltou e bagunçou tudo de novo no Reino! Brilha precisa reorganizar em 5 missões: recolher frutas, contar o que ficou, comparar cestas, resolver conta armada e resolver um problema. Se completar, ganha o 🛡️ ESCUDO DOS NÚMEROS e a medalha de GUARDIÃO(Ã) DO REINO!",
    imagemUrl: brilha,
  },

  // Desafio 1 — TIRAR (10 − 4)
  momento02_exploracao: {
    instrucao:
      "Desafio 1 de 5 — TIRAR FRUTAS. Havia 10 maçãs. O vento levou 4. Toque nas maçãs que SOBRARAM:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 6,
      itemPlural: "maçãs",
      pergunta: "10 − 4 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você lembra tudo que aprendeu no Reino?",
    pista:
      "Tirar, símbolo −, comparar, conta horizontal, conta armada, problemas.",
    revelacao:
      "É! Agora é hora de mostrar tudo em 5 desafios. Vamos reorganizar o Reino!",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto: "5 desafios em sequência. Cada um reorganiza uma parte do Reino.",
        exemplo:
          "1) Tirar · 2) Contar o que sobrou · 3) Comparar · 4) Conta armada · 5) Problema.",
      },
      {
        texto:
          "Se errar, Brilha explica e você tenta outra vez. O importante é chegar ao fim.",
        exemplo: "Não é prova, é MISSÃO.",
      },
      {
        texto:
          "No final: 🏅 medalha, XP, moedas e 🛡️ ESCUDO DOS NÚMEROS desbloqueado.",
        exemplo: "Ele protege o que você aprendeu pras próximas unidades.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha revisa cada desafio rapidinho:",
    passos: [
      "1) Tirar: 10 maçãs − 4 = 6.",
      "2) Sobrou: 9 − 3 = 6 peixes.",
      "3) Comparar: A tem 8, B tem 5 → 8 − 5 = 3.",
      "4) Armada: 9 − 4 = 5.",
      "5) Problema: '12 balões, 5 estouraram' → 12 − 5 = 7.",
    ],
    resposta: "Pronto pra missão!",
    visualUrl: brilha,
  },

  // Desafio 2 — CONTA (9 − 3)
  momento06_praticaGuiada: {
    enunciado:
      "Desafio 2 de 5 — RESOLVER CONTA. Arme e resolva: 9 − 3.",
    dica: "Do 9 volte 3: oito, sete, seis. Fica 6.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: banana,
      itemPlural: "bananas",
      a: 9,
      b: 3,
      legenda: "9 − 3 = 6",
    },
  },

  // Desafio 3 — COMPARAR
  momento07_praticaIndependente: {
    enunciado:
      "Desafio 3 de 5 — COMPARAR. 'A cesta A tem 8 flores. A cesta B tem 5.' Quantas A tem A MAIS?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 8, rotulo: "A" },
        { imagemUrl: flor, quantidade: 5, rotulo: "B" },
      ],
      pergunta: "Qual conta certa?",
      opcoes: ["8 + 5 = 13", "8 − 5 = 3", "8 = 5"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Diferença = MAIOR − MENOR. 8 − 5 = 3 flores.",
      feedbackErro:
        "'Quanto A mais' pede SUBTRAÇÃO. 8 − 5 = 3.",
    },
  },

  // Desafio 4 — PROBLEMA (12 − 5)
  momento08_aplicacao: {
    contexto:
      "Desafio 4 de 5 — RESOLVER PROBLEMA. 'Na festa havia 12 balões. 5 estouraram.'",
    problema:
      "Quantos balões sobraram inteiros?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 12, rotulo: "Tinha" },
      ],
      pergunta: "12 − 5 = ?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 12 − 5 = 7 balões. 'Estouraram' é TIRAR.",
      feedbackErro:
        "Do 12 volte 5: onze, dez, nove, oito, sete. Fica 7.",
    },
  },

  momento09_revisao: {
    pontos: [
      "4 desafios completos! Falta a última parte do Reino pra reorganizar.",
      "🎯 ÚLTIMO DESAFIO: EXPLICAR o resultado.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 8, rotulo: "🍎" },
      ],
      pergunta:
        "Desafio 5 — Se 8 − 3 = 5, o que essa conta MOSTRA?",
      opcoes: [
        "Que juntamos e ficou 5",
        "Que tiramos 3 de 8 e sobraram 5",
        "Que 8 é maior que 3",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 MISSÃO CUMPRIDA! Subtração = tirar. 8 − 3 = 5 mostra quanto SOBROU. 🏅 Reino reorganizado!",
      feedbackErro:
        "Subtração TIRA. 8 − 3 = 5 diz: tirei 3 de 8 e sobraram 5.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Ritual 1 de 5 — 7 − 2 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 7, rotulo: "🍎" },
        ],
        tirar: 2,
        feedbackAcerto: "🎉 Isso! 7 − 2 = 5.",
        feedbackErro: "Do 7 volte 2: seis, cinco. Fica 5.",
      },
      {
        pergunta:
          "Ritual 2 de 5 — Qual sinal significa TIRAR (subtração)?",
        opcoes: ["+", "−", "="],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O '−' é subtração.",
        feedbackErro: "Tirar = '−'. Juntar = '+'.",
      },
      {
        pergunta: "Ritual 3 de 5 — 10 − 4 = ?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 10, rotulo: "⚽" },
        ],
        tirar: 4,
        feedbackAcerto: "🎉 Isso! 10 − 4 = 6.",
        feedbackErro: "Do 10 volte 4: fica 6.",
      },
      {
        pergunta:
          "Ritual 4 de 5 — 'Tinha 9 estrelas e 3 se apagaram.' Sobraram?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 9, rotulo: "🌟" },
        ],
        tirar: 3,
        feedbackAcerto: "🎉 Uau! 9 − 3 = 6 estrelas.",
        feedbackErro: "'Se apagaram' = tirar. 9 − 3 = 6.",
      },
      {
        pergunta:
          "Ritual 5 de 5 — Qual dessas frases MELHOR explica uma SUBTRAÇÃO?",
        opcoes: [
          "Juntar dois grupos e achar o total",
          "Tirar/comparar e descobrir o que sobra ou a diferença",
          "Escrever qualquer conta com números",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 MISSÃO COMPLETA! Você é GUARDIÃO(Ã) DO REINO DAS SUBTRAÇÕES! 🏅 🛡️ Escudo dos Números desbloqueado!",
        feedbackErro:
          "Subtração = TIRAR ou COMPARAR pra achar o que sobra/diferença.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🛡️ Reorganizando o Reino em Casa",
    materiais: [
      "Objetos pra contar (feijões, tampinhas, brinquedos)",
      "2 potes",
      "Papel e lápis",
    ],
    passos: [
      "1) A família 'bagunça' 12 objetos em cima da mesa.",
      "2) A criança escolhe uma quantidade pra TIRAR e conta o que sobrou.",
      "3) Depois separa em 2 potes com quantidades diferentes e COMPARA.",
      "4) Escreve as duas contas no papel: uma subtração de TIRAR e uma de COMPARAR.",
      "5) A criança recebe o ESCUDO DOS NÚMEROS (desenhado): GUARDIÃO(Ã) DO REINO DAS SUBTRAÇÕES.",
    ],
    registro:
      "📸 Foto do escudo e das duas contas escritas.",
  },

  recompensa: {
    xp: 500,
    moedas: 300,
    medalha: "Guardião(ã) do Reino das Subtrações",
  },
};
