import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U5 — Missão: o engenheiro. Fecha a unidade combinando
 * Pitágoras + razões trigonométricas + ângulos notáveis em problemas reais.
 */
export const aula05_missaoEngenheiro: AulaV4 = {
  slug: "u5-05-missao-engenheiro",
  titulo: "Missão: o Engenheiro",
  iconeTrilha: "👷",
  bncc: ["EF09MA13", "EF09MA14"],
  duracaoMin: 35,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Você foi contratado, {NOME}!",
    historia:
      "{NOME}, uma construtora te contratou como engenheiro júnior por um dia! Você vai calcular a inclinação de uma rampa de acessibilidade, a altura de uma torre de transmissão e a distância diagonal de um terreno. Tudo isso usando Pitágoras e trigonometria — as mesmas ferramentas que engenheiros de verdade usam todos os dias. Vamos à obra?",
  },

  momento02_exploracao: {
    instrucao: "Veja as três missões que você vai resolver hoje, uma engenharia real de cada vez.",
    cenas: [
      {
        tipo: "texto",
        texto: "🛠️ Missão 1: rampa de acessibilidade — calcular a inclinação com seno e tangente.",
      },
      {
        tipo: "texto",
        texto: "🗼 Missão 2: altura de uma torre — usar tangente de 30°, 45° e 60°.",
      },
      {
        tipo: "texto",
        texto: "📐 Missão 3: distância diagonal de um terreno — usar o Teorema de Pitágoras.",
      },
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        mostrarAngulos: true,
        medidasLados: ["hipotenusa", "cateto oposto", "cateto adjacente"],
        legenda: "Toda engenharia começa com um triângulo retângulo",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Uma rampa de acessibilidade da NBR 9050 não pode ter inclinação maior que a de um ângulo pequeno. Por quê?",
    pista: "Quanto MAIOR o ângulo com o chão, mais íngreme (difícil) fica a rampa para uma cadeira de rodas subir.",
    revelacao: "A inclinação de uma rampa é medida pela tangente do ângulo: tg(ângulo) = altura ÷ base. Rampas seguras usam ângulos pequenos (tangente pequena), garantindo que a subida seja suave, não uma escada disfarçada!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Por que ângulo pequeno = rampa segura?",
      passos: [
        { expr: "tg(ângulo) = altura ÷ base", explica: "Definição de inclinação (tangente).", status: "neutro" },
        { expr: "ângulo pequeno → tg pequena", explica: "Altura bem menor que a base — subida suave.", status: "ok" },
        { expr: "ângulo grande → tg grande", explica: "Altura próxima da base — subida íngreme, perigosa.", status: "x", professor: "É por isso que normas técnicas de acessibilidade limitam o ângulo máximo de rampas: controlar a tangente controla o esforço de quem sobe." },
      ],
      fatorada: "Engenheiros escolhem o ângulo pela tangente, não pelo 'olhômetro'.",
      legenda: "Descoberta do engenheiro",
    },
  },

  momento04_explicacao: {
    titulo: "As três ferramentas do engenheiro",
    etapas: [
      {
        texto:
          "Ferramenta 1 — Inclinação de rampa: dados a altura e a base (ou a altura e o comprimento da rampa), usamos tangente (dois catetos) ou seno (cateto e hipotenusa) para achar o ângulo ou uma medida.",
        exemploReal: {
          titulo: "🔎 Rampa de acessibilidade",
          contexto: "Uma rampa tem 1 m de altura e 6 m de base. Qual é aproximadamente a tangente do ângulo de inclinação?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "tg(ângulo) = altura ÷ base",
            passos: [
              { expr: "tg(ângulo) = 1 ÷ 6", explica: "Cateto oposto (altura) sobre cateto adjacente (base).", status: "neutro" },
              { expr: "tg(ângulo) ≈ 0,17", explica: "Divisão feita: 1 ÷ 6 = 0,166...", status: "ok", professor: "Uma tangente de 0,17 corresponde a um ângulo bem pequeno (menos de 10°) — exatamente o tipo de rampa suave exigida para acessibilidade." },
            ],
            fatorada: "tg(ângulo) ≈ 0,17 → rampa suave",
          },
          destaque: "Tangente pequena = rampa segura e acessível.",
        },
      },
      {
        texto:
          "Ferramenta 2 — Altura de torre: dados a distância até a base da torre e o ângulo de visão (ângulo de elevação), usamos tangente = altura ÷ distância.",
        exemploReal: {
          titulo: "🔎 Altura de uma torre com ângulo de 60°",
          contexto: "De um ponto a 10 m da base de uma torre, o ângulo de elevação até o topo é 60°. Qual é a altura da torre?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "tg 60° = altura ÷ 10",
            passos: [
              { expr: "tg 60° = √3", explica: "Valor da tabela dos ângulos notáveis.", status: "neutro" },
              { expr: "√3 = altura ÷ 10", explica: "Aplico a definição de tangente.", status: "ok" },
              { expr: "altura = 10√3 ≈ 17,3 m", explica: "Multiplico: 10 · 1,73 (usando √3 ≈ 1,73).", status: "ok", professor: "Sempre que aparecer 30°, 45° ou 60°, use os valores exatos da tabela — não precisa de calculadora científica." },
            ],
            fatorada: "altura = 10√3 ≈ 17,3 m",
          },
          destaque: "Ângulo de elevação + distância até a base = altura por tangente.",
        },
      },
      {
        texto:
          "Ferramenta 3 — Distância diagonal: dados os dois lados retos de um terreno retangular, usamos o Teorema de Pitágoras para achar a diagonal (o 'atalho' de um canto a outro).",
        exemploReal: {
          titulo: "🔎 Diagonal de um terreno",
          contexto: "Um terreno retangular tem 30 m de frente e 40 m de fundo. Qual é a distância diagonal de um canto a outro?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "d² = 30² + 40²",
            passos: [
              { expr: "d² = 900 + 1600", explica: "Calculo os quadrados: 30² = 900 e 40² = 1600.", status: "neutro" },
              { expr: "d² = 2500", explica: "Somo os dois catetos ao quadrado.", status: "ok" },
              { expr: "d = √2500 = 50 m", explica: "Extraio a raiz quadrada.", status: "ok", professor: "Repare que 30-40-50 é um 'trio pitagórico' (múltiplo de 3-4-5) — vale a pena reconhecer esses trios para ganhar tempo em provas." },
            ],
            fatorada: "d = 50 m",
          },
          destaque: "Diagonal de um terreno retangular = hipotenusa de um triângulo retângulo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma rampa de acessibilidade tem 5 m de comprimento (hipotenusa) e forma um ângulo de 30° com o chão. Qual é a altura que ela alcança?",
    resposta: "altura = 2,5 m",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["5 m (rampa/hipotenusa)", "altura = ? (oposto a 30°)", "base (adjacente a 30°)"],
      legenda: "Brilha resolve — rampa",
    },
    passos: [
      "A altura é o cateto oposto ao ângulo de 30°. Uso sen 30° = altura ÷ hipotenusa.",
      "sen 30° = 1/2 (valor da tabela dos ângulos notáveis).",
      "1/2 = altura ÷ 5, logo altura = 5 ÷ 2.",
      "altura = 2,5 m. Lembrete: no ângulo de 30°, o cateto oposto é sempre metade da hipotenusa!",
    ],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [5, 2],
      resultado: 2.5,
      passos: [
        { fala: "sen 30° = 1/2. Monto: 1/2 = altura ÷ 5.", digito: 0 },
        { fala: "altura = 5 ÷ 2 = 2,5 m.", digito: 5 },
      ],
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: uma torre de transmissão é vista a 20 m de distância com ângulo de elevação de 45°. Qual é a altura da torre?",
    dica: "Em 45°, tg 45° = 1, ou seja, altura = distância. Os dois catetos são iguais!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "tg 45° = altura ÷ 20",
      passos: [
        { expr: "tg 45° = 1", explica: "Valor da tabela dos ângulos notáveis.", status: "neutro" },
        { expr: "1 = altura ÷ 20", explica: "Aplico a definição de tangente.", status: "ok" },
      ],
      legenda: "Nós fazemos — torre",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura da torre?",
      opcoes: [{ nome: "20 m" }, { nome: "10 m" }, { nome: "40 m" }],
      respostaCerta: "20 m",
      feedbackAcerto: "🎯 Como tg 45° = 1, altura = distância = 20 m. Em 45°, os catetos são sempre iguais!",
      feedbackErro: "tg 45° = altura ÷ 20 = 1, então altura = 20 m (os catetos são iguais em 45°).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um terreno retangular tem 6 m de largura e 8 m de comprimento. Qual é a distância diagonal (de um canto a outro)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "d² = 6² + 8²",
      passos: [
        { expr: "d² = 36 + 64", explica: "Calculo os quadrados: 6² = 36 e 8² = 64.", status: "neutro" },
        { expr: "d² = 100", explica: "Somo os dois catetos ao quadrado.", status: "ok" },
      ],
      legenda: "Você faz — terreno",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a distância diagonal do terreno?",
      opcoes: [{ nome: "10 m" }, { nome: "14 m" }, { nome: "100 m" }],
      respostaCerta: "10 m",
      feedbackAcerto: "🎯 d² = 6² + 8² = 36 + 64 = 100, então d = √100 = 10 m. É o famoso trio pitagórico 6-8-10!",
      feedbackErro: "Use Pitágoras: d² = 6² + 8² = 36 + 64 = 100. Depois tire a raiz quadrada: d = √100 = 10 m.",
    },
  },

  momento08_aplicacao: {
    contexto: "Você é o engenheiro responsável por três obras no mesmo dia: a prefeitura pede a inclinação de uma rampa, a altura de uma antena e a diagonal de um lote — tudo usando as ferramentas que você aprendeu.",
    problema: "Uma antena é vista a 8 m de distância da base, com ângulo de elevação de 60°. Qual é (aproximadamente) a altura da antena, usando √3 ≈ 1,73?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["8 m (distância/adjacente)", "altura = ? (oposto a 60°)", "linha de visão (hipotenusa)"],
      legenda: "Missão final: a antena",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura aproximada da antena?",
      opcoes: [{ nome: "13,84 m" }, { nome: "8 m" }, { nome: "4,62 m" }],
      respostaCerta: "13,84 m",
      feedbackAcerto: "🎯 tg 60° = altura ÷ 8, e tg 60° = √3 ≈ 1,73. Logo altura = 8 · 1,73 = 13,84 m. Você concluiu a missão de engenheiro!",
      feedbackErro: "tg 60° = √3 ≈ 1,73. Como tg 60° = altura ÷ 8, então altura = 8 · 1,73 = 13,84 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Inclinação de rampa: tg(ângulo) = altura ÷ base — ângulo pequeno é rampa segura.",
      "Altura de torre: com ângulo de elevação e distância até a base, use tg(ângulo) = altura ÷ distância.",
      "Distância diagonal: use o Teorema de Pitágoras, d² = cateto1² + cateto2².",
      "Ângulos notáveis: sen 30° = 1/2, tg 45° = 1, tg 60° = √3 (use √3 ≈ 1,73 e √2 ≈ 1,41 para aproximar).",
      "Toda situação de engenharia com inclinação ou altura vira um triângulo retângulo — identifique hipotenusa, oposto e adjacente antes de calcular.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma rampa tem 2 m de altura e 12 m de base. Qual é a tangente do ângulo de inclinação?",
        opcoes: ["1/6 ≈ 0,17", "6", "1/12 ≈ 0,08"],
        correta: 0,
        feedbackAcerto: "🎉 tg(ângulo) = altura ÷ base = 2 ÷ 12 = 1/6 ≈ 0,17 — uma rampa bem suave e segura.",
        feedbackErro: "tg(ângulo) = altura ÷ base = 2 ÷ 12 = 1/6 ≈ 0,17.",
      },
      {
        pergunta: "Uma torre é vista a 15 m de distância com ângulo de elevação de 45°. Qual é a altura da torre?",
        opcoes: ["15 m", "30 m", "7,5 m"],
        correta: 0,
        feedbackAcerto: "🎉 Em 45°, tg 45° = 1, então altura = distância = 15 m.",
        feedbackErro: "tg 45° = altura ÷ 15 = 1, então altura = 15 m — em 45° os catetos são sempre iguais.",
      },
      {
        pergunta: "Um terreno retangular tem 9 m de largura e 12 m de comprimento. Qual é a diagonal?",
        opcoes: ["15 m", "21 m", "13 m"],
        correta: 0,
        feedbackAcerto: "🎉 d² = 9² + 12² = 81 + 144 = 225, e √225 = 15 m.",
        feedbackErro: "Use Pitágoras: d² = 9² + 12² = 81 + 144 = 225. Depois d = √225 = 15 m.",
      },
      {
        pergunta: "Uma antena é vista a 5 m de distância com ângulo de elevação de 30°. Usando tg 30° = √3/3 ≈ 0,58, qual é (aproximadamente) a altura da antena?",
        opcoes: ["2,9 m", "5 m", "8,65 m"],
        correta: 0,
        feedbackAcerto: "🎉 altura = 5 · 0,58 ≈ 2,9 m, usando tg 30° = √3/3 ≈ 0,58.",
        feedbackErro: "tg 30° = altura ÷ 5 ≈ 0,58, então altura ≈ 5 · 0,58 ≈ 2,9 m.",
      },
      {
        pergunta: "Por que uma rampa de acessibilidade deve ter ângulo pequeno com o chão?",
        opcoes: [
          "Porque um ângulo pequeno gera tangente pequena, tornando a subida suave.",
          "Porque um ângulo pequeno é mais bonito visualmente.",
          "Porque o ângulo não influencia a dificuldade de subir a rampa.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo — quanto menor o ângulo, menor a tangente (altura÷base), e mais suave é a subida.",
        feedbackErro: "O ângulo importa muito: ângulo pequeno significa tangente pequena, ou seja, uma subida suave e segura.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Engenheiro por um dia, em casa",
    materiais: ["Trena ou fita métrica", "Papel e caneta", "Uma escada, rampa ou degrau de casa"],
    passos: [
      "Meça a altura e a base de uma escada, rampa ou degrau da sua casa.",
      "Calcule a tangente do ângulo (altura ÷ base) e converse com a família sobre se é uma inclinação suave ou íngreme.",
      "Se possível, meça também a diagonal de um cômodo retangular e confira com o Teorema de Pitágoras.",
    ],
    registro: "📸 Foto da medição + a conta feita no papel.",
  },
  recompensa: { xp: 260, moedas: 130, medalha: "Engenheiro Mirim" },
};
