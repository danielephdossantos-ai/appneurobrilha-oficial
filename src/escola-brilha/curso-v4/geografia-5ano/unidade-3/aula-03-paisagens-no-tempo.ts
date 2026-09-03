import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula03 = criarAulaGeografia({
  slug: "aula-03-paisagens-no-tempo",
  titulo: "Paisagens Urbanas no Tempo",
  icone: "🛰️",
  bncc: "EF05GE08",
  tema: "transformações das paisagens urbanas",
  conceito: "Fotografias, imagens aéreas e de satélite registram mudanças nas cidades.",
  explicacao:
    "Comparar imagens do mesmo lugar em datas diferentes revela expansão urbana, novas vias, redução de vegetação e outras transformações.",
  exemplo: "Uma fotografia antiga pode mostrar terreno onde hoje existe um bairro.",
  vocabulario: ["paisagem", "imagem aérea", "satélite", "transformação"],
  etapas: ["Confirmar o lugar", "Ordenar as datas", "Localizar mudanças", "Explicar as causas"],
  missao: "Compare duas imagens do mesmo lugar em épocas diferentes.",
  questoes: [
    {
      pergunta: "Como observar mudança urbana?",
      correta: "Comparando imagens de datas diferentes",
      opcoes: [
        "Comparando imagens de datas diferentes",
        "Olhando uma só cor",
        "Sem saber o lugar",
        "Ignorando datas",
      ],
    },
    {
      pergunta: "Imagem de satélite mostra?",
      correta: "A superfície vista de cima",
      opcoes: ["A superfície vista de cima", "Somente o subsolo", "Apenas pessoas", "Só o clima"],
    },
    {
      pergunta: "O que deve permanecer igual na comparação?",
      correta: "O lugar observado",
      opcoes: ["O lugar observado", "A data", "A estação", "A legenda"],
    },
  ],
});
