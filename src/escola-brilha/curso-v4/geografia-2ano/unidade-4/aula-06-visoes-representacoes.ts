import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula06 = criarAulaGeografia({
  slug: "aula-06-visoes-representacoes",
  titulo: "Objetos Vistos de Cima e de Lado",
  icone: "👁️",
  bncc: ["EF02GE09"],
  tema: "visões vertical e oblíqua",
  conceito:
    "Um objeto ou lugar muda de aparência conforme o ponto de vista. A visão vertical observa de cima; a oblíqua observa de cima e de lado.",
  explicacao:
    "Mapas usam frequentemente visão vertical. Fotografias oblíquas mostram frente, lados e altura, ajudando a reconhecer volumes e paisagens.",
  exemplo: "Uma mesa vista de cima parece um retângulo; vista de lado, aparecem as pernas.",
  vocabulario: ["visão vertical", "visão oblíqua", "ponto de vista"],
  etapas: ["Escolher o objeto", "Mudar a posição", "Desenhar as visões", "Comparar formas"],
  missao: "Desenhe o mesmo objeto visto de cima e de lado.",
  questoes: [
    {
      pergunta: "Como é a visão vertical?",
      opcoes: ["De cima para baixo", "Somente de frente", "Por baixo", "De olhos fechados"],
      correta: 0,
      explicacao: "A visão vertical é usada em muitos mapas.",
    },
    {
      pergunta: "O que aparece na visão oblíqua?",
      opcoes: ["Topo e lados", "Apenas o topo", "Nada do objeto", "Somente a sombra"],
      correta: 0,
      explicacao: "O ângulo oblíquo permite perceber volume.",
    },
    {
      pergunta: "Por que desenhos mudam?",
      opcoes: [
        "Porque o ponto de vista mudou",
        "Porque o objeto desapareceu",
        "Porque mapas são errados",
        "Porque não existe posição",
      ],
      correta: 0,
      explicacao: "A posição do observador altera a aparência.",
    },
  ],
});
