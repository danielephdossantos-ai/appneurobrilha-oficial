import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula18 = criarAulaConsolidacao({
  slug: "aula-18-sintaxe-e-conectivos",
  titulo: "Sintaxe e Conectivos",
  icone: "🔗",
  bncc: ["EF06LP07"],
  tema: "Sintaxe e Conexões",
  conceito: "organização da oração e uso de conectivos",
  explicacao: "A oração organiza quem participa, o que acontece e as informações que completam a ideia. Conectivos como porque, mas, portanto e embora mostram relações de causa, oposição e conclusão.",
  exemplo: "A equipe terminou a pesquisa, portanto apresentou os resultados.",
  exemploAnalisado: "O conectivo portanto apresenta uma conclusão construída a partir da pesquisa terminada.",
  pergunta: "Qual conectivo mantém a ideia de conclusão?",
  opcoes: ["portanto", "mas", "porque"],
  resposta: 0,
  revisao: ["A oração precisa de organização para produzir sentido.", "Conectivos ligam ideias.", "Portanto indica conclusão; mas indica oposição; porque indica causa ou explicação."],
  missao: "Una dois pares de frases usando porque, mas ou portanto e explique sua escolha.",
});
