import type { AulaV4 } from "../../types";

export const aula01_somaSubtracao: AulaV4 = {
  slug: "u2-01-soma-subtracao",
  titulo: "Somar e subtrair com números grandes",
  iconeTrilha: "➕",
  bncc: ["EF06MA03"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Somas de bilhões",
    historia:
      "{NOME}, o Laboratório precisa fechar contas ENORMES. A regra continua a mesma do 5º ano: alinhar pela DIREITA e ir casa por casa, começando pelas Unidades.",
  },

  momento02_exploracao: {
    instrucao: "Toque nas casas. Toda operação começa pela UNIDADE.",
    cenas: [
      { tipo: "texto", texto: "Regra de OURO: alinhar pela direita e somar/subtrair casa a casa.", destaque: true },
      {
        tipo: "tabela",
        titulo: "Hierarquia das casas",
        cabecalhos: ["CM", "DM", "UM", "C", "D", "U"],
        linhas: [{ rotulo: "Peso", valores: ["100.000", "10.000", "1.000", "100", "10", "1"] }],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto dá 245.678 + 132.451?",
    pista: "Some casa a casa começando pela UNIDADE.",
    revelacao: "245.678 + 132.451 = 378.129. Sem pular casa, sem esquecer o 'vai um'.",
  },

  momento04_explicacao: {
    titulo: "Adição casa por casa",
    etapas: [
      {
        texto: "Alinhe pela direita e some. Se passar de 9 em alguma casa, VAI UM para a próxima.",
        exemploReal: {
          contexto: "245.678 + 132.451",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [245678, 132451],
            resultado: 378129,
            passos: [
              { coluna: "U", fala: "8 + 1 = 9", digito: 9 },
              { coluna: "D", fala: "7 + 5 = 12 → escreve 2, vai 1", digito: 2, vaiUm: 1 },
              { coluna: "C", fala: "6 + 4 + 1 = 11 → escreve 1, vai 1", digito: 1, vaiUm: 1 },
              { coluna: "UM", fala: "5 + 2 + 1 = 8", digito: 8 },
              { coluna: "DM", fala: "4 + 3 = 7", digito: 7 },
              { coluna: "CM", fala: "2 + 1 = 3", digito: 3 },
            ],
          },
          destaque: "245.678 + 132.451 = 378.129.",
        },
      },
      {
        texto: "Na subtração, se a casa de cima é MENOR, pega EMPRESTADO da casa vizinha.",
        exemploReal: {
          contexto: "500.000 − 267.348",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [500000, 267348],
            resultado: 232652,
            passos: [
              { coluna: "U", fala: "0 < 8 → pega emprestado (cadeia de zeros)", digito: 2 },
              { coluna: "D", fala: "9 − 4 = 5", digito: 5 },
              { coluna: "C", fala: "9 − 3 = 6", digito: 6 },
              { coluna: "UM", fala: "9 − 7 = 2", digito: 2 },
              { coluna: "DM", fala: "9 − 6 = 3", digito: 3 },
              { coluna: "CM", fala: "4 − 2 = 2", digito: 2 },
            ],
          },
          destaque: "500.000 − 267.348 = 232.652.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Uma cidade tinha 1.245.000 habitantes. Chegaram 87.500. Quantos agora?",
    resposta: "1.332.500 habitantes",
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [1245000, 87500],
      resultado: 1332500,
      passos: [
        { coluna: "U", fala: "0 + 0 = 0", digito: 0 },
        { coluna: "D", fala: "0 + 0 = 0", digito: 0 },
        { coluna: "C", fala: "0 + 5 = 5", digito: 5 },
        { coluna: "UM", fala: "5 + 7 = 12 → 2, vai 1", digito: 2, vaiUm: 1 },
        { coluna: "DM", fala: "4 + 8 + 1 = 13 → 3, vai 1", digito: 3, vaiUm: 1 },
        { coluna: "CM", fala: "2 + 0 + 1 = 3", digito: 3 },
      ],
    },
    passos: ["Alinhe pela direita.", "Some casa a casa.", "Total: 1.332.500."],
  },

  momento06_praticaGuiada: {
    enunciado: "Calcule 348.290 + 156.710.",
    dica: "Comece pelas UNIDADES.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "505.000" }, { nome: "504.900" }, { nome: "515.000" }],
      respostaCerta: "505.000",
      feedbackAcerto: "🎯 Casa a casa, chega em 505.000.",
      feedbackErro: "Some U+U, D+D… no fim: 505.000.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Calcule 800.000 − 235.640.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "564.360" }, { nome: "574.360" }, { nome: "465.640" }],
      respostaCerta: "564.360",
      feedbackAcerto: "🎯 Empréstimo em cadeia.",
      feedbackErro: "Pega emprestado da casa vizinha.",
    },
  },

  momento08_aplicacao: {
    contexto: "Estado A: 2.145.000 hab. Estado B: 1.870.000 hab.",
    problema: "Quantos habitantes SOMADOS?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.015.000" }, { nome: "3.915.000" }, { nome: "4.215.000" }],
      respostaCerta: "4.015.000",
      feedbackAcerto: "🎯 2.145.000 + 1.870.000 = 4.015.000.",
      feedbackErro: "Some casa a casa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Alinhe pela DIREITA sempre.",
      "Some/subtraia começando pela UNIDADE.",
      "Passa de 9? Vai um. Não dá pra tirar? Pega emprestado.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "125.000 + 75.000 =", opcoes: ["200.000", "195.000", "205.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Some UM+UM etc." },
      { pergunta: "1.000.000 − 1 =", opcoes: ["999.999", "999.000", "1.000.001"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Emprestimo em cadeia." },
      { pergunta: "450.320 + 199.680 =", opcoes: ["650.000", "649.000", "649.900"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Casa a casa." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Somas do dia a dia",
    materiais: ["Papel"],
    passos: ["Some as populações de 2 cidades vizinhas.", "Registre a conta montada."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
