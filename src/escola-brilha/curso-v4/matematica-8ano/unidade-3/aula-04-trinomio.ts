import type { AulaV4 } from "../../types";

export const aula04_trinomio: AulaV4 = {
  slug: "u3-04-trinomio",
  titulo: "Trinômio quadrado perfeito",
  iconeTrilha: "🔺",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Voltar do trinômio para o quadrado",
    historia:
      "{NOME}, x² + 6x + 9 veio de (x+3)². Vamos aprender a reconhecer e VOLTAR.",
  },
  momento02_exploracao: {
    instrucao: "Reconheça o padrão.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Checagem do trinômio perfeito",
        cabecalhos: ["Trinômio", "√1º", "√3º", "2·prod", "Fatorada"],
        linhas: [
          { rotulo: "1", valores: ["x²+6x+9", "x", "3", "6x ✅", "(x+3)²"] },
          { rotulo: "2", valores: ["x²−10x+25", "x", "5", "10x ✅", "(x−5)²"] },
          { rotulo: "3", valores: ["4x²+12x+9", "2x", "3", "12x ✅", "(2x+3)²"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber se é trinômio quadrado perfeito?",
    pista: "1º e 3º têm raízes exatas + termo do meio = 2·(raiz 1º)·(raiz 3º).",
    revelacao: "Se passa no teste, é (a ± b)².",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "1) Raízes dos extremos.",
        exemploReal: {
          contexto: "x² + 8x + 16",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Valor"],
            linhas: [
              { rotulo: "√1º", valores: ["x", ""] },
              { rotulo: "√3º", valores: ["4", ""] },
              { rotulo: "2·prod", valores: ["2·x·4 = 8x ✅", ""] },
              { rotulo: "res.", valores: ["(x+4)²", ""] },
            ],
          },
          destaque: "= (x+4)².",
        },
      },
      {
        texto: "2) Meio negativo → (a−b)².",
        exemploReal: {
          contexto: "x² − 14x + 49",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Valor"],
            linhas: [
              { rotulo: "√1º", valores: ["x", ""] },
              { rotulo: "√3º", valores: ["7", ""] },
              { rotulo: "2·prod", valores: ["14x ✅", ""] },
              { rotulo: "sinal", valores: ["−", ""] },
              { rotulo: "res.", valores: ["(x−7)²", ""] },
            ],
          },
          destaque: "= (x−7)².",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore x² + 10x + 25.",
    resposta: "(x+5)²",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Valor"],
      linhas: [
        { rotulo: "√1º", valores: ["x", ""] },
        { rotulo: "√3º", valores: ["5", ""] },
        { rotulo: "2·prod", valores: ["10x ✅", ""] },
        { rotulo: "res.", valores: ["(x+5)²", ""] },
      ],
    },
    passos: ["√x²=x, √25=5.", "2·x·5 = 10x ✅.", "= (x+5)²."],
  },
  momento06_praticaGuiada: {
    enunciado: "Fatore x² + 4x + 4.",
    dica: "√4=2. 2·x·2=4x ✅",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+2)²" }, { nome: "(x+4)²" }, { nome: "(x−2)²" }],
      respostaCerta: "(x+2)²",
      feedbackAcerto: "🎯",
      feedbackErro: "√4=2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fatore 9x² − 24x + 16.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(3x−4)²" }, { nome: "(3x+4)²" }, { nome: "(9x−4)²" }],
      respostaCerta: "(3x−4)²",
      feedbackAcerto: "🎯 √9x²=3x, √16=4, 2·3x·4=24x.",
      feedbackErro: "Meio negativo.",
    },
  },
  momento08_aplicacao: {
    contexto: "Terreno tem área x² + 12x + 36 m².",
    problema: "Qual é o lado (se é um quadrado)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x+6" }, { nome: "x+12" }, { nome: "x+36" }],
      respostaCerta: "x+6",
      feedbackAcerto: "🎯 é (x+6)².",
      feedbackErro: "É trinômio quadrado perfeito.",
    },
  },
  momento09_revisao: {
    pontos: ["3 condições: √1º, √3º, 2·prod.", "Sinal do meio decide (+) ou (−).", "Se passa → (a ± b)²."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x²+2x+1 =", opcoes: ["(x+1)²", "(x−1)²", "x²+1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Perfeito." },
      { pergunta: "x²−6x+9 =", opcoes: ["(x−3)²", "(x+3)²", "x²−9"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Meio −." },
      { pergunta: "4x²+4x+1 =", opcoes: ["(2x+1)²", "(4x+1)²", "(2x−1)²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "√4x²=2x." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Voltando ao quadrado",
    materiais: ["Papel"],
    passos: ["Escreva 3 trinômios perfeitos.", "Fatore e prove multiplicando."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
