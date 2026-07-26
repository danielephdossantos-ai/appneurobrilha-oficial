import type { AulaV4 } from "../../types";

/** Aula 01 · U6 — Perímetro e área de figuras planas. */
export const aula01_perimetroArea: AulaV4 = {
  slug: "u6-01-perimetro-area",
  titulo: "Contorno e Superfície",
  iconeTrilha: "📐",
  bncc: ["EF07MA30", "EF07MA31"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Cerca ou grama?",
    historia:
      "{NOME}, o pedreiro chegou no terreno com duas perguntas: quantos metros de cerca ele precisa comprar e quantos metros quadrados de grama vai plantar. São duas contas DIFERENTES no mesmo terreno. Quem troca uma pela outra compra material errado e perde dinheiro. Hoje você aprende a nunca mais confundir contorno com superfície.",
  },

  momento02_exploracao: {
    instrucao: "Olhe o mesmo retângulo sendo medido de dois jeitos.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "retangulo",
        medidasLados: ["8 m", "5 m", "8 m", "5 m"],
        mostrarAngulos: true,
        legenda: "Terreno de 8 m por 5 m.",
      },
      {
        tipo: "tabela",
        titulo: "Duas perguntas, duas contas",
        cabecalhos: ["Pergunta", "Conta", "Resultado", "Unidade"],
        linhas: [
          { rotulo: "Cerca", valores: ["8 + 5 + 8 + 5", "26", "m (metro)"] },
          { rotulo: "Grama", valores: ["8 × 5", "40", "m² (metro quadrado)"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Perímetro é SOMA de lados e sai em m. Área é MULTIPLICAÇÃO e sai em m² (ao quadrado).",
        destaque: true,
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Dois terrenos com o MESMO perímetro têm sempre a mesma área?",
    pista: "Compare um retângulo 8 × 2 com um 5 × 5. Some os lados dos dois.",
    revelacao: "Não! Os dois têm perímetro 20 m, mas o primeiro tem 16 m² e o segundo tem 25 m². Perímetro igual não garante área igual.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Mesmo perímetro, áreas diferentes",
      passos: [
        { expr: "8 × 2 → P = 8+2+8+2 = 20 m", explica: "Perímetro do primeiro.", status: "neutro" },
        { expr: "8 × 2 → A = 16 m²", explica: "Área do primeiro.", status: "neutro" },
        { expr: "5 × 5 → P = 5+5+5+5 = 20 m", explica: "Mesmo perímetro.", status: "ok" },
        {
          expr: "5 × 5 → A = 25 m²",
          explica: "Área maior com a mesma cerca!",
          status: "ok",
          professor:
            "Entre todos os retângulos de mesmo perímetro, o QUADRADO é o que tem a maior área. É por isso que currais, canteiros e caixas econômicas tendem ao formato quadrado: mesmo material, mais espaço aproveitado.",
        },
      ],
      fatorada: "P igual ≠ A igual",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Perímetro, área e figuras compostas",
    etapas: [
      {
        texto: "PERÍMETRO (P) é a soma de TODOS os lados do contorno. A unidade continua linear: cm, m, km.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Triângulo de lados 6 cm, 8 cm e 10 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P = 6 + 8 + 10",
            passos: [
              { expr: "P = 6 + 8", explica: "Somo dois lados.", status: "neutro" },
              { expr: "P = 14 + 10", explica: "Somo o terceiro.", status: "neutro" },
              { expr: "P = 24 cm", explica: "Contorno completo.", status: "ok" },
            ],
            fatorada: "24 cm",
          },
          destaque: "Perímetro nunca leva expoente na unidade.",
        },
      },
      {
        texto: "ÁREA do retângulo: A = b × h. Do quadrado: A = l². Do triângulo: A = (b × h) ÷ 2. A altura é sempre PERPENDICULAR à base.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Triângulo de base 12 cm e altura 5 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (b · h) ÷ 2",
            passos: [
              { expr: "A = (12 · 5) ÷ 2", explica: "Substituo base e altura.", status: "neutro" },
              { expr: "A = 60 ÷ 2", explica: "Multiplico primeiro.", status: "neutro" },
              {
                expr: "A = 30 cm²",
                explica: "Metade do retângulo 12 × 5.",
                status: "ok",
                professor:
                  "O ÷ 2 existe porque o triângulo é sempre metade de um retângulo (ou paralelogramo) de mesma base e mesma altura. Se você desenhar o retângulo em volta, enxerga a metade sobrando.",
              },
              { expr: "Erro comum: usar o lado inclinado como altura", explica: "A altura forma 90° com a base.", status: "x" },
            ],
            fatorada: "30 cm²",
          },
          destaque: "Área sempre em unidade ao quadrado.",
        },
      },
      {
        texto: "FIGURA COMPOSTA: recorte em retângulos e triângulos, calcule cada pedaço e SOME (ou subtraia o buraco).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Sala em L: um retângulo 6 × 4 grudado num 3 × 2",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A(total) = A₁ + A₂",
            passos: [
              { expr: "A₁ = 6 · 4 = 24 m²", explica: "Parte maior.", status: "neutro" },
              { expr: "A₂ = 3 · 2 = 6 m²", explica: "Parte menor.", status: "neutro" },
              {
                expr: "A = 24 + 6 = 30 m²",
                explica: "Somo os pedaços.",
                status: "ok",
                professor:
                  "Decompor é a técnica-mestra de área. Qualquer figura estranha vira soma de figuras conhecidas. Quando há um vazio (uma piscina dentro do quintal), a conta é subtração: área total menos área do buraco.",
              },
            ],
            fatorada: "30 m²",
          },
          destaque: "Recortar → calcular → somar.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um quintal retangular de 10 m por 7 m tem uma piscina quadrada de 3 m de lado. Quantos m² de grama serão plantados?",
    resposta: "61 m² de grama",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A(grama) = A(quintal) − A(piscina)",
      passos: [
        { expr: "A(quintal) = 10 · 7 = 70 m²", explica: "Retângulo todo.", status: "neutro" },
        { expr: "A(piscina) = 3² = 9 m²", explica: "Quadrado de lado 3.", status: "neutro" },
        {
          expr: "A(grama) = 70 − 9 = 61 m²",
          explica: "Tiro o buraco.",
          status: "ok",
          professor:
            "Repare que a piscina NÃO muda o perímetro do quintal — a cerca continua 34 m. Área e perímetro reagem de formas diferentes às mudanças da figura.",
        },
      ],
      fatorada: "61 m²",
      legenda: "Brilha resolve",
    },
    passos: ["Calculo a área total.", "Calculo a área do vazio.", "Subtraio.", "Escrevo a unidade em m²."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o perímetro de um quadrado de lado 9 cm?",
    dica: "São quatro lados iguais: P = 4 × l.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P = 4 · 9",
      passos: [
        { expr: "P = 9 + 9 + 9 + 9", explica: "Somo os quatro lados.", status: "neutro" },
        { expr: "P = 36 cm", explica: "Ou 4 × 9.", status: "ok" },
      ],
      fatorada: "36 cm",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "36 cm" }, { nome: "81 cm" }, { nome: "18 cm" }],
      respostaCerta: "36 cm",
      feedbackAcerto: "🎯 Quatro lados de 9 cm.",
      feedbackErro: "81 é a ÁREA (9² = 81 cm²). O perímetro soma os lados: 4 × 9 = 36 cm.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é a área de um triângulo de base 10 cm e altura 6 cm?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = (10 · 6) ÷ 2",
      passos: [
        { expr: "10 · 6 = 60", explica: "Base vezes altura.", status: "neutro" },
        { expr: "60 ÷ 2 = 30 cm²", explica: "Metade do retângulo.", status: "ok" },
      ],
      fatorada: "30 cm²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30 cm²" }, { nome: "60 cm²" }, { nome: "16 cm²" }],
      respostaCerta: "30 cm²",
      feedbackAcerto: "🎯 Não esqueceu do ÷ 2.",
      feedbackErro: "60 cm² é a área do RETÂNGULO 10 × 6. O triângulo é a metade: 60 ÷ 2 = 30 cm².",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A escola vai reformar uma quadra retangular de 20 m por 12 m. Vai pintar a linha do contorno e trocar todo o piso.",
    problema: "Quantos metros de linha e quantos m² de piso são necessários?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Quadra 20 m × 12 m",
      passos: [
        { expr: "P = 20 + 12 + 20 + 12", explica: "Linha do contorno.", status: "neutro" },
        { expr: "P = 64 m de linha", explica: "Perímetro.", status: "ok" },
        { expr: "A = 20 · 12", explica: "Piso.", status: "neutro" },
        {
          expr: "A = 240 m² de piso",
          explica: "Área.",
          status: "ok",
          professor:
            "Na obra, a loja vende tinta de linha por METRO e piso por METRO QUADRADO. Pedir 240 metros de linha ou 64 m² de piso é o tipo de erro que custa caro. A unidade avisa qual conta usar.",
        },
      ],
      fatorada: "64 m de linha e 240 m² de piso",
      legenda: "Aplicação — reforma da quadra",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos m² de piso?",
      opcoes: [{ nome: "240 m²" }, { nome: "64 m²" }, { nome: "32 m²" }],
      respostaCerta: "240 m²",
      feedbackAcerto: "🎯 20 × 12 = 240.",
      feedbackErro: "64 é o PERÍMETRO em metros. O piso cobre a superfície: 20 × 12 = 240 m².",
    },
  },

  momento09_revisao: {
    pontos: [
      "Perímetro = soma dos lados, unidade linear (m, cm).",
      "Área = superfície, unidade ao quadrado (m², cm²).",
      "Retângulo: A = b × h. Quadrado: A = l². Triângulo: A = (b × h) ÷ 2.",
      "Altura é sempre perpendicular à base.",
      "Figura composta: recorte, calcule cada parte e some (ou subtraia o vazio).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "O perímetro de um retângulo 7 m × 3 m é:", opcoes: ["20 m", "21 m", "10 m"], correta: 0, feedbackAcerto: "🎉 7+3+7+3 = 20.", feedbackErro: "21 é a área (7 × 3 = 21 m²). O perímetro soma os quatro lados: 7+3+7+3 = 20 m." },
      { pergunta: "A área de um quadrado de lado 6 cm é:", opcoes: ["36 cm²", "24 cm²", "12 cm²"], correta: 0, feedbackAcerto: "🎉 6² = 36.", feedbackErro: "24 cm é o PERÍMETRO (4 × 6). A área é lado ao quadrado: 6² = 36 cm²." },
      { pergunta: "Um triângulo tem base 8 cm e altura 3 cm. Sua área é:", opcoes: ["12 cm²", "24 cm²", "11 cm²"], correta: 0, feedbackAcerto: "🎉 (8 × 3) ÷ 2 = 12.", feedbackErro: "24 cm² é o retângulo inteiro. O triângulo é metade: 24 ÷ 2 = 12 cm²." },
      { pergunta: "Um quintal de 60 m² tem um canteiro de 8 m². A área livre é:", opcoes: ["52 m²", "68 m²", "480 m²"], correta: 0, feedbackAcerto: "🎉 Subtração do vazio.", feedbackErro: "O canteiro OCUPA espaço, então subtraímos: 60 − 8 = 52 m²." },
      { pergunta: "Dois terrenos têm o mesmo perímetro. Então:", opcoes: ["as áreas podem ser diferentes", "as áreas são sempre iguais", "um deles é quadrado"], correta: 0, feedbackAcerto: "🎉 8 × 2 e 5 × 5 provam isso.", feedbackErro: "Perímetro igual não garante área igual: 8 × 2 e 5 × 5 têm P = 20 m, mas áreas de 16 m² e 25 m²." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A planta do meu quarto",
    materiais: ["Trena ou fita métrica", "Caderno"],
    passos: [
      "Meça o comprimento e a largura do seu quarto em metros.",
      "Calcule o perímetro (rodapé) e a área (piso).",
      "Descubra com um adulto quanto custaria o m² de piso.",
    ],
    registro: "📸 Foto do desenho do quarto com as medidas, o perímetro e a área.",
  },
  recompensa: { xp: 240, moedas: 125, medalha: "Mestre da Medida" },
};
