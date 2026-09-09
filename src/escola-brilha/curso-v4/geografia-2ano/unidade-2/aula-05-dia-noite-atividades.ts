import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-dia-noite-atividades",
  titulo: "Atividades do Dia e da Noite",
  icone: "🌗",
  bncc: ["EF02GE06"],
  tema: "atividades sociais em diferentes períodos do dia",
  conceito:
    "Dia e noite influenciam horários de estudo, trabalho, descanso e lazer, mas algumas atividades acontecem nos dois períodos.",
  explicacao:
    "Escolas e comércios costumam funcionar em certos horários; hospitais, transportes e equipes de segurança podem ter turnos noturnos. Rotinas variam entre famílias e lugares.",
  exemplo:
    "Uma padaria pode preparar pão antes do amanhecer, enquanto uma escola normalmente recebe alunos durante o dia.",
  vocabulario: ["dia", "noite", "turno"],
  etapas: [
    "Identificar a atividade",
    "Observar o horário",
    "Explicar a necessidade",
    "Comparar rotinas",
  ],
  missao: "Monte uma linha do tempo com atividades do dia e da noite.",
  questoes: [
    {
      pergunta: "Qual serviço pode funcionar dia e noite?",
      opcoes: ["Hospital", "Somente escola", "Parque fechado", "Feira semanal"],
      correta: 0,
      explicacao: "Atendimento de saúde pode exigir turnos contínuos.",
    },
    {
      pergunta: "Todas as famílias têm a mesma rotina?",
      opcoes: ["Não, horários podem variar", "Sim", "Só no domingo", "A noite não tem atividades"],
      correta: 0,
      explicacao: "Trabalho, estudo e necessidades produzem rotinas diferentes.",
    },
    {
      pergunta: "O que é turno?",
      opcoes: [
        "Período organizado de atividade",
        "Um tipo de rua",
        "Um mapa",
        "Uma estação do ano",
      ],
      correta: 0,
      explicacao: "Turnos organizam horários de trabalho e estudo.",
    },
  ],
});
