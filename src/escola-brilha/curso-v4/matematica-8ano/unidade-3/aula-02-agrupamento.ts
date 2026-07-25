import type { AulaV4 } from "../../types";

export const aula02_agrupamento: AulaV4 = {
  slug: "u3-02-agrupamento",
  titulo: "Fatoração por agrupamento",
  iconeTrilha: "👥",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Quando não há fator comum em TODOS",
    historia:
      "{NOME}, ax + ay + bx + by não tem fator em todos os 4. A jogada é AGRUPAR de 2 em 2.",
  },
  momento02_exploracao: {
    instrucao: "Agrupe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Passo a passo",
        cabecalhos: ["Etapa", "Expressão"],
        linhas: [
          { rotulo: "1", valores: ["original", "ax + ay + bx + by"] },
          { rotulo: "2", valores: ["agrupa 2 a 2", "(ax + ay) + (bx + by)"] },
          { rotulo: "3", valores: ["fator em cada", "a(x+y) + b(x+y)"] },
          { rotulo: "4", valores: ["fator comum", "(x+y)(a+b)"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Que sinal aparece nos DOIS parênteses?",
    pista: "Se o parêntese for o mesmo → fatora ele.",
    revelacao: "O parêntese repetido é o novo fator comum.",
  },
  momento04_explicacao: {
    titulo: "Regra do agrupamento",
    etapas: [
      {
        texto: "Agrupe pares e evidencie.",
        exemploReal: {
          contexto: "3x + 3y + 5ax + 5ay",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["agrupa", "3(x+y) + 5a(x+y)"] },
              { rotulo: "2", valores: ["comum", "(x+y)"] },
              { rotulo: "3", valores: ["fatorada", "(x+y)(3+5a)"] },
            ],
          },
          destaque: "= (x+y)(3+5a).",
        },
      },
      {
        texto: "Cuidado com o sinal.",
        exemploReal: {
          contexto: "x² − x + 2x − 2",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["agrupa", "(x² − x) + (2x − 2)"] },
              { rotulo: "2", valores: ["evidencia", "x(x−1) + 2(x−1)"] },
              { rotulo: "3", valores: ["fatorada", "(x−1)(x+2)"] },
            ],
          },
          destaque: "= (x−1)(x+2).",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore ab + ac + 2b + 2c.",
    resposta: "(b+c)(a+2)",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Valor"],
      linhas: [
        { rotulo: "1", valores: ["agrupa", "a(b+c) + 2(b+c)"] },
        { rotulo: "2", valores: ["fatorada", "(b+c)(a+2)"] },
      ],
    },
    passos: ["a(b+c) + 2(b+c).", "= (b+c)(a+2)."],
  },
  momento06_praticaGuiada: {
    enunciado: "Fatore mx + my + nx + ny.",
    dica: "Agrupa m e n.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+y)(m+n)" }, { nome: "(m+n)(x−y)" }, { nome: "(mx+ny)" }],
      respostaCerta: "(x+y)(m+n)",
      feedbackAcerto: "🎯",
      feedbackErro: "m(x+y)+n(x+y).",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fatore x³ + x² + 3x + 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+1)(x²+3)" }, { nome: "(x−1)(x²+3)" }, { nome: "x(x²+x+3)" }],
      respostaCerta: "(x+1)(x²+3)",
      feedbackAcerto: "🎯 x²(x+1)+3(x+1).",
      feedbackErro: "Agrupe 2 a 2.",
    },
  },
  momento08_aplicacao: {
    contexto: "Área de um retângulo é 2ax + 2ay + bx + by.",
    problema: "Escreva a área fatorada:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(x+y)(2a+b)" }, { nome: "(2a+b)(x−y)" }, { nome: "2(a+b)(x+y)" }],
      respostaCerta: "(x+y)(2a+b)",
      feedbackAcerto: "🎯",
      feedbackErro: "Agrupamento.",
    },
  },
  momento09_revisao: {
    pontos: ["Agrupe 2 a 2.", "Evidencie cada grupo.", "Fatore o parêntese repetido."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "ax+ay+bx+by =", opcoes: ["(x+y)(a+b)", "(a+b)(x−y)", "ab+xy"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Agrupe." },
      { pergunta: "x²+x+2x+2 =", opcoes: ["(x+1)(x+2)", "(x−1)(x+2)", "x²+3x+2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "x(x+1)+2(x+1)." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Grupos",
    materiais: ["Papel"],
    passos: ["Escreva 3 expressões de 4 termos.", "Fatore por agrupamento."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
