import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-misturas-homogeneas-heterogeneas", titulo: "Misturas Homogêneas e Heterogêneas", icone: "🧪", bncc: ["EF06CI01"],
  tema: "classificação de misturas", conceito: "Mistura homogênea apresenta uma fase visível; mistura heterogênea apresenta duas ou mais fases visíveis.",
  explicacao: "A classificação depende do aspecto do sistema observado, não apenas dos materiais usados. Água com sal dissolvido parece uniforme; água e óleo formam camadas; água e areia apresenta partículas e líquido.",
  exemplo: "Depois de misturar e aguardar, observe quantas regiões visualmente diferentes aparecem e registre a classificação.",
  vocabulario: ["mistura", "fase", "homogênea"], etapas: ["Identificar materiais", "Misturar com segurança", "Observar as fases", "Classificar e justificar"],
  questoes: [
    { pergunta: "Água com sal totalmente dissolvido é:", opcoes: ["Homogênea", "Heterogênea", "Substância pura", "Transformação química"], correta: 0, explicacao: "O sistema apresenta uma única fase visível." },
    { pergunta: "Água e óleo formam:", opcoes: ["Mistura heterogênea", "Mistura homogênea", "Um novo elemento", "Uma única substância"], correta: 0, explicacao: "As camadas correspondem a fases visíveis diferentes." },
    { pergunta: "Qual observação ajuda a classificar uma mistura?", opcoes: ["Número de fases visíveis", "Nome do recipiente", "Cor da mesa", "Horário do experimento"], correta: 0, explicacao: "A quantidade de fases visíveis orienta a classificação." },
  ], missao: "Classifique água e sal, água e óleo e água e areia usando evidências visuais.",
});
