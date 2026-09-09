import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U1 — Radiciação: raiz exata, aproximada e simplificação.
 */
export const aula02_radiciacao: AulaV4 = {
  slug: "u1-02-radiciacao",
  titulo: "Raízes: Exatas, Aproximadas e Simplificadas",
  iconeTrilha: "🌱",
  bncc: ["EF09MA02", "EF09MA03"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Nem toda raiz sai redondinha",
    historia:
      "{NOME}, √50 não é um número inteiro — mas isso não significa que não dá pra simplificar! Hoje você aprende a 'tirar' quadrados perfeitos de dentro da raiz e a encaixar qualquer raiz no seu lugar exato na reta numérica.",
  },

  momento02_exploracao: {
    instrucao: "Observe os quadrados perfeitos — eles são a chave de toda simplificação de radicais.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Quadrados perfeitos",
        cabecalhos: ["n", "n²"],
        linhas: [
          { rotulo: "1", valores: ["1", "1"] },
          { rotulo: "2", valores: ["2", "4"] },
          { rotulo: "3", valores: ["3", "9"] },
          { rotulo: "4", valores: ["4", "16"] },
          { rotulo: "5", valores: ["5", "25"] },
          { rotulo: "6", valores: ["6", "36"] },
          { rotulo: "7", valores: ["7", "49"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 √50 não é exata, mas 50 = 25 × 2, e 25 é quadrado perfeito! Isso abre a porta da simplificação.",
      },
      {
        tipo: "retaNumerica",
        min: 0,
        max: 8,
        passo: 1,
        destacar: [
          { valor: 7.07, rotulo: "√50 ≈ 7,07" },
        ],
        intervalos: [{ de: 7, ate: 8, rotulo: "√50 está entre 7 e 8" }],
        legenda: "√50 na reta numérica",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como simplificar √50 sem calculadora?",
    pista: "Procure o MAIOR quadrado perfeito que é fator de 50 (ou seja, que divide 50 exatamente).",
    revelacao: "50 = 25 × 2, e 25 é quadrado perfeito (5²). Então √50 = √25 · √2 = 5√2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√50",
      passos: [
        { expr: "50 = 25 × 2", explica: "Fatoro achando um quadrado perfeito.", status: "neutro", professor: "Sempre procure o MAIOR quadrado perfeito que divide o número — isso simplifica em um único passo." },
        { expr: "√50 = √(25 × 2)", explica: "Reescrevo a raiz do produto.", status: "ok" },
        { expr: "√50 = √25 · √2", explica: "Propriedade: √(a·b) = √a · √b.", status: "ok", professor: "Essa propriedade só vale para números não-negativos dentro da raiz — é a regra de ouro da radiciação." },
        { expr: "√50 = 5√2", explica: "√25 = 5, sai da raiz.", status: "ok" },
      ],
      fatorada: "√50 = 5√2",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Raiz quadrada: exata, aproximada e simplificada",
    etapas: [
      {
        texto:
          "RAIZ EXATA acontece quando o número é um quadrado perfeito: √36 = 6, porque 6² = 36. Índice 2 (raiz quadrada) costuma ser escrito sem o número 2 em cima do radical.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular √81.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "√81",
            passos: [
              { expr: "9² = 81", explica: "Procuro o inteiro que ao quadrado dá 81.", status: "neutro" },
              { expr: "√81 = 9", explica: "Raiz exata.", status: "ok", professor: "Vale a pena memorizar os quadrados até 15² para reconhecer raízes exatas rapidamente." },
            ],
            fatorada: "√81 = 9",
          },
          destaque: "Raiz exata = o número É um quadrado perfeito.",
        },
      },
      {
        texto:
          "RAIZ APROXIMADA acontece quando o número NÃO é quadrado perfeito. Localizamos entre quais inteiros ela está, comparando com os quadrados vizinhos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Entre quais inteiros está √40?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "√40",
            passos: [
              { expr: "6² = 36 e 7² = 49", explica: "Procuro os quadrados vizinhos de 40.", status: "neutro" },
              { expr: "36 < 40 < 49", explica: "40 está entre eles.", status: "ok" },
              { expr: "6 < √40 < 7", explica: "Logo √40 é aproximado, entre 6 e 7.", status: "ok", professor: "Como 40 está mais perto de 36 do que de 49, √40 fica mais perto de 6: de fato √40 ≈ 6,32." },
            ],
            fatorada: "√40 ≈ 6,32",
          },
          destaque: "Comparar com quadrados vizinhos localiza a raiz sem calculadora.",
        },
      },
      {
        texto:
          "RAIZ SIMPLIFICADA: quando o número não é quadrado perfeito mas TEM um fator que é. Fatoramos, separamos em duas raízes (propriedade √(a·b) = √a·√b) e tiramos da raiz o que for exato.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Simplificar √72.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "√72",
            passos: [
              { expr: "72 = 36 × 2", explica: "36 é o maior quadrado perfeito fator de 72.", status: "neutro", professor: "Poderia usar 72 = 4 × 18 também, mas teria que simplificar de novo. Ir direto ao MAIOR quadrado economiza passos." },
              { expr: "√72 = √36 · √2", explica: "Separo as raízes.", status: "ok" },
              { expr: "√72 = 6√2", explica: "√36 = 6 sai da raiz.", status: "ok" },
            ],
            fatorada: "√72 = 6√2",
          },
          destaque: "6√2 é a forma mais simples: dentro da raiz não sobra mais quadrado perfeito.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: simplifique √200 e localize aproximadamente na reta.",
    resposta: "√200 = 10√2 ≈ 14,14",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√200",
      passos: [
        { expr: "200 = 100 × 2", explica: "100 é quadrado perfeito (10²).", status: "neutro" },
        { expr: "√200 = √100 · √2", explica: "Separo as raízes.", status: "ok" },
        { expr: "√200 = 10√2", explica: "√100 = 10 sai da raiz.", status: "ok" },
        { expr: "10√2 ≈ 10 × 1,41 = 14,1", explica: "Aproximo usando √2 ≈ 1,41.", status: "ok", professor: "Multiplico o valor aproximado de √2 pelo coeficiente 10, obtendo uma estimativa decimal de √200." },
      ],
      fatorada: "√200 = 10√2 ≈ 14,1",
      legenda: "Brilha resolve",
    },
    passos: [
      "Fatoro 200 buscando o maior quadrado perfeito: 100 × 2.",
      "Separo em √100 · √2.",
      "√100 = 10 sai da raiz, sobra 10√2.",
      "Aproximo com √2 ≈ 1,41: 10 × 1,41 = 14,1.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: simplifique √98.",
    dica: "98 = 49 × 2, e 49 é quadrado perfeito (7²).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√98",
      passos: [
        { expr: "98 = 49 × 2", explica: "Fatoro.", status: "neutro" },
        { expr: "√98 = √49 · √2", explica: "Separo as raízes.", status: "ok" },
      ],
      fatorada: "√98 = 7√2",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma simplificada de √98?",
      opcoes: [{ nome: "7√2" }, { nome: "49√2" }, { nome: "2√7" }],
      respostaCerta: "7√2",
      feedbackAcerto: "🎯 √49 = 7 sai da raiz, sobrando 7√2.",
      feedbackErro: "98 = 49 × 2. Como √49 = 7, ele sai da raiz e sobra o 2 dentro: 7√2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: entre quais inteiros está √30?",
    visualMat: {
      tipo: "retaNumerica",
      min: 0,
      max: 8,
      passo: 1,
      intervalos: [{ de: 5, ate: 6, rotulo: "√30 está aqui" }],
      legenda: "Localizando √30",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "√30 está entre:",
      opcoes: [{ nome: "5 e 6" }, { nome: "4 e 5" }, { nome: "6 e 7" }],
      respostaCerta: "5 e 6",
      feedbackAcerto: "🎯 5² = 25 e 6² = 36, e 25 < 30 < 36, então 5 < √30 < 6.",
      feedbackErro: "Compare com os quadrados vizinhos: 5² = 25 e 6² = 36. Como 30 está entre 25 e 36, √30 está entre 5 e 6.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um terreno quadrado tem área de 128 m². Um engenheiro precisa saber o lado do terreno.",
    problema: "Qual é o lado do terreno, em forma simplificada?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "lado = √128",
      passos: [
        { expr: "lado² = 128", explica: "Área do quadrado é lado².", status: "neutro" },
        { expr: "lado = √128", explica: "Extraio a raiz quadrada.", status: "ok" },
        { expr: "128 = 64 × 2", explica: "64 é quadrado perfeito (8²).", status: "ok", professor: "Sempre procuro o MAIOR quadrado perfeito possível: 64 é melhor escolha que 4 ou 16, porque simplifica tudo de uma vez." },
        { expr: "lado = 8√2 m", explica: "√64 = 8 sai da raiz.", status: "ok" },
      ],
      fatorada: "lado = 8√2 m ≈ 11,3 m",
      legenda: "Aplicação — terreno quadrado",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8√2 m" }, { nome: "64√2 m" }, { nome: "2√8 m" }],
      respostaCerta: "8√2 m",
      feedbackAcerto: "🎯 128 = 64 × 2, e √64 = 8 sai da raiz, resultando em 8√2 m.",
      feedbackErro: "Fatore 128 procurando o maior quadrado perfeito: 128 = 64 × 2. Como √64 = 8, o lado é 8√2 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Raiz exata: o número é quadrado perfeito (√36 = 6).",
      "Raiz aproximada: compare com quadrados vizinhos para localizar entre dois inteiros.",
      "Raiz simplificada: fatore achando o MAIOR quadrado perfeito e use √(a·b) = √a · √b.",
      "√50 = 5√2, √72 = 6√2, √98 = 7√2 — pratique reconhecer esses padrões.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A forma simplificada de √18 é:",
        opcoes: ["3√2", "9√2", "2√3"],
        correta: 0,
        feedbackAcerto: "🎉 18 = 9 × 2, e √9 = 3 sai da raiz: 3√2.",
        feedbackErro: "Fatore 18 = 9 × 2. Como 9 é quadrado perfeito (3²), √18 = √9 · √2 = 3√2.",
      },
      {
        pergunta: "√60 está entre quais inteiros?",
        opcoes: ["7 e 8", "6 e 7", "8 e 9"],
        correta: 0,
        feedbackAcerto: "🎉 7² = 49 e 8² = 64. Como 49 < 60 < 64, então 7 < √60 < 8.",
        feedbackErro: "Compare com quadrados vizinhos: 7² = 49 e 8² = 64. 60 fica entre eles, então √60 está entre 7 e 8.",
      },
      {
        pergunta: "√100 é um exemplo de raiz:",
        opcoes: ["Exata", "Aproximada", "Simplificável mas não exata"],
        correta: 0,
        feedbackAcerto: "🎉 100 é quadrado perfeito (10²), então √100 = 10 exatamente.",
        feedbackErro: "100 = 10², então √100 = 10, um resultado exato e inteiro.",
      },
      {
        pergunta: "A forma simplificada de √48 é:",
        opcoes: ["4√3", "2√12", "16√3"],
        correta: 0,
        feedbackAcerto: "🎉 48 = 16 × 3, e √16 = 4 sai da raiz: 4√3.",
        feedbackErro: "Fatore 48 = 16 × 3, pois 16 é o maior quadrado perfeito fator de 48. √48 = √16 · √3 = 4√3.",
      },
      {
        pergunta: "Qual número, quando colocado sob a raiz, dá EXATAMENTE 11?",
        opcoes: ["121", "111", "21"],
        correta: 0,
        feedbackAcerto: "🎉 11² = 121, então √121 = 11 exatamente.",
        feedbackErro: "Para achar o número, eleve 11 ao quadrado: 11 × 11 = 121. Logo √121 = 11.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçada aos quadrados perfeitos",
    materiais: ["Papel", "Caneta", "Fita métrica (opcional)"],
    passos: [
      "Escreva os quadrados perfeitos de 1 até 15 (1, 4, 9, 16... até 225).",
      "Escolha 3 números que NÃO sejam quadrados perfeitos (ex.: 45, 63, 90) e simplifique as raízes deles.",
      "Explique para alguém da família como você encontrou o maior quadrado perfeito escondido dentro de cada número.",
    ],
    registro: "📸 Foto da lista de quadrados perfeitos e das simplificações.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Caçador de Radicais" },
};
