import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U1 — Potências com expoente negativo e fracionário +
 * notação científica na ciência. Aula de missão da unidade.
 */
export const aula05_potenciasNotacao: AulaV4 = {
  slug: "u1-05-potencias-notacao",
  titulo: "Potências Especiais e Notação Científica",
  iconeTrilha: "🔭",
  bncc: ["EF09MA01", "EF09MA04"],
  duracaoMin: 35,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Do átomo à galáxia, tudo cabe numa potência",
    historia:
      "{NOME}, um vírus mede 0,0000001 metro e a distância até o Sol é 150.000.000.000 metros. Escrever tantos zeros é cansativo e fácil de errar. Hoje você vai aprender a linguagem que cientistas usam para escrever números gigantes ou minúsculos em poucos símbolos: expoentes negativos, fracionários e a notação científica.",
  },

  momento02_exploracao: {
    instrucao: "Observe o que acontece quando o expoente é negativo ou uma fração.",
    cenas: [
      {
        tipo: "texto",
        texto: "🔑 Expoente negativo NÃO deixa o número negativo — ele manda 'inverter': a⁻ⁿ = 1/aⁿ. Expoente fracionário é raiz disfarçada: a^(1/2) = √a.",
      },
      {
        tipo: "tabela",
        titulo: "Padrões de expoentes",
        cabecalhos: ["Expressão", "Significa", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["2⁻³", "1/2³", "1/8"] },
          { rotulo: "2", valores: ["9^(1/2)", "√9", "3"] },
          { rotulo: "3", valores: ["8^(2/3)", "³√8²", "4"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual é o valor de 5⁻²?",
    pista: "Olhe o padrão: 5² = 25, 5¹ = 5, 5⁰ = 1, 5⁻¹ = ?, 5⁻² = ? A cada expoente que diminui 1, o resultado é dividido por 5.",
    revelacao: "5⁻¹ = 1/5 e 5⁻² = 1/25. O expoente negativo indica o INVERSO da potência com expoente positivo: a⁻ⁿ = 1/aⁿ.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5⁻²",
      passos: [
        { expr: "5² = 25, 5¹ = 5, 5⁰ = 1", explica: "Sigo o padrão dividindo por 5 a cada passo.", status: "neutro", professor: "Cada vez que o expoente diminui 1, dividimos o resultado anterior por 5. Isso vale mesmo quando o expoente fica negativo." },
        { expr: "5⁻¹ = 1/5", explica: "Continuando o padrão: 1 ÷ 5 = 1/5.", status: "ok" },
        { expr: "5⁻² = 1/25", explica: "1/5 ÷ 5 = 1/25.", status: "ok", professor: "Por isso definimos a⁻ⁿ = 1/aⁿ: é a continuação natural do padrão das potências." },
      ],
      fatorada: "5⁻² = 1/25",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Expoente negativo, fracionário e notação científica",
    etapas: [
      {
        texto:
          "Expoente negativo: a⁻ⁿ = 1/aⁿ (com a ≠ 0). Ou seja, inverta a base e troque o sinal do expoente.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular 3⁻⁴.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3⁻⁴",
            passos: [
              { expr: "3⁻⁴ = 1/3⁴", explica: "Inverto a base e o expoente vira positivo.", status: "neutro" },
              { expr: "3⁴ = 81", explica: "Calculo a potência no denominador.", status: "ok" },
              { expr: "= 1/81", explica: "Resultado final.", status: "ok", professor: "O expoente negativo NUNCA deixa o número negativo — ele só indica 'inverso'. Erro comum é achar que 3⁻⁴ = -81." },
            ],
            fatorada: "3⁻⁴ = 1/81",
          },
          destaque: "Expoente negativo = inverta a base, troque o sinal do expoente.",
        },
      },
      {
        texto:
          "Expoente fracionário: a^(1/n) = ⁿ√a. De forma geral, a^(m/n) = ⁿ√(aᵐ) — o denominador é o índice da raiz, o numerador é o expoente do radicando.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular 8^(2/3).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "8^(2/3)",
            passos: [
              { expr: "8^(2/3) = ³√8²", explica: "Denominador 3 vira índice da raiz, numerador 2 vira expoente do radicando.", status: "neutro" },
              { expr: "= ³√64", explica: "8² = 64.", status: "ok" },
              { expr: "= 4", explica: "³√64 = 4, pois 4³ = 64.", status: "ok", professor: "Também dá pra calcular na ordem inversa: ³√8 = 2, depois 2² = 4. O resultado é o mesmo." },
            ],
            fatorada: "8^(2/3) = 4",
          },
          destaque: "a^(m/n) = ⁿ√(aᵐ): denominador vira índice, numerador vira expoente.",
        },
      },
      {
        texto:
          "Notação científica: todo número pode ser escrito como N × 10ᵏ, com 1 ≤ N < 10. Números grandes usam expoente positivo; números pequenos, expoente negativo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escrever 45.000.000 em notação científica.",
          visualMat: {
            tipo: "notacaoCientifica",
            numero: "45000000",
            coeficiente: "4,5",
            expoente: 7,
            legenda: "Número grande → expoente positivo",
          },
          destaque: "45.000.000 = 4,5 × 10⁷ — o expoente conta quantas casas a vírgula 'andou'.",
        },
      },
      {
        texto:
          "Para números muito pequenos (menores que 1), o expoente da notação científica é negativo — a vírgula 'anda' para a direita.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escrever 0,00032 em notação científica.",
          visualMat: {
            tipo: "notacaoCientifica",
            numero: "0,00032",
            coeficiente: "3,2",
            expoente: -4,
            legenda: "Número pequeno → expoente negativo",
          },
          destaque: "0,00032 = 3,2 × 10⁻⁴ — a vírgula andou 4 casas para a direita.",
        },
      },
      {
        texto:
          "Multiplicação e divisão em notação científica: multiplicamos/dividimos os coeficientes e somamos/subtraímos os expoentes de 10 (mesma base).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular (3 × 10⁵) × (2 × 10³).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(3 × 10⁵) × (2 × 10³)",
            passos: [
              { expr: "= (3 × 2) × 10⁵⁺³", explica: "Multiplico coeficientes e somo expoentes (mesma base 10).", status: "neutro" },
              { expr: "= 6 × 10⁸", explica: "3 × 2 = 6 e 5 + 3 = 8.", status: "ok", professor: "Se o coeficiente passar de 10, é preciso reajustar: por exemplo, 12 × 10⁸ = 1,2 × 10⁹." },
            ],
            fatorada: "(3 × 10⁵) × (2 × 10³) = 6 × 10⁸",
          },
          destaque: "Multiplica coeficientes, soma expoentes de 10.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 0,0000027 em notação científica.",
    resposta: "0,0000027 = 2,7 × 10⁻⁶",
    visualMat: {
      tipo: "notacaoCientifica",
      numero: "0,0000027",
      coeficiente: "2,7",
      expoente: -6,
      legenda: "Brilha resolve",
    },
    passos: [
      "Localizo o primeiro algarismo diferente de zero: o 2.",
      "Coloco a vírgula depois dele: 2,7.",
      "Conto quantas casas a vírgula andou até a posição original: 6 casas para a direita.",
      "Como o número original é pequeno, o expoente é negativo: 10⁻⁶.",
      "Resultado: 2,7 × 10⁻⁶.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: calcule 2⁻³.",
    dica: "Lembre: a⁻ⁿ = 1/aⁿ. Primeiro inverta a base, depois calcule a potência positiva.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2⁻³",
      passos: [
        { expr: "2⁻³ = 1/2³", explica: "Inverto a base, expoente vira positivo.", status: "neutro" },
      ],
      fatorada: "2⁻³ = 1/8",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/8" }, { nome: "-8" }, { nome: "8" }],
      respostaCerta: "1/8",
      feedbackAcerto: "🎯 2⁻³ = 1/2³ = 1/8. O expoente negativo indica inverso, não número negativo.",
      feedbackErro: "2⁻³ = 1/2³. Calcule 2³ = 8 e inverta: 1/8. Expoente negativo NÃO torna o número negativo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: calcule 4^(1/2).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4^(1/2)",
      passos: [
        { expr: "4^(1/2) = √4", explica: "Expoente 1/2 é a raiz quadrada.", status: "neutro" },
      ],
      fatorada: "4^(1/2) = 2",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "8" }, { nome: "1/2" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 4^(1/2) = √4 = 2, pois 2² = 4.",
      feedbackErro: "Expoente 1/2 vira raiz quadrada: 4^(1/2) = √4 = 2.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um cientista mede que uma bactéria tem 0,000002 metro de comprimento e quer registrar isso em um artigo científico.",
    problema: "Escreva essa medida em notação científica.",
    visualMat: {
      tipo: "notacaoCientifica",
      numero: "0,000002",
      coeficiente: "2",
      expoente: -6,
      legenda: "Aplicação — biologia",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2 × 10⁻⁶ m" }, { nome: "2 × 10⁶ m" }, { nome: "0,2 × 10⁻⁵ m" }],
      respostaCerta: "2 × 10⁻⁶ m",
      feedbackAcerto: "🎯 0,000002 = 2 × 10⁻⁶. A vírgula 'andou' 6 casas para a direita, então o expoente é -6.",
      feedbackErro: "Coloque a vírgula após o primeiro algarismo não-zero (2) e conte quantas casas ela andou: 6 casas para a direita → expoente -6.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Expoente negativo: a⁻ⁿ = 1/aⁿ. Inverte a base, o expoente vira positivo — NÃO deixa o número negativo.",
      "Expoente fracionário: a^(1/n) = ⁿ√a e a^(m/n) = ⁿ√(aᵐ). Denominador é o índice da raiz.",
      "Notação científica: N × 10ᵏ, com 1 ≤ N < 10. Número grande → expoente positivo; número pequeno → expoente negativo.",
      "Ao multiplicar/dividir em notação científica: multiplique/divida coeficientes e some/subtraia expoentes de 10.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O valor de 2⁻⁴ é:",
        opcoes: ["1/16", "-16", "16"],
        correta: 0,
        feedbackAcerto: "🎉 2⁻⁴ = 1/2⁴ = 1/16.",
        feedbackErro: "Use a⁻ⁿ = 1/aⁿ: 2⁻⁴ = 1/2⁴ = 1/16. O expoente negativo indica inverso, não sinal negativo.",
      },
      {
        pergunta: "O valor de 27^(1/3) é:",
        opcoes: ["3", "9", "1/3"],
        correta: 0,
        feedbackAcerto: "🎉 27^(1/3) = ³√27 = 3, pois 3³ = 27.",
        feedbackErro: "Expoente 1/3 é raiz cúbica: 27^(1/3) = ³√27 = 3, pois 3 × 3 × 3 = 27.",
      },
      {
        pergunta: "230.000.000 em notação científica é:",
        opcoes: ["2,3 × 10⁸", "23 × 10⁷", "2,3 × 10⁻⁸"],
        correta: 0,
        feedbackAcerto: "🎉 A vírgula anda 8 casas para a esquerda: 230.000.000 = 2,3 × 10⁸.",
        feedbackErro: "Coloque a vírgula após o 2: 2,3. Conte as casas que ela andou: 8 casas para a esquerda → expoente 8 (positivo, pois o número é grande).",
      },
      {
        pergunta: "0,0000091 em notação científica é:",
        opcoes: ["9,1 × 10⁻⁶", "9,1 × 10⁶", "0,91 × 10⁻⁵"],
        correta: 0,
        feedbackAcerto: "🎉 A vírgula andou 6 casas para a direita: 0,0000091 = 9,1 × 10⁻⁶.",
        feedbackErro: "Número pequeno tem expoente negativo. Conte as casas até o primeiro algarismo não-zero (9): 6 casas → 9,1 × 10⁻⁶.",
      },
      {
        pergunta: "(4 × 10³) × (2 × 10²) é igual a:",
        opcoes: ["8 × 10⁵", "6 × 10⁶", "8 × 10⁶"],
        correta: 0,
        feedbackAcerto: "🎉 Multiplique os coeficientes (4×2=8) e some os expoentes (3+2=5): 8 × 10⁵.",
        feedbackErro: "Multiplique coeficientes: 4 × 2 = 8. Some expoentes de 10: 3 + 2 = 5. Resultado: 8 × 10⁵.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçadores de números gigantes e minúsculos",
    materiais: ["Papel", "Caneta", "Internet ou livro (opcional)"],
    passos: [
      "Pesquise ou estime 2 números muito grandes (ex.: distância entre planetas, população de um país) e 2 muito pequenos (ex.: tamanho de uma célula, de um átomo).",
      "Escreva cada um em notação científica, mostrando os passos.",
      "Explique para alguém da família a diferença entre expoente positivo e negativo na notação científica.",
    ],
    registro: "📸 Foto do caderno com os 4 números convertidos.",
  },
  recompensa: { xp: 250, moedas: 120, medalha: "Cientista das Potências" },
};
