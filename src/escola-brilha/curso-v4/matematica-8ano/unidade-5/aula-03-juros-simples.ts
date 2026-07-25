import type { AulaV4 } from "../../types";

export const aula03_jurosSimples: AulaV4 = {
  slug: "u5-03-juros-simples",
  titulo: "Juros simples",
  iconeTrilha: "🏦",
  bncc: ["EF08MA04"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Dinheiro que rende (ou custa) por tempo",
    historia:
      "{NOME}, quando você guarda dinheiro no banco ele PAGA juros. Quando pega emprestado, VOCÊ paga.",
  },
  momento02_exploracao: {
    instrucao: "Fórmula.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "J = C · i · t",
        cabecalhos: ["Símbolo", "Significado"],
        linhas: [
          { rotulo: "J", valores: ["juros", "quanto rende"] },
          { rotulo: "C", valores: ["capital", "dinheiro inicial"] },
          { rotulo: "i", valores: ["taxa", "% por período"] },
          { rotulo: "t", valores: ["tempo", "quantos períodos"] },
        ],
      },
      { tipo: "texto", texto: "Montante M = C + J.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como usar quando taxa é ao mês e tempo em anos?",
    pista: "Unidades precisam BATER.",
    revelacao: "1 ano = 12 meses; ajuste sempre.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "Cálculo direto.",
        exemploReal: {
          contexto: "C = R$ 1000, i = 2% ao mês, t = 6 meses",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "i", valores: ["0,02", ""] },
              { rotulo: "J", valores: ["1000·0,02·6", "120"] },
              { rotulo: "M", valores: ["1000+120", "1120"] },
            ],
          },
          destaque: "R$ 120 de juros. Montante R$ 1120.",
        },
      },
      {
        texto: "Converta unidades.",
        exemploReal: {
          contexto: "i = 12% ao ano, t = 6 meses",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["i mensal", "1% = 0,01"] },
              { rotulo: "2", valores: ["ou t em anos", "0,5"] },
            ],
          },
          destaque: "Escolha a conversão mais simples.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "C = 500, i = 5% ao mês, t = 4 meses. Ache J.",
    resposta: "R$ 100",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["i", "0,05"] },
        { rotulo: "2", valores: ["J", "500·0,05·4"] },
        { rotulo: "3", valores: ["=", "100"] },
      ],
    },
    passos: ["500 × 0,05 = 25.", "25 × 4 = 100."],
  },
  momento06_praticaGuiada: {
    enunciado: "C=200, i=1% am, t=10 meses. J=",
    dica: "200·0,01·10.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "J =",
      opcoes: [{ nome: "R$ 20" }, { nome: "R$ 200" }, { nome: "R$ 2" }],
      respostaCerta: "R$ 20",
      feedbackAcerto: "🎯",
      feedbackErro: "200·0,01=2, ·10=20.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "C=1000, i=3% am, t=5 meses. Montante:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 1150" }, { nome: "R$ 1300" }, { nome: "R$ 1050" }],
      respostaCerta: "R$ 1150",
      feedbackAcerto: "🎯 J=150.",
      feedbackErro: "J = 1000·0,03·5 = 150.",
    },
  },
  momento08_aplicacao: {
    contexto: "Empréstimo de R$ 2000, juros 4% am, tempo 3 meses.",
    problema: "Total a pagar:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 2240" }, { nome: "R$ 240" }, { nome: "R$ 2400" }],
      respostaCerta: "R$ 2240",
      feedbackAcerto: "🎯 J=240, M=2240.",
      feedbackErro: "J=2000·0,04·3=240.",
    },
  },
  momento09_revisao: {
    pontos: ["J = C · i · t.", "Unidades precisam bater (mês/ano).", "M = C + J."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1% ao mês em decimal:", opcoes: ["0,01", "0,1", "1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷100." },
      { pergunta: "C=100, i=0,05, t=2. J=", opcoes: ["10", "5", "50"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "100·0,05·2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Investigador de juros",
    materiais: ["Papel"],
    passos: ["Ache um extrato ou anúncio com taxa.", "Calcule os juros para um cenário."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
