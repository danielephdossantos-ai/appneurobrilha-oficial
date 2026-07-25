import type { AulaV4 } from "../../types";

export const aula02_comparar: AulaV4 = {
  slug: "u1-02-comparar",
  titulo: "Comparar e ordenar bilhões",
  iconeTrilha: "⚖️",
  bncc: ["EF06MA01"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Qual país arrecadou mais?",
    historia:
      "{NOME}, o Laboratório recebeu 4 relatórios com bilhões. Precisamos ORDENAR do maior pro menor — mas comparar bilhões pede uma regra CIENTÍFICA: casa por casa.",
  },

  momento02_exploracao: {
    instrucao: "Alinhe pela direita — cada dígito ocupa UMA casa de valor.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Hierarquia das casas (da esquerda pra direita = do MAIOR pro menor peso)",
        cabecalhos: ["CB", "DB", "UB", "CMi", "DMi", "UMi", "CM", "DM", "UM", "C", "D", "U"],
        linhas: [
          { rotulo: "Valor", valores: ["100 bi", "10 bi", "1 bi", "100 mi", "10 mi", "1 mi", "100 mil", "10 mil", "1 mil", "100", "10", "1"] },
        ],
      },
      { tipo: "texto", texto: "Regra 1: mais DÍGITOS = maior. Regra 2: mesmo tamanho? Compare da ESQUERDA para a direita.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "1.250.000 ou 999.999.999 — qual é maior?",
    pista: "Conte os dígitos primeiro. NÃO confie no '9 grande no começo'.",
    revelacao: "1.250.000 → 7 dígitos. 999.999.999 → 9 dígitos. Vence quem tem MAIS casas: 999.999.999.",
  },

  momento04_explicacao: {
    titulo: "Comparação por casa de valor",
    etapas: [
      {
        texto: "Empatou o tamanho? Alinhe pela direita e compare o PRIMEIRO dígito diferente da esquerda pra direita.",
        exemploReal: {
          contexto: "Compare 2.345.000 e 2.354.000.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Mi", "CM", "DM", "UM", "C", "D", "U"],
            linhas: [
              { rotulo: "2.345.000", valores: ["2", "3", "4", "5", "0", "0", "0"] },
              { rotulo: "2.354.000", valores: ["2", "3", "5", "4", "0", "0", "0"] },
            ],
            destacar: { coluna: 2 },
          },
          destaque: "Na Dezena de Milhar (DM): 4 < 5 → 2.354.000 é MAIOR.",
        },
      },
      {
        texto: "No primeiro dígito diferente, o maior dígito vence — e o resto NÃO importa.",
        exemploReal: {
          contexto: "Compare 4.567.890 e 4.576.890.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Mi", "CM", "DM", "UM", "C", "D", "U"],
            linhas: [
              { rotulo: "4.567.890", valores: ["4", "5", "6", "7", "8", "9", "0"] },
              { rotulo: "4.576.890", valores: ["4", "5", "7", "6", "8", "9", "0"] },
            ],
            destacar: { coluna: 2 },
          },
          destaque: "DM: 6 < 7 → 4.576.890 é MAIOR (o 6.890 do fim não importa).",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordenar do menor pro maior: 1.020.000 · 999.900 · 1.020.500 · 1.002.000.",
    resposta: "999.900 < 1.002.000 < 1.020.000 < 1.020.500",
    passos: [
      "999.900 tem 6 dígitos, os outros têm 7 → é o MENOR.",
      "Os três com 7 dígitos começam com 1.0… → comparar UM: 0, 0, 0 e depois C: 2 · 2 · 0.",
      "1.002.000 (C=0) é o menor entre eles.",
      "Entre 1.020.000 e 1.020.500 → D: 0 < 5 → 1.020.000 é menor.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é maior: 4.567.890 ou 4.576.890?",
    dica: "Mesma quantidade de dígitos. Compare da esquerda: primeira casa que difere.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.576.890" }, { nome: "4.567.890" }, { nome: "Iguais" }],
      respostaCerta: "4.576.890",
      feedbackAcerto: "🎯 Na 3ª casa da esquerda: 7 > 6.",
      feedbackErro: "Alinhe pela direita: DM tem 7 vs 6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Ordene do MAIOR pro MENOR: 850.000 · 1.500.000 · 999.999 · 1.499.999.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem correta:",
      opcoes: [
        { nome: "1.500.000 · 1.499.999 · 999.999 · 850.000" },
        { nome: "1.499.999 · 1.500.000 · 999.999 · 850.000" },
        { nome: "999.999 · 1.500.000 · 1.499.999 · 850.000" },
      ],
      respostaCerta: "1.500.000 · 1.499.999 · 999.999 · 850.000",
      feedbackAcerto: "🎯 Primeiro os de 7 dígitos, depois os de 6.",
      feedbackErro: "1.500.000 e 1.499.999 têm 7 dígitos → CM: 5 > 4. Os outros têm 6.",
    },
  },

  momento08_aplicacao: {
    contexto: "3 cidades — populações reais: A tem 2.145.000 hab, B tem 2.145.900, C tem 2.154.000.",
    problema: "Qual é a cidade mais populosa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "C (2.154.000)" }, { nome: "B (2.145.900)" }, { nome: "A (2.145.000)" }],
      respostaCerta: "C (2.154.000)",
      feedbackAcerto: "🎯 Todos empatam Mi=2, CM=1, DM=. Na DM: C tem 5, A e B têm 4.",
      feedbackErro: "Compare DM: 2.15X → 5 > 4.",
    },
  },

  momento09_revisao: {
    pontos: [
      "1º) Compare pelo TAMANHO (nº de dígitos).",
      "2º) Empatou tamanho → alinhe pela direita e compare da esquerda.",
      "3º) No primeiro dígito diferente, o maior dígito vence.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "12.000.000 __ 9.999.999",
        opcoes: [">", "<", "="],
        correta: 0,
        feedbackAcerto: "🎉 8 dígitos > 7 dígitos.",
        feedbackErro: "Mais dígitos, maior número.",
      },
      {
        pergunta: "3.456.789 __ 3.465.789",
        opcoes: ["<", ">", "="],
        correta: 0,
        feedbackAcerto: "🎉 Na DM: 5 < 6.",
        feedbackErro: "Compare casa a casa: 3=3, 4=4, 5<6.",
      },
      {
        pergunta: "Menor entre 1.000.000, 999.998, 1.000.001:",
        opcoes: ["999.998", "1.000.000", "1.000.001"],
        correta: 0,
        feedbackAcerto: "🎉 6 dígitos < 7 dígitos.",
        feedbackErro: "999.998 tem 6 dígitos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Ranking dos bilhões",
    materiais: ["Papel"],
    passos: [
      "Pesquise 3 países e a população deles.",
      "Ordene do maior pro menor por CASA DE VALOR.",
      "Explique em qual casa cada comparação foi decidida.",
    ],
    registro: "📸 Foto do ranking.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
