import type { AulaV4 } from "../../types";

/** Aula 04 · U1 — Multiplicação e divisão de inteiros: regra de sinais. */
export const aula04_multiplicacaoInteiros: AulaV4 = {
  slug: "u1-04-multiplicacao-inteiros",
  titulo: "Regra de Sinais",
  iconeTrilha: "✖️",
  bncc: ["EF07MA04"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Por que menos vezes menos dá mais?",
    historia:
      "{NOME}, todo mundo decora 'menos com menos dá mais', mas quase ninguém sabe POR QUÊ. Hoje você vai ver o padrão que prova isso — e nunca mais vai depender de decoreba.",
  },

  momento02_exploracao: {
    instrucao: "Olhe a tabela de sinais. São só dois casos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Regra de sinais (× e ÷)",
        cabecalhos: ["Sinais", "Resultado", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["(+) × (+)", "POSITIVO", "(+3)·(+4) = +12"] },
          { rotulo: "2", valores: ["(−) × (−)", "POSITIVO", "(−3)·(−4) = +12"] },
          { rotulo: "3", valores: ["(+) × (−)", "NEGATIVO", "(+3)·(−4) = −12"] },
          { rotulo: "4", valores: ["(−) × (+)", "NEGATIVO", "(−3)·(+4) = −12"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Sinais IGUAIS → positivo. Sinais DIFERENTES → negativo. Vale igual para a divisão." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Que padrão aparece se eu for diminuindo o multiplicador?",
    pista: "Cada linha desce 3 unidades no resultado. Continue o padrão passando do zero.",
    revelacao: "O padrão só continua se (−3)·(−1) = +3. É o próprio padrão da multiplicação que obriga a regra.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Padrão que prova a regra",
      passos: [
        { expr: "(−3) · (+3) = −9", explica: "Base.", status: "neutro", professor: "Multiplicar por 3 é somar três vezes: (−3)+(−3)+(−3) = −9. Até aqui é só adição repetida." },
        { expr: "(−3) · (+2) = −6", explica: "Subiu 3.", status: "ok" },
        { expr: "(−3) · (+1) = −3", explica: "Subiu 3 de novo.", status: "ok" },
        { expr: "(−3) · 0 = 0", explica: "Subiu 3.", status: "ok" },
        { expr: "(−3) · (−1) = +3", explica: "O padrão exige +3.", status: "ok", professor: "Se cada passo aumenta 3, depois do zero o próximo tem que ser +3. Não é regra inventada: é a única forma de a multiplicação continuar coerente." },
        { expr: "(−3) · (−2) = +6", explica: "Padrão mantido.", status: "ok" },
      ],
      fatorada: "(−) · (−) = (+)",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Multiplicar, dividir e contar os sinais",
    etapas: [
      {
        texto: "Calcule primeiro o produto dos módulos. Depois decida o sinal: iguais → +, diferentes → −.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−7) · (+8)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−7) · (+8)",
            passos: [
              { expr: "Módulos: 7 · 8 = 56", explica: "Multiplico sem sinal.", status: "neutro" },
              { expr: "Sinais diferentes → negativo", explica: "− com +.", status: "ok", professor: "Separar módulo e sinal evita confusão. Primeiro o número, depois o sinal." },
              { expr: "= −56", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= −56",
          },
          destaque: "Primeiro o número, depois o sinal.",
        },
      },
      {
        texto: "Na divisão vale exatamente a mesma regra, porque dividir é multiplicar pelo inverso.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−45) ÷ (−9)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−45) ÷ (−9)",
            passos: [
              { expr: "Módulos: 45 ÷ 9 = 5", explica: "Divido sem sinal.", status: "neutro" },
              { expr: "Sinais iguais → positivo", explica: "− com −.", status: "ok" },
              { expr: "= +5", explica: "Resultado.", status: "ok", professor: "Confira pela multiplicação: (−9) · (+5) = −45. Bateu com o dividendo, então a divisão está correta." },
            ],
            fatorada: "= +5",
          },
          destaque: "Confira toda divisão pela multiplicação inversa.",
        },
      },
      {
        texto: "Com vários fatores, CONTE quantos sinais negativos existem: quantidade PAR → resultado positivo; quantidade ÍMPAR → resultado negativo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−2) · (+3) · (−4)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−2) · (+3) · (−4)",
            passos: [
              { expr: "Módulos: 2 · 3 · 4 = 24", explica: "Multiplico tudo sem sinal.", status: "neutro" },
              { expr: "Negativos: 2 (par)", explica: "Conto os sinais −.", status: "ok" },
              { expr: "Par → positivo", explica: "Regra da contagem.", status: "ok", professor: "Cada par de negativos se anula e vira positivo. Sobrando um negativo solto, o resultado fica negativo." },
              { expr: "= +24", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= +24",
          },
          destaque: "Par de negativos → positivo. Ímpar → negativo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (−5) · (−6) ÷ (+3).",
    resposta: "+10",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−5) · (−6) ÷ (+3)",
      passos: [
        { expr: "(−5) · (−6) = +30", explica: "Sinais iguais → positivo.", status: "neutro" },
        { expr: "(+30) ÷ (+3)", explica: "Continuo da esquerda para a direita.", status: "ok", professor: "Multiplicação e divisão têm a MESMA prioridade: resolve-se na ordem em que aparecem, da esquerda para a direita." },
        { expr: "= +10", explica: "Sinais iguais → positivo.", status: "ok" },
      ],
      fatorada: "= +10",
      legenda: "Brilha resolve",
    },
    passos: [
      "(−5)·(−6): 5·6 = 30, sinais iguais → +30.",
      "Divido: 30 ÷ 3 = 10.",
      "Sinais iguais → positivo.",
      "= +10.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (−9) · (+6) = ?",
    dica: "9 · 6 = 54 e os sinais são diferentes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−9) · (+6)",
      passos: [
        { expr: "9 · 6 = 54", explica: "Módulos.", status: "neutro" },
        { expr: "Sinais diferentes → −", explica: "Sinal.", status: "ok" },
      ],
      fatorada: "= −54",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−54" }, { nome: "+54" }, { nome: "−15" }],
      respostaCerta: "−54",
      feedbackAcerto: "🎯 Sinais diferentes → negativo.",
      feedbackErro: "Não é soma (−15 seria soma). Multiplique: 9 · 6 = 54; sinais diferentes → −54.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (−72) ÷ (−8) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−72) ÷ (−8)",
      passos: [
        { expr: "72 ÷ 8 = 9", explica: "Módulos.", status: "neutro" },
        { expr: "Sinais iguais → +", explica: "Sinal.", status: "ok" },
      ],
      fatorada: "= +9",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "+9" }, { nome: "−9" }, { nome: "+64" }],
      respostaCerta: "+9",
      feedbackAcerto: "🎯 Menos dividido por menos dá mais.",
      feedbackErro: "Dois negativos → resultado positivo: 72 ÷ 8 = 9, então +9.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um poço perde 4 metros de nível de água por dia durante a seca.",
    problema: "Qual a variação total do nível depois de 7 dias?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "7 · (−4)",
      passos: [
        { expr: "Perder 4 m por dia = −4 por dia", explica: "Perda é negativa.", status: "neutro" },
        { expr: "7 dias → 7 · (−4)", explica: "Repetição vira multiplicação.", status: "ok", professor: "Multiplicação é adição repetida: (−4) somado 7 vezes." },
        { expr: "7 · 4 = 28 e sinais diferentes", explica: "Módulo e sinal.", status: "ok" },
        { expr: "= −28", explica: "Desceu 28 metros.", status: "ok" },
      ],
      fatorada: "Variação = −28 m",
      legenda: "Aplicação — variação diária",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−28 m" }, { nome: "+28 m" }, { nome: "−11 m" }],
      respostaCerta: "−28 m",
      feedbackAcerto: "🎯 7 · (−4) = −28: o nível caiu 28 metros.",
      feedbackErro: "Perda diária é −4. Em 7 dias: 7 · (−4) = −28 m. O sinal negativo mostra que o nível DESCEU.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Sinais iguais → resultado positivo.",
      "Sinais diferentes → resultado negativo.",
      "A mesma regra vale para × e ÷.",
      "Vários fatores: conte os negativos — par → +, ímpar → −.",
      "× e ÷ têm a mesma prioridade: resolva da esquerda para a direita.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(−6) · (−7) =", opcoes: ["+42", "−42", "−13"], correta: 0, feedbackAcerto: "🎉 Sinais iguais → positivo.", feedbackErro: "Dois negativos multiplicados dão positivo: 6·7 = 42 → +42." },
      { pergunta: "(+8) · (−5) =", opcoes: ["−40", "+40", "−13"], correta: 0, feedbackAcerto: "🎉 Sinais diferentes → negativo.", feedbackErro: "8·5 = 40 e os sinais são diferentes → −40." },
      { pergunta: "(−36) ÷ (+4) =", opcoes: ["−9", "+9", "−32"], correta: 0, feedbackAcerto: "🎉 36 ÷ 4 = 9, sinais diferentes → −9.", feedbackErro: "Divisão segue a mesma regra: 36 ÷ 4 = 9 e sinais diferentes → −9." },
      { pergunta: "(−1) · (−1) · (−1) =", opcoes: ["−1", "+1", "−3"], correta: 0, feedbackAcerto: "🎉 Três negativos (ímpar) → negativo.", feedbackErro: "Conte os negativos: são 3, número ímpar → resultado negativo. Módulo 1·1·1 = 1, então −1." },
      { pergunta: "(−2) · (+5) · (−3) =", opcoes: ["+30", "−30", "+10"], correta: 0, feedbackAcerto: "🎉 2·5·3 = 30 e há 2 negativos (par) → +30.", feedbackErro: "Módulos: 2·5·3 = 30. Negativos: 2, que é par → resultado positivo, +30." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Quiz de sinais em família",
    materiais: ["Papel", "Caneta", "Cronômetro"],
    passos: [
      "Escreva 10 multiplicações e divisões com inteiros em cartõezinhos.",
      "Desafie alguém da família: 10 segundos por carta para dizer só o SINAL do resultado.",
      "Depois calcule junto o valor completo e confira.",
    ],
    registro: "📸 Foto das cartas com os resultados.",
  },
  recompensa: { xp: 210, moedas: 105, medalha: "Guardião dos Sinais" },
};
