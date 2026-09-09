import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U6 — Comprimento da circunferência, comprimento de arco,
 * área do círculo e área do setor circular. π ≈ 3,14.
 */
export const aula02_comprimentoAreaCirculo: AulaV4 = {
  slug: "u6-02-comprimento-area-circulo",
  titulo: "A Pizza e a Roda: Comprimento e Área do Círculo",
  iconeTrilha: "🍕",
  bncc: ["EF09MA11", "EF09MA19"],
  duracaoMin: 32,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Quanto de corda dá a volta na roda?",
    historia:
      "{NOME}, imagine que você precisa colocar uma fita ao redor de uma roda de bicicleta, ou descobrir quanto de queijo cabe numa pizza. Hoje o Brilha te ensina duas fórmulas mágicas: C = 2πr para a VOLTA e A = πr² para o ESPAÇO de dentro.",
  },

  momento02_exploracao: {
    instrucao: "Observe o círculo e pense: a linha da borda (circunferência) e a região de dentro (círculo) usam contas diferentes.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "circulo",
        legenda: "Circunferência (borda) x Círculo (região)",
      },
      {
        tipo: "texto",
        texto: "🔑 π (pi) é um número que aparece em TODO círculo do universo: π ≈ 3,14. É a razão entre o comprimento da volta e o diâmetro.",
      },
      {
        tipo: "tabela",
        titulo: "As duas fórmulas do círculo",
        cabecalhos: ["O que mede", "Fórmula", "Unidade"],
        linhas: [
          { rotulo: "1", valores: ["Comprimento (volta)", "C = 2 · π · r", "cm, m..."] },
          { rotulo: "2", valores: ["Área (espaço de dentro)", "A = π · r²", "cm², m²..."] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se o raio de uma roda dobra, o comprimento da volta também dobra. E a área?",
    pista: "Na fórmula A = π · r², o raio aparece ELEVADO AO QUADRADO. O que acontece com um número quando ele é elevado ao quadrado e depois dobrado?",
    revelacao: "A área NÃO dobra — ela fica 4 vezes maior! Porque (2r)² = 4r², e não 2r².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "r = 3 cm → r = 6 cm (dobrou)",
      passos: [
        { expr: "Área com r = 3: A = π · 3²", explica: "Calculo a área original.", status: "neutro" },
        { expr: "A = 3,14 · 9 = 28,26 cm²", explica: "Substituo e multiplico.", status: "ok" },
        { expr: "Área com r = 6: A = π · 6²", explica: "Raio dobrou.", status: "neutro" },
        { expr: "A = 3,14 · 36 = 113,04 cm²", explica: "Substituo e multiplico.", status: "ok" },
        { expr: "113,04 ÷ 28,26 = 4", explica: "A área ficou 4 vezes maior, não 2!", status: "ok", professor: "Isso acontece porque o raio está ao quadrado na fórmula. Dobrar a base de uma potência ao quadrado multiplica o resultado por 4, não por 2." },
      ],
      fatorada: "Área ficou 4× maior quando o raio dobrou",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Comprimento, arco, área e setor circular",
    etapas: [
      {
        texto:
          "O COMPRIMENTO da circunferência (a volta completa) é dado por C = 2 · π · r, usando π ≈ 3,14.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma roda tem raio r = 10 cm. Qual é o comprimento da volta?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "C = 2 · π · r",
            passos: [
              { expr: "C = 2 · π · r", explica: "Fórmula do comprimento.", status: "neutro" },
              { expr: "C = 2 · 3,14 · 10", explica: "Substituo π ≈ 3,14 e r = 10.", status: "ok" },
              { expr: "C = 62,8 cm", explica: "Resultado com unidade.", status: "ok", professor: "Multiplico na ordem: 2 · 3,14 = 6,28; depois 6,28 · 10 = 62,8. A roda dá uma volta completa de 62,8 cm." },
            ],
            fatorada: "C = 62,8 cm",
          },
          destaque: "C = 2πr é o \"perímetro\" do círculo.",
        },
      },
      {
        texto:
          "O COMPRIMENTO DE UM ARCO é uma FRAÇÃO da volta completa. Se o ângulo central do arco é θ (em graus), o arco vale (θ ÷ 360) · 2πr.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "No mesmo círculo (r = 10 cm, C = 62,8 cm), um arco tem ângulo central de 90°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "arco = (θ ÷ 360) · C",
            passos: [
              { expr: "arco = (90 ÷ 360) · 62,8", explica: "90° é 1/4 da volta.", status: "neutro" },
              { expr: "90 ÷ 360 = 0,25", explica: "Fração da volta.", status: "ok" },
              { expr: "arco = 0,25 · 62,8", explica: "Multiplico a fração pela volta toda.", status: "ok" },
              { expr: "arco = 15,7 cm", explica: "Resultado com unidade.", status: "ok", professor: "90° é exatamente um quarto de 360°, por isso o arco é um quarto do comprimento total da circunferência." },
            ],
            fatorada: "arco = 15,7 cm",
          },
          destaque: "Arco é sempre uma fração da volta completa.",
        },
      },
      {
        texto:
          "A ÁREA do círculo (toda a região de dentro) é dada por A = π · r². Repare: o raio é elevado ao quadrado, não multiplicado por 2.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma pizza redonda tem raio r = 15 cm. Qual é a área da pizza?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = π · r²",
            passos: [
              { expr: "A = π · r²", explica: "Fórmula da área do círculo.", status: "neutro" },
              { expr: "A = 3,14 · 15²", explica: "Substituo π ≈ 3,14 e r = 15.", status: "ok" },
              { expr: "15² = 225", explica: "Calculo o quadrado primeiro.", status: "ok", professor: "Sempre resolva a potência antes de multiplicar por π — é a ordem das operações." },
              { expr: "A = 3,14 · 225 = 706,5 cm²", explica: "Multiplico para achar a área final.", status: "ok" },
            ],
            fatorada: "A = 706,5 cm²",
          },
          destaque: "A área usa r² — cresce muito mais rápido que o raio.",
        },
      },
      {
        texto:
          "A ÁREA DO SETOR CIRCULAR (a \"fatia de pizza\") também é uma FRAÇÃO da área total: setor = (θ ÷ 360) · πr², onde θ é o ângulo central da fatia.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Na pizza de raio 15 cm (área 706,5 cm²), uma fatia tem ângulo central de 45°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "setor = (θ ÷ 360) · A",
            passos: [
              { expr: "45 ÷ 360 = 0,125", explica: "Fração da pizza que é essa fatia.", status: "neutro" },
              { expr: "setor = 0,125 · 706,5", explica: "Multiplico a fração pela área total.", status: "ok" },
              { expr: "setor = 88,3125 cm²", explica: "Resultado (arredondando: ≈ 88,31 cm²).", status: "ok", professor: "45° é 1/8 de 360°. Uma pizza dividida em 8 fatias iguais tem cada fatia com 45° de ângulo central." },
            ],
            fatorada: "setor ≈ 88,31 cm²",
          },
          destaque: "Setor é para a área o que o arco é para o comprimento: uma fração.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma piscina circular tem raio r = 6 m. Qual é o comprimento da borda e qual é a área de água?",
    resposta: "C = 37,68 m e A = 113,04 m²",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "r = 6 m",
      passos: [
        { expr: "C = 2 · 3,14 · 6", explica: "Fórmula do comprimento.", status: "neutro" },
        { expr: "C = 37,68 m", explica: "Comprimento da borda.", status: "ok" },
        { expr: "A = 3,14 · 6²", explica: "Fórmula da área.", status: "neutro" },
        { expr: "A = 3,14 · 36 = 113,04 m²", explica: "Área da água.", status: "ok", professor: "Note que uso a mesma medida de raio nas duas fórmulas, mas os resultados têm significados diferentes: um é comprimento (m), outro é área (m²)." },
      ],
      fatorada: "C = 37,68 m; A = 113,04 m²",
      legenda: "Brilha resolve",
    },
    passos: [
      "Aplico C = 2πr para a borda da piscina.",
      "Aplico A = πr² para a área de água.",
      "Confiro as unidades: comprimento em metro, área em metro quadrado.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: uma roda de bicicleta tem raio r = 30 cm. Qual é o comprimento de uma volta completa?",
    dica: "Use C = 2 · π · r com π ≈ 3,14.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C = 2 · 3,14 · 30",
      passos: [
        { expr: "2 · 3,14 = 6,28", explica: "Calculo essa parte primeiro.", status: "neutro" },
        { expr: "6,28 · 30 = ?", explica: "Complete a multiplicação.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o comprimento da volta?",
      opcoes: [{ nome: "188,4 cm" }, { nome: "94,2 cm" }, { nome: "60 cm" }],
      respostaCerta: "188,4 cm",
      feedbackAcerto: "🎯 6,28 · 30 = 188,4 cm.",
      feedbackErro: "Primeiro 2 · 3,14 = 6,28. Depois 6,28 · 30 = 188,4 cm.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é a área de um círculo de raio r = 4 cm?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = π · 4²",
      passos: [
        { expr: "4² = 16", explica: "Calculo a potência primeiro.", status: "neutro" },
        { expr: "A = 3,14 · 16 = ?", explica: "Complete a multiplicação.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área?",
      opcoes: [{ nome: "50,24 cm²" }, { nome: "25,12 cm²" }, { nome: "16 cm²" }],
      respostaCerta: "50,24 cm²",
      feedbackAcerto: "🎯 3,14 · 16 = 50,24 cm².",
      feedbackErro: "Primeiro 4² = 16. Depois 3,14 · 16 = 50,24 cm².",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma pizzaria vai cortar uma pizza de raio r = 20 cm em fatias com ângulo central de 60° cada.",
    problema: "Qual é a área de UMA fatia dessa pizza?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área total → fatia de 60°",
      passos: [
        { expr: "A total = 3,14 · 20²", explica: "Área da pizza inteira.", status: "neutro" },
        { expr: "A total = 3,14 · 400 = 1256 cm²", explica: "Resultado da área total.", status: "ok" },
        { expr: "60 ÷ 360 = 1/6", explica: "Fração que cada fatia representa.", status: "ok", professor: "360° dividido em fatias de 60° dá exatamente 6 fatias iguais." },
        { expr: "fatia = 1256 ÷ 6 ≈ 209,33 cm²", explica: "Divido a área total pelas 6 fatias.", status: "ok" },
      ],
      fatorada: "Cada fatia ≈ 209,33 cm²",
      legenda: "Aplicação — pizzaria",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área aproximada de uma fatia?",
      opcoes: [{ nome: "209,33 cm²" }, { nome: "1256 cm²" }, { nome: "60 cm²" }],
      respostaCerta: "209,33 cm²",
      feedbackAcerto: "🎯 1256 ÷ 6 ≈ 209,33 cm², a área de cada fatia igual.",
      feedbackErro: "Calcule a área total (1256 cm²) e divida pelas 6 fatias iguais: 1256 ÷ 6 ≈ 209,33 cm².",
    },
  },

  momento09_revisao: {
    pontos: [
      "Comprimento da circunferência: C = 2πr.",
      "Comprimento de arco: (θ ÷ 360) · 2πr.",
      "Área do círculo: A = πr² (raio ao quadrado, não multiplicado por 2).",
      "Área do setor circular: (θ ÷ 360) · πr².",
      "Usamos π ≈ 3,14 nas contas do dia a dia.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O comprimento da circunferência de raio r = 5 cm é:",
        opcoes: ["31,4 cm", "15,7 cm", "78,5 cm"],
        correta: 0,
        feedbackAcerto: "🎉 C = 2 · 3,14 · 5 = 31,4 cm.",
        feedbackErro: "Use C = 2πr: 2 · 3,14 · 5 = 31,4 cm.",
      },
      {
        pergunta: "A área de um círculo de raio r = 5 cm é:",
        opcoes: ["78,5 cm²", "31,4 cm²", "25 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 A = π · 5² = 3,14 · 25 = 78,5 cm².",
        feedbackErro: "Use A = πr²: 3,14 · 25 = 78,5 cm² (5² = 25, não 5 · 2 = 10).",
      },
      {
        pergunta: "Um arco tem ângulo central de 180° num círculo de raio 10 cm (C = 62,8 cm). O comprimento do arco é:",
        opcoes: ["31,4 cm", "62,8 cm", "15,7 cm"],
        correta: 0,
        feedbackAcerto: "🎉 180° é metade da volta: 62,8 ÷ 2 = 31,4 cm.",
        feedbackErro: "180° é metade de 360°, então o arco é metade da circunferência: 62,8 ÷ 2 = 31,4 cm.",
      },
      {
        pergunta: "Se o raio de um círculo TRIPLICA, a área fica:",
        opcoes: ["9 vezes maior", "3 vezes maior", "6 vezes maior"],
        correta: 0,
        feedbackAcerto: "🎉 Como a área usa r², triplicar o raio multiplica a área por 3² = 9.",
        feedbackErro: "A área depende de r². Se r triplica, a área multiplica por 3² = 9, não por 3.",
      },
      {
        pergunta: "A área de um setor de 90° num círculo de área total 200 cm² é:",
        opcoes: ["50 cm²", "100 cm²", "25 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 90° é 1/4 de 360°, então o setor é 200 ÷ 4 = 50 cm².",
        feedbackErro: "90° é um quarto da volta (90 ÷ 360 = 1/4). Divida a área total por 4: 200 ÷ 4 = 50 cm².",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A pizza matemática em casa",
    materiais: ["Um prato ou pizza redonda", "Fita métrica ou régua", "Papel e caneta"],
    passos: [
      "Meça o raio de um prato ou pizza redonda da sua casa.",
      "Calcule o comprimento da borda usando C = 2πr.",
      "Calcule a área usando A = πr².",
      "Se a pizza fosse cortada em 8 fatias iguais, calcule a área de UMA fatia.",
    ],
    registro: "📸 Foto da pizza/prato com as contas ao lado.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre do π" },
};
