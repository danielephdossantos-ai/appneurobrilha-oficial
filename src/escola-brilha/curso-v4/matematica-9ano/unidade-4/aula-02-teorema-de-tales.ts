import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U4 — Teorema de Tales: feixe de retas paralelas cortado por
 * transversais. Montar e resolver a proporção.
 */
export const aula02_teoremaDeTales: AulaV4 = {
  slug: "u4-02-teorema-de-tales",
  titulo: "O Feixe de Paralelas de Tales",
  iconeTrilha: "📐",
  bncc: ["EF09MA08"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "As ruas paralelas da cidade",
    historia:
      "{NOME}, imagine três ruas paralelas cortadas por duas avenidas. Mesmo que as avenidas não sejam retas iguais, os pedaços cortados nelas guardam uma proporção perfeita! Isso é o Teorema de Tales — descoberto há mais de 2500 anos e usado até hoje em mapas, construção e engenharia.",
  },

  momento02_exploracao: {
    instrucao: "Observe: três retas paralelas cortadas por duas transversais criam segmentos proporcionais.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Feixe de paralelas r ∥ s ∥ t cortado por duas transversais",
        cabecalhos: ["Transversal 1", "Transversal 2"],
        linhas: [
          { rotulo: "Segmento entre r e s", valores: ["AB = 3 cm", "A'B' = 6 cm"] },
          { rotulo: "Segmento entre s e t", valores: ["BC = 5 cm", "B'C' = 10 cm"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Repare: AB/BC = 3/5 = 0,6 e A'B'/B'C' = 6/10 = 0,6. As razões são IGUAIS — os segmentos correspondentes são proporcionais.",
      },
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "AB/BC = A'B'/B'C'",
        passos: [
          { expr: "3/5 = 0,6", explica: "Razão na primeira transversal.", status: "neutro" },
          { expr: "6/10 = 0,6", explica: "Razão na segunda transversal.", status: "neutro" },
          { expr: "0,6 = 0,6 ✓", explica: "As razões coincidem.", status: "ok" },
        ],
        fatorada: "Segmentos proporcionais",
        legenda: "Comprovando Tales",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se eu mudar o ângulo das transversais, a proporção entre os segmentos das paralelas muda?",
    pista: "O que garante a proporção são as retas PARALELAS, não o ângulo da transversal.",
    revelacao: "Não muda! Por mais que a transversal incline, enquanto as retas cortadas forem paralelas, a razão entre os segmentos correspondentes se mantém.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Teorema de Tales — ideia central",
      passos: [
        { expr: "r ∥ s ∥ t", explica: "Três retas paralelas.", status: "neutro" },
        { expr: "Duas transversais cortam essas paralelas", explica: "Podem ter qualquer ângulo.", status: "neutro" },
        { expr: "segmentos numa transversal / segmentos na outra = constante", explica: "A razão se repete.", status: "ok", professor: "O que faz a mágica é o paralelismo das retas r, s, t. As transversais podem até se cruzar em ângulos bem diferentes; o que importa é que elas cortam as MESMAS retas paralelas, gerando segmentos proporcionais." },
      ],
      fatorada: "AB/BC = A'B'/B'C'",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Teorema de Tales, passo a passo",
    etapas: [
      {
        texto:
          "O TEOREMA DE TALES diz: se um feixe de retas paralelas é cortado por duas transversais, os segmentos determinados numa transversal são PROPORCIONAIS aos segmentos correspondentes na outra transversal.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Paralelas cortadas: AB = 4 cm, BC = 6 cm, A'B' = 10 cm, B'C' = x.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "AB/BC = A'B'/B'C'",
            passos: [
              { expr: "4/6 = 10/x", explica: "Monto a proporção com os segmentos correspondentes.", status: "neutro" },
              { expr: "4 · x = 6 · 10", explica: "Multiplicação cruzada.", status: "neutro" },
              { expr: "4x = 60", explica: "Calculo o produto.", status: "neutro" },
              { expr: "x = 60 ÷ 4 = 15", explica: "Isolo x.", status: "ok" },
            ],
            fatorada: "B'C' = 15 cm",
          },
          destaque: "O segredo é sempre casar segmento com segmento CORRESPONDENTE.",
        },
      },
      {
        texto:
          "Para não errar a correspondência, é útil escrever a proporção 'de cima para baixo': segmento de cima da 1ª transversal sobre segmento de baixo da 1ª transversal = segmento de cima da 2ª sobre segmento de baixo da 2ª.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "PQ = 8 cm, QR = 12 cm na 1ª transversal; P'Q' = 6 cm, Q'R' = y na 2ª.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "PQ/QR = P'Q'/Q'R'",
            passos: [
              { expr: "8/12 = 6/y", explica: "Monto respeitando a ordem: de cima para baixo nos dois lados.", status: "neutro", professor: "Erro clássico: trocar a ordem e escrever 8/12 = y/6. Sempre mantenha o mesmo tipo de segmento (de cima) no numerador dos dois lados." },
              { expr: "8 · y = 12 · 6", explica: "Multiplicação cruzada.", status: "neutro" },
              { expr: "8y = 72", explica: "Calculo o produto.", status: "neutro" },
              { expr: "y = 72 ÷ 8 = 9", explica: "Isolo y.", status: "ok" },
            ],
            fatorada: "Q'R' = 9 cm",
          },
          destaque: "Mantenha sempre a mesma ordem de correspondência nos dois lados da proporção.",
        },
      },
      {
        texto:
          "Também é possível montar a proporção usando o segmento TODO (soma das partes) em vez de partes separadas — o resultado é o mesmo, só muda a forma de escrever.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "AC = AB + BC = 4 + 6 = 10 cm na 1ª transversal; A'C' = A'B' + B'C' = 10 + 15 = 25 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "AB/AC = A'B'/A'C'",
            passos: [
              { expr: "AB/AC = 4/10 = 0,4", explica: "Razão parte pelo todo, 1ª transversal.", status: "neutro" },
              { expr: "A'B'/A'C' = 10/25 = 0,4", explica: "Razão parte pelo todo, 2ª transversal.", status: "ok" },
              { expr: "0,4 = 0,4 ✓", explica: "Confirma a proporcionalidade.", status: "ok", professor: "Isso mostra que Tales também vale comparando cada parte com o segmento inteiro, não só parte com parte. É uma verificação útil para conferir se os valores encontrados estão certos." },
            ],
            fatorada: "Proporção confirmada",
          },
          destaque: "Parte/todo também é proporcional — ótimo para conferir a resposta.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: três terrenos entre ruas paralelas medem, numa rua, 5 m e 8 m; na rua paralela, o primeiro terreno mede 10 m. Quanto mede o segundo?",
    resposta: "16 m",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5/8 = 10/x",
      passos: [
        { expr: "5/8 = 10/x", explica: "Monto a proporção com os segmentos correspondentes.", status: "neutro", professor: "5 e 8 são as frentes na primeira rua; 10 e x são as frentes correspondentes na rua paralela. Preciso manter a mesma ordem nos dois lados." },
        { expr: "5 · x = 8 · 10", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "5x = 80", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 80 ÷ 5 = 16", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "x = 16 m",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico os segmentos correspondentes nas duas ruas paralelas.",
      "Monto a proporção 5/8 = 10/x, mantendo a ordem dos terrenos.",
      "Aplico a multiplicação cruzada: 5·x = 8·10 = 80.",
      "Resolvo: x = 16 m.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: numa transversal, os segmentos medem 6 cm e 9 cm; na paralela correspondente, o primeiro mede 4 cm. Qual é o segundo?",
    dica: "Monte 6/9 = 4/x, mantendo a mesma ordem, e resolva por multiplicação cruzada.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6/9 = 4/x",
      passos: [
        { expr: "6/9 = 4/x", explica: "Monto a proporção.", status: "neutro" },
        { expr: "6 · x = 9 · 4", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "6x = 36", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 6", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "x = 6 cm",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o valor de x?",
      opcoes: [{ nome: "6 cm" }, { nome: "13,5 cm" }, { nome: "24 cm" }],
      respostaCerta: "6 cm",
      feedbackAcerto: "🎯 6·x = 9·4 = 36 → x = 36÷6 = 6.",
      feedbackErro: "Monte 6/9 = 4/x, multiplique em cruz: 6x = 36, então x = 6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: numa 1ª transversal, os segmentos são 7 cm e 3,5 cm. Na 2ª, o correspondente ao primeiro é 14 cm. Qual é o correspondente ao segundo?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "7/3,5 = 14/x",
      passos: [
        { expr: "7/3,5 = 14/x", explica: "Monto a proporção.", status: "neutro" },
        { expr: "7 · x = 3,5 · 14", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "7x = 49", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 7", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "x = 7 cm",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o valor de x?",
      opcoes: [{ nome: "7 cm" }, { nome: "2 cm" }, { nome: "49 cm" }],
      respostaCerta: "7 cm",
      feedbackAcerto: "🎯 3,5·14 = 49; 49÷7 = 7.",
      feedbackErro: "Monte 7/3,5 = 14/x, multiplique em cruz (7x = 3,5·14 = 49) e divida: x = 49÷7 = 7.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma rua tem 3 postes de luz em pontos alinhados, ligados por fios que cruzam 2 calçadas paralelas entre si.",
    problema: "Entre o 1º e o 2º poste, a calçada A mede 12 m e a calçada B mede 18 m. Entre o 2º e o 3º poste, a calçada A mede 8 m. Quanto mede a calçada B nesse trecho?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12/18 = 8/x",
      passos: [
        { expr: "12/18 = 8/x", explica: "Monto a proporção com os trechos correspondentes.", status: "neutro", professor: "As calçadas A e B fazem o papel das transversais, cortando as ruas paralelas (que passam pelos postes). Mantenho a ordem: trecho 1 da calçada A sobre trecho 1 da calçada B = trecho 2 da calçada A sobre trecho 2 da calçada B... aqui usei a correspondência A com A e B com B em cada trecho." },
        { expr: "12 · x = 18 · 8", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "12x = 144", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 144 ÷ 12 = 12", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "A calçada B mede 12 m nesse trecho",
      legenda: "Aplicação — Tales na rua",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto mede o trecho da calçada B?",
      opcoes: [{ nome: "12 m" }, { nome: "6 m" }, { nome: "18 m" }],
      respostaCerta: "12 m",
      feedbackAcerto: "🎯 12/18 = 8/x → 12x = 144 → x = 12 m.",
      feedbackErro: "Monte a proporção 12/18 = 8/x mantendo a correspondência, multiplique em cruz (12x = 144) e divida por 12: x = 12.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Feixe de paralelas cortado por transversais gera segmentos proporcionais.",
      "AB/BC = A'B'/B'C' — sempre respeitando a correspondência.",
      "A proporção também vale para parte/todo (AB/AC = A'B'/A'C').",
      "Resolve-se sempre por multiplicação cruzada.",
      "Não importa o ângulo das transversais — o que garante Tales é o paralelismo das retas cortadas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O Teorema de Tales relaciona segmentos formados por:",
        opcoes: [
          "retas paralelas cortadas por transversais",
          "dois círculos concêntricos",
          "dois triângulos retângulos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exatamente: paralelas cortadas por transversais geram segmentos proporcionais.",
        feedbackErro: "Tales trata de retas PARALELAS cortadas por transversais — não é sobre círculos nem triângulos retângulos diretamente.",
      },
      {
        pergunta: "Se AB/BC = 2/5 na 1ª transversal e A'B' = 4 cm na 2ª, quanto mede B'C'?",
        opcoes: ["10 cm", "8 cm", "20 cm"],
        correta: 0,
        feedbackAcerto: "🎉 2/5 = 4/x → 2x = 20 → x = 10 cm.",
        feedbackErro: "Monte 2/5 = 4/x, multiplique em cruz: 2x = 5·4 = 20, então x = 10.",
      },
      {
        pergunta: "Na proporção dos segmentos de Tales, é essencial:",
        opcoes: [
          "manter a correspondência entre os segmentos nos dois lados",
          "usar sempre números inteiros",
          "que as transversais sejam perpendiculares",
        ],
        correta: 0,
        feedbackAcerto: "🎉 O que garante a proporção certa é casar cada segmento com seu correspondente.",
        feedbackErro: "Não precisa de números inteiros nem transversais perpendiculares. O essencial é manter a correspondência correta entre os segmentos.",
      },
      {
        pergunta: "PQ = 9 cm e QR = 6 cm numa transversal; P'Q' = 12 cm na outra. Quanto mede Q'R'?",
        opcoes: ["8 cm", "18 cm", "4 cm"],
        correta: 0,
        feedbackAcerto: "🎉 9/6 = 12/x → 9x = 72 → x = 8 cm.",
        feedbackErro: "Monte 9/6 = 12/x, multiplique em cruz (9x = 72) e divida por 9: x = 8.",
      },
      {
        pergunta: "Se as três retas do feixe NÃO forem paralelas entre si, a proporção de Tales:",
        opcoes: [
          "não é garantida",
          "continua valendo do mesmo jeito",
          "vale só se as transversais forem paralelas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 O paralelismo das retas cortadas é a condição essencial de Tales — sem ele, não há garantia de proporção.",
        feedbackErro: "O Teorema de Tales exige retas PARALELAS sendo cortadas. Sem paralelismo, os segmentos não são garantidamente proporcionais.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tales nas ruas do bairro",
    materiais: ["Papel", "Caneta", "Fita métrica ou passos contados"],
    passos: [
      "Encontre 3 ruas paralelas perto de casa (ou desenhe no papel um mapa com 3 linhas paralelas).",
      "Trace duas 'transversais' (duas ruas que cortam essas paralelas) e meça os pedaços formados.",
      "Calcule as razões dos pedaços correspondentes e confira se são iguais — mostre a conta para a família.",
    ],
    registro: "📸 Foto do mapa desenhado com as medidas e a proporção calculada.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Discípulo de Tales" },
};
