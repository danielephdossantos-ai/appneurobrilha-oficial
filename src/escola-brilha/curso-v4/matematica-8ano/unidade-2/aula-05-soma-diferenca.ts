import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U2 — Produto da soma pela diferença.
 * Padrão piloto: passo a passo + Professor + armadilha (a+b)(a−b) vs (a+b)².
 */
export const aula05_somaDiferenca: AulaV4 = {
  slug: "u2-05-soma-diferenca",
  titulo: "Produto da soma pela diferença: (a+b)(a−b)",
  iconeTrilha: "➕➖",
  bncc: ["EF08MA06"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O produto que ENCURTA",
    historia:
      "{NOME}, tem uma multiplicação especial onde o termo do meio SUMIU. Sobra só uma diferença de quadrados: a² − b². É atalho poderoso — economiza distribuição e evita erro.",
  },

  momento02_exploracao: {
    instrucao: "Distribua com uma tabela e observe o que aparece no meio.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "(a+b)(a−b) — tabela",
        cabecalhos: ["×", "a", "−b"],
        linhas: [
          { rotulo: "a", valores: ["a²", "−ab"] },
          { rotulo: "b", valores: ["+ab", "−b²"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Soma das 4 células: a² − ab + ab − b². Os dois termos do meio (−ab e +ab) SE CANCELAM. Sobra a² − b².",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que aconteceu com o termo do meio?",
    pista: "−ab e +ab são opostos: somados dão 0.",
    revelacao: "(a+b)(a−b) = a² − b². Chama 'diferença de quadrados'.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(a+b)(a−b) = ?",
      passos: [
        { expr: "(a + b)·(a − b)", explica: "Distributiva completa.", status: "neutro" },
        { expr: "= a·a + a·(−b) + b·a + b·(−b)", explica: "4 produtos.", status: "ok" },
        { expr: "= a² − ab + ab − b²", explica: "Calculo.", status: "ok" },
        { expr: "= a² − b²", explica: "Termo do meio cancela.", status: "ok", professor: "Os SINAIS opostos dos termos do meio (−ab e +ab) fazem o cancelamento. É por isso que esse produto tem só 2 termos, não 3." },
      ],
      fatorada: "(a+b)(a−b) = a² − b²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Diferença de quadrados",
    etapas: [
      {
        texto: "Fórmula direta: (a+b)(a−b) = a² − b². SEM termo do meio.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 5)(x − 5)",
            passos: [
              { expr: "(x + 5)(x − 5)", explica: "Padrão (a+b)(a−b) com a=x, b=5.", status: "neutro", professor: "Reconheço o padrão: mesma 1ª parte (x) nos dois parênteses e a 2ª parte com sinais OPOSTOS (+5 e −5)." },
              { expr: "= x² − 5²", explica: "Aplico a fórmula.", status: "ok" },
              { expr: "= x² − 25", explica: "Calculo.", status: "ok" },
            ],
            fatorada: "(x + 5)(x − 5) = x² − 25",
          },
          destaque: "Reconheceu o padrão? Pula direto para a² − b².",
        },
      },

      {
        texto: "Coeficientes precisam ser elevados ao quadrado junto.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(2x + 3)(2x − 3)",
            passos: [
              { expr: "(2x + 3)(2x − 3)", explica: "Padrão com a=2x, b=3.", status: "neutro" },
              { expr: "= (2x)² − 3²", explica: "Aplico a fórmula.", status: "ok" },
              { expr: "= 4x² − 9", explica: "(2x)² = 4x² (eleva o coef também).", status: "ok", professor: "Erro comum: escrever (2x)² como 2x² em vez de 4x². Sempre eleve TUDO que está dentro do parêntese." },
            ],
            fatorada: "(2x + 3)(2x − 3) = 4x² − 9",
          },
          destaque: "(2x)² = 4x², não 2x².",
        },
      },

      {
        texto: "⚠️ Armadilha: (a+b)(a−b) NÃO é (a+b)². Padrões diferentes, respostas diferentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Compare (x+4)(x−4) com (x+4)²",
            passos: [
              { expr: "(x + 4)(x − 4)", explica: "Soma × diferença.", status: "neutro" },
              { expr: "= x² − 16", explica: "2 termos.", status: "ok", professor: "SINAIS OPOSTOS nos parênteses → termos do meio cancelam → só 2 termos." },
              { expr: "(x + 4)²", explica: "Quadrado da soma.", status: "ok" },
              { expr: "= x² + 8x + 16", explica: "3 termos.", status: "ok", professor: "MESMO SINAL nos dois parênteses (x+4)(x+4) → termos do meio somam → 3 termos." },
              { expr: "x² − 16 ≠ x² + 8x + 16", explica: "Padrões distintos.", status: "x", professor: "Regra: se os sinais são OPOSTOS entre parênteses → diferença de quadrados (2 termos). Se são IGUAIS → quadrado perfeito (3 termos)." },
            ],
            fatorada: "Opostos → 2 termos    Iguais → 3 termos",
          },
          destaque: "Olhe os SINAIS antes de aplicar o padrão.",
        },
      },

      {
        texto: "Contra-exemplo: (x+3)(x−5) não é diferença de quadrados (as constantes são diferentes). Use distributiva normal.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (x + 7)(x − 7) = ?",
    resposta: "x² − 49",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 7)(x − 7)",
      passos: [
        { expr: "(x + 7)(x − 7)", explica: "Padrão soma × diferença.", status: "neutro" },
        { expr: "= x² − 7²", explica: "Aplico a fórmula.", status: "ok" },
        { expr: "= x² − 49", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= x² − 49",
      legenda: "Modelagem",
    },
    passos: ["1º² = x².", "2º² = 49.", "= x² − 49."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (x + 6)(x − 6) = ?",
    dica: "Padrão soma × diferença → sem termo do meio.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 6)(x − 6)",
      passos: [
        { expr: "= x² − 6²", explica: "Fórmula.", status: "neutro" },
        { expr: "= x² − 36", explica: "Calculo.", status: "ok" },
      ],
      fatorada: "= x² − 36",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 36" }, { nome: "x² + 12x + 36" }, { nome: "x² + 36" }],
      respostaCerta: "x² − 36",
      feedbackAcerto: "🎯 Diferença de quadrados: sem termo do meio.",
      feedbackErro: "Sinais OPOSTOS (+6 e −6) → padrão soma × diferença → SEM termo do meio. E é MENOS entre os quadrados: x² − 36.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (3x + 4)(3x − 4) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(3x + 4)(3x − 4)",
      passos: [
        { expr: "= (3x)² − 4²", explica: "Padrão soma × diferença.", status: "neutro" },
        { expr: "= 9x² − 16", explica: "(3x)² = 9x².", status: "ok", professor: "Eleve o COEFICIENTE junto: (3x)² = 3²·x² = 9x²." },
      ],
      fatorada: "= 9x² − 16",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9x² − 16" }, { nome: "9x² + 24x − 16" }, { nome: "3x² − 16" }],
      respostaCerta: "9x² − 16",
      feedbackAcerto: "🎯 (3x)² − 4² = 9x² − 16.",
      feedbackErro: "Sinais opostos → sem termo do meio. E (3x)² = 9x² (não 3x²): eleve o coef também.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um jardim retangular tem lados (x + 8) e (x − 8) metros.",
    problema: "Qual a área expressa como polinômio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área = (x + 8)(x − 8)",
      passos: [
        { expr: "(x + 8)(x − 8)", explica: "Padrão soma × diferença.", status: "neutro", professor: "Repare: os dois lados têm o mesmo x e constantes opostas (+8, −8). Padrão perfeito para o atalho." },
        { expr: "= x² − 8²", explica: "Fórmula.", status: "ok" },
        { expr: "= x² − 64", explica: "Resultado.", status: "ok", professor: "Restrição: como é área, x precisa ser > 8 (senão x−8 seria negativo)." },
      ],
      fatorada: "Área = x² − 64 m²",
      legenda: "Aplicação — geometria",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 64" }, { nome: "x² + 16x − 64" }, { nome: "x² − 16" }],
      respostaCerta: "x² − 64",
      feedbackAcerto: "🎯 Diferença de quadrados.",
      feedbackErro: "Padrão soma × diferença: SEM termo do meio. E 8² = 64 (não 16). Não confunda com 2·8=16.",
    },
  },

  momento09_revisao: {
    pontos: [
      "(a+b)(a−b) = a² − b².",
      "Só vale se os sinais forem OPOSTOS e as demais partes iguais.",
      "Coeficientes elevam junto: (5x)² = 25x².",
      "Se os sinais são iguais → quadrado perfeito (3 termos), não diferença.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+2)(x−2) =", opcoes: ["x²−4", "x²+4", "x²−4x"], correta: 0, feedbackAcerto: "🎉 Diferença de quadrados.", feedbackErro: "Sinais opostos → sem termo do meio. x² − 2² = x² − 4." },
      { pergunta: "(y+9)(y−9) =", opcoes: ["y²−81", "y²+81", "y²−18y+81"], correta: 0, feedbackAcerto: "🎉 9² = 81.", feedbackErro: "Sem termo do meio (sinais opostos). E 9² = 81. Se deu 18y+81, misturou com quadrado da soma." },
      { pergunta: "(5x+1)(5x−1) =", opcoes: ["25x²−1", "5x²−1", "25x²+1"], correta: 0, feedbackAcerto: "🎉 (5x)² = 25x².", feedbackErro: "(5x)² = 25x² (eleva o coef 5 também). E é MENOS entre eles (diferença)." },
      { pergunta: "(x+3)(x−3) é igual a (x+3)²?", opcoes: ["Não: x²−9 vs x²+6x+9", "Sim, sempre", "Só se x=0"], correta: 0, feedbackAcerto: "🎉 Sinais opostos ≠ sinais iguais.", feedbackErro: "Padrões diferentes: (a+b)(a−b) → 2 termos; (a+b)² → 3 termos. Verifique os sinais dentro dos parênteses." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diferença sem trabalho",
    materiais: ["Papel"],
    passos: [
      "Escreva 3 produtos da soma pela diferença.",
      "Aplique só a fórmula, sem distributiva.",
      "Confirme numericamente um deles substituindo x = 5.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
