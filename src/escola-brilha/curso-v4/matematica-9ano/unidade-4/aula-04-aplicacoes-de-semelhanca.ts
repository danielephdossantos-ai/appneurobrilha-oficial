import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U4 — Aplicações da semelhança: altura de prédio pela sombra,
 * mapas, ampliação/redução; efeito da razão k na área (área × k²).
 */
export const aula04_aplicacoesDeSemelhanca: AulaV4 = {
  slug: "u4-04-aplicacoes-de-semelhanca",
  titulo: "Semelhança no Mundo Real",
  iconeTrilha: "🏙️",
  bncc: ["EF09MA12", "EF09MA13"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Medir sem subir no prédio",
    historia:
      "{NOME}, como Tales de Mileto mediu a altura de uma pirâmide há 2500 anos SEM subir nela? Usando a sombra! Hoje você usa a mesma ideia para medir prédios, e descobre um segredo importante: quando um desenho dobra de tamanho, a ÁREA não dobra — ela quadruplica!",
  },

  momento02_exploracao: {
    instrucao: "Observe como a sombra de um poste pequeno se relaciona com a de um prédio grande, no mesmo instante.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Poste e prédio, mesma hora do dia",
        cabecalhos: ["Objeto", "Altura", "Sombra"],
        linhas: [
          { rotulo: "1", valores: ["Poste", "2 m", "3 m"] },
          { rotulo: "2", valores: ["Prédio", "x", "18 m"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 No mesmo instante, o Sol forma o mesmo ângulo em tudo. Poste e sua sombra formam um triângulo semelhante ao do prédio e sua sombra!",
      },
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "2/3 = x/18",
        passos: [
          { expr: "2/3 = x/18", explica: "Monto a proporção altura/sombra.", status: "neutro" },
          { expr: "2 · 18 = 3 · x", explica: "Multiplicação cruzada.", status: "neutro" },
          { expr: "36 = 3x", explica: "Calculo o produto.", status: "neutro" },
          { expr: "x = 12", explica: "Isolo x.", status: "ok" },
        ],
        fatorada: "O prédio mede 12 m",
        legenda: "Altura pela sombra",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se eu dobrar o lado de um quadrado, a área também dobra?",
    pista: "Calcule a área de um quadrado de lado 2 e de um quadrado de lado 4, e compare.",
    revelacao: "Não! A área quadruplica (fica 4 vezes maior), não dobra. Quando os lados multiplicam por k, a área multiplica por k².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Quadrado lado 2 → quadrado lado 4 (k = 2)",
      passos: [
        { expr: "Área 1 = 2² = 4", explica: "Área do quadrado pequeno.", status: "neutro" },
        { expr: "Área 2 = 4² = 16", explica: "Área do quadrado grande.", status: "neutro" },
        { expr: "16 ÷ 4 = 4 = 2²", explica: "A área multiplicou por k² = 4, não por k = 2.", status: "ok", professor: "Isso acontece porque a área é uma medida de DUAS dimensões (comprimento × largura). Se cada dimensão multiplica por k, a área multiplica por k · k = k²." },
      ],
      fatorada: "Área multiplica por k²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Semelhança aplicada: sombra, mapas e área",
    etapas: [
      {
        texto:
          "MÉTODO DA SOMBRA: no mesmo instante e local, o Sol forma o mesmo ângulo com o chão para qualquer objeto. Isso cria triângulos semelhantes entre 'objeto + sua sombra' e 'objeto de referência + sua sombra'.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Uma vara de 1,5 m projeta sombra de 2 m. Uma árvore projeta sombra de 10 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1,5/2 = h/10",
            passos: [
              { expr: "1,5/2 = h/10", explica: "Monto a proporção altura/sombra.", status: "neutro" },
              { expr: "1,5 · 10 = 2 · h", explica: "Multiplicação cruzada.", status: "neutro" },
              { expr: "15 = 2h", explica: "Calculo o produto.", status: "neutro" },
              { expr: "h = 7,5", explica: "Isolo h.", status: "ok", professor: "A árvore mede 7,5 m. Repare que não precisamos escalar nenhuma escada — a proporção entre altura e sombra resolveu tudo." },
            ],
            fatorada: "Altura da árvore = 7,5 m",
          },
          destaque: "altura/sombra é constante no mesmo instante para qualquer objeto vertical.",
        },
      },
      {
        texto:
          "MAPAS E PLANTAS: usam uma ESCALA fixa (razão constante) entre desenho e realidade. A mesma multiplicação cruzada resolve distâncias reais a partir do desenho, ou vice-versa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escala 1:25000. No mapa, a distância entre duas cidades é 8 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1/25000 = 8/x",
            passos: [
              { expr: "1/25000 = 8/x", explica: "Monto a proporção da escala.", status: "neutro" },
              { expr: "x = 8 · 25000", explica: "Multiplicação cruzada (denominador 1 simplifica direto).", status: "neutro" },
              { expr: "x = 200000 cm", explica: "Calculo em centímetros.", status: "neutro" },
              { expr: "x = 2000 m = 2 km", explica: "Converto para km.", status: "ok" },
            ],
            fatorada: "Distância real = 2 km",
          },
          destaque: "Escala 1:N significa 1 cm no mapa = N cm na realidade.",
        },
      },
      {
        texto:
          "EFEITO DA RAZÃO k NA ÁREA: se uma figura é ampliada/reduzida por um fator k (todos os comprimentos multiplicam por k), a ÁREA da figura multiplica por k², não por k.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Um terreno retangular de 4 m × 6 m (área 24 m²) é ampliado com razão k = 3.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Novo retângulo: 12 m × 18 m",
            passos: [
              { expr: "novos lados = 4·3 = 12 m e 6·3 = 18 m", explica: "Multiplico cada lado por k = 3.", status: "neutro" },
              { expr: "nova área = 12 · 18 = 216 m²", explica: "Calculo a área nova diretamente.", status: "neutro" },
              { expr: "216 ÷ 24 = 9 = 3²", explica: "A área multiplicou por k² = 9, não por k = 3.", status: "ok", professor: "Confirma a regra: área nova = área antiga × k². Aqui, 24 × 9 = 216, batendo com o cálculo direto." },
            ],
            fatorada: "Área multiplica por k² = 9",
          },
          destaque: "Comprimento multiplica por k; ÁREA multiplica por k².",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma pessoa de 1,8 m projeta sombra de 1,2 m. No mesmo instante, um poste projeta sombra de 4 m. Qual a altura do poste?",
    resposta: "6 m",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1,8/1,2 = h/4",
      passos: [
        { expr: "1,8/1,2 = h/4", explica: "Monto a proporção altura/sombra.", status: "neutro", professor: "Uso a pessoa como referência porque sei sua altura e sua sombra no mesmo instante que a sombra do poste foi medida." },
        { expr: "1,8 · 4 = 1,2 · h", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "7,2 = 1,2h", explica: "Calculo o produto.", status: "neutro" },
        { expr: "h = 7,2 ÷ 1,2 = 6", explica: "Isolo h.", status: "ok" },
      ],
      fatorada: "O poste mede 6 m",
      legenda: "Brilha resolve",
    },
    passos: [
      "Uso a pessoa como referência: altura 1,8 m, sombra 1,2 m.",
      "Monto a proporção 1,8/1,2 = h/4, com h a altura do poste.",
      "Aplico a multiplicação cruzada: 1,8 · 4 = 1,2 · h.",
      "Resolvo: h = 7,2 ÷ 1,2 = 6 m.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um mapa tem escala 1:1000. Uma rua mede 4,5 cm no mapa. Quantos metros mede na realidade?",
    dica: "Multiplique 4,5 cm por 1000 para achar centímetros reais, depois converta para metros (divida por 100).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/1000 = 4,5/x",
      passos: [
        { expr: "x = 4,5 · 1000", explica: "Aplico a escala.", status: "neutro" },
        { expr: "x = 4500 cm", explica: "Resultado em centímetros.", status: "neutro" },
        { expr: "4500 cm = 45 m", explica: "Converto para metros.", status: "ok" },
      ],
      fatorada: "45 m",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos metros mede a rua na realidade?",
      opcoes: [{ nome: "45 m" }, { nome: "4,5 m" }, { nome: "450 m" }],
      respostaCerta: "45 m",
      feedbackAcerto: "🎯 4,5 × 1000 = 4500 cm = 45 m.",
      feedbackErro: "Multiplique 4,5 cm pela escala 1000: 4500 cm. Depois divida por 100 para virar metros: 45 m.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um quadrado de lado 5 cm é ampliado com razão k = 4. Qual é a área do quadrado ampliado?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área original = 5² = 25 cm²",
      passos: [
        { expr: "novo lado = 5 · 4 = 20 cm", explica: "Multiplico o lado por k.", status: "neutro" },
        { expr: "nova área = 20² = 400 cm²", explica: "Calculo a área do quadrado ampliado.", status: "neutro" },
        { expr: "400 ÷ 25 = 16 = 4²", explica: "Confirma: área multiplicou por k².", status: "ok" },
      ],
      fatorada: "Nova área = 400 cm²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área do quadrado ampliado?",
      opcoes: [{ nome: "400 cm²" }, { nome: "100 cm²" }, { nome: "80 cm²" }],
      respostaCerta: "400 cm²",
      feedbackAcerto: "🎯 O lado novo é 20 cm (5×4); a área é 20² = 400 cm².",
      feedbackErro: "Primeiro ache o novo lado: 5 × 4 = 20 cm. Depois calcule a área: 20² = 400 cm² (não é 25×4=100).",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma fábrica de brinquedos faz uma miniatura de carro com razão de redução k = 1/20 em relação ao carro real.",
    problema: "A lateral do carro real tem área de 4 m². Qual é a área da lateral correspondente na miniatura?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "área miniatura = área real × k²",
      passos: [
        { expr: "k = 1/20", explica: "Razão de redução dos comprimentos.", status: "neutro", professor: "Como é uma miniatura, k é uma fração menor que 1 — reduz o tamanho. Mas a regra da área continua a mesma: multiplica por k², nunca por k." },
        { expr: "k² = (1/20)² = 1/400", explica: "Calculo k ao quadrado.", status: "neutro" },
        { expr: "área miniatura = 4 · 1/400", explica: "Aplico a razão à área.", status: "neutro" },
        { expr: "= 4/400 = 0,01 m²", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "Área da miniatura = 0,01 m² = 100 cm²",
      legenda: "Aplicação — miniatura de carro",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área da lateral da miniatura?",
      opcoes: [{ nome: "0,01 m²" }, { nome: "0,2 m²" }, { nome: "0,05 m²" }],
      respostaCerta: "0,01 m²",
      feedbackAcerto: "🎯 k² = (1/20)² = 1/400. Área miniatura = 4 × 1/400 = 0,01 m².",
      feedbackErro: "Eleve a razão ao quadrado primeiro: (1/20)² = 1/400. Depois multiplique pela área real: 4 × 1/400 = 0,01 m².",
    },
  },

  momento09_revisao: {
    pontos: [
      "Objeto e sombra, no mesmo instante, formam triângulos semelhantes: altura/sombra é constante.",
      "Escala de mapa é uma razão fixa: 1 cm do desenho = N cm da realidade.",
      "Ao ampliar/reduzir com razão k, os COMPRIMENTOS multiplicam por k.",
      "Mas a ÁREA multiplica por k² — nunca esqueça o quadrado!",
      "Sempre monte a proporção com a multiplicação cruzada para achar o desconhecido.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma vara de 1 m projeta sombra de 1,5 m. Um prédio projeta sombra de 30 m no mesmo instante. Qual a altura do prédio?",
        opcoes: ["20 m", "45 m", "15 m"],
        correta: 0,
        feedbackAcerto: "🎉 1/1,5 = h/30 → 1,5h = 30 → h = 20 m.",
        feedbackErro: "Monte 1/1,5 = h/30, multiplique em cruz: 1,5h = 30, então h = 20.",
      },
      {
        pergunta: "Numa escala 1:200, uma sala de 3 cm no desenho mede na realidade:",
        opcoes: ["6 m", "600 m", "0,6 m"],
        correta: 0,
        feedbackAcerto: "🎉 3 × 200 = 600 cm = 6 m.",
        feedbackErro: "Multiplique 3 cm por 200: 600 cm, que é igual a 6 metros.",
      },
      {
        pergunta: "Se o lado de um quadrado triplica (k = 3), a área do quadrado:",
        opcoes: ["fica 9 vezes maior", "fica 3 vezes maior", "fica 6 vezes maior"],
        correta: 0,
        feedbackAcerto: "🎉 A área multiplica por k² = 3² = 9.",
        feedbackErro: "A área não multiplica pelo mesmo k dos lados — multiplica por k². Como k=3, a área fica 3²=9 vezes maior.",
      },
      {
        pergunta: "Um terreno de 10 m² é reduzido em uma planta com razão k = 1/5. Qual é a área na planta?",
        opcoes: ["0,4 m²", "2 m²", "0,2 m²"],
        correta: 0,
        feedbackAcerto: "🎉 k² = 1/25. Área = 10 × 1/25 = 0,4 m².",
        feedbackErro: "Eleve k ao quadrado: (1/5)² = 1/25. Depois multiplique pela área original: 10 × 1/25 = 0,4 m².",
      },
      {
        pergunta: "Para medir a altura de um prédio pelo método da sombra, é fundamental que:",
        opcoes: [
          "as medidas de objeto e prédio sejam feitas no MESMO instante do dia",
          "o prédio esteja pintado de branco",
          "a sombra do prédio seja maior que sua altura",
        ],
        correta: 0,
        feedbackAcerto: "🎉 No mesmo instante, o ângulo do Sol é igual para todos os objetos, garantindo triângulos semelhantes.",
        feedbackErro: "O que garante a semelhança dos triângulos é medir tudo no MESMO instante — assim o ângulo do Sol é o mesmo para os dois objetos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Missão: minha própria sombra",
    materiais: ["Fita métrica ou trena", "Papel", "Caneta", "Um dia de sol"],
    passos: [
      "Meça sua altura e a sua sombra no mesmo instante.",
      "Meça a sombra de um objeto alto de casa ou da rua (poste, árvore, muro).",
      "Use a proporção altura/sombra para calcular a altura do objeto e mostre a conta para a família.",
    ],
    registro: "📸 Foto de você e sua sombra ao lado da conta feita no papel.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Topógrafo Mirim" },
};
