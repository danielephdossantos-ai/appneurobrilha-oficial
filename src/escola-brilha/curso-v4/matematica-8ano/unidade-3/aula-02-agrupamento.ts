import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Fatoração por agrupamento.
 * Formato: conta armada + passo a passo interativo, com o professor
 * cuidando de sinais (o famoso −b(x−y) que vira +b(y−x)).
 */
export const aula02_agrupamento: AulaV4 = {
  slug: "u3-02-agrupamento",
  titulo: "Fatoração por agrupamento",
  iconeTrilha: "👥",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp", "vergnaud"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Quatro termos, mas nada em comum em TODOS",
    historia:
      "{NOME}, olhe ax + ay + bx + by. Nenhum fator aparece nos 4 termos ao mesmo tempo. A jogada é AGRUPAR de 2 em 2, evidenciar em cada grupo e caçar o parêntese que se repete.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Veja a estratégia do agrupamento acontecendo passo a passo.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "ax + ay + bx + by",
        passos: [
          {
            expr: "(ax + ay) + (bx + by)",
            explica: "Agrupo os 2 primeiros e os 2 últimos.",
            status: "ok",
            professor:
              "A ideia central: se não há fator em TODOS os 4, procuro pares que combinem. Aqui os 2 primeiros têm 'a' em comum; os 2 últimos têm 'b' em comum. Agrupo com parênteses para organizar o raciocínio.",
          },
          {
            expr: "a·(x + y) + b·(x + y)",
            explica: "Evidencio 'a' no 1º grupo e 'b' no 2º.",
            status: "ok",
            professor:
              "No grupo (ax + ay), o fator comum é 'a' → a·(x + y). No grupo (bx + by), o fator comum é 'b' → b·(x + y). Agora repare: os DOIS parênteses ficaram iguais — (x + y). Esse é o sinal de que o agrupamento vai funcionar.",
          },
          {
            expr: "(x + y)·(a + b)",
            explica: "O parêntese (x + y) vira o novo fator comum.",
            status: "ok",
            professor:
              "Trato (x + y) como se fosse uma letra só. Ele está multiplicando 'a' e também 'b' → posso pôr (x + y) em evidência e sobra (a + b). Prova: (x + y)·(a + b) = ax + ay + bx + by. ✅",
          },
        ],
        fatorada: "(x + y)·(a + b)",
        legenda: "Prova visual: agrupar 2 a 2 e caçar o parêntese repetido",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia: "Como saber se agrupei do jeito certo?",
    pista: "Se os dois parênteses ficarem IGUAIS, o agrupamento está correto. Se saírem diferentes, tento outra combinação (troco a ordem dos termos).",
    revelacao:
      "Regra do agrupamento: agrupa 2 a 2 → evidencia em cada grupo → o parêntese repetido é o novo fator comum.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 3x + 2x + 6",
      passos: [
        {
          expr: "(x² + 3x) + (2x + 6)",
          explica: "Agrupo 2 a 2.",
          status: "ok",
          professor:
            "Primeiro par: x² + 3x. Segundo par: 2x + 6. Coloco parênteses para organizar.",
        },
        {
          expr: "x·(x + 3) + 2·(x + 3)",
          explica: "Evidencio em cada grupo.",
          status: "ok",
          professor:
            "No 1º grupo, o fator comum é x → x·(x + 3). No 2º grupo, o fator comum é 2 → 2·(x + 3). Os dois parênteses ficaram IGUAIS: (x + 3). Deu certo.",
        },
        {
          expr: "(x + 3)·(x + 2)",
          explica: "Fatoração final.",
          status: "ok",
          professor:
            "Coloco (x + 3) em evidência e sobra (x + 2). Prova: (x + 3)·(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6 = x² + 3x + 2x + 6. ✅",
        },
      ],
      fatorada: "(x + 3)·(x + 2)",
    },
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Fatorar por agrupamento — passo a passo",
    etapas: [
      // Etapa 1 — caso base positivo
      {
        texto: "Caso 1: sinais positivos. Fatore 3x + 3y + 5ax + 5ay.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3x + 3y + 5ax + 5ay",
            passos: [
              {
                expr: "(3x + 3y) + (5ax + 5ay)",
                explica: "Agrupo 2 a 2.",
                status: "ok",
                professor:
                  "Primeiro par tem o 3 em comum; segundo par tem 5a. Já é um bom sinal para agrupar assim.",
              },
              {
                expr: "3·(x + y) + 5a·(x + y)",
                explica: "Evidencio 3 e 5a.",
                status: "ok",
                professor:
                  "3x + 3y = 3·(x + y). 5ax + 5ay = 5a·(x + y). Os dois parênteses batem: (x + y).",
              },
              {
                expr: "(x + y)·(3 + 5a)",
                explica: "Fatoração final.",
                status: "ok",
                professor:
                  "Coloco (x + y) em evidência. Sobra (3 + 5a). Prova: (x + y)·(3 + 5a) = 3x + 5ax + 3y + 5ay = 3x + 3y + 5ax + 5ay. ✅",
              },
            ],
            fatorada: "(x + y)·(3 + 5a)",
          },
        },
      },

      // Etapa 2 — cuidado com sinal
      {
        texto: "Caso 2: cuidado com o sinal do 2º grupo. Fatore x² − x + 2x − 2.",
        exemploReal: {
          titulo: "🔎 Sinal do segundo grupo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − x + 2x − 2",
            passos: [
              {
                expr: "(x² − x) + (2x − 2)",
                explica: "Agrupo mantendo o sinal do meio.",
                status: "ok",
                professor:
                  "Cuidado: o sinal ENTRE os grupos é '+', porque o 3º termo é +2x. Se eu tivesse escrito (x² − x) − (2x − 2), teria trocado o sinal do 4º termo por engano.",
              },
              {
                expr: "x·(x − 1) + 2·(x − 1)",
                explica: "Evidencio x e 2.",
                status: "ok",
                professor:
                  "1º grupo: x·(x − 1). 2º grupo: 2·(x − 1). Os dois parênteses ficaram (x − 1). Alinhou.",
              },
              {
                expr: "(x − 1)·(x + 2)",
                explica: "Fatoração final.",
                status: "ok",
                professor:
                  "Coloco (x − 1) em evidência e sobra (x + 2). Prova: (x − 1)·(x + 2) = x² + 2x − x − 2 = x² + x − 2 = x² − x + 2x − 2. ✅",
              },
            ],
            fatorada: "(x − 1)·(x + 2)",
          },
        },
      },

      // Etapa 3 — sinal negativo no fator: truque do sinal
      {
        texto: "Caso 3: o parêntese sai TROCADO. Fatore ax − ay − bx + by.",
        exemploReal: {
          titulo: "🔎 Truque do sinal",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "ax − ay − bx + by",
            passos: [
              {
                expr: "(ax − ay) + (−bx + by)",
                explica: "Agrupo. Repare: o 2º grupo começa com −bx.",
                status: "ok",
                professor:
                  "Mantenho os sinais originais. O 2º grupo é (−bx + by).",
              },
              {
                expr: "a·(x − y) + (−b)·(x − y)",
                explica: "Evidencio −b no 2º grupo — assim o parêntese fica igual.",
                status: "ok",
                professor:
                  "Truque: no 2º grupo, ao evidenciar '−b', TROCO os sinais dentro do parêntese: −bx + by = −b·(x − y). Sempre que o 1º termo do grupo é negativo, evidencio o negativo para deixar o parêntese igual ao do 1º grupo.",
              },
              {
                expr: "(x − y)·(a − b)",
                explica: "Parênteses iguais → fatoração final.",
                status: "ok",
                professor:
                  "(x − y) em evidência, sobra (a − b). Prova: (x − y)·(a − b) = a·x − a·y − b·x + b·y = ax − ay − bx + by. ✅",
              },
            ],
            fatorada: "(x − y)·(a − b)",
          },
        },
      },

      // Etapa 4 — falso alarme (agrupamento não fecha)
      {
        texto: "Nem toda expressão de 4 termos agrupa. Veja x² + 3x + 2x + 5.",
        exemploReal: {
          titulo: "🔎 Falso alarme",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 3x + 2x + 5",
            passos: [
              {
                expr: "(x² + 3x) + (2x + 5)",
                explica: "Tento agrupar 2 a 2.",
                status: "ok",
                professor:
                  "Faço o agrupamento normal e vejo o que acontece.",
              },
              {
                expr: "x·(x + 3) + 1·(2x + 5)",
                explica: "Parênteses SAEM DIFERENTES: (x + 3) ≠ (2x + 5).",
                status: "x",
                professor:
                  "No 1º grupo evidenciei x → (x + 3). No 2º grupo o fator comum é 1 → sobra (2x + 5). Como (x + 3) ≠ (2x + 5), o agrupamento FALHOU. Nesse caso, essa expressão não fatora por agrupamento — provavelmente não fatora sobre os inteiros.",
              },
            ],
            falha: "Os parênteses não bateram. Tente outra técnica.",
          },
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado: "Brilha resolve ab + ac + 2b + 2c — clica Continuar e acompanha.",
    resposta: "(b + c)·(a + 2)",
    passos: [
      "(ab + ac) + (2b + 2c)",
      "a·(b + c) + 2·(b + c)",
      "(b + c)·(a + 2)",
    ],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "ab + ac + 2b + 2c",
      passos: [
        {
          expr: "(ab + ac) + (2b + 2c)",
          explica: "Agrupo 2 a 2.",
          status: "ok",
          professor: "1º par tem 'a' em comum; 2º par tem 2 em comum.",
        },
        {
          expr: "a·(b + c) + 2·(b + c)",
          explica: "Evidencio.",
          status: "ok",
          professor: "a·(b + c) e 2·(b + c). Os dois parênteses bateram: (b + c).",
        },
        {
          expr: "(b + c)·(a + 2)",
          explica: "Fatoração final.",
          status: "ok",
          professor:
            "(b + c) em evidência, sobra (a + 2). Prova: (b + c)·(a + 2) = ab + 2b + ac + 2c = ab + ac + 2b + 2c. ✅",
        },
      ],
      fatorada: "(b + c)·(a + 2)",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore mx + my + nx + ny.",
    dica: "Agrupa (mx + my) com (nx + ny).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "mx + my + nx + ny",
      passos: [
        { expr: "(mx + my) + (nx + ny)", explica: "Agrupo.", status: "ok" },
        { expr: "m·(x + y) + n·(x + y)", explica: "Evidencio m e n.", status: "ok" },
        { expr: "(x + y)·(m + n)", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "(x + y)·(m + n)",
      legenda: "Nós fazemos — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "(x + y)·(m + n)" },
        { nome: "(m + n)·(x − y)" },
        { nome: "(mx + ny)·(1)" },
      ],
      respostaCerta: "(x + y)·(m + n)",
      feedbackAcerto: "🎯 m·(x+y) + n·(x+y) → (x+y)·(m+n).",
      feedbackErro:
        "Depois de evidenciar m e n, o parêntese que sobra é (x + y), e o novo fator é (m + n).",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado: "Você faz: fatore x³ + x² + 3x + 3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x³ + x² + 3x + 3",
      passos: [
        { expr: "(x³ + x²) + (3x + 3)", explica: "Agrupo 2 a 2.", status: "ok" },
        { expr: "x²·(x + 1) + 3·(x + 1)", explica: "Evidencio x² e 3.", status: "ok" },
        { expr: "(x + 1)·(x² + 3)", explica: "Fatoração final.", status: "ok" },
      ],
      fatorada: "(x + 1)·(x² + 3)",
      legenda: "Você faz — conta armada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "(x + 1)·(x² + 3)" },
        { nome: "(x − 1)·(x² + 3)" },
        { nome: "x·(x² + x + 3)" },
      ],
      respostaCerta: "(x + 1)·(x² + 3)",
      feedbackAcerto: "🎯 x²·(x+1) + 3·(x+1) → (x+1)·(x²+3).",
      feedbackErro:
        "Depois de agrupar e evidenciar, os dois parênteses viram (x + 1), e sobra (x² + 3).",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "A área de um retângulo é 2ax + 2ay + bx + by. O arquiteto precisa das medidas dos dois lados.",
    problema: "Escreva a área na forma (lado 1) · (lado 2).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2ax + 2ay + bx + by",
      passos: [
        { expr: "(2ax + 2ay) + (bx + by)", explica: "Agrupo 2 a 2.", status: "ok" },
        { expr: "2a·(x + y) + b·(x + y)", explica: "Evidencio 2a e b.", status: "ok" },
        { expr: "(x + y)·(2a + b)", explica: "Lados do retângulo.", status: "ok" },
      ],
      fatorada: "(x + y)·(2a + b)",
      legenda: "Aplicação — retângulo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quais são os lados do retângulo?",
      opcoes: [
        { nome: "(x + y) e (2a + b)" },
        { nome: "(2a + b) e (x − y)" },
        { nome: "2·(a + b) e (x + y)" },
      ],
      respostaCerta: "(x + y) e (2a + b)",
      feedbackAcerto: "🎯 Área = (x + y)·(2a + b). Lados: (x + y) e (2a + b).",
      feedbackErro:
        "Agrupando: 2a·(x+y) + b·(x+y) = (x+y)·(2a+b). Os lados são (x+y) e (2a+b).",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Regra: agrupa 2 a 2 → evidencia em cada grupo → parêntese repetido é o novo fator comum.",
      "Se os parênteses saírem diferentes, tente outra ordem antes de desistir.",
      "Quando o 2º grupo começa em '−', evidencie o NEGATIVO para forçar o parêntese a bater.",
      "Confira sempre multiplicando de volta.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Fatorar ax + ay + bx + by:",
        opcoes: ["(x + y)·(a + b)", "(a + b)·(x − y)", "ab + xy"],
        correta: 0,
        feedbackAcerto: "🎉 a·(x+y) + b·(x+y) → (x+y)·(a+b).",
        feedbackErro: "Agrupa 2 a 2 e evidencia. Sobra (x+y)·(a+b).",
      },
      {
        pergunta: "Fatorar x² + x + 2x + 2:",
        opcoes: ["(x + 1)·(x + 2)", "(x − 1)·(x + 2)", "x² + 3x + 2"],
        correta: 0,
        feedbackAcerto: "🎉 x·(x+1) + 2·(x+1) → (x+1)·(x+2).",
        feedbackErro: "Evidencie x no 1º par e 2 no 2º par. Ambos viram (x+1).",
      },
      {
        pergunta: "Fatorar ax − ay − bx + by:",
        opcoes: ["(x − y)·(a − b)", "(x + y)·(a + b)", "(x − y)·(a + b)"],
        correta: 0,
        feedbackAcerto: "🎉 Evidencia −b no 2º par para o parêntese bater.",
        feedbackErro:
          "No 2º grupo, evidencie o −b: −b·(x − y). Assim os dois parênteses ficam (x−y).",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "Detetive dos grupos",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Escreva 3 expressões de 4 termos (ex.: ax + ay + bx + by; x² + 2x + 3x + 6; 6a + 6b + 5ma + 5mb).",
      "Fatore cada uma por agrupamento, mostrando os 3 passos: agrupar, evidenciar, fatorar o parêntese repetido.",
      "Confira multiplicando a fatorada de volta.",
    ],
    registro: "📸 Foto do caderno com as 3 fatorações e a prova.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
