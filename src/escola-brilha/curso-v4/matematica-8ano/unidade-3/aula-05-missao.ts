import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Missão de fatoração: escolher a técnica e combinar.
 * Formato: fluxograma de decisão + passo a passo interativo mostrando
 * fator comum SEMPRE primeiro, e depois o padrão adequado.
 */
export const aula05_missao: AulaV4 = {
  slug: "u3-05-missao",
  titulo: "Missão — Mestre da Fatoração",
  iconeTrilha: "🏅",
  bncc: ["EF08MA06"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud", "cpa"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Qual técnica usar?",
    historia:
      "{NOME}, agora você conhece 4 técnicas: fator comum, agrupamento, diferença de quadrados e trinômio quadrado perfeito. Hoje o desafio é OLHAR a expressão e decidir qual usar — e às vezes combinar duas.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Kit de decisão. Antes de fatorar, pergunte sempre: existe fator comum?",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Fluxograma da fatoração",
        cabecalhos: ["Situação", "Técnica"],
        linhas: [
          { rotulo: "1", valores: ["Existe fator comum em TODOS os termos?", "Fator comum PRIMEIRO"] },
          { rotulo: "2", valores: ["2 termos, subtração, quadrados exatos", "Diferença de quadrados: a² − b² = (a+b)(a−b)"] },
          { rotulo: "3", valores: ["3 termos, √1º e √3º exatas, meio = 2·a·b", "Trinômio quadrado perfeito: (a ± b)²"] },
          { rotulo: "4", valores: ["4 termos, sem fator em todos", "Agrupamento 2 a 2"] },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia: "Por que fator comum vem SEMPRE primeiro?",
    pista: "Fatorar por fora deixa a expressão dentro do parêntese mais simples — e muitas vezes revela um padrão escondido.",
    revelacao:
      "Ordem sagrada: 1º fator comum → 2º padrão notável (DQP ou TQP) → 3º agrupamento se sobrar.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x² + 12x + 12  (fator comum ANTES do TQP)",
      passos: [
        {
          expr: "MDC(3, 12, 12) = 3",
          explica: "Existe fator comum: 3.",
          status: "ok",
          professor:
            "Se eu pular esse passo, tento aplicar TQP direto e travo (√3 não é exato). Sempre extraia o fator comum primeiro.",
        },
        {
          expr: "3x² + 12x + 12 = 3·(x² + 4x + 4)",
          explica: "Coloco 3 em evidência.",
          status: "ok",
          professor:
            "Dividi cada termo por 3. Sobra x² + 4x + 4 no parêntese — agora sim um TQP limpo.",
        },
        {
          expr: "x² + 4x + 4 = (x + 2)²",
          explica: "Aplico TQP no que sobrou.",
          status: "ok",
          professor:
            "√x² = x; √4 = 2; teste do meio: 2·x·2 = 4x ✅. Sinal +. Fatorada: (x + 2)².",
        },
        {
          expr: "3x² + 12x + 12 = 3·(x + 2)²",
          explica: "Fatoração final completa.",
          status: "ok",
          professor:
            "Junto tudo. Prova: 3·(x+2)² = 3·(x² + 4x + 4) = 3x² + 12x + 12. ✅",
        },
      ],
      fatorada: "3·(x + 2)²",
    },
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Combinando técnicas — passo a passo",
    etapas: [
      // Etapa 1 — fator comum + diferença de quadrados
      {
        texto: "Combo 1: fator comum + diferença de quadrados. Fatore 2x² − 8.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x² − 8",
            passos: [
              { expr: "MDC(2, 8) = 2", explica: "Fator comum.", status: "ok",
                professor: "Antes de qualquer coisa, pergunte se há fator comum. Aqui é o 2." },
              { expr: "2x² − 8 = 2·(x² − 4)", explica: "Coloco 2 em evidência.", status: "ok",
                professor: "Dentro do parêntese sobra x² − 4 — e agora enxergo um segundo padrão." },
              { expr: "x² − 4 = (x + 2)·(x − 2)", explica: "Diferença de quadrados.", status: "ok",
                professor: "√x² = x; √4 = 2. Aplico a fórmula: (x+2)(x−2)." },
              { expr: "2x² − 8 = 2·(x + 2)·(x − 2)", explica: "Fatoração final.", status: "ok",
                professor: "Prova: 2·(x+2)(x−2) = 2·(x²−4) = 2x² − 8. ✅" },
            ],
            fatorada: "2·(x + 2)·(x − 2)",
          },
        },
      },

      // Etapa 2 — fator comum + trinômio quadrado
      {
        texto: "Combo 2: fator comum + trinômio quadrado. Fatore 5x² + 20x + 20.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5x² + 20x + 20",
            passos: [
              { expr: "MDC(5, 20, 20) = 5", explica: "Fator comum.", status: "ok",
                professor: "Extrai o 5 antes de mexer nos padrões notáveis." },
              { expr: "5x² + 20x + 20 = 5·(x² + 4x + 4)", explica: "Fator comum aplicado.", status: "ok",
                professor: "Divide cada termo por 5. Sobra x² + 4x + 4." },
              { expr: "x² + 4x + 4 = (x + 2)²", explica: "TQP.", status: "ok",
                professor: "√x² = x; √4 = 2; teste do meio: 2·x·2 = 4x ✅. Sinal + → (x+2)²." },
              { expr: "5x² + 20x + 20 = 5·(x + 2)²", explica: "Fatoração final.", status: "ok",
                professor: "Prova: 5·(x+2)² = 5·(x² + 4x + 4) = 5x² + 20x + 20. ✅" },
            ],
            fatorada: "5·(x + 2)²",
          },
        },
      },

      // Etapa 3 — armadilha: reconhecer a técnica certa
      {
        texto: "Escolha certa: x² − 16 é DQP, x² − 16x + 64 é TQP. Não confunda.",
        exemploReal: {
          titulo: "🔎 Diferença vs. trinômio",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 16   (DQP)   vs.   x² − 16x + 64   (TQP)",
            passos: [
              { expr: "x² − 16 → 2 termos, subtração", explica: "Diferença de quadrados.", status: "ok",
                professor: "Só 2 termos e uma subtração → tenta DQP. √x² = x, √16 = 4 → (x+4)(x−4)." },
              { expr: "x² − 16x + 64 → 3 termos", explica: "Trinômio quadrado perfeito.", status: "ok",
                professor: "3 termos → talvez TQP. √x² = x, √64 = 8, teste 2·x·8 = 16x ✅. Sinal − → (x − 8)²." },
              { expr: "Comparando", explica: "Contar termos é o 1º filtro rápido.", status: "neutro",
                professor: "Regra rápida: 2 termos com '−' → tenta DQP. 3 termos → tenta TQP. 4 termos → tenta agrupamento." },
            ],
            fatorada: "x² − 16 = (x + 4)(x − 4)   |   x² − 16x + 64 = (x − 8)²",
          },
        },
      },

      // Etapa 4 — combo com agrupamento
      {
        texto: "Combo 3: agrupamento + fator comum. Fatore 2ax + 2ay + 4bx + 4by.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2ax + 2ay + 4bx + 4by",
            passos: [
              { expr: "MDC(2, 2, 4, 4) = 2", explica: "Fator comum 2 em todos.", status: "ok",
                professor: "Antes do agrupamento, extrai o fator comum global." },
              { expr: "= 2·(ax + ay + 2bx + 2by)", explica: "2 em evidência.", status: "ok",
                professor: "Divide cada termo por 2. Sobra ax + ay + 2bx + 2by dentro." },
              { expr: "ax + ay + 2bx + 2by = a·(x + y) + 2b·(x + y)", explica: "Agrupa 2 a 2 e evidencia.", status: "ok",
                professor: "Agrupa (ax + ay) e (2bx + 2by). Evidencia a e 2b. Parênteses batem: (x + y)." },
              { expr: "= (x + y)·(a + 2b)", explica: "Fatoração do interior.", status: "ok",
                professor: "(x + y) em evidência, sobra (a + 2b)." },
              { expr: "2ax + 2ay + 4bx + 4by = 2·(x + y)·(a + 2b)", explica: "Fatoração final.", status: "ok",
                professor: "Prova: 2·(x+y)(a+2b) = 2·(ax + 2bx + ay + 2by) = 2ax + 4bx + 2ay + 4by. ✅" },
            ],
            fatorada: "2·(x + y)·(a + 2b)",
          },
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado: "Brilha resolve 5x² − 20 — clica Continuar.",
    resposta: "5·(x + 2)·(x − 2)",
    passos: [
      "Fator comum 5",
      "Sobra x² − 4",
      "DQP: (x + 2)·(x − 2)",
      "5·(x + 2)·(x − 2)",
    ],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5x² − 20",
      passos: [
        { expr: "MDC(5, 20) = 5", explica: "Fator comum.", status: "ok",
          professor: "Extrai o 5 antes de aplicar DQP." },
        { expr: "5x² − 20 = 5·(x² − 4)", explica: "5 em evidência.", status: "ok",
          professor: "Dentro do parêntese sobra x² − 4 — 2 termos, subtração, quadrados exatos → DQP." },
        { expr: "x² − 4 = (x + 2)·(x − 2)", explica: "DQP.", status: "ok",
          professor: "√x² = x; √4 = 2 → (x+2)(x−2)." },
        { expr: "5x² − 20 = 5·(x + 2)·(x − 2)", explica: "Fatoração final.", status: "ok",
          professor: "Prova: 5·(x+2)(x−2) = 5·(x² − 4) = 5x² − 20. ✅" },
      ],
      fatorada: "5·(x + 2)·(x − 2)",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore x² + 6x + 9.",
    dica: "3 termos, √1º e √3º exatas, teste do meio bate. É TQP.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 6x + 9",
      passos: [
        { expr: "√x² = x", explica: "a = x.", status: "ok" },
        { expr: "√9 = 3", explica: "b = 3.", status: "ok" },
        { expr: "2·x·3 = 6x ✅", explica: "Teste do meio bate.", status: "ok" },
        { expr: "(x + 3)²", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "(x + 3)²",
      legenda: "Nós fazemos — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "(x + 3)²" }, { nome: "(x + 3)·(x − 3)" }, { nome: "3·(x + 3)" }],
      respostaCerta: "(x + 3)²",
      feedbackAcerto: "🎯 3 termos, teste 2·x·3 = 6x ✅, sinal + → (x + 3)².",
      feedbackErro:
        "3 termos + teste do meio batendo = TQP. Sinal + → (x + 3)², não (x+3)(x−3).",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado: "Você faz: fatore 2x² − 50.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x² − 50",
      passos: [
        { expr: "MDC(2, 50) = 2", explica: "Fator comum.", status: "ok" },
        { expr: "2x² − 50 = 2·(x² − 25)", explica: "2 em evidência.", status: "ok" },
        { expr: "x² − 25 = (x + 5)·(x − 5)", explica: "DQP.", status: "ok" },
        { expr: "= 2·(x + 5)·(x − 5)", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "2·(x + 5)·(x − 5)",
      legenda: "Você faz — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "2·(x + 5)·(x − 5)" },
        { nome: "(2x + 5)·(x − 10)" },
        { nome: "2·(x − 5)²" },
      ],
      respostaCerta: "2·(x + 5)·(x − 5)",
      feedbackAcerto: "🎯 Fator comum 2 → sobra x² − 25 (DQP) → 2·(x+5)(x−5).",
      feedbackErro:
        "Extraia o 2 primeiro; sobra x² − 25, que é diferença de quadrados. → 2·(x + 5)·(x − 5).",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "Um retângulo tem área x² − 9 m². O arquiteto precisa das medidas dos DOIS lados.",
    problema: "Escreva a área na forma FATORADA (lado 1 · lado 2).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 9",
      passos: [
        { expr: "√x² = x", explica: "a = x m.", status: "ok" },
        { expr: "√9 = 3", explica: "b = 3 m.", status: "ok" },
        { expr: "x² − 9 = (x + 3)·(x − 3)", explica: "DQP.", status: "ok",
          professor: "Os dois lados do retângulo são (x + 3) m e (x − 3) m." },
      ],
      fatorada: "(x + 3)·(x − 3)  m²",
      legenda: "Aplicação — retângulo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quais são os lados?",
      opcoes: [
        { nome: "(x + 3) e (x − 3)" },
        { nome: "x e −9" },
        { nome: "(x − 3)²" },
      ],
      respostaCerta: "(x + 3) e (x − 3)",
      feedbackAcerto: "🎯 x² − 9 = (x + 3)·(x − 3) → lados (x + 3) e (x − 3) m.",
      feedbackErro:
        "x² − 9 é diferença de quadrados. Fatorada: (x + 3)·(x − 3). Lados: (x + 3) e (x − 3).",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Ordem: 1) fator comum primeiro; 2) padrão notável (DQP/TQP); 3) agrupamento se sobrou.",
      "Contagem de termos é filtro rápido: 2 → DQP; 3 → TQP; 4 → agrupamento.",
      "Combinar técnicas é comum — não pare no 1º passo.",
      "Prova sempre: multiplique a fatorada de volta e confira.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Fatorar 3x + 3:",
        opcoes: ["3·(x + 1)", "3x + 3", "x + 3"],
        correta: 0,
        feedbackAcerto: "🎉 Fator comum 3. 3x÷3=x; 3÷3=1 → 3·(x + 1).",
        feedbackErro: "MDC = 3. Não esqueça o 1: 3·(x + 1).",
      },
      {
        pergunta: "Fatorar x² − 16:",
        opcoes: ["(x + 4)·(x − 4)", "(x − 4)²", "(x + 4)²"],
        correta: 0,
        feedbackAcerto: "🎉 2 termos, subtração, quadrados exatos → DQP.",
        feedbackErro: "É DQP: √x² = x, √16 = 4 → (x + 4)·(x − 4).",
      },
      {
        pergunta: "Fatorar x² + 2x + 1:",
        opcoes: ["(x + 1)²", "(x − 1)²", "(x + 1)·(x − 1)"],
        correta: 0,
        feedbackAcerto: "🎉 3 termos, teste 2·x·1 = 2x ✅, sinal + → (x + 1)².",
        feedbackErro: "É TQP. √x²=x, √1=1, teste bate. Sinal + → (x + 1)².",
      },
      {
        pergunta: "Fatorar ax + ay + bx + by:",
        opcoes: ["(a + b)·(x + y)", "(a − b)·(x − y)", "ab + xy"],
        correta: 0,
        feedbackAcerto: "🎉 Agrupamento: a·(x+y) + b·(x+y) → (a+b)(x+y).",
        feedbackErro: "4 termos → agrupamento. Evidencia a e b, parêntese repetido (x+y).",
      },
      {
        pergunta: "Fatorar 3x² + 12x + 12:",
        opcoes: ["3·(x + 2)²", "(3x + 2)²", "3·(x + 2)·(x − 2)"],
        correta: 0,
        feedbackAcerto: "🎉 Fator comum 3 → sobra x² + 4x + 4 (TQP) → 3·(x + 2)².",
        feedbackErro: "Extraia 3 primeiro; sobra x² + 4x + 4, que é TQP → 3·(x + 2)².",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "Diploma de Mestre da Fatoração",
    materiais: ["Papel", "Lápis", "Régua"],
    passos: [
      "Faça um diploma no caderno: 'Mestre da Fatoração — {NOME}'.",
      "Ao lado do diploma, escreva 4 expressões, uma para cada técnica: fator comum, agrupamento, diferença de quadrados, TQP.",
      "Fatore cada uma mostrando o passo a passo e prove multiplicando de volta.",
    ],
    registro: "📸 Foto do diploma com as 4 fatorações e as provas.",
  },

  recompensa: { xp: 240, moedas: 120, medalha: "Mestre da Fatoração" },
};
