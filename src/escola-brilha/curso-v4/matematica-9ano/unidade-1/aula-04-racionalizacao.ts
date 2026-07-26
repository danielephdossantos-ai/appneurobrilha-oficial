import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U1 — Racionalização de denominadores.
 */
export const aula04_racionalizacao: AulaV4 = {
  slug: "u1-04-racionalizacao",
  titulo: "Racionalização: Tirando a Raiz do Denominador",
  iconeTrilha: "🧲",
  bncc: ["EF09MA03"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Raiz no denominador incomoda os matemáticos",
    historia:
      "{NOME}, dividir por √3 é como dividir uma pizza em fatias de tamanho 'esquisito'. Os matemáticos preferem sempre ter um número INTEIRO embaixo da fração. Hoje você aprende o truque para tirar a raiz do denominador sem mudar o valor da fração.",
  },

  momento02_exploracao: {
    instrucao: "Veja o truque: multiplicar por 1 disfarçado de fração com a mesma raiz.",
    cenas: [
      {
        tipo: "texto",
        texto: "🔑 Multiplicar uma fração por √a/√a NÃO muda seu valor, porque √a/√a = 1. Mas transforma o denominador irracional em um número inteiro!",
      },
      {
        tipo: "tabela",
        titulo: "Antes e depois da racionalização",
        cabecalhos: ["Fração original", "Multiplico por", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["1/√3", "√3/√3", "√3/3"] },
          { rotulo: "2", valores: ["5/√2", "√2/√2", "5√2/2"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar 1/√3 em uma fração sem raiz embaixo?",
    pista: "Multiplique o numerador E o denominador pelo mesmo √3. Lembre: √3 · √3 = 3.",
    revelacao: "1/√3 × √3/√3 = √3/3. O denominador virou 3, um número racional, e a fração vale exatamente o mesmo que antes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/√3",
      passos: [
        { expr: "1/√3 × √3/√3", explica: "Multiplico por √3/√3 (que vale 1).", status: "neutro", professor: "√3/√3 = 1, então multiplicar por ele não muda o valor da fração — só a sua APARÊNCIA." },
        { expr: "= (1 · √3)/(√3 · √3)", explica: "Multiplico numeradores e denominadores.", status: "ok" },
        { expr: "= √3/3", explica: "√3 · √3 = 3 no denominador.", status: "ok", professor: "Note que √3 · √3 = 3, um número racional. O objetivo da racionalização é sempre esse: eliminar a raiz de baixo." },
      ],
      fatorada: "1/√3 = √3/3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Racionalizar denominadores: o fator racionalizante",
    etapas: [
      {
        texto:
          "Quando o denominador é uma raiz simples √a, multiplicamos numerador e denominador por √a. Isso porque √a · √a = a, eliminando a raiz de baixo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Racionalizar 4/√5.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4/√5",
            passos: [
              { expr: "4/√5 × √5/√5", explica: "Multiplico pelo fator racionalizante √5.", status: "neutro" },
              { expr: "= 4√5/(√5 · √5)", explica: "Multiplico numeradores e denominadores.", status: "ok" },
              { expr: "= 4√5/5", explica: "√5 · √5 = 5.", status: "ok", professor: "O numerador SEMPRE recebe a multiplicação também — é comum o aluno esquecer disso e só multiplicar embaixo." },
            ],
            fatorada: "4/√5 = 4√5/5",
          },
          destaque: "Fator racionalizante de √a é o próprio √a.",
        },
      },
      {
        texto:
          "Quando há um coeficiente multiplicando a raiz no denominador (ex.: 2√5), racionalizamos do mesmo jeito e depois simplificamos a fração, se possível.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Racionalizar 6/(2√5).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "6/(2√5)",
            passos: [
              { expr: "6/(2√5) × √5/√5", explica: "Multiplico pelo fator racionalizante.", status: "neutro" },
              { expr: "= 6√5/(2 × 5)", explica: "No denominador: 2 · √5 · √5 = 2 · 5 = 10.", status: "ok", professor: "O coeficiente 2 do denominador fica parado; só a parte √5 · √5 vira 5. Por isso o denominador final é 2 × 5 = 10." },
              { expr: "= 6√5/10", explica: "Simplifico a fração.", status: "ok" },
              { expr: "= 3√5/5", explica: "Divido numerador e denominador por 2.", status: "ok" },
            ],
            fatorada: "6/(2√5) = 3√5/5",
          },
          destaque: "Depois de racionalizar, sempre verifique se a fração simplifica mais.",
        },
      },
      {
        texto:
          "Quando o radicando não é primo, às vezes vale simplificar o radical ANTES de racionalizar — o trabalho fica mais leve.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Racionalizar 4/√8.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4/√8",
            passos: [
              { expr: "√8 = 2√2", explica: "Simplifico o denominador primeiro.", status: "neutro", professor: "Simplificar antes reduz o tamanho dos números na racionalização." },
              { expr: "4/(2√2)", explica: "Reescrevo a fração.", status: "ok" },
              { expr: "= 2/√2", explica: "Simplifico 4/2 = 2.", status: "ok" },
              { expr: "× √2/√2 = 2√2/2 = √2", explica: "Racionalizo e simplifico.", status: "ok", professor: "2√2/2 simplifica para √2, pois 2 ÷ 2 = 1. O resultado final é bem mais enxuto." },
            ],
            fatorada: "4/√8 = √2",
          },
          destaque: "Simplificar antes de racionalizar economiza contas.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: racionalize 10/√2.",
    resposta: "10/√2 = 5√2",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "10/√2",
      passos: [
        { expr: "10/√2 × √2/√2", explica: "Multiplico pelo fator racionalizante.", status: "neutro" },
        { expr: "= 10√2/2", explica: "√2 · √2 = 2 no denominador.", status: "ok" },
        { expr: "= 5√2", explica: "Simplifico 10/2 = 5.", status: "ok", professor: "Sempre simplifique a fração numérica no final — aqui 10 e 2 têm fator comum 2." },
      ],
      fatorada: "10/√2 = 5√2",
      legenda: "Brilha resolve",
    },
    passos: [
      "Multiplico numerador e denominador por √2.",
      "No denominador, √2 · √2 = 2.",
      "Simplifico a fração 10/2 = 5.",
      "Resultado: 5√2.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: racionalize 3/√3.",
    dica: "Multiplique por √3/√3. Depois simplifique a fração numérica se possível.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/√3",
      passos: [
        { expr: "3/√3 × √3/√3 = 3√3/3", explica: "Racionalizo.", status: "neutro" },
      ],
      fatorada: "3/√3 = √3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "√3" }, { nome: "3√3" }, { nome: "√3/3" }],
      respostaCerta: "√3",
      feedbackAcerto: "🎯 3√3/3 simplifica para √3, pois 3 ÷ 3 = 1.",
      feedbackErro: "Depois de racionalizar, você tem 3√3/3. Como 3 ÷ 3 = 1, isso simplifica para √3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: racionalize 8/√2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "8/√2",
      passos: [
        { expr: "8/√2 × √2/√2", explica: "Multiplico pelo fator racionalizante.", status: "neutro" },
        { expr: "= 8√2/2", explica: "√2 · √2 = 2.", status: "ok" },
      ],
      fatorada: "8/√2 = 4√2",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4√2" }, { nome: "8√2" }, { nome: "2√2" }],
      respostaCerta: "4√2",
      feedbackAcerto: "🎯 8√2/2 simplifica para 4√2, pois 8 ÷ 2 = 4.",
      feedbackErro: "Depois de racionalizar você tem 8√2/2. Simplifique: 8 ÷ 2 = 4, então o resultado é 4√2.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Em uma fórmula de física, a velocidade de um objeto é dada por v = 12/√3 m/s.",
    problema: "Racionalize essa expressão para deixá-la sem raiz no denominador.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12/√3",
      passos: [
        { expr: "12/√3 × √3/√3", explica: "Multiplico pelo fator racionalizante.", status: "neutro" },
        { expr: "= 12√3/3", explica: "√3 · √3 = 3 no denominador.", status: "ok" },
        { expr: "= 4√3", explica: "Simplifico 12/3 = 4.", status: "ok", professor: "Cientistas preferem expressões racionalizadas porque facilitam cálculos numéricos e comparações." },
      ],
      fatorada: "v = 4√3 m/s",
      legenda: "Aplicação — física",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4√3 m/s" }, { nome: "12√3 m/s" }, { nome: "4/√3 m/s" }],
      respostaCerta: "4√3 m/s",
      feedbackAcerto: "🎯 12√3/3 simplifica para 4√3, pois 12 ÷ 3 = 4.",
      feedbackErro: "Racionalize multiplicando por √3/√3: 12√3/3. Depois simplifique 12 ÷ 3 = 4, chegando a 4√3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Racionalizar = eliminar raiz do denominador multiplicando por uma fração que vale 1.",
      "Fator racionalizante de √a é o próprio √a, pois √a · √a = a.",
      "Sempre simplifique a fração numérica depois de racionalizar.",
      "Vale simplificar o radical ANTES de racionalizar, se possível — economiza contas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Racionalizando 1/√5, obtemos:",
        opcoes: ["√5/5", "5/√5", "1/5"],
        correta: 0,
        feedbackAcerto: "🎉 Multiplico por √5/√5: 1/√5 = √5/5.",
        feedbackErro: "Multiplique numerador e denominador por √5: 1×√5 / (√5×√5) = √5/5.",
      },
      {
        pergunta: "Racionalizando 6/√3, obtemos:",
        opcoes: ["2√3", "6√3", "3√3"],
        correta: 0,
        feedbackAcerto: "🎉 6/√3 × √3/√3 = 6√3/3 = 2√3.",
        feedbackErro: "Multiplique por √3/√3: 6√3/3. Simplifique 6÷3=2, chegando a 2√3.",
      },
      {
        pergunta: "O fator racionalizante de 5/√7 é:",
        opcoes: ["√7/√7", "7/7", "5/5"],
        correta: 0,
        feedbackAcerto: "🎉 Multiplicamos por √7/√7, pois √7 · √7 = 7 elimina a raiz.",
        feedbackErro: "O fator racionalizante é sempre a raiz que está no denominador sobre ela mesma: aqui, √7/√7.",
      },
      {
        pergunta: "Racionalizando 9/(3√2), obtemos:",
        opcoes: ["3√2/2", "3/√2", "9√2/6"],
        correta: 0,
        feedbackAcerto: "🎉 9/(3√2) × √2/√2 = 9√2/6 = 3√2/2 (dividindo por 3).",
        feedbackErro: "Primeiro racionalize: 9√2/6. Depois simplifique dividindo por 3: 3√2/2.",
      },
      {
        pergunta: "Racionalizando 4/√8 (dica: √8 = 2√2), obtemos:",
        opcoes: ["√2", "2√2", "4√2"],
        correta: 0,
        feedbackAcerto: "🎉 4/√8 = 4/(2√2) = 2/√2 = 2√2/2 = √2.",
        feedbackErro: "Primeiro simplifique √8 = 2√2, ficando 4/(2√2) = 2/√2. Depois racionalize: 2√2/2 = √2.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-raízes no denominador",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 3 frações com raiz no denominador (ex.: 2/√3, 5/√2, 7/√5).",
      "Racionalize cada uma, mostrando todos os passos.",
      "Explique para alguém da família por que multiplicar por √a/√a não muda o valor da fração.",
    ],
    registro: "📸 Foto do caderno com as três racionalizações.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Racionalizador" },
};
