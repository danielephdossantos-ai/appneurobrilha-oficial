import type { AulaV4 } from "../../types";

export const aula03_areasFigurasCompostas: AulaV4 = {
  slug: "u6-03-areas-figuras-compostas",
  titulo: "O Terreno Irregular: Áreas de Figuras Compostas",
  iconeTrilha: "📐",
  bncc: ["EF09MA19"],
  duracaoMin: 32,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Terrenos nunca são um quadrado perfeito",
    historia:
      "{NOME}, terrenos, salas e quintais raramente são um quadrado simples: eles têm cantos, curvas e formatos misturados. Hoje o Brilha te ensina a calcular a área de triângulo, trapézio, losango, polígono regular — e a somar ou subtrair áreas para resolver qualquer figura composta.",
  },

  momento02_exploracao: {
    instrucao: "Cada figura plana tem sua fórmula de área. Observe as formas.",
    cenas: [
      { tipo: "figuraPlana", forma: "triangulo", legenda: "Triângulo" },
      { tipo: "figuraPlana", forma: "hexagono", legenda: "Hexágono regular" },
      {
        tipo: "tabela",
        titulo: "Fórmulas de área",
        cabecalhos: ["Figura", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["Triângulo", "A = (base · altura) ÷ 2"] },
          { rotulo: "2", valores: ["Trapézio", "A = ((B + b) · altura) ÷ 2"] },
          { rotulo: "3", valores: ["Losango", "A = (D · d) ÷ 2"] },
          { rotulo: "4", valores: ["Polígono regular", "A = (perímetro · apótema) ÷ 2"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Figura composta: divida em partes conhecidas e SOME (ou SUBTRAIA, se for um buraco/recorte)." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um jardim quadrado de 10 m tem um lago circular de raio 5 m dentro dele. Como calcular só a área de grama?",
    pista: "A grama é o quadrado MENOS o lago. Você precisa das duas áreas separadas antes de subtrair.",
    revelacao: "Área de grama = área do quadrado − área do círculo. É a ideia central de figura composta: dividir e operar.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Quadrado 10 m × 10 m − círculo r = 5 m",
      passos: [
        { expr: "A quadrado = 10 · 10 = 100 m²", explica: "Área do terreno todo.", status: "neutro" },
        { expr: "A círculo = 3,14 · 5² = 78,5 m²", explica: "Área do lago.", status: "ok" },
        { expr: "A grama = 100 − 78,5", explica: "Subtraio o \"buraco\" do total.", status: "ok", professor: "Sempre que uma parte é retirada (buraco, recorte, piscina dentro de um terreno), a operação certa é a SUBTRAÇÃO das áreas." },
        { expr: "A grama = 21,5 m²", explica: "Resultado com unidade.", status: "ok" },
      ],
      fatorada: "A grama = 21,5 m²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Área de triângulo, trapézio, losango, polígono e figuras compostas",
    etapas: [
      {
        texto: "A área do TRIÂNGULO é metade do produto entre base e altura: A = (base · altura) ÷ 2.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um triângulo tem base 12 cm e altura 5 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (base · altura) ÷ 2",
            passos: [
              { expr: "A = (12 · 5) ÷ 2", explica: "Substituo os valores.", status: "neutro" },
              { expr: "12 · 5 = 60", explica: "Multiplico base por altura.", status: "ok" },
              { expr: "A = 60 ÷ 2 = 30 cm²", explica: "Divido por 2 e finalizo.", status: "ok", professor: "O triângulo é sempre metade de um retângulo de mesma base e altura — por isso a divisão por 2." },
            ],
            fatorada: "A = 30 cm²",
          },
          destaque: "Não esqueça o ÷ 2 no triângulo!",
        },
      },
      {
        texto: "A área do TRAPÉZIO usa as duas bases (maior B e menor b) e a altura: A = ((B + b) · altura) ÷ 2.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um trapézio tem base maior B = 10 cm, base menor b = 6 cm e altura 4 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = ((B + b) · altura) ÷ 2",
            passos: [
              { expr: "B + b = 10 + 6 = 16", explica: "Somo as duas bases primeiro.", status: "neutro" },
              { expr: "A = (16 · 4) ÷ 2", explica: "Multiplico pela altura.", status: "ok" },
              { expr: "16 · 4 = 64", explica: "Resultado da multiplicação.", status: "ok" },
              { expr: "A = 64 ÷ 2 = 32 cm²", explica: "Divido por 2.", status: "ok", professor: "Pense no trapézio como a \"média\" das duas bases multiplicada pela altura: (B+b)/2 é a base média." },
            ],
            fatorada: "A = 32 cm²",
          },
          destaque: "Trapézio: SOME as bases antes de multiplicar pela altura.",
        },
      },
      {
        texto: "A área do LOSANGO usa as duas diagonais (D maior e d menor): A = (D · d) ÷ 2.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um losango tem diagonal maior D = 12 cm e diagonal menor d = 8 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (D · d) ÷ 2",
            passos: [
              { expr: "A = (12 · 8) ÷ 2", explica: "Substituo as diagonais.", status: "neutro" },
              { expr: "12 · 8 = 96", explica: "Multiplico as diagonais.", status: "ok" },
              { expr: "A = 96 ÷ 2 = 48 cm²", explica: "Divido por 2.", status: "ok", professor: "As diagonais do losango são perpendiculares e formam 4 triângulos retângulos — por isso metade do produto delas." },
            ],
            fatorada: "A = 48 cm²",
          },
          destaque: "Losango usa diagonais, não lados!",
        },
      },
      {
        texto: "A área de um POLÍGONO REGULAR (todos os lados e ângulos iguais) usa o apótema (distância do centro ao meio de um lado): A = (perímetro · apótema) ÷ 2.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um hexágono regular tem lado 6 cm e apótema 5,2 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = (perímetro · apótema) ÷ 2",
            passos: [
              { expr: "perímetro = 6 · 6 = 36 cm", explica: "6 lados de 6 cm cada.", status: "neutro" },
              { expr: "A = (36 · 5,2) ÷ 2", explica: "Substituo perímetro e apótema.", status: "ok" },
              { expr: "36 · 5,2 = 187,2", explica: "Multiplico.", status: "ok" },
              { expr: "A = 187,2 ÷ 2 = 93,6 cm²", explica: "Divido por 2.", status: "ok", professor: "Todo polígono regular pode ser dividido em triângulos iguais a partir do centro; o apótema é a altura de cada um desses triângulos." },
            ],
            fatorada: "A = 93,6 cm²",
          },
          destaque: "Perímetro = soma de todos os lados (6 × lado, no hexágono).",
        },
      },
      {
        texto: "Em FIGURAS COMPOSTAS, você divide a figura em partes conhecidas e SOMA (partes juntas) ou SUBTRAI (recortes/buracos).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um terreno retangular 10 m × 10 m tem um lago circular de raio 5 m recortado.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A composta = A retângulo − A círculo",
            passos: [
              { expr: "A retângulo = 10 · 10 = 100 m²", explica: "Área total do terreno.", status: "neutro" },
              { expr: "A círculo = 3,14 · 5² = 78,5 m²", explica: "Área do lago (buraco).", status: "ok" },
              { expr: "A composta = 100 − 78,5 = 21,5 m²", explica: "Subtraio o buraco.", status: "ok", professor: "Buraco/recorte = subtração. Peças juntas lado a lado = soma. Identifique sempre qual dos dois casos está acontecendo." },
            ],
            fatorada: "A composta = 21,5 m²",
          },
          destaque: "Figura composta = soma ou subtração de figuras simples.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma sala tem formato de retângulo 6 m × 4 m mais um triângulo de base 4 m e altura 3 m colado numa das paredes. Qual é a área total?",
    resposta: "30 m²",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A retângulo + A triângulo",
      passos: [
        { expr: "A retângulo = 6 · 4 = 24 m²", explica: "Área da parte retangular.", status: "neutro" },
        { expr: "A triângulo = (4 · 3) ÷ 2 = 6 m²", explica: "Área da parte triangular.", status: "ok" },
        { expr: "A total = 24 + 6 = 30 m²", explica: "Somo as duas partes juntas.", status: "ok", professor: "Como o triângulo está colado ao retângulo (formando uma peça só, sem sobreposição), a operação certa é a soma." },
      ],
      fatorada: "A total = 30 m²",
      legenda: "Brilha resolve",
    },
    passos: [
      "Divido a sala em retângulo + triângulo.",
      "Calculo cada área separadamente.",
      "Somo, pois são partes coladas, não sobrepostas.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um trapézio tem base maior 14 cm, base menor 8 cm e altura 5 cm. Qual é a área?",
    dica: "Some as bases, multiplique pela altura e divida por 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = ((14 + 8) · 5) ÷ 2",
      passos: [
        { expr: "14 + 8 = 22", explica: "Some as bases.", status: "neutro" },
        { expr: "22 · 5 = 110", explica: "Multiplique pela altura.", status: "neutro" },
        { expr: "110 ÷ 2 = ?", explica: "Complete a divisão final.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área do trapézio?",
      opcoes: [{ nome: "55 cm²" }, { nome: "110 cm²" }, { nome: "22 cm²" }],
      respostaCerta: "55 cm²",
      feedbackAcerto: "🎯 (22 · 5) ÷ 2 = 110 ÷ 2 = 55 cm².",
      feedbackErro: "Some as bases (14+8=22), multiplique pela altura (22·5=110) e divida por 2: 110÷2=55 cm².",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um losango tem diagonais 10 cm e 6 cm. Qual é a área?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = (10 · 6) ÷ 2",
      passos: [
        { expr: "10 · 6 = 60", explica: "Multiplique as diagonais.", status: "neutro" },
        { expr: "60 ÷ 2 = ?", explica: "Complete a divisão.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área do losango?",
      opcoes: [{ nome: "30 cm²" }, { nome: "60 cm²" }, { nome: "16 cm²" }],
      respostaCerta: "30 cm²",
      feedbackAcerto: "🎯 (10 · 6) ÷ 2 = 60 ÷ 2 = 30 cm².",
      feedbackErro: "Multiplique as diagonais (10·6=60) e divida por 2: 60÷2=30 cm².",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma praça tem formato de quadrado de 20 m de lado, com um canteiro triangular de base 8 m e altura 5 m recortado de dentro para plantas.",
    problema: "Qual é a área de praça que sobra (sem o canteiro)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A praça − A canteiro",
      passos: [
        { expr: "A praça = 20 · 20 = 400 m²", explica: "Área total do quadrado.", status: "neutro" },
        { expr: "A canteiro = (8 · 5) ÷ 2 = 20 m²", explica: "Área do triângulo recortado.", status: "ok" },
        { expr: "A restante = 400 − 20 = 380 m²", explica: "Subtraio o recorte.", status: "ok", professor: "O canteiro é retirado da praça, então usamos subtração de áreas, exatamente como no lago dentro do jardim." },
      ],
      fatorada: "A restante = 380 m²",
      legenda: "Aplicação — praça",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área que sobra?",
      opcoes: [{ nome: "380 m²" }, { nome: "420 m²" }, { nome: "20 m²" }],
      respostaCerta: "380 m²",
      feedbackAcerto: "🎯 400 − 20 = 380 m², pois o canteiro foi retirado da praça.",
      feedbackErro: "Calcule a área total (400 m²) e subtraia o canteiro (20 m²): 400 − 20 = 380 m².",
    },
  },

  momento09_revisao: {
    pontos: [
      "Triângulo: A = (base · altura) ÷ 2.",
      "Trapézio: A = ((B + b) · altura) ÷ 2.",
      "Losango: A = (D · d) ÷ 2 (usa diagonais).",
      "Polígono regular: A = (perímetro · apótema) ÷ 2.",
      "Figura composta: some partes juntas, subtraia buracos/recortes.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Um triângulo tem base 8 cm e altura 6 cm. A área é:",
        opcoes: ["24 cm²", "48 cm²", "14 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 (8 · 6) ÷ 2 = 48 ÷ 2 = 24 cm².",
        feedbackErro: "Use A = (base · altura) ÷ 2: (8 · 6) ÷ 2 = 24 cm².",
      },
      {
        pergunta: "Um trapézio tem bases 9 cm e 5 cm e altura 4 cm. A área é:",
        opcoes: ["28 cm²", "56 cm²", "14 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 (9 + 5 = 14; 14 · 4 = 56; 56 ÷ 2 = 28 cm².",
        feedbackErro: "Some as bases (9+5=14), multiplique pela altura (14·4=56) e divida por 2: 28 cm².",
      },
      {
        pergunta: "Um losango tem diagonais 14 cm e 10 cm. A área é:",
        opcoes: ["70 cm²", "140 cm²", "24 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 (14 · 10) ÷ 2 = 140 ÷ 2 = 70 cm².",
        feedbackErro: "Multiplique as diagonais (14·10=140) e divida por 2: 70 cm².",
      },
      {
        pergunta: "Em uma figura composta, um retângulo tem um semicírculo RECORTADO (retirado). Para achar a área restante, você deve:",
        opcoes: ["Subtrair a área do semicírculo da área do retângulo", "Somar as duas áreas", "Dividir uma área pela outra"],
        correta: 0,
        feedbackAcerto: "🎉 Recorte/buraco sempre indica subtração de áreas.",
        feedbackErro: "Quando uma parte é retirada da figura, subtraímos: A restante = A total − A retirada.",
      },
      {
        pergunta: "Um hexágono regular tem perímetro 30 cm e apótema 4,3 cm. A área aproximada é:",
        opcoes: ["64,5 cm²", "129 cm²", "30 cm²"],
        correta: 0,
        feedbackAcerto: "🎉 (30 · 4,3) ÷ 2 = 129 ÷ 2 = 64,5 cm².",
        feedbackErro: "Use A = (perímetro · apótema) ÷ 2: (30 · 4,3) ÷ 2 = 64,5 cm².",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Meça e calcule um espaço de casa",
    materiais: ["Fita métrica ou trena", "Papel e caneta"],
    passos: [
      "Escolha um cômodo ou quintal com formato irregular (composto).",
      "Divida-o em figuras simples (retângulos, triângulos, etc.) e meça cada parte.",
      "Calcule a área de cada parte e some (ou subtraia, se houver recorte).",
      "Compare seu resultado com alguém da família.",
    ],
    registro: "📸 Foto do desenho do cômodo dividido em figuras, com as contas.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Arquiteto das Áreas" },
};
