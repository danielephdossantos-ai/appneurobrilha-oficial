import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U1 — Potências com expoente inteiro (inclui expoente 0 e negativo).
 * Padrão piloto: passo a passo interativo + Professor explica + armadilhas clássicas.
 */
export const aula02_potencias: AulaV4 = {
  slug: "u1-02-potencias",
  titulo: "Potência com expoente inteiro",
  iconeTrilha: "⚡",
  bncc: ["EF08MA01"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O expoente pode ser NEGATIVO?",
    historia:
      "{NOME}, se 10² = 100 e 10¹ = 10, o que seria 10⁻¹? Muita gente pensa que dá número negativo. NÃO dá — dá FRAÇÃO. Hoje a Oficina prova isso passo a passo.",
  },

  momento02_exploracao: {
    instrucao: "Olhe o padrão descendo pela tabela: cada linha é a anterior ÷ 10.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Potências de 10",
        cabecalhos: ["Expoente", "Valor", "Padrão"],
        linhas: [
          { rotulo: "3", valores: ["10³", "1.000", "×10"] },
          { rotulo: "2", valores: ["10²", "100", "÷10"] },
          { rotulo: "1", valores: ["10¹", "10", "÷10"] },
          { rotulo: "0", valores: ["10⁰", "1", "÷10"] },
          { rotulo: "−1", valores: ["10⁻¹", "0,1", "÷10"] },
          { rotulo: "−2", valores: ["10⁻²", "0,01", "÷10"] },
          { rotulo: "−3", valores: ["10⁻³", "0,001", "÷10"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Observe: descer de 10¹ pra 10⁰ é dividir por 10 (10÷10 = 1). Descer de 10⁰ pra 10⁻¹ é dividir por 10 de novo (1÷10 = 0,1). O padrão nunca quebra.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se cada linha ÷10 da anterior, o que aparece depois de 10⁰ = 1?",
    pista: "1 ÷ 10 = 0,1 = 1/10. E 0,1 ÷ 10 = 0,01 = 1/100.",
    revelacao: "a⁻ⁿ = 1/aⁿ. Expoente negativo é INVERSO, nunca sinal negativo do valor.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "10⁻² = ?",
      passos: [
        { expr: "10² = 100", explica: "Base 10, expoente positivo.", status: "neutro", professor: "Começo do padrão conhecido: 10 × 10 = 100." },
        { expr: "10¹ = 10", explica: "÷10.", status: "ok", professor: "Descendo uma linha, divido por 10." },
        { expr: "10⁰ = 1", explica: "÷10 de novo.", status: "ok", professor: "10 ÷ 10 = 1. Por isso qualquer base ≠ 0 elevada a 0 vale 1." },
        { expr: "10⁻¹ = 1 ÷ 10 = 1/10", explica: "÷10 de novo — vira fração.", status: "ok", professor: "1 ÷ 10 = 0,1 = 1/10. O expoente virou negativo porque continuei dividindo." },
        { expr: "10⁻² = 1/10² = 1/100", explica: "Regra geral: a⁻ⁿ = 1/aⁿ.", status: "ok", professor: "Expoente negativo INVERTE a base. NÃO significa valor negativo. Fique atento: 10⁻² = 0,01 é POSITIVO." },
      ],
      fatorada: "10⁻ⁿ = 1/10ⁿ",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Regras das potências — passo a passo",
    etapas: [
      {
        texto: "Definições básicas: a¹, a⁰ e a⁻ⁿ.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Calcule: 7¹ · 5⁰ · 2⁻³",
            passos: [
              { expr: "7¹ = 7", explica: "Expoente 1 = o próprio número.", status: "neutro", professor: "a¹ = a sempre. É só o próprio número." },
              { expr: "5⁰ = 1", explica: "Qualquer base ≠ 0 elevada a 0 vale 1.", status: "ok", professor: "Regra: a⁰ = 1 para todo a ≠ 0. IMPORTANTE: 0⁰ é indeterminado — não tem valor definido no ensino básico." },
              { expr: "2⁻³ = 1/2³", explica: "Expoente negativo INVERTE.", status: "ok", professor: "a⁻ⁿ = 1/aⁿ. Aqui 2⁻³ = 1/2³. Não confunda com −(2³) = −8." },
              { expr: "2³ = 8", explica: "Calculo a potência do denominador.", status: "ok", professor: "2·2·2 = 8. Só agora aplico o expoente." },
              { expr: "2⁻³ = 1/8", explica: "Fração final.", status: "ok" },
              { expr: "Resposta: 7 · 1 · 1/8 = 7/8", explica: "Junto tudo.", status: "ok", professor: "Multiplico os três resultados: 7 × 1 × 1/8 = 7/8." },
            ],
            fatorada: "7¹ · 5⁰ · 2⁻³ = 7/8",
          },
          destaque: "a⁻ⁿ = 1/aⁿ, NUNCA valor negativo.",
        },
      },

      {
        texto: "Mesma base: multiplicação SOMA expoentes, divisão SUBTRAI expoentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2³ · 2² e 2⁵ ÷ 2² e (2³)²",
            passos: [
              { expr: "2³ · 2² = 2³⁺² = 2⁵", explica: "Mesma base, ×: soma.", status: "neutro", professor: "Multiplicação de mesma base: repito a base, SOMO os expoentes. 3 + 2 = 5." },
              { expr: "2⁵ = 32", explica: "Calculo.", status: "ok", professor: "2·2·2·2·2 = 32." },
              { expr: "2⁵ ÷ 2² = 2⁵⁻² = 2³", explica: "Mesma base, ÷: subtrai.", status: "ok", professor: "Divisão de mesma base: repito a base, SUBTRAIO os expoentes. 5 − 2 = 3." },
              { expr: "2³ = 8", explica: "Resultado.", status: "ok" },
              { expr: "(2³)² = 2³ˣ² = 2⁶", explica: "Potência de potência: MULTIPLICA.", status: "ok", professor: "Potência de potência: MULTIPLICO os expoentes. 3 × 2 = 6." },
              { expr: "2⁶ = 64", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "×: soma · ÷: subtrai · (aᵐ)ⁿ: multiplica",
          },
          destaque: "Só vale se a BASE for igual. 2³ · 3² NÃO simplifica.",
        },
      },

      {
        texto: "⚠️ Armadilha clássica do 8º ano: (−2)² é diferente de −2².",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−2)²  vs  −2²",
            passos: [
              { expr: "(−2)² = (−2) · (−2)", explica: "Parênteses → a base é −2.", status: "neutro", professor: "Os parênteses são DECISIVOS: eles dizem que a base é o número negativo −2. Elevo o −2 inteiro ao quadrado." },
              { expr: "(−2)² = +4", explica: "Menos × menos = mais.", status: "ok", professor: "(−) × (−) = (+). Resultado POSITIVO." },
              { expr: "−2² = −(2 · 2)", explica: "SEM parênteses → só o 2 é a base.", status: "x", professor: "SEM parênteses, o expoente age SÓ no 2. O sinal de menos fica DE FORA da potência." },
              { expr: "−2² = −4", explica: "Resultado NEGATIVO.", status: "ok", professor: "Primeiro calculo 2² = 4. Depois aplico o sinal de menos: −4. Regra: parênteses definem quem é a base." },
            ],
            fatorada: "(−2)² = +4    ·    −2² = −4",
          },
          destaque: "Parênteses mudam TUDO em potência com sinal.",
        },
      },

      {
        texto: "Expoente negativo em base fracionária INVERTE a base.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(1/2)⁻³ = ?",
            passos: [
              { expr: "(1/2)⁻³", explica: "Base fracionária, expoente negativo.", status: "neutro", professor: "Quando a base é uma fração e o expoente é negativo, o atalho é INVERTER a fração e trocar o sinal do expoente." },
              { expr: "(1/2)⁻³ = (2/1)³ = 2³", explica: "Inverte e vira positivo.", status: "ok", professor: "1/2 invertido é 2/1 = 2. E o −3 vira +3." },
              { expr: "2³ = 8", explica: "Calculo.", status: "ok" },
            ],
            fatorada: "(1/2)⁻³ = 8",
          },
          destaque: "Base fracionária + expoente negativo → inverte a fração.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: calcule 2⁻³.",
    resposta: "1/8",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2⁻³ = ?",
      passos: [
        { expr: "2⁻³", explica: "Expoente negativo.", status: "neutro", professor: "Vou aplicar a regra a⁻ⁿ = 1/aⁿ." },
        { expr: "2⁻³ = 1/2³", explica: "Inverto.", status: "ok", professor: "Expoente negativo NÃO é sinal negativo do valor: é INVERSO." },
        { expr: "2³ = 2·2·2 = 8", explica: "Calculo o denominador.", status: "ok" },
        { expr: "2⁻³ = 1/8", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "2⁻³ = 1/8",
      legenda: "Modelagem",
    },
    passos: ["2⁻³ = 1/2³.", "2³ = 8.", "= 1/8."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: 3⁻² vale quanto?",
    dica: "Expoente negativo INVERTE: 3⁻² = 1/3².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3⁻² = ?",
      passos: [
        { expr: "3⁻² = 1/3²", explica: "Inverte.", status: "neutro" },
        { expr: "3² = 9", explica: "Calcula o denominador.", status: "ok" },
        { expr: "3⁻² = 1/9", explica: "Resposta positiva.", status: "ok" },
      ],
      fatorada: "3⁻² = 1/9",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/9" }, { nome: "−9" }, { nome: "1/6" }],
      respostaCerta: "1/9",
      feedbackAcerto: "🎯 1/3² = 1/9.",
      feedbackErro: "Expoente negativo INVERTE, não deixa o valor negativo. E 3² = 9, não 6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 5² · 5⁻³ = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5² · 5⁻³ = ?",
      passos: [
        { expr: "5² · 5⁻³ = 5²⁺⁽⁻³⁾", explica: "Mesma base → soma expoentes.", status: "neutro" },
        { expr: "5² · 5⁻³ = 5⁻¹", explica: "2 + (−3) = −1.", status: "ok" },
        { expr: "5⁻¹ = 1/5", explica: "Expoente negativo → inverte.", status: "ok" },
      ],
      fatorada: "5² · 5⁻³ = 1/5",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/5" }, { nome: "5" }, { nome: "5⁻⁶" }],
      respostaCerta: "1/5",
      feedbackAcerto: "🎯 5²⁺⁽⁻³⁾ = 5⁻¹ = 1/5.",
      feedbackErro: "Mesma base MULTIPLICANDO → SOMA expoentes (não multiplica). 2 + (−3) = −1.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um computador guarda 2¹⁰ bytes em 1 KB. Um arquivo ocupa 2¹⁵ bytes.",
    problema: "Quantos KB o arquivo ocupa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2¹⁵ ÷ 2¹⁰ = ?",
      passos: [
        { expr: "2¹⁵ ÷ 2¹⁰", explica: "Divisão de mesma base.", status: "neutro", professor: "KB = bytes ÷ 2¹⁰. Então preciso dividir 2¹⁵ por 2¹⁰." },
        { expr: "2¹⁵ ÷ 2¹⁰ = 2¹⁵⁻¹⁰", explica: "Subtrai expoentes.", status: "ok", professor: "Regra: mesma base dividindo → SUBTRAIO os expoentes. 15 − 10." },
        { expr: "2¹⁵ ÷ 2¹⁰ = 2⁵", explica: "15 − 10 = 5.", status: "ok" },
        { expr: "2⁵ = 32", explica: "Calculo a potência.", status: "ok", professor: "2·2·2·2·2 = 32. O arquivo ocupa 32 KB." },
      ],
      fatorada: "= 32 KB",
      legenda: "Aplicação — informática",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2⁵ = 32 KB" }, { nome: "2²⁵ KB" }, { nome: "5 KB" }],
      respostaCerta: "2⁵ = 32 KB",
      feedbackAcerto: "🎯 2¹⁵ ÷ 2¹⁰ = 2⁵ = 32.",
      feedbackErro: "Mesma base dividindo → SUBTRAI (não multiplica) expoentes: 15 − 10 = 5.",
    },
  },

  momento09_revisao: {
    pontos: [
      "a¹ = a. a⁰ = 1 (para a ≠ 0). a⁻ⁿ = 1/aⁿ.",
      "Mesma base: multiplicar SOMA, dividir SUBTRAI expoentes.",
      "Potência de potência: MULTIPLICA expoentes.",
      "Expoente negativo NÃO é valor negativo. Parênteses definem a base.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "10⁻² =", opcoes: ["0,01", "−100", "0,1"], correta: 0, feedbackAcerto: "🎉 1/10² = 1/100 = 0,01.", feedbackErro: "Expoente negativo = INVERSO, não valor negativo. 10⁻² = 1/100." },
      { pergunta: "(−3)² =", opcoes: ["9", "−9", "6"], correta: 0, feedbackAcerto: "🎉 Parênteses → base −3. (−3)·(−3) = +9.", feedbackErro: "Parênteses fecham o −3 como base. Menos × menos = mais: (−3)² = +9." },
      { pergunta: "−3² =", opcoes: ["−9", "9", "−6"], correta: 0, feedbackAcerto: "🎉 Sem parênteses o expoente pega só o 3: −(3²) = −9.", feedbackErro: "SEM parênteses o menos fica fora: primeiro 3² = 9, depois aplica o menos: −9." },
      { pergunta: "7⁰ =", opcoes: ["1", "0", "7"], correta: 0, feedbackAcerto: "🎉 Base ≠ 0 elevada a 0 = 1.", feedbackErro: "Toda base ≠ 0 elevada ao expoente 0 vale 1." },
      { pergunta: "(2³)² =", opcoes: ["64", "6", "12"], correta: 0, feedbackAcerto: "🎉 Multiplica expoentes: 2⁶ = 64.", feedbackErro: "Potência de potência: MULTIPLICA expoentes. 3 × 2 = 6 → 2⁶ = 64." },
      { pergunta: "4² · 4⁻¹ =", opcoes: ["4", "1", "16"], correta: 0, feedbackAcerto: "🎉 2 + (−1) = 1 → 4¹ = 4.", feedbackErro: "Mesma base multiplicando → SOMA expoentes: 2 + (−1) = 1." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tabela das potências de 10",
    materiais: ["Papel"],
    passos: [
      "Faça uma tabela de 10⁻³ até 10³.",
      "Mostre pra alguém da família que cada linha é ÷10 da anterior.",
      "Explique por que 10⁻² é POSITIVO (0,01).",
    ],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
