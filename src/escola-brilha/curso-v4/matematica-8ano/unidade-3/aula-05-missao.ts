import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u3-05-missao",
  titulo: "Missão — Mestre da Fatoração",
  iconeTrilha: "🏅",
  bncc: ["EF08MA06"],
  duracaoMin: 25,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Escolher a técnica certa",
    historia:
      "{NOME}, hoje você olha a expressão e decide: fator comum? agrupamento? diferença de quadrados? trinômio perfeito?",
  },
  momento02_exploracao: {
    instrucao: "Kit de decisão.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Quando usar cada técnica",
        cabecalhos: ["Situação", "Técnica"],
        linhas: [
          { rotulo: "1", valores: ["Termos com fator repetido", "Fator comum"] },
          { rotulo: "2", valores: ["4 termos, pares batem", "Agrupamento"] },
          { rotulo: "3", valores: ["a² − b²", "Diferença de quadrados"] },
          { rotulo: "4", valores: ["a² ± 2ab + b²", "Trinômio perfeito"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se puder combinar duas técnicas?",
    pista: "Fator comum SEMPRE primeiro. Depois checa se sobrou padrão.",
    revelacao: "Ordem: fator comum → outros padrões.",
  },
  momento04_explicacao: {
    titulo: "Combos",
    etapas: [
      {
        texto: "Fator comum + diferença de quadrados.",
        exemploReal: {
          contexto: "2x² − 8",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["fator comum", "2(x²−4)"] },
              { rotulo: "2", valores: ["diferença", "2(x+2)(x−2)"] },
            ],
          },
          destaque: "= 2(x+2)(x−2).",
        },
      },
      {
        texto: "Fator comum + trinômio perfeito.",
        exemploReal: {
          contexto: "3x² + 12x + 12",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["fator comum", "3(x²+4x+4)"] },
              { rotulo: "2", valores: ["perfeito", "3(x+2)²"] },
            ],
          },
          destaque: "= 3(x+2)².",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore 5x² − 20.",
    resposta: "5(x+2)(x−2)",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Valor"],
      linhas: [
        { rotulo: "1", valores: ["comum", "5(x²−4)"] },
        { rotulo: "2", valores: ["diferença", "5(x+2)(x−2)"] },
      ],
    },
    passos: ["Fator comum 5.", "Diferença de quadrados.", "= 5(x+2)(x−2)."],
  },
  momento06_praticaGuiada: {
    enunciado: "Fatore x² + 6x + 9.",
    dica: "Trinômio.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+3)²" }, { nome: "(x+3)(x−3)" }, { nome: "3(x+3)" }],
      respostaCerta: "(x+3)²",
      feedbackAcerto: "🎯",
      feedbackErro: "3 condições.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fatore 2x² − 50.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2(x+5)(x−5)" }, { nome: "(2x+5)(x−10)" }, { nome: "2(x−5)²" }],
      respostaCerta: "2(x+5)(x−5)",
      feedbackAcerto: "🎯",
      feedbackErro: "Comum 2, depois diferença.",
    },
  },
  momento08_aplicacao: {
    contexto: "Área = x² − 9. Se é retângulo com lados (a) e (b), quem são a e b?",
    problema: "Lados:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+3) e (x−3)" }, { nome: "x e −9" }, { nome: "(x−3)²" }],
      respostaCerta: "(x+3) e (x−3)",
      feedbackAcerto: "🎯",
      feedbackErro: "Diferença de quadrados.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Fator comum primeiro.",
      "Depois: diferença, agrupamento ou trinômio.",
      "Multiplicar de volta é o teste."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3x+3 =", opcoes: ["3(x+1)", "3x+3", "x+3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Comum 3." },
      { pergunta: "x²−16 =", opcoes: ["(x+4)(x−4)", "(x−4)²", "(x+4)²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Diferença." },
      { pergunta: "x²+2x+1 =", opcoes: ["(x+1)²", "(x−1)²", "(x+1)(x−1)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Perfeito." },
      { pergunta: "ax+ay+bx+by =", opcoes: ["(a+b)(x+y)", "(a−b)(x−y)", "ab+xy"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Agrupa." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Fatoração",
    materiais: ["Papel"],
    passos: ["Diploma: 'Mestre da Fatoração'.", "Escreva 4 expressões, uma pra cada técnica."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre da Fatoração" },
};
