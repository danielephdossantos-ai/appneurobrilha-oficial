import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U5 — Teorema de Pitágoras: a² = b² + c².
 */
export const aula01_teoremaPitagoras: AulaV4 = {
  slug: "u5-01-teorema-pitagoras",
  titulo: "O Segredo do Triângulo Retângulo",
  iconeTrilha: "📐",
  bncc: ["EF09MA13"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Um triângulo com um segredo escondido",
    historia:
      "{NOME}, há mais de 2000 anos um matemático grego chamado Pitágoras descobriu que TODO triângulo com um ângulo reto (90°) esconde uma relação mágica entre seus três lados. Hoje você vai descobrir esse segredo e usar ele para medir coisas sem nem precisar de régua!",
  },

  momento02_exploracao: {
    instrucao: "Observe o triângulo retângulo: ele tem um ângulo reto e três lados com nomes especiais.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        mostrarAngulos: true,
        medidasLados: ["hipotenusa (a)", "cateto (b)", "cateto (c)"],
        legenda: "Triângulo retângulo — o ângulo reto fica entre os catetos",
      },
      {
        tipo: "texto",
        texto: "🔑 A HIPOTENUSA é o lado maior, sempre oposto ao ângulo reto. Os CATETOS são os dois lados que formam o ângulo reto.",
      },
      {
        tipo: "tabela",
        titulo: "Terno 3-4-5 — o triângulo mais famoso",
        cabecalhos: ["Lado", "Medida", "Papel"],
        linhas: [
          { rotulo: "1", valores: ["3 cm", "cateto"] },
          { rotulo: "2", valores: ["4 cm", "cateto"] },
          { rotulo: "3", valores: ["5 cm", "hipotenusa"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "No triângulo 3-4-5, o que acontece se você elevar cada lado ao quadrado?",
    pista: "Calcule 3², 4² e 5², depois some os dois catetos ao quadrado e compare com a hipotenusa ao quadrado.",
    revelacao: "3² + 4² = 9 + 16 = 25, e 5² = 25! A soma dos quadrados dos catetos é EXATAMENTE igual ao quadrado da hipotenusa.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3² + 4² comparado a 5²",
      passos: [
        { expr: "3² = 3 · 3 = 9", explica: "Quadrado do primeiro cateto.", status: "neutro" },
        { expr: "4² = 4 · 4 = 16", explica: "Quadrado do segundo cateto.", status: "ok" },
        { expr: "9 + 16 = 25", explica: "Soma dos quadrados dos catetos.", status: "ok" },
        { expr: "5² = 5 · 5 = 25", explica: "Quadrado da hipotenusa.", status: "ok", professor: "Repare: 25 = 25. Isso não é coincidência — acontece em QUALQUER triângulo retângulo, não só no 3-4-5." },
        { expr: "3² + 4² = 5²", explica: "A relação de Pitágoras aparece!", status: "ok" },
      ],
      fatorada: "3² + 4² = 5²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "O Teorema de Pitágoras",
    etapas: [
      {
        texto:
          "Em TODO triângulo retângulo, o quadrado da hipotenusa (a) é igual à soma dos quadrados dos catetos (b e c). Escrevemos: a² = b² + c². A hipotenusa é sempre a letra 'a', e é sempre o maior lado.",
        exemploReal: {
          titulo: "🔎 Achando a hipotenusa",
          contexto: "Um triângulo tem catetos 6 cm e 8 cm. Qual é a hipotenusa?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "a² = 6² + 8²",
            passos: [
              { expr: "6² = 36", explica: "Quadrado do primeiro cateto.", status: "neutro" },
              { expr: "8² = 64", explica: "Quadrado do segundo cateto.", status: "ok" },
              { expr: "a² = 36 + 64 = 100", explica: "Somo os dois quadrados.", status: "ok" },
              { expr: "a = √100 = 10", explica: "Extraio a raiz quadrada.", status: "ok", professor: "Para achar 'a' eu tenho que desfazer o quadrado com a raiz quadrada. √100 = 10 porque 10 · 10 = 100." },
            ],
            fatorada: "a = 10 cm",
          },
          destaque: "Terno 6-8-10 — é o terno 3-4-5 multiplicado por 2!",
        },
      },
      {
        texto:
          "Também podemos usar a fórmula ao contrário: se já sabemos a hipotenusa e um cateto, achamos o OUTRO cateto isolando ele: b² = a² − c².",
        exemploReal: {
          titulo: "🔎 Achando um cateto",
          contexto: "Um triângulo tem hipotenusa 13 cm e um cateto 5 cm. Qual é o outro cateto?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "b² = 13² − 5²",
            passos: [
              { expr: "13² = 169", explica: "Quadrado da hipotenusa.", status: "neutro" },
              { expr: "5² = 25", explica: "Quadrado do cateto conhecido.", status: "ok" },
              { expr: "b² = 169 − 25 = 144", explica: "Subtraio, não somo!", status: "ok", professor: "Cuidado: quando falta um cateto, a operação vira SUBTRAÇÃO, porque a hipotenusa já 'contém' os dois catetos ao quadrado. b² = a² − c², nunca a² + c²." },
              { expr: "b = √144 = 12", explica: "Extraio a raiz quadrada.", status: "ok" },
            ],
            fatorada: "b = 12 cm",
          },
          destaque: "Terno 5-12-13 — um clássico da trigonometria!",
        },
      },
      {
        texto:
          "Existem 'ternos pitagóricos' famosos que aparecem sempre: 3-4-5, 5-12-13, 6-8-10, 8-15-17. Vale a pena reconhecer eles de olho, mas a fórmula funciona para QUALQUER triângulo retângulo, com qualquer medida.",
        exemploReal: {
          titulo: "🔎 Conferindo o terno 8-15-17",
          contexto: "Será que 8, 15 e 17 formam um triângulo retângulo?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "8² + 15² comparado a 17²",
            passos: [
              { expr: "8² = 64", explica: "Quadrado do primeiro cateto.", status: "neutro" },
              { expr: "15² = 225", explica: "Quadrado do segundo cateto.", status: "ok" },
              { expr: "64 + 225 = 289", explica: "Soma dos quadrados dos catetos.", status: "ok" },
              { expr: "17² = 289", explica: "Quadrado da suposta hipotenusa.", status: "ok" },
              { expr: "289 = 289 ✓", explica: "É um terno pitagórico!", status: "ok", professor: "Como 8² + 15² = 17², concluímos que um triângulo de lados 8, 15 e 17 tem, sim, um ângulo reto — o oposto ao lado 17." },
            ],
            fatorada: "8² + 15² = 17²",
          },
          destaque: "8-15-17 é um terno pitagórico verdadeiro.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um triângulo retângulo tem catetos 9 cm e 12 cm. Qual é a hipotenusa?",
    resposta: "a = 15 cm",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["a = ?", "9 cm", "12 cm"],
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico os catetos: 9 cm e 12 cm. A hipotenusa é o que eu quero achar.",
      "Aplico a² = b² + c²: a² = 9² + 12².",
      "9² = 81 e 12² = 144. Somo: 81 + 144 = 225.",
      "Extraio a raiz: a = √225 = 15 cm.",
    ],
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [81, 144],
      resultado: 225,
      passos: [
        { fala: "9² = 81 e 12² = 144. Somo os dois quadrados: 81 + 144 = 225.", digito: 225 },
        { fala: "Agora extraio a raiz quadrada de 225: √225 = 15, porque 15 · 15 = 225.", digito: 15 },
      ],
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: um triângulo retângulo tem catetos 6 cm e 8 cm. Qual é a hipotenusa?",
    dica: "Some os quadrados dos catetos e depois tire a raiz quadrada do resultado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "a² = 6² + 8²",
      passos: [
        { expr: "6² = 36", explica: "Quadrado do primeiro cateto.", status: "neutro" },
        { expr: "8² = 64", explica: "Quadrado do segundo cateto.", status: "ok" },
        { expr: "36 + 64 = 100", explica: "Somo os dois quadrados.", status: "ok" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a hipotenusa?",
      opcoes: [{ nome: "10 cm" }, { nome: "14 cm" }, { nome: "100 cm" }],
      respostaCerta: "10 cm",
      feedbackAcerto: "🎯 √100 = 10 cm — esse é o terno 6-8-10 (o 3-4-5 dobrado)!",
      feedbackErro: "Depois de somar 36 + 64 = 100, falta extrair a raiz quadrada: √100 = 10. Não pare na soma!",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um triângulo retângulo tem hipotenusa 17 cm e um cateto 8 cm. Qual é o outro cateto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "b² = 17² − 8²",
      passos: [
        { expr: "17² = 289", explica: "Quadrado da hipotenusa.", status: "neutro" },
        { expr: "8² = 64", explica: "Quadrado do cateto conhecido.", status: "ok" },
        { expr: "289 − 64 = 225", explica: "Subtraio (não somo!).", status: "ok" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o outro cateto?",
      opcoes: [{ nome: "15 cm" }, { nome: "9 cm" }, { nome: "225 cm" }],
      respostaCerta: "15 cm",
      feedbackAcerto: "🎯 √225 = 15 cm — esse é o terno 8-15-17!",
      feedbackErro: "Quando falta um cateto, a conta é SUBTRAÇÃO: b² = 289 − 64 = 225. Depois √225 = 15.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um pedreiro apoia uma escada de 10 m contra uma parede. A base da escada fica a 6 m da parede.",
    problema: "A que altura da parede a escada alcança?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["escada = 10 m (hipotenusa)", "altura = ? (cateto)", "base = 6 m (cateto)"],
      legenda: "Escada apoiada na parede",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura alcançada?",
      opcoes: [{ nome: "8 m" }, { nome: "4 m" }, { nome: "16 m" }],
      respostaCerta: "8 m",
      feedbackAcerto: "🎯 10² − 6² = 100 − 36 = 64, e √64 = 8 m. Esse é o terno 6-8-10!",
      feedbackErro: "A escada é a hipotenusa (10 m) e a base é um cateto (6 m). altura² = 10² − 6² = 100 − 36 = 64. √64 = 8 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Triângulo retângulo: hipotenusa é o lado maior, oposto ao ângulo reto.",
      "Teorema de Pitágoras: a² = b² + c² (a = hipotenusa; b, c = catetos).",
      "Para achar a hipotenusa: SOME os quadrados dos catetos e extraia a raiz.",
      "Para achar um cateto: SUBTRAIA o quadrado do cateto conhecido do quadrado da hipotenusa.",
      "Ternos famosos: 3-4-5, 5-12-13, 6-8-10, 8-15-17.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Num triângulo retângulo, a hipotenusa é:",
        opcoes: ["o lado oposto ao ângulo reto, sempre o maior", "qualquer um dos lados", "sempre o menor lado"],
        correta: 0,
        feedbackAcerto: "🎉 A hipotenusa é sempre o lado maior, oposto ao ângulo de 90°.",
        feedbackErro: "A hipotenusa é o lado maior do triângulo retângulo, e fica sempre oposto ao ângulo reto.",
      },
      {
        pergunta: "Catetos 3 cm e 4 cm. A hipotenusa é:",
        opcoes: ["5 cm", "7 cm", "25 cm"],
        correta: 0,
        feedbackAcerto: "🎉 3² + 4² = 9 + 16 = 25, e √25 = 5 cm.",
        feedbackErro: "Some 3² + 4² = 9 + 16 = 25. Depois extraia a raiz: √25 = 5 cm. Não pare em 25, esse é o quadrado da hipotenusa, não ela mesma.",
      },
      {
        pergunta: "Hipotenusa 13 cm, cateto 12 cm. O outro cateto é:",
        opcoes: ["5 cm", "1 cm", "25 cm"],
        correta: 0,
        feedbackAcerto: "🎉 13² − 12² = 169 − 144 = 25, e √25 = 5 cm.",
        feedbackErro: "Faça 13² − 12² = 169 − 144 = 25. A raiz de 25 é 5 cm. Lembre: para cateto, é SUBTRAÇÃO.",
      },
      {
        pergunta: "Os números 5, 12 e 13 formam um triângulo retângulo?",
        opcoes: ["Sim, porque 5² + 12² = 13²", "Não, porque 5 + 12 ≠ 13", "Não, pois nenhum é maior"],
        correta: 0,
        feedbackAcerto: "🎉 5² + 12² = 25 + 144 = 169, e 13² = 169. É um terno pitagórico!",
        feedbackErro: "Confira ao quadrado, não direto: 5² + 12² = 25 + 144 = 169 = 13². Como os quadrados batem, é sim um triângulo retângulo.",
      },
      {
        pergunta: "Uma escada de 6 m encosta numa parede a 3,6 m de altura. A base está a 4,8 m da parede. Isso confere com Pitágoras?",
        opcoes: ["Sim, pois 3,6² + 4,8² = 6²", "Não, pois 3,6 + 4,8 ≠ 6", "Não, precisa medir com régua"],
        correta: 0,
        feedbackAcerto: "🎉 3,6² + 4,8² = 12,96 + 23,04 = 36 = 6². Confere perfeitamente!",
        feedbackErro: "Some os quadrados dos catetos: 3,6² + 4,8² = 12,96 + 23,04 = 36. E 6² = 36. Os dois lados batem — é um triângulo retângulo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçando triângulos retângulos em casa",
    materiais: ["Trena ou fita métrica", "Papel", "Caneta"],
    passos: [
      "Encontre um canto reto em casa (quina de mesa, porta, parede).",
      "Meça dois lados que formam esse ângulo reto (os catetos).",
      "Use a² = b² + c² para calcular a distância diagonal (hipotenusa) e depois confira medindo de verdade.",
    ],
    registro: "📸 Foto da medição com os três valores anotados.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Discípulo de Pitágoras" },
};
