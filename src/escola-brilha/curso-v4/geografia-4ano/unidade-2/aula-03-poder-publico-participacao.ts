import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula03 = criarAulaGeografia({
  slug: "aula-03-poder-publico-participacao",
  titulo: "Poder Público e Participação Social",
  icone: "🏛️",
  bncc: "EF04GE03",
  tema: "funções do poder público municipal e participação social",
  conceito: "Prefeitura e Câmara Municipal exercem funções diferentes na organização do município.",
  explicacao:
    "A prefeitura administra serviços e executa políticas; vereadores discutem e aprovam leis municipais. Moradores participam por conselhos, audiências e solicitações.",
  exemplo: "Uma audiência pública permite discutir uma praça ou linha de ônibus com a comunidade.",
  vocabulario: ["prefeitura", "Câmara Municipal", "serviço público", "participação"],
  etapas: [
    "Identificar o problema",
    "Descobrir o responsável",
    "Escolher a participação",
    "Acompanhar a resposta",
  ],
  missao: "Escolha um problema do bairro e indique qual órgão pode ajudar.",
  questoes: [
    {
      pergunta: "Quem administra serviços municipais?",
      correta: "A prefeitura",
      opcoes: ["A prefeitura", "Outro país", "Uma loja", "O clima"],
    },
    {
      pergunta: "O que fazem vereadores?",
      correta: "Discutem e aprovam leis municipais",
      opcoes: [
        "Discutem e aprovam leis municipais",
        "Preveem o tempo",
        "Dirigem todas as escolas",
        "Produzem alimentos",
      ],
    },
    {
      pergunta: "Como moradores podem participar?",
      correta: "Em conselhos e audiências",
      opcoes: [
        "Em conselhos e audiências",
        "Sem dialogar",
        "Escondendo problemas",
        "Ignorando decisões",
      ],
    },
  ],
});
