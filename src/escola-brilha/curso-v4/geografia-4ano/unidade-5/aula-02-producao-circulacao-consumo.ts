import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-producao-circulacao-consumo",
  titulo: "Da Produção ao Consumo",
  icone: "📦",
  bncc: "EF04GE08",
  tema: "produção, circulação e consumo",
  conceito: "Produtos percorrem etapas desde a matéria-prima até o consumo.",
  explicacao:
    "Produção obtém ou transforma materiais; circulação transporta e comercializa; consumo atende necessidades e escolhas. Cada etapa envolve trabalhadores e lugares.",
  exemplo: "O algodão é cultivado, transformado em tecido, transportado e vendido como roupa.",
  vocabulario: ["produção", "circulação", "consumo", "matéria-prima"],
  etapas: ["Obter a matéria-prima", "Transformar", "Transportar e vender", "Consumir e descartar"],
  missao: "Monte a cadeia de um produto usado em casa.",
  questoes: [
    {
      pergunta: "O que vem antes da fabricação?",
      correta: "A obtenção da matéria-prima",
      opcoes: ["A obtenção da matéria-prima", "O descarte", "A propaganda final", "O consumo"],
    },
    {
      pergunta: "O transporte pertence a qual etapa?",
      correta: "Circulação",
      opcoes: ["Circulação", "Clima", "Relevo", "Cultura"],
    },
    {
      pergunta: "Quem participa da cadeia produtiva?",
      correta: "Trabalhadores de diferentes etapas",
      opcoes: [
        "Trabalhadores de diferentes etapas",
        "Ninguém",
        "Somente consumidores",
        "Apenas máquinas",
      ],
    },
  ],
});
