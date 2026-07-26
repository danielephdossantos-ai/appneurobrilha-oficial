import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U6 — Circunferência: raio, diâmetro, corda, arco;
 * ângulo central e ângulo inscrito.
 */
export const aula01_circunferenciaAngulos: AulaV4 = {
  slug: "u6-01-circunferencia-angulos",
  titulo: "A Roda-Gigante: Raio, Diâmetro e Ângulos",
  iconeTrilha: "🎡",
  bncc: ["EF09MA11"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "A roda-gigante é um círculo gigante",
    historia:
      "{NOME}, você já reparou que toda roda-gigante, toda roda de bicicleta e todo relógio são círculos? Hoje o Brilha vai te mostrar os nomes das partes de uma circunferência e um segredo: o ângulo visto do CENTRO é sempre o DOBRO do ângulo visto da BORDA.",
  },

  momento02_exploracao: {
    instrucao: "Observe o círculo: o centro é O, e dele saem os raios até a borda.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "circulo",
        legenda: "Circunferência com centro O",
      },
      {
        tipo: "tabela",
        titulo: "Partes da circunferência",
        cabecalhos: ["Nome", "O que é"],
        linhas: [
          { rotulo: "1", valores: ["Raio (r)", "Do centro até a borda"] },
          { rotulo: "2", valores: ["Diâmetro (d)", "De um lado ao outro, passando pelo centro (d = 2r)"] },
          { rotulo: "3", valores: ["Corda", "Une dois pontos da borda, sem passar pelo centro"] },
          { rotulo: "4", valores: ["Arco", "Um \"pedaço\" da borda, entre dois pontos"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Circunferência é a LINHA da borda. Círculo é a REGIÃO cheia, de dentro. Não são a mesma coisa!",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um ângulo central mede 80°. Quanto mede o ângulo inscrito que \"enxerga\" o mesmo arco?",
    pista: "Ângulo central tem o vértice NO centro O. Ângulo inscrito tem o vértice NA borda, e os dois \"olham\" para o mesmo arco.",
    revelacao: "O ângulo inscrito vale exatamente a METADE do ângulo central: 80° ÷ 2 = 40°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ângulo central = 80°",
      passos: [
        { expr: "Ângulo central: vértice em O", explica: "Olha o arco de dentro do centro.", status: "neutro", professor: "O ângulo central é formado por dois raios que saem do centro O até dois pontos da borda." },
        { expr: "Ângulo inscrito: vértice na borda", explica: "Olha o MESMO arco, mas de um ponto da borda.", status: "neutro" },
        { expr: "inscrito = central ÷ 2", explica: "Regra do ângulo inscrito.", status: "ok" },
        { expr: "80° ÷ 2 = 40°", explica: "Substituo o valor.", status: "ok", professor: "Essa relação vale sempre que os dois ângulos enxergam o mesmo arco. É uma das propriedades mais usadas em geometria de círculo." },
      ],
      fatorada: "Ângulo inscrito = 40°",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Raio, diâmetro, corda, arco e os dois ângulos",
    etapas: [
      {
        texto:
          "RAIO (r) liga o centro a qualquer ponto da borda. DIÂMETRO (d) é a maior corda: atravessa o centro e vale o dobro do raio: d = 2r.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma roda tem raio r = 15 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "d = 2 · r",
            passos: [
              { expr: "d = 2 · r", explica: "Fórmula do diâmetro.", status: "neutro" },
              { expr: "d = 2 · 15", explica: "Substituo r = 15 cm.", status: "ok" },
              { expr: "d = 30 cm", explica: "Resultado com unidade.", status: "ok", professor: "O diâmetro sempre passa pelo centro e liga dois pontos opostos da borda — por isso é o dobro do raio." },
            ],
            fatorada: "d = 30 cm",
          },
          destaque: "d = 2r sempre, em qualquer círculo.",
        },
      },
      {
        texto:
          "CORDA é qualquer segmento que une dois pontos da borda, sem precisar passar pelo centro. Toda corda que passa pelo centro é, na verdade, um diâmetro — o maior tipo de corda que existe.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma corda AB não passa pelo centro; já o segmento CD passa pelo centro.",
          visualMat: {
            tipo: "figuraPlana",
            forma: "circulo",
            legenda: "AB é corda; CD é diâmetro (corda que passa por O)",
          },
          destaque: "Todo diâmetro é corda, mas nem toda corda é diâmetro.",
        },
      },
      {
        texto:
          "ARCO é um \"pedaço\" da linha da borda, entre dois pontos. O ÂNGULO CENTRAL tem vértice no centro O e \"abre\" um arco. O ÂNGULO INSCRITO tem vértice na própria borda.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um arco corresponde a um ângulo central de 100°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Central = 100°",
            passos: [
              { expr: "Central = 100°", explica: "Dado do problema.", status: "neutro" },
              { expr: "Inscrito = 100° ÷ 2", explica: "Aplico a regra.", status: "ok" },
              { expr: "Inscrito = 50°", explica: "Resultado.", status: "ok", professor: "Cuidado: a regra só vale quando os dois ângulos enxergam exatamente o mesmo arco. Se mudar o arco, muda a conta." },
            ],
            fatorada: "Ângulo inscrito = 50°",
          },
          destaque: "Ângulo inscrito é sempre METADE do central que enxerga o mesmo arco.",
        },
      },
      {
        texto:
          "Caso especial: quando o arco é uma SEMICIRCUNFERÊNCIA (metade do círculo), o ângulo central é 180°. Logo, todo ângulo inscrito nesse arco vale 180° ÷ 2 = 90° — sempre um ângulo reto!",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um triângulo inscrito com um lado sendo o diâmetro.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Arco = semicircunferência",
            passos: [
              { expr: "Central = 180°", explica: "Meia volta.", status: "neutro" },
              { expr: "Inscrito = 180° ÷ 2", explica: "Regra do inscrito.", status: "ok" },
              { expr: "Inscrito = 90°", explica: "Ângulo reto!", status: "ok", professor: "Esse resultado é famoso: todo triângulo com um lado igual ao diâmetro tem ângulo reto no vértice oposto." },
            ],
            fatorada: "Ângulo inscrito = 90°",
          },
          destaque: "Diâmetro sempre \"vê\" ângulos inscritos de 90°.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: o ângulo central de um arco mede 120°. Qual o ângulo inscrito que enxerga esse mesmo arco?",
    resposta: "60°",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Central = 120°",
      passos: [
        { expr: "inscrito = central ÷ 2", explica: "Regra geral.", status: "neutro" },
        { expr: "inscrito = 120° ÷ 2", explica: "Substituo o valor dado.", status: "ok" },
        { expr: "inscrito = 60°", explica: "Resultado final.", status: "ok", professor: "Divido por 2 porque o ângulo inscrito enxerga o arco de um ponto da borda, e essa visão é sempre metade da visão do centro." },
      ],
      fatorada: "Ângulo inscrito = 60°",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico que os dois ângulos enxergam o mesmo arco.",
      "Aplico a regra: inscrito = central ÷ 2.",
      "120° ÷ 2 = 60°.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: o ângulo central de um arco mede 70°. Qual o ângulo inscrito?",
    dica: "Divida o ângulo central por 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Central = 70°",
      passos: [
        { expr: "70° ÷ 2 = ?", explica: "Complete a divisão.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o ângulo inscrito?",
      opcoes: [{ nome: "35°" }, { nome: "140°" }, { nome: "70°" }],
      respostaCerta: "35°",
      feedbackAcerto: "🎯 70° ÷ 2 = 35°. O inscrito é sempre metade do central.",
      feedbackErro: "Divida o ângulo central por 2: 70° ÷ 2 = 35°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma roda tem diâmetro d = 24 cm. Qual é o raio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "d = 24 cm",
      passos: [
        { expr: "r = d ÷ 2", explica: "Fórmula inversa do diâmetro.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o raio?",
      opcoes: [{ nome: "12 cm" }, { nome: "48 cm" }, { nome: "24 cm" }],
      respostaCerta: "12 cm",
      feedbackAcerto: "🎯 r = d ÷ 2 = 24 ÷ 2 = 12 cm.",
      feedbackErro: "O raio é metade do diâmetro: 24 ÷ 2 = 12 cm.",
    },
  },

  momento08_aplicacao: {
    contexto: "Numa roda-gigante, dois carrinhos A e B estão presos por raios que formam um ângulo central de 150° no centro O.",
    problema: "Uma pessoa parada na borda, no ponto C, vê os carrinhos A e B sob que ângulo (inscrito)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Central = 150°",
      passos: [
        { expr: "inscrito = 150° ÷ 2", explica: "Aplico a regra do ângulo inscrito.", status: "neutro" },
        { expr: "inscrito = 75°", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "Ângulo visto por C = 75°",
      legenda: "Aplicação — roda-gigante",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual ângulo a pessoa em C enxerga?",
      opcoes: [{ nome: "75°" }, { nome: "150°" }, { nome: "300°" }],
      respostaCerta: "75°",
      feedbackAcerto: "🎯 150° ÷ 2 = 75°. O ângulo inscrito é sempre metade do central.",
      feedbackErro: "Divida por 2: 150° ÷ 2 = 75°. Esse é o ângulo inscrito que enxerga o mesmo arco.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Raio liga o centro à borda; diâmetro é o dobro do raio (d = 2r).",
      "Corda une dois pontos da borda; diâmetro é a maior corda.",
      "Arco é um pedaço da borda entre dois pontos.",
      "Ângulo inscrito = ângulo central ÷ 2, quando enxergam o mesmo arco.",
      "Ângulo inscrito num arco de semicircunferência (180°) é sempre 90°.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Se o raio de um círculo é 9 cm, o diâmetro é:",
        opcoes: ["18 cm", "4,5 cm", "9 cm"],
        correta: 0,
        feedbackAcerto: "🎉 d = 2r = 2 · 9 = 18 cm.",
        feedbackErro: "Diâmetro é o dobro do raio: d = 2 · 9 = 18 cm.",
      },
      {
        pergunta: "Uma corda que passa pelo centro do círculo é chamada de:",
        opcoes: ["Diâmetro", "Raio", "Arco"],
        correta: 0,
        feedbackAcerto: "🎉 Toda corda que passa pelo centro é o diâmetro — a maior corda possível.",
        feedbackErro: "Corda que passa pelo centro tem nome próprio: diâmetro.",
      },
      {
        pergunta: "Um ângulo central mede 60°. O ângulo inscrito que enxerga o mesmo arco mede:",
        opcoes: ["30°", "60°", "120°"],
        correta: 0,
        feedbackAcerto: "🎉 60° ÷ 2 = 30°.",
        feedbackErro: "O inscrito é sempre metade do central: 60° ÷ 2 = 30°.",
      },
      {
        pergunta: "Um triângulo está inscrito num círculo e um dos lados é o diâmetro. O ângulo oposto a esse lado mede:",
        opcoes: ["90°", "45°", "180°"],
        correta: 0,
        feedbackAcerto: "🎉 Diâmetro corresponde a arco de 180°, então o inscrito é 180° ÷ 2 = 90°.",
        feedbackErro: "Quando o lado é o diâmetro, o ângulo central do arco é 180°, e o inscrito é a metade: 90°.",
      },
      {
        pergunta: "O ângulo inscrito de um arco mede 55°. O ângulo central desse mesmo arco mede:",
        opcoes: ["110°", "27,5°", "55°"],
        correta: 0,
        feedbackAcerto: "🎉 Se o inscrito é metade, o central é o dobro: 55° · 2 = 110°.",
        feedbackErro: "Para achar o central, faça o caminho inverso: multiplique o inscrito por 2: 55° · 2 = 110°.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos círculos em casa",
    materiais: ["Régua ou fita métrica", "Objetos redondos (prato, tampa, roda)", "Papel e caneta"],
    passos: [
      "Meça o diâmetro de 3 objetos redondos da casa.",
      "Calcule o raio de cada um (divida o diâmetro por 2).",
      "Desenhe um círculo e marque nele: raio, diâmetro, uma corda e um arco.",
    ],
    registro: "📸 Foto da tabela com objeto, diâmetro e raio calculado.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Guardião da Circunferência" },
};
