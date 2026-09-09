import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto "escola particular top" — Fator comum em evidência.
 * Formato: conta armada + passo a passo interativo, com bolha do professor
 * cuidando de sinais, MDC, expoentes e "conferir multiplicando de volta".
 */
export const aula01_fatorComum: AulaV4 = {
  slug: "u3-01-fator-comum",
  titulo: "Fator comum em evidência",
  iconeTrilha: "🔧",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp", "vergnaud", "cpa"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Desfazer a distributiva",
    historia:
      "{NOME}, se 3·(x + 2) = 3x + 6, quem enxerga 3x + 6 pode DESFAZER e voltar para 3·(x + 2). Isso é fatorar: achar o que se repete e colocar em evidência. Vamos clicar passo a passo, sem decoreba.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Olhe a expressão 6x + 9. Vamos abrir cada termo e descobrir o que se repete — o fator comum.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "6x + 9",
        passos: [
          {
            expr: "6x = 2 · 3 · x",
            explica: "Decomponho o 1º termo em fatores.",
            status: "ok",
            professor:
              "Para achar o fator comum, primeiro escrevo cada termo como produto de fatores. 6 = 2 · 3, então 6x = 2 · 3 · x.",
          },
          {
            expr: "9 = 3 · 3",
            explica: "Decomponho o 2º termo.",
            status: "ok",
            professor:
              "Faço o mesmo com 9: 9 = 3 · 3. Nenhuma letra aqui — só números.",
          },
          {
            expr: "comum: 3",
            explica: "O 3 aparece em AMBOS. O x só está no 1º, então não entra.",
            status: "neutro",
            professor:
              "Fator comum = tudo que aparece em TODOS os termos, com o MENOR expoente. O 3 aparece nos dois. O x só está em 6x, então NÃO faz parte do fator comum.",
          },
          {
            expr: "6x + 9 = 3·(2x + 3)",
            explica: "Coloco o 3 em evidência e divido cada termo por 3.",
            status: "ok",
            professor:
              "Coloco o 3 do lado de fora e divido cada termo por 3: 6x ÷ 3 = 2x; 9 ÷ 3 = 3. Sobra (2x + 3) dentro do parêntese. Confira multiplicando de volta: 3·(2x + 3) = 6x + 9. ✅",
          },
        ],
        fatorada: "3·(2x + 3)",
        legenda: "Prova visual: fatorar = desfazer a distributiva",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia: "Como achar o MAIOR fator comum de uma vez só?",
    pista: "MDC dos números × letras que aparecem em TODOS, com o MENOR expoente.",
    revelacao:
      "Fator comum = MDC dos coeficientes × produto das letras comuns no menor expoente.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12x³ + 18x²",
      passos: [
        {
          expr: "MDC(12, 18) = 6",
          explica: "Parte numérica do fator comum.",
          status: "ok",
          professor:
            "12 = 2·2·3 e 18 = 2·3·3. Fatores em comum: um 2 e um 3 → 2·3 = 6. Esse é o MDC(12, 18).",
        },
        {
          expr: "letra comum: x² (menor expoente)",
          explica: "x³ tem x², x² tem x². O menor expoente ganha.",
          status: "ok",
          professor:
            "x³ = x·x·x e x² = x·x. O que está em AMBOS é x·x = x². Regra: quando a mesma letra aparece nos dois termos, entra com o MENOR expoente.",
        },
        {
          expr: "fator comum = 6x²",
          explica: "Junto MDC × letras comuns.",
          status: "neutro",
          professor:
            "Multiplico a parte numérica pela parte literal: 6 · x² = 6x². Esse é o maior fator comum.",
        },
        {
          expr: "12x³ + 18x² = 6x²·(2x + 3)",
          explica: "Divido cada termo por 6x².",
          status: "ok",
          professor:
            "12x³ ÷ 6x² = 2x (12÷6 = 2; x³÷x² = x). 18x² ÷ 6x² = 3. Fatorada: 6x²·(2x + 3). Confere: 6x²·(2x + 3) = 12x³ + 18x². ✅",
        },
      ],
      fatorada: "6x²·(2x + 3)",
    },
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Fatorar por fator comum — clicando passo a passo",
    etapas: [
      // Etapa 1 — só números
      {
        texto: "Caso 1: só coeficientes. Fatore 10a + 15.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "10a + 15",
            passos: [
              {
                expr: "10 = 2·5;  15 = 3·5",
                explica: "Decomponho os coeficientes.",
                status: "ok",
                professor:
                  "Escrevo cada número como produto de primos: 10 = 2·5 e 15 = 3·5. Isso deixa claro o que aparece nos dois.",
              },
              {
                expr: "MDC(10, 15) = 5",
                explica: "O 5 aparece nos dois.",
                status: "ok",
                professor:
                  "O único fator em comum é o 5. Logo MDC(10, 15) = 5. A letra 'a' está só em 10a, então não entra.",
              },
              {
                expr: "10a + 15 = 5·(2a + 3)",
                explica: "Coloco 5 em evidência.",
                status: "ok",
                professor:
                  "Divido cada termo por 5: 10a ÷ 5 = 2a; 15 ÷ 5 = 3. Fatorada: 5·(2a + 3). Prova: 5·2a + 5·3 = 10a + 15. ✅",
              },
            ],
            fatorada: "5·(2a + 3)",
          },
        },
      },

      // Etapa 2 — só letras
      {
        texto: "Caso 2: só letras. Fatore x⁵ − x³.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x⁵ − x³",
            passos: [
              {
                expr: "x⁵ = x³·x²;  x³ = x³·1",
                explica: "Separo o x³ que existe em ambos.",
                status: "ok",
                professor:
                  "x⁵ pode ser escrito como x³·x². E x³ é x³·1. Assim fica visível que x³ está nos dois.",
              },
              {
                expr: "fator comum: x³ (menor expoente)",
                explica: "Menor expoente de x nos dois termos: 3.",
                status: "ok",
                professor:
                  "Quando a mesma letra aparece em ambos, entra com o MENOR expoente. x⁵ tem x até a quinta; x³ tem x até a terceira. O menor é 3 → fator comum é x³.",
              },
              {
                expr: "x⁵ − x³ = x³·(x² − 1)",
                explica: "Cuidado com o SINAL do 2º termo.",
                status: "ok",
                professor:
                  "Divido: x⁵ ÷ x³ = x²; x³ ÷ x³ = 1. Mantenho o sinal negativo: x³·(x² − 1). Erro comum: esquecer o 1 e escrever x³·(x²) — errado, porque some um termo. Prova: x³·x² − x³·1 = x⁵ − x³. ✅",
              },
            ],
            fatorada: "x³·(x² − 1)",
          },
        },
      },

      // Etapa 3 — números + letras juntos
      {
        texto: "Caso 3: números e letras juntos. Fatore 10x²y + 15xy².",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "10x²y + 15xy²",
            passos: [
              {
                expr: "MDC(10, 15) = 5",
                explica: "Parte numérica.",
                status: "ok",
                professor:
                  "10 = 2·5 e 15 = 3·5. Fator comum numérico: 5.",
              },
              {
                expr: "x nos dois: menor expoente = x¹ = x",
                explica: "x² tem x·x; xy² tem x. Menor: x.",
                status: "ok",
                professor:
                  "A letra x aparece em ambos: no 1º termo com expoente 2, no 2º com expoente 1. Entra com o menor: x¹ = x.",
              },
              {
                expr: "y nos dois: menor expoente = y¹ = y",
                explica: "10x²y tem y¹; 15xy² tem y². Menor: y.",
                status: "ok",
                professor:
                  "A letra y aparece em ambos: expoente 1 e expoente 2. Menor: 1 → entra y.",
              },
              {
                expr: "fator comum = 5xy",
                explica: "Junto tudo: 5 · x · y = 5xy.",
                status: "neutro",
                professor:
                  "Multiplico as três partes: 5 (do MDC) · x (do menor expoente de x) · y (do menor expoente de y) = 5xy.",
              },
              {
                expr: "10x²y + 15xy² = 5xy·(2x + 3y)",
                explica: "Divido cada termo por 5xy.",
                status: "ok",
                professor:
                  "10x²y ÷ 5xy = 2x (10÷5=2; x²÷x=x; y÷y=1). 15xy² ÷ 5xy = 3y. Fatorada: 5xy·(2x + 3y). Confere: 5xy·2x + 5xy·3y = 10x²y + 15xy². ✅",
              },
            ],
            fatorada: "5xy·(2x + 3y)",
          },
        },
      },

      // Etapa 4 — armadilha do 1 sumido
      {
        texto: "Armadilha comum: quando o fator comum é o PRÓPRIO termo. Fatore 4x + 4.",
        exemploReal: {
          titulo: "🔎 Cuidado com o 1",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4x + 4",
            passos: [
              {
                expr: "MDC(4, 4) = 4",
                explica: "Os dois têm o 4.",
                status: "ok",
                professor:
                  "Ambos os termos têm o 4. Fator comum numérico: 4.",
              },
              {
                expr: "não há letra em ambos",
                explica: "'x' só está no 1º termo.",
                status: "neutro",
                professor:
                  "A letra x só aparece em 4x, não em 4. Então NÃO entra no fator comum.",
              },
              {
                expr: "4x + 4 = 4·(x + 1)",
                explica: "NUNCA escreva 4·(x). Sumiria um termo!",
                status: "ok",
                professor:
                  "Divido: 4x ÷ 4 = x; 4 ÷ 4 = 1. O 1 é OBRIGATÓRIO — não pode desaparecer. Escreva 4·(x + 1), não 4·(x). Prova: 4·(x + 1) = 4x + 4. ✅",
              },
            ],
            fatorada: "4·(x + 1)",
          },
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado: "Brilha resolve 6x² + 9x — clica Continuar e acompanha o raciocínio.",
    resposta: "3x·(2x + 3)",
    passos: [
      "MDC(6, 9) = 3",
      "x nos dois: menor expoente x¹",
      "fator comum = 3x",
      "3x·(2x + 3)",
    ],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6x² + 9x",
      passos: [
        {
          expr: "MDC(6, 9) = 3",
          explica: "Parte numérica.",
          status: "ok",
          professor: "6 = 2·3; 9 = 3·3. Fator comum numérico: 3.",
        },
        {
          expr: "x nos dois: menor expoente x¹ = x",
          explica: "6x² tem x²; 9x tem x. Menor: x.",
          status: "ok",
          professor:
            "A letra x aparece em ambos, com expoentes 2 e 1. Entra com o menor: x¹.",
        },
        {
          expr: "fator comum = 3x",
          explica: "3 · x = 3x.",
          status: "neutro",
          professor: "Multiplico a parte numérica pela literal: 3·x = 3x.",
        },
        {
          expr: "6x² + 9x = 3x·(2x + 3)",
          explica: "Divido cada termo por 3x.",
          status: "ok",
          professor:
            "6x² ÷ 3x = 2x. 9x ÷ 3x = 3. Fatorada: 3x·(2x + 3). Prova: 3x·2x + 3x·3 = 6x² + 9x. ✅",
        },
      ],
      fatorada: "3x·(2x + 3)",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore 4x + 8.",
    dica: "MDC(4, 8) = 4. A letra x só está em 4x → não entra.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x + 8",
      passos: [
        { expr: "MDC(4, 8) = 4", explica: "Parte numérica.", status: "ok" },
        { expr: "sem letra em ambos", explica: "x só está no 1º.", status: "neutro" },
        { expr: "fator comum = 4", explica: "Só o número.", status: "neutro" },
        { expr: "4x + 8 = 4·(x + 2)", explica: "4x÷4 = x;  8÷4 = 2.", status: "ok" },
      ],
      fatorada: "4·(x + 2)",
      legenda: "Nós fazemos — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "4·(x + 2)" }, { nome: "2·(x + 4)" }, { nome: "4·(x + 8)" }],
      respostaCerta: "4·(x + 2)",
      feedbackAcerto: "🎯 MDC(4,8)=4. 4x÷4=x; 8÷4=2 → 4·(x + 2).",
      feedbackErro:
        "MDC(4,8) = 4, não 2. E 8 ÷ 4 = 2, então dentro do parêntese vai (x + 2).",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado: "Você faz: fatore x² − 5x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 5x",
      passos: [
        { expr: "MDC dos números: só há 1 e 5 → 1", explica: "Nada tira do numérico.", status: "neutro" },
        { expr: "x nos dois: menor expoente x¹ = x", explica: "x² e x → menor é x.", status: "ok" },
        { expr: "fator comum = x", explica: "Só a letra.", status: "neutro" },
        { expr: "x² − 5x = x·(x − 5)", explica: "x²÷x = x;  5x÷x = 5. Mantém o sinal −.", status: "ok" },
      ],
      fatorada: "x·(x − 5)",
      legenda: "Você faz — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "x·(x − 5)" }, { nome: "x²·(1 − 5)" }, { nome: "5·(x − x)" }],
      respostaCerta: "x·(x − 5)",
      feedbackAcerto: "🎯 x em evidência. x²÷x = x; 5x÷x = 5 → x·(x − 5).",
      feedbackErro:
        "O fator comum é só x. Divide cada termo por x: x²÷x = x; 5x÷x = 5. Fatorada: x·(x − 5).",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "Um retângulo tem área 6x² + 4x m². A base mede 2x m. O engenheiro precisa achar a altura.",
    problema: "Área = base · altura. Se área = 6x² + 4x e base = 2x, quem é a altura?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6x² + 4x",
      passos: [
        { expr: "MDC(6, 4) = 2", explica: "Parte numérica.", status: "ok" },
        { expr: "x nos dois: menor expoente x¹", explica: "6x² e 4x → menor é x.", status: "ok" },
        { expr: "fator comum = 2x", explica: "2 · x = 2x = base.", status: "neutro" },
        { expr: "6x² + 4x = 2x·(3x + 2)", explica: "6x²÷2x = 3x; 4x÷2x = 2.", status: "ok" },
        { expr: "altura = 3x + 2", explica: "Área ÷ base = altura.", status: "ok" },
      ],
      fatorada: "2x·(3x + 2)  →  altura = (3x + 2) m",
      legenda: "Aplicação — retângulo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura?",
      opcoes: [{ nome: "3x + 2" }, { nome: "3x + 4" }, { nome: "6x + 2" }],
      respostaCerta: "3x + 2",
      feedbackAcerto: "🎯 6x² + 4x = 2x·(3x + 2). Como base = 2x, altura = 3x + 2.",
      feedbackErro:
        "Fatore 6x² + 4x por 2x: dá 2x·(3x + 2). A altura é o que sobra dentro do parêntese: 3x + 2.",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "MDC dos coeficientes vira a parte numérica do fator comum.",
      "Cada letra em COMUM entra com o MENOR expoente.",
      "Cuidado: quando o termo vira 1 na divisão (ex.: 4x + 4), NÃO some com ele — escreva 4·(x + 1).",
      "Confira sempre multiplicando de volta.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Fatorar 2x + 6:",
        opcoes: ["2·(x + 3)", "2·(x + 6)", "x + 3"],
        correta: 0,
        feedbackAcerto: "🎉 MDC(2,6)=2. 2x÷2 = x; 6÷2 = 3 → 2·(x + 3).",
        feedbackErro: "MDC(2,6) = 2. 6 ÷ 2 = 3, não 6. Fatorada: 2·(x + 3).",
      },
      {
        pergunta: "Fatorar x² + x:",
        opcoes: ["x·(x + 1)", "x·(x − 1)", "x² + x"],
        correta: 0,
        feedbackAcerto: "🎉 x em evidência. x²÷x = x; x÷x = 1 → x·(x + 1).",
        feedbackErro: "x÷x = 1, não 0. Não esqueça o 1: x·(x + 1).",
      },
      {
        pergunta: "Fatorar 6a + 9b:",
        opcoes: ["3·(2a + 3b)", "6·(a + b)", "3·(a + b)"],
        correta: 0,
        feedbackAcerto: "🎉 MDC(6,9)=3. 6a÷3 = 2a; 9b÷3 = 3b → 3·(2a + 3b).",
        feedbackErro:
          "MDC(6,9) = 3 (não 6). E 6a÷3 = 2a, 9b÷3 = 3b. Fatorada: 3·(2a + 3b).",
      },
      {
        pergunta: "Fatorar 10x²y + 15xy²:",
        opcoes: ["5xy·(2x + 3y)", "5·(2x²y + 3xy²)", "xy·(10x + 15y)"],
        correta: 0,
        feedbackAcerto: "🎉 MDC(10,15)=5; x e y no menor expoente → 5xy.",
        feedbackErro:
          "Fator comum completo: MDC × letras no menor expoente = 5 · x · y = 5xy.",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "Caça ao fator comum",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Escreva 4 expressões com 2 termos cada (ex.: 6x + 9; 4a² + 8a; 10xy + 15y; x³ − x²).",
      "Fatore cada uma achando o MDC dos números e a letra comum no menor expoente.",
      "Confira multiplicando de volta — tem que dar a expressão original.",
    ],
    registro: "📸 Foto do caderno com as 4 fatorações e a prova.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
