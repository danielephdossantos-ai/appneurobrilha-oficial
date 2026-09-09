import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Diferença de dois quadrados: a² − b² = (a+b)(a−b).
 * Formato: conta armada + passo a passo interativo, com prova geométrica
 * pelo trinômio quadrado (comparando com o que NÃO é DQP).
 */
export const aula03_diferencaQuad: AulaV4 = {
  slug: "u3-03-diferenca-quadrados",
  titulo: "Diferença de dois quadrados",
  iconeTrilha: "🟦",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp", "cpa"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Inverter o produto notável",
    historia:
      "{NOME}, na aula passada vimos que (a + b)·(a − b) = a² − b². Hoje é o CAMINHO INVERSO: quem viu uma diferença de dois quadrados, volta pros fatores. Reconhecer a estrutura é o segredo.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Observe o padrão: dois termos, uma subtração, ambos quadrados perfeitos.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "x² − 9",
        passos: [
          {
            expr: "1º termo: x² → √x² = x",
            explica: "a = x.",
            status: "ok",
            professor:
              "Para usar o padrão a² − b² = (a+b)(a−b), preciso identificar 'a' e 'b'. O 1º termo é x², e sua raiz quadrada é x. Guardo a = x.",
          },
          {
            expr: "2º termo: 9 → √9 = 3",
            explica: "b = 3.",
            status: "ok",
            professor:
              "O 2º termo é 9, e sua raiz é 3, porque 3·3 = 9. Guardo b = 3.",
          },
          {
            expr: "sinal do meio: −",
            explica: "Precisa ser DIFERENÇA. Se fosse +, não daria.",
            status: "neutro",
            professor:
              "Regra: a fatoração a² − b² = (a+b)(a−b) só vale para DIFERENÇA. Se a expressão fosse x² + 9 (soma), NÃO se fatora nos inteiros.",
          },
          {
            expr: "x² − 9 = (x + 3)·(x − 3)",
            explica: "Um parêntese com + e outro com −.",
            status: "ok",
            professor:
              "Escrevo sempre: (a + b)·(a − b). Um parêntese vai com + e o outro com −. Prova: (x + 3)·(x − 3) = x² − 3x + 3x − 9 = x² − 9. ✅",
          },
        ],
        fatorada: "(x + 3)·(x − 3)",
        legenda: "Prova visual: diferença de dois quadrados",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia: "Quando POSSO usar a fórmula a² − b² = (a+b)(a−b)?",
    pista: "Só quando (1) só tem 2 termos, (2) é SUBTRAÇÃO, (3) AMBOS são quadrados perfeitos.",
    revelacao:
      "Três condições: dois termos, sinal '−', e cada termo com raiz exata. Faltou alguma? Não é diferença de quadrados.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Teste rápido: 4x² − 25 é DQP?",
      passos: [
        {
          expr: "2 termos? ✅",
          explica: "4x² e 25.",
          status: "ok",
          professor: "Contagem: só dois termos. Passou na 1ª condição.",
        },
        {
          expr: "Diferença? ✅",
          explica: "Sinal entre eles é '−'.",
          status: "ok",
          professor: "A operação entre os termos é subtração. 2ª condição ok.",
        },
        {
          expr: "Ambos quadrados? √4x² = 2x, √25 = 5 → ✅",
          explica: "Os dois têm raiz exata.",
          status: "ok",
          professor:
            "4x² = (2x)² e 25 = 5². Ambos são quadrados perfeitos. Passou. Logo: 4x² − 25 = (2x + 5)·(2x − 5).",
        },
      ],
      fatorada: "(2x + 5)·(2x − 5)",
    },
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Fatorar diferença de quadrados — passo a passo",
    etapas: [
      // Etapa 1 — caso simples
      {
        texto: "Caso 1: número simples. Fatore x² − 16.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 16",
            passos: [
              { expr: "√x² = x", explica: "a = x.", status: "ok",
                professor: "Raiz do 1º termo. Guardo a = x." },
              { expr: "√16 = 4", explica: "b = 4.", status: "ok",
                professor: "Raiz de 16 é 4, porque 4·4 = 16. Guardo b = 4." },
              { expr: "x² − 16 = (x + 4)·(x − 4)", explica: "Fatoração final.", status: "ok",
                professor: "Aplico a fórmula: (a+b)(a−b) = (x+4)(x−4). Prova: (x+4)(x−4) = x² − 4x + 4x − 16 = x² − 16. ✅" },
            ],
            fatorada: "(x + 4)·(x − 4)",
          },
        },
      },

      // Etapa 2 — coeficiente no primeiro termo
      {
        texto: "Caso 2: coeficiente ≠ 1. Fatore 9x² − 49.",
        exemploReal: {
          titulo: "🔎 Cuidado com o coeficiente",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "9x² − 49",
            passos: [
              { expr: "√9x² = 3x", explica: "Cuidado: NÃO é x. É 3x, porque √9 = 3.", status: "ok",
                professor: "Erro clássico: pensar que √9x² = x. NÃO! Separa: √9·√x² = 3·x = 3x. a = 3x." },
              { expr: "√49 = 7", explica: "b = 7.", status: "ok",
                professor: "Raiz de 49 é 7, porque 7·7 = 49. b = 7." },
              { expr: "9x² − 49 = (3x + 7)·(3x − 7)", explica: "Fatoração final.", status: "ok",
                professor: "Aplico: (3x + 7)·(3x − 7). Prova: (3x+7)(3x−7) = 9x² − 21x + 21x − 49 = 9x² − 49. ✅" },
            ],
            fatorada: "(3x + 7)·(3x − 7)",
          },
        },
      },

      // Etapa 3 — ordem invertida
      {
        texto: "Caso 3: número primeiro. Fatore 25 − x².",
        exemploReal: {
          titulo: "🔎 Ordem invertida",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "25 − x²",
            passos: [
              { expr: "1º termo: 25 → √25 = 5", explica: "a = 5.", status: "ok",
                professor: "Aqui o quadrado maior está NA FRENTE. Trato o 25 como a². a = 5." },
              { expr: "2º termo: x² → √x² = x", explica: "b = x.", status: "ok",
                professor: "O termo subtraído é x². b = x." },
              { expr: "25 − x² = (5 + x)·(5 − x)", explica: "Fatoração final.", status: "ok",
                professor: "Aplico a fórmula respeitando a ORDEM em que aparece: (a+b)(a−b) = (5+x)(5−x). Prova: (5+x)(5−x) = 25 − 5x + 5x − x² = 25 − x². ✅" },
            ],
            fatorada: "(5 + x)·(5 − x)",
          },
        },
      },

      // Etapa 4 — falso alarme (soma)
      {
        texto: "Falso alarme: x² + 9 NÃO é diferença de quadrados.",
        exemploReal: {
          titulo: "🔎 Cuidado com a soma",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 9",
            passos: [
              { expr: "√x² = x, √9 = 3", explica: "Ambos são quadrados perfeitos.", status: "ok",
                professor: "As raízes até existem. Mas isso não basta." },
              { expr: "sinal: +", explica: "É SOMA, não diferença.", status: "x",
                professor: "A fórmula a² − b² = (a+b)(a−b) exige SUBTRAÇÃO. Aqui é soma → NÃO se fatora nos números reais como diferença de quadrados. Fica como está: x² + 9." },
            ],
            falha: "Não é DQP: precisa ser SUBTRAÇÃO. Soma de dois quadrados não fatora nos reais.",
          },
        },
      },

      // Etapa 5 — combo com fator comum
      {
        texto: "Combo comum: fator comum ANTES da diferença. Fatore 2x² − 8.",
        exemploReal: {
          titulo: "🔎 Fator comum primeiro",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x² − 8",
            passos: [
              { expr: "MDC(2, 8) = 2", explica: "Existe fator comum.", status: "ok",
                professor: "Antes de sair aplicando fórmula, procure fator comum. Aqui: 2." },
              { expr: "2x² − 8 = 2·(x² − 4)", explica: "Coloco 2 em evidência.", status: "ok",
                professor: "Fatoro por 2. Dentro do parêntese sobra x² − 4 — que É diferença de quadrados." },
              { expr: "x² − 4 = (x + 2)·(x − 2)", explica: "Agora sim, DQP.", status: "ok",
                professor: "Aplico a fórmula em x² − 4: √x² = x, √4 = 2 → (x+2)(x−2)." },
              { expr: "2x² − 8 = 2·(x + 2)·(x − 2)", explica: "Fatoração completa.", status: "ok",
                professor: "Escrevo tudo junto. Prova: 2·(x+2)(x−2) = 2·(x²−4) = 2x² − 8. ✅" },
            ],
            fatorada: "2·(x + 2)·(x − 2)",
          },
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado: "Brilha resolve 25 − 4x² — clica Continuar.",
    resposta: "(5 + 2x)·(5 − 2x)",
    passos: ["√25 = 5", "√4x² = 2x", "(5 + 2x)·(5 − 2x)"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "25 − 4x²",
      passos: [
        { expr: "√25 = 5", explica: "a = 5.", status: "ok",
          professor: "1º termo (25) tem raiz 5. a = 5." },
        { expr: "√4x² = 2x", explica: "Cuidado: √4 = 2 → √4x² = 2x.", status: "ok",
          professor: "2º termo é 4x². √4 = 2 e √x² = x → √4x² = 2x. b = 2x." },
        { expr: "25 − 4x² = (5 + 2x)·(5 − 2x)", explica: "Fatoração final.", status: "ok",
          professor: "Aplico a fórmula respeitando a ordem. Prova: (5+2x)(5−2x) = 25 − 10x + 10x − 4x² = 25 − 4x². ✅" },
      ],
      fatorada: "(5 + 2x)·(5 − 2x)",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore x² − 4.",
    dica: "√x² = x; √4 = 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 4",
      passos: [
        { expr: "√x² = x", explica: "a = x.", status: "ok" },
        { expr: "√4 = 2", explica: "b = 2.", status: "ok" },
        { expr: "x² − 4 = (x + 2)·(x − 2)", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "(x + 2)·(x − 2)",
      legenda: "Nós fazemos — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "(x + 2)·(x − 2)" }, { nome: "(x − 2)²" }, { nome: "(x + 2)²" }],
      respostaCerta: "(x + 2)·(x − 2)",
      feedbackAcerto: "🎯 √4 = 2. É DIFERENÇA de quadrados → (x+2)(x−2).",
      feedbackErro:
        "É DIFERENÇA (sinal −), não trinômio quadrado. Usa a fórmula a²−b² = (a+b)(a−b) → (x+2)(x−2).",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado: "Você faz: fatore 4x² − 81.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x² − 81",
      passos: [
        { expr: "√4x² = 2x", explica: "Cuidado: √4 = 2, então √4x² = 2x.", status: "ok" },
        { expr: "√81 = 9", explica: "b = 9.", status: "ok" },
        { expr: "4x² − 81 = (2x + 9)·(2x − 9)", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "(2x + 9)·(2x − 9)",
      legenda: "Você faz — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "(2x + 9)·(2x − 9)" },
        { nome: "(4x + 9)·(4x − 9)" },
        { nome: "(2x − 9)²" },
      ],
      respostaCerta: "(2x + 9)·(2x − 9)",
      feedbackAcerto: "🎯 √4x² = 2x (não 4x); √81 = 9 → (2x+9)(2x−9).",
      feedbackErro:
        "√4x² = 2x, não 4x. E √81 = 9. Fatorada: (2x + 9)·(2x − 9).",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "Um terreno quadrado tem L m de lado (área L²). O pedreiro recorta um quadrado de 5 m de lado (área 25). Sobra a região L² − 25.",
    problema: "Escreva a área que sobra na forma FATORADA e diga o que representa.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "L² − 25",
      passos: [
        { expr: "√L² = L", explica: "a = L (metros).", status: "ok" },
        { expr: "√25 = 5", explica: "b = 5 m.", status: "ok" },
        { expr: "L² − 25 = (L + 5)·(L − 5)", explica: "Fatoração final.", status: "ok",
          professor: "Geometricamente: (L + 5) e (L − 5) são os dois lados do retângulo equivalente que sobra depois do corte." },
      ],
      fatorada: "(L + 5)·(L − 5)  m²",
      legenda: "Aplicação — terreno com recorte",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada da área restante?",
      opcoes: [{ nome: "(L + 5)·(L − 5)" }, { nome: "(L − 5)²" }, { nome: "L² − 25" }],
      respostaCerta: "(L + 5)·(L − 5)",
      feedbackAcerto: "🎯 L² − 25 é diferença de dois quadrados: (L+5)(L−5).",
      feedbackErro:
        "L² − 25 tem 2 termos, é diferença, e ambos são quadrados. Fórmula a²−b² = (a+b)(a−b) → (L+5)(L−5).",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Fórmula: a² − b² = (a + b)·(a − b). Só vale para DIFERENÇA.",
      "Ambos os termos precisam ter raiz exata (quadrados perfeitos).",
      "Coeficientes: cuidado com √4x² = 2x, √9x² = 3x, √25x⁴ = 5x².",
      "Soma de dois quadrados (a² + b²) NÃO fatora nos reais.",
      "Antes de aplicar, veja se há fator comum a colocar em evidência.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Fatorar x² − 1:",
        opcoes: ["(x + 1)·(x − 1)", "(x − 1)²", "(x + 1)²"],
        correta: 0,
        feedbackAcerto: "🎉 a = x, b = 1 → (x + 1)(x − 1).",
        feedbackErro: "É DIFERENÇA de quadrados → (x + 1)(x − 1). (x−1)² dá x² − 2x + 1.",
      },
      {
        pergunta: "Fatorar x² − 100:",
        opcoes: ["(x + 10)·(x − 10)", "(x − 10)²", "(x + 100)·(x − 1)"],
        correta: 0,
        feedbackAcerto: "🎉 √100 = 10 → (x + 10)(x − 10).",
        feedbackErro: "√100 = 10. Fatorada: (x + 10)(x − 10).",
      },
      {
        pergunta: "Fatorar 16x² − 1:",
        opcoes: ["(4x + 1)·(4x − 1)", "(2x + 1)·(8x − 1)", "(4x − 1)²"],
        correta: 0,
        feedbackAcerto: "🎉 √16x² = 4x; √1 = 1 → (4x+1)(4x−1).",
        feedbackErro: "√16x² = 4x (não 2x nem 16x). Fatorada: (4x + 1)(4x − 1).",
      },
      {
        pergunta: "x² + 9 é diferença de quadrados?",
        opcoes: ["Não — é SOMA, não fatora nos reais", "Sim, dá (x+3)(x−3)", "Sim, dá (x+3)²"],
        correta: 0,
        feedbackAcerto: "🎉 Precisa ser SUBTRAÇÃO. Soma de quadrados não fatora nos reais.",
        feedbackErro:
          "A fórmula a² − b² = (a+b)(a−b) só vale para DIFERENÇA. x² + 9 é soma, então não fatora nos reais.",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "Detetive dos quadrados",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Escreva 4 expressões: 2 que SÃO diferença de quadrados e 2 armadilhas (soma, coeficiente não quadrado, etc.).",
      "Para as que são, fatore. Para as armadilhas, escreva por que NÃO se aplica.",
      "Confira multiplicando de volta as que foram fatoradas.",
    ],
    registro: "📸 Foto do caderno com as 4 análises.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
