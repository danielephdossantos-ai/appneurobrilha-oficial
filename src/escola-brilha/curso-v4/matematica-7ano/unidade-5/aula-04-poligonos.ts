import type { AulaV4 } from "../../types";

/** Aula 04 · U5 — Polígonos: soma dos ângulos internos e polígonos regulares. */
export const aula04_poligonos: AulaV4 = {
  slug: "u5-04-poligonos",
  titulo: "A Fábrica de Polígonos",
  iconeTrilha: "⬡",
  bncc: ["EF07MA27", "EF07MA28"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Por que a colmeia é hexagonal?",
    historia:
      "{NOME}, as abelhas poderiam construir favos redondos ou quadrados, mas escolheram o hexágono — a forma que preenche o espaço sem sobrar buraco e gasta menos cera. Hoje você vai descobrir a fórmula que revela os ângulos de QUALQUER polígono, do triângulo ao decágono.",
  },

  momento02_exploracao: {
    instrucao: "Todo polígono pode ser dividido em triângulos puxando diagonais de um mesmo vértice.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "hexagono",
        legenda: "Hexágono ABCDEF: 6 lados, 6 vértices, 6 ângulos internos",
      },
      {
        tipo: "tabela",
        titulo: "Dividindo em triângulos",
        cabecalhos: ["Polígono", "Lados (n)", "Triângulos (n − 2)", "Soma interna"],
        linhas: [
          { rotulo: "1", valores: ["triângulo", 3, 1, "180°"] },
          { rotulo: "2", valores: ["quadrilátero", 4, 2, "360°"] },
          { rotulo: "3", valores: ["pentágono", 5, 3, "540°"] },
          { rotulo: "4", valores: ["hexágono", 6, 4, "720°"] },
          { rotulo: "5", valores: ["octógono", 8, 6, "1080°"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Cada triângulo entrega 180°. Por isso a soma dos ângulos internos é (n − 2) × 180°." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "De onde vem o '− 2' na fórmula (n − 2) × 180°?",
    pista: "Conte quantos triângulos aparecem quando você puxa diagonais de um único vértice.",
    revelacao: "Do vértice escolhido não sai diagonal para ele mesmo nem para os dois vizinhos, então sobram n − 3 diagonais, que recortam n − 2 triângulos.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Soma interna do pentágono (n = 5)",
      passos: [
        { expr: "de um vértice saem n − 3 = 2 diagonais", explica: "Não vale para si nem para os vizinhos.", status: "neutro" },
        { expr: "2 diagonais recortam 3 triângulos", explica: "n − 2 = 3.", status: "ok" },
        { expr: "3 × 180° = 540°", explica: "Soma interna.", status: "ok", professor: "A fórmula não é decoreba: ela conta triângulos. Sempre que esquecer, desenhe o polígono e puxe as diagonais de um vértice." },
      ],
      fatorada: "Sᵢ = (n − 2) · 180°",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Soma interna, ângulo do regular e soma externa",
    etapas: [
      {
        texto: "SOMA DOS ÂNGULOS INTERNOS: Sᵢ = (n − 2) × 180°.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Soma interna do decágono (n = 10)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Sᵢ = (10 − 2) · 180°",
            passos: [
              { expr: "n − 2 = 8", explica: "Número de triângulos.", status: "neutro" },
              { expr: "8 × 180 = 1440", explica: "Multiplico.", status: "ok" },
              { expr: "Sᵢ = 1440°", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "1440°",
          },
          destaque: "Só depende do número de lados.",
        },
      },
      {
        texto: "ÂNGULO INTERNO DO POLÍGONO REGULAR: aᵢ = Sᵢ ÷ n. Vale só quando todos os ângulos são iguais.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Cada ângulo do hexágono regular",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "aᵢ = (6 − 2)·180 ÷ 6",
            passos: [
              { expr: "Sᵢ = 4 × 180 = 720°", explica: "Soma interna.", status: "neutro" },
              { expr: "aᵢ = 720 ÷ 6", explica: "Divido pelos 6 ângulos.", status: "ok" },
              { expr: "aᵢ = 120°", explica: "Cada ângulo do hexágono regular.", status: "ok", professor: "Três hexágonos encaixados num ponto dão 3 × 120 = 360°, exatamente uma volta completa. É por isso que a colmeia fecha sem folga." },
              { expr: "Erro comum: dividir num polígono irregular", explica: "Só vale para regulares.", status: "x" },
            ],
            fatorada: "120° cada",
          },
          destaque: "Divisão só em polígono regular.",
        },
      },
      {
        texto: "SOMA DOS ÂNGULOS EXTERNOS é sempre 360°, para qualquer polígono.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Ângulo externo do pentágono regular",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "aₑ = 360° ÷ 5",
            passos: [
              { expr: "soma externa = 360°", explica: "Vale sempre.", status: "neutro" },
              { expr: "aₑ = 360 ÷ 5 = 72°", explica: "Cada externo.", status: "ok" },
              { expr: "interno = 180 − 72 = 108°", explica: "Confere com (5−2)·180 ÷ 5.", status: "ok", professor: "Interno e externo do mesmo vértice são suplementares. Isso dá dois caminhos para o mesmo resultado — e um serve para conferir o outro." },
            ],
            fatorada: "externo 72°, interno 108°",
          },
          destaque: "Soma externa = 360°, sempre.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: um polígono regular tem ângulo interno de 150°. Quantos lados ele tem?",
    resposta: "12 lados (dodecágono)",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "interno = 150° → n = ?",
      passos: [
        { expr: "externo = 180 − 150 = 30°", explica: "Suplementar do interno.", status: "neutro" },
        { expr: "n = 360 ÷ 30", explica: "A soma externa é 360°.", status: "ok" },
        { expr: "n = 12", explica: "Dodecágono.", status: "ok" },
        { expr: "conferindo: (12−2)·180 ÷ 12 = 1800 ÷ 12 = 150 ✓", explica: "Verificação.", status: "ok", professor: "O caminho pelo ângulo externo é bem mais rápido do que montar a equação com (n − 2)·180 ÷ n = 150. Os dois estão corretos; escolha o econômico." },
      ],
      fatorada: "n = 12",
      legenda: "Brilha resolve",
    },
    passos: ["Acho o ângulo externo (180 − interno).", "Divido 360 pelo externo.", "Obtenho o número de lados.", "Confiro com a fórmula da soma interna."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é a soma dos ângulos internos de um octógono?",
    dica: "Use Sᵢ = (n − 2) × 180° com n = 8.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Sᵢ = (8 − 2) · 180°",
      passos: [
        { expr: "8 − 2 = 6", explica: "Triângulos.", status: "neutro" },
        { expr: "6 × 180 = 1080°", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "1080°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1080°" }, { nome: "1440°" }, { nome: "720°" }],
      respostaCerta: "1080°",
      feedbackAcerto: "🎯 6 triângulos × 180°.",
      feedbackErro: "1440° é a soma do decágono (n = 10). Para n = 8: (8 − 2) × 180 = 1080°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: cada ângulo interno do quadrado regular mede quanto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "aᵢ = (4 − 2)·180 ÷ 4",
      passos: [
        { expr: "Sᵢ = 2 × 180 = 360°", explica: "Soma interna.", status: "neutro" },
        { expr: "360 ÷ 4 = 90°", explica: "Cada ângulo.", status: "ok" },
      ],
      fatorada: "90°",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "90°" }, { nome: "360°" }, { nome: "60°" }],
      respostaCerta: "90°",
      feedbackAcerto: "🎯 As quatro quinas são retas.",
      feedbackErro: "360° é a soma dos QUATRO ângulos juntos. Cada um vale 360 ÷ 4 = 90°.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma praça será cercada no formato de um pentágono regular. O jardineiro quer saber o ângulo de cada quina para cortar as placas de madeira.",
    problema: "Qual é o ângulo interno de cada quina do pentágono regular?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "aᵢ do pentágono regular",
      passos: [
        { expr: "Sᵢ = (5 − 2) × 180 = 540°", explica: "Soma interna.", status: "neutro" },
        { expr: "aᵢ = 540 ÷ 5", explica: "Regular ⇒ ângulos iguais.", status: "ok" },
        { expr: "aᵢ = 108°", explica: "Ângulo de cada quina.", status: "ok", professor: "Na prática, o marceneiro corta cada peça em 54°, metade de 108°, para que duas peças encostadas formem a quina exata." },
      ],
      fatorada: "108° por quina",
      legenda: "Aplicação — cerca da praça",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o ângulo:",
      opcoes: [{ nome: "108°" }, { nome: "72°" }, { nome: "120°" }],
      respostaCerta: "108°",
      feedbackAcerto: "🎯 540 ÷ 5 = 108.",
      feedbackErro: "72° é o ângulo EXTERNO do pentágono regular (360 ÷ 5). O interno é o suplementar: 180 − 72 = 108°.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Soma dos ângulos internos: Sᵢ = (n − 2) × 180°.",
      "Polígono regular: todos os lados e ângulos iguais.",
      "Ângulo interno do regular: Sᵢ ÷ n.",
      "Soma dos ângulos externos é sempre 360°.",
      "Interno e externo do mesmo vértice somam 180°.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A soma dos ângulos internos de um pentágono é:", opcoes: ["540°", "360°", "720°"], correta: 0, feedbackAcerto: "🎉 (5 − 2) × 180 = 540.", feedbackErro: "Use Sᵢ = (n − 2) × 180 com n = 5: 3 × 180 = 540°." },
      { pergunta: "Cada ângulo interno do hexágono regular mede:", opcoes: ["120°", "60°", "108°"], correta: 0, feedbackAcerto: "🎉 720 ÷ 6 = 120.", feedbackErro: "60° é o ângulo do triângulo equilátero. No hexágono regular: 720 ÷ 6 = 120°." },
      { pergunta: "A soma dos ângulos externos de um polígono de 20 lados é:", opcoes: ["360°", "3240°", "7200°"], correta: 0, feedbackAcerto: "🎉 A soma externa nunca muda.", feedbackErro: "A soma dos ângulos externos é 360° para qualquer polígono, não importa quantos lados tenha." },
      { pergunta: "Um polígono regular tem externo de 45°. Ele tem quantos lados?", opcoes: ["8", "6", "10"], correta: 0, feedbackAcerto: "🎉 360 ÷ 45 = 8.", feedbackErro: "Divida a soma externa pelo ângulo externo: 360 ÷ 45 = 8 lados (octógono)." },
      { pergunta: "Num quadrilátero qualquer os ângulos internos somam:", opcoes: ["360°", "180°", "depende do formato"], correta: 0, feedbackAcerto: "🎉 (4 − 2) × 180 = 360.", feedbackErro: "A soma não depende do formato, só do número de lados: (4 − 2) × 180 = 360°." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Polígonos da cozinha",
    materiais: ["Celular", "Caderno"],
    passos: [
      "Procure objetos com formato de polígono (azulejo, placa, ladrilho, embalagem).",
      "Conte os lados de cada um e calcule a soma dos ângulos internos.",
      "Marque quais são regulares.",
    ],
    registro: "📸 Foto dos polígonos encontrados com o cálculo ao lado.",
  },
  recompensa: { xp: 240, moedas: 125, medalha: "Arquiteto dos Polígonos" },
};
