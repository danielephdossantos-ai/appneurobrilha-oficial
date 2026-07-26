import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U2 — A forma geral da equação do 2º grau.
 * ax² + bx + c = 0 (a ≠ 0). Identificar a, b, c e verificar raízes.
 */
export const aula01_formaGeral: AulaV4 = {
  slug: "u2-01-forma-geral",
  titulo: "A Fôrma do 2º Grau",
  iconeTrilha: "🧩",
  bncc: ["EF09MA09"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Uma nova fôrma para os números",
    historia:
      "{NOME}, até agora você resolvia equações com x sozinho: 2x + 3 = 7. Hoje aparece um x NOVO, o x² (x vezes x). Toda equação com x² encaixada numa fôrma especial, ax² + bx + c = 0, se chama equação do 2º grau. Vamos aprender a reconhecer essa fôrma.",
  },

  momento02_exploracao: {
    instrucao: "Observe a forma geral e três exemplos diferentes.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "a·x² + b·x + c = 0",
        passos: [
          { expr: "a ≠ 0", explica: "Sem esse termo não é do 2º grau.", status: "ok", professor: "Se a = 0, o x² desaparece e a equação vira do 1º grau. Por isso a condição a ≠ 0 é obrigatória." },
          { expr: "b e c podem ser 0", explica: "Só a precisa ser diferente de zero.", status: "ok" },
        ],
        fatorada: "ax² + bx + c = 0, com a ≠ 0",
        legenda: "Forma geral",
      },
      {
        tipo: "tabela",
        titulo: "Exemplos de equações do 2º grau",
        cabecalhos: ["Equação", "a", "b", "c"],
        linhas: [
          { rotulo: "1", valores: ["2x² − 5x + 3 = 0", "2", "−5", "3"] },
          { rotulo: "2", valores: ["x² − 9 = 0", "1", "0", "−9"] },
          { rotulo: "3", valores: ["−3x² + 4x = 0", "−3", "4", "0"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Repare: nos exemplos 2 e 3, b ou c são zero — mas ainda assim são do 2º grau, porque a nunca é zero.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como saber se x = 1 é raiz de 2x² − 5x + 3 = 0?",
    pista: "Substitua x por 1 em TODO lugar da equação e calcule. Se o resultado for 0, é raiz.",
    revelacao: "x = 1 É raiz, porque a conta dá exatamente 0. Raiz é o valor de x que faz a equação virar uma igualdade verdadeira.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x² − 5x + 3 = 0, testando x = 1",
      passos: [
        { expr: "2·(1)² − 5·(1) + 3", explica: "Substituo x por 1.", status: "neutro" },
        { expr: "= 2·1 − 5 + 3", explica: "Calculo o quadrado primeiro: 1² = 1.", status: "ok" },
        { expr: "= 2 − 5 + 3", explica: "Multiplico 2·1 = 2.", status: "ok" },
        { expr: "= 0", explica: "2 − 5 + 3 = 0. Deu certo!", status: "ok", professor: "Como o resultado é exatamente zero, x = 1 satisfaz a igualdade e por isso é raiz (ou solução) da equação." },
      ],
      fatorada: "x = 1 é raiz de 2x² − 5x + 3 = 0",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Forma geral, coeficientes e raiz",
    etapas: [
      {
        texto:
          "A forma geral da equação do 2º grau é ax² + bx + c = 0, com a ≠ 0. Os números a, b e c são chamados COEFICIENTES: a multiplica x², b multiplica x, e c é o termo independente (sem x).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Reconhecer a forma em x² − 4x + 4 = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 4x + 4 = 0",
            passos: [
              { expr: "x² − 4x + 4 = 0", explica: "Já está na forma ax² + bx + c = 0.", status: "neutro" },
              { expr: "a = 1", explica: "Coeficiente de x² (quando não aparece número, é 1).", status: "ok" },
              { expr: "b = −4", explica: "Coeficiente de x, com o sinal.", status: "ok", professor: "O sinal faz parte do coeficiente! Se a equação é x² − 4x + 4, o −4 inteiro é o valor de b, não apenas o 4." },
              { expr: "c = 4", explica: "Termo sem x.", status: "ok" },
            ],
            fatorada: "a = 1, b = −4, c = 4",
          },
          destaque: "Cada coeficiente carrega o sinal que está na frente dele.",
        },
      },
      {
        texto:
          "Cuidado com os sinais ao identificar b e c: se a equação tiver subtração, o coeficiente é NEGATIVO. Reescreva a equação igualando a zero antes de identificar, se precisar.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Identificar a, b, c em −3x² + 4x = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "−3x² + 4x = 0",
            passos: [
              { expr: "−3x² + 4x + 0 = 0", explica: "Não aparece termo independente: c = 0.", status: "neutro" },
              { expr: "a = −3", explica: "Coeficiente de x², com o sinal negativo.", status: "ok" },
              { expr: "b = 4", explica: "Coeficiente de x.", status: "ok" },
              { expr: "c = 0", explica: "Não há número sozinho.", status: "ok", professor: "c = 0 não quer dizer que a equação sumiu — ela continua sendo do 2º grau, porque a = −3 é diferente de zero." },
            ],
            fatorada: "a = −3, b = 4, c = 0",
          },
          destaque: "Quando falta um termo, o coeficiente correspondente é 0.",
        },
      },
      {
        texto:
          "RAIZ (ou solução) da equação é todo valor de x que, ao ser substituído, torna a igualdade verdadeira (resultado = 0). Para verificar, substitua e calcule com cuidado na ordem: potência, multiplicação, depois soma/subtração.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Verificar se x = 3/2 é raiz de 2x² − 5x + 3 = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x² − 5x + 3 = 0, testando x = 3/2",
            passos: [
              { expr: "2·(3/2)² − 5·(3/2) + 3", explica: "Substituo x por 3/2.", status: "neutro" },
              { expr: "(3/2)² = 9/4", explica: "Elevo ao quadrado primeiro.", status: "ok" },
              { expr: "2·(9/4) = 9/2", explica: "Multiplico.", status: "ok" },
              { expr: "5·(3/2) = 15/2", explica: "Multiplico o segundo termo.", status: "ok" },
              { expr: "9/2 − 15/2 + 3 = −3 + 3 = 0", explica: "9/2 − 15/2 = −6/2 = −3, e −3 + 3 = 0.", status: "ok", professor: "9/2 − 15/2 dá −6/2, que simplifica para −3. Somando 3, o resultado final é zero — confirmando que x = 3/2 também é raiz." },
            ],
            fatorada: "x = 3/2 é raiz de 2x² − 5x + 3 = 0",
          },
          destaque: "Essa equação tem DUAS raízes: x = 1 e x = 3/2.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: identifique a, b, c e verifique se x = 1 é raiz de −3x² + 4x − 1 = 0.",
    resposta: "a = −3, b = 4, c = −1; x = 1 é raiz.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "−3x² + 4x − 1 = 0",
      passos: [
        { expr: "a = −3, b = 4, c = −1", explica: "Leio cada coeficiente com o sinal.", status: "neutro" },
        { expr: "−3·(1)² + 4·(1) − 1", explica: "Substituo x por 1.", status: "ok" },
        { expr: "= −3 + 4 − 1", explica: "1² = 1, então −3·1 = −3.", status: "ok" },
        { expr: "= 0", explica: "−3 + 4 − 1 = 0.", status: "ok", professor: "Somando na ordem: −3 + 4 = 1, e 1 − 1 = 0. Confirmado: x = 1 é raiz." },
      ],
      fatorada: "x = 1 é raiz de −3x² + 4x − 1 = 0",
      legenda: "Brilha resolve",
    },
    passos: [
      "Leio os coeficientes direto da equação, com o sinal.",
      "Substituo x pelo valor a testar.",
      "Calculo primeiro a potência, depois as multiplicações, depois a soma final.",
      "Se der 0, é raiz.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: quais são a, b e c de x² − 7x + 12 = 0?",
    dica: "a é o número que multiplica x² (se não aparecer, é 1). b multiplica x, com sinal. c é o número sozinho.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 7x + 12 = 0",
      passos: [
        { expr: "a = 1", explica: "x² sem número na frente.", status: "neutro" },
        { expr: "b = −7", explica: "Coeficiente de x, com sinal.", status: "neutro" },
        { expr: "c = 12", explica: "Termo independente.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o conjunto correto:",
      opcoes: [{ nome: "a=1, b=−7, c=12" }, { nome: "a=1, b=7, c=12" }, { nome: "a=1, b=−7, c=−12" }],
      respostaCerta: "a=1, b=−7, c=12",
      feedbackAcerto: "🎯 O sinal do −7x é parte do coeficiente b, e c = 12 é positivo.",
      feedbackErro: "Cuidado com os sinais: o −7 vem junto com o x, então b = −7. E c = 12, sem sinal negativo, porque está somando.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: x = −2 é raiz de x² + 5x + 6 = 0?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 5x + 6 = 0, testando x = −2",
      passos: [
        { expr: "(−2)² + 5·(−2) + 6", explica: "Substituo x por −2.", status: "neutro" },
        { expr: "= 4 − 10 + 6", explica: "(−2)² = 4, e 5·(−2) = −10.", status: "ok" },
        { expr: "= 0", explica: "4 − 10 + 6 = 0.", status: "ok" },
      ],
      fatorada: "x = −2 é raiz",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim, é raiz" }, { nome: "Não é raiz" }, { nome: "Só é raiz se x for positivo" }],
      respostaCerta: "Sim, é raiz",
      feedbackAcerto: "🎯 4 − 10 + 6 = 0, então x = −2 realmente satisfaz a equação.",
      feedbackErro: "Substitua com cuidado: (−2)² = 4 (positivo!), depois 4 − 10 + 6 = 0. É raiz sim.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma fábrica usa a equação x² − x − 6 = 0 para calcular quantas caixas cabem numa prateleira especial.",
    problema: "Verifique: x = 3 é solução dessa equação?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − x − 6 = 0, testando x = 3",
      passos: [
        { expr: "(3)² − 3 − 6", explica: "Substituo x por 3.", status: "neutro" },
        { expr: "= 9 − 3 − 6", explica: "3² = 9.", status: "ok" },
        { expr: "= 0", explica: "9 − 3 − 6 = 0.", status: "ok", professor: "9 − 3 = 6, e 6 − 6 = 0. A conta fecha, então x = 3 é raiz da equação da fábrica." },
      ],
      fatorada: "x = 3 é raiz de x² − x − 6 = 0",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim, é solução" }, { nome: "Não é solução" }, { nome: "Falta informação" }],
      respostaCerta: "Sim, é solução",
      feedbackAcerto: "🎯 9 − 3 − 6 = 0, então x = 3 resolve a equação da fábrica.",
      feedbackErro: "Substitua x por 3: 3² = 9, depois 9 − 3 − 6 = 0. A conta dá exatamente zero, então é solução.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Forma geral: ax² + bx + c = 0, com a ≠ 0.",
      "a multiplica x², b multiplica x, c é o termo independente.",
      "Cada coeficiente carrega o sinal que está na frente dele.",
      "Se faltar um termo, o coeficiente correspondente é 0.",
      "Raiz é o valor de x que torna a equação verdadeira (resultado = 0) ao substituir.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a condição obrigatória para uma equação ser do 2º grau?",
        opcoes: ["a ≠ 0", "b ≠ 0", "c ≠ 0"],
        correta: 0,
        feedbackAcerto: "🎉 Se a = 0, o x² desaparece e a equação vira do 1º grau.",
        feedbackErro: "O termo x² só existe se a for diferente de zero. b e c podem ser zero sem problema.",
      },
      {
        pergunta: "Em 5x² − 2x − 8 = 0, qual é o valor de b?",
        opcoes: ["−2", "2", "−8"],
        correta: 0,
        feedbackAcerto: "🎉 O sinal de subtração faz parte do coeficiente: b = −2.",
        feedbackErro: "Leia com o sinal: é −2x, então b = −2, não 2.",
      },
      {
        pergunta: "Em x² + 6x = 0, qual é o valor de c?",
        opcoes: ["0", "6", "1"],
        correta: 0,
        feedbackAcerto: "🎉 Não há termo independente, então c = 0.",
        feedbackErro: "Quando não aparece número sozinho na equação, o coeficiente c vale 0.",
      },
      {
        pergunta: "x = 2 é raiz de x² − 5x + 6 = 0?",
        opcoes: ["Sim, pois 4 − 10 + 6 = 0", "Não, pois dá 4", "Não, pois dá −4"],
        correta: 0,
        feedbackAcerto: "🎉 2² = 4, 5·2 = 10, e 4 − 10 + 6 = 0. É raiz.",
        feedbackErro: "Substitua com calma: 2² = 4, depois 4 − 10 + 6 = 0. O resultado é zero, então é raiz.",
      },
      {
        pergunta: "x = 0 é raiz de 4x² + 3 = 0?",
        opcoes: ["Não, pois dá 3", "Sim, pois dá 0", "Não, pois dá −3"],
        correta: 0,
        feedbackAcerto: "🎉 4·(0)² + 3 = 0 + 3 = 3, que não é 0. Então x = 0 NÃO é raiz.",
        feedbackErro: "Substitua x = 0: 4·0² = 0, sobra só o + 3, que dá 3 (não zero). Por isso x = 0 não é raiz.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos coeficientes em casa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 3 equações do 2º grau inventadas por você, cada uma com a, b, c diferentes.",
      "Peça para alguém da família identificar os coeficientes a, b e c de cada uma.",
      "Escolha um valor de x e verifiquem juntos se ele é raiz de uma das equações.",
    ],
    registro: "📸 Foto das 3 equações escritas com os coeficientes circulados.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Detetive dos Coeficientes" },
};
