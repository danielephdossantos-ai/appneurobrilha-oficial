import type { AulaV4 } from "../../types";

export const aula04_porcentagem: AulaV4 = {
  slug: "u5-04-porcentagem",
  titulo: "Porcentagem — a fração dos 100",
  iconeTrilha: "💯",
  bncc: ["EF06MA13"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "% no dia a dia",
    historia: "{NOME}, 10% de desconto? 15% de gorjeta? Porcentagem é uma fração com denominador 100. 25% = 25/100 = 0,25.",
  },

  momento02_exploracao: {
    instrucao: "Três roupas da mesma quantia.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Equivalências úteis",
        cabecalhos: ["%", "Fração", "Decimal"],
        linhas: [
          { rotulo: "10%", valores: ["10%", "1/10", "0,10"] },
          { rotulo: "20%", valores: ["20%", "1/5", "0,20"] },
          { rotulo: "25%", valores: ["25%", "1/4", "0,25"] },
          { rotulo: "50%", valores: ["50%", "1/2", "0,50"] },
          { rotulo: "75%", valores: ["75%", "3/4", "0,75"] },
          { rotulo: "100%", valores: ["100%", "1", "1,00"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "25% de 200?",
    pista: "25% = 1/4. 200 ÷ 4.",
    revelacao: "= 50.",
  },

  momento04_explicacao: {
    titulo: "Calcular porcentagem",
    etapas: [
      {
        texto: "% de um valor: multiplique pelo decimal correspondente.",
        exemploReal: {
          contexto: "30% de 250",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["30% → 0,30", "0,30"] },
              { rotulo: "2", valores: ["× 250", "75"] },
            ],
          },
          destaque: "30% de 250 = 75.",
        },
      },
      {
        texto: "Truque do 10%: divida por 10.",
        exemploReal: {
          contexto: "10% de 380 = 38.",
          destaque: "Para 20% → dobre o 10%; para 5% → metade.",
        },
      },
      {
        texto: "Aumento/desconto: some ou subtraia do valor original.",
        exemploReal: {
          contexto: "Preço R$ 80, desconto de 25%.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["25% de 80", "20"] },
              { rotulo: "2", valores: ["80 − 20", "60"] },
            ],
          },
          destaque: "Paga R$ 60.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Uma camiseta custa R$ 90. Desconto de 20%. Preço final?",
    resposta: "R$ 72",
    passos: ["20% de 90 = 18.", "90 − 18 = 72."],
  },

  momento06_praticaGuiada: {
    enunciado: "50% de 240.",
    dica: "É a metade.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "120" }, { nome: "24" }, { nome: "480" }],
      respostaCerta: "120",
      feedbackAcerto: "🎯 Metade de 240.",
      feedbackErro: "50% = 1/2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "10% de 850.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "85" }, { nome: "8,5" }, { nome: "850" }],
      respostaCerta: "85",
      feedbackAcerto: "🎯 Dividiu por 10.",
      feedbackErro: "10% = dividir por 10.",
    },
  },

  momento08_aplicacao: {
    contexto: "Restaurante: R$ 60 e gorjeta de 10%.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 66" }, { nome: "R$ 70" }, { nome: "R$ 54" }],
      respostaCerta: "R$ 66",
      feedbackAcerto: "🎯 60 + 6.",
      feedbackErro: "10% de 60 = 6.",
    },
  },

  momento09_revisao: {
    pontos: ["% = /100.", "10% → dividir por 10.", "Desconto: subtrai. Aumento: soma."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50% de 40:", opcoes: ["20", "4", "50"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Metade." },
      { pergunta: "25% de 80:", opcoes: ["20", "25", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/4." },
      { pergunta: "10% de 250:", opcoes: ["25", "2,5", "100"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷10." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Desconto do dia",
    materiais: ["Encarte"],
    passos: ["Escolha um produto com % de desconto.", "Calcule quanto sai."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};
