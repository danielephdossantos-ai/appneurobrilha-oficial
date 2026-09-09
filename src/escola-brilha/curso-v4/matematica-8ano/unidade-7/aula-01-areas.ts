import type { AulaV4 } from "../../types";

export const aula01_areas: AulaV4 = {
  slug: "u7-01-areas",
  titulo: "Áreas de polígonos",
  iconeTrilha: "🟩",
  bncc: ["EF08MA19"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Todas as fórmulas nascem do retângulo",
    historia:
      "{NOME}, você não precisa decorar 5 fórmulas de área. Precisa entender UMA: a do retângulo (base × altura). Todas as outras saem dela — o triângulo é meio retângulo, o paralelogramo vira retângulo quando você corta e encaixa, e o trapézio é a média das bases vezes a altura. Hoje você vai VER isso acontecer.",
  },
  momento02_exploracao: {
    instrucao: "Olhe a figura e a tabela. Área é sempre em unidade AO QUADRADO (cm², m²).",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "retangulo",
        medidasLados: ["8 cm", "5 cm", "8 cm", "5 cm"],
        mostrarAngulos: true,
        legenda: "Retângulo 8 × 5: cabem 8 quadradinhos por linha, em 5 linhas → 40 cm².",
      },
      {
        tipo: "tabela",
        titulo: "As 5 fórmulas e de onde vêm",
        cabecalhos: ["Figura", "Fórmula", "Por quê"],
        linhas: [
          { rotulo: "Quadrado", valores: ["A = l²", "É retângulo de lados iguais"] },
          { rotulo: "Retângulo", valores: ["A = b · h", "Linhas × colunas de quadradinhos"] },
          { rotulo: "Triângulo", valores: ["A = (b · h) ÷ 2", "É metade de um retângulo"] },
          { rotulo: "Paralelogramo", valores: ["A = b · h", "Corte a ponta e encaixe: vira retângulo"] },
          { rotulo: "Trapézio", valores: ["A = (B + b) · h ÷ 2", "Média das bases × altura"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "Atenção: a ALTURA é sempre perpendicular (90°) à base. O lado inclinado do paralelogramo NÃO é a altura.",
        destaque: true,
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que o triângulo tem aquele ÷ 2 na fórmula?",
    pista: "Desenhe um retângulo e corte na diagonal. O que sobra em cada pedaço?",
    revelacao:
      "A diagonal parte o retângulo em DOIS triângulos iguais. Logo, cada triângulo é metade: (b · h) ÷ 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Retângulo b = 10, h = 6",
      passos: [
        { expr: "A(retângulo) = 10 · 6 = 60", explica: "Área cheia.", status: "neutro" },
        { expr: "Diagonal → 2 triângulos congruentes", explica: "Mesma base, mesma altura.", status: "neutro" },
        {
          expr: "A(triângulo) = 60 ÷ 2 = 30",
          explica: "Metade do retângulo.",
          status: "ok",
          professor:
            "Vale para QUALQUER triângulo, não só o retângulo cortado. Todo triângulo pode ser 'completado' até virar um paralelogramo de mesma base e altura; e o paralelogramo tem área b · h. Por isso o triângulo é sempre (b · h) ÷ 2.",
        },
      ],
      fatorada: "A = (b · h) ÷ 2",
    },
  },
  momento04_explicacao: {
    titulo: "Uma figura de cada vez — com a conta montada",
    etapas: [
      {
        texto: "Retângulo: A = b · h. A base multiplica a altura, e ponto.",
        exemploReal: {
          contexto: "Retângulo de base 8 cm e altura 5 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = b · h",
            passos: [
              { expr: "A = 8 · 5", explica: "Substituo base e altura.", status: "neutro" },
              { expr: "A = 40", explica: "Multipliquei.", status: "ok" },
              {
                expr: "A = 40 cm²",
                explica: "Unidade ao quadrado.",
                status: "ok",
                professor:
                  "Nunca escreva 40 cm numa área. Comprimento é cm; área é cm²; volume é cm³. Perder a unidade é perder metade da resposta em prova.",
              },
            ],
            fatorada: "A = 40 cm²",
          },
          destaque: "A = 40 cm².",
        },
      },
      {
        texto: "Triângulo: A = (b · h) ÷ 2. Multiplique primeiro, divida depois.",
        exemploReal: {
          contexto: "Triângulo de base 10 cm e altura 6 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (b · h) ÷ 2",
            passos: [
              { expr: "A = (10 · 6) ÷ 2", explica: "Substituo.", status: "neutro" },
              { expr: "A = 60 ÷ 2", explica: "Resolvo o parêntese primeiro.", status: "neutro" },
              {
                expr: "A = 30 cm²",
                explica: "Dividi por 2.",
                status: "ok",
                professor:
                  "Erro clássico: dividir a base por 2 antes de multiplicar pela altura e depois dividir de novo. Faça na ordem: produto → metade. Uma vez só.",
              },
            ],
            fatorada: "A = 30 cm²",
          },
          destaque: "A = 30 cm².",
        },
      },
      {
        texto: "Trapézio: A = (B + b) · h ÷ 2. Some as bases, multiplique pela altura, divida por 2.",
        exemploReal: {
          contexto: "Trapézio com B = 10 cm, b = 6 cm e h = 4 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (B + b) · h ÷ 2",
            passos: [
              { expr: "A = (10 + 6) · 4 ÷ 2", explica: "Substituo B, b e h.", status: "neutro" },
              { expr: "A = 16 · 4 ÷ 2", explica: "Somei as bases.", status: "neutro" },
              { expr: "A = 64 ÷ 2", explica: "Multipliquei pela altura.", status: "neutro" },
              {
                expr: "A = 32 cm²",
                explica: "Dividi por 2.",
                status: "ok",
                professor:
                  "Repare que (B + b) ÷ 2 é a MÉDIA das bases. O trapézio se comporta como um retângulo cuja base é a média das duas bases. Por isso a fórmula não é mágica: é retângulo disfarçado.",
              },
            ],
            fatorada: "A = 32 cm²",
          },
          destaque: "A = 32 cm².",
        },
      },
      {
        texto: "Cuidado com a altura do paralelogramo: é a distância perpendicular, não o lado inclinado.",
        exemploReal: {
          contexto: "Paralelogramo com base 9 cm, lado inclinado 5 cm e altura 4 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = b · h",
            passos: [
              { expr: "A = 9 · 5 = 45", explica: "Usei o lado inclinado.", status: "x" },
              {
                expr: "A = 9 · 4 = 36 cm²",
                explica: "Usei a ALTURA (perpendicular).",
                status: "ok",
                professor:
                  "O lado inclinado é maior que a altura; usá-lo sempre superestima a área. Na figura, a altura é o segmento tracejado que forma 90° com a base.",
              },
            ],
            fatorada: "A = 36 cm²",
          },
          destaque: "Altura ⟂ base. Sempre.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "🤝 Nós fazemos: qual a área de um quadrado de lado 7 cm?",
    resposta: "49 cm²",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = l²",
      passos: [
        { expr: "A = 7²", explica: "Lado ao quadrado.", status: "neutro" },
        { expr: "A = 7 · 7", explica: "Potência é multiplicação repetida.", status: "neutro" },
        {
          expr: "A = 49 cm²",
          explica: "",
          status: "ok",
          professor: "7² é 49, não 14. Elevar ao quadrado é multiplicar por si mesmo, não dobrar.",
        },
      ],
      fatorada: "A = 49 cm²",
    },
    passos: ["A = l²", "A = 7 · 7", "A = 49 cm²"],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: retângulo de 6 cm por 4 cm.",
    dica: "A = b · h.",
    visualMat: {
      tipo: "figuraPlana",
      forma: "retangulo",
      medidasLados: ["6 cm", "4 cm", "6 cm", "4 cm"],
      mostrarAngulos: true,
      legenda: "Base 6 cm · altura 4 cm.",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A =",
      opcoes: [{ nome: "24 cm²" }, { nome: "10 cm²" }, { nome: "20 cm²" }],
      respostaCerta: "24 cm²",
      feedbackAcerto: "🎯 6 · 4 = 24 cm².",
      feedbackErro: "10 é o semiperímetro e 20 é o perímetro. Área é MULTIPLICAR: 6 · 4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Triângulo com base 8 cm e altura 5 cm.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = (b · h) ÷ 2",
      passos: [
        { expr: "A = (8 · 5) ÷ 2", explica: "Substituo.", status: "neutro" },
        { expr: "A = 40 ÷ 2", explica: "Produto primeiro.", status: "neutro" },
        { expr: "A = 20 cm²", explica: "", status: "ok" },
      ],
      fatorada: "A = 20 cm²",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A =",
      opcoes: [{ nome: "20 cm²" }, { nome: "40 cm²" }, { nome: "13 cm²" }],
      respostaCerta: "20 cm²",
      feedbackAcerto: "🎯 Metade de 40.",
      feedbackErro: "40 é a área do retângulo inteiro. O triângulo é a METADE.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: uma horta em formato de trapézio tem base maior 10 m, base menor 6 m e altura 4 m. O adubo rende 8 m² por saco.",
    problema: "Qual a área da horta?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Horta: B = 10 m · b = 6 m · h = 4 m",
      passos: [
        { expr: "A = (10 + 6) · 4 ÷ 2", explica: "Fórmula do trapézio.", status: "neutro" },
        { expr: "A = 16 · 4 ÷ 2 = 32 m²", explica: "Área da horta.", status: "ok" },
        {
          expr: "Sacos = 32 ÷ 8 = 4",
          explica: "Cada saco cobre 8 m².",
          status: "ok",
          professor:
            "Em problema real, a área quase nunca é a resposta final: ela vira quantidade de material, tinta, grama ou piso. Calcule a área e depois divida pelo rendimento.",
        },
      ],
      fatorada: "32 m² → 4 sacos de adubo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Área da horta:",
      opcoes: [{ nome: "32 m²" }, { nome: "40 m²" }, { nome: "64 m²" }],
      respostaCerta: "32 m²",
      feedbackAcerto: "🎯 (10+6)·4÷2 = 32 m² → 4 sacos.",
      feedbackErro: "Não esqueça o ÷ 2 do trapézio: 64 ÷ 2 = 32.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Tudo vem do retângulo: A = b · h.",
      "Triângulo = metade do retângulo: (b · h) ÷ 2.",
      "Trapézio = média das bases × altura: (B + b) · h ÷ 2.",
      "Altura é sempre PERPENDICULAR à base.",
      "Área usa unidade ao quadrado: cm², m².",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado de lado 5 cm:", opcoes: ["25 cm²", "20 cm²", "10 cm²"], correta: 0, feedbackAcerto: "🎉 5² = 25.", feedbackErro: "20 é o perímetro. Área é l² = 5 · 5." },
      { pergunta: "Retângulo 3 cm × 7 cm:", opcoes: ["21 cm²", "10 cm²", "20 cm²"], correta: 0, feedbackAcerto: "🎉 3 · 7 = 21.", feedbackErro: "Multiplique base por altura." },
      { pergunta: "Triângulo b = 12 cm, h = 5 cm:", opcoes: ["30 cm²", "60 cm²", "17 cm²"], correta: 0, feedbackAcerto: "🎉 60 ÷ 2 = 30.", feedbackErro: "Falta dividir por 2." },
      { pergunta: "Trapézio B = 8, b = 4, h = 3:", opcoes: ["18 cm²", "36 cm²", "12 cm²"], correta: 0, feedbackAcerto: "🎉 (8+4)·3÷2 = 18.", feedbackErro: "(B + b) · h ÷ 2 = 12 · 3 ÷ 2." },
      { pergunta: "Paralelogramo base 9, lado inclinado 5, altura 4:", opcoes: ["36 cm²", "45 cm²", "20 cm²"], correta: 0, feedbackAcerto: "🎉 Usou a altura, muito bem.", feedbackErro: "O lado inclinado não é a altura. Use 9 · 4." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Planta baixa da casa",
    materiais: ["Fita métrica", "Papel", "Régua"],
    passos: [
      "Meça o comprimento e a largura de 3 cômodos.",
      "Calcule a área de cada um (b · h) e some tudo.",
      "Desenhe a planta em escala e escreva as áreas em m².",
    ],
    registro: "📸 Foto da planta com as áreas calculadas.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
