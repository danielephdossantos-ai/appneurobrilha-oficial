import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u2-06-missao",
  titulo: "Missão — Operador do Laboratório",
  iconeTrilha: "🏅",
  bncc: ["EF06MA03", "EF06MA11"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Todas as operações",
    historia: "{NOME}, hoje você combina TUDO: +, −, ×, ÷, potência e raiz.",
  },

  momento02_exploracao: {
    instrucao: "Ferramentas prontas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Kit de ferramentas",
        cabecalhos: ["Operação", "Truque"],
        linhas: [
          { rotulo: "+ −", valores: ["+ / −", "Alinha pela direita"] },
          { rotulo: "×", valores: ["×", "Uma linha por algarismo"] },
          { rotulo: "÷", valores: ["÷", "Chave passo a passo"] },
          { rotulo: "^", valores: ["Potência", "Base × base × base…"] },
          { rotulo: "√", valores: ["Raiz", "Inversa do quadrado"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Combine tudo: (10² − 4 × 5) ÷ 8.",
    pista: "Potência, depois ×, depois − e por fim ÷.",
    revelacao: "100 − 20 = 80 → 80 ÷ 8 = 10.",
  },

  momento04_explicacao: {
    titulo: "Combos de operações",
    etapas: [
      {
        texto: "Expressão completa passo a passo.",
        exemploReal: {
          contexto: "(10² − 4 × 5) ÷ 8",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Expressão", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["potência", "10²", "100"] },
              { rotulo: "2", valores: ["multiplicação", "4 × 5", "20"] },
              { rotulo: "3", valores: ["subtração", "100 − 20", "80"] },
              { rotulo: "4", valores: ["divisão", "80 ÷ 8", "10"] },
            ],
          },
          destaque: "Resultado: 10.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule (5² + √49) × 2.",
    resposta: "64",
    passos: ["5² = 25.", "√49 = 7.", "25 + 7 = 32.", "32 × 2 = 64."],
  },

  momento06_praticaGuiada: {
    enunciado: "Calcule 3² × 2 + √16.",
    dica: "Potência → ×  → +.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "22" }, { nome: "20" }, { nome: "30" }],
      respostaCerta: "22",
      feedbackAcerto: "🎯 9 × 2 + 4 = 22.",
      feedbackErro: "3² = 9 e √16 = 4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Calcule (7² − 4²) ÷ 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "11" }, { nome: "9" }, { nome: "12" }],
      respostaCerta: "11",
      feedbackAcerto: "🎯 (49 − 16) ÷ 3 = 33 ÷ 3 = 11.",
      feedbackErro: "Potências primeiro, depois subtração e divisão.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma piscina quadrada tem lado 5 m e profundidade 2 m.",
    problema: "Volume em m³? (lado² × altura)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50 m³" }, { nome: "25 m³" }, { nome: "10 m³" }],
      respostaCerta: "50 m³",
      feedbackAcerto: "🎯 5² × 2 = 25 × 2 = 50.",
      feedbackErro: "Área da base × altura.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ordem sempre: ( ) → potência → × ÷ → + −.",
      "Você virou Operador do Laboratório.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2³ + 3² =", opcoes: ["17", "13", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "8 + 9." },
      { pergunta: "√81 − √16 =", opcoes: ["5", "3", "13"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9 − 4." },
      { pergunta: "(6 + 4) × 5 =", opcoes: ["50", "26", "34"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Parênteses primeiro." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Operador",
    materiais: ["Papel"],
    passos: ["Escreva 3 expressões próprias.", "Peça pra família resolver.", "Confira."],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Operador do Laboratório" },
};
