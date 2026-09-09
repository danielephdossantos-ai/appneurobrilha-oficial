import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Aumentos e descontos sucessivos.
 * Formato: fator multiplicativo com passo a passo interativo.
 * Professor cuida do porquê "20% + 20% ≠ 40%" e da regra de multiplicar fatores.
 */
export const aula01_aumentoDesconto: AulaV4 = {
  slug: "u5-01-aumento-desconto",
  titulo: "Aumentos e descontos sucessivos",
  iconeTrilha: "📈",
  bncc: ["EF08MA04"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "20% + 20% NÃO dá 40%",
    historia:
      "{NOME}, um preço subiu 20% e depois caiu 20%. Muita gente jura que voltou ao original — mas NÃO volta. Hoje você vai entender por quê e nunca mais cair nessa.",
  },

  momento02_exploracao: {
    instrucao: "Acompanhe passo a passo o que acontece com R$ 100.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "100 → +20% → −20% → ?",
        passos: [
          {
            expr: "Preço inicial = R$ 100",
            explica: "Ponto de partida.",
            status: "neutro",
            professor:
              "Cada porcentagem é calculada sobre o valor ATUAL, não sobre o original. É isso que muda tudo.",
          },
          {
            expr: "+20% de 100 = 20",
            explica: "Aumento aplicado sobre 100.",
            status: "ok",
            professor:
              "20% de 100 é 20. Novo preço: 100 + 20 = 120.",
          },
          {
            expr: "Novo preço = R$ 120",
            explica: "Preço após o aumento.",
            status: "ok",
            professor:
              "Agora a base do desconto passa a ser 120, NÃO mais 100. Aqui está a pegadinha.",
          },
          {
            expr: "−20% de 120 = 24",
            explica: "Desconto aplicado sobre 120.",
            status: "ok",
            professor:
              "20% de 120 é 24 — maior do que os 20 que subiram. Por isso o preço não volta.",
          },
          {
            expr: "Preço final = 120 − 24 = R$ 96",
            explica: "R$ 4 a menos do que o original.",
            status: "ok",
            professor:
              "Perdemos 4% do valor original mesmo com 'aumento e desconto iguais'. Regra: porcentagens sucessivas NUNCA se somam.",
          },
        ],
        fatorada: "100 · 1,20 · 0,80 = 96",
        legenda: "Cada % age sobre o valor atual, não sobre o original",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Existe um jeito mais rápido do que fazer 3 contas separadas?",
    pista: "Todo aumento de i% multiplica por (1 + i). Todo desconto multiplica por (1 − i).",
    revelacao:
      "Fator multiplicativo! Aumento de 20% = × 1,20. Desconto de 20% = × 0,80. Sucessivos: multiplica os fatores.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "100 → +20% → −20%",
      passos: [
        {
          expr: "Fator de aumento = 1 + 0,20 = 1,20",
          explica: "Aumento de 20%.",
          status: "ok",
          professor: "1 representa o preço inteiro; +0,20 é a fatia que vai a mais.",
        },
        {
          expr: "Fator de desconto = 1 − 0,20 = 0,80",
          explica: "Desconto de 20%.",
          status: "ok",
          professor: "1 é o preço inteiro; −0,20 é a fatia retirada.",
        },
        {
          expr: "100 · 1,20 · 0,80",
          explica: "Aplico os dois fatores em sequência.",
          status: "ok",
          professor: "Multiplicação: a ordem não importa. Posso resolver os fatores primeiro.",
        },
        {
          expr: "1,20 · 0,80 = 0,96",
          explica: "Fator combinado.",
          status: "ok",
          professor: "0,96 = 96% do original. Ou seja, perdi 4%.",
        },
        {
          expr: "100 · 0,96 = R$ 96",
          explica: "Bate com o cálculo passo a passo.",
          status: "ok",
          professor: "Mesmo resultado, uma conta só. Esse é o poder do fator multiplicativo.",
        },
      ],
      fatorada: "Preço final = C · f₁ · f₂ · … · fₙ",
    },
  },

  momento04_explicacao: {
    titulo: "Fator multiplicativo — 3 casos",
    etapas: [
      {
        texto: "Caso 1 — Aumento de 15% sobre R$ 200.",
        exemploReal: {
          titulo: "🔎 Só multiplicar",
          contexto: "Uma camisa de R$ 200 sobe 15%. Qual o novo preço?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "200 com +15%",
            passos: [
              { expr: "i = 15% = 0,15", explica: "% em decimal.", status: "ok", professor: "Divida por 100. É a mesma porcentagem, escrita de outro jeito." },
              { expr: "f = 1 + 0,15 = 1,15", explica: "Fator de aumento.", status: "ok", professor: "1 é o preço inteiro; +0,15 é o extra." },
              { expr: "200 · 1,15", explica: "Aplico o fator.", status: "ok", professor: "Truque: 200·1 = 200 e 200·0,15 = 30. Somo: 230." },
              { expr: "= R$ 230", explica: "Preço final.", status: "ok", professor: "Confere: aumentei 30 reais, que é 15% de 200." },
            ],
            fatorada: "P = C · (1 + i)",
          },
          destaque: "Aumento de 15%: multiplica por 1,15.",
        },
      },
      {
        texto: "Caso 2 — Desconto de 30% sobre R$ 150.",
        exemploReal: {
          titulo: "🔎 Fator (1 − i)",
          contexto: "Um tênis de R$ 150 tem 30% de desconto.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "150 com −30%",
            passos: [
              { expr: "i = 30% = 0,30", explica: "% em decimal.", status: "ok", professor: "Sempre transforme antes de multiplicar." },
              { expr: "f = 1 − 0,30 = 0,70", explica: "Fator de desconto.", status: "ok", professor: "Pago 70% do preço; 30% é o desconto." },
              { expr: "150 · 0,70", explica: "Aplico o fator.", status: "ok", professor: "150·0,7 = 105. (150·7 = 1050; divido por 10.)" },
              { expr: "= R$ 105", explica: "Preço final.", status: "ok", professor: "Economizei R$ 45. Confere: 30% de 150 é 45." },
            ],
            fatorada: "P = C · (1 − i)",
          },
          destaque: "Desconto de 30%: multiplica por 0,70.",
        },
      },
      {
        texto: "Caso 3 — Sucessivos: +20% depois −20% sobre R$ 100.",
        exemploReal: {
          titulo: "🔎 Multiplica os fatores",
          contexto: "É a pegadinha da motivação — agora com fator.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "100 com +20% e −20%",
            passos: [
              { expr: "f₁ = 1,20 (aumento)", explica: "Primeiro fator.", status: "ok", professor: "Sempre monte um fator por operação." },
              { expr: "f₂ = 0,80 (desconto)", explica: "Segundo fator.", status: "ok", professor: "Não some! Multiplique." },
              { expr: "f = 1,20 · 0,80 = 0,96", explica: "Fator combinado.", status: "ok", professor: "Truque: 12·8 = 96; ajusto vírgula → 0,96." },
              { expr: "100 · 0,96 = R$ 96", explica: "Perda real de 4%.", status: "ok", professor: "Se somasse (1,20 + 0,80 = 2,00) daria absurdo. Multiplicação é a operação certa aqui." },
            ],
            fatorada: "P = C · f₁ · f₂",
          },
          destaque: "Fator < 1 → preço caiu. Perdi 4% do original.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "R$ 500 com aumento de 10% seguido de desconto de 10%. Qual o preço final?",
    resposta: "R$ 495",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "500 · 1,10 · 0,90",
      passos: [
        { expr: "f₁ = 1,10", explica: "Aumento 10%.", status: "ok", professor: "1 + 0,10." },
        { expr: "f₂ = 0,90", explica: "Desconto 10%.", status: "ok", professor: "1 − 0,10." },
        { expr: "1,10 · 0,90 = 0,99", explica: "Fator combinado.", status: "ok", professor: "Perdi 1% do original." },
        { expr: "500 · 0,99 = 495", explica: "Preço final.", status: "ok", professor: "Confere: NÃO voltou aos 500 iniciais." },
      ],
    },
    passos: ["f₁ = 1,10 e f₂ = 0,90.", "1,10 · 0,90 = 0,99.", "500 · 0,99 = R$ 495."],
  },

  momento06_praticaGuiada: {
    enunciado: "R$ 80 com aumento de 25%. Qual o novo preço?",
    dica: "Aumento = × (1 + i). Aqui: × 1,25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novo preço:",
      opcoes: [{ nome: "R$ 100" }, { nome: "R$ 105" }, { nome: "R$ 95" }],
      respostaCerta: "R$ 100",
      feedbackAcerto: "🎯 80 · 1,25 = 100.",
      feedbackErro: "25% de 80 = 20. 80 + 20 = 100. Ou direto: 80 · 1,25.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "R$ 200 com desconto de 15%. Novo preço:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novo preço:",
      opcoes: [{ nome: "R$ 170" }, { nome: "R$ 185" }, { nome: "R$ 175" }],
      respostaCerta: "R$ 170",
      feedbackAcerto: "🎯 200 · 0,85 = 170.",
      feedbackErro: "Fator = 1 − 0,15 = 0,85. Multiplique por 200.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma calça de R$ 200 sobe 20% na alta temporada. Depois cai 10% na liquidação.",
    problema: "Qual o preço final da calça?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "200 · 1,20 · 0,90",
      passos: [
        { expr: "f₁ = 1,20 (alta)", explica: "Aumento de 20%.", status: "ok", professor: "Alta temporada empurra o preço para cima." },
        { expr: "f₂ = 0,90 (liquidação)", explica: "Desconto de 10%.", status: "ok", professor: "Aplicado sobre o preço já aumentado." },
        { expr: "1,20 · 0,90 = 1,08", explica: "Fator combinado.", status: "ok", professor: "Ficou 8% mais caro que o original — apesar da 'liquidação'." },
        { expr: "200 · 1,08 = R$ 216", explica: "Preço final.", status: "ok", professor: "Lição de consumidor: 'desconto após aumento' quase nunca desconta de verdade." },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Preço final:",
      opcoes: [{ nome: "R$ 216" }, { nome: "R$ 220" }, { nome: "R$ 200" }],
      respostaCerta: "R$ 216",
      feedbackAcerto: "🎯 200 · 1,20 · 0,90 = 216.",
      feedbackErro: "Sucessivos: multiplique 1,20 · 0,90 = 1,08. Depois × 200.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Aumento de i%: multiplica por (1 + i).",
      "Desconto de i%: multiplica por (1 − i).",
      "Sucessivos: MULTIPLICA os fatores, NUNCA soma as porcentagens.",
      "Fator > 1 subiu; fator < 1 caiu; fator = 1 empatou.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Fator para aumento de 10%:", opcoes: ["1,10", "0,90", "10"], correta: 0, feedbackAcerto: "🎉 1 + 0,10.", feedbackErro: "Aumento: (1 + i)." },
      { pergunta: "Fator para desconto de 25%:", opcoes: ["0,75", "1,25", "0,25"], correta: 0, feedbackAcerto: "🎉 1 − 0,25.", feedbackErro: "Desconto: (1 − i)." },
      { pergunta: "R$ 50 com aumento de 10%:", opcoes: ["R$ 55", "R$ 60", "R$ 45"], correta: 0, feedbackAcerto: "🎉 50 · 1,10.", feedbackErro: "Multiplica por 1,10." },
      { pergunta: "R$ 100 com +10% e depois −10%:", opcoes: ["R$ 99", "R$ 100", "R$ 101"], correta: 0, feedbackAcerto: "🎉 1,10 · 0,90 = 0,99.", feedbackErro: "Sucessivos nunca voltam ao original." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive de promoção",
    materiais: ["Papel", "Celular ou encartes"],
    passos: [
      "Ache 3 preços com desconto anunciado em porcentagem.",
      "Calcule com fator (1 − i) e confirme se o preço final bate.",
      "Marque uma que 'engana' — quando o desconto é aplicado depois de um aumento.",
    ],
    registro: "📸 Foto dos preços e das contas.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
