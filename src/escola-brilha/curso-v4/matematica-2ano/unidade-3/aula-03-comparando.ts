import type { AulaV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 3 · Aula 3 — "Comparando Quantidades"
 * BNCC EF02MA05, EF02MA06.
 *
 * Descobre que a subtração também RESPONDE:
 * "quanto um grupo tem a MAIS que outro?" → 7 − 4 = 3.
 */
export const aula03_comparando: AulaV4 = {
  slug: "u3-03-comparando-quantidades",
  titulo: "Comparando Quantidades",
  iconeTrilha: "⚖️",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Dois ursinhos, duas coleções",
    historia:
      "Dois ursinhos amigos estavam comparando seus brinquedos. O Ursinho A tinha 7 brinquedos. O Ursinho B tinha 4. Eles começaram a discutir: 'Quem tem MAIS?' e 'QUANTOS a mais?' A Coruja explicou: 'A subtração também serve pra isso — pra COMPARAR!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Faça o pareamento mentalmente: cada estrela do grupo B tem uma parceira no grupo A. Toque nas que SOBRAM no grupo maior:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 7, rotulo: "Ursinho A" },
      { tipo: "grupoItens", imagemUrl: estrela, quantidade: 4, rotulo: "Ursinho B" },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: estrela,
      quantidade: 3,
      itemPlural: "estrelas",
      pergunta: "Quantas o Ursinho A tem A MAIS?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você notou o que fizemos pra saber a diferença?",
    pista:
      "Pareamos um a um. As que sobraram no grupo maior são a diferença.",
    revelacao:
      "Isso! A subtração descobre A DIFERENÇA entre dois grupos. 7 − 4 = 3 quer dizer: A tem 3 a mais que B.",
  },

  momento04_explicacao: {
    titulo: "Subtração também compara",
    etapas: [
      {
        texto:
          "Etapa 2 — Quando queremos saber QUANTOS A MAIS, usamos '−'.",
        exemplo: "A tem 7. B tem 4. A tem quantos a mais? 7 − 4 = 3.",
        contaArmada: {
          a: 7,
          b: 4,
          resultado: 3,
          operacao: "subtracao",
        },
      },
      {
        texto:
          "Etapa 3 — 'Quanto a mais' e 'quanto a menos' respondem à MESMA conta.",
        exemplo: "A tem 3 a mais que B ⇔ B tem 3 a menos que A.",
      },
      {
        texto:
          "Etapa 4 — Sempre subtraia o MENOR do MAIOR.",
        exemplo: "9 flores − 5 flores = 4 flores de diferença.",
        contaArmada: {
          a: 9,
          b: 5,
          resultado: 4,
          operacao: "subtracao",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha compara duas cestas de flores em voz alta:",
    passos: [
      "Cesta 1 tem 8 flores. Cesta 2 tem 5.",
      "Pareio: 5 com 5. Sobram flores na Cesta 1.",
      "Conto o que sobrou: 1, 2, 3.",
      "Escrevo: 8 − 5 = 3.",
      "Resposta: Cesta 1 tem 3 flores A MAIS.",
    ],
    resposta: "8 − 5 = 3",
    visualUrl: flor,
    colecaoVisual: {
      imagemUrl: flor,
      grupos: [8, 5],
      itemPlural: "flores",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — João tem 8 adesivos. Pedro tem 3. Quantos João tem A MAIS?",
    dica: "Pareia um a um. Do 8, tire 3: sete, seis, cinco. Fica 5.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: estrela,
      itemPlural: "adesivos",
      a: 8,
      b: 3,
      legenda: "8 − 3 = 5 adesivos a mais",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Maria tem 6 flores. Sofia tem 9. Quantas flores Maria tem A MENOS?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 9, rotulo: "Sofia" },
        { imagemUrl: flor, quantidade: 6, rotulo: "Maria" },
      ],
      pergunta: "9 − 6 = ?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 9 − 6 = 3. Maria tem 3 a menos.",
      feedbackErro: "Sempre MAIOR menos MENOR: 9 − 6 = 3.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — A caixa vermelha tem 10 bolas. A azul tem 7.",
    problema:
      "Quantas bolas a caixa vermelha tem A MAIS?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 10, rotulo: "Vermelha" },
        { imagemUrl: bola, quantidade: 7, rotulo: "Azul" },
      ],
      pergunta: "10 − 7 = ?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! 10 − 7 = 3 bolas a mais.",
      feedbackErro: "Do 10 tire 7: nove, oito, sete... vira 3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "A subtração COMPARA duas quantidades.",
      "Sempre MAIOR − MENOR = DIFERENÇA.",
      "'A mais' e 'a menos' usam a mesma conta.",
      "⚖️ Minijogo: Compare as cestas!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: lapis, quantidade: 7, rotulo: "Cesta A" },
        { imagemUrl: lapis, quantidade: 4, rotulo: "Cesta B" },
      ],
      pergunta: "Qual é a DIFERENÇA de lápis entre A e B?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 − 4 = 3. A tem 3 lápis a mais.",
      feedbackErro: "Diferença = MAIOR − MENOR = 7 − 4 = 3.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — A: 5 estrelas. B: 3. Diferença?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 5, rotulo: "A" },
          { imagemUrl: estrela, quantidade: 3, rotulo: "B" },
        ],
        feedbackAcerto: "🎉 Isso! 5 − 3 = 2.",
        feedbackErro: "5 − 3 = 2.",
      },
      {
        pergunta: "Pergunta 2 de 5 — João: 8 adesivos. Pedro: 4. João tem quantos A MAIS?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 8, rotulo: "João" },
          { imagemUrl: estrela, quantidade: 4, rotulo: "Pedro" },
        ],
        feedbackAcerto: "🎉 Isso! 8 − 4 = 4.",
        feedbackErro: "MAIOR − MENOR: 8 − 4 = 4.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Maria: 6. Sofia: 9. Maria tem quantas A MENOS?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: flor, quantidade: 9, rotulo: "Sofia" },
          { imagemUrl: flor, quantidade: 6, rotulo: "Maria" },
        ],
        feedbackAcerto: "🎉 Boa! 9 − 6 = 3.",
        feedbackErro: "9 − 6 = 3.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Vermelha: 10 bolas. Azul: 7. Diferença?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 10, rotulo: "Vermelha" },
          { imagemUrl: bola, quantidade: 7, rotulo: "Azul" },
        ],
        feedbackAcerto: "🎉 Isso! 10 − 7 = 3 bolas.",
        feedbackErro: "10 − 7 = 3.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Pra descobrir 'quanto a mais', a gente usa qual operação?",
        opcoes: ["Adição", "Subtração", "Comparação sem conta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Subtração compara também. 🏆",
        feedbackErro: "SUBTRAÇÃO responde 'quanto a mais/menos'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "⚖️ Duas Cestas em Casa",
    materiais: [
      "Dois conjuntos pequenos de objetos (feijões, tampinhas)",
      "Dois potes ou pratos",
      "Papel e lápis",
    ],
    passos: [
      "1) A família monta duas cestas com quantidades diferentes (ex.: 8 e 5).",
      "2) A criança conta cada cesta em voz alta.",
      "3) Pareia um a um pra ver quem tem a MAIS.",
      "4) Escreve a diferença: 8 − 5 = 3.",
      "5) Repete 2 vezes com quantidades diferentes.",
    ],
    registro:
      "📸 Foto das duas cestas com o cartaz da diferença.",
  },

  recompensa: {
    xp: 170,
    moedas: 90,
    medalha: "Comparador(a) do Reino",
  },
};
