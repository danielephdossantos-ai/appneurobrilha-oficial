import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-solo-agua",
  titulo: "Solo e Água: Usos e Cuidados",
  icone: "💧",
  bncc: ["EF02GE11"],
  tema: "solo e água na cidade e no campo",
  conceito:
    "Solo e água sustentam a vida e são usados para plantar, criar animais, abastecer casas, produzir e realizar atividades cotidianas.",
  explicacao:
    "Desperdício, lixo, esgoto sem tratamento, desmatamento e uso inadequado do solo podem causar poluição, erosão e falta de água. Cuidado e planejamento reduzem impactos.",
  exemplo: "Proteger a vegetação próxima a rios ajuda a segurar o solo e manter a água mais limpa.",
  vocabulario: ["solo", "água", "impacto"],
  etapas: ["Identificar o uso", "Observar a origem", "Reconhecer o impacto", "Propor um cuidado"],
  missao: "Investigue um uso da água e do solo e proponha um cuidado para cada um.",
  questoes: [
    {
      pergunta: "Por que o solo é importante?",
      opcoes: [
        "Sustenta plantas e atividades humanas",
        "Serve apenas para pisar",
        "Não participa da vida",
        "Existe só no campo",
      ],
      correta: 0,
      explicacao: "O solo tem usos e funções essenciais.",
    },
    {
      pergunta: "Qual ação protege a água?",
      opcoes: [
        "Tratar esgoto e evitar lixo nos rios",
        "Despejar óleo",
        "Desmatar margens",
        "Deixar torneira aberta",
      ],
      correta: 0,
      explicacao: "Prevenção reduz contaminação e desperdício.",
    },
    {
      pergunta: "Cidade e campo usam água?",
      opcoes: ["Sim, de formas variadas", "Somente o campo", "Somente a cidade", "Nenhum dos dois"],
      correta: 0,
      explicacao: "Pessoas e atividades dependem da água em ambos.",
    },
  ],
});
