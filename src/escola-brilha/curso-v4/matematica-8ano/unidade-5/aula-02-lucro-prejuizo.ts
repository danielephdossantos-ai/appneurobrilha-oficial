import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Lucro e prejuízo em porcentagem.
 * Base é SEMPRE o custo. Passo a passo interativo com professor
 * mostrando o erro clássico (dividir pela venda) e o preço de venda com margem.
 */
export const aula02_lucroPrejuizo: AulaV4 = {
  slug: "u5-02-lucro-prejuizo",
  titulo: "Lucro e prejuízo em porcentagem",
  iconeTrilha: "💰",
  bncc: ["EF08MA04"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quem vende e quem compra pensa em %",
    historia:
      "{NOME}, imagine uma loja: comprou o produto por R$ 80 e vendeu por R$ 100. Ganhou R$ 20 — mas em porcentagem, ganhou 20% ou 25%? A resposta depende de UMA escolha: qual valor é a base.",
  },

  momento02_exploracao: {
    instrucao: "Compare os dois jeitos de calcular a mesma situação.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "Comprou por 80, vendeu por 100",
        passos: [
          { expr: "Lucro em R$ = 100 − 80 = 20", explica: "Ganho absoluto.", status: "ok", professor: "Primeiro descubra QUANTO foi o lucro em reais. Sempre venda − custo." },
          { expr: "20 ÷ 100 = 0,20 = 20%", explica: "Errado: dividi pela VENDA.", status: "erro", professor: "Não! Ninguém investe o valor da venda; o comerciante investiu o CUSTO. A base tem que ser o custo." },
          { expr: "20 ÷ 80 = 0,25 = 25%", explica: "Correto: dividi pelo CUSTO.", status: "ok", professor: "Investi 80 e ganhei 20. 20 é 25% de 80. Esse é o lucro real do negócio." },
        ],
        fatorada: "Base do lucro/prejuízo = CUSTO",
        legenda: "Sempre sobre o custo — regra de ouro do comerciante",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a base é o custo, e não a venda?",
    pista: "O custo é o que o comerciante colocou do próprio bolso; o lucro se mede em relação a esse investimento.",
    revelacao: "Lucro% = (V − C) / C · 100. Prejuízo% = (C − V) / C · 100.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "As duas fórmulas",
      passos: [
        { expr: "Lucro% = (V − C) ÷ C · 100", explica: "Quando V > C.", status: "ok", professor: "V é venda, C é custo. Diferença positiva é lucro." },
        { expr: "Prejuízo% = (C − V) ÷ C · 100", explica: "Quando V < C.", status: "ok", professor: "Diferença positiva também — só que agora o custo é maior que a venda." },
        { expr: "Preço com margem = C · (1 + lucro%)", explica: "Se quer margem de i%.", status: "ok", professor: "É o fator multiplicativo aplicado a partir do custo." },
      ],
    },
  },

  momento04_explicacao: {
    titulo: "Lucro, prejuízo e preço com margem",
    etapas: [
      {
        texto: "Caso 1 — Lucro. Comprou por R$ 80 e vendeu por R$ 100.",
        exemploReal: {
          titulo: "🔎 Lucro sobre o custo",
          contexto: "Situação clássica do pequeno comércio.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Lucro% = (100 − 80) / 80",
            passos: [
              { expr: "Lucro R$ = 100 − 80 = 20", explica: "Ganho absoluto.", status: "ok", professor: "Diferença entre venda e custo." },
              { expr: "20 ÷ 80 = 0,25", explica: "Divido pelo custo.", status: "ok", professor: "Base é o que investi — nunca o que recebi." },
              { expr: "0,25 · 100 = 25%", explica: "Converte para %.", status: "ok", professor: "Multiplica por 100 e o percentual aparece." },
            ],
            fatorada: "Lucro = 25% sobre o custo",
          },
          destaque: "Ganhei 25% em cima do que investi.",
        },
      },
      {
        texto: "Caso 2 — Prejuízo. Comprou por R$ 200 e vendeu por R$ 150.",
        exemploReal: {
          titulo: "🔎 Prejuízo também sobre o custo",
          contexto: "Nem sempre a venda cobre o custo.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Prejuízo% = (200 − 150) / 200",
            passos: [
              { expr: "Prejuízo R$ = 200 − 150 = 50", explica: "Perda absoluta.", status: "ok", professor: "Sempre a diferença positiva; ordem: C − V." },
              { expr: "50 ÷ 200 = 0,25", explica: "Divide pelo custo.", status: "ok", professor: "Base do prejuízo também é o custo — foi ele que 'derreteu'." },
              { expr: "0,25 · 100 = 25%", explica: "Converte.", status: "ok", professor: "Perdi 25% do que investi." },
            ],
            fatorada: "Prejuízo = 25% sobre o custo",
          },
          destaque: "Perdi 25% em cima do que investi.",
        },
      },
      {
        texto: "Caso 3 — Preço com margem. Custo R$ 800, lojista quer 40% de lucro.",
        exemploReal: {
          titulo: "🔎 Fator multiplicativo",
          contexto: "É o problema inverso: sabendo o custo e a margem, achar a venda.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 800 · (1 + 0,40)",
            passos: [
              { expr: "i = 40% = 0,40", explica: "Margem em decimal.", status: "ok", professor: "Sempre transforme antes de multiplicar." },
              { expr: "f = 1 + 0,40 = 1,40", explica: "Fator de aumento sobre o custo.", status: "ok", professor: "Aplico o mesmo raciocínio de aumento — só que a base é o custo." },
              { expr: "V = 800 · 1,40 = 1120", explica: "Preço de venda.", status: "ok", professor: "Confere: 40% de 800 é 320. 800 + 320 = 1120. Mesmo resultado, um passo a menos." },
            ],
            fatorada: "V = C · (1 + lucro%)",
          },
          destaque: "R$ 1120 é a etiqueta que garante 40% de margem.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Comprou por R$ 40 e vendeu por R$ 50. Qual o lucro em %?",
    resposta: "25%",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Lucro% = 10 / 40",
      passos: [
        { expr: "Lucro R$ = 50 − 40 = 10", explica: "Ganho absoluto.", status: "ok", professor: "V − C." },
        { expr: "10 ÷ 40 = 0,25", explica: "Divide pelo custo.", status: "ok", professor: "Nunca pela venda." },
        { expr: "0,25 · 100 = 25%", explica: "Converte.", status: "ok", professor: "Ganhei 25% do que investi." },
      ],
    },
    passos: ["Lucro em R$ = 50 − 40 = 10.", "10 / 40 = 0,25.", "× 100 = 25%."],
  },

  momento06_praticaGuiada: {
    enunciado: "Custo R$ 100, venda R$ 130. Qual o lucro em %?",
    dica: "(130 − 100) / 100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Lucro %:",
      opcoes: [{ nome: "30%" }, { nome: "10%" }, { nome: "130%" }],
      respostaCerta: "30%",
      feedbackAcerto: "🎯 30 / 100 = 30%.",
      feedbackErro: "Diferença = 30. Divide pelo custo (100). ×100.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Custo R$ 250, venda R$ 200. Prejuízo em %:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Prejuízo %:",
      opcoes: [{ nome: "20%" }, { nome: "25%" }, { nome: "10%" }],
      respostaCerta: "20%",
      feedbackAcerto: "🎯 50 / 250 = 20%.",
      feedbackErro: "Perda = 50. Sempre sobre o custo (250).",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma loja compra celular por R$ 800 e quer 40% de lucro em cima do custo.",
    problema: "Qual o preço de venda que deve estar na etiqueta?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 800 · 1,40",
      passos: [
        { expr: "Lucro = 40% de 800", explica: "Sempre sobre o custo.", status: "ok", professor: "Base é o que a loja pagou pelo celular." },
        { expr: "40% de 800 = 0,40 · 800 = 320", explica: "Lucro em R$.", status: "ok", professor: "Truque: 10% de 800 é 80. 40% é 4 vezes = 320." },
        { expr: "V = 800 + 320 = 1120", explica: "Custo + lucro.", status: "ok", professor: "Ou, num passo só, 800 · 1,40 = 1120." },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Preço de venda:",
      opcoes: [{ nome: "R$ 1120" }, { nome: "R$ 840" }, { nome: "R$ 1200" }],
      respostaCerta: "R$ 1120",
      feedbackAcerto: "🎯 800 · 1,40 = 1120.",
      feedbackErro: "40% de 800 é 320. Some ao custo: 800 + 320.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Lucro/prejuízo em % é SEMPRE sobre o custo, nunca sobre a venda.",
      "Lucro% = (V − C) / C · 100. Prejuízo% = (C − V) / C · 100.",
      "Para achar preço com margem: V = C · (1 + lucro%).",
      "Se V > C é lucro; se V < C é prejuízo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50 / 100 em %:", opcoes: ["50%", "5%", "500%"], correta: 0, feedbackAcerto: "🎉 ×100.", feedbackErro: "Multiplica por 100." },
      { pergunta: "Lucro de 25% sobre custo de R$ 200 em R$:", opcoes: ["R$ 50", "R$ 25", "R$ 250"], correta: 0, feedbackAcerto: "🎉 0,25·200.", feedbackErro: "25% de 200 é 50." },
      { pergunta: "Custo 100, venda 90. É:", opcoes: ["Prejuízo 10%", "Lucro 10%", "Prejuízo 11%"], correta: 0, feedbackAcerto: "🎉 10/100=10%.", feedbackErro: "V < C = prejuízo; divide pelo custo." },
      { pergunta: "Custo 500, margem 20%. Preço de venda:", opcoes: ["R$ 600", "R$ 520", "R$ 100"], correta: 0, feedbackAcerto: "🎉 500·1,20.", feedbackErro: "V = C · (1 + i)." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Pequeno comércio",
    materiais: ["Papel", "Calculadora"],
    passos: [
      "Simule uma venda: escolha um produto, defina custo e preço de venda.",
      "Calcule lucro em R$ e lucro em % (sempre sobre o custo).",
      "Depois calcule qual seria o preço para 30% de margem.",
    ],
    registro: "📸 Foto do quadro com as contas.",
  },

  recompensa: { xp: 170, moedas: 85 },
};
