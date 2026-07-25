import type { AulaV4 } from "../../types";

export const aula02_operarDecimais: AulaV4 = {
  slug: "u5-02-operar-decimais",
  titulo: "Somar, subtrair, multiplicar e dividir decimais",
  iconeTrilha: "🧮",
  bncc: ["EF06MA08"],
  duracaoMin: 26,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Operações com vírgula",
    historia: "{NOME}, com decimais as regras são as MESMAS de sempre — só precisa cuidar da VÍRGULA.",
  },

  momento02_exploracao: {
    instrucao: "Cada operação tem uma regra da vírgula.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Regras da vírgula",
        cabecalhos: ["Operação", "Regra"],
        linhas: [
          { rotulo: "+ / −", valores: ["+ / −", "Alinhe vírgula em cima da vírgula"] },
          { rotulo: "×", valores: ["×", "Ignore a vírgula, multiplica, e coloca no fim tantas casas quanto tinha nos 2 números"] },
          { rotulo: "÷", valores: ["÷", "Multiplique os dois por 10, 100… até o divisor virar inteiro"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto é 2,4 × 3?",
    pista: "24 × 3 = 72; 1 casa decimal.",
    revelacao: "2,4 × 3 = 7,2.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "Adição: alinhar vírgula com vírgula.",
        exemploReal: {
          contexto: "3,45 + 1,7",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Alinhado"],
            linhas: [
              { rotulo: "1", valores: ["3,45"] },
              { rotulo: "2", valores: ["1,70 (completa com 0)"] },
              { rotulo: "=", valores: ["5,15"] },
            ],
          },
          destaque: "3,45 + 1,7 = 5,15.",
        },
      },
      {
        texto: "Multiplicação: some as casas decimais dos dois números; ponha a vírgula no fim.",
        exemploReal: {
          contexto: "0,4 × 0,3",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["ignorando vírgula", "4 × 3 = 12"] },
              { rotulo: "2", valores: ["1 + 1 = 2 casas", "0,12"] },
            ],
          },
          destaque: "0,4 × 0,3 = 0,12.",
        },
      },
      {
        texto: "Divisão: transforme os dois multiplicando por 10ⁿ até o DIVISOR virar inteiro.",
        exemploReal: {
          contexto: "1,2 ÷ 0,4",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["×10 nos dois", "12 ÷ 4"] },
              { rotulo: "2", valores: ["resultado", "3"] },
            ],
          },
          destaque: "1,2 ÷ 0,4 = 3.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule 5,6 − 2,35.",
    resposta: "3,25",
    passos: ["Alinhe: 5,60 − 2,35.", "Some/subtraia como inteiros: 560 − 235 = 325.", "Coloque a vírgula: 3,25."],
  },

  momento06_praticaGuiada: {
    enunciado: "0,5 × 4.",
    dica: "5 × 4 = 20, 1 casa.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "2,0" }, { nome: "20" }, { nome: "0,20" }],
      respostaCerta: "2,0",
      feedbackAcerto: "🎯 = 2.",
      feedbackErro: "1 casa decimal no resultado.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "3,6 ÷ 0,4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "9" }, { nome: "0,9" }, { nome: "14" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 36 ÷ 4 = 9.",
      feedbackErro: "×10 nos dois.",
    },
  },

  momento08_aplicacao: {
    contexto: "Combustível: 1 litro custa R$ 5,80. Coloquei 20 litros.",
    problema: "Quanto paguei?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 116,00" }, { nome: "R$ 110,00" }, { nome: "R$ 58,00" }],
      respostaCerta: "R$ 116,00",
      feedbackAcerto: "🎯 5,80 × 20 = 116.",
      feedbackErro: "5,80 × 20.",
    },
  },

  momento09_revisao: {
    pontos: ["+ − alinha vírgula.", "× conta as casas decimais.", "÷ multiplica por 10ⁿ pra sumir com a vírgula do divisor."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1,5 + 0,25 =", opcoes: ["1,75", "1,7", "3,75"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Alinhe." },
      { pergunta: "0,2 × 0,5 =", opcoes: ["0,10", "1,0", "0,25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2×5=10, 2 casas." },
      { pergunta: "4,8 ÷ 2 =", opcoes: ["2,4", "24", "0,24"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "48÷2=24, 1 casa." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Continha da compra",
    materiais: ["Nota fiscal"],
    passos: ["Pegue 3 valores em R$.", "Some usando alinhamento de vírgula."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};
