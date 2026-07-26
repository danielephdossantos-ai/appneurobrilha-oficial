import type { AulaV4 } from "../../types";

/** Aula 05 · U3 — Missão: divisão proporcional, juros e problemas mistos. */
export const aula05_missaoProporcao: AulaV4 = {
  slug: "u3-05-missao-proporcao",
  titulo: "Missão — Repartir com Justiça",
  iconeTrilha: "🏅",
  bncc: ["EF07MA17"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Nem sempre 'igual' é 'justo'",
    historia:
      "{NOME}, três amigos abriram uma banca. Um investiu R$ 100, outro R$ 200 e o terceiro R$ 300. O lucro foi R$ 600. Dividir R$ 200 para cada é justo? Nesta missão você aprende a repartir de forma PROPORCIONAL.",
  },

  momento02_exploracao: {
    instrucao: "Repartir proporcionalmente é distribuir por partes, não por cabeça.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Investimento × lucro",
        cabecalhos: ["Sócio", "Investiu (R$)", "Partes"],
        linhas: [
          { rotulo: "A", valores: [100, "1 parte", "?"] },
          { rotulo: "B", valores: [200, "2 partes", "?"] },
          { rotulo: "C", valores: [300, "3 partes", "?"] },
          { rotulo: "Total", valores: [600, "6 partes", 600] },
        ],
      },
      { tipo: "texto", texto: "🔑 Some as partes, descubra quanto vale UMA parte e depois multiplique." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto vale cada parte do lucro?",
    pista: "São 6 partes no total e o lucro é R$ 600.",
    revelacao: "Cada parte vale R$ 100. Então A recebe 100, B recebe 200 e C recebe 300.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Dividir 600 em partes 1 : 2 : 3",
      passos: [
        { expr: "Total de partes: 1 + 2 + 3 = 6", explica: "Somo as razões.", status: "neutro", professor: "Simplifiquei 100 : 200 : 300 dividindo tudo por 100. Números menores, mesma proporção." },
        { expr: "Valor de 1 parte: 600 ÷ 6 = 100", explica: "Constante k.", status: "ok" },
        { expr: "A: 1 · 100 = 100", explica: "Uma parte.", status: "ok" },
        { expr: "B: 2 · 100 = 200", explica: "Duas partes.", status: "ok" },
        { expr: "C: 3 · 100 = 300", explica: "Três partes.", status: "ok" },
        { expr: "Confiro: 100 + 200 + 300 = 600", explica: "Fecha com o total.", status: "ok", professor: "A conferência final é obrigatória: a soma das partes tem que reproduzir exatamente o total." },
      ],
      fatorada: "100 · 200 · 300",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Divisão proporcional e juros simples",
    etapas: [
      {
        texto: "DIVISÃO DIRETAMENTE PROPORCIONAL: some as partes, ache o valor de uma parte, multiplique e confira o total.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Dividir R$ 350 entre dois irmãos na razão 3 : 4",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "350 em 3 : 4",
            passos: [
              { expr: "Partes: 3 + 4 = 7", explica: "Total.", status: "neutro" },
              { expr: "1 parte = 350 ÷ 7 = 50", explica: "Constante.", status: "ok" },
              { expr: "3 · 50 = 150", explica: "Primeiro irmão.", status: "ok" },
              { expr: "4 · 50 = 200", explica: "Segundo irmão.", status: "ok" },
              { expr: "150 + 200 = 350", explica: "Confere.", status: "ok" },
            ],
            fatorada: "R$ 150 e R$ 200",
          },
          destaque: "Sempre confira somando as partes.",
        },
      },
      {
        texto: "JUROS SIMPLES: J = C · i · t, com a taxa i em decimal e o tempo t na mesma unidade da taxa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "R$ 2 000 a 2% ao mês durante 5 meses",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "J = C · i · t",
            passos: [
              { expr: "C = 2 000; i = 0,02; t = 5", explica: "Identifico os dados.", status: "neutro", professor: "A taxa é ao MÊS e o tempo está em MESES. Se o tempo viesse em anos, seria preciso converter antes." },
              { expr: "J = 2 000 · 0,02 · 5", explica: "Substituo.", status: "ok" },
              { expr: "2 000 · 0,02 = 40", explica: "Juros de 1 mês.", status: "ok" },
              { expr: "40 · 5 = 200", explica: "Juros totais.", status: "ok" },
              { expr: "Montante = 2 000 + 200 = 2 200", explica: "Capital + juros.", status: "ok" },
            ],
            fatorada: "J = R$ 200 e M = R$ 2 200",
          },
          destaque: "Juros SIMPLES sempre incidem sobre o capital inicial.",
        },
      },
      {
        texto: "Nos juros simples, o valor de cada mês é sempre o MESMO — diferente dos juros compostos, que você verá no 8º ano.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Evolução mês a mês do exemplo anterior",
          visualMat: {
            tipo: "tabela",
            titulo: "Juros simples de R$ 2 000 a 2% a.m.",
            cabecalhos: ["Mês", "Juros do mês (R$)", "Montante (R$)"],
            linhas: [
              { rotulo: "1", valores: [40, 2040] },
              { rotulo: "2", valores: [40, 2080] },
              { rotulo: "3", valores: [40, 2120] },
              { rotulo: "4", valores: [40, 2160] },
              { rotulo: "5", valores: [40, 2200] },
            ],
          },
          destaque: "Coluna de juros constante = juros simples.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: dividir R$ 900 entre A, B e C na razão 2 : 3 : 4.",
    resposta: "A = 200, B = 300, C = 400",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "900 em 2 : 3 : 4",
      passos: [
        { expr: "Partes: 2 + 3 + 4 = 9", explica: "Total de partes.", status: "neutro" },
        { expr: "1 parte = 900 ÷ 9 = 100", explica: "Constante.", status: "ok" },
        { expr: "A = 2 · 100 = 200", explica: "Duas partes.", status: "ok" },
        { expr: "B = 3 · 100 = 300", explica: "Três partes.", status: "ok" },
        { expr: "C = 4 · 100 = 400", explica: "Quatro partes.", status: "ok", professor: "Confira: 200 + 300 + 400 = 900. Fecha exatamente com o total." },
      ],
      fatorada: "200 · 300 · 400",
      legenda: "Brilha resolve",
    },
    passos: ["Somo as partes: 2+3+4 = 9.", "900 ÷ 9 = 100 por parte.", "A = 200, B = 300, C = 400.", "Soma final: 900. Confere."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: dividir R$ 240 na razão 1 : 3.",
    dica: "Total de partes: 1 + 3 = 4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "240 em 1 : 3",
      passos: [
        { expr: "1 parte = 240 ÷ 4 = 60", explica: "Constante.", status: "neutro" },
        { expr: "1 · 60 = 60 e 3 · 60 = 180", explica: "Distribuo.", status: "ok" },
      ],
      fatorada: "R$ 60 e R$ 180",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "60 e 180" }, { nome: "120 e 120" }, { nome: "80 e 160" }],
      respostaCerta: "60 e 180",
      feedbackAcerto: "🎯 60 + 180 = 240 na razão 1 : 3.",
      feedbackErro: "São 4 partes no total: 240 ÷ 4 = 60. Uma parte 60 e três partes 180. Divisão igual (120 e 120) ignora a razão.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: juros simples de R$ 1 500 a 3% ao mês em 4 meses.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "J = 1 500 · 0,03 · 4",
      passos: [
        { expr: "1 500 · 0,03 = 45", explica: "Juros de 1 mês.", status: "neutro" },
        { expr: "45 · 4 = 180", explica: "Quatro meses.", status: "ok" },
      ],
      fatorada: "J = R$ 180",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 180" }, { nome: "R$ 45" }, { nome: "R$ 1 680" }],
      respostaCerta: "R$ 180",
      feedbackAcerto: "🎯 45 por mês durante 4 meses = 180 de juros.",
      feedbackErro: "R$ 45 é o juro de UM mês. Em 4 meses: 45 · 4 = 180. O 1 680 é o montante (capital + juros).",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Três primos venderam brigadeiros. Ana fez 20, Bruno 30 e Caio 50. O lucro total foi R$ 300 e eles decidiram dividir proporcionalmente à produção.",
    problema: "Quanto recebe cada um?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "300 em 20 : 30 : 50",
      passos: [
        { expr: "Total produzido: 20 + 30 + 50 = 100", explica: "Somo.", status: "neutro" },
        { expr: "Valor por brigadeiro: 300 ÷ 100 = 3", explica: "Constante k.", status: "ok", professor: "Cada brigadeiro vendido gerou R$ 3 de lucro. Essa constante é a chave da divisão proporcional." },
        { expr: "Ana: 20 · 3 = 60", explica: "Vinte brigadeiros.", status: "ok" },
        { expr: "Bruno: 30 · 3 = 90", explica: "Trinta.", status: "ok" },
        { expr: "Caio: 50 · 3 = 150", explica: "Cinquenta.", status: "ok" },
        { expr: "60 + 90 + 150 = 300", explica: "Confere.", status: "ok" },
      ],
      fatorada: "Ana R$ 60 · Bruno R$ 90 · Caio R$ 150",
      legenda: "Aplicação — dividir o lucro",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "60, 90 e 150" }, { nome: "100, 100 e 100" }, { nome: "20, 30 e 50" }],
      respostaCerta: "60, 90 e 150",
      feedbackAcerto: "🎯 R$ 3 por brigadeiro, proporcional à produção.",
      feedbackErro: "Divisão igual (100 cada) ignora que Caio produziu mais. Cada brigadeiro vale 300 ÷ 100 = R$ 3 → 60, 90 e 150.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Divisão proporcional: some as partes, ache o valor de 1 parte, multiplique.",
      "Sempre confira se a soma das partes reproduz o total.",
      "Juros simples: J = C · i · t.",
      "A taxa entra em decimal e o tempo na mesma unidade da taxa.",
      "Montante = capital + juros.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dividir R$ 100 na razão 1 : 4 dá:", opcoes: ["20 e 80", "25 e 75", "50 e 50"], correta: 0, feedbackAcerto: "🎉 5 partes: 100 ÷ 5 = 20. Então 20 e 80.", feedbackErro: "São 1 + 4 = 5 partes. Cada parte vale 20, então as quantias são 20 e 80." },
      { pergunta: "Juros simples de R$ 500 a 2% a.m. em 3 meses:", opcoes: ["R$ 30", "R$ 10", "R$ 300"], correta: 0, feedbackAcerto: "🎉 500 · 0,02 · 3 = 30.", feedbackErro: "J = C·i·t = 500 · 0,02 · 3 = 30 reais. O valor de 10 seria apenas um mês." },
      { pergunta: "Dividir 120 em 2 : 3 : 5:", opcoes: ["24, 36 e 60", "40, 40 e 40", "20, 30 e 50"], correta: 0, feedbackAcerto: "🎉 10 partes: 120 ÷ 10 = 12 → 24, 36 e 60.", feedbackErro: "Some as partes: 2+3+5 = 10. Cada parte vale 12. Então 24, 36 e 60 (soma 120)." },
      { pergunta: "Montante de R$ 800 com R$ 96 de juros:", opcoes: ["R$ 896", "R$ 704", "R$ 96"], correta: 0, feedbackAcerto: "🎉 Montante é capital mais juros.", feedbackErro: "Montante = capital + juros = 800 + 96 = 896 reais." },
      { pergunta: "Nos juros SIMPLES, o valor dos juros mensais:", opcoes: ["é sempre o mesmo", "aumenta a cada mês", "diminui a cada mês"], correta: 0, feedbackAcerto: "🎉 Os juros sempre incidem sobre o capital inicial.", feedbackErro: "Nos juros simples a base é sempre o capital inicial, então o valor mensal não muda. Quem cresce mês a mês é o juro composto." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Repartidor Justo",
    materiais: ["Papel", "Caneta", "Moedas ou fichas"],
    passos: [
      "Simule uma sociedade: cada pessoa da família 'investe' um número de fichas.",
      "Defina um 'lucro' e divida proporcionalmente ao investimento de cada um.",
      "Escreva a conta completa e confira se a soma das partes dá o lucro total.",
    ],
    registro: "📸 Foto da divisão com a conferência final.",
  },
  recompensa: { xp: 245, moedas: 125, medalha: "Repartidor Justo" },
};
