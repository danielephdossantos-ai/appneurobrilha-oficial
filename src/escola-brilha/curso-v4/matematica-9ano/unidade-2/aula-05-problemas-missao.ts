import type { AulaV4 } from "../../types";

export const aula05_problemasMissao: AulaV4 = {
  slug: "u2-05-problemas-missao",
  titulo: "Missão: Problemas do 2º Grau",
  iconeTrilha: "🎯",
  bncc: ["EF09MA09", "EF09MA10"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "{NOME}, hora de resolver como um detetive matemático",
    historia:
      "{NOME}, agora você vai unir TUDO que aprendeu: transformar um problema real em equação do 2º grau, resolver com Bhaskara e — o pulo do gato — descartar a raiz que não faz sentido na vida real. Um terreno não pode ter lado negativo, uma idade não pode ser negativa. Vamos à missão!",
  },

  momento02_exploracao: {
    instrucao: "Observe como um problema vira equação.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "Um retângulo tem área 12 m² e um lado é 1 m maior que o outro",
        passos: [
          { expr: "x · (x+1) = 12", explica: "Chamo o lado menor de x e o maior de x+1.", status: "neutro" },
          { expr: "x² + x − 12 = 0", explica: "Distribuo e igualo a zero.", status: "ok" },
          { expr: "x = 3 ou x = −4", explica: "Resolvendo por Bhaskara.", status: "ok" },
          { expr: "Descarto x = −4 (lado negativo não existe)", explica: "Fico só com x = 3.", status: "ok", professor: "Em problemas geométricos, medidas negativas nunca fazem sentido. Sempre descartamos essas raízes." },
        ],
        fatorada: "Lados: 3 m e 4 m",
        legenda: "Do enunciado à equação",
      },
      {
        tipo: "texto",
        texto: "🔑 O roteiro: 1) traduzir para equação, 2) resolver com Bhaskara, 3) verificar qual raiz faz sentido no contexto.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "A soma de dois números consecutivos ao quadrado é 25. Como monto a equação?",
    pista: "Chame o menor número de x e o consecutivo de x+1. 'Ao quadrado' é sobre cada um.",
    revelacao: "x² + (x+1)² = 25 → x² + x² + 2x + 1 = 25 → 2x² + 2x − 24 = 0. Simplificando por 2: x² + x − 12 = 0, cujas raízes são 3 e −4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + (x+1)² = 25",
      passos: [
        { expr: "x² + x² + 2x + 1 = 25", explica: "Expando (x+1)² = x² + 2x + 1.", status: "neutro" },
        { expr: "2x² + 2x − 24 = 0", explica: "Junto os termos e igualo a zero.", status: "ok" },
        { expr: "x² + x − 12 = 0", explica: "Divido tudo por 2 para simplificar.", status: "ok", professor: "Dividir a equação inteira por um mesmo número não muda as raízes — só facilita a conta." },
        { expr: "x = 3 ou x = −4", explica: "Resolvendo por Bhaskara.", status: "ok" },
      ],
      fatorada: "Os números são 3 e 4 (descartando −4 e −3, se buscarmos naturais)",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "O roteiro para resolver qualquer problema do 2º grau",
    etapas: [
      {
        texto: "PASSO 1 — Leia com calma e defina uma incógnita x para o que não conhece. Traduza cada frase do enunciado em símbolos matemáticos.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "'A idade de Ana daqui a 2 anos, elevada ao quadrado, será 100.'",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 2)² = 100",
            passos: [
              { expr: "x = idade de Ana hoje", explica: "Defino a incógnita.", status: "ok" },
              { expr: "x + 2 = idade daqui a 2 anos", explica: "Traduzo 'daqui a 2 anos'.", status: "ok" },
              { expr: "(x + 2)² = 100", explica: "Traduzo 'elevada ao quadrado, será 100'.", status: "ok" },
            ],
            fatorada: "(x+2)² = 100",
          },
          destaque: "Cada palavra do enunciado vira um pedaço da equação.",
        },
      },
      {
        texto: "PASSO 2 — Desenvolva a equação até chegar na forma ax² + bx + c = 0, e resolva com Bhaskara (ou fórmula/atalho apropriado).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Continuando (x+2)² = 100",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 2)² = 100",
            passos: [
              { expr: "x² + 4x + 4 = 100", explica: "Expando o quadrado.", status: "neutro" },
              { expr: "x² + 4x − 96 = 0", explica: "Passo 100 para o outro lado e igualo a zero.", status: "ok" },
              { expr: "Δ = 4² − 4·1·(−96) = 16 + 384 = 400", explica: "Calculo Δ.", status: "ok" },
              { expr: "x = (−4 ± 20) / 2 → x = 8 ou x = −12", explica: "Aplico Bhaskara.", status: "ok" },
            ],
            fatorada: "x = 8 ou x = −12",
          },
          destaque: "Sempre chegue até o final da fórmula de Bhaskara antes de pensar no contexto.",
        },
      },
      {
        texto: "PASSO 3 — Volte ao enunciado e DESCARTE a raiz que não faz sentido no mundo real (idade negativa, lado negativo, quantidade negativa).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Raízes encontradas: x = 8 ou x = −12 (idade de Ana hoje)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x = 8 ou x = −12",
            passos: [
              { expr: "x = −12 não pode ser uma idade", explica: "Idade negativa não existe.", status: "x" },
              { expr: "x = 8 é a resposta válida", explica: "Ana tem 8 anos hoje.", status: "ok", professor: "Verificando: daqui a 2 anos, Ana terá 10, e 10² = 100. Confere!" },
            ],
            fatorada: "Ana tem 8 anos",
          },
          destaque: "SEMPRE volte ao contexto do problema para decidir qual raiz é a resposta.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um terreno retangular tem área 40 m² e o comprimento é 3 m maior que a largura. Quais são as dimensões?",
    resposta: "Largura = 5 m e comprimento = 8 m.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x · (x + 3) = 40",
      passos: [
        { expr: "x = largura, x + 3 = comprimento", explica: "Defino a incógnita a partir do enunciado.", status: "neutro" },
        { expr: "x² + 3x = 40 → x² + 3x − 40 = 0", explica: "Distribuo e igualo a zero.", status: "ok" },
        { expr: "Δ = 3² − 4·1·(−40) = 9 + 160 = 169", explica: "Calculo Δ.", status: "ok" },
        { expr: "x = (−3 ± 13) / 2 → x = 5 ou x = −8", explica: "Aplico Bhaskara (√169 = 13).", status: "ok" },
        { expr: "Descarto x = −8 (largura negativa não existe)", explica: "Fico só com x = 5.", status: "ok", professor: "Largura = 5 m e comprimento = 5+3 = 8 m. Verificando: 5·8 = 40 m². Confere!" },
      ],
      fatorada: "Largura = 5 m, comprimento = 8 m",
      legenda: "Brilha resolve",
    },
    passos: [
      "Defino x para a largura e traduzo o comprimento como x+3.",
      "Monto a equação da área: x·(x+3) = 40.",
      "Desenvolvo até a forma ax²+bx+c=0 e resolvo com Bhaskara.",
      "Descarto a raiz negativa, pois medida não pode ser negativa.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: o produto de dois números naturais consecutivos é 56. Quais são eles?",
    dica: "Chame o menor de x e o maior de x+1. Monte x(x+1) = 56 e resolva.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x · (x + 1) = 56",
      passos: [
        { expr: "x² + x − 56 = 0", explica: "Desenvolvo e igualo a zero.", status: "neutro" },
        { expr: "Δ = 1² − 4·1·(−56) = 1 + 224 = 225", explica: "Calculo Δ.", status: "neutro" },
        { expr: "x = (−1 ± 15) / 2", explica: "√225 = 15.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quais são os dois números naturais?",
      opcoes: [{ nome: "7 e 8" }, { nome: "8 e 9" }, { nome: "6 e 7" }],
      respostaCerta: "7 e 8",
      feedbackAcerto: "🎯 x = (−1+15)/2 = 7. Descartando x = −8 (não é natural), os números são 7 e 8 (7·8=56).",
      feedbackErro: "x = (−1±15)/2 dá x=7 ou x=−8. Como −8 não é natural, descarte-o: os números são 7 e 8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: a soma de um número com o seu quadrado é 30. Qual é o número natural?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + x = 30",
      passos: [
        { expr: "x² + x − 30 = 0", explica: "Igualo a zero.", status: "neutro" },
        { expr: "Δ = 1² − 4·1·(−30) = 1 + 120 = 121", explica: "Calculo Δ.", status: "neutro" },
        { expr: "x = (−1 ± 11) / 2", explica: "√121 = 11.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o número natural?",
      opcoes: [{ nome: "5" }, { nome: "6" }, { nome: "−6" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 x = (−1+11)/2 = 5. Descartando x = −6 (não é natural), o número é 5 (5²+5 = 30).",
      feedbackErro: "x = (−1±11)/2 dá x=5 ou x=−6. Como pedimos um número natural, descarte −6: a resposta é 5.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma quadra retangular de esportes tem perímetro que leva à relação: a área da quadra é 96 m² e o comprimento é 4 m maior que a largura.",
    problema: "Chamando a largura de x, temos x·(x+4) = 96. Quais são as dimensões reais da quadra?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x · (x + 4) = 96",
      passos: [
        { expr: "x² + 4x − 96 = 0", explica: "Desenvolvo e igualo a zero.", status: "neutro" },
        { expr: "Δ = 4² − 4·1·(−96) = 16 + 384 = 400", explica: "Calculo Δ.", status: "ok" },
        { expr: "x = (−4 ± 20) / 2 → x = 8 ou x = −12", explica: "Aplico Bhaskara (√400=20).", status: "ok" },
        { expr: "Descarto x = −12 (largura negativa)", explica: "Fico com x = 8.", status: "ok", professor: "Largura = 8 m, comprimento = 12 m. Verificando: 8·12 = 96 m². Confere!" },
      ],
      fatorada: "Largura = 8 m, comprimento = 12 m",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quais são as dimensões da quadra?",
      opcoes: [{ nome: "Largura 8 m e comprimento 12 m" }, { nome: "Largura 12 m e comprimento 16 m" }, { nome: "Largura −12 m e comprimento −8 m" }],
      respostaCerta: "Largura 8 m e comprimento 12 m",
      feedbackAcerto: "🎯 x = 8 (descartando −12, que é negativo). Comprimento = 8+4 = 12. E 8·12=96 confere.",
      feedbackErro: "As raízes são x=8 ou x=−12. Como largura não pode ser negativa, a largura é 8 m e o comprimento 8+4=12 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Roteiro: traduzir o enunciado em equação → resolver com Bhaskara → verificar qual raiz faz sentido.",
      "Defina sempre uma letra (x) para o que não se conhece, antes de montar a equação.",
      "Depois de achar as duas raízes, volte ao contexto do problema.",
      "Descarte raízes negativas quando o problema pede medida, idade ou quantidade natural.",
      "Sempre verifique a raiz escolhida substituindo de volta no problema original.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Um terreno retangular tem área 45 m² e o comprimento é 4 m maior que a largura. Qual equação representa isso, chamando a largura de x?",
        opcoes: ["x² + 4x − 45 = 0", "x² − 4x − 45 = 0", "x² + 4x + 45 = 0"],
        correta: 0,
        feedbackAcerto: "🎉 x·(x+4) = 45 → x² + 4x − 45 = 0.",
        feedbackErro: "Área = largura × comprimento: x·(x+4) = 45, que desenvolvido dá x² + 4x − 45 = 0.",
      },
      {
        pergunta: "Resolvendo x² + 4x − 45 = 0, as raízes são:",
        opcoes: ["x = 5 ou x = −9", "x = 9 ou x = −5", "x = 5 ou x = 9"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 16+180=196, √196=14. x=(−4±14)/2: x=5 ou x=−9.",
        feedbackErro: "Δ = 4²−4·1·(−45) = 16+180 = 196. √196=14. x=(−4±14)/2 → x=5 ou x=−9.",
      },
      {
        pergunta: "Qual das raízes é a resposta válida para a largura do terreno?",
        opcoes: ["x = 5 (largura não pode ser negativa)", "x = −9 (a menor)", "As duas são válidas"],
        correta: 0,
        feedbackAcerto: "🎉 Largura é uma medida, então deve ser positiva: x = 5 m. Comprimento = 5+4 = 9 m.",
        feedbackErro: "Medidas de comprimento não podem ser negativas. Só x = 5 faz sentido; descarte x = −9.",
      },
      {
        pergunta: "A idade de Pedro daqui a 3 anos, ao quadrado, será 64. Qual é a equação, com x = idade hoje?",
        opcoes: ["(x + 3)² = 64", "(x − 3)² = 64", "x² + 3 = 64"],
        correta: 0,
        feedbackAcerto: "🎉 'Daqui a 3 anos' é x+3, e 'ao quadrado será 64' é (x+3)²=64.",
        feedbackErro: "'Daqui a 3 anos' significa somar 3 à idade atual: (x+3)² = 64.",
      },
      {
        pergunta: "Resolvendo (x+3)² = 64, obtemos x = 5 ou x = −11. Qual é a idade de Pedro hoje?",
        opcoes: ["5 anos (idade não pode ser negativa)", "−11 anos", "As duas idades são possíveis"],
        correta: 0,
        feedbackAcerto: "🎉 Idade negativa não existe, então descartamos −11: Pedro tem 5 anos hoje. Verificando: (5+3)²=64.",
        feedbackErro: "Sempre descarte a raiz que não faz sentido no contexto. Idade não pode ser negativa, então a resposta é 5 anos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive de problemas em casa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Invente um problema real (terreno, idade, ou números consecutivos) que vire uma equação do 2º grau.",
      "Traduza o enunciado em equação e resolva com Bhaskara, mostrando Δ e as duas raízes.",
      "Explique para alguém da família por que uma das raízes deve ser descartada (ou não).",
    ],
    registro: "📸 Foto do problema inventado, da equação, das duas raízes e da explicação de qual raiz vale.",
  },
  recompensa: { xp: 240, moedas: 120, medalha: "Detetive do 2º Grau" },
};
