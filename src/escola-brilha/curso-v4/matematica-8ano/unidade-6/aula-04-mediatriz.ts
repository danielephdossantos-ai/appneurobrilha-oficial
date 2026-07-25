import type { AulaV4 } from "../../types";

export const aula04_mediatriz: AulaV4 = {
  slug: "u6-04-mediatriz",
  titulo: "Mediatriz e bissetriz",
  iconeTrilha: "📐",
  bncc: ["EF08MA16"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Duas construções que aparecem em TUDO",
    historia:
      "{NOME}, se você precisa achar um ponto EQUIDISTANTE de dois lugares, ou dividir um ângulo em duas partes iguais, duas construções resolvem: a MEDIATRIZ e a BISSETRIZ. Elas aparecem em GPS, mapas, construção civil e videogames.",
  },
  momento02_exploracao: {
    instrucao: "As duas construções lado a lado:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Definições",
        cabecalhos: ["Nome", "Age sobre", "Propriedade"],
        linhas: [
          { rotulo: "Mediatriz", valores: ["Segmento AB", "Reta ⊥ ao segmento, no ponto médio"] },
          { rotulo: "Bissetriz", valores: ["Ângulo ∠AOB", "Reta que divide o ângulo ao meio"] },
        ],
      },
      { tipo: "texto", texto: "Mediatriz → equidistante das PONTAS. Bissetriz → equidistante dos LADOS.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que TODO ponto da mediatriz de AB tem em comum?",
    pista: "Meça a distância desse ponto até A e até B.",
    revelacao: "Toda essa distância é IGUAL. Mediatriz = lugar dos pontos equidistantes das extremidades.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ponto P na mediatriz de AB",
      passos: [
        { expr: "PA = distância de P até A", explica: "Medida 1.", status: "neutro" },
        { expr: "PB = distância de P até B", explica: "Medida 2.", status: "neutro" },
        { expr: "PA = PB", explica: "Sempre, para qualquer P na mediatriz.", status: "ok" },
        { expr: "Mediatriz ⊥ AB no ponto médio M", explica: "M é o meio de AB; PM ⊥ AB.", status: "ok" },
      ],
      fatorada: "PA = PB, sempre.",
    },
  },
  momento04_explicacao: {
    titulo: "Propriedades e como usar",
    etapas: [
      {
        texto: "MEDIATRIZ — a reta perpendicular ao segmento AB que passa pelo ponto médio M.",
        exemploReal: {
          contexto: "AB = 10 cm. Ponto médio M = 5 cm de cada lado. Ponto P na mediatriz, a 4 cm de M.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Achar PA (e PB)",
            passos: [
              { expr: "AM = MB = 5 cm", explica: "M é o meio.", status: "neutro" },
              { expr: "PM = 4 cm, PM ⊥ AB", explica: "Triângulo retângulo PMA.", status: "neutro" },
              { expr: "PA² = PM² + AM² = 4² + 5² = 41", explica: "Pitágoras.", status: "neutro" },
              { expr: "PA = √41 ≈ 6,4 cm", explica: "", status: "ok" },
              { expr: "PB = √41 ≈ 6,4 cm", explica: "Igual, por simetria.", status: "ok",
                professor: "A prova formal usa o caso LAL: os triângulos PMA e PMB têm PM comum, o ângulo de 90° e AM = MB. Portanto PA = PB." },
            ],
            fatorada: "PA = PB.",
          },
          destaque: "PA = PB, sempre.",
        },
      },
      {
        texto: "BISSETRIZ — a reta que sai do vértice e divide o ângulo em duas partes iguais.",
        exemploReal: {
          contexto: "Ângulo ∠AOB de 80°. A bissetriz cria 40° + 40°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "∠AOB = 80°",
            passos: [
              { expr: "Bissetriz divide o ângulo ao meio", explica: "Definição.", status: "neutro" },
              { expr: "80° ÷ 2 = 40°", explica: "", status: "neutro" },
              { expr: "Cada metade = 40°", explica: "", status: "ok" },
              { expr: "Q na bissetriz → dist(Q, OA) = dist(Q, OB)", explica: "Distância perpendicular aos lados.", status: "ok",
                professor: "É a definição de bissetriz interna. Todo ponto dela é equidistante dos DOIS lados do ângulo — o mesmo modo como o incentro de um triângulo (cruzamento das 3 bissetrizes) é o centro do círculo inscrito." },
            ],
            fatorada: "Divide 80° em 40° + 40°.",
          },
          destaque: "Equidistante dos LADOS do ângulo.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: P está na mediatriz de AB e PA = 6 cm. Quanto vale PB?",
    resposta: "PB = 6 cm.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P na mediatriz, PA = 6",
      passos: [
        { expr: "Propriedade: PA = PB", explica: "Todo ponto da mediatriz.", status: "neutro" },
        { expr: "6 = PB", explica: "Substituindo.", status: "neutro" },
        { expr: "PB = 6 cm", explica: "", status: "ok" },
      ],
      fatorada: "PB = 6 cm",
    },
    passos: ["Mediatriz garante PA = PB.", "Como PA = 6, PB = 6."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: ângulo de 80° dividido pela bissetriz. Quanto vale cada parte?",
    dica: "Bissetriz divide ao meio: ÷ 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "∠ = 80°",
      passos: [
        { expr: "Cada = ∠ ÷ 2", explica: "", status: "neutro" },
        { expr: "= 80° ÷ 2", explica: "", status: "neutro" },
        { expr: "= 40°", explica: "", status: "ok" },
      ],
      fatorada: "40°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Cada parte =",
      opcoes: [{ nome: "40°" }, { nome: "80°" }, { nome: "160°" }],
      respostaCerta: "40°",
      feedbackAcerto: "🎯",
      feedbackErro: "Dividir por 2, não dobrar.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Se PA = 5 e P está na mediatriz de AB, então PB =",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "PA = 5, P na mediatriz",
      passos: [
        { expr: "PA = PB", explica: "Propriedade.", status: "neutro" },
        { expr: "PB = 5", explica: "", status: "ok" },
      ],
      fatorada: "PB = 5",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "PB =",
      opcoes: [{ nome: "5" }, { nome: "10" }, { nome: "2,5" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 Equidistante.",
      feedbackErro: "Igual a PA.",
    },
  },
  momento08_aplicacao: {
    contexto: "Na vida real: a prefeitura quer construir UMA escola EXATAMENTE à mesma distância dos bairros A e B.",
    problema: "Em qual lugar geométrico ela deve ficar?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Escola equidistante de A e B",
      passos: [
        { expr: "Precisa: dist(escola, A) = dist(escola, B)", explica: "Definição do problema.", status: "neutro" },
        { expr: "Lugar dos pontos equidistantes = mediatriz de AB", explica: "", status: "ok",
          professor: "Isso vale para qualquer par de pontos. Antenas de rádio, torres de vigia, hospitais: sempre que o critério é 'à mesma distância de dois pontos', a resposta é a mediatriz." },
      ],
      fatorada: "Na mediatriz de AB.",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Onde?",
      opcoes: [{ nome: "Na mediatriz de AB" }, { nome: "Na bissetriz" }, { nome: "No ponto A" }],
      respostaCerta: "Na mediatriz de AB",
      feedbackAcerto: "🎯",
      feedbackErro: "Equidistante de PONTOS → mediatriz.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Mediatriz: ⊥ ao segmento no ponto médio; PA = PB.",
      "Bissetriz: divide o ângulo em 2 iguais; equidistante dos lados.",
      "Equidistante de PONTOS → mediatriz. De LADOS de ângulo → bissetriz.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Mediatriz é ⊥ ao segmento?", opcoes: ["Sim", "Não", "Depende"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Sempre perpendicular." },
      { pergunta: "Bissetriz divide ângulo em:", opcoes: ["2 iguais", "3 iguais", "Nada"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ao meio." },
      { pergunta: "Equidistante de 2 pontos:", opcoes: ["Mediatriz", "Bissetriz", "Diagonal"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Pontos → mediatriz." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Construtor",
    materiais: ["Régua", "Papel"],
    passos: ["Desenhe um segmento AB e trace sua mediatriz.", "Desenhe um ângulo e trace sua bissetriz.", "Marque 2 pontos na mediatriz e mostre que PA = PB."],
    registro: "📸 Foto do desenho.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
