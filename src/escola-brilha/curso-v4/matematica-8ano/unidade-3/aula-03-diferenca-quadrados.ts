import type { AulaV4 } from "../../types";

export const aula03_diferencaQuad: AulaV4 = {
  slug: "u3-03-diferenca-quadrados",
  titulo: "Fatorar diferença de quadrados",
  iconeTrilha: "🟦",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Inverter o produto notável",
    historia:
      "{NOME}, a² − b² é o RESULTADO de (a+b)(a−b). Se você viu uma diferença de dois quadrados, pode voltar para os fatores.",
  },
  momento02_exploracao: {
    instrucao: "Reconheça a estrutura.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Diferenças de quadrados",
        cabecalhos: ["Expressão", "a", "b", "Fatorada"],
        linhas: [
          { rotulo: "1", valores: ["x² − 9", "x", "3", "(x+3)(x−3)"] },
          { rotulo: "2", valores: ["4x² − 25", "2x", "5", "(2x+5)(2x−5)"] },
          { rotulo: "3", valores: ["x² − 1", "x", "1", "(x+1)(x−1)"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quando dá pra usar?",
    pista: "SÓ quando é DIFERENÇA e AMBOS são quadrados perfeitos.",
    revelacao: "a² − b² = (a+b)(a−b).",
  },
  momento04_explicacao: {
    titulo: "Como fatorar",
    etapas: [
      {
        texto: "1) Identifique a e b.",
        exemploReal: {
          contexto: "x² − 16",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Valor"],
            linhas: [
              { rotulo: "a²", valores: ["x²", "→ a=x"] },
              { rotulo: "b²", valores: ["16", "→ b=4"] },
              { rotulo: "res.", valores: ["(x+4)(x−4)", ""] },
            ],
          },
          destaque: "= (x+4)(x−4).",
        },
      },
      {
        texto: "2) Coeficientes também podem ser quadrados.",
        exemploReal: {
          contexto: "9x² − 49",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Valor"],
            linhas: [
              { rotulo: "a²", valores: ["9x²", "→ a=3x"] },
              { rotulo: "b²", valores: ["49", "→ b=7"] },
              { rotulo: "res.", valores: ["(3x+7)(3x−7)", ""] },
            ],
          },
          destaque: "= (3x+7)(3x−7).",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore 25 − x².",
    resposta: "(5−x)(5+x)",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Valor"],
      linhas: [
        { rotulo: "a", valores: ["√25 = 5", ""] },
        { rotulo: "b", valores: ["√x² = x", ""] },
        { rotulo: "res.", valores: ["(5+x)(5−x)", ""] },
      ],
    },
    passos: ["a=5, b=x.", "= (5−x)(5+x)."],
  },
  momento06_praticaGuiada: {
    enunciado: "Fatore x² − 4.",
    dica: "√4=2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+2)(x−2)" }, { nome: "(x−2)²" }, { nome: "(x+2)²" }],
      respostaCerta: "(x+2)(x−2)",
      feedbackAcerto: "🎯",
      feedbackErro: "É DIFERENÇA de quadrados.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fatore 4x² − 81.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(2x+9)(2x−9)" }, { nome: "(4x+9)(4x−9)" }, { nome: "(2x−9)²" }],
      respostaCerta: "(2x+9)(2x−9)",
      feedbackAcerto: "🎯",
      feedbackErro: "√4x² = 2x, √81 = 9.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um terreno L² m² tem um quadrado de 5m² cortado. Área restante = L² − 25.",
    problema: "Fatorada:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(L+5)(L−5)" }, { nome: "(L−5)²" }, { nome: "L²−25"} ],
      respostaCerta: "(L+5)(L−5)",
      feedbackAcerto: "🎯",
      feedbackErro: "Diferença de quadrados.",
    },
  },
  momento09_revisao: {
    pontos: ["a² − b² = (a+b)(a−b).", "Precisa ser DIFERENÇA.", "Cuidado com coef: (2x)² = 4x²."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x²−1 =", opcoes: ["(x+1)(x−1)", "(x−1)²", "(x+1)²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "a=x, b=1." },
      { pergunta: "x²−100 =", opcoes: ["(x+10)(x−10)", "(x−10)²", "(x+100)(x−1)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "√100=10." },
      { pergunta: "16x²−1 =", opcoes: ["(4x+1)(4x−1)", "(2x+1)(8x−1)", "(4x−1)²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "√16x²=4x." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Detetive dos quadrados",
    materiais: ["Papel"],
    passos: ["Escreva 4 expressões e fatore.", "Confira multiplicando."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
