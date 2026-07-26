import type { AulaV4 } from "../../types";

/** Aula 01 · U5 — Ângulos: medida, tipos e pares notáveis. */
export const aula01_angulos: AulaV4 = {
  slug: "u5-01-angulos",
  titulo: "A Medida do Giro",
  iconeTrilha: "📐",
  bncc: ["EF07MA23", "EF07MA24"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Tudo que gira tem ângulo",
    historia:
      "{NOME}, o ponteiro do relógio, a porta que abre, a rampa do skate: todos descrevem um giro. A matemática mede esse giro em graus. Hoje você aprende a nomear, medir e combinar ângulos — e a descobrir um ângulo sem transferidor, só com conta.",
  },

  momento02_exploracao: {
    instrucao: "Uma volta completa tem 360°. Metade da volta, 180°. Um quarto de volta, 90°.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Classificação pelo tamanho",
        cabecalhos: ["Nome", "Medida", "Onde aparece"],
        linhas: [
          { rotulo: "1", valores: ["Agudo", "0° < a < 90°", "ponta de fatia de pizza"] },
          { rotulo: "2", valores: ["Reto", "= 90°", "quina da folha"] },
          { rotulo: "3", valores: ["Obtuso", "90° < a < 180°", "espreguiçadeira aberta"] },
          { rotulo: "4", valores: ["Raso", "= 180°", "linha reta"] },
          { rotulo: "5", valores: ["Volta completa", "= 360°", "giro do ponteiro em 1 hora"] },
        ],
      },
      {
        tipo: "figuraPlana",
        forma: "quadrado",
        mostrarAngulos: true,
        legenda: "Os quatro ângulos internos do quadrado são retos: 4 × 90° = 360°",
      },
      { tipo: "texto", texto: "🔑 Ângulo não depende do tamanho dos lados desenhados: depende só da abertura entre eles." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se dois ângulos juntos formam uma linha reta e um deles mede 125°, quanto mede o outro?",
    pista: "A linha reta inteira vale 180°.",
    revelacao: "Mede 55°, porque 125° + 55° = 180°. Esse par se chama suplementar.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "a + 125° = 180°",
      passos: [
        { expr: "a + 125° = 180°", explica: "Os dois formam um ângulo raso.", status: "neutro" },
        { expr: "a = 180° − 125°", explica: "Operação inversa.", status: "ok" },
        { expr: "a = 55°", explica: "Ângulo suplementar.", status: "ok", professor: "Suplementar soma 180°; complementar soma 90°. Uma forma de não trocar: 'C' de complementar vem antes de 'S' no alfabeto, assim como 90 vem antes de 180." },
      ],
      fatorada: "a = 55°",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Complementares, suplementares e opostos pelo vértice",
    etapas: [
      {
        texto: "COMPLEMENTARES: dois ângulos que somam 90°.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "O complemento de 37°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x + 37° = 90°",
            passos: [
              { expr: "x + 37° = 90°", explica: "Definição.", status: "neutro" },
              { expr: "x = 90° − 37°", explica: "Isolo x.", status: "ok" },
              { expr: "x = 53°", explica: "Complemento.", status: "ok" },
            ],
            fatorada: "x = 53°",
          },
          destaque: "Complementares somam 90°.",
        },
      },
      {
        texto: "SUPLEMENTARES: dois ângulos que somam 180°.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "O suplemento de 68°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "y + 68° = 180°",
            passos: [
              { expr: "y + 68° = 180°", explica: "Definição.", status: "neutro" },
              { expr: "y = 180° − 68°", explica: "Isolo y.", status: "ok" },
              { expr: "y = 112°", explica: "Suplemento.", status: "ok", professor: "Repare que 112° é obtuso. Sempre que um ângulo do par é agudo, o outro é obtuso — exceto quando os dois valem 90°." },
            ],
            fatorada: "y = 112°",
          },
          destaque: "Suplementares somam 180°.",
        },
      },
      {
        texto: "OPOSTOS PELO VÉRTICE: quando duas retas se cruzam, os ângulos opostos são IGUAIS.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Duas retas se cruzam formando 70°. Quais são os outros três ângulos?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Cruzamento de duas retas",
            passos: [
              { expr: "â = 70°", explica: "Ângulo dado.", status: "neutro" },
              { expr: "b̂ = 180° − 70° = 110°", explica: "Vizinho, suplementar.", status: "ok" },
              { expr: "ĉ = 70°", explica: "Oposto ao primeiro.", status: "ok" },
              { expr: "d̂ = 110°", explica: "Oposto ao segundo.", status: "ok" },
              { expr: "70 + 110 + 70 + 110 = 360°", explica: "Confere a volta completa.", status: "ok", professor: "Verificar se a soma dos quatro ângulos dá 360° é um teste rápido e seguro para qualquer cruzamento de retas." },
            ],
            fatorada: "70°, 110°, 70°, 110°",
          },
          destaque: "Opostos pelo vértice são congruentes.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: dois ângulos são suplementares e um é o triplo do outro. Quanto mede cada um?",
    resposta: "45° e 135°",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + 3x = 180°",
      passos: [
        { expr: "menor = x, maior = 3x", explica: "Traduzo o enunciado.", status: "neutro" },
        { expr: "x + 3x = 180°", explica: "Suplementares.", status: "ok" },
        { expr: "4x = 180°", explica: "Reduzo semelhantes.", status: "ok" },
        { expr: "x = 45°", explica: "Divido por 4.", status: "ok" },
        { expr: "3x = 135°", explica: "Ângulo maior.", status: "ok" },
        { expr: "45 + 135 = 180 ✓", explica: "Verificação.", status: "ok", professor: "Sempre volte ao enunciado: 135 é mesmo o triplo de 45, e a soma dá 180°. Verificar é parte da resolução, não um extra." },
      ],
      fatorada: "45° e 135°",
      legenda: "Brilha resolve",
    },
    passos: ["Chamo o menor de x.", "O maior é 3x.", "Somo e igualo a 180°.", "Resolvo e verifico."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o complemento de 52°?",
    dica: "Complementares somam 90°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + 52° = 90°",
      passos: [
        { expr: "x = 90° − 52°", explica: "Operação inversa.", status: "neutro" },
        { expr: "x = 38°", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "x = 38°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "38°" }, { nome: "128°" }, { nome: "48°" }],
      respostaCerta: "38°",
      feedbackAcerto: "🎯 90 − 52 = 38.",
      feedbackErro: "128° seria o SUPLEMENTO (180 − 52). Complemento usa 90°: 90 − 52 = 38°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: duas retas se cruzam e um dos ângulos mede 43°. Quanto mede o ângulo vizinho a ele?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "vizinho = 180° − 43°",
      passos: [
        { expr: "vizinhos são suplementares", explica: "Formam linha reta.", status: "neutro" },
        { expr: "180° − 43° = 137°", explica: "Conta.", status: "ok" },
      ],
      fatorada: "137°",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "137°" }, { nome: "43°" }, { nome: "47°" }],
      respostaCerta: "137°",
      feedbackAcerto: "🎯 O vizinho fecha a linha reta de 180°.",
      feedbackErro: "43° é o ângulo OPOSTO pelo vértice, não o vizinho. O vizinho é suplementar: 180 − 43 = 137°.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma rampa de skate encosta no chão formando um ângulo de 28°. A viga vertical de apoio forma 90° com o chão.",
    problema: "Que ângulo a rampa forma com essa viga vertical?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "28° + x = 90°",
      passos: [
        { expr: "chão e viga formam 90°", explica: "Dado do problema.", status: "neutro" },
        { expr: "28° + x = 90°", explica: "A rampa divide esse ângulo reto.", status: "ok" },
        { expr: "x = 62°", explica: "Complemento de 28°.", status: "ok", professor: "Em estruturas, o ângulo entre a rampa e o poste vertical é sempre o complemento do ângulo com o chão — por isso quem constrói só precisa medir um deles." },
      ],
      fatorada: "62°",
      legenda: "Aplicação — engenharia da rampa",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o ângulo:",
      opcoes: [{ nome: "62°" }, { nome: "152°" }, { nome: "28°" }],
      respostaCerta: "62°",
      feedbackAcerto: "🎯 90 − 28 = 62.",
      feedbackErro: "152° usaria 180°, mas a viga forma um ângulo RETO com o chão. O cálculo certo é 90 − 28 = 62°.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Volta completa = 360°; linha reta = 180°; quina = 90°.",
      "Agudo < 90° < obtuso < 180°.",
      "Complementares somam 90°.",
      "Suplementares somam 180°.",
      "Opostos pelo vértice têm a mesma medida.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "O complemento de 25° é:", opcoes: ["65°", "155°", "75°"], correta: 0, feedbackAcerto: "🎉 90 − 25 = 65.", feedbackErro: "Complemento usa 90°: 90 − 25 = 65°. O 155° seria o suplemento." },
      { pergunta: "O suplemento de 90° é:", opcoes: ["90°", "0°", "180°"], correta: 0, feedbackAcerto: "🎉 90 + 90 = 180.", feedbackErro: "Preciso de um ângulo que somado a 90° dê 180°. Esse ângulo é o próprio 90°." },
      { pergunta: "Um ângulo de 115° é:", opcoes: ["obtuso", "agudo", "reto"], correta: 0, feedbackAcerto: "🎉 Está entre 90° e 180°.", feedbackErro: "Agudo é menor que 90° e reto é exatamente 90°. Como 115° passa de 90° sem chegar a 180°, ele é obtuso." },
      { pergunta: "Duas retas se cruzam. Um ângulo mede 80°. O oposto pelo vértice mede:", opcoes: ["80°", "100°", "180°"], correta: 0, feedbackAcerto: "🎉 Opostos pelo vértice são iguais.", feedbackErro: "100° é o ângulo VIZINHO (suplementar). O oposto pelo vértice tem sempre a mesma medida: 80°." },
      { pergunta: "Dois ângulos complementares e iguais medem:", opcoes: ["45° cada", "90° cada", "30° cada"], correta: 0, feedbackAcerto: "🎉 45 + 45 = 90.", feedbackErro: "Se são iguais e somam 90°, cada um vale 90 ÷ 2 = 45°." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçada aos ângulos da casa",
    materiais: ["Folha de papel (a quina serve de esquadro)", "Celular", "Caderno"],
    passos: [
      "Encontre em casa um ângulo agudo, um reto e um obtuso.",
      "Use a quina da folha para testar se é maior ou menor que 90°.",
      "Anote cada objeto e o tipo de ângulo encontrado.",
    ],
    registro: "📸 Foto dos três ângulos encontrados, com a classificação escrita.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre do Transferidor" },
};
