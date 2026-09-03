import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula06 = criarAulaConsolidacao({
  slug: "lp8-u3-a06-conectivos",
  titulo: "Conectivos e relações de sentido",
  icone: "🔗",
  bncc: ["EF08LP12", "EF89LP29"],
  tema: "conectivos",
  conceito: "palavras e expressões que estabelecem relações de sentido",
  explicacao: "Conectivos ligam ideias e indicam relações como causa, consequência, oposição, condição e conclusão. A escolha do conectivo deve corresponder ao sentido que o texto pretende construir.",
  exemplo: "A equipe revisou o texto; por isso, a mensagem ficou mais clara.",
  exemploAnalisado: "“Por isso” apresenta a clareza da mensagem como consequência da revisão feita pela equipe.",
  pergunta: "Qual conectivo completa uma relação de oposição em: “O prazo era curto, ___ a equipe concluiu a tarefa.”?",
  opcoes: ["mas", "porque", "portanto"],
  resposta: 0,
  revisao: [
    "Conectivos ligam palavras, orações e partes do texto.",
    "Cada conectivo estabelece uma relação de sentido.",
    "A escolha adequada melhora a clareza e a progressão textual.",
  ],
  missao: "Crie três pares de frases e una cada par com um conectivo de oposição, causa ou conclusão.",
});
