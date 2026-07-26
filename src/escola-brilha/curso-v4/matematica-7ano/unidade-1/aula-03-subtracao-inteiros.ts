import type { AulaV4 } from "../../types";

/** Aula 03 · U1 — Subtração de inteiros: somar o oposto. */
export const aula03_subtracaoInteiros: AulaV4 = {
  slug: "u1-03-subtracao-inteiros",
  titulo: "Subtrair é Somar o Oposto",
  iconeTrilha: "➖",
  bncc: ["EF07MA04"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O truque que resolve tudo",
    historia:
      "{NOME}, existe uma expressão que assusta muita gente: 5 − (−3). Dois sinais grudados! Hoje você aprende o truque que transforma TODA subtração em adição — e nunca mais erra sinal.",
  },

  momento02_exploracao: {
    instrucao: "A regra de ouro da subtração.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Subtrair = somar o oposto",
        cabecalhos: ["Escrito assim", "Vira isto", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["5 − (+3)", "5 + (−3)", "2"] },
          { rotulo: "2", valores: ["5 − (−3)", "5 + (+3)", "8"] },
          { rotulo: "3", valores: ["−5 − (+3)", "−5 + (−3)", "−8"] },
          { rotulo: "4", valores: ["−5 − (−3)", "−5 + (+3)", "−2"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Menos com menos vira MAIS. Menos com mais vira MENOS." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 5 − (−3) dá 8 e não 2?",
    pista: "Tirar uma dívida é o mesmo que ganhar dinheiro.",
    revelacao: "Subtrair é somar o oposto. O oposto de −3 é +3, então 5 − (−3) = 5 + 3 = 8.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5 − (−3)",
      passos: [
        { expr: "5 − (−3)", explica: "Subtração de um negativo.", status: "neutro", professor: "Leia assim: 'tirar uma dívida de 3'. Se alguém perdoa uma dívida sua de 3, você fica 3 mais rico." },
        { expr: "= 5 + oposto de (−3)", explica: "Aplico a regra.", status: "ok" },
        { expr: "= 5 + (+3)", explica: "O oposto de −3 é +3.", status: "ok" },
        { expr: "= 8", explica: "Sinais iguais → somo.", status: "ok", professor: "Cuidado: 5 − (−3) NÃO é 2. Quem responde 2 esqueceu de trocar o sinal do número que está sendo subtraído." },
      ],
      fatorada: "5 − (−3) = 8",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Transformar e resolver",
    etapas: [
      {
        texto: "Passo 1: troque a subtração por adição. Passo 2: troque o sinal do número que vem depois. Passo 3: aplique as regras da adição.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−12) − (+7)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−12) − (+7)",
            passos: [
              { expr: "= (−12) + (−7)", explica: "Subtrair +7 é somar −7.", status: "ok" },
              { expr: "Sinais iguais → 12 + 7 = 19", explica: "Somo módulos.", status: "ok" },
              { expr: "= −19", explica: "Conservo o sinal.", status: "ok", professor: "Estava devendo 12 e gastei mais 7. A dívida chegou a 19. Nada aqui pode dar positivo." },
            ],
            fatorada: "= −19",
          },
          destaque: "Só o segundo número troca de sinal — o primeiro fica igual.",
        },
      },
      {
        texto: "Cuidado com o sinal duplo: −(−a) = +a, e −(+a) = −a. Dois sinais seguidos sempre viram um só.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−20) − (−8)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−20) − (−8)",
            passos: [
              { expr: "= (−20) + (+8)", explica: "− (−8) vira +8.", status: "ok" },
              { expr: "Sinais diferentes → 20 − 8 = 12", explica: "Subtraio módulos.", status: "ok" },
              { expr: "= −12", explica: "Sinal do −20.", status: "ok", professor: "Note que a dívida DIMINUIU de 20 para 12: tirar uma dívida melhora a situação, mas 8 não é suficiente para virar positivo." },
            ],
            fatorada: "= −12",
          },
          destaque: "Tirar dívida melhora, mas nem sempre vira lucro.",
        },
      },
      {
        texto: "Em expressões com vários termos, transforme TODAS as subtrações em adição antes de calcular.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "9 − 15 − (−4)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "9 − 15 − (−4)",
            passos: [
              { expr: "= 9 + (−15) + (+4)", explica: "Tudo virou adição.", status: "ok" },
              { expr: "Positivos: 9 + 4 = 13", explica: "Agrupo.", status: "ok" },
              { expr: "13 + (−15)", explica: "Sinais diferentes.", status: "ok" },
              { expr: "15 − 13 = 2, sinal do −15", explica: "Maior módulo.", status: "ok" },
              { expr: "= −2", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= −2",
          },
          destaque: "Converta tudo primeiro; só depois calcule.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (−6) − (−14).",
    resposta: "+8",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−6) − (−14)",
      passos: [
        { expr: "= (−6) + (+14)", explica: "Somo o oposto.", status: "neutro" },
        { expr: "Sinais diferentes → 14 − 6 = 8", explica: "Subtraio módulos.", status: "ok" },
        { expr: "Sinal do +14", explica: "Módulo maior.", status: "ok", professor: "Aqui a dívida perdoada (14) é maior que a dívida original (6), então sobra crédito: +8." },
      ],
      fatorada: "= +8",
      legenda: "Brilha resolve",
    },
    passos: [
      "Subtrair −14 é somar +14.",
      "(−6) + (+14): sinais diferentes → 14 − 6 = 8.",
      "O maior módulo é +14 → resultado positivo.",
      "= +8.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 4 − (−9) = ?",
    dica: "Menos com menos vira mais: 4 + 9.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4 − (−9)",
      passos: [
        { expr: "= 4 + 9", explica: "Somo o oposto.", status: "neutro" },
        { expr: "= 13", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= 13",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "13" }, { nome: "−5" }, { nome: "−13" }],
      respostaCerta: "13",
      feedbackAcerto: "🎯 Subtrair −9 é somar +9.",
      feedbackErro: "Não é 4 − 9. O sinal de menos na frente do (−9) troca o sinal dele: 4 + 9 = 13.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (−10) − (+6) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−10) − (+6)",
      passos: [
        { expr: "= (−10) + (−6)", explica: "Somo o oposto de +6.", status: "neutro" },
        { expr: "= −16", explica: "Sinais iguais → soma.", status: "ok" },
      ],
      fatorada: "= −16",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−16" }, { nome: "−4" }, { nome: "+16" }],
      respostaCerta: "−16",
      feedbackAcerto: "🎯 Dívida de 10 mais gasto de 6 = dívida de 16.",
      feedbackErro: "Subtrair +6 é somar −6: (−10) + (−6). Sinais iguais → 10 + 6 = 16, com o sinal negativo." },
  },

  momento08_aplicacao: {
    contexto: "Um submarino está a −120 m. Um helicóptero voa a 340 m de altitude.",
    problema: "Qual a diferença de altura entre os dois?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "340 − (−120)",
      passos: [
        { expr: "Diferença = maior − menor", explica: "Sempre nessa ordem.", status: "neutro" },
        { expr: "= 340 − (−120)", explica: "O submarino está em −120.", status: "ok" },
        { expr: "= 340 + 120", explica: "Somo o oposto.", status: "ok", professor: "Faz sentido: o helicóptero precisa subir 340 m a partir do nível do mar, e o submarino está mais 120 m abaixo. Os dois trechos se somam." },
        { expr: "= 460", explica: "Diferença em metros.", status: "ok" },
      ],
      fatorada: "460 metros de diferença",
      legenda: "Aplicação — altitude",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "460 m" }, { nome: "220 m" }, { nome: "340 m" }],
      respostaCerta: "460 m",
      feedbackAcerto: "🎯 340 + 120 = 460 m.",
      feedbackErro: "Não subtraia 340 − 120. Como o submarino está ABAIXO do zero, a conta é 340 − (−120) = 340 + 120 = 460 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "a − b = a + (oposto de b).",
      "−(−x) = +x  e  −(+x) = −x.",
      "Só o segundo número troca de sinal.",
      "Converta todas as subtrações antes de calcular.",
      "Diferença entre um positivo e um negativo SOMA as distâncias.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "7 − (−2) =", opcoes: ["9", "5", "−9"], correta: 0, feedbackAcerto: "🎉 7 + 2 = 9.", feedbackErro: "Menos com menos vira mais: 7 + 2 = 9." },
      { pergunta: "(−8) − (+5) =", opcoes: ["−13", "−3", "+13"], correta: 0, feedbackAcerto: "🎉 (−8) + (−5) = −13.", feedbackErro: "Subtrair +5 é somar −5. Sinais iguais: 8 + 5 = 13, com sinal negativo." },
      { pergunta: "(−4) − (−9) =", opcoes: ["+5", "−13", "−5"], correta: 0, feedbackAcerto: "🎉 (−4) + (+9): 9 − 4 = 5, sinal do +9.", feedbackErro: "− (−9) vira +9. Então (−4) + 9 = +5, porque 9 tem módulo maior." },
      { pergunta: "0 − (−6) =", opcoes: ["6", "−6", "0"], correta: 0, feedbackAcerto: "🎉 0 + 6 = 6.", feedbackErro: "Subtrair −6 é somar +6: 0 + 6 = 6." },
      { pergunta: "A diferença entre 12 °C e −3 °C é:", opcoes: ["15 °C", "9 °C", "12 °C"], correta: 0, feedbackAcerto: "🎉 12 − (−3) = 12 + 3 = 15 °C.", feedbackErro: "Atravessa o zero: 12 − (−3) = 12 + 3 = 15 °C." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Termômetro das diferenças",
    materiais: ["Papel", "Caneta", "Previsão do tempo"],
    passos: [
      "Escolha 3 cidades do mundo com temperaturas diferentes (pelo menos uma negativa).",
      "Calcule a diferença entre a mais quente e a mais fria usando a regra a − b = a + (−b).",
      "Escreva a conta completa mostrando a troca de sinal.",
    ],
    registro: "📸 Foto das três contas.",
  },
  recompensa: { xp: 205, moedas: 100, medalha: "Mestre do Oposto" },
};
