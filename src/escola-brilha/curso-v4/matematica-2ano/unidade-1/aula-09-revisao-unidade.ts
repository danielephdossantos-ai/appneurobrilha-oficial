import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 9 — "Revisão da Unidade"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Circuito de miniestações reaproveitando as mecânicas travadas:
 *   contar até 20 · comparar quantidades · sinais >, <, = ·
 *   dezenas e unidades · somas simples. Sem novidades mecânicas.
 *
 * BNCC: EF02MA01, EF02MA03, EF02MA04, EF02MA05.
 */
export const aula09_revisaoUnidade: AulaV4 = {
  slug: "09-revisao-unidade",
  titulo: "Revisão da Feira",
  iconeTrilha: "🔄",
  bncc: ["EF02MA01", "EF02MA03", "EF02MA04", "EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Circuito da Feira!",
    historia:
      "A Feira dos Números vai fechar por hoje e Brilha quer conferir se aprendemos TUDO. Preparou um circuito rápido com 5 estações: contar, comparar, sinais, dezenas e somar. Quem passar por todas ganha XP em dobro!",
    imagemUrl: brilha,
  },

  // Estação 1 — CONTAR até 20 (revisando Aula 2)
  momento02_exploracao: {
    instrucao:
      "Estação 1 — CONTAR. Toque em cada maçã pra contar até 15:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 15,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs tem na cesta?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você já sabe muita coisa! Consegue lembrar TUDO que aprendemos até agora nesta unidade?",
    pista:
      "Aula 2: contar. Aula 3/4: comparar (>, <, =). Aula 5: caixotes e dezenas. Aulas 6/7: somar. Aula 8: resolver problemas.",
    revelacao:
      "Isso! Você é praticamente um(a) especialista da Feira dos Números. Vamos testar tudo agora!",
  },

  momento04_explicacao: {
    titulo: "Lembretes rápidos das 5 estações",
    etapas: [
      {
        texto:
          "Estação 1 — CONTAR: toque uma a uma e diga o número em voz alta.",
        exemplo: "1, 2, 3... até chegar no total.",
      },
      {
        texto:
          "Estação 2 — COMPARAR: quem tem MAIS? Conte os dois grupos e olhe qual número vem depois na fila.",
        exemplo: "8 é maior que 5, porque 8 vem depois.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 8, qtdGrupos: 1, rotulo: "🐰 8" },
          { imagemUrl: maca, tamanhoGrupo: 5, qtdGrupos: 1, rotulo: "🦉 5" },
        ],
      },
      {
        texto:
          "Estação 3 — SINAIS: '>' maior, '<' menor, '=' igual. A boca aberta 'come' o maior.",
        exemplo: "8 > 5. 3 < 7. 6 = 6.",
      },
      {
        texto:
          "Estação 4 — DEZENAS: cada caixote vale 10. Caixotes viram o primeiro algarismo, soltas o segundo.",
        exemplo: "2 caixotes + 3 soltas = 23.",
        agrupamentos: [
          { imagemUrl: banana, tamanhoGrupo: 10, qtdGrupos: 2, rotulo: "📦📦 = 20" },
          { imagemUrl: banana, tamanhoGrupo: 3, qtdGrupos: 1, rotulo: "🍌 3" },
        ],
      },
      {
        texto:
          "Estação 5 — SOMAR: junte as duas quantidades. Soltas com soltas, caixotes com caixotes.",
        exemplo: "12 + 5 = 17.",
        contaArmada: {
          a: 12,
          b: 5,
          resultado: 17,
          itemPlural: "maçãs",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai fazer um exemplo de cada estação bem rapidinho:",
    passos: [
      "Contar: '1, 2, 3... 10 maçãs!'",
      "Comparar: 'Tenho 10, você tem 7. Eu tenho MAIS.'",
      "Sinal: 'Escrevo 10 > 7. Boca aberta pro 10.'",
      "Dezena: '10 é 1 caixote e 0 soltas.'",
      "Somar: '10 + 7 = 17. Uni: 0+7=7, dez: 1+0=1.'",
    ],
    resposta: "Circuito completo!",
    visualUrl: maca,
  },

  // Estação 2 — COMPARAR
  momento06_praticaGuiada: {
    enunciado:
      "Estação 2 — COMPARAR. Seu Coelho tem 9 maçãs, Dona Coruja tem 6. Quem tem MAIS?",
    dica: "9 vem DEPOIS do 6 na fila dos números → 9 é maior.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 9, rotulo: "🐰 Coelho" },
        { imagemUrl: maca, quantidade: 6, rotulo: "🦉 Coruja" },
      ],
      pergunta: "Quem tem MAIS maçãs?",
      opcoes: ["Coelho (9)", "Coruja (6)", "Iguais"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 9 > 6. O Coelho venceu.",
      feedbackErro: "9 é maior que 6 (vem depois). O Coelho tem mais.",
    },
  },

  // Estação 3 — SINAIS
  momento07_praticaIndependente: {
    enunciado:
      "Estação 3 — SINAIS. Qual completa: 4 __ 8 ?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 4, rotulo: "4" },
        { imagemUrl: banana, quantidade: 8, rotulo: "8" },
      ],
      pergunta: "Sinal certo entre 4 e 8?",
      opcoes: ["4 > 8", "4 < 8", "4 = 8"],
      correta: 1,
      feedbackAcerto:
        "🎉 Perfeito! 4 < 8. A boca aberta aponta pro 8, que é o maior.",
      feedbackErro:
        "8 é maior. A boca do sinal aponta pro maior. Fica 4 < 8.",
    },
  },

  // Estação 4 — DEZENAS
  momento08_aplicacao: {
    contexto:
      "Estação 4 — DEZENAS. Dona Coruja arrumou 3 caixotes de bananas e 4 soltas.",
    problema:
      "Qual é o número?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
      ],
      pergunta: "3 caixotes + 4 soltas = ?",
      opcoes: ["7", "34", "43"],
      correta: 1,
      feedbackAcerto: "🎉 Uau! 3 caixotes = 30. Mais 4 soltas = 34.",
      feedbackErro: "Caixotes na frente (3), soltas atrás (4). Fica 34.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Circuito quase completo! Já contamos, comparamos, usamos sinais e lemos dezenas.",
      "Falta a última estação: SOMAR.",
      "🎯 Estação final!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎 +" },
      ],
      pergunta: "Estação 5 — SOMAR: 12 + 5 = ?",
      opcoes: ["7", "17", "27"],
      correta: 1,
      feedbackAcerto:
        "🎉 Boa! 12 + 5 = 17. Só as soltas mudam: 2+5=7.",
      feedbackErro:
        "Soltas: 2+5=7. Caixote continua 1. Fica 17.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 (CONTAR) — Quantas maçãs?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [{ imagemUrl: maca, quantidade: 8, rotulo: "🍎" }],
        feedbackAcerto: "🎉 Isso! 8 maçãs.",
        feedbackErro: "Conte com calma: 1,2,3,4,5,6,7,8. São 8.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 (COMPARAR) — 7 __ 3. Qual sinal?",
        opcoes: ["7 > 3", "7 < 3", "7 = 3"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 7, rotulo: "7" },
          { imagemUrl: banana, quantidade: 3, rotulo: "3" },
        ],
        feedbackAcerto: "🎉 Perfeito! 7 > 3.",
        feedbackErro: "7 é maior. Boca do sinal pro maior: 7 > 3.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 (DEZENA) — Quantas maçãs em 2 caixotes e 6 soltas?",
        opcoes: ["8", "26", "62"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Boa! 20 + 6 = 26.",
        feedbackErro: "Caixotes viram dezena (2), soltas viram unidade (6). Fica 26.",
      },
      {
        pergunta: "Pergunta 4 de 5 (SOMA simples) — 6 + 4 = ?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 4, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Isso! 6 + 4 = 10. Cesta cheia!",
        feedbackErro: "Comece no 6 e conte +4: 7,8,9,10.",
      },
      {
        pergunta: "Pergunta 5 de 5 (SOMA com dezenas) — 21 + 14 = ?",
        opcoes: ["25", "35", "45"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 1, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
        ],
        feedbackAcerto:
          "🎉 Uau! 21 + 14 = 35. Soltas 1+4=5, caixotes 2+1=3. Circuito completo! 🏆",
        feedbackErro:
          "Soltas (1+4=5) + Caixotes (2+1=3) → 35.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔄 Circuito da Feira em Casa",
    materiais: [
      "Objetos pra contar (feijões, tampinhas)",
      "2 potes",
      "Papel e lápis",
    ],
    passos: [
      "1) Estação CONTAR: adulto joga um punhado; criança conta em voz alta.",
      "2) Estação COMPARAR: cada um enche um pote; a criança diz quem tem mais.",
      "3) Estação SINAIS: escreve no papel o sinal certo (>, <, =).",
      "4) Estação DEZENAS: monta caixotes de 10 e diz o número (ex.: '2 caixotes e 4 soltas = 24').",
      "5) Estação SOMAR: junta os dois potes e diz a soma em voz alta.",
    ],
    registro:
      "📸 Foto do 'passaporte' com uma marca pra cada estação completada.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Circuito da Feira Completo",
  },
};
