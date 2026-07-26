import type { AulaV4 } from "../../types";

/** Aula 05 · U5 — Simetria, transformações no plano e missão final da unidade. */
export const aula05_simetriaTransformacoes: AulaV4 = {
  slug: "u5-05-simetria-transformacoes",
  titulo: "Missão Final: Mover sem Deformar",
  iconeTrilha: "🪞",
  bncc: ["EF07MA19", "EF07MA20", "EF07MA21"],
  duracaoMin: 34,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O espelho, o carimbo e o giro",
    historia:
      "{NOME}, um ladrilho de calçada se repete deslizando, uma borboleta se repete refletindo, um cata-vento se repete girando. São as três transformações do plano — e nenhuma delas muda o tamanho da figura. Nesta missão final você fecha a geometria do 7º ano juntando ângulos, triângulos, polígonos e movimentos.",
  },

  momento02_exploracao: {
    instrucao: "Translação, reflexão e rotação são ISOMETRIAS: preservam medidas de lados e ângulos.",
    cenas: [
      {
        tipo: "simetria",
        forma: "borboleta",
        eixos: ["vertical"],
        legenda: "Reflexão: cada ponto de um lado tem um par à mesma distância do eixo",
      },
      {
        tipo: "tabela",
        titulo: "As três transformações",
        cabecalhos: ["Movimento", "O que faz", "Muda o tamanho?"],
        linhas: [
          { rotulo: "1", valores: ["Translação", "desliza sem girar", "não"] },
          { rotulo: "2", valores: ["Reflexão", "espelha em torno de um eixo", "não"] },
          { rotulo: "3", valores: ["Rotação", "gira em torno de um ponto", "não"] },
          { rotulo: "4", valores: ["Ampliação/redução", "muda a escala", "SIM — não é isometria"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Nas isometrias a figura muda de lugar ou de posição, nunca de forma nem de medida." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O ponto A(3, 2) é refletido no eixo vertical (eixo y). Onde ele vai parar?",
    pista: "A distância até o eixo continua a mesma, só o lado muda.",
    revelacao: "Vai para (−3, 2): o x troca de sinal e o y permanece igual.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Reflexão de A(3, 2) no eixo y",
      passos: [
        { expr: "distância de A ao eixo y = 3", explica: "Medida horizontal.", status: "neutro" },
        { expr: "a imagem fica a 3 do outro lado", explica: "Mesma distância.", status: "ok" },
        { expr: "A' = (−3, 2)", explica: "Só o x troca de sinal.", status: "ok", professor: "Reflexão no eixo y troca o sinal de x; reflexão no eixo x troca o sinal de y. Basta lembrar que o eixo espelho é o que fica parado." },
      ],
      fatorada: "A'(−3, 2)",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Translação, reflexão e rotação no plano cartesiano",
    etapas: [
      {
        texto: "TRANSLAÇÃO: soma o mesmo deslocamento em todos os pontos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Transladar B(1, 4) em 5 para a direita e 3 para baixo",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "B(1, 4) + (5, −3)",
            passos: [
              { expr: "x' = 1 + 5 = 6", explica: "Direita soma em x.", status: "neutro" },
              { expr: "y' = 4 − 3 = 1", explica: "Baixo subtrai em y.", status: "ok" },
              { expr: "B' = (6, 1)", explica: "Imagem.", status: "ok" },
            ],
            fatorada: "B'(6, 1)",
          },
          destaque: "Todos os pontos andam igual.",
        },
      },
      {
        texto: "REFLEXÃO: troca o sinal da coordenada perpendicular ao eixo espelho.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Refletir C(−4, 5) no eixo x",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Reflexão de C(−4, 5) no eixo x",
            passos: [
              { expr: "eixo x é o espelho ⇒ y troca de sinal", explica: "Regra.", status: "neutro" },
              { expr: "C' = (−4, −5)", explica: "x permanece.", status: "ok", professor: "Um erro comum é trocar as duas coordenadas. Trocar x e y ao mesmo tempo equivale a girar 180°, não a refletir." },
              { expr: "Erro comum: escrever (4, −5)", explica: "Isso reflete nos dois eixos.", status: "x" },
            ],
            fatorada: "C'(−4, −5)",
          },
          destaque: "Reflexão mexe em UMA coordenada.",
        },
      },
      {
        texto: "ROTAÇÃO de 180° em torno da origem: os dois sinais trocam.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Girar D(2, −7) em 180° em torno da origem",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Rotação 180° de D(2, −7)",
            passos: [
              { expr: "180° ⇒ (x, y) → (−x, −y)", explica: "Regra.", status: "neutro" },
              { expr: "D' = (−2, 7)", explica: "Ponto simétrico em relação à origem.", status: "ok" },
              { expr: "distância à origem não muda", explica: "É isometria.", status: "ok", professor: "Girar 180° é o mesmo que refletir no eixo x e depois no eixo y. Composições de isometrias continuam sendo isometrias." },
            ],
            fatorada: "D'(−2, 7)",
          },
          destaque: "180° na origem: inverte os dois sinais.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: o triângulo tem vértices A(1, 1), B(4, 1) e C(1, 5). Ele é transladado 2 para a esquerda e 3 para cima. Quais são as novas coordenadas?",
    resposta: "A'(−1, 4), B'(2, 4), C'(−1, 8)",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Translação (−2, +3)",
      passos: [
        { expr: "A(1,1) → (1−2, 1+3) = (−1, 4)", explica: "Aplico em A.", status: "neutro" },
        { expr: "B(4,1) → (4−2, 1+3) = (2, 4)", explica: "Aplico em B.", status: "ok" },
        { expr: "C(1,5) → (1−2, 5+3) = (−1, 8)", explica: "Aplico em C.", status: "ok" },
        { expr: "lado AB: antes 3, depois 3 ✓", explica: "Medidas preservadas.", status: "ok", professor: "Conferir um lado antes e depois é a maneira certa de garantir que a transformação foi isometria e que nenhuma conta escorregou." },
      ],
      fatorada: "A'(−1,4) · B'(2,4) · C'(−1,8)",
      legenda: "Brilha resolve",
    },
    passos: ["Escrevo o vetor de translação (−2, +3).", "Aplico ponto a ponto.", "Confiro se os lados mantiveram o comprimento."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: reflita o ponto P(6, −2) no eixo y.",
    dica: "Espelho no eixo y ⇒ o x troca de sinal.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Reflexão de P(6, −2) no eixo y",
      passos: [
        { expr: "x: 6 → −6", explica: "Troca de sinal.", status: "neutro" },
        { expr: "y: −2 permanece", explica: "Sem mudança.", status: "ok" },
      ],
      fatorada: "P'(−6, −2)",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(−6, −2)" }, { nome: "(6, 2)" }, { nome: "(−6, 2)" }],
      respostaCerta: "(−6, −2)",
      feedbackAcerto: "🎯 Só o x mudou de sinal.",
      feedbackErro: "(6, 2) refletiria no eixo x, e (−6, 2) troca os dois sinais (isso é rotação de 180°). No eixo y muda apenas o x: (−6, −2).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um polígono regular tem soma interna de 900°. Quantos lados ele tem?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(n − 2) · 180 = 900",
      passos: [
        { expr: "n − 2 = 900 ÷ 180", explica: "Divido.", status: "neutro" },
        { expr: "n − 2 = 5", explica: "Triângulos.", status: "ok" },
        { expr: "n = 7", explica: "Heptágono.", status: "ok" },
      ],
      fatorada: "n = 7",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "5" }, { nome: "9" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 900 ÷ 180 = 5, então n = 5 + 2 = 7.",
      feedbackErro: "Depois de dividir 900 por 180 você encontra 5, mas esse é o número de TRIÂNGULOS. Falta somar 2: n = 7.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um artista vai criar um mosaico de calçada. Ele desenha um triângulo com ângulos de 90°, 55° e o terceiro desconhecido, e depois repete a peça deslizando 4 quadradinhos para a direita.",
    problema: "Qual é o terceiro ângulo e o que acontece com os ângulos das peças copiadas?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Mosaico: ângulo que falta + translação",
      passos: [
        { expr: "90 + 55 = 145", explica: "Somo os conhecidos.", status: "neutro" },
        { expr: "x = 180 − 145 = 35°", explica: "Terceiro ângulo.", status: "ok" },
        { expr: "translação (+4, 0)", explica: "Peça copiada desliza.", status: "ok" },
        { expr: "ângulos continuam 90°, 55° e 35°", explica: "Translação é isometria.", status: "ok", professor: "É exatamente por isso que um mosaico encaixa: as cópias mantêm os mesmos ângulos, então as bordas coincidem peça após peça." },
      ],
      fatorada: "35° — e as cópias mantêm todos os ângulos",
      legenda: "Aplicação — mosaico de calçada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o terceiro ângulo:",
      opcoes: [{ nome: "35°" }, { nome: "45°" }, { nome: "125°" }],
      respostaCerta: "35°",
      feedbackAcerto: "🎯 180 − 90 − 55 = 35.",
      feedbackErro: "Some 90 + 55 = 145 e tire de 180: sobram 35°. O valor 125° passaria dos 180° no total." },
  },

  momento09_revisao: {
    pontos: [
      "Translação, reflexão e rotação preservam lados e ângulos (isometrias).",
      "Reflexão no eixo y troca o sinal de x; no eixo x troca o sinal de y.",
      "Rotação de 180° na origem troca os dois sinais.",
      "Ângulos internos do triângulo somam 180°; de um polígono, (n − 2) × 180°.",
      "Soma dos ângulos externos é sempre 360°.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Refletindo (2, 7) no eixo x, obtém-se:", opcoes: ["(2, −7)", "(−2, 7)", "(−2, −7)"], correta: 0, feedbackAcerto: "🎉 O eixo x é o espelho, então o y troca de sinal.", feedbackErro: "No eixo x muda apenas o y: (2, 7) vira (2, −7). Trocar o x seria reflexão no eixo y." },
      { pergunta: "Transladando (−3, 0) em 4 para a direita, obtém-se:", opcoes: ["(1, 0)", "(−7, 0)", "(−3, 4)"], correta: 0, feedbackAcerto: "🎉 −3 + 4 = 1.", feedbackErro: "Andar para a direita SOMA em x: −3 + 4 = 1, mantendo y = 0." },
      { pergunta: "Qual transformação NÃO é isometria?", opcoes: ["ampliação", "rotação", "reflexão"], correta: 0, feedbackAcerto: "🎉 Ampliar muda o tamanho.", feedbackErro: "Rotação e reflexão preservam as medidas. A ampliação muda a escala, por isso não é isometria." },
      { pergunta: "Rotação de 180° na origem leva (5, −1) para:", opcoes: ["(−5, 1)", "(5, 1)", "(1, 5)"], correta: 0, feedbackAcerto: "🎉 Os dois sinais trocam.", feedbackErro: "Em 180° na origem, (x, y) vira (−x, −y): (5, −1) vai para (−5, 1)." },
      { pergunta: "Um polígono regular tem interno de 144°. Quantos lados?", opcoes: ["10", "8", "12"], correta: 0, feedbackAcerto: "🎉 Externo 36° e 360 ÷ 36 = 10.", feedbackErro: "Ache o externo: 180 − 144 = 36°. Depois 360 ÷ 36 = 10 lados." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O mosaico da família",
    materiais: ["Papel quadriculado", "Lápis de cor", "Régua"],
    passos: [
      "Desenhe uma peça geométrica simples no quadriculado.",
      "Repita a peça três vezes: uma transladada, uma refletida e uma girada.",
      "Explique para a família por que o desenho encaixa sem sobrar espaço.",
    ],
    registro: "📸 Foto do mosaico com as três transformações identificadas.",
  },
  recompensa: { xp: 260, moedas: 140, medalha: "Mestre da Geometria" },
};
