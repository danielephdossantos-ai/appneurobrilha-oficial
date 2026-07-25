import type { AulaV4 } from "../../types";

export const aula01_lerDecimais: AulaV4 = {
  slug: "u5-01-ler-decimais",
  titulo: "Ler e comparar decimais",
  iconeTrilha: "🔢",
  bncc: ["EF06MA08"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Depois da vírgula",
    historia: "{NOME}, 0,5 · 0,25 · 3,14… são NÚMEROS DECIMAIS. Depois da vírgula moram as CASAS DECIMAIS: décimos, centésimos, milésimos.",
  },

  momento02_exploracao: {
    instrucao: "Cada casa depois da vírgula vale 10× menos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Casas decimais",
        cabecalhos: ["Casa", "Vale", "Fração"],
        linhas: [
          { rotulo: "1ª", valores: ["1ª (décimos)", "0,1", "1/10"] },
          { rotulo: "2ª", valores: ["2ª (centésimos)", "0,01", "1/100"] },
          { rotulo: "3ª", valores: ["3ª (milésimos)", "0,001", "1/1000"] },
        ],
      },
      { tipo: "texto", texto: "Zeros à direita da parte decimal NÃO mudam o valor: 0,5 = 0,50 = 0,500.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "0,8 ou 0,75 — qual é maior?",
    pista: "Iguale a quantidade de casas: 0,80 vs 0,75.",
    revelacao: "0,80 > 0,75 → 0,8 > 0,75. Não deixe o '75' te enganar.",
  },

  momento04_explicacao: {
    titulo: "Ler e comparar",
    etapas: [
      {
        texto: "Lê-se a parte inteira, 'vírgula', e a parte decimal com o nome da ÚLTIMA casa.",
        exemploReal: {
          contexto: "2,45",
          destaque: "'Dois inteiros e quarenta e cinco centésimos'.",
        },
      },
      {
        texto: "Para comparar, IGUALE o número de casas com zeros à direita.",
        exemploReal: {
          contexto: "0,3 vs 0,27",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fração", "Igualadas"],
            linhas: [
              { rotulo: "0,3", valores: ["0,3", "0,30"] },
              { rotulo: "0,27", valores: ["0,27", "0,27"] },
            ],
          },
          destaque: "30 > 27 → 0,3 > 0,27.",
        },
      },
      {
        texto: "Decimal e fração: a fração /10, /100 ou /1000 vira decimal direto.",
        exemploReal: {
          contexto: "7/10 = 0,7 · 35/100 = 0,35 · 8/1000 = 0,008.",
          destaque: "Conte quantos zeros embaixo → tantas casas depois da vírgula.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordene: 0,5 · 0,45 · 0,405.",
    resposta: "0,405 < 0,45 < 0,5",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Original", "Igualado"],
      linhas: [
        { rotulo: "0,5", valores: ["0,5", "0,500"] },
        { rotulo: "0,45", valores: ["0,45", "0,450"] },
        { rotulo: "0,405", valores: ["0,405", "0,405"] },
      ],
    },
    passos: ["Iguale casas.", "Compare como se fossem inteiros: 500 > 450 > 405."],
  },

  momento06_praticaGuiada: {
    enunciado: "1,2 __ 1,20.",
    dica: "Zero à direita não muda valor.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "=" }, { nome: ">" }, { nome: "<" }],
      respostaCerta: "=",
      feedbackAcerto: "🎯 São iguais.",
      feedbackErro: "Zero à direita = mesma coisa.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Maior: 0,7 ou 0,68?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,7" }, { nome: "0,68" }, { nome: "iguais" }],
      respostaCerta: "0,7",
      feedbackAcerto: "🎯 0,70 > 0,68.",
      feedbackErro: "Iguale as casas.",
    },
  },

  momento08_aplicacao: {
    contexto: "Preço A: R$ 3,50. Preço B: R$ 3,05.",
    problema: "Qual é MAIS BARATO?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "B (3,05)" }, { nome: "A (3,50)" }, { nome: "iguais" }],
      respostaCerta: "B (3,05)",
      feedbackAcerto: "🎯 05 < 50 nos centésimos.",
      feedbackErro: "Compare centavo a centavo.",
    },
  },

  momento09_revisao: {
    pontos: ["Casas: décimo, centésimo, milésimo.", "Zeros à direita não mudam valor.", "Iguale casas antes de comparar."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,3 = ", opcoes: ["3/10", "3/100", "1/3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 casa = /10." },
      { pergunta: "0,5 __ 0,50:", opcoes: ["=", ">", "<"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Zeros à direita." },
      { pergunta: "Maior: 0,9 ou 0,89?", opcoes: ["0,9", "0,89"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,90 > 0,89." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Preços decimais",
    materiais: ["Encarte de mercado"],
    passos: ["Anote 3 preços com centavos.", "Ordene do mais barato pro mais caro."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
