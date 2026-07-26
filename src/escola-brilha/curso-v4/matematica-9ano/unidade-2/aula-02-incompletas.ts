import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U2 — Equações incompletas do 2º grau.
 * ax² = 0 | ax² + c = 0 (raiz quadrada, ±) | ax² + bx = 0 (fator comum).
 */
export const aula02_incompletas: AulaV4 = {
  slug: "u2-02-incompletas",
  titulo: "Equações Incompletas: Atalhos do 2º Grau",
  iconeTrilha: "✂️",
  bncc: ["EF09MA09"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Nem toda equação precisa da fórmula grande",
    historia:
      "{NOME}, quando b = 0 ou c = 0 na equação ax² + bx + c = 0, ela fica mais curta — e existe um ATALHO para resolver, sem precisar da fórmula completa. Hoje você aprende 3 atalhos para as equações INCOMPLETAS do 2º grau.",
  },

  momento02_exploracao: {
    instrucao: "Observe os três tipos de equação incompleta.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Três tipos de equação incompleta",
        cabecalhos: ["Tipo", "Exemplo", "Falta"],
        linhas: [
          { rotulo: "1", valores: ["ax² = 0", "3x² = 0", "b e c"] },
          { rotulo: "2", valores: ["ax² + c = 0", "x² − 9 = 0", "b"] },
          { rotulo: "3", valores: ["ax² + bx = 0", "x² − 5x = 0", "c"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Cada tipo tem seu próprio atalho: isolar x² (raiz quadrada) ou colocar x em evidência (fator comum).",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Resolvendo x² − 9 = 0, existe SÓ uma resposta?",
    pista: "Se x² = 9, pense: que números elevados ao quadrado dão 9?",
    revelacao: "Existem DUAS respostas: x = 3 e x = −3, porque (3)² = 9 E (−3)² = 9. A raiz quadrada de um número positivo sempre gera duas soluções: +raiz e −raiz.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 9 = 0",
      passos: [
        { expr: "x² = 9", explica: "Isolo x² passando o −9 para o outro lado.", status: "neutro" },
        { expr: "x = +3 ou x = −3", explica: "Dois números diferentes elevam ao quadrado e dão 9.", status: "ok", professor: "(+3)² = 9 e (−3)² = 9. Por isso escrevemos x = ±3 (lê-se 'mais ou menos 3')." },
        { expr: "x = ±3", explica: "Forma resumida das duas raízes.", status: "ok" },
      ],
      fatorada: "x = ±3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Os três atalhos das incompletas",
    etapas: [
      {
        texto:
          "TIPO 1 — ax² = 0 (falta b e c). Aqui a única solução é x = 0. Basta dividir os dois lados por a.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 3x² = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3x² = 0",
            passos: [
              { expr: "x² = 0 ÷ 3", explica: "Divido os dois lados por 3.", status: "neutro" },
              { expr: "x² = 0", explica: "Zero dividido por qualquer número é zero.", status: "ok" },
              { expr: "x = 0", explica: "Só existe um número cujo quadrado é 0: o próprio 0.", status: "ok", professor: "Diferente do Tipo 2, aqui não aparece o ±, porque 0 e −0 são o mesmo número. A equação tem uma única raiz: x = 0." },
            ],
            fatorada: "x = 0",
          },
          destaque: "ax² = 0 sempre tem raiz única x = 0.",
        },
      },
      {
        texto:
          "TIPO 2 — ax² + c = 0 (falta b). Isolo x² e tiro a raiz quadrada dos dois lados. Se der um número positivo, existem DUAS raízes (+ e −). Se der negativo, não existe raiz real.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 2x² − 8 = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x² − 8 = 0",
            passos: [
              { expr: "2x² = 8", explica: "Passo o −8 para o outro lado, virando +8.", status: "neutro" },
              { expr: "x² = 4", explica: "Divido os dois lados por 2.", status: "ok" },
              { expr: "x = ±√4", explica: "Tiro a raiz quadrada dos dois lados.", status: "ok", professor: "Toda vez que tiramos raiz quadrada para resolver uma equação, devemos considerar as duas possibilidades de sinal, porque (+2)² e (−2)² dão o mesmo resultado positivo." },
              { expr: "x = ±2", explica: "√4 = 2, então x = 2 ou x = −2.", status: "ok" },
            ],
            fatorada: "x = 2 ou x = −2",
          },
          destaque: "Se x² = número positivo, existem duas raízes: +raiz e −raiz.",
        },
      },
      {
        texto:
          "TIPO 3 — ax² + bx = 0 (falta c). Coloco x em EVIDÊNCIA (fator comum), e uso a ideia: se dois fatores multiplicados dão 0, um deles é 0.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver x² − 5x = 0.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 5x = 0",
            passos: [
              { expr: "x·(x − 5) = 0", explica: "Coloco x em evidência: x aparece nos dois termos.", status: "neutro" },
              { expr: "x = 0 ou x − 5 = 0", explica: "Se a multiplicação dá 0, um dos fatores é 0.", status: "ok", professor: "Essa é a 'regra do produto nulo': se A · B = 0, então A = 0 OU B = 0. Não existe outra forma de um produto dar zero." },
              { expr: "x = 0 ou x = 5", explica: "Resolvo cada mini-equação separadamente.", status: "ok" },
            ],
            fatorada: "x = 0 ou x = 5",
          },
          destaque: "ax² + bx = 0 SEMPRE tem x = 0 como uma das raízes.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 5x² − 20 = 0.",
    resposta: "x = 2 ou x = −2",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5x² − 20 = 0",
      passos: [
        { expr: "5x² = 20", explica: "Passo o −20 para o outro lado.", status: "neutro" },
        { expr: "x² = 4", explica: "Divido os dois lados por 5.", status: "ok" },
        { expr: "x = ±√4", explica: "Tiro a raiz quadrada dos dois lados.", status: "ok" },
        { expr: "x = 2 ou x = −2", explica: "√4 = 2, com os dois sinais.", status: "ok", professor: "Confirmando: 5·(2)² − 20 = 5·4 − 20 = 0. E 5·(−2)² − 20 = 5·4 − 20 = 0. As duas raízes funcionam." },
      ],
      fatorada: "x = ±2",
      legenda: "Brilha resolve",
    },
    passos: [
      "Isolo o termo x² num lado da equação.",
      "Divido para deixar x² sozinho.",
      "Tiro a raiz quadrada dos dois lados, lembrando do ±.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: resolva x² − 49 = 0.",
    dica: "Isole x², depois tire a raiz quadrada dos dois lados — não esqueça do ±.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 49 = 0",
      passos: [
        { expr: "x² = 49", explica: "Passo o −49 para o outro lado.", status: "neutro" },
        { expr: "x = ±√49", explica: "Tiro a raiz quadrada.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a resposta correta:",
      opcoes: [{ nome: "x = 7 ou x = −7" }, { nome: "x = 7 apenas" }, { nome: "x = 49" }],
      respostaCerta: "x = 7 ou x = −7",
      feedbackAcerto: "🎯 √49 = 7, e como é uma equação incompleta do tipo ax²+c=0, existem duas raízes: +7 e −7.",
      feedbackErro: "Não esqueça o ±! √49 = 7, mas tanto 7² quanto (−7)² dão 49. As duas raízes são 7 e −7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva 4x² + 8x = 0.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x² + 8x = 0",
      passos: [
        { expr: "4x·(x + 2) = 0", explica: "Coloco 4x em evidência.", status: "neutro" },
        { expr: "4x = 0 ou x + 2 = 0", explica: "Um dos fatores precisa ser 0.", status: "ok" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = 0 ou x = −2" }, { nome: "x = 0 ou x = 2" }, { nome: "x = 4 ou x = 8" }],
      respostaCerta: "x = 0 ou x = −2",
      feedbackAcerto: "🎯 De 4x = 0 vem x = 0. De x + 2 = 0 vem x = −2.",
      feedbackErro: "Fatore: 4x·(x + 2) = 0. Isso dá 4x = 0 (logo x = 0) ou x + 2 = 0 (logo x = −2).",
    },
  },

  momento08_aplicacao: {
    contexto: "A área de um terreno quadrado é 121 m².",
    problema: "Qual é a medida do lado desse terreno?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² = 121",
      passos: [
        { expr: "x = ±√121", explica: "Tiro a raiz quadrada dos dois lados.", status: "neutro" },
        { expr: "x = 11 ou x = −11", explica: "√121 = 11, com os dois sinais.", status: "ok" },
        { expr: "Descarto x = −11", explica: "Lado de terreno não pode ser negativo.", status: "ok", professor: "Matematicamente as duas raízes existem, mas no CONTEXTO do problema, medida de comprimento tem que ser positiva. Por isso só x = 11 faz sentido como resposta." },
      ],
      fatorada: "Lado = 11 m",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "11 m" }, { nome: "−11 m" }, { nome: "121 m" }],
      respostaCerta: "11 m",
      feedbackAcerto: "🎯 A equação dá x = ±11, mas medida de lado não pode ser negativa: 11 m.",
      feedbackErro: "A conta dá x = ±11, mas como é uma medida de terreno, descartamos o valor negativo. Resposta: 11 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "ax² = 0 → raiz única x = 0.",
      "ax² + c = 0 → isolo x² e tiro raiz quadrada: duas raízes ±.",
      "ax² + bx = 0 → coloco x em evidência: x = 0 é sempre uma das raízes.",
      "Regra do produto nulo: se A · B = 0, então A = 0 ou B = 0.",
      "Em problemas de medida, descartamos raízes negativas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A equação 7x² = 0 tem:",
        opcoes: ["Uma única raiz: x = 0", "Duas raízes: 0 e 7", "Nenhuma raiz"],
        correta: 0,
        feedbackAcerto: "🎉 Dividindo por 7 e tirando a raiz de 0, sobra só x = 0.",
        feedbackErro: "x² = 0 só tem uma solução: x = 0. Não existe outro número cujo quadrado seja zero.",
      },
      {
        pergunta: "Resolvendo x² − 16 = 0, as raízes são:",
        opcoes: ["x = 4 ou x = −4", "x = 4 apenas", "x = 16"],
        correta: 0,
        feedbackAcerto: "🎉 x² = 16, então x = ±√16 = ±4.",
        feedbackErro: "Isole x²: x² = 16. Tirando a raiz quadrada dos dois lados, aparecem duas respostas: +4 e −4.",
      },
      {
        pergunta: "Resolvendo x² + 7x = 0, uma das raízes é sempre:",
        opcoes: ["x = 0", "x = 7", "x = −7"],
        correta: 0,
        feedbackAcerto: "🎉 Fatorando x·(x + 7) = 0, uma das soluções é sempre x = 0.",
        feedbackErro: "Ao fatorar x·(x + 7) = 0, um dos fatores precisa ser zero. O fator x = 0 sempre aparece nesse tipo de equação.",
      },
      {
        pergunta: "A equação x² + 25 = 0 tem raízes reais?",
        opcoes: ["Não, pois x² = −25 é impossível", "Sim, x = 5 e x = −5", "Sim, x = 25"],
        correta: 0,
        feedbackAcerto: "🎉 x² = −25 não tem solução real, pois nenhum número ao quadrado dá negativo.",
        feedbackErro: "Isolando: x² = −25. Não existe número real cujo quadrado seja negativo. Essa equação não tem raiz real.",
      },
      {
        pergunta: "Fatorando 2x² − 6x = 0, obtemos:",
        opcoes: ["2x·(x − 3) = 0, raízes x=0 ou x=3", "2x·(x + 3) = 0, raízes x=0 ou x=−3", "x·(2x − 6) = 0, raízes x=0 ou x=−6"],
        correta: 0,
        feedbackAcerto: "🎉 Colocando 2x em evidência: 2x·(x − 3) = 0, então x = 0 ou x = 3.",
        feedbackErro: "O fator comum é 2x: 2x² − 6x = 2x·(x − 3). Igualando a zero: x = 0 ou x − 3 = 0, logo x = 3.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos atalhos em casa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva uma equação de cada tipo: ax²=0, ax²+c=0 e ax²+bx=0.",
      "Resolva as três com alguém da família, mostrando o atalho de cada uma.",
      "Meça um objeto quadrado da casa (uma mesa, um azulejo) e monte a equação lado² = área para descobrir a medida do lado.",
    ],
    registro: "📸 Foto das três equações resolvidas.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre dos Atalhos" },
};
