import type { AulaV4 } from "../../types";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 4 · Aula 2 — "Decompondo os Números"
 * BNCC EF02MA05, EF02MA06.
 *
 * Todo número de 2 dígitos = dezenas + unidades.
 * 34 = 30 + 4. Base pro cálculo mental das próximas aulas.
 */
export const aula02_decompondo: AulaV4 = {
  slug: "u4-02-decompondo-numeros",
  titulo: "Decompondo os Números",
  iconeTrilha: "🧩",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Peças da oficina",
    historia:
      "O Inventor dos Números mostrou dois tipos de peça: CAIXOTES (📦 valem 10) e ESTRELINHAS (⭐ valem 1). Ele perguntou: 'Como eu monto o número 34 com essas peças?'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Aqui está o 34 montado: 3 caixotes de 10 e 4 estrelinhas. Toque em cada PEÇA pra contar:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: bloco,
      quantidade: 34,
      itemPlural: "peças",
      pergunta: "Quantas peças ao todo?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você conseguiu ver as duas partes do 34?",
    pista:
      "Uma parte é a dezena, outra é a unidade.",
    revelacao:
      "Isso! 34 = 30 + 4. Todo número tem uma PARTE DEZENA e uma PARTE UNIDADE. Chamamos isso de DECOMPOR.",
  },

  momento04_explicacao: {
    titulo: "Decompor = separar em partes",
    etapas: [
      {
        texto: "Etapa 2 — 34 = 30 + 4. 3 caixotes + 4 estrelinhas.",
        exemplo: "Trinta e QUATRO.",
        agrupamentos: [
          { imagemUrl: bloco, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "Dezenas" },
          { imagemUrl: estrela, tamanhoGrupo: 1, qtdGrupos: 4, rotulo: "Unidades" },
        ],
      },
      {
        texto: "Etapa 3 — 46 = 40 + 6.",
        exemplo: "4 caixotes + 6 estrelinhas.",
        agrupamentos: [
          { imagemUrl: bloco, tamanhoGrupo: 10, qtdGrupos: 4, rotulo: "Dezenas" },
          { imagemUrl: estrela, tamanhoGrupo: 1, qtdGrupos: 6, rotulo: "Unidades" },
        ],
      },
      {
        texto: "Etapa 4 — 52 = 50 + 2.",
        exemplo: "5 caixotes + 2 estrelinhas.",
        agrupamentos: [
          { imagemUrl: bloco, tamanhoGrupo: 10, qtdGrupos: 5, rotulo: "Dezenas" },
          { imagemUrl: estrela, tamanhoGrupo: 1, qtdGrupos: 2, rotulo: "Unidades" },
        ],
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha decompõe o 46 pensando em voz alta:",
    passos: [
      "Olho os dois algarismos: 4 e 6.",
      "O 4 está no lugar da dezena → vale 40.",
      "O 6 está no lugar da unidade → vale 6.",
      "Escrevo: 46 = 40 + 6.",
      "Pronto: já sei que peças usar!",
    ],
    resposta: "46 = 40 + 6",
    visualUrl: bloco,
    colecaoVisual: {
      imagemUrl: bloco,
      grupos: [10, 10, 10, 10, 6],
      itemPlural: "peças",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Decomponha o 27 junto: quantas dezenas e quantas unidades?",
    dica: "27 = 20 + 7. 2 caixotes e 7 estrelinhas.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 7, rotulo: "⭐" },
      ],
      pergunta: "27 = ?",
      opcoes: ["10 + 7", "20 + 7", "20 + 17"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 27 = 20 + 7.",
      feedbackErro: "Duas dezenas + 7 unidades = 20 + 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Decomponha o 63.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 3, rotulo: "⭐" },
      ],
      pergunta: "63 = ?",
      opcoes: ["60 + 3", "6 + 3", "30 + 6"],
      correta: 0,
      feedbackAcerto: "🎉 Perfeito! 63 = 60 + 3.",
      feedbackErro: "6 dezenas = 60. + 3 unidades. Resposta: 60 + 3.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — O Inventor pede que a criança monte o número 18 com peças.",
    problema:
      "Quantas dezenas e quantas unidades tem o 18?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 8, rotulo: "⭐" },
      ],
      pergunta: "18 = ?",
      opcoes: ["10 + 8", "18 + 0", "1 + 8"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 18 = 10 + 8. 1 caixote e 8 estrelinhas.",
      feedbackErro: "1 dezena + 8 unidades = 10 + 8.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Todo número de 2 dígitos = DEZENAS + UNIDADES.",
      "34 = 30 + 4. O primeiro algarismo é dezena.",
      "Decompor ajuda a calcular na cabeça.",
      "🧩 Minijogo: Quebra-cabeça das Dezenas!",
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
      pergunta: "Qual número está montado?",
      opcoes: ["35", "45", "55"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 4 dezenas + 5 = 45.",
      feedbackErro: "Conte as dezenas: 10, 20, 30, 40. + 5 = 45.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 34 = ?",
        opcoes: ["3 + 4", "30 + 4", "30 + 40"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 34 = 30 + 4.",
        feedbackErro: "3 é dezena (vale 30). 4 é unidade. = 30 + 4.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 52 = ?",
        opcoes: ["50 + 2", "5 + 2", "20 + 5"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 52 = 50 + 2.",
        feedbackErro: "5 dezenas = 50. + 2 = 52.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 27 = ?",
        opcoes: ["20 + 7", "2 + 7", "70 + 2"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 27 = 20 + 7.",
        feedbackErro: "2 dezenas = 20. + 7 unidades = 27.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Quantas DEZENAS tem o 63?",
        opcoes: ["3", "6", "63"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O 6 do 63 são 6 DEZENAS.",
        feedbackErro: "O primeiro algarismo é dezena. 63 → 6 dezenas.",
      },
      {
        pergunta: "Pergunta 5 de 5 — 18 = 10 + ?",
        opcoes: ["1", "8", "18"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 18 = 10 + 8. 🏆",
        feedbackErro: "18 é 1 dezena e 8 unidades. 10 + 8.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧩 Quebra-cabeça em Casa",
    materiais: [
      "10 tampinhas de um tipo (serão as 'dezenas')",
      "10 tampinhas de outro tipo (serão as 'unidades')",
      "Papel e lápis",
    ],
    passos: [
      "1) O adulto diz um número: 23, 45, 31, 52.",
      "2) A criança monta o número usando as tampinhas (dezenas + unidades).",
      "3) Escreve no papel: 23 = 20 + 3.",
      "4) Repete com 4 números diferentes.",
      "5) A família confere.",
    ],
    registro:
      "📸 Foto das 4 decomposições montadas com as tampinhas.",
  },

  recompensa: {
    xp: 170,
    moedas: 85,
    medalha: "Decompositor(a) da Oficina",
  },
};
