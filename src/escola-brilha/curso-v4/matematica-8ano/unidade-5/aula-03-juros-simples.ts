import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Juros simples.
 * Fórmula J = C · i · t com passo a passo interativo.
 * Professor cuida da conversão de unidades (mês/ano) e do montante.
 */
export const aula03_jurosSimples: AulaV4 = {
  slug: "u5-03-juros-simples",
  titulo: "Juros simples",
  iconeTrilha: "🏦",
  bncc: ["EF08MA04"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Dinheiro que rende (ou custa) por tempo",
    historia:
      "{NOME}, quando você guarda dinheiro no banco, ele PAGA juros a você. Quando pega emprestado, VOCÊ paga juros ao banco. Nos juros simples, o rendimento é sempre calculado sobre o valor inicial — nunca sobre o que já rendeu.",
  },

  momento02_exploracao: {
    instrucao: "Veja como cada mês adiciona a MESMA quantia (juros simples).",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "C = 1000, i = 2% ao mês",
        passos: [
          { expr: "Mês 0 → R$ 1000", explica: "Capital inicial.", status: "neutro", professor: "É o dinheiro que a pessoa depositou ou pegou emprestado." },
          { expr: "Mês 1 → 1000 + 20 = 1020", explica: "2% de 1000 = 20.", status: "ok", professor: "20 é 2% de 1000. Nos juros SIMPLES, os 20 se repetem todo mês." },
          { expr: "Mês 2 → 1020 + 20 = 1040", explica: "+20 de novo.", status: "ok", professor: "Ainda 2% de 1000, não de 1020. É essa a diferença para juros compostos." },
          { expr: "Mês 3 → 1040 + 20 = 1060", explica: "+20 de novo.", status: "ok", professor: "Padrão: soma-se sempre o mesmo valor de juros." },
          { expr: "Depois de t meses: J = 20 · t", explica: "Generalizando.", status: "ok", professor: "20 é C · i. Então J = C · i · t." },
        ],
        fatorada: "J = C · i · t",
        legenda: "Juros simples: parcela mensal fixa",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "E se a taxa for ao mês e o tempo em anos (ou vice-versa)?",
    pista: "Unidades TÊM que bater. Se i está por mês, t precisa estar em meses.",
    revelacao: "Sempre converta uma das duas antes de multiplicar. 1 ano = 12 meses.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Símbolos da fórmula",
      passos: [
        { expr: "J = juros (R$)", explica: "Quanto rendeu.", status: "ok", professor: "É o valor extra, para mais ou para menos." },
        { expr: "C = capital (R$)", explica: "Valor inicial.", status: "ok", professor: "Também chamado de principal." },
        { expr: "i = taxa (decimal)", explica: "% por período.", status: "ok", professor: "2% vira 0,02. Sempre divida por 100." },
        { expr: "t = tempo (mesma unidade da taxa)", explica: "Nº de períodos.", status: "ok", professor: "Se i é ao mês, t em meses. Se i é ao ano, t em anos." },
        { expr: "M = C + J", explica: "Montante.", status: "ok", professor: "Total no fim — capital + juros." },
      ],
    },
  },

  momento04_explicacao: {
    titulo: "Aplicando J = C · i · t",
    etapas: [
      {
        texto: "Caso 1 — Unidades já batendo. C = R$ 1000, i = 2% ao mês, t = 6 meses.",
        exemploReal: {
          titulo: "🔎 Substituir e multiplicar",
          contexto: "Aplicação em poupança fictícia.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "J = 1000 · 0,02 · 6",
            passos: [
              { expr: "i = 2% = 0,02", explica: "Taxa em decimal.", status: "ok", professor: "Sempre divida por 100 antes de substituir." },
              { expr: "J = 1000 · 0,02 · 6", explica: "Substituo.", status: "ok", professor: "Ordem não importa; multiplicação é comutativa." },
              { expr: "1000 · 0,02 = 20", explica: "Juros de 1 mês.", status: "ok", professor: "É o rendimento MENSAL." },
              { expr: "20 · 6 = 120", explica: "Juros totais.", status: "ok", professor: "Rendimento mensal × número de meses." },
              { expr: "M = 1000 + 120 = 1120", explica: "Montante.", status: "ok", professor: "Sobrou R$ 1120 no fim." },
            ],
            fatorada: "J = R$ 120 · M = R$ 1120",
          },
          destaque: "R$ 120 de juros em 6 meses.",
        },
      },
      {
        texto: "Caso 2 — Converter unidades. i = 12% ao ano, t = 6 meses.",
        exemploReal: {
          titulo: "🔎 Bater as unidades",
          contexto: "Situação real — taxa anual e prazo em meses.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Converter antes de multiplicar",
            passos: [
              { expr: "Opção A: i anual → mensal", explica: "Divide por 12.", status: "ok", professor: "12% ÷ 12 = 1% ao mês = 0,01. Aí uso t = 6 meses." },
              { expr: "Opção B: t em meses → anos", explica: "Divide por 12.", status: "ok", professor: "6 meses = 0,5 ano. Aí uso i = 0,12 e t = 0,5." },
              { expr: "Escolha o mais simples", explica: "Ambos dão o mesmo J.", status: "ok", professor: "Prefira a opção com números mais 'redondos'." },
              { expr: "Opção A: J = C · 0,01 · 6", explica: "6% do capital.", status: "ok", professor: "Rendimento fixo de 1% ao mês por 6 meses." },
            ],
            fatorada: "Regra: i e t na mesma unidade",
          },
          destaque: "Sempre confira: mesma unidade em i e t.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "C = R$ 500, i = 5% ao mês, t = 4 meses. Ache J.",
    resposta: "R$ 100",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "J = 500 · 0,05 · 4",
      passos: [
        { expr: "i = 5% = 0,05", explica: "Decimal.", status: "ok", professor: "÷ 100." },
        { expr: "500 · 0,05 = 25", explica: "Juros de 1 mês.", status: "ok", professor: "5% de 500 é 25." },
        { expr: "25 · 4 = 100", explica: "Multiplico pelos 4 meses.", status: "ok", professor: "Rendeu R$ 100 no total." },
      ],
    },
    passos: ["500 · 0,05 = 25.", "25 · 4 = 100."],
  },

  momento06_praticaGuiada: {
    enunciado: "C = 200, i = 1% ao mês, t = 10 meses. J =",
    dica: "200 · 0,01 · 10.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "J =",
      opcoes: [{ nome: "R$ 20" }, { nome: "R$ 200" }, { nome: "R$ 2" }],
      respostaCerta: "R$ 20",
      feedbackAcerto: "🎯 200·0,01=2. ×10=20.",
      feedbackErro: "1% de 200 é 2. Em 10 meses, 2·10=20.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "C = 1000, i = 3% ao mês, t = 5 meses. Montante =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 1150" }, { nome: "R$ 1300" }, { nome: "R$ 1050" }],
      respostaCerta: "R$ 1150",
      feedbackAcerto: "🎯 J=150; M=1150.",
      feedbackErro: "J = 1000·0,03·5 = 150. M = 1000 + 150.",
    },
  },

  momento08_aplicacao: {
    contexto: "Empréstimo de R$ 2000 no crediário a 4% ao mês por 3 meses.",
    problema: "Quanto vai pagar no total?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "M = 2000 + 2000·0,04·3",
      passos: [
        { expr: "i = 4% = 0,04", explica: "Decimal.", status: "ok", professor: "÷ 100." },
        { expr: "J mensal = 2000 · 0,04 = 80", explica: "Rende 80 por mês.", status: "ok", professor: "4% de 2000." },
        { expr: "J total = 80 · 3 = 240", explica: "3 meses.", status: "ok", professor: "Nos juros simples, sempre o mesmo valor por mês." },
        { expr: "M = 2000 + 240 = 2240", explica: "Total a pagar.", status: "ok", professor: "R$ 240 de juros em 3 meses. Compare com o valor total do empréstimo." },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 2240" }, { nome: "R$ 240" }, { nome: "R$ 2400" }],
      respostaCerta: "R$ 2240",
      feedbackAcerto: "🎯 J=240 e M=2240.",
      feedbackErro: "J = 2000·0,04·3 = 240. M = C + J.",
    },
  },

  momento09_revisao: {
    pontos: [
      "J = C · i · t (fórmula-chave dos juros simples).",
      "Sempre converta i para decimal (÷ 100) antes de substituir.",
      "Unidades de i e t precisam ser as mesmas (mês/mês, ano/ano).",
      "Montante M = C + J.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1% ao mês em decimal:", opcoes: ["0,01", "0,1", "1"], correta: 0, feedbackAcerto: "🎉 ÷100.", feedbackErro: "Divide por 100." },
      { pergunta: "C=100, i=0,05, t=2. J =", opcoes: ["10", "5", "50"], correta: 0, feedbackAcerto: "🎉 100·0,05·2.", feedbackErro: "Substitua na fórmula." },
      { pergunta: "12% ao ano em taxa mensal:", opcoes: ["1% am", "12% am", "0,12% am"], correta: 0, feedbackAcerto: "🎉 12/12.", feedbackErro: "Ao ano ÷ 12 = ao mês." },
      { pergunta: "C=200, J=40. Montante:", opcoes: ["R$ 240", "R$ 40", "R$ 200"], correta: 0, feedbackAcerto: "🎉 C+J.", feedbackErro: "M = C + J." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Investigador de juros",
    materiais: ["Papel", "Extratos ou anúncios de crediário"],
    passos: [
      "Ache um anúncio real com taxa ao mês (crediário, empréstimo).",
      "Escolha um capital hipotético (ex.: R$ 500).",
      "Calcule J e M para 6 meses usando J = C · i · t.",
    ],
    registro: "📸 Foto do anúncio e das contas.",
  },

  recompensa: { xp: 190, moedas: 95 },
};
