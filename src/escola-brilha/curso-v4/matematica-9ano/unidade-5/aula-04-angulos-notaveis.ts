import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U5 — Ângulos notáveis: 30°, 45°, 60°.
 */
export const aula04_angulosNotaveis: AulaV4 = {
  slug: "u5-04-angulos-notaveis",
  titulo: "Os Ângulos Notáveis",
  iconeTrilha: "🔺",
  bncc: ["EF09MA14"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Três ângulos que todo mundo decora",
    historia:
      "{NOME}, existem três ângulos que aparecem O TEMPO TODO em provas, telhados, rampas e construções: 30°, 45° e 60°. Para eles, seno, cosseno e tangente têm valores EXATOS (com raízes), que você vai usar direto, sem precisar de calculadora. Vamos conhecer a tabela?",
  },

  momento02_exploracao: {
    instrucao: "Observe a tabela dos ângulos notáveis — decore ela, ela abre muitas portas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Tabela dos ângulos notáveis",
        cabecalhos: ["Ângulo", "seno", "cosseno", "tangente"],
        linhas: [
          { rotulo: "1", valores: ["30°", "1/2", "√3/2", "√3/3"] },
          { rotulo: "2", valores: ["45°", "√2/2", "√2/2", "1"] },
          { rotulo: "3", valores: ["60°", "√3/2", "1/2", "√3"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Repare no PADRÃO: sen 30° = cos 60° e sen 60° = cos 30°. Isso porque 30° e 60° são ângulos complementares (somam 90°) — sen e cos trocam de lugar!",
      },
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        mostrarAngulos: true,
        medidasLados: ["2 (hipotenusa)", "1 (oposto a 30°)", "√3 (oposto a 60°)"],
        legenda: "Triângulo 30°-60°-90° clássico",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que sen 30° = cos 60°?",
    pista: "Num triângulo retângulo com ângulos de 30° e 60°, o cateto oposto a 30° é o mesmo cateto ADJACENTE a 60°.",
    revelacao: "sen 30° = oposto(30°) ÷ hipotenusa. cos 60° = adjacente(60°) ÷ hipotenusa. Como oposto(30°) = adjacente(60°) — é o MESMO lado — as duas razões são iguais: 1/2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "sen 30° comparado a cos 60°",
      passos: [
        { expr: "sen 30° = oposto(30°) ÷ hipotenusa", explica: "Definição de seno de 30°.", status: "neutro" },
        { expr: "cos 60° = adjacente(60°) ÷ hipotenusa", explica: "Definição de cosseno de 60°.", status: "ok" },
        { expr: "oposto(30°) = adjacente(60°)", explica: "É o mesmo lado do triângulo!", status: "ok", professor: "Num triângulo retângulo, os dois ângulos agudos somam 90°. O lado que é 'oposto' a um deles é sempre 'adjacente' ao outro." },
        { expr: "sen 30° = cos 60° = 1/2", explica: "Confirmado pela tabela.", status: "ok" },
      ],
      fatorada: "sen 30° = cos 60° = 1/2",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Usando os ângulos notáveis",
    etapas: [
      {
        texto:
          "Ângulo de 45°: acontece quando os dois catetos são IGUAIS. Nesse caso, sen 45° = cos 45° = √2/2 (os dois catetos têm o mesmo papel).",
        exemploReal: {
          titulo: "🔎 Achando um cateto com 45°",
          contexto: "Um triângulo retângulo isósceles tem hipotenusa 10 cm e ângulo de 45°. Qual é o cateto oposto?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "sen 45° = cateto ÷ 10",
            passos: [
              { expr: "sen 45° = √2/2", explica: "Valor da tabela.", status: "neutro" },
              { expr: "√2/2 = cateto ÷ 10", explica: "Aplico a definição de seno.", status: "ok" },
              { expr: "cateto = 10 · √2/2 = 5√2", explica: "Multiplico cruzado.", status: "ok", professor: "5√2 é aproximadamente 7,07 cm (usando √2 ≈ 1,41). Em provas, geralmente deixamos a resposta na forma exata 5√2, sem aproximar." },
            ],
            fatorada: "cateto = 5√2 cm",
          },
          destaque: "Em ângulo de 45°, os dois catetos são sempre iguais.",
        },
      },
      {
        texto:
          "Ângulo de 60°: o cateto oposto a 60° é o MAIOR dos dois catetos (mais próximo da hipotenusa em tamanho). Use tg 60° = √3 quando tiver os dois catetos.",
        exemploReal: {
          titulo: "🔎 Achando a hipotenusa com 60°",
          contexto: "Um triângulo retângulo tem ângulo de 60° e cateto adjacente 4 cm. Qual é a hipotenusa?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "cos 60° = 4 ÷ hipotenusa",
            passos: [
              { expr: "cos 60° = 1/2", explica: "Valor da tabela.", status: "neutro" },
              { expr: "1/2 = 4 ÷ hipotenusa", explica: "Aplico a definição de cosseno.", status: "ok" },
              { expr: "hipotenusa = 4 ÷ (1/2) = 8", explica: "Dividir por 1/2 é multiplicar por 2.", status: "ok", professor: "Dividir por uma fração é multiplicar pelo inverso: 4 ÷ (1/2) = 4 · 2 = 8. Esse é um dos erros mais comuns — muitos alunos fazem 4 · (1/2) e erram." },
            ],
            fatorada: "hipotenusa = 8 cm",
          },
          destaque: "cos 60° = 1/2 é o valor mais fácil de lembrar da tabela.",
        },
      },
      {
        texto:
          "Ângulo de 30°: o cateto oposto a 30° é sempre METADE da hipotenusa. Essa é uma propriedade especial só desse ângulo, e vem direto de sen 30° = 1/2.",
        exemploReal: {
          titulo: "🔎 Usando a propriedade do 30°",
          contexto: "Um triângulo retângulo tem ângulo de 30° e hipotenusa 18 cm. Qual é o cateto oposto a 30°?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "sen 30° = cateto ÷ 18",
            passos: [
              { expr: "sen 30° = 1/2", explica: "Valor da tabela.", status: "neutro" },
              { expr: "1/2 = cateto ÷ 18", explica: "Aplico a definição de seno.", status: "ok" },
              { expr: "cateto = 18 ÷ 2 = 9", explica: "Metade da hipotenusa.", status: "ok", professor: "Sempre que o ângulo for exatamente 30°, o cateto oposto a ele é a metade da hipotenusa — não precisa nem montar a equação, é um atalho válido." },
            ],
            fatorada: "cateto = 9 cm",
          },
          destaque: "Ângulo de 30° → cateto oposto = metade da hipotenusa.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma escada forma 60° com o chão e tem 6 m de comprimento (hipotenusa). Qual é a altura alcançada na parede?",
    resposta: "altura = 3√3 m ≈ 5,2 m",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["6 m (escada/hipotenusa)", "altura = ? (oposto a 60°)", "base (adjacente a 60°)"],
      legenda: "Brilha resolve",
    },
    passos: [
      "A altura é o cateto oposto ao ângulo de 60°. Uso sen 60° = altura ÷ hipotenusa.",
      "sen 60° = √3/2 (valor da tabela).",
      "√3/2 = altura ÷ 6, logo altura = 6 · √3/2.",
      "altura = 3√3 m ≈ 5,2 m.",
    ],
    contaPassoAPasso: {
      operacao: "mult",
      operandos: [6, 1],
      resultado: 5.2,
      passos: [
        { fala: "sen 60° = √3/2. Monto: √3/2 = altura ÷ 6.", digito: 0 },
        { fala: "altura = 6 · √3/2 = 3√3 ≈ 5,2 m (usando √3 ≈ 1,73).", digito: 5 },
      ],
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um triângulo retângulo tem ângulo de 45° e cateto oposto 7 cm. Qual é o outro cateto?",
    dica: "Em ângulo de 45°, os dois catetos são sempre iguais.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ângulo de 45° → catetos iguais",
      passos: [
        { expr: "tg 45° = oposto ÷ adjacente", explica: "Definição de tangente.", status: "neutro" },
        { expr: "tg 45° = 1", explica: "Valor da tabela.", status: "ok" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o outro cateto?",
      opcoes: [{ nome: "7 cm" }, { nome: "3,5 cm" }, { nome: "14 cm" }],
      respostaCerta: "7 cm",
      feedbackAcerto: "🎯 Como tg 45° = 1, oposto = adjacente. Os dois catetos são iguais: 7 cm.",
      feedbackErro: "tg 45° = oposto ÷ adjacente = 1, então oposto = adjacente. Se um cateto é 7 cm, o outro também é 7 cm.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um triângulo retângulo tem ângulo de 30° e hipotenusa 20 cm. Qual é o cateto oposto a 30°?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "sen 30° = cateto ÷ 20",
      passos: [
        { expr: "sen 30° = 1/2", explica: "Valor da tabela.", status: "neutro" },
        { expr: "1/2 = cateto ÷ 20", explica: "Aplico a definição de seno.", status: "ok" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o cateto oposto a 30°?",
      opcoes: [{ nome: "10 cm" }, { nome: "40 cm" }, { nome: "20 cm" }],
      respostaCerta: "10 cm",
      feedbackAcerto: "🎯 No ângulo de 30°, o cateto oposto é sempre metade da hipotenusa: 20 ÷ 2 = 10 cm.",
      feedbackErro: "Lembre do atalho: em 30°, o cateto oposto é metade da hipotenusa. 20 ÷ 2 = 10 cm.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um engenheiro projeta uma rampa de 8 m de comprimento formando um ângulo de 30° com o chão.",
    problema: "Qual é a altura que a rampa alcança?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["8 m (rampa/hipotenusa)", "altura = ? (oposto a 30°)", "base (adjacente a 30°)"],
      legenda: "Rampa de acesso",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura da rampa?",
      opcoes: [{ nome: "4 m" }, { nome: "6,93 m" }, { nome: "16 m" }],
      respostaCerta: "4 m",
      feedbackAcerto: "🎯 Em 30°, o cateto oposto (altura) é metade da hipotenusa: 8 ÷ 2 = 4 m.",
      feedbackErro: "Use sen 30° = 1/2 = altura ÷ 8. Então altura = 8 ÷ 2 = 4 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "sen 30° = 1/2, cos 30° = √3/2, tg 30° = √3/3.",
      "sen 45° = √2/2, cos 45° = √2/2, tg 45° = 1.",
      "sen 60° = √3/2, cos 60° = 1/2, tg 60° = √3.",
      "sen de um ângulo = cos do seu complementar (30° e 60°).",
      "Em 30°, o cateto oposto é sempre metade da hipotenusa. Em 45°, os catetos são iguais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "sen 30° vale:",
        opcoes: ["1/2", "√3/2", "√2/2"],
        correta: 0,
        feedbackAcerto: "🎉 sen 30° = 1/2 — o valor mais fácil de lembrar da tabela.",
        feedbackErro: "sen 30° = 1/2. Não confunda com cos 30° = √3/2.",
      },
      {
        pergunta: "cos 60° vale:",
        opcoes: ["1/2", "√3/2", "1"],
        correta: 0,
        feedbackAcerto: "🎉 cos 60° = sen 30° = 1/2, pois 30° e 60° são complementares.",
        feedbackErro: "cos 60° = 1/2. Lembre que sen 30° = cos 60°, porque 30° + 60° = 90°.",
      },
      {
        pergunta: "tg 45° vale:",
        opcoes: ["1", "√2/2", "√3"],
        correta: 0,
        feedbackAcerto: "🎉 Em 45°, os catetos são iguais, então oposto ÷ adjacente = 1.",
        feedbackErro: "tg 45° = 1, porque em ângulo de 45° os dois catetos têm o mesmo tamanho.",
      },
      {
        pergunta: "Num triângulo com ângulo de 30° e hipotenusa 14 cm, o cateto oposto a 30° é:",
        opcoes: ["7 cm", "14 cm", "28 cm"],
        correta: 0,
        feedbackAcerto: "🎉 O cateto oposto a 30° é sempre metade da hipotenusa: 14 ÷ 2 = 7 cm.",
        feedbackErro: "sen 30° = 1/2 = cateto ÷ 14, então cateto = 14 ÷ 2 = 7 cm.",
      },
      {
        pergunta: "Num triângulo com ângulo de 45° e cateto adjacente 9 cm, o cateto oposto vale:",
        opcoes: ["9 cm", "4,5 cm", "18 cm"],
        correta: 0,
        feedbackAcerto: "🎉 Em 45°, os dois catetos são sempre iguais: 9 cm.",
        feedbackErro: "Como tg 45° = 1, oposto = adjacente. Se o adjacente é 9 cm, o oposto também é 9 cm.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Decorando a tabela dos notáveis",
    materiais: ["Cartolina ou papel", "Caneta colorida"],
    passos: [
      "Desenhe a tabela dos ângulos notáveis (30°, 45°, 60°) com seno, cosseno e tangente.",
      "Cole num lugar visível do quarto por uma semana.",
      "Todo dia, recite de memória os 9 valores para alguém da família conferir.",
    ],
    registro: "🎤 Áudio ou vídeo recitando a tabela de cor.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Guardião dos Ângulos Notáveis" },
};
