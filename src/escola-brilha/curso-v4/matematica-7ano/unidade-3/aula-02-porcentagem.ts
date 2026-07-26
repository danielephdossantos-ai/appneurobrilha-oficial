import type { AulaV4 } from "../../types";

/** Aula 02 · U3 — Porcentagem: cálculo, aumento e desconto. */
export const aula02_porcentagem: AulaV4 = {
  slug: "u3-02-porcentagem",
  titulo: "Porcentagem na Prática",
  iconeTrilha: "💯",
  bncc: ["EF07MA02", "EF07MA09"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "A vitrine mente?",
    historia:
      "{NOME}, uma loja aumenta o preço em 10% e depois dá 10% de desconto. Voltou ao preço original? A maioria das pessoas diz que sim — e erra. Hoje você aprende a calcular porcentagem do jeito rápido e certo.",
  },

  momento02_exploracao: {
    instrucao: "Porcentagem é fração de denominador 100. Todo cálculo vira multiplicação.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Fator multiplicativo",
        cabecalhos: ["Situação", "Fator", "Exemplo com R$ 200"],
        linhas: [
          { rotulo: "1", valores: ["calcular 25%", "× 0,25", "R$ 50"] },
          { rotulo: "2", valores: ["aumento de 20%", "× 1,20", "R$ 240"] },
          { rotulo: "3", valores: ["desconto de 30%", "× 0,70", "R$ 140"] },
          { rotulo: "4", valores: ["aumento de 100%", "× 2,00", "R$ 400"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Aumento de p% → multiplicar por (1 + p/100). Desconto de p% → multiplicar por (1 − p/100)." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Aumentar 10% e depois descontar 10% volta ao preço original?",
    pista: "O desconto é calculado sobre o preço JÁ AUMENTADO, que é maior.",
    revelacao: "Não volta: 1,10 · 0,90 = 0,99. Sobra 99% do valor original — uma perda de 1%.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "R$ 100 com +10% e depois −10%",
      passos: [
        { expr: "100 · 1,10 = 110", explica: "Aumento de 10%.", status: "neutro", professor: "O aumento incide sobre 100 e vale 10 reais." },
        { expr: "110 · 0,90 = 99", explica: "Desconto de 10% sobre 110.", status: "ok", professor: "Agora o desconto incide sobre 110 e vale 11 reais, não 10. Por isso a conta não fecha em 100." },
        { expr: "Fator total: 1,10 · 0,90 = 0,99", explica: "Um único fator.", status: "ok" },
        { expr: "Resultado: 99% do valor inicial", explica: "Perda de 1%.", status: "ok" },
      ],
      fatorada: "Preço final = R$ 99,00",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Três formas de calcular",
    etapas: [
      {
        texto: "CALCULAR p% de um valor: transforme em decimal e multiplique.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "35% de 240",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "35% de 240",
            passos: [
              { expr: "35% = 35/100 = 0,35", explica: "Converto.", status: "neutro" },
              { expr: "240 · 0,35", explica: "Multiplico.", status: "ok" },
              { expr: "240 · 35 = 8 400", explica: "Multiplico sem vírgula.", status: "ok" },
              { expr: "2 casas decimais → 84,00", explica: "Ando a vírgula.", status: "ok", professor: "Confira por estimativa: 10% de 240 é 24, então 30% é 72 e 5% é 12. Somando, 84. Bateu." },
            ],
            fatorada: "35% de 240 = 84",
          },
          destaque: "Sempre confira com a regra dos 10%.",
        },
      },
      {
        texto: "AUMENTO: multiplique pelo fator (1 + taxa). DESCONTO: multiplique por (1 − taxa). Em um passo só.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Camisa de R$ 80 com 15% de desconto",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "80 com −15%",
            passos: [
              { expr: "Fator = 1 − 0,15 = 0,85", explica: "Vai sobrar 85%.", status: "neutro", professor: "Se tirei 15%, o que resta é 85%. Por isso multiplico direto por 0,85 em vez de calcular e subtrair." },
              { expr: "80 · 0,85 = 68", explica: "Preço final.", status: "ok" },
              { expr: "Desconto = 80 − 68 = 12", explica: "Valor economizado.", status: "ok" },
            ],
            fatorada: "Paga R$ 68 e economiza R$ 12",
          },
          destaque: "Um fator resolve o cálculo inteiro.",
        },
      },
      {
        texto: "DESCOBRIR A TAXA: divida a parte pelo total e multiplique por 100.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "De R$ 250 para R$ 300: qual o aumento percentual?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "De 250 para 300",
            passos: [
              { expr: "Aumento = 300 − 250 = 50", explica: "Diferença absoluta.", status: "neutro" },
              { expr: "Taxa = 50 / 250", explica: "Sempre sobre o valor INICIAL.", status: "ok", professor: "O denominador é sempre o valor de partida. Dividir por 300 daria a resposta errada." },
              { expr: "= 0,2", explica: "Decimal.", status: "ok" },
              { expr: "· 100 = 20%", explica: "Porcentagem.", status: "ok" },
            ],
            fatorada: "Aumento de 20%",
          },
          destaque: "A taxa é sempre calculada sobre o valor inicial.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um celular de R$ 1 200 teve aumento de 8%. Qual o novo preço?",
    resposta: "R$ 1 296",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1 200 com +8%",
      passos: [
        { expr: "Fator = 1 + 0,08 = 1,08", explica: "Aumento.", status: "neutro" },
        { expr: "1 200 · 1,08", explica: "Multiplico.", status: "ok" },
        { expr: "1 200 · 108 = 129 600", explica: "Sem vírgula.", status: "ok" },
        { expr: "2 casas → 1 296,00", explica: "Ando a vírgula.", status: "ok", professor: "Confira: 8% de 1 200 é 96 e 1 200 + 96 = 1 296. Mesmo resultado por dois caminhos." },
      ],
      fatorada: "Novo preço: R$ 1 296,00",
      legenda: "Brilha resolve",
    },
    passos: ["Aumento de 8% → fator 1,08.", "1 200 · 1,08 = 1 296.", "Conferindo: 8% de 1 200 = 96.", "1 200 + 96 = 1 296."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: quanto é 20% de 350?",
    dica: "20% = 0,2. Ou: 10% é 35, então 20% é o dobro.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "20% de 350",
      passos: [
        { expr: "10% de 350 = 35", explica: "Divido por 10.", status: "neutro" },
        { expr: "20% = 2 · 35", explica: "Dobro.", status: "ok" },
      ],
      fatorada: "= 70",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "70" }, { nome: "35" }, { nome: "700" }],
      respostaCerta: "70",
      feedbackAcerto: "🎯 350 · 0,2 = 70.",
      feedbackErro: "10% de 350 é 35, então 20% é o dobro: 70. O 35 seria só 10%.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: R$ 400 com 25% de desconto sai por quanto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "400 com −25%",
      passos: [
        { expr: "Fator = 1 − 0,25 = 0,75", explica: "Sobra 75%.", status: "neutro" },
        { expr: "400 · 0,75 = 300", explica: "Preço final.", status: "ok" },
      ],
      fatorada: "= R$ 300",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 300" }, { nome: "R$ 100" }, { nome: "R$ 375" }],
      respostaCerta: "R$ 300",
      feedbackAcerto: "🎯 Tirando 25% (que é 100), sobram 300.",
      feedbackErro: "R$ 100 é o valor do DESCONTO, não o preço final. O preço pago é 400 − 100 = 300.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma TV custa R$ 2 000. Na Black Friday sai com 30% de desconto, mas no pagamento parcelado há acréscimo de 10% sobre o valor já com desconto.",
    problema: "Qual o preço parcelado final?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2 000 · 0,70 · 1,10",
      passos: [
        { expr: "Desconto: fator 0,70", explica: "Sobra 70%.", status: "neutro" },
        { expr: "2 000 · 0,70 = 1 400", explica: "Preço com desconto.", status: "ok" },
        { expr: "Acréscimo: fator 1,10", explica: "Sobre 1 400.", status: "ok", professor: "O acréscimo incide sobre o valor JÁ DESCONTADO, conforme o enunciado. A ordem muda o resultado quando os valores base mudam." },
        { expr: "1 400 · 1,10 = 1 540", explica: "Preço parcelado.", status: "ok" },
        { expr: "Fator único: 0,70 · 1,10 = 0,77", explica: "77% do original.", status: "ok" },
      ],
      fatorada: "Preço final: R$ 1 540,00",
      legenda: "Aplicação — desconto e acréscimo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 1 540" }, { nome: "R$ 1 600" }, { nome: "R$ 1 400" }],
      respostaCerta: "R$ 1 540",
      feedbackAcerto: "🎯 2 000 · 0,70 · 1,10 = 1 540.",
      feedbackErro: "Não some −30% com +10% para dar −20%. Multiplique os fatores: 0,70 · 1,10 = 0,77 → 2 000 · 0,77 = 1 540.",
    },
  },

  momento09_revisao: {
    pontos: [
      "p% = p/100.",
      "Aumento de p% → fator (1 + p/100).",
      "Desconto de p% → fator (1 − p/100).",
      "Porcentagens sucessivas MULTIPLICAM fatores, nunca somam taxas.",
      "A taxa é calculada sempre sobre o valor inicial.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "15% de 200 =", opcoes: ["30", "15", "3"], correta: 0, feedbackAcerto: "🎉 200 · 0,15 = 30.", feedbackErro: "10% de 200 é 20 e 5% é 10. Somando: 30." },
      { pergunta: "R$ 500 com 20% de desconto:", opcoes: ["R$ 400", "R$ 480", "R$ 100"], correta: 0, feedbackAcerto: "🎉 500 · 0,80 = 400.", feedbackErro: "O desconto é 100 reais, então o preço final é 500 − 100 = 400. R$ 100 é só o desconto." },
      { pergunta: "R$ 60 com aumento de 50%:", opcoes: ["R$ 90", "R$ 110", "R$ 30"], correta: 0, feedbackAcerto: "🎉 60 · 1,5 = 90.", feedbackErro: "Metade de 60 é 30. Somando ao original: 60 + 30 = 90." },
      { pergunta: "De 40 para 50, o aumento percentual foi de:", opcoes: ["25%", "10%", "20%"], correta: 0, feedbackAcerto: "🎉 10/40 = 0,25 = 25%.", feedbackErro: "O aumento absoluto foi 10 e a base é 40: 10 ÷ 40 = 0,25 → 25%. Dividir por 50 daria a resposta errada." },
      { pergunta: "Dois descontos seguidos de 10% equivalem a:", opcoes: ["19%", "20%", "21%"], correta: 0, feedbackAcerto: "🎉 0,90 · 0,90 = 0,81, ou seja, desconto total de 19%.", feedbackErro: "Não some 10% + 10%. Multiplique: 0,9 · 0,9 = 0,81, que representa 81% do preço, isto é, 19% de desconto." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçador de descontos",
    materiais: ["Encarte de loja ou site", "Papel", "Caneta"],
    passos: [
      "Escolha 3 produtos com desconto anunciado.",
      "Calcule o preço final usando o fator multiplicativo.",
      "Confira se o preço anunciado bate com a sua conta e anote a diferença, se houver.",
    ],
    registro: "📸 Foto das contas ao lado dos anúncios.",
  },
  recompensa: { xp: 215, moedas: 110, medalha: "Mestre da Porcentagem" },
};
