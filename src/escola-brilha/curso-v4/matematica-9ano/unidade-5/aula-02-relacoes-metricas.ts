import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U5 — Relações métricas no triângulo retângulo.
 */
export const aula02_relacoesMetricas: AulaV4 = {
  slug: "u5-02-relacoes-metricas",
  titulo: "A Altura que Divide o Triângulo",
  iconeTrilha: "📏",
  bncc: ["EF09MA13"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Uma linha que esconde muitos segredos",
    historia:
      "{NOME}, se você traçar a altura de um triângulo retângulo a partir do ângulo reto até a hipotenusa, ela divide o triângulo em DOIS triângulos menores — e todos eles são parecidos entre si! Essa semelhança esconde fórmulas poderosas. Vamos descobrir?",
  },

  momento02_exploracao: {
    instrucao: "Observe o triângulo retângulo ABC com a altura h traçada da hipotenusa.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        mostrarAngulos: true,
        medidasLados: ["a (hipotenusa)", "b (cateto)", "c (cateto)"],
        legenda: "Triângulo ABC — ângulo reto em A",
      },
      {
        tipo: "texto",
        texto: "🔑 A altura h (relativa à hipotenusa) divide a hipotenusa 'a' em duas partes: m (projeção do cateto c) e n (projeção do cateto b). Assim, a = m + n.",
      },
      {
        tipo: "tabela",
        titulo: "Nomes das relações métricas",
        cabecalhos: ["Símbolo", "Significado"],
        linhas: [
          { rotulo: "1", valores: ["a", "hipotenusa"] },
          { rotulo: "2", valores: ["b, c", "catetos"] },
          { rotulo: "3", valores: ["h", "altura relativa à hipotenusa"] },
          { rotulo: "4", valores: ["m, n", "projeções dos catetos c e b sobre a hipotenusa"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Num triângulo retângulo de catetos 3 e 4 e hipotenusa 5, será que a·h = b·c?",
    pista: "A área do triângulo pode ser calculada de duas formas: usando os dois catetos, ou usando a hipotenusa e a altura relativa a ela. As duas devem dar o mesmo valor!",
    revelacao: "Área = (3 · 4)/2 = 6. Também Área = (5 · h)/2. Igualando: 5 · h = 3 · 4 = 12, logo h = 2,4. A relação a·h = b·c sempre vale!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área do triângulo 3-4-5 de dois jeitos",
      passos: [
        { expr: "Área = (b · c)/2 = (3 · 4)/2 = 6", explica: "Usando os catetos como base e altura.", status: "neutro" },
        { expr: "Área = (a · h)/2 = (5 · h)/2", explica: "Usando a hipotenusa como base.", status: "ok" },
        { expr: "6 = (5 · h)/2", explica: "As duas áreas são iguais.", status: "ok" },
        { expr: "5 · h = 12 → h = 2,4", explica: "Isolo h.", status: "ok", professor: "Isso prova a relação a · h = b · c: a área do triângulo não muda, então (b·c)/2 = (a·h)/2, e simplificando, b·c = a·h." },
      ],
      fatorada: "a · h = b · c",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As relações métricas",
    etapas: [
      {
        texto:
          "Relação 1 — Área dupla: a · h = b · c. O produto da hipotenusa pela altura é igual ao produto dos dois catetos (as duas formas de calcular a mesma área, multiplicadas por 2).",
        exemploReal: {
          titulo: "🔎 Achando a altura",
          contexto: "Triângulo com catetos 6 cm e 8 cm e hipotenusa 10 cm. Qual é a altura relativa à hipotenusa?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "10 · h = 6 · 8",
            passos: [
              { expr: "6 · 8 = 48", explica: "Produto dos catetos.", status: "neutro" },
              { expr: "10 · h = 48", explica: "Igualo à hipotenusa vezes h.", status: "ok" },
              { expr: "h = 48 ÷ 10 = 4,8", explica: "Isolo h dividindo por 10.", status: "ok", professor: "A altura relativa à hipotenusa é sempre menor que os dois catetos, porque ela é a menor distância entre o vértice do ângulo reto e a hipotenusa." },
            ],
            fatorada: "h = 4,8 cm",
          },
          destaque: "a · h = b · c serve para achar h sem trigonometria.",
        },
      },
      {
        texto:
          "Relação 2 — Cateto e sua projeção: b² = a · n e c² = a · m. Cada cateto ao quadrado é igual ao produto da hipotenusa pela projeção DELE MESMO sobre a hipotenusa.",
        exemploReal: {
          titulo: "🔎 Achando uma projeção",
          contexto: "No mesmo triângulo (a = 10, b = 6, c = 8), qual é a projeção n do cateto b = 6?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "b² = a · n",
            passos: [
              { expr: "6² = 36", explica: "Quadrado do cateto b.", status: "neutro" },
              { expr: "36 = 10 · n", explica: "Igualo à hipotenusa vezes a projeção.", status: "ok" },
              { expr: "n = 36 ÷ 10 = 3,6", explica: "Isolo n.", status: "ok", professor: "Cuidado com qual projeção pertence a qual cateto: b² = a·n usa a projeção n QUE FICA embaixo do próprio cateto b, mais perto do vértice adjacente a ele." },
            ],
            fatorada: "n = 3,6 cm",
          },
          destaque: "Confira: m + n deve dar a = 10 (m = 6,4 e n = 3,6 → soma 10 ✓).",
        },
      },
      {
        texto:
          "Relação 3 — Altura e projeções: h² = m · n. A altura ao quadrado é igual ao produto das duas projeções. É a relação mais usada para achar h quando já se conhecem m e n.",
        exemploReal: {
          titulo: "🔎 Achando a altura por m e n",
          contexto: "Com m = 6,4 e n = 3,6, confirme que h² = m · n dá o mesmo h = 4,8 encontrado antes.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "h² = 6,4 · 3,6",
            passos: [
              { expr: "6,4 · 3,6 = 23,04", explica: "Produto das projeções.", status: "neutro" },
              { expr: "h² = 23,04", explica: "Igualo ao quadrado da altura.", status: "ok" },
              { expr: "h = √23,04 = 4,8", explica: "Extraio a raiz quadrada.", status: "ok", professor: "√23,04 = 4,8 porque 4,8 · 4,8 = 23,04. Bateu certinho com o valor achado pela relação a·h = b·c — as três relações métricas são coerentes entre si." },
            ],
            fatorada: "h = 4,8 cm",
          },
          destaque: "As três relações métricas sempre concordam entre si.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: num triângulo retângulo, os catetos são 9 cm e 12 cm (hipotenusa 15 cm, pelo terno 3-4-5 x3). Qual é a altura relativa à hipotenusa?",
    resposta: "h = 7,2 cm",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["a = 15 cm", "b = 9 cm", "c = 12 cm"],
      legenda: "Brilha resolve",
    },
    passos: [
      "Uso a relação a · h = b · c.",
      "b · c = 9 · 12 = 108.",
      "15 · h = 108, logo h = 108 ÷ 15.",
      "h = 7,2 cm.",
    ],
    contaPassoAPasso: {
      operacao: "mult",
      operandos: [9, 12],
      resultado: 108,
      passos: [
        { fala: "Multiplico os dois catetos: 9 · 12 = 108.", digito: 108 },
        { fala: "Divido pela hipotenusa: 108 ÷ 15 = 7,2. Essa é a altura.", digito: 7 },
      ],
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: num triângulo retângulo com hipotenusa 20 cm e cateto b = 12 cm, qual é a projeção n desse cateto sobre a hipotenusa?",
    dica: "Use b² = a · n. Calcule 12² primeiro, depois divida pela hipotenusa.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12² = 20 · n",
      passos: [
        { expr: "12² = 144", explica: "Quadrado do cateto.", status: "neutro" },
        { expr: "144 = 20 · n", explica: "Igualo à hipotenusa vezes n.", status: "ok" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a projeção n?",
      opcoes: [{ nome: "7,2 cm" }, { nome: "8 cm" }, { nome: "144 cm" }],
      respostaCerta: "7,2 cm",
      feedbackAcerto: "🎯 n = 144 ÷ 20 = 7,2 cm.",
      feedbackErro: "Depois de achar 12² = 144, divida pela hipotenusa: 144 ÷ 20 = 7,2 cm. Não pare em 144 — esse é apenas o quadrado do cateto.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: num triângulo retângulo, as projeções sobre a hipotenusa são m = 4 cm e n = 9 cm. Qual é a altura relativa à hipotenusa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "h² = 4 · 9",
      passos: [
        { expr: "4 · 9 = 36", explica: "Produto das projeções.", status: "neutro" },
        { expr: "h² = 36", explica: "Igualo ao quadrado da altura.", status: "ok" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura h?",
      opcoes: [{ nome: "6 cm" }, { nome: "13 cm" }, { nome: "36 cm" }],
      respostaCerta: "6 cm",
      feedbackAcerto: "🎯 h² = 4 · 9 = 36, e √36 = 6 cm.",
      feedbackErro: "h² = m · n = 4 · 9 = 36. Falta extrair a raiz: √36 = 6 cm.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um telhado tem formato de triângulo retângulo. A viga inclinada (hipotenusa) mede 25 m, e um dos apoios (cateto) mede 15 m.",
    problema: "Qual é a projeção desse apoio de 15 m sobre a viga da base?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["25 m (viga/hipotenusa)", "15 m (apoio/cateto)", "20 m (outro cateto)"],
      legenda: "Estrutura do telhado",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a projeção do apoio de 15 m?",
      opcoes: [{ nome: "9 m" }, { nome: "16 m" }, { nome: "225 m" }],
      respostaCerta: "9 m",
      feedbackAcerto: "🎯 15² = 225. 225 = 25 · n, então n = 225 ÷ 25 = 9 m.",
      feedbackErro: "Use b² = a · n: 15² = 225. Depois 225 ÷ 25 = 9 m. Esse é o valor da projeção, não o quadrado.",
    },
  },

  momento09_revisao: {
    pontos: [
      "A altura relativa à hipotenusa divide o triângulo em dois triângulos menores e semelhantes.",
      "a · h = b · c (produto da hipotenusa pela altura = produto dos catetos).",
      "b² = a · n e c² = a · m (cada cateto ao quadrado é hipotenusa vezes sua projeção).",
      "h² = m · n (altura ao quadrado é o produto das duas projeções).",
      "Sempre m + n = a.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A relação a · h = b · c representa:",
        opcoes: ["duas formas de calcular a mesma área do triângulo", "o Teorema de Pitágoras", "a soma dos catetos"],
        correta: 0,
        feedbackAcerto: "🎉 A área calculada com os catetos é igual à área calculada com a hipotenusa e sua altura.",
        feedbackErro: "a · h = b · c vem de igualar as duas formas de calcular a área do triângulo: (b·c)/2 = (a·h)/2.",
      },
      {
        pergunta: "Catetos 6 cm e 8 cm, hipotenusa 10 cm. A altura relativa à hipotenusa é:",
        opcoes: ["4,8 cm", "7 cm", "48 cm"],
        correta: 0,
        feedbackAcerto: "🎉 6 · 8 = 48; 48 ÷ 10 = 4,8 cm.",
        feedbackErro: "Faça 6 · 8 = 48 (produto dos catetos). Depois divida pela hipotenusa: 48 ÷ 10 = 4,8 cm.",
      },
      {
        pergunta: "Se m = 2 cm e n = 8 cm, a altura relativa à hipotenusa vale:",
        opcoes: ["4 cm", "10 cm", "16 cm"],
        correta: 0,
        feedbackAcerto: "🎉 h² = 2 · 8 = 16, e √16 = 4 cm.",
        feedbackErro: "h² = m · n = 2 · 8 = 16. A raiz de 16 é 4 cm — não confunda o quadrado com a altura.",
      },
      {
        pergunta: "Num triângulo retângulo, hipotenusa 25 cm e um cateto 20 cm. A projeção desse cateto é:",
        opcoes: ["16 cm", "5 cm", "400 cm"],
        correta: 0,
        feedbackAcerto: "🎉 20² = 400; 400 ÷ 25 = 16 cm.",
        feedbackErro: "Use cateto² = hipotenusa · projeção: 20² = 400. Depois 400 ÷ 25 = 16 cm.",
      },
      {
        pergunta: "Se m = 4 cm e a = 13 cm, então n vale:",
        opcoes: ["9 cm", "17 cm", "52 cm"],
        correta: 0,
        feedbackAcerto: "🎉 Como m + n = a, então n = 13 − 4 = 9 cm.",
        feedbackErro: "As duas projeções somadas dão a hipotenusa inteira: m + n = a. Logo n = 13 − 4 = 9 cm.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Desenhando as relações métricas",
    materiais: ["Papel quadriculado", "Régua", "Lápis colorido"],
    passos: [
      "Desenhe um triângulo retângulo de catetos 6 cm e 8 cm usando a régua.",
      "Trace a altura relativa à hipotenusa e meça as duas projeções m e n.",
      "Confira: m + n deve dar 10 cm (a hipotenusa), e calcule h² = m · n para conferir a altura.",
    ],
    registro: "📸 Foto do triângulo desenhado com as medidas anotadas.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre das Relações Métricas" },
};
