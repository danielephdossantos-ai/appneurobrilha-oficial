import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-estado-nacao-independencias", titulo: "Estado, Nação e Independências Americanas", icone: "🗺️", bncc: ["EF08HI06", "EF08HI07"],
  tema: "conceitos políticos e diversidade das independências", conceito: "Estado, nação, território, governo e país são conceitos relacionados, mas diferentes. Eles ajudam a compreender por que independências americanas produziram fronteiras, governos e conflitos variados.",
  explicacao: "Estado é a organização política soberana; governo administra temporariamente; território é o espaço sob poder; nação envolve identidades e pertencimentos; país é um termo amplo. EUA, Haiti, América espanhola e Brasil tiveram protagonistas, estruturas populacionais e resultados territoriais próprios.",
  exemplo: "A independência não criou uma única nação hispano-americana: disputas regionais contribuíram para a formação de vários Estados e governos.",
  vocabulario: ["Estado", "nação", "território"], etapas: ["Definir os conceitos", "Identificar protagonistas", "Comparar governos", "Analisar fronteiras e populações"],
  questoes: [
    { pergunta: "Estado e governo significam exatamente a mesma coisa?", opcoes: ["Não, o governo administra o Estado", "Sim, sempre", "Estado é apenas população", "Governo é território"], correta: 0, explicacao: "Governos mudam; estruturas estatais podem permanecer." },
    { pergunta: "As independências americanas seguiram um único modelo?", opcoes: ["Não, tiveram processos e resultados diversos", "Sim, todas viraram monarquias", "Sim, sem conflitos", "Não alteraram governos"], correta: 0, explicacao: "Os processos variaram social e territorialmente." },
    { pergunta: "O que é território?", opcoes: ["Espaço sobre o qual se exerce poder", "Um partido político", "Somente uma cultura", "Um governo temporário"], correta: 0, explicacao: "Território envolve espaço e relações de poder." },
  ], missao: "Compare duas independências usando corretamente Estado, governo, nação e território.",
});
