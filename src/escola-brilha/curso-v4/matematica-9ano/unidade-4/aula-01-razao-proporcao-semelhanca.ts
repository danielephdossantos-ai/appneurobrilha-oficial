import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U4 — Razão entre segmentos, escala e proporção; figuras
 * semelhantes (mesma forma, tamanhos proporcionais).
 */
export const aula01_razaoProporcaoSemelhanca: AulaV4 = {
  slug: "u4-01-razao-proporcao-semelhanca",
  titulo: "Mesma Forma, Tamanho Diferente",
  iconeTrilha: "🗺️",
  bncc: ["EF09MA07", "EF09MA12"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "O mapa não é do tamanho da cidade",
    historia:
      "{NOME}, um mapa de 20 cm mostra uma cidade de 20 km e cabe na sua mochila! Como isso funciona sem virar bagunça? Porque o mapa tem a MESMA FORMA da cidade, só que menor — cada distância foi reduzida na MESMA razão. Hoje você entende a matemática por trás de mapas, plantas e fotos ampliadas.",
  },

  momento02_exploracao: {
    instrucao: "Compare os dois retângulos: eles têm a mesma FORMA, mas tamanhos diferentes.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "retangulo",
        medidasLados: ["4 cm", "2 cm", "4 cm", "2 cm"],
        legenda: "Retângulo pequeno",
      },
      {
        tipo: "figuraPlana",
        forma: "retangulo",
        medidasLados: ["8 cm", "4 cm", "8 cm", "4 cm"],
        legenda: "Retângulo grande",
      },
      {
        tipo: "tabela",
        titulo: "Comparando os lados",
        cabecalhos: ["Lado", "Pequeno", "Grande", "Razão grande/pequeno"],
        linhas: [
          { rotulo: "1", valores: ["Comprimento", "4 cm", "8 cm", "8/4 = 2"] },
          { rotulo: "2", valores: ["Largura", "2 cm", "4 cm", "4/2 = 2"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 As duas razões deram o MESMO valor: 2. Isso é o que faz as figuras serem SEMELHANTES — todos os lados crescem na mesma proporção.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um retângulo de lados 3 cm e 5 cm é semelhante a um de lados 6 cm e 9 cm?",
    pista: "Compare a razão do lado menor com o lado menor, e do lado maior com o lado maior. As duas razões precisam ser IGUAIS.",
    revelacao: "As razões são diferentes (6/3 = 2 e 9/5 = 1,8), então os retângulos NÃO são semelhantes — mudaram de forma, não só de tamanho.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Comparar razões: 3→6 e 5→9",
      passos: [
        { expr: "6 ÷ 3 = 2", explica: "Razão do lado menor.", status: "neutro" },
        { expr: "9 ÷ 5 = 1,8", explica: "Razão do lado maior.", status: "neutro" },
        { expr: "2 ≠ 1,8", explica: "As razões são diferentes.", status: "x", professor: "Para duas figuras serem semelhantes, TODAS as razões entre lados correspondentes precisam dar o mesmo número (a razão de semelhança). Se uma razão diverge, a forma mudou — não é ampliação nem redução correta." },
      ],
      fatorada: "Não são semelhantes",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Razão, proporção e semelhança",
    etapas: [
      {
        texto:
          "RAZÃO entre dois segmentos (ou números) a e b é o quociente a/b, com b ≠ 0. É uma forma de comparar 'quantas vezes' um cabe no outro. Ex.: razão entre 10 cm e 4 cm é 10/4 = 2,5.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Razão entre dois segmentos AB = 15 cm e CD = 6 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Razão entre AB = 15 cm e CD = 6 cm",
            passos: [
              { expr: "razão = AB / CD", explica: "Divido o primeiro pelo segundo, na ordem pedida.", status: "neutro" },
              { expr: "= 15 / 6", explica: "Substituo os valores.", status: "neutro" },
              { expr: "= 5/2 = 2,5", explica: "Simplifico a fração.", status: "ok", professor: "15/6: divido os dois termos por 3, o maior divisor comum → 5/2. Isso significa que AB é 2,5 vezes CD." },
            ],
            fatorada: "razão = 5/2 = 2,5",
          },
          destaque: "Razão é sempre uma divisão — a ORDEM dos termos importa.",
        },
      },
      {
        texto:
          "PROPORÇÃO é uma igualdade entre duas razões: a/b = c/d. Ela vale a famosa propriedade fundamental: o produto dos meios é igual ao produto dos extremos → a · d = b · c (multiplicação cruzada).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Verificar se 3/4 = 9/12 é uma proporção.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3/4 = 9/12 ?",
            passos: [
              { expr: "3 · 12 = 36", explica: "Multiplico extremos.", status: "neutro" },
              { expr: "4 · 9 = 36", explica: "Multiplico meios.", status: "neutro" },
              { expr: "36 = 36 ✓", explica: "Produtos iguais.", status: "ok", professor: "Quando o produto dos extremos (primeiro e último termo) é igual ao produto dos meios (segundo e terceiro), a igualdade entre as razões é verdadeira — é uma proporção de verdade." },
            ],
            fatorada: "É proporção",
          },
          destaque: "a/b = c/d ⇔ a · d = b · c.",
        },
      },
      {
        texto:
          "FIGURAS SEMELHANTES têm a MESMA FORMA: ângulos correspondentes iguais e lados correspondentes proporcionais. A razão comum entre os lados chama-se RAZÃO DE SEMELHANÇA (k).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Dois triângulos semelhantes: lados 4, 6, 8 cm e 6, 9, 12 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Razão de semelhança entre os triângulos",
            passos: [
              { expr: "6/4 = 1,5", explica: "1º par de lados correspondentes.", status: "ok" },
              { expr: "9/6 = 1,5", explica: "2º par de lados correspondentes.", status: "ok" },
              { expr: "12/8 = 1,5", explica: "3º par de lados correspondentes.", status: "ok", professor: "As três razões deram exatamente o mesmo valor, 1,5. Esse número é a razão de semelhança k: o triângulo maior é 1,5 vez o menor em cada lado." },
            ],
            fatorada: "k = 1,5",
            legenda: "Triângulos semelhantes",
          },
          destaque: "Todos os lados correspondentes crescem na mesma razão k.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um retângulo de 5 cm × 3 cm foi ampliado para um retângulo semelhante de 3 cm de largura para 9 cm. Qual o novo comprimento?",
    resposta: "15 cm",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5/x = 3/9",
      passos: [
        { expr: "5 / x = 3 / 9", explica: "Monto a proporção: comprimento sobre comprimento, largura sobre largura.", status: "neutro", professor: "Preciso manter a correspondência: comprimento antigo com comprimento novo (x), largura antiga (3) com largura nova (9)." },
        { expr: "5 · 9 = x · 3", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "45 = 3x", explica: "Calculo o produto dos extremos.", status: "neutro" },
        { expr: "x = 45 ÷ 3", explica: "Isolo x dividindo os dois lados por 3.", status: "neutro" },
        { expr: "x = 15", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "Novo comprimento = 15 cm",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico os lados correspondentes: comprimento com comprimento, largura com largura.",
      "Monto a proporção 5/x = 3/9.",
      "Aplico a multiplicação cruzada: 5 · 9 = 3 · x.",
      "Resolvo: 45 = 3x, logo x = 15 cm.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: dois segmentos, AB = 8 cm e CD = 12 cm. Qual é a razão AB/CD, simplificada?",
    dica: "Divida 8 por 12 e simplifique a fração pelo maior divisor comum (4).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "AB/CD = 8/12",
      passos: [
        { expr: "8/12", explica: "Razão bruta.", status: "neutro" },
        { expr: "÷4 em cima e embaixo", explica: "Simplifico pelo MDC.", status: "neutro" },
        { expr: "= 2/3", explica: "Fração irredutível.", status: "ok" },
      ],
      fatorada: "AB/CD = 2/3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a razão simplificada?",
      opcoes: [{ nome: "2/3" }, { nome: "3/2" }, { nome: "4/6" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 8/12 simplifica dividindo por 4: fica 2/3.",
      feedbackErro: "Divida os dois termos de 8/12 pelo maior divisor comum, que é 4: 8÷4=2 e 12÷4=3. Resultado: 2/3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: dois triângulos semelhantes têm lados correspondentes 5 cm e 15 cm num par, e x cm e 24 cm no outro par. Quanto vale x?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5/15 = x/24",
      passos: [
        { expr: "5/15 = x/24", explica: "Monto a proporção.", status: "neutro" },
        { expr: "5 · 24 = 15 · x", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "120 = 15x", explica: "Calculo o produto.", status: "neutro" },
        { expr: "x = 120 ÷ 15 = 8", explica: "Isolo x.", status: "ok" },
      ],
      fatorada: "x = 8 cm",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o valor de x?",
      opcoes: [{ nome: "8 cm" }, { nome: "72 cm" }, { nome: "3 cm" }],
      respostaCerta: "8 cm",
      feedbackAcerto: "🎯 5·24 = 15·x → 120 = 15x → x = 8.",
      feedbackErro: "Monte a proporção 5/15 = x/24, multiplique em cruz: 5·24 = 15·x, depois divida 120 por 15. x = 8.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma planta de casa usa a escala 1 : 50, ou seja, 1 cm no papel representa 50 cm na realidade.",
    problema: "Um corredor mede 6 cm na planta. Quantos cm (e quantos metros) ele mede na realidade?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Escala 1:50, planta = 6 cm",
      passos: [
        { expr: "1 / 50 = 6 / x", explica: "Monto a proporção da escala.", status: "neutro", professor: "Escala 1:50 é uma razão fixa: cada 1 cm no papel vale 50 cm reais. Uso a mesma ideia de proporção para achar o valor real x." },
        { expr: "1 · x = 50 · 6", explica: "Multiplicação cruzada.", status: "neutro" },
        { expr: "x = 300 cm", explica: "Resultado em centímetros.", status: "neutro" },
        { expr: "300 cm = 3 m", explica: "Converto para metros.", status: "ok" },
      ],
      fatorada: "O corredor mede 3 m na realidade",
      legenda: "Aplicação — escala de planta",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto mede o corredor de verdade?",
      opcoes: [{ nome: "3 m" }, { nome: "30 m" }, { nome: "0,3 m" }],
      respostaCerta: "3 m",
      feedbackAcerto: "🎯 1:50 significa que 6 cm no papel viram 6 × 50 = 300 cm = 3 m na realidade.",
      feedbackErro: "Na escala 1:50, cada cm da planta vale 50 cm reais. Multiplique 6 × 50 = 300 cm, que é igual a 3 metros.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Razão entre dois segmentos é a divisão a/b (ordem importa).",
      "Proporção é a/b = c/d, e vale a·d = b·c (multiplicação cruzada).",
      "Figuras semelhantes: mesma forma, ângulos iguais e lados proporcionais.",
      "A razão comum entre lados correspondentes é a razão de semelhança k.",
      "Escala de mapa/planta é uma razão fixa entre desenho e realidade.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A razão entre 20 cm e 5 cm é:",
        opcoes: ["4", "1/4", "15"],
        correta: 0,
        feedbackAcerto: "🎉 20 ÷ 5 = 4. O primeiro segmento é 4 vezes o segundo.",
        feedbackErro: "Razão é uma divisão: 20/5 = 4, não uma subtração. Refaça a divisão.",
      },
      {
        pergunta: "Em a/b = c/d, a propriedade fundamental da proporção diz que:",
        opcoes: ["a · d = b · c", "a + d = b + c", "a · b = c · d"],
        correta: 0,
        feedbackAcerto: "🎉 Produto dos extremos (a e d) igual ao produto dos meios (b e c).",
        feedbackErro: "A multiplicação cruzada é a·d = b·c, não soma nem outra combinação de produtos.",
      },
      {
        pergunta: "Para dois triângulos serem semelhantes, é necessário que:",
        opcoes: [
          "os ângulos correspondentes sejam iguais e os lados proporcionais",
          "todos os lados sejam iguais",
          "as áreas sejam iguais",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Semelhança exige mesma forma: ângulos iguais e lados na mesma razão.",
        feedbackErro: "Lados iguais faria as figuras CONGRUENTES, não apenas semelhantes. Semelhança pede ângulos iguais e lados proporcionais.",
      },
      {
        pergunta: "Dois retângulos são semelhantes: lados 2 cm e 5 cm no primeiro; 6 cm e x no segundo (correspondente ao lado de 5 cm). Qual x?",
        opcoes: ["15 cm", "12 cm", "10 cm"],
        correta: 0,
        feedbackAcerto: "🎉 2/6 = 5/x → 2x = 30 → x = 15 cm.",
        feedbackErro: "Monte 2/6 = 5/x, multiplique em cruz: 2·x = 6·5 = 30, então x = 15.",
      },
      {
        pergunta: "Numa escala 1:100, um objeto de 4 cm no desenho mede na realidade:",
        opcoes: ["4 m", "400 m", "40 cm"],
        correta: 0,
        feedbackAcerto: "🎉 4 × 100 = 400 cm, que é igual a 4 metros.",
        feedbackErro: "Multiplique 4 cm por 100 (a escala): 4 × 100 = 400 cm = 4 m.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçador de semelhanças em casa",
    materiais: ["Régua", "Papel", "Uma foto impressa ou objeto retangular (caixa, porta-retrato)"],
    passos: [
      "Meça os dois lados de um retângulo em casa (ex.: uma porta ou uma folha).",
      "Encontre outro objeto retangular e meça seus lados também.",
      "Calcule as duas razões (lado maior/lado maior e lado menor/lado menor) e veja se são iguais — se forem, os objetos são semelhantes!",
    ],
    registro: "📸 Foto dos dois objetos medidos com as contas das razões escritas ao lado.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Detetive das Proporções" },
};
