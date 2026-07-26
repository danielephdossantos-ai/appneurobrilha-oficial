import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U1 — Operações com radicais: soma, subtração, multiplicação e divisão.
 */
export const aula03_operacoesRadicais: AulaV4 = {
  slug: "u1-03-operacoes-radicais",
  titulo: "Radicais Operam: Somar, Multiplicar, Dividir",
  iconeTrilha: "🧮",
  bncc: ["EF09MA03"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Radicais também têm 'figurinhas iguais'",
    historia:
      "{NOME}, você já juntou figurinhas repetidas, certo? Com radicais é igual: só posso somar √2 com √2, nunca √2 com √3. Hoje você aprende a somar, multiplicar e dividir radicais sem cair nessa armadilha.",
  },

  momento02_exploracao: {
    instrucao: "Compare os radicais semelhantes e os diferentes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Radicais semelhantes ou não?",
        cabecalhos: ["Radicais", "Mesmo radicando?", "Pode somar direto?"],
        linhas: [
          { rotulo: "1", valores: ["3√2 e 5√2", "sim (ambos √2)", "SIM"] },
          { rotulo: "2", valores: ["3√2 e 5√3", "não", "NÃO"] },
          { rotulo: "3", valores: ["√8 e 3√2", "não à primeira vista", "SIM, após simplificar"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Radicais SEMELHANTES têm o MESMO número dentro da raiz. Só posso somar/subtrair os coeficientes de radicais semelhantes — o radical não muda, igual em 3x + 5x = 8x.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que √8 + 3√2 pode ser somado, mesmo os radicais parecendo diferentes?",
    pista: "Simplifique √8 antes de decidir. Ele esconde um quadrado perfeito.",
    revelacao: "√8 = 2√2. Agora os dois termos têm o MESMO radical (√2) e viram radicais semelhantes: 2√2 + 3√2 = 5√2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√8 + 3√2",
      passos: [
        { expr: "√8 = √(4 × 2) = 2√2", explica: "Simplifico √8 primeiro.", status: "neutro", professor: "Antes de somar radicais, SEMPRE simplifique cada um — muitos radicais 'diferentes' são iguais depois de simplificados." },
        { expr: "2√2 + 3√2", explica: "Agora os radicais são iguais.", status: "ok" },
        { expr: "(2 + 3)√2 = 5√2", explica: "Somo só os coeficientes.", status: "ok", professor: "O radical √2 funciona como se fosse uma 'unidade': 2 unidades + 3 unidades = 5 unidades de √2." },
      ],
      fatorada: "√8 + 3√2 = 5√2",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As quatro operações com radicais",
    etapas: [
      {
        texto:
          "SOMA e SUBTRAÇÃO: só se somam/subtraem radicais SEMELHANTES (mesmo índice e mesmo radicando). Somamos os coeficientes e mantemos o radical, igual em termos algébricos semelhantes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular 7√3 − 2√3.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "7√3 − 2√3",
            passos: [
              { expr: "7√3 − 2√3", explica: "Radicais semelhantes (mesmo √3).", status: "neutro" },
              { expr: "(7 − 2)√3", explica: "Subtraio os coeficientes.", status: "ok" },
              { expr: "= 5√3", explica: "Resultado final.", status: "ok", professor: "Nunca subtraia o que está dentro da raiz: 7√3 − 2√3 NÃO é 5√1 nem 5√(3-3). O radical fica intacto." },
            ],
            fatorada: "7√3 − 2√3 = 5√3",
          },
          destaque: "Radical semelhante: some/subtraia só os coeficientes.",
        },
      },
      {
        texto:
          "MULTIPLICAÇÃO: √a · √b = √(a·b) — multiplico o que está dentro das raízes (mesmo índice). Coeficientes fora da raiz se multiplicam entre si.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular √12 · √3.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "√12 · √3",
            passos: [
              { expr: "√12 · √3 = √(12 × 3)", explica: "Multiplico dentro da raiz.", status: "neutro", professor: "Essa propriedade é a inversa da que usamos para simplificar radicais — aqui juntamos, lá separávamos." },
              { expr: "= √36", explica: "12 × 3 = 36.", status: "ok" },
              { expr: "= 6", explica: "36 é quadrado perfeito.", status: "ok" },
            ],
            fatorada: "√12 · √3 = 6",
          },
          destaque: "Multiplicar radicais de mesmo índice: junte tudo em uma só raiz.",
        },
      },
      {
        texto:
          "DIVISÃO: √a ÷ √b = √(a÷b) — divido o que está dentro das raízes (mesmo índice, b ≠ 0). Coeficientes fora se dividem entre si.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Calcular √20 ÷ √5.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "√20 ÷ √5",
            passos: [
              { expr: "√20 ÷ √5 = √(20 ÷ 5)", explica: "Divido dentro da raiz.", status: "neutro" },
              { expr: "= √4", explica: "20 ÷ 5 = 4.", status: "ok" },
              { expr: "= 2", explica: "4 é quadrado perfeito.", status: "ok", professor: "Sempre que possível, divida antes de extrair a raiz — o número fica menor e mais fácil de reconhecer como quadrado perfeito." },
            ],
            fatorada: "√20 ÷ √5 = 2",
          },
          destaque: "Dividir radicais de mesmo índice: junte tudo em uma só raiz.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: calcule 4√5 · 2√3.",
    resposta: "4√5 · 2√3 = 8√15",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4√5 · 2√3",
      passos: [
        { expr: "4 × 2 = 8", explica: "Multiplico os coeficientes.", status: "neutro", professor: "Separo a multiplicação em duas partes: coeficientes de um lado, radicais de outro." },
        { expr: "√5 · √3 = √15", explica: "Multiplico os radicandos.", status: "ok" },
        { expr: "4√5 · 2√3 = 8√15", explica: "Junto os dois resultados.", status: "ok", professor: "15 = 3 × 5 não tem quadrado perfeito escondido (além de 1), então √15 já está na forma mais simples." },
      ],
      fatorada: "4√5 · 2√3 = 8√15",
      legenda: "Brilha resolve",
    },
    passos: [
      "Multiplico os coeficientes: 4 × 2 = 8.",
      "Multiplico os radicandos: √5 · √3 = √15.",
      "Junto tudo: 8√15.",
      "Verifico se 15 tem quadrado perfeito escondido — não tem, então já está simplificado.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: calcule 6√7 − 2√7.",
    dica: "Os radicais são semelhantes (mesmo √7). Subtraia só os coeficientes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6√7 − 2√7",
      passos: [
        { expr: "(6 − 2)√7", explica: "Subtraio os coeficientes.", status: "neutro" },
      ],
      fatorada: "6√7 − 2√7 = 4√7",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4√7" }, { nome: "4√14" }, { nome: "4" }],
      respostaCerta: "4√7",
      feedbackAcerto: "🎯 São radicais semelhantes: subtraio só os coeficientes, 6 − 2 = 4, mantendo √7.",
      feedbackErro: "O radical √7 não muda: só os coeficientes se subtraem. 6√7 − 2√7 = (6−2)√7 = 4√7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: calcule √18 ÷ √2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√18 ÷ √2",
      passos: [
        { expr: "√18 ÷ √2 = √(18 ÷ 2)", explica: "Divido dentro da raiz.", status: "neutro" },
        { expr: "= √9", explica: "18 ÷ 2 = 9.", status: "ok" },
      ],
      fatorada: "√18 ÷ √2 = 3",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "9" }, { nome: "√9" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 √18 ÷ √2 = √9 = 3, pois 18 ÷ 2 = 9 e 9 é quadrado perfeito.",
      feedbackErro: "Divida dentro da raiz: 18 ÷ 2 = 9. Depois extraia: √9 = 3.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um jardineiro precisa somar o comprimento de dois canteiros: um mede √27 m e outro mede 2√3 m.",
    problema: "Qual é o comprimento total dos dois canteiros juntos?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√27 + 2√3",
      passos: [
        { expr: "√27 = √(9 × 3) = 3√3", explica: "Simplifico √27 primeiro.", status: "neutro", professor: "Antes de somar, sempre simplifique cada radical — pode ser que eles fiquem semelhantes, como aconteceu aqui." },
        { expr: "3√3 + 2√3", explica: "Agora os radicais são iguais.", status: "ok" },
        { expr: "(3 + 2)√3 = 5√3", explica: "Somo os coeficientes.", status: "ok" },
      ],
      fatorada: "Comprimento total = 5√3 m ≈ 8,66 m",
      legenda: "Aplicação — canteiros",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5√3 m" }, { nome: "5√6 m" }, { nome: "2√27 m" }],
      respostaCerta: "5√3 m",
      feedbackAcerto: "🎯 √27 simplifica para 3√3, que somado a 2√3 dá 5√3 m.",
      feedbackErro: "Primeiro simplifique √27 = 3√3. Depois some com 2√3, pois agora são semelhantes: 3√3 + 2√3 = 5√3 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Radicais semelhantes têm o mesmo radicando — só assim posso somar/subtrair coeficientes.",
      "Antes de somar, SEMPRE simplifique cada radical (ex.: √8 = 2√2).",
      "Multiplicação: √a · √b = √(a·b).",
      "Divisão: √a ÷ √b = √(a÷b).",
      "Coeficientes fora da raiz operam entre si; radicandos operam entre si.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "3√5 + 4√5 é igual a:",
        opcoes: ["7√5", "7√10", "12√5"],
        correta: 0,
        feedbackAcerto: "🎉 Radicais semelhantes: some os coeficientes, 3 + 4 = 7, mantendo √5.",
        feedbackErro: "O radical não muda ao somar radicais semelhantes: 3√5 + 4√5 = (3+4)√5 = 7√5.",
      },
      {
        pergunta: "√8 + √2 é igual a:",
        opcoes: ["3√2", "√10", "2√4"],
        correta: 0,
        feedbackAcerto: "🎉 √8 = 2√2, então 2√2 + √2 = 3√2.",
        feedbackErro: "Simplifique √8 primeiro: √8 = 2√2. Agora some com √2: 2√2 + 1√2 = 3√2.",
      },
      {
        pergunta: "√5 · √5 é igual a:",
        opcoes: ["5", "√25", "√10"],
        correta: 0,
        feedbackAcerto: "🎉 √5 · √5 = √(5×5) = √25 = 5.",
        feedbackErro: "Multiplico dentro da raiz: 5 × 5 = 25. Depois extraio: √25 = 5.",
      },
      {
        pergunta: "√45 ÷ √5 é igual a:",
        opcoes: ["3", "9", "√9"],
        correta: 0,
        feedbackAcerto: "🎉 45 ÷ 5 = 9, e √9 = 3.",
        feedbackErro: "Divida dentro da raiz: 45 ÷ 5 = 9. Depois extraia a raiz: √9 = 3.",
      },
      {
        pergunta: "2√3 · 5√2 é igual a:",
        opcoes: ["10√6", "7√6", "10√5"],
        correta: 0,
        feedbackAcerto: "🎉 Multiplico coeficientes (2×5=10) e radicandos (√3·√2=√6): 10√6.",
        feedbackErro: "Multiplique separadamente: coeficientes 2 × 5 = 10; radicandos √3 · √2 = √6. Resultado: 10√6.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Oficina de radicais em casa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 3 pares de radicais semelhantes (ex.: 2√5 e 3√5) e some cada par.",
      "Escolha 2 radicais diferentes e multiplique-os (ex.: √3 · √7).",
      "Explique para alguém da família a diferença entre somar radicais e multiplicar radicais.",
    ],
    registro: "📸 Foto do caderno com as contas resolvidas.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre dos Radicais" },
};
