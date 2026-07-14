import type { AulaV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 4 · Aula 3 — "Completando a Dezena"
 * BNCC EF02MA05, EF02MA06.
 *
 * Descobre a estratégia mais poderosa do 2º ano: "o que falta pra 10?".
 * Base pra fatos rápidos (8+2, 7+3, 6+4, 9+1).
 */
export const aula03_completandoDezena: AulaV4 = {
  slug: "u4-03-completando-dezena",
  titulo: "Completando a Dezena",
  iconeTrilha: "📦",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Caixas do robô",
    historia:
      "O robô da oficina só entrega caixas CHEIAS — cada caixa cabe 10 peças. Se falta alguma, a caixa fica na esteira. Brilha precisa descobrir QUANTAS PEÇAS FALTAM em cada caixa pra ela poder ser entregue.",
    imagemUrl: robo,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Esta caixa tem 8 peças e cabe 10. Toque nas ESTRELAS que já estão dentro pra contar:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: estrela,
      quantidade: 8,
      itemPlural: "estrelas",
      pergunta: "Quantas ainda faltam pra completar 10?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Sem contar de novo tudo, dá pra saber quanto FALTA?",
    pista:
      "Se tem 8 e a caixa é de 10, penso: 8 + ? = 10.",
    revelacao:
      "Isso! COMPLETAR A DEZENA é achar quanto falta pra chegar em 10. 8 + 2 = 10.",
  },

  momento04_explicacao: {
    titulo: "Quanto falta pra 10?",
    etapas: [
      {
        texto: "Etapa 2 — 8 + 2 = 10. Duas estrelas completam a caixa.",
        exemplo: "8 e 2 são amigos que fazem 10.",
        contaArmada: { a: 8, b: 2, resultado: 10, operacao: "soma" },
      },
      {
        texto: "Etapa 3 — 7 + 3 = 10. Faltam 3.",
        exemplo: "7 e 3 também são amigos.",
        contaArmada: { a: 7, b: 3, resultado: 10, operacao: "soma" },
      },
      {
        texto: "Etapa 4 — 6 + 4 = 10. Faltam 4.",
        exemplo: "6 e 4 fecham a dezena.",
        contaArmada: { a: 6, b: 4, resultado: 10, operacao: "soma" },
      },
      {
        texto: "Etapa 5 — 9 + 1 = 10. Falta só 1.",
        exemplo: "9 e 1 são bem pertinho.",
        contaArmada: { a: 9, b: 1, resultado: 10, operacao: "soma" },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha completa uma caixa de 10 que tem 7 peças:",
    passos: [
      "Vejo 7 estrelas na caixa.",
      "A caixa é de 10.",
      "Penso: do 7 pra chegar no 10 faltam... 8, 9, 10 — três!",
      "Escrevo: 7 + 3 = 10.",
      "Resposta: faltam 3 estrelas.",
    ],
    resposta: "7 + 3 = 10",
    visualUrl: caixa,
    colecaoVisual: {
      imagemUrl: estrela,
      grupos: [7, 3],
      itemPlural: "estrelas",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — A caixa tem 5 estrelas e cabe 10. Quantas faltam?",
    dica: "Do 5 pra 10: 6, 7, 8, 9, 10. Cinco!",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: estrela,
      itemPlural: "estrelas",
      a: 5,
      b: 5,
      legenda: "5 + 5 = 10",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — A caixa tem 4 estrelas. Quantas faltam pra 10?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 4, rotulo: "Já tem" },
      ],
      pergunta: "4 + ? = 10",
      opcoes: ["5", "6", "7"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 4 + 6 = 10.",
      feedbackErro: "Do 4 pra 10: 5,6,7,8,9,10 — faltam 6.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Pedro tinha 3 figurinhas no álbum. O álbum de hoje precisa de 10.",
    problema:
      "Quantas figurinhas faltam pra ele completar?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 3, rotulo: "Já tem" },
      ],
      pergunta: "3 + ? = 10",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 3 + 7 = 10. Faltam 7 figurinhas.",
      feedbackErro: "Do 3 pra 10 faltam 7 (4,5,6,7,8,9,10).",
    },
  },

  momento09_revisao: {
    pontos: [
      "COMPLETAR A DEZENA = achar quanto falta pra 10.",
      "Duplas amigas: 1+9, 2+8, 3+7, 4+6, 5+5.",
      "Essa estratégia acelera MUITAS contas.",
      "📦 Minijogo: Complete a Caixa!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 6, rotulo: "Já tem" },
      ],
      pergunta: "6 + ? = 10",
      opcoes: ["3", "4", "5"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 6 + 4 = 10. Caixa entregue!",
      feedbackErro: "Do 6 pra 10 faltam 4 (7,8,9,10).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 8 + ? = 10",
        opcoes: ["1", "2", "3"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 8, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Isso! 8 + 2 = 10.",
        feedbackErro: "Do 8 faltam 2: 9, 10.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 7 + ? = 10",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 7, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Boa! 7 + 3 = 10.",
        feedbackErro: "Do 7 faltam 3.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 6 + ? = 10",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 6, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Isso! 6 + 4 = 10.",
        feedbackErro: "Do 6 faltam 4.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 9 + ? = 10",
        opcoes: ["1", "2", "3"],
        correta: 0,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 9, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Isso! 9 + 1 = 10.",
        feedbackErro: "Do 9 falta só 1.",
      },
      {
        pergunta: "Pergunta 5 de 5 — 5 + ? = 10",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [{ imagemUrl: estrela, quantidade: 5, rotulo: "Já tem" }],
        feedbackAcerto: "🎉 Uau! 5 + 5 = 10. 🏆",
        feedbackErro: "5 e 5 formam 10.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📦 Caixa de 10 em Casa",
    materiais: [
      "1 caixa de ovos vazia (10 espaços) ou desenho no papel com 10 quadradinhos",
      "Tampinhas, feijões ou pedrinhas",
    ],
    passos: [
      "1) O adulto coloca uma quantidade qualquer na caixa (ex.: 6 tampinhas).",
      "2) A criança conta o que TEM.",
      "3) A criança descobre quantas FALTAM pra completar 10.",
      "4) Confere colocando as que faltam.",
      "5) Repete com 4 quantidades diferentes.",
    ],
    registro:
      "📸 Foto das 4 caixas de 10 completadas.",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Amigo(a) do 10",
  },
};
