import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U2 — Polinômios: somar, subtrair e multiplicar.
 * Padrão piloto: passo a passo + Professor + armadilha da troca de sinais na subtração.
 */
export const aula03_polinomios: AulaV4 = {
  slug: "u2-03-polinomios",
  titulo: "Polinômios: somar, subtrair e multiplicar",
  iconeTrilha: "🧩",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Combos de monômios",
    historia:
      "{NOME}, polinômio é um combo de monômios: 2x² + 3x − 5. A Álgebra agora monta e desmonta esses combos usando três operações: soma, subtração e multiplicação (distributiva).",
  },

  momento02_exploracao: {
    instrucao: "Identifique os termos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Nomes por número de termos",
        cabecalhos: ["Termos", "Nome", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["1", "monômio", "3x"] },
          { rotulo: "2", valores: ["2", "binômio", "2x + 1"] },
          { rotulo: "3", valores: ["3", "trinômio", "x² + 2x − 3"] },
          { rotulo: "n", valores: ["4+", "polinômio", "x³ − 2x² + x − 5"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Grau do polinômio = maior grau entre seus monômios. Em 'x³ − 2x² + x − 5', o grau é 3.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como somar (2x + 3) + (x + 1)?",
    pista: "Junte semelhantes: os x com os x, as constantes com as constantes.",
    revelacao: "3x + 4. Soma de polinômio = soma de semelhantes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2x + 3) + (x + 1)",
      passos: [
        { expr: "(2x + 3) + (x + 1)", explica: "Original.", status: "neutro" },
        { expr: "= 2x + 3 + x + 1", explica: "Tiro os parênteses (sinais mantidos).", status: "ok", professor: "Quando o parêntese está PRECEDIDO por +, os sinais internos NÃO mudam." },
        { expr: "= (2x + x) + (3 + 1)", explica: "Agrupo semelhantes.", status: "ok" },
        { expr: "= 3x + 4", explica: "Somo cada grupo.", status: "ok" },
      ],
      fatorada: "= 3x + 4",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Operar polinômios",
    etapas: [
      {
        texto: "SOMA: agrupe SEMELHANTES.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(3x² + 2x − 1) + (x² − 5x + 4)",
            passos: [
              { expr: "3x² + 2x − 1 + x² − 5x + 4", explica: "Tiro parênteses (+ na frente).", status: "neutro" },
              { expr: "(3x² + x²) + (2x − 5x) + (−1 + 4)", explica: "Agrupo semelhantes.", status: "ok", professor: "x² com x²; x com x; constantes com constantes." },
              { expr: "4x² + (−3x) + 3", explica: "Somo cada grupo.", status: "ok" },
              { expr: "= 4x² − 3x + 3", explica: "Escrita padrão.", status: "ok" },
            ],
            fatorada: "= 4x² − 3x + 3",
          },
          destaque: "Só junta o que é semelhante.",
        },
      },

      {
        texto: "⚠️ SUBTRAÇÃO: TROQUE o sinal de CADA termo do 2º polinômio antes de somar.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(5x − 2) − (2x + 4)",
            passos: [
              { expr: "(5x − 2) − (2x + 4)", explica: "Original.", status: "neutro", professor: "O menos na frente do parêntese troca TODOS os sinais internos. Erro clássico: só trocar o primeiro." },
              { expr: "= 5x − 2 − 2x − 4", explica: "Distribuo o menos.", status: "ok", professor: "+2x virou −2x. +4 virou −4. Todo termo do 2º muda de sinal." },
              { expr: "= (5x − 2x) + (−2 − 4)", explica: "Agrupo.", status: "ok" },
              { expr: "= 3x + (−6) = 3x − 6", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= 3x − 6",
          },
          destaque: "− antes de ( ) troca TUDO dentro.",
        },
      },

      {
        texto: "MULTIPLICAÇÃO: distributiva — cada termo do 1º vezes cada termo do 2º.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 3)·(x + 2)",
            passos: [
              { expr: "(x + 3)·(x + 2)", explica: "Distributiva.", status: "neutro", professor: "Cada termo do 1º multiplica CADA termo do 2º. 2 termos × 2 termos = 4 produtos." },
              { expr: "= x·x + x·2 + 3·x + 3·2", explica: "Faço os 4 produtos.", status: "ok" },
              { expr: "= x² + 2x + 3x + 6", explica: "Calculo.", status: "ok" },
              { expr: "= x² + 5x + 6", explica: "Junto semelhantes.", status: "ok", professor: "2x e 3x são semelhantes: 2x + 3x = 5x." },
            ],
            fatorada: "= x² + 5x + 6",
          },
          destaque: "Todo × todo, depois junta semelhantes.",
        },
      },

      {
        texto: "Multiplicação de monômio por polinômio: distribua no interior.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x · (3x² − 4x + 5)",
            passos: [
              { expr: "2x · (3x² − 4x + 5)", explica: "Distributiva simples.", status: "neutro" },
              { expr: "= 2x·3x² + 2x·(−4x) + 2x·5", explica: "Cada termo.", status: "ok" },
              { expr: "= 6x³ − 8x² + 10x", explica: "Aplico monômios.", status: "ok", professor: "Cada produto é uma multiplicação de monômios (aula 02): coef × coef, expoentes SOMAM." },
            ],
            fatorada: "= 6x³ − 8x² + 10x",
          },
          destaque: "Monômio × polinômio: distributiva termo a termo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (2x² + x) + (3x² − 4x).",
    resposta: "5x² − 3x",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2x² + x) + (3x² − 4x)",
      passos: [
        { expr: "2x² + x + 3x² − 4x", explica: "Tiro parênteses.", status: "neutro" },
        { expr: "(2x² + 3x²) + (x − 4x)", explica: "Agrupo semelhantes.", status: "ok" },
        { expr: "= 5x² + (−3x) = 5x² − 3x", explica: "Somo.", status: "ok", professor: "1x − 4x = −3x. Cuidado: 'x' sem coef é 1x." },
      ],
      fatorada: "= 5x² − 3x",
      legenda: "Modelagem",
    },
    passos: ["x²: 2+3 = 5.", "x: 1−4 = −3.", "= 5x² − 3x."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (3x + 5) + (2x − 3) = ?",
    dica: "Some semelhantes: coeficientes de x com x; constantes com constantes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(3x + 5) + (2x − 3)",
      passos: [
        { expr: "3x + 5 + 2x − 3", explica: "Tiro parênteses.", status: "neutro" },
        { expr: "(3x + 2x) + (5 − 3)", explica: "Agrupo.", status: "ok" },
        { expr: "= 5x + 2", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= 5x + 2",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5x + 2" }, { nome: "5x + 8" }, { nome: "6x + 2" }],
      respostaCerta: "5x + 2",
      feedbackAcerto: "🎯 3+2 = 5, 5−3 = 2.",
      feedbackErro: "Some x com x (3+2=5) e constantes com constantes (5−3=2, NÃO 5+3=8; o segundo é −3).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (x + 4)·(x + 1) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 4)·(x + 1)",
      passos: [
        { expr: "x·x + x·1 + 4·x + 4·1", explica: "Distributiva.", status: "neutro" },
        { expr: "= x² + x + 4x + 4", explica: "Calculo.", status: "ok" },
        { expr: "= x² + 5x + 4", explica: "Junto semelhantes.", status: "ok" },
      ],
      fatorada: "= x² + 5x + 4",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 5x + 4" }, { nome: "x² + 4x + 4" }, { nome: "x² + 4" }],
      respostaCerta: "x² + 5x + 4",
      feedbackAcerto: "🎯 Distributiva: 4 produtos e junta semelhantes.",
      feedbackErro: "Faltou UM dos 4 produtos. Distributiva completa: x·x + x·1 + 4·x + 4·1 = x² + x + 4x + 4 = x² + 5x + 4.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um retângulo tem base (x + 3) m e altura (x + 2) m.",
    problema: "Qual a área expressa como polinômio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área = (x + 3)·(x + 2)",
      passos: [
        { expr: "(x + 3)·(x + 2)", explica: "Base × altura.", status: "neutro" },
        { expr: "= x² + 2x + 3x + 6", explica: "Distributiva.", status: "ok" },
        { expr: "= x² + 5x + 6", explica: "Junto semelhantes.", status: "ok", professor: "Repare: soma dos coef do meio (2+3=5) coincide com a soma das constantes dos fatores. Isso é padrão em (x+a)(x+b): dá x² + (a+b)x + ab." },
      ],
      fatorada: "Área = x² + 5x + 6 m²",
      legenda: "Aplicação — área de retângulo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 5x + 6" }, { nome: "x² + 6" }, { nome: "2x + 5" }],
      respostaCerta: "x² + 5x + 6",
      feedbackAcerto: "🎯 Distributiva completa.",
      feedbackErro: "Área NÃO é a soma dos lados (2x+5) nem só os quadrados (x²+6). É a MULTIPLICAÇÃO: distributiva completa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Soma: agrupe semelhantes; sinais mantidos ao tirar '+( )'.",
      "Subtração: TROQUE o sinal de cada termo do 2º; depois some.",
      "Multiplicação: distributiva (todo × todo); depois junta semelhantes.",
      "Grau do polinômio = maior grau entre seus monômios.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+2)+(x+3) =", opcoes: ["2x+5", "x+5", "2x+6"], correta: 0, feedbackAcerto: "🎉 Soma semelhantes.", feedbackErro: "x+x = 2x (não x). 2+3 = 5. Resposta: 2x+5." },
      { pergunta: "(3x)−(x) =", opcoes: ["2x", "3", "4x"], correta: 0, feedbackAcerto: "🎉 3x − 1x = 2x.", feedbackErro: "x tem coef 1 (é 1x). 3x − 1x = 2x. Não é 3 (números não somem com letras)." },
      { pergunta: "(x+1)(x+1) =", opcoes: ["x²+2x+1", "x²+1", "2x+2"], correta: 0, feedbackAcerto: "🎉 Distributiva completa.", feedbackErro: "Distribua: x·x + x·1 + 1·x + 1·1 = x² + 2x + 1. NUNCA (x+1)² = x²+1 — isso ignora o 2ab." },
      { pergunta: "(5x + 3) − (2x + 1) =", opcoes: ["3x + 2", "3x + 4", "7x + 4"], correta: 0, feedbackAcerto: "🎉 Troco os sinais do 2º.", feedbackErro: "Menos na frente TROCA TODOS os sinais internos: 5x + 3 − 2x − 1 = 3x + 2. Se deu 3x+4, esqueceu de trocar o +1 pra −1." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Área com letras",
    materiais: ["Papel"],
    passos: [
      "Desenhe um retângulo de lados (x+2) e (x+5).",
      "Escreva a área como polinômio usando distributiva.",
      "Confira: a soma dos coef do meio dá 2+5 = 7? E o produto das constantes é 10?",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
