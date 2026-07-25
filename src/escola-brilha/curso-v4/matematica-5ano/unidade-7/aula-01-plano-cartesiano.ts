import type { AulaV4 } from "../../types";

export const aula01_planoCartesiano: AulaV4 = {
  slug: "u7-01-plano-cartesiano",
  titulo: "Plano cartesiano: coordenadas",
  iconeTrilha: "🗺️",
  bncc: ["EF05MA14"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "O mapa do Império",
    historia: "{NOME}, cada ponto no plano tem 2 endereços: X (para a direita) e Y (para cima). Assim ninguém se perde.",
  },
  momento02_exploracao: {
    instrucao: "Eixos.",
    cenas: [
      { tipo: "texto", texto: "Eixo X: horizontal. Eixo Y: vertical.", destaque: true },
      { tipo: "texto", texto: "Um ponto é escrito (x, y). Sempre X primeiro, Y depois." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Onde está o ponto (3, 2)?",
    pista: "3 pra direita, 2 pra cima.",
    revelacao: "Anda 3 no X, depois sobe 2 no Y.",
  },
  momento04_explicacao: {
    titulo: "Localizar",
    etapas: [
      { texto: "(0,0) = origem. (5,0) = 5 no eixo X. (0,4) = 4 no eixo Y." },
      { texto: "Para desenhar uma figura, marque cada vértice pelo par (x,y)." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Vértices do quadrado: (0,0), (3,0), (3,3), (0,3).",
    resposta: "Quadrado de lado 3",
    passos: ["Marca 4 pontos.", "Liga em ordem.", "É um quadrado."],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual ponto está mais alto: A(2,5) ou B(4,3)?",
    dica: "O Y decide.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "A" }, { nome: "B" }, { nome: "iguais" }],
      respostaCerta: "A",
      feedbackAcerto: "🎯 5 > 3.",
      feedbackErro: "Y de A = 5, maior.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Ponto simétrico de (2,4) no eixo Y (x vira −x, se estender).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha (aceite valores positivos): reflete pra:",
      opcoes: [{ nome: "(−2, 4)" }, { nome: "(2, −4)" }, { nome: "(4, 2)" }],
      respostaCerta: "(−2, 4)",
      feedbackAcerto: "🎯",
      feedbackErro: "Reflexão no Y muda o X de sinal.",
    },
  },
  momento08_aplicacao: {
    contexto: "Batalha naval: barco em (3,4). Míssil em (3,2).",
    problema: "Distância vertical?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "3" }, { nome: "4" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 |4−2|=2.",
      feedbackErro: "|4−2|=2.",
    },
  },
  momento09_revisao: {
    pontos: ["(x, y): x primeiro, y depois.", "Direita e cima = positivo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Origem é:", opcoes: ["(0,0)", "(1,1)", "(0,1)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(0,0)." },
      { pergunta: "(5,0) fica sobre:", opcoes: ["eixo X", "eixo Y", "origem"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Eixo X." },
      { pergunta: "Ponto mais à direita: (2,3) ou (5,1)?", opcoes: ["(5,1)", "(2,3)", "iguais"], correta: 0, feedbackAcerto: "🎉 x=5.", feedbackErro: "(5,1)." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mapa de casa",
    materiais: ["Papel quadriculado"],
    passos: ["Desenhe eixos.", "Marque 5 pontos com coordenadas.", "Ligue formando uma figura."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
