import type { AulaV4 } from "../../types";

export const aula04_volumes: AulaV4 = {
  slug: "u6-04-volumes",
  titulo: "Caixas, Latas e Tendas: Volume de Sólidos",
  iconeTrilha: "🧊",
  bncc: ["EF09MA19", "EF09MA20"],
  duracaoMin: 32,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Quanto cabe dentro?",
    historia:
      "{NOME}, além de calcular a área de uma figura plana, muitas vezes precisamos saber quanto CABE dentro de um sólido: quanta água numa caixa-d'água, quanto sorvete numa casquinha, quanto ar numa tenda. Isso é volume! Hoje o Brilha te ensina a calcular o volume de prismas, cilindros, pirâmides e cones — e a transformar tudo isso em litros.",
  },

  momento02_exploracao: {
    instrucao: "Cada sólido tem uma fórmula de volume. Observe.",
    cenas: [
      { tipo: "solido", forma: "cilindro", legenda: "Cilindro" },
      { tipo: "solido", forma: "piramide", legenda: "Pirâmide" },
      {
        tipo: "tabela",
        titulo: "Fórmulas de volume",
        cabecalhos: ["Sólido", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["Prisma (bloco, cubo, etc.)", "V = Ab · h"] },
          { rotulo: "2", valores: ["Cilindro", "V = Ab · h = 3,14 · r² · h"] },
          { rotulo: "3", valores: ["Pirâmide", "V = (Ab · h) ÷ 3"] },
          { rotulo: "4", valores: ["Cone", "V = (Ab · h) ÷ 3 = (3,14 · r² · h) ÷ 3"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Ab = área da base. Pirâmide e cone valem 1/3 do prisma/cilindro de mesma base e altura." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Uma caixa-d'água cúbica de 1 m de lado guarda quantos litros de água?",
    pista: "Calcule o volume em m³ e lembre-se: 1 m³ = 1000 litros.",
    revelacao: "V = 1 · 1 · 1 = 1 m³. Como 1 m³ equivale a 1000 L, essa caixa guarda 1000 litros!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Caixa cúbica de 1 m de lado",
      passos: [
        { expr: "V = Ab · h = (1 · 1) · 1", explica: "Base quadrada 1 m × 1 m, altura 1 m.", status: "neutro" },
        { expr: "V = 1 m³", explica: "Volume em metros cúbicos.", status: "ok" },
        { expr: "1 m³ = 1000 L", explica: "Regra de conversão: todo 1 m³ vale 1000 litros.", status: "ok", professor: "Essa relação vem de 1 m³ = 100 cm × 100 cm × 100 cm = 1.000.000 cm³, e 1 litro = 1000 cm³, então 1.000.000 ÷ 1000 = 1000 litros." },
      ],
      fatorada: "1000 litros",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Volume de prisma, cilindro, pirâmide, cone e conversão em litros",
    etapas: [
      {
        texto: "O volume do PRISMA (inclusive o cubo e o bloco retangular) é a área da base vezes a altura: V = Ab · h.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um bloco retangular tem base 4 cm × 3 cm e altura 5 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = Ab · h",
            passos: [
              { expr: "Ab = 4 · 3 = 12 cm²", explica: "Área da base retangular.", status: "neutro" },
              { expr: "V = 12 · 5", explica: "Multiplico pela altura.", status: "ok" },
              { expr: "V = 60 cm³", explica: "Resultado em centímetros cúbicos.", status: "ok", professor: "O prisma é formado por várias 'fatias' iguais à base, empilhadas até a altura h — por isso multiplicamos base por altura." },
            ],
            fatorada: "V = 60 cm³",
          },
          destaque: "Prisma: V = área da base × altura.",
        },
      },
      {
        texto: "O volume do CILINDRO usa a área do círculo da base: V = Ab · h = 3,14 · r² · h.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um cilindro tem raio 3 cm e altura 10 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 3,14 · r² · h",
            passos: [
              { expr: "r² = 3² = 9", explica: "Elevo o raio ao quadrado.", status: "neutro" },
              { expr: "Ab = 3,14 · 9 = 28,26 cm²", explica: "Área da base circular.", status: "ok" },
              { expr: "V = 28,26 · 10 = 282,6 cm³", explica: "Multiplico pela altura.", status: "ok", professor: "O cilindro é como um prisma cuja base é um círculo — a mesma ideia de 'empilhar' a base até a altura h." },
            ],
            fatorada: "V = 282,6 cm³",
          },
          destaque: "Cilindro: calcule primeiro a área da base circular.",
        },
      },
      {
        texto: "O volume da PIRÂMIDE é 1/3 do volume de um prisma de mesma base e altura: V = (Ab · h) ÷ 3.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma pirâmide de base quadrada 6 cm × 6 cm tem altura 9 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = (Ab · h) ÷ 3",
            passos: [
              { expr: "Ab = 6 · 6 = 36 cm²", explica: "Área da base quadrada.", status: "neutro" },
              { expr: "V = (36 · 9) ÷ 3", explica: "Multiplico pela altura e divido por 3.", status: "ok" },
              { expr: "36 · 9 = 324", explica: "Resultado da multiplicação.", status: "ok" },
              { expr: "V = 324 ÷ 3 = 108 cm³", explica: "Divido por 3.", status: "ok", professor: "Encaixando 3 pirâmides idênticas dentro de um prisma de mesma base e altura, elas preenchem exatamente o prisma — por isso o fator 1/3." },
            ],
            fatorada: "V = 108 cm³",
          },
          destaque: "Pirâmide e cone SEMPRE dividem por 3.",
        },
      },
      {
        texto: "O volume do CONE é 1/3 do volume de um cilindro de mesma base e altura: V = (3,14 · r² · h) ÷ 3.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um cone tem raio 4 cm e altura 9 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = (3,14 · r² · h) ÷ 3",
            passos: [
              { expr: "r² = 4² = 16", explica: "Elevo o raio ao quadrado.", status: "neutro" },
              { expr: "Ab = 3,14 · 16 = 50,24 cm²", explica: "Área da base circular.", status: "ok" },
              { expr: "V = (50,24 · 9) ÷ 3", explica: "Multiplico pela altura e divido por 3.", status: "ok" },
              { expr: "50,24 · 9 = 452,16", explica: "Resultado da multiplicação.", status: "ok" },
              { expr: "V = 452,16 ÷ 3 = 150,72 cm³", explica: "Divido por 3 e finalizo.", status: "ok", professor: "3 cones idênticos preenchem exatamente um cilindro de mesma base e altura, por isso dividimos por 3." },
            ],
            fatorada: "V = 150,72 cm³",
          },
          destaque: "Cone: mesma ideia do cilindro, mas dividido por 3.",
        },
      },
      {
        texto: "Para transformar volume em CAPACIDADE (litros), use: 1 m³ = 1000 L e 1 dm³ = 1 L (1 dm³ = 1000 cm³).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma caixa tem volume 2,5 m³. Quantos litros de água ela guarda?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1 m³ = 1000 L",
            passos: [
              { expr: "2,5 m³ · 1000", explica: "Multiplico o volume em m³ por 1000.", status: "neutro" },
              { expr: "2,5 · 1000 = 2500 L", explica: "Resultado em litros.", status: "ok", professor: "Sempre que o volume estiver em m³, basta multiplicar por 1000 para converter em litros — é só 'andar' a vírgula 3 casas." },
            ],
            fatorada: "2500 L",
          },
          destaque: "m³ → litros: multiplique por 1000.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um cilindro (lata) tem raio 5 cm e altura 12 cm. Qual é o volume, em cm³?",
    resposta: "942 cm³",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 3,14 · r² · h",
      passos: [
        { expr: "r² = 5² = 25", explica: "Elevo o raio ao quadrado.", status: "neutro" },
        { expr: "Ab = 3,14 · 25 = 78,5 cm²", explica: "Área da base circular.", status: "ok" },
        { expr: "V = 78,5 · 12 = 942 cm³", explica: "Multiplico pela altura.", status: "ok", professor: "Sempre calculo primeiro a área da base circular e depois multiplico pela altura do cilindro." },
      ],
      fatorada: "V = 942 cm³",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo a área da base circular: Ab = 3,14 · r².",
      "Multiplico a área da base pela altura.",
      "O resultado já está em cm³, pois raio e altura estão em cm.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um prisma tem base retangular 5 cm × 4 cm e altura 6 cm. Qual é o volume?",
    dica: "Primeiro calcule Ab = base × largura, depois multiplique pela altura.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = Ab · h",
      passos: [
        { expr: "Ab = 5 · 4 = 20 cm²", explica: "Área da base retangular.", status: "neutro" },
        { expr: "V = 20 · 6 = ?", explica: "Complete a multiplicação final.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o volume do prisma?",
      opcoes: [{ nome: "120 cm³" }, { nome: "20 cm³" }, { nome: "100 cm³" }],
      respostaCerta: "120 cm³",
      feedbackAcerto: "🎯 Ab = 20 cm², V = 20 · 6 = 120 cm³.",
      feedbackErro: "Calcule Ab = 5·4 = 20 cm² e depois V = 20 · 6 = 120 cm³.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um cone tem raio 3 cm e altura 8 cm. Qual é o volume (use 3,14)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = (3,14 · r² · h) ÷ 3",
      passos: [
        { expr: "r² = 3² = 9", explica: "Eleve o raio ao quadrado.", status: "neutro" },
        { expr: "Ab = 3,14 · 9 = 28,26 cm²", explica: "Área da base.", status: "neutro" },
        { expr: "V = (28,26 · 8) ÷ 3 = ?", explica: "Complete a conta.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o volume do cone?",
      opcoes: [{ nome: "75,36 cm³" }, { nome: "226,08 cm³" }, { nome: "28,26 cm³" }],
      respostaCerta: "75,36 cm³",
      feedbackAcerto: "🎯 28,26 · 8 = 226,08; 226,08 ÷ 3 = 75,36 cm³.",
      feedbackErro: "Calcule Ab = 28,26 cm², multiplique por 8 (=226,08) e divida por 3: 75,36 cm³.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma caixa-d'água em forma de prisma tem base 2 m × 1,5 m e altura 1 m.",
    problema: "Quantos litros de água essa caixa-d'água guarda quando está cheia?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = Ab · h, depois converter para litros",
      passos: [
        { expr: "Ab = 2 · 1,5 = 3 m²", explica: "Área da base retangular.", status: "neutro" },
        { expr: "V = 3 · 1 = 3 m³", explica: "Multiplico pela altura.", status: "ok" },
        { expr: "3 m³ · 1000 = 3000 L", explica: "Converto para litros (1 m³ = 1000 L).", status: "ok", professor: "Em problemas de capacidade, sempre termine convertendo m³ para litros multiplicando por 1000." },
      ],
      fatorada: "3000 litros",
      legenda: "Aplicação — caixa-d'água",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos litros a caixa-d'água guarda?",
      opcoes: [{ nome: "3000 L" }, { nome: "300 L" }, { nome: "3 L" }],
      respostaCerta: "3000 L",
      feedbackAcerto: "🎯 V = 3 m³, e 3 m³ = 3000 L.",
      feedbackErro: "Calcule V = 2 · 1,5 · 1 = 3 m³ e depois converta: 3 · 1000 = 3000 L.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Prisma: V = Ab · h.",
      "Cilindro: V = Ab · h = 3,14 · r² · h.",
      "Pirâmide: V = (Ab · h) ÷ 3.",
      "Cone: V = (Ab · h) ÷ 3 = (3,14 · r² · h) ÷ 3.",
      "Conversão: 1 m³ = 1000 L (e 1 dm³ = 1 L).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Um cubo tem aresta 4 cm. Qual é o seu volume?",
        opcoes: ["64 cm³", "16 cm³", "48 cm³"],
        correta: 0,
        feedbackAcerto: "🎉 V = Ab · h = (4·4) · 4 = 16 · 4 = 64 cm³.",
        feedbackErro: "No cubo, V = aresta³ = 4·4·4 = 64 cm³.",
      },
      {
        pergunta: "Um cilindro tem raio 2 cm e altura 10 cm. Qual é o volume (use 3,14)?",
        opcoes: ["125,6 cm³", "62,8 cm³", "251,2 cm³"],
        correta: 0,
        feedbackAcerto: "🎉 Ab = 3,14·4 = 12,56 cm²; V = 12,56·10 = 125,6 cm³.",
        feedbackErro: "Calcule Ab = 3,14 · r² = 12,56 cm² e depois V = 12,56 · 10 = 125,6 cm³.",
      },
      {
        pergunta: "Uma pirâmide tem base 10 cm² e altura 12 cm. Qual é o volume?",
        opcoes: ["40 cm³", "120 cm³", "60 cm³"],
        correta: 0,
        feedbackAcerto: "🎉 V = (10 · 12) ÷ 3 = 120 ÷ 3 = 40 cm³.",
        feedbackErro: "Use V = (Ab · h) ÷ 3: (10 · 12) ÷ 3 = 40 cm³.",
      },
      {
        pergunta: "Um reservatório tem volume 5 m³. Quantos litros de água ele comporta?",
        opcoes: ["5000 L", "500 L", "50 L"],
        correta: 0,
        feedbackAcerto: "🎉 1 m³ = 1000 L, então 5 m³ = 5000 L.",
        feedbackErro: "Use a relação 1 m³ = 1000 L: 5 · 1000 = 5000 L.",
      },
      {
        pergunta: "Um cone e um cilindro têm a mesma base e a mesma altura. O volume do cone é:",
        opcoes: ["1/3 do volume do cilindro", "Igual ao do cilindro", "O dobro do cilindro"],
        correta: 0,
        feedbackAcerto: "🎉 O cone sempre vale 1/3 do cilindro de mesma base e altura.",
        feedbackErro: "Lembre-se: cone e pirâmide sempre valem 1/3 do sólido 'reto' (cilindro/prisma) de mesma base e altura.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Meça e calcule uma capacidade em casa",
    materiais: ["Fita métrica ou régua", "Papel e caneta"],
    passos: [
      "Escolha uma caixa, balde ou reservatório de água em casa.",
      "Meça a base e a altura (ou raio, se for redondo).",
      "Calcule o volume e converta o resultado em litros.",
      "Compare com a informação de capacidade escrita na embalagem, se houver.",
    ],
    registro: "📸 Foto do objeto medido junto com a conta do volume em litros.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Engenheiro dos Volumes" },
};
