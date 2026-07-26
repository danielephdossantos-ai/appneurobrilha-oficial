import type { AulaV4 } from "../../types";

/** Aula 02 · U2 — Comparar e ordenar números racionais. */
export const aula02_compararRacionais: AulaV4 = {
  slug: "u2-02-comparar-racionais",
  titulo: "Quem é Maior?",
  iconeTrilha: "⚖️",
  bncc: ["EF07MA05"],
  duracaoMin: 28,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "3/4 ou 5/7?",
    historia:
      "{NOME}, olhando rápido é impossível saber quem é maior entre 3/4 e 5/7. Hoje você aprende três técnicas que resolvem qualquer comparação — inclusive com números negativos.",
  },

  momento02_exploracao: {
    instrucao: "Três técnicas para comparar racionais.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Como comparar",
        cabecalhos: ["Técnica", "Quando usar", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["Mesmo denominador", "denominadores fáceis", "3/8 < 5/8"] },
          { rotulo: "2", valores: ["Virar decimal", "sempre funciona", "3/4 = 0,75"] },
          { rotulo: "3", valores: ["Produto cruzado", "duas frações", "3·7 vs 4·5"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Com NEGATIVOS a lógica inverte: −3/4 é MENOR que −1/4, porque está mais longe do zero pela esquerda." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "3/4 ou 5/7: quem é maior?",
    pista: "Multiplique em cruz e compare os produtos, mantendo cada produto do lado da sua fração.",
    revelacao: "3·7 = 21 e 4·5 = 20. Como 21 > 20, temos 3/4 > 5/7.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4  ?  5/7",
      passos: [
        { expr: "3/4  ?  5/7", explica: "Denominadores diferentes.", status: "neutro", professor: "Não dá para comparar numeradores direto quando os denominadores são diferentes: as fatias têm tamanhos diferentes." },
        { expr: "3 · 7 = 21 (lado esquerdo)", explica: "Numerador da 1ª vezes denominador da 2ª.", status: "ok" },
        { expr: "4 · 5 = 20 (lado direito)", explica: "Denominador da 1ª vezes numerador da 2ª.", status: "ok" },
        { expr: "21 > 20", explica: "Comparo os produtos.", status: "ok", professor: "O produto cruzado equivale a igualar os denominadores em 28: 3/4 = 21/28 e 5/7 = 20/28. Por isso funciona." },
        { expr: "3/4 > 5/7", explica: "O lado do produto maior vence.", status: "ok" },
      ],
      fatorada: "3/4 > 5/7",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Três caminhos seguros",
    etapas: [
      {
        texto: "MESMO DENOMINADOR: iguale os denominadores usando o MMC e compare só os numeradores.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Comparar 2/3 e 3/5",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2/3  ?  3/5",
            passos: [
              { expr: "MMC(3, 5) = 15", explica: "Denominador comum.", status: "neutro" },
              { expr: "2/3 = 10/15", explica: "Multiplico por 5 em cima e embaixo.", status: "ok" },
              { expr: "3/5 = 9/15", explica: "Multiplico por 3 em cima e embaixo.", status: "ok", professor: "Multiplicar numerador e denominador pelo mesmo número não muda o valor — só muda a 'roupa' da fração." },
              { expr: "10/15 > 9/15", explica: "Mesmo denominador → compara numerador.", status: "ok" },
            ],
            fatorada: "2/3 > 3/5",
          },
          destaque: "Fatias do mesmo tamanho → conte quantas.",
        },
      },
      {
        texto: "DECIMAL: divida e compare casa a casa. Cuidado — compare décimos com décimos, não a quantidade de dígitos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "0,7 e 0,68",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,7  ?  0,68",
            passos: [
              { expr: "Igualo as casas: 0,70 e 0,68", explica: "Zero à direita não muda valor.", status: "neutro", professor: "Erro clássico: achar que 0,68 é maior porque 'tem mais números'. Compare sempre a mesma casa decimal." },
              { expr: "70 centésimos > 68 centésimos", explica: "Comparo.", status: "ok" },
              { expr: "0,7 > 0,68", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "0,7 > 0,68",
          },
          destaque: "Mais dígitos não significa maior.",
        },
      },
      {
        texto: "NEGATIVOS: quanto maior o módulo, MENOR o número. Ordene primeiro os negativos do maior módulo para o menor.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Ordenar −1/2, −3/4, 0,2",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Ordem crescente",
            passos: [
              { expr: "−3/4 = −0,75 e −1/2 = −0,5", explica: "Passo tudo para decimal.", status: "neutro" },
              { expr: "−0,75 está mais à esquerda", explica: "Módulo maior.", status: "ok", professor: "Nos negativos o módulo maior significa estar mais distante do zero — logo, menor." },
              { expr: "−0,75 < −0,5 < 0,2", explica: "Ordem crescente.", status: "ok" },
            ],
            fatorada: "−3/4 < −1/2 < 0,2",
          },
          destaque: "Nos negativos a ordem se inverte.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: coloque em ordem crescente 1/2, 0,45 e 3/5.",
    resposta: "0,45 < 1/2 < 3/5",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/2 ; 0,45 ; 3/5",
      passos: [
        { expr: "1/2 = 0,5", explica: "Converto.", status: "neutro", professor: "Converter tudo para decimal é a técnica mais segura quando há mistura de formatos." },
        { expr: "3/5 = 0,6", explica: "Converto.", status: "ok" },
        { expr: "0,45 ; 0,50 ; 0,60", explica: "Igualo as casas.", status: "ok" },
        { expr: "0,45 < 0,5 < 0,6", explica: "Ordeno.", status: "ok" },
      ],
      fatorada: "0,45 < 1/2 < 3/5",
      legenda: "Brilha resolve",
    },
    passos: ["1/2 = 0,5.", "3/5 = 0,6.", "Igualo casas: 0,45 · 0,50 · 0,60.", "Ordem: 0,45 < 1/2 < 3/5."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é maior, 5/8 ou 2/3?",
    dica: "Produto cruzado: 5·3 contra 8·2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5/8  ?  2/3",
      passos: [
        { expr: "5 · 3 = 15", explica: "Lado esquerdo.", status: "neutro" },
        { expr: "8 · 2 = 16", explica: "Lado direito.", status: "ok" },
        { expr: "15 < 16", explica: "Direita é maior.", status: "ok" },
      ],
      fatorada: "5/8 < 2/3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "5/8" }, { nome: "São iguais" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 16 > 15, então 2/3 é maior.",
      feedbackErro: "Produto cruzado: 5·3 = 15 e 8·2 = 16. O produto maior está do lado do 2/3, então 2/3 > 5/8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é MENOR, −0,3 ou −0,8?",
    visualMat: {
      tipo: "retaNumerica",
      min: -1,
      max: 1,
      passo: 1,
      destacar: [
        { valor: -0.8, rotulo: "−0,8" },
        { valor: -0.3, rotulo: "−0,3" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−0,8" }, { nome: "−0,3" }, { nome: "São iguais" }],
      respostaCerta: "−0,8",
      feedbackAcerto: "🎯 −0,8 está mais à esquerda, logo é menor.",
      feedbackErro: "Nos negativos, módulo maior = número menor. Como 0,8 > 0,3, temos −0,8 < −0,3.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Três atletas correram a mesma prova. Ana completou 3/4 do percurso, Bia 0,8 e Caio 7/10 antes de parar para beber água.",
    problema: "Quem tinha corrido MAIS até a parada?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4 ; 0,8 ; 7/10",
      passos: [
        { expr: "3/4 = 0,75", explica: "Ana.", status: "neutro" },
        { expr: "0,8 = 0,80", explica: "Bia.", status: "ok" },
        { expr: "7/10 = 0,70", explica: "Caio.", status: "ok" },
        { expr: "0,80 > 0,75 > 0,70", explica: "Comparo em centésimos.", status: "ok", professor: "Ao igualar as casas decimais, a comparação vira uma simples comparação de inteiros: 80, 75 e 70." },
      ],
      fatorada: "Bia (0,8) correu mais",
      legenda: "Aplicação — comparação de desempenho",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Bia" }, { nome: "Ana" }, { nome: "Caio" }],
      respostaCerta: "Bia",
      feedbackAcerto: "🎯 0,8 é o maior dos três.",
      feedbackErro: "Converta tudo: 3/4 = 0,75; 0,8 = 0,80; 7/10 = 0,70. O maior é 0,80, da Bia.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Mesmo denominador → compara numeradores.",
      "Denominadores diferentes → MMC ou produto cruzado.",
      "Decimais: iguale as casas antes de comparar.",
      "Mais dígitos não significa maior (0,7 > 0,68).",
      "Negativos: módulo maior → número menor.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Qual é maior?", opcoes: ["5/6", "4/5", "3/4"], correta: 0, feedbackAcerto: "🎉 5/6 ≈ 0,833; 4/5 = 0,8; 3/4 = 0,75.", feedbackErro: "Converta: 5/6 ≈ 0,833, 4/5 = 0,8 e 3/4 = 0,75. O maior é 5/6." },
      { pergunta: "0,9 e 0,85: qual é maior?", opcoes: ["0,9", "0,85", "iguais"], correta: 0, feedbackAcerto: "🎉 0,90 > 0,85.", feedbackErro: "Iguale as casas: 0,90 contra 0,85. Noventa centésimos é mais que 85 centésimos." },
      { pergunta: "Ordem crescente de −2/3, 1/4, −1/6:", opcoes: ["−2/3, −1/6, 1/4", "−1/6, −2/3, 1/4", "1/4, −1/6, −2/3"], correta: 0, feedbackAcerto: "🎉 −0,66 < −0,16 < 0,25.", feedbackErro: "Em decimal: −0,666; −0,166; 0,25. O mais à esquerda na reta vem primeiro: −2/3, −1/6, 1/4." },
      { pergunta: "7/9 comparado com 3/4:", opcoes: ["7/9 > 3/4", "7/9 < 3/4", "iguais"], correta: 0, feedbackAcerto: "🎉 7·4 = 28 e 9·3 = 27, então 7/9 é maior.", feedbackErro: "Produto cruzado: 7·4 = 28 contra 9·3 = 27. O 28 está do lado de 7/9, então 7/9 > 3/4." },
      { pergunta: "Qual está entre 1/2 e 3/4?", opcoes: ["0,6", "0,4", "0,8"], correta: 0, feedbackAcerto: "🎉 0,5 < 0,6 < 0,75.", feedbackErro: "1/2 = 0,5 e 3/4 = 0,75. Só o 0,6 fica entre esses dois valores." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Ranking das frações",
    materiais: ["Papel", "Caneta", "Régua"],
    passos: [
      "Escreva 6 racionais misturando frações, decimais e negativos.",
      "Converta todos para decimal e coloque em ordem crescente.",
      "Desenhe uma reta numérica e marque todos eles na posição correta.",
    ],
    registro: "📸 Foto da reta com os 6 números.",
  },
  recompensa: { xp: 205, moedas: 100, medalha: "Juiz dos Racionais" },
};
