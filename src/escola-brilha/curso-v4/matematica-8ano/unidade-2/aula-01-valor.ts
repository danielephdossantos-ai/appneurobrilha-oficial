import type { AulaV4 } from "../../types";

export const aula01_valor: AulaV4 = {
  slug: "u2-01-valor",
  titulo: "Valor numérico de uma expressão",
  iconeTrilha: "🔤",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Uma letra é um número disfarçado",
    historia:
      "{NOME}, na Oficina a letra x pode virar 2, 5, 10 ou qualquer número. Descobrir o valor da expressão quando você já sabe o x se chama VALOR NUMÉRICO.",
  },

  momento02_exploracao: {
    instrucao: "Substitua a letra pelo número e calcule.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Substituindo x = 3",
        cabecalhos: ["Expressão", "Substituindo", "Valor"],
        linhas: [
          { rotulo: "1", valores: ["2x + 1", "2·3 + 1", "7"] },
          { rotulo: "2", valores: ["x² − 4", "3² − 4", "5"] },
          { rotulo: "3", valores: ["5 − x", "5 − 3", "2"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual regra sempre serve?",
    pista: "Trocar a letra, aplicar a hierarquia das operações.",
    revelacao: "1. Substituir. 2. Calcular normalmente ( ) → ^ → × ÷ → + −.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "Substitua com CUIDADO os sinais.",
        exemploReal: {
          contexto: "Calcule 3x − 5 quando x = −2.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["substitui", "3·(−2) − 5"] },
              { rotulo: "2", valores: ["multiplica", "−6 − 5"] },
              { rotulo: "3", valores: ["subtrai", "−11"] },
            ],
          },
          destaque: "Sempre coloque o negativo entre parênteses.",
        },
      },
      {
        texto: "Duas letras: substitua as duas.",
        exemploReal: {
          contexto: "2a + 3b quando a = 4 e b = 5.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["substitui", "2·4 + 3·5"] },
              { rotulo: "2", valores: ["multiplica", "8 + 15"] },
              { rotulo: "3", valores: ["soma", "23"] },
            ],
          },
          destaque: "= 23.",
        },
      },
      {
        texto: "Ordem das operações vale.",
        exemploReal: {
          contexto: "x² + 2x − 1 com x = 3.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["potência", "3² = 9"] },
              { rotulo: "2", valores: ["produto", "2·3 = 6"] },
              { rotulo: "3", valores: ["soma", "9 + 6 − 1"] },
              { rotulo: "4", valores: ["resultado", "14"] },
            ],
          },
          destaque: "= 14.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule x² − 3x com x = 4.",
    resposta: "4",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["x²", "16"] },
        { rotulo: "2", valores: ["3x", "12"] },
        { rotulo: "3", valores: ["subtrai", "16 − 12"] },
      ],
    },
    passos: ["x² = 16.", "3x = 12.", "16 − 12 = 4."],
  },

  momento06_praticaGuiada: {
    enunciado: "3x + 2 com x = 5.",
    dica: "Substitui e multiplica primeiro.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Valor:",
      opcoes: [{ nome: "17" }, { nome: "25" }, { nome: "10" }],
      respostaCerta: "17",
      feedbackAcerto: "🎯",
      feedbackErro: "3·5 = 15, + 2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "2a − b com a = 6, b = 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Valor:",
      opcoes: [{ nome: "9" }, { nome: "3" }, { nome: "12" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 12 − 3.",
      feedbackErro: "2·6 = 12.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma diária de aluguel de carro custa 50 + 0,5·k reais, onde k = quilômetros rodados.",
    problema: "Quanto se paga por 200 km?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 150" }, { nome: "R$ 250" }, { nome: "R$ 100" }],
      respostaCerta: "R$ 150",
      feedbackAcerto: "🎯 50 + 0,5·200 = 150.",
      feedbackErro: "0,5·200 = 100.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Substitua a letra pelo valor com cuidado nos sinais.",
      "Aplique a ordem das operações.",
      "Fórmulas do dia a dia (aluguel, corrida) são valor numérico.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x + 5 com x = 2:", opcoes: ["7", "10", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 + 5." },
      { pergunta: "2x com x = −3:", opcoes: ["−6", "6", "−1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2·(−3)." },
      { pergunta: "x² com x = 4:", opcoes: ["16", "8", "12"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4·4." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fórmula em casa",
    materiais: ["Papel"],
    passos: [
      "Escreva uma fórmula do dia (mesada semanal + gorjeta, por exemplo).",
      "Calcule o valor numérico para 3 situações.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
