import type { AulaV4 } from "../../types";

export const aula05_transformacoes: AulaV4 = {
  slug: "u6-05-transformacoes",
  titulo: "Translação, reflexão e rotação",
  iconeTrilha: "🔄",
  bncc: ["EF08MA18"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Movimentar sem deformar",
    historia:
      "{NOME}, uma figura pode DESLIZAR (translação), ser ESPELHADA (reflexão) ou GIRADA (rotação) — e continua igual em forma e tamanho.",
  },
  momento02_exploracao: {
    instrucao: "As 3 isometrias.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "As transformações",
        cabecalhos: ["Nome", "O que faz"],
        linhas: [
          { rotulo: "T", valores: ["Translação", "desliza (vetor)"] },
          { rotulo: "R", valores: ["Reflexão", "espelho (eixo)"] },
          { rotulo: "G", valores: ["Rotação", "gira (centro, ângulo)"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que muda em cada uma?",
    pista: "Nenhuma muda TAMANHO ou FORMA.",
    revelacao: "São isometrias.",
  },
  momento04_explicacao: {
    titulo: "Detalhes",
    etapas: [
      {
        texto: "Translação: soma o vetor a todos os pontos.",
        exemploReal: {
          contexto: "Ponto A(1,2), vetor (3,0)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "A", valores: ["(1,2)"] },
              { rotulo: "+v", valores: ["+(3,0)"] },
              { rotulo: "A'", valores: ["(4,2)"] },
            ],
          },
          destaque: "A → A'.",
        },
      },
      {
        texto: "Reflexão no eixo x: (x,y) → (x,−y).",
        exemploReal: {
          contexto: "A(3,5) → A'(3,−5).",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Ponto", "Refletido"],
            linhas: [
              { rotulo: "A", valores: ["(3,5)"] },
              { rotulo: "A'", valores: ["(3,−5)"] },
            ],
          },
          destaque: "Y muda de sinal.",
        },
      },
      {
        texto: "Rotação 90° em torno da origem: (x,y) → (−y,x).",
        exemploReal: {
          contexto: "A(2,3) → A'(−3,2).",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Ponto", "Girado"],
            linhas: [
              { rotulo: "A", valores: ["(2,3)"] },
              { rotulo: "A'", valores: ["(−3,2)"] },
            ],
          },
          destaque: "Regra do 90° anti-horário.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Translade A(2,1) pelo vetor (4,3).",
    resposta: "A'(6,4)",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["", "x", "y"],
      linhas: [
        { rotulo: "A", valores: ["2", "1"] },
        { rotulo: "+v", valores: ["4", "3"] },
        { rotulo: "A'", valores: ["6", "4"] },
      ],
    },
    passos: ["Some coordenadas."],
  },
  momento06_praticaGuiada: {
    enunciado: "Reflita A(4,7) no eixo x.",
    dica: "y muda de sinal.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A' =",
      opcoes: [{ nome: "(4,−7)" }, { nome: "(−4,7)" }, { nome: "(−4,−7)" }],
      respostaCerta: "(4,−7)",
      feedbackAcerto: "🎯",
      feedbackErro: "(x,y)→(x,−y).",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Gire A(1,2) 90° anti-horário na origem.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A' =",
      opcoes: [{ nome: "(−2,1)" }, { nome: "(2,−1)" }, { nome: "(1,−2)" }],
      respostaCerta: "(−2,1)",
      feedbackAcerto: "🎯 (x,y)→(−y,x).",
      feedbackErro: "Fórmula da rotação.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um artista quer criar um padrão simétrico com um triângulo.",
    problema: "Que transformação garante figura idêntica ao lado?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Reflexão" }, { nome: "Ampliação" }, { nome: "Recorte" }],
      respostaCerta: "Reflexão",
      feedbackAcerto: "🎯 Isometria.",
      feedbackErro: "Ampliação muda tamanho.",
    },
  },
  momento09_revisao: {
    pontos: ["3 isometrias.", "Não mudam tamanho.", "Cada uma tem uma regra em coordenadas."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Translação preserva tamanho?", opcoes: ["Sim", "Não", "Depende"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Isometria." },
      { pergunta: "Reflexão no eixo y: (x,y)→", opcoes: ["(−x,y)", "(x,−y)", "(−x,−y)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Muda x." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Padrões",
    materiais: ["Papel"],
    passos: ["Desenhe um triângulo.", "Faça translação, reflexão e rotação dele."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
