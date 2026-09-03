import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-mapas-lugares",
  titulo: "Desenhando os Lugares de Vivência",
  icone: "🗺️",
  bncc: ["EF02GE08"],
  tema: "representações dos lugares",
  conceito: "Desenhos, mapas mentais e maquetes representam elementos de um lugar e suas posições.",
  explicacao:
    "Uma representação seleciona elementos importantes, usa símbolos e organiza caminhos. Ela não precisa copiar cada detalhe, mas deve permitir reconhecer o espaço representado.",
  exemplo: "Um mapa da sala pode mostrar porta, mesas e quadro com símbolos vistos de cima.",
  vocabulario: ["representação", "símbolo", "mapa mental"],
  etapas: ["Observar o lugar", "Escolher elementos", "Criar símbolos", "Organizar posições"],
  missao: "Desenhe um mapa mental da sala ou do caminho até um lugar conhecido.",
  questoes: [
    {
      pergunta: "Para que serve um mapa mental?",
      opcoes: [
        "Representar um lugar conhecido",
        "Medir temperatura",
        "Contar uma história sem espaço",
        "Substituir o lugar",
      ],
      correta: 0,
      explicacao: "O mapa mental registra como organizamos o espaço.",
    },
    {
      pergunta: "O que um símbolo faz no mapa?",
      opcoes: [
        "Representa um elemento",
        "Apaga caminhos",
        "Muda o tamanho real",
        "Esconde todos os lugares",
      ],
      correta: 0,
      explicacao: "Símbolos comunicam informações espaciais.",
    },
    {
      pergunta: "Qual etapa vem primeiro?",
      opcoes: [
        "Observar o lugar",
        "Colorir sem olhar",
        "Inventar a legenda depois",
        "Apagar referências",
      ],
      correta: 0,
      explicacao: "A observação orienta a representação.",
    },
  ],
});
