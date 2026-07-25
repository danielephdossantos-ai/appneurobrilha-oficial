import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u5-05-missao",
  titulo: "Missão — Mestre dos Decimais",
  iconeTrilha: "🏅",
  bncc: ["EF06MA08", "EF06MA13"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Trilha comercial",
    historia: "{NOME}, hoje você usa decimais e porcentagem em problemas de MERCADO reais.",
  },

  momento02_exploracao: {
    instrucao: "Kit prático.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Resumo",
        cabecalhos: ["Ferramenta", "Truque"],
        linhas: [
          { rotulo: "+/-", valores: ["+/-", "Alinha vírgula"] },
          { rotulo: "×", valores: ["×", "Soma casas decimais"] },
          { rotulo: "÷", valores: ["÷", "×10ⁿ pra virar inteiro"] },
          { rotulo: "%", valores: ["%", "Multiplica por 0,ab"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "R$ 120 com 15% de desconto?",
    pista: "15% de 120 = 18. 120−18.",
    revelacao: "R$ 102.",
  },

  momento04_explicacao: {
    titulo: "Combos",
    etapas: [
      {
        texto: "Combine +, −, %, e comparação em situações reais.",
        exemploReal: {
          contexto: "Compra: R$ 45,80 + R$ 23,50, com 10% off",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["soma", "69,30"] },
              { rotulo: "2", valores: ["10% de 69,30", "6,93"] },
              { rotulo: "3", valores: ["final", "62,37"] },
            ],
          },
          destaque: "R$ 62,37.",
        },
      },
      {
        texto: "Fração, decimal e % são a MESMA quantidade em roupas diferentes.",
        exemploReal: {
          contexto: "Converta rapidamente:",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fração", "Decimal", "Porcentagem"],
            linhas: [
              { rotulo: "1/2", valores: ["1/2", "0,5", "50%"] },
              { rotulo: "1/4", valores: ["1/4", "0,25", "25%"] },
              { rotulo: "1/5", valores: ["1/5", "0,2", "20%"] },
              { rotulo: "3/4", valores: ["3/4", "0,75", "75%"] },
              { rotulo: "1", valores: ["1", "1,0", "100%"] },
            ],
          },
          destaque: "Escolha a 'roupa' mais fácil pra cada conta.",
        },
      },
      {
        texto: "Multiplicação de decimais: some as casas.",
        exemploReal: {
          contexto: "0,4 × 0,3",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["sem vírgula", "4 × 3 = 12"] },
              { rotulo: "2", valores: ["casas: 1+1", "duas casas"] },
              { rotulo: "3", valores: ["põe vírgula", "0,12"] },
            ],
          },
          destaque: "0,4 × 0,3 = 0,12.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Aumento de 5% em R$ 200.",
    resposta: "R$ 210",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["5% de 200", "10"] },
        { rotulo: "2", valores: ["novo preço", "200 + 10"] },
        { rotulo: "3", valores: ["total", "R$ 210"] },
      ],
    },
    passos: ["5% de 200 = 10.", "200 + 10 = 210."],
  },

  momento06_praticaGuiada: {
    enunciado: "0,2 × 15.",
    dica: "= 20% de 15.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "3" }, { nome: "1,5" }, { nome: "30" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 20% de 15 = 3.",
      feedbackErro: "1/5 de 15.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "25% de 320.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "80" }, { nome: "64" }, { nome: "100" }],
      respostaCerta: "80",
      feedbackAcerto: "🎯 320 ÷ 4 = 80.",
      feedbackErro: "25% = 1/4.",
    },
  },

  momento08_aplicacao: {
    contexto: "Livro R$ 45, desconto 20%.",
    problema: "Preço final?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 36,00" }, { nome: "R$ 40,00" }, { nome: "R$ 25,00" }],
      respostaCerta: "R$ 36,00",
      feedbackAcerto: "🎯 45 × 0,80 = 36.",
      feedbackErro: "Paga 80% do preço.",
    },
  },

  momento09_revisao: {
    pontos: ["Decimal, fração e % são a MESMA coisa.", "Missão concluída."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "100% de 50:", opcoes: ["50", "5", "500"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "100% = tudo." },
      { pergunta: "0,5 em %:", opcoes: ["50%", "5%", "500%"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,5 = 50/100." },
      { pergunta: "1,0 em %:", opcoes: ["100%", "10%", "1%"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "= 1 inteiro." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Mestre dos Decimais",
    materiais: ["Papel"],
    passos: ["Encontre 3 % no dia (encarte, imposto, gorjeta).", "Calcule."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre dos Decimais" },
};
