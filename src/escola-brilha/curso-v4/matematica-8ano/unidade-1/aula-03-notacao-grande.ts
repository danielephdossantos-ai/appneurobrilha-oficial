import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U1 — Notação científica para números GRANDES.
 * Padrão piloto: passo a passo com contagem de casas + Professor + armadilhas.
 */
export const aula03_notacaoGrande: AulaV4 = {
  slug: "u1-03-notacao-grande",
  titulo: "Notação científica — números grandes",
  iconeTrilha: "🌍",
  bncc: ["EF08MA01"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quando o número não cabe na tela",
    historia:
      "{NOME}, a distância do Sol à Terra é 149 600 000 000 m. Ninguém escreve assim! A Oficina usa NOTAÇÃO CIENTÍFICA: a · 10ⁿ, com 1 ≤ a < 10. A mantissa tem UM único dígito antes da vírgula.",
  },

  momento02_exploracao: {
    instrucao: "Compare formas de escrever o mesmo número.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Grandes → notação científica",
        cabecalhos: ["Comum", "Notação científica", "Casas movidas"],
        linhas: [
          { rotulo: "300", valores: ["300", "3 · 10²", "2"] },
          { rotulo: "45.000", valores: ["45.000", "4,5 · 10⁴", "4"] },
          { rotulo: "780.000.000", valores: ["780.000.000", "7,8 · 10⁸", "8"] },
          { rotulo: "1,496·10¹¹", valores: ["149.600.000.000", "1,496 · 10¹¹", "11"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Regra: a mantissa a tem que estar entre 1 (inclusive) e 10 (exclusive). O expoente n conta quantas casas a vírgula andou.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar 780.000.000 em a · 10ⁿ com 1 ≤ a < 10?",
    pista: "Ande com a vírgula até sobrar UM dígito antes dela. Conte as casas.",
    revelacao: "780.000.000 → 7,80000000 → 8 casas → 7,8 · 10⁸.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "780.000.000 → NC",
      passos: [
        { expr: "780.000.000,", explica: "Vírgula original está no fim.", status: "neutro", professor: "Todo número inteiro tem vírgula invisível no fim: 780.000.000 = 780.000.000,0." },
        { expr: "78.000.000,0 → 1 casa", explica: "Movo 1 casa à esquerda.", status: "ok" },
        { expr: "7.800.000,00 → 2 casas", explica: "Continua.", status: "ok" },
        { expr: "... andando ...", explica: "Até sobrar 1 dígito.", status: "ok" },
        { expr: "7,80000000 → 8 casas", explica: "Parei quando sobrou UM dígito antes da vírgula.", status: "ok", professor: "Mantissa deve ser ≥1 e <10. Aqui parei em 7,8 (que está entre 1 e 10)." },
        { expr: "= 7,8 · 10⁸", explica: "Expoente = número de casas.", status: "ok", professor: "Andei 8 casas para a esquerda → expoente +8. Número grande sempre dá expoente POSITIVO." },
      ],
      fatorada: "780.000.000 = 7,8 · 10⁸",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Do número comum para a notação científica",
    etapas: [
      {
        texto: "Passo 1: ande a vírgula até sobrar 1 dígito antes dela. Passo 2: conte as casas — esse é o expoente.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "6.400.000 → NC",
            passos: [
              { expr: "6.400.000,", explica: "Vírgula no fim.", status: "neutro", professor: "Todo inteiro tem vírgula invisível no fim." },
              { expr: "6,400000 → mantissa = 6,4", explica: "Ando até sobrar 1 dígito.", status: "ok", professor: "A mantissa é 6,4 porque 6,4 está entre 1 e 10. Zeros à direita depois da vírgula podem ser omitidos." },
              { expr: "Contei 6 casas", explica: "Da posição final até a inicial.", status: "ok", professor: "6 zeros/dígitos foram ‘pulados’ pela vírgula. Grande → expoente positivo." },
              { expr: "6.400.000 = 6,4 · 10⁶", explica: "Junto tudo.", status: "ok" },
            ],
            fatorada: "6.400.000 = 6,4 · 10⁶",
          },
          destaque: "Número grande → expoente POSITIVO igual ao número de casas.",
        },
      },

      {
        texto: "Voltando: da NC para o comum, ande a vírgula pra DIREITA a quantidade do expoente.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2,5 · 10⁵ → comum",
            passos: [
              { expr: "2,5 · 10⁵", explica: "Expoente 5 → 5 casas.", status: "neutro", professor: "Volto: expoente positivo manda a vírgula pra DIREITA. 5 casas." },
              { expr: "2,5 → 25, (1 casa)", explica: "Movo 1 casa.", status: "ok" },
              { expr: "→ 250, (2 casas)", explica: "Preciso completar com zeros.", status: "ok", professor: "Quando acabam os dígitos, completo com zeros. Cada casa vale um zero." },
              { expr: "→ 2.500 → 25.000 → 250.000 (5 casas)", explica: "Total: 5 casas.", status: "ok" },
              { expr: "= 250.000", explica: "Resposta.", status: "ok" },
            ],
            fatorada: "2,5 · 10⁵ = 250.000",
          },
          destaque: "Expoente positivo = vírgula pra DIREITA.",
        },
      },

      {
        texto: "⚠️ Armadilha: 12 · 10⁵ NÃO é notação científica.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "12 · 10⁵ está certo?",
            passos: [
              { expr: "12 · 10⁵", explica: "Mantissa = 12.", status: "erro", professor: "ERRADO como notação científica. A mantissa (12) tem 2 dígitos antes da vírgula — precisa ter apenas 1, entre 1 e 10." },
              { expr: "Ajuste: 12 = 1,2 · 10¹", explica: "Ajusto a mantissa.", status: "ok", professor: "Movo a vírgula 1 casa para deixar só 1 dígito antes: 12 = 1,2 · 10¹." },
              { expr: "12 · 10⁵ = 1,2 · 10¹ · 10⁵", explica: "Substituo.", status: "ok" },
              { expr: "= 1,2 · 10¹⁺⁵ = 1,2 · 10⁶", explica: "Mesma base 10 → soma expoentes.", status: "ok", professor: "1 + 5 = 6. Notação científica CORRETA: 1,2 · 10⁶." },
            ],
            fatorada: "12 · 10⁵ = 1,2 · 10⁶ (correto)",
          },
          destaque: "Mantissa TEM que estar entre 1 e 10. Se passar, ajusta.",
        },
      },

      {
        texto: "Contra-exemplo: nem toda escrita com potência de 10 é notação científica. Verifique a mantissa.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 92.000.000 em notação científica.",
    resposta: "9,2 · 10⁷",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "92.000.000 → NC",
      passos: [
        { expr: "92.000.000,", explica: "Vírgula no fim.", status: "neutro" },
        { expr: "9,2000000 (mantissa = 9,2)", explica: "Andei até sobrar 1 dígito.", status: "ok", professor: "9,2 está entre 1 e 10 ✅." },
        { expr: "7 casas movidas", explica: "Conto.", status: "ok" },
        { expr: "= 9,2 · 10⁷", explica: "Expoente positivo.", status: "ok" },
      ],
      fatorada: "92.000.000 = 9,2 · 10⁷",
      legenda: "Modelagem",
    },
    passos: ["Andei a vírgula até 9,2.", "Contei 7 casas.", "= 9,2 · 10⁷."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: escreva 150.000 em notação científica.",
    dica: "Ande até sobrar 1 dígito antes da vírgula. Conte as casas.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "150.000 → NC",
      passos: [
        { expr: "150.000,", explica: "Vírgula no fim.", status: "neutro" },
        { expr: "1,50000 (mantissa = 1,5)", explica: "5 casas.", status: "ok" },
        { expr: "= 1,5 · 10⁵", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "150.000 = 1,5 · 10⁵",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1,5 · 10⁵" }, { nome: "15 · 10⁴" }, { nome: "1,5 · 10⁴" }],
      respostaCerta: "1,5 · 10⁵",
      feedbackAcerto: "🎯 5 casas para a esquerda, mantissa 1,5.",
      feedbackErro: "Mantissa TEM que estar entre 1 e 10 (15 não vale). E são 5 casas, não 4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 2,3 · 10⁴ = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2,3 · 10⁴ → comum",
      passos: [
        { expr: "2,3 · 10⁴", explica: "Volto para o comum.", status: "neutro" },
        { expr: "Ando 4 casas pra direita", explica: "Expoente positivo.", status: "ok" },
        { expr: "2,3 → 23 → 230 → 2.300 → 23.000", explica: "Completa com zeros.", status: "ok" },
      ],
      fatorada: "2,3 · 10⁴ = 23.000",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "23.000" }, { nome: "2.300" }, { nome: "230.000" }],
      respostaCerta: "23.000",
      feedbackAcerto: "🎯 Andei 4 casas pra direita.",
      feedbackErro: "Expoente 4 = 4 casas pra direita. Conte as casas com atenção.",
    },
  },

  momento08_aplicacao: {
    contexto: "A população do Brasil é ≈ 2,03 · 10⁸ habitantes.",
    problema: "Quantos habitantes é isso escrito por extenso decimal?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2,03 · 10⁸ → comum",
      passos: [
        { expr: "2,03 · 10⁸", explica: "Ando 8 casas pra direita.", status: "neutro", professor: "Expoente +8 → 8 casas para a DIREITA. Se acabarem os dígitos, completo com zeros." },
        { expr: "2,03 → 20,3 → 203, (3 casas)", explica: "Uso os dígitos disponíveis.", status: "ok" },
        { expr: "→ 2030 → 20300 → 203000 → 2030000 → 20300000 → 203000000 (8 casas)", explica: "Completa com zeros.", status: "ok" },
        { expr: "= 203.000.000", explica: "203 milhões.", status: "ok" },
      ],
      fatorada: "2,03 · 10⁸ = 203.000.000",
      legenda: "Aplicação — demografia",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "203.000.000" }, { nome: "20.300.000" }, { nome: "2.030.000.000" }],
      respostaCerta: "203.000.000",
      feedbackAcerto: "🎯 8 casas pra direita = 203 milhões.",
      feedbackErro: "10⁸ → ande 8 casas para a direita, completando com zeros quando faltar dígito.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Notação científica: a · 10ⁿ, com 1 ≤ a < 10.",
      "Grande → expoente positivo. Conte as casas que a vírgula andou.",
      "Voltar: expoente positivo → vírgula pra DIREITA (completa zeros se preciso).",
      "Mantissa fora de [1, 10) precisa ajuste.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5.000 em NC:", opcoes: ["5 · 10³", "0,5 · 10⁴", "5 · 10⁻³"], correta: 0, feedbackAcerto: "🎉 3 casas, mantissa 5.", feedbackErro: "Mantissa deve ser ≥1: 0,5 é menor que 1. E número grande → expoente positivo." },
      { pergunta: "7,4 · 10² =", opcoes: ["740", "74", "7.400"], correta: 0, feedbackAcerto: "🎉 2 casas pra direita.", feedbackErro: "Expoente 2 → 2 casas pra direita: 7,4 → 74 → 740." },
      { pergunta: "Está correta 12 · 10⁵?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉 Mantissa precisa ser < 10.", feedbackErro: "Mantissa 12 tem 2 dígitos antes da vírgula. NC exige 1 ≤ a < 10 — o correto é 1,2 · 10⁶." },
      { pergunta: "1,2 · 10⁶ é igual a:", opcoes: ["1.200.000", "12.000.000", "120.000"], correta: 0, feedbackAcerto: "🎉 6 casas pra direita.", feedbackErro: "Expoente 6 = 6 casas pra direita." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Números gigantes do mundo",
    materiais: ["Papel"],
    passos: [
      "Encontre 3 números grandes (população, distância, orçamento).",
      "Escreva cada um em notação científica.",
      "Confira: a mantissa está entre 1 e 10?",
    ],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
