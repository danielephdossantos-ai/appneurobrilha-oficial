import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Missão: mestre das equações e sistemas.
 * Formato: fluxograma de decisão + passo a passo interativo escolhendo
 * o método certo para cada tipo de equação/sistema.
 */
export const aula06_missao: AulaV4 = {
  slug: "u4-06-missao",
  titulo: "Missão — Mestre das Equações e Sistemas",
  iconeTrilha: "🏅",
  bncc: ["EF08MA07", "EF08MA08"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Kit completo de resolução",
    historia:
      "{NOME}, agora você conhece equação simples, com frações, com incógnita dos dois lados, sistemas por substituição e por adição. Hoje o desafio é OLHAR a expressão e decidir o método mais rápido.",
  },

  momento02_exploracao: {
    instrucao:
      "Kit de decisão: qual método usar em cada situação?",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Fluxograma do 8º ano — equações e sistemas",
        cabecalhos: ["Situação", "Método", "Dica"],
        linhas: [
          { rotulo: "1", valores: ["1 incógnita, sem frações", "Equação 1º grau", "junta x com x, número com número"] },
          { rotulo: "2", valores: ["1 incógnita, com frações", "Equação × MMC", "elimina denominadores"] },
          { rotulo: "3", valores: ["2 incógnitas, 1 já isolada", "Substituição", "troca direto na outra"] },
          { rotulo: "4", valores: ["2 incógnitas, coefs opostos ou fáceis", "Adição", "coluna do x ou y zera"] },
          { rotulo: "5", valores: ["2 incógnitas, coefs esquisitos", "Adição preparada", "multiplica pra gerar opostos"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como escolher o método SEM calcular?",
    pista: "Olhe primeiro se tem frações; depois se tem uma ou duas incógnitas; depois se algum coef está fácil.",
    revelacao:
      "Estratégia > força bruta. Ler a estrutura em 5 segundos economiza minutos de conta.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Decisão rápida em 3 exemplos",
      passos: [
        { expr: "x/3 + 2 = 5", explica: "1 incógnita + fração → MMC(1,3) = 3, multiplica tudo.", status: "neutro",
          professor: "Sempre que aparece fração, meu 1º passo é multiplicar TODOS os termos pelo MMC dos denominadores." },
        { expr: "I) 2x + y = 10;  II) 3x − y = 5", explica: "2 incógnitas + coefs de y opostos → ADIÇÃO.", status: "neutro",
          professor: "Coefs de y são +1 e −1 (opostos). Soma direto e o y some." },
        { expr: "I) 2x + y = 7;  II) y = x + 1", explica: "2 incógnitas + y isolado → SUBSTITUIÇÃO.", status: "neutro",
          professor: "y já está sozinho na II. Substitui em I direto: 2x + (x + 1) = 7." },
      ],
      fatorada: "Ler a estrutura primeiro. Método depois.",
    },
  },

  momento04_explicacao: {
    titulo: "Combos finais — passo a passo",
    etapas: [
      {
        texto: "Combo 1: equação com fração + verificação. Resolva x/3 + 2 = 5.",
        exemploReal: {
          titulo: "🔎 MMC e conferência",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x/3 + 2 = 5",
            passos: [
              { expr: "MMC(1, 3) = 3", explica: "Denominadores: 1, 3, 1.", status: "neutro",
                professor: "Os denominadores são 3 (do x/3), 1 (do 2) e 1 (do 5). MMC = 3." },
              { expr: "×3 em todos: x + 6 = 15", explica: "Cuidado com o lado direito.", status: "ok",
                professor: "3·(x/3) = x; 3·2 = 6; 3·5 = 15." },
              { expr: "x = 9", explica: "−6.", status: "ok" },
              { expr: "confere no original: 9/3 + 2 = 3 + 2 = 5 ✅", explica: "Sempre substitua.", status: "ok" },
            ],
            fatorada: "x = 9",
          },
        },
      },
      {
        texto: "Combo 2: sistema — método da adição. I) 2x + y = 10;  II) 3x − y = 5.",
        exemploReal: {
          titulo: "🔎 Coefs opostos → soma direto",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2x + y = 10     II) 3x − y = 5",
            passos: [
              { expr: "coefs de y: +1 e −1", explica: "Opostos → soma direto.", status: "ok" },
              { expr: "I + II: 5x = 15  →  x = 3", explica: "y some.", status: "ok" },
              { expr: "volta em I: 6 + y = 10  →  y = 4", explica: "", status: "ok",
                professor: "Confere na II: 3·3 − 4 = 9 − 4 = 5 ✅." },
            ],
            fatorada: "(x, y) = (3, 4)",
          },
        },
      },
      {
        texto: "Combo 3: sistema — método da substituição. I) 2x + y = 7;  II) y = x + 1.",
        exemploReal: {
          titulo: "🔎 y isolado → troca direto",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2x + y = 7     II) y = x + 1",
            passos: [
              { expr: "II na I: 2x + (x + 1) = 7", explica: "Substitui y.", status: "ok" },
              { expr: "3x + 1 = 7  →  3x = 6  →  x = 2", explica: "", status: "ok" },
              { expr: "y = 2 + 1 = 3", explica: "Volta na II.", status: "ok",
                professor: "Confere: 2·2 + 3 = 7 ✅." },
            ],
            fatorada: "(x, y) = (2, 3)",
          },
        },
      },
      {
        texto: "Combo 4: problema real. 'Estacionamento tem 40 veículos e 130 rodas'.",
        exemploReal: {
          titulo: "🔎 Carros e motos",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "carros (4 rodas) + motos (2 rodas)  |  40 veíc, 130 rodas",
            passos: [
              { expr: "define: c = carros, m = motos", explica: "", status: "neutro" },
              { expr: "I) c + m = 40", explica: "Cada veículo conta como 1.", status: "ok" },
              { expr: "II) 4c + 2m = 130", explica: "Carro 4 rodas, moto 2.", status: "ok" },
              { expr: "I × (−2): −2c − 2m = −80", explica: "Preparo.", status: "ok" },
              { expr: "soma com II: 2c = 50  →  c = 25", explica: "", status: "ok" },
              { expr: "m = 40 − 25 = 15", explica: "", status: "ok",
                professor: "Confere: 25·4 + 15·2 = 100 + 30 = 130 ✅. 25 carros e 15 motos." },
            ],
            fatorada: "25 carros, 15 motos",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve o sistema I) x + y = 20;  II) x − y = 6.",
    resposta: "(x, y) = (13, 7)",
    passos: ["Soma: 2x = 26", "x = 13", "y = 7"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 20     II) x − y = 6",
      passos: [
        { expr: "coefs de y opostos", explica: "Soma direto.", status: "ok" },
        { expr: "I + II: 2x = 26", explica: "y some.", status: "ok" },
        { expr: "x = 13", explica: "÷2.", status: "ok" },
        { expr: "volta em I: 13 + y = 20  →  y = 7", explica: "", status: "ok",
          professor: "Confere na II: 13 − 7 = 6 ✅." },
      ],
      fatorada: "(x, y) = (13, 7)",
      legenda: "Modelagem",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: 5x − 3 = 12.",
    dica: "+3 dos dois lados; depois ÷5.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5x − 3 = 12",
      passos: [
        { expr: "5x = 15", explica: "+3.", status: "ok" },
        { expr: "x = 3", explica: "÷5.", status: "ok" },
      ],
      fatorada: "x = 3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "3" }, { nome: "5" }, { nome: "9" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 5x = 15 → x = 3.",
      feedbackErro: "Primeiro +3 (5x = 15), depois ÷5. x = 3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: I) 2x + y = 7;  II) y = x + 1.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 2x + y = 7     II) y = x + 1",
      passos: [
        { expr: "II na I: 2x + (x + 1) = 7", explica: "Substitui.", status: "ok" },
        { expr: "3x + 1 = 7  →  x = 2", explica: "", status: "ok" },
        { expr: "y = 2 + 1 = 3", explica: "Volta.", status: "ok" },
      ],
      fatorada: "(x, y) = (2, 3)",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "2" }, { nome: "3" }, { nome: "1" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 2x + (x+1) = 7 → 3x = 6 → x = 2.",
      feedbackErro: "Substitua y por (x+1) na I. 3x + 1 = 7 → x = 2.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um estacionamento tem carros (4 rodas) e motos (2 rodas). Total: 40 veículos e 130 rodas.",
    problema: "Quantas motos?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) c + m = 40     II) 4c + 2m = 130",
      passos: [
        { expr: "I × (−2): −2c − 2m = −80", explica: "Preparo.", status: "ok" },
        { expr: "soma com II: 2c = 50  →  c = 25", explica: "", status: "ok" },
        { expr: "m = 40 − 25 = 15", explica: "", status: "ok",
          professor: "Confere: 25·4 + 15·2 = 130 ✅. 15 motos." },
      ],
      fatorada: "15 motos",
      legenda: "Aplicação — estacionamento",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Motos =",
      opcoes: [{ nome: "15" }, { nome: "25" }, { nome: "20" }],
      respostaCerta: "15",
      feedbackAcerto: "🎯 c = 25, m = 15.",
      feedbackErro:
        "Sistema: c + m = 40 e 4c + 2m = 130. Preparando e somando: c = 25, m = 15.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Leia a estrutura antes de calcular.",
      "1 incógnita → equação. 2 → sistema (substituição ou adição).",
      "Frações → MMC eliminando denominadores.",
      "Substituição: quando uma letra já está sozinha.",
      "Adição: quando coefs são opostos (ou fáceis de virar opostos).",
      "SEMPRE confira substituindo no problema original.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2x = 10. x =", opcoes: ["5", "8", "20"], correta: 0,
        feedbackAcerto: "🎉 ÷2 → x = 5.",
        feedbackErro: "Divide os dois lados por 2: x = 5." },
      { pergunta: "I) x + y = 6;  II) x − y = 2. y =",
        opcoes: ["2", "4", "6"], correta: 0,
        feedbackAcerto: "🎉 Soma: 2x = 8 → x = 4; y = 2.",
        feedbackErro: "Coefs de y opostos. Soma: x = 4 → y = 2." },
      { pergunta: "x/2 = 5. x =", opcoes: ["10", "2.5", "5"], correta: 0,
        feedbackAcerto: "🎉 ×2 → x = 10.",
        feedbackErro: "O 2 divide x. Passa multiplicando: x = 10." },
      { pergunta: "3x + 2 = 11. x =", opcoes: ["3", "9", "5"], correta: 0,
        feedbackAcerto: "🎉 3x = 9 → x = 3.",
        feedbackErro: "−2 (3x = 9); ÷3 → x = 3." },
      { pergunta: "I) x + y = 12;  II) y = 2x. x =",
        opcoes: ["4", "6", "3"], correta: 0,
        feedbackAcerto: "🎉 x + 2x = 12 → x = 4.",
        feedbackErro: "Substituição: x + 2x = 12 → 3x = 12 → x = 4." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma das Equações e Sistemas",
    materiais: ["Papel", "Lápis", "Régua"],
    passos: [
      "Faça um diploma: 'Mestre das Equações e Sistemas — {NOME}'.",
      "Ao lado, escreva 3 situações resolvidas: uma equação simples, uma com fração, um sistema 2×2.",
      "Em cada uma: escreva o método usado, resolva passo a passo e confira.",
    ],
    registro: "📸 Foto do diploma com as 3 resoluções.",
  },

  recompensa: { xp: 250, moedas: 125, medalha: "Mestre dos Sistemas" },
};
