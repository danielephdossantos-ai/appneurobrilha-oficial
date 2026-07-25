import type { AulaV4 } from "../../types";

/**
 * Aula 07 · U1 — Missão fechamento: combina dízimas + potências + NC.
 * Padrão piloto: passo a passo interativo em cada momento.
 */
export const aula07_missao: AulaV4 = {
  slug: "u1-07-missao",
  titulo: "Missão — Oficineiro dos Reais",
  iconeTrilha: "🏅",
  bncc: ["EF08MA01"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Todas as ferramentas da U1",
    historia:
      "{NOME}, hoje é MISSÃO. Você vai usar dízimas, potências e notação científica juntas em problemas de verdade. Vale tudo o que aprendeu — sem decoreba.",
  },

  momento02_exploracao: {
    instrucao: "Kit da Unidade 1 — reveja quando cada ferramenta entra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas",
        cabecalhos: ["Ferramenta", "Quando usar", "Chave"],
        linhas: [
          { rotulo: "Dízima", valores: ["Dízima → fração", "Aparece decimal repetindo", "período/9…"] },
          { rotulo: "Pot.", valores: ["Potência", "Base repetida", "aᵐ·aⁿ = aᵐ⁺ⁿ · a⁻ⁿ = 1/aⁿ"] },
          { rotulo: "NC", valores: ["Notação científica", "Número muito grande/pequeno", "a · 10ⁿ, 1 ≤ a < 10"] },
          { rotulo: "Ord.", valores: ["Ordenar NC", "Comparar números em NC", "Expoente → mantissa"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como as ferramentas se combinam?",
    pista: "0,111… vira fração; 2⁻³ vira 1/8; 250.000 vira 2,5·10⁵. São formas do MESMO número.",
    revelacao: "São jeitos diferentes de escrever números reais.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Mesmo número, escritas diferentes",
      passos: [
        { expr: "0,25", explica: "Decimal exato.", status: "neutro" },
        { expr: "= 1/4", explica: "Fração equivalente.", status: "ok" },
        { expr: "= 2,5 · 10⁻¹", explica: "Notação científica.", status: "ok" },
        { expr: "= 25 · 10⁻²", explica: "Mesma quantidade, escrita não canônica.", status: "erro", professor: "Cuidado: 25 · 10⁻² tem o mesmo VALOR (0,25), mas NÃO é notação científica válida — mantissa precisa estar em [1, 10)." },
        { expr: "Forma canônica: 2,5 · 10⁻¹", explica: "Certa.", status: "ok" },
      ],
      fatorada: "0,25 = 1/4 = 2,5 · 10⁻¹",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Combos das ferramentas",
    etapas: [
      {
        texto: "Dízima → fração em situação real.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Ao dividir 5 por 9, aparece 0,555….",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,555… → fração",
            passos: [
              { expr: "x = 0,555…", explica: "Nomeio.", status: "neutro" },
              { expr: "10x = 5,555…", explica: "×10 (1 dígito no período).", status: "ok" },
              { expr: "10x − x = 5", explica: "Cauda cancela.", status: "ok" },
              { expr: "9x = 5 → x = 5/9", explica: "Isolo.", status: "ok", professor: "Atalho: numerador = período, denominador = tantos 9 quanto dígitos do período." },
            ],
            fatorada: "0,555… = 5/9",
          },
          destaque: "0,555… = 5/9.",
        },
      },

      {
        texto: "Potência com expoente negativo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcule 2³ · 2⁻¹.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2³ · 2⁻¹",
            passos: [
              { expr: "2³ · 2⁻¹", explica: "Mesma base.", status: "neutro" },
              { expr: "= 2³⁺⁽⁻¹⁾", explica: "Soma expoentes.", status: "ok", professor: "Mesma base multiplicando → SOMA expoentes. Cuidado com sinal: 3 + (−1) = 2." },
              { expr: "= 2² = 4", explica: "Calcula.", status: "ok" },
            ],
            fatorada: "= 4",
          },
          destaque: "Some expoentes com o SINAL.",
        },
      },

      {
        texto: "NC em problema real.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Um dado científico: 1,5 · 10⁴ células por mm³.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1,5 · 10⁴ → comum",
            passos: [
              { expr: "1,5 · 10⁴", explica: "Expoente +4 → 4 casas à direita.", status: "neutro" },
              { expr: "1,5 → 15 → 150 → 1500 → 15000", explica: "Completa com zero.", status: "ok" },
              { expr: "= 15.000", explica: "Resposta.", status: "ok" },
            ],
            fatorada: "1,5 · 10⁴ = 15.000",
          },
          destaque: "15.000 células por mm³.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 0,000032 em notação científica.",
    resposta: "3,2 · 10⁻⁵",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,000032 → NC",
      passos: [
        { expr: "0,000032", explica: "Ando pra direita.", status: "neutro" },
        { expr: "→ 3,2 (5 casas)", explica: "Parei em 3,2.", status: "ok", professor: "3,2 ∈ [1,10) ✅." },
        { expr: "= 3,2 · 10⁻⁵", explica: "Pequeno → negativo.", status: "ok" },
      ],
      fatorada: "0,000032 = 3,2 · 10⁻⁵",
      legenda: "Modelagem",
    },
    passos: ["Ando até 3,2.", "5 casas.", "= 3,2 · 10⁻⁵."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 0,777… em fração.",
    dica: "Período 7 sobre 9.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,777… → fração",
      passos: [
        { expr: "x = 0,777…", explica: "Nomeio.", status: "neutro" },
        { expr: "10x = 7,777…", explica: "×10.", status: "ok" },
        { expr: "9x = 7", explica: "Cauda cancela.", status: "ok" },
        { expr: "x = 7/9", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "0,777… = 7/9",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7/9" }, { nome: "7/10" }, { nome: "77/100" }],
      respostaCerta: "7/9",
      feedbackAcerto: "🎯 Período/9.",
      feedbackErro: "Dízima simples: numerador = período, denominador = tantos 9 quanto os dígitos do período. Um dígito ‘7’ → 7/9.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (4 · 10⁵) · (2 · 10⁻³) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(4 · 10⁵) · (2 · 10⁻³)",
      passos: [
        { expr: "= (4·2) · 10⁵⁺⁽⁻³⁾", explica: "Multiplicação em NC.", status: "neutro" },
        { expr: "= 8 · 10²", explica: "5 + (−3) = 2.", status: "ok", professor: "Soma expoentes COM SINAL: 5 + (−3) = 2." },
      ],
      fatorada: "= 8 · 10²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 · 10²" }, { nome: "8 · 10⁸" }, { nome: "6 · 10²" }],
      respostaCerta: "8 · 10²",
      feedbackAcerto: "🎯 4·2 = 8; 5 + (−3) = 2.",
      feedbackErro: "Some expoentes COM SINAL. E mantissas MULTIPLICAM (4·2=8, não somam 4+2=6).",
    },
  },

  momento08_aplicacao: {
    contexto: "Um chip mede 5 · 10⁻⁴ m; um cabo mede 2 · 10³ m.",
    problema: "Quantas vezes o cabo é MAIOR que o chip?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2 · 10³) ÷ (5 · 10⁻⁴)",
      passos: [
        { expr: "(2 · 10³) ÷ (5 · 10⁻⁴)", explica: "Quantas vezes = divisão.", status: "neutro", professor: "‘Quantas vezes A é maior que B’ → A ÷ B." },
        { expr: "= (2 ÷ 5) · 10³⁻⁽⁻⁴⁾", explica: "Divisão em NC.", status: "ok" },
        { expr: "= 0,4 · 10³⁺⁴", explica: "Menos com menos vira mais.", status: "ok", professor: "3 − (−4) = 3 + 4 = 7. Subtração com sinal muda o sinal do subtraído." },
        { expr: "= 0,4 · 10⁷", explica: "Mantissa 0,4 fora de [1,10) — ajusto.", status: "erro", professor: "0,4 é menor que 1. Ajuste: 0,4 = 4·10⁻¹." },
        { expr: "= 4 · 10⁻¹ · 10⁷ = 4 · 10⁶", explica: "Ajuste finaliza.", status: "ok" },
      ],
      fatorada: "= 4 · 10⁶ vezes",
      legenda: "Aplicação — comparação de tamanhos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 · 10⁶" }, { nome: "2,5 · 10⁶" }, { nome: "10⁷" }],
      respostaCerta: "4 · 10⁶",
      feedbackAcerto: "🎯 (2·10³) ÷ (5·10⁻⁴) = 0,4·10⁷ = 4·10⁶.",
      feedbackErro: "Divisão em NC: mantissa ÷ mantissa, expoente − expoente COM SINAL. 3 − (−4) = 7. Depois ajuste 0,4 → 4·10⁻¹.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Dízima ↔ fração (período/9…).",
      "Potência com expoente negativo = inverso.",
      "NC unifica números grandes e pequenos; mantissa em [1, 10).",
      "Sinal do expoente diz TAMANHO, não sinal do valor.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,222… =", opcoes: ["2/9", "2/10", "1/5"], correta: 0, feedbackAcerto: "🎉 Período 2 sobre 9.", feedbackErro: "Dízima simples: numerador = período, denominador = 9 (1 dígito no período)." },
      { pergunta: "5⁻² =", opcoes: ["1/25", "−25", "1/10"], correta: 0, feedbackAcerto: "🎉 1/5² = 1/25.", feedbackErro: "Expoente negativo INVERTE (não vira valor negativo). 5⁻² = 1/5² = 1/25." },
      { pergunta: "6.700.000 em NC:", opcoes: ["6,7·10⁶", "67·10⁵", "6,7·10⁷"], correta: 0, feedbackAcerto: "🎉 6 casas → 10⁶.", feedbackErro: "Mantissa 67 é > 10, não vale. Ande até 6,7 e conte 6 casas." },
      { pergunta: "Maior: 3·10⁻¹ ou 9·10⁻³?", opcoes: ["3·10⁻¹", "9·10⁻³", "iguais"], correta: 0, feedbackAcerto: "🎉 −1 > −3.", feedbackErro: "−1 > −3 (mais perto do zero). Expoente domina antes da mantissa." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Oficineiro dos Reais",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça o diploma 'Oficineiro dos Reais'.",
      "Escreva 3 exemplos: uma dízima, uma potência negativa e um número em NC.",
      "Explique um deles para alguém da família.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Oficineiro dos Reais" },
};
