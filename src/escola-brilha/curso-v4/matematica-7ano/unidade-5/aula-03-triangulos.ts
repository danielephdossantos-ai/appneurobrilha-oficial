import type { AulaV4 } from "../../types";

/** Aula 03 · U5 — Triângulos: classificação, soma dos ângulos e condição de existência. */
export const aula03_triangulos: AulaV4 = {
  slug: "u5-03-triangulos",
  titulo: "O Segredo dos 180°",
  iconeTrilha: "🔺",
  bncc: ["EF07MA24", "EF07MA25"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "A figura mais forte do mundo",
    historia:
      "{NOME}, pontes, torres e telhados são cheios de triângulos — porque o triângulo é a única figura que não entorta. E ele guarda uma regra que nunca falha: não importa o formato, os três ângulos internos sempre somam 180°. Hoje você prova isso e aprende a descobrir se três medidas conseguem formar um triângulo.",
  },

  momento02_exploracao: {
    instrucao: "Todo triângulo pode ser classificado de dois jeitos: pelos lados e pelos ângulos.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        medidasLados: ["5 cm", "5 cm", "5 cm"],
        legenda: "Triângulo ABC equilátero: 3 lados iguais e 3 ângulos de 60°",
      },
      {
        tipo: "tabela",
        titulo: "Classificação",
        cabecalhos: ["Critério", "Nome", "Característica"],
        linhas: [
          { rotulo: "1", valores: ["lados", "equilátero", "3 lados iguais, 3 ângulos de 60°"] },
          { rotulo: "2", valores: ["lados", "isósceles", "2 lados iguais e 2 ângulos iguais"] },
          { rotulo: "3", valores: ["lados", "escaleno", "3 lados diferentes"] },
          { rotulo: "4", valores: ["ângulos", "acutângulo", "3 ângulos agudos"] },
          { rotulo: "5", valores: ["ângulos", "retângulo", "tem um ângulo de 90°"] },
          { rotulo: "6", valores: ["ângulos", "obtusângulo", "tem um ângulo maior que 90°"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Um triângulo nunca tem dois ângulos retos: 90 + 90 já fecha 180° e não sobraria nada para o terceiro." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a soma dos ângulos internos de QUALQUER triângulo é 180°?",
    pista: "Recorte as três pontas e junte todas num mesmo ponto.",
    revelacao: "Ao juntar as três pontas, elas formam exatamente uma linha reta — e linha reta vale 180°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Por que â + b̂ + ĉ = 180°",
      passos: [
        { expr: "traço uma paralela à base pelo vértice A", explica: "Construção auxiliar.", status: "neutro" },
        { expr: "b̂ reaparece em A (alternos internos)", explica: "Propriedade das paralelas.", status: "ok" },
        { expr: "ĉ reaparece em A (alternos internos)", explica: "Mesma propriedade.", status: "ok" },
        { expr: "b̂ + â + ĉ formam um ângulo raso", explica: "Estão sobre a paralela.", status: "ok" },
        { expr: "â + b̂ + ĉ = 180°", explica: "Demonstrado.", status: "ok", professor: "Essa é a demonstração clássica: usa exatamente o que você aprendeu na aula das paralelas. A geometria é encadeada, cada resultado novo nasce de um anterior." },
      ],
      fatorada: "â + b̂ + ĉ = 180°",
      legenda: "Descoberta guiada — demonstração",
    },
  },

  momento04_explicacao: {
    titulo: "Ângulo que falta, ângulo externo e condição de existência",
    etapas: [
      {
        texto: "ÂNGULO QUE FALTA: some os dois conhecidos e subtraia de 180°.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Triângulo com 47° e 68°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "47° + 68° + x = 180°",
            passos: [
              { expr: "47 + 68 = 115", explica: "Somo os conhecidos.", status: "neutro" },
              { expr: "x = 180 − 115", explica: "Subtraio de 180°.", status: "ok" },
              { expr: "x = 65°", explica: "Terceiro ângulo.", status: "ok" },
              { expr: "47 + 68 + 65 = 180 ✓", explica: "Verificação.", status: "ok" },
            ],
            fatorada: "x = 65°",
          },
          destaque: "Sempre 180° no total.",
        },
      },
      {
        texto: "ÂNGULO EXTERNO: é igual à soma dos dois internos não adjacentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Internos de 50° e 60°; qual o externo do terceiro vértice?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "externo = 50° + 60°",
            passos: [
              { expr: "interno restante = 180 − 110 = 70°", explica: "Terceiro ângulo.", status: "neutro" },
              { expr: "externo = 180 − 70 = 110°", explica: "Caminho longo.", status: "ok" },
              { expr: "externo = 50 + 60 = 110°", explica: "Caminho curto.", status: "ok", professor: "Os dois caminhos dão o mesmo valor porque o externo e o interno vizinho são suplementares. Use o caminho curto para ganhar tempo, mas entenda de onde ele vem." },
            ],
            fatorada: "externo = 110°",
          },
          destaque: "Externo = soma dos dois internos distantes.",
        },
      },
      {
        texto: "CONDIÇÃO DE EXISTÊNCIA: cada lado precisa ser menor que a soma dos outros dois.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Os lados 3 cm, 4 cm e 9 cm formam triângulo?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Teste 3, 4 e 9",
            passos: [
              { expr: "3 + 4 = 7", explica: "Soma dos dois menores.", status: "neutro" },
              { expr: "7 < 9", explica: "Não alcança o maior lado.", status: "x" },
              { expr: "não forma triângulo", explica: "Os lados não se encontram.", status: "x", professor: "Basta testar o maior lado contra a soma dos outros dois: se ele for maior ou igual, a figura não fecha. Não é preciso testar as três combinações." },
              { expr: "Já 3, 4 e 6: 3 + 4 = 7 > 6 ✓", explica: "Esse forma.", status: "ok" },
            ],
            fatorada: "3, 4 e 9 → impossível",
          },
          destaque: "Maior lado < soma dos outros dois.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: num triângulo isósceles, o ângulo diferente mede 40°. Quanto medem os outros dois?",
    resposta: "70° cada",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "40° + x + x = 180°",
      passos: [
        { expr: "isósceles ⇒ dois ângulos iguais", explica: "Propriedade.", status: "neutro" },
        { expr: "40 + 2x = 180", explica: "Monto a equação.", status: "ok" },
        { expr: "2x = 140", explica: "Passo o 40.", status: "ok" },
        { expr: "x = 70°", explica: "Divido por 2.", status: "ok" },
        { expr: "40 + 70 + 70 = 180 ✓", explica: "Verificação.", status: "ok", professor: "Num triângulo isósceles, os ângulos iguais ficam na base — opostos aos lados iguais. Identificar quem é quem evita erro no momento de montar a equação." },
      ],
      fatorada: "70° e 70°",
      legenda: "Brilha resolve",
    },
    passos: ["Reconheço que dois ângulos são iguais.", "Chamo cada um de x.", "Monto 40 + 2x = 180.", "Resolvo e verifico."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um triângulo tem 90° e 35°. Quanto mede o terceiro ângulo?",
    dica: "A soma dos três é 180°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "90° + 35° + x = 180°",
      passos: [
        { expr: "90 + 35 = 125", explica: "Somo os conhecidos.", status: "neutro" },
        { expr: "x = 180 − 125 = 55°", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "55°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "55°" }, { nome: "65°" }, { nome: "45°" }],
      respostaCerta: "55°",
      feedbackAcerto: "🎯 180 − 125 = 55.",
      feedbackErro: "Some primeiro os dois ângulos dados: 90 + 35 = 125. Depois 180 − 125 = 55°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: os lados 5 cm, 6 cm e 12 cm formam um triângulo?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Teste 5, 6 e 12",
      passos: [
        { expr: "5 + 6 = 11", explica: "Soma dos menores.", status: "neutro" },
        { expr: "11 < 12", explica: "Não alcança.", status: "x" },
      ],
      fatorada: "Não forma",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Não forma" }, { nome: "Forma" }, { nome: "Forma um retângulo" }],
      respostaCerta: "Não forma",
      feedbackAcerto: "🎯 5 + 6 = 11, menor que 12.",
      feedbackErro: "Para fechar o triângulo, os dois lados menores juntos precisam passar do maior. Aqui 5 + 6 = 11 é menor que 12, então as pontas não se encontram." },
  },

  momento08_aplicacao: {
    contexto:
      "Um telhado de duas águas tem a forma de um triângulo isósceles. O ângulo no topo (cumeeira) mede 110°.",
    problema: "Qual é a inclinação de cada lado do telhado em relação à horizontal?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "110° + 2x = 180°",
      passos: [
        { expr: "telhado isósceles ⇒ ângulos da base iguais", explica: "Modelo.", status: "neutro" },
        { expr: "110 + 2x = 180", explica: "Soma dos internos.", status: "ok" },
        { expr: "2x = 70", explica: "Passo o 110.", status: "ok" },
        { expr: "x = 35°", explica: "Inclinação de cada água.", status: "ok", professor: "Quanto maior o ângulo da cumeeira, menor a inclinação — e telhado pouco inclinado escoa mal a chuva. Por isso a geometria decide o projeto." },
      ],
      fatorada: "35° de cada lado",
      legenda: "Aplicação — telhado",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a inclinação:",
      opcoes: [{ nome: "35°" }, { nome: "70°" }, { nome: "55°" }],
      respostaCerta: "35°",
      feedbackAcerto: "🎯 (180 − 110) ÷ 2 = 35.",
      feedbackErro: "70° é a soma dos DOIS ângulos da base. Como eles são iguais, cada um vale 70 ÷ 2 = 35°.",
    },
  },

  momento09_revisao: {
    pontos: [
      "A soma dos ângulos internos de todo triângulo é 180°.",
      "Equilátero: 3 lados iguais e ângulos de 60°.",
      "Isósceles: 2 lados iguais e 2 ângulos iguais.",
      "Ângulo externo = soma dos dois internos não adjacentes.",
      "Existe triângulo só se o maior lado for menor que a soma dos outros dois.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Um triângulo tem 60° e 80°. O terceiro ângulo mede:", opcoes: ["40°", "50°", "60°"], correta: 0, feedbackAcerto: "🎉 180 − 140 = 40.", feedbackErro: "Some 60 + 80 = 140 e subtraia de 180: o terceiro ângulo é 40°." },
      { pergunta: "Cada ângulo de um triângulo equilátero mede:", opcoes: ["60°", "90°", "45°"], correta: 0, feedbackAcerto: "🎉 180 ÷ 3 = 60.", feedbackErro: "Os três ângulos são iguais e somam 180°, então cada um vale 180 ÷ 3 = 60°." },
      { pergunta: "Os lados 2, 3 e 8 cm formam triângulo?", opcoes: ["não", "sim", "só se for isósceles"], correta: 0, feedbackAcerto: "🎉 2 + 3 = 5, menor que 8.", feedbackErro: "Os dois menores somam 5, que não alcança o lado de 8 cm. A figura não fecha." },
      { pergunta: "Um triângulo retângulo tem um ângulo de 30°. O outro ângulo agudo mede:", opcoes: ["60°", "70°", "45°"], correta: 0, feedbackAcerto: "🎉 90 + 30 + 60 = 180.", feedbackErro: "Como um ângulo já é 90°, sobram 90° para os outros dois. Se um é 30°, o outro é 90 − 30 = 60°." },
      { pergunta: "Um ângulo externo vale 120° e um interno distante vale 45°. O outro interno distante vale:", opcoes: ["75°", "60°", "135°"], correta: 0, feedbackAcerto: "🎉 120 − 45 = 75.", feedbackErro: "O externo é a soma dos dois internos não adjacentes: 45 + x = 120, logo x = 75°." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Triângulos que sustentam",
    materiais: ["Canudos ou palitos", "Fita", "Papel"],
    passos: [
      "Monte um triângulo e um quadrado com palitos e fita.",
      "Empurre os dois de lado e veja qual entorta.",
      "Escreva por que as construções usam triângulos.",
    ],
    registro: "📸 Foto das duas figuras montadas e da conclusão escrita.",
  },
  recompensa: { xp: 240, moedas: 120, medalha: "Engenheiro do Triângulo" },
};
