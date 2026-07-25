import type { AulaV4 } from "../../types";

/**
 * Aula-piloto "escola particular top" — Trinômio Quadrado Perfeito.
 *
 * Formato: conta armada + passo a passo interativo. Cada passo tem uma
 * explicação CURTA (1 linha) e uma explicação LONGA do professor,
 * expansível, cuidando de sinais (−, ², +, ·) e pontuação.
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
      // Etapa 1 — caso simples
      {
        texto: "Fatorar x² + 6x + 9. Clica em Continuar e veja cada passo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 6x + 9",
            passos: [
              {
                expr: "√x² = x",
                explica: "Raiz exata do 1º termo. Guardo: a = x.",
                status: "ok",
                professor:
                  "Todo TQP tem a forma a² + 2·a·b + b². O primeiro passo é achar 'a', que é a raiz quadrada do 1º termo. Aqui o 1º termo é x². A raiz quadrada de x² é x, porque x · x = x². Guardamos: a = x.",
              },
              {
                expr: "√9 = 3",
                explica: "Raiz exata do 3º termo. Guardo: b = 3.",
                status: "ok",
                professor:
                  "Agora achamos 'b', que é a raiz quadrada do 3º termo. O 3º termo é 9. A raiz de 9 é 3, porque 3 · 3 = 9. Repare: mesmo quando o meio do trinômio for negativo, o 3º termo continua positivo — porque é um número ao quadrado, e quadrado nunca dá negativo. Guardamos: b = 3.",
              },
              {
                expr: "2·x·3 = 6x",
                explica: "Testo o meio. Bate com o 6x do trinômio.",
                status: "ok",
                professor:
                  "Aqui está o TESTE que confirma se é mesmo um TQP. Calculamos 2 · a · b, ou seja, 2 · x · 3, que dá 6x. Comparamos com o termo do meio do trinômio original (6x). Bateu! Então x² + 6x + 9 é, de fato, um trinômio quadrado perfeito.",
              },
              {
                expr: "sinal do meio: +",
                explica: "Dentro do parêntese vai '+'.",
                status: "neutro",
                professor:
                  "O sinal do 2º termo do trinômio decide o sinal DENTRO do parêntese na forma fatorada. Como o meio é +6x (positivo), dentro do parêntese vai o sinal +. Se fosse −6x, iria −.",
              },
              {
                expr: "(x + 3)²",
                explica: "Escrevo a fatoração final.",
                status: "ok",
                professor:
                  "Juntando tudo: a = x, b = 3, sinal do meio +, então a forma fatorada é (x + 3)². Para conferir, basta desenvolver: (x + 3)² = x² + 2·x·3 + 3² = x² + 6x + 9. ✅",
              },
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
              {
                expr: "√x² = x",
                explica: "1º termo: raiz exata.",
                status: "ok",
                professor:
                  "Começamos igual: a raiz do 1º termo (x²) é x. Guardamos a = x. Note que o sinal do 1º termo é sempre positivo — não existe TQP começando com termo negativo.",
              },
              {
                expr: "√25 = 5",
                explica:
                  "3º termo: raiz exata. O 25 continua POSITIVO — número ao quadrado nunca é negativo.",
                status: "ok",
                professor:
                  "A raiz de 25 é 5, porque 5 · 5 = 25. Cuidado com o mito de que 'o meio negativo torna tudo negativo' — não! O 3º termo continua positivo. Só o sinal do MEIO muda a fatoração.",
              },
              {
                expr: "2·x·5 = 10x",
                explica: "Meio bate (só o sinal é negativo).",
                status: "ok",
                professor:
                  "Fazemos o teste: 2 · a · b = 2 · x · 5 = 10x. O trinômio tem −10x no meio. Os NÚMEROS batem (10 = 10). O que muda é o sinal, e é justamente o sinal que vai dizer se a fatoração é (a + b)² ou (a − b)².",
              },
              {
                expr: "sinal do meio: −",
                explica: "Dentro do parêntese vai '−'.",
                status: "neutro",
                professor:
                  "Como o 2º termo é −10x (negativo), dentro do parêntese vai o sinal '−'. Regra prática: sinal do meio do trinômio = sinal dentro do parêntese.",
              },
              {
                expr: "(x − 5)²",
                explica: "Fatoração final.",
                status: "ok",
                professor:
                  "Forma fatorada: (x − 5)². Conferindo: (x − 5)² = x² − 2·x·5 + 5² = x² − 10x + 25. ✅ Bateu.",
              },
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
              {
                expr: "√4x² = 2x",
                explica: "Cuidado: NÃO é x. É 2x, porque √4 = 2.",
                status: "ok",
                professor:
                  "Erro comum: pensar que a raiz de 4x² é x. NÃO É. Separamos: √4 · √x² = 2 · x = 2x. Sempre que houver coeficiente no 1º termo, tire a raiz do número TAMBÉM. Guardamos a = 2x.",
              },
              {
                expr: "√9 = 3",
                explica: "Raiz do 3º termo.",
                status: "ok",
                professor:
                  "A raiz de 9 é 3. Guardamos b = 3. Nada de novo aqui.",
              },
              {
                expr: "2·(2x)·3 = 12x",
                explica: "Meio bate.",
                status: "ok",
                professor:
                  "Teste do meio: 2 · a · b = 2 · (2x) · 3 = 12x. O trinômio tem +12x no meio. Bateu! Confirmado que é TQP. Preste atenção nos parênteses em (2x): 2 · 2x · 3 = 12x, e não 2 · x · 3.",
              },
              {
                expr: "sinal do meio: +",
                explica: "Vai '+' dentro do parêntese.",
                status: "neutro",
                professor:
                  "Meio positivo (+12x) → dentro do parêntese vai '+'.",
              },
              {
                expr: "(2x + 3)²",
                explica: "Fatoração final.",
                status: "ok",
                professor:
                  "Fatorada: (2x + 3)². Conferindo: (2x + 3)² = (2x)² + 2·(2x)·3 + 3² = 4x² + 12x + 9. ✅",
              },
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
              {
                expr: "√x² = x",
                explica: "1º termo ok.",
                status: "ok",
                professor:
                  "Raiz de x² é x. Até aqui, tudo bem — parece um TQP.",
              },
              {
                expr: "√9 = 3",
                explica: "3º termo ok.",
                status: "ok",
                professor:
                  "Raiz de 9 é 3. Também bate. Mas atenção: só o 1º e o 3º termos serem quadrados perfeitos NÃO garante que o trinômio seja TQP. O teste do meio é obrigatório.",
              },
              {
                expr: "2·x·3 = 6x",
                explica:
                  "Meio deveria ser 6x, mas o trinômio tem 5x. Falhou.",
                status: "x",
                professor:
                  "Teste do meio: 2 · x · 3 = 6x. Mas o trinômio traz 5x no meio. 6x ≠ 5x → NÃO é trinômio quadrado perfeito. Esse é o famoso 'falso alarme'. Nesse caso, usamos outra técnica de fatoração (ex.: soma e produto, Bhaskara ou grupamento).",
              },
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
        {
          expr: "√x² = x",
          explica: "Raiz do 1º.",
          status: "ok",
          professor: "Raiz quadrada do 1º termo (x²) é x. Guardamos a = x.",
        },
        {
          expr: "√25 = 5",
          explica: "Raiz do 3º.",
          status: "ok",
          professor:
            "Raiz quadrada do 3º termo (25) é 5, porque 5 · 5 = 25. Guardamos b = 5.",
        },
        {
          expr: "2·x·5 = 10x",
          explica: "Meio bate.",
          status: "ok",
          professor:
            "Teste: 2 · a · b = 2 · x · 5 = 10x. O trinômio tem +10x. Bateu! É TQP.",
        },
        {
          expr: "sinal: +",
          explica: "Vai '+' dentro do parêntese.",
          status: "neutro",
          professor:
            "Como o meio é positivo (+10x), o sinal dentro do parêntese é '+'.",
        },
        {
          expr: "(x + 5)²",
          explica: "Fatoração final. Confira: (x+5)² = x² + 10x + 25 ✔",
          status: "ok",
          professor:
            "Forma fatorada: (x + 5)². Conferindo: (x + 5)² = x² + 2·x·5 + 5² = x² + 10x + 25. ✅",
        },
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
