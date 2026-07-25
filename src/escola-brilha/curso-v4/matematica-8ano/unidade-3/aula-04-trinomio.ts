import type { AulaV4 } from "../../types";

/**
 * Aula-piloto "escola particular top" — Trinômio Quadrado Perfeito.
 *
 * Formato: passo-a-passo interativo. A criança clica "Continuar" e a
 * fatoração aparece linha por linha, igual conta armada de adição.
 * Nada de texto corrido. Cada etapa da explicação = 1 headline curta
 * + 1 visual `trinomioPassoAPasso` que faz o trabalho.
 */
export const aula04_trinomio: AulaV4 = {
  slug: "u3-04-trinomio",
  titulo: "Trinômio quadrado perfeito",
  iconeTrilha: "🔺",
  bncc: ["EF08MA06"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud", "cpa"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "O piso do salão",
    historia:
      "{NOME}, um pedreiro precisa ladrilhar um salão QUADRADO. Ele tem 1 ladrilho grande (lado x), 2 tiras retangulares e 1 ladrilho pequeno (lado 3). Junto tudo forma um quadrado maior. Quanto mede o lado? Vamos descobrir com a fatoração — clicando passo a passo, sem decoreba.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Olhe o quadrado. Lado (x+3). As 4 áreas somadas formam o trinômio. É daqui que sai o 2·x·3 do meio.",
    cenas: [
      {
        tipo: "trinomioQuadrado",
        a: "x",
        b: "3",
        sinal: "+",
        legenda: "Prova visual: (x+3)²",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia:
      "Por que o meio do TQP é SEMPRE 2 vezes o produto das raízes?",
    pista: "Olhe o desenho: o retângulo a·b aparece 2 vezes.",
    revelacao:
      "(a+b)² = a² + 2ab + b². Se o meio for negativo → (a−b)². É só geometria virando álgebra.",
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Fatorar TQP — clicando passo a passo",
    etapas: [
      // Etapa 1 — teste das 3 condições (caso mais simples)
      {
        texto: "Fatorar x² + 6x + 9. Clica em Continuar e veja cada passo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 6x + 9",
            passos: [
              { expr: "√x² = x", explica: "Raiz exata do 1º termo. Guardo: a = x.", status: "ok" },
              { expr: "√9 = 3", explica: "Raiz exata do 3º termo. Guardo: b = 3.", status: "ok" },
              { expr: "2·x·3 = 6x", explica: "Testo o meio. Bate com o 6x do trinômio.", status: "ok" },
              { expr: "sinal do meio: +", explica: "Dentro do parêntese vai '+'.", status: "neutro" },
              { expr: "(x + 3)²", explica: "Escrevo a fatoração final.", status: "ok" },
            ],
            fatorada: "(x + 3)²",
          },
        },
      },

      // Etapa 2 — meio negativo
      {
        texto: "Meio negativo → dentro do parêntese vira '−'. Veja x² − 10x + 25.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 10x + 25",
            passos: [
              { expr: "√x² = x", explica: "1º termo: raiz exata.", status: "ok" },
              { expr: "√25 = 5", explica: "3º termo: raiz exata. O 25 continua POSITIVO — número ao quadrado nunca é negativo.", status: "ok" },
              { expr: "2·x·5 = 10x", explica: "Meio bate (só o sinal é negativo).", status: "ok" },
              { expr: "sinal do meio: −", explica: "Dentro do parêntese vai '−'.", status: "neutro" },
              { expr: "(x − 5)²", explica: "Fatoração final.", status: "ok" },
            ],
            fatorada: "(x − 5)²",
          },
        },
      },

      // Etapa 3 — coeficiente diferente de 1
      {
        texto: "Quando o 1º termo tem coeficiente (ex.: 4x²), a raiz muda: √4x² = 2x.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4x² + 12x + 9",
            passos: [
              { expr: "√4x² = 2x", explica: "Cuidado: NÃO é x. É 2x, porque √4 = 2.", status: "ok" },
              { expr: "√9 = 3", explica: "Raiz do 3º termo.", status: "ok" },
              { expr: "2·(2x)·3 = 12x", explica: "Meio bate.", status: "ok" },
              { expr: "sinal do meio: +", explica: "Vai '+' dentro do parêntese.", status: "neutro" },
              { expr: "(2x + 3)²", explica: "Fatoração final.", status: "ok" },
            ],
            fatorada: "(2x + 3)²",
          },
        },
      },

      // Etapa 4 — falso alarme
      {
        texto: "Nem todo trinômio é TQP. Veja x² + 5x + 9 — parece, mas falha no teste.",
        exemploReal: {
          titulo: "🔎 Falso alarme",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 5x + 9",
            passos: [
              { expr: "√x² = x", explica: "1º termo ok.", status: "ok" },
              { expr: "√9 = 3", explica: "3º termo ok.", status: "ok" },
              { expr: "2·x·3 = 6x", explica: "Meio deveria ser 6x, mas o trinômio tem 5x. Falhou.", status: "x" },
            ],
            falha: "Não é TQP. Precisa de outra técnica de fatoração.",
          },
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado: "Brilha resolve x² + 10x + 25 — clica Continuar e acompanha o raciocínio.",
    resposta: "(x + 5)²",
    passos: [
      "√x² = x",
      "√25 = 5",
      "2·x·5 = 10x — bate",
      "Sinal +",
      "(x + 5)²",
    ],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 10x + 25",
      passos: [
        { expr: "√x² = x", explica: "Raiz do 1º.", status: "ok" },
        { expr: "√25 = 5", explica: "Raiz do 3º.", status: "ok" },
        { expr: "2·x·5 = 10x", explica: "Meio bate.", status: "ok" },
        { expr: "sinal: +", explica: "Vai '+' dentro do parêntese.", status: "neutro" },
        { expr: "(x + 5)²", explica: "Fatoração final. Confira: (x+5)² = x² + 10x + 25 ✔", status: "ok" },
      ],
      fatorada: "(x + 5)²",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore x² + 4x + 4.",
    dica: "√4 = 2. Testa: 2·x·2 = 4x. Bate.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "(x + 2)²" }, { nome: "(x + 4)²" }, { nome: "(x − 2)²" }],
      respostaCerta: "(x + 2)²",
      feedbackAcerto:
        "🎯 √x²=x, √4=2, 2·x·2 = 4x. Sinal + → (x+2)².",
      feedbackErro:
        "√4 = 2, não 4. E o sinal do meio é +. Refaz o teste 2·x·2.",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado: "Você faz: fatore 9x² − 24x + 16.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "(3x − 4)²" },
        { nome: "(3x + 4)²" },
        { nome: "(9x − 4)²" },
      ],
      respostaCerta: "(3x − 4)²",
      feedbackAcerto:
        "🎯 √9x² = 3x (não 9x), √16 = 4, 2·(3x)·4 = 24x. Meio negativo → (3x − 4)².",
      feedbackErro:
        "√9x² = 3x, não 9x. E o meio é −24x, então dentro do parêntese vai '−'. É (3x − 4)².",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "Um terreno QUADRADO tem área x² + 12x + 36 m². O engenheiro precisa saber quanto mede o lado.",
    problema: "Área = x² + 12x + 36. Lado do quadrado = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o lado do terreno:",
      opcoes: [{ nome: "x + 6" }, { nome: "x + 12" }, { nome: "x + 36" }],
      respostaCerta: "x + 6",
      feedbackAcerto:
        "🎯 Área do quadrado = lado². Como x² + 12x + 36 = (x+6)², o lado é (x+6) m.",
      feedbackErro:
        "√36 = 6. 2·x·6 = 12x. Logo (x+6)² = x²+12x+36. O lado é (x+6).",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "TQP: √1º exata, √3º exata, meio = 2·(raiz 1º)·(raiz 3º).",
      "Sinal do meio decide: + → (a+b)²; − → (a−b)². 3º termo sempre positivo.",
      "Prova geométrica: (a+b)² é a área do quadrado a² + 2ab + b².",
      "Coeficiente no 1º termo (4x², 9x²): √4x² = 2x, √9x² = 3x.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "x² + 2x + 1 fatorado é:",
        opcoes: ["(x + 1)²", "(x − 1)²", "x² + 1"],
        correta: 0,
        feedbackAcerto: "🎉 √x²=x, √1=1, 2·x·1=2x. Sinal + → (x+1)².",
        feedbackErro: "Confira o sinal do meio (+). (x−1)² dá x²−2x+1.",
      },
      {
        pergunta: "x² − 6x + 9 fatorado é:",
        opcoes: ["(x − 3)²", "(x + 3)²", "x² − 9"],
        correta: 0,
        feedbackAcerto: "🎉 Meio negativo → '−'. √9=3, 2·x·3=6x. (x−3)².",
        feedbackErro: "Meio é −6x → vai '−' dentro do parêntese.",
      },
      {
        pergunta: "Qual NÃO é quadrado perfeito?",
        opcoes: ["x² + 8x + 16", "x² + 5x + 9", "4x² + 20x + 25"],
        correta: 1,
        feedbackAcerto:
          "🎉 Em x²+5x+9: 2·x·3 = 6x, mas o meio é 5x. Falhou.",
        feedbackErro:
          "x²+8x+16: 2·x·4=8x ✅. 4x²+20x+25: 2·(2x)·5=20x ✅. Só x²+5x+9 não bate.",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "O quadrado escondido",
    materiais: ["Papel quadriculado", "Régua", "Lápis colorido"],
    passos: [
      "Desenhe um quadrado de lado (x+2) (escolha x = 4 quadradinhos).",
      "Divida em 4 pedaços: x·x, x·2, 2·x, 2·2.",
      "Pinte de cores diferentes e escreva a área de cada pedaço.",
      "Mostre pra alguém em casa que a soma dá x² + 4x + 4 = (x+2)².",
    ],
    registro:
      "📸 Foto do quadrado + 1 frase explicando por que (x+2)² tem 4x no meio.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "🏆 Mestre do Quadrado Perfeito" },
};
