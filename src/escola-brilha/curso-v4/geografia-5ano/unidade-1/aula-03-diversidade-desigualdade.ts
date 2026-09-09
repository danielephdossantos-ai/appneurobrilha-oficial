import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula03 = criarAulaGeografia({
  slug: "aula-03-diversidade-desigualdade",
  titulo: "Diversidade e Desigualdade nos Territórios",
  icone: "⚖️",
  bncc: "EF05GE02",
  tema: "diferenças étnico-raciais, culturais e desigualdades",
  conceito:
    "A população brasileira é diversa, mas grupos diferentes nem sempre têm o mesmo acesso a direitos e serviços.",
  explicacao:
    "Dados sobre renda, educação, moradia e saúde ajudam a reconhecer desigualdades sem transformar diferenças culturais em defeitos.",
  exemplo:
    "Dois bairros podem ter populações diversas e acesso desigual a saneamento e transporte.",
  vocabulario: ["diversidade", "desigualdade", "território", "direito"],
  etapas: ["Observar os dados", "Identificar os grupos", "Comparar o acesso", "Propor igualdade"],
  missao: "Compare dois territórios usando um indicador social.",
  questoes: [
    {
      pergunta: "Diversidade significa desigualdade?",
      correta: "Não, diferença cultural não é inferioridade",
      opcoes: [
        "Não, diferença cultural não é inferioridade",
        "Sim, sempre",
        "Só nas cidades",
        "Apenas no campo",
      ],
    },
    {
      pergunta: "Qual dado revela desigualdade?",
      correta: "Acesso a saneamento",
      opcoes: ["Acesso a saneamento", "Cor do mapa", "Nome da rua", "Direção do vento"],
    },
    {
      pergunta: "Como comparar territórios?",
      correta: "Usando dados e respeito",
      opcoes: [
        "Usando dados e respeito",
        "Criando estereótipos",
        "Sem evidências",
        "Culpando grupos",
      ],
    },
  ],
});
