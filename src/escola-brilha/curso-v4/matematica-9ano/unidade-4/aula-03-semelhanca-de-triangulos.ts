import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U4 — Semelhança de triângulos: casos AA, LAL, LLL;
 * achar lado desconhecido pela proporção.
 */
export const aula03_semelhancaDeTriangulos: AulaV4 = {
  slug: "u4-03-semelhanca-de-triangulos",
  titulo: "Triângulos Gêmeos em Tamanhos Diferentes",
  iconeTrilha: "🔺",
  bncc: ["EF09MA12"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Nem sempre precisa medir tudo",
    historia:
      "{NOME}, para saber se dois triângulos são 'gêmeos' em forma, você não precisa medir os três lados E os três ângulos. Às vezes 2 informações já bastam! Hoje você aprende os três atalhos que os matemáticos usam para provar semelhança de triângulos: AA, LAL e LLL.",
  },

  momento02_exploracao: {
    instrucao: "Observe dois triângulos com os mesmos ângulos, mas tamanhos diferentes.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        medidasLados: ["3 cm", "4 cm", "5 cm"],
        legenda: "Triângulo pequeno",
      },
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        medidasLados: ["6 cm", "8 cm", "10 cm"],
        legenda: "Triângulo grande",
      },
      {
        tipo: "tabela",
        titulo: "Comparando os lados correspondentes",
        cabecalhos: ["Lado", "Pequeno", "Grande", "Razão"],
        linhas: [
          { rotulo: "1", valores: ["menor", "3 cm", "6 cm", "6/3 = 2"] },
          { rotulo: "2", valores: ["médio", "4 cm", "8 cm", "8/4 = 2"] },
          { rotulo: "3", valores: ["maior", "5 cm", "10 cm", "10/5 = 2"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 As três razões deram 2. Os triângulos são semelhantes com razão de semelhança k = 2 — o caso LLL (Lado, Lado, Lado).",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se dois triângulos têm dois ângulos iguais cada, o terceiro ângulo também precisa ser igual?",
    pista: "Lembre: a soma dos ângulos internos de qualquer triângulo é sempre 180°.",
    revelacao: "Sim! Se dois ângulos são iguais, o terceiro é automaticamente igual (180° menos os outros dois). Por isso basta comparar 2 ângulos para garantir semelhança — é o caso AA (Ângulo, Ângulo).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Triângulo 1: 50°, 60°, x  |  Triângulo 2: 50°, 60°, y",
      passos: [
        { expr: "x = 180° − 50° − 60°", explica: "Soma dos ângulos internos é 180°.", status: "neutro" },
        { expr: "x = 70°", explica: "Terceiro ângulo do triângulo 1.", status: "ok" },
        { expr: "y = 180° − 50° − 60° = 70°", explica: "Mesmo cálculo para o triângulo 2.", status: "ok", professor: "Como os dois primeiros ângulos coincidem nos dois triângulos, a subtração dá exatamente o mesmo resultado para o terceiro ângulo. Por isso 2 ângulos iguais já garantem os 3 ângulos iguais." },
      ],
      fatorada: "x = y = 70° → os dois triângulos têm os 3 ângulos iguais",
      legenda: "Descoberta guiada — caso AA",
    },
  },

  momento04_explicacao: {
    titulo: "Os três casos de semelhança de triângulos",
    etapas: [
      {
        texto:
          "CASO AA (Ângulo–Ângulo): se dois ângulos de um triângulo são respectivamente iguais a dois ângulos de outro, os triângulos são semelhantes. É o caso mais usado, pois basta comparar ângulos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Triângulo ABC com ângulos 40° e 80°; triângulo DEF com ângulos 40° e 80°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "∠A = ∠D = 40°  e  ∠B = ∠E = 80°",
            passos: [
              { expr: "∠A = ∠D = 40°", explica: "Primeiro par de ângulos iguais.", status: "ok" },
              { expr: "∠B = ∠E = 80°", explica: "Segundo par de ângulos iguais.", status: "ok" },
              { expr: "logo ∠C = ∠F = 180° − 40° − 80° = 60°", explica: "Terceiro ângulo sai automaticamente.", status: "ok", professor: "Não precisei medir o terceiro ângulo nem nenhum lado: dois ângulos iguais já bastam para garantir que ABC ~ DEF (o símbolo ~ significa 'é semelhante a')." },
            ],
            fatorada: "△ABC ~ △DEF (caso AA)",
          },
          destaque: "AA é o atalho mais rápido: só 2 ângulos garantem semelhança.",
        },
      },
      {
        texto:
          "CASO LAL (Lado–Ângulo–Lado): se dois lados de um triângulo são proporcionais a dois lados de outro, E o ângulo ENTRE eles é igual, os triângulos são semelhantes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "△ABC: AB = 4, AC = 6, ∠A = 50°. △DEF: DE = 8, DF = 12, ∠D = 50°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "AB/DE = 4/8 = 0,5  e  AC/DF = 6/12 = 0,5",
            passos: [
              { expr: "4/8 = 0,5", explica: "Razão do 1º par de lados.", status: "neutro" },
              { expr: "6/12 = 0,5", explica: "Razão do 2º par de lados.", status: "neutro" },
              { expr: "0,5 = 0,5 ✓", explica: "Lados proporcionais.", status: "ok" },
              { expr: "∠A = ∠D = 50°", explica: "Ângulo ENTRE os lados é igual.", status: "ok", professor: "É essencial que o ângulo comparado seja exatamente o que fica ENTRE os dois lados usados na proporção — por isso o nome é Lado-Ângulo-Lado, na ordem certa." },
            ],
            fatorada: "△ABC ~ △DEF (caso LAL), k = 0,5",
          },
          destaque: "O ângulo tem que estar ENTRE os dois lados comparados.",
        },
      },
      {
        texto:
          "CASO LLL (Lado–Lado–Lado): se os três lados de um triângulo são proporcionais aos três lados de outro (mesma razão em todos), os triângulos são semelhantes — sem precisar checar ângulo nenhum.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "△ABC: 5, 7, 9 cm. △DEF: 10, 14, 18 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "10/5 = 14/7 = 18/9",
            passos: [
              { expr: "10/5 = 2", explica: "1º par de lados.", status: "neutro" },
              { expr: "14/7 = 2", explica: "2º par de lados.", status: "neutro" },
              { expr: "18/9 = 2", explica: "3º par de lados.", status: "ok", professor: "As três razões deram exatamente 2. Como TODAS coincidem, garanto semelhança pelo caso LLL, sem precisar saber nenhum ângulo dos triângulos." },
            ],
            fatorada: "△ABC ~ △DEF (caso LLL), k = 2",
          },
          destaque: "Se as 3 razões forem iguais, é semelhança garantida — sem olhar ângulos.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: △ABC ~ △DEF (caso AA). AB = 6 cm, BC = 9 cm, DE = 8 cm. Quanto mede EF?",
    resposta: "12 cm",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "AB/DE = BC/EF",
      passos: [
        { expr: "6/8 = 9/x", explica: "Monto a proporção com lados correspondentes.", status: "neutro", professor: "Como os triângulos são semelhantes, todos os pares de lados correspondentes mantêm a mesma razão. AB corresponde a DE, e BC corresponde a EF." },
        { expr: "6 · x = 8 · 9", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "6x = 72", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 72 ÷ 6 = 12", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "EF = 12 cm",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico a correspondência entre os vértices: A↔D, B↔E, C↔F.",
      "Monto a proporção AB/DE = BC/EF, ou seja, 6/8 = 9/x.",
      "Aplico a multiplicação cruzada: 6x = 72.",
      "Resolvo: x = 12 cm.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: △ABC ~ △DEF. AC = 5 cm, DF = 15 cm (razão k = 3). Se BC = 4 cm, quanto é EF?",
    dica: "A razão de semelhança é 3 (15÷5). Multiplique o lado correspondente do triângulo menor por 3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "k = DF/AC = 15/5 = 3",
      passos: [
        { expr: "k = 15/5 = 3", explica: "Calculo a razão de semelhança.", status: "neutro" },
        { expr: "EF = BC · k", explica: "Aplico a razão ao lado correspondente.", status: "neutro" },
        { expr: "EF = 4 · 3 = 12", explica: "Calculo o resultado.", status: "ok" },
      ],
      fatorada: "EF = 12 cm",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o valor de EF?",
      opcoes: [{ nome: "12 cm" }, { nome: "7 cm" }, { nome: "1,33 cm" }],
      respostaCerta: "12 cm",
      feedbackAcerto: "🎯 A razão é 3 (15÷5). EF = BC × 3 = 4 × 3 = 12 cm.",
      feedbackErro: "Primeiro ache k = DF/AC = 15/5 = 3. Depois multiplique BC por k: 4 × 3 = 12.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: △ABC ~ △MNP pelo caso LLL. Os lados de ABC são 4, 6, 8 cm e os de MNP são 6, 9, x cm (correspondendo na mesma ordem). Qual é x?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4/6 = 8/x",
      passos: [
        { expr: "razão = 6/4 = 1,5", explica: "Calculo a razão de semelhança pelo 1º par de lados.", status: "neutro" },
        { expr: "x = 8 · 1,5", explica: "Aplico a razão ao terceiro lado.", status: "neutro" },
        { expr: "x = 12", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "x = 12 cm",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o valor de x?",
      opcoes: [{ nome: "12 cm" }, { nome: "10 cm" }, { nome: "9 cm" }],
      respostaCerta: "12 cm",
      feedbackAcerto: "🎯 A razão é 1,5 (6÷4). x = 8 × 1,5 = 12 cm.",
      feedbackErro: "Calcule a razão com o par conhecido: 6/4 = 1,5. Depois multiplique 8 por 1,5, obtendo x = 12.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um arquiteto desenha dois triângulos de apoio numa treliça de telhado. Eles são semelhantes pelo caso AA.",
    problema: "O triângulo menor tem catetos 3 m e 4 m (hipotenusa 5 m). O triângulo maior, semelhante, tem o lado correspondente ao de 4 m medindo 10 m. Quais são os outros dois lados do triângulo maior?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "razão k = 10/4 = 2,5",
      passos: [
        { expr: "k = 10 ÷ 4 = 2,5", explica: "Calculo a razão de semelhança usando o par conhecido.", status: "neutro", professor: "Como os triângulos são semelhantes, a mesma razão k vale para TODOS os pares de lados correspondentes — não só para o par que já conhecemos." },
        { expr: "lado 1 = 3 · 2,5 = 7,5 m", explica: "Aplico k ao lado correspondente de 3 m.", status: "neutro" },
        { expr: "hipotenusa = 5 · 2,5 = 12,5 m", explica: "Aplico k à hipotenusa.", status: "ok" },
      ],
      fatorada: "Triângulo maior: 7,5 m, 10 m, 12,5 m",
      legenda: "Aplicação — treliça",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quais são os outros dois lados do triângulo maior?",
      opcoes: [{ nome: "7,5 m e 12,5 m" }, { nome: "6 m e 10 m" }, { nome: "8 m e 13 m" }],
      respostaCerta: "7,5 m e 12,5 m",
      feedbackAcerto: "🎯 k = 10÷4 = 2,5. Multiplicando 3 e 5 por 2,5: 7,5 m e 12,5 m.",
      feedbackErro: "Ache k dividindo os lados correspondentes conhecidos: 10÷4 = 2,5. Depois multiplique CADA outro lado (3 e 5) por 2,5.",
    },
  },

  momento09_revisao: {
    pontos: [
      "AA: dois ângulos iguais bastam — o terceiro sai de 180° menos os outros dois.",
      "LAL: dois lados proporcionais e o ângulo ENTRE eles igual.",
      "LLL: os três pares de lados com a mesma razão, sem checar ângulos.",
      "Em triângulos semelhantes, todo lado desconhecido se acha por proporção.",
      "A razão de semelhança k se aplica igualmente a TODOS os lados correspondentes.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "No caso AA de semelhança, é suficiente que:",
        opcoes: [
          "dois ângulos de um triângulo sejam iguais a dois do outro",
          "um lado seja igual a outro lado",
          "os três ângulos sejam diferentes",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Dois ângulos iguais já garantem o terceiro igual (soma 180°), logo os triângulos são semelhantes.",
        feedbackErro: "AA exige dois pares de ÂNGULOS iguais, não lados. Lembre: a soma dos ângulos internos é sempre 180°.",
      },
      {
        pergunta: "No caso LAL, o ângulo comparado deve estar:",
        opcoes: [
          "entre os dois lados usados na proporção",
          "oposto ao maior lado",
          "em qualquer posição do triângulo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 O ângulo precisa ficar ENTRE os dois lados comparados — por isso o nome Lado-Ângulo-Lado, nessa ordem.",
        feedbackErro: "No caso LAL o ângulo tem que estar exatamente ENTRE os dois lados comparados, não em qualquer posição.",
      },
      {
        pergunta: "△ABC ~ △DEF, razão k = 4. Se AB = 3 cm, quanto é DE?",
        opcoes: ["12 cm", "7 cm", "0,75 cm"],
        correta: 0,
        feedbackAcerto: "🎉 DE = AB × k = 3 × 4 = 12 cm.",
        feedbackErro: "Multiplique o lado do triângulo menor pela razão de semelhança: 3 × 4 = 12 cm.",
      },
      {
        pergunta: "△ABC tem lados 2, 3, 4 cm. △DEF tem lados 4, 6, 9 cm (mesma ordem correspondente). Os triângulos são semelhantes pelo caso LLL?",
        opcoes: [
          "Não, porque as razões 4/2, 6/3 e 9/4 não são todas iguais",
          "Sim, porque todos os lados aumentaram",
          "Sim, porque a soma dos lados é proporcional",
        ],
        correta: 0,
        feedbackAcerto: "🎉 4/2=2, 6/3=2, mas 9/4=2,25 ≠ 2. Como uma razão diverge, NÃO são semelhantes.",
        feedbackErro: "Calcule as três razões: 4/2=2, 6/3=2, 9/4=2,25. Como nem todas são iguais, os triângulos não são semelhantes pelo LLL.",
      },
      {
        pergunta: "△ABC ~ △DEF pelo caso LAL. AB = 5, AC = 7, ∠A = 60°; DE = 15, DF = 21, ∠D = 60°. A razão de semelhança é:",
        opcoes: ["3", "2", "1,4"],
        correta: 0,
        feedbackAcerto: "🎉 15/5 = 3 e 21/7 = 3 — as duas razões coincidem em 3.",
        feedbackErro: "Divida os lados correspondentes: 15/5 = 3 e 21/7 = 3. A razão de semelhança é 3.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçador de triângulos semelhantes",
    materiais: ["Régua ou trena", "Papel", "Caneta", "Transferidor (se tiver)"],
    passos: [
      "Encontre dois objetos triangulares em casa (fatia de pizza, régua triangular, telhado desenhado, etc.) de tamanhos diferentes.",
      "Meça os três lados de cada um.",
      "Calcule as três razões entre lados correspondentes e verifique: são iguais? Então são semelhantes pelo caso LLL!",
    ],
    registro: "📸 Foto dos dois triângulos medidos com as contas das razões.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre da Semelhança" },
};
