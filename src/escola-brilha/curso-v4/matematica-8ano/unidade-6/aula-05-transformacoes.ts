import type { AulaV4 } from "../../types";

export const aula05_transformacoes: AulaV4 = {
  slug: "u6-05-transformacoes",
  titulo: "Translação, reflexão e rotação",
  iconeTrilha: "🔄",
  bncc: ["EF08MA18"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Mover sem deformar",
    historia:
      "{NOME}, você pode DESLIZAR uma figura (translação), ESPELHAR ela (reflexão) ou GIRAR (rotação). Nos 3 casos ela continua exatamente do mesmo tamanho e forma. Por isso são chamadas ISOMETRIAS ('iso' = igual, 'metria' = medida).",
  },
  momento02_exploracao: {
    instrucao: "As 3 isometrias:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Comparação",
        cabecalhos: ["Nome", "Como move", "Ferramenta"],
        linhas: [
          { rotulo: "Translação", valores: ["Desliza reto", "Vetor (a, b)"] },
          { rotulo: "Reflexão", valores: ["Espelha", "Eixo (x, y ou reta)"] },
          { rotulo: "Rotação", valores: ["Gira em volta de um ponto", "Centro + ângulo"] },
        ],
      },
      { tipo: "texto", texto: "Nenhuma muda tamanho nem forma. Só a POSIÇÃO/ORIENTAÇÃO.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que essas 3 transformações têm em comum?",
    pista: "Meça os lados e os ângulos antes e depois.",
    revelacao: "Todos os lados e todos os ângulos se preservam. Por isso são isometrias.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Figura original vs figura transformada",
      passos: [
        { expr: "Comprimentos dos lados", explica: "iguais.", status: "ok" },
        { expr: "Medidas dos ângulos", explica: "iguais.", status: "ok" },
        { expr: "Área", explica: "igual.", status: "ok" },
        { expr: "Posição / orientação", explica: "podem mudar.", status: "neutro" },
      ],
      fatorada: "Preservam tudo, menos posição.",
    },
  },
  momento04_explicacao: {
    titulo: "Regras em coordenadas",
    etapas: [
      {
        texto: "TRANSLAÇÃO — soma o vetor a cada ponto.",
        exemploReal: {
          contexto: "Ponto A(1, 2). Vetor v = (3, 0). Achar A'.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A(1, 2), vetor (3, 0)",
            passos: [
              { expr: "Regra: (x, y) → (x + a, y + b)", explica: "Soma coordenada a coordenada.", status: "neutro" },
              { expr: "x' = 1 + 3 = 4", explica: "", status: "neutro" },
              { expr: "y' = 2 + 0 = 2", explica: "", status: "neutro" },
              { expr: "A' = (4, 2)", explica: "", status: "ok",
                professor: "Translação preserva orientação: se o triângulo original é 'em pé', o transladado também é." },
            ],
            fatorada: "A' = (4, 2)",
          },
          destaque: "Soma o vetor.",
        },
      },
      {
        texto: "REFLEXÃO no eixo x — troca o sinal do y.",
        exemploReal: {
          contexto: "A(3, 5). Refletir no eixo x.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A(3, 5), eixo x",
            passos: [
              { expr: "Regra: (x, y) → (x, −y)", explica: "Só y muda de sinal.", status: "neutro" },
              { expr: "x' = 3", explica: "Fica igual.", status: "neutro" },
              { expr: "y' = −5", explica: "Sinal trocado.", status: "neutro" },
              { expr: "A' = (3, −5)", explica: "", status: "ok",
                professor: "Reflexão INVERTE a orientação: um triângulo 'anti-horário' vira 'horário'. É como olhar no espelho: sua mão direita vira a esquerda da imagem." },
            ],
            fatorada: "A' = (3, −5)",
          },
          destaque: "Reflexão em x: (x, y) → (x, −y).",
        },
      },
      {
        texto: "ROTAÇÃO de 90° anti-horário na origem — (x, y) → (−y, x).",
        exemploReal: {
          contexto: "A(2, 3). Girar 90° anti-horário na origem.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A(2, 3), rotação 90°",
            passos: [
              { expr: "Regra: (x, y) → (−y, x)", explica: "Troca as coordenadas e inverte o sinal do 1º.", status: "neutro" },
              { expr: "novo x = −y = −3", explica: "", status: "neutro" },
              { expr: "novo y = x = 2", explica: "", status: "neutro" },
              { expr: "A' = (−3, 2)", explica: "", status: "ok",
                professor: "Regra para 180°: (x, y) → (−x, −y). Para 270° (ou −90°): (x, y) → (y, −x). Tudo em torno da origem." },
            ],
            fatorada: "A' = (−3, 2)",
          },
          destaque: "90° anti-horário: (x, y) → (−y, x).",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: transladar A(2, 1) pelo vetor v = (4, 3).",
    resposta: "A' = (6, 4).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A(2, 1) + v(4, 3)",
      passos: [
        { expr: "(x, y) → (x + 4, y + 3)", explica: "Regra da translação.", status: "neutro" },
        { expr: "x' = 2 + 4 = 6", explica: "", status: "neutro" },
        { expr: "y' = 1 + 3 = 4", explica: "", status: "neutro" },
        { expr: "A' = (6, 4)", explica: "", status: "ok" },
      ],
      fatorada: "A' = (6, 4)",
    },
    passos: ["Soma coordenada a coordenada."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: refletir A(4, 7) no eixo x.",
    dica: "Regra: (x, y) → (x, −y).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A(4, 7), eixo x",
      passos: [
        { expr: "x fica: 4", explica: "", status: "neutro" },
        { expr: "y muda sinal: −7", explica: "", status: "neutro" },
        { expr: "A' = (4, −7)", explica: "", status: "ok" },
      ],
      fatorada: "A' = (4, −7)",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A' =",
      opcoes: [{ nome: "(4, −7)" }, { nome: "(−4, 7)" }, { nome: "(−4, −7)" }],
      respostaCerta: "(4, −7)",
      feedbackAcerto: "🎯 Só y muda.",
      feedbackErro: "Eixo x: só y muda de sinal.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Girar A(1, 2) 90° anti-horário na origem.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A(1, 2), 90° na origem",
      passos: [
        { expr: "(x, y) → (−y, x)", explica: "Regra.", status: "neutro" },
        { expr: "novo x = −2", explica: "", status: "neutro" },
        { expr: "novo y = 1", explica: "", status: "neutro" },
        { expr: "A' = (−2, 1)", explica: "", status: "ok" },
      ],
      fatorada: "A' = (−2, 1)",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A' =",
      opcoes: [{ nome: "(−2, 1)" }, { nome: "(2, −1)" }, { nome: "(1, −2)" }],
      respostaCerta: "(−2, 1)",
      feedbackAcerto: "🎯",
      feedbackErro: "(x, y) → (−y, x).",
    },
  },
  momento08_aplicacao: {
    contexto: "Na vida real: um artista quer criar uma estamparia repetindo um triângulo, sem deformar a figura, mas gerando simetria.",
    problema: "Qual transformação garante figuras IDÊNTICAS lado a lado?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Estamparia simétrica",
      passos: [
        { expr: "Precisa: mesmo tamanho e forma", explica: "Isometria.", status: "neutro" },
        { expr: "Precisa: simetria", explica: "Espelho.", status: "neutro" },
        { expr: "→ Reflexão", explica: "", status: "ok",
          professor: "Também dá para usar translação (padrão em faixa) ou rotação (mandalas). Ampliação MUDA tamanho — não é isometria." },
      ],
      fatorada: "Reflexão.",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Transformação:",
      opcoes: [{ nome: "Reflexão" }, { nome: "Ampliação" }, { nome: "Recorte" }],
      respostaCerta: "Reflexão",
      feedbackAcerto: "🎯 Isometria.",
      feedbackErro: "Ampliação muda tamanho.",
    },
  },
  momento09_revisao: {
    pontos: [
      "3 isometrias: translação, reflexão, rotação.",
      "Todas preservam tamanho e forma.",
      "Translação: (x, y) → (x+a, y+b).",
      "Reflexão em x: (x, y) → (x, −y). Em y: (−x, y).",
      "Rotação 90° na origem: (x, y) → (−y, x).",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Translação preserva tamanho?", opcoes: ["Sim", "Não", "Depende"], correta: 0, feedbackAcerto: "🎉 É isometria.", feedbackErro: "Preserva." },
      { pergunta: "Reflexão no eixo y: (x, y) →", opcoes: ["(−x, y)", "(x, −y)", "(−x, −y)"], correta: 0, feedbackAcerto: "🎉 x muda.", feedbackErro: "Eixo y: x muda de sinal." },
      { pergunta: "Rotação 180° na origem:", opcoes: ["(−x, −y)", "(y, x)", "(−y, x)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "180°: dois sinais trocados." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Padrões",
    materiais: ["Papel quadriculado"],
    passos: ["Desenhe um triângulo pequeno.", "Faça 3 cópias: uma transladada, uma refletida, uma rotacionada.", "Mostre à família cada transformação."],
    registro: "📸 Foto das 4 figuras.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
