import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U4 — Missão: o topógrafo. Medir o que não dá para alcançar
 * usando semelhança de triângulos, sombra e escala de mapa; converter
 * escala 1:200; conferir com proporção.
 */
export const aula05_missaoTopografo: AulaV4 = {
  slug: "u4-05-missao-topografo",
  titulo: "Missão: o Topógrafo",
  iconeTrilha: "📐",
  bncc: ["EF09MA12"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Sua missão hoje",
    historia:
      "{NOME}, você foi convocado para a Missão Topógrafo! Um topógrafo é o profissional que mede terrenos, prédios e distâncias que ninguém consegue alcançar com uma trena. Hoje você vai usar semelhança de triângulos, sombra e escala de mapa para medir o 'impossível' — sem sair do chão!",
  },

  momento02_exploracao: {
    instrucao: "Veja como um topógrafo mede a altura de uma torre usando apenas uma estaca e sua sombra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Estaca e torre, mesmo instante",
        cabecalhos: ["Objeto", "Altura", "Sombra"],
        linhas: [
          { rotulo: "1", valores: ["Estaca", "1,2 m", "2 m"] },
          { rotulo: "2", valores: ["Torre", "x", "35 m"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Estaca e torre projetam sombras no mesmo instante: os triângulos formados são semelhantes.",
      },
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "1,2/2 = x/35",
        passos: [
          { expr: "1,2/2 = x/35", explica: "Monto a proporção altura/sombra.", status: "neutro" },
          { expr: "1,2 · 35 = 2 · x", explica: "Multiplicação cruzada.", status: "neutro" },
          { expr: "42 = 2x", explica: "Calculo o produto.", status: "neutro" },
          { expr: "x = 21", explica: "Isolo x.", status: "ok" },
        ],
        fatorada: "A torre mede 21 m",
        legenda: "Missão cumprida: altura pela sombra",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um topógrafo mede uma distância no mapa com escala 1:200. Como ele descobre a distância real?",
    pista: "Na escala 1:200, cada 1 cm do mapa vale 200 cm reais. Tente multiplicar a medida do mapa por 200.",
    revelacao: "É isso! Basta multiplicar o valor medido no mapa pelo segundo número da escala (200) para achar a medida real em centímetros, depois converter para metros.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Escala 1:200 — 5 cm no mapa",
      passos: [
        { expr: "1/200 = 5/x", explica: "Monto a proporção da escala.", status: "neutro" },
        { expr: "x = 5 · 200 = 1000 cm", explica: "Multiplico o valor do mapa pela escala.", status: "neutro" },
        { expr: "1000 cm = 10 m", explica: "Converto para metros (÷100).", status: "ok" },
      ],
      fatorada: "Distância real = 10 m",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As 3 ferramentas do topógrafo",
    etapas: [
      {
        texto:
          "FERRAMENTA 1 — TRIÂNGULOS SEMELHANTES: quando dois objetos verticais projetam sombra no mesmo instante e local, formam triângulos semelhantes. A razão altura/sombra é a mesma para os dois.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um topógrafo usa uma estaca de 1,5 m que projeta sombra de 2,5 m. Um muro projeta sombra de 6 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1,5/2,5 = h/6",
            passos: [
              { expr: "1,5/2,5 = h/6", explica: "Monto a proporção altura/sombra.", status: "neutro" },
              { expr: "1,5 · 6 = 2,5 · h", explica: "Multiplicação cruzada.", status: "neutro" },
              { expr: "9 = 2,5h", explica: "Calculo o produto.", status: "neutro" },
              { expr: "h = 3,6", explica: "Isolo h.", status: "ok", professor: "O muro mede 3,6 m. Note que não precisamos de escada nem trena gigante — só a razão constante altura/sombra." },
            ],
            fatorada: "Altura do muro = 3,6 m",
          },
          destaque: "altura/sombra é constante no mesmo instante, para qualquer objeto vertical.",
        },
      },
      {
        texto:
          "FERRAMENTA 2 — ESCALA DE MAPA: a escala 1:N significa que 1 unidade no desenho vale N unidades na realidade. Para converter, multiplico a medida do mapa por N.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Escala 1:200. No mapa de um terreno, uma parede mede 4 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1/200 = 4/x",
            passos: [
              { expr: "1/200 = 4/x", explica: "Monto a proporção da escala.", status: "neutro" },
              { expr: "x = 4 · 200", explica: "Multiplicação cruzada (denominador 1 simplifica direto).", status: "neutro" },
              { expr: "x = 800 cm", explica: "Calculo em centímetros.", status: "neutro" },
              { expr: "x = 8 m", explica: "Converto para metros (÷100).", status: "ok" },
            ],
            fatorada: "Parede real = 8 m",
          },
          destaque: "Escala 1:200 significa 1 cm no mapa = 200 cm (2 m) na realidade.",
        },
      },
      {
        texto:
          "FERRAMENTA 3 — CONFERIR COM PROPORÇÃO: todo resultado de um topógrafo pode ser conferido montando a proporção inversa — se a multiplicação cruzada bater, a medida está correta.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "O topógrafo calculou que uma torre de sombra 35 m tem 21 m de altura, usando uma estaca de 1,2 m com sombra de 2 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Conferindo: 1,2/2 = 21/35 ?",
            passos: [
              { expr: "1,2 · 35 = 42", explica: "Multiplico o primeiro numerador pelo segundo denominador.", status: "neutro" },
              { expr: "2 · 21 = 42", explica: "Multiplico o segundo numerador pelo primeiro denominador.", status: "neutro" },
              { expr: "42 = 42 ✅", explica: "Os produtos são iguais: a proporção é verdadeira.", status: "ok", professor: "Sempre que os produtos cruzados forem iguais, a proporção está correta e o resultado pode ser confirmado." },
            ],
            fatorada: "Resultado confirmado: torre = 21 m",
          },
          destaque: "Multiplicação cruzada igual dos dois lados confirma a proporção.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um topógrafo usa uma estaca de 1 m que projeta sombra de 1,4 m. No mesmo instante, uma antena projeta sombra de 21 m. Qual a altura da antena?",
    resposta: "15 m",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/1,4 = h/21",
      passos: [
        { expr: "1/1,4 = h/21", explica: "Monto a proporção altura/sombra.", status: "neutro", professor: "Uso a estaca como referência porque conheço sua altura e sua sombra medidas no mesmo instante da sombra da antena." },
        { expr: "1 · 21 = 1,4 · h", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "21 = 1,4h", explica: "Calculo o produto.", status: "neutro" },
        { expr: "h = 21 ÷ 1,4 = 15", explica: "Isolo h.", status: "ok" },
      ],
      fatorada: "A antena mede 15 m",
      legenda: "Brilha resolve",
    },
    passos: [
      "Uso a estaca como referência: altura 1 m, sombra 1,4 m.",
      "Monto a proporção 1/1,4 = h/21, com h a altura da antena.",
      "Aplico a multiplicação cruzada: 1 · 21 = 1,4 · h.",
      "Resolvo: h = 21 ÷ 1,4 = 15 m.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: em um mapa com escala 1:200, a largura de um quintal mede 6 cm. Quantos metros mede na realidade?",
    dica: "Multiplique 6 cm pela escala 200 para achar centímetros reais, depois converta para metros (divida por 100).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/200 = 6/x",
      passos: [
        { expr: "x = 6 · 200", explica: "Aplico a escala.", status: "neutro" },
        { expr: "x = 1200 cm", explica: "Resultado em centímetros.", status: "neutro" },
        { expr: "1200 cm = 12 m", explica: "Converto para metros.", status: "ok" },
      ],
      fatorada: "12 m",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos metros mede o quintal na realidade?",
      opcoes: [{ nome: "12 m" }, { nome: "1,2 m" }, { nome: "120 m" }],
      respostaCerta: "12 m",
      feedbackAcerto: "🎯 6 × 200 = 1200 cm = 12 m.",
      feedbackErro: "Multiplique 6 cm pela escala 200: 1200 cm. Depois divida por 100 para virar metros: 12 m.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma estaca de 1,5 m projeta sombra de 3 m. No mesmo instante, uma árvore projeta sombra de 12 m. Qual a altura da árvore?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1,5/3 = h/12",
      passos: [
        { expr: "1,5/3 = h/12", explica: "Monto a proporção altura/sombra.", status: "neutro" },
        { expr: "1,5 · 12 = 3 · h", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "18 = 3h", explica: "Calculo o produto.", status: "neutro" },
        { expr: "h = 6", explica: "Isolo h.", status: "ok" },
      ],
      fatorada: "A árvore mede 6 m",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura da árvore?",
      opcoes: [{ nome: "6 m" }, { nome: "8 m" }, { nome: "4,5 m" }],
      respostaCerta: "6 m",
      feedbackAcerto: "🎯 1,5/3 = h/12 → 18 = 3h → h = 6 m.",
      feedbackErro: "Monte a proporção 1,5/3 = h/12. Multiplique em cruz: 1,5 × 12 = 18 = 3h, então h = 6.",
    },
  },

  momento08_aplicacao: {
    contexto: "Você é o topógrafo contratado para medir a distância entre dois postes usando o mapa oficial da rua, na escala 1:200.",
    problema: "No mapa, a distância entre os dois postes é de 9 cm. Qual é a distância real, em metros?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/200 = 9/x",
      passos: [
        { expr: "1/200 = 9/x", explica: "Monto a proporção da escala.", status: "neutro", professor: "A escala 1:200 vale para qualquer medida do mapa — sempre multiplico por 200 para achar o valor real em centímetros." },
        { expr: "x = 9 · 200 = 1800 cm", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "1800 cm = 18 m", explica: "Converto para metros (÷100).", status: "ok" },
        { expr: "Conferindo: 1 · 1800 = 200 · 9 → 1800 = 1800 ✅", explica: "A multiplicação cruzada confirma o resultado.", status: "ok" },
      ],
      fatorada: "Distância real = 18 m",
      legenda: "Aplicação — missão do topógrafo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a distância real entre os dois postes?",
      opcoes: [{ nome: "18 m" }, { nome: "1,8 m" }, { nome: "180 m" }],
      respostaCerta: "18 m",
      feedbackAcerto: "🎯 9 × 200 = 1800 cm = 18 m. Conferindo: 1 × 1800 = 200 × 9 = 1800.",
      feedbackErro: "Multiplique 9 cm pela escala 200: 1800 cm. Depois divida por 100 para converter em metros: 18 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Objeto e sombra, no mesmo instante e local, formam triângulos semelhantes: altura/sombra é constante.",
      "Escala 1:N significa que 1 unidade no mapa vale N unidades na realidade.",
      "Para converter a medida do mapa em medida real, multiplico pelo segundo número da escala.",
      "Sempre confira o resultado: se a multiplicação cruzada bater dos dois lados, a proporção está correta.",
      "O topógrafo mede o 'impossível' combinando proporção, sombra e escala — sem precisar tocar no objeto.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma estaca de 1 m projeta sombra de 2 m. Um poste projeta sombra de 14 m no mesmo instante. Qual a altura do poste?",
        opcoes: ["7 m", "28 m", "12 m"],
        correta: 0,
        feedbackAcerto: "🎉 1/2 = h/14 → 2h = 14 → h = 7 m.",
        feedbackErro: "Monte 1/2 = h/14, multiplique em cruz: 2h = 14, então h = 7.",
      },
      {
        pergunta: "Numa escala 1:200, uma sala de 5 cm no mapa mede na realidade:",
        opcoes: ["10 m", "1000 m", "1 m"],
        correta: 0,
        feedbackAcerto: "🎉 5 × 200 = 1000 cm = 10 m.",
        feedbackErro: "Multiplique 5 cm por 200: 1000 cm, que é igual a 10 metros.",
      },
      {
        pergunta: "Para usar o método da sombra, o mais importante é:",
        opcoes: [
          "medir os dois objetos no MESMO instante e local",
          "usar sempre uma estaca de 1 metro",
          "medir só de manhã cedo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 No mesmo instante e local, o ângulo do Sol é igual, garantindo triângulos semelhantes.",
        feedbackErro: "O que garante a semelhança é medir tudo no MESMO instante e local — assim o ângulo do Sol é igual para os dois objetos.",
      },
      {
        pergunta: "No mapa em escala 1:200, a distância entre duas ruas é 12 cm. Qual é a distância real?",
        opcoes: ["24 m", "2,4 m", "240 m"],
        correta: 0,
        feedbackAcerto: "🎉 12 × 200 = 2400 cm = 24 m.",
        feedbackErro: "Multiplique 12 cm por 200: 2400 cm. Depois divida por 100: 24 m.",
      },
      {
        pergunta: "Um topógrafo calcula que uma proporção é 1,2/2 = 21/35. Como ele confere se está correta?",
        opcoes: [
          "verificando se 1,2 × 35 é igual a 2 × 21",
          "somando todos os números da proporção",
          "verificando se os números são pares",
        ],
        correta: 0,
        feedbackAcerto: "🎉 1,2 × 35 = 42 e 2 × 21 = 42. Como os produtos são iguais, a proporção está correta!",
        feedbackErro: "Para conferir uma proporção, calcule os produtos cruzados: 1,2 × 35 e 2 × 21. Se forem iguais, a proporção é verdadeira.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Missão: topógrafo em casa",
    materiais: ["Fita métrica ou trena", "Papel", "Caneta", "Um dia de sol"],
    passos: [
      "Meça a altura de uma estaca, cabo de vassoura ou objeto pequeno e sua sombra, no mesmo instante.",
      "Meça a sombra de algo alto (poste, árvore, casa) no mesmo instante.",
      "Use a proporção altura/sombra para calcular a altura do objeto grande e confira multiplicando em cruz.",
    ],
    registro: "📸 Foto da medição com a conta feita no papel, mostrando a conferência da proporção.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Topógrafo Oficial" },
};
