import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u6-06-missao",
  titulo: "Missão — Mestre da Geometria do 8º",
  iconeTrilha: "🏅",
  bncc: ["EF08MA14", "EF08MA15", "EF08MA17", "EF08MA18"],
  duracaoMin: 25,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Kit completo",
    historia:
      "{NOME}, hoje TODAS as ferramentas da geometria juntas.",
  },
  momento02_exploracao: {
    instrucao: "Kit.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas",
        cabecalhos: ["Situação", "Ferramenta"],
        linhas: [
          { rotulo: "1", valores: ["2 paralelas cortadas", "Correspondentes/alternos/colaterais"] },
          { rotulo: "2", valores: ["Polígono", "(n−2)·180°"] },
          { rotulo: "3", valores: ["Triângulos idênticos", "LLL, LAL, ALA"] },
          { rotulo: "4", valores: ["Equidistância", "Mediatriz / bissetriz"] },
          { rotulo: "5", valores: ["Movimento", "Translação / reflexão / rotação"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher?",
    pista: "Leia o enunciado com atenção.",
    revelacao: "Palavras-chave levam à ferramenta certa.",
  },
  momento04_explicacao: {
    titulo: "Aplicando",
    etapas: [
      {
        texto: "Combos.",
        exemploReal: {
          contexto: "Duas paralelas + polígono no meio.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "O que fazer"],
            linhas: [
              { rotulo: "1", valores: ["ângulos da transversal", "correspondentes"] },
              { rotulo: "2", valores: ["soma do polígono", "(n−2)·180°"] },
            ],
          },
          destaque: "Uma pergunta pode combinar 2 tópicos.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Cada ângulo interno de um pentágono regular:",
    resposta: "108°",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["S = (5−2)·180°", "540°"] },
        { rotulo: "2", valores: ["÷5", "108°"] },
      ],
    },
    passos: ["S = 540°.", "540/5 = 108°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Correspondente de 45°:",
    dica: "Iguais.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45°" }, { nome: "135°" }, { nome: "90°" }],
      respostaCerta: "45°",
      feedbackAcerto: "🎯",
      feedbackErro: "Iguais.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Δ com 3 lados iguais a outro Δ. Caso:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "LLL" }, { nome: "LAL" }, { nome: "ALA" }],
      respostaCerta: "LLL",
      feedbackAcerto: "🎯",
      feedbackErro: "3 lados.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Um jardineiro quer plantar uma árvore equidistante de 2 postes A e B.",
    problema: "Onde?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Mediatriz de AB" }, { nome: "Bissetriz" }, { nome: "Em A" }],
      respostaCerta: "Mediatriz de AB",
      feedbackAcerto: "🎯",
      feedbackErro: "PA=PB.",
    },
  },
  momento09_revisao: {
    pontos: ["Palavras-chave levam à ferramenta.", "Isometrias preservam tamanho.", "(n−2)·180° pra polígonos."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Alterno interno de 55°:", opcoes: ["55°", "125°", "35°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Iguais." },
      { pergunta: "Hexágono reg. int:", opcoes: ["120°", "60°", "108°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "720/6." },
      { pergunta: "Bissetriz divide:", opcoes: ["2 iguais", "3 iguais", "meia"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2." },
      { pergunta: "(x,y) refletido em x:", opcoes: ["(x,−y)", "(−x,y)", "(y,x)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "y muda." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Geometria",
    materiais: ["Papel"],
    passos: ["Diploma: 'Mestre da Geometria do 8º'.", "Desenhe 3 figuras aplicando as ferramentas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre da Geometria 8º" },
};
